import { Ref } from "atomico";
import { nothing } from "lit-html";
import { directive, Directive, Part } from "lit-html/directive.js";

class RefDirective extends Directive {
    prev: Ref;
    render(ref: Ref) {
        return nothing;
    }
    update(part: Part, [ref]: any[]) {
        if ("element" in part) {
            if (this.prev != ref) {
                ref.current = part.element;
                this.prev = ref;
            }
        }
        return nothing;
    }
}

export const ref = directive(RefDirective);
