/** Chunk was on 83006 **/
/** chunk id: 277978, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  CustomThemesShareModalWrapper: () => m
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
let m = e => {
  let {
    transitionState: t,
    onClose: r
  } = e, m = (0, a.useRef)((0, g.E3)()).current, {
    selectedDestinations: j,
    messageText: w,
    canSend: C,
    setSend: v,
    updateMessage: P,
    updateChannel: S
  } = (0, l.P)(m), [_, x] = a.useState(false), {
    colors: E,
    chassisMixAmount: k,
    gradientAngle: D
  } = (0, b.ko)(), M = (0, s.bG)([u.A], () => u.A.theme), A = (0, a.useMemo)(() => ({
    colors: E.map(e => e.replace("#", "")),
    gradient_angle: D,
    base_mix: k,
    base_theme: (0, p.O)(M)
  }), [E, D, k, M]), R = a.useMemo(() => (0, d.createChannelRecord)({
    id: "1",
    type: o.r.DM
  }), []), T = a.useMemo(() => (0, c.rh)(function(e) {
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
  }({}, (0, i.Ay)({
    channelId: R.id,
    content: ""
  }))), [R]);
  (0, a.useEffect)(() => {
    P(T), S(R), x(true)
  }, [T, R, P, S]);
  let H = a.useCallback(async () => {
    if (!C()) return Promise.reject();
    await (0, h.N)(j, A, w), f.default.track(O.HAw.CUSTOM_THEME_SHARED, {
      num_destinations: j.length
    }), await r()
  }, [A, j, w, C, r]);
  return ((0, a.useEffect)(() => {
    v(H)
  }, [H, v]), _) ? (0, n.jsx)(g.KH.Provider, {
    value: m,
    children: (0, n.jsx)(y.y, {
      transitionState: t,
      onClose: r
    })
  }) : null
}