/** Chunk was on 88474 **/
/** chunk id: 481947, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => U,
  Kc: () => M,
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
      isSelf: l,
      onAddHangStatusClicked: i,
      userId: s
    } = e, o = e => {
      e.stopPropagation(), null == i || i()
    };
    return l && null == t ? (0, r.jsx)(p.DUT, {
      onClick: o,
      className: L.Pt,
      children: (0, r.jsx)(p.nm2, {
        color: "currentColor",
        className: a()(L.Kk, L.G8, n)
      })
    }) : (0, r.jsx)(p.DUT, {
      onClick: o,
      className: L.Pt,
      children: (0, r.jsx)(O.A, {
        userId: s,
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
      className: l
    } = e;
    return (0, r.jsx)("div", {
      className: a()(l, L.p_, n ? L.GT : L.m3),
      role: "group",
      children: t
    })
  };

function M(e) {
  let {
    className: t,
    mute: n,
    localMute: l,
    localVideoDisabled: i,
    serverMute: s,
    deaf: u,
    serverDeaf: m,
    collapsed: g,
    video: y,
    isStreaming: _,
    disabled: h,
    isWatching: A,
    iconClassName: v,
    embeddedApplication: O,
    otherClientSessionType: S,
    voicePlatform: j,
    application: x,
    guildId: C,
    channelId: D,
    user: k,
    disconnected: M,
    hangStatusActivity: U,
    showHangStatus: V,
    isSelf: F,
    handleHoverHangStatus: W,
    handleHoverIcons: H,
    onAddHangStatusClicked: z
  } = e;
  if (g || h) return null;
  let K = [],
    B = function(e) {
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
        e = i || l ? p.O1p : p.z0P;
        let n = (0, r.jsx)(e, {
          className: a()(L.Kk, t, {
            [L.DU]: i
          }),
          color: "currentColor"
        });
        c.push((0, r.jsx)(d.m, {
          text: l ? w.intl.string(w.t.Q8Uzof) : i ? w.intl.string(w.t.uLddbQ) : w.intl.string(w.t.tjtv3P),
          children: n
        }, "mute"))
      }
      if (o || s) {
        let e = o ? p.TJE : p.cQT,
          n = (0, r.jsx)(e, {
            className: a()(L.Kk, t, {
              [L.DU]: o
            }),
            color: "currentColor"
          });
        c.push((0, r.jsx)(d.m, {
          text: o ? w.intl.string(w.t.btxSdB) : w.intl.string(w.t.NjmiOL),
          children: n
        }, "deaf"))
      }
      return c
    }({
      iconClassName: v,
      mute: n,
      localMute: l,
      serverMute: s,
      deaf: u,
      serverDeaf: m
    });
  y && (i ? K.push((0, r.jsx)(d.m, {
    text: w.intl.string(w.t["PXMZ/+"]),
    children: (0, r.jsx)(p.OCo, {
      size: "md",
      color: "currentColor",
      className: a()(L.Kk, v),
      colorClass: L.of
    })
  }, "video")) : K.push((0, r.jsx)(d.m, {
    text: w.intl.string(w.t.FlNoSV),
    children: (0, r.jsx)(p.npA, {
      size: "md",
      color: "currentColor",
      className: a()(L.Kk, v)
    })
  }, "video"))), M && K.push((0, r.jsx)(d.m, {
    text: w.intl.string(w.t.HFwRpk),
    children: (0, r.jsx)(p.EpV, {
      className: a()(L.Kk, v),
      color: p.LU0.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected")), null != O && K.push((0, r.jsx)(d.m, {
    text: (0, f.A)(O.name),
    children: (0, r.jsx)(p.k9F, {
      size: "md",
      color: "currentColor",
      className: a()(L.Kk, v)
    })
  }, "activity")), S === T.f$.XBOX || j === N.J7.XBOX ? K.push((0, r.jsx)(E.A, {
    className: a()(L.Kk, v)
  }, "xbox")) : S === T.f$.PLAYSTATION || j === N.J7.PLAYSTATION ? K.push((0, r.jsx)(I.A, {
    className: a()(L.Kk, v)
  }, "playstation")) : j === N.J7.QUEST && K.push((0, r.jsx)(c.VrHeadsetIcon, {
    size: "xs",
    color: "currentColor",
    className: a()(L.Kk, v)
  }, "quest")), A && K.push((0, r.jsx)(d.m, {
    text: w.intl.string(w.t["JH1SJ+"]),
    children: (0, r.jsx)(p.bMW, {
      size: "xs",
      color: "currentColor",
      className: a()(L.Kk, v)
    })
  }, "watch")), _ && K.push((0, r.jsx)(b.Ay, {
    size: b.Ay.Sizes.SMALL
  }, "stream"));
  let Y = null != x && !(0, o.Lt)(x.flags, P.gfo.EMBEDDED),
    J = null == U && Y;
  return 0 !== K.length || 0 !== B.length || V || J ? (0, r.jsxs)("div", {
    className: a()(L.Pt, t),
    children: [(0, r.jsxs)("div", {
      className: L.RL,
      onMouseEnter: () => null == H ? true : H(true),
      onMouseLeave: () => null == H ? true : H(false),
      children: [B, K]
    }), V || J ? (0, r.jsx)("div", {
      className: L.RL,
      onMouseEnter: () => null == W ? true : W(true),
      onMouseLeave: () => null == W ? true : W(false),
      children: J ? (0, r.jsx)(G, {
        application: x,
        iconClassName: v,
        guildId: C,
        channelId: D,
        userId: k.id
      }, "".concat(k.id, "-game")) : (0, r.jsx)(R, {
        userId: k.id,
        hangStatusActivity: U,
        iconClassName: v,
        isSelf: F,
        onAddHangStatusClicked: z
      })
    }) : null]
  }) : null
}
let U = /^(14256|21552)$/.test(require.j) ? function(e) {
  var t, n, l;
  let i, s, o, c, {
      avatarContainerClass: f = L.H,
      userNameClassName: m = L.gr,
      size: b = P.OSZ.SMALL,
      selected: A = false,
      disabled: O = false,
      isOverlay: I = false,
      ref: E
    } = e,
    N = function(e, t) {
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
      onClick: T,
      onKeyDown: R,
      onDoubleClick: k,
      onContextMenu: U,
      onMouseLeave: G,
      onMouseDown: V,
      priority: F,
      speaking: W = false,
      latched: H,
      collapsed: z,
      mute: K,
      serverMute: B,
      guildId: Y,
      nick: J,
      isGuest: Z,
      flipped: X,
      className: q,
      overlap: $,
      "aria-label": Q,
      ringing: ee,
      user: et
    } = N,
    en = (0, _.A)({
      userId: et.id,
      guildId: Y
    }),
    er = (0, h.a)({
      displayNameStyles: en
    }),
    el = (0, y.A)(et.id),
    ei = (0, g.v)({
      isSpeaking: W,
      isLatched: H && !K && !B,
      voiceDb: el
    }),
    ea = (0, u.bG)([j.A], () => j.A.getProgressForUserId(et.id), [et.id]),
    es = (0, S.Uk)("VoiceUser") && null != ea;
  return (0, r.jsx)(p.sqX, {
    ref: E,
    className: a()(q, {
      [L.q7]: true,
      [L.EF]: $,
      [L.wH]: A,
      [L.vk]: null != T,
      [L.L9]: b === P.OSZ.SMALL,
      [L.p8]: b === P.OSZ.LARGE,
      [L.r9]: !A && O,
      [L.DF]: ee
    }),
    onClick: e => {
      null == T || T(e, et)
    },
    onDoubleClick: e => {
      null == k || k(e, et)
    },
    onContextMenu: e => {
      null == U || U(e, et)
    },
    onMouseLeave: e => {
      null == G || G(e, et)
    },
    onMouseDown: e => {
      null == V || V(e, et)
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
        [L.zq]: X
      }),
      children: [F && !z ? (0, r.jsx)(d.m, {
        text: w.intl.string(w.t.BVK71i),
        children: (0, r.jsx)("div", {
          className: a()(L.G, {
            [L.g4]: !K && !B && W
          })
        })
      }) : null, (i = a()(L.my, {
        [L.Jb]: b === P.OSZ.LARGE,
        [L.dT]: b === P.OSZ.SMALL
      }), s = D({
        backgroundImage: "url(".concat(et.getAvatarURL(Y, b === P.OSZ.LARGE ? 38 : 24), ")")
      }, ei), es ? (0, r.jsx)(x.A, {
        userId: et.id,
        wrapperClassName: f,
        children: (0, r.jsx)("div", {
          className: i,
          style: s
        })
      }) : (0, r.jsx)("div", {
        className: a()(f, i),
        style: s
      })), (o = (0, r.jsxs)("div", {
        className: a()(m, L.Xh, er, {
          [L.Pi]: !K && !B && W
        }),
        children: [null != J ? J : C.Ay.getName(et), Z ? (0, r.jsxs)("span", {
          className: L.IW,
          children: ["\xa0", w.intl.string(w.t["pFO/Ph"])]
        }) : ""]
      }), c = {
        primaryGuild: et.primaryGuild,
        userId: et.id,
        contextGuildId: Y,
        isOverlay: I,
        disableTooltip: true,
        className: a()(L.fc, I && L.zW),
        profileViewedAnalytics: {
          source: I ? P.JJy.OVERLAY : P.ThZ.VOICE_PANEL
        }
      }, !z || I ? (0, r.jsx)(v.A, (n = D({}, c), l = l = {
        children: o
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n)) : null), (0, r.jsx)(M, D({
        disabled: O
      }, N))]
    })
  })
} : null;

function G(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: i,
    channelId: o,
    userId: c
  } = e, [u, p] = l.useState(false), f = (0, s.K)(e => p(e));
  return l.useEffect(() => {
    u && m.Ay.trackWithMetadata(P.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: o,
      guild_id: i,
      user_id: c
    })
  }, [t.id, o, i, c, u]), (0, r.jsx)(d.m, {
    text: w.intl.formatToPlainString(w.t.Sq9xJ7, {
      game: t.name
    }),
    "aria-label": w.intl.formatToPlainString(w.t.Sq9xJ7, {
      game: t.name
    }),
    children: (0, r.jsx)(A.A, {
      ref: f,
      className: a()(L.Kk, L.Gt, n),
      game: t,
      size: A.M.XSMALL,
      onMouseEnter: () => {
        m.Ay.trackWithMetadata(P.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
          channel_id: o,
          guild_id: i,
          game_name: t.name,
          user_id: c
        })
      }
    })
  })
}