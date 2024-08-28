import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[300px] h-[300px] lg:w-[624px] lg:h-[624px] mb-8 lg:mb-0">
        <Image src="/logo-Aprendequechua.svg" alt="logo-main" fill />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Aprende, Practica y Domina los idiomas dominantes en America del Sur
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[350px] h-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                fallbackRedirectUrl="/aprende"
                signInFallbackRedirectUrl="/aprende"
              >
                <Button size="lg" variant="primary" className="w-full">
                  Empieza
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                fallbackRedirectUrl="/aprende"
                signUpFallbackRedirectUrl="/aprende"
              >
                <Button size="lg" variant="secondaryOutline" className="w-full">
                  Ya tengo una cuenta
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button size="lg" variant="primary" className="w-full" asChild>
                <Link href="/aprende">Continua Aprendiendo</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
