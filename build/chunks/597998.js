/** Chunk was on 70045 **/
n.d(t, {
  ZP: () => C,
  eJ: () => T,
  nm: () => w
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
  f = n(795318),
  p = n(194082),
  m = n(282256),
  g = n(925329),
  y = n(880395),
  b = n(221241),
  O = n(592125),
  h = n(574254),
  v = n(374129),
  j = n(639351),
  S = n(630388),
  P = n(51144),
  N = n(981631),
  I = n(354459),
  E = n(927923),
  x = n(388032),
  A = n(79921);

function Z(e) {
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
    className: o()(l, A.list, n ? A.listCollapse : A.listDefault),
    role: "group",
    children: t
  })
};

function w(e) {
  let {
    className: t,
    mute: n,
    localMute: l,
    localVideoDisabled: i,
    serverMute: s,
    deaf: c,
    serverDeaf: d,
    collapsed: f,
    video: m,
    isStreaming: g,
    disabled: y,
    isWatching: b,
    iconClassName: O,
    embeddedApplication: h,
    otherClientSessionType: P,
    voicePlatform: Z,
    application: T,
    guildId: w,
    channelId: C,
    user: L,
    disconnected: k
  } = e;
  if (f || y) return null;
  let W = [],
    M = (0, r.jsx)(D, {
      iconClassName: O,
      mute: n,
      localMute: l,
      serverMute: s,
      deaf: c,
      serverDeaf: d
    });
  m && (i ? W.push((0, r.jsx)(a.DY3, {
    className: A.iconSpacing,
    text: x.NW.string(x.t["PXMZ//"]),
    children: (0, r.jsx)(a.Amn, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, O),
      colorClass: A.strikethrough
    })
  }, "video")) : W.push((0, r.jsx)(a.DY3, {
    className: A.iconSpacing,
    text: x.NW.string(x.t.FlNoSU),
    children: (0, r.jsx)(a.Odl, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, O)
    })
  }, "video"))), k && W.push((0, r.jsx)(a.DY3, {
    className: A.iconSpacing,
    text: x.NW.string(x.t.HFwRpq),
    children: (0, r.jsx)(a.P4T, {
      className: o()(A.icon, O),
      color: a.TVs.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected")), null != h && W.push((0, r.jsx)(a.DY3, {
    text: (0, u.Z)(h.name),
    className: A.iconSpacing,
    children: (0, r.jsx)(a.nG3, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, O)
    })
  }, "activity")), P === E.YE.XBOX || Z === I.wR.XBOX ? W.push((0, r.jsx)("div", {
    className: o()(A.iconSpacing),
    children: (0, r.jsx)(j.Z, {
      className: o()(A.icon, O)
    })
  }, "xbox")) : (P === E.YE.PLAYSTATION || Z === I.wR.PLAYSTATION) && W.push((0, r.jsx)("div", {
    className: o()(A.iconSpacing),
    children: (0, r.jsx)(v.Z, {
      className: o()(A.icon, O)
    })
  }, "playstation")), b && W.push((0, r.jsx)(a.DY3, {
    className: A.iconSpacing,
    text: x.NW.string(x.t.JH1SJy),
    children: (0, r.jsx)(a.tEF, {
      size: "xs",
      color: "currentColor",
      className: o()(A.icon, O)
    })
  }, "watch")), g && W.push((0, r.jsx)("div", {
    className: o()(A.iconSpacing, A.liveIconSpacing),
    children: (0, r.jsx)(p.ZP, {
      size: p.ZP.Sizes.SMALL
    })
  }, "stream"));
  let U = null != T && !(0, S.yE)(T.flags, N.udG.EMBEDDED);
  return 0 !== W.length || null != M || U ? (0, r.jsxs)("div", {
    className: o()(A.icons, t),
    children: [(0, r.jsxs)("div", {
      className: A.iconGroup,
      children: [M, W]
    }), U && (0, r.jsx)("div", {
      className: A.iconGroup,
      children: (0, r.jsx)(_, {
        application: T,
        iconClassName: O,
        guildId: w,
        channelId: C,
        userId: L.id
      }, "".concat(L.id, "-game"))
    })]
  }) : null
}
let C = function(e) {
  var {
    avatarContainerClass: t = A.avatarContainer,
    userNameClassName: n = A.usernameFont,
    size: i = N.ipw.SMALL,
    selected: s = !1,
    disabled: u = !1,
    isOverlay: d = !1
  } = e, p = function(e, t) {
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
    onClick: g,
    onKeyDown: v,
    onDoubleClick: j,
    onContextMenu: S,
    onMouseEnter: E,
    onMouseLeave: T,
    onMouseDown: C,
    priority: _,
    speaking: D,
    collapsed: L,
    mute: k,
    serverMute: W,
    guildId: M,
    nick: U,
    isGuest: R,
    flipped: G,
    className: F,
    overlap: V,
    "aria-label": Y,
    tabIndex: B,
    ringing: z,
    user: H,
    channelId: J
  } = p, Q = (0, c.bp)(), X = null != J ? O.Z.getChannel(J) : null, {
    simplifiedSettingsEnabled: K
  } = (0, b.Z)({
    location: "VoiceUser"
  }), [q, $] = l.useState(!1), [ee, et] = l.useState(!1);
  return l.useEffect(() => {
    let e = !1,
      t = () => {
        e === h.Z.isOpen() || (e = h.Z.isOpen()) || et(!1)
      };
    return h.Z.addChangeListener(t), () => h.Z.removeChangeListener(t)
  }, []), (0, r.jsx)(a.P3F, {
    className: o()(F, {
      [A.voiceUser]: !0,
      [A.overlap]: V,
      [A.selected]: s,
      [A.clickable]: null != g,
      [A.userSmall]: i === N.ipw.SMALL,
      [A.userLarge]: i === N.ipw.LARGE,
      [A.disabled]: !s && u,
      [A.ringing]: z
    }),
    onClick: e => {
      null == g || g(e, H)
    },
    onDoubleClick: e => {
      null == j || j(e, H)
    },
    onContextMenu: e => {
      null == S || S(e, H)
    },
    onMouseEnter: e => {
      $(!0), null == E || E(e, H)
    },
    onMouseLeave: e => {
      $(!1), null == T || T(e, H)
    },
    onMouseDown: e => {
      null == C || C(e, H)
    },
    onKeyDown: v,
    "aria-label": Y,
    tabIndex: B,
    children: (0, r.jsxs)("div", {
      className: o()(A.content, {
        [A.flipped]: G
      }),
      children: [_ && !L ? (0, r.jsx)(a.ua7, {
        text: x.NW.string(x.t.BVK71t),
        children: e => (0, r.jsx)("div", Z({
          className: o()(A.iconPriortySpeaker, {
            [A.iconPriortySpeakerSpeaking]: !k && !W && D
          })
        }, e))
      }) : null, (0, r.jsx)("div", {
        className: o()(t, A.avatar, {
          [A.avatarLarge]: i === N.ipw.LARGE,
          [A.avatarSmall]: i === N.ipw.SMALL,
          [A.avatarSpeaking]: D
        }),
        style: {
          backgroundImage: "url(".concat(H.getAvatarURL(M, i === N.ipw.LARGE ? 38 : 24), ")")
        }
      }), function() {
        var e, t;
        let l = (0, r.jsxs)("div", {
            className: o()(n, {
              [A.username]: !0,
              [A.usernameSpeaking]: !k && !W && D
            }),
            children: [null != U ? U : P.ZP.getName(H), R ? (0, r.jsxs)("span", {
              className: A.guestSuffix,
              children: ["\xa0", x.NW.string(x.t["pFO/Pj"])]
            }) : ""]
          }),
          i = {
            primaryGuild: H.primaryGuild,
            userId: H.id,
            contextGuildId: M,
            isOverlay: d,
            disableTooltip: !0,
            className: o()(A.clanTag, d && A.isOverlay),
            profileViewedAnalytics: {
              source: d ? N.jXE.OVERLAY : N.Sbl.VOICE_PANEL
            }
          };
        return !L || d ? (0, r.jsx)(m.Z, (e = Z({}, i), t = t = {
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
      }(), (0, r.jsx)(w, Z({
        disabled: u
      }, p)), K && ((q || ee) && !L ? (0, r.jsx)(a.DY3, {
        text: x.NW.string(x.t["+1H47u"]),
        children: (0, r.jsx)(a.P3F, {
          className: o()(A.moreClickable, ee && A.moreActive),
          onClick: function(e) {
            null != M && null != X && (et(!0), (0, y.D)(e, H, X, {
              context: Q
            }, (e, t) => {
              (0, f.o)({
                menuName: e,
                menuItemProps: t,
                entrypoint: I.A5.THREE_DOT,
                location: "VoiceUser",
                targetUserId: H.id
              })
            }))
          },
          children: (0, r.jsx)(a.xhG, {
            size: "md",
            className: o()(A.icon)
          })
        })
      }) : null)]
    })
  })
};

function _(e) {
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
    text: x.NW.formatToPlainString(x.t.Sq9xJy, {
      game: t.name
    }),
    "aria-label": x.NW.formatToPlainString(x.t.Sq9xJy, {
      game: t.name
    }),
    className: A.iconSpacing,
    children: (0, r.jsx)("div", {
      ref: m,
      children: (0, r.jsx)(g.Z, {
        className: o()(A.icon, n),
        game: t,
        size: g.Z.Sizes.XSMALL,
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

function D(e) {
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
        className: o()(A.icon, t, {
          [A.iconServer]: i
        }),
        color: "currentColor"
      })
    } else e = (0, r.jsx)(a.nRN, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, t, {
        [A.iconServer]: i
      }),
      colorClass: l ? A.strikethrough : void 0
    });
    d.push((0, r.jsx)(a.DY3, {
      text: l ? x.NW.string(x.t.Q8Uzoa) : i ? x.NW.string(x.t.uLddbW) : x.NW.string(x.t.tjtv3N),
      className: A.iconSpacing,
      children: e
    }, "mute"))
  }
  if (c || s) {
    let e;
    if (u) {
      let n = c ? a.Vm4 : a.wE8;
      e = (0, r.jsx)(n, {
        className: o()(A.icon, t, {
          [A.iconServer]: c
        }),
        color: "currentColor"
      })
    } else e = (0, r.jsx)(a.wE8, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, t, {
        [A.iconServer]: c
      })
    });
    d.push((0, r.jsx)(a.DY3, {
      className: A.iconSpacing,
      text: c ? x.NW.string(x.t.btxSdH) : x.NW.string(x.t.NjmiOD),
      children: e
    }, "deaf"))
  }
  return 0 === d.length ? null : (0, r.jsx)(r.Fragment, {
    children: d
  })
}