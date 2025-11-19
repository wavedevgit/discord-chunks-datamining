/** Chunk was on 36653 **/
/** chunk id: 217031, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => U
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
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

function M(e) {
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

function A(e, t) {
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

function I(e, t) {
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

function T(e) {
  let {
    destination: t,
    icon: n,
    label: i,
    subLabel: u,
    selected: a,
    disabled: o,
    onPressDestination: f,
    "aria-setsize": h,
    "aria-posinset": m,
    className: b
  } = e, g = (0, c.JA)(t.id), p = r.useCallback(() => {
    null == f || f(t)
  }, [f, t]);
  return (0, l.jsxs)(d.P3F, A(M({
    className: s()(C.destinationRow, b, {
      [C.disabled]: o
    }),
    onClick: o ? true : p,
    "aria-selected": a,
    "aria-setsize": h,
    "aria-posinset": m
  }, g), {
    children: [(0, l.jsxs)("div", {
      className: C.identity,
      children: [(0, l.jsx)("div", {
        className: C.iconWrapper,
        children: n
      }), (0, l.jsxs)("div", {
        className: C.labels,
        children: [(0, l.jsx)(d.Text, {
          tag: "strong",
          className: C.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: i
        }), (0, l.jsx)(d.Text, {
          className: C.subLabel,
          variant: "text-xs/normal",
          color: "text-muted",
          children: u
        })]
      })]
    }), (0, l.jsx)("div", {
      className: C.checkbox,
      children: (0, l.jsx)(d.FZ5, {
        checked: !!a,
        disabled: o
      })
    })]
  }))
}

function D(e) {
  var {
    user: t,
    subLabel: n
  } = e, r = I(e, ["user", "subLabel"]);
  let i = L.ZP.useName(t),
    s = L.ZP.useUserTag(t, {
      decoration: "never"
    }),
    u = (0, o.e7)([P.Z], () => P.Z.getNickname(t.id)),
    a = (0, o.e7)([Z.Z], () => Z.Z.getStatus(t.id));
  return (0, l.jsx)(T, A(M({}, r), {
    icon: (0, l.jsx)(f.Z, {
      "aria-hidden": true,
      size: d.EFr.SIZE_32,
      user: t,
      status: a
    }),
    label: null != u ? u : i,
    subLabel: null != n ? n : s
  }))
}

function w(e) {
  var {
    channel: t,
    subLabel: n
  } = e, r = I(e, ["channel", "subLabel"]);
  let i = (0, m.ZP)(t),
    s = (0, p._)(t);
  return (0, l.jsx)(T, A(M({}, r), {
    icon: (0, l.jsx)(b.Z, {
      "aria-hidden": true,
      size: d.EFr.SIZE_32,
      channel: t
    }),
    label: i,
    subLabel: null != n ? n : s
  }))
}

function R(e) {
  var {
    channel: t,
    subLabel: n
  } = e, r = I(e, ["channel", "subLabel"]);
  let i = (0, o.e7)([S.Z], () => S.Z.getGuild(null == t ? true : t.guild_id)),
    s = (0, m.ZP)(t),
    u = (0, o.e7)([E.Z, j.default, P.Z], () => {
      let e = E.Z.getChannel(t.parent_id);
      return null == e ? null : (0, m.F6)(e, j.default, P.Z, false)
    }),
    c = (0, o.e7)([v.ZP], () => v.ZP.lastMessageTimestamp(t.id, N.W.CHANNEL)),
    f = null == i ? true : i.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? d.Mmi : d.VL1;
    f = (0, l.jsxs)("div", {
      className: C.threadSubLabel,
      children: [(0, l.jsx)(e, {
        color: d.TVs.colors.TEXT_SECONDARY,
        className: C.subLabelIcon
      }), (0, l.jsx)(d.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: u
      }), null != c ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.Text, {
          className: C.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, O.Xf)(a()(c))
        })]
      }) : null]
    })
  }
  return (0, l.jsx)(T, A(M({}, r), {
    icon: (0, l.jsx)(g.Z, {
      size: g.E.SMALL_32,
      guild: i,
      channel: t
    }),
    label: s,
    subLabel: null != n ? n : f
  }))
}

function U(e) {
  let {
    rowData: t,
    message: n,
    originChannel: i,
    selectedDestinations: s,
    handleToggleDestination: u,
    disableSelection: a,
    rowClassName: c,
    validateDestination: o
  } = e, d = r.useMemo(() => {
    var e;
    return null != (e = null == s ? true : s.map(y.hC)) ? e : []
  }, [s]), f = r.useCallback(e => {
    let {
      section: r,
      row: s
    } = e;
    if (r > 0) return;
    let {
      type: f,
      record: m
    } = t[s];
    if (f === h.h8.HEADER) return;
    let b = f === h.h8.USER ? {
        type: "user",
        id: m.id
      } : {
        type: "channel",
        id: m.id
      },
      g = (0, y.hC)(b),
      p = (0, _.HY)(n, i, m, o),
      E = d.includes(g),
      S = {
        key: g,
        message: n,
        destination: b,
        subLabel: null != p ? p.label : true,
        disabled: a && !E || null != p,
        selected: E,
        onPressDestination: u,
        "aria-posinset": s + 1,
        "aria-setsize": t.length,
        className: c
      };
    return f === h.h8.USER ? (0, l.jsx)(D, M({
      user: m
    }, S)) : f === h.h8.GROUP_DM ? (0, l.jsx)(w, M({
      channel: m
    }, S)) : f === h.h8.TEXT_CHANNEL || f === h.h8.VOICE_CHANNEL ? (0, l.jsx)(R, M({
      channel: m
    }, S)) : void(0, x.vE)(f)
  }, [a, u, n, i, t, d, c, o]);
  return {
    sections: [t.length],
    sectionHeight: 0,
    rowHeight: 48,
    renderRow: f
  }
}