/** Chunk was on 36653 **/
/** chunk id: 217031, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => U
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk212819 = require("./212819.js"),
  Chunk933557 = require("./933557.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk810123 = require("./810123.jsx"),
  Chunk448486 = require("./448486.js"),
  Chunk987509 = require("./987509.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk158776 = require("./158776.js"),
  Chunk306680 = require("./306680.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk784384 = require("./784384.js"),
  Chunk490897 = require("./490897.js"),
  Chunk773921 = require("./773921.js");

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, l, r = function(e, t) {
    if (null == e) return {};
    var n, l, r = {},
      i = Object.keys(e);
    for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}

function w(e) {
  let {
    destination: t,
    icon: n,
    label: i,
    subLabel: a,
    selected: u,
    disabled: o,
    onPressDestination: h,
    "aria-setsize": m,
    "aria-posinset": b,
    className: g
  } = e, p = (0, c.JA)(t.id), y = r.useCallback(() => {
    null == h || h(t)
  }, [h, t]);
  return (0, l.jsxs)(f.P3F, I(A({
    className: s()(M.destinationRow, g, {
      [M.disabled]: o
    }),
    onClick: o ? true : y,
    "aria-selected": u,
    "aria-setsize": m,
    "aria-posinset": b
  }, p), {
    children: [(0, l.jsxs)("div", {
      className: M.identity,
      children: [(0, l.jsx)("div", {
        className: M.iconWrapper,
        children: n
      }), (0, l.jsxs)("div", {
        className: M.labels,
        children: [(0, l.jsx)(f.Text, {
          tag: "strong",
          className: M.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: i
        }), (0, l.jsx)(f.Text, {
          className: M.subLabel,
          variant: "text-xs/normal",
          color: "text-muted",
          children: a
        })]
      })]
    }), (0, l.jsx)(d.VL, {
      checked: !!u,
      disabled: o,
      className: M.checkbox,
      isIndicator: true
    })]
  }))
}

function D(e) {
  var {
    user: t,
    subLabel: n
  } = e, r = T(e, ["user", "subLabel"]);
  let i = _.ZP.useName(t),
    s = _.ZP.useUserTag(t, {
      decoration: "never"
    }),
    a = (0, o.e7)([O.Z], () => O.Z.getNickname(t.id)),
    u = (0, o.e7)([v.Z], () => v.Z.getStatus(t.id));
  return (0, l.jsx)(w, I(A({}, r), {
    icon: (0, l.jsx)(h.Z, {
      "aria-hidden": true,
      size: f.EFr.SIZE_32,
      user: t,
      status: u
    }),
    label: null != a ? a : i,
    subLabel: null != n ? n : s
  }))
}

function k(e) {
  var {
    channel: t,
    subLabel: n
  } = e, r = T(e, ["channel", "subLabel"]);
  let i = (0, b.ZP)(t),
    s = (0, y._)(t);
  return (0, l.jsx)(w, I(A({}, r), {
    icon: (0, l.jsx)(g.Z, {
      "aria-hidden": true,
      size: f.EFr.SIZE_32,
      channel: t,
      experimentLocation: "forward-modal"
    }),
    label: i,
    subLabel: null != n ? n : s
  }))
}

function R(e) {
  var {
    channel: t,
    subLabel: n
  } = e, r = T(e, ["channel", "subLabel"]);
  let i = (0, o.e7)([Z.Z], () => Z.Z.getGuild(null == t ? true : t.guild_id)),
    s = (0, b.ZP)(t),
    a = (0, o.e7)([S.Z, j.default, O.Z], () => {
      let e = S.Z.getChannel(t.parent_id);
      return null == e ? null : (0, b.F6)(e, j.default, O.Z, false)
    }),
    c = (0, o.e7)([P.ZP], () => P.ZP.lastMessageTimestamp(t.id, C.W.CHANNEL)),
    d = null == i ? true : i.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? f.Mmi : f.VL1;
    d = (0, l.jsxs)("div", {
      className: M.threadSubLabel,
      children: [(0, l.jsx)(e, {
        color: f.TVs.colors.TEXT_SECONDARY,
        className: M.subLabelIcon
      }), (0, l.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: a
      }), null != c ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(f.Text, {
          className: M.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, l.jsx)(f.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, x.Xf)(u()(c))
        })]
      }) : null]
    })
  }
  return (0, l.jsx)(w, I(A({}, r), {
    icon: (0, l.jsx)(p.Z, {
      size: p.E.SMALL_32,
      guild: i,
      channel: t
    }),
    label: s,
    subLabel: null != n ? n : d
  }))
}

function U(e) {
  let {
    rowData: t,
    message: n,
    originChannel: i,
    selectedDestinations: s,
    handleToggleDestination: a,
    disableSelection: u,
    rowClassName: c
  } = e, o = r.useMemo(() => {
    var e;
    return null != (e = null == s ? true : s.map(E.hC)) ? e : []
  }, [s]), d = r.useCallback(e => {
    let {
      section: r,
      row: s
    } = e;
    if (null == i || r > 0) return;
    let {
      type: d,
      record: f
    } = t[s];
    if (d === m.h8.HEADER) return;
    let h = d === m.h8.USER ? {
        type: "user",
        id: f.id
      } : {
        type: "channel",
        id: f.id
      },
      b = (0, E.hC)(h),
      g = (0, N.HY)(n, i, f),
      p = o.includes(b),
      y = {
        key: b,
        message: n,
        destination: h,
        subLabel: null != g ? g.label : true,
        disabled: u && !p || null != g,
        selected: p,
        onPressDestination: a,
        "aria-posinset": s + 1,
        "aria-setsize": t.length,
        className: c
      };
    return d === m.h8.USER ? (0, l.jsx)(D, A({
      user: f
    }, y)) : d === m.h8.GROUP_DM ? (0, l.jsx)(k, A({
      channel: f
    }, y)) : d === m.h8.TEXT_CHANNEL || d === m.h8.VOICE_CHANNEL ? (0, l.jsx)(R, A({
      channel: f
    }, y)) : void(0, L.vE)(d)
  }, [u, a, n, i, t, o, c]);
  return {
    sections: [t.length],
    sectionHeight: 0,
    rowHeight: 48,
    renderRow: d
  }
}