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
    useTitle: c,
    useSubtitle: s,
    useDisabled: u,
    useDisabledMessage: d
  } = n, f = c(), b = null == s ? true : s(), p = i(), y = null != (t = null == u ? true : u()) && t, j = null == d ? true : d();
  return (0, r.jsxs)(l.X, {
    children: [(0, r.jsx)(o.rsf, {
      label: f,
      description: b,
      checked: p,
      onChange: e => a(e),
      disabled: y
    }), y && null != j ? (0, r.jsx)(o.Wn, {
      messageType: o.QYI.WARNING,
      children: j
    }) : null]
  })
}