/** Chunk was on 26494 **/
/** chunk id: 562715, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk298692 = require("./298692.js"),
  Chunk826380 = require("./826380.jsx"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  var n, t;
  let {
    connection: m
  } = e, h = (0, r.ZP)(), x = null != (t = null != m.provider_id ? null == (n = s.Z.get(m.provider_id)) ? true : n.name : null) ? t : d.intl.string(d.t.NzCoRx), {
    hasConnection: f,
    canConnect: g,
    startConnection: p,
    loading: v
  } = (0, u.B)(m.provider_id), j = i.useCallback(async () => {
    await p("Guild Onboarding")
  }, [p]), C = i.useMemo(() => {
    if (null != m.provider_id) {
      let e = s.Z.get(m.provider_id),
        n = (null == e ? true : e.icon) != null ? (0, a.wj)(h) ? e.icon.darkPNG : e.icon.lightPNG : null;
      if (null != n) return (0, l.jsx)("img", {
        src: n,
        alt: x,
        width: 40,
        height: 40
      })
    }
    return (0, l.jsx)(o.xPt, {
      size: "custom",
      width: 40,
      height: 40,
      color: "currentColor"
    })
  }, [m.provider_id, h, x]);
  return (0, l.jsx)(c.Z, {
    displayName: x,
    description: m.description,
    icon: C,
    isLoading: v,
    isConnected: f,
    canConnect: g,
    onConnect: j
  })
}