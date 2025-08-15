/** Chunk was on 96858 **/
/** chunk id: 384666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk593473 = require("./593473.js"),
  Chunk843611 = require("./843611.js"),
  Chunk489863 = require("./489863.js"),
  Chunk787025 = require("./787025.jsx"),
  Chunk397394 = require("./397394.jsx"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let e, t = (0, Chunk843611.TH)(),
    [n, d] = Chunk647438.useState(false),
    [h, p] = Chunk647438.useState(false);
  return Chunk647438.useEffect(() => {
    !async function() {
      let e = (0, Chunk593473.parse)(exports.search);
      try {
        var n;
        await (0, Chunk489863.g)(null != (n = module.token) ? require : ""), d(true)
      } catch (e) {
        p(true)
      }
    }()
  }, [exports.search]), e = require ? (0, Chunk951288.jsx)(Chunk397394.c7, {
    message: Chunk388032.intl.string(Chunk388032.t.Tqu3OT),
    showsCloseWindowText: true
  }) : h ? (0, Chunk951288.jsx)(Chunk397394.Lk, {
    message: Chunk388032.intl.string(Chunk388032.t.J8LsCg),
    showsCloseWindowText: true
  }) : (0, Chunk951288.jsx)(Chunk397394.ZP, {
    message: Chunk388032.intl.string(Chunk388032.t.BAcf6e),
    spinner: true
  }), (0, Chunk951288.jsx)(Chunk787025.G, {
    children: module
  })
}