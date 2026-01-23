/** Chunk was on 48587 **/
/** chunk id: 550880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => i
}), require("./747238.js"), require("./812715.js"), require("./866193.js");
var Chunk833291 = require("./833291.js"),
  Chunk998218 = require("./998218.js"),
  Chunk985018 = require("./985018.jsx");
let a = [Chunk833291.ts];

function i(e, t, n) {
  let r = false,
    i = e.replaceAll(l.A.URL_REGEX, e => {
      let t = a.some(t => null != t(e));
      return t && (r = true), t ? e : "`".concat(e, "`")
    });
  if (r) return i;
  let u = s.intl.formatToMarkdownString(s.t.dZJpdG, {
    applicationName: t.name,
    link: n
  });
  return "".concat(i, "\n\n").concat(u)
}