import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { Achievements } from "@/components/index/Achements";
// import { Shareholders } from "@/components/index/Shareholders";
// import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <Achievements />
      <div className="grid grid-cols-2"></div>
      {/* <Shareholders /> */}

    </div>
  );
}




function AppCard() {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}

