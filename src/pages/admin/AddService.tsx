import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const queryClint = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClint.invalidateQueries({ queryKey: ["services"] });
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const serviceData = {
      name: serviceName,
      description: "Description of Product 1",
      devices: ["Device 1", "Device 2"],
      price: 99.99,
    };
    await mutateAsync(serviceData);
    console.log("done");
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 mr-5"
          type="text"
          onChange={(e) => setServiceName(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
