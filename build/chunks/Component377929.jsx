/** Chunk was on 63962 **/
/** chunk id: 377929, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk13736 = require("./13736.jsx"),
  Chunk732393 = require("./732393.jsx"),
  Chunk137591 = require("./137591.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk665149 = require("./665149.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk979651 = require("./979651.js"),
  Chunk488131 = require("./488131.js"),
  Chunk388032 = require("./388032.jsx");

function I(e) {
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

function E(e, t) {
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

function S(e) {
  let {
    channel: t
  } = e, [n, l] = i.useState(false), a = i.useRef(null);

  function s() {
    l(e => !e)
  }
  let c = C.intl.string(C.t.UKOtz8);
  return (0, r.jsx)(o.yRy, {
    targetElementRef: a,
    shouldShow: n,
    animation: o.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    onRequestClose: () => l(false),
    renderPopout: function(e) {
      return (0, r.jsx)(Z, E(I({}, e), {
        channel: t
      }))
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsx)(O.ZP.Icon, E(I({}, e), {
        ref: a,
        onClick: s,
        tooltip: n ? null : c,
        icon: o.xhG,
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
  } = e, l = (0, c.Z)(t), O = (0, f.Z)(t), I = (0, b.Z)(t.id), E = (0, m.Z)(t), S = (0, _.Z)({
    id: t.id,
    label: C.intl.string(C.t.DQ797u)
  }), Z = (0, d.Z)(t), T = (0, u.Z)(t), P = (0, p.Z)(t, "Toolbar Overflow"), N = (0, g.Z)(t), R = (0, h.Z)(t), w = (0, y.Z)(t), A = j.vF.useSetting(), D = (0, s.e7)([v.Z], () => !a().isEmpty(v.Z.getVoiceStatesForChannel(t.id)));
  return (0, r.jsxs)(o.v2r, {
    navId: "thread-context",
    onClose: n,
    "aria-label": C.intl.string(C.t["1NBjqa"]),
    onSelect: i,
    children: [(0, r.jsxs)(o.kSQ, {
      children: [P, R]
    }), (0, r.jsxs)(o.kSQ, {
      children: [E, N, I, A && !D ? (0, r.jsx)(o.sNh, {
        id: "open",
        label: C.intl.string(C.t.bX7EaG),
        action: function() {
          (0, x.ok)(t)
        }
      }) : null]
    }), (0, r.jsxs)(o.kSQ, {
      children: [w, l, O, T]
    }), (0, r.jsxs)(o.kSQ, {
      children: [Z, S]
    })]
  })
}