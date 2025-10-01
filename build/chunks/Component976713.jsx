/** Chunk was on 59739 **/
/** chunk id: 976713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk465919 = require("./465919.js");

function a(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: a,
    useTitle: s,
    useSubtitle: c,
    useOptions: u
  } = t, d = s(), f = null == c ? true : c(), b = n(), m = u();
  return (0, r.jsx)(l.xJW, {
    title: d,
    className: i.radioContainer,
    children: (0, r.jsxs)("div", {
      className: i.radioContent,
      children: [null != f && (0, r.jsx)(l.R94, {
        type: l.geA.DESCRIPTION,
        children: f
      }), (0, r.jsx)(o.Gu, {
        options: m,
        value: b,
        onChange: e => a(e.value)
      })]
    })
  })
}