import { Ref } from "atomico";
import { describe, expect, it } from "vitest";
import { createHooks } from "atomico/test-hooks";
import { useRender } from "../src/hooks";
import { html } from "lit-html";
import { ref } from "../src/ref";

describe("useRender", () => {
    it("case", () => {
        const host = document.createElement("div");

        const hooks = createHooks(() => {}, host);

        hooks.load(() => useRender(() => html`<h1>welcome</h1>`));

        expect(host.innerHTML).toEqual(`<!----><h1>welcome</h1>`);
    });

    it("case ref", () => {
        const host = document.createElement("div");

        const hooks = createHooks(() => {}, host);

        const caseRef: Ref = {};

        hooks.load(() =>
            useRender(() => html`<h1 ${ref(caseRef)}>welcome</h1>`)
        );

        expect(caseRef.current).instanceOf(HTMLHeadingElement);
    });
});
