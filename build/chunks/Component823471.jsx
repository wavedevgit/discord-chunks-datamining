/** Chunk was on 97887 **/
/** chunk id: 823471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk182061 = require("./182061.jsx"),
  Chunk886393 = require("./886393.jsx"),
  Chunk307623 = require("./307623.jsx"),
  Chunk660273 = require("./660273.jsx"),
  Chunk707792 = require("./707792.jsx"),
  Chunk41402 = require("./41402.jsx"),
  Chunk271456 = require("./271456.jsx"),
  Chunk200273 = require("./200273.jsx"),
  Chunk565846 = require("./565846.jsx"),
  Chunk57907 = require("./57907.jsx"),
  Chunk375500 = require("./375500.jsx"),
  Chunk707653 = require("./707653.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk584682 = require("./584682.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk378570 = require("./378570.js"),
  Chunk203982 = require("./203982.js"),
  Chunk170428 = require("./170428.jsx"),
  Chunk933057 = require("./933057.jsx"),
  Chunk747926 = require("./747926.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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

function N(e, t) {
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

function T(e) {
  let {
    channel: t
  } = e, [n, s] = l.useState(false), a = l.useRef(null);

  function o() {
    s(e => !e)
  }
  let c = S.intl.string(S.t["UKOtz+"]);
  return (0, r.jsx)(i.YNO, {
    targetElementRef: a,
    shouldShow: n,
    animation: i.YNO.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    onRequestClose: () => s(false),
    renderPopout: function(e) {
      return (0, r.jsx)(P, N(I({}, e), {
        channel: t
      }))
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsx)(_.Ay.Icon, N(I({}, e), {
        ref: a,
        onClick: o,
        tooltip: n ? null : c,
        icon: i.jNK,
        "aria-label": c,
        selected: n
      }))
    }
  })
}

function P(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: l
  } = e, y = (0, c.A)(t, "Sidebar Overflow"), _ = (0, d.A)(t), v = (0, g.A)(t), x = (0, m.A)(t), E = (0, s.A)(t), I = (0, u.A)(t), N = (0, f.A)(t.id), T = (0, h.A)(t), P = (0, o.A)(t), w = (0, a.A)(t), R = (0, A.A)({
    id: t.id,
    label: S.intl.string(S.t.DQ797g)
  }), D = (0, b.A)(t), M = (0, p.A)(t);

  function L() {
    (0, O.iN)(t.id)
  }
  return (0, r.jsxs)(i.W1t, {
    "data-menu-mixed": true,
    navId: "thread-context",
    onClose: n,
    "aria-label": S.intl.string(S.t["1NBjqb"]),
    onSelect: l,
    children: [(0, r.jsxs)(i.rXV, {
      children: [y, (0, r.jsx)(i.Drp, {
        id: "open",
        label: S.intl.string(S.t.IxVmZi),
        action: L
      })]
    }), (0, r.jsxs)(i.rXV, {
      children: [v, x]
    }), (0, r.jsxs)(i.rXV, {
      children: [T, _, N, M]
    }), (0, r.jsxs)(i.rXV, {
      children: [(0, r.jsx)(i.Drp, {
        id: "search",
        label: S.intl.string(S.t["5h0QOP"]),
        icon: i.tfB,
        action: function() {
          L(), setTimeout(() => {
            j._.dispatch(C.jej.FOCUS_SEARCH, {
              prefillCurrentChannel: false
            })
          }, 2e3)
        }
      }), (0, r.jsx)(i.Drp, {
        id: "pins",
        label: S.intl.string(S.t["2BSH7n"]),
        icon: i.tfB,
        action: function() {
          L(), j._.dispatch(C.jej.TOGGLE_CHANNEL_PINS)
        }
      })]
    }), (0, r.jsxs)(i.rXV, {
      children: [D, E, I, P]
    }), (0, r.jsxs)(i.rXV, {
      children: [w, R]
    })]
  })
}

function w(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [t.isForumPost() ? null : (0, r.jsx)(x.A, {
      channel: t
    }), t.isModeratorReportChannel() ? (0, r.jsx)(v.A, {
      channel: t
    }) : null, (0, r.jsx)(T, {
      channel: t
    }), (0, r.jsx)(_.Ay.Icon, {
      icon: i.PGe,
      tooltip: S.intl.string(S.t.cpT0Cq),
      onClick: () => (0, E.xu)((0, y.j)(t), null != n ? n : t.parent_id)
    })]
  })
}