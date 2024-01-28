import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";

export const useGetServices = () => {
  const servicesData = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    select: (data) => {
      const services = data?.data?.map((item) => ({
        id: item._id,
        name: item.name,
        description: item.description,
        price: item.price,
      }));
      return services;
    },
  });
  return servicesData;
};
