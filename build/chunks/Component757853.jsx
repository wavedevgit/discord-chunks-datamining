/** Chunk was on 19157 **/
/** chunk id: 757853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => z,
  G: () => U
}), require("./388685.js");
var l, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function G(e, t) {
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

function M(e, t) {
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
var U = ((l = {}).TOGGLE = "toggle", l.SEND = "send", l);

function H(e) {
  let {
    message: t,
    destination: n,
    rowMode: l,
    icon: a,
    label: o,
    subLabel: c,
    selected: d,
    disabled: _,
    onPressDestination: m,
    "aria-setsize": p,
    "aria-posinset": E
  } = e, b = (0, u.JA)(n.id), [y, I] = i.useState(false), S = i.useRef(false), A = i.useCallback(() => {
    if ("send" === l) {
      I(true), S.current = true;
      return
    }
    null == m || m(n)
  }, [l, m, n]), O = i.useCallback(() => {
    N.default.track(w.rMx.FORWARD_ONE_TAP_VIEW, {
      channel_id: t.channel_id,
      message_id: t.id
    }), S.current = false, null == m || m(n, {
      transitionToDestination: true,
      closeAfterSend: true
    })
  }, [t.channel_id, t.id, m, n]), v = i.useCallback(() => {
    I(false), S.current = false, N.default.track(w.rMx.FORWARD_ONE_TAP_UNDO, {
      channel_id: t.channel_id,
      message_id: t.id
    })
  }, [t]);
  return (0, g.ZP)(() => () => {
    S.current && (S.current = false, null == m || m(n, {
      transitionToDestination: false,
      closeAfterSend: false
    }))
  }), (0, r.jsxs)(h.P3F, G(k({
    className: s()(F.destinationRow, {
      [F.disabled]: _
    }),
    onClick: _ || y ? true : A,
    "aria-selected": d,
    "aria-setsize": p,
    "aria-posinset": E
  }, b), {
    children: [(0, r.jsxs)("div", {
      className: F.identity,
      children: [(0, r.jsx)("div", {
        className: F.iconWrapper,
        children: a
      }), (0, r.jsxs)("div", {
        className: F.labels,
        children: [(0, r.jsx)(h.Text, {
          tag: "strong",
          className: F.label,
          variant: "text-md/semibold",
          lineClamp: 1,
          children: o
        }), (0, r.jsx)(h.Text, {
          className: F.subLabel,
          variant: "text-xs/normal",
          color: "text-muted",
          children: c
        })]
      })]
    }), "toggle" === l && (0, r.jsx)(h.XZJ, {
      type: h.XZJ.Types.INVERTED,
      displayOnly: true,
      size: 24,
      value: d,
      disabled: _,
      className: F.checkbox
    }), "send" === l && !_ && (0, r.jsxs)("div", {
      className: F.actions,
      children: [y ? (0, r.jsx)(h.zxk, {
        variant: "secondary",
        size: "sm",
        text: R.intl.string(R.t["HO/oXl"]),
        onClick: O
      }) : (0, r.jsx)("div", {
        className: s()((0, f.nY)({
          size: f.zx.Sizes.SMALL,
          color: f.zx.Colors.BRAND
        }), F.fauxButton),
        children: R.intl.string(R.t.TXNS7e)
      }), y && (0, r.jsx)(f.zx, {
        size: f.zx.Sizes.SMALL,
        color: f.zx.Colors.BRAND,
        look: f.zx.Looks.OUTLINED,
        onClick: v,
        children: R.intl.string(R.t.KyUKhY)
      })]
    })]
  }))
}

function W(e) {
  var {
    user: t,
    subLabel: n
  } = e, l = M(e, ["user", "subLabel"]);
  let i = j.ZP.useName(t),
    a = j.ZP.useUserTag(t, {
      decoration: "never"
    }),
    s = (0, d.e7)([x.Z], () => x.Z.getNickname(t.id)),
    o = (0, d.e7)([v.Z], () => v.Z.getStatus(t.id));
  return (0, r.jsx)(H, G(k({}, l), {
    icon: (0, r.jsx)(_.Z, {
      "aria-hidden": true,
      size: h.EFr.SIZE_32,
      user: t,
      status: o
    }),
    label: null != s ? s : i,
    subLabel: null != n ? n : a
  }))
}

function Q(e) {
  var {
    channel: t,
    subLabel: n
  } = e, l = M(e, ["channel", "subLabel"]);
  let i = (0, E.ZP)(t),
    a = (0, I._)(t);
  return (0, r.jsx)(H, G(k({}, l), {
    icon: (0, r.jsx)(b.Z, {
      "aria-hidden": true,
      size: h.EFr.SIZE_32,
      channel: t,
      experimentLocation: "forward-modal"
    }),
    label: i,
    subLabel: null != n ? n : a
  }))
}

function V(e) {
  var {
    channel: t,
    subLabel: n
  } = e, l = M(e, ["channel", "subLabel"]);
  let i = (0, d.e7)([O.Z], () => O.Z.getGuild(null == t ? true : t.guild_id)),
    a = (0, E.ZP)(t),
    s = (0, d.e7)([A.Z, P.default, x.Z], () => {
      let e = A.Z.getChannel(t.parent_id);
      return null == e ? null : (0, E.F6)(e, P.default, x.Z, false)
    }),
    o = (0, d.e7)([C.ZP], () => C.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL)),
    u = null == i ? true : i.name;
  if (t.isThread() || t.isForumPost()) {
    let e = t.isForumPost() ? h.Mmi : h.VL1;
    u = (0, r.jsxs)("div", {
      className: F.threadSubLabel,
      children: [(0, r.jsx)(e, {
        color: h.TVs.colors.TEXT_SECONDARY,
        className: F.subLabelIcon
      }), (0, r.jsx)(h.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        lineClamp: 1,
        children: s
      }), null != o ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.Text, {
          className: F.subLabelSeparator,
          variant: "text-xs/medium",
          color: "text-secondary",
          children: "•"
        }), (0, r.jsx)(h.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: (0, T.Xf)(c()(o))
        })]
      }) : null]
    })
  }
  return (0, r.jsx)(H, G(k({}, l), {
    icon: (0, r.jsx)(y.Z, {
      size: y.E.SMALL_32,
      guild: i,
      channel: t
    }),
    label: a,
    subLabel: null != n ? n : u
  }))
}

function z(e) {
  var {
    rowData: t,
    rowMode: n,
    message: l,
    originChannel: a,
    selectedDestinations: s,
    handleToggleDestination: o,
    disableSelection: c
  } = e, d = M(e, ["rowData", "rowMode", "message", "originChannel", "selectedDestinations", "handleToggleDestination", "disableSelection"]);
  let f = i.useMemo(() => [t.length], [t.length]),
    _ = i.useCallback(() => 48, []),
    g = i.useMemo(() => {
      var e;
      return null != (e = null == s ? true : s.map(S.hC)) ? e : []
    }, [s]),
    E = i.useCallback(e => {
      let {
        section: i,
        row: s
      } = e;
      if (i > 0) return;
      let {
        type: u,
        record: d
      } = t[s];
      if (u === p.h8.HEADER) return;
      let f = u === p.h8.USER ? {
          type: "user",
          id: d.id
        } : {
          type: "channel",
          id: d.id
        },
        h = (0, S.hC)(f),
        _ = (0, Z.HY)(l, a, d),
        m = g.includes(h),
        E = {
          key: h,
          message: l,
          destination: f,
          rowMode: n,
          subLabel: null != _ ? _.label : true,
          disabled: c && !m || null != _,
          selected: m,
          onPressDestination: o,
          "aria-posinset": s + 1,
          "aria-setsize": t.length
        };
      return u === p.h8.USER ? (0, r.jsx)(W, k({
        user: d
      }, E)) : u === p.h8.GROUP_DM ? (0, r.jsx)(Q, k({
        channel: d
      }, E)) : u === p.h8.TEXT_CHANNEL || u === p.h8.VOICE_CHANNEL ? (0, r.jsx)(V, k({
        channel: d
      }, E)) : void(0, L.vE)(u)
    }, [c, o, l, a, t, n, g]),
    b = i.useRef(null),
    y = (0, m.Z)("forward-modal", b);
  return (0, r.jsx)(u.bG, {
    navigator: y,
    children: (0, r.jsx)(u.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = M(e, ["ref"]);
        return (0, r.jsx)(h.YAO, G(k({
          scrollerRef: e => {
            var n;
            b.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
          }
        }, n, d), {
          sections: f,
          sectionHeight: 0,
          renderRow: E,
          rowHeight: _
        }))
      }
    })
  })
}