/** Chunk was on 96811 **/
/** chunk id: 280481, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk213279 = require("./213279.jsx"),
  Chunk357281 = require("./357281.js");

function c(e) {
  let {
    onClose: t
  } = e, {
    analyticsLocations: r
  } = (0, s.Ay)(l.A.GO_LIVE_MODAL_V2);
  return (0, n.jsx)(i.IzF, {
    options: [{
      name: "SD",
      value: "sd"
    }, {
      name: "HD",
      value: "hd",
      className: o.T
    }],
    className: o.g,
    value: "sd",
    look: "pill",
    onChange: function(e) {
      "hd" === e.value && (0, a.p)({
        analyticsLocation: null == r ? true : r[0],
        onClose: t
      })
    }
  })
}