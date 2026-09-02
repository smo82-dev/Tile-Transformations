export function scrollToSection(id: string) {
  const section = document.getElementById(id);

  if (!section) {
    return;
  }

  const header = document.querySelector("header");
  const headerOffset = header?.getBoundingClientRect().height ?? 0;
  const targetTop = section.getBoundingClientRect().top + window.scrollY - headerOffset - 16;

  window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
  window.history.replaceState(null, "", `#${id}`);
}