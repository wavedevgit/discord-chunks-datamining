/** Chunk was on 58973 **/
/** chunk id: 433359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CustomThemesShareModalWrapper: () => O
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk121168 = require("./121168.js"),
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
let O = e => {
  let {
    transitionState: t,
    onClose: n
  } = e, O = (0, a.useRef)((0, g.sf)()).current, {
    selectedDestinations: C,
    messageText: j,
    canSend: _,
    setSend: w,
    updateMessage: v,
    updateChannel: S
  } = (0, o.o)(O), [P, x] = a.useState(false), {
    colors: E,
    chassisMixAmount: M,
    gradientAngle: k
  } = (0, f.Ig)(), I = (0, c.e7)([u.Z], () => u.Z.theme), D = (0, a.useMemo)(() => ({
    colors: E.map(e => e.replace("#", "")),
    gradient_angle: k,
    base_mix: M,
    base_theme: (0, p.h)(I)
  }), [E, k, M, I]), T = a.useMemo(() => (0, d.createChannelRecord)({
    id: "1",
    type: l.d.DM
  }), []), R = a.useMemo(() => (0, i.e5)(function(e) {
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
  }({}, (0, s.ZP)({
    channelId: T.id,
    content: ""
  }))), [T]);
  (0, a.useEffect)(() => {
    v(R), S(T), x(true)
  }, [R, T, v, S]);
  let Z = a.useCallback(async () => {
    if (!_()) return Promise.reject();
    await (0, m.O)(C, D, j), b.default.track(y.rMx.CUSTOM_THEME_SHARED, {
      num_destinations: C.length
    }), await n()
  }, [D, C, j, _, n]);
  return ((0, a.useEffect)(() => {
    w(Z)
  }, [Z, w]), P) ? (0, r.jsx)(g.fm.Provider, {
    value: O,
    children: (0, r.jsx)(h._, {
      transitionState: t,
      onClose: n
    })
  }) : null
}