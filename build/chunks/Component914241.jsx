/** Chunk was on 46746 **/
/** chunk id: 914241, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk268146 = require("./268146.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131951 = require("./131951.js"),
  Chunk855403 = require("./855403.js"),
  Chunk59468 = require("./59468.js"),
  Chunk443762 = require("./443762.jsx"),
  Chunk510296 = require("./510296.js");

function f() {
  let [{
    selectedSource: e
  }] = (0, d.E_)(), [t, r] = i.useState(null), [f, h] = i.useState(true);
  return i.useEffect(() => {
    !async function() {
      var t, n;
      if (null == e) return;
      if (h(true), null == (t = e.id) ? true : t.startsWith(s.vA.CAMERA)) {
        "url" in e && (r(e.url), h(false));
        return
      }
      if ("url" in e && "" !== e.url) {
        r(e.url), h(false);
        return
      }
      let i = "windowHandle" in e ? e.windowHandle : true;
      if (null != i) {
        try {
          let e = o.Z.getMediaEngine(),
            t = await e.getSingleWindowPreview(i, 960, 540);
          if (null != t) {
            r(t.url), h(false);
            return
          }
        } catch (e) {}
        let {
          windowSources: e
        } = await (0, a.t)({
          width: 960,
          height: 540,
          types: [s.vA.WINDOW]
        }), t = e.find(e => (0, c.Z)(e.id, i));
        null != t && (r(t.url), h(false));
        return
      }
      let {
        screenSources: l,
        windowSources: d
      } = await (0, a.t)({
        width: 960,
        height: 540,
        types: [s.vA.SCREEN, s.vA.WINDOW]
      }), u = null != (n = d.find(t => "windowHandle" in e ? (0, c.Z)(t.id, e.windowHandle) : t.id === e.id)) ? n : l.find(t => e.id === t.id);
      null != u && (r(u.url), h(false))
    }()
  }, [e]), (0, n.jsx)("div", {
    className: u.root,
    children: f ? (0, n.jsx)(l.$jN, {}) : null != t ? (0, n.jsx)("img", {
      src: t,
      alt: "",
      className: u.largePreview
    }) : null
  })
}