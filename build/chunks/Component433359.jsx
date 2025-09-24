/** Chunk was on 26196 **/
/** chunk id: 433359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CustomThemesShareModalWrapper: () => C
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk879690 = require("./879690.js"),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk210887 = require("./210887.js"),
  Chunk131704 = require("./131704.js"),
  Chunk626135 = require("./626135.js"),
  Chunk233398 = require("./233398.js"),
  Chunk824988 = require("./824988.js"),
  Chunk135102 = require("./135102.js"),
  Chunk975919 = require("./975919.jsx"),
  Chunk595830 = require("./595830.js"),
  Chunk981631 = require("./981631.js");
let C = e => {
  let {
    transitionState: t,
    onClose: n
  } = e, C = (0, r.useRef)((0, h.sf)()).current, {
    selectedDestinations: M,
    messageText: y,
    canSend: x,
    setSend: w,
    updateMessage: S,
    updateChannel: E
  } = (0, o.o)(C), [I, O] = r.useState(false), {
    colors: j,
    chassisMixAmount: k,
    gradientAngle: v
  } = (0, f.Ig)(), P = (0, l.e7)([c.Z], () => c.Z.theme), W = (0, r.useMemo)(() => ({
    colors: j.map(e => e.replace("#", "")),
    gradient_angle: v,
    base_mix: k,
    base_theme: (0, p.h)(P)
  }), [j, v, k, P]), T = r.useMemo(() => (0, d.kt)({
    id: "1",
    type: s.d.DM
  }), []), D = r.useMemo(() => (0, i.e5)(function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = n[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({}, (0, u.ZP)({
    channelId: T.id,
    content: ""
  }))), [T]);
  (0, r.useEffect)(() => {
    S(D), E(T), O(true)
  }, [D, T, S, E]);
  let L = r.useCallback(async () => {
    if (!x()) return Promise.reject();
    await (0, g.O)(M, W, y), _.default.track(m.rMx.CUSTOM_THEME_SHARED, {
      num_destinations: M.length
    }), await n()
  }, [W, M, y, x, n]);
  return ((0, r.useEffect)(() => {
    w(L)
  }, [L, w]), I) ? (0, a.jsx)(h.fm.Provider, {
    value: C,
    children: (0, a.jsx)(b._, {
      transitionState: t,
      onClose: n
    })
  }) : null
}