/** Chunk was on 26196 **/
/** chunk id: 433359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CustomThemesShareModalWrapper: () => g
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
  Chunk233398 = require("./233398.js"),
  Chunk824988 = require("./824988.js"),
  Chunk135102 = require("./135102.js"),
  Chunk975919 = require("./975919.jsx"),
  Chunk595830 = require("./595830.js");
let g = e => {
  let {
    transitionState: t,
    onClose: n
  } = e, g = (0, r.useRef)((0, p.sf)()).current, {
    selectedDestinations: m,
    messageText: C,
    canSend: y,
    setSend: M,
    updateMessage: w,
    updateChannel: x
  } = (0, o.o)(g), [I, S] = r.useState(false), {
    colors: j,
    chassisMixAmount: O,
    gradientAngle: k
  } = (0, _.Ig)(), v = (0, l.e7)([c.Z], () => c.Z.theme), E = (0, r.useMemo)(() => ({
    colors: j.map(e => e.replace("#", "")),
    gradient_angle: k,
    base_mix: O,
    base_theme: (0, f.h)(v)
  }), [j, k, O, v]), P = r.useMemo(() => (0, d.kt)({
    id: "1",
    type: s.d.DM
  }), []), W = r.useMemo(() => (0, i.e5)(function(e) {
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
    channelId: P.id,
    content: ""
  }))), [P]);
  (0, r.useEffect)(() => {
    w(W), x(P), S(true)
  }, [W, P, w, x]);
  let D = r.useCallback(async () => {
    if (!y()) return Promise.reject();
    await (0, b.O)(m, E, C), await n()
  }, [E, m, C, y, n]);
  return ((0, r.useEffect)(() => {
    M(D)
  }, [D, M]), I) ? (0, a.jsx)(p.fm.Provider, {
    value: g,
    children: (0, a.jsx)(h._, {
      transitionState: t,
      onClose: n
    })
  }) : null
}