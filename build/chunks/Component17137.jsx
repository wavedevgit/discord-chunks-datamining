/** Chunk was on 8087 **/
/** chunk id: 17137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk635552 = require("./635552.js"),
  Chunk388032 = require("./388032.jsx");
let o = e => {
  let {
    product: t,
    onSuccess: n
  } = e, {
    handleUseNow: o,
    isApplying: s
  } = (0, a.W)({
    product: t,
    onSuccess: n
  });
  return (0, r.jsx)(i.Button, {
    variant: "primary",
    onClick: o,
    loading: s,
    text: l.intl.string(l.t.MAS7uK),
    fullWidth: true
  })
}