/** Chunk was on 9753 **/
/** chunk id: 301960, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => F
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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

function L(e) {
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

function U(e, t, n, i, l, s) {
  var o, c, u;
  let {
    message: d,
    compact: m,
    channel: f,
    isInteractionUserBlocked: g,
    isInteractionUserIgnored: _,
    showAvatarPopout: h,
    showTargetAvatarPopout: b,
    onClickAvatar: y,
    onUserContextMenu: A,
    onClickTargetAvatar: v,
    onTargetUserContextMenu: O,
    onPopoutRequestClose: x
  } = e;
  if (m && 1 === n) return null;
  if (m && null == d.activityInstance || g || _) return (0, r.jsx)("div", {
    className: D.Cz,
    children: (0, r.jsx)(k, {
      className: D.Jx
    })
  });
  let E = null != (o = j.Ay.getGuildMemberAvatarURL({
      avatar: null != (c = i.guildMemberAvatar) ? c : true,
      userId: t.id,
      guildId: null != (u = null == f ? true : f.guild_id) ? u : ""
    })) ? o : true,
    C = () => (function(e) {
      let {
        user: t,
        guildId: n,
        guildAvatar: i,
        onClick: l,
        onContextMenu: s,
        onMouseDown: o,
        ref: c
      } = e;
      return (0, r.jsx)("img", {
        alt: "",
        src: null != i ? i : t.getAvatarURL(n, 16),
        onClick: l,
        onContextMenu: s,
        onMouseDown: o,
        className: a()({
          [D.WU]: true,
          [D.vk]: null != l
        }),
        ref: c
      })
    })({
      user: t,
      guildId: f.guild_id,
      guildAvatar: E,
      onClick: 1 === n ? v : y,
      onContextMenu: 1 === n ? O : A,
      ref: s
    }),
    I = 1 === n ? b : h;
  return null != l && null != I && null != s ? (0, r.jsx)(p.YNO, {
    targetElementRef: s,
    renderPopout: l,
    shouldShow: I,
    position: "right",
    onRequestClose: x,
    children: C
  }) : C()
}

function G(e, t, n, i, l) {
  let {
    message: a,
    channel: s,
    showUsernamePopout: o,
    showTargetUsernamePopout: c,
    onClickUsername: u,
    onUserContextMenu: d,
    onClickTargetUsername: p,
    onTargetUserContextMenu: m,
    onPopoutRequestClose: f
  } = e;
  return (0, r.jsx)(T.A, {
    className: 1 === n ? D.iu : "",
    compact: true,
    author: i,
    message: a,
    channel: s,
    userOverride: t,
    showPopout: 1 === n ? c : o,
    renderPopout: l,
    onClick: 1 === n ? p : u,
    onContextMenu: 1 === n ? m : d,
    onPopoutRequestClose: f
  })
}
let B = () => (0, r.jsx)(p._BQ, {
  size: "xxs",
  color: "currentColor",
  className: D.M5
});

function F(e) {
  var t;
  let n, {
      message: l,
      channel: s
    } = e,
    {
      analyticsLocations: c,
      newestAnalyticsLocation: j
    } = (0, h.Ay)(_.A.EXECUTED_COMMAND),
    T = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
    k = i.useRef(null),
    F = i.useRef(null),
    H = i.useMemo(() => (e, t, n) => (o()(null != t, "ExecutedCommand: user cannot be undefined"), o()(null != T, "ExecutedCommand: currentUser cannot be undefined"), o()(null != s, "ExecutedCommand: channel cannot be undefined"), (0, r.jsx)(O.A, M(L({}, e), {
      user: t,
      currentUser: T,
      guildId: s.guild_id,
      channelId: s.id,
      messageId: l.id,
      newAnalyticsLocations: n
    }))), [T, s, l.id]),
    V = i.useMemo(() => e => (o()(null != s, "ExecutedCommand: channel cannot be null"), (0, r.jsx)(N.A, M(L({}, e), {
      channel: s,
      messageId: l.id,
      interactionData: l.interactionData
    }))), [s, l.id, l.interactionData]),
    z = (0, A.Am)(l),
    W = (null == z ? true : z.type) === m.G4.APPLICATION_COMMAND && null != z.target_user ? new x.A(z.target_user) : null,
    K = (null == z ? true : z.type) === m.G4.APPLICATION_COMMAND && null != l.messageReference && null != e.renderTargetMessage,
    Y = (0, S.d8)(null == (t = l.interaction) ? true : t.user, s),
    q = (0, S.d8)(W, s),
    Q = i.useMemo(() => e.compact ? (0, P.A)((0, I.i$)(u()(), "LT")) : null, [e.compact]),
    J = (0, f.Gp)(s.id),
    X = l.interaction;
  if (null == X || null == Y) return null;
  let Z = () => {
    let t = U(e, X.user, 0, Y, e => H(e, X.user, [_.A.AVATAR]), k),
      n = G(e, X.user, 0, Y, e => H(e, X.user));
    return (0, r.jsxs)(i.Fragment, {
      children: [t, n]
    }, "user")
  };
  if ((null == l ? true : l.activityInstance) === null || (0, v.V)(l)) n = R.intl.format(R.t["rg7U+C"], {
    userHook: Z,
    commandHook: () => {
      let t = function(e, t, n) {
        let {
          showDataPopout: i,
          message: l,
          onClickCommand: s,
          onPopoutRequestClose: o
        } = e, c = l.interaction.displayName;
        return (0, r.jsx)(p.YNO, {
          targetElementRef: n,
          renderPopout: t,
          shouldShow: i,
          position: "top",
          align: "center",
          onRequestClose: o,
          animation: p.YNO.Animation.FADE,
          positionKey: null != l.interactionData ? "ready" : "loading",
          children: e => {
            let {
              onClick: t
            } = e, i = function(e, t) {
              if (null == e) return {};
              var n, r, i, l = {};
              if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l
              }
              if (l = function(e, t) {
                  if (null == e) return {};
                  var n, r, i = {},
                    l = Object.getOwnPropertyNames(e);
                  for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                  return i
                }(e, t), Object.getOwnPropertySymbols)
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
              return l
            }(e, ["onClick"]);
            if (l.type === w.lAJ.CHAT_INPUT_COMMAND || l.type === w.lAJ.INTERACTION_PREMIUM_UPSELL) return (0, r.jsx)(p.DUT, M(L({}, i), {
              tag: "span",
              onClick: s,
              innerRef: n,
              children: (0, r.jsxs)("div", {
                className: a()(D.lm, D.vk),
                children: [(0, r.jsx)(p.k9F, {
                  size: "custom",
                  color: "currentColor",
                  height: 10,
                  width: 10,
                  className: D.am
                }), c]
              })
            }));
            if (!(0, v.V)(l)) return (0, r.jsx)("div", {
              className: D.p6,
              ref: n,
              children: c
            });
            {
              let e = (0, b.kF)(c);
              return (0, r.jsx)(p.DUT, M(L({}, i), {
                tag: "span",
                onClick: () => {
                  C._.dispatchToLastSubscribed(w.jej.OPEN_APP_LAUNCHER, {
                    applicationId: l.applicationId
                  })
                },
                innerRef: n,
                children: (0, r.jsxs)("div", {
                  className: a()(D.lm, D.vk),
                  children: [(0, r.jsx)(p.k9F, {
                    size: "custom",
                    color: "currentColor",
                    height: 10,
                    width: 10,
                    className: D.am
                  }), e]
                })
              }))
            }
          }
        })
      }(e, V, F);
      return (0, r.jsx)(i.Fragment, {
        children: t
      }, "command")
    }
  }), K && null != e.renderTargetMessage ? n = (0, r.jsxs)(r.Fragment, {
    children: [n, (0, r.jsx)(B, {}), e.renderTargetMessage()]
  }) : null != W && (n = (0, r.jsxs)(r.Fragment, {
    children: [n, (0, r.jsx)(B, {}), (0, r.jsx)(() => {
      if (null == W) return null;
      let t = U(e, W, 1, q, e => H(e, W, [_.A.AVATAR]), k),
        n = G(e, W, 1, q, e => H(e, W));
      return (0, r.jsxs)(i.Fragment, {
        children: [t, n]
      }, "target")
    }, {})]
  }));
  else {
    let e = () => {
      (0, y.A)({
        context: null != s ? {
          type: "channel",
          channel: s
        } : {
          type: "contextless"
        },
        openInPopout: false,
        analyticsLocation: j
      }), (0, g.LV)({
        guildId: s.guild_id
      })
    };
    n = J ? R.intl.format(R.t.kfV8WM, {
      userHook: Z,
      activityHook: () => (0, r.jsx)(p.DUT, {
        tag: "span",
        onClick: e,
        children: (0, r.jsx)("div", {
          className: a()(D.p6, D.vk),
          children: R.intl.string(R.t.YTgRvn)
        })
      })
    }) : R.intl.format(R.t["6FeSyT"], {
      userHook: Z
    })
  }
  return (0, r.jsx)(h.f5, {
    value: c,
    children: (0, r.jsx)("div", {
      className: a()(D.JZ, D.NB, D.JE, Q),
      "aria-hidden": !e.compact,
      children: n
    })
  })
}