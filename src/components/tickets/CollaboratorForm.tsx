
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from 'lucide-react';

// Define schema for form validation
const collaboratorSchema = z.object({
  activityDescription: z.string().min(5, {
    message: "Activity description must be at least 5 characters."
  }),
  assigned: z.string().min(2, {
    message: "Assigned person's name is required."
  }),
  department: z.string().min(1, {
    message: "Department is required."
  }),
  comments: z.string().optional(),
});

type CollaboratorFormValues = z.infer<typeof collaboratorSchema>;

// Sample departments for dropdown
const departments = [
  "Customer Service",
  "Technical Support",
  "Billing",
  "Sales",
  "Marketing",
  "Product Development",
  "Management",
  "Legal",
  "Human Resources",
];

// Sample existing collaborators for demonstration
export const sampleCollaborators = [
  {
    id: 1,
    activityDescription: "Initial ticket review",
    assigned: "Jane Smith",
    department: "Customer Service",
    comments: "First contact with customer. Issue seems to be related to email access.",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
  },
  {
    id: 2,
    activityDescription: "Technical assessment",
    assigned: "Mike Johnson",
    department: "Technical Support",
    comments: "Verified email server status. Credentials need reset.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
];

interface CollaboratorFormProps {
  onAddCollaborator: (collaborator: any) => void;
  onCancel: () => void;
}

const CollaboratorForm: React.FC<CollaboratorFormProps> = ({ onAddCollaborator, onCancel }) => {
  const { toast } = useToast();
  
  const form = useForm<CollaboratorFormValues>({
    resolver: zodResolver(collaboratorSchema),
    defaultValues: {
      activityDescription: "",
      assigned: "",
      department: "",
      comments: "",
    },
  });

  const onSubmit = (data: CollaboratorFormValues) => {
    // Create a new collaborator with form data
    const newCollaborator = {
      id: Date.now(), // Simple unique ID for demo
      ...data,
      timestamp: new Date(),
    };

    // Call the parent component's handler
    onAddCollaborator(newCollaborator);
    
    // Show success toast
    toast({
      title: "Collaborator added",
      description: `${data.assigned} from ${data.department} has been added as a collaborator.`,
    });
    
    // Reset form
    form.reset();
    
    // Close form
    onCancel();
  };

  return (
    <div className="bg-white p-4 rounded-md border border-gray-200">
      <h3 className="text-md font-medium mb-4 flex items-center gap-2">
        <UserPlus className="h-4 w-4" />
        Add Collaborator
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="activityDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Activity Description</FormLabel>
                <FormControl>
                  <Input placeholder="Describe the activity..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="assigned"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assigned To</FormLabel>
                <FormControl>
                  <Input placeholder="Enter assignee name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comments</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Add any relevant comments..." 
                    {...field} 
                    className="min-h-[80px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              Add Collaborator
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CollaboratorForm;
