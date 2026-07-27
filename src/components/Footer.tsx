import { readFileSync } from "fs";
import { join } from "path";
import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import { i18n } from "../i18n";
import style from "./styles/footer.scss";

function getQuartzVersion(): string {
  try {
    const pkg = JSON.parse(readFileSync(join(process.cwd(), "package.json"), "utf-8"));
    return pkg.version ?? "";
  } catch {
    return "";
  }
}

export interface FooterOptions {
  links: Record<string, string>;
  /** `target` attribute applied to every footer link, e.g. `"_blank"` to open links in a new tab. Omitted by default. */
  target?: string;
  /** `rel` attribute applied to every footer link, e.g. `"noopener noreferrer"` when using `target="_blank"`. Omitted by default. */
  rel?: string;
}

export default ((opts?: FooterOptions) => {
  const version = getQuartzVersion();
  const target = opts?.target;
  const rel = opts?.rel;

  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear();
    const links = opts?.links ?? [];
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg?.locale ?? "en-US").components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/" target={target} rel={rel}>
            Quartz{version ? ` v${version}` : ""}
          </a>{" "}
          &copy; {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link} target={target} rel={rel}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    );
  };

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
