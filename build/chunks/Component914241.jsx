/** Chunk was on 46746 **/
/** chunk id: 914241, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk268146 = require("./268146.js"),
  Chunk481060 = require("./481060.js"),
  Chunk855403 = require("./855403.js"),
  Chunk59468 = require("./59468.js"),
  Chunk443762 = require("./443762.jsx"),
  Chunk510296 = require("./510296.js");

function u() {
  let [{
    selectedSource: e
  }] = (0, a.E_)(), [t, r] = i.useState(null);
  return i.useEffect(() => {
    var t;
    if (null != e) {
      if (null == (t = e.id) ? true : t.startsWith(s.vA.CAMERA)) {
        "url" in e && r(e.url);
        return
      }(0, c.t)({
        width: 960,
        height: 540,
        types: [s.vA.SCREEN, s.vA.WINDOW]
      }).then(t => {
        var n;
        let {
          screenSources: i,
          windowSources: s
        } = t, l = null != (n = s.find(t => "windowHandle" in e ? (0, o.Z)(t.id, e.windowHandle) : t.id === e.id)) ? n : i.find(t => e.id === t.id);
        null != l && r(l.url)
      })
    }
  }, [e]), (0, n.jsx)("div", {
    className: d.root,
    children: null == t ? (0, n.jsx)(l.$jN, {}) : (0, n.jsx)("img", {
      src: t,
      alt: "",
      className: d.largePreview
    })
  })
}