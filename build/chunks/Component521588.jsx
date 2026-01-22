/** Chunk was on 97492 **/
/** chunk id: 521588, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk483618 = require("./483618.js");
let s = e => {
  let {
    left: t,
    top: n = 0,
    right: l = 0,
    bottom: s,
    size: o = 8,
    alert: c = false,
    showBlurpleTreatment: u = false,
    maskColor: d = 2,
    additionalStyles: f
  } = e;
  return (0, r.jsx)("span", {
    className: i()(a.Om, {
      [a.xE]: c,
      [a.nB]: u,
      [a.GS]: 0 === d,
      [a.Pn]: 1 === d,
      [a.HP]: 2 === d,
      [a.gl]: 3 === d,
      [null != f ? f : ""]: true !== f
    }),
    style: {
      height: o,
      width: o,
      left: t,
      top: n,
      right: l,
      bottom: s
    }
  })
}