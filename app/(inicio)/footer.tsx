import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center h-full justify-center">
        <Button size="lg" variant="ghost" className="w-full">
          Aprende Quechua Chanka
        </Button>
      </div>
    </footer>
  );
};
