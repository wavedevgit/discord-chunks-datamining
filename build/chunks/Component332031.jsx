/** Chunk was on 70675 **/
/** chunk id: 332031, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk655922 = require("./655922.js"),
  Chunk158776 = require("./158776.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, n) {
  let t = (0, i.e7)([u.Z], () => (0, a.Z)(u.Z.findActivity(e, e => e.type === o.IIU.STREAMING)), [e]);
  return null == t ? null : (0, l.jsx)(r.sNh, {
    id: "watch-stream",
    label: s.intl.string(s.t["7Xq/nV"]),
    action: () => {
      null == n || n(), window.open(t, "_blank")
    }
  })
}