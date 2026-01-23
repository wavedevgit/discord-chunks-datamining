/** Chunk was on 83006 **/
/** chunk id: 277978, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  CustomThemesShareModalWrapper: () => _
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353640 = require("./353640.js"),
  Chunk478437 = require("./478437.js"),
  Chunk311907 = require("./311907.js"),
  Chunk141468 = require("./141468.js"),
  Chunk963852 = require("./963852.js"),
  Chunk544028 = require("./544028.js"),
  Chunk95701 = require("./95701.js"),
  Chunk954571 = require("./954571.js"),
  Chunk467135 = require("./467135.js"),
  Chunk739031 = require("./739031.js"),
  Chunk457417 = require("./457417.js"),
  Chunk567951 = require("./567951.jsx"),
  Chunk285188 = require("./285188.js"),
  Chunk652215 = require("./652215.js");
let _ = e => {
  let {
    transitionState: t,
    onClose: r
  } = e, _ = (0, a.useRef)((0, g.E3)()).current, {
    selectedDestinations: m,
    messageText: j,
    canSend: w,
    setSend: C,
    updateMessage: v,
    updateChannel: P
  } = (0, l.P)(_), [S, x] = a.useState(false), {
    colors: E,
    chassisMixAmount: k,
    gradientAngle: D
  } = (0, p.ko)(), M = (0, s.bG)([u.A], () => u.A.theme), A = (0, a.useMemo)(() => ({
    colors: E.map(e => e.replace("#", "")),
    gradient_angle: D,
    base_mix: k,
    base_theme: (0, b.O)(M)
  }), [E, D, k, M]), R = a.useMemo(() => (0, d.createChannelRecord)({
    id: "1",
    type: o.r.DM
  }), []), I = a.useMemo(() => (0, i.rh)(function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, (0, c.Ay)({
    channelId: R.id,
    content: ""
  }))), [R]);
  (0, a.useEffect)(() => {
    v(I), P(R), x(true)
  }, [I, R, v, P]);
  let T = a.useCallback(async () => {
    if (!w()) return Promise.reject();
    await (0, y.N)(m, A, j), f.default.track(O.HAw.CUSTOM_THEME_SHARED, {
      num_destinations: m.length
    }), await r()
  }, [A, m, j, w, r]);
  return ((0, a.useEffect)(() => {
    C(T)
  }, [T, C]), S) ? (0, n.jsx)(g.KH.Provider, {
    value: _,
    children: (0, n.jsx)(h.y, {
      transitionState: t,
      onClose: r
    })
  }) : null
}