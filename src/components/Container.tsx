import type{ ReactNode } from "react";
interface ContainerProp {
    children?: ReactNode;
    format: string;
}

function Container(prop:ContainerProp) {
    const formatOption : Record<string, string>={
        vertical:"flex flex-col gap-4",
        horizontal:"flex flex-row  flex-wrap gap-4",
        grid:"grid grid-cols-1 md:grid-cols-2 gap-4"
    }
  return (
    <div className={formatOption[prop.format]}>{prop.children}</div>
  )
}

export default Container