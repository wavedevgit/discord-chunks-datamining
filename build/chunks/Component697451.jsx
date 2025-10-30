/** Chunk was on web.js **/
/** chunk id: 697451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk136907 = require("./136907.js");

function k(e, t, n) {
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
      k(e, t, n[t])
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
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function Z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function F(e) {
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

function V(e) {
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
      [M.executedCommandAvatar]: true,
      [M.clickable]: null != a
    }),
    ref: c
  })
}

function H(e, t, n, i, a, o) {
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
      ref: o
    }),
    S = 1 === n ? g : m;
  return null != a && null != S && null != o ? (0, r.jsx)(f.yRy, {
    targetElementRef: o,
    renderPopout: a,
    shouldShow: S,
    position: "right",
    onRequestClose: v,
    children: T
  }) : T()
}

function Y(e, t, n, i, a) {
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
  return (0, r.jsx)(P.Z, {
    className: 1 === n ? M.targetUsername : "",
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

function W(e, t, n) {
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
      } = e, i = B(e, ["onClick"]);
      if (a.type === x.uaV.CHAT_INPUT_COMMAND || a.type === x.uaV.INTERACTION_PREMIUM_UPSELL) return (0, r.jsx)(f.P3F, G(j({}, i), {
        tag: "span",
        onClick: s,
        innerRef: n,
        children: (0, r.jsxs)("div", {
          className: o()(M.appLauncherOnboardingCommandName, M.clickable),
          children: [(0, r.jsx)(f.jje, {
            size: "custom",
            color: "currentColor",
            height: 10,
            width: 10,
            className: M.appsIcon
          }), c]
        })
      }));
      if (!(0, v.g)(a)) return (0, r.jsx)("div", {
        className: M.commandName,
        ref: n,
        children: c
      });
      {
        let e = () => {
            C.S.dispatchToLastSubscribed(x.CkL.OPEN_APP_LAUNCHER, {
              applicationId: a.applicationId
            })
          },
          t = (0, b.XZ)(c);
        return (0, r.jsx)(f.P3F, G(j({}, i), {
          tag: "span",
          onClick: e,
          innerRef: n,
          children: (0, r.jsxs)("div", {
            className: o()(M.appLauncherOnboardingCommandName, M.clickable),
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
let K = () => (0, Chunk951288.jsx)(Chunk481060.Fbu, {
  size: "xxs",
  color: "currentColor",
  className: Chunk136907.executedCommandSeparator
});

function z(e) {
  let {
    enabled: t
  } = p.c.useExperiment({
    location: "ExecutedCommand"
  }, {
    autoTrackExposure: true
  }), n = t ? f.iWm : f.jje;
  return (0, r.jsx)(n, j({}, e))
}

function q(e) {
  var t;
  let n, {
      message: a,
      channel: s
    } = e,
    {
      analyticsLocations: c,
      newestAnalyticsLocation: p
    } = (0, E.ZP)(g.Z.EXECUTED_COMMAND),
    b = (0, d.e7)([S.default], () => S.default.getCurrentUser()),
    A = i.useRef(null),
    C = i.useRef(null),
    P = i.useMemo(() => (e, t, n) => (l()(null != t, "ExecutedCommand: user cannot be undefined"), l()(null != b, "ExecutedCommand: currentUser cannot be undefined"), l()(null != s, "ExecutedCommand: channel cannot be undefined"), (0, r.jsx)(I.Z, G(j({}, e), {
      user: t,
      currentUser: b,
      guildId: s.guild_id,
      channelId: s.id,
      messageId: a.id,
      newAnalyticsLocations: n
    }))), [b, s, a.id]),
    x = i.useMemo(() => e => (l()(null != s, "ExecutedCommand: channel cannot be null"), (0, r.jsx)(w.Z, G(j({}, e), {
      channel: s,
      messageId: a.id,
      interactionData: a.interactionData
    }))), [s, a.id, a.interactionData]),
    k = (0, O.t0)(a),
    U = (null == k ? true : k.type) === _.B8.APPLICATION_COMMAND && null != k.target_user ? new T.Z(k.target_user) : null,
    B = (null == k ? true : k.type) === _.B8.APPLICATION_COMMAND && null != a.messageReference && null != e.renderTargetMessage,
    Z = (0, R.Sw)(null == (t = a.interaction) ? true : t.user, s),
    F = (0, R.Sw)(U, s),
    V = i.useMemo(() => e.compact ? (0, D.Z)((0, N.vc)(u()(), "LT")) : null, [e.compact]),
    z = (0, h.NX)(s.id),
    q = a.interaction;
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
  if ((null == a ? true : a.activityInstance) === null || (0, v.g)(a)) {
    let t = () => {
      let t = W(e, x, C);
      return (0, r.jsx)(i.Fragment, {
        children: t
      }, "command")
    };
    n = L.intl.format(L.t["rg7U+C"], {
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
          className: o()(M.commandName, M.clickable),
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
  return (0, r.jsx)(E.Gt, {
    value: c,
    children: (0, r.jsx)("div", {
      className: o()(M.repliedMessage, M.messageSpine, M.executedCommand, V),
      "aria-hidden": !e.compact,
      children: n
    })
  })
}