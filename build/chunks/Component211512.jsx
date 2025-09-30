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
    onClick: f
  } = t, b = a(), y = null == u ? true : u(), O = n(), g = null == c ? true : c(), E = null == d ? true : d();
  return (0, r.jsx)(i.x, {
    title: b,
    className: s.settingButtonContainer,
    children: (0, r.jsxs)("div", {
      className: s.settingButtonContent,
      children: [null != y && (0, r.jsx)(l.R, {
        type: l.g.DESCRIPTION,
        children: y
      }), (0, r.jsx)(o.zxk, {
        onClick: f,
        text: O,
        variant: g,
        disabled: E
      })]
    })
  })
}