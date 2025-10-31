/** Chunk was on web.js **/
/** chunk id: 591853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  St: () => eb,
  WT: () => ey,
  jL: () => eS,
  wG: () => eT,
  yR: () => eg
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
  Chunk36563 = require("./36563.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk475179 = require("./475179.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk607070 = require("./607070.js"),
  Chunk16609 = require("./16609.js"),
  Chunk220779 = require("./220779.jsx"),
  Chunk557135 = require("./557135.jsx"),
  Chunk194082 = require("./194082.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk543241 = require("./543241.js"),
  Chunk258609 = require("./258609.js"),
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

function ed(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ed(e, t, n[t])
    })
  }
  return e
}

function e_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ep(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : e_(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eh(e, t) {
  if (null == e) return {};
  var n, r, i = em(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function em(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function eg(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: eu.popout,
    children: t
  })
}

function eE(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    className: i,
    style: a = {}
  } = e, {
    primaryColor: s,
    secondaryColor: l
  } = (0, en.Z)(n);
  return null != n && (a.background = "linear-gradient(45deg, ".concat(s, ", ").concat(l, ")")), (0, r.jsx)(p.f6W, {
    theme: es.BRd.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, r.jsx)("div", {
      className: o()(eu.hero, e, i),
      style: a,
      children: t
    })
  })
}

function eb(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: eu.interactionsContainer,
    children: t
  })
}

function ey(e) {
  let {
    channel: t,
    user: n,
    onReaction: a,
    entry: o,
    buttons: s = [],
    header: f,
    onVoiceChannelPreview: m
  } = e, [g, E] = i.useState(false), [b, y] = i.useState(null), v = i.useRef(null), I = (0, c.e7)([G.Z], () => null != t && es.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && G.Z.can(es.Plq.SEND_MESSAGES, t)), [S, A] = i.useState(false), [C, N] = i.useState(false), {
    voiceBar: R,
    joinVoiceButton: P
  } = eC({
    channel: t,
    entry: o,
    onVoiceChannelPreview: m
  }), {
    embeddedActivity: w
  } = (0, $.Z)(o), D = eA(w), x = null != P && 0 === s.length ? [P] : s, L = x.length > 0, M = x.length >= 2, [k, U] = i.useState(!L), B = K.ZP.getName(null == t ? true : t.guild_id, null == t ? true : t.id, n), Z = null != t && g ? ec.intl.formatToPlainString(ec.t["8lzR/R"], {
    channel: "#".concat(t.name)
  }) : ec.intl.formatToPlainString(ec.t["4c+CAx"], {
    channel: "@".concat(B)
  }), F = g ? ec.intl.string(ec.t.Z2CUgn) : ec.intl.string(ec.t.XLGiTG), V = async e => {
    let r, {
      emoji: i
    } = e;
    if (null != i) {
      if (Y.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: eo.Kd.GUILD_MEMBER_LIST,
          channel_id: null == t ? true : t.id,
          guild_id: null == t ? true : t.guild_id
        }), (0, T.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), A(true), N(false), g) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
      else {
        var o;
        let e = await h.Z.getOrEnsurePrivateChannel(n.id);
        r = null != (o = j.Z.getChannel(e)) ? o : null
      }
      return l()(null != r, "Send channel must be defined"), W({
        reply: ":".concat(i.name, ":"),
        sendToChannel: r,
        onComplete: (e, t) => {
          N(true), setTimeout(() => {
            A(false), a(e, t)
          }, 600)
        },
        interactionType: eo.xP.REACTION_EMOJI_REACT_SENT,
        requiresChannelReadiness: false
      })
    }
  }, H = async e => {
    let r;
    if ((0, T.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
    else {
      let e = await h.Z.openPrivateChannel({
          recipientIds: n.id
        }),
        t = j.Z.getChannel(e);
      l()(null != t, "DM channel must be defined"), r = t
    }
    let i = r.type === es.d4z.DM ? eo.xP.DM_REACTION_MESSAGE_SENT : eo.xP.CHANNEL_REACTION_MESSAGE_SENT;
    return W({
      reply: e,
      sendToChannel: r,
      interactionType: i,
      onComplete: a,
      requiresChannelReadiness: true
    })
  }, W = async e => {
    let {
      reply: t,
      sendToChannel: n,
      onComplete: r,
      interactionType: i,
      requiresChannelReadiness: a
    } = e;
    null == b || b.focus(), await (0, J.p)({
      channel: n,
      content: t,
      entry: o,
      whenReady: a,
      doNotNotifyOnError: false,
      location: el.dy.CONTENT_INVENTORY_MEMBERLIST
    }), null == r || r(i, n)
  }, z = null != f ? f : null != R ? R : null != D ? D : true, q = () => {
    E(e => !e), k && (null == b || b.focus())
  }, X = e => {
    U(e), e && (null == b || b.focus())
  };
  return (0, r.jsx)("div", {
    ref: v,
    style: {
      pointerEvents: S ? "none" : "all"
    },
    children: (0, r.jsx)(p.EqS, {
      containerRef: v,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(ea.Z, {
          sent: C,
          shown: S,
          className: eu.toastContainer
        }), null != z ? z : (0, r.jsx)(er.Z, {
          children: (0, r.jsxs)("div", {
            className: eu.emojiHotrailShareToChannel,
            children: [(0, r.jsx)(eO, {
              channel: t,
              onClickSuggestion: V
            }), (0, r.jsx)(O.dE, {
              onSelectEmoji: V
            })]
          })
        }), (0, r.jsxs)("div", {
          className: k ? eu.inputContainerShareToChannel : eu.hiddenButRenderedInputField,
          children: [(0, r.jsx)(O.A7, {
            placeholder: Z,
            onEnter: H,
            setEditorRef: e => y(e),
            channel: g ? t : true,
            showEmojiButton: null != z,
            className: eu.replyInput,
            autoFocus: false,
            renderAttachButton: I ? () => (0, r.jsx)(_.u, {
              text: F,
              children: (0, r.jsx)(p.P3F, {
                className: eu.shareToChannelButton,
                onClick: q,
                children: g ? (0, r.jsx)(p.VL1, {
                  size: "custom",
                  width: 20,
                  height: 20
                }) : (0, r.jsx)(p.lOy, {
                  size: "custom",
                  width: 20,
                  height: 20
                })
              })
            }) : true
          }), L && (0, r.jsx)(p.P3F, {
            onClick: () => X(false),
            className: eu.primaryActionPopoutMessageCloseIcon,
            children: (0, r.jsx)(p.Dio, {
              size: "custom",
              width: 20,
              height: 20,
              color: d.Z.colors.ICON_PRIMARY
            })
          })]
        }), false === k && (0, r.jsxs)("div", {
          className: eu.primaryActionPopoutActionButtons,
          children: [!M && (0, r.jsx)(p.Button, {
            fullWidth: true,
            variant: "secondary",
            onClick: () => X(true),
            size: M ? "sm" : "md",
            text: ec.intl.string(ec.t.OAJQlP)
          }, "toggleMessageMode"), x]
        })]
      })
    })
  })
}
let eO = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, [a, o] = i.useState(false);
  i.useEffect(() => {
    o(true)
  }, []);
  let s = !!b.Z.keyboardModeEnabled && !a,
    l = (0, S.wC)(null == t ? true : t.guild_id).slice(0, 5).map(e => null == e.id ? {
      emoji: e,
      url: e.url
    } : {
      emoji: e,
      url: (0, W.gT)({
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
        children: (0, r.jsx)(_.u, {
          asContainer: true,
          text: ec.intl.formatToPlainString(ec.t.kilW3l, {
            emojiName: t.name
          }),
          position: "top",
          "aria-label": ec.intl.formatToPlainString(ec.t.kilW3l, {
            emojiName: t.name
          }),
          shouldShow: !s && true,
          children: (0, r.jsx)(L.u, {
            emoji: t,
            isDisabled: !a,
            onClick: () => n({
              emoji: t
            }),
            className: eu.emoji
          })
        })
      }, t.name) : null
    })
  })
};

function ev(e) {
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
    numOtherParticipants: h
  } = (0, ee.Z)(i, 3), m = (0, c.e7)([F.default], () => F.default.getUser(i.author_id)), {
    streamPreviewUrl: g
  } = (0, et.Z)(i), E = null != g, b = [d, _];
  return (0, r.jsxs)("div", {
    className: eu.popoutContentHeader,
    children: [(0, r.jsxs)("div", {
      className: eu.popoutUserContainer,
      children: [(0, r.jsx)(f.Z, {
        maxUsers: 3,
        users: u,
        size: p.EFr.SIZE_24,
        hideOverflowCount: true,
        disableUsernameTooltip: true,
        onUserPopoutRequestClose: s
      }), (0, r.jsx)(p.LZC, {
        size: 8,
        horizontal: true
      }), (0, r.jsx)(p.Heading, {
        variant: "heading-sm/normal",
        className: o()(eu.popoutUsernames, eu.popoutTextSecondary),
        children: ec.intl.format(n, {
          user0: K.ZP.getName(l, null == t ? true : t.id, b[0]),
          user1: K.ZP.getName(l, null == t ? true : t.id, b[1]),
          countOthers: h,
          countOthersHook: (e, t) => (0, r.jsx)(p.Text, {
            variant: "text-sm/medium",
            className: o()(eu.popoutUsername, eu.popoutTextPrimary),
            children: e
          }, t),
          name0Hook: (e, n) => (0, r.jsx)(X.Z, {
            textClassName: o()(eu.popoutUsername, eu.popoutTextPrimary),
            text: e,
            user: b[0],
            channel: t,
            onPopoutClosed: s,
            enableDisplayNameStyles: true
          }, n),
          name1Hook: (e, n) => (0, r.jsx)(X.Z, {
            textClassName: o()(eu.popoutUsername, eu.popoutTextPrimary),
            text: e,
            user: b[1],
            channel: t,
            onPopoutClosed: s,
            enableDisplayNameStyles: true
          }, n)
        })
      })]
    }), E && (0, r.jsx)(I.ZP, {
      size: I.ZP.Sizes.SMALL
    }), null != m && (0, r.jsx)(ei.Z, {
      user: m,
      channel: t,
      guildId: l,
      entry: i,
      disableGameProfileLinks: a
    })]
  })
}

function eI(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? t : (0, r.jsx)(p.P3F, {
    className: eu.maybeClickable,
    onClick: n,
    children: t
  })
}

function eT(e) {
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
      showCoverImage: _ = true,
      onUserPopoutClosed: h,
      trackRankingItemInteraction: m
    } = e,
    g = eh(e, ["title", "subtitle", "badges", "children", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "headerIcons", "disableGameProfileLinks", "showCoverImage", "onUserPopoutClosed", "trackRankingItemInteraction"]);
  let {
    entry: E
  } = g, b = (0, q.dX)(E), y = b ? null == (t = E.extra) ? true : t.application_id : true, O = (0, N.Z)({
    location: "ContentPopout",
    applicationId: f ? true : y,
    source: C.m1.ActivityCard,
    trackEntryPointImpression: true,
    sourceUserId: E.author_id
  }, {
    onOpened: () => null == m ? true : m(eo.xP.OPENED_GAME_PROFILE)
  }), {
    largeImage: v,
    smallImage: I
  } = (0, z.rv)({
    entry: E,
    showCoverImage: _
  }), T = b ? O : true;
  return (0, r.jsxs)("div", {
    className: eu.popoutContentWrapper,
    children: [(0, r.jsx)(ev, ep(ef({
      disableGameProfileLinks: f
    }, g), {
      onUserPopoutClosed: h
    })), (0, r.jsxs)(eE, {
      backgroundImgSrc: null == v ? true : v.src,
      children: [(0, r.jsxs)("div", {
        className: eu.popoutHeroInner,
        children: [(0, r.jsx)("div", {
          className: eu.popoutThumbnailContainer,
          children: (0, r.jsx)(Q.E, {
            image: v,
            smallImage: I,
            aspectRatio: _ ? "none" : true,
            onClick: null != l ? l : T,
            size: Q.J.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: eu.popoutHeroBody,
          children: [(0, r.jsx)(eI, {
            onClick: null != c ? c : T,
            children: (0, r.jsx)(p.Heading, {
              variant: "heading-md/medium",
              className: o()(eu.popoutHeroTextPrimary, {
                [eu.popoutHeroTextPrimaryShort]: null != d
              }),
              lineClamp: 3,
              children: n
            })
          }), null != i ? (0, r.jsx)(eI, {
            onClick: null != u ? u : T,
            children: (0, r.jsx)(p.Text, {
              variant: "text-sm/normal",
              className: eu.popoutHeroTextSecondary,
              children: i
            })
          }) : null, (0, r.jsx)(p.LZC, {
            size: 8
          }), a]
        }), (0, r.jsx)("div", {
          className: eu.popoutHeaderIcons,
          children: d
        })]
      }), s]
    })]
  })
}

function eS(e) {
  var t, {
      title: n,
      subtitle: a,
      badges: o,
      stream: s,
      onClickThumbnail: l,
      onClickTitle: u,
      onClickSubtitle: d,
      onUserPopoutClosed: f,
      trackRankingItemInteraction: _
    } = e,
    h = eh(e, ["title", "subtitle", "badges", "stream", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "onUserPopoutClosed", "trackRankingItemInteraction"]);
  let m = (0, c.e7)([j.Z], () => j.Z.getChannel(null == s ? true : s.channelId)),
    [b] = i.useMemo(() => (0, R.p9)(m, V.Z, U.Z, G.Z, A.default), [m]),
    {
      entry: y
    } = h,
    O = (0, q.dX)(y),
    v = O ? null == (t = y.extra) ? true : t.application_id : true,
    I = (0, N.Z)({
      location: "ContentPopout",
      applicationId: v,
      source: C.m1.ActivityCard,
      trackEntryPointImpression: true,
      sourceUserId: y.author_id
    }, {
      onOpened: () => null == _ ? true : _(eo.xP.OPENED_GAME_PROFILE)
    }),
    T = O ? I : true,
    {
      activity: S,
      activityApplication: w,
      fallbackApplication: D
    } = (0, $.Z)(y),
    {
      largeImage: x,
      smallImage: L
    } = (0, z.YC)(S, null != w ? w : D),
    {
      largeImage: M
    } = (0, z.rv)({
      entry: y
    });
  return (0, r.jsxs)("div", {
    className: eu.popoutContentWrapper,
    children: [(0, r.jsx)(ev, ep(ef({}, h), {
      onUserPopoutClosed: f
    })), (0, r.jsxs)(eE, {
      backgroundImgSrc: null == M ? true : M.src,
      className: eu.streamingPopoutHero,
      children: [(0, r.jsx)(eI, {
        onClick: b ? () => {
          g.default.selectVoiceChannel(s.channelId), (0, E.iV)(s)
        } : true,
        children: (0, r.jsxs)("div", {
          className: eu.streamingPopoutPreviewContainer,
          children: [(0, r.jsx)(P.Z, {
            className: eu.streamingPopoutImg,
            stream: s
          }), b && (0, r.jsx)("div", {
            className: eu.streamCTA,
            children: (0, r.jsx)(p.Text, {
              variant: "text-md/normal",
              color: "always-white",
              children: ec.intl.string(ec.t["7Xq/nV"])
            })
          })]
        })
      }), (0, r.jsxs)("div", {
        className: eu.streamingPopoutHeader,
        children: [null != x && (0, r.jsx)("div", {
          className: eu.popoutThumbnailContainer,
          children: (0, r.jsx)(Q.E, {
            image: x,
            smallImage: L,
            onClick: null != l ? l : T,
            size: Q.J.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: eu.streamingPopoutHeaderText,
          children: [(0, r.jsx)(eI, {
            onClick: null != u ? u : T,
            children: (0, r.jsx)(p.Heading, {
              variant: "heading-md/semibold",
              className: eu.popoutTextPrimary,
              lineClamp: 3,
              children: n
            })
          }), null != a ? (0, r.jsx)(eI, {
            onClick: null != d ? d : T,
            children: (0, r.jsx)(p.Text, {
              variant: "text-sm/normal",
              className: eu.popoutTextSecondary,
              children: a
            })
          }) : null, (0, r.jsx)(p.LZC, {
            size: 8
          }), o]
        })]
      })]
    })]
  })
}

function eA(e) {
  let t = (0, c.e7)([U.Z], () => U.Z.getGuild((0, y.j)(null == e ? true : e.location))),
    n = (0, c.e7)([j.Z], () => j.Z.getChannel((0, y.p)(null == e ? true : e.location))),
    i = (0, c.Wu)([F.default], () => {
      var t, n;
      return null != (n = null == e || null == (t = e.participants) ? true : t.map(e => F.default.getUser(e.userId))) ? n : []
    });
  return null != e && null != t && null != n && k.sR.has(n.type) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: eu.voiceChannelPopoutReactorHeader,
      children: [(0, r.jsxs)(p.P3F, {
        "aria-label": ec.intl.string(ec.t["W/A4Qp"]),
        onClick: () => (0, x.Kh)(n.id),
        className: eu.voiceChannelPopoutReactorChannel,
        children: [(0, r.jsx)(w.Z, {
          guild: t,
          size: w.Z.Sizes.SMOL,
          className: eu.voiceChannelGuildIcon,
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
          className: eu.voiceChannelName,
          children: null == n ? true : n.name
        })]
      }), (0, r.jsx)(M.Z, {
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
          className: eu.voiceChannelAdditionalParticipants,
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

function eC(e) {
  let {
    channel: t,
    entry: n,
    onVoiceChannelPreview: a
  } = e, {
    streamPreviewUrl: o,
    channel: s
  } = (0, et.Z)(n), {
    needSubscriptionToAccess: l
  } = (0, D.Z)(null == t ? true : t.id), u = (0, c.e7)([U.Z], () => null != s ? U.Z.getGuild(s.guild_id) : true), f = (0, c.Wu)([H.ZP], () => null != s ? H.ZP.getVoiceStatesForChannel(s) : [], [s]), h = (0, c.e7)([V.Z], () => V.Z.isInChannel(null == s ? true : s.id)), g = i.useMemo(() => {
    for (let e of f) {
      let t = j.Z.getDMFromUserId(e.user.id),
        n = null != t && Z.ZP.isChannelMuted(null, t),
        r = B.Z.isBlockedOrIgnored(e.user.id);
      if (n || r) returntrue
    }
    returnfalse
  }, [f]);
  if (null == s || null == u) return {
    voiceBar: true,
    joinVoiceButton: true
  };
  let E = null != o,
    b = () => {
      m.Z.updateChatOpen(s.id, true), (0, x.Kh)(s.id), null == a || a(s)
    },
    y = () => {
      v.Z.handleVoiceConnect({
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
      } = e, a = i ? (0, r.jsxs)(r.Fragment, {
        children: [i && (0, r.jsx)(p.aNP, {
          size: "custom",
          width: 13,
          height: 13,
          className: eu.popoutBlockedWarningIcon
        }), ec.intl.string(ec.t.d6DpXI)]
      }) : n;
      return (0, r.jsx)(_.u, {
        "aria-label": i ? ec.intl.string(ec.t.d6DpXI) : null != n && n,
        __unsupportedReactNodeAsText: a,
        shouldShow: true,
        children: t
      }, "voice-preview")
    };
  return {
    voiceBar: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: eu.voiceChannelPopoutReactorHeader,
        children: [(0, r.jsx)(O, {
          text: ec.intl.string(ec.t.WIVYqJ),
          hasRestrictedOrMutedVCParticipant: g,
          children: (0, r.jsxs)(p.P3F, {
            "aria-label": ec.intl.string(ec.t.WIVYqJ),
            onClick: b,
            className: eu.voiceChannelPopoutReactorChannel,
            children: [(0, r.jsx)(w.Z, {
              guild: u,
              size: w.Z.Sizes.SMOL,
              className: eu.voiceChannelGuildIcon,
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
              className: eu.voiceChannelName,
              children: s.name
            })]
          })
        }), (0, r.jsx)(M.Z, {
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
            className: eu.voiceChannelAdditionalParticipants,
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
      children: (0, r.jsx)(p.Button, {
        onClick: y,
        fullWidth: true,
        text: E ? ec.intl.string(ec.t.I6JG46) : ec.intl.string(ec.t.VJlc0S),
        icon: E ? p.pzj : p.gj8,
        variant: "active",
        size: "md"
      })
    })
  }
}