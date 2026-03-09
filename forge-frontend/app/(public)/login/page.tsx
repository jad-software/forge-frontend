"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

export default function Login() {
  const params = useSearchParams();

  const fired = useRef(false);

  useEffect(() => {
    const error = params.get("error");

    if (!fired.current && error === "not-authenticated") {
      toast.warning(
        "😵 Usuário não está logado! Por favor, realize o Login no Sistema.",
      );
      fired.current = true;
    }
  }, [params]);

  return (
    <main className="w-screen h-screen bg-[#141414] flex">
      <section className="px-10 flex flex-col min-w-3/7 items-start justify-center bg-linear-to-r from-[#520A66] to-[#141414] gap-1">
        <h1 className="text-4xl">Login</h1>
        <form className="flex flex-col gap-2 py-3">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" />
          <label className="text-sm" htmlFor="password">
            Senha
          </label>
          <input type="password" name="password" id="password" />
          <button type="submit">Entrar</button>
        </form>
        <a>Esqueci minha senha</a>
      </section>
      <section className="bg-yellow-500">{/* <Image /> */}</section>
    </main>
  );
}
