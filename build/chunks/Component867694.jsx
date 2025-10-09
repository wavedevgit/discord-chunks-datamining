/** Chunk was on 75685 **/
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
  } = n, d = a(), f = null == s ? true : s(), b = o(), m = null != (t = null == c ? true : c()) && t, p = null == u ? true : u();
  return (0, r.jsxs)(l.Kqy, {
    children: [(0, r.jsx)(l.rsf, {
      label: d,
      description: f,
      checked: b,
      onChange: e => i(e),
      disabled: m
    }), m && null != p ? (0, r.jsx)(l.Wn, {
      messageType: l.QYI.WARNING,
      children: p
    }) : null]
  })
}