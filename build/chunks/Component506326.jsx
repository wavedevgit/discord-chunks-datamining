/** Chunk was on web.js **/
/** chunk id: 506326, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $X: () => q,
  K7: () => Y,
  MK: () => B,
  N5: () => D,
  R_: () => V,
  Rq: () => Q,
  Xr: () => W,
  Xy: () => k,
  Y8: () => K,
  Yq: () => X,
  Zc: () => G,
  er: () => M,
  fM: () => j,
  fg: () => z,
  iT: () => ee,
  iq: () => U,
  mG: () => J,
  sp: () => H,
  tR: () => F,
  zi: () => Z
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk681154 = require("./681154.js"),
  Chunk974690 = require("./974690.js"),
  Chunk379834 = require("./379834.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk619517 = require("./619517.jsx"),
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

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
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

function w(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = R(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let P = {
  [Chunk681154.ContentInventoryEntryType.TOP_ARTIST]: [K],
  [Chunk681154.ContentInventoryEntryType.PLAYED_GAME]: [U, G, k, q, F, Y, z, H, B],
  [Chunk681154.ContentInventoryEntryType.TOP_GAME]: [W],
  [Chunk681154.ContentInventoryEntryType.WATCHED_MEDIA]: [Z, Q],
  [Chunk681154.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [U, G, k, q, z, B]
};
var D = function(e) {
  return e[e.CARD = 0] = "CARD", e[e.POPOUT = 1] = "POPOUT", e[e.STREAMING_POPOUT = 2] = "STREAMING_POPOUT", e[e.GAME_PROFILE = 3] = "GAME_PROFILE", e[e.USER_PROFILE = 4] = "USER_PROFILE", e[e.EMBED = 5] = "EMBED", e[e.LEADERBOARD_POPOUT = 6] = "LEADERBOARD_POPOUT", e[e.OVERLAY = 7] = "OVERLAY", e[e.FRIENDS_POPOUT = 8] = "FRIENDS_POPOUT", e[e.APP_LAUNCHER = 9] = "APP_LAUNCHER", e
}({});
let L = Chunk64700.createContext({});

function x() {
  return i.useContext(L)
}

function M(e) {
  let {
    children: t
  } = e, n = w(e, ["children"]);
  return (0, r.jsx)("div", N(T({
    className: I.fC
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
  return (0, r.jsx)(f.m, {
    text: a,
    shouldShow: o,
    children: (0, r.jsxs)(M, {
      children: [(0, r.jsx)(t, {
        size: "xxs",
        color: null != i ? i : l
      }), (0, r.jsx)(p.Text, {
        variant: "text-xs/normal",
        color: s,
        className: I.KT,
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
  } = (0, y.A)(t), {
    location: i
  } = x();
  return null == n || (0, m.S1)(i, [1, 2, 3, 4]) ? null : (0, r.jsx)(j, {
    Icon: p.HKD,
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
  } = x(), s = (0, b.Hd)(t) && (0, m.S1)(o, [0, 4, 7, 9]), l = s ? p.LU0.colors.TEXT_FEEDBACK_POSITIVE : a, c = s ? "text-feedback-positive" : i, {
    streamPreviewUrl: u
  } = (0, y.A)(t), d = null != u ? p.Fzq : (0, E.yl)(t) ? p.k9F : p._xR;
  return (0, r.jsxs)(M, {
    children: [(0, r.jsx)(d, {
      size: "xxs",
      color: l
    }), (0, r.jsx)(v.A, {
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
  } = (0, O.u)(t), s = (0, b.gF)(a, o);
  return null == s ? null : (0, r.jsxs)(M, {
    children: [(0, r.jsx)(p.nFg, {
      size: "xxs",
      color: i
    }), (0, r.jsx)(p.Text, {
      variant: "text-xs/normal",
      color: n,
      lineClamp: 1,
      children: s
    })]
  })
}

function V(e) {
  let {
    entry: t,
    hovered: n
  } = e, {
    defaultTextColor: i,
    defaultIconColor: a,
    location: o
  } = x(), s = (0, b.Hd)(t) && (0, m.S1)(o, [0, 4]), l = s ? p.LU0.colors.TEXT_FEEDBACK_POSITIVE : a, c = s ? "text-feedback-positive" : i;
  return (0, r.jsxs)("div", {
    className: I.fC,
    children: [(0, r.jsx)(p.T7G, {
      size: "xxs",
      color: l
    }), (0, r.jsx)(v.A, {
      entry: t,
      textColor: c,
      hovered: n,
      bold: true
    })]
  })
}

function F(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), i = (0, m.S1)(n, [0, 3]) ? p.LU0.colors.STATUS_POSITIVE : true;
  return (0, b.Rf)(t) ? (0, r.jsx)(j, {
    Icon: p.PPD,
    text: A.intl.string(A.t.keY6mW),
    iconColor: i
  }) : null
}

function B(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x();
  if (!(0, b.L7)(t)) return null;
  let i = (0, b.JM)(t),
    a = 0 === n && !i,
    {
      text: o,
      tooltipText: s
    } = (0, b.Pj)(t);
  return null == o ? null : (0, r.jsx)(j, {
    Icon: p.xbX,
    text: o,
    tooltipText: s,
    showTooltip: a
  })
}

function H(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), i = 0 !== n, a = (0, b.KH)(t);
  if (null == a) return null;
  let o = (0, b.us)(a);
  return (0, r.jsx)(j, {
    Icon: p.mqY,
    showTooltip: !i,
    tooltipText: o,
    text: i ? o : A.intl.string(A.t.adnLsB)
  })
}

function Y(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), i = (0, b.iy)(t);
  return (0, b.BZ)(t) ? (0, r.jsx)(j, {
    Icon: p.gXB,
    showTooltip: 0 === n,
    text: A.intl.formatToPlainString(A.t["Klie/P"], {
      days: i
    }),
    tooltipText: A.intl.formatToPlainString(A.t.PwMe0s, {
      days: i
    })
  }) : null
}

function W(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x(), i = 0 !== n, a = (0, b.ty)(t);
  if (null == a) return null;
  let o = i ? " — " : ": ",
    s = i ? A.t.C0AxoR : A.t.SDRHgr;
  return (0, r.jsx)(j, {
    Icon: p.OR,
    text: (0, r.jsxs)(r.Fragment, {
      children: [A.intl.string(A.t["/50eHi"]), o, A.intl.format(s, {
        hours: Math.round(a / h.A.Seconds.HOUR)
      })]
    })
  })
}

function K(e) {
  var t;
  let {
    entry: n
  } = e, {
    location: i
  } = x(), a = null == (t = (0, b.Pv)(n, u.K.AGGREGATE_COUNT)) ? true : t.count;
  if (null == a) return null;
  let o = (0, m.S1)(i, [1, 2, 5]) ? A.intl.formatToPlainString(A.t.HtifnG, {
    count: a
  }) : A.intl.formatToPlainString(A.t["jq/Bmu"], {
    count: a
  });
  return (0, r.jsx)(j, {
    Icon: p.OR,
    text: o
  })
}

function z(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x();
  if (3 === n) return null;
  let i = (0, b.CZ)(t);
  return null == i || i === d.m.TRENDING_TYPE_UNSPECIFIED ? null : (0, r.jsx)(j, {
    Icon: p.Y3C,
    text: A.intl.string(A.t.kAlUsy)
  })
}

function q(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = x();
  if (3 === n) return null;
  let i = g.default.extractTimestamp(t.extra.application_id);
  return l()().diff(l()(i), "days") > 7 ? null : (0, r.jsx)(j, {
    Icon: p.fR$,
    text: A.intl.string(A.t.vYuyWf)
  })
}

function Z(e) {
  let {
    entry: t,
    hovered: n
  } = e, {
    defaultTextColor: i,
    defaultIconColor: a,
    location: o
  } = x(), s = (0, b.Hd)(t) && 4 === o, l = s ? p.LU0.colors.TEXT_FEEDBACK_POSITIVE : a, c = s ? "text-feedback-positive" : i;
  return (0, r.jsxs)("div", {
    className: I.fC,
    children: [(0, r.jsx)(p.Uk3, {
      size: "xxs",
      color: l
    }), (0, r.jsx)(v.A, {
      entry: t,
      textColor: c,
      hovered: n,
      bold: true
    })]
  })
}

function Q(e) {
  let {
    entry: t
  } = e, n = (0, b.kR)(t.extra.media_assets_large_text);
  return null == n ? null : (0, r.jsx)(j, {
    Icon: p.Kck,
    text: n
  })
}

function X(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    location: i
  } = x();
  if (!("applicationWidgetPreview" in t) || null == t.applicationWidgetPreview) return null;
  let {
    previewIcon: a,
    previewTextShort: o
  } = t.applicationWidgetPreview.previewData;
  return (0, r.jsxs)(M, {
    children: [null != a && (0, r.jsx)("div", {
      className: I.dQ,
      children: (0, r.jsx)(_.Ay, {
        src: a.proxyUrl,
        width: a.width,
        height: a.height,
        responsive: true
      })
    }), (0, r.jsx)(p.Text, {
      variant: "text-xs/normal",
      color: n,
      className: I.KT,
      scaleFontToUserSetting: 5 === i,
      children: o
    })]
  })
}

function J(e) {
  let t, {
    location: n,
    children: i,
    className: a
  } = e;
  return t = (0, m.S1)(n, [1, 5, 6]) ? {
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
  }, (0, r.jsx)(L.Provider, {
    value: T({
      location: n
    }, t),
    children: (0, r.jsx)("div", {
      className: o()(I.cV, {
        [I.u3]: 0 === n,
        [I.BQ]: (0, m.S1)(n, [1, 2]),
        [I.DY]: 3 === n
      }, a),
      children: i
    })
  })
}

function $(e) {
  switch (e.content_type) {
    case c.ContentInventoryEntryType.TOP_ARTIST:
      return P[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    case c.ContentInventoryEntryType.PLAYED_GAME:
      return P[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    case c.ContentInventoryEntryType.TOP_GAME:
      return P[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    case c.ContentInventoryEntryType.WATCHED_MEDIA:
      return P[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    case c.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
      return P[e.content_type].map((t, n) => (0, r.jsx)(t, {
        entry: e
      }, n));
    default:
      return null
  }
}

function ee(e) {
  let {
    entry: t,
    location: n,
    className: i
  } = e, a = $(t);
  return null == a ? null : (0, r.jsx)(J, {
    location: n,
    className: i,
    children: a
  })
}