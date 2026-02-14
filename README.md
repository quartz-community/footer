# @quartz-community/footer

Renders a footer with a "Created with Quartz" message and configurable links.

## Installation

```bash
npx quartz plugin add github:quartz-community/footer
```

## Usage

```ts
// quartz.layout.ts
import * as Plugin from "./.quartz/plugins";

// Add to your layout
Plugin.Footer({
  links: {
    GitHub: "https://github.com/quartz-community",
  },
});
```

## Configuration

| Option  | Type                     | Default | Description                                                  |
| ------- | ------------------------ | ------- | ------------------------------------------------------------ |
| `links` | `Record<string, string>` | `{}`    | A map of link labels to their URLs to display in the footer. |

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/) for more information.

## License

MIT
