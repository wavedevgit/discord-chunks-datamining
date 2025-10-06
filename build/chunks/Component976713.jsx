/** Chunk was on 13608 **/
/** chunk id: 976713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk627773 = require("./627773.js");

function a(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: a,
    useTitle: s,
    useSubtitle: c,
    useOptions: u
  } = t, d = s(), f = null == c ? true : c(), m = n(), b = u();
  return (0, r.jsx)(o.xJW, {
    title: d,
    className: i.radioContainer,
    children: (0, r.jsxs)("div", {
      className: i.radioContent,
      children: [null != f && (0, r.jsx)(o.R94, {
        type: o.geA.DESCRIPTION,
        children: f
      }), (0, r.jsx)(l.Gu, {
        options: b,
        value: m,
        onChange: e => a(e.value)
      })]
    })
  })
}