import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center h-full justify-evenly">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/pe.svg"
            alt="Quechua"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Quechua
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/es.svg"
            alt="Español"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Español
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/br.svg"
            alt="Portugués"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Portugués
        </Button>
      </div>
    </footer>
  );
};
