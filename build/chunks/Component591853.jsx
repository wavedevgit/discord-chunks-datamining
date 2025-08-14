/** Chunk was on web.js **/
/** chunk id: 591853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ll: () => eR,
  St: () => ev,
  WT: () => eI,
  jL: () => eC,
  wG: () => eN,
  yR: () => ey
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722);
require("./867309.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk755721 = require("./755721.js"),
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

function ep(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ep(e, t, n[t])
    })
  }
  return e
}

function em(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eg(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : em(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eE(e, t) {
  if (null == e) return {};
  var n, r, i = eb(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eb(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function ey(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: e_.popout,
    children: t
  })
}

function eO(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    className: i,
    style: o = {}
  } = e, {
    primaryColor: s,
    secondaryColor: l
  } = (0, eo.Z)(n);
  return null != n && (o.background = "linear-gradient(45deg, ".concat(s, ", ").concat(l, ")")), (0, r.jsx)(p.f6W, {
    theme: eu.BRd.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, r.jsx)("div", {
      className: a()(e_.hero, e, i),
      style: o,
      children: t
    })
  })
}

function ev(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: e_.interactionsContainer,
    children: t
  })
}

function eI(e) {
  let {
    channel: t,
    user: n,
    onReaction: o,
    entry: a,
    buttons: s = [],
    header: f,
    onVoiceChannelPreview: m
  } = e, [g, E] = i.useState(false), [b, y] = i.useState(null), O = (0, c.e7)([F.Z], () => null != t && eu.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && F.Z.can(eu.Plq.SEND_MESSAGES, t)), [I, T] = i.useState(false), [A, N] = i.useState(false), {
    voiceBar: C,
    joinVoiceButton: R
  } = ew({
    channel: t,
    entry: a,
    onVoiceChannelPreview: m
  }), {
    embeddedActivity: P
  } = (0, en.Z)(a), w = eP(P), D = null != R && 0 === s.length ? [R] : s, L = D.length > 0, x = D.length >= 2, [M, k] = i.useState(!L), j = X.ZP.getName(null == t ? true : t.guild_id, null == t ? true : t.id, n), U = null != t && g ? ef.intl.formatToPlainString(ef.t["8lzR/f"], {
    channel: "#".concat(t.name)
  }) : ef.intl.formatToPlainString(ef.t["4c+CAw"], {
    channel: "@".concat(j)
  }), G = g ? ef.intl.string(ef.t.Z2CUgo) : ef.intl.string(ef.t.XLGiTE), Z = async e => {
    let r, {
      emoji: i
    } = e;
    if (null != i) {
      if (z.default.track(eu.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: ec.Kd.GUILD_MEMBER_LIST,
          channel_id: null == t ? true : t.id,
          guild_id: null == t ? true : t.guild_id
        }), (0, S.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), T(true), N(false), g) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
      else {
        var a;
        let e = await h.Z.getOrEnsurePrivateChannel(n.id);
        r = null != (a = B.Z.getChannel(e)) ? a : null
      }
      return l()(null != r, "Send channel must be defined"), H({
        reply: ":".concat(i.name, ":"),
        sendToChannel: r,
        onComplete: (e, t) => {
          N(true), setTimeout(() => {
            T(false), o(e, t)
          }, 600)
        },
        interactionType: ec.xP.REACTION_EMOJI_REACT_SENT,
        requiresChannelReadiness: false
      })
    }
  }, V = async e => {
    let r;
    if ((0, S.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
    else {
      let e = await h.Z.openPrivateChannel({
          recipientIds: n.id
        }),
        t = B.Z.getChannel(e);
      l()(null != t, "DM channel must be defined"), r = t
    }
    let i = r.type === eu.d4z.DM ? ec.xP.DM_REACTION_MESSAGE_SENT : ec.xP.CHANNEL_REACTION_MESSAGE_SENT;
    return H({
      reply: e,
      sendToChannel: r,
      interactionType: i,
      onComplete: o,
      requiresChannelReadiness: true
    })
  }, H = async e => {
    let {
      reply: t,
      sendToChannel: n,
      onComplete: r,
      interactionType: i,
      requiresChannelReadiness: o
    } = e;
    null == b || b.focus(), await (0, et.p)({
      channel: n,
      content: t,
      entry: a,
      whenReady: o,
      doNotNotifyOnError: false,
      location: ed.dy.CONTENT_INVENTORY_MEMBERLIST
    }), null == r || r(i, n)
  }, Y = null != f ? f : null != C ? C : null != w ? w : true, W = () => {
    E(e => !e), M && (null == b || b.focus())
  }, K = e => {
    k(e), e && (null == b || b.focus())
  };
  return (0, r.jsxs)("div", {
    style: {
      pointerEvents: I ? "none" : "all"
    },
    children: [(0, r.jsx)(el.Z, {
      sent: A,
      shown: I,
      className: e_.toastContainer
    }), null != Y ? Y : (0, r.jsx)(ea.Z, {
      children: (0, r.jsxs)("div", {
        className: e_.emojiHotrailShareToChannel,
        children: [(0, r.jsx)(eT, {
          channel: t,
          onClickSuggestion: Z
        }), (0, r.jsx)(v.dE, {
          onSelectEmoji: Z
        })]
      })
    }), (0, r.jsxs)("div", {
      className: M ? e_.inputContainerShareToChannel : e_.hiddenButRenderedInputField,
      children: [(0, r.jsx)(v.A7, {
        placeholder: U,
        onEnter: V,
        setEditorRef: e => y(e),
        channel: g ? t : true,
        showEmojiButton: null != Y,
        className: e_.replyInput,
        autoFocus: false,
        renderAttachButton: O ? () => (0, r.jsx)(p.ua7, {
          text: G,
          children: e => (0, r.jsx)(p.P3F, eg(eh({}, e), {
            className: e_.shareToChannelButton,
            onClick: W,
            children: g ? (0, r.jsx)(p.VL1, {
              size: "custom",
              width: 20,
              height: 20
            }) : (0, r.jsx)(p.lOy, {
              size: "custom",
              width: 20,
              height: 20
            })
          }))
        }) : true
      }), L && (0, r.jsx)(p.P3F, {
        onClick: () => K(false),
        className: e_.primaryActionPopoutMessageCloseIcon,
        children: (0, r.jsx)(p.Dio, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.Z.colors.ICON_PRIMARY
        })
      })]
    }), false === M && (0, r.jsxs)("div", {
      className: e_.primaryActionPopoutActionButtons,
      children: [(0, r.jsx)(_.zx, {
        className: e_.secondaryButton,
        color: _.zx.Colors.PRIMARY,
        look: _.zx.Looks.FILLED,
        onClick: () => K(true),
        innerClassName: e_.iconButton,
        size: x ? _.zx.Sizes.MIN : _.zx.Sizes.MEDIUM,
        children: !x && (0, r.jsx)(p.Text, {
          variant: "text-md/semibold",
          children: ef.intl.string(ef.t.OAJQlJ)
        })
      }, "toggleMessageMode"), D]
    })]
  })
}
let eT = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, [o, a] = i.useState(false);
  i.useEffect(() => {
    a(true)
  }, []);
  let s = !!b.Z.keyboardModeEnabled && !o,
    l = (0, A.wC)(null == t ? true : t.guild_id).slice(0, 5).map(e => null == e.id ? {
      emoji: e,
      url: e.url
    } : {
      emoji: e,
      url: (0, q.gT)({
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
        children: (0, r.jsx)(p.DY3, {
          text: ef.intl.formatToPlainString(ef.t.kilW3t, {
            emojiName: t.name
          }),
          position: "top",
          "aria-label": ef.intl.formatToPlainString(ef.t.kilW3t, {
            emojiName: t.name
          }),
          color: p.ua7.Colors.PRIMARY,
          shouldShow: !s && true,
          children: (0, r.jsx)(j.u, {
            emoji: t,
            isDisabled: !o,
            onClick: () => n({
              emoji: t
            }),
            className: e_.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function eS(e) {
  let {
    channel: t,
    userDescription: n,
    entry: i,
    disableGameProfileLinks: o,
    onUserPopoutClosed: s
  } = e, l = null == t ? true : t.guild_id, {
    displayParticipants: u,
    participant1: d,
    participant2: f,
    numOtherParticipants: _
  } = (0, er.Z)(i, 3), h = (0, c.e7)([Y.default], () => Y.default.getUser(i.author_id)), {
    streamPreviewUrl: m
  } = (0, ei.Z)(i), g = null != m, E = [d, f];
  return (0, r.jsxs)("div", {
    className: e_.popoutContentHeader,
    children: [(0, r.jsxs)("div", {
      className: e_.popoutUserContainer,
      children: [(0, r.jsx)(N.Z, {
        maxUsers: 3,
        users: u,
        size: p.EFr.SIZE_24,
        hideOverflowCount: true,
        disableUsernameTooltip: true,
        onUserPopoutRequestClose: s
      }), (0, r.jsx)(p.LZC, {
        size: 8,
        horizontal: true
      }), (0, r.jsx)(p.X6q, {
        variant: "heading-sm/normal",
        className: a()(e_.popoutUsernames, e_.popoutTextSecondary),
        children: ef.intl.format(n, {
          user0: X.ZP.getName(l, null == t ? true : t.id, E[0]),
          user1: X.ZP.getName(l, null == t ? true : t.id, E[1]),
          countOthers: _,
          countOthersHook: (e, t) => (0, r.jsx)(p.Text, {
            variant: "text-sm/medium",
            className: a()(e_.popoutUsername, e_.popoutTextPrimary),
            children: e
          }, t),
          name0Hook: (e, n) => (0, r.jsx)($.Z, {
            textClassName: a()(e_.popoutUsername, e_.popoutTextPrimary),
            text: e,
            user: E[0],
            channel: t,
            onPopoutClosed: s
          }, n),
          name1Hook: (e, n) => (0, r.jsx)($.Z, {
            textClassName: a()(e_.popoutUsername, e_.popoutTextPrimary),
            text: e,
            user: E[1],
            channel: t,
            onPopoutClosed: s
          }, n)
        })
      })]
    }), g && (0, r.jsx)(T.ZP, {
      size: T.ZP.Sizes.SMALL
    }), null != h && (0, r.jsx)(es.Z, {
      user: h,
      channel: t,
      guildId: l,
      entry: i,
      disableGameProfileLinks: o
    })]
  })
}

function eA(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? t : (0, r.jsx)(p.P3F, {
    className: e_.maybeClickable,
    onClick: n,
    children: t
  })
}

function eN(e) {
  var t, {
      title: n,
      subtitle: i,
      badges: o,
      children: s,
      onClickThumbnail: l,
      onClickTitle: c,
      onClickSubtitle: u,
      headerIcons: d,
      disableGameProfileLinks: _ = false,
      showCoverImage: h = true,
      onUserPopoutClosed: m,
      trackRankingItemInteraction: g
    } = e,
    E = eE(e, ["title", "subtitle", "badges", "children", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "headerIcons", "disableGameProfileLinks", "showCoverImage", "onUserPopoutClosed", "trackRankingItemInteraction"]);
  let {
    entry: b
  } = E, y = (0, J.dX)(b), v = y ? null == (t = b.extra) ? true : t.application_id : true, I = (0, R.u)(v, O.Z.MEMBER_LIST), T = (0, w.Z)({
    location: "ContentPopout",
    applicationId: _ ? true : v,
    source: P.m1.ActivityCard,
    trackEntryPointImpression: true,
    sourceUserId: b.author_id
  }, {
    onOpened: () => null == g ? true : g(ec.xP.OPENED_GAME_PROFILE)
  }), {
    largeImage: S,
    smallImage: A
  } = (0, Q.rv)({
    entry: b,
    showCoverImage: h
  }), N = y ? T : true;
  return (0, r.jsxs)("div", {
    className: e_.popoutContentWrapper,
    children: [(0, r.jsx)(eS, eg(eh({
      disableGameProfileLinks: _
    }, E), {
      onUserPopoutClosed: m
    })), (0, r.jsxs)(eO, {
      backgroundImgSrc: null == S ? true : S.src,
      children: [(0, r.jsxs)("div", {
        className: e_.popoutHeroInner,
        children: [(0, r.jsx)("div", {
          className: e_.popoutThumbnailContainer,
          children: (0, r.jsx)(ee.E, {
            image: S,
            smallImage: A,
            aspectRatio: h ? "none" : true,
            onClick: null != l ? l : N,
            size: ee.J.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: e_.popoutHeroBody,
          children: [(0, r.jsx)(eA, {
            onClick: null != c ? c : N,
            children: (0, r.jsx)(p.X6q, {
              variant: "heading-md/medium",
              className: a()(e_.popoutHeroTextPrimary, {
                [e_.popoutHeroTextPrimaryShort]: null != d
              }),
              lineClamp: 3,
              children: n
            })
          }), null != i ? (0, r.jsx)(eA, {
            onClick: null != u ? u : N,
            children: (0, r.jsx)(p.Text, {
              variant: "text-sm/normal",
              className: e_.popoutHeroTextSecondary,
              children: i
            })
          }) : null, (0, r.jsx)(p.LZC, {
            size: 8
          }), o]
        }), (0, r.jsx)("div", {
          className: e_.popoutHeaderIcons,
          children: d
        })]
      }), null != I ? (0, r.jsx)(f.z, {
        icon: I.icon,
        text: ef.intl.string(I.labelKey),
        variant: "secondary",
        onClick: I.openLink,
        fullWidth: true
      }) : null, s]
    })]
  })
}

function eC(e) {
  var t, {
      title: n,
      subtitle: o,
      badges: a,
      stream: s,
      onClickThumbnail: l,
      onClickTitle: u,
      onClickSubtitle: d,
      onUserPopoutClosed: _,
      trackRankingItemInteraction: h
    } = e,
    m = eE(e, ["title", "subtitle", "badges", "stream", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "onUserPopoutClosed", "trackRankingItemInteraction"]);
  let b = (0, c.e7)([B.Z], () => B.Z.getChannel(null == s ? true : s.channelId)),
    [y] = i.useMemo(() => (0, D.p9)(b, W.Z, Z.Z, F.Z, C.Z), [b]),
    {
      entry: v
    } = m,
    I = (0, J.dX)(v),
    T = I ? null == (t = v.extra) ? true : t.application_id : true,
    S = (0, R.u)(T, O.Z.MEMBER_LIST),
    A = (0, w.Z)({
      location: "ContentPopout",
      applicationId: T,
      source: P.m1.ActivityCard,
      trackEntryPointImpression: true,
      sourceUserId: v.author_id
    }, {
      onOpened: () => null == h ? true : h(ec.xP.OPENED_GAME_PROFILE)
    }),
    N = I ? A : true,
    {
      activity: x,
      activityApplication: M,
      fallbackApplication: k
    } = (0, en.Z)(v),
    {
      largeImage: j,
      smallImage: U
    } = (0, Q.YC)(x, null != M ? M : k),
    {
      largeImage: G
    } = (0, Q.rv)({
      entry: v
    });
  return (0, r.jsxs)("div", {
    className: e_.popoutContentWrapper,
    children: [(0, r.jsx)(eS, eg(eh({}, m), {
      onUserPopoutClosed: _
    })), (0, r.jsxs)(eO, {
      backgroundImgSrc: null == G ? true : G.src,
      className: e_.streamingPopoutHero,
      children: [(0, r.jsx)(eA, {
        onClick: y ? () => {
          g.default.selectVoiceChannel(s.channelId), (0, E.iV)(s)
        } : true,
        children: (0, r.jsxs)("div", {
          className: e_.streamingPopoutPreviewContainer,
          children: [(0, r.jsx)(L.Z, {
            className: e_.streamingPopoutImg,
            stream: s
          }), y && (0, r.jsx)("div", {
            className: e_.streamCTA,
            children: (0, r.jsx)(p.Text, {
              variant: "text-md/normal",
              color: "always-white",
              children: ef.intl.string(ef.t["7Xq/nZ"])
            })
          })]
        })
      }), (0, r.jsxs)("div", {
        className: e_.streamingPopoutHeader,
        children: [null != j && (0, r.jsx)("div", {
          className: e_.popoutThumbnailContainer,
          children: (0, r.jsx)(ee.E, {
            image: j,
            smallImage: U,
            onClick: null != l ? l : N,
            size: ee.J.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: e_.streamingPopoutHeaderText,
          children: [(0, r.jsx)(eA, {
            onClick: null != u ? u : N,
            children: (0, r.jsx)(p.X6q, {
              variant: "heading-md/semibold",
              className: e_.popoutTextPrimary,
              lineClamp: 3,
              children: n
            })
          }), null != o ? (0, r.jsx)(eA, {
            onClick: null != d ? d : N,
            children: (0, r.jsx)(p.Text, {
              variant: "text-sm/normal",
              className: e_.popoutTextSecondary,
              children: o
            })
          }) : null, (0, r.jsx)(p.LZC, {
            size: 8
          }), a]
        })]
      }), null != S ? (0, r.jsx)(f.z, {
        icon: S.icon,
        text: ef.intl.string(S.labelKey),
        variant: "secondary",
        onClick: S.openLink,
        fullWidth: true
      }) : null]
    })]
  })
}

function eR(e) {
  var {
    IconComponent: t,
    children: n,
    className: i
  } = e, o = eE(e, ["IconComponent", "children", "className"]);
  return (0, r.jsxs)(_.zx, eg(eh({}, o), {
    className: a()(i, e_.primaryButton),
    innerClassName: null != t ? e_.iconButton : true,
    size: _.zx.Sizes.MEDIUM,
    children: [null != t ? (0, r.jsx)(t, {
      size: "xs",
      color: "currentColor"
    }) : null, (0, r.jsx)(p.Text, {
      variant: "text-md/semibold",
      color: "always-white",
      children: n
    })]
  }))
}

function eP(e) {
  let t = (0, c.e7)([Z.Z], () => Z.Z.getGuild((0, y.j)(null == e ? true : e.location))),
    n = (0, c.e7)([B.Z], () => B.Z.getChannel((0, y.p)(null == e ? true : e.location))),
    i = (0, c.Wu)([Y.default], () => {
      var t, n;
      return null != (n = null == e || null == (t = e.participants) ? true : t.map(e => Y.default.getUser(e.userId))) ? n : []
    });
  return null != e && null != t && null != n && G.sR.has(n.type) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: e_.voiceChannelPopoutReactorHeader,
      children: [(0, r.jsxs)(p.P3F, {
        "aria-label": ef.intl.string(ef.t["W/A4Qk"]),
        onClick: () => (0, k.Kh)(n.id),
        className: e_.voiceChannelPopoutReactorChannel,
        children: [(0, r.jsx)(x.Z, {
          guild: t,
          size: x.Z.Sizes.SMOL,
          className: e_.voiceChannelGuildIcon,
          active: true
        }), (0, r.jsx)(p.Fbu, {
          size: "xxs",
          color: d.Z.colors.INTERACTIVE_NORMAL
        }), (0, r.jsx)(p.VL1, {
          size: "xs",
          color: d.Z.colors.TEXT_DEFAULT
        }), (0, r.jsx)(p.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          className: e_.voiceChannelName,
          children: null == n ? true : n.name
        })]
      }), (0, r.jsx)(U.Z, {
        guildId: t.id,
        users: i,
        max: 3,
        renderUser: (e, n) => (0, r.jsx)(p.qEK, {
          src: e.getAvatarURL(t.id, 16),
          size: p.EFr.SIZE_16,
          "aria-label": "avatar",
          className: n
        }),
        renderMoreUsers: e => (0, r.jsx)("div", {
          className: e_.voiceChannelAdditionalParticipants,
          children: (0, r.jsx)(p.Text, {
            variant: "text-xxs/semibold",
            color: "text-default",
            children: e
          })
        })
      })]
    }), (0, r.jsx)(p.LZC, {
      size: 16
    })]
  }) : null
}

function ew(e) {
  let {
    channel: t,
    entry: n,
    onVoiceChannelPreview: o
  } = e, {
    streamPreviewUrl: a,
    channel: s
  } = (0, ei.Z)(n), {
    needSubscriptionToAccess: l
  } = (0, M.Z)(null == t ? true : t.id), u = (0, c.e7)([Z.Z], () => null != s ? Z.Z.getGuild(s.guild_id) : true), f = (0, c.Wu)([K.ZP], () => null != s ? K.ZP.getVoiceStatesForChannel(s) : [], [s]), h = (0, c.e7)([W.Z], () => W.Z.isInChannel(null == s ? true : s.id)), g = i.useMemo(() => {
    for (let e of f) {
      let t = B.Z.getDMFromUserId(e.user.id),
        n = null != t && H.ZP.isChannelMuted(null, t),
        r = V.Z.isBlockedOrIgnored(e.user.id);
      if (n || r) returntrue
    }
    returnfalse
  }, [f]);
  if (null == s || null == u) return {
    voiceBar: true,
    joinVoiceButton: true
  };
  let E = null != a,
    b = () => {
      m.Z.updateChatOpen(s.id, true), (0, k.Kh)(s.id), null == o || o(s)
    },
    y = () => {
      I.Z.handleVoiceConnect({
        channel: s,
        connected: h,
        needSubscriptionToAccess: l,
        routeDirectlyToChannel: true
      })
    },
    O = e => {
      let {
        children: t,
        text: n,
        hasRestrictedOrMutedVCParticipant: i
      } = e, o = i ? (0, r.jsxs)(r.Fragment, {
        children: [i && (0, r.jsx)(p.aNP, {
          size: "custom",
          width: 13,
          height: 13,
          className: e_.popoutBlockedWarningIcon
        }), ef.intl.string(ef.t.d6DpXF)]
      }) : n;
      return (0, r.jsx)(p.ua7, {
        "aria-label": i ? ef.intl.string(ef.t.d6DpXF) : null != n && n,
        text: o,
        shouldShow: true,
        children: t
      }, "voice-preview")
    };
  return {
    voiceBar: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: e_.voiceChannelPopoutReactorHeader,
        children: [(0, r.jsx)(O, {
          text: ef.intl.string(ef.t.WIVYqK),
          hasRestrictedOrMutedVCParticipant: g,
          children: e => (0, r.jsxs)(p.P3F, eg(eh({}, e), {
            "aria-label": ef.intl.string(ef.t.WIVYqK),
            onClick: b,
            className: e_.voiceChannelPopoutReactorChannel,
            children: [(0, r.jsx)(x.Z, {
              guild: u,
              size: x.Z.Sizes.SMOL,
              className: e_.voiceChannelGuildIcon,
              active: true
            }), (0, r.jsx)(p.Fbu, {
              size: "xxs",
              color: d.Z.colors.INTERACTIVE_NORMAL
            }), (0, r.jsx)(p.gj8, {
              size: "xs",
              color: d.Z.colors.TEXT_DEFAULT
            }), (0, r.jsx)(p.Text, {
              variant: "text-sm/medium",
              color: "text-default",
              className: e_.voiceChannelName,
              children: s.name
            })]
          }))
        }), (0, r.jsx)(U.Z, {
          guildId: u.id,
          users: f,
          max: 3,
          renderUser: (e, t) => (0, r.jsx)(p.qEK, {
            src: e.user.getAvatarURL(u.id, 16),
            size: p.EFr.SIZE_16,
            "aria-label": "avatar",
            className: t
          }),
          renderMoreUsers: e => (0, r.jsx)("div", {
            className: e_.voiceChannelAdditionalParticipants,
            children: (0, r.jsx)(p.Text, {
              variant: "text-xxs/semibold",
              color: "text-default",
              children: e
            })
          })
        })]
      }), (0, r.jsx)(p.LZC, {
        size: 16
      })]
    }),
    joinVoiceButton: h ? null : (0, r.jsx)(O, {
      hasRestrictedOrMutedVCParticipant: g,
      children: e => (0, r.jsx)(eR, eg(eh({}, e), {
        color: _.zx.Colors.GREEN,
        onClick: y,
        IconComponent: E ? p.pzj : p.gj8,
        children: E ? ef.intl.string(ef.t["I6JG4+"]) : ef.intl.string(ef.t.VJlc0d)
      }))
    })
  }
}