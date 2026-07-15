import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    return (
      <div className="w-full flex flex-col space-y-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-semibold tracking-wide text-primary"
          >
            {label}
            {props.required && <span className="text-secondary ml-1">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[100px] w-full rounded-lg border border-primary/10 bg-bg-light px-4 py-3 text-sm text-primary placeholder:text-neutral-grey/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50 resize-y",
            error && "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
            className
          )}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <span
            id={`${textareaId}-error`}
            className="text-xs text-red-500 font-medium pl-1"
            role="alert"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
