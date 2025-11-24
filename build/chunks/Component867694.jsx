/** Chunk was on 46984 **/
/** chunk id: 867694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function o(e) {
  var t;
  let {
    node: n
  } = e, {
    useValue: o,
    setValue: a,
    useTitle: s,
    useSubtitle: c,
    useDisabled: u,
    useDisabledMessage: d,
    useBadge: f
  } = n, b = s(), y = null == c ? true : c(), p = o(), v = null != (t = null == u ? true : u()) && t, j = null == d ? true : d(), g = null == f ? true : f();
  return (0, r.jsxs)(i.X, {
    children: [(0, r.jsx)(l.rsf, {
      label: b,
      description: y,
      badge: g,
      checked: p,
      onChange: e => a(e),
      disabled: v
    }), v && null != j ? (0, r.jsx)(l.Wn, {
      messageType: l.QYI.WARNING,
      children: j
    }) : null]
  })
}