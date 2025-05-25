import type { JSX } from "astro/jsx-runtime";
import { createSignal } from "solid-js";
import menu from "../assets/menu.svg";

export default function Nav(props: { pathname: string }) {
  const { pathname } = props;
  const [open, setOpen] = createSignal(false);

  function Link({ href, children }: { href: string; children: JSX.Element }) {
    return (
      <a
        href={href}
        class={`${pathname === href ? "underline underline-offset-4 decoration-2 decoration-primary" : "hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-primary/50"}`}
      >
        {children}
      </a>
    );
  }
  return (
    <nav class="p-5 lg:p-8 flex justify-end lg:justify-center">
      <button class="lg:hidden" onClick={() => setOpen(!open())}>
        <img src={menu.src} alt="Logo" class="dark:invert" />
      </button>
      <div
        class={`${open() ? "block" : "hidden"} lg:block absolute lg:relative top-0 left-0 bg-background lg:bg-transparent w-4/5 lg:w-auto h-screen lg:h-auto p-5 lg:p-0 shadow-sm lg:shadow-none z-50`}
      >
        <ul class="text-lg flex flex-col lg:flex-row gap-8 lg:gap-32 lg:justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/my-work">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
