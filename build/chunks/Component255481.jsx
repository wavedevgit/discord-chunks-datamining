/** Chunk was on 96811 **/
/** chunk id: 255481, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f() {
  let [{
    selectedSource: e
  }] = (0, d.tS)(), [t, r] = i.useState(null), [f, h] = i.useState(true);
  return i.useEffect(() => {
    !async function() {
      var t, n;
      if (null == e) return;
      if (h(true), null == (n = e.id) ? true : n.startsWith(l.fS.CAMERA)) {
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
          let e = a.A.getMediaEngine(),
            t = await e.getSingleWindowPreview(i, 960, 540);
          if (null != t) {
            r(t.url), h(false);
            return
          }
        } catch (e) {}
        let {
          windowSources: e
        } = await (0, c.d)({
          width: 960,
          height: 540,
          types: [l.fS.WINDOW]
        }), t = e.find(e => (0, o.A)(e.id, i));
        null != t && (r(t.url), h(false));
        return
      }
      let {
        screenSources: s,
        windowSources: d
      } = await (0, c.d)({
        width: 960,
        height: 540,
        types: [l.fS.SCREEN, l.fS.WINDOW]
      }), u = null != (t = d.find(t => "windowHandle" in e ? (0, o.A)(t.id, e.windowHandle) : t.id === e.id)) ? t : s.find(t => e.id === t.id);
      null != u && (r(u.url), h(false))
    }()
  }, [e]), (0, n.jsx)("div", {
    className: u.z,
    children: f ? (0, n.jsx)(s.y$y, {}) : null != t ? (0, n.jsx)("img", {
      src: t,
      alt: "",
      className: u.Q
    }) : null
  })
}