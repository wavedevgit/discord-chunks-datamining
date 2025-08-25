/** Chunk was on web.js **/
/** chunk id: 591853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  St: () => ey,
  WT: () => eO,
  jL: () => eA,
  wG: () => eS,
  yR: () => eE
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722);
require("./603113.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk475179 = require("./475179.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk607070 = require("./607070.js"),
  Chunk16609 = require("./16609.js"),
  Chunk100527 = require("./100527.js"),
  Chunk220779 = require("./220779.jsx"),
  Chunk557135 = require("./557135.jsx"),
  Chunk194082 = require("./194082.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk543241 = require("./543241.js"),
  Chunk318374 = require("./318374.jsx"),
  Chunk258609 = require("./258609.js"),
  Chunk480086 = require("./480086.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk102172 = require("./102172.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk66999 = require("./66999.js"),
  Chunk359110 = require("./359110.js"),
  Chunk12168 = require("./12168.jsx"),
  Chunk237583 = require("./237583.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk5192 = require("./5192.js"),
  Chunk379357 = require("./379357.js"),
  Chunk26033 = require("./26033.js"),
  Chunk91907 = require("./91907.jsx"),
  Chunk358696 = require("./358696.jsx"),
  Chunk656709 = require("./656709.js"),
  Chunk593294 = require("./593294.js"),
  Chunk192918 = require("./192918.js"),
  Chunk22211 = require("./22211.js"),
  Chunk206295 = require("./206295.js"),
  Chunk111386 = require("./111386.jsx"),
  Chunk896449 = require("./896449.jsx"),
  Chunk469153 = require("./469153.jsx"),
  Chunk206583 = require("./206583.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk951948 = require("./951948.js");

function ef(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function e_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ef(e, t, n[t])
    })
  }
  return e
}

function ep(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eh(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ep(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function em(e, t) {
  if (null == e) return {};
  var n, r, i = eg(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eg(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function eE(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: ed.popout,
    children: t
  })
}

function eb(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    className: i,
    style: a = {}
  } = e, {
    primaryColor: s,
    secondaryColor: l
  } = (0, er.Z)(n);
  return null != n && (a.background = "linear-gradient(45deg, ".concat(s, ", ").concat(l, ")")), (0, r.jsx)(f.f6W, {
    theme: el.BRd.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, r.jsx)("div", {
      className: o()(ed.hero, e, i),
      style: a,
      children: t
    })
  })
}

function ey(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: ed.interactionsContainer,
    children: t
  })
}

function eO(e) {
  let {
    channel: t,
    user: n,
    onReaction: a,
    entry: o,
    buttons: s = [],
    header: p,
    onVoiceChannelPreview: h
  } = e, [m, g] = i.useState(false), [E, b] = i.useState(null), O = (0, c.e7)([B.Z], () => null != t && el.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && B.Z.can(el.Plq.SEND_MESSAGES, t)), [v, T] = i.useState(false), [S, A] = i.useState(false), {
    voiceBar: C,
    joinVoiceButton: N
  } = eN({
    channel: t,
    entry: o,
    onVoiceChannelPreview: h
  }), {
    embeddedActivity: R
  } = (0, ee.Z)(o), P = eC(R), w = null != N && 0 === s.length ? [N] : s, D = w.length > 0, x = w.length >= 2, [L, j] = i.useState(!D), k = z.ZP.getName(null == t ? true : t.guild_id, null == t ? true : t.id, n), M = null != t && m ? eu.intl.formatToPlainString(eu.t["8lzR/f"], {
    channel: "#".concat(t.name)
  }) : eu.intl.formatToPlainString(eu.t["4c+CAw"], {
    channel: "@".concat(k)
  }), G = m ? eu.intl.string(eu.t.Z2CUgo) : eu.intl.string(eu.t.XLGiTE), Z = async e => {
    let r, {
      emoji: i
    } = e;
    if (null != i) {
      if (W.default.track(el.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: es.Kd.GUILD_MEMBER_LIST,
          channel_id: null == t ? true : t.id,
          guild_id: null == t ? true : t.guild_id
        }), (0, I.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), T(true), A(false), m) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
      else {
        var o;
        let e = await _.Z.getOrEnsurePrivateChannel(n.id);
        r = null != (o = U.Z.getChannel(e)) ? o : null
      }
      return l()(null != r, "Send channel must be defined"), F({
        reply: ":".concat(i.name, ":"),
        sendToChannel: r,
        onComplete: (e, t) => {
          A(true), setTimeout(() => {
            T(false), a(e, t)
          }, 600)
        },
        interactionType: es.xP.REACTION_EMOJI_REACT_SENT,
        requiresChannelReadiness: false
      })
    }
  }, V = async e => {
    let r;
    if ((0, I.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), m) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
    else {
      let e = await _.Z.openPrivateChannel({
          recipientIds: n.id
        }),
        t = U.Z.getChannel(e);
      l()(null != t, "DM channel must be defined"), r = t
    }
    let i = r.type === el.d4z.DM ? es.xP.DM_REACTION_MESSAGE_SENT : es.xP.CHANNEL_REACTION_MESSAGE_SENT;
    return F({
      reply: e,
      sendToChannel: r,
      interactionType: i,
      onComplete: a,
      requiresChannelReadiness: true
    })
  }, F = async e => {
    let {
      reply: t,
      sendToChannel: n,
      onComplete: r,
      interactionType: i,
      requiresChannelReadiness: a
    } = e;
    null == E || E.focus(), await (0, $.p)({
      channel: n,
      content: t,
      entry: o,
      whenReady: a,
      doNotNotifyOnError: false,
      location: ec.dy.CONTENT_INVENTORY_MEMBERLIST
    }), null == r || r(i, n)
  }, H = null != p ? p : null != C ? C : null != P ? P : true, Y = () => {
    g(e => !e), L && (null == E || E.focus())
  }, K = e => {
    j(e), e && (null == E || E.focus())
  };
  return (0, r.jsxs)("div", {
    style: {
      pointerEvents: v ? "none" : "all"
    },
    children: [(0, r.jsx)(eo.Z, {
      sent: S,
      shown: v,
      className: ed.toastContainer
    }), null != H ? H : (0, r.jsx)(ei.Z, {
      children: (0, r.jsxs)("div", {
        className: ed.emojiHotrailShareToChannel,
        children: [(0, r.jsx)(ev, {
          channel: t,
          onClickSuggestion: Z
        }), (0, r.jsx)(y.dE, {
          onSelectEmoji: Z
        })]
      })
    }), (0, r.jsxs)("div", {
      className: L ? ed.inputContainerShareToChannel : ed.hiddenButRenderedInputField,
      children: [(0, r.jsx)(y.A7, {
        placeholder: M,
        onEnter: V,
        setEditorRef: e => b(e),
        channel: m ? t : true,
        showEmojiButton: null != H,
        className: ed.replyInput,
        autoFocus: false,
        renderAttachButton: O ? () => (0, r.jsx)(f.ua7, {
          text: G,
          children: e => (0, r.jsx)(f.P3F, eh(e_({}, e), {
            className: ed.shareToChannelButton,
            onClick: Y,
            children: m ? (0, r.jsx)(f.VL1, {
              size: "custom",
              width: 20,
              height: 20
            }) : (0, r.jsx)(f.lOy, {
              size: "custom",
              width: 20,
              height: 20
            })
          }))
        }) : true
      }), D && (0, r.jsx)(f.P3F, {
        onClick: () => K(false),
        className: ed.primaryActionPopoutMessageCloseIcon,
        children: (0, r.jsx)(f.Dio, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.Z.colors.ICON_PRIMARY
        })
      })]
    }), false === L && (0, r.jsxs)("div", {
      className: ed.primaryActionPopoutActionButtons,
      children: [!x && (0, r.jsx)(f.zxk, {
        fullWidth: true,
        variant: "secondary",
        onClick: () => K(true),
        size: x ? "sm" : "md",
        text: eu.intl.string(eu.t.OAJQlJ)
      }, "toggleMessageMode"), w]
    })]
  })
}
let ev = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, [a, o] = i.useState(false);
  i.useEffect(() => {
    o(true)
  }, []);
  let s = !!g.Z.keyboardModeEnabled && !a,
    l = (0, T.wC)(null == t ? true : t.guild_id).slice(0, 5).map(e => null == e.id ? {
      emoji: e,
      url: e.url
    } : {
      emoji: e,
      url: (0, K.gT)({
        id: e.id,
        animated: e.animated,
        size: 58
      })
    });
  return (0, r.jsx)(r.Fragment, {
    children: l.map(e => {
      let {
        emoji: t,
        url: i
      } = e;
      return null != i ? (0, r.jsx)("div", {
        children: (0, r.jsx)(f.DY3, {
          text: eu.intl.formatToPlainString(eu.t.kilW3t, {
            emojiName: t.name
          }),
          position: "top",
          "aria-label": eu.intl.formatToPlainString(eu.t.kilW3t, {
            emojiName: t.name
          }),
          color: f.ua7.Colors.PRIMARY,
          shouldShow: !s && true,
          children: (0, r.jsx)(j.u, {
            emoji: t,
            isDisabled: !a,
            onClick: () => n({
              emoji: t
            }),
            className: ed.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function eI(e) {
  let {
    channel: t,
    userDescription: n,
    entry: i,
    disableGameProfileLinks: a,
    onUserPopoutClosed: s
  } = e, l = null == t ? true : t.guild_id, {
    displayParticipants: u,
    participant1: d,
    participant2: _,
    numOtherParticipants: p
  } = (0, et.Z)(i, 3), h = (0, c.e7)([F.default], () => F.default.getUser(i.author_id)), {
    streamPreviewUrl: m
  } = (0, en.Z)(i), g = null != m, E = [d, _];
  return (0, r.jsxs)("div", {
    className: ed.popoutContentHeader,
    children: [(0, r.jsxs)("div", {
      className: ed.popoutUserContainer,
      children: [(0, r.jsx)(S.Z, {
        maxUsers: 3,
        users: u,
        size: f.EFr.SIZE_24,
        hideOverflowCount: true,
        disableUsernameTooltip: true,
        onUserPopoutRequestClose: s
      }), (0, r.jsx)(f.LZC, {
        size: 8,
        horizontal: true
      }), (0, r.jsx)(f.X6q, {
        variant: "heading-sm/normal",
        className: o()(ed.popoutUsernames, ed.popoutTextSecondary),
        children: eu.intl.format(n, {
          user0: z.ZP.getName(l, null == t ? true : t.id, E[0]),
          user1: z.ZP.getName(l, null == t ? true : t.id, E[1]),
          countOthers: p,
          countOthersHook: (e, t) => (0, r.jsx)(f.Text, {
            variant: "text-sm/medium",
            className: o()(ed.popoutUsername, ed.popoutTextPrimary),
            children: e
          }, t),
          name0Hook: (e, n) => (0, r.jsx)(Q.Z, {
            textClassName: o()(ed.popoutUsername, ed.popoutTextPrimary),
            text: e,
            user: E[0],
            channel: t,
            onPopoutClosed: s
          }, n),
          name1Hook: (e, n) => (0, r.jsx)(Q.Z, {
            textClassName: o()(ed.popoutUsername, ed.popoutTextPrimary),
            text: e,
            user: E[1],
            channel: t,
            onPopoutClosed: s
          }, n)
        })
      })]
    }), g && (0, r.jsx)(v.ZP, {
      size: v.ZP.Sizes.SMALL
    }), null != h && (0, r.jsx)(ea.Z, {
      user: h,
      channel: t,
      guildId: l,
      entry: i,
      disableGameProfileLinks: a
    })]
  })
}

function eT(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? t : (0, r.jsx)(f.P3F, {
    className: ed.maybeClickable,
    onClick: n,
    children: t
  })
}

function eS(e) {
  var t, {
      title: n,
      subtitle: i,
      badges: a,
      children: s,
      onClickThumbnail: l,
      onClickTitle: c,
      onClickSubtitle: u,
      headerIcons: d,
      disableGameProfileLinks: _ = false,
      showCoverImage: p = true,
      onUserPopoutClosed: h,
      trackRankingItemInteraction: m
    } = e,
    g = em(e, ["title", "subtitle", "badges", "children", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "headerIcons", "disableGameProfileLinks", "showCoverImage", "onUserPopoutClosed", "trackRankingItemInteraction"]);
  let {
    entry: E
  } = g, y = (0, X.dX)(E), O = y ? null == (t = E.extra) ? true : t.application_id : true, v = (0, C.u)(O, b.Z.MEMBER_LIST), I = (0, R.Z)({
    location: "ContentPopout",
    applicationId: _ ? true : O,
    source: N.m1.ActivityCard,
    trackEntryPointImpression: true,
    sourceUserId: E.author_id
  }, {
    onOpened: () => null == m ? true : m(es.xP.OPENED_GAME_PROFILE)
  }), {
    largeImage: T,
    smallImage: S
  } = (0, q.rv)({
    entry: E,
    showCoverImage: p
  }), A = y ? I : true;
  return (0, r.jsxs)("div", {
    className: ed.popoutContentWrapper,
    children: [(0, r.jsx)(eI, eh(e_({
      disableGameProfileLinks: _
    }, g), {
      onUserPopoutClosed: h
    })), (0, r.jsxs)(eb, {
      backgroundImgSrc: null == T ? true : T.src,
      children: [(0, r.jsxs)("div", {
        className: ed.popoutHeroInner,
        children: [(0, r.jsx)("div", {
          className: ed.popoutThumbnailContainer,
          children: (0, r.jsx)(J.E, {
            image: T,
            smallImage: S,
            aspectRatio: p ? "none" : true,
            onClick: null != l ? l : A,
            size: J.J.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: ed.popoutHeroBody,
          children: [(0, r.jsx)(eT, {
            onClick: null != c ? c : A,
            children: (0, r.jsx)(f.X6q, {
              variant: "heading-md/medium",
              className: o()(ed.popoutHeroTextPrimary, {
                [ed.popoutHeroTextPrimaryShort]: null != d
              }),
              lineClamp: 3,
              children: n
            })
          }), null != i ? (0, r.jsx)(eT, {
            onClick: null != u ? u : A,
            children: (0, r.jsx)(f.Text, {
              variant: "text-sm/normal",
              className: ed.popoutHeroTextSecondary,
              children: i
            })
          }) : null, (0, r.jsx)(f.LZC, {
            size: 8
          }), a]
        }), (0, r.jsx)("div", {
          className: ed.popoutHeaderIcons,
          children: d
        })]
      }), null != v ? (0, r.jsx)(f.zxk, {
        icon: v.icon,
        text: eu.intl.string(v.labelKey),
        variant: "secondary",
        onClick: v.openLink,
        fullWidth: true
      }) : null, s]
    })]
  })
}

function eA(e) {
  var t, {
      title: n,
      subtitle: a,
      badges: o,
      stream: s,
      onClickThumbnail: l,
      onClickTitle: u,
      onClickSubtitle: d,
      onUserPopoutClosed: _,
      trackRankingItemInteraction: p
    } = e,
    g = em(e, ["title", "subtitle", "badges", "stream", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "onUserPopoutClosed", "trackRankingItemInteraction"]);
  let E = (0, c.e7)([U.Z], () => U.Z.getChannel(null == s ? true : s.channelId)),
    [y] = i.useMemo(() => (0, P.p9)(E, H.Z, G.Z, B.Z, A.Z), [E]),
    {
      entry: O
    } = g,
    v = (0, X.dX)(O),
    I = v ? null == (t = O.extra) ? true : t.application_id : true,
    T = (0, C.u)(I, b.Z.MEMBER_LIST),
    S = (0, R.Z)({
      location: "ContentPopout",
      applicationId: I,
      source: N.m1.ActivityCard,
      trackEntryPointImpression: true,
      sourceUserId: O.author_id
    }, {
      onOpened: () => null == p ? true : p(es.xP.OPENED_GAME_PROFILE)
    }),
    D = v ? S : true,
    {
      activity: x,
      activityApplication: L,
      fallbackApplication: j
    } = (0, ee.Z)(O),
    {
      largeImage: k,
      smallImage: M
    } = (0, q.YC)(x, null != L ? L : j),
    {
      largeImage: Z
    } = (0, q.rv)({
      entry: O
    });
  return (0, r.jsxs)("div", {
    className: ed.popoutContentWrapper,
    children: [(0, r.jsx)(eI, eh(e_({}, g), {
      onUserPopoutClosed: _
    })), (0, r.jsxs)(eb, {
      backgroundImgSrc: null == Z ? true : Z.src,
      className: ed.streamingPopoutHero,
      children: [(0, r.jsx)(eT, {
        onClick: y ? () => {
          h.default.selectVoiceChannel(s.channelId), (0, m.iV)(s)
        } : true,
        children: (0, r.jsxs)("div", {
          className: ed.streamingPopoutPreviewContainer,
          children: [(0, r.jsx)(w.Z, {
            className: ed.streamingPopoutImg,
            stream: s
          }), y && (0, r.jsx)("div", {
            className: ed.streamCTA,
            children: (0, r.jsx)(f.Text, {
              variant: "text-md/normal",
              color: "always-white",
              children: eu.intl.string(eu.t["7Xq/nZ"])
            })
          })]
        })
      }), (0, r.jsxs)("div", {
        className: ed.streamingPopoutHeader,
        children: [null != k && (0, r.jsx)("div", {
          className: ed.popoutThumbnailContainer,
          children: (0, r.jsx)(J.E, {
            image: k,
            smallImage: M,
            onClick: null != l ? l : D,
            size: J.J.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: ed.streamingPopoutHeaderText,
          children: [(0, r.jsx)(eT, {
            onClick: null != u ? u : D,
            children: (0, r.jsx)(f.X6q, {
              variant: "heading-md/semibold",
              className: ed.popoutTextPrimary,
              lineClamp: 3,
              children: n
            })
          }), null != a ? (0, r.jsx)(eT, {
            onClick: null != d ? d : D,
            children: (0, r.jsx)(f.Text, {
              variant: "text-sm/normal",
              className: ed.popoutTextSecondary,
              children: a
            })
          }) : null, (0, r.jsx)(f.LZC, {
            size: 8
          }), o]
        })]
      }), null != T ? (0, r.jsx)(f.zxk, {
        icon: T.icon,
        text: eu.intl.string(T.labelKey),
        variant: "secondary",
        onClick: T.openLink,
        fullWidth: true
      }) : null]
    })]
  })
}

function eC(e) {
  let t = (0, c.e7)([G.Z], () => G.Z.getGuild((0, E.j)(null == e ? true : e.location))),
    n = (0, c.e7)([U.Z], () => U.Z.getChannel((0, E.p)(null == e ? true : e.location))),
    i = (0, c.Wu)([F.default], () => {
      var t, n;
      return null != (n = null == e || null == (t = e.participants) ? true : t.map(e => F.default.getUser(e.userId))) ? n : []
    });
  return null != e && null != t && null != n && M.sR.has(n.type) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: ed.voiceChannelPopoutReactorHeader,
      children: [(0, r.jsxs)(f.P3F, {
        "aria-label": eu.intl.string(eu.t["W/A4Qk"]),
        onClick: () => (0, L.Kh)(n.id),
        className: ed.voiceChannelPopoutReactorChannel,
        children: [(0, r.jsx)(D.Z, {
          guild: t,
          size: D.Z.Sizes.SMOL,
          className: ed.voiceChannelGuildIcon,
          active: true
        }), (0, r.jsx)(f.Fbu, {
          size: "xxs",
          color: d.Z.colors.INTERACTIVE_NORMAL
        }), (0, r.jsx)(f.VL1, {
          size: "xs",
          color: d.Z.colors.TEXT_DEFAULT
        }), (0, r.jsx)(f.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          className: ed.voiceChannelName,
          children: null == n ? true : n.name
        })]
      }), (0, r.jsx)(k.Z, {
        guildId: t.id,
        users: i,
        max: 3,
        renderUser: (e, n) => (0, r.jsx)(f.qEK, {
          src: e.getAvatarURL(t.id, 16),
          size: f.EFr.SIZE_16,
          "aria-label": "avatar",
          className: n
        }),
        renderMoreUsers: e => (0, r.jsx)("div", {
          className: ed.voiceChannelAdditionalParticipants,
          children: (0, r.jsx)(f.Text, {
            variant: "text-xxs/semibold",
            color: "text-default",
            children: e
          })
        })
      })]
    }), (0, r.jsx)(f.LZC, {
      size: 16
    })]
  }) : null
}

function eN(e) {
  let {
    channel: t,
    entry: n,
    onVoiceChannelPreview: a
  } = e, {
    streamPreviewUrl: o,
    channel: s
  } = (0, en.Z)(n), {
    needSubscriptionToAccess: l
  } = (0, x.Z)(null == t ? true : t.id), u = (0, c.e7)([G.Z], () => null != s ? G.Z.getGuild(s.guild_id) : true), _ = (0, c.Wu)([Y.ZP], () => null != s ? Y.ZP.getVoiceStatesForChannel(s) : [], [s]), h = (0, c.e7)([H.Z], () => H.Z.isInChannel(null == s ? true : s.id)), m = i.useMemo(() => {
    for (let e of _) {
      let t = U.Z.getDMFromUserId(e.user.id),
        n = null != t && V.ZP.isChannelMuted(null, t),
        r = Z.Z.isBlockedOrIgnored(e.user.id);
      if (n || r) returntrue
    }
    returnfalse
  }, [_]);
  if (null == s || null == u) return {
    voiceBar: true,
    joinVoiceButton: true
  };
  let g = null != o,
    E = () => {
      p.Z.updateChatOpen(s.id, true), (0, L.Kh)(s.id), null == a || a(s)
    },
    b = () => {
      O.Z.handleVoiceConnect({
        channel: s,
        connected: h,
        needSubscriptionToAccess: l,
        routeDirectlyToChannel: true
      })
    },
    y = e => {
      let {
        children: t,
        text: n,
        hasRestrictedOrMutedVCParticipant: i
      } = e, a = i ? (0, r.jsxs)(r.Fragment, {
        children: [i && (0, r.jsx)(f.aNP, {
          size: "custom",
          width: 13,
          height: 13,
          className: ed.popoutBlockedWarningIcon
        }), eu.intl.string(eu.t.d6DpXF)]
      }) : n;
      return (0, r.jsx)(f.ua7, {
        "aria-label": i ? eu.intl.string(eu.t.d6DpXF) : null != n && n,
        text: a,
        shouldShow: true,
        children: t
      }, "voice-preview")
    };
  return {
    voiceBar: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: ed.voiceChannelPopoutReactorHeader,
        children: [(0, r.jsx)(y, {
          text: eu.intl.string(eu.t.WIVYqK),
          hasRestrictedOrMutedVCParticipant: m,
          children: e => (0, r.jsxs)(f.P3F, eh(e_({}, e), {
            "aria-label": eu.intl.string(eu.t.WIVYqK),
            onClick: E,
            className: ed.voiceChannelPopoutReactorChannel,
            children: [(0, r.jsx)(D.Z, {
              guild: u,
              size: D.Z.Sizes.SMOL,
              className: ed.voiceChannelGuildIcon,
              active: true
            }), (0, r.jsx)(f.Fbu, {
              size: "xxs",
              color: d.Z.colors.INTERACTIVE_NORMAL
            }), (0, r.jsx)(f.gj8, {
              size: "xs",
              color: d.Z.colors.TEXT_DEFAULT
            }), (0, r.jsx)(f.Text, {
              variant: "text-sm/medium",
              color: "text-default",
              className: ed.voiceChannelName,
              children: s.name
            })]
          }))
        }), (0, r.jsx)(k.Z, {
          guildId: u.id,
          users: _,
          max: 3,
          renderUser: (e, t) => (0, r.jsx)(f.qEK, {
            src: e.user.getAvatarURL(u.id, 16),
            size: f.EFr.SIZE_16,
            "aria-label": "avatar",
            className: t
          }),
          renderMoreUsers: e => (0, r.jsx)("div", {
            className: ed.voiceChannelAdditionalParticipants,
            children: (0, r.jsx)(f.Text, {
              variant: "text-xxs/semibold",
              color: "text-default",
              children: e
            })
          })
        })]
      }), (0, r.jsx)(f.LZC, {
        size: 16
      })]
    }),
    joinVoiceButton: h ? null : (0, r.jsx)(y, {
      hasRestrictedOrMutedVCParticipant: m,
      children: e => (0, r.jsx)(f.zxk, eh(e_({}, e), {
        onClick: b,
        fullWidth: true,
        text: g ? eu.intl.string(eu.t["I6JG4+"]) : eu.intl.string(eu.t.VJlc0d),
        icon: g ? f.pzj : f.gj8,
        variant: "active",
        size: "md"
      }))
    })
  }
}