/** Chunk was on web.js **/
/** chunk id: 62792, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => d
});
var Chunk774498 = require("./774498.js"),
  Chunk647438 = require("./647438.js"),
  Chunk145937 = require("./145937.js");
let o = Symbol.for("react-aria.i18n.locale");

function s() {
  let e = "undefined" != typeof window && window[o] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([module])
  } catch {
    e = "en-US"
  }
  return {
    locale: module,
    direction: (0, Chunk774498.d)(module) ? "rtl" : "ltr"
  }
}
let l = s(),
  c = new Set;

function u() {
  for (let e of (l = s(), c)) module(l)
}

function d() {
  let e = (0, Chunk145937.Av)(),
    [t, n] = (0, Chunk647438.useState)(l);
  return ((0, Chunk647438.useEffect)(() => (0 === c.size && window.addEventListener("languagechange", u), c.add(require), () => {
    c.delete(require), 0 === c.size && window.removeEventListener("languagechange", u)
  }), []), module) ? {
    locale: "en-US",
    direction: "ltr"
  } : exports
}