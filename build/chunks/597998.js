/** Chunk was on 2171 **/
n.d(t, {
  ZP: () => W,
  eJ: () => D,
  nm: () => _
}), n(653041), n(789020), n(47120);
var r = n(200651),
  l = n(192379),
  i = n(120356),
  o = n.n(i),
  a = n(481060),
  s = n(434650),
  c = n(40851),
  u = n(456100),
  d = n(657305),
  p = n(367907),
  f = n(906732),
  m = n(522651),
  g = n(795318),
  b = n(194082),
  y = n(282256),
  O = n(925329),
  v = n(880395),
  h = n(221241),
  j = n(592125),
  S = n(574254),
  P = n(374129),
  N = n(639351),
  x = n(630388),
  I = n(51144),
  Z = n(981631),
  E = n(354459),
  w = n(927923),
  T = n(388032),
  C = n(277961);

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let D = e => {
  let {
    children: t,
    collapsed: n = !1,
    className: l
  } = e;
  return (0, r.jsx)("div", {
    className: o()(l, C.list, n ? C.listCollapse : C.listDefault),
    role: "group",
    children: t
  })
};

function _(e) {
  let {
    className: t,
    mute: n,
    localMute: l,
    localVideoDisabled: i,
    serverMute: s,
    deaf: c,
    serverDeaf: p,
    collapsed: f,
    video: m,
    isStreaming: g,
    disabled: y,
    isWatching: O,
    iconClassName: v,
    embeddedApplication: h,
    otherClientSessionType: j,
    voicePlatform: S,
    application: I,
    guildId: A,
    channelId: D,
    user: _,
    disconnected: W
  } = e, {
    enabled: L
  } = u.c.getCurrentConfig({
    location: "VoiceUserIcons"
  }, {
    autoTrackExposure: !0
  });
  if (f || y) return null;
  let U = [],
    R = (0, r.jsx)(M, {
      iconClassName: v,
      mute: n,
      localMute: l,
      serverMute: s,
      deaf: c,
      serverDeaf: p
    });
  m && (i ? U.push((0, r.jsx)(a.DY3, {
    className: C.iconSpacing,
    text: T.NW.string(T.t["PXMZ//"]),
    children: (0, r.jsx)(a.Amn, {
      size: "md",
      color: "currentColor",
      className: o()(C.icon, v),
      colorClass: C.strikethrough
    })
  }, "video")) : U.push((0, r.jsx)(a.DY3, {
    className: C.iconSpacing,
    text: T.NW.string(T.t.FlNoSU),
    children: (0, r.jsx)(a.Odl, {
      size: "md",
      color: "currentColor",
      className: o()(C.icon, v)
    })
  }, "video"))), W && U.push((0, r.jsx)(a.DY3, {
    className: C.iconSpacing,
    text: T.NW.string(T.t.HFwRpq),
    children: (0, r.jsx)(a.P4T, {
      className: o()(C.icon, v),
      color: a.TVs.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected"));
  let V = L ? a.iWm : a.nG3;
  null != h && U.push((0, r.jsx)(a.DY3, {
    text: (0, d.Z)(h.name),
    className: C.iconSpacing,
    children: (0, r.jsx)(V, {
      size: "md",
      color: "currentColor",
      className: o()(C.icon, v)
    })
  }, "activity")), j === w.YE.XBOX || S === E.wR.XBOX ? U.push((0, r.jsx)("div", {
    className: C.iconSpacing,
    children: (0, r.jsx)(N.Z, {
      className: o()(C.icon, v)
    })
  }, "xbox")) : (j === w.YE.PLAYSTATION || S === E.wR.PLAYSTATION) && U.push((0, r.jsx)("div", {
    className: C.iconSpacing,
    children: (0, r.jsx)(P.Z, {
      className: o()(C.icon, v)
    })
  }, "playstation")), O && U.push((0, r.jsx)(a.DY3, {
    className: C.iconSpacing,
    text: T.NW.string(T.t.JH1SJy),
    children: (0, r.jsx)(a.tEF, {
      size: "xs",
      color: "currentColor",
      className: o()(C.icon, v)
    })
  }, "watch")), g && U.push((0, r.jsx)("div", {
    className: o()(C.iconSpacing, C.liveIconSpacing),
    children: (0, r.jsx)(b.ZP, {
      size: b.ZP.Sizes.SMALL
    })
  }, "stream"));
  let Y = null != I && !(0, x.yE)(I.flags, Z.udG.EMBEDDED);
  return 0 !== U.length || null != R || Y ? (0, r.jsxs)("div", {
    className: o()(C.icons, t),
    children: [(0, r.jsxs)("div", {
      className: C.iconGroup,
      children: [R, U]
    }), Y && (0, r.jsx)("div", {
      className: C.iconGroup,
      children: (0, r.jsx)(k, {
        application: I,
        iconClassName: v,
        guildId: A,
        channelId: D,
        userId: _.id
      }, "".concat(_.id, "-game"))
    })]
  }) : null
}
let W = function(e) {
  var t, {
      avatarContainerClass: n = C.avatarContainer,
      userNameClassName: i = C.usernameFont,
      size: s = Z.ipw.SMALL,
      selected: u = !1,
      disabled: d = !1,
      isOverlay: p = !1
    } = e,
    b = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
  let {
    onClick: O,
    onKeyDown: P,
    onDoubleClick: N,
    onContextMenu: x,
    onMouseLeave: w,
    onMouseDown: D,
    priority: W,
    speaking: k,
    collapsed: M,
    mute: L,
    serverMute: U,
    guildId: R,
    nick: V,
    isGuest: Y,
    flipped: G,
    className: B,
    overlap: F,
    "aria-label": z,
    ringing: J,
    user: H,
    channelId: X
  } = b, {
    parentAnalyticsLocation: K
  } = (0, f.ZP)(), Q = (0, c.bp)(), q = null != X ? j.Z.getChannel(X) : null, {
    simplifiedSettingsEnabled: $
  } = (0, h.Z)({
    location: "VoiceUser"
  }), [ee, et] = l.useState(!1);
  return l.useEffect(() => {
    let e = !1,
      t = () => {
        e === S.Z.isOpen() || (e = S.Z.isOpen()) || et(!1)
      };
    return S.Z.addChangeListener(t), () => S.Z.removeChangeListener(t)
  }, []), (0, r.jsx)(a.kL8, {
    className: o()(B, {
      [C.voiceUser]: !0,
      [C.overlap]: F,
      [C.selected]: u,
      [C.clickable]: null != O,
      [C.userSmall]: s === Z.ipw.SMALL,
      [C.userLarge]: s === Z.ipw.LARGE,
      [C.disabled]: !u && d,
      [C.ringing]: J
    }),
    onClick: e => {
      null == O || O(e, H)
    },
    onDoubleClick: e => {
      null == N || N(e, H)
    },
    onContextMenu: e => {
      null == x || x(e, H)
    },
    onMouseLeave: e => {
      null == w || w(e, H)
    },
    onMouseDown: e => {
      null == D || D(e, H)
    },
    onKeyDown: P,
    "aria-label": null !== (t = null != z ? z : V) && void 0 !== t ? t : H.username,
    focusProps: {
      offset: {
        right: 4
      }
    },
    children: (0, r.jsxs)("div", {
      className: o()(C.content, {
        [C.flipped]: G
      }),
      children: [W && !M ? (0, r.jsx)(a.ua7, {
        text: T.NW.string(T.t.BVK71t),
        children: e => (0, r.jsx)("div", A({
          className: o()(C.iconPriortySpeaker, {
            [C.iconPriortySpeakerSpeaking]: !L && !U && k
          })
        }, e))
      }) : null, (0, r.jsx)("div", {
        className: o()(n, C.avatar, {
          [C.avatarLarge]: s === Z.ipw.LARGE,
          [C.avatarSmall]: s === Z.ipw.SMALL,
          [C.avatarSpeaking]: k
        }),
        style: {
          backgroundImage: "url(".concat(H.getAvatarURL(R, s === Z.ipw.LARGE ? 38 : 24), ")")
        }
      }), function() {
        var e, t;
        let n = (0, r.jsxs)("div", {
            className: o()(i, {
              [C.username]: !0,
              [C.usernameSpeaking]: !L && !U && k
            }),
            children: [null != V ? V : I.ZP.getName(H), Y ? (0, r.jsxs)("span", {
              className: C.guestSuffix,
              children: ["\xa0", T.NW.string(T.t["pFO/Pj"])]
            }) : ""]
          }),
          l = {
            primaryGuild: H.primaryGuild,
            userId: H.id,
            contextGuildId: R,
            isOverlay: p,
            disableTooltip: !0,
            className: o()(C.clanTag, p && C.isOverlay),
            profileViewedAnalytics: {
              source: p ? Z.jXE.OVERLAY : Z.Sbl.VOICE_PANEL
            }
          };
        return !M || p ? (0, r.jsx)(y.Z, (e = A({}, l), t = t = {
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
      }(), (0, r.jsx)(_, A({
        disabled: d
      }, b)), $ && (M ? null : (0, r.jsx)(a.DY3, {
        text: T.NW.string(T.t["+1H47u"]),
        className: o()(C.optionsButtonContainer, {
          [C.optionsContainerActive]: ee
        }),
        children: (0, r.jsx)(a.P3F, {
          className: o()(C.optionsButton, {
            [C.optionsActive]: ee
          }),
          onClick: function(e) {
            null != R && null != q && ((0, m.v)(K, m.d.MORE), et(!0), (0, v.D)(e, H, q, {
              context: Q
            }, (e, t) => {
              (0, g.o)({
                menuName: e,
                menuItemProps: t,
                entrypoint: E.A5.THREE_DOT,
                location: K,
                targetUserId: H.id
              })
            }))
          },
          children: (0, r.jsx)(a.xhG, {
            size: "md",
            className: C.icon
          })
        })
      }))]
    })
  })
};

function k(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: i,
    channelId: c,
    userId: u
  } = e, [d, f] = l.useState(!1), m = (0, s.O)(e => f(e));
  return l.useEffect(() => {
    d && p.ZP.trackWithMetadata(Z.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: c,
      guild_id: i,
      user_id: u
    })
  }, [t.id, c, i, u, d]), (0, r.jsx)(a.DY3, {
    text: T.NW.formatToPlainString(T.t.Sq9xJy, {
      game: t.name
    }),
    "aria-label": T.NW.formatToPlainString(T.t.Sq9xJy, {
      game: t.name
    }),
    className: C.iconSpacing,
    children: (0, r.jsx)("div", {
      ref: m,
      children: (0, r.jsx)(O.Z, {
        className: o()(C.icon, n),
        game: t,
        size: O.Z.Sizes.XSMALL,
        onMouseEnter: () => {
          p.ZP.trackWithMetadata(Z.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: c,
            guild_id: i,
            game_name: t.name,
            user_id: u
          })
        }
      })
    })
  })
}

function M(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: l,
    serverMute: i,
    deaf: s,
    serverDeaf: c
  } = e, u = [];
  if (n) {
    let e;
    e = i ? a.v0G : l ? a.v0G : a.nRN;
    let n = (0, r.jsx)(e, {
      className: o()(C.icon, t, {
        [C.iconServer]: i
      }),
      color: "currentColor"
    });
    u.push((0, r.jsx)(a.DY3, {
      text: l ? T.NW.string(T.t.Q8Uzoa) : i ? T.NW.string(T.t.uLddbW) : T.NW.string(T.t.tjtv3N),
      className: C.iconSpacing,
      children: n
    }, "mute"))
  }
  if (c || s) {
    let e = c ? a.Vm4 : a.wE8,
      n = (0, r.jsx)(e, {
        className: o()(C.icon, t, {
          [C.iconServer]: c
        }),
        color: "currentColor"
      });
    u.push((0, r.jsx)(a.DY3, {
      className: C.iconSpacing,
      text: c ? T.NW.string(T.t.btxSdH) : T.NW.string(T.t.NjmiOD),
      children: n
    }, "deaf"))
  }
  return 0 === u.length ? null : u
}