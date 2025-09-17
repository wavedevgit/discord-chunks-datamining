/** Chunk was on 47129 **/
/** chunk id: 558731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk540863 = require("./540863.jsx"),
  Chunk534542 = require("./534542.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk524987 = require("./524987.js");

function s(e) {
  let {
    node: t
  } = e, {
    useLabel: n,
    useTitle: s,
    useSubtitle: u,
    useVariant: c,
    useDisabled: d,
    onClick: g
  } = t, f = s(), y = null == u ? true : u(), O = n(), E = null == c ? true : c(), v = null == d ? true : d();
  return (0, r.jsx)(i.x, {
    title: f,
    className: a.settingButtonContainer,
    children: (0, r.jsxs)("div", {
      className: a.settingButtonContent,
      children: [null != y && (0, r.jsx)(l.R, {
        type: l.g.DESCRIPTION,
        children: y
      }), (0, r.jsx)(o.zxk, {
        onClick: g,
        text: O,
        variant: E,
        disabled: v
      })]
    })
  })
}