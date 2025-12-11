/** Chunk was on 44183 **/
/** chunk id: 485299, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk268146 = require("./268146.js"),
  Chunk481060 = require("./481060.js"),
  Chunk855403 = require("./855403.js"),
  Chunk59468 = require("./59468.js"),
  Chunk615161 = require("./615161.jsx"),
  Chunk6699 = require("./6699.js");

function u() {
  let [{
    selectedSource: e
  }] = (0, Chunk615161.E_)(), [t, n] = Chunk473749.useState(null);
  return Chunk473749.useEffect(() => {
    var t;
    if (null != module) {
      if (null == (t = module.id) ? true : exports.startsWith(Chunk268146.vA.CAMERA)) {
        "url" in module && require(module.url);
        return
      }(0, Chunk59468.t)({
        width: 960,
        height: 540,
        types: [Chunk268146.vA.SCREEN, Chunk268146.vA.WINDOW]
      }).then(t => {
        var r;
        let {
          screenSources: i,
          windowSources: l
        } = t, s = null != (r = l.find(t => "windowHandle" in e ? (0, o.Z)(t.id, e.windowHandle) : t.id === e.id)) ? r : i.find(t => e.id === t.id);
        null != s && n(s.url)
      })
    }
  }, [module]), (0, Chunk54381.jsx)("div", {
    className: Chunk6699.root,
    children: null == exports ? (0, Chunk54381.jsx)(Chunk481060.$jN, {}) : (0, Chunk54381.jsx)("img", {
      src: exports,
      alt: "",
      className: Chunk6699.largePreview
    })
  })
}