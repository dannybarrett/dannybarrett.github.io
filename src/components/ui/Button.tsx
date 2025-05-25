import type { JSX } from "solid-js/jsx-runtime";

export default function Button({
  children,
  variant = "",
  size = "",
  ...props
}: {
  children: JSX.Element;
  variant?: string;
  size?: string;
} & JSX.HTMLAttributes<HTMLButtonElement>) {
  let variantStyle = "";
  let sizeStyle = "";

  switch (variant) {
    case "outline":
      variantStyle =
        "border border-primary/80 hover:bg-primary/80 text-primary hover:text-background";
      break;
    default:
      variantStyle = "bg-primary hover:bg-primary/80 text-white";
  }

  switch (size) {
    case "icon":
      sizeStyle = "p-2";
      break;
    default:
      sizeStyle = "p-2.5 px-4";
  }

  return (
    <button
      class={`${variantStyle} ${sizeStyle} rounded-lg transition-colors hover:cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}
