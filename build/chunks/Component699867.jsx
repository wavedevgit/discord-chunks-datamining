/** Chunk was on 85991 **/
/** chunk id: 699867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk98460 = require("./98460.js"),
  Chunk87454 = require("./87454.jsx");

function s(e) {
  let {
    items: t,
    onChange: n
  } = e, [s, o] = (0, i.Z)(), c = (0, r.useCallback)(e => {
    o(e), null == n || n(e)
  }, [o, n]);
  return (0, a.jsx)(a.Fragment, {
    children: t.filter(e => isNaN(Number(e))).map(e => (0, a.jsx)(l.Z, {
      content: e,
      onChange: c
    }, e))
  })
}