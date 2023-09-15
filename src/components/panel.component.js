import classNames from "classnames";

function Panel({ children, className, ...otherProps }) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div className={finalClassNames} {...otherProps}>
      {children}
    </div>
  );
}

export default Panel;
