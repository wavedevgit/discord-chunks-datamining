/** Chunk was on 75685 **/
/** chunk id: 867694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function i(e) {
  var t;
  let {
    node: n
  } = e, {
    useValue: i,
    setValue: a,
    useTitle: s,
    useSubtitle: c,
    useDisabled: u,
    useDisabledMessage: d
  } = n, f = s(), b = null == c ? true : c(), m = i(), v = null != (t = null == u ? true : u()) && t, p = null == d ? true : d();
  return (0, r.jsxs)(o.X, {
    children: [(0, r.jsx)(l.rsf, {
      label: f,
      description: b,
      checked: m,
      onChange: e => a(e),
      disabled: v
    }), v && null != p ? (0, r.jsx)(l.Wn, {
      messageType: l.QYI.WARNING,
      children: p
    }) : null]
  })
}