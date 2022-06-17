import { c, useRef, useEffect, useProp, DOMEvent } from "atomico";
import { html, useRender, ref } from "../src/lit-html";

function component() {
  const myRef = useRef();

  const [value, setValue] = useProp("value");

  useRender(() => html`<p>welcome</p>`);

  useEffect(() => {
    console.log(myRef.current);
  }, [myRef]);

  html.shadowDom = true;

  return html`<div ${ref(myRef)}>
    <h1>${value}</h1>
    <input
      .value=${value}
      @input=${(event: DOMEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
      }}
    />
    <input
      .value=${value}
      @input=${(event: DOMEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
      }}
    />
  </div>`;
}

component.props = {
  value: { type: String, value: "Content..." },
};

const Component = c(component);

customElements.define("my-component", Component);
