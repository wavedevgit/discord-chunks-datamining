/** Chunk was on 62191 **/
/** chunk id: 976713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js");

function o(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: o,
    useTitle: a,
    useSubtitle: c,
    useOptions: s
  } = t, u = a(), d = null == c ? true : c(), f = n(), b = s();
  return (0, r.jsx)(i.Kqy, {
    padding: {
      left: 12,
      right: 12
    },
    children: (0, r.jsx)(l.Gu, {
      label: u,
      description: d,
      options: b,
      value: f,
      onChange: e => o(e.value)
    })
  })
}