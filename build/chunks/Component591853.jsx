/** Chunk was on web.js **/
/** chunk id: 591853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  St: () => eS,
  WT: () => eI,
  jL: () => eP,
  wG: () => eN,
  yR: () => eO
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722);
require("./24156.js");
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
  Chunk704538 = require("./704538.js"),
  Chunk644011 = require("./644011.jsx"),
  Chunk688192 = require("./688192.jsx"),
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
  Chunk582113 = require("./582113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk813849 = require("./813849.js");

function em(e, t, n) {
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
      em(e, t, n[t])
    })
  }
  return e
}

function eg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eE(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eg(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eb(e, t) {
  if (null == e) return {};
  var n, r, i = ey(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function ey(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function eO(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: e_.popout,
    children: t
  })
}

function ev(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    className: i,
    style: a = {}
  } = e, {
    primaryColor: s,
    secondaryColor: l
  } = (0, ea.Z)(n);
  return null != n && (a.background = "linear-gradient(45deg, ".concat(s, ", ").concat(l, ")")), (0, r.jsx)(_.f6W, {
    theme: eu.BRd.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, r.jsx)("div", {
      className: o()(e_.hero, e, i),
      style: a,
      children: t
    })
  })
}

function eS(e) {
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
    onReaction: a,
    entry: o,
    buttons: s = [],
    header: f,
    onVoiceChannelPreview: h
  } = e, [g, E] = i.useState(false), [b, y] = i.useState(null), v = i.useRef(null), S = (0, c.e7)([B.Z], () => null != t && eu.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) && B.Z.can(eu.Plq.SEND_MESSAGES, t)), [T, C] = i.useState(false), [A, N] = i.useState(false), {
    voiceBar: P,
    joinVoiceButton: R
  } = ew({
    channel: t,
    entry: o,
    onVoiceChannelPreview: h
  }), {
    embeddedActivity: w
  } = (0, en.Z)(o), D = eR(w), x = null != R && 0 === s.length ? [R] : s, L = x.length > 0, j = x.length >= 2, [M, k] = i.useState(!L), U = Q.ZP.getName(null == t ? true : t.guild_id, null == t ? true : t.id, n), G = null != t && g ? ep.intl.formatToPlainString(ep.t["8lzR/R"], {
    channel: "#".concat(t.name)
  }) : ep.intl.formatToPlainString(ep.t["4c+CAx"], {
    channel: "@".concat(U)
  }), F = g ? ep.intl.string(ep.t.Z2CUgn) : ep.intl.string(ep.t.XLGiTG), V = async e => {
    let r, {
      emoji: i
    } = e;
    if (null != i) {
      if (z.default.track(eu.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: ec.Kd.GUILD_MEMBER_LIST,
          channel_id: null == t ? true : t.id,
          guild_id: null == t ? true : t.guild_id
        }), (0, I.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), C(true), N(false), g) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
      else {
        var o;
        let e = await m.Z.getOrEnsurePrivateChannel(n.id);
        r = null != (o = Z.Z.getChannel(e)) ? o : null
      }
      return l()(null != r, "Send channel must be defined"), Y({
        reply: ":".concat(i.name, ":"),
        sendToChannel: r,
        onComplete: (e, t) => {
          N(true), setTimeout(() => {
            C(false), a(e, t)
          }, 600)
        },
        interactionType: ec.xP.REACTION_EMOJI_REACT_SENT,
        requiresChannelReadiness: false
      })
    }
  }, H = async e => {
    let r;
    if ((0, I.Q3)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
    else {
      let e = await m.Z.openPrivateChannel({
          recipientIds: n.id
        }),
        t = Z.Z.getChannel(e);
      l()(null != t, "DM channel must be defined"), r = t
    }
    let i = r.type === eu.d4z.DM ? ec.xP.DM_REACTION_MESSAGE_SENT : ec.xP.CHANNEL_REACTION_MESSAGE_SENT;
    return Y({
      reply: e,
      sendToChannel: r,
      interactionType: i,
      onComplete: a,
      requiresChannelReadiness: true
    })
  }, Y = async e => {
    let {
      reply: t,
      sendToChannel: n,
      onComplete: r,
      interactionType: i,
      requiresChannelReadiness: a
    } = e;
    null == b || b.focus(), await (0, et.p)({
      channel: n,
      content: t,
      entry: o,
      whenReady: a,
      doNotNotifyOnError: false,
      location: ed.dy.CONTENT_INVENTORY_MEMBERLIST
    }), null == r || r(i, n)
  }, W = null != f ? f : null != P ? P : null != D ? D : true, K = () => {
    E(e => !e), M && (null == b || b.focus())
  }, q = e => {
    k(e), e && (null == b || b.focus())
  };
  return (0, r.jsx)("div", {
    ref: v,
    style: {
      pointerEvents: T ? "none" : "all"
    },
    children: (0, r.jsx)(_.EqS, {
      containerRef: v,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(el.Z, {
          sent: A,
          shown: T,
          className: e_.toastContainer
        }), null != W ? W : (0, r.jsx)(eo.Z, {
          children: (0, r.jsxs)("div", {
            className: e_.emojiHotrailShareToChannel,
            children: [(0, r.jsx)(eT, {
              channel: t,
              onClickSuggestion: V
            }), (0, r.jsx)(O.dE, {
              onSelectEmoji: V
            })]
          })
        }), (0, r.jsxs)("div", {
          className: M ? e_.inputContainerShareToChannel : e_.hiddenButRenderedInputField,
          children: [(0, r.jsx)(O.A7, {
            placeholder: G,
            onEnter: H,
            setEditorRef: e => y(e),
            channel: g ? t : true,
            showEmojiButton: null != W,
            className: e_.replyInput,
            autoFocus: false,
            renderAttachButton: S ? () => (0, r.jsx)(p.u, {
              text: F,
              children: (0, r.jsx)(_.P3F, {
                className: e_.shareToChannelButton,
                onClick: K,
                children: g ? (0, r.jsx)(_.VL1, {
                  size: "custom",
                  width: 20,
                  height: 20
                }) : (0, r.jsx)(_.lOy, {
                  size: "custom",
                  width: 20,
                  height: 20
                })
              })
            }) : true
          }), L && (0, r.jsx)(_.P3F, {
            onClick: () => q(false),
            className: e_.primaryActionPopoutMessageCloseIcon,
            children: (0, r.jsx)(_.Dio, {
              size: "custom",
              width: 20,
              height: 20,
              color: d.Z.colors.ICON_STRONG
            })
          })]
        }), false === M && (0, r.jsxs)("div", {
          className: e_.primaryActionPopoutActionButtons,
          children: [!j && (0, r.jsx)(_.Button, {
            fullWidth: true,
            variant: "secondary",
            onClick: () => q(true),
            size: j ? "sm" : "md",
            text: ep.intl.string(ep.t.OAJQlP)
          }, "toggleMessageMode"), x]
        })]
      })
    })
  })
}
let eT = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, [a, o] = i.useState(false);
  i.useEffect(() => {
    o(true)
  }, []);
  let s = !!b.Z.keyboardModeEnabled && !a,
    l = (0, T.wC)(null == t ? true : t.guild_id).slice(0, 5).map(e => null == e.id ? {
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
        children: (0, r.jsx)(p.u, {
          asContainer: true,
          text: ep.intl.formatToPlainString(ep.t.kilW3l, {
            emojiName: t.name
          }),
          position: "top",
          "aria-label": ep.intl.formatToPlainString(ep.t.kilW3l, {
            emojiName: t.name
          }),
          shouldShow: !s && true,
          children: (0, r.jsx)(k.u, {
            emoji: t,
            isDisabled: !a,
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

function eC(e) {
  let {
    channel: t,
    userDescription: n,
    entry: i,
    disableGameProfileLinks: a,
    onUserPopoutClosed: s
  } = e, l = null == t ? true : t.guild_id, {
    displayParticipants: u,
    participant1: d,
    participant2: p,
    numOtherParticipants: m
  } = (0, er.Z)(i, 3), h = (0, c.e7)([Y.default], () => Y.default.getUser(i.author_id)), {
    streamPreviewUrl: g
  } = (0, ei.Z)(i), E = null != g, b = [d, p];
  return (0, r.jsxs)("div", {
    className: e_.popoutContentHeader,
    children: [(0, r.jsxs)("div", {
      className: e_.popoutUserContainer,
      children: [(0, r.jsx)(f.Z, {
        maxUsers: 3,
        users: u,
        size: _.EFr.SIZE_24,
        hideOverflowCount: true,
        disableUsernameTooltip: true,
        onUserPopoutRequestClose: s
      }), (0, r.jsx)(_.LZC, {
        size: 8,
        horizontal: true
      }), (0, r.jsx)(_.Heading, {
        variant: "heading-sm/normal",
        className: o()(e_.popoutUsernames, e_.popoutTextSecondary),
        children: ep.intl.format(n, {
          user0: Q.ZP.getName(l, null == t ? true : t.id, b[0]),
          user1: Q.ZP.getName(l, null == t ? true : t.id, b[1]),
          countOthers: m,
          countOthersHook: (e, t) => (0, r.jsx)(_.Text, {
            variant: "text-sm/medium",
            className: o()(e_.popoutUsername, e_.popoutTextPrimary),
            children: e
          }, t),
          name0Hook: (e, n) => (0, r.jsx)($.Z, {
            textClassName: o()(e_.popoutUsername, e_.popoutTextPrimary),
            text: e,
            user: b[0],
            channel: t,
            onPopoutClosed: s,
            enableDisplayNameStyles: true
          }, n),
          name1Hook: (e, n) => (0, r.jsx)($.Z, {
            textClassName: o()(e_.popoutUsername, e_.popoutTextPrimary),
            text: e,
            user: b[1],
            channel: t,
            onPopoutClosed: s,
            enableDisplayNameStyles: true
          }, n)
        })
      })]
    }), E && (0, r.jsx)(S.ZP, {
      size: S.ZP.Sizes.SMALL
    }), null != h && (0, r.jsx)(es.Z, {
      user: h,
      channel: t,
      guildId: l,
      entry: i,
      disableGameProfileLinks: a
    })]
  })
}

function eA(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? t : (0, r.jsx)(_.P3F, {
    className: e_.maybeClickable,
    onClick: n,
    children: t
  })
}

function eN(e) {
  var t, n, i, {
      title: a,
      subtitle: s,
      badges: l,
      children: c,
      onClickThumbnail: u,
      onClickTitle: d,
      onClickSubtitle: f,
      headerIcons: p,
      disableGameProfileLinks: m = false,
      showCoverImage: h = true,
      onUserPopoutClosed: g,
      trackRankingItemInteraction: E
    } = e,
    b = eb(e, ["title", "subtitle", "badges", "children", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "headerIcons", "disableGameProfileLinks", "showCoverImage", "onUserPopoutClosed", "trackRankingItemInteraction"]);
  let {
    entry: y
  } = b, O = (0, J.dX)(y), v = O ? null == (t = y.extra) ? true : t.application_id : true, S = (0, N.Z)({
    location: "ContentPopout",
    applicationId: m ? true : v,
    source: A.m1.ActivityCard,
    trackEntryPointImpression: true,
    sourceUserId: y.author_id
  }, {
    onOpened: () => null == E ? true : E(ec.xP.OPENED_GAME_PROFILE)
  }), {
    largeImage: I,
    smallImage: T
  } = (0, X.rv)({
    entry: y,
    showCoverImage: h
  }), C = (0, L.J)({
    location: "content_inventory"
  }), P = O ? S : true;
  return (0, r.jsxs)("div", {
    className: e_.popoutContentWrapper,
    children: [(0, r.jsx)(eC, eE(eh({
      disableGameProfileLinks: m
    }, b), {
      onUserPopoutClosed: g
    })), (0, r.jsxs)(ev, {
      backgroundImgSrc: null == I ? true : I.src,
      children: [(0, r.jsxs)("div", {
        className: e_.popoutHeroInner,
        children: [(0, r.jsx)("div", {
          className: e_.popoutThumbnailContainer,
          children: (0, r.jsx)(ee.E, {
            image: I,
            smallImage: T,
            aspectRatio: h ? "none" : true,
            onClick: null != u ? u : P,
            size: ee.J.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: e_.popoutHeroBody,
          children: [(0, r.jsx)(eA, {
            onClick: null != d ? d : P,
            children: (0, r.jsx)(_.Heading, {
              variant: "heading-md/medium",
              className: o()(e_.popoutHeroTextPrimary, {
                [e_.popoutHeroTextPrimaryShort]: null != p
              }),
              lineClamp: 3,
              children: a
            })
          }), null != s ? (0, r.jsx)(eA, {
            onClick: null != f ? f : P,
            children: (0, r.jsx)(_.Text, {
              variant: "text-sm/normal",
              className: e_.popoutHeroTextSecondary,
              children: s
            })
          }) : null, (0, r.jsx)(_.LZC, {
            size: 8
          }), l]
        }), (0, r.jsx)("div", {
          className: e_.popoutHeaderIcons,
          children: p
        })]
      }), c]
    }), C && null != v && ef.RI.has(v) ? (0, r.jsx)(j.Z, {
      className: e_.popoutGiftingBreadcrumb,
      applicationId: v,
      userIds: [y.author_id],
      cardSize: M.U.SMALL_SQUARE,
      location: "content_popout",
      guildId: null == (n = b.channel) ? true : n.guild_id,
      channelId: null == (i = b.channel) ? true : i.id
    }) : null]
  })
}

function eP(e) {
  var t, n, a, {
      title: o,
      subtitle: s,
      badges: l,
      stream: u,
      onClickThumbnail: d,
      onClickTitle: f,
      onClickSubtitle: p,
      onUserPopoutClosed: m,
      trackRankingItemInteraction: h
    } = e,
    b = eb(e, ["title", "subtitle", "badges", "stream", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "onUserPopoutClosed", "trackRankingItemInteraction"]);
  let y = (0, c.e7)([Z.Z], () => Z.Z.getChannel(null == u ? true : u.channelId)),
    [O] = i.useMemo(() => (0, P.p9)(y, W.Z, F.Z, B.Z, C.default), [y]),
    {
      entry: v
    } = b,
    S = (0, J.dX)(v),
    I = S ? null == (t = v.extra) ? true : t.application_id : true,
    T = (0, N.Z)({
      location: "ContentPopout",
      applicationId: I,
      source: A.m1.ActivityCard,
      trackEntryPointImpression: true,
      sourceUserId: v.author_id
    }, {
      onOpened: () => null == h ? true : h(ec.xP.OPENED_GAME_PROFILE)
    }),
    w = S ? T : true,
    {
      activity: D,
      activityApplication: x,
      fallbackApplication: k
    } = (0, en.Z)(v),
    {
      largeImage: U,
      smallImage: G
    } = (0, X.YC)(D, null != x ? x : k),
    {
      largeImage: V
    } = (0, X.rv)({
      entry: v
    }),
    H = (0, L.J)({
      location: "content_inventory"
    });
  return (0, r.jsxs)("div", {
    className: e_.popoutContentWrapper,
    children: [(0, r.jsx)(eC, eE(eh({}, b), {
      onUserPopoutClosed: m
    })), (0, r.jsxs)(ev, {
      backgroundImgSrc: null == V ? true : V.src,
      className: e_.streamingPopoutHero,
      children: [(0, r.jsx)(eA, {
        onClick: O ? () => {
          g.default.selectVoiceChannel(u.channelId), (0, E.iV)(u)
        } : true,
        children: (0, r.jsxs)("div", {
          className: e_.streamingPopoutPreviewContainer,
          children: [(0, r.jsx)(R.Z, {
            className: e_.streamingPopoutImg,
            stream: u
          }), O && (0, r.jsx)("div", {
            className: e_.streamCTA,
            children: (0, r.jsx)(_.Text, {
              variant: "text-md/normal",
              color: "always-white",
              children: ep.intl.string(ep.t["7Xq/nV"])
            })
          })]
        })
      }), (0, r.jsxs)("div", {
        className: e_.streamingPopoutHeader,
        children: [null != U && (0, r.jsx)("div", {
          className: e_.popoutThumbnailContainer,
          children: (0, r.jsx)(ee.E, {
            image: U,
            smallImage: G,
            onClick: null != d ? d : w,
            size: ee.J.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: e_.streamingPopoutHeaderText,
          children: [(0, r.jsx)(eA, {
            onClick: null != f ? f : w,
            children: (0, r.jsx)(_.Heading, {
              variant: "heading-md/semibold",
              className: e_.popoutTextPrimary,
              lineClamp: 3,
              children: o
            })
          }), null != s ? (0, r.jsx)(eA, {
            onClick: null != p ? p : w,
            children: (0, r.jsx)(_.Text, {
              variant: "text-sm/normal",
              className: e_.popoutTextSecondary,
              children: s
            })
          }) : null, (0, r.jsx)(_.LZC, {
            size: 8
          }), l]
        })]
      })]
    }), H && null != I && ef.RI.has(I) ? (0, r.jsx)(j.Z, {
      className: e_.popoutGiftingBreadcrumb,
      applicationId: I,
      userIds: [v.author_id],
      cardSize: M.U.SMALL_SQUARE,
      location: "content_popout",
      guildId: null == (n = b.channel) ? true : n.guild_id,
      channelId: null == (a = b.channel) ? true : a.id
    }) : null]
  })
}

function eR(e) {
  let t = (0, c.e7)([F.Z], () => F.Z.getGuild((0, y.j)(null == e ? true : e.location))),
    n = (0, c.e7)([Z.Z], () => Z.Z.getChannel((0, y.p)(null == e ? true : e.location))),
    i = (0, c.Wu)([Y.default], () => {
      var t, n;
      return null != (n = null == e || null == (t = e.participants) ? true : t.map(e => Y.default.getUser(e.userId))) ? n : []
    });
  return null != e && null != t && null != n && G.sR.has(n.type) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: e_.voiceChannelPopoutReactorHeader,
      children: [(0, r.jsxs)(_.P3F, {
        "aria-label": ep.intl.string(ep.t["W/A4Qp"]),
        onClick: () => (0, x.Kh)(n.id),
        className: e_.voiceChannelPopoutReactorChannel,
        children: [(0, r.jsx)(w.Z, {
          guild: t,
          size: w.Z.Sizes.SMOL,
          className: e_.voiceChannelGuildIcon,
          active: true
        }), (0, r.jsx)(_.Fbu, {
          size: "xxs",
          color: d.Z.colors.INTERACTIVE_TEXT_DEFAULT
        }), (0, r.jsx)(_.VL1, {
          size: "xs",
          color: d.Z.colors.TEXT_DEFAULT
        }), (0, r.jsx)(_.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          className: e_.voiceChannelName,
          children: null == n ? true : n.name
        })]
      }), (0, r.jsx)(U.Z, {
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
          className: e_.voiceChannelAdditionalParticipants,
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

function ew(e) {
  let {
    channel: t,
    entry: n,
    onVoiceChannelPreview: a
  } = e, {
    streamPreviewUrl: o,
    channel: s
  } = (0, ei.Z)(n), {
    needSubscriptionToAccess: l
  } = (0, D.Z)(null == t ? true : t.id), u = (0, c.e7)([F.Z], () => null != s ? F.Z.getGuild(s.guild_id) : true), f = (0, c.Wu)([K.ZP], () => null != s ? K.ZP.getVoiceStatesForChannel(s) : [], [s]), m = (0, c.e7)([W.Z], () => W.Z.isInChannel(null == s ? true : s.id)), g = i.useMemo(() => {
    for (let e of f) {
      let t = Z.Z.getDMFromUserId(e.user.id),
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
  let E = null != o,
    b = () => {
      h.Z.updateChatOpen(s.id, true), (0, x.Kh)(s.id), null == a || a(s)
    },
    y = () => {
      v.Z.handleVoiceConnect({
        channel: s,
        connected: m,
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
        children: [i && (0, r.jsx)(_.aNP, {
          size: "custom",
          width: 13,
          height: 13,
          className: e_.popoutBlockedWarningIcon
        }), ep.intl.string(ep.t.d6DpXI)]
      }) : n;
      return (0, r.jsx)(p.u, {
        "aria-label": i ? ep.intl.string(ep.t.d6DpXI) : null != n && n,
        __unsupportedReactNodeAsText: a,
        shouldShow: true,
        children: t
      }, "voice-preview")
    };
  return {
    voiceBar: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: e_.voiceChannelPopoutReactorHeader,
        children: [(0, r.jsx)(O, {
          text: ep.intl.string(ep.t.WIVYqJ),
          hasRestrictedOrMutedVCParticipant: g,
          children: (0, r.jsxs)(_.P3F, {
            "aria-label": ep.intl.string(ep.t.WIVYqJ),
            onClick: b,
            className: e_.voiceChannelPopoutReactorChannel,
            children: [(0, r.jsx)(w.Z, {
              guild: u,
              size: w.Z.Sizes.SMOL,
              className: e_.voiceChannelGuildIcon,
              active: true
            }), (0, r.jsx)(_.Fbu, {
              size: "xxs",
              color: d.Z.colors.INTERACTIVE_TEXT_DEFAULT
            }), (0, r.jsx)(_.gj8, {
              size: "xs",
              color: d.Z.colors.TEXT_DEFAULT
            }), (0, r.jsx)(_.Text, {
              variant: "text-sm/medium",
              color: "text-default",
              className: e_.voiceChannelName,
              children: s.name
            })]
          })
        }), (0, r.jsx)(U.Z, {
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
            className: e_.voiceChannelAdditionalParticipants,
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
    joinVoiceButton: m ? null : (0, r.jsx)(O, {
      hasRestrictedOrMutedVCParticipant: g,
      children: (0, r.jsx)(_.Button, {
        onClick: y,
        fullWidth: true,
        text: E ? ep.intl.string(ep.t.I6JG46) : ep.intl.string(ep.t.VJlc0S),
        icon: E ? _.pzj : _.gj8,
        variant: "active",
        size: "md"
      })
    })
  }
}