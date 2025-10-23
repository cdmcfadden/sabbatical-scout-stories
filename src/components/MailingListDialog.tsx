import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const mailingListSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }).max(100, { message: "First name must be less than 100 characters" }),
  lastName: z.string().trim().min(1, { message: "Last name is required" }).max(100, { message: "Last name must be less than 100 characters" }),
  country: z.string().trim().min(1, { message: "Country is required" }).max(100, { message: "Country must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  feedback: z.string().trim().max(1000, { message: "Feedback must be less than 1000 characters" }).optional(),
});

type MailingListFormData = z.infer<typeof mailingListSchema>;

const MailingListDialog = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<MailingListFormData>({
    resolver: zodResolver(mailingListSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
      email: '',
      feedback: '',
    },
  });

  const onSubmit = (data: MailingListFormData) => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
    
    toast({
      title: "Thank you for joining!",
      description: "We'll be in touch soon.",
    });
    
    form.reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="mt-6">
          Join Our Mailing List
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-background">
        <DialogHeader>
          <DialogTitle>Join Our Mailing List</DialogTitle>
          <DialogDescription>
            Stay updated with our latest news and developments.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="United States" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Any thoughts or feedback?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Share your thoughts with us..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default MailingListDialog;
