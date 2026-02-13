import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import { i18n } from "../i18n";
import style from "./styles/footer.scss";

export interface FooterOptions {
  links: Record<string, string>;
}

export default ((opts?: FooterOptions) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear();
    const links = opts?.links ?? [];
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg?.locale ?? "en-US").components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz</a> &copy; {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    );
  };

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
