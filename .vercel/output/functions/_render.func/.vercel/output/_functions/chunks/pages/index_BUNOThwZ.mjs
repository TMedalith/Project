/* empty css                          */
import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderHead, j as renderSlot, h as createAstro, k as renderComponent, m as maybeRenderHead } from '../astro_DcP4r1Hm.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Tatiana/galactic-group/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script src="/src/scripts/script.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Crypto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-white"> <div class=" bg-gradient-to-br from-orange-100 to-orange-300 p-8 rounded-lg shadow-xl w-full max-w-3xl md:w-3/4 lg:w-1/2"> <h1 class="text-3xl font-bold text-center mb-6 text-orange-500">
Crypto Application
</h1> <form id="cryptoForm"> <div class="mb-4"> <label for="option1" class="block text-gray-700 font-medium mb-2">Action:</label> <select id="option1" class="w-full p-2.5 outline-none rounded-md focus:ring focus:ring-orange-200 bg-white text-gray-700"> <option value="1">Encrypt</option> <option value="2">Decrypt</option> </select> </div> <div class="mb-4"> <label for="option2" class="block  text-gray-700 font-medium mb-2">Key Type:</label> <select id="option2" class="w-full p-2.5 outline-none rounded-md focus:ring focus:ring-orange-200 bg-white text-gray-700"> <option value="1">Private</option> <option value="2">Public</option> </select> </div> <div class="grid grid-cols-2 gap-4 mb-4"> <div> <label for="key1" class="block text-gray-700 font-medium mb-2">Key Part 1:</label> <input type="number" id="key1" class="w-full p-2.5 outline-none   rounded-md focus:ring focus:ring-orange-200 bg-white text-gray-700" required> </div> <div> <label for="key2" class="block text-gray-700 font-medium mb-2">Key Part 2:</label> <input type="number" id="key2" class="w-full p-2.5  outline-none rounded-md focus:ring focus:ring-orange-200 bg-white text-gray-700" required> </div> </div> <div class="mb-4"> <label for="message" class="block text-gray-700 font-medium mb-2">Message:</label> <textarea id="message" class="w-full p-2.5 border outline-none rounded-md  focus:ring focus:ring-orange-200 bg-white text-gray-800" rows="1" required></textarea> </div> <button type="submit" class="w-full p-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md focus:outline-none focus:ring focus:ring-orange-200">
Process
</button> </form> <div id="results" class="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200"></div> <div id="char-mapping-container" class="flex flex-wrap gap-4 items-center mt-4"></div> </div> </div> ` }));
}, "C:/Users/Tatiana/galactic-group/src/pages/index.astro", void 0);

const $$file = "C:/Users/Tatiana/galactic-group/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
