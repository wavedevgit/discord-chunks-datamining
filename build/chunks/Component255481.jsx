/** Chunk was on 96811 **/
/** chunk id: 255481, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk141931 = require("./141931.js"),
  Chunk397927 = require("./397927.js"),
  Chunk430452 = require("./430452.js"),
  Chunk830012 = require("./830012.js"),
  Chunk920281 = require("./920281.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk977529 = require("./977529.js");

function u() {
  let [{
    selectedSource: e
  }] = (0, d.tS)(), [t, r] = l.useState(null), [u, h] = l.useState(true);
  return l.useEffect(() => {
    !async function() {
      var t, n;
      if (null == e) return;
      if (h(true), null == (n = e.id) ? true : n.startsWith(s.fS.CAMERA)) {
        "url" in e && (r(e.url), h(false));
        return
      }
      if ("url" in e && "" !== e.url) {
        r(e.url), h(false);
        return
      }
      let l = "windowHandle" in e ? e.windowHandle : true;
      if (null != l) {
        try {
          let e = a.A.getMediaEngine(),
            t = await e.getSingleWindowPreview(l, 960, 540);
          if (null != t) {
            r(t.url), h(false);
            return
          }
        } catch (e) {}
        let {
          windowSources: e
        } = await (0, o.d)({
          width: 960,
          height: 540,
          types: [s.fS.WINDOW]
        }), t = e.find(e => (0, c.A)(e.id, l));
        null != t && (r(t.url), h(false));
        return
      }
      let {
        screenSources: i,
        windowSources: d
      } = await (0, o.d)({
        width: 960,
        height: 540,
        types: [s.fS.SCREEN, s.fS.WINDOW]
      }), f = null != (t = d.find(t => "windowHandle" in e ? (0, c.A)(t.id, e.windowHandle) : t.id === e.id)) ? t : i.find(t => e.id === t.id);
      null != f && (r(f.url), h(false))
    }()
  }, [e]), (0, n.jsx)("div", {
    className: f.z,
    children: u ? (0, n.jsx)(i.y$y, {}) : null != t ? (0, n.jsx)("img", {
      src: t,
      alt: "",
      className: f.Q
    }) : null
  })
}