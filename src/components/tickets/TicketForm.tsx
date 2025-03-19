
import React, { useState } from 'react';
import { 
  MessageSquare, 
  ClipboardList, 
  Tag, 
  AlertTriangle, 
  Clock, 
  ArrowUp, 
  Calendar
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

// Define form schema with Zod
const formSchema = z.object({
  category: z.string().min(1, { message: "Please select a category" }),
  subcategory: z.string().min(1, { message: "Please select a subcategory" }),
  status: z.string().min(1, { message: "Please select a status" }),
  description: z.string().min(5, { message: "Description must be at least 5 characters" }),
  comments: z.string().optional(),
});

// Define subcategory options based on selected category
const subcategoryOptions = {
  hardware: ["Laptop", "Desktop", "Printer", "Network", "Other Hardware"],
  software: ["Email", "Operating System", "Application", "Security", "Other Software"],
  network: ["Internet", "Intranet", "VPN", "Wi-Fi", "Other Network"],
  account: ["Password Reset", "Access Request", "New Account", "Permissions", "Other Account"],
  other: ["General Inquiry", "Training", "Feedback", "Suggestion", "Other"]
};

const TicketForm: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      subcategory: "",
      status: "new",
      description: "",
      comments: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Ticket created successfully");
    form.reset();
    setSelectedCategory("");
  };

  // Update subcategory options when category changes
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    form.setValue("subcategory", "");
  };

  return (
    <Card className="w-full shadow-sm border-gray-200">
      <CardHeader className="bg-gray-50 border-b border-gray-100">
        <CardTitle className="text-lg flex items-center">
          <ClipboardList className="h-5 w-5 mr-2 text-mail-blue" />
          Create Support Ticket
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleCategoryChange(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="hardware">Hardware</SelectItem>
                        <SelectItem value="software">Software</SelectItem>
                        <SelectItem value="network">Network</SelectItem>
                        <SelectItem value="account">Account</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="subcategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subcategory</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={!selectedCategory}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subcategory" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {selectedCategory && 
                          subcategoryOptions[selectedCategory as keyof typeof subcategoryOptions]?.map((item) => (
                            <SelectItem key={item} value={item.toLowerCase().replace(/\s+/g, '-')}>
                              {item}
                            </SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your issue in detail..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Comments</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any additional information you'd like to provide..."
                      className="min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" className="bg-mail-blue hover:bg-blue-700">
                Create Ticket
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TicketForm;
