/** Chunk was on 86357 **/
/** chunk id: 664342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk32750 = require("./32750.jsx"),
  Chunk109764 = require("./109764.jsx"),
  Chunk323597 = require("./323597.jsx"),
  Chunk438536 = require("./438536.jsx"),
  Chunk193987 = require("./193987.jsx"),
  Chunk933793 = require("./933793.jsx"),
  Chunk13736 = require("./13736.jsx"),
  Chunk732393 = require("./732393.jsx"),
  Chunk214906 = require("./214906.jsx"),
  Chunk612856 = require("./612856.jsx"),
  Chunk137591 = require("./137591.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk727429 = require("./727429.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk585483 = require("./585483.js"),
  Chunk407908 = require("./407908.jsx"),
  Chunk739830 = require("./739830.jsx"),
  Chunk488131 = require("./488131.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function P(e) {
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

function Z(e) {
  let {
    channel: t
  } = e, [n, a] = i.useState(false), o = i.useRef(null);

  function s() {
    a(e => !e)
  }
  let c = S.intl.string(S.t.UKOtz8);
  return (0, r.jsx)(l.yRy, {
    targetElementRef: o,
    shouldShow: n,
    animation: l.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    onRequestClose: () => a(false),
    renderPopout: function(e) {
      return (0, r.jsx)(T, I(P({}, e), {
        channel: t
      }))
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsx)(_.ZP.Icon, I(P({}, e), {
        ref: o,
        onClick: s,
        tooltip: n ? null : c,
        icon: l.xhG,
        "aria-label": c,
        selected: n
      }))
    }
  })
}

function T(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: i
  } = e, y = (0, c.Z)(t, "Sidebar Overflow"), _ = (0, d.Z)(t), v = (0, f.Z)(t), j = (0, m.Z)(t), O = (0, a.Z)(t), P = (0, u.Z)(t), I = (0, h.Z)(t.id), Z = (0, p.Z)(t), T = (0, s.Z)(t), N = (0, o.Z)(t), A = (0, b.Z)({
    id: t.id,
    label: S.intl.string(S.t.DQ797u)
  }), w = (0, g.Z)(t);

  function R() {
    (0, C.Kh)(t.id)
  }
  return (0, r.jsxs)(l.v2r, {
    navId: "thread-context",
    onClose: n,
    "aria-label": S.intl.string(S.t["1NBjqa"]),
    onSelect: i,
    children: [(0, r.jsxs)(l.kSQ, {
      children: [y, (0, r.jsx)(l.sNh, {
        id: "open",
        label: S.intl.string(S.t.IxVmZm),
        action: R
      })]
    }), (0, r.jsxs)(l.kSQ, {
      children: [v, j]
    }), (0, r.jsxs)(l.kSQ, {
      children: [Z, _, I]
    }), (0, r.jsxs)(l.kSQ, {
      children: [(0, r.jsx)(l.sNh, {
        id: "search",
        label: S.intl.string(S.t["5h0QOD"]),
        icon: l.rgF,
        action: function() {
          R(), setTimeout(() => {
            x.S.dispatch(E.CkL.FOCUS_SEARCH, {
              prefillCurrentChannel: false
            })
          }, 2e3)
        }
      }), (0, r.jsx)(l.sNh, {
        id: "pins",
        label: S.intl.string(S.t["2BSH7u"]),
        icon: l.rgF,
        action: function() {
          R(), x.S.dispatch(E.CkL.TOGGLE_CHANNEL_PINS)
        }
      })]
    }), (0, r.jsxs)(l.kSQ, {
      children: [w, O, P, T]
    }), (0, r.jsxs)(l.kSQ, {
      children: [N, A]
    })]
  })
}

function N(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [t.isForumPost() ? null : (0, r.jsx)(j.Z, {
      channel: t
    }), (0, r.jsx)(v.Z, {
      channel: t
    }), (0, r.jsx)(Z, {
      channel: t
    }), (0, r.jsx)(_.ZP.Icon, {
      icon: l.Dio,
      tooltip: S.intl.string(S.t.cpT0Cg),
      onClick: () => (0, O.vN)((0, y.e)(t), null != n ? n : t.parent_id)
    })]
  })
}