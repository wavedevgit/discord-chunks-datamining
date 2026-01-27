/** Chunk was on 15646 **/
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
  } = e, m = (0, l.useRef)((0, g.E3)()).current, {
    selectedDestinations: O,
    messageText: w,
    canSend: j,
    setSend: C,
    updateMessage: v,
    updateChannel: P
  } = (0, a.P)(m), [S, k] = l.useState(false), {
    colors: E,
    chassisMixAmount: x,
    gradientAngle: A
  } = (0, b.ko)(), M = (0, s.bG)([u.A], () => u.A.theme), D = (0, l.useMemo)(() => ({
    colors: E.map(e => e.replace("#", "")),
    gradient_angle: A,
    base_mix: x,
    base_theme: (0, p.O)(M)
  }), [E, A, x, M]), I = l.useMemo(() => (0, d.createChannelRecord)({
    id: "1",
    type: o.r.DM
  }), []), R = l.useMemo(() => (0, i.rh)(function(e) {
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
    channelId: I.id,
    content: ""
  }))), [I]);
  (0, l.useEffect)(() => {
    v(R), P(I), k(true)
  }, [R, I, v, P]);
  let T = l.useCallback(async () => {
    if (!j()) return Promise.reject();
    await (0, y.N)(O, D, w), f.default.track(h.HAw.CUSTOM_THEME_SHARED, {
      num_destinations: O.length
    }), await r()
  }, [D, O, w, j, r]);
  return ((0, l.useEffect)(() => {
    C(T)
  }, [T, C]), S) ? (0, n.jsx)(g.KH.Provider, {
    value: m,
    children: (0, n.jsx)(_.y, {
      transitionState: t,
      onClose: r
    })
  }) : null
}