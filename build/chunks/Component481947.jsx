/** Chunk was on 47995 **/
/** chunk id: 481947, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => D,
  Kc: () => L,
  Wr: () => C
}), require("./321073.js"), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk172218 = require("./172218.js"),
  Chunk665260 = require("./665260.js"),
  Chunk934551 = require("./934551.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk440594 = require("./440594.js"),
  Chunk58149 = require("./58149.js"),
  Chunk659974 = require("./659974.js"),
  Chunk863089 = require("./863089.js"),
  Chunk402216 = require("./402216.jsx"),
  Chunk609425 = require("./609425.js"),
  Chunk73392 = require("./73392.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk217356 = require("./217356.jsx"),
  Chunk559405 = require("./559405.jsx"),
  Chunk790381 = require("./790381.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk544105 = require("./544105.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk77615 = require("./77615.js");

function N(e) {
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
let w = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: l,
      onAddHangStatusClicked: i,
      userId: s
    } = e, o = e => {
      e.stopPropagation(), null == i || i()
    };
    return l && null == t ? (0, r.jsx)(d.DUT, {
      onClick: o,
      className: T.Pt,
      children: (0, r.jsx)(d.nm2, {
        color: "currentColor",
        className: a()(T.Kk, T.G8, n)
      })
    }) : (0, r.jsx)(d.DUT, {
      onClick: o,
      className: T.Pt,
      children: (0, r.jsx)(v.A, {
        userId: s,
        size: 16,
        hangStatusActivity: t,
        className: a()(T.Kk, n)
      })
    })
  },
  C = e => {
    let {
      children: t,
      collapsed: n = false,
      className: l
    } = e;
    return (0, r.jsx)("div", {
      className: a()(l, T.p_, n ? T.GT : T.m3),
      role: "group",
      children: t
    })
  };

function L(e) {
  let {
    className: t,
    mute: n,
    localMute: l,
    localVideoDisabled: i,
    serverMute: s,
    deaf: f,
    serverDeaf: m,
    collapsed: g,
    video: b,
    isStreaming: _,
    disabled: A,
    isWatching: h,
    iconClassName: v,
    embeddedApplication: j,
    otherClientSessionType: N,
    voicePlatform: C,
    application: L,
    guildId: D,
    channelId: R,
    user: V,
    disconnected: M,
    hangStatusActivity: U,
    showHangStatus: G,
    isSelf: W,
    handleHoverHangStatus: z,
    handleHoverIcons: F,
    onAddHangStatusClicked: H
  } = e;
  if (g || A) return null;
  let K = [],
    Y = function(e) {
      let {
        iconClassName: t,
        mute: n,
        localMute: l,
        serverMute: i,
        deaf: s,
        serverDeaf: o
      } = e, c = [];
      if (n) {
        let e;
        e = i || l ? d.O1p : d.z0P;
        let n = (0, r.jsx)(e, {
          className: a()(T.Kk, t, {
            [T.DU]: i
          }),
          color: "currentColor"
        });
        c.push((0, r.jsx)(u.m, {
          text: l ? E.intl.string(E.t.Q8Uzof) : i ? E.intl.string(E.t.uLddbQ) : E.intl.string(E.t.tjtv3P),
          children: n
        }, "mute"))
      }
      if (o || s) {
        let e = o ? d.TJE : d.cQT,
          n = (0, r.jsx)(e, {
            className: a()(T.Kk, t, {
              [T.DU]: o
            }),
            color: "currentColor"
          });
        c.push((0, r.jsx)(u.m, {
          text: o ? E.intl.string(E.t.btxSdB) : E.intl.string(E.t.NjmiOL),
          children: n
        }, "deaf"))
      }
      return c
    }({
      iconClassName: v,
      mute: n,
      localMute: l,
      serverMute: s,
      deaf: f,
      serverDeaf: m
    });
  b && (i ? K.push((0, r.jsx)(u.m, {
    text: E.intl.string(E.t["PXMZ/+"]),
    children: (0, r.jsx)(d.OCo, {
      size: "md",
      color: "currentColor",
      className: a()(T.Kk, v),
      colorClass: T.of
    })
  }, "video")) : K.push((0, r.jsx)(u.m, {
    text: E.intl.string(E.t.FlNoSV),
    children: (0, r.jsx)(d.npA, {
      size: "md",
      color: "currentColor",
      className: a()(T.Kk, v)
    })
  }, "video"))), M && K.push((0, r.jsx)(u.m, {
    text: E.intl.string(E.t.HFwRpk),
    children: (0, r.jsx)(d.EpV, {
      className: a()(T.Kk, v),
      color: d.LU0.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected")), null != j && K.push((0, r.jsx)(u.m, {
    text: (0, p.A)(j.name),
    children: (0, r.jsx)(d.k9F, {
      size: "md",
      color: "currentColor",
      className: a()(T.Kk, v)
    })
  }, "activity")), N === P.f$.XBOX || C === I.J7.XBOX ? K.push((0, r.jsx)(S.A, {
    className: a()(T.Kk, v)
  }, "xbox")) : N === P.f$.PLAYSTATION || C === I.J7.PLAYSTATION ? K.push((0, r.jsx)(O.A, {
    className: a()(T.Kk, v)
  }, "playstation")) : C === I.J7.QUEST && K.push((0, r.jsx)(c.VrHeadsetIcon, {
    size: "xs",
    color: "currentColor",
    className: a()(T.Kk, v)
  }, "quest")), h && K.push((0, r.jsx)(u.m, {
    text: E.intl.string(E.t["JH1SJ+"]),
    children: (0, r.jsx)(d.bMW, {
      size: "xs",
      color: "currentColor",
      className: a()(T.Kk, v)
    })
  }, "watch")), _ && K.push((0, r.jsx)(y.Ay, {
    size: y.Ay.Sizes.SMALL
  }, "stream"));
  let B = null != L && !(0, o.Lt)(L.flags, x.gfo.EMBEDDED),
    J = null == U && B;
  return 0 !== K.length || 0 !== Y.length || G || J ? (0, r.jsxs)("div", {
    className: a()(T.Pt, t),
    children: [(0, r.jsxs)("div", {
      className: T.RL,
      onMouseEnter: () => null == F ? true : F(true),
      onMouseLeave: () => null == F ? true : F(false),
      children: [Y, K]
    }), G || J ? (0, r.jsx)("div", {
      className: T.RL,
      onMouseEnter: () => null == z ? true : z(true),
      onMouseLeave: () => null == z ? true : z(false),
      children: J ? (0, r.jsx)(k, {
        application: L,
        iconClassName: v,
        guildId: D,
        channelId: R,
        userId: V.id
      }, "".concat(V.id, "-game")) : (0, r.jsx)(w, {
        userId: V.id,
        hangStatusActivity: U,
        iconClassName: v,
        isSelf: W,
        onAddHangStatusClicked: H
      })
    }) : null]
  }) : null
}
let D = /^(14256|21552)$/.test(require.j) ? function(e) {
  var t, n, l;
  let i, s, {
      avatarContainerClass: o = T.H,
      userNameClassName: c = T.gr,
      size: p = x.OSZ.SMALL,
      selected: f = false,
      disabled: y = false,
      isOverlay: A = false,
      ref: v
    } = e,
    O = function(e, t) {
      if (null == e) return {};
      var n, r, l, i = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }
      if (i = function(e, t) {
          if (null == e) return {};
          var n, r, l = {},
            i = Object.getOwnPropertyNames(e);
          for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
          return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]),
    {
      onClick: S,
      onKeyDown: I,
      onDoubleClick: P,
      onContextMenu: w,
      onMouseLeave: C,
      onMouseDown: D,
      priority: k,
      speaking: R = false,
      latched: V,
      collapsed: M,
      mute: U,
      serverMute: G,
      guildId: W,
      nick: z,
      isGuest: F,
      flipped: H,
      className: K,
      overlap: Y,
      "aria-label": B,
      ringing: J,
      user: Z
    } = O,
    X = (0, b.A)({
      userId: Z.id,
      guildId: W
    }),
    q = (0, _.a)({
      displayNameStyles: X
    }),
    $ = (0, g.A)(Z.id),
    Q = (0, m.v)({
      isSpeaking: R,
      isLatched: V && !U && !G,
      voiceDb: $
    });
  return (0, r.jsx)(d.sqX, {
    ref: v,
    className: a()(K, {
      [T.q7]: true,
      [T.EF]: Y,
      [T.wH]: f,
      [T.vk]: null != S,
      [T.L9]: p === x.OSZ.SMALL,
      [T.p8]: p === x.OSZ.LARGE,
      [T.r9]: !f && y,
      [T.DF]: J
    }),
    onClick: e => {
      null == S || S(e, Z)
    },
    onDoubleClick: e => {
      null == P || P(e, Z)
    },
    onContextMenu: e => {
      null == w || w(e, Z)
    },
    onMouseLeave: e => {
      null == C || C(e, Z)
    },
    onMouseDown: e => {
      null == D || D(e, Z)
    },
    onKeyDown: I,
    "aria-label": null != (t = null != B ? B : z) ? t : Z.username,
    focusProps: {
      offset: {
        right: 4
      }
    },
    children: (0, r.jsxs)("div", {
      className: a()(T.Qs, {
        [T.zq]: H
      }),
      children: [k && !M ? (0, r.jsx)(u.m, {
        text: E.intl.string(E.t.BVK71i),
        children: (0, r.jsx)("div", {
          className: a()(T.G, {
            [T.g4]: !U && !G && R
          })
        })
      }) : null, (0, r.jsx)("div", {
        className: a()(o, T.my, {
          [T.Jb]: p === x.OSZ.LARGE,
          [T.dT]: p === x.OSZ.SMALL
        }),
        style: N({
          backgroundImage: "url(".concat(Z.getAvatarURL(W, p === x.OSZ.LARGE ? 38 : 24), ")")
        }, Q)
      }), (i = (0, r.jsxs)("div", {
        className: a()(c, T.Xh, q, {
          [T.Pi]: !U && !G && R
        }),
        children: [null != z ? z : j.Ay.getName(Z), F ? (0, r.jsxs)("span", {
          className: T.IW,
          children: ["\xa0", E.intl.string(E.t["pFO/Ph"])]
        }) : ""]
      }), s = {
        primaryGuild: Z.primaryGuild,
        userId: Z.id,
        contextGuildId: W,
        isOverlay: A,
        disableTooltip: true,
        className: a()(T.fc, A && T.zW),
        profileViewedAnalytics: {
          source: A ? x.JJy.OVERLAY : x.ThZ.VOICE_PANEL
        }
      }, !M || A ? (0, r.jsx)(h.A, (n = N({}, s), l = l = {
        children: i
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n)) : null), (0, r.jsx)(L, N({
        disabled: y
      }, O))]
    })
  })
} : null;

function k(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: i,
    channelId: o,
    userId: c
  } = e, [d, p] = l.useState(false), m = (0, s.K)(e => p(e));
  return l.useEffect(() => {
    d && f.Ay.trackWithMetadata(x.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: o,
      guild_id: i,
      user_id: c
    })
  }, [t.id, o, i, c, d]), (0, r.jsx)(u.m, {
    text: E.intl.formatToPlainString(E.t.Sq9xJ7, {
      game: t.name
    }),
    "aria-label": E.intl.formatToPlainString(E.t.Sq9xJ7, {
      game: t.name
    }),
    children: (0, r.jsx)(A.A, {
      ref: m,
      className: a()(T.Kk, T.Gt, n),
      game: t,
      size: A.M.XSMALL,
      onMouseEnter: () => {
        f.Ay.trackWithMetadata(x.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
          channel_id: o,
          guild_id: i,
          game_name: t.name,
          user_id: c
        })
      }
    })
  })
}