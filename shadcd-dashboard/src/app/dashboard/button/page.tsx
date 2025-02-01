"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, MailOpen } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full flex flex-wrap justify-start gap-3">
      <Button>default</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"success"}>success</Button>{" "}
      {/*la variante success la cree yo, desde el componente Button de ui*/}
      <Button disabled>disabled</Button>
      <Button onClick={() => console.log("clicked")}>Click me</Button>
      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>
      <Button>
        <MailOpen /> Login with Email
      </Button>
    </div>
  );
}
