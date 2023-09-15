import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  shadow,
  ...otherProps
}) {
  const classes = twMerge(
    className("flex items-center px-3 py-2 border-solid border", {
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "drop-shadow-lg": shadow,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );
  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVairationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;