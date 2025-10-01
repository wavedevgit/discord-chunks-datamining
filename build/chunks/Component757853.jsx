/** Chunk was on 47051 **/
/** chunk id: 757853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => V,
  G: () => F
}), require("./388685.js");
var l, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk724757 = require("./724757.js"),
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
  Chunk626135 = require("./626135.js"),
  Chunk55935 = require("./55935.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk784384 = require("./784384.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk132358 = require("./132358.js");

function R(e) {
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

function U(e, t) {
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

function z(e, t) {
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
var F = ((l = {}).TOGGLE = "toggle", l.SEND = "send", l);

function G(e) {
  let {
    message: t,
    destination: n,
    rowMode: l,
    icon: s,
    label: u,
    subLabel: o,
    selected: d,
    disabled: m,
    onPressDestination: b,
    "aria-setsize": p,
    "aria-posinset": y,
    className: S
  } = e, E = (0, c.JA)(n.id), [x, v] = i.useState(false), O = i.useRef(false), Z = i.useCallback(() => {
    if ("send" === l) {
      v(true), O.current = true;
      return
    }
    null == b || b(n)
  }, [l, b, n]), j = i.useCallback(() => {
    N.default.track(T.rMx.FORWARD_ONE_TAP_VIEW, {
      channel_id: t.channel_id,
      message_id: t.id
    }), O.current = false, null == b || b(n, {
      transitionToDestination: true,
      closeAfterSend: true
    })
  }, [t.channel_id, t.id, b, n]), L = i.useCallback(() => {
    v(false), O.current = false, N.default.track(T.rMx.FORWARD_ONE_TAP_UNDO, {
      channel_id: t.channel_id,
      message_id: t.id
    })
  }, [t]);
  return (0, g.ZP)(() => () => {
    O.current && (O.current = false, null == b || b(n, {
      transitionToDestination: false,
      closeAfterSend: false
    }))
  }), (0, r.jsxs)(h.P3F, U(R({
    className: a()(I.destinationRow, S, {
      [I.disabled]: m
    }),
    onClick: m || x ? true : Z,
    "aria-selected": d,
    "aria-setsize": p,
    "aria-posinset": y
  }, E), {
    children: [(0, r.jsxs)("div", {
      className: I.identity,
      children: [(0, r.jsx)("div", {
        className: I.iconWrapper,
        children: s
      }), (0, r.jsxs)("div", {
        className: I.labels,
        children: [(0, r.jsx)(h.Text, {
          tag: "strong",
          className: I.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: u
        }), (0, r.jsx)(h.Text, {
          className: I.subLabel,
          variant: "text-xs/normal",
          color: "text-muted",
          children: o
        })]
      })]
    }), "toggle" === l && (0, r.jsx)(f.VL, {
      checked: !!d,
      disabled: m,
      className: I.checkbox,
      isIndicator: true
    }), "send" === l && !m && (0, r.jsxs)("div", {
      className: I.actions,
      children: [x ? (0, r.jsx)(h.zxk, {
        variant: "secondary",
        size: "sm",
        text: k.intl.string(k.t["HO/oXl"]),
        onClick: j
      }) : (0, r.jsx)("div", {
        className: a()((0, f.nY)({
          size: f.zx.Sizes.SMALL,
          color: f.zx.Colors.BRAND
        }), I.fauxButton),
        children: k.intl.string(k.t.TXNS7e)
      }), x && (0, r.jsx)(f.zx, {
        size: f.zx.Sizes.SMALL,
        color: f.zx.Colors.BRAND,
        look: f.zx.Looks.OUTLINED,
        onClick: L,
        children: k.intl.string(k.t.KyUKhY)
      })]
    })]
  }))
}

function H(e) {
  var {
    user: t,
    subLabel: n
  } = e, l = z(e, ["user", "subLabel"]);
  let i = M.ZP.useName(t),
    s = M.ZP.useUserTag(t, {
      decoration: "never"
    }),
    a = (0, d.e7)([P.Z], () => P.Z.getNickname(t.id)),
    u = (0, d.e7)([j.Z], () => j.Z.getStatus(t.id));
  return (0, r.jsx)(G, U(R({}, l), {
    icon: (0, r.jsx)(m.Z, {
      "aria-hidden": true,
      size: h.EFr.SIZE_32,
      user: t,
      status: u
    }),
    label: null != a ? a : i,
    subLabel: null != n ? n : s
  }))
}

function W(e) {
  var {
    channel: t,
    subLabel: n
  } = e, l = z(e, ["channel", "subLabel"]);
  let i = (0, y.ZP)(t),
    s = (0, x._)(t);
  return (0, r.jsx)(G, U(R({}, l), {
    icon: (0, r.jsx)(S.Z, {
      "aria-hidden": true,
      size: h.EFr.SIZE_32,
      channel: t,
      experimentLocation: "forward-modal"
    }),
    label: i,
    subLabel: null != n ? n : s
  }))
}

function q(e) {
  var {
    channel: t,
    subLabel: n
  } = e, l = z(e, ["channel", "subLabel"]);
  let i = (0, d.e7)([Z.Z], () => Z.Z.getGuild(null == t ? true : t.guild_id)),
    s = (0, y.ZP)(t),
    a = (0, d.e7)([O.Z, _.default, P.Z], () => {
      let e = O.Z.getChannel(t.parent_id);
      return null == e ? null : (0, y.F6)(e, _.default, P.Z, false)
    }),
    u = (0, d.e7)([L.ZP], () => L.ZP.lastMessageTimestamp(t.id, w.W.CHANNEL)),
    c = null == i ? true : i.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? h.Mmi : h.VL1;
    c = (0, r.jsxs)("div", {
      className: I.threadSubLabel,
      children: [(0, r.jsx)(e, {
        color: h.TVs.colors.TEXT_SECONDARY,
        className: I.subLabelIcon
      }), (0, r.jsx)(h.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: a
      }), null != u ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.Text, {
          className: I.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, C.Xf)(o()(u))
        })]
      }) : null]
    })
  }
  return (0, r.jsx)(G, U(R({}, l), {
    icon: (0, r.jsx)(E.Z, {
      size: E.E.SMALL_32,
      guild: i,
      channel: t
    }),
    label: s,
    subLabel: null != n ? n : c
  }))
}

function V(e) {
  var {
    rowData: t,
    rowMode: n,
    message: l,
    originChannel: s,
    selectedDestinations: a,
    handleToggleDestination: u,
    disableSelection: o,
    rowClassName: d
  } = e, f = z(e, ["rowData", "rowMode", "message", "originChannel", "selectedDestinations", "handleToggleDestination", "disableSelection", "rowClassName"]);
  let m = i.useMemo(() => [t.length], [t.length]),
    g = i.useCallback(() => 48, []),
    y = i.useMemo(() => {
      var e;
      return null != (e = null == a ? true : a.map(v.hC)) ? e : []
    }, [a]),
    S = i.useCallback(e => {
      let {
        section: i,
        row: a
      } = e;
      if (i > 0) return;
      let {
        type: c,
        record: f
      } = t[a];
      if (c === p.h8.HEADER) return;
      let h = c === p.h8.USER ? {
          type: "user",
          id: f.id
        } : {
          type: "channel",
          id: f.id
        },
        m = (0, v.hC)(h),
        g = (0, D.HY)(l, s, f),
        b = y.includes(m),
        S = {
          key: m,
          message: l,
          destination: h,
          rowMode: n,
          subLabel: null != g ? g.label : true,
          disabled: o && !b || null != g,
          selected: b,
          onPressDestination: u,
          "aria-posinset": a + 1,
          "aria-setsize": t.length,
          className: d
        };
      return c === p.h8.USER ? (0, r.jsx)(H, R({
        user: f
      }, S)) : c === p.h8.GROUP_DM ? (0, r.jsx)(W, R({
        channel: f
      }, S)) : c === p.h8.TEXT_CHANNEL || c === p.h8.VOICE_CHANNEL ? (0, r.jsx)(q, R({
        channel: f
      }, S)) : void(0, A.vE)(c)
    }, [o, u, l, s, t, n, y, d]),
    E = i.useRef(null),
    x = (0, b.Z)("forward-modal", E);
  return (0, r.jsx)(c.bG, {
    navigator: x,
    children: (0, r.jsx)(c.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = z(e, ["ref"]);
        return (0, r.jsx)(h.YAO, U(R({
          scrollerRef: e => {
            var n;
            E.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
          }
        }, n, f), {
          sections: m,
          sectionHeight: 0,
          renderRow: S,
          rowHeight: g
        }))
      }
    })
  })
}