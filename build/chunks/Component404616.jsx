/** Chunk was on 87646 **/
/** chunk id: 404616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Lp: () => ea,
  NN: () => ed,
  TJ: () => eo,
  ZP: () => ec,
  au: () => ep,
  kZ: () => ef,
  m9: () => em,
  og: () => eb
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk782425 = require("./782425.js"),
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
  Chunk411405 = require("./411405.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk451478 = require("./451478.js"),
  Chunk55935 = require("./55935.js"),
  Chunk109434 = require("./109434.js"),
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
  Chunk112021 = require("./112021.js"),
  Chunk960324 = require("./960324.js");

function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}
let ea = 72,
  eo = 72,
  ec = Chunk473749.memo(function(e) {
    let {
      threadId: t,
      goToThread: n,
      observePostVisibilityAnalytics: r,
      overrideMedia: a,
      className: c,
      containerWidth: u
    } = e, {
      channel: m,
      isOpen: f,
      messageCount: v,
      firstMessage: x,
      content: O,
      media: j
    } = function(e) {
      let {
        threadId: t,
        overrideMedia: n
      } = e, i = (0, g.e7)([D.Z], () => D.Z.getChannel(t));
      o()(null != i, "the thread should not be null here, a store must have missed an update");
      let s = (0, g.e7)([R.ZP], () => R.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id),
        {
          firstMessage: r
        } = (0, G.cl)(i),
        {
          content: l,
          firstMedia: a
        } = (0, W.mX)({
          firstMessage: r
        }),
        {
          messageCountText: c
        } = (0, W.nP)(i);
      return {
        channel: i,
        isOpen: s,
        messageCount: c,
        firstMessage: r,
        content: l,
        media: null != n ? n : a
      }
    }({
      threadId: t,
      overrideMedia: a
    }), {
      ref: S,
      height: y
    } = (0, b.ZP)(), C = (0, X.xH)(e => e.setCardHeight, d.X);
    s.useEffect(() => {
      null != y && C(t, y)
    }, [y, C, t]), s.useEffect(() => {
      null == r || r(S.current, t)
    }, [S, r, t]);
    let Z = s.useRef(null),
      {
        handleLeftClick: T,
        handleRightClick: P
      } = (0, ee.Z)({
        facepileRef: Z,
        goToThread: n,
        channel: m
      }),
      w = (0, h.JA)(t),
      {
        role: I,
        onFocus: N
      } = w,
      E = function(e, t) {
        if (null == e) return {};
        var n, i, s = function(e, t) {
          if (null == e) return {};
          var n, i, s = {},
            r = Object.keys(e);
          for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (s[n] = e[n]);
          return s
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
        }
        return s
      }(w, ["role", "onFocus"]),
      {
        isFocused: F,
        handleFocus: A,
        handleBlur: _
      } = (0, q.Z)(N);
    return (0, i.jsxs)("div", {
      ref: S,
      "data-item-id": t,
      onClick: T,
      onContextMenu: P,
      className: l()(es.container, c, {
        [es.isOpen]: f
      }),
      children: [(0, i.jsx)(p.P3F, el({
        onClick: T,
        focusProps: {
          ringTarget: S
        },
        onContextMenu: P,
        "aria-label": ei.intl.formatToPlainString(ei.t.pgYN6c, {
          title: m.name,
          count: v
        }),
        className: es.focusTarget,
        onFocus: A,
        onBlur: _
      }, E)), (0, i.jsxs)("div", {
        className: es.left,
        children: [(0, i.jsx)(p.y5t, {
          children: (0, i.jsx)(eu, {
            channel: m,
            firstMessage: x,
            content: O,
            hasMediaAttachment: null != j,
            containerWidth: u
          })
        }), (0, i.jsx)(p.Rny, {
          enabled: !F,
          children: (0, i.jsx)(eg, {
            channel: m,
            firstMessage: x,
            facepileRef: Z
          })
        })]
      }), (null == x ? true : x.blocked) || null == j ? null : (0, i.jsx)(eO, {
        channel: m,
        firstMedia: j
      })]
    })
  });

function eu(e) {
  let {
    channel: t,
    firstMessage: n,
    content: s,
    hasMediaAttachment: r,
    containerWidth: a
  } = e, {
    isNew: o,
    hasUnreads: c
  } = (0, W.J$)(t), u = ed(t), {
    postTitleRef: d,
    isNewBadgeOverflow: h
  } = (0, $.x)(o, 24, a);
  return (0, i.jsxs)("div", {
    className: es.body,
    children: [(0, i.jsx)(Y.ZP, {
      channel: t
    }), (0, i.jsx)("div", {
      className: l()(es.header, {
        [es.withNewBadgeOverflow]: h
      }),
      children: (0, i.jsxs)("div", {
        className: es.headerText,
        children: [(0, i.jsx)(p.Heading, {
          variant: "heading-lg/semibold",
          color: c ? "text-strong" : "text-muted",
          lineClamp: 2,
          className: es.postTitleText,
          children: (0, i.jsxs)("span", {
            ref: d,
            children: [u, o && (0, i.jsx)("span", {
              className: es.newBadgeWrapper,
              children: (0, i.jsx)(p.IGR, {
                className: es.newBadge,
                color: m.Z.unsafe_rawColors.BRAND_260.css,
                text: ei.intl.string(ei.t.y2b7CA)
              })
            })]
          })
        }), o && h && (0, i.jsx)(p.IGR, {
          className: es.newBadge,
          color: m.Z.unsafe_rawColors.BRAND_260.css,
          text: ei.intl.string(ei.t.y2b7CA)
        })]
      })
    }), (0, i.jsx)("div", {
      className: es.message,
      children: (0, i.jsx)(eh, {
        channel: t,
        message: n,
        content: s,
        hasMediaAttachment: r,
        hasUnreads: c
      })
    })]
  })
}

function ed(e) {
  let t = (0, g.e7)([K.Z], () => K.Z.getHasSearchResults(e.parent_id)),
    n = (0, g.e7)([K.Z], () => K.Z.getSearchQuery(e.parent_id)),
    i = s.useMemo(() => (0, x.nC)(t && null != n ? n : "", true), [t, n]);
  return s.useMemo(() => (0, N.ZP)({
    content: e.name,
    embeds: []
  }, {
    postProcessor: i
  }).content, [e.name, i])
}
let eh = Chunk473749.memo(function(e) {
  let {
    message: t,
    channel: n,
    content: s,
    hasMediaAttachment: r,
    hasUnreads: a
  } = e, {
    isBlocked: o,
    isIgnored: c
  } = (0, g.cj)([U.Z], () => ({
    isBlocked: null != t && U.Z.isBlockedForMessage(t),
    isIgnored: null != t && U.Z.isIgnoredForMessage(t)
  })), u = (0, g.e7)([V.Z], () => V.Z.isLoading(n.id)), d = (0, g.e7)([L.Z], () => L.Z.can(et.Plq.MANAGE_MESSAGES, n)), h = k.cC.useSetting(), m = null;
  if (o) m = (0, i.jsx)(p.Text, {
    className: es.blockedMessage,
    variant: "text-sm/medium",
    color: "text-muted",
    children: ei.intl.string(ei.t.Lkp2fB)
  });
  else if (c) m = (0, i.jsx)(p.Text, {
    className: es.blockedMessage,
    variant: "text-sm/medium",
    color: "text-muted",
    children: ei.intl.string(ei.t.yWK7ZM)
  });
  else {
    let {
      contentPlaceholder: e,
      renderedContent: n
    } = null == t ? {
      contentPlaceholder: null,
      renderedContent: null
    } : (0, _.f)(t, s, o, c, l()(es.messageContent, er.inlineFormat, er.__invalid_smallFontSize), {
      leadingIconClass: es.messageContentLeadingIcon,
      trailingIconClass: es.messageContentTrailingIcon,
      iconSize: en.WW
    });
    m = null != n ? (0, i.jsx)(p.Text, {
      variant: "text-sm/semibold",
      color: a ? "text-default" : "text-muted",
      children: n
    }) : r ? null : (0, i.jsx)(p.Text, {
      tag: "span",
      variant: "text-sm/medium",
      color: a ? "text-default" : "text-muted",
      className: es.messageContent,
      children: null == t ? u ? null : ei.intl.string(ei.t.mE3KJN) : e
    })
  }
  return (0, i.jsxs)(M.aQ.Provider, {
    value: (0, I.Z)(h, d),
    children: [!o && (0, i.jsx)(J.Z, {
      channel: n,
      message: t,
      renderColon: null != m,
      hasUnreads: a
    }), (0, i.jsx)(p.Rny, {
      className: es.messageFocusBlock,
      children: m
    })]
  })
});

function eg(e) {
  let {
    channel: t,
    facepileRef: n,
    firstMessage: s
  } = e, r = (0, C.Q)(t.id), l = (null == s ? true : s.reactions) != null && s.reactions.length > 0;
  return (0, i.jsxs)("div", {
    className: es.footer,
    children: [l || null == s ? null : (0, i.jsx)(ef, {
      firstMessage: s,
      channel: t
    }), null == s ? null : (0, i.jsx)(ep, {
      firstMessage: s,
      channel: t
    }), (0, i.jsx)(em, {
      channel: t,
      iconSize: 14
    }), (0, i.jsx)("span", {
      className: es.bullet,
      children: "•"
    }), r.length > 0 ? (0, i.jsxs)("div", {
      className: es.typing,
      children: [(0, i.jsx)(eb, {
        channel: t,
        userIds: r,
        facepileRef: n
      }), (0, i.jsx)("div", {
        className: es.dots,
        children: (0, i.jsx)(p.bbz, {
          themed: true,
          dotRadius: 2
        })
      }), (0, i.jsx)(v.ZP, {
        channel: t,
        className: es.typingUsers,
        renderDots: false
      })]
    }) : (0, i.jsx)(ev, {
      channel: t
    })]
  })
}

function em(e) {
  let {
    channel: t,
    iconSize: n,
    showReadState: s = false
  } = e, {
    messageCountText: r,
    unreadCount: a
  } = (0, W.nP)(t);
  return (0, i.jsxs)("div", {
    className: l()(es.messageCountBox, {
      [es.hasRead]: s && null == a
    }),
    children: [(0, i.jsx)("span", {
      className: es.messageCountIcon,
      children: (0, i.jsx)(p.kBi, {
        size: "custom",
        color: "currentColor",
        width: n,
        height: n
      })
    }), "number" == typeof r ? (0, i.jsx)(y.Z, {
      value: r,
      digitWidth: 9,
      className: es.messageCountText
    }) : (0, i.jsx)("div", {
      className: es.messageCountText,
      children: r
    }), null == a ? null : (0, i.jsxs)(p.Text, {
      className: es.newMessageCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", ei.intl.format(ei.t.z3PEth, {
        count: a
      }), ")"]
    })]
  })
}

function ef(e) {
  let {
    firstMessage: t,
    channel: n
  } = e, s = (0, g.e7)([D.Z], () => D.Z.getChannel(n.parent_id)), r = (0, W.Bs)(s), {
    disableReactionCreates: l,
    isLurking: a,
    isPendingMember: o
  } = (0, E.Z)(n);
  return null == r || l ? null : (0, i.jsx)(A.le, {
    className: es.updateReactionButton,
    message: t,
    readOnly: n.isArchivedLockedThread(),
    useChatFontScaling: false,
    isLurking: a,
    isPendingMember: o,
    emoji: r,
    hideCount: true,
    count: 0,
    burst_count: 0,
    me: false,
    me_burst: false,
    type: w.O.NORMAL,
    emojiSize: "reaction",
    emojiSizeTooltip: "reaction"
  })
}

function ep(e) {
  var t;
  let {
    firstMessage: n,
    channel: s
  } = e, r = (0, W.IN)(n), {
    disableReactionUpdates: l,
    isLurking: a,
    isPendingMember: o
  } = (0, E.Z)(s);
  return null == r ? null : (0, i.jsx)(A.le, el({
    className: es.updateReactionButton,
    message: n,
    readOnly: l || s.isArchivedLockedThread(),
    isLurking: a,
    isPendingMember: o,
    useChatFontScaling: false,
    type: r.burst_count >= r.count ? w.O.BURST : w.O.NORMAL,
    emojiSize: "reaction",
    emojiSizeTooltip: "reaction"
  }, r), "".concat(null != (t = r.emoji.id) ? t : 0, ":").concat(r.emoji.name))
}

function ev(e) {
  var t;
  let {
    channel: n
  } = e, {
    sortOrder: s
  } = (0, z.H)(n.parent_id), r = (0, W.xw)(n, s), l = null == (t = n.threadMetadata) ? true : t.createTimestamp, a = null == l ? null : ei.intl.formatToPlainString(ei.t["13euCd"], {
    timestamp: (0, B.vc)(u()(l), "LLLL")
  });
  return (0, i.jsx)(f.u, {
    text: a,
    children: (0, i.jsx)(p.Text, {
      className: es.__invalid_activityText,
      variant: "text-sm/normal",
      color: "text-default",
      children: r
    })
  })
}

function eb(e) {
  let {
    channel: t,
    userIds: n,
    facepileRef: s
  } = e, r = (0, W.iM)(t, n);
  return (0, i.jsx)("div", {
    ref: s,
    children: (0, i.jsx)(O.ZP, {
      className: es.__invalid_facepile,
      showDefaultAvatarsForNullUsers: true,
      guildId: t.guild_id,
      users: r,
      max: 5,
      size: 16,
      hideMoreUsers: true,
      showUserPopout: true
    })
  })
}

function ex(e) {
  let {
    firstMedia: t,
    shouldObscure: n,
    obscureReason: s,
    shouldShowAgeVerification: r
  } = e, a = (0, g.e7)([H.Z], () => H.Z.isFocused()), o = (0, T.d$)(t.src), c = k.QK.useSetting(), u = (0, P.MC)(s), {
    src: d,
    width: h,
    height: m,
    alt: f
  } = t;
  if (r) {
    var v;
    return (0, i.jsx)("div", {
      "aria-label": null != (v = null != u ? u : f) ? v : ei.intl.string(ei.t.hqwnc2),
      className: l()(es.thumbnailContainer, es.obscuredThumbnailPlaceholder),
      style: {
        maxWidth: eo,
        maxHeight: ea,
        height: m,
        width: h
      }
    })
  }
  return d.startsWith("data:") ? (0, i.jsx)(p.Eep, {
    src: d,
    width: h,
    height: m,
    minWidth: eo,
    minHeight: ea,
    alt: null != f && n ? u : f,
    className: es.thumbnailContainer,
    imageClassName: l()(es.thumbnailOverride, {
      [es.obscured]: n
    })
  }) : (0, F.Yi)({
    src: d,
    width: h,
    height: m,
    minWidth: eo,
    minHeight: ea,
    alt: null != f && n ? u : f,
    autoPlay: c,
    animated: o && !n && a,
    srcIsAnimated: t.srcIsAnimated,
    containerClassName: es.thumbnailContainer,
    imageClassName: l()(es.thumbnailOverride, {
      [es.obscured]: n
    }),
    analyticsSource: "ForumPostMediaPreview"
  })
}

function eO(e) {
  let {
    channel: t,
    firstMedia: n
  } = e, [s, r] = (0, P.hL)({
    media: n,
    channel: t
  }), l = (0, Z.JO)(r);
  return (0, i.jsx)(p.Rny, {
    enabled: true,
    children: (0, i.jsxs)("div", {
      className: es.bodyMedia,
      onClick: function(e) {
        e.stopPropagation(), l && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j.Z.showAgeVerificationGetStartedModal({
          entryPoint: S.cU.FORUM_POST_MEDIA_PREVIEW
        }))
      },
      children: [(0, i.jsx)(ex, {
        firstMedia: n,
        shouldObscure: s,
        obscureReason: r,
        shouldShowAgeVerification: l
      }), s && (0, i.jsx)(Q.Z, {
        iconClassname: es.obscuredTag,
        obscureReason: r
      })]
    })
  })
}