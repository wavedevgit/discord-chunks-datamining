/** Chunk was on 1113 **/
/** chunk id: 328808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk182061 = require("./182061.jsx"),
  Chunk886393 = require("./886393.jsx"),
  Chunk307623 = require("./307623.jsx"),
  Chunk660273 = require("./660273.jsx"),
  Chunk40389 = require("./40389.jsx"),
  Chunk707792 = require("./707792.jsx"),
  Chunk41402 = require("./41402.jsx"),
  Chunk271456 = require("./271456.jsx"),
  Chunk200273 = require("./200273.jsx"),
  Chunk565846 = require("./565846.jsx"),
  Chunk707653 = require("./707653.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk58736 = require("./58736.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk977997 = require("./977997.js"),
  Chunk747926 = require("./747926.js"),
  Chunk985018 = require("./985018.jsx");

function C(e) {
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

function S(e, t) {
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

function I(e) {
  let {
    channel: t
  } = e, [n, i] = l.useState(false), s = l.useRef(null);

  function a() {
    i(e => !e)
  }
  let c = E.intl.string(E.t["UKOtz+"]);
  return (0, r.jsx)(o.YNO, {
    targetElementRef: s,
    shouldShow: n,
    animation: o.YNO.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    onRequestClose: () => i(false),
    renderPopout: function(e) {
      return (0, r.jsx)(N, S(C({}, e), {
        channel: t
      }))
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsx)(_.Ay.Icon, S(C({}, e), {
        ref: s,
        onClick: a,
        tooltip: n ? null : c,
        icon: o.jNK,
        "aria-label": c,
        selected: n
      }))
    }
  })
}

function N(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: l
  } = e, i = (0, c.A)(t), _ = (0, g.A)(t), C = (0, A.A)(t.id), S = (0, b.A)(t), I = (0, O.A)({
    id: t.id,
    label: E.intl.string(E.t.DQ797g)
  }), N = (0, u.A)(t), T = (0, d.A)(t), P = (0, h.A)(t, "Toolbar Overflow"), w = (0, f.A)(t), R = (0, p.A)(t), D = (0, y.A)(t), L = (0, m.A)(t), M = j.SY.useSetting(), G = (0, a.bG)([x.A], () => !s().isEmpty(x.A.getVoiceStatesForChannel(t.id)));
  return (0, r.jsxs)(o.W1t, {
    "data-menu-migrated": true,
    navId: "thread-context",
    onClose: n,
    "aria-label": E.intl.string(E.t["1NBjqb"]),
    onSelect: l,
    children: [(0, r.jsxs)(o.rXV, {
      children: [P, R]
    }), (0, r.jsxs)(o.rXV, {
      children: [S, w, C, M && !G ? (0, r.jsx)(o.Drp, {
        id: "open",
        label: E.intl.string(E.t.bX7EaG),
        action: function() {
          (0, v.JA)(t)
        }
      }) : null, L]
    }), (0, r.jsxs)(o.rXV, {
      children: [D, i, _, T]
    }), (0, r.jsxs)(o.rXV, {
      children: [N, I]
    })]
  })
}