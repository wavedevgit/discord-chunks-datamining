/** Chunk was on web.js **/
/** chunk id: 297781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Af: () => k,
  An: () => W,
  E6: () => Y,
  EE: () => G,
  Gk: () => Q,
  Gt: () => w,
  OV: () => U,
  PZ: () => $,
  Rg: () => X,
  U9: () => z,
  XF: () => B,
  Yl: () => q,
  ej: () => j,
  f: () => H,
  m7: () => M,
  n8: () => K,
  pQ: () => F,
  v1: () => V,
  wO: () => Z
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk876215 = require("./876215.js"),
  Chunk884439 = require("./884439.js"),
  Chunk705512 = require("./705512.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk26033 = require("./26033.js"),
  Chunk22211 = require("./22211.js"),
  Chunk561308 = require("./561308.js"),
  Chunk797342 = require("./797342.js"),
  Chunk371991 = require("./371991.jsx"),
  Chunk206583 = require("./206583.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk136011 = require("./136011.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = P(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let D = {
  [Chunk876215.s.TOP_ARTIST]: [W],
  [Chunk876215.s.PLAYED_GAME]: [U, G, k, z, Z, H, K, V, F],
  [Chunk876215.s.TOP_GAME]: [Y],
  [Chunk876215.s.WATCHED_MEDIA]: [q, X],
  [Chunk876215.s.LAUNCHED_ACTIVITY]: [U, G, k, z, K, F]
};
var w = function(e) {
  return e[e.CARD = 0] = "CARD", e[e.POPOUT = 1] = "POPOUT", e[e.STREAMING_POPOUT = 2] = "STREAMING_POPOUT", e[e.GAME_PROFILE = 3] = "GAME_PROFILE", e[e.USER_PROFILE = 4] = "USER_PROFILE", e[e.EMBED = 5] = "EMBED", e[e.LEADERBOARD_POPOUT = 6] = "LEADERBOARD_POPOUT", e[e.OVERLAY = 7] = "OVERLAY", e[e.FRIENDS_POPOUT = 8] = "FRIENDS_POPOUT", e[e.APP_LAUNCHER = 9] = "APP_LAUNCHER", e
}({});
let L = Chunk473749.createContext({});

function x() {
  return Chunk473749.useContext(L)
}

function M(e) {
  var {
    children: t
  } = e, n = R(e, ["children"]);
  return (0, r.jsx)("div", N(A({
    className: T.badgeContainer
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
    showTooltip: o
  } = e, {
    defaultTextColor: s,
    defaultIconColor: l,
    location: c
  } = x();
  return (0, r.jsx)(f.u, {
    text: a,
    shouldShow: o,
    children: (0, r.jsxs)(M, {
      children: [(0, r.jsx)(t, {
        size: "xxs",
        color: null != i ? i : l
      }), (0, r.jsx)(_.Text, {
        variant: "text-xs/normal",
        color: s,
        className: T.badgeLabel,
        scaleFontToUserSetting: 5 === c,
        children: n
      })]
    })
  })
}

function k(e) {
  let {
    entry: t
  } = e, {
    channel: n
  } = (0, E.Z)(t), {
    location: i
  } = x();
  return null == n || (0, h.Hi)(i, [1, 2, 3, 4]) ? null : (0, r.jsx)(j, {
    Icon: _.gj8,
    text: n.name
  })
}

function U(e) {
  let {
    entry: t,
    hovered: n
  } = e, {
    defaultTextColor: i,
    defaultIconColor: a,
    location: o
  } = x(), s = (0, b.Jg)(t) && (0, h.Hi)(o, [0, 4, 7, 9]), l = s ? _.TVs.colors.TEXT_FEEDBACK_POSITIVE : a, c = s ? "text-feedback-positive" : i, {
    streamPreviewUrl: u
  } = (0, E.Z)(t), d = null != u ? _.hGI : (0, g.Mq)(t) ? _.jje : _.iWm;
  return (0, r.jsxs)(M, {
    children: [(0, r.jsx)(d, {
      size: "xxs",
      color: l
    }), (0, r.jsx)(O.ZP, {
      entry: t,
      textColor: c,
      hovered: n,
      bold: true,
      scaleFontToUserSetting: 5 === o
    })]
  })
}

function G(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: i
  } = x(), {
    state: a,
    party: o
  } = (0, y.n)(t), s = (0, b.bT)(a, o);
  return null == s ? null : (0, r.jsxs)(M, {
    children: [(0, r.jsx)(_.BFJ, {
      size: "xxs",
      color: i
    }), (0, r.jsx)(_.Text, {
      variant: "text-xs/normal",
      color: n,
      lineClamp: 1,
      children: s
    })]
  })
}

function B(e) {
  let {
    entry: t,
    hovered: n
  } = e, {
    defaultTextColor: i,
    defaultIconColor: a,
    location: o
  } = x(), s = (0, b.Jg)(t) && (0, h.Hi)(o, [0, 4]), l = s ? _.TVs.colors.TEXT_FEEDBACK_POSITIVE : a, c = s ? "text-feedback-positive" : i;
  return (0, r.jsxs)("div", {
    className: T.badgeContainer,
    children: [(0, r.jsx)(_.RZG, {
      size: "xxs",
      color: l
    }), (0, r.jsx)(O.ZP, {
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
  } = e, {
    location: n
  } = x(), i = (0, h.Hi)(n, [0, 3]) ? _.TVs.colors.STATUS_POSITIVE : true;
  return (0, b.Ol)(t) ? (0, r.jsx)(j, {
    Icon: _._IE,
    text: I.intl.string(I.t.keY6mW),
    iconColor: i
  }) : null
}

function F(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x();
  if (!(0, b.V5)(t)) return null;
  let i = (0, b.kr)(t),
    a = 0 === n && !i,
    {
      text: o,
      tooltipText: s
    } = (0, b.zo)(t);
  return null == o ? null : (0, r.jsx)(j, {
    Icon: _.ANZ,
    text: o,
    tooltipText: s,
    showTooltip: a
  })
}

function V(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), i = 0 !== n, a = (0, b.dw)(t);
  if (null == a) return null;
  let o = (0, b.GE)(a);
  return (0, r.jsx)(j, {
    Icon: _.Oe7,
    showTooltip: !i,
    tooltipText: o,
    text: i ? o : I.intl.string(I.t.adnLsB)
  })
}

function H(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), i = (0, b.vU)(t);
  return (0, b.q_)(t) ? (0, r.jsx)(j, {
    Icon: _.qOE,
    showTooltip: 0 === n,
    text: I.intl.formatToPlainString(I.t["Klie/P"], {
      days: i
    }),
    tooltipText: I.intl.formatToPlainString(I.t.PwMe0s, {
      days: i
    })
  }) : null
}

function Y(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), i = 0 !== n, a = (0, b.yA)(t);
  if (null == a) return null;
  let o = i ? " — " : ": ",
    s = i ? I.t.C0AxoR : I.t.SDRHgr;
  return (0, r.jsx)(j, {
    Icon: _.rm8,
    text: (0, r.jsxs)(r.Fragment, {
      children: [I.intl.string(I.t["/50eHi"]), o, I.intl.format(s, {
        hours: Math.round(a / p.Z.Seconds.HOUR)
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
  } = x(), a = null == (t = (0, b.PJ)(n, u.N.AGGREGATE_COUNT)) ? true : t.count;
  if (null == a) return null;
  let o = (0, h.Hi)(i, [1, 2, 5]) ? I.intl.formatToPlainString(I.t.HtifnG, {
    count: a
  }) : I.intl.formatToPlainString(I.t["jq/Bmu"], {
    count: a
  });
  return (0, r.jsx)(j, {
    Icon: _.rm8,
    text: o
  })
}

function K(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x();
  if (3 === n) return null;
  let i = (0, b.ig)(t);
  return null == i || i === d.o.TRENDING_TYPE_UNSPECIFIED ? null : (0, r.jsx)(j, {
    Icon: _.YqE,
    text: I.intl.string(I.t.kAlUsy)
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
  return l()().diff(l()(i), "days") > v.G ? null : (0, r.jsx)(j, {
    Icon: _.rIT,
    text: I.intl.string(I.t.vYuyWf)
  })
}

function q(e) {
  let {
    entry: t,
    hovered: n
  } = e, {
    defaultTextColor: i,
    defaultIconColor: a,
    location: o
  } = x(), s = (0, b.Jg)(t) && 4 === o, l = s ? _.TVs.colors.TEXT_FEEDBACK_POSITIVE : a, c = s ? "text-feedback-positive" : i;
  return (0, r.jsxs)("div", {
    className: T.badgeContainer,
    children: [(0, r.jsx)(_.ARS, {
      size: "xxs",
      color: l
    }), (0, r.jsx)(O.ZP, {
      entry: t,
      textColor: c,
      hovered: n,
      bold: true
    })]
  })
}

function X(e) {
  let {
    entry: t
  } = e, n = (0, b.ap)(t.extra.media_assets_large_text);
  return null == n ? null : (0, r.jsx)(j, {
    Icon: _.sVe,
    text: n
  })
}

function Q(e) {
  let t, {
    location: n,
    children: i,
    className: a
  } = e;
  return t = (0, h.Hi)(n, [1, 5, 6]) ? {
    defaultTextColor: "content-inventory-overlay-text-secondary",
    defaultIconColor: _.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  } : 2 === n ? {
    defaultTextColor: "interactive-normal"
  } : 3 === n ? {
    defaultTextColor: "text-muted"
  } : 4 === n ? {
    defaultTextColor: "text-secondary",
    defaultIconColor: _.TVs.colors.TEXT_SECONDARY
  } : {
    defaultTextColor: "text-secondary"
  }, (0, r.jsx)(L.Provider, {
    value: A({
      location: n
    }, t),
    children: (0, r.jsx)("div", {
      className: o()(T.badgesContainer, {
        [T.badgesContainerCard]: 0 === n,
        [T.badgesContainerPopout]: (0, h.Hi)(n, [1, 2]),
        [T.badgesContainerGameProfile]: 3 === n
      }, a),
      children: i
    })
  })
}

function J(e) {
  switch (e.content_type) {
    case c.s.TOP_ARTIST:
      return D[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    case c.s.PLAYED_GAME:
      return D[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    case c.s.TOP_GAME:
      return D[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    case c.s.WATCHED_MEDIA:
      return D[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    case c.s.LAUNCHED_ACTIVITY:
      return D[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    default:
      return null
  }
}

function $(e) {
  let {
    entry: t,
    location: n,
    className: i
  } = e, a = J(t);
  return null == a ? null : (0, r.jsx)(Q, {
    location: n,
    className: i,
    children: a
  })
}