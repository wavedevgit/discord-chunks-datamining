/** Chunk was on 47129 **/
/** chunk id: 976713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk465919 = require("./465919.js");

function s(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: s,
    useTitle: a,
    useSubtitle: u,
    useOptions: c
  } = t, d = a(), f = null == u ? true : u(), g = n(), y = c();
  return (0, r.jsx)(l.xJW, {
    title: d,
    className: o.radioContainer,
    children: (0, r.jsxs)("div", {
      className: o.radioContent,
      children: [null != f && (0, r.jsx)(l.R94, {
        type: l.geA.DESCRIPTION,
        children: f
      }), (0, r.jsx)(i.Gu, {
        options: y,
        value: g,
        onChange: e => s(e.value)
      })]
    })
  })
}