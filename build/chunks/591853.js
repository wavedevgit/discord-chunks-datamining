/** Chunk was on 14093 **/
n.d(t, {
  Ll: () => eC,
  St: () => ex,
  WT: () => ev,
  jL: () => eb,
  wG: () => eO,
  yR: () => eh
}), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  i = n.n(a),
  o = n(512722),
  s = n.n(o);
n(995295);
var c = n(442837),
  u = n(704215),
  d = n(692547),
  m = n(481060),
  p = n(493683),
  h = n(475179),
  f = n(287734),
  g = n(872810),
  x = n(607070),
  v = n(16609),
  y = n(220779),
  j = n(201133),
  P = n(557135),
  O = n(194082),
  b = n(605236),
  C = n(543241),
  N = n(318374),
  I = n(258609),
  w = n(810568),
  E = n(168524),
  Z = n(102172),
  S = n(871118),
  T = n(565138),
  A = n(66999),
  _ = n(790642),
  k = n(359110),
  R = n(12168),
  D = n(237583),
  M = n(131704),
  L = n(592125),
  W = n(430824),
  U = n(496675),
  z = n(699516),
  B = n(9156),
  H = n(594174),
  G = n(979651),
  F = n(938475),
  V = n(626135),
  Y = n(768581),
  q = n(5192),
  J = n(379357),
  X = n(26033),
  K = n(91907),
  $ = n(358696),
  Q = n(656709),
  ee = n(593294),
  et = n(192918),
  en = n(22211),
  er = n(206295),
  el = n(111386),
  ea = n(896449),
  ei = n(469153),
  eo = n(206583),
  es = n(981631),
  ec = n(388032),
  eu = n(361683);

function ed(e) {
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

function em(e, t) {
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

function ep(e, t) {
  if (null == e) return {};
  var n, r, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}

function eh(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, m.Tbt)(n), (0, r.jsx)("div", {
    className: eu.popout,
    ref: n,
    children: t
  })
}

function ef(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    className: l,
    style: a = {}
  } = e, {
    primaryColor: o,
    secondaryColor: s
  } = (0, er.Z)(n);
  return null != n && (a.background = "linear-gradient(45deg, ".concat(o, ", ").concat(s, ")")), (0, r.jsx)(m.f6W, {
    theme: es.BRd.DARK,
    disableAdaptiveTheme: !0,
    children: e => (0, r.jsx)("div", {
      className: i()(eu.hero, e, l),
      style: a,
      children: t
    })
  })
}
let eg = l.createContext(null);

function ex(e) {
  let {
    children: t
  } = e, n = l.useRef(null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: eu.interactionsContainerHeader,
      ref: e => n.current = e
    }), (0, r.jsx)("div", {
      className: eu.interactionsContainer,
      children: (0, r.jsx)(eg.Provider, {
        value: n.current,
        children: t
      })
    })]
  })
}

