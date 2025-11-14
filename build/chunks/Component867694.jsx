/** Chunk was on 16985 **/
/** chunk id: 867694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => o
});
var Chunk951288 = require("./951288.js"),
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
  } = n, b = c(), p = null == s ? true : s(), y = o(), j = null != (t = null == u ? true : u()) && t, m = null == d ? true : d(), v = null == f ? true : f();
  return (0, r.jsxs)(i.X, {
    children: [(0, r.jsx)(l.rsf, {
      label: b,
      description: p,
      badge: v,
      checked: y,
      onChange: e => a(e),
      disabled: j
    }), j && null != m ? (0, r.jsx)(l.Wn, {
      messageType: l.QYI.WARNING,
      children: m
    }) : null]
  })
}