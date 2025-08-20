/** Chunk was on 33648 **/
/** chunk id: 757853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => V,
  G: () => G
}), require("./388685.js");
var l, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
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
  Chunk773921 = require("./773921.js");

function k(e) {
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

function F(e, t) {
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
var G = ((l = {}).TOGGLE = "toggle", l.SEND = "send", l);

function U(e) {
  let {
    message: t,
    destination: n,
    rowMode: l,
    icon: s,
    label: o,
    subLabel: u,
    selected: d,
    disabled: m,
    onPressDestination: p,
    "aria-setsize": b,
    "aria-posinset": _
  } = e, v = (0, c.JA)(n.id), [x, y] = a.useState(false), w = a.useRef(false), j = a.useCallback(() => {
    if ("send" === l) {
      y(true), w.current = true;
      return
    }
    null == p || p(n)
  }, [l, p, n]), O = a.useCallback(() => {
    Z.default.track(R.rMx.FORWARD_ONE_TAP_VIEW, {
      channel_id: t.channel_id,
      message_id: t.id
    }), w.current = false, null == p || p(n, {
      transitionToDestination: true,
      closeAfterSend: true
    })
  }, [t.channel_id, t.id, p, n]), P = a.useCallback(() => {
    y(false), w.current = false, Z.default.track(R.rMx.FORWARD_ONE_TAP_UNDO, {
      channel_id: t.channel_id,
      message_id: t.id
    })
  }, [t]);
  return (0, g.ZP)(() => () => {
    w.current && (w.current = false, null == p || p(n, {
      transitionToDestination: false,
      closeAfterSend: false
    }))
  }), (0, r.jsxs)(f.P3F, F(k({
    className: i()(A.destinationRow, {
      [A.disabled]: m
    }),
    onClick: m || x ? true : j,
    "aria-selected": d,
    "aria-setsize": b,
    "aria-posinset": _
  }, v), {
    children: [(0, r.jsxs)("div", {
      className: A.identity,
      children: [(0, r.jsx)("div", {
        className: A.iconWrapper,
        children: s
      }), (0, r.jsxs)("div", {
        className: A.labels,
        children: [(0, r.jsx)(f.Text, {
          tag: "strong",
          className: A.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: o
        }), (0, r.jsx)(f.Text, {
          className: A.subLabel,
          variant: "text-xs/normal",
          color: "text-muted",
          children: u
        })]
      })]
    }), "toggle" === l && (0, r.jsx)(f.XZJ, {
      type: f.XZJ.Types.INVERTED,
      displayOnly: true,
      size: 24,
      value: d,
      disabled: m,
      className: A.checkbox
    }), "send" === l && !m && (0, r.jsxs)("div", {
      className: A.actions,
      children: [x ? (0, r.jsx)(f.zxk, {
        variant: "secondary",
        size: "sm",
        text: I.intl.string(I.t["HO/oXl"]),
        onClick: O
      }) : (0, r.jsx)("div", {
        className: i()((0, h.nY)({
          size: h.zx.Sizes.SMALL,
          color: h.zx.Colors.BRAND
        }), A.fauxButton),
        children: I.intl.string(I.t.TXNS7e)
      }), x && (0, r.jsx)(h.zx, {
        size: h.zx.Sizes.SMALL,
        color: h.zx.Colors.BRAND,
        look: h.zx.Looks.OUTLINED,
        onClick: P,
        children: I.intl.string(I.t.KyUKhY)
      })]
    })]
  }))
}

function z(e) {
  var {
    user: t,
    subLabel: n
  } = e, l = W(e, ["user", "subLabel"]);
  let a = M.ZP.useName(t),
    s = M.ZP.useUserTag(t, {
      decoration: "never"
    }),
    i = (0, d.e7)([E.Z], () => E.Z.getNickname(t.id)),
    o = (0, d.e7)([P.Z], () => P.Z.getStatus(t.id));
  return (0, r.jsx)(U, F(k({}, l), {
    icon: (0, r.jsx)(m.Z, {
      "aria-hidden": true,
      size: f.EFr.SIZE_32,
      user: t,
      status: o
    }),
    label: null != i ? i : a,
    subLabel: null != n ? n : s
  }))
}

function H(e) {
  var {
    channel: t,
    subLabel: n
  } = e, l = W(e, ["channel", "subLabel"]);
  let a = (0, _.ZP)(t),
    s = (0, y._)(t);
  return (0, r.jsx)(U, F(k({}, l), {
    icon: (0, r.jsx)(v.Z, {
      "aria-hidden": true,
      size: f.EFr.SIZE_32,
      channel: t,
      experimentLocation: "forward-modal"
    }),
    label: a,
    subLabel: null != n ? n : s
  }))
}

function B(e) {
  var {
    channel: t,
    subLabel: n
  } = e, l = W(e, ["channel", "subLabel"]);
  let a = (0, d.e7)([O.Z], () => O.Z.getGuild(null == t ? true : t.guild_id)),
    s = (0, _.ZP)(t),
    i = (0, d.e7)([j.Z, C.default, E.Z], () => {
      let e = j.Z.getChannel(t.parent_id);
      return null == e ? null : (0, _.F6)(e, C.default, E.Z, false)
    }),
    o = (0, d.e7)([S.ZP], () => S.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL)),
    c = null == a ? true : a.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? f.Mmi : f.VL1;
    c = (0, r.jsxs)("div", {
      className: A.threadSubLabel,
      children: [(0, r.jsx)(e, {
        color: f.TVs.colors.TEXT_SECONDARY,
        className: A.subLabelIcon
      }), (0, r.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: i
      }), null != o ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(f.Text, {
          className: A.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, r.jsx)(f.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, N.Xf)(u()(o))
        })]
      }) : null]
    })
  }
  return (0, r.jsx)(U, F(k({}, l), {
    icon: (0, r.jsx)(x.Z, {
      size: x.E.SMALL_32,
      guild: a,
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
    selectedDestinations: i,
    handleToggleDestination: o,
    disableSelection: u
  } = e, d = W(e, ["rowData", "rowMode", "message", "originChannel", "selectedDestinations", "handleToggleDestination", "disableSelection"]);
  let h = a.useMemo(() => [t.length], [t.length]),
    m = a.useCallback(() => 48, []),
    g = a.useMemo(() => {
      var e;
      return null != (e = null == i ? true : i.map(w.hC)) ? e : []
    }, [i]),
    _ = a.useCallback(e => {
      let {
        section: a,
        row: i
      } = e;
      if (a > 0) return;
      let {
        type: c,
        record: d
      } = t[i];
      if (c === b.h8.HEADER) return;
      let h = c === b.h8.USER ? {
          type: "user",
          id: d.id
        } : {
          type: "channel",
          id: d.id
        },
        f = (0, w.hC)(h),
        m = (0, T.HY)(l, s, d),
        p = g.includes(f),
        _ = {
          key: f,
          message: l,
          destination: h,
          rowMode: n,
          subLabel: null != m ? m.label : true,
          disabled: u && !p || null != m,
          selected: p,
          onPressDestination: o,
          "aria-posinset": i + 1,
          "aria-setsize": t.length
        };
      return c === b.h8.USER ? (0, r.jsx)(z, k({
        user: d
      }, _)) : c === b.h8.GROUP_DM ? (0, r.jsx)(H, k({
        channel: d
      }, _)) : c === b.h8.TEXT_CHANNEL || c === b.h8.VOICE_CHANNEL ? (0, r.jsx)(B, k({
        channel: d
      }, _)) : void(0, L.vE)(c)
    }, [u, o, l, s, t, n, g]),
    v = a.useRef(null),
    x = (0, p.Z)("forward-modal", v);
  return (0, r.jsx)(c.bG, {
    navigator: x,
    children: (0, r.jsx)(c.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = W(e, ["ref"]);
        return (0, r.jsx)(f.YAO, F(k({
          scrollerRef: e => {
            var n;
            v.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
          }
        }, n, d), {
          sections: h,
          sectionHeight: 0,
          renderRow: _,
          rowHeight: m
        }))
      }
    })
  })
}