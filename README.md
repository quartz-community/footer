# @quartz-community/footer

Renders a footer with a "Created with Quartz" message and configurable links.

## Installation

```bash
npx quartz plugin add github:quartz-community/footer
```

## Usage

```yaml title="quartz.config.yaml"
plugins:
  - source: github:quartz-community/footer
    enabled: true
    options:
      links:
        GitHub: https://github.com/jackyzha0/quartz
        Discord Community: https://discord.gg/cRFFHYye7t
```

To open every footer link (including the Quartz attribution) in a new tab:

```yaml title="quartz.config.yaml"
plugins:
  - source: github:quartz-community/footer
    enabled: true
    options:
      links:
        GitHub: https://github.com/jackyzha0/quartz
        Discord Community: https://discord.gg/cRFFHYye7t
      target: "_blank"
      rel: "noopener noreferrer"
```

For advanced use cases, you can override in TypeScript:

```ts title="quartz.ts (override)"
import * as ExternalPlugin from "./.quartz/plugins";

ExternalPlugin.Footer({
  links: {
    GitHub: "https://github.com/jackyzha0/quartz",
    "Discord Community": "https://discord.gg/cRFFHYye7t",
  },
  target: "_blank",
  rel: "noopener noreferrer",
});
```

## Configuration

| Option   | Type                     | Default     | Description                                                                                        |
| -------- | ------------------------ | ----------- | -------------------------------------------------------------------------------------------------- |
| `links`  | `Record<string, string>` | `{}`        | A map of link labels to their URLs to display in the footer.                                       |
| `target` | `string`                 | `undefined` | `target` attribute applied to every footer link, e.g. `"_blank"` to open links in a new tab.       |
| `rel`    | `string`                 | `undefined` | `rel` attribute applied to every footer link, e.g. `"noopener noreferrer"` with `target="_blank"`. |

## Layout

The footer component uses `position: footer` by default. You can override this in your `quartz.config.yaml`:

```yaml title="quartz.config.yaml"
plugins:
  - source: "@quartz-community/footer"
    enabled: true
    layout:
      position: footer
      priority: 50
```

To disable the footer, set `enabled: false`.

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/plugins/Footer) for more information.

## License

MIT