function ev(e) {
  let {
    channel: t,
    user: n,
    generateReactionImage: a,
    reactionImageAltText: i,
    onReaction: o,
    entry: f,
    buttons: g = [],
    header: x,
    onVoiceChannelPreview: O
  } = e, [C, N] = l.useState(!1), [I, w] = l.useState(null), E = (0, c.e7)([U.Z], () => null != t && es.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && U.Z.can(es.Plq.SEND_MESSAGES, t)), [Z, S] = l.useState(!1), [R, Y] = l.useState(!1), {
    voiceBar: J,
    joinVoiceButton: X
  } = function(e) {
    let {
      channel: t,
      entry: n,
      onVoiceChannelPreview: a
    } = e, {
      streamPreviewUrl: i,
      channel: o
    } = (0, en.Z)(n), {
      needSubscriptionToAccess: s
    } = (0, A.Z)(null == t ? void 0 : t.id), u = (0, c.e7)([W.Z], () => null != o ? W.Z.getGuild(o.guild_id) : void 0), p = (0, c.Wu)([F.ZP], () => null != o ? F.ZP.getVoiceStatesForChannel(o) : [], [o]), f = (0, c.e7)([G.Z], () => G.Z.isInChannel(null == o ? void 0 : o.id)), g = l.useMemo(() => {
      for (let e of p) {
        let t = L.Z.getDMFromUserId(e.user.id),
          n = null != t && B.ZP.isChannelMuted(null, t),
          r = z.Z.isBlockedOrIgnored(e.user.id);
        if (n || r) return !0
      }
      return !1
    }, [p]);
    if (null == o || null == u) return {
      voiceBar: void 0,
      joinVoiceButton: void 0
    };
    let x = null != i,
      v = () => {
        h.Z.updateChatOpen(o.id, !0), (0, k.Kh)(o.id), null == a || a(o)
      },
      y = () => {
        P.Z.handleVoiceConnect({
          channel: o,
          connected: f,
          needSubscriptionToAccess: s,
          routeDirectlyToChannel: !0
        })
      },
      j = e => {
        let {
          children: t,
          text: n,
          hasRestrictedOrMutedVCParticipant: l
        } = e, a = l ? (0, r.jsxs)(r.Fragment, {
          children: [l && (0, r.jsx)(m.aNP, {
            size: "custom",
            width: 13,
            height: 13,
            className: eu.popoutBlockedWarningIcon
          }), ec.NW.string(ec.t.d6DpXF)]
        }) : n;
        return (0, r.jsx)(m.ua7, {
          "aria-label": l ? ec.NW.string(ec.t.d6DpXF) : null != n && n,
          text: a,
          shouldShow: !0,
          children: t
        }, "voice-preview")
      };
    return {
      voiceBar: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: eu.voiceChannelPopoutReactorHeader,
          children: [(0, r.jsx)(j, {
            text: ec.NW.string(ec.t.WIVYqK),
            hasRestrictedOrMutedVCParticipant: g,
            children: e => (0, r.jsxs)(m.P3F, em(ed({}, e), {
              "aria-label": ec.NW.string(ec.t.WIVYqK),
              onClick: v,
              className: eu.voiceChannelPopoutReactorChannel,
              children: [(0, r.jsx)(T.Z, {
                guild: u,
                size: T.Z.Sizes.SMOL,
                className: eu.voiceChannelGuildIcon,
                active: !0
              }), (0, r.jsx)(m.Fbu, {
                size: "xxs",
                color: d.Z.colors.INTERACTIVE_NORMAL
              }), (0, r.jsx)(m.gj8, {
                size: "xs",
                color: d.Z.colors.TEXT_NORMAL
              }), (0, r.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: eu.voiceChannelName,
                children: o.name
              })]
            }))
          }), (0, r.jsx)(D.Z, {
            guildId: u.id,
            users: p,
            max: 3,
            renderUser: (e, t) => (0, r.jsx)(m.qEK, {
              src: e.user.getAvatarURL(u.id, 16),
              size: m.EFr.SIZE_16,
              "aria-label": "avatar",
              className: t
            }),
            renderMoreUsers: e => (0, r.jsx)("div", {
              className: eu.voiceChannelAdditionalParticipants,
              children: (0, r.jsx)(m.Text, {
                variant: "text-xxs/semibold",
                color: "text-normal",
                children: e
              })
            })
          })]
        }), (0, r.jsx)("div", {
          className: eu.primaryActionPopoutDivider
        })]
      }),
      joinVoiceButton: f ? null : (0, r.jsx)(j, {
        hasRestrictedOrMutedVCParticipant: g,
        children: e => (0, r.jsx)(eC, em(ed({}, e), {
          color: m.zxk.Colors.GREEN,
          onClick: y,
          IconComponent: x ? m.pzj : m.gj8,
          children: x ? ec.NW.string(ec.t["I6JG4+"]) : ec.NW.string(ec.t.VJlc0d)
        }))
      })
    }
  }({
    channel: t,
    entry: f,
    onVoiceChannelPreview: O
  }), {
    embeddedActivity: K
  } = (0, ee.Z)(f), $ = function(e) {
    let t = (0, c.e7)([W.Z], () => W.Z.getGuild((0, v.jS)(null == e ? void 0 : e.location))),
      n = (0, c.e7)([L.Z], () => L.Z.getChannel((0, v.pY)(null == e ? void 0 : e.location))),
      l = (0, c.Wu)([H.default], () => {
        var t, n;
        return null !== (n = null == e ? void 0 : null === (t = e.participants) || void 0 === t ? void 0 : t.map(e => H.default.getUser(e.userId))) && void 0 !== n ? n : []
      });
    return null != e && null != t && null != n && M.sR.has(n.type) ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: eu.voiceChannelPopoutReactorHeader,
        children: [(0, r.jsxs)(m.P3F, {
          "aria-label": ec.NW.string(ec.t["W/A4Qk"]),
          onClick: () => (0, k.Kh)(n.id),
          className: eu.voiceChannelPopoutReactorChannel,
          children: [(0, r.jsx)(T.Z, {
            guild: t,
            size: T.Z.Sizes.SMOL,
            className: eu.voiceChannelGuildIcon,
            active: !0
          }), (0, r.jsx)(m.Fbu, {
            size: "xxs",
            color: d.Z.colors.INTERACTIVE_NORMAL
          }), (0, r.jsx)(m.VL1, {
            size: "xs",
            color: d.Z.colors.TEXT_NORMAL
          }), (0, r.jsx)(m.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            className: eu.voiceChannelName,
            children: null == n ? void 0 : n.name
          })]
        }), (0, r.jsx)(D.Z, {
          guildId: t.id,
          users: l,
          max: 3,
          renderUser: (e, n) => (0, r.jsx)(m.qEK, {
            src: e.getAvatarURL(t.id, 16),
            size: m.EFr.SIZE_16,
            "aria-label": "avatar",
            className: n
          }),
          renderMoreUsers: e => (0, r.jsx)("div", {
            className: eu.voiceChannelAdditionalParticipants,
            children: (0, r.jsx)(m.Text, {
              variant: "text-xxs/semibold",
              color: "text-normal",
              children: e
            })
          })
        })]
      }), (0, r.jsx)("div", {
        className: eu.primaryActionPopoutDivider
      })]
    }) : null
  }(K), et = null != X && 0 === g.length ? [X] : g, er = et.length > 0, ea = et.length >= 2, [ep, eh] = l.useState(!er), ef = q.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n), eg = null != t && C ? ec.NW.formatToPlainString(ec.t["8lzR/f"], {
    channel: "#".concat(t.name)
  }) : ec.NW.formatToPlainString(ec.t["4c+CAw"], {
    channel: "@".concat(ef)
  }), ex = C ? ec.NW.string(ec.t.Z2CUgo) : ec.NW.string(ec.t.XLGiTE), ev = async e => {
    let r;
    if (null != e) {
      if (V.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: eo.Kd.GUILD_MEMBER_LIST,
          channel_id: null == t ? void 0 : t.id,
          guild_id: null == t ? void 0 : t.guild_id
        }), (0, b.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), S(!0), Y(!1), C) s()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
      else {
        var l;
        let e = await p.Z.getOrEnsurePrivateChannel(n.id);
        r = null !== (l = L.Z.getChannel(e)) && void 0 !== l ? l : null
      }
      return s()(null != r, "Send channel must be defined"), eP({
        reply: ":".concat(e.name, ":"),
        sendToChannel: r,
        onComplete: (e, t) => {
          Y(!0), setTimeout(() => {
            S(!1), o(e, t)
          }, 600)
        },
        interactionType: eo.xP.REACTION_EMOJI_REACT_SENT,
        requiresChannelReadiness: !1
      })
    }
  }, ej = async e => {
    let r;
    if ((0, b.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), C) s()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
    else {
      let e = await p.Z.openPrivateChannel(n.id, !1, !1),
        t = L.Z.getChannel(e);
      s()(null != t, "DM channel must be defined"), r = t
    }
    let l = r.type === es.d4z.DM ? eo.xP.DM_REACTION_MESSAGE_SENT : eo.xP.CHANNEL_REACTION_MESSAGE_SENT;
    return eP({
      reply: e,
      sendToChannel: r,
      interactionType: l,
      onComplete: o,
      requiresChannelReadiness: !0
    })
  }, eP = async e => {
    let {
      reply: t,
      sendToChannel: n,
      onComplete: r,
      interactionType: l,
      requiresChannelReadiness: o
    } = e;
    if (null == I || I.focus(), (0, _.Io)("ContentPopout Reactor")) await (0, Q.p)({
      channel: n,
      content: t,
      entry: f,
      whenReady: o
    });
    else {
      let e = await async function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        try {
          return await a(...t)
        } catch (e) {
          throw e
        }
      }(n.id);
      s()(null != e, "Reaction image must be defined"), await (0, j.B)({
        file: e,
        channel: n,
        altText: i,
        reply: t
      })
    }
    null == r || r(l, n)
  }, eO = null != x ? x : null != J ? J : null != $ ? $ : void 0;
  return l.useEffect(() => {
    ep && (null == I || I.focus())
  }, [I, C, ep]), (0, r.jsxs)("div", {
    style: {
      pointerEvents: Z ? "none" : "all"
    },
    children: [(0, r.jsx)(ei.Z, {
      sent: R,
      shown: Z,
      className: eu.toastContainer
    }), null != eO ? eO : (0, r.jsx)(el.Z, {
      children: (0, r.jsxs)("div", {
        className: eu.emojiHotrailShareToChannel,
        children: [(0, r.jsx)(ey, {
          channel: t,
          onClickSuggestion: ev
        }), (0, r.jsx)(y.dE, {
          onSelectEmoji: ev
        })]
      })
    }), (0, r.jsxs)("div", {
      className: ep ? eu.inputContainerShareToChannel : eu.hiddenButRenderedInputField,
      children: [(0, r.jsx)(y.A7, {
        placeholder: eg,
        onEnter: ej,
        setEditorRef: e => w(e),
        channel: C ? t : void 0,
        showEmojiButton: null != eO,
        renderAttachButton: E ? () => (0, r.jsx)(m.ua7, {
          text: ex,
          children: e => (0, r.jsx)(m.P3F, em(ed({}, e), {
            className: eu.shareToChannelButton,
            onClick: () => N(e => !e),
            children: C ? (0, r.jsx)(m.VL1, {
              size: "custom",
              width: 20,
              height: 20
            }) : (0, r.jsx)(m.lOy, {
              size: "custom",
              width: 20,
              height: 20
            })
          }))
        }) : void 0
      }), er && (0, r.jsx)(m.P3F, {
        onClick: () => eh(!1),
        className: eu.primaryActionPopoutMessageCloseIcon,
        children: (0, r.jsx)(m.Dio, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.Z.colors.ICON_PRIMARY
        })
      })]
    }), !1 === ep && (0, r.jsxs)("div", {
      className: eu.primaryActionPopoutActionButtons,
      children: [(0, r.jsxs)(m.zxk, {
        className: eu.secondaryButton,
        color: m.zxk.Colors.PRIMARY,
        look: m.zxk.Looks.FILLED,
        onClick: () => eh(!0),
        innerClassName: eu.iconButton,
        size: ea ? m.zxk.Sizes.MIN : m.zxk.Sizes.LARGE,
        children: [(0, r.jsx)(m.kBi, {
          size: "custom",
          width: 20,
          height: 20
        }), !ea && (0, r.jsx)(m.Text, {
          variant: "text-md/semibold",
          children: ec.NW.string(ec.t.OAJQlJ)
        })]
      }, "toggleMessageMode"), et]
    })]
  })
}
let ey = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, [a, i] = l.useState(!1);
  l.useEffect(() => {
    i(!0)
  }, []);
  let o = !!x.Z.keyboardModeEnabled && !a,
    s = (0, C.wC)(null == t ? void 0 : t.guild_id).slice(0, 5).map(e => null == e.id ? {
      emoji: e,
      url: e.url
    } : {
      emoji: e,
      url: (0, Y.gT)({
        id: e.id,
        animated: e.animated,
        size: 58
      })
    });
  return (0, r.jsx)(r.Fragment, {
    children: s.map(e => {
      let {
        emoji: t,
        url: l
      } = e;
      return null != l ? (0, r.jsx)("div", {
        children: (0, r.jsx)(m.DY3, {
          text: ec.NW.formatToPlainString(ec.t.kilW3t, {
            emojiName: t.name
          }),
          position: "top",
          "aria-label": ec.NW.formatToPlainString(ec.t.kilW3t, {
            emojiName: t.name
          }),
          color: m.ua7.Colors.PRIMARY,
          shouldShow: !o && void 0,
          children: (0, r.jsx)(R.u, {
            emoji: t,
            isDisabled: !a,
            onClick: () => n(t),
            className: eu.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function ej(e) {
  let {
    channel: t,
    userDescription: n,
    entry: l,
    disableGameProfileLinks: a,
    onUserPopoutClosed: o
  } = e, s = null == t ? void 0 : t.guild_id, {
    displayParticipants: u,
    participant1: d,
    participant2: p,
    numOtherParticipants: h
  } = (0, et.Z)(l, 3), f = (0, c.e7)([H.default], () => H.default.getUser(l.author_id)), {
    streamPreviewUrl: g
  } = (0, en.Z)(l), x = [d, p];
  return (0, r.jsxs)("div", {
    className: eu.popoutContentHeader,
    children: [(0, r.jsxs)("div", {
      className: eu.popoutUserContainer,
      children: [(0, r.jsx)(N.Z, {
        maxUsers: 3,
        users: u,
        size: m.EFr.SIZE_24,
        avatarClassName: eu.popoutStackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0,
        onUserPopoutRequestClose: o
      }), (0, r.jsx)(m.LZC, {
        size: 8,
        horizontal: !0
      }), (0, r.jsx)(m.X6q, {
        variant: "heading-sm/normal",
        className: eu.popoutTextSecondary,
        children: ec.NW.format(n, {
          user0: q.ZP.getName(s, null == t ? void 0 : t.id, x[0]),
          user1: q.ZP.getName(s, null == t ? void 0 : t.id, x[1]),
          countOthers: h,
          countOthersHook: (e, t) => (0, r.jsx)(m.Text, {
            variant: "text-sm/medium",
            className: i()(eu.popoutUsername, eu.popoutTextPrimary),
            children: e
          }, t),
          name0Hook: (e, n) => (0, r.jsx)(K.Z, {
            textClassName: i()(eu.popoutUsername, eu.popoutTextPrimary),
            text: e,
            user: x[0],
            channel: t,
            onPopoutClosed: o
          }, n),
          name1Hook: (e, n) => (0, r.jsx)(K.Z, {
            textClassName: i()(eu.popoutUsername, eu.popoutTextPrimary),
            text: e,
            user: x[1],
            channel: t,
            onPopoutClosed: o
          }, n)
        })
      })]
    }), null != g && (0, r.jsx)(O.ZP, {
      size: O.ZP.Sizes.SMALL
    }), null != f && (0, r.jsx)(ea.Z, {
      user: f,
      channel: t,
      guildId: s,
      entry: l,
      disableGameProfileLinks: a
    })]
  })
}

function eP(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? (0, r.jsx)(r.Fragment, {
    children: t
  }) : (0, r.jsx)(m.P3F, {
    className: eu.maybeClickable,
    onClick: n,
    children: t
  })
}

function eO(e) {
  var t, {
      title: n,
      subtitle: l,
      badges: a,
      children: o,
      onClickThumbnail: s,
      onClickTitle: c,
      onClickSubtitle: u,
      headerIcons: d,
      disableGameProfileLinks: p = !1,
      showCoverImage: h = !0,
      onUserPopoutClosed: f,
      trackRankingItemInteraction: g
    } = e,
    x = ep(e, ["title", "subtitle", "badges", "children", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "headerIcons", "disableGameProfileLinks", "showCoverImage", "onUserPopoutClosed", "trackRankingItemInteraction"]);
  let {
    entry: v
  } = x, y = (0, X.dX)(v), j = (0, E.Z)({
    location: "ContentPopout",
    applicationId: y && !p ? null === (t = v.extra) || void 0 === t ? void 0 : t.application_id : void 0,
    source: w.m1.ActivityCard,
    trackEntryPointImpression: !0,
    sourceUserId: v.author_id
  }, {
    onOpened: () => null == g ? void 0 : g(eo.xP.OPENED_GAME_PROFILE)
  }), {
    largeImage: P,
    smallImage: O
  } = (0, J.rv)({
    entry: v,
    showCoverImage: h
  }), b = y ? j : void 0;
  return (0, r.jsxs)("div", {
    className: eu.popoutContentWrapper,
    children: [(0, r.jsx)(ej, em(ed({
      disableGameProfileLinks: p
    }, x), {
      onUserPopoutClosed: f
    })), (0, r.jsxs)(ef, {
      backgroundImgSrc: null == P ? void 0 : P.src,
      children: [(0, r.jsxs)("div", {
        className: eu.popoutHeroInner,
        children: [(0, r.jsx)("div", {
          className: eu.popoutThumbnailContainer,
          children: (0, r.jsx)($.E, {
            image: P,
            smallImage: O,
            aspectRatio: h ? "none" : void 0,
            onClick: null != s ? s : b,
            size: $.J.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: eu.popoutHeroBody,
          children: [(0, r.jsx)(eP, {
            onClick: null != c ? c : b,
            children: (0, r.jsx)(m.X6q, {
              variant: "heading-md/medium",
              className: i()(eu.popoutHeroTextPrimary, {
                [eu.popoutHeroTextPrimaryShort]: null != d
              }),
              lineClamp: 3,
              children: n
            })
          }), null != l ? (0, r.jsx)(eP, {
            onClick: null != u ? u : b,
            children: (0, r.jsx)(m.Text, {
              variant: "text-sm/normal",
              className: eu.popoutHeroTextSecondary,
              children: l
            })
          }) : null, (0, r.jsx)(m.LZC, {
            size: 8
          }), a]
        }), (0, r.jsx)("div", {
          className: eu.popoutHeaderIcons,
          children: d
        })]
      }), o]
    })]
  })
}

function eb(e) {
  var t, {
      title: n,
      subtitle: a,
      badges: i,
      stream: o,
      onClickThumbnail: s,
      onClickTitle: u,
      onClickSubtitle: d,
      onUserPopoutClosed: p,
      trackRankingItemInteraction: h
    } = e,
    x = ep(e, ["title", "subtitle", "badges", "stream", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "onUserPopoutClosed", "trackRankingItemInteraction"]);
  let v = (0, c.e7)([L.Z], () => L.Z.getChannel(null == o ? void 0 : o.channelId)),
    [y] = l.useMemo(() => (0, Z.p9)(v, G.Z, W.Z, U.Z, I.Z), [v]),
    {
      entry: j
    } = x,
    P = (0, X.dX)(j),
    O = (0, E.Z)({
      location: "ContentPopout",
      applicationId: P ? null === (t = j.extra) || void 0 === t ? void 0 : t.application_id : void 0,
      source: w.m1.ActivityCard,
      trackEntryPointImpression: !0,
      sourceUserId: j.author_id
    }, {
      onOpened: () => null == h ? void 0 : h(eo.xP.OPENED_GAME_PROFILE)
    }),
    b = P ? O : void 0,
    {
      activity: C,
      activityApplication: N,
      fallbackApplication: T
    } = (0, ee.Z)(j),
    {
      largeImage: A,
      smallImage: _
    } = (0, J.YC)(C, null != N ? N : T),
    {
      largeImage: k
    } = (0, J.rv)({
      entry: j
    });
  return (0, r.jsxs)("div", {
    className: eu.popoutContentWrapper,
    children: [(0, r.jsx)(ej, em(ed({}, x), {
      onUserPopoutClosed: p
    })), (0, r.jsxs)(ef, {
      backgroundImgSrc: null == k ? void 0 : k.src,
      className: eu.streamingPopoutHero,
      children: [(0, r.jsx)(eP, {
        onClick: y ? () => {
          f.default.selectVoiceChannel(o.channelId), (0, g.iV)(o)
        } : void 0,
        children: (0, r.jsxs)("div", {
          className: eu.streamingPopoutPreviewContainer,
          children: [(0, r.jsx)(S.Z, {
            className: eu.streamingPopoutImg,
            stream: o
          }), y && (0, r.jsx)("div", {
            className: eu.streamCTA,
            children: (0, r.jsx)(m.Text, {
              variant: "text-md/normal",
              color: "always-white",
              children: ec.NW.string(ec.t["7Xq/nZ"])
            })
          })]
        })
      }), (0, r.jsxs)("div", {
        className: eu.streamingPopoutHeader,
        children: [null != A && (0, r.jsx)("div", {
          className: eu.popoutThumbnailContainer,
          children: (0, r.jsx)($.E, {
            image: A,
            smallImage: _,
            onClick: null != s ? s : b,
            size: $.J.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: eu.streamingPopoutHeaderText,
          children: [(0, r.jsx)(eP, {
            onClick: null != u ? u : b,
            children: (0, r.jsx)(m.X6q, {
              variant: "heading-md/semibold",
              className: eu.popoutTextPrimary,
              lineClamp: 3,
              children: n
            })
          }), null != a ? (0, r.jsx)(eP, {
            onClick: null != d ? d : b,
            children: (0, r.jsx)(m.Text, {
              variant: "text-sm/normal",
              className: eu.popoutTextSecondary,
              children: a
            })
          }) : null, (0, r.jsx)(m.LZC, {
            size: 8
          }), i]
        })]
      })]
    })]
  })
}

function eC(e) {
  var {
    IconComponent: t,
    children: n,
    className: l
  } = e, a = ep(e, ["IconComponent", "children", "className"]);
  return (0, r.jsxs)(m.zxk, em(ed({}, a), {
    className: i()(l, eu.primaryButton),
    innerClassName: null != t ? eu.iconButton : void 0,
    size: m.zxk.Sizes.LARGE,
    children: [null != t ? (0, r.jsx)(t, {
      size: "custom",
      width: 20,
      height: 20,
      color: d.Z.colors.WHITE
    }) : null, (0, r.jsx)(m.Text, {
      variant: "text-md/semibold",
      color: "always-white",
      children: n
    })]
  }))
}