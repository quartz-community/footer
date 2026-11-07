import { describe, it, expect } from "vitest";

describe("Footer component", () => {
  it("exports a component constructor", async () => {
    const mod = await import("../src/components/Footer");
    expect(mod.default).toBeDefined();
    expect(typeof mod.default).toBe("function");
  });

  it("constructor returns a component with css and afterDOMLoaded", async () => {
    const mod = await import("../src/components/Footer");
    const Footer = mod.default;
    const component = Footer();
    component.afterDOMLoaded ??= "";
    expect(component).toBeDefined();
    expect(typeof component).toBe("function");
    expect(component.css).toBeDefined();
    expect(component.afterDOMLoaded).toBeDefined();
  });

  it("accepts links option without crashing", async () => {
    const mod = await import("../src/components/Footer");
    const Footer = mod.default;
    expect(() => Footer({ links: { GitHub: "https://github.com" } })).not.toThrow();
  });

  it("renders the message option as HTML below the Quartz line", async () => {
    const mod = await import("../src/components/Footer");
    type VNode = {
      props: { class?: string; children?: unknown; dangerouslySetInnerHTML?: { __html: string } };
    };
    const children = (opts: Parameters<typeof mod.default>[0]) => {
      const Footer = mod.default(opts) as unknown as (props: unknown) => VNode;
      const kids = Footer({ cfg: { locale: "en-US" } }).props.children as (VNode | null)[];
      return kids.filter((k): k is VNode => k !== null);
    };
    const message = 'Licensed under <a href="/license">CC BY 4.0</a>';
    const withMessage = children({ links: {}, message });
    expect(withMessage[1]?.props.class).toBe("footer-message");
    expect(withMessage[1]?.props.dangerouslySetInnerHTML?.__html).toBe(message);
    expect(children({ links: {} }).some((k) => k.props.class === "footer-message")).toBe(false);
  });
});
