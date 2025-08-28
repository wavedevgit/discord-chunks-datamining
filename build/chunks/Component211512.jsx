/** Chunk was on 47129 **/
/** chunk id: 211512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk540863 = require("./540863.jsx"),
  Chunk534542 = require("./534542.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk188639 = require("./188639.js");

function a(e) {
  let {
    node: t
  } = e, {
    useLabel: n,
    useTitle: a,
    useSubtitle: u,
    useVariant: c,
    useDisabled: d,
    onClick: _
  } = t, E = a(), f = null == u ? true : u(), N = n(), T = null == c ? true : c(), g = null == d ? true : d();
  return (0, i.jsx)(r.x, {
    title: E,
    className: s.settingButtonContainer,
    children: (0, i.jsxs)("div", {
      className: s.settingButtonContent,
      children: [null != f && (0, i.jsx)(l.R, {
        type: l.g.DESCRIPTION,
        children: f
      }), (0, i.jsx)(o.zxk, {
        onClick: _,
        text: N,
        variant: T,
        disabled: g
      })]
    })
  })
}