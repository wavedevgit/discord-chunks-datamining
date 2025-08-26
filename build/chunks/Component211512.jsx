/** Chunk was on 76210 **/
/** chunk id: 211512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk540863 = require("./540863.jsx"),
  Chunk534542 = require("./534542.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk188639 = require("./188639.js");

function o(e) {
  let {
    node: t
  } = e, {
    useLabel: n,
    useTitle: o,
    useSubtitle: u,
    useVariant: c,
    useDisabled: d,
    onClick: T
  } = t, O = o(), f = null == u ? true : u(), N = n(), I = null == c ? true : c(), E = null == d ? true : d();
  return (0, l.jsx)(i.x, {
    title: O,
    className: a.settingButtonContainer,
    children: (0, l.jsxs)("div", {
      className: a.settingButtonContent,
      children: [null != f && (0, l.jsx)(r.R, {
        type: r.g.DESCRIPTION,
        children: f
      }), (0, l.jsx)(s.zxk, {
        onClick: T,
        text: N,
        variant: I,
        disabled: E
      })]
    })
  })
}