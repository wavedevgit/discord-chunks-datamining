/** Chunk was on 22173 **/
/** chunk id: 404616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Lp: () => eo,
  NN: () => em,
  TJ: () => ec,
  ZP: () => eu,
  au: () => ej,
  kZ: () => ex,
  m9: () => ef,
  og: () => ep
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk574583 = require("./574583.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk738619 = require("./738619.jsx"),
  Chunk393238 = require("./393238.js"),
  Chunk963374 = require("./963374.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk446489 = require("./446489.jsx"),
  Chunk824578 = require("./824578.js"),
  Chunk95398 = require("./95398.jsx"),
  Chunk247206 = require("./247206.js"),
  Chunk406432 = require("./406432.js"),
  Chunk169525 = require("./169525.js"),
  Chunk566006 = require("./566006.js"),
  Chunk255269 = require("./255269.js"),
  Chunk937889 = require("./937889.js"),
  Chunk443877 = require("./443877.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk287151 = require("./287151.jsx"),
  Chunk267128 = require("./267128.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk451478 = require("./451478.js"),
  Chunk55935 = require("./55935.js"),
  Chunk109434 = require("./109434.js"),
  Chunk360004 = require("./360004.js"),
  Chunk456269 = require("./456269.js"),
  Chunk109590 = require("./109590.js"),
  Chunk660189 = require("./660189.js"),
  Chunk208970 = require("./208970.js"),
  Chunk73315 = require("./73315.jsx"),
  Chunk470623 = require("./470623.jsx"),
  Chunk196255 = require("./196255.jsx"),
  Chunk858543 = require("./858543.jsx"),
  Chunk265641 = require("./265641.js"),
  Chunk627896 = require("./627896.js"),
  Chunk883728 = require("./883728.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk586301 = require("./586301.js"),
  Chunk430864 = require("./430864.js");

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let eo = 72,
  ec = 72,
  eu = Chunk647438.memo(function(e) {
    let {
      threadId: t,
      goToThread: n,
      observePostVisibilityAnalytics: s,
      overrideMedia: i,
      className: c,
      containerWidth: u
    } = e, {
      channel: g,
      isOpen: f,
      messageCount: j,
      firstMessage: p,
      content: v,
      media: N
    } = function(e) {
      let {
        threadId: t,
        overrideMedia: n
      } = e, l = (0, h.e7)([B.Z], () => B.Z.getChannel(t));
      o()(null != l, "the thread should not be null here, a store must have missed an update");
      let a = (0, h.e7)([L.ZP], () => L.ZP.getCurrentSidebarChannelId(l.parent_id) === l.id),
        {
          firstMessage: s
        } = (0, Q.cl)(l),
        {
          content: r,
          firstMedia: i
        } = (0, G.mX)({
          firstMessage: s
        }),
        {
          messageCountText: c
        } = (0, G.nP)(l);
      return {
        channel: l,
        isOpen: a,
        messageCount: c,
        firstMessage: s,
        content: r,
        media: null != n ? n : i
      }
    }({
      threadId: t,
      overrideMedia: i
    }), {
      ref: y,
      height: C
    } = (0, b.ZP)(), O = (0, q.xH)(e => e.setCardHeight, d.X);
    a.useEffect(() => {
      null != C && O(t, C)
    }, [C, O, t]), a.useEffect(() => {
      null == s || s(y.current, t)
    }, [y, s, t]);
    let P = a.useRef(null),
      {
        handleLeftClick: Z,
        handleRightClick: w
      } = (0, et.Z)({
        facepileRef: P,
        goToThread: n,
        channel: g
      }),
      _ = (0, m.JA)(t),
      {
        role: S,
        onFocus: T
      } = _,
      k = function(e, t) {
        if (null == e) return {};
        var n, l, a = function(e, t) {
          if (null == e) return {};
          var n, l, a = {},
            s = Object.keys(e);
          for (l = 0; l < s.length; l++) n = s[l], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (l = 0; l < s.length; l++) n = s[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }(_, ["role", "onFocus"]),
      {
        isFocused: M,
        handleFocus: I,
        handleBlur: R
      } = (0, $.Z)(T);
    return (0, l.jsxs)("div", {
      ref: y,
      "data-item-id": t,
      onClick: Z,
      onContextMenu: w,
      className: r()(es.container, c, {
        [es.isOpen]: f
      }),
      children: [(0, l.jsx)(x.P3F, ei({
        onClick: Z,
        focusProps: {
          ringTarget: y
        },
        onContextMenu: w,
        "aria-label": ea.intl.formatToPlainString(ea.t.pgYN6e, {
          title: g.name,
          count: j
        }),
        className: es.focusTarget,
        onFocus: I,
        onBlur: R
      }, k)), (0, l.jsxs)("div", {
        className: es.left,
        children: [(0, l.jsx)(x.y5t, {
          children: (0, l.jsx)(ed, {
            channel: g,
            firstMessage: p,
            content: v,
            hasMediaAttachment: null != N,
            containerWidth: u
          })
        }), (0, l.jsx)(x.Rny, {
          enabled: !M,
          children: (0, l.jsx)(eg, {
            channel: g,
            firstMessage: p,
            facepileRef: P
          })
        })]
      }), (null == p ? true : p.blocked) || null == N ? null : (0, l.jsx)(eN, {
        channel: g,
        firstMedia: N
      })]
    })
  });

function ed(e) {
  let {
    channel: t,
    firstMessage: n,
    content: a,
    hasMediaAttachment: s,
    containerWidth: i
  } = e, {
    isNew: o,
    hasUnreads: c
  } = (0, G.J$)(t), u = em(t), {
    postTitleRef: d,
    isNewBadgeOverflow: m
  } = (0, ee.x)(o, 24, i);
  return (0, l.jsxs)("div", {
    className: es.body,
    children: [(0, l.jsx)(Y.ZP, {
      channel: t
    }), (0, l.jsx)("div", {
      className: r()(es.header, {
        [es.withNewBadgeOverflow]: m
      }),
      children: (0, l.jsxs)("div", {
        className: es.headerText,
        children: [(0, l.jsx)(x.X6q, {
          variant: "heading-lg/semibold",
          color: c ? "header-primary" : "text-muted",
          lineClamp: 2,
          className: es.postTitleText,
          children: (0, l.jsxs)("span", {
            ref: d,
            children: [u, o && (0, l.jsx)("span", {
              className: es.newBadgeWrapper,
              children: (0, l.jsx)(x.IGR, {
                className: es.newBadge,
                color: g.Z.unsafe_rawColors.BRAND_260.css,
                text: ea.intl.string(ea.t.y2b7CA)
              })
            })]
          })
        }), o && m && (0, l.jsx)(x.IGR, {
          className: es.newBadge,
          color: g.Z.unsafe_rawColors.BRAND_260.css,
          text: ea.intl.string(ea.t.y2b7CA)
        })]
      })
    }), (0, l.jsx)("div", {
      className: es.message,
      children: (0, l.jsx)(eh, {
        channel: t,
        message: n,
        content: a,
        hasMediaAttachment: s,
        hasUnreads: c
      })
    })]
  })
}

function em(e) {
  let t = (0, h.e7)([X.Z], () => X.Z.getHasSearchResults(e.parent_id)),
    n = (0, h.e7)([X.Z], () => X.Z.getSearchQuery(e.parent_id)),
    l = (0, H.d)(e.guild_id, "forum_post_use_highlighted_channel_name"),
    s = a.useMemo(() => (0, p.nC)(t && null != n ? n : "", l), [t, n, l]);
  return a.useMemo(() => (0, k.ZP)({
    content: e.name,
    embeds: []
  }, {
    postProcessor: s
  }).content, [e.name, s])
}
let eh = Chunk647438.memo(function(e) {
  let {
    message: t,
    channel: n,
    content: a,
    hasMediaAttachment: s,
    hasUnreads: i
  } = e, {
    isBlocked: o,
    isIgnored: c
  } = (0, h.cj)([z.Z], () => ({
    isBlocked: null != t && z.Z.isBlockedForMessage(t),
    isIgnored: null != t && z.Z.isIgnoredForMessage(t)
  })), u = (0, h.e7)([J.Z], () => J.Z.isLoading(n.id)), d = (0, h.e7)([F.Z], () => F.Z.can(en.Plq.MANAGE_MESSAGES, n)), m = A.cC.useSetting(), g = null;
  if (o) g = (0, l.jsx)(x.Text, {
    className: es.blockedMessage,
    variant: "text-sm/medium",
    color: "text-muted",
    children: ea.intl.string(ea.t.Lkp2fH)
  });
  else if (c) g = (0, l.jsx)(x.Text, {
    className: es.blockedMessage,
    variant: "text-sm/medium",
    color: "text-muted",
    children: ea.intl.string(ea.t.yWK7ZG)
  });
  else {
    let {
      contentPlaceholder: e,
      renderedContent: n
    } = null == t ? {
      contentPlaceholder: null,
      renderedContent: null
    } : (0, E.f)(t, a, o, c, r()(es.messageContent, er.inlineFormat, er.__invalid_smallFontSize), {
      leadingIconClass: es.messageContentLeadingIcon,
      trailingIconClass: es.messageContentTrailingIcon,
      iconSize: el.WW
    });
    g = null != n ? (0, l.jsx)(x.Text, {
      variant: "text-sm/semibold",
      color: i ? "header-secondary" : "text-muted",
      children: n
    }) : s ? null : (0, l.jsx)(x.Text, {
      tag: "span",
      variant: "text-sm/medium",
      color: i ? "header-secondary" : "text-muted",
      className: es.messageContent,
      children: null == t ? u ? null : ea.intl.string(ea.t.mE3KJC) : e
    })
  }
  return (0, l.jsxs)(P.aQ.Provider, {
    value: (0, T.Z)(m, d),
    children: [!o && (0, l.jsx)(V.Z, {
      channel: n,
      message: t,
      renderColon: null != g,
      hasUnreads: i
    }), (0, l.jsx)(x.Rny, {
      className: es.messageFocusBlock,
      children: g
    })]
  })
});

function eg(e) {
  let {
    channel: t,
    facepileRef: n,
    firstMessage: a
  } = e, s = (0, O.Q)(t.id), r = (null == a ? true : a.reactions) != null && a.reactions.length > 0;
  return (0, l.jsxs)("div", {
    className: es.footer,
    children: [r || null == a ? null : (0, l.jsx)(ex, {
      firstMessage: a,
      channel: t
    }), null == a ? null : (0, l.jsx)(ej, {
      firstMessage: a,
      channel: t
    }), (0, l.jsx)(ef, {
      channel: t,
      iconSize: 14
    }), (0, l.jsx)("span", {
      className: es.bullet,
      children: "•"
    }), s.length > 0 ? (0, l.jsxs)("div", {
      className: es.typing,
      children: [(0, l.jsx)(ep, {
        channel: t,
        userIds: s,
        facepileRef: n
      }), (0, l.jsx)("div", {
        className: es.dots,
        children: (0, l.jsx)(x.bbz, {
          themed: true,
          dotRadius: 2
        })
      }), (0, l.jsx)(j.ZP, {
        channel: t,
        className: es.typingUsers,
        renderDots: false
      })]
    }) : (0, l.jsx)(eb, {
      channel: t
    })]
  })
}

function ef(e) {
  let {
    channel: t,
    iconSize: n,
    showReadState: a = false
  } = e, {
    messageCountText: s,
    unreadCount: i
  } = (0, G.nP)(t);
  return (0, l.jsxs)("div", {
    className: r()(es.messageCountBox, {
      [es.hasRead]: a && null == i
    }),
    children: [(0, l.jsx)("span", {
      className: es.messageCountIcon,
      children: (0, l.jsx)(x.kBi, {
        size: "custom",
        color: "currentColor",
        width: n,
        height: n
      })
    }), "number" == typeof s ? (0, l.jsx)(C.Z, {
      value: s,
      digitWidth: 9,
      className: es.messageCountText
    }) : (0, l.jsx)("div", {
      className: es.messageCountText,
      children: s
    }), null == i ? null : (0, l.jsxs)(x.Text, {
      className: es.newMessageCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", ea.intl.format(ea.t.z3PEtr, {
        count: i
      }), ")"]
    })]
  })
}

function ex(e) {
  let {
    firstMessage: t,
    channel: n
  } = e, a = (0, h.e7)([B.Z], () => B.Z.getChannel(n.parent_id)), s = (0, G.Bs)(a), {
    disableReactionCreates: r,
    isLurking: i,
    isPendingMember: o
  } = (0, M.Z)(n);
  return null == s || r ? null : (0, l.jsx)(R.le, {
    className: es.updateReactionButton,
    message: t,
    readOnly: n.isArchivedLockedThread(),
    useChatFontScaling: false,
    isLurking: i,
    isPendingMember: o,
    emoji: s,
    hideCount: true,
    count: 0,
    burst_count: 0,
    me: false,
    me_burst: false,
    type: S.O.NORMAL,
    emojiSize: "reaction",
    emojiSizeTooltip: "reaction"
  })
}

function ej(e) {
  var t;
  let {
    firstMessage: n,
    channel: a
  } = e, s = (0, G.IN)(n), {
    disableReactionUpdates: r,
    isLurking: i,
    isPendingMember: o
  } = (0, M.Z)(a);
  return null == s ? null : (0, l.jsx)(R.le, ei({
    className: es.updateReactionButton,
    message: n,
    readOnly: r || a.isArchivedLockedThread(),
    isLurking: i,
    isPendingMember: o,
    useChatFontScaling: false,
    type: s.burst_count >= s.count ? S.O.BURST : S.O.NORMAL,
    emojiSize: "reaction",
    emojiSizeTooltip: "reaction"
  }, s), "".concat(null != (t = s.emoji.id) ? t : 0, ":").concat(s.emoji.name))
}

function eb(e) {
  var t;
  let {
    channel: n
  } = e, {
    sortOrder: a
  } = (0, W.H)(n.parent_id), s = (0, G.xw)(n, a), r = null == (t = n.threadMetadata) ? true : t.createTimestamp, i = null == r ? null : ea.intl.formatToPlainString(ea.t["13euCQ"], {
    timestamp: (0, U.vc)(u()(r), "LLLL")
  });
  return (0, l.jsx)(f.u, {
    text: i,
    children: (0, l.jsx)(x.Text, {
      className: es.__invalid_activityText,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: s
    })
  })
}

function ep(e) {
  let {
    channel: t,
    userIds: n,
    facepileRef: a
  } = e, s = (0, G.iM)(t, n);
  return (0, l.jsx)("div", {
    ref: a,
    children: (0, l.jsx)(v.ZP, {
      className: es.__invalid_facepile,
      showDefaultAvatarsForNullUsers: true,
      guildId: t.guild_id,
      users: s,
      max: 5,
      size: 16,
      hideMoreUsers: true,
      showUserPopout: true
    })
  })
}

function ev(e) {
  let {
    firstMedia: t,
    shouldObscure: n,
    obscureReason: a,
    shouldShowAgeVerification: s
  } = e, i = (0, h.e7)([D.Z], () => D.Z.isFocused()), o = (0, w.d$)(t.src), c = A.QK.useSetting(), u = (0, _.MC)(a), {
    src: d,
    width: m,
    height: g,
    alt: f
  } = t;
  if (s) {
    var j;
    return (0, l.jsx)("div", {
      "aria-label": null != (j = null != u ? u : f) ? j : ea.intl.string(ea.t.hqwnc3),
      className: r()(es.thumbnailContainer, es.obscuredThumbnailPlaceholder),
      style: {
        maxWidth: ec,
        maxHeight: eo,
        height: g,
        width: m
      }
    })
  }
  return d.startsWith("data:") ? (0, l.jsx)(x.Eep, {
    src: d,
    width: m,
    height: g,
    minWidth: ec,
    minHeight: eo,
    alt: null != f && n ? u : f,
    className: es.thumbnailContainer,
    imageClassName: r()(es.thumbnailOverride, {
      [es.obscured]: n
    })
  }) : (0, I.Yi)({
    src: d,
    width: m,
    height: g,
    minWidth: ec,
    minHeight: eo,
    alt: null != f && n ? u : f,
    autoPlay: c,
    animated: o && !n && i,
    srcIsAnimated: t.srcIsAnimated,
    containerClassName: es.thumbnailContainer,
    imageClassName: r()(es.thumbnailOverride, {
      [es.obscured]: n
    }),
    analyticsSource: "ForumPostMediaPreview"
  })
}

function eN(e) {
  let {
    channel: t,
    firstMedia: n
  } = e, [a, s] = (0, _.hL)({
    media: n,
    channel: t
  }), r = (0, Z.JO)(s);
  return (0, l.jsx)(x.Rny, {
    enabled: true,
    children: (0, l.jsxs)("div", {
      className: es.bodyMedia,
      onClick: function(e) {
        e.stopPropagation(), r && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), N.Z.showAgeVerificationGetStartedModal({
          entryPoint: y.cU.FORUM_POST_MEDIA_PREVIEW
        }))
      },
      children: [(0, l.jsx)(ev, {
        firstMedia: n,
        shouldObscure: a,
        obscureReason: s,
        shouldShowAgeVerification: r
      }), a && (0, l.jsx)(K.Z, {
        iconClassname: es.obscuredTag,
        obscureReason: s
      })]
    })
  })
}