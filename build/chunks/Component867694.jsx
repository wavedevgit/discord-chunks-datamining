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
  } = n, p = s(), b = null == c ? true : c(), y = o(), v = null != (t = null == u ? true : u()) && t, g = null == d ? true : d(), h = null == f ? true : f();
  return (0, r.jsxs)(i.X, {
    children: [(0, r.jsx)(l.rsf, {
      label: p,
      description: b,
      badge: h,
      checked: y,
      onChange: e => a(e),
      disabled: v
    }), v && null != g ? (0, r.jsx)(l.Wn, {
      messageType: l.QYI.WARNING,
      children: g
    }) : null]
  })
}