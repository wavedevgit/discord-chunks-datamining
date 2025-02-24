/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(973361),
  i = n(627420);
n(211604);
let o = new i.ZP({
  initialLocale: r.parse(document.cookie).locale,
  getMessages: e => n(292516)("./".concat(e)),
  getLanguages: () => n(34859)
});
o.addListener("locale", e => {
  document.cookie = "locale=".concat(e, ";path=/")
});
let a = o