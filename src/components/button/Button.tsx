import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface ButtonProps {
  label: string;
}

const buttonVariants = cva(
  "h-32 rounded-4 px-12 py-6 text-gray-0 bg-primary-4 hover:bg-primary-3 active:bg-primary-5",
  {
    variants: {
      variant: {
        outline: "border",
      },
    },
  }
);

export const Button = ({
  label,
}: ButtonProps & VariantProps<typeof buttonVariants>) => {
  return <button className={cn(buttonVariants())}>{label}</button>;
};
