/** Chunk was on 75685 **/
/** chunk id: 976713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk755721 = require("./755721.js");

function o(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: o,
    useTitle: i,
    useSubtitle: a,
    useOptions: s
  } = t, c = i(), u = null == a ? true : a(), d = n(), f = s();
  return (0, r.jsx)(l.Gu, {
    label: c,
    description: u,
    options: f,
    value: d,
    onChange: e => o(e.value)
  })
}