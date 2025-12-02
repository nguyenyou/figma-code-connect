interface ButtonProps {
  label: string
}

export const Button = ({ label }: ButtonProps) => {
  return <button className="h-32 rounded-4 px-12 py-6 text-gray-0 bg-primary-4 hover:bg-primary-3 active:bg-primary-5">{label}</button>
}
