/** Chunk was on 13608 **/
/** chunk id: 867694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function o(e) {
  var t;
  let {
    node: n
  } = e, {
    useValue: o,
    setValue: i,
    useTitle: a,
    useSubtitle: s,
    useDisabled: c,
    useDisabledMessage: u
  } = n, d = a(), f = null == s ? true : s(), m = o(), b = null != (t = null == c ? true : c()) && t, j = null == u ? true : u();
  return (0, r.jsxs)(l.Kqy, {
    children: [(0, r.jsx)(l.rsf, {
      label: d,
      description: f,
      checked: m,
      onChange: e => i(e),
      disabled: b
    }), b && null != j ? (0, r.jsx)(l.Wn, {
      messageType: l.QYI.WARNING,
      children: j
    }) : null]
  })
}