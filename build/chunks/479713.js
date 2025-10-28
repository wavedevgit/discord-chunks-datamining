/** Chunk was on 83098 **/
/** chunk id: 479713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => s
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk830121 = require("./830121.js"),
  Chunk591759 = require("./591759.js"),
  Chunk388032 = require("./388032.jsx");
let i = [Chunk830121.el];

function s(e, t, n) {
  let r = false,
    s = e.replaceAll(l.Z.URL_REGEX, e => {
      let t = i.some(t => null != t(e));
      return t && (r = true), t ? e : "`".concat(e, "`")
    });
  if (r) return s;
  let u = a.intl.formatToMarkdownString(a.t.dZJpdG, {
    applicationName: t.name,
    link: n
  });
  return "".concat(s, "\n\n").concat(u)
}