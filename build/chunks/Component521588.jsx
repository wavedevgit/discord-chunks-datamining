/** Chunk was on 67564 **/
/** chunk id: 521588, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk483618 = require("./483618.js");
let a = e => {
  let {
    left: t,
    top: n = 0,
    right: l = 0,
    bottom: a,
    size: o = 8,
    alert: c = false,
    showBlurpleTreatment: u = false,
    maskColor: d = 2,
    additionalStyles: p
  } = e;
  return (0, r.jsx)("span", {
    className: i()(s.Om, {
      [s.xE]: c,
      [s.nB]: u,
      [s.GS]: 0 === d,
      [s.Pn]: 1 === d,
      [s.HP]: 2 === d,
      [s.gl]: 3 === d,
      [null != p ? p : ""]: true !== p
    }),
    style: {
      height: o,
      width: o,
      left: t,
      top: n,
      right: l,
      bottom: a
    }
  })
}