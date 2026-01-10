/** Chunk was on 81985 **/
/** chunk id: 377929, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk32750 = require("./32750.jsx"),
  Chunk109764 = require("./109764.jsx"),
  Chunk323597 = require("./323597.jsx"),
  Chunk438536 = require("./438536.jsx"),
  Chunk251746 = require("./251746.jsx"),
  Chunk193987 = require("./193987.jsx"),
  Chunk933793 = require("./933793.jsx"),
  Chunk192127 = require("./192127.jsx"),
  Chunk13736 = require("./13736.jsx"),
  Chunk732393 = require("./732393.jsx"),
  Chunk137591 = require("./137591.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk665149 = require("./665149.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk979651 = require("./979651.js"),
  Chunk488131 = require("./488131.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
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
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e) {
  let {
    channel: t
  } = e, [n, l] = i.useState(false), a = i.useRef(null);

  function o() {
    l(e => !e)
  }
  let c = S.intl.string(S.t["UKOtz+"]);
  return (0, r.jsx)(s.yRy, {
    targetElementRef: a,
    shouldShow: n,
    animation: s.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    onRequestClose: () => l(false),
    renderPopout: function(e) {
      return (0, r.jsx)(Z, I(_({}, e), {
        channel: t
      }))
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsx)(j.ZP.Icon, I(_({}, e), {
        ref: a,
        onClick: o,
        tooltip: n ? null : c,
        icon: s.xhG,
        "aria-label": c,
        selected: n
      }))
    }
  })
}

function Z(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: i
  } = e, l = (0, c.Z)(t), j = (0, h.Z)(t), _ = (0, y.Z)(t.id), I = (0, b.Z)(t), P = (0, O.Z)({
    id: t.id,
    label: S.intl.string(S.t.DQ797g)
  }), Z = (0, u.Z)(t), N = (0, d.Z)(t), T = (0, p.Z)(t, "Toolbar Overflow"), A = (0, g.Z)(t), w = (0, f.Z)(t), R = (0, v.Z)(t), D = (0, m.Z)(t), M = x.vF.useSetting(), k = (0, o.e7)([C.Z], () => !a().isEmpty(C.Z.getVoiceStatesForChannel(t.id)));
  return (0, r.jsxs)(s.v2r, {
    navId: "thread-context",
    onClose: n,
    "aria-label": S.intl.string(S.t["1NBjqb"]),
    onSelect: i,
    children: [(0, r.jsxs)(s.kSQ, {
      children: [T, w]
    }), (0, r.jsxs)(s.kSQ, {
      children: [I, A, _, M && !k ? (0, r.jsx)(s.sNh, {
        id: "open",
        label: S.intl.string(S.t.bX7EaG),
        action: function() {
          (0, E.ok)(t)
        }
      }) : null, D]
    }), (0, r.jsxs)(s.kSQ, {
      children: [R, l, j, N]
    }), (0, r.jsxs)(s.kSQ, {
      children: [Z, P]
    })]
  })
}