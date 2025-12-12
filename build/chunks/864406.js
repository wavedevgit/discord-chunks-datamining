/** Chunk was on web.js **/
/** chunk id: 864406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => d
});
var Chunk160871 = require("./160871.js"),
  Chunk473749 = require("./473749.js"),
  Chunk112683 = require("./112683.js");
let a = Symbol.for("react-aria.i18n.locale");

function s() {
  let e = "undefined" != typeof window && window[a] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([module])
  } catch {
    e = "en-US"
  }
  return {
    locale: module,
    direction: (0, Chunk160871.d)(module) ? "rtl" : "ltr"
  }
}
let l = s(),
  c = new Set;

function u() {
  for (let e of (l = s(), c)) module(l)
}

function d() {
  let e = (0, Chunk112683.Av)(),
    [t, n] = (0, Chunk473749.useState)(l);
  return ((0, Chunk473749.useEffect)(() => (0 === c.size && window.addEventListener("languagechange", u), c.add(require), () => {
    c.delete(require), 0 === c.size && window.removeEventListener("languagechange", u)
  }), []), module) ? {
    locale: "en-US",
    direction: "ltr"
  } : exports
}