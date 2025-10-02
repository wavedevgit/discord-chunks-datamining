/** Chunk was on 67261 **/
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
  } = e, C = (0, l.useRef)((0, p.sf)()).current, {
    selectedDestinations: y,
    messageText: x,
    canSend: M,
    setSend: S,
    updateMessage: I,
    updateChannel: w
  } = (0, s.o)(C), [E, j] = l.useState(false), {
    colors: k,
    chassisMixAmount: O,
    gradientAngle: v
  } = (0, f.Ig)(), P = (0, o.e7)([u.Z], () => u.Z.theme), D = (0, l.useMemo)(() => ({
    colors: k.map(e => e.replace("#", "")),
    gradient_angle: v,
    base_mix: O,
    base_theme: (0, b.h)(P)
  }), [k, v, O, P]), T = l.useMemo(() => (0, d.kt)({
    id: "1",
    type: r.d.DM
  }), []), R = l.useMemo(() => (0, i.e5)(function(e) {
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
  }({}, (0, c.ZP)({
    channelId: T.id,
    content: ""
  }))), [T]);
  (0, l.useEffect)(() => {
    I(R), w(T), j(true)
  }, [R, T, I, w]);
  let Z = l.useCallback(async () => {
    if (!M()) return Promise.reject();
    await (0, g.O)(y, D, x), _.default.track(m.rMx.CUSTOM_THEME_SHARED, {
      num_destinations: y.length
    }), await n()
  }, [D, y, x, M, n]);
  return ((0, l.useEffect)(() => {
    S(Z)
  }, [Z, S]), E) ? (0, a.jsx)(p.fm.Provider, {
    value: C,
    children: (0, a.jsx)(h._, {
      transitionState: t,
      onClose: n
    })
  }) : null
}