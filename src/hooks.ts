import { Ref, useHost, useMemo } from "atomico";
import { render, TemplateResult } from "lit-html";

export function useRender(callback: () => TemplateResult, args?: any[]) {
    const host = useHost();

    useMemo(() => {
        render(callback(), host.current);
    }, args);
}
