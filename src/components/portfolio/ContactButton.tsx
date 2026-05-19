interface ContactButtonProps {
  size?: "md" | "lg";
  label?: string;
}

export function ContactButton({ size = "md", label = "Contact Me" }: ContactButtonProps) {
  const sizing =
    size === "lg"
      ? "px-12 py-5 sm:px-14 sm:py-6 md:px-16 md:py-7 text-sm sm:text-base md:text-lg"
      : "px-10 py-4 sm:px-12 sm:py-5 md:px-14 md:py-5 text-xs sm:text-sm md:text-base";

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] ${sizing}`}
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid #ffffff",
        outlineOffset: "-3px",
      }}
    >
      {label}
    </button>
  );
}
