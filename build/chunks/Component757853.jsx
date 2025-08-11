/** Chunk was on 33648 **/
/** chunk id: 757853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => K,
  G: () => H
}), require("./388685.js");
var l, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
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
  Chunk691176 = require("./691176.js");

function D(e) {
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

function W(e, t) {
  if (null == e) return {};
  var n, l, r = function(e, t) {
    if (null == e) return {};
    var n, l, r = {},
      a = Object.keys(e);
    for (l = 0; l < a.length; l++) n = a[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (l = 0; l < a.length; l++) n = a[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
var H = ((l = {}).TOGGLE = "toggle", l.SEND = "send", l);

function G(e) {
  let {
    message: t,
    destination: n,
    rowMode: l,
    icon: i,
    label: o,
    subLabel: c,
    selected: d,
    disabled: m,
    onPressDestination: _,
    "aria-setsize": p,
    "aria-posinset": b
  } = e, y = (0, u.JA)(n.id), [v, x] = a.useState(false), E = a.useRef(false), C = a.useCallback(() => {
    if ("send" === l) {
      x(true), E.current = true;
      return
    }
    null == _ || _(n)
  }, [l, _, n]), S = a.useCallback(() => {
    j.default.track(R.rMx.FORWARD_ONE_TAP_VIEW, {
      channel_id: t.channel_id,
      message_id: t.id
    }), E.current = false, null == _ || _(n, {
      transitionToDestination: true,
      closeAfterSend: true
    })
  }, [t.channel_id, t.id, _, n]), O = a.useCallback(() => {
    x(false), E.current = false, j.default.track(R.rMx.FORWARD_ONE_TAP_UNDO, {
      channel_id: t.channel_id,
      message_id: t.id
    })
  }, [t]);
  return (0, g.ZP)(() => () => {
    E.current && (E.current = false, null == _ || _(n, {
      transitionToDestination: false,
      closeAfterSend: false
    }))
  }), (0, r.jsxs)(f.P3F, U(D({
    className: s()(k.destinationRow, {
      [k.disabled]: m
    }),
    onClick: m || v ? true : C,
    "aria-selected": d,
    "aria-setsize": p,
    "aria-posinset": b
  }, y), {
    children: [(0, r.jsxs)("div", {
      className: k.identity,
      children: [(0, r.jsx)("div", {
        className: k.iconWrapper,
        children: i
      }), (0, r.jsxs)("div", {
        className: k.labels,
        children: [(0, r.jsx)(f.Text, {
          tag: "strong",
          className: k.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: o
        }), (0, r.jsx)(f.Text, {
          className: k.subLabel,
          variant: "text-xs/normal",
          color: "text-muted",
          children: c
        })]
      })]
    }), "toggle" === l && (0, r.jsx)(f.XZJ, {
      type: f.XZJ.Types.INVERTED,
      displayOnly: true,
      size: 24,
      value: d,
      disabled: m,
      className: k.checkbox
    }), "send" === l && !m && (0, r.jsxs)("div", {
      className: k.actions,
      children: [v ? (0, r.jsx)(f.zxk, {
        variant: "secondary",
        size: "sm",
        text: M.intl.string(M.t["HO/oXl"]),
        onClick: S
      }) : (0, r.jsx)("div", {
        className: s()((0, h.nY)({
          size: h.zx.Sizes.SMALL,
          color: h.zx.Colors.BRAND
        }), k.fauxButton),
        children: M.intl.string(M.t.TXNS7e)
      }), v && (0, r.jsx)(h.zx, {
        size: h.zx.Sizes.SMALL,
        color: h.zx.Colors.BRAND,
        look: h.zx.Looks.OUTLINED,
        onClick: O,
        children: M.intl.string(M.t.KyUKhY)
      })]
    })]
  }))
}

function F(e) {
  var {
    user: t,
    subLabel: n
  } = e, l = W(e, ["user", "subLabel"]);
  let a = T.ZP.useName(t),
    i = T.ZP.useUserTag(t, {
      decoration: "never"
    }),
    s = (0, d.e7)([w.Z], () => w.Z.getNickname(t.id)),
    o = (0, d.e7)([O.Z], () => O.Z.getStatus(t.id));
  return (0, r.jsx)(G, U(D({}, l), {
    icon: (0, r.jsx)(m.Z, {
      "aria-hidden": true,
      size: f.EFr.SIZE_32,
      user: t,
      status: o
    }),
    label: null != s ? s : a,
    subLabel: null != n ? n : i
  }))
}

function V(e) {
  var {
    channel: t,
    subLabel: n
  } = e, l = W(e, ["channel", "subLabel"]);
  let a = (0, b.ZP)(t),
    i = (0, x._)(t);
  return (0, r.jsx)(G, U(D({}, l), {
    icon: (0, r.jsx)(y.Z, {
      "aria-hidden": true,
      size: f.EFr.SIZE_32,
      channel: t,
      experimentLocation: "forward-modal"
    }),
    label: a,
    subLabel: null != n ? n : i
  }))
}

function z(e) {
  var {
    channel: t,
    subLabel: n
  } = e, l = W(e, ["channel", "subLabel"]);
  let a = (0, d.e7)([S.Z], () => S.Z.getGuild(null == t ? true : t.guild_id)),
    i = (0, b.ZP)(t),
    s = (0, d.e7)([C.Z, Z.default, w.Z], () => {
      let e = C.Z.getChannel(t.parent_id);
      return null == e ? null : (0, b.F6)(e, Z.default, w.Z, false)
    }),
    o = (0, d.e7)([P.ZP], () => P.ZP.lastMessageTimestamp(t.id, A.W.CHANNEL)),
    u = null == a ? true : a.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? f.Mmi : f.VL1;
    u = (0, r.jsxs)("div", {
      className: k.threadSubLabel,
      children: [(0, r.jsx)(e, {
        color: f.TVs.colors.TEXT_SECONDARY,
        className: k.subLabelIcon
      }), (0, r.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: s
      }), null != o ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(f.Text, {
          className: k.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, r.jsx)(f.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, N.Xf)(c()(o))
        })]
      }) : null]
    })
  }
  return (0, r.jsx)(G, U(D({}, l), {
    icon: (0, r.jsx)(v.Z, {
      size: v.E.SMALL_32,
      guild: a,
      channel: t
    }),
    label: i,
    subLabel: null != n ? n : u
  }))
}

function K(e) {
  var {
    rowData: t,
    rowMode: n,
    message: l,
    originChannel: i,
    selectedDestinations: s,
    handleToggleDestination: o,
    disableSelection: c
  } = e, d = W(e, ["rowData", "rowMode", "message", "originChannel", "selectedDestinations", "handleToggleDestination", "disableSelection"]);
  let h = a.useMemo(() => [t.length], [t.length]),
    m = a.useCallback(() => 48, []),
    g = a.useMemo(() => {
      var e;
      return null != (e = null == s ? true : s.map(E.hC)) ? e : []
    }, [s]),
    b = a.useCallback(e => {
      let {
        section: a,
        row: s
      } = e;
      if (a > 0) return;
      let {
        type: u,
        record: d
      } = t[s];
      if (u === p.h8.HEADER) return;
      let h = u === p.h8.USER ? {
          type: "user",
          id: d.id
        } : {
          type: "channel",
          id: d.id
        },
        f = (0, E.hC)(h),
        m = (0, L.HY)(l, i, d),
        _ = g.includes(f),
        b = {
          key: f,
          message: l,
          destination: h,
          rowMode: n,
          subLabel: null != m ? m.label : true,
          disabled: c && !_ || null != m,
          selected: _,
          onPressDestination: o,
          "aria-posinset": s + 1,
          "aria-setsize": t.length
        };
      return u === p.h8.USER ? (0, r.jsx)(F, D({
        user: d
      }, b)) : u === p.h8.GROUP_DM ? (0, r.jsx)(V, D({
        channel: d
      }, b)) : u === p.h8.TEXT_CHANNEL || u === p.h8.VOICE_CHANNEL ? (0, r.jsx)(z, D({
        channel: d
      }, b)) : void(0, I.vE)(u)
    }, [c, o, l, i, t, n, g]),
    y = a.useRef(null),
    v = (0, _.Z)("forward-modal", y);
  return (0, r.jsx)(u.bG, {
    navigator: v,
    children: (0, r.jsx)(u.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = W(e, ["ref"]);
        return (0, r.jsx)(f.YAO, U(D({
          scrollerRef: e => {
            var n;
            y.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
          }
        }, n, d), {
          sections: h,
          sectionHeight: 0,
          renderRow: b,
          rowHeight: m
        }))
      }
    })
  })
}