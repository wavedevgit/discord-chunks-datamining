/** Chunk was on web.js **/
/** chunk id: 697451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  var n, r, i = Z(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function Z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function F(e) {
  let {
    width: t = 6,
    height: n = 10,
    color: i = "currentColor",
    className: o,
    foreground: a
  } = e;
  return (0, r.jsx)("svg", {
    className: o,
    width: t,
    height: n,
    viewBox: "0 0 6 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, r.jsx)("path", {
      d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
      className: a,
      fill: i
    })
  })
}

function B(e) {
  let {
    user: t,
    guildId: n,
    guildAvatar: i,
    onClick: o,
    onContextMenu: s,
    onMouseDown: l,
    ref: c
  } = e;
  return (0, r.jsx)("img", {
    alt: "",
    src: null != i ? i : t.getAvatarURL(n, 16),
    onClick: o,
    onContextMenu: s,
    onMouseDown: l,
    className: a()({
      [L.executedCommandAvatar]: true,
      [L.clickable]: null != o
    }),
    ref: c
  })
}

function V(e, t, n, i, o, a) {
  var s, l, c;
  let {
    message: u,
    compact: d,
    channel: p,
    isInteractionUserBlocked: _,
    isInteractionUserIgnored: m,
    showAvatarPopout: h,
    showTargetAvatarPopout: g,
    onClickAvatar: E,
    onUserContextMenu: b,
    onClickTargetAvatar: y,
    onTargetUserContextMenu: O,
    onPopoutRequestClose: v
  } = e;
  if (d && 1 === n) return null;
  if (d && null == u.activityInstance || _ || m) return (0, r.jsx)("div", {
    className: L.replyBadge,
    children: (0, r.jsx)(F, {
      className: L.commandIcon
    })
  });
  let S = null != (c = T.ZP.getGuildMemberAvatarURL({
      avatar: null != (s = i.guildMemberAvatar) ? s : true,
      userId: t.id,
      guildId: null != (l = null == p ? true : p.guild_id) ? l : ""
    })) ? c : true,
    I = () => B({
      user: t,
      guildId: p.guild_id,
      guildAvatar: S,
      onClick: 1 === n ? y : E,
      onContextMenu: 1 === n ? O : b,
      ref: a
    }),
    C = 1 === n ? g : h;
  return null != o && null != C && null != a ? (0, r.jsx)(f.yRy, {
    targetElementRef: a,
    renderPopout: o,
    shouldShow: C,
    position: "right",
    onRequestClose: v,
    children: I
  }) : I()
}

function H(e, t, n, i, o) {
  let {
    message: a,
    channel: s,
    showUsernamePopout: l,
    showTargetUsernamePopout: c,
    onClickUsername: u,
    onUserContextMenu: d,
    onClickTargetUsername: f,
    onTargetUserContextMenu: p,
    onPopoutRequestClose: _
  } = e;
  return (0, r.jsx)(P.Z, {
    className: 1 === n ? L.targetUsername : "",
    compact: true,
    author: i,
    message: a,
    channel: s,
    userOverride: t,
    showPopout: 1 === n ? c : l,
    renderPopout: o,
    onClick: 1 === n ? f : u,
    onContextMenu: 1 === n ? p : d,
    onPopoutRequestClose: _
  })
}

function Y(e, t, n) {
  let {
    showDataPopout: i,
    message: o,
    onClickCommand: s,
    onPopoutRequestClose: l
  } = e, c = o.interaction.displayName;
  return (0, r.jsx)(f.yRy, {
    targetElementRef: n,
    renderPopout: t,
    shouldShow: i,
    position: "top",
    align: "center",
    onRequestClose: l,
    animation: f.yRy.Animation.FADE,
    positionKey: null != o.interactionData ? "ready" : "loading",
    children: e => {
      var {
        onClick: t
      } = e, i = G(e, ["onClick"]);
      if (o.type === D.uaV.CHAT_INPUT_COMMAND || o.type === D.uaV.INTERACTION_PREMIUM_UPSELL) return (0, r.jsx)(f.P3F, U(M({}, i), {
        tag: "span",
        onClick: s,
        innerRef: n,
        children: (0, r.jsxs)("div", {
          className: a()(L.appLauncherOnboardingCommandName, L.clickable),
          children: [(0, r.jsx)(f.jje, {
            size: "custom",
            color: "currentColor",
            height: 10,
            width: 10,
            className: L.appsIcon
          }), c]
        })
      }));
      if (!(0, O.g)(o)) return (0, r.jsx)("div", {
        className: L.commandName,
        ref: n,
        children: c
      });
      {
        let e = () => {
            C.S.dispatchToLastSubscribed(D.CkL.OPEN_APP_LAUNCHER, {
              applicationId: o.applicationId
            })
          },
          t = (0, E.XZ)(c);
        return (0, r.jsx)(f.P3F, U(M({}, i), {
          tag: "span",
          onClick: e,
          innerRef: n,
          children: (0, r.jsxs)("div", {
            className: a()(L.appLauncherOnboardingCommandName, L.clickable),
            children: [(0, r.jsx)(f.jje, {
              size: "custom",
              color: "currentColor",
              height: 10,
              width: 10,
              className: L.appsIcon
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
      message: o,
      channel: s
    } = e,
    {
      analyticsLocations: c,
      newestAnalyticsLocation: E
    } = (0, g.ZP)(h.Z.EXECUTED_COMMAND),
    T = (0, d.e7)([I.default], () => I.default.getCurrentUser()),
    C = i.useRef(null),
    P = i.useRef(null),
    D = i.useMemo(() => (e, t, n) => (l()(null != t, "ExecutedCommand: user cannot be undefined"), l()(null != T, "ExecutedCommand: currentUser cannot be undefined"), l()(null != s, "ExecutedCommand: channel cannot be undefined"), (0, r.jsx)(v.Z, U(M({}, e), {
      user: t,
      currentUser: T,
      guildId: s.guild_id,
      channelId: s.id,
      messageId: o.id,
      newAnalyticsLocations: n
    }))), [T, s, o.id]),
    j = i.useMemo(() => e => (l()(null != s, "ExecutedCommand: channel cannot be null"), (0, r.jsx)(R.Z, U(M({}, e), {
      channel: s,
      messageId: o.id,
      interactionData: o.interactionData
    }))), [s, o.id, o.interactionData]),
    k = (0, y.t0)(o),
    G = (null == k ? true : k.type) === p.B8.APPLICATION_COMMAND && null != k.target_user ? new S.Z(k.target_user) : null,
    Z = (null == k ? true : k.type) === p.B8.APPLICATION_COMMAND && null != o.messageReference && null != e.renderTargetMessage,
    F = (0, N.Sw)(null == (t = o.interaction) ? true : t.user, s),
    B = (0, N.Sw)(G, s),
    K = i.useMemo(() => e.compact ? (0, w.Z)((0, A.vc)(u()(), "LT")) : null, [e.compact]),
    z = (0, _.NX)(s.id),
    q = o.interaction;
  if (null == q || null == F) return null;
  let Q = () => {
      let t = V(e, q.user, 0, F, e => D(e, q.user, [h.Z.AVATAR]), C),
        n = H(e, q.user, 0, F, e => D(e, q.user));
      return (0, r.jsxs)(i.Fragment, {
        children: [t, n]
      }, "user")
    },
    X = () => {
      if (null == G) return null;
      let t = V(e, G, 1, B, e => D(e, G, [h.Z.AVATAR]), C),
        n = H(e, G, 1, B, e => D(e, G));
      return (0, r.jsxs)(i.Fragment, {
        children: [t, n]
      }, "target")
    };
  if ((null == o ? true : o.activityInstance) === null || (0, O.g)(o)) {
    let t = () => {
      let t = Y(e, j, P);
      return (0, r.jsx)(i.Fragment, {
        children: t
      }, "command")
    };
    n = x.intl.format(x.t["rg7U+C"], {
      userHook: Q,
      commandHook: t
    }), Z && null != e.renderTargetMessage ? n = (0, r.jsxs)(r.Fragment, {
      children: [n, (0, r.jsx)(W, {}), e.renderTargetMessage()]
    }) : null != G && (n = (0, r.jsxs)(r.Fragment, {
      children: [n, (0, r.jsx)(W, {}), (0, r.jsx)(X, {})]
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
        }), (0, m.w1)({
          guildId: s.guild_id
        })
      },
      t = () => (0, r.jsx)(f.P3F, {
        tag: "span",
        onClick: e,
        children: (0, r.jsx)("div", {
          className: a()(L.commandName, L.clickable),
          children: x.intl.string(x.t.YTgRvn)
        })
      });
    n = z ? x.intl.format(x.t.kfV8WM, {
      userHook: Q,
      activityHook: t
    }) : x.intl.format(x.t["6FeSyT"], {
      userHook: Q
    })
  }
  return (0, r.jsx)(g.Gt, {
    value: c,
    children: (0, r.jsx)("div", {
      className: a()(L.repliedMessage, L.messageSpine, L.executedCommand, K),
      "aria-hidden": !e.compact,
      children: n
    })
  })
}