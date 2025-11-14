/** Chunk was on 16985 **/
/** chunk id: 976713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk755721 = require("./755721.js"),
  Chunk550964 = require("./550964.jsx");

function i(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: i,
    useTitle: a,
    useSubtitle: c,
    useOptions: s
  } = t, u = a(), d = null == c ? true : c(), f = n(), b = s();
  return (0, r.jsx)(o.X, {
    children: (0, r.jsx)(l.Gu, {
      label: u,
      description: d,
      options: b,
      value: f,
      onChange: e => i(e.value)
    })
  })
}