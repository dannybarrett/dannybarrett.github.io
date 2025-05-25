import type { JSX } from "solid-js/jsx-runtime";

export default function Card({
  children,
  ...props
}: {
  children: JSX.Element;
  class?: string;
} & JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      class={`border border-foreground/50 bg-foreground/5 p-4 lg:p-6 rounded-lg ${props.class ?? ""}`}
    >
      {children}
    </div>
  );
}
