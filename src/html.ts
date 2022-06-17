import { html as h, render, TemplateResult, nothing } from "lit-html";

export function html(parts: TemplateStringsArray, ...args: any[]) {
    const result = h.call(null, parts, ...args);
    const { shadowDom } = html;
    html.shadowDom = false;

    result.render = (element: HTMLElement) => {
        if (shadowDom && !element.shadowRoot) {
            element.attachShadow({ mode: "open" });
        }

        const root = shadowDom ? element.shadowRoot : element;

        render(result, root);
    };

    return result;
}

html.shadowDom = false;
