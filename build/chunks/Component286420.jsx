/** Chunk was on 47863 **/
/** chunk id: 286420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk156582 = require("./156582.jsx"),
  Chunk656943 = require("./656943.js");

function c(e) {
  let {
    onClose: t
  } = e, {
    analyticsLocations: n
  } = (0, o.ZP)(l.Z.GO_LIVE_MODAL_V2);
  return (0, r.jsx)(i.sY7, {
    options: [{
      name: "SD",
      value: "sd"
    }, {
      name: "HD",
      value: "hd",
      className: a.premiumOption
    }],
    className: a.selector,
    value: "sd",
    look: "pill",
    onChange: function(e) {
      "hd" === e.value && (0, s.E)({
        analyticsLocation: null == n ? true : n[0],
        onClose: t
      })
    }
  })
}