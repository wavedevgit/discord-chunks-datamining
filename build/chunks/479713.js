/** Chunk was on 83098 **/
/** chunk id: 479713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => i
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk830121 = require("./830121.js"),
  Chunk591759 = require("./591759.js"),
  Chunk388032 = require("./388032.jsx");
let a = [Chunk830121.el];

function i(e, t, n) {
  let l = false,
    i = e.replaceAll(r.Z.URL_REGEX, e => {
      let t = a.some(t => null != t(e));
      return t && (l = true), t ? e : "`".concat(e, "`")
    });
  if (l) return i;
  let u = s.intl.formatToMarkdownString(s.t.dZJpdG, {
    applicationName: t.name,
    link: n
  });
  return "".concat(i, "\n\n").concat(u)
}