/** Chunk was on web.js **/
/** chunk id: 314739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => d
});
var Chunk909144 = require("./909144.js"),
  Chunk64700 = require("./64700.js"),
  Chunk341221 = require("./341221.js");
let s = Symbol.for("react-aria.i18n.locale");

function o() {
  let e = "u" > typeof window && window[s] || "u" > typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e])
  } catch {
    e = "en-US"
  }
  return {
    locale: e,
    direction: (0, r.V)(e) ? "rtl" : "ltr"
  }
}
let l = o(),
  c = new Set;

function u() {
  for (let e of (l = o(), c)) e(l)
}

function d() {
  let e = (0, a.wR)(),
    [t, n] = (0, i.useState)(l);
  return ((0, i.useEffect)(() => (0 === c.size && window.addEventListener("languagechange", u), c.add(n), () => {
    c.delete(n), 0 === c.size && window.removeEventListener("languagechange", u)
  }), []), e) ? {
    locale: "en-US",
    direction: "ltr"
  } : t
}