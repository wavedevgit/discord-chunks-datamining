/** Chunk was on web.js **/
/** chunk id: 591853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  St: () => eO,
  WT: () => ev,
  jL: () => eC,
  wG: () => eA,
  yR: () => eb
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
  Chunk28664 = require("./28664.jsx"),
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

function e_(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ep(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      e_(e, t, n[t])
    })
  }
  return e
}

function eh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function em(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eh(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eg(e, t) {
  if (null == e) return {};
  var n, r, i = eE(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eE(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function eb(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: ef.popout,
    children: t
  })
}

function ey(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    className: i,
    style: a = {}
  } = e, {
    primaryColor: s,
    secondaryColor: l
  } = (0, ei.Z)(n);
  return null != n && (a.background = "linear-gradient(45deg, ".concat(s, ", ").concat(l, ")")), (0, r.jsx)(_.f6W, {
    theme: ec.BRd.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, r.jsx)("div", {
      className: o()(ef.hero, e, i),
      style: a,
      children: t
    })
  })
}

function eO(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: ef.interactionsContainer,
    children: t
  })
}

function ev(e) {
  let {
    channel: t,
    user: n,
    onReaction: a,
    entry: o,
    buttons: s = [],
    header: f,
    onVoiceChannelPreview: h
  } = e, [m, g] = i.useState(false), [E, b] = i.useState(null), y = (0, c.e7)([Z.Z], () => null != t && ec.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && Z.Z.can(ec.Plq.SEND_MESSAGES, t)), [v, I] = i.useState(false), [S, A] = i.useState(false), {
    voiceBar: C,
    joinVoiceButton: N
  } = eR({
    channel: t,
    entry: o,
    onVoiceChannelPreview: h
  }), {
    embeddedActivity: R
  } = (0, et.Z)(o), P = eN(R), w = null != N && 0 === s.length ? [N] : s, D = w.length > 0, x = w.length >= 2, [L, j] = i.useState(!D), k = q.ZP.getName(null == t ? true : t.guild_id, null == t ? true : t.id, n), M = null != t && m ? ed.intl.formatToPlainString(ed.t["8lzR/f"], {
    channel: "#".concat(t.name)
  }) : ed.intl.formatToPlainString(ed.t["4c+CAw"], {
    channel: "@".concat(k)
  }), U = m ? ed.intl.string(ed.t.Z2CUgo) : ed.intl.string(ed.t.XLGiTE), B = async e => {
    let r, {
      emoji: i
    } = e;
    if (null != i) {
      if (K.default.track(ec.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: el.Kd.GUILD_MEMBER_LIST,
          channel_id: null == t ? true : t.id,
          guild_id: null == t ? true : t.guild_id
        }), (0, T.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), I(true), A(false), m) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
      else {
        var o;
        let e = await p.Z.getOrEnsurePrivateChannel(n.id);
        r = null != (o = G.Z.getChannel(e)) ? o : null
      }
      return l()(null != r, "Send channel must be defined"), V({
        reply: ":".concat(i.name, ":"),
        sendToChannel: r,
        onComplete: (e, t) => {
          A(true), setTimeout(() => {
            I(false), a(e, t)
          }, 600)
        },
        interactionType: el.xP.REACTION_EMOJI_REACT_SENT,
        requiresChannelReadiness: false
      })
    }
  }, F = async e => {
    let r;
    if ((0, T.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), m) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
    else {
      let e = await p.Z.openPrivateChannel({
          recipientIds: n.id
        }),
        t = G.Z.getChannel(e);
      l()(null != t, "DM channel must be defined"), r = t
    }
    let i = r.type === ec.d4z.DM ? el.xP.DM_REACTION_MESSAGE_SENT : el.xP.CHANNEL_REACTION_MESSAGE_SENT;
    return V({
      reply: e,
      sendToChannel: r,
      interactionType: i,
      onComplete: a,
      requiresChannelReadiness: true
    })
  }, V = async e => {
    let {
      reply: t,
      sendToChannel: n,
      onComplete: r,
      interactionType: i,
      requiresChannelReadiness: a
    } = e;
    null == E || E.focus(), await (0, ee.p)({
      channel: n,
      content: t,
      entry: o,
      whenReady: a,
      doNotNotifyOnError: false,
      location: eu.dy.CONTENT_INVENTORY_MEMBERLIST
    }), null == r || r(i, n)
  }, H = null != f ? f : null != C ? C : null != P ? P : true, Y = () => {
    g(e => !e), L && (null == E || E.focus())
  }, W = e => {
    j(e), e && (null == E || E.focus())
  };
  return (0, r.jsxs)("div", {
    style: {
      pointerEvents: v ? "none" : "all"
    },
    children: [(0, r.jsx)(es.Z, {
      sent: S,
      shown: v,
      className: ef.toastContainer
    }), null != H ? H : (0, r.jsx)(ea.Z, {
      children: (0, r.jsxs)("div", {
        className: ef.emojiHotrailShareToChannel,
        children: [(0, r.jsx)(eI, {
          channel: t,
          onClickSuggestion: B
        }), (0, r.jsx)(O.dE, {
          onSelectEmoji: B
        })]
      })
    }), (0, r.jsxs)("div", {
      className: L ? ef.inputContainerShareToChannel : ef.hiddenButRenderedInputField,
      children: [(0, r.jsx)(O.A7, {
        placeholder: M,
        onEnter: F,
        setEditorRef: e => b(e),
        channel: m ? t : true,
        showEmojiButton: null != H,
        className: ef.replyInput,
        autoFocus: false,
        renderAttachButton: y ? () => (0, r.jsx)(_.ua7, {
          text: U,
          children: e => (0, r.jsx)(_.P3F, em(ep({}, e), {
            className: ef.shareToChannelButton,
            onClick: Y,
            children: m ? (0, r.jsx)(_.VL1, {
              size: "custom",
              width: 20,
              height: 20
            }) : (0, r.jsx)(_.lOy, {
              size: "custom",
              width: 20,
              height: 20
            })
          }))
        }) : true
      }), D && (0, r.jsx)(_.P3F, {
        onClick: () => W(false),
        className: ef.primaryActionPopoutMessageCloseIcon,
        children: (0, r.jsx)(_.Dio, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.Z.colors.ICON_PRIMARY
        })
      })]
    }), false === L && (0, r.jsxs)("div", {
      className: ef.primaryActionPopoutActionButtons,
      children: [!x && (0, r.jsx)(_.zxk, {
        fullWidth: true,
        variant: "secondary",
        onClick: () => W(true),
        size: x ? "sm" : "md",
        text: ed.intl.string(ed.t.OAJQlJ)
      }, "toggleMessageMode"), w]
    })]
  })
}
let eI = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, [a, o] = i.useState(false);
  i.useEffect(() => {
    o(true)
  }, []);
  let s = !!E.Z.keyboardModeEnabled && !a,
    l = (0, S.wC)(null == t ? true : t.guild_id).slice(0, 5).map(e => null == e.id ? {
      emoji: e,
      url: e.url
    } : {
      emoji: e,
      url: (0, z.gT)({
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
        children: (0, r.jsx)(f.u, {
          asContainer: true,
          text: ed.intl.formatToPlainString(ed.t.kilW3t, {
            emojiName: t.name
          }),
          position: "top",
          "aria-label": ed.intl.formatToPlainString(ed.t.kilW3t, {
            emojiName: t.name
          }),
          shouldShow: !s && true,
          children: (0, r.jsx)(k.u, {
            emoji: t,
            isDisabled: !a,
            onClick: () => n({
              emoji: t
            }),
            className: ef.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function eT(e) {
  let {
    channel: t,
    userDescription: n,
    entry: i,
    disableGameProfileLinks: a,
    onUserPopoutClosed: s
  } = e, l = null == t ? true : t.guild_id, {
    displayParticipants: u,
    participant1: d,
    participant2: f,
    numOtherParticipants: p
  } = (0, en.Z)(i, 3), h = (0, c.e7)([H.default], () => H.default.getUser(i.author_id)), {
    streamPreviewUrl: m
  } = (0, er.Z)(i), g = null != m, E = [d, f];
  return (0, r.jsxs)("div", {
    className: ef.popoutContentHeader,
    children: [(0, r.jsxs)("div", {
      className: ef.popoutUserContainer,
      children: [(0, r.jsx)(A.Z, {
        maxUsers: 3,
        users: u,
        size: _.EFr.SIZE_24,
        hideOverflowCount: true,
        disableUsernameTooltip: true,
        onUserPopoutRequestClose: s
      }), (0, r.jsx)(_.LZC, {
        size: 8,
        horizontal: true
      }), (0, r.jsx)(_.X6q, {
        variant: "heading-sm/normal",
        className: o()(ef.popoutUsernames, ef.popoutTextSecondary),
        children: ed.intl.format(n, {
          user0: q.ZP.getName(l, null == t ? true : t.id, E[0]),
          user1: q.ZP.getName(l, null == t ? true : t.id, E[1]),
          countOthers: p,
          countOthersHook: (e, t) => (0, r.jsx)(_.Text, {
            variant: "text-sm/medium",
            className: o()(ef.popoutUsername, ef.popoutTextPrimary),
            children: e
          }, t),
          name0Hook: (e, n) => (0, r.jsx)(J.Z, {
            textClassName: o()(ef.popoutUsername, ef.popoutTextPrimary),
            text: e,
            user: E[0],
            channel: t,
            onPopoutClosed: s,
            enableDisplayNameStyles: true
          }, n),
          name1Hook: (e, n) => (0, r.jsx)(J.Z, {
            textClassName: o()(ef.popoutUsername, ef.popoutTextPrimary),
            text: e,
            user: E[1],
            channel: t,
            onPopoutClosed: s,
            enableDisplayNameStyles: true
          }, n)
        })
      })]
    }), g && (0, r.jsx)(I.ZP, {
      size: I.ZP.Sizes.SMALL
    }), null != h && (0, r.jsx)(eo.Z, {
      user: h,
      channel: t,
      guildId: l,
      entry: i,
      disableGameProfileLinks: a
    })]
  })
}

function eS(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? t : (0, r.jsx)(_.P3F, {
    className: ef.maybeClickable,
    onClick: n,
    children: t
  })
}

function eA(e) {
  var t, {
      title: n,
      subtitle: i,
      badges: a,
      children: s,
      onClickThumbnail: l,
      onClickTitle: c,
      onClickSubtitle: u,
      headerIcons: d,
      disableGameProfileLinks: f = false,
      showCoverImage: p = true,
      onUserPopoutClosed: h,
      trackRankingItemInteraction: m
    } = e,
    g = eg(e, ["title", "subtitle", "badges", "children", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "headerIcons", "disableGameProfileLinks", "showCoverImage", "onUserPopoutClosed", "trackRankingItemInteraction"]);
  let {
    entry: E
  } = g, b = (0, Q.dX)(E), O = b ? null == (t = E.extra) ? true : t.application_id : true, v = (0, N.u)(O, y.Z.MEMBER_LIST), I = (0, P.Z)({
    location: "ContentPopout",
    applicationId: f ? true : O,
    source: R.m1.ActivityCard,
    trackEntryPointImpression: true,
    sourceUserId: E.author_id
  }, {
    onOpened: () => null == m ? true : m(el.xP.OPENED_GAME_PROFILE)
  }), {
    largeImage: T,
    smallImage: S
  } = (0, X.rv)({
    entry: E,
    showCoverImage: p
  }), A = b ? I : true;
  return (0, r.jsxs)("div", {
    className: ef.popoutContentWrapper,
    children: [(0, r.jsx)(eT, em(ep({
      disableGameProfileLinks: f
    }, g), {
      onUserPopoutClosed: h
    })), (0, r.jsxs)(ey, {
      backgroundImgSrc: null == T ? true : T.src,
      children: [(0, r.jsxs)("div", {
        className: ef.popoutHeroInner,
        children: [(0, r.jsx)("div", {
          className: ef.popoutThumbnailContainer,
          children: (0, r.jsx)($.E, {
            image: T,
            smallImage: S,
            aspectRatio: p ? "none" : true,
            onClick: null != l ? l : A,
            size: $.J.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: ef.popoutHeroBody,
          children: [(0, r.jsx)(eS, {
            onClick: null != c ? c : A,
            children: (0, r.jsx)(_.X6q, {
              variant: "heading-md/medium",
              className: o()(ef.popoutHeroTextPrimary, {
                [ef.popoutHeroTextPrimaryShort]: null != d
              }),
              lineClamp: 3,
              children: n
            })
          }), null != i ? (0, r.jsx)(eS, {
            onClick: null != u ? u : A,
            children: (0, r.jsx)(_.Text, {
              variant: "text-sm/normal",
              className: ef.popoutHeroTextSecondary,
              children: i
            })
          }) : null, (0, r.jsx)(_.LZC, {
            size: 8
          }), a]
        }), (0, r.jsx)("div", {
          className: ef.popoutHeaderIcons,
          children: d
        })]
      }), null != v ? (0, r.jsx)(_.zxk, {
        icon: v.icon,
        text: ed.intl.string(v.labelKey),
        variant: "secondary",
        onClick: v.openLink,
        fullWidth: true
      }) : null, s]
    })]
  })
}

function eC(e) {
  var t, {
      title: n,
      subtitle: a,
      badges: o,
      stream: s,
      onClickThumbnail: l,
      onClickTitle: u,
      onClickSubtitle: d,
      onUserPopoutClosed: f,
      trackRankingItemInteraction: p
    } = e,
    h = eg(e, ["title", "subtitle", "badges", "stream", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "onUserPopoutClosed", "trackRankingItemInteraction"]);
  let E = (0, c.e7)([G.Z], () => G.Z.getChannel(null == s ? true : s.channelId)),
    [b] = i.useMemo(() => (0, w.p9)(E, Y.Z, B.Z, Z.Z, C.Z), [E]),
    {
      entry: O
    } = h,
    v = (0, Q.dX)(O),
    I = v ? null == (t = O.extra) ? true : t.application_id : true,
    T = (0, N.u)(I, y.Z.MEMBER_LIST),
    S = (0, P.Z)({
      location: "ContentPopout",
      applicationId: I,
      source: R.m1.ActivityCard,
      trackEntryPointImpression: true,
      sourceUserId: O.author_id
    }, {
      onOpened: () => null == p ? true : p(el.xP.OPENED_GAME_PROFILE)
    }),
    A = v ? S : true,
    {
      activity: x,
      activityApplication: L,
      fallbackApplication: j
    } = (0, et.Z)(O),
    {
      largeImage: k,
      smallImage: M
    } = (0, X.YC)(x, null != L ? L : j),
    {
      largeImage: U
    } = (0, X.rv)({
      entry: O
    });
  return (0, r.jsxs)("div", {
    className: ef.popoutContentWrapper,
    children: [(0, r.jsx)(eT, em(ep({}, h), {
      onUserPopoutClosed: f
    })), (0, r.jsxs)(ey, {
      backgroundImgSrc: null == U ? true : U.src,
      className: ef.streamingPopoutHero,
      children: [(0, r.jsx)(eS, {
        onClick: b ? () => {
          m.default.selectVoiceChannel(s.channelId), (0, g.iV)(s)
        } : true,
        children: (0, r.jsxs)("div", {
          className: ef.streamingPopoutPreviewContainer,
          children: [(0, r.jsx)(D.Z, {
            className: ef.streamingPopoutImg,
            stream: s
          }), b && (0, r.jsx)("div", {
            className: ef.streamCTA,
            children: (0, r.jsx)(_.Text, {
              variant: "text-md/normal",
              color: "always-white",
              children: ed.intl.string(ed.t["7Xq/nZ"])
            })
          })]
        })
      }), (0, r.jsxs)("div", {
        className: ef.streamingPopoutHeader,
        children: [null != k && (0, r.jsx)("div", {
          className: ef.popoutThumbnailContainer,
          children: (0, r.jsx)($.E, {
            image: k,
            smallImage: M,
            onClick: null != l ? l : A,
            size: $.J.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: ef.streamingPopoutHeaderText,
          children: [(0, r.jsx)(eS, {
            onClick: null != u ? u : A,
            children: (0, r.jsx)(_.X6q, {
              variant: "heading-md/semibold",
              className: ef.popoutTextPrimary,
              lineClamp: 3,
              children: n
            })
          }), null != a ? (0, r.jsx)(eS, {
            onClick: null != d ? d : A,
            children: (0, r.jsx)(_.Text, {
              variant: "text-sm/normal",
              className: ef.popoutTextSecondary,
              children: a
            })
          }) : null, (0, r.jsx)(_.LZC, {
            size: 8
          }), o]
        })]
      }), null != T ? (0, r.jsx)(_.zxk, {
        icon: T.icon,
        text: ed.intl.string(T.labelKey),
        variant: "secondary",
        onClick: T.openLink,
        fullWidth: true
      }) : null]
    })]
  })
}

function eN(e) {
  let t = (0, c.e7)([B.Z], () => B.Z.getGuild((0, b.j)(null == e ? true : e.location))),
    n = (0, c.e7)([G.Z], () => G.Z.getChannel((0, b.p)(null == e ? true : e.location))),
    i = (0, c.Wu)([H.default], () => {
      var t, n;
      return null != (n = null == e || null == (t = e.participants) ? true : t.map(e => H.default.getUser(e.userId))) ? n : []
    });
  return null != e && null != t && null != n && U.sR.has(n.type) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: ef.voiceChannelPopoutReactorHeader,
      children: [(0, r.jsxs)(_.P3F, {
        "aria-label": ed.intl.string(ed.t["W/A4Qk"]),
        onClick: () => (0, j.Kh)(n.id),
        className: ef.voiceChannelPopoutReactorChannel,
        children: [(0, r.jsx)(x.Z, {
          guild: t,
          size: x.Z.Sizes.SMOL,
          className: ef.voiceChannelGuildIcon,
          active: true
        }), (0, r.jsx)(_.Fbu, {
          size: "xxs",
          color: d.Z.colors.INTERACTIVE_NORMAL
        }), (0, r.jsx)(_.VL1, {
          size: "xs",
          color: d.Z.colors.TEXT_DEFAULT
        }), (0, r.jsx)(_.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          className: ef.voiceChannelName,
          children: null == n ? true : n.name
        })]
      }), (0, r.jsx)(M.Z, {
        guildId: t.id,
        users: i,
        max: 3,
        renderUser: (e, n) => (0, r.jsx)(_.qEK, {
          src: e.getAvatarURL(t.id, 16),
          size: _.EFr.SIZE_16,
          "aria-label": "avatar",
          className: n
        }),
        renderMoreUsers: e => (0, r.jsx)("div", {
          className: ef.voiceChannelAdditionalParticipants,
          children: (0, r.jsx)(_.Text, {
            variant: "text-xxs/semibold",
            color: "text-default",
            children: e
          })
        })
      })]
    }), (0, r.jsx)(_.LZC, {
      size: 16
    })]
  }) : null
}

function eR(e) {
  let {
    channel: t,
    entry: n,
    onVoiceChannelPreview: a
  } = e, {
    streamPreviewUrl: o,
    channel: s
  } = (0, er.Z)(n), {
    needSubscriptionToAccess: l
  } = (0, L.Z)(null == t ? true : t.id), u = (0, c.e7)([B.Z], () => null != s ? B.Z.getGuild(s.guild_id) : true), f = (0, c.Wu)([W.ZP], () => null != s ? W.ZP.getVoiceStatesForChannel(s) : [], [s]), p = (0, c.e7)([Y.Z], () => Y.Z.isInChannel(null == s ? true : s.id)), m = i.useMemo(() => {
    for (let e of f) {
      let t = G.Z.getDMFromUserId(e.user.id),
        n = null != t && V.ZP.isChannelMuted(null, t),
        r = F.Z.isBlockedOrIgnored(e.user.id);
      if (n || r) returntrue
    }
    returnfalse
  }, [f]);
  if (null == s || null == u) return {
    voiceBar: true,
    joinVoiceButton: true
  };
  let g = null != o,
    E = () => {
      h.Z.updateChatOpen(s.id, true), (0, j.Kh)(s.id), null == a || a(s)
    },
    b = () => {
      v.Z.handleVoiceConnect({
        channel: s,
        connected: p,
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
        children: [i && (0, r.jsx)(_.aNP, {
          size: "custom",
          width: 13,
          height: 13,
          className: ef.popoutBlockedWarningIcon
        }), ed.intl.string(ed.t.d6DpXF)]
      }) : n;
      return (0, r.jsx)(_.ua7, {
        "aria-label": i ? ed.intl.string(ed.t.d6DpXF) : null != n && n,
        text: a,
        shouldShow: true,
        children: t
      }, "voice-preview")
    };
  return {
    voiceBar: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: ef.voiceChannelPopoutReactorHeader,
        children: [(0, r.jsx)(y, {
          text: ed.intl.string(ed.t.WIVYqK),
          hasRestrictedOrMutedVCParticipant: m,
          children: e => (0, r.jsxs)(_.P3F, em(ep({}, e), {
            "aria-label": ed.intl.string(ed.t.WIVYqK),
            onClick: E,
            className: ef.voiceChannelPopoutReactorChannel,
            children: [(0, r.jsx)(x.Z, {
              guild: u,
              size: x.Z.Sizes.SMOL,
              className: ef.voiceChannelGuildIcon,
              active: true
            }), (0, r.jsx)(_.Fbu, {
              size: "xxs",
              color: d.Z.colors.INTERACTIVE_NORMAL
            }), (0, r.jsx)(_.gj8, {
              size: "xs",
              color: d.Z.colors.TEXT_DEFAULT
            }), (0, r.jsx)(_.Text, {
              variant: "text-sm/medium",
              color: "text-default",
              className: ef.voiceChannelName,
              children: s.name
            })]
          }))
        }), (0, r.jsx)(M.Z, {
          guildId: u.id,
          users: f,
          max: 3,
          renderUser: (e, t) => (0, r.jsx)(_.qEK, {
            src: e.user.getAvatarURL(u.id, 16),
            size: _.EFr.SIZE_16,
            "aria-label": "avatar",
            className: t
          }),
          renderMoreUsers: e => (0, r.jsx)("div", {
            className: ef.voiceChannelAdditionalParticipants,
            children: (0, r.jsx)(_.Text, {
              variant: "text-xxs/semibold",
              color: "text-default",
              children: e
            })
          })
        })]
      }), (0, r.jsx)(_.LZC, {
        size: 16
      })]
    }),
    joinVoiceButton: p ? null : (0, r.jsx)(y, {
      hasRestrictedOrMutedVCParticipant: m,
      children: e => (0, r.jsx)(_.zxk, em(ep({}, e), {
        onClick: b,
        fullWidth: true,
        text: g ? ed.intl.string(ed.t["I6JG4+"]) : ed.intl.string(ed.t.VJlc0d),
        icon: g ? _.pzj : _.gj8,
        variant: "active",
        size: "md"
      }))
    })
  }
}