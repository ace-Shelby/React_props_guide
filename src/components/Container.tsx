// Container.tsx — A layout wrapper that switches between vertical, horizontal, and grid layouts.
//
// LEARNING POINTS:
// - This component is a "layout component" — it controls HOW children are displayed
// - The `format` prop selects a CSS layout strategy
// - Record<string, string> maps format names to Tailwind layout classes
// - This is the same "children" pattern as Card, but focused on layout instead of styling

import type { ReactNode } from "react";

interface ContainerProp {
    children?: ReactNode;  // The components to lay out
    format: string;        // 'vertical' | 'horizontal' | 'grid'
}

function Container(prop: ContainerProp) {
    // Each format maps to a different Tailwind layout class
    const formatOption: Record<string, string> = {
        vertical: "flex flex-col gap-4",
        horizontal: "flex flex-row flex-wrap gap-4",
        grid: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }

    return (
        <div className={formatOption[prop.format]}>{prop.children}</div>
    )
}

export default Container