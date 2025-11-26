/** Chunk was on 88569 **/
/** chunk id: 976713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function o(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: o,
    useTitle: a,
    useSubtitle: s,
    useOptions: c
  } = t, u = a(), d = null == s ? true : s(), f = n(), p = c();
  return (0, r.jsx)(i.X, {
    children: (0, r.jsx)(l.FXm, {
      label: u,
      description: d,
      options: p,
      value: f,
      onChange: e => o(e)
    })
  })
}