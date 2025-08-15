/** Chunk was on 96750 **/
/** chunk id: 597998, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => G,
  eJ: () => V,
  nm: () => F
}), require("./539854.js"), require("./997841.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk456100 = require("./456100.js"),
  Chunk657305 = require("./657305.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk340044 = require("./340044.jsx"),
  Chunk833858 = require("./833858.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk880395 = require("./880395.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk979651 = require("./979651.js"),
  Chunk574254 = require("./574254.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk630388 = require("./630388.js"),
  Chunk51144 = require("./51144.js"),
  Chunk91088 = require("./91088.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk927923 = require("./927923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk368736 = require("./368736.js");

function U(e) {
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
      isSelf: i
    } = e;
    return i && null == t ? (0, r.jsx)(s.DY3, {
      className: k.iconSpacing,
      text: M.intl.string(M.t.qstQub),
      children: (0, r.jsx)(s.svS, {
        className: a()(k.icon, n)
      })
    }, "add-status") : (0, r.jsx)(s.DY3, {
      className: k.iconSpacing,
      text: (0, O.O8)(t),
      children: (0, r.jsx)(S.Z, {
        hangStatusActivity: t,
        className: a()(k.hangStatusIcon, n)
      })
    }, "hang-status")
  },
  V = e => {
    let {
      children: t,
      collapsed: n = false,
      className: i
    } = e;
    return (0, r.jsx)("div", {
      className: a()(i, k.list, n ? k.listCollapse : k.listDefault),
      role: "group",
      children: t
    })
  };

function F(e) {
  let {
    className: t,
    mute: n,
    localMute: i,
    localVideoDisabled: l,
    serverMute: o,
    deaf: c,
    serverDeaf: u,
    collapsed: p,
    video: m,
    isStreaming: g,
    disabled: h,
    isWatching: v,
    iconClassName: _,
    embeddedApplication: y,
    otherClientSessionType: O,
    voicePlatform: S,
    application: I,
    guildId: j,
    channelId: x,
    user: E,
    disconnected: P,
    hangStatusActivity: A,
    showHangStatus: w,
    isSelf: U,
    handleHoverHangStatus: V,
    handleHoverIcons: F
  } = e, {
    enabled: G
  } = d.c.getCurrentConfig({
    location: "VoiceUserIcons"
  }, {
    autoTrackExposure: true
  });
  if (p || h) return null;
  let H = [],
    Y = (0, r.jsx)(W, {
      iconClassName: _,
      mute: n,
      localMute: i,
      serverMute: o,
      deaf: c,
      serverDeaf: u
    });
  m && (l ? H.push((0, r.jsx)(s.DY3, {
    className: k.iconSpacing,
    text: M.intl.string(M.t["PXMZ//"]),
    children: (0, r.jsx)(s.Amn, {
      size: "md",
      color: "currentColor",
      className: a()(k.icon, _),
      colorClass: k.strikethrough
    })
  }, "video")) : H.push((0, r.jsx)(s.DY3, {
    className: k.iconSpacing,
    text: M.intl.string(M.t.FlNoSU),
    children: (0, r.jsx)(s.Odl, {
      size: "md",
      color: "currentColor",
      className: a()(k.icon, _)
    })
  }, "video"))), P && H.push((0, r.jsx)(s.DY3, {
    className: k.iconSpacing,
    text: M.intl.string(M.t.HFwRpq),
    children: (0, r.jsx)(s.Mgn, {
      className: a()(k.icon, _),
      color: s.TVs.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected"));
  let z = G ? s.iWm : s.nG3;
  null != y && H.push((0, r.jsx)(s.DY3, {
    text: (0, f.Z)(y.name),
    className: k.iconSpacing,
    children: (0, r.jsx)(z, {
      size: "md",
      color: "currentColor",
      className: a()(k.icon, _)
    })
  }, "activity")), O === L.YE.XBOX || S === Z.wR.XBOX ? H.push((0, r.jsx)("div", {
    className: k.iconSpacing,
    children: (0, r.jsx)(T.Z, {
      className: a()(k.icon, _)
    })
  }, "xbox")) : (O === L.YE.PLAYSTATION || S === Z.wR.PLAYSTATION) && H.push((0, r.jsx)("div", {
    className: k.iconSpacing,
    children: (0, r.jsx)(C.Z, {
      className: a()(k.icon, _)
    })
  }, "playstation")), v && H.push((0, r.jsx)(s.DY3, {
    className: k.iconSpacing,
    text: M.intl.string(M.t.JH1SJy),
    children: (0, r.jsx)(s.tEF, {
      size: "xs",
      color: "currentColor",
      className: a()(k.icon, _)
    })
  }, "watch")), g && H.push((0, r.jsx)("div", {
    className: a()(k.iconSpacing, k.liveIconSpacing),
    children: (0, r.jsx)(b.ZP, {
      size: b.ZP.Sizes.SMALL
    })
  }, "stream"));
  let J = null != I && !(0, N.yE)(I.flags, D.udG.EMBEDDED),
    K = null == A && J;
  return 0 !== H.length || null != Y || w || K ? (0, r.jsxs)("div", {
    className: a()(k.icons, t),
    children: [(0, r.jsxs)("div", {
      className: k.iconGroup,
      onMouseEnter: () => null == F ? true : F(true),
      onMouseLeave: () => null == F ? true : F(false),
      children: [Y, H]
    }), w || K ? (0, r.jsx)("div", {
      className: k.iconGroup,
      onMouseEnter: () => null == V ? true : V(true),
      onMouseLeave: () => null == V ? true : V(false),
      children: K ? (0, r.jsx)(B, {
        application: I,
        iconClassName: _,
        guildId: j,
        channelId: x,
        userId: E.id
      }, "".concat(E.id, "-game")) : (0, r.jsx)(R, {
        hangStatusActivity: A,
        iconClassName: _,
        isSelf: U
      })
    }) : null]
  }) : null
}
let G = Chunk73800.forwardRef(function(e, t) {
  var n, {
      avatarContainerClass: l = k.avatarContainer,
      userNameClassName: c = k.usernameFont,
      size: d = D.ipw.SMALL,
      selected: f = false,
      disabled: p = false,
      isOverlay: b = false
    } = e,
    _ = function(e, t) {
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
    }(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
  let {
    onClick: O,
    onKeyDown: S,
    onDoubleClick: C,
    onContextMenu: T,
    onMouseLeave: N,
    onMouseDown: L,
    priority: R,
    speaking: V,
    collapsed: G,
    mute: B,
    serverMute: W,
    guildId: H,
    nick: Y,
    isGuest: z,
    flipped: J,
    className: K,
    overlap: q,
    "aria-label": X,
    ringing: Q,
    user: $,
    channelId: ee
  } = _, {
    parentAnalyticsLocation: et
  } = (0, m.ZP)(), en = (0, u.bp)(), er = null != ee ? x.Z.getChannel(ee) : null, ei = (0, o.e7)([j.default, E.Z], () => E.Z.isInChannel(ee, j.default.getId())), {
    enabled: el
  } = w.P.useExperiment({
    location: "VoiceUser"
  }), ea = (0, v.j)({
    displayNameStyles: $.displayNameStyles
  }), [eo, es] = i.useState(false);
  return i.useEffect(() => {
    let e = false,
      t = () => {
        e !== P.Z.isOpen() && ((e = P.Z.isOpen()) || es(false))
      };
    return P.Z.addChangeListener(t), () => P.Z.removeChangeListener(t)
  }, []), (0, r.jsx)(s.kL8, {
    ref: t,
    className: a()(K, {
      [k.voiceUser]: true,
      [k.overlap]: q,
      [k.selected]: f,
      [k.clickable]: null != O,
      [k.userSmall]: d === D.ipw.SMALL,
      [k.userLarge]: d === D.ipw.LARGE,
      [k.disabled]: !f && p,
      [k.ringing]: Q
    }),
    onClick: e => {
      null == O || O(e, $)
    },
    onDoubleClick: e => {
      null == C || C(e, $)
    },
    onContextMenu: e => {
      null == T || T(e, $)
    },
    onMouseLeave: e => {
      null == N || N(e, $)
    },
    onMouseDown: e => {
      null == L || L(e, $)
    },
    onKeyDown: S,
    "aria-label": null != (n = null != X ? X : Y) ? n : $.username,
    focusProps: {
      offset: {
        right: 4
      }
    },
    children: (0, r.jsxs)("div", {
      className: a()(k.content, {
        [k.flipped]: J
      }),
      children: [R && !G ? (0, r.jsx)(s.ua7, {
        text: M.intl.string(M.t.BVK71t),
        children: e => (0, r.jsx)("div", U({
          className: a()(k.iconPriortySpeaker, {
            [k.iconPriortySpeakerSpeaking]: !B && !W && V
          })
        }, e))
      }) : null, (0, r.jsx)("div", {
        className: a()(l, k.avatar, {
          [k.avatarLarge]: d === D.ipw.LARGE,
          [k.avatarSmall]: d === D.ipw.SMALL,
          [k.avatarSpeaking]: V
        }),
        style: {
          backgroundImage: "url(".concat($.getAvatarURL(H, d === D.ipw.LARGE ? 38 : 24), ")")
        }
      }), function() {
        var e, t;
        let n = (0, r.jsxs)("div", {
            className: a()(c, k.username, ea, {
              [k.usernameSpeaking]: !B && !W && V
            }),
            children: [null != Y ? Y : A.ZP.getName($), z ? (0, r.jsxs)("span", {
              className: k.guestSuffix,
              children: ["\xa0", M.intl.string(M.t["pFO/Pj"])]
            }) : ""]
          }),
          i = {
            primaryGuild: $.primaryGuild,
            userId: $.id,
            contextGuildId: H,
            isOverlay: b,
            disableTooltip: true,
            className: a()(k.clanTag, b && k.isOverlay),
            profileViewedAnalytics: {
              source: b ? D.jXE.OVERLAY : D.Sbl.VOICE_PANEL
            }
          };
        return !G || b ? (0, r.jsx)(y.Z, (e = U({}, i), t = t = {
          children: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e)) : null
      }(), (0, r.jsx)(F, U({
        disabled: p
      }, _)), G || !ei || el ? null : (0, r.jsx)(s.DY3, {
        text: M.intl.string(M.t["+1H47u"]),
        className: a()(k.optionsButtonContainer, {
          [k.optionsContainerActive]: eo
        }),
        children: (0, r.jsx)(s.P3F, {
          className: a()(k.optionsButton, {
            [k.optionsActive]: eo
          }),
          onClick: function(e) {
            null != H && null != er && ((0, g.v)(et, g.d.MORE), es(true), (0, I.D)(e, $, er, {
              context: en
            }, (e, t) => {
              (0, h.o)({
                menuName: e,
                menuItemProps: t,
                entrypoint: Z.A5.THREE_DOT,
                location: et,
                targetUserId: $.id
              })
            }))
          },
          children: (0, r.jsx)(s.xhG, {
            size: "md",
            className: k.icon
          })
        })
      })]
    })
  })
});

function B(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: l,
    channelId: o,
    userId: u
  } = e, [d, f] = i.useState(false), m = (0, c.O)(e => f(e));
  return i.useEffect(() => {
    d && p.ZP.trackWithMetadata(D.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: o,
      guild_id: l,
      user_id: u
    })
  }, [t.id, o, l, u, d]), (0, r.jsx)(s.DY3, {
    text: M.intl.formatToPlainString(M.t.Sq9xJy, {
      game: t.name
    }),
    "aria-label": M.intl.formatToPlainString(M.t.Sq9xJy, {
      game: t.name
    }),
    className: k.iconSpacing,
    children: (0, r.jsx)("div", {
      ref: m,
      children: (0, r.jsx)(_.Z, {
        className: a()(k.icon, n),
        game: t,
        size: _.Z.Sizes.XSMALL,
        onMouseEnter: () => {
          p.ZP.trackWithMetadata(D.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: o,
            guild_id: l,
            game_name: t.name,
            user_id: u
          })
        }
      })
    })
  })
}

function W(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: i,
    serverMute: l,
    deaf: o,
    serverDeaf: c
  } = e, u = [];
  if (n) {
    let e;
    e = l || i ? s.v0G : s.nRN;
    let n = (0, r.jsx)(e, {
      className: a()(k.icon, t, {
        [k.iconServer]: l
      }),
      color: "currentColor"
    });
    u.push((0, r.jsx)(s.DY3, {
      text: i ? M.intl.string(M.t.Q8Uzoa) : l ? M.intl.string(M.t.uLddbW) : M.intl.string(M.t.tjtv3N),
      className: k.iconSpacing,
      children: n
    }, "mute"))
  }
  if (c || o) {
    let e = c ? s.Vm4 : s.wE8,
      n = (0, r.jsx)(e, {
        className: a()(k.icon, t, {
          [k.iconServer]: c
        }),
        color: "currentColor"
      });
    u.push((0, r.jsx)(s.DY3, {
      className: k.iconSpacing,
      text: c ? M.intl.string(M.t.btxSdH) : M.intl.string(M.t.NjmiOD),
      children: n
    }, "deaf"))
  }
  return 0 === u.length ? null : u
}