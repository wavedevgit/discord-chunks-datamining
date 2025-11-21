/** Chunk was on 16985 **/
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
    useTitle: c,
    useSubtitle: s,
    useDisabled: u,
    useDisabledMessage: d,
    useBadge: f
  } = n, b = c(), y = null == s ? true : s(), p = o(), v = null != (t = null == u ? true : u()) && t, m = null == d ? true : d(), j = null == f ? true : f();
  return (0, r.jsxs)(i.X, {
    children: [(0, r.jsx)(l.rsf, {
      label: b,
      description: y,
      badge: j,
      checked: p,
      onChange: e => a(e),
      disabled: v
    }), v && null != m ? (0, r.jsx)(l.Wn, {
      messageType: l.QYI.WARNING,
      children: m
    }) : null]
  })
}