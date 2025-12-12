/** Chunk was on 88499 **/
/** chunk id: 699867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk98460 = require("./98460.js"),
  Chunk87454 = require("./87454.jsx");

function o(e) {
  let {
    items: t,
    onChange: n
  } = e, [o, c] = (0, l.Z)(), d = (0, r.useCallback)(e => {
    c(e), null == n || n(e)
  }, [c, n]);
  return (0, a.jsx)(i.Kqy, {
    gap: 16,
    children: t.filter(e => isNaN(Number(e))).map(e => (0, a.jsx)(s.Z, {
      content: e,
      onChange: d
    }, e))
  })
}