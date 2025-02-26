/** Chunk was on 79120 **/
n.d(t, {
  ZP: () => A,
  eJ: () => T,
  nm: () => C
}), n(653041), n(789020), n(47120);
var r = n(200651),
  l = n(192379),
  i = n(120356),
  o = n.n(i),
  a = n(481060),
  s = n(434650),
  c = n(40851),
  u = n(657305),
  d = n(367907),
  f = n(682901),
  p = n(795318),
  m = n(194082),
  g = n(282256),
  b = n(925329),
  y = n(880395),
  O = n(592125),
  h = n(574254),
  v = n(374129),
  j = n(639351),
  S = n(630388),
  P = n(51144),
  N = n(981631),
  x = n(354459),
  I = n(927923),
  E = n(388032),
  Z = n(79921);

function w(e) {
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
let T = e => {
  let {
    children: t,
    collapsed: n = !1,
    className: l
  } = e;
  return (0, r.jsx)("div", {
    className: o()(l, Z.list, n ? Z.listCollapse : Z.listDefault),
    role: "group",
    children: t
  })
};

function C(e) {
  let {
    className: t,
    mute: n,
    localMute: l,
    localVideoDisabled: i,
    serverMute: s,
    deaf: c,
    serverDeaf: d,
    collapsed: f,
    video: p,
    isStreaming: g,
    disabled: b,
    isWatching: y,
    iconClassName: O,
    embeddedApplication: h,
    otherClientSessionType: P,
    voicePlatform: w,
    application: T,
    guildId: C,
    channelId: A,
    user: k,
    disconnected: W
  } = e;
  if (f || b) return null;
  let M = [],
    L = (0, r.jsx)(_, {
      iconClassName: O,
      mute: n,
      localMute: l,
      serverMute: s,
      deaf: c,
      serverDeaf: d
    });
  p && (i ? M.push((0, r.jsx)(a.DY3, {
    className: Z.iconSpacing,
    text: E.NW.string(E.t["PXMZ//"]),
    children: (0, r.jsx)(a.Amn, {
      size: "md",
      color: "currentColor",
      className: o()(Z.icon, O),
      colorClass: Z.strikethrough
    })
  }, "video")) : M.push((0, r.jsx)(a.DY3, {
    className: Z.iconSpacing,
    text: E.NW.string(E.t.FlNoSU),
    children: (0, r.jsx)(a.Odl, {
      size: "md",
      color: "currentColor",
      className: o()(Z.icon, O)
    })
  }, "video"))), W && M.push((0, r.jsx)(a.DY3, {
    className: Z.iconSpacing,
    text: E.NW.string(E.t.HFwRpq),
    children: (0, r.jsx)(a.P4T, {
      className: o()(Z.icon, O),
      color: a.TVs.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected")), null != h && M.push((0, r.jsx)(a.DY3, {
    text: (0, u.Z)(h.name),
    className: Z.iconSpacing,
    children: (0, r.jsx)(a.nG3, {
      size: "md",
      color: "currentColor",
      className: o()(Z.icon, O)
    })
  }, "activity")), P === I.YE.XBOX || w === x.wR.XBOX ? M.push((0, r.jsx)("div", {
    className: o()(Z.iconSpacing),
    children: (0, r.jsx)(j.Z, {
      className: o()(Z.icon, O)
    })
  }, "xbox")) : (P === I.YE.PLAYSTATION || w === x.wR.PLAYSTATION) && M.push((0, r.jsx)("div", {
    className: o()(Z.iconSpacing),
    children: (0, r.jsx)(v.Z, {
      className: o()(Z.icon, O)
    })
  }, "playstation")), y && M.push((0, r.jsx)(a.DY3, {
    className: Z.iconSpacing,
    text: E.NW.string(E.t.JH1SJy),
    children: (0, r.jsx)(a.tEF, {
      size: "xs",
      color: "currentColor",
      className: o()(Z.icon, O)
    })
  }, "watch")), g && M.push((0, r.jsx)("div", {
    className: o()(Z.iconSpacing, Z.liveIconSpacing),
    children: (0, r.jsx)(m.ZP, {
      size: m.ZP.Sizes.SMALL
    })
  }, "stream"));
  let U = null != T && !(0, S.yE)(T.flags, N.udG.EMBEDDED);
  return 0 !== M.length || null != L || U ? (0, r.jsxs)("div", {
    className: o()(Z.icons, t),
    children: [(0, r.jsxs)("div", {
      className: Z.iconGroup,
      children: [L, M]
    }), U && (0, r.jsx)("div", {
      className: Z.iconGroup,
      children: (0, r.jsx)(D, {
        application: T,
        iconClassName: O,
        guildId: C,
        channelId: A,
        userId: k.id
      }, "".concat(k.id, "-game"))
    })]
  }) : null
}
let A = function(e) {
  var {
    avatarContainerClass: t = Z.avatarContainer,
    userNameClassName: n = Z.usernameFont,
    size: i = N.ipw.SMALL,
    selected: s = !1,
    disabled: u = !1,
    isOverlay: d = !1
  } = e, m = function(e, t) {
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
    onClick: b,
    onKeyDown: v,
    onDoubleClick: j,
    onContextMenu: S,
    onMouseEnter: I,
    onMouseLeave: T,
    onMouseDown: A,
    priority: D,
    speaking: _,
    collapsed: k,
    mute: W,
    serverMute: M,
    guildId: L,
    nick: U,
    isGuest: R,
    flipped: V,
    className: B,
    overlap: Y,
    "aria-label": G,
    tabIndex: F,
    ringing: z,
    user: H,
    channelId: J
  } = m, X = (0, c.bp)(), K = null != J ? O.Z.getChannel(J) : null, {
    enabled: Q
  } = (0, f.Z)({
    location: "VoiceUser"
  }), [q, $] = l.useState(!1), [ee, et] = l.useState(!1);
  return l.useEffect(() => {
    let e = !1,
      t = () => {
        e === h.Z.isOpen() || (e = h.Z.isOpen()) || et(!1)
      };
    return h.Z.addChangeListener(t), () => h.Z.removeChangeListener(t)
  }, []), (0, r.jsx)(a.P3F, {
    className: o()(B, {
      [Z.voiceUser]: !0,
      [Z.overlap]: Y,
      [Z.selected]: s,
      [Z.clickable]: null != b,
      [Z.userSmall]: i === N.ipw.SMALL,
      [Z.userLarge]: i === N.ipw.LARGE,
      [Z.disabled]: !s && u,
      [Z.ringing]: z
    }),
    onClick: e => {
      null == b || b(e, H)
    },
    onDoubleClick: e => {
      null == j || j(e, H)
    },
    onContextMenu: e => {
      null == S || S(e, H)
    },
    onMouseEnter: e => {
      $(!0), null == I || I(e, H)
    },
    onMouseLeave: e => {
      $(!1), null == T || T(e, H)
    },
    onMouseDown: e => {
      null == A || A(e, H)
    },
    onKeyDown: v,
    "aria-label": G,
    tabIndex: F,
    children: (0, r.jsxs)("div", {
      className: o()(Z.content, {
        [Z.flipped]: V
      }),
      children: [D && !k ? (0, r.jsx)(a.ua7, {
        text: E.NW.string(E.t.BVK71t),
        children: e => (0, r.jsx)("div", w({
          className: o()(Z.iconPriortySpeaker, {
            [Z.iconPriortySpeakerSpeaking]: !W && !M && _
          })
        }, e))
      }) : null, (0, r.jsx)("div", {
        className: o()(t, Z.avatar, {
          [Z.avatarLarge]: i === N.ipw.LARGE,
          [Z.avatarSmall]: i === N.ipw.SMALL,
          [Z.avatarSpeaking]: _
        }),
        style: {
          backgroundImage: "url(".concat(H.getAvatarURL(L, i === N.ipw.LARGE ? 38 : 24), ")")
        }
      }), function() {
        var e, t;
        let l = (0, r.jsxs)("div", {
            className: o()(n, {
              [Z.username]: !0,
              [Z.usernameSpeaking]: !W && !M && _
            }),
            children: [null != U ? U : P.ZP.getName(H), R ? (0, r.jsxs)("span", {
              className: Z.guestSuffix,
              children: ["\xa0", E.NW.string(E.t["pFO/Pj"])]
            }) : ""]
          }),
          i = {
            primaryGuild: H.primaryGuild,
            userId: H.id,
            contextGuildId: L,
            isOverlay: d,
            disableTooltip: !0,
            className: o()(Z.clanTag, d && Z.isOverlay),
            profileViewedAnalytics: {
              source: d ? N.jXE.OVERLAY : N.Sbl.VOICE_PANEL
            }
          };
        return !k || d ? (0, r.jsx)(g.Z, (e = w({}, i), t = t = {
          children: l
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
      }(), (0, r.jsx)(C, w({
        disabled: u
      }, m)), Q && ((q || ee) && !k ? (0, r.jsx)(a.DY3, {
        text: E.NW.string(E.t["+1H47u"]),
        children: (0, r.jsx)(a.P3F, {
          className: o()(Z.moreClickable, ee && Z.moreActive),
          onClick: function(e) {
            null != L && null != K && (et(!0), (0, y.D)(e, H, K, {
              context: X
            }, (e, t) => {
              (0, p.o)({
                menuName: e,
                menuItemProps: t,
                entrypoint: x.A5.THREE_DOT,
                location: "VoiceUser",
                targetUserId: H.id
              })
            }))
          },
          children: (0, r.jsx)(a.xhG, {
            size: "md",
            className: o()(Z.icon)
          })
        })
      }) : null)]
    })
  })
};

function D(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: i,
    channelId: c,
    userId: u
  } = e, [f, p] = l.useState(!1), m = (0, s.O)(e => p(e));
  return l.useEffect(() => {
    f && d.ZP.trackWithMetadata(N.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: c,
      guild_id: i,
      user_id: u
    })
  }, [t.id, c, i, u, f]), (0, r.jsx)(a.DY3, {
    text: E.NW.formatToPlainString(E.t.Sq9xJy, {
      game: t.name
    }),
    "aria-label": E.NW.formatToPlainString(E.t.Sq9xJy, {
      game: t.name
    }),
    className: Z.iconSpacing,
    children: (0, r.jsx)("div", {
      ref: m,
      children: (0, r.jsx)(b.Z, {
        className: o()(Z.icon, n),
        game: t,
        size: b.Z.Sizes.XSMALL,
        onMouseEnter: () => {
          d.ZP.trackWithMetadata(N.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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

function _(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: l,
    serverMute: i,
    deaf: s,
    serverDeaf: c
  } = e, u = (0, a.bWb)().enabled, d = [];
  if (n) {
    let e;
    if (u) {
      let n;
      n = i ? a.v0G : l ? a.v0G : a.nRN, e = (0, r.jsx)(n, {
        className: o()(Z.icon, t, {
          [Z.iconServer]: i
        }),
        color: "currentColor"
      })
    } else e = (0, r.jsx)(a.nRN, {
      size: "md",
      color: "currentColor",
      className: o()(Z.icon, t, {
        [Z.iconServer]: i
      }),
      colorClass: l ? Z.strikethrough : void 0
    });
    d.push((0, r.jsx)(a.DY3, {
      text: l ? E.NW.string(E.t.Q8Uzoa) : i ? E.NW.string(E.t.uLddbW) : E.NW.string(E.t.tjtv3N),
      className: Z.iconSpacing,
      children: e
    }, "mute"))
  }
  if (c || s) {
    let e;
    if (u) {
      let n = c ? a.Vm4 : a.wE8;
      e = (0, r.jsx)(n, {
        className: o()(Z.icon, t, {
          [Z.iconServer]: c
        }),
        color: "currentColor"
      })
    } else e = (0, r.jsx)(a.wE8, {
      size: "md",
      color: "currentColor",
      className: o()(Z.icon, t, {
        [Z.iconServer]: c
      })
    });
    d.push((0, r.jsx)(a.DY3, {
      className: Z.iconSpacing,
      text: c ? E.NW.string(E.t.btxSdH) : E.NW.string(E.t.NjmiOD),
      children: e
    }, "deaf"))
  }
  return 0 === d.length ? null : (0, r.jsx)(r.Fragment, {
    children: d
  })
}