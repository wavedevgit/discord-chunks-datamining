/** Chunk was on 88474 **/
/** chunk id: 481947, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => M,
  Kc: () => U,
  Wr: () => k
}), require("./321073.js"), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk172218 = require("./172218.js"),
  Chunk665260 = require("./665260.js"),
  Chunk934551 = require("./934551.js"),
  Chunk311907 = require("./311907.js"),
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
  Chunk430363 = require("./430363.js"),
  Chunk823854 = require("./823854.js"),
  Chunk261056 = require("./261056.jsx"),
  Chunk790381 = require("./790381.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk544105 = require("./544105.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk77615 = require("./77615.js");

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
let R = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: i,
      onAddHangStatusClicked: l,
      userId: o
    } = e, s = e => {
      e.stopPropagation(), null == l || l()
    };
    return i && null == t ? (0, r.jsx)(f.DUT, {
      onClick: s,
      className: L.Pt,
      children: (0, r.jsx)(f.nm2, {
        color: "currentColor",
        className: a()(L.Kk, L.G8, n)
      })
    }) : (0, r.jsx)(f.DUT, {
      onClick: s,
      className: L.Pt,
      children: (0, r.jsx)(O.A, {
        userId: o,
        size: 16,
        hangStatusActivity: t,
        className: a()(L.Kk, n)
      })
    })
  },
  k = e => {
    let {
      children: t,
      collapsed: n = false,
      className: i
    } = e;
    return (0, r.jsx)("div", {
      className: a()(i, L.p_, n ? L.GT : L.m3),
      role: "group",
      children: t
    })
  };

function U(e) {
  let {
    className: t,
    mute: n,
    localMute: i,
    localVideoDisabled: l,
    serverMute: o,
    deaf: u,
    serverDeaf: m,
    collapsed: g,
    video: y,
    isStreaming: h,
    disabled: A,
    isWatching: _,
    iconClassName: v,
    embeddedApplication: O,
    otherClientSessionType: S,
    voicePlatform: j,
    application: I,
    guildId: P,
    channelId: D,
    user: k,
    disconnected: U,
    hangStatusActivity: M,
    showHangStatus: G,
    isSelf: F,
    handleHoverHangStatus: H,
    handleHoverIcons: W,
    onAddHangStatusClicked: B
  } = e;
  if (g || A) return null;
  let z = [],
    K = function(e) {
      let {
        iconClassName: t,
        mute: n,
        localMute: i,
        serverMute: l,
        deaf: o,
        serverDeaf: s
      } = e, c = [];
      if (n) {
        let e;
        e = l || i ? f.O1p : f.z0P;
        let n = (0, r.jsx)(e, {
          className: a()(L.Kk, t, {
            [L.DU]: l
          }),
          color: "currentColor"
        });
        c.push((0, r.jsx)(d.m, {
          text: i ? w.intl.string(w.t.Q8Uzof) : l ? w.intl.string(w.t.uLddbQ) : w.intl.string(w.t.tjtv3P),
          children: n
        }, "mute"))
      }
      if (s || o) {
        let e = s ? f.TJE : f.cQT,
          n = (0, r.jsx)(e, {
            className: a()(L.Kk, t, {
              [L.DU]: s
            }),
            color: "currentColor"
          });
        c.push((0, r.jsx)(d.m, {
          text: s ? w.intl.string(w.t.btxSdB) : w.intl.string(w.t.NjmiOL),
          children: n
        }, "deaf"))
      }
      return c
    }({
      iconClassName: v,
      mute: n,
      localMute: i,
      serverMute: o,
      deaf: u,
      serverDeaf: m
    });
  y && (l ? z.push((0, r.jsx)(d.m, {
    text: w.intl.string(w.t["PXMZ/+"]),
    children: (0, r.jsx)(f.OCo, {
      size: "md",
      color: "currentColor",
      className: a()(L.Kk, v),
      colorClass: L.of
    })
  }, "video")) : z.push((0, r.jsx)(d.m, {
    text: w.intl.string(w.t.FlNoSV),
    children: (0, r.jsx)(f.npA, {
      size: "md",
      color: "currentColor",
      className: a()(L.Kk, v)
    })
  }, "video"))), U && z.push((0, r.jsx)(d.m, {
    text: w.intl.string(w.t.HFwRpk),
    children: (0, r.jsx)(f.EpV, {
      className: a()(L.Kk, v),
      color: f.LU0.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected")), null != O && z.push((0, r.jsx)(d.m, {
    text: (0, p.A)(O.name),
    children: (0, r.jsx)(f.k9F, {
      size: "md",
      color: "currentColor",
      className: a()(L.Kk, v)
    })
  }, "activity")), S === N.f$.XBOX || j === T.J7.XBOX ? z.push((0, r.jsx)(E.A, {
    className: a()(L.Kk, v)
  }, "xbox")) : S === N.f$.PLAYSTATION || j === T.J7.PLAYSTATION ? z.push((0, r.jsx)(x.A, {
    className: a()(L.Kk, v)
  }, "playstation")) : j === T.J7.QUEST && z.push((0, r.jsx)(c.VrHeadsetIcon, {
    size: "xs",
    color: "currentColor",
    className: a()(L.Kk, v)
  }, "quest")), _ && z.push((0, r.jsx)(d.m, {
    text: w.intl.string(w.t["JH1SJ+"]),
    children: (0, r.jsx)(f.bMW, {
      size: "xs",
      color: "currentColor",
      className: a()(L.Kk, v)
    })
  }, "watch")), h && z.push((0, r.jsx)(b.Ay, {
    size: b.Ay.Sizes.SMALL
  }, "stream"));
  let Y = null != I && !(0, s.Lt)(I.flags, C.gfo.EMBEDDED),
    J = null == M && Y;
  return 0 !== z.length || 0 !== K.length || G || J ? (0, r.jsxs)("div", {
    className: a()(L.Pt, t),
    children: [(0, r.jsxs)("div", {
      className: L.RL,
      onMouseEnter: () => null == W ? true : W(true),
      onMouseLeave: () => null == W ? true : W(false),
      children: [K, z]
    }), G || J ? (0, r.jsx)("div", {
      className: L.RL,
      onMouseEnter: () => null == H ? true : H(true),
      onMouseLeave: () => null == H ? true : H(false),
      children: J ? (0, r.jsx)(V, {
        application: I,
        iconClassName: v,
        guildId: P,
        channelId: D,
        userId: k.id
      }, "".concat(k.id, "-game")) : (0, r.jsx)(R, {
        userId: k.id,
        hangStatusActivity: M,
        iconClassName: v,
        isSelf: F,
        onAddHangStatusClicked: B
      })
    }) : null]
  }) : null
}
let M = /^(14256|21552)$/.test(require.j) ? function(e) {
  var t, n, i;
  let l, o, s, c, {
      avatarContainerClass: p = L.H,
      userNameClassName: m = L.gr,
      size: b = C.OSZ.SMALL,
      selected: _ = false,
      disabled: O = false,
      isOverlay: x = false,
      ref: E
    } = e,
    T = function(e, t) {
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
      onClick: N,
      onKeyDown: R,
      onDoubleClick: k,
      onContextMenu: M,
      onMouseLeave: V,
      onMouseDown: G,
      priority: F,
      speaking: H = false,
      latched: W,
      collapsed: B,
      mute: z,
      serverMute: K,
      guildId: Y,
      nick: J,
      isGuest: Z,
      flipped: q,
      className: X,
      overlap: $,
      "aria-label": Q,
      ringing: ee,
      user: et
    } = T,
    en = (0, h.A)({
      userId: et.id,
      guildId: Y
    }),
    er = (0, A.a)({
      displayNameStyles: en
    }),
    ei = (0, y.A)(et.id),
    el = (0, g.v)({
      isSpeaking: H,
      isLatched: W && !z && !K,
      voiceDb: ei
    }),
    ea = (0, u.bG)([j.A], () => j.A.getProgressForUserId(et.id), [et.id]),
    eo = (0, S.Uk)("VoiceUser") && null != ea;
  return (0, r.jsx)(f.sqX, {
    ref: E,
    className: a()(X, {
      [L.q7]: true,
      [L.EF]: $,
      [L.wH]: _,
      [L.vk]: null != N,
      [L.L9]: b === C.OSZ.SMALL,
      [L.p8]: b === C.OSZ.LARGE,
      [L.r9]: !_ && O,
      [L.DF]: ee
    }),
    onClick: e => {
      null == N || N(e, et)
    },
    onDoubleClick: e => {
      null == k || k(e, et)
    },
    onContextMenu: e => {
      null == M || M(e, et)
    },
    onMouseLeave: e => {
      null == V || V(e, et)
    },
    onMouseDown: e => {
      null == G || G(e, et)
    },
    onKeyDown: R,
    "aria-label": null != (t = null != Q ? Q : J) ? t : et.username,
    focusProps: {
      offset: {
        right: 4
      }
    },
    children: (0, r.jsxs)("div", {
      className: a()(L.Qs, {
        [L.zq]: q
      }),
      children: [F && !B ? (0, r.jsx)(d.m, {
        text: w.intl.string(w.t.BVK71i),
        children: (0, r.jsx)("div", {
          className: a()(L.G, {
            [L.g4]: !z && !K && H
          })
        })
      }) : null, (l = a()(L.my, {
        [L.Jb]: b === C.OSZ.LARGE,
        [L.dT]: b === C.OSZ.SMALL
      }), o = D({
        backgroundImage: "url(".concat(et.getAvatarURL(Y, b === C.OSZ.LARGE ? 38 : 24), ")")
      }, el), eo ? (0, r.jsx)(I.A, {
        userId: et.id,
        wrapperClassName: p,
        children: (0, r.jsx)("div", {
          className: l,
          style: o
        })
      }) : (0, r.jsx)("div", {
        className: a()(p, l),
        style: o
      })), (s = (0, r.jsxs)("div", {
        className: a()(m, L.Xh, er, {
          [L.Pi]: !z && !K && H
        }),
        children: [null != J ? J : P.Ay.getName(et), Z ? (0, r.jsxs)("span", {
          className: L.IW,
          children: ["\xa0", w.intl.string(w.t["pFO/Ph"])]
        }) : ""]
      }), c = {
        primaryGuild: et.primaryGuild,
        userId: et.id,
        contextGuildId: Y,
        isOverlay: x,
        disableTooltip: true,
        className: a()(L.fc, x && L.zW),
        profileViewedAnalytics: {
          source: x ? C.JJy.OVERLAY : C.ThZ.VOICE_PANEL
        }
      }, !B || x ? (0, r.jsx)(v.A, (n = D({}, c), i = i = {
        children: s
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n)) : null), (0, r.jsx)(U, D({
        disabled: O
      }, T))]
    })
  })
} : null;

function V(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: l,
    channelId: s,
    userId: c
  } = e, [u, f] = i.useState(false), p = (0, o.K)(e => f(e));
  return i.useEffect(() => {
    u && m.Ay.trackWithMetadata(C.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: s,
      guild_id: l,
      user_id: c
    })
  }, [t.id, s, l, c, u]), (0, r.jsx)(d.m, {
    text: w.intl.formatToPlainString(w.t.Sq9xJ7, {
      game: t.name
    }),
    "aria-label": w.intl.formatToPlainString(w.t.Sq9xJ7, {
      game: t.name
    }),
    children: (0, r.jsx)(_.A, {
      ref: p,
      className: a()(L.Kk, L.Gt, n),
      game: t,
      size: _.M.XSMALL,
      onMouseEnter: () => {
        m.Ay.trackWithMetadata(C.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
          channel_id: s,
          guild_id: l,
          game_name: t.name,
          user_id: c
        })
      }
    })
  })
}