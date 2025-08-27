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
    onClick: _
  } = t, E = o(), N = null == u ? true : u(), T = n(), I = null == c ? true : c(), A = null == d ? true : d();
  return (0, i.jsx)(l.x, {
    title: E,
    className: a.settingButtonContainer,
    children: (0, i.jsxs)("div", {
      className: a.settingButtonContent,
      children: [null != N && (0, i.jsx)(r.R, {
        type: r.g.DESCRIPTION,
        children: N
      }), (0, i.jsx)(s.zxk, {
        onClick: _,
        text: T,
        variant: I,
        disabled: A
      })]
    })
  })
}