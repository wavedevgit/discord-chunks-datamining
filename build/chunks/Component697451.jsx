/** Chunk was on web.js **/
/** chunk id: 697451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk456100 = require("./456100.js"),
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

function k(e) {
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

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e, t) {
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

function V(e) {
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
      [M.executedCommandAvatar]: true,
      [M.clickable]: null != o
    }),
    ref: c
  })
}

function H(e, t, n, i, o, a) {
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
    className: M.replyBadge,
    children: (0, r.jsx)(F, {
      className: M.commandIcon
    })
  });
  let I = null != (c = A.ZP.getGuildMemberAvatarURL({
      avatar: null != (s = i.guildMemberAvatar) ? s : true,
      userId: t.id,
      guildId: null != (l = null == _ ? true : _.guild_id) ? l : ""
    })) ? c : true,
    T = () => V({
      user: t,
      guildId: _.guild_id,
      guildAvatar: I,
      onClick: 1 === n ? y : E,
      onContextMenu: 1 === n ? O : b,
      ref: a
    }),
    S = 1 === n ? g : m;
  return null != o && null != S && null != a ? (0, r.jsx)(f.yRy, {
    targetElementRef: a,
    renderPopout: o,
    shouldShow: S,
    position: "right",
    onRequestClose: v,
    children: T
  }) : T()
}

function Y(e, t, n, i, o) {
  let {
    message: a,
    channel: s,
    showUsernamePopout: l,
    showTargetUsernamePopout: c,
    onClickUsername: u,
    onUserContextMenu: d,
    onClickTargetUsername: f,
    onTargetUserContextMenu: _,
    onPopoutRequestClose: p
  } = e;
  return (0, r.jsx)(P.Z, {
    className: 1 === n ? M.targetUsername : "",
    compact: true,
    author: i,
    message: a,
    channel: s,
    userOverride: t,
    showPopout: 1 === n ? c : l,
    renderPopout: o,
    onClick: 1 === n ? f : u,
    onContextMenu: 1 === n ? _ : d,
    onPopoutRequestClose: p
  })
}

function W(e, t, n) {
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
      } = e, i = B(e, ["onClick"]);
      if (o.type === L.uaV.CHAT_INPUT_COMMAND || o.type === L.uaV.INTERACTION_PREMIUM_UPSELL) return (0, r.jsx)(f.P3F, G(k({}, i), {
        tag: "span",
        onClick: s,
        innerRef: n,
        children: (0, r.jsxs)("div", {
          className: a()(M.appLauncherOnboardingCommandName, M.clickable),
          children: [(0, r.jsx)(f.jje, {
            size: "custom",
            color: "currentColor",
            height: 10,
            width: 10,
            className: M.appsIcon
          }), c]
        })
      }));
      if (!(0, v.g)(o)) return (0, r.jsx)("div", {
        className: M.commandName,
        ref: n,
        children: c
      });
      {
        let e = () => {
            N.S.dispatchToLastSubscribed(L.CkL.OPEN_APP_LAUNCHER, {
              applicationId: o.applicationId
            })
          },
          t = (0, b.XZ)(c);
        return (0, r.jsx)(f.P3F, G(k({}, i), {
          tag: "span",
          onClick: e,
          innerRef: n,
          children: (0, r.jsxs)("div", {
            className: a()(M.appLauncherOnboardingCommandName, M.clickable),
            children: [(0, r.jsx)(z, {
              size: "custom",
              color: "currentColor",
              height: 10,
              width: 10,
              className: M.appsIcon
            }), t]
          })
        }))
      }
    }
  })
}
let K = () => (0, Chunk255367.jsx)(Chunk481060.Fbu, {
  size: "xxs",
  color: "currentColor",
  className: Chunk724913.executedCommandSeparator
});

function z(e) {
  let {
    enabled: t
  } = p.c.useExperiment({
    location: "ExecutedCommand"
  }, {
    autoTrackExposure: true
  }), n = t ? f.iWm : f.jje;
  return (0, r.jsx)(n, k({}, e))
}

function q(e) {
  var t;
  let n, {
      message: o,
      channel: s
    } = e,
    {
      analyticsLocations: c,
      newestAnalyticsLocation: p
    } = (0, E.ZP)(g.Z.EXECUTED_COMMAND),
    b = (0, d.e7)([S.default], () => S.default.getCurrentUser()),
    A = i.useRef(null),
    N = i.useRef(null),
    P = i.useMemo(() => (e, t, n) => (l()(null != t, "ExecutedCommand: user cannot be undefined"), l()(null != b, "ExecutedCommand: currentUser cannot be undefined"), l()(null != s, "ExecutedCommand: channel cannot be undefined"), (0, r.jsx)(I.Z, G(k({}, e), {
      user: t,
      currentUser: b,
      guildId: s.guild_id,
      channelId: s.id,
      messageId: o.id,
      newAnalyticsLocations: n
    }))), [b, s, o.id]),
    L = i.useMemo(() => e => (l()(null != s, "ExecutedCommand: channel cannot be null"), (0, r.jsx)(w.Z, G(k({}, e), {
      channel: s,
      messageId: o.id,
      interactionData: o.interactionData
    }))), [s, o.id, o.interactionData]),
    j = (0, O.t0)(o),
    U = (null == j ? true : j.type) === _.B8.APPLICATION_COMMAND && null != j.target_user ? new T.Z(j.target_user) : null,
    B = (null == j ? true : j.type) === _.B8.APPLICATION_COMMAND && null != o.messageReference && null != e.renderTargetMessage,
    Z = (0, R.Sw)(null == (t = o.interaction) ? true : t.user, s),
    F = (0, R.Sw)(U, s),
    V = i.useMemo(() => e.compact ? (0, D.Z)((0, C.vc)(u()(), "LT")) : null, [e.compact]),
    z = (0, h.NX)(s.id),
    q = o.interaction;
  if (null == q || null == Z) return null;
  let X = () => {
      let t = H(e, q.user, 0, Z, e => P(e, q.user, [g.Z.AVATAR]), A),
        n = Y(e, q.user, 0, Z, e => P(e, q.user));
      return (0, r.jsxs)(i.Fragment, {
        children: [t, n]
      }, "user")
    },
    Q = () => {
      if (null == U) return null;
      let t = H(e, U, 1, F, e => P(e, U, [g.Z.AVATAR]), A),
        n = Y(e, U, 1, F, e => P(e, U));
      return (0, r.jsxs)(i.Fragment, {
        children: [t, n]
      }, "target")
    };
  if ((null == o ? true : o.activityInstance) === null || (0, v.g)(o)) {
    let t = () => {
      let t = W(e, L, N);
      return (0, r.jsx)(i.Fragment, {
        children: t
      }, "command")
    };
    n = x.intl.format(x.t["rg7U+P"], {
      userHook: X,
      commandHook: t
    }), B && null != e.renderTargetMessage ? n = (0, r.jsxs)(r.Fragment, {
      children: [n, (0, r.jsx)(K, {}), e.renderTargetMessage()]
    }) : null != U && (n = (0, r.jsxs)(r.Fragment, {
      children: [n, (0, r.jsx)(K, {}), (0, r.jsx)(Q, {})]
    }))
  } else {
    let e = () => {
        (0, y.Z)({
          context: null != s ? {
            type: "channel",
            channel: s
          } : {
            type: "contextless"
          },
          openInPopout: false,
          analyticsLocation: p
        }), (0, m.w1)({
          guildId: s.guild_id
        })
      },
      t = () => (0, r.jsx)(f.P3F, {
        tag: "span",
        onClick: e,
        children: (0, r.jsx)("div", {
          className: a()(M.commandName, M.clickable),
          children: x.intl.string(x.t.YTgRvr)
        })
      });
    n = z ? x.intl.format(x.t.kfV8WF, {
      userHook: X,
      activityHook: t
    }) : x.intl.format(x.t["6FeSyc"], {
      userHook: X
    })
  }
  return (0, r.jsx)(E.Gt, {
    value: c,
    children: (0, r.jsx)("div", {
      className: a()(M.repliedMessage, M.messageSpine, M.executedCommand, V),
      "aria-hidden": !e.compact,
      children: n
    })
  })
}