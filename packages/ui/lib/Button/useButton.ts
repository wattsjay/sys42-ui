import { cn } from "@sys42/utils";

import { BaseButtonProps, useBaseButton } from "./useBaseButton";

import styles from "./styles.module.css";

// DOC: Props that are specific to the styled version of the button can be added at this point.
export type ButtonProps = BaseButtonProps & {
  variant?: "primary";
  size?: "lg";
};

export function useButton<TagName extends HTMLElementTagName>(
  options: UseComponentOptions<ButtonProps, TagName>,
) {
  const { variant, size, ...baseProps } = options.props;

  return useBaseButton(
    {
      ...options,
      props: baseProps satisfies ExactProps<BaseButtonProps, ButtonProps>,
    },
    (draft) => {
      draft.elementProps.className = cn(
        draft.elementProps.className,
        variant === "primary" && styles.button_primary,
        size === "lg" && styles.button_lg,
        styles.button,
      );
    },
  );
}
