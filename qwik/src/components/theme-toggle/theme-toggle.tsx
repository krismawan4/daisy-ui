import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";

const themes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro",
  "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel",
  "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business",
  "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset",
  "caramellatte", "abyss", "silk"
];

export default component$(() => {
  const currentTheme = useSignal("light");

  const setTheme = $((theme: string) => {
    currentTheme.value = theme;
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  });

  useVisibleTask$(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      currentTheme.value = savedTheme;
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = systemPrefersDark ? "dark" : "light";
      currentTheme.value = defaultTheme;
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  });

  return (
    <div class="dropdown dropdown-end">
      <div tabindex={0} role="button" class="btn btn-ghost">
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM21 12a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5 12a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM7.05 16.95a1 1 0 001.414 0l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 000 1.414zM16.95 7.05a1 1 0 001.414 0l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 000 1.414zM16.95 16.95a1 1 0 00-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 000 1.414zM7.05 7.05a1 1 0 00-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 000 1.414z" />
        </svg>
      </div>
      <ul tabindex={0} class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 max-h-96 overflow-y-auto">
        {themes.map((theme) => (
          <li key={theme}>
            <button 
              class={`gap-3 px-2 ${currentTheme.value === theme ? "[&_svg]:visible" : ""}`}
              onClick$={() => setTheme(theme)}
            >
              <div data-theme={theme} class="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                <div class="bg-base-content size-1 rounded-full"></div>
                <div class="bg-primary size-1 rounded-full"></div>
                <div class="bg-secondary size-1 rounded-full"></div>
                <div class="bg-accent size-1 rounded-full"></div>
              </div>
              <div class="w-32 truncate">{theme}</div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                class={`h-3 w-3 shrink-0 ${currentTheme.value === theme ? "visible" : "invisible"}`}
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});