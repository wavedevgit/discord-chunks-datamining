/** Chunk was on web.js **/
/** chunk id: 910692, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BC: () => eN,
  Eh: () => ev,
  Fl: () => eR,
  YN: () => eO,
  fD: () => eS
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009);
require("./340287.js");
var Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk342952 = require("./342952.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk367513 = require("./367513.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk775602 = require("./775602.js"),
  Chunk969151 = require("./969151.js"),
  Chunk1768 = require("./1768.jsx"),
  Chunk262763 = require("./262763.jsx"),
  Chunk402216 = require("./402216.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk822123 = require("./822123.js"),
  Chunk643501 = require("./643501.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk279250 = require("./279250.js"),
  Chunk607407 = require("./607407.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk721592 = require("./721592.js"),
  Chunk378570 = require("./378570.js"),
  Chunk565688 = require("./565688.js"),
  Chunk93879 = require("./93879.jsx"),
  Chunk242640 = require("./242640.jsx"),
  Chunk912276 = require("./912276.jsx"),
  Chunk636585 = require("./636585.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk562153 = require("./562153.js"),
  Chunk939341 = require("./939341.js"),
  Chunk20805 = require("./20805.js"),
  Chunk22869 = require("./22869.jsx"),
  Chunk623671 = require("./623671.jsx"),
  Chunk428249 = require("./428249.js"),
  Chunk327098 = require("./327098.js"),
  Chunk576757 = require("./576757.js"),
  Chunk202195 = require("./202195.js"),
  Chunk176563 = require("./176563.js"),
  Chunk422973 = require("./422973.jsx"),
  Chunk315246 = require("./315246.jsx"),
  Chunk899682 = require("./899682.jsx"),
  Chunk424994 = require("./424994.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk188275 = require("./188275.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk187866 = require("./187866.js");

function eh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function em(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eh(e, t, n[t])
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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = ey(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function ey(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function eO(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: e_.SW,
    children: t
  })
}

function eA(e) {
  let {
    children: t,
    backgroundImgSrc: n,
    className: i,
    style: a = {}
  } = e, {
    primaryColor: o,
    secondaryColor: l
  } = (0, ea.A)(n);
  return null != n && (a.background = "linear-gradient(45deg, ".concat(o, ", ").concat(l, ")")), (0, r.jsx)(_.NPJ, {
    theme: eu.NJ8.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, r.jsx)("div", {
      className: s()(e_.ZK, e, i),
      style: a,
      children: t
    })
  })
}

function ev(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: e_.$m,
    children: t
  })
}

function eS(e) {
  let {
    channel: t,
    user: n,
    onReaction: a,
    entry: s,
    buttons: o = [],
    header: f,
    onVoiceChannelPreview: m
  } = e, [g, E] = i.useState(false), [b, y] = i.useState(null), A = i.useRef(null), v = (0, c.bG)([B.A], () => null != t && eu.kvI.CONTENT_ENTRY_EMBEDS.has(t.type) && B.A.can(eu.xBc.SEND_MESSAGES, t)), [I, T] = i.useState(false), [C, N] = i.useState(false), {
    voiceBar: R,
    joinVoiceButton: w
  } = eP({
    channel: t,
    entry: s,
    onVoiceChannelPreview: m
  }), {
    embeddedActivity: P
  } = (0, en.A)(s), D = ew(P), x = null != w && 0 === o.length ? [w] : o, L = x.length > 0, j = x.length >= 2, [M, k] = i.useState(!L), U = Z.Ay.getName(null == t ? true : t.guild_id, null == t ? true : t.id, n), G = null != t && g ? ep.intl.formatToPlainString(ep.t["8lzR/R"], {
    channel: "#".concat(t.name)
  }) : ep.intl.formatToPlainString(ep.t["4c+CAx"], {
    channel: "@".concat(U)
  }), F = g ? ep.intl.string(ep.t.Z2CUgn) : ep.intl.string(ep.t.XLGiTG), H = async e => {
    let r, {
      emoji: i
    } = e;
    if (null != i) {
      if (q.default.track(eu.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
          surface_type: ec.UG.GUILD_MEMBER_LIST,
          channel_id: null == t ? true : t.id,
          guild_id: null == t ? true : t.guild_id
        }), (0, S.Dr)(u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), T(true), N(false), g) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
      else {
        var s;
        let e = await h.A.getOrEnsurePrivateChannel(n.id);
        r = null != (s = V.A.getChannel(e)) ? s : null
      }
      return l()(null != r, "Send channel must be defined"), W({
        reply: ":".concat(i.name, ":"),
        sendToChannel: r,
        onComplete: (e, t) => {
          N(true), setTimeout(() => {
            T(false), a(e, t)
          }, 600)
        },
        interactionType: ec.PA.REACTION_EMOJI_REACT_SENT,
        requiresChannelReadiness: false
      })
    }
  }, Y = async e => {
    let r;
    if ((0, S.Dr)(u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
    else {
      let e = await h.A.openPrivateChannel({
          recipientIds: n.id
        }),
        t = V.A.getChannel(e);
      l()(null != t, "DM channel must be defined"), r = t
    }
    let i = r.type === eu.rbe.DM ? ec.PA.DM_REACTION_MESSAGE_SENT : ec.PA.CHANNEL_REACTION_MESSAGE_SENT;
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
    null == b || b.focus(), await (0, et.d)({
      channel: n,
      content: t,
      entry: s,
      whenReady: a,
      doNotNotifyOnError: false,
      location: ed.Hx.CONTENT_INVENTORY_MEMBERLIST
    }), null == r || r(i, n)
  }, K = null != f ? f : null != R ? R : null != D ? D : true, z = () => {
    E(e => !e), M && (null == b || b.focus())
  }, X = e => {
    k(e), e && (null == b || b.focus())
  };
  return (0, r.jsx)("div", {
    ref: A,
    style: {
      pointerEvents: I ? "none" : "all"
    },
    children: (0, r.jsx)(_.Oky, {
      containerRef: A,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(el.A, {
          sent: C,
          shown: I,
          className: e_.Jt
        }), null != K ? K : (0, r.jsx)(es.A, {
          children: (0, r.jsxs)("div", {
            className: e_.T7,
            children: [(0, r.jsx)(eI, {
              channel: t,
              onClickSuggestion: H
            }), (0, r.jsx)(O.g1, {
              onSelectEmoji: H
            })]
          })
        }), (0, r.jsxs)("div", {
          className: M ? e_.P2 : e_.VE,
          children: [(0, r.jsx)(O.nd, {
            placeholder: G,
            onEnter: Y,
            setEditorRef: e => y(e),
            channel: g ? t : true,
            showEmojiButton: null != K,
            className: e_.N8,
            autoFocus: false,
            renderAttachButton: v ? () => (0, r.jsx)(p.m, {
              text: F,
              children: (0, r.jsx)(_.DUT, {
                className: e_.wD,
                onClick: z,
                children: g ? (0, r.jsx)(_.N$i, {
                  size: "custom",
                  width: 20,
                  height: 20
                }) : (0, r.jsx)(_.XxR, {
                  size: "custom",
                  width: 20,
                  height: 20
                })
              })
            }) : true
          }), L && (0, r.jsx)(_.DUT, {
            onClick: () => X(false),
            className: e_.i3,
            children: (0, r.jsx)(_.PGe, {
              size: "custom",
              width: 20,
              height: 20,
              color: d.A.colors.ICON_STRONG
            })
          })]
        }), false === M && (0, r.jsxs)("div", {
          className: e_.fh,
          children: [!j && (0, r.jsx)(_.Button, {
            fullWidth: true,
            variant: "secondary",
            onClick: () => X(true),
            size: j ? "sm" : "md",
            text: ep.intl.string(ep.t.OAJQlP)
          }, "toggleMessageMode"), x]
        })]
      })
    })
  })
}
let eI = e => {
  let {
    channel: t,
    onClickSuggestion: n
  } = e, [a, s] = i.useState(false);
  i.useEffect(() => {
    s(true)
  }, []);
  let o = !!b.A.keyboardModeEnabled && !a,
    l = (0, I.Fj)(null == t ? true : t.guild_id).slice(0, 5).map(e => null == e.id ? {
      emoji: e,
      url: e.url
    } : {
      emoji: e,
      url: (0, X._O)({
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
        children: (0, r.jsx)(p.m, {
          asContainer: true,
          text: ep.intl.formatToPlainString(ep.t.kilW3l, {
            emojiName: t.name
          }),
          position: "top",
          "aria-label": ep.intl.formatToPlainString(ep.t.kilW3l, {
            emojiName: t.name
          }),
          shouldShow: !o && true,
          children: (0, r.jsx)(k.D, {
            emoji: t,
            isDisabled: !a,
            onClick: () => n({
              emoji: t
            }),
            className: e_.Zg
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
    onUserPopoutClosed: o
  } = e, l = null == t ? true : t.guild_id, {
    displayParticipants: u,
    participant1: d,
    participant2: p,
    numOtherParticipants: h
  } = (0, er.A)(i, 3), m = (0, c.bG)([W.default], () => W.default.getUser(i.author_id)), {
    streamPreviewUrl: g
  } = (0, ei.A)(i), E = null != g, b = [d, p];
  return (0, r.jsxs)("div", {
    className: e_.MH,
    children: [(0, r.jsxs)("div", {
      className: e_.WP,
      children: [(0, r.jsx)(f.A, {
        maxUsers: 3,
        users: u,
        size: _._3J.SIZE_24,
        hideOverflowCount: true,
        disableUsernameTooltip: true,
        onUserPopoutRequestClose: o
      }), (0, r.jsx)(_.hKd, {
        size: 8,
        horizontal: true
      }), (0, r.jsx)(_.Heading, {
        variant: "heading-sm/normal",
        className: s()(e_.Xn, e_.zA),
        children: ep.intl.format(n, {
          user0: Z.Ay.getName(l, null == t ? true : t.id, b[0]),
          user1: Z.Ay.getName(l, null == t ? true : t.id, b[1]),
          countOthers: h,
          countOthersHook: (e, t) => (0, r.jsx)(_.Text, {
            variant: "text-sm/medium",
            className: s()(e_.Mj, e_.nk),
            children: e
          }, t),
          name0Hook: (e, n) => (0, r.jsx)(J.A, {
            textClassName: s()(e_.Mj, e_.nk),
            text: e,
            user: b[0],
            channel: t,
            onPopoutClosed: o,
            enableDisplayNameStyles: true
          }, n),
          name1Hook: (e, n) => (0, r.jsx)(J.A, {
            textClassName: s()(e_.Mj, e_.nk),
            text: e,
            user: b[1],
            channel: t,
            onPopoutClosed: o,
            enableDisplayNameStyles: true
          }, n)
        })
      })]
    }), E && (0, r.jsx)(v.Ay, {
      size: v.Ay.Sizes.SMALL
    }), null != m && (0, r.jsx)(eo.A, {
      user: m,
      channel: t,
      guildId: l,
      entry: i,
      disableGameProfileLinks: a
    })]
  })
}

function eC(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return null == n ? t : (0, r.jsx)(_.DUT, {
    className: e_.Zw,
    onClick: n,
    children: t
  })
}

function eN(e) {
  var t, n, i;
  let {
    title: a,
    subtitle: o,
    badges: l,
    children: c,
    onClickThumbnail: u,
    onClickTitle: d,
    onClickSubtitle: f,
    headerIcons: p,
    disableGameProfileLinks: h = false,
    showCoverImage: m = true,
    onUserPopoutClosed: g,
    trackRankingItemInteraction: E
  } = e, b = eb(e, ["title", "subtitle", "badges", "children", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "headerIcons", "disableGameProfileLinks", "showCoverImage", "onUserPopoutClosed", "trackRankingItemInteraction"]), {
    entry: y
  } = b, O = (0, $.zD)(y), A = O ? null == (t = y.extra) ? true : t.application_id : true, v = (0, N.A)({
    location: "ContentPopout",
    applicationId: h ? true : A,
    source: C.Ob.ActivityCard,
    trackEntryPointImpression: true,
    sourceUserId: y.author_id
  }, {
    onOpened: () => null == E ? true : E(ec.PA.OPENED_GAME_PROFILE)
  }), {
    largeImage: S,
    smallImage: I
  } = (0, Q.nO)({
    entry: y,
    showCoverImage: m
  }), T = (0, L.w)({
    location: "content_inventory"
  }), R = O ? v : true;
  return (0, r.jsxs)("div", {
    className: e_.au,
    children: [(0, r.jsx)(eT, eE(em({
      disableGameProfileLinks: h
    }, b), {
      onUserPopoutClosed: g
    })), (0, r.jsxs)(eA, {
      backgroundImgSrc: null == S ? true : S.src,
      children: [(0, r.jsxs)("div", {
        className: e_.CG,
        children: [(0, r.jsx)("div", {
          className: e_.Fb,
          children: (0, r.jsx)(ee.d, {
            image: S,
            smallImage: I,
            aspectRatio: m ? "none" : true,
            onClick: null != u ? u : R,
            size: ee.w.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: e_.iC,
          children: [(0, r.jsx)(eC, {
            onClick: null != d ? d : R,
            children: (0, r.jsx)(_.Heading, {
              variant: "heading-md/medium",
              className: s()(e_.$2, {
                [e_.bC]: null != p
              }),
              lineClamp: 3,
              children: a
            })
          }), null != o ? (0, r.jsx)(eC, {
            onClick: null != f ? f : R,
            children: (0, r.jsx)(_.Text, {
              variant: "text-sm/normal",
              className: e_.LG,
              children: o
            })
          }) : null, (0, r.jsx)(_.hKd, {
            size: 8
          }), l]
        }), (0, r.jsx)("div", {
          className: e_.hO,
          children: p
        })]
      }), c]
    }), T && null != A && ef.sQ.has(A) ? (0, r.jsx)(j.A, {
      className: e_.zu,
      applicationId: A,
      userIds: [y.author_id],
      cardSize: M.Y.SMALL_SQUARE,
      location: "content_popout",
      guildId: null == (n = b.channel) ? true : n.guild_id,
      channelId: null == (i = b.channel) ? true : i.id
    }) : null]
  })
}

function eR(e) {
  var t, n, a;
  let {
    title: s,
    subtitle: o,
    badges: l,
    stream: u,
    onClickThumbnail: d,
    onClickTitle: f,
    onClickSubtitle: p,
    onUserPopoutClosed: h,
    trackRankingItemInteraction: m
  } = e, b = eb(e, ["title", "subtitle", "badges", "stream", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "onUserPopoutClosed", "trackRankingItemInteraction"]), y = (0, c.bG)([V.A], () => V.A.getChannel(null == u ? true : u.channelId)), [O] = i.useMemo(() => (0, R.eo)(y, K.A, F.A, B.A, T.default), [y]), {
    entry: A
  } = b, v = (0, $.zD)(A), S = v ? null == (t = A.extra) ? true : t.application_id : true, I = (0, N.A)({
    location: "ContentPopout",
    applicationId: S,
    source: C.Ob.ActivityCard,
    trackEntryPointImpression: true,
    sourceUserId: A.author_id
  }, {
    onOpened: () => null == m ? true : m(ec.PA.OPENED_GAME_PROFILE)
  }), P = v ? I : true, {
    activity: D,
    activityApplication: x,
    fallbackApplication: k
  } = (0, en.A)(A), {
    largeImage: U,
    smallImage: G
  } = (0, Q.D8)(D, null != x ? x : k), {
    largeImage: H
  } = (0, Q.nO)({
    entry: A
  }), Y = (0, L.w)({
    location: "content_inventory"
  });
  return (0, r.jsxs)("div", {
    className: e_.au,
    children: [(0, r.jsx)(eT, eE(em({}, b), {
      onUserPopoutClosed: h
    })), (0, r.jsxs)(eA, {
      backgroundImgSrc: null == H ? true : H.src,
      className: e_.uR,
      children: [(0, r.jsx)(eC, {
        onClick: O ? () => {
          g.default.selectVoiceChannel(u.channelId), (0, E.Nl)(u)
        } : true,
        children: (0, r.jsxs)("div", {
          className: e_.nh,
          children: [(0, r.jsx)(w.A, {
            className: e_.j7,
            stream: u
          }), O && (0, r.jsx)("div", {
            className: e_.NE,
            children: (0, r.jsx)(_.Text, {
              variant: "text-md/normal",
              color: "always-white",
              children: ep.intl.string(ep.t["7Xq/nV"])
            })
          })]
        })
      }), (0, r.jsxs)("div", {
        className: e_.$6,
        children: [null != U && (0, r.jsx)("div", {
          className: e_.Fb,
          children: (0, r.jsx)(ee.d, {
            image: U,
            smallImage: G,
            onClick: null != d ? d : P,
            size: ee.w.SIZE_72
          })
        }), (0, r.jsxs)("div", {
          className: e_.gv,
          children: [(0, r.jsx)(eC, {
            onClick: null != f ? f : P,
            children: (0, r.jsx)(_.Heading, {
              variant: "heading-md/semibold",
              className: e_.nk,
              lineClamp: 3,
              children: s
            })
          }), null != o ? (0, r.jsx)(eC, {
            onClick: null != p ? p : P,
            children: (0, r.jsx)(_.Text, {
              variant: "text-sm/normal",
              className: e_.zA,
              children: o
            })
          }) : null, (0, r.jsx)(_.hKd, {
            size: 8
          }), l]
        })]
      })]
    }), Y && null != S && ef.sQ.has(S) ? (0, r.jsx)(j.A, {
      className: e_.zu,
      applicationId: S,
      userIds: [A.author_id],
      cardSize: M.Y.SMALL_SQUARE,
      location: "content_popout",
      guildId: null == (n = b.channel) ? true : n.guild_id,
      channelId: null == (a = b.channel) ? true : a.id
    }) : null]
  })
}

function ew(e) {
  let t = (0, c.bG)([F.A], () => F.A.getGuild((0, y.D)(null == e ? true : e.location))),
    n = (0, c.bG)([V.A], () => V.A.getChannel((0, y.H)(null == e ? true : e.location))),
    i = (0, c.yK)([W.default], () => {
      var t, n;
      return null != (t = null == e || null == (n = e.participants) ? true : n.map(e => W.default.getUser(e.userId))) ? t : []
    });
  return null != e && null != t && null != n && G.k3.has(n.type) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: e_.kP,
      children: [(0, r.jsxs)(_.DUT, {
        "aria-label": ep.intl.string(ep.t["W/A4Qp"]),
        onClick: () => (0, x.iN)(n.id),
        className: e_.I3,
        children: [(0, r.jsx)(P.A, {
          guild: t,
          size: P.A.Sizes.SMOL,
          className: e_.O9,
          active: true
        }), (0, r.jsx)(_._BQ, {
          size: "xxs",
          color: d.A.colors.INTERACTIVE_TEXT_DEFAULT
        }), (0, r.jsx)(_.N$i, {
          size: "xs",
          color: d.A.colors.TEXT_DEFAULT
        }), (0, r.jsx)(_.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          className: e_.NR,
          children: null == n ? true : n.name
        })]
      }), (0, r.jsx)(U.A, {
        guildId: t.id,
        users: i,
        max: 3,
        renderUser: (e, n) => (0, r.jsx)(_.euF, {
          src: e.getAvatarURL(t.id, 16),
          size: _._3J.SIZE_16,
          "aria-label": "avatar",
          className: n
        }),
        renderMoreUsers: e => (0, r.jsx)("div", {
          className: e_.V9,
          children: (0, r.jsx)(_.Text, {
            variant: "text-xxs/semibold",
            color: "text-default",
            children: e
          })
        })
      })]
    }), (0, r.jsx)(_.hKd, {
      size: 16
    })]
  }) : null
}

function eP(e) {
  let {
    channel: t,
    entry: n,
    onVoiceChannelPreview: a
  } = e, {
    streamPreviewUrl: s,
    channel: o
  } = (0, ei.A)(n), {
    needSubscriptionToAccess: l
  } = (0, D.A)(null == t ? true : t.id), u = (0, c.bG)([F.A], () => null != o ? F.A.getGuild(o.guild_id) : true), f = (0, c.yK)([z.Ay], () => null != o ? z.Ay.getVoiceStatesForChannel(o) : [], [o]), h = (0, c.bG)([K.A], () => K.A.isInChannel(null == o ? true : o.id)), g = i.useMemo(() => {
    for (let e of f) {
      let t = V.A.getDMFromUserId(e.user.id),
        n = null != t && Y.Ay.isChannelMuted(null, t),
        r = H.A.isBlockedOrIgnored(e.user.id);
      if (n || r) returntrue
    }
    returnfalse
  }, [f]);
  if (null == o || null == u) return {
    voiceBar: true,
    joinVoiceButton: true
  };
  let E = null != s,
    b = () => {
      m.A.updateChatOpen(o.id, true), (0, x.iN)(o.id), null == a || a(o)
    },
    y = () => {
      A.A.handleVoiceConnect({
        channel: o,
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
        children: [i && (0, r.jsx)(_.id, {
          size: "custom",
          width: 13,
          height: 13,
          className: e_.vb
        }), ep.intl.string(ep.t.d6DpXI)]
      }) : n;
      return (0, r.jsx)(p.m, {
        "aria-label": i ? ep.intl.string(ep.t.d6DpXI) : null != n && n,
        __unsupportedReactNodeAsText: a,
        shouldShow: true,
        children: t
      }, "voice-preview")
    };
  return {
    voiceBar: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: e_.kP,
        children: [(0, r.jsx)(O, {
          text: ep.intl.string(ep.t.WIVYqJ),
          hasRestrictedOrMutedVCParticipant: g,
          children: (0, r.jsxs)(_.DUT, {
            "aria-label": ep.intl.string(ep.t.WIVYqJ),
            onClick: b,
            className: e_.I3,
            children: [(0, r.jsx)(P.A, {
              guild: u,
              size: P.A.Sizes.SMOL,
              className: e_.O9,
              active: true
            }), (0, r.jsx)(_._BQ, {
              size: "xxs",
              color: d.A.colors.INTERACTIVE_TEXT_DEFAULT
            }), (0, r.jsx)(_.HKD, {
              size: "xs",
              color: d.A.colors.TEXT_DEFAULT
            }), (0, r.jsx)(_.Text, {
              variant: "text-sm/medium",
              color: "text-default",
              className: e_.NR,
              children: o.name
            })]
          })
        }), (0, r.jsx)(U.A, {
          guildId: u.id,
          users: f,
          max: 3,
          renderUser: (e, t) => (0, r.jsx)(_.euF, {
            src: e.user.getAvatarURL(u.id, 16),
            size: _._3J.SIZE_16,
            "aria-label": "avatar",
            className: t
          }),
          renderMoreUsers: e => (0, r.jsx)("div", {
            className: e_.V9,
            children: (0, r.jsx)(_.Text, {
              variant: "text-xxs/semibold",
              color: "text-default",
              children: e
            })
          })
        })]
      }), (0, r.jsx)(_.hKd, {
        size: 16
      })]
    }),
    joinVoiceButton: h ? null : (0, r.jsx)(O, {
      hasRestrictedOrMutedVCParticipant: g,
      children: (0, r.jsx)(_.Button, {
        onClick: y,
        fullWidth: true,
        text: E ? ep.intl.string(ep.t.I6JG46) : ep.intl.string(ep.t.VJlc0S),
        icon: E ? _.kN9 : _.HKD,
        variant: "active",
        size: "md"
      })
    })
  }
}