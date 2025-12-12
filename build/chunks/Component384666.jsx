/** Chunk was on 96858 **/
/** chunk id: 384666, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk593473 = require("./593473.js"),
  Chunk828700 = require("./828700.js"),
  Chunk489863 = require("./489863.js"),
  Chunk787025 = require("./787025.jsx"),
  Chunk397394 = require("./397394.jsx"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let e, t = (0, Chunk828700.TH)(),
    [o, d] = Chunk473749.useState(false),
    [p, _] = Chunk473749.useState(false);
  return Chunk473749.useEffect(() => {
    !async function() {
      let e = (0, Chunk593473.parse)(exports.search);
      try {
        var o;
        await (0, Chunk489863.g)(null != (o = module.token) ? require : ""), d(true)
      } catch (e) {
        _(true)
      }
    }()
  }, [exports.search]), e = require ? (0, Chunk54381.jsx)(Chunk397394.c7, {
    message: Chunk388032.intl.string(Chunk388032.t.Tqu3OQ),
    showsCloseWindowText: true
  }) : p ? (0, Chunk54381.jsx)(Chunk397394.Lk, {
    message: Chunk388032.intl.string(Chunk388032.t.J8LsCs),
    showsCloseWindowText: true
  }) : (0, Chunk54381.jsx)(Chunk397394.ZP, {
    message: Chunk388032.intl.string(Chunk388032.t.BAcf6a),
    spinner: true
  }), (0, Chunk54381.jsx)(Chunk787025.G, {
    children: module
  })
}