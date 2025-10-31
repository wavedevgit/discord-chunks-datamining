/** Chunk was on 47863 **/
/** chunk id: 485299, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk268146 = require("./268146.js"),
  Chunk481060 = require("./481060.js"),
  Chunk855403 = require("./855403.js"),
  Chunk59468 = require("./59468.js"),
  Chunk615161 = require("./615161.jsx"),
  Chunk157707 = require("./157707.js");

function u() {
  let [{
    selectedSource: e
  }] = (0, Chunk615161.E_)(), [t, n] = Chunk647438.useState(null);
  return Chunk647438.useEffect(() => {
    var t;
    if (null != module) {
      if (null == (t = module.id) ? true : exports.startsWith(Chunk268146.vA.CAMERA)) {
        "url" in module && require(module.url);
        return
      }(0, Chunk59468.t)({
        width: 800,
        height: 451,
        types: [Chunk268146.vA.SCREEN, Chunk268146.vA.WINDOW]
      }).then(t => {
        var r;
        let {
          screenSources: i,
          windowSources: l
        } = t, o = null != (r = l.find(t => "windowHandle" in e ? (0, s.Z)(t.id, e.windowHandle) : t.id === e.id)) ? r : i.find(t => e.id === t.id);
        null != o && n(o.url)
      })
    }
  }, [module]), (0, Chunk951288.jsx)("div", {
    className: Chunk157707.root,
    children: null == exports ? (0, Chunk951288.jsx)(Chunk481060.$jN, {}) : (0, Chunk951288.jsx)("img", {
      src: exports,
      alt: "",
      className: Chunk157707.largePreview
    })
  })
}