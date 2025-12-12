/** Chunk was on web.js **/
/** chunk id: 160871, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => o
});
let r = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
  i = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

function o(e) {
  if (Intl.Locale) {
    let t = new Intl.Locale(e).maximize(),
      n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
    if (n) return "rtl" === n.direction;
    if (t.script) return r.has(t.script)
  }
  let t = e.split("-")[0];
  return i.has(t)
}