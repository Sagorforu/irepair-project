import Container from "@/components/Container";
import BatteryReplacement from "@/components/serviceTiles/BatteryReplacement";
import ChipReplacement from "@/components/serviceTiles/ChipReplacement";
import DataRecovery from "@/components/serviceTiles/DataRecovery";

const ServiceSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-between items-center">
        <h1>
          <span className="text-primary">Service</span> that we provide
        </h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          optio, explicabo illo placeat dolore molestias repellendus eveniet
          quae accusamus ipsum!
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BatteryReplacement />
        <ChipReplacement />
        <DataRecovery />
        <div className="bg-red-500 h-[415px] rounded-2xl  col-span-12"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServiceSection;
