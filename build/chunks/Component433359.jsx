/** Chunk was on 67261 **/
/** chunk id: 433359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CustomThemesShareModalWrapper: () => y
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk191336 = require("./191336.js"),
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
let y = e => {
  let {
    transitionState: t,
    onClose: n
  } = e, y = (0, a.useRef)((0, g.sf)()).current, {
    selectedDestinations: O,
    messageText: j,
    canSend: C,
    setSend: w,
    updateMessage: v,
    updateChannel: S
  } = (0, o.o)(y), [P, x] = a.useState(false), {
    colors: E,
    chassisMixAmount: k,
    gradientAngle: M
  } = (0, b.Ig)(), D = (0, s.e7)([u.Z], () => u.Z.theme), I = (0, a.useMemo)(() => ({
    colors: E.map(e => e.replace("#", "")),
    gradient_angle: M,
    base_mix: k,
    base_theme: (0, p.h)(D)
  }), [E, M, k, D]), T = a.useMemo(() => (0, d.kt)({
    id: "1",
    type: l.d.DM
  }), []), Z = a.useMemo(() => (0, i.e5)(function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, (0, c.ZP)({
    channelId: T.id,
    content: ""
  }))), [T]);
  (0, a.useEffect)(() => {
    v(Z), S(T), x(true)
  }, [Z, T, v, S]);
  let R = a.useCallback(async () => {
    if (!C()) return Promise.reject();
    await (0, _.O)(O, I, j), f.default.track(m.rMx.CUSTOM_THEME_SHARED, {
      num_destinations: O.length
    }), await n()
  }, [I, O, j, C, n]);
  return ((0, a.useEffect)(() => {
    w(R)
  }, [R, w]), P) ? (0, r.jsx)(g.fm.Provider, {
    value: y,
    children: (0, r.jsx)(h._, {
      transitionState: t,
      onClose: n
    })
  }) : null
}