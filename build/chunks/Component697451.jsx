/** Chunk was on 66866 **/
/** chunk id: 697451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e) {
  let {
    width: t = 6,
    height: n = 10,
    color: i = "currentColor",
    className: l,
    foreground: a
  } = e;
  return (0, r.jsx)("svg", {
    className: l,
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

function U(e, t, n, i, l, o) {
  var s, c, u;
  let {
    message: d,
    compact: m,
    channel: f,
    isInteractionUserBlocked: _,
    isInteractionUserIgnored: g,
    showAvatarPopout: h,
    showTargetAvatarPopout: b,
    onClickAvatar: E,
    onUserContextMenu: C,
    onClickTargetAvatar: v,
    onTargetUserContextMenu: O,
    onPopoutRequestClose: y
  } = e;
  if (m && 1 === n) return null;
  if (m && null == d.activityInstance || _ || g) return (0, r.jsx)("div", {
    className: L.replyBadge,
    children: (0, r.jsx)(k, {
      className: L.commandIcon
    })
  });
  let x = null != (u = I.ZP.getGuildMemberAvatarURL({
      avatar: null != (s = i.guildMemberAvatar) ? s : true,
      userId: t.id,
      guildId: null != (c = null == f ? true : f.guild_id) ? c : ""
    })) ? u : true,
    j = () => (function(e) {
      let {
        user: t,
        guildId: n,
        guildAvatar: i,
        onClick: l,
        onContextMenu: o,
        onMouseDown: s,
        ref: c
      } = e;
      return (0, r.jsx)("img", {
        alt: "",
        src: null != i ? i : t.getAvatarURL(n, 16),
        onClick: l,
        onContextMenu: o,
        onMouseDown: s,
        className: a()({
          [L.executedCommandAvatar]: true,
          [L.clickable]: null != l
        }),
        ref: c
      })
    })({
      user: t,
      guildId: f.guild_id,
      guildAvatar: x,
      onClick: 1 === n ? v : E,
      onContextMenu: 1 === n ? O : C,
      ref: o
    }),
    S = 1 === n ? b : h;
  return null != l && null != S && null != o ? (0, r.jsx)(p.yRy, {
    targetElementRef: o,
    renderPopout: l,
    shouldShow: S,
    position: "right",
    onRequestClose: y,
    children: j
  }) : j()
}

function F(e, t, n, i, l) {
  let {
    message: a,
    channel: o,
    showUsernamePopout: s,
    showTargetUsernamePopout: c,
    onClickUsername: u,
    onUserContextMenu: d,
    onClickTargetUsername: p,
    onTargetUserContextMenu: m,
    onPopoutRequestClose: f
  } = e;
  return (0, r.jsx)(N.Z, {
    className: 1 === n ? L.targetUsername : "",
    compact: true,
    author: i,
    message: a,
    channel: o,
    userOverride: t,
    showPopout: 1 === n ? c : s,
    renderPopout: l,
    onClick: 1 === n ? p : u,
    onContextMenu: 1 === n ? m : d,
    onPopoutRequestClose: f
  })
}
let B = () => (0, Chunk951288.jsx)(Chunk481060.Fbu, {
  size: "xxs",
  color: "currentColor",
  className: Chunk724913.executedCommandSeparator
});

function G(e) {
  let {
    enabled: t
  } = f.c.useExperiment({
    location: "ExecutedCommand"
  }, {
    autoTrackExposure: true
  }), n = t ? p.iWm : p.jje;
  return (0, r.jsx)(n, D({}, e))
}

function H(e) {
  var t;
  let n, {
      message: l,
      channel: o
    } = e,
    {
      analyticsLocations: c,
      newestAnalyticsLocation: f
    } = (0, b.ZP)(h.Z.EXECUTED_COMMAND),
    I = (0, d.e7)([j.default], () => j.default.getCurrentUser()),
    N = i.useRef(null),
    k = i.useRef(null),
    H = i.useMemo(() => (e, t, n) => (s()(null != t, "ExecutedCommand: user cannot be undefined"), s()(null != I, "ExecutedCommand: currentUser cannot be undefined"), s()(null != o, "ExecutedCommand: channel cannot be undefined"), (0, r.jsx)(y.Z, M(D({}, e), {
      user: t,
      currentUser: I,
      guildId: o.guild_id,
      channelId: o.id,
      messageId: l.id,
      newAnalyticsLocations: n
    }))), [I, o, l.id]),
    V = i.useMemo(() => e => (s()(null != o, "ExecutedCommand: channel cannot be null"), (0, r.jsx)(A.Z, M(D({}, e), {
      channel: o,
      messageId: l.id,
      interactionData: l.interactionData
    }))), [o, l.id, l.interactionData]),
    z = (0, v.t0)(l),
    W = (null == z ? true : z.type) === m.B8.APPLICATION_COMMAND && null != z.target_user ? new x.Z(z.target_user) : null,
    Y = (null == z ? true : z.type) === m.B8.APPLICATION_COMMAND && null != l.messageReference && null != e.renderTargetMessage,
    K = (0, P.Sw)(null == (t = l.interaction) ? true : t.user, o),
    X = (0, P.Sw)(W, o),
    q = i.useMemo(() => e.compact ? (0, w.Z)((0, T.vc)(u()(), "LT")) : null, [e.compact]),
    Q = (0, _.NX)(o.id),
    J = l.interaction;
  if (null == J || null == K) return null;
  let $ = () => {
    let t = U(e, J.user, 0, K, e => H(e, J.user, [h.Z.AVATAR]), N),
      n = F(e, J.user, 0, K, e => H(e, J.user));
    return (0, r.jsxs)(i.Fragment, {
      children: [t, n]
    }, "user")
  };
  if ((null == l ? true : l.activityInstance) === null || (0, O.g)(l)) n = R.intl.format(R.t["rg7U+P"], {
    userHook: $,
    commandHook: () => {
      let t = function(e, t, n) {
        let {
          showDataPopout: i,
          message: l,
          onClickCommand: o,
          onPopoutRequestClose: s
        } = e, c = l.interaction.displayName;
        return (0, r.jsx)(p.yRy, {
          targetElementRef: n,
          renderPopout: t,
          shouldShow: i,
          position: "top",
          align: "center",
          onRequestClose: s,
          animation: p.yRy.Animation.FADE,
          positionKey: null != l.interactionData ? "ready" : "loading",
          children: e => {
            var {
              onClick: t
            } = e, i = function(e, t) {
              if (null == e) return {};
              var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                  l = Object.keys(e);
                for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
              }
              return i
            }(e, ["onClick"]);
            if (l.type === Z.uaV.CHAT_INPUT_COMMAND || l.type === Z.uaV.INTERACTION_PREMIUM_UPSELL) return (0, r.jsx)(p.P3F, M(D({}, i), {
              tag: "span",
              onClick: o,
              innerRef: n,
              children: (0, r.jsxs)("div", {
                className: a()(L.appLauncherOnboardingCommandName, L.clickable),
                children: [(0, r.jsx)(p.jje, {
                  size: "custom",
                  color: "currentColor",
                  height: 10,
                  width: 10,
                  className: L.appsIcon
                }), c]
              })
            }));
            if (!(0, O.g)(l)) return (0, r.jsx)("div", {
              className: L.commandName,
              ref: n,
              children: c
            });
            {
              let e = (0, E.XZ)(c);
              return (0, r.jsx)(p.P3F, M(D({}, i), {
                tag: "span",
                onClick: () => {
                  S.S.dispatchToLastSubscribed(Z.CkL.OPEN_APP_LAUNCHER, {
                    applicationId: l.applicationId
                  })
                },
                innerRef: n,
                children: (0, r.jsxs)("div", {
                  className: a()(L.appLauncherOnboardingCommandName, L.clickable),
                  children: [(0, r.jsx)(G, {
                    size: "custom",
                    color: "currentColor",
                    height: 10,
                    width: 10,
                    className: L.appsIcon
                  }), e]
                })
              }))
            }
          }
        })
      }(e, V, k);
      return (0, r.jsx)(i.Fragment, {
        children: t
      }, "command")
    }
  }), Y && null != e.renderTargetMessage ? n = (0, r.jsxs)(r.Fragment, {
    children: [n, (0, r.jsx)(B, {}), e.renderTargetMessage()]
  }) : null != W && (n = (0, r.jsxs)(r.Fragment, {
    children: [n, (0, r.jsx)(B, {}), (0, r.jsx)(() => {
      if (null == W) return null;
      let t = U(e, W, 1, X, e => H(e, W, [h.Z.AVATAR]), N),
        n = F(e, W, 1, X, e => H(e, W));
      return (0, r.jsxs)(i.Fragment, {
        children: [t, n]
      }, "target")
    }, {})]
  }));
  else {
    let e = () => {
      (0, C.Z)({
        context: null != o ? {
          type: "channel",
          channel: o
        } : {
          type: "contextless"
        },
        openInPopout: false,
        analyticsLocation: f
      }), (0, g.w1)({
        guildId: o.guild_id
      })
    };
    n = Q ? R.intl.format(R.t.kfV8WF, {
      userHook: $,
      activityHook: () => (0, r.jsx)(p.P3F, {
        tag: "span",
        onClick: e,
        children: (0, r.jsx)("div", {
          className: a()(L.commandName, L.clickable),
          children: R.intl.string(R.t.YTgRvr)
        })
      })
    }) : R.intl.format(R.t["6FeSyc"], {
      userHook: $
    })
  }
  return (0, r.jsx)(b.Gt, {
    value: c,
    children: (0, r.jsx)("div", {
      className: a()(L.repliedMessage, L.messageSpine, L.executedCommand, q),
      "aria-hidden": !e.compact,
      children: n
    })
  })
}