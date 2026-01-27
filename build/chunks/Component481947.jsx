/** Chunk was on 21425 **/
/** chunk id: 481947, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => D,
  Kc: () => C,
  Wr: () => w
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

function T(e) {
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
let N = e => {
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
      children: (0, r.jsx)(h.A, {
        userId: s,
        size: 16,
        hangStatusActivity: t,
        className: a()(P.Kk, n)
      })
    })
  },
  w = e => {
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
    isStreaming: _,
    disabled: b,
    isWatching: A,
    iconClassName: h,
    embeddedApplication: j,
    otherClientSessionType: T,
    voicePlatform: w,
    application: C,
    guildId: D,
    channelId: k,
    user: G,
    disconnected: R,
    hangStatusActivity: M,
    showHangStatus: V,
    isSelf: U,
    handleHoverHangStatus: W,
    handleHoverIcons: F,
    onAddHangStatusClicked: K
  } = e;
  if (m || b) return null;
  let z = [],
    H = function(e) {
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
          text: i ? E.intl.string(E.t.Q8Uzof) : l ? E.intl.string(E.t.uLddbQ) : E.intl.string(E.t.tjtv3P),
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
          text: o ? E.intl.string(E.t.btxSdB) : E.intl.string(E.t.NjmiOL),
          children: n
        }, "deaf"))
      }
      return d
    }({
      iconClassName: h,
      mute: n,
      localMute: i,
      serverMute: s,
      deaf: p,
      serverDeaf: f
    });
  y && (l ? z.push((0, r.jsx)(c.m, {
    text: E.intl.string(E.t["PXMZ/+"]),
    children: (0, r.jsx)(u.OCo, {
      size: "md",
      color: "currentColor",
      className: a()(P.Kk, h),
      colorClass: P.of
    })
  }, "video")) : z.push((0, r.jsx)(c.m, {
    text: E.intl.string(E.t.FlNoSV),
    children: (0, r.jsx)(u.npA, {
      size: "md",
      color: "currentColor",
      className: a()(P.Kk, h)
    })
  }, "video"))), R && z.push((0, r.jsx)(c.m, {
    text: E.intl.string(E.t.HFwRpk),
    children: (0, r.jsx)(u.EpV, {
      className: a()(P.Kk, h),
      color: u.LU0.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected")), null != j && z.push((0, r.jsx)(c.m, {
    text: (0, d.A)(j.name),
    children: (0, r.jsx)(u.bxf, {
      size: "md",
      color: "currentColor",
      className: a()(P.Kk, h)
    })
  }, "activity")), T === x.f$.XBOX || w === I.J7.XBOX ? z.push((0, r.jsx)(O.A, {
    className: a()(P.Kk, h)
  }, "xbox")) : (T === x.f$.PLAYSTATION || w === I.J7.PLAYSTATION) && z.push((0, r.jsx)(v.A, {
    className: a()(P.Kk, h)
  }, "playstation")), A && z.push((0, r.jsx)(c.m, {
    text: E.intl.string(E.t["JH1SJ+"]),
    children: (0, r.jsx)(u.bMW, {
      size: "xs",
      color: "currentColor",
      className: a()(P.Kk, h)
    })
  }, "watch")), _ && z.push((0, r.jsx)(g.Ay, {
    size: g.Ay.Sizes.SMALL
  }, "stream"));
  let Y = null != C && !(0, o.Lt)(C.flags, S.gfo.EMBEDDED),
    B = null == M && Y;
  return 0 !== z.length || 0 !== H.length || V || B ? (0, r.jsxs)("div", {
    className: a()(P.Pt, t),
    children: [(0, r.jsxs)("div", {
      className: P.RL,
      onMouseEnter: () => null == F ? true : F(true),
      onMouseLeave: () => null == F ? true : F(false),
      children: [H, z]
    }), V || B ? (0, r.jsx)("div", {
      className: P.RL,
      onMouseEnter: () => null == W ? true : W(true),
      onMouseLeave: () => null == W ? true : W(false),
      children: B ? (0, r.jsx)(L, {
        application: C,
        iconClassName: h,
        guildId: D,
        channelId: k,
        userId: G.id
      }, "".concat(G.id, "-game")) : (0, r.jsx)(N, {
        userId: G.id,
        hangStatusActivity: M,
        iconClassName: h,
        isSelf: U,
        onAddHangStatusClicked: K
      })
    }) : null]
  }) : null
}
let D = /^(14256|21552)$/.test(require.j) ? function(e) {
  var t, n, i;
  let l, s, {
      avatarContainerClass: o = P.H,
      userNameClassName: d = P.gr,
      size: p = S.OSZ.SMALL,
      selected: g = false,
      disabled: b = false,
      isOverlay: h = false,
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
      onClick: I,
      onKeyDown: x,
      onDoubleClick: N,
      onContextMenu: w,
      onMouseLeave: D,
      onMouseDown: L,
      priority: k,
      speaking: G = false,
      latched: R,
      collapsed: M,
      mute: V,
      serverMute: U,
      guildId: W,
      nick: F,
      isGuest: K,
      flipped: z,
      className: H,
      overlap: Y,
      "aria-label": B,
      ringing: J,
      user: Z
    } = O,
    X = (0, y.A)({
      userId: Z.id,
      guildId: W
    }),
    q = (0, _.a)({
      displayNameStyles: X
    }),
    $ = (0, m.A)(Z.id),
    Q = (0, f.v)({
      isSpeaking: G,
      isLatched: R && !V && !U,
      voiceDb: $
    });
  return (0, r.jsx)(u.sqX, {
    ref: v,
    className: a()(H, {
      [P.q7]: true,
      [P.EF]: Y,
      [P.wH]: g,
      [P.vk]: null != I,
      [P.L9]: p === S.OSZ.SMALL,
      [P.p8]: p === S.OSZ.LARGE,
      [P.r9]: !g && b,
      [P.DF]: J
    }),
    onClick: e => {
      null == I || I(e, Z)
    },
    onDoubleClick: e => {
      null == N || N(e, Z)
    },
    onContextMenu: e => {
      null == w || w(e, Z)
    },
    onMouseLeave: e => {
      null == D || D(e, Z)
    },
    onMouseDown: e => {
      null == L || L(e, Z)
    },
    onKeyDown: x,
    "aria-label": null != (t = null != B ? B : F) ? t : Z.username,
    focusProps: {
      offset: {
        right: 4
      }
    },
    children: (0, r.jsxs)("div", {
      className: a()(P.Qs, {
        [P.zq]: z
      }),
      children: [k && !M ? (0, r.jsx)(c.m, {
        text: E.intl.string(E.t.BVK71i),
        children: (0, r.jsx)("div", {
          className: a()(P.G, {
            [P.g4]: !V && !U && G
          })
        })
      }) : null, (0, r.jsx)("div", {
        className: a()(o, P.my, {
          [P.Jb]: p === S.OSZ.LARGE,
          [P.dT]: p === S.OSZ.SMALL
        }),
        style: T({
          backgroundImage: "url(".concat(Z.getAvatarURL(W, p === S.OSZ.LARGE ? 38 : 24), ")")
        }, Q)
      }), (l = (0, r.jsxs)("div", {
        className: a()(d, P.Xh, q, {
          [P.Pi]: !V && !U && G
        }),
        children: [null != F ? F : j.Ay.getName(Z), K ? (0, r.jsxs)("span", {
          className: P.IW,
          children: ["\xa0", E.intl.string(E.t["pFO/Ph"])]
        }) : ""]
      }), s = {
        primaryGuild: Z.primaryGuild,
        userId: Z.id,
        contextGuildId: W,
        isOverlay: h,
        disableTooltip: true,
        className: a()(P.fc, h && P.zW),
        profileViewedAnalytics: {
          source: h ? S.JJy.OVERLAY : S.ThZ.VOICE_PANEL
        }
      }, !M || h ? (0, r.jsx)(A.A, (n = T({}, s), i = i = {
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
      }), n)) : null), (0, r.jsx)(C, T({
        disabled: b
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
    d && p.Ay.trackWithMetadata(S.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: o,
      guild_id: l,
      user_id: u
    })
  }, [t.id, o, l, u, d]), (0, r.jsx)(c.m, {
    text: E.intl.formatToPlainString(E.t.Sq9xJ7, {
      game: t.name
    }),
    "aria-label": E.intl.formatToPlainString(E.t.Sq9xJ7, {
      game: t.name
    }),
    children: (0, r.jsx)(b.A, {
      ref: m,
      className: a()(P.Kk, P.Gt, n),
      game: t,
      size: b.M.XSMALL,
      onMouseEnter: () => {
        p.Ay.trackWithMetadata(S.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
          channel_id: o,
          guild_id: l,
          game_name: t.name,
          user_id: u
        })
      }
    })
  })
}