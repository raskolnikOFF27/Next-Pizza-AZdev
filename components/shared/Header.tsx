import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => (
  <header className={cn("border border-b", className)}>
    <Container className="flex items-center justify-between py-8">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="logo" width={35} height={35} />
        <div className="ml-4">
          <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
          <p className="text-sm text-gray-400 leading-3">Вкусней уже некуда</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline">Войти</Button>
      </div>
    </Container>
  </header>
);
