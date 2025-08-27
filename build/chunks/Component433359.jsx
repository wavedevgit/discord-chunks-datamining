/** Chunk was on 26196 **/
/** chunk id: 433359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CustomThemesShareModalWrapper: () => h
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk210887 = require("./210887.js"),
  Chunk131704 = require("./131704.js"),
  Chunk233398 = require("./233398.js"),
  Chunk824988 = require("./824988.js"),
  Chunk135102 = require("./135102.js"),
  Chunk975919 = require("./975919.jsx"),
  Chunk595830 = require("./595830.js");
let h = e => {
  let {
    transitionState: t,
    onClose: n
  } = e, {
    selectedDestinations: h,
    messageText: g,
    canSend: m,
    setSend: C,
    updateMessage: y,
    updateChannel: w
  } = (0, f.C$)(), [M, x] = o.useState(false), {
    colors: I,
    chassisMixAmount: S,
    gradientAngle: O
  } = (0, d.Ig)(), j = (0, s.e7)([u.Z], () => u.Z.theme), k = (0, o.useMemo)(() => ({
    colors: I.map(e => e.replace("#", "")),
    gradient_angle: O,
    base_mix: S,
    base_theme: (0, _.h)(j)
  }), [I, O, S, j]), E = o.useMemo(() => (0, c.kt)({
    id: "1",
    type: r.d.DM
  }), []), v = o.useMemo(() => (0, l.e5)(function(e) {
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
  }({}, (0, i.ZP)({
    channelId: E.id,
    content: ""
  }))), [E]);
  (0, o.useEffect)(() => {
    y(v), w(E), x(true)
  }, [v, E, y, w]);
  let P = o.useCallback(async () => {
    if (!m()) return Promise.reject();
    await (0, b.O)(h, k, g), await n()
  }, [k, h, g, m, n]);
  return ((0, o.useEffect)(() => {
    C(P)
  }, [P, C]), M) ? (0, a.jsx)(p._, {
    transitionState: t,
    onClose: n
  }) : null
}