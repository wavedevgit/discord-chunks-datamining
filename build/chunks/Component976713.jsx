/** Chunk was on 46984 **/
/** chunk id: 976713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js");

function i(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: i,
    useTitle: o,
    useSubtitle: a,
    useOptions: s
  } = t, c = o(), u = null == a ? true : a(), d = n(), f = s();
  return (0, r.jsx)(l.Kqy, {
    padding: {
      left: 12,
      right: 12
    },
    children: (0, r.jsx)(l.FXm, {
      label: c,
      description: u,
      options: f,
      value: d,
      onChange: e => i(e)
    })
  })
}