/** Chunk was on web.js **/
/** chunk id: 506326, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $X: () => z,
  K7: () => H,
  MK: () => F,
  N5: () => P,
  R_: () => G,
  Rq: () => Z,
  Xr: () => Y,
  Xy: () => M,
  Y8: () => W,
  Zc: () => U,
  er: () => L,
  fM: () => j,
  fg: () => K,
  iT: () => J,
  iq: () => k,
  mG: () => X,
  sp: () => B,
  tR: () => V,
  zi: () => q
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk681154 = require("./681154.js"),
  Chunk974690 = require("./974690.js"),
  Chunk379834 = require("./379834.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk927813 = require("./927813.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk20805 = require("./20805.js"),
  Chunk202195 = require("./202195.js"),
  Chunk583846 = require("./583846.js"),
  Chunk299846 = require("./299846.js"),
  Chunk693879 = require("./693879.jsx");
require("./424994.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk584576 = require("./584576.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = w(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let R = {
  [Chunk681154.I.TOP_ARTIST]: [W],
  [Chunk681154.I.PLAYED_GAME]: [k, U, M, z, V, H, K, B, F],
  [Chunk681154.I.TOP_GAME]: [Y],
  [Chunk681154.I.WATCHED_MEDIA]: [q, Z],
  [Chunk681154.I.LAUNCHED_ACTIVITY]: [k, U, M, z, K, F]
};
var P = function(e) {
  return e[e.CARD = 0] = "CARD", e[e.POPOUT = 1] = "POPOUT", e[e.STREAMING_POPOUT = 2] = "STREAMING_POPOUT", e[e.GAME_PROFILE = 3] = "GAME_PROFILE", e[e.USER_PROFILE = 4] = "USER_PROFILE", e[e.EMBED = 5] = "EMBED", e[e.LEADERBOARD_POPOUT = 6] = "LEADERBOARD_POPOUT", e[e.OVERLAY = 7] = "OVERLAY", e[e.FRIENDS_POPOUT = 8] = "FRIENDS_POPOUT", e[e.APP_LAUNCHER = 9] = "APP_LAUNCHER", e
}({});
let D = Chunk64700.createContext({});

function x() {
  return i.useContext(D)
}

function L(e) {
  let {
    children: t
  } = e, n = N(e, ["children"]);
  return (0, r.jsx)("div", C(S({
    className: A.fC
  }, n), {
    children: t
  }))
}

function j(e) {
  let {
    Icon: t,
    text: n,
    iconColor: i,
    tooltipText: a,
    showTooltip: s
  } = e, {
    defaultTextColor: o,
    defaultIconColor: l,
    location: c
  } = x();
  return (0, r.jsx)(f.m, {
    text: a,
    shouldShow: s,
    children: (0, r.jsxs)(L, {
      children: [(0, r.jsx)(t, {
        size: "xxs",
        color: null != i ? i : l
      }), (0, r.jsx)(p.Text, {
        variant: "text-xs/normal",
        color: o,
        className: A.KT,
        scaleFontToUserSetting: 5 === c,
        children: n
      })]
    })
  })
}

function M(e) {
  let {
    entry: t
  } = e, {
    channel: n
  } = (0, E.A)(t), {
    location: i
  } = x();
  return null == n || (0, h.S1)(i, [1, 2, 3, 4]) ? null : (0, r.jsx)(j, {
    Icon: p.HKD,
    text: n.name
  })
}

function k(e) {
  let {
    entry: t,
    hovered: n
  } = e, {
    defaultTextColor: i,
    defaultIconColor: a,
    location: s
  } = x(), o = (0, y.Hd)(t) && (0, h.S1)(s, [0, 4, 7, 9]), l = o ? p.LU0.colors.TEXT_FEEDBACK_POSITIVE : a, c = o ? "text-feedback-positive" : i, {
    streamPreviewUrl: u
  } = (0, E.A)(t), d = null != u ? p.Fzq : (0, g.yl)(t) ? p.k9F : p._xR;
  return (0, r.jsxs)(L, {
    children: [(0, r.jsx)(d, {
      size: "xxs",
      color: l
    }), (0, r.jsx)(O.A, {
      entry: t,
      textColor: c,
      hovered: n,
      bold: true,
      scaleFontToUserSetting: 5 === s
    })]
  })
}

function U(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: i
  } = x(), {
    state: a,
    party: s
  } = (0, b.u)(t), o = (0, y.gF)(a, s);
  return null == o ? null : (0, r.jsxs)(L, {
    children: [(0, r.jsx)(p.nFg, {
      size: "xxs",
      color: i
    }), (0, r.jsx)(p.Text, {
      variant: "text-xs/normal",
      color: n,
      lineClamp: 1,
      children: o
    })]
  })
}

function G(e) {
  let {
    entry: t,
    hovered: n
  } = e, {
    defaultTextColor: i,
    defaultIconColor: a,
    location: s
  } = x(), o = (0, y.Hd)(t) && (0, h.S1)(s, [0, 4]), l = o ? p.LU0.colors.TEXT_FEEDBACK_POSITIVE : a, c = o ? "text-feedback-positive" : i;
  return (0, r.jsxs)("div", {
    className: A.fC,
    children: [(0, r.jsx)(p.T7G, {
      size: "xxs",
      color: l
    }), (0, r.jsx)(O.A, {
      entry: t,
      textColor: c,
      hovered: n,
      bold: true
    })]
  })
}

function V(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), i = (0, h.S1)(n, [0, 3]) ? p.LU0.colors.STATUS_POSITIVE : true;
  return (0, y.Rf)(t) ? (0, r.jsx)(j, {
    Icon: p.PPD,
    text: v.intl.string(v.t.keY6mW),
    iconColor: i
  }) : null
}

function F(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x();
  if (!(0, y.L7)(t)) return null;
  let i = (0, y.JM)(t),
    a = 0 === n && !i,
    {
      text: s,
      tooltipText: o
    } = (0, y.Pj)(t);
  return null == s ? null : (0, r.jsx)(j, {
    Icon: p.xbX,
    text: s,
    tooltipText: o,
    showTooltip: a
  })
}

function B(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), i = 0 !== n, a = (0, y.KH)(t);
  if (null == a) return null;
  let s = (0, y.us)(a);
  return (0, r.jsx)(j, {
    Icon: p.mqY,
    showTooltip: !i,
    tooltipText: s,
    text: i ? s : v.intl.string(v.t.adnLsB)
  })
}

function H(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), i = (0, y.iy)(t);
  return (0, y.BZ)(t) ? (0, r.jsx)(j, {
    Icon: p.gXB,
    showTooltip: 0 === n,
    text: v.intl.formatToPlainString(v.t["Klie/P"], {
      days: i
    }),
    tooltipText: v.intl.formatToPlainString(v.t.PwMe0s, {
      days: i
    })
  }) : null
}

function Y(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), i = 0 !== n, a = (0, y.ty)(t);
  if (null == a) return null;
  let s = i ? " — " : ": ",
    o = i ? v.t.C0AxoR : v.t.SDRHgr;
  return (0, r.jsx)(j, {
    Icon: p.OR,
    text: (0, r.jsxs)(r.Fragment, {
      children: [v.intl.string(v.t["/50eHi"]), s, v.intl.format(o, {
        hours: Math.round(a / _.A.Seconds.HOUR)
      })]
    })
  })
}

function W(e) {
  var t;
  let {
    entry: n
  } = e, {
    location: i
  } = x(), a = null == (t = (0, y.Pv)(n, u.K.AGGREGATE_COUNT)) ? true : t.count;
  if (null == a) return null;
  let s = (0, h.S1)(i, [1, 2, 5]) ? v.intl.formatToPlainString(v.t.HtifnG, {
    count: a
  }) : v.intl.formatToPlainString(v.t["jq/Bmu"], {
    count: a
  });
  return (0, r.jsx)(j, {
    Icon: p.OR,
    text: s
  })
}

function K(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x();
  if (3 === n) return null;
  let i = (0, y.CZ)(t);
  return null == i || i === d.m.TRENDING_TYPE_UNSPECIFIED ? null : (0, r.jsx)(j, {
    Icon: p.Y3C,
    text: v.intl.string(v.t.kAlUsy)
  })
}

function z(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x();
  if (3 === n) return null;
  let i = m.default.extractTimestamp(t.extra.application_id);
  return l()().diff(l()(i), "days") > 7 ? null : (0, r.jsx)(j, {
    Icon: p.fR$,
    text: v.intl.string(v.t.vYuyWf)
  })
}

function q(e) {
  let {
    entry: t,
    hovered: n
  } = e, {
    defaultTextColor: i,
    defaultIconColor: a,
    location: s
  } = x(), o = (0, y.Hd)(t) && 4 === s, l = o ? p.LU0.colors.TEXT_FEEDBACK_POSITIVE : a, c = o ? "text-feedback-positive" : i;
  return (0, r.jsxs)("div", {
    className: A.fC,
    children: [(0, r.jsx)(p.Uk3, {
      size: "xxs",
      color: l
    }), (0, r.jsx)(O.A, {
      entry: t,
      textColor: c,
      hovered: n,
      bold: true
    })]
  })
}

function Z(e) {
  let {
    entry: t
  } = e, n = (0, y.kR)(t.extra.media_assets_large_text);
  return null == n ? null : (0, r.jsx)(j, {
    Icon: p.Kck,
    text: n
  })
}

function X(e) {
  let t, {
    location: n,
    children: i,
    className: a
  } = e;
  return t = (0, h.S1)(n, [1, 5, 6]) ? {
    defaultTextColor: "content-inventory-overlay-text-secondary",
    defaultIconColor: p.LU0.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  } : 2 === n ? {
    defaultTextColor: "interactive-text-default"
  } : 3 === n ? {
    defaultTextColor: "text-muted"
  } : 4 === n ? {
    defaultTextColor: "text-subtle",
    defaultIconColor: p.LU0.colors.TEXT_SUBTLE
  } : {
    defaultTextColor: "text-subtle"
  }, (0, r.jsx)(D.Provider, {
    value: S({
      location: n
    }, t),
    children: (0, r.jsx)("div", {
      className: s()(A.cV, {
        [A.u3]: 0 === n,
        [A.BQ]: (0, h.S1)(n, [1, 2]),
        [A.DY]: 3 === n
      }, a),
      children: i
    })
  })
}

function Q(e) {
  switch (e.content_type) {
    case c.I.TOP_ARTIST:
      return R[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    case c.I.PLAYED_GAME:
      return R[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    case c.I.TOP_GAME:
      return R[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    case c.I.WATCHED_MEDIA:
      return R[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    case c.I.LAUNCHED_ACTIVITY:
      return R[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    default:
      return null
  }
}

function J(e) {
  let {
    entry: t,
    location: n,
    className: i
  } = e, a = Q(t);
  return null == a ? null : (0, r.jsx)(X, {
    location: n,
    className: i,
    children: a
  })
}