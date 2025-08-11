/** Chunk was on 96858 **/
/** chunk id: 384666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk593473 = require("./593473.js"),
  Chunk114858 = require("./114858.js"),
  Chunk489863 = require("./489863.js"),
  Chunk787025 = require("./787025.jsx"),
  Chunk397394 = require("./397394.jsx"),
  Chunk388032 = require("./388032.jsx");

function d() {
  let e, t = (0, Chunk114858.TH)(),
    [n, d] = Chunk73800.useState(false),
    [h, p] = Chunk73800.useState(false);
  return Chunk73800.useEffect(() => {
    !async function() {
      let e = (0, Chunk593473.parse)(exports.search);
      try {
        var n;
        await (0, Chunk489863.g)(null != (n = module.token) ? require : ""), d(true)
      } catch (e) {
        p(true)
      }
    }()
  }, [exports.search]), e = require ? (0, Chunk255367.jsx)(Chunk397394.c7, {
    message: Chunk388032.intl.string(Chunk388032.t.Tqu3OT),
    showsCloseWindowText: true
  }) : h ? (0, Chunk255367.jsx)(Chunk397394.Lk, {
    message: Chunk388032.intl.string(Chunk388032.t.J8LsCg),
    showsCloseWindowText: true
  }) : (0, Chunk255367.jsx)(Chunk397394.ZP, {
    message: Chunk388032.intl.string(Chunk388032.t.BAcf6e),
    spinner: true
  }), (0, Chunk255367.jsx)(Chunk787025.G, {
    children: module
  })
}