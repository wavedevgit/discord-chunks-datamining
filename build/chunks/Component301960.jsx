/** Chunk was on web.js **/
/** chunk id: 301960, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => z
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  u = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk811024 = require("./811024.js"),
  Chunk795816 = require("./795816.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk735991 = require("./735991.js"),
  Chunk975412 = require("./975412.jsx"),
  Chunk168186 = require("./168186.js"),
  Chunk597929 = require("./597929.js"),
  Chunk589022 = require("./589022.jsx"),
  Chunk427157 = require("./427157.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk203982 = require("./203982.js"),
  Chunk405269 = require("./405269.js"),
  Chunk763754 = require("./763754.js"),
  Chunk635071 = require("./635071.jsx"),
  Chunk728963 = require("./728963.jsx"),
  Chunk943815 = require("./943815.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk679740 = require("./679740.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = V(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function V(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function F(e) {
  let {
    width: t = 6,
    height: n = 10,
    color: i = "currentColor",
    className: a,
    foreground: s
  } = e;
  return (0, r.jsx)("svg", {
    className: a,
    width: t,
    height: n,
    viewBox: "0 0 6 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, r.jsx)("path", {
      d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
      className: s,
      fill: i
    })
  })
}

function B(e) {
  let {
    user: t,
    guildId: n,
    guildAvatar: i,
    onClick: a,
    onContextMenu: o,
    onMouseDown: l,
    ref: c
  } = e;
  return (0, r.jsx)("img", {
    alt: "",
    src: null != i ? i : t.getAvatarURL(n, 16),
    onClick: a,
    onContextMenu: o,
    onMouseDown: l,
    className: s()({
      [L.WU]: true,
      [L.vk]: null != a
    }),
    ref: c
  })
}

function H(e, t, n, i, a, s) {
  var o, l, c;
  let {
    message: u,
    compact: d,
    channel: p,
    isInteractionUserBlocked: _,
    isInteractionUserIgnored: h,
    showAvatarPopout: m,
    showTargetAvatarPopout: g,
    onClickAvatar: E,
    onUserContextMenu: y,
    onClickTargetAvatar: b,
    onTargetUserContextMenu: O,
    onPopoutRequestClose: v
  } = e;
  if (d && 1 === n) return null;
  if (d && null == u.activityInstance || _ || h) return (0, r.jsx)("div", {
    className: L.Cz,
    children: (0, r.jsx)(F, {
      className: L.Jx
    })
  });
  let A = null != (o = S.Ay.getGuildMemberAvatarURL({
      avatar: null != (l = i.guildMemberAvatar) ? l : true,
      userId: t.id,
      guildId: null != (c = null == p ? true : p.guild_id) ? c : ""
    })) ? o : true,
    I = () => B({
      user: t,
      guildId: p.guild_id,
      guildAvatar: A,
      onClick: 1 === n ? b : E,
      onContextMenu: 1 === n ? O : y,
      ref: s
    }),
    T = 1 === n ? g : m;
  return null != a && null != T && null != s ? (0, r.jsx)(f.YNO, {
    targetElementRef: s,
    renderPopout: a,
    shouldShow: T,
    position: "right",
    onRequestClose: v,
    children: I
  }) : I()
}

function Y(e, t, n, i, a) {
  let {
    message: s,
    channel: o,
    showUsernamePopout: l,
    showTargetUsernamePopout: c,
    onClickUsername: u,
    onUserContextMenu: d,
    onClickTargetUsername: f,
    onTargetUserContextMenu: p,
    onPopoutRequestClose: _
  } = e;
  return (0, r.jsx)(w.A, {
    className: 1 === n ? L.iu : "",
    compact: true,
    author: i,
    message: s,
    channel: o,
    userOverride: t,
    showPopout: 1 === n ? c : l,
    renderPopout: a,
    onClick: 1 === n ? f : u,
    onContextMenu: 1 === n ? p : d,
    onPopoutRequestClose: _
  })
}

function W(e, t, n) {
  let {
    showDataPopout: i,
    message: a,
    onClickCommand: o,
    onPopoutRequestClose: l
  } = e, c = a.interaction.displayName;
  return (0, r.jsx)(f.YNO, {
    targetElementRef: n,
    renderPopout: t,
    shouldShow: i,
    position: "top",
    align: "center",
    onRequestClose: l,
    animation: f.YNO.Animation.FADE,
    positionKey: null != a.interactionData ? "ready" : "loading",
    children: e => {
      let {
        onClick: t
      } = e, i = G(e, ["onClick"]);
      if (a.type === D.lAJ.CHAT_INPUT_COMMAND || a.type === D.lAJ.INTERACTION_PREMIUM_UPSELL) return (0, r.jsx)(f.DUT, U(M({}, i), {
        tag: "span",
        onClick: o,
        innerRef: n,
        children: (0, r.jsxs)("div", {
          className: s()(L.lm, L.vk),
          children: [(0, r.jsx)(f.k9F, {
            size: "custom",
            color: "currentColor",
            height: 10,
            width: 10,
            className: L.am
          }), c]
        })
      }));
      if (!(0, O.V)(a)) return (0, r.jsx)("div", {
        className: L.p6,
        ref: n,
        children: c
      });
      {
        let e = () => {
            T._.dispatchToLastSubscribed(D.jej.OPEN_APP_LAUNCHER, {
              applicationId: a.applicationId
            })
          },
          t = (0, E.kF)(c);
        return (0, r.jsx)(f.DUT, U(M({}, i), {
          tag: "span",
          onClick: e,
          innerRef: n,
          children: (0, r.jsxs)("div", {
            className: s()(L.lm, L.vk),
            children: [(0, r.jsx)(f.k9F, {
              size: "custom",
              color: "currentColor",
              height: 10,
              width: 10,
              className: L.am
            }), t]
          })
        }))
      }
    }
  })
}
let K = () => (0, r.jsx)(f._BQ, {
  size: "xxs",
  color: "currentColor",
  className: L.M5
});

function z(e) {
  var t;
  let n, {
      message: a,
      channel: o
    } = e,
    {
      analyticsLocations: c,
      newestAnalyticsLocation: E
    } = (0, g.Ay)(m.A.EXECUTED_COMMAND),
    S = (0, d.bG)([I.default], () => I.default.getCurrentUser()),
    T = i.useRef(null),
    w = i.useRef(null),
    D = i.useMemo(() => (e, t, n) => (l()(null != t, "ExecutedCommand: user cannot be undefined"), l()(null != S, "ExecutedCommand: currentUser cannot be undefined"), l()(null != o, "ExecutedCommand: channel cannot be undefined"), (0, r.jsx)(v.A, U(M({}, e), {
      user: t,
      currentUser: S,
      guildId: o.guild_id,
      channelId: o.id,
      messageId: a.id,
      newAnalyticsLocations: n
    }))), [S, o, a.id]),
    j = i.useMemo(() => e => (l()(null != o, "ExecutedCommand: channel cannot be null"), (0, r.jsx)(R.A, U(M({}, e), {
      channel: o,
      messageId: a.id,
      interactionData: a.interactionData
    }))), [o, a.id, a.interactionData]),
    k = (0, b.Am)(a),
    G = (null == k ? true : k.type) === p.G4.APPLICATION_COMMAND && null != k.target_user ? new A.A(k.target_user) : null,
    V = (null == k ? true : k.type) === p.G4.APPLICATION_COMMAND && null != a.messageReference && null != e.renderTargetMessage,
    F = (0, N.d8)(null == (t = a.interaction) ? true : t.user, o),
    B = (0, N.d8)(G, o),
    z = i.useMemo(() => e.compact ? (0, P.A)((0, C.i$)(u()(), "LT")) : null, [e.compact]),
    q = (0, _.Gp)(o.id),
    Z = a.interaction;
  if (null == Z || null == F) return null;
  let X = () => {
      let t = H(e, Z.user, 0, F, e => D(e, Z.user, [m.A.AVATAR]), T),
        n = Y(e, Z.user, 0, F, e => D(e, Z.user));
      return (0, r.jsxs)(i.Fragment, {
        children: [t, n]
      }, "user")
    },
    Q = () => {
      if (null == G) return null;
      let t = H(e, G, 1, B, e => D(e, G, [m.A.AVATAR]), T),
        n = Y(e, G, 1, B, e => D(e, G));
      return (0, r.jsxs)(i.Fragment, {
        children: [t, n]
      }, "target")
    };
  if ((null == a ? true : a.activityInstance) === null || (0, O.V)(a)) {
    let t = () => {
      let t = W(e, j, w);
      return (0, r.jsx)(i.Fragment, {
        children: t
      }, "command")
    };
    n = x.intl.format(x.t["rg7U+C"], {
      userHook: X,
      commandHook: t
    }), V && null != e.renderTargetMessage ? n = (0, r.jsxs)(r.Fragment, {
      children: [n, (0, r.jsx)(K, {}), e.renderTargetMessage()]
    }) : null != G && (n = (0, r.jsxs)(r.Fragment, {
      children: [n, (0, r.jsx)(K, {}), (0, r.jsx)(Q, {})]
    }))
  } else {
    let e = () => {
        (0, y.A)({
          context: null != o ? {
            type: "channel",
            channel: o
          } : {
            type: "contextless"
          },
          openInPopout: false,
          analyticsLocation: E
        }), (0, h.LV)({
          guildId: o.guild_id
        })
      },
      t = () => (0, r.jsx)(f.DUT, {
        tag: "span",
        onClick: e,
        children: (0, r.jsx)("div", {
          className: s()(L.p6, L.vk),
          children: x.intl.string(x.t.YTgRvn)
        })
      });
    n = q ? x.intl.format(x.t.kfV8WM, {
      userHook: X,
      activityHook: t
    }) : x.intl.format(x.t["6FeSyT"], {
      userHook: X
    })
  }
  return (0, r.jsx)(g.f5, {
    value: c,
    children: (0, r.jsx)("div", {
      className: s()(L.JZ, L.NB, L.JE, z),
      "aria-hidden": !e.compact,
      children: n
    })
  })
}