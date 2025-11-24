/** Chunk was on web.js **/
/** chunk id: 697451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk595519 = require("./595519.js"),
  Chunk566620 = require("./566620.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk783097 = require("./783097.js"),
  Chunk397698 = require("./397698.jsx"),
  Chunk581364 = require("./581364.js"),
  Chunk592180 = require("./592180.js"),
  Chunk726033 = require("./726033.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk585483 = require("./585483.js"),
  Chunk55935 = require("./55935.js"),
  Chunk739566 = require("./739566.js"),
  Chunk421399 = require("./421399.jsx"),
  Chunk310423 = require("./310423.jsx"),
  Chunk223021 = require("./223021.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk724913 = require("./724913.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
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
  var n, r, i = B(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function Z(e) {
  let {
    width: t = 6,
    height: n = 10,
    color: i = "currentColor",
    className: a,
    foreground: o
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
      className: o,
      fill: i
    })
  })
}

function F(e) {
  let {
    user: t,
    guildId: n,
    guildAvatar: i,
    onClick: a,
    onContextMenu: s,
    onMouseDown: l,
    ref: c
  } = e;
  return (0, r.jsx)("img", {
    alt: "",
    src: null != i ? i : t.getAvatarURL(n, 16),
    onClick: a,
    onContextMenu: s,
    onMouseDown: l,
    className: o()({
      [x.executedCommandAvatar]: true,
      [x.clickable]: null != a
    }),
    ref: c
  })
}

function V(e, t, n, i, a, o) {
  var s, l, c;
  let {
    message: u,
    compact: d,
    channel: _,
    isInteractionUserBlocked: p,
    isInteractionUserIgnored: h,
    showAvatarPopout: m,
    showTargetAvatarPopout: g,
    onClickAvatar: E,
    onUserContextMenu: b,
    onClickTargetAvatar: y,
    onTargetUserContextMenu: O,
    onPopoutRequestClose: v
  } = e;
  if (d && 1 === n) return null;
  if (d && null == u.activityInstance || p || h) return (0, r.jsx)("div", {
    className: x.replyBadge,
    children: (0, r.jsx)(Z, {
      className: x.commandIcon
    })
  });
  let I = null != (c = S.ZP.getGuildMemberAvatarURL({
      avatar: null != (s = i.guildMemberAvatar) ? s : true,
      userId: t.id,
      guildId: null != (l = null == _ ? true : _.guild_id) ? l : ""
    })) ? c : true,
    T = () => F({
      user: t,
      guildId: _.guild_id,
      guildAvatar: I,
      onClick: 1 === n ? y : E,
      onContextMenu: 1 === n ? O : b,
      ref: o
    }),
    A = 1 === n ? g : m;
  return null != a && null != A && null != o ? (0, r.jsx)(f.yRy, {
    targetElementRef: o,
    renderPopout: a,
    shouldShow: A,
    position: "right",
    onRequestClose: v,
    children: T
  }) : T()
}

function H(e, t, n, i, a) {
  let {
    message: o,
    channel: s,
    showUsernamePopout: l,
    showTargetUsernamePopout: c,
    onClickUsername: u,
    onUserContextMenu: d,
    onClickTargetUsername: f,
    onTargetUserContextMenu: _,
    onPopoutRequestClose: p
  } = e;
  return (0, r.jsx)(R.Z, {
    className: 1 === n ? x.targetUsername : "",
    compact: true,
    author: i,
    message: o,
    channel: s,
    userOverride: t,
    showPopout: 1 === n ? c : l,
    renderPopout: a,
    onClick: 1 === n ? f : u,
    onContextMenu: 1 === n ? _ : d,
    onPopoutRequestClose: p
  })
}

function Y(e, t, n) {
  let {
    showDataPopout: i,
    message: a,
    onClickCommand: s,
    onPopoutRequestClose: l
  } = e, c = a.interaction.displayName;
  return (0, r.jsx)(f.yRy, {
    targetElementRef: n,
    renderPopout: t,
    shouldShow: i,
    position: "top",
    align: "center",
    onRequestClose: l,
    animation: f.yRy.Animation.FADE,
    positionKey: null != a.interactionData ? "ready" : "loading",
    children: e => {
      var {
        onClick: t
      } = e, i = G(e, ["onClick"]);
      if (a.type === w.uaV.CHAT_INPUT_COMMAND || a.type === w.uaV.INTERACTION_PREMIUM_UPSELL) return (0, r.jsx)(f.P3F, U(j({}, i), {
        tag: "span",
        onClick: s,
        innerRef: n,
        children: (0, r.jsxs)("div", {
          className: o()(x.appLauncherOnboardingCommandName, x.clickable),
          children: [(0, r.jsx)(f.jje, {
            size: "custom",
            color: "currentColor",
            height: 10,
            width: 10,
            className: x.appsIcon
          }), c]
        })
      }));
      if (!(0, O.g)(a)) return (0, r.jsx)("div", {
        className: x.commandName,
        ref: n,
        children: c
      });
      {
        let e = () => {
            A.S.dispatchToLastSubscribed(w.CkL.OPEN_APP_LAUNCHER, {
              applicationId: a.applicationId
            })
          },
          t = (0, E.XZ)(c);
        return (0, r.jsx)(f.P3F, U(j({}, i), {
          tag: "span",
          onClick: e,
          innerRef: n,
          children: (0, r.jsxs)("div", {
            className: o()(x.appLauncherOnboardingCommandName, x.clickable),
            children: [(0, r.jsx)(f.jje, {
              size: "custom",
              color: "currentColor",
              height: 10,
              width: 10,
              className: x.appsIcon
            }), t]
          })
        }))
      }
    }
  })
}
let W = () => (0, Chunk54381.jsx)(Chunk481060.Fbu, {
  size: "xxs",
  color: "currentColor",
  className: Chunk724913.executedCommandSeparator
});

function K(e) {
  var t;
  let n, {
      message: a,
      channel: s
    } = e,
    {
      analyticsLocations: c,
      newestAnalyticsLocation: E
    } = (0, g.ZP)(m.Z.EXECUTED_COMMAND),
    S = (0, d.e7)([T.default], () => T.default.getCurrentUser()),
    A = i.useRef(null),
    R = i.useRef(null),
    w = i.useMemo(() => (e, t, n) => (l()(null != t, "ExecutedCommand: user cannot be undefined"), l()(null != S, "ExecutedCommand: currentUser cannot be undefined"), l()(null != s, "ExecutedCommand: channel cannot be undefined"), (0, r.jsx)(v.Z, U(j({}, e), {
      user: t,
      currentUser: S,
      guildId: s.guild_id,
      channelId: s.id,
      messageId: a.id,
      newAnalyticsLocations: n
    }))), [S, s, a.id]),
    M = i.useMemo(() => e => (l()(null != s, "ExecutedCommand: channel cannot be null"), (0, r.jsx)(P.Z, U(j({}, e), {
      channel: s,
      messageId: a.id,
      interactionData: a.interactionData
    }))), [s, a.id, a.interactionData]),
    k = (0, y.t0)(a),
    G = (null == k ? true : k.type) === _.B8.APPLICATION_COMMAND && null != k.target_user ? new I.Z(k.target_user) : null,
    B = (null == k ? true : k.type) === _.B8.APPLICATION_COMMAND && null != a.messageReference && null != e.renderTargetMessage,
    Z = (0, N.Sw)(null == (t = a.interaction) ? true : t.user, s),
    F = (0, N.Sw)(G, s),
    K = i.useMemo(() => e.compact ? (0, D.Z)((0, C.vc)(u()(), "LT")) : null, [e.compact]),
    z = (0, p.NX)(s.id),
    q = a.interaction;
  if (null == q || null == Z) return null;
  let X = () => {
      let t = V(e, q.user, 0, Z, e => w(e, q.user, [m.Z.AVATAR]), A),
        n = H(e, q.user, 0, Z, e => w(e, q.user));
      return (0, r.jsxs)(i.Fragment, {
        children: [t, n]
      }, "user")
    },
    Q = () => {
      if (null == G) return null;
      let t = V(e, G, 1, F, e => w(e, G, [m.Z.AVATAR]), A),
        n = H(e, G, 1, F, e => w(e, G));
      return (0, r.jsxs)(i.Fragment, {
        children: [t, n]
      }, "target")
    };
  if ((null == a ? true : a.activityInstance) === null || (0, O.g)(a)) {
    let t = () => {
      let t = Y(e, M, R);
      return (0, r.jsx)(i.Fragment, {
        children: t
      }, "command")
    };
    n = L.intl.format(L.t["rg7U+C"], {
      userHook: X,
      commandHook: t
    }), B && null != e.renderTargetMessage ? n = (0, r.jsxs)(r.Fragment, {
      children: [n, (0, r.jsx)(W, {}), e.renderTargetMessage()]
    }) : null != G && (n = (0, r.jsxs)(r.Fragment, {
      children: [n, (0, r.jsx)(W, {}), (0, r.jsx)(Q, {})]
    }))
  } else {
    let e = () => {
        (0, b.Z)({
          context: null != s ? {
            type: "channel",
            channel: s
          } : {
            type: "contextless"
          },
          openInPopout: false,
          analyticsLocation: E
        }), (0, h.w1)({
          guildId: s.guild_id
        })
      },
      t = () => (0, r.jsx)(f.P3F, {
        tag: "span",
        onClick: e,
        children: (0, r.jsx)("div", {
          className: o()(x.commandName, x.clickable),
          children: L.intl.string(L.t.YTgRvn)
        })
      });
    n = z ? L.intl.format(L.t.kfV8WM, {
      userHook: X,
      activityHook: t
    }) : L.intl.format(L.t["6FeSyT"], {
      userHook: X
    })
  }
  return (0, r.jsx)(g.Gt, {
    value: c,
    children: (0, r.jsx)("div", {
      className: o()(x.repliedMessage, x.messageSpine, x.executedCommand, K),
      "aria-hidden": !e.compact,
      children: n
    })
  })
}