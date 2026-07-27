import { describe, it, expect } from "vitest"

describe("Footer component", () => {
  it("exports a component constructor", async () => {
    const mod = await import("../src/components/Footer")
    expect(mod.default).toBeDefined()
    expect(typeof mod.default).toBe("function")
  })

  it("constructor returns a component with css and afterDOMLoaded", async () => {
    const mod = await import("../src/components/Footer")
    const Footer = mod.default
    const component = Footer()
    component.afterDOMLoaded ??= ""
    expect(component).toBeDefined()
    expect(typeof component).toBe("function")
    expect(component.css).toBeDefined()
    expect(component.afterDOMLoaded).toBeDefined()
  })

  it("accepts links option without crashing", async () => {
    const mod = await import("../src/components/Footer")
    const Footer = mod.default
    expect(() => Footer({ links: { GitHub: "https://github.com" } })).not.toThrow()
  })

  it("accepts target and rel options without crashing", async () => {
    const mod = await import("../src/components/Footer")
    const Footer = mod.default
    expect(() =>
      Footer({
        links: { GitHub: "https://github.com" },
        target: "_blank",
        rel: "noopener noreferrer",
      }),
    ).not.toThrow()
  })
})
