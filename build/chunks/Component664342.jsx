/** Chunk was on 81985 **/
/** chunk id: 664342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk32750 = require("./32750.jsx"),
  Chunk109764 = require("./109764.jsx"),
  Chunk323597 = require("./323597.jsx"),
  Chunk438536 = require("./438536.jsx"),
  Chunk193987 = require("./193987.jsx"),
  Chunk933793 = require("./933793.jsx"),
  Chunk192127 = require("./192127.jsx"),
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

function Z(e, t) {
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

function N(e) {
  let {
    channel: t
  } = e, [n, a] = i.useState(false), o = i.useRef(null);

  function s() {
    a(e => !e)
  }
  let c = I.intl.string(I.t["UKOtz+"]);
  return (0, r.jsx)(l.yRy, {
    targetElementRef: o,
    shouldShow: n,
    animation: l.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    onRequestClose: () => a(false),
    renderPopout: function(e) {
      return (0, r.jsx)(T, Z(P({}, e), {
        channel: t
      }))
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsx)(O.ZP.Icon, Z(P({}, e), {
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
  } = e, v = (0, c.Z)(t, "Sidebar Overflow"), O = (0, d.Z)(t), C = (0, g.Z)(t), E = (0, m.Z)(t), S = (0, a.Z)(t), P = (0, u.Z)(t), Z = (0, h.Z)(t.id), N = (0, f.Z)(t), T = (0, s.Z)(t), A = (0, o.Z)(t), w = (0, y.Z)({
    id: t.id,
    label: I.intl.string(I.t.DQ797g)
  }), R = (0, b.Z)(t), D = (0, p.Z)(t);

  function M() {
    (0, j.Kh)(t.id)
  }
  return (0, r.jsxs)(l.v2r, {
    navId: "thread-context",
    onClose: n,
    "aria-label": I.intl.string(I.t["1NBjqb"]),
    onSelect: i,
    children: [(0, r.jsxs)(l.kSQ, {
      children: [v, (0, r.jsx)(l.sNh, {
        id: "open",
        label: I.intl.string(I.t.IxVmZi),
        action: M
      })]
    }), (0, r.jsxs)(l.kSQ, {
      children: [C, E]
    }), (0, r.jsxs)(l.kSQ, {
      children: [N, O, Z, D]
    }), (0, r.jsxs)(l.kSQ, {
      children: [(0, r.jsx)(l.sNh, {
        id: "search",
        label: I.intl.string(I.t["5h0QOP"]),
        icon: l.rgF,
        action: function() {
          M(), setTimeout(() => {
            x.S.dispatch(_.CkL.FOCUS_SEARCH, {
              prefillCurrentChannel: false
            })
          }, 2e3)
        }
      }), (0, r.jsx)(l.sNh, {
        id: "pins",
        label: I.intl.string(I.t["2BSH7n"]),
        icon: l.rgF,
        action: function() {
          M(), x.S.dispatch(_.CkL.TOGGLE_CHANNEL_PINS)
        }
      })]
    }), (0, r.jsxs)(l.kSQ, {
      children: [R, S, P, T]
    }), (0, r.jsxs)(l.kSQ, {
      children: [A, w]
    })]
  })
}

function A(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [t.isForumPost() ? null : (0, r.jsx)(E.Z, {
      channel: t
    }), t.isModeratorReportChannel() ? (0, r.jsx)(C.Z, {
      channel: t
    }) : null, (0, r.jsx)(N, {
      channel: t
    }), (0, r.jsx)(O.ZP.Icon, {
      icon: l.Dio,
      tooltip: I.intl.string(I.t.cpT0Cq),
      onClick: () => (0, S.vN)((0, v.e)(t), null != n ? n : t.parent_id)
    })]
  })
}