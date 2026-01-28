/** Chunk was on 78572 **/
/** chunk id: 481947, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => D,
  Kc: () => C,
  Wr: () => N
}), require("./321073.js"), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk172218 = require("./172218.js"),
  Chunk665260 = require("./665260.js"),
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

function E(e) {
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
      isSelf: i,
      onAddHangStatusClicked: l,
      userId: s
    } = e, o = e => {
      e.stopPropagation(), null == l || l()
    };
    return i && null == t ? (0, r.jsx)(u.DUT, {
      onClick: o,
      className: P.Pt,
      children: (0, r.jsx)(u.nm2, {
        color: "currentColor",
        className: a()(P.Kk, P.G8, n)
      })
    }) : (0, r.jsx)(u.DUT, {
      onClick: o,
      className: P.Pt,
      children: (0, r.jsx)(A.A, {
        userId: s,
        size: 16,
        hangStatusActivity: t,
        className: a()(P.Kk, n)
      })
    })
  },
  N = e => {
    let {
      children: t,
      collapsed: n = false,
      className: i
    } = e;
    return (0, r.jsx)("div", {
      className: a()(i, P.p_, n ? P.GT : P.m3),
      role: "group",
      children: t
    })
  };

function C(e) {
  let {
    className: t,
    mute: n,
    localMute: i,
    localVideoDisabled: l,
    serverMute: s,
    deaf: p,
    serverDeaf: f,
    collapsed: m,
    video: y,
    isStreaming: b,
    disabled: _,
    isWatching: h,
    iconClassName: A,
    embeddedApplication: S,
    otherClientSessionType: E,
    voicePlatform: N,
    application: C,
    guildId: D,
    channelId: k,
    user: R,
    disconnected: M,
    hangStatusActivity: V,
    showHangStatus: U,
    isSelf: G,
    handleHoverHangStatus: W,
    handleHoverIcons: z,
    onAddHangStatusClicked: H
  } = e;
  if (m || _) return null;
  let F = [],
    K = function(e) {
      let {
        iconClassName: t,
        mute: n,
        localMute: i,
        serverMute: l,
        deaf: s,
        serverDeaf: o
      } = e, d = [];
      if (n) {
        let e;
        e = l || i ? u.O1p : u.z0P;
        let n = (0, r.jsx)(e, {
          className: a()(P.Kk, t, {
            [P.DU]: l
          }),
          color: "currentColor"
        });
        d.push((0, r.jsx)(c.m, {
          text: i ? T.intl.string(T.t.Q8Uzof) : l ? T.intl.string(T.t.uLddbQ) : T.intl.string(T.t.tjtv3P),
          children: n
        }, "mute"))
      }
      if (o || s) {
        let e = o ? u.TJE : u.cQT,
          n = (0, r.jsx)(e, {
            className: a()(P.Kk, t, {
              [P.DU]: o
            }),
            color: "currentColor"
          });
        d.push((0, r.jsx)(c.m, {
          text: o ? T.intl.string(T.t.btxSdB) : T.intl.string(T.t.NjmiOL),
          children: n
        }, "deaf"))
      }
      return d
    }({
      iconClassName: A,
      mute: n,
      localMute: i,
      serverMute: s,
      deaf: p,
      serverDeaf: f
    });
  y && (l ? F.push((0, r.jsx)(c.m, {
    text: T.intl.string(T.t["PXMZ/+"]),
    children: (0, r.jsx)(u.OCo, {
      size: "md",
      color: "currentColor",
      className: a()(P.Kk, A),
      colorClass: P.of
    })
  }, "video")) : F.push((0, r.jsx)(c.m, {
    text: T.intl.string(T.t.FlNoSV),
    children: (0, r.jsx)(u.npA, {
      size: "md",
      color: "currentColor",
      className: a()(P.Kk, A)
    })
  }, "video"))), M && F.push((0, r.jsx)(c.m, {
    text: T.intl.string(T.t.HFwRpk),
    children: (0, r.jsx)(u.EpV, {
      className: a()(P.Kk, A),
      color: u.LU0.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected")), null != S && F.push((0, r.jsx)(c.m, {
    text: (0, d.A)(S.name),
    children: (0, r.jsx)(u.k9F, {
      size: "md",
      color: "currentColor",
      className: a()(P.Kk, A)
    })
  }, "activity")), E === I.f$.XBOX || N === x.J7.XBOX ? F.push((0, r.jsx)(O.A, {
    className: a()(P.Kk, A)
  }, "xbox")) : (E === I.f$.PLAYSTATION || N === x.J7.PLAYSTATION) && F.push((0, r.jsx)(v.A, {
    className: a()(P.Kk, A)
  }, "playstation")), h && F.push((0, r.jsx)(c.m, {
    text: T.intl.string(T.t["JH1SJ+"]),
    children: (0, r.jsx)(u.bMW, {
      size: "xs",
      color: "currentColor",
      className: a()(P.Kk, A)
    })
  }, "watch")), b && F.push((0, r.jsx)(g.Ay, {
    size: g.Ay.Sizes.SMALL
  }, "stream"));
  let Y = null != C && !(0, o.Lt)(C.flags, j.gfo.EMBEDDED),
    B = null == V && Y;
  return 0 !== F.length || 0 !== K.length || U || B ? (0, r.jsxs)("div", {
    className: a()(P.Pt, t),
    children: [(0, r.jsxs)("div", {
      className: P.RL,
      onMouseEnter: () => null == z ? true : z(true),
      onMouseLeave: () => null == z ? true : z(false),
      children: [K, F]
    }), U || B ? (0, r.jsx)("div", {
      className: P.RL,
      onMouseEnter: () => null == W ? true : W(true),
      onMouseLeave: () => null == W ? true : W(false),
      children: B ? (0, r.jsx)(L, {
        application: C,
        iconClassName: A,
        guildId: D,
        channelId: k,
        userId: R.id
      }, "".concat(R.id, "-game")) : (0, r.jsx)(w, {
        userId: R.id,
        hangStatusActivity: V,
        iconClassName: A,
        isSelf: G,
        onAddHangStatusClicked: H
      })
    }) : null]
  }) : null
}
let D = /^(14256|21552)$/.test(require.j) ? function(e) {
  var t, n, i;
  let l, s, {
      avatarContainerClass: o = P.H,
      userNameClassName: d = P.gr,
      size: p = j.OSZ.SMALL,
      selected: g = false,
      disabled: _ = false,
      isOverlay: A = false,
      ref: v
    } = e,
    O = function(e, t) {
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
    }(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]),
    {
      onClick: x,
      onKeyDown: I,
      onDoubleClick: w,
      onContextMenu: N,
      onMouseLeave: D,
      onMouseDown: L,
      priority: k,
      speaking: R = false,
      latched: M,
      collapsed: V,
      mute: U,
      serverMute: G,
      guildId: W,
      nick: z,
      isGuest: H,
      flipped: F,
      className: K,
      overlap: Y,
      "aria-label": B,
      ringing: J,
      user: Z
    } = O,
    X = (0, y.A)({
      userId: Z.id,
      guildId: W
    }),
    q = (0, b.a)({
      displayNameStyles: X
    }),
    $ = (0, m.A)(Z.id),
    Q = (0, f.v)({
      isSpeaking: R,
      isLatched: M && !U && !G,
      voiceDb: $
    });
  return (0, r.jsx)(u.sqX, {
    ref: v,
    className: a()(K, {
      [P.q7]: true,
      [P.EF]: Y,
      [P.wH]: g,
      [P.vk]: null != x,
      [P.L9]: p === j.OSZ.SMALL,
      [P.p8]: p === j.OSZ.LARGE,
      [P.r9]: !g && _,
      [P.DF]: J
    }),
    onClick: e => {
      null == x || x(e, Z)
    },
    onDoubleClick: e => {
      null == w || w(e, Z)
    },
    onContextMenu: e => {
      null == N || N(e, Z)
    },
    onMouseLeave: e => {
      null == D || D(e, Z)
    },
    onMouseDown: e => {
      null == L || L(e, Z)
    },
    onKeyDown: I,
    "aria-label": null != (t = null != B ? B : z) ? t : Z.username,
    focusProps: {
      offset: {
        right: 4
      }
    },
    children: (0, r.jsxs)("div", {
      className: a()(P.Qs, {
        [P.zq]: F
      }),
      children: [k && !V ? (0, r.jsx)(c.m, {
        text: T.intl.string(T.t.BVK71i),
        children: (0, r.jsx)("div", {
          className: a()(P.G, {
            [P.g4]: !U && !G && R
          })
        })
      }) : null, (0, r.jsx)("div", {
        className: a()(o, P.my, {
          [P.Jb]: p === j.OSZ.LARGE,
          [P.dT]: p === j.OSZ.SMALL
        }),
        style: E({
          backgroundImage: "url(".concat(Z.getAvatarURL(W, p === j.OSZ.LARGE ? 38 : 24), ")")
        }, Q)
      }), (l = (0, r.jsxs)("div", {
        className: a()(d, P.Xh, q, {
          [P.Pi]: !U && !G && R
        }),
        children: [null != z ? z : S.Ay.getName(Z), H ? (0, r.jsxs)("span", {
          className: P.IW,
          children: ["\xa0", T.intl.string(T.t["pFO/Ph"])]
        }) : ""]
      }), s = {
        primaryGuild: Z.primaryGuild,
        userId: Z.id,
        contextGuildId: W,
        isOverlay: A,
        disableTooltip: true,
        className: a()(P.fc, A && P.zW),
        profileViewedAnalytics: {
          source: A ? j.JJy.OVERLAY : j.ThZ.VOICE_PANEL
        }
      }, !V || A ? (0, r.jsx)(h.A, (n = E({}, s), i = i = {
        children: l
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n)) : null), (0, r.jsx)(C, E({
        disabled: _
      }, O))]
    })
  })
} : null;

function L(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: l,
    channelId: o,
    userId: u
  } = e, [d, f] = i.useState(false), m = (0, s.K)(e => f(e));
  return i.useEffect(() => {
    d && p.Ay.trackWithMetadata(j.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: o,
      guild_id: l,
      user_id: u
    })
  }, [t.id, o, l, u, d]), (0, r.jsx)(c.m, {
    text: T.intl.formatToPlainString(T.t.Sq9xJ7, {
      game: t.name
    }),
    "aria-label": T.intl.formatToPlainString(T.t.Sq9xJ7, {
      game: t.name
    }),
    children: (0, r.jsx)(_.A, {
      ref: m,
      className: a()(P.Kk, P.Gt, n),
      game: t,
      size: _.M.XSMALL,
      onMouseEnter: () => {
        p.Ay.trackWithMetadata(j.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
          channel_id: o,
          guild_id: l,
          game_name: t.name,
          user_id: u
        })
      }
    })
  })
}