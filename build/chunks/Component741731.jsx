/** Chunk was on 46746 **/
/** chunk id: 741731, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk504710 = require("./504710.jsx"),
  Chunk703259 = require("./703259.js");

function a(e) {
  let {
    onClose: t
  } = e, {
    analyticsLocations: r
  } = (0, l.ZP)(s.Z.GO_LIVE_MODAL_V2);
  return (0, n.jsx)(i.sY7, {
    options: [{
      name: "SD",
      value: "sd"
    }, {
      name: "HD",
      value: "hd",
      className: c.premiumOption
    }],
    className: c.selector,
    value: "sd",
    look: "pill",
    onChange: function(e) {
      "hd" === e.value && (0, o.E)({
        analyticsLocation: null == r ? true : r[0],
        onClose: t
      })
    }
  })
}