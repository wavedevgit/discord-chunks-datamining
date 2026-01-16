/** Chunk was on 49131 **/
/** chunk id: 543015, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => eo
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
  Chunk782425 = require("./782425.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk738619 = require("./738619.jsx"),
  Chunk393238 = require("./393238.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk446489 = require("./446489.jsx"),
  Chunk824578 = require("./824578.js"),
  Chunk247206 = require("./247206.js"),
  Chunk109434 = require("./109434.js"),
  Chunk456269 = require("./456269.js"),
  Chunk109590 = require("./109590.js"),
  Chunk368844 = require("./368844.js"),
  Chunk660189 = require("./660189.js"),
  Chunk73315 = require("./73315.jsx"),
  Chunk470623 = require("./470623.jsx"),
  Chunk858543 = require("./858543.jsx"),
  Chunk265641 = require("./265641.js"),
  Chunk883728 = require("./883728.jsx"),
  Chunk39154 = require("./39154.js"),
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
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk55935 = require("./55935.js"),
  Chunk216572 = require("./216572.js"),
  Chunk724739 = require("./724739.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975068 = require("./975068.js"),
  Chunk112021 = require("./112021.js"),
  Chunk960324 = require("./960324.js");
let eo = Chunk473749.memo(function(e) {
  let {
    threadId: t,
    goToThread: n,
    observePostVisibilityAnalytics: i,
    overrideMedia: s,
    className: c
  } = e, {
    channel: d,
    isOpen: f,
    messageCount: x,
    content: p,
    firstMessage: j,
    media: v
  } = function(e) {
    let {
      threadId: t,
      overrideMedia: n
    } = e, r = (0, h.e7)([q.Z], () => q.Z.getChannel(t));
    o()(null != r, "the thread should not be null here, a store must have missed an update");
    let i = (0, h.e7)([W.ZP], () => W.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
      {
        firstMessage: l
      } = (0, w.cl)(r),
      s = function(e) {
        let {
          firstMessage: t,
          formatInline: n = true,
          noStyleAndInteraction: r = true
        } = e, i = a.useMemo(() => null != t ? (0, Z.Z)(t, null == t ? true : t.messageSnapshots[0]) : null, [t]), {
          hasSpoilerEmbeds: l,
          content: s
        } = a.useMemo(() => (null == i ? true : i.content) != null && "" !== i.content ? (0, D.ZP)(i, {
          formatInline: n,
          noStyleAndInteraction: r,
          allowHeading: true,
          allowList: true
        }) : {
          hasSpoilerEmbeds: false,
          content: null
        }, [n, i, r]), o = (0, O.eL)(t, l), c = (0, O.vg)(t, l);
        return null == t ? null : {
          hasSpoilerEmbeds: l,
          content: s,
          firstMedia: o,
          firstMediaIsEmbed: c
        }
      }({
        firstMessage: l
      }),
      c = null == s ? true : s.content,
      d = null == s ? true : s.firstMedia,
      {
        messageCountText: u
      } = (0, N.nP)(r);
    return {
      channel: r,
      isOpen: i,
      messageCount: u,
      firstMessage: l,
      content: c,
      media: null != n ? n : d
    }
  }({
    threadId: t,
    overrideMedia: s
  });
  (0, ee.KK)(j);
  let C = (0, h.e7)([J.default, X.Z], () => {
      var e, t, n, r, a, i;
      let l = J.default.getUser(null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport) ? true : e.reported_user_id);
      if (null != l) return l;
      if ((null == j || null == (n = j.messageReference) ? true : n.channel_id) != null && (null == j || null == (r = j.messageReference) ? true : r.message_id) != null) {
        let e = X.Z.getMessage(null == j || null == (a = j.messageReference) ? true : a.channel_id, null == j || null == (i = j.messageReference) ? true : i.message_id);
        if (null != e) return e.author
      }
      return null
    }),
    {
      ref: y,
      height: T
    } = (0, b.ZP)(),
    S = (0, E.xH)(e => e.setCardHeight, u.X);
  a.useEffect(() => {
    null != T && S(t, T)
  }, [T, S, t]), a.useEffect(() => {
    null == i || i(y.current, t)
  }, [y, i, t]);
  let P = a.useRef(null),
    {
      handleLeftClick: I,
      handleRightClick: _
    } = (0, M.Z)({
      facepileRef: P,
      goToThread: n,
      channel: d
    }),
    k = (0, m.JA)(t),
    {
      role: A,
      onFocus: L
    } = k,
    F = function(e, t) {
      if (null == e) return {};
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(k, ["role", "onFocus"]),
    {
      isFocused: H,
      handleFocus: z,
      handleBlur: B
    } = (0, R.Z)(L);
  return (0, r.jsxs)("div", {
    ref: y,
    "data-item-id": t,
    onClick: I,
    onContextMenu: _,
    className: l()(el.container, ei.container, c, {
      [el.isOpen]: f
    }),
    children: [(0, r.jsx)(g.P3F, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      onClick: I,
      focusProps: {
        ringTarget: y
      },
      onContextMenu: _,
      "aria-label": ea.intl.formatToPlainString(ea.t.pgYN6c, {
        title: d.name,
        count: x
      }),
      className: el.focusTarget,
      onFocus: z,
      onBlur: B
    }, F)), (0, r.jsxs)("div", {
      className: el.left,
      children: [(0, r.jsx)(g.y5t, {
        children: (0, r.jsxs)("div", {
          className: ei.contentAndMedia,
          children: [(0, r.jsx)(ec, {
            channel: d,
            firstMessage: j,
            content: p,
            hasMediaAttachment: null != v,
            originalAuthor: C
          }), (null == j ? true : j.blocked) || null == v ? null : (0, r.jsx)(eb, {
            channel: d,
            firstMedia: v
          })]
        })
      }), (0, r.jsx)(g.Rny, {
        enabled: !H,
        children: (0, r.jsx)(eu, {
          channel: d,
          firstMessage: j,
          facepileRef: P
        })
      })]
    })]
  })
});

function ec(e) {
  let {
    channel: t,
    firstMessage: n,
    content: a,
    hasMediaAttachment: i,
    originalAuthor: s
  } = e, {
    hasUnreads: o
  } = (0, N.J$)(t);
  return (0, r.jsxs)("div", {
    className: l()(ei.body, el.body),
    children: [(0, r.jsx)(_.ZP, {
      channel: t
    }), (0, r.jsx)("div", {
      className: (el.message, ei.message),
      children: (0, r.jsx)(ed, {
        channel: t,
        message: n,
        content: a,
        hasMediaAttachment: i,
        hasUnreads: o,
        originalAuthor: s
      })
    })]
  })
}
let ed = Chunk473749.memo(function(e) {
  let {
    message: t,
    channel: n,
    content: a,
    hasMediaAttachment: i,
    hasUnreads: s,
    originalAuthor: o
  } = e, c = (0, h.e7)([P.Z], () => P.Z.isLoading(n.id)), d = (0, h.e7)([K.Z], () => K.Z.can(en.Plq.MANAGE_MESSAGES, n)), u = V.cC.useSetting(), m = (0, h.e7)([Y.Z], () => Y.Z.getGuildId()), {
    contentPlaceholder: f,
    renderedContent: x
  } = null == t ? {
    contentPlaceholder: null,
    renderedContent: null
  } : (0, U.f)(t, a, false, false, l()(el.messageContent, ei.messageContent, es.inlineFormat, es.__invalid_smallFontSize), {
    leadingIconClass: el.messageContentLeadingIcon,
    trailingIconClass: el.messageContentTrailingIcon,
    iconSize: er.WW
  }), b = null != x ? (0, r.jsx)(g.Text, {
    variant: "text-md/normal",
    children: x
  }) : i ? null : (0, r.jsx)(g.Text, {
    tag: "span",
    variant: "text-sm/medium",
    color: s ? "text-default" : "text-muted",
    className: l()(el.messageContent, ei.messageContent),
    "aria-label": "",
    children: null == t ? c ? null : ea.intl.string(ea.t.mE3KJN) : f
  });
  return (0, r.jsxs)(G.aQ.Provider, {
    value: (0, F.Z)(u, d),
    children: [null != o ? (0, r.jsx)(g.qEK, {
      size: g.EFr.SIZE_40,
      src: o.getAvatarURL(m, (0, g.dcp)(g.EFr.SIZE_40)),
      "aria-label": "",
      className: ei.originalMessageAuthorAvatar
    }) : null, (0, r.jsxs)("div", {
      className: ei.originalMessageAuthorAndContent,
      children: [(0, r.jsx)(et.Z, {
        channel: n,
        originalAuthor: o,
        message: t
      }), (0, r.jsx)(g.Rny, {
        className: el.messageFocusBlock,
        children: b
      })]
    })]
  })
});

function eu(e) {
  let {
    channel: t,
    facepileRef: n,
    firstMessage: a
  } = e, {
    isNew: i
  } = (0, N.J$)(t), l = (0, y.Q)(t.id), s = (null == a ? true : a.reactions) != null && a.reactions.length > 0;
  return (0, r.jsxs)("div", {
    className: ei.footer,
    children: [(0, r.jsxs)("div", {
      className: ei.footerChannelTitle,
      children: [(0, r.jsx)(g.U65, {
        size: "custom",
        width: 14,
        height: 14
      }), (0, r.jsx)(g.Text, {
        variant: "text-sm/medium",
        children: t.name
      }), i ? (0, r.jsx)(g.IGR, {
        color: g.TVs.unsafe_rawColors.BRAND_260.css,
        text: ea.intl.string(ea.t.y2b7CA),
        className: ei.newBadge
      }) : null]
    }), (0, r.jsxs)("div", {
      className: ei.footerMessageSummary,
      children: [s || null == a ? null : (0, r.jsx)(eh, {
        firstMessage: a,
        channel: t
      }), (0, r.jsx)(em, {
        channel: t,
        iconSize: 14
      }), (0, r.jsx)("span", {
        className: el.bullet,
        children: "•"
      }), l.length > 0 ? (0, r.jsxs)("div", {
        className: el.typing,
        children: [(0, r.jsx)(eg, {
          channel: t,
          userIds: l,
          facepileRef: n
        }), (0, r.jsx)("div", {
          className: el.dots,
          children: (0, r.jsx)(g.bbz, {
            themed: true,
            dotRadius: 2
          })
        }), (0, r.jsx)(x.ZP, {
          channel: t,
          className: el.typingUsers,
          renderDots: false
        })]
      }) : (0, r.jsx)(ef, {
        channel: t
      })]
    })]
  })
}

function em(e) {
  let {
    channel: t,
    iconSize: n,
    showReadState: a = false
  } = e, {
    messageCountText: i,
    unreadCount: s
  } = (0, N.nP)(t);
  return (0, r.jsxs)("div", {
    className: l()(el.messageCountBox, {
      [el.hasRead]: a && null == s
    }),
    children: [(0, r.jsx)("span", {
      className: el.messageCountIcon,
      children: (0, r.jsx)(g.kBi, {
        size: "custom",
        color: "currentColor",
        width: n,
        height: n
      })
    }), "number" == typeof i ? (0, r.jsx)(C.Z, {
      value: i,
      digitWidth: 9,
      className: el.messageCountText
    }) : (0, r.jsx)("div", {
      className: el.messageCountText,
      children: i
    }), null == s ? null : (0, r.jsxs)(g.Text, {
      className: el.newMessageCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", ea.intl.format(ea.t.z3PEth, {
        count: s
      }), ")"]
    })]
  })
}

function eh(e) {
  let {
    firstMessage: t,
    channel: n
  } = e, a = (0, h.e7)([q.Z], () => q.Z.getChannel(n.parent_id)), i = (0, N.Bs)(a), {
    disableReactionCreates: l,
    isLurking: s,
    isPendingMember: o
  } = (0, H.Z)(n);
  return null == i || l ? null : (0, r.jsx)(B.le, {
    className: el.updateReactionButton,
    message: t,
    readOnly: n.isArchivedLockedThread(),
    useChatFontScaling: false,
    isLurking: s,
    isPendingMember: o,
    emoji: i,
    hideCount: true,
    count: 0,
    burst_count: 0,
    me: false,
    me_burst: false,
    type: L.O.NORMAL,
    emojiSize: "reaction",
    emojiSizeTooltip: "reaction"
  })
}

function ef(e) {
  var t;
  let {
    channel: n
  } = e, {
    sortOrder: a
  } = (0, S.H)(n.parent_id), i = (0, N.xw)(n, a), l = null == (t = n.threadMetadata) ? true : t.createTimestamp, s = null == l ? null : ea.intl.formatToPlainString(ea.t["13euCd"], {
    timestamp: (0, $.vc)(d()(l), "LLLL")
  });
  return (0, r.jsx)(f.u, {
    text: s,
    children: (0, r.jsx)(g.Text, {
      className: el.__invalid_activityText,
      variant: "text-sm/normal",
      color: "text-default",
      children: i
    })
  })
}

function eg(e) {
  let {
    channel: t,
    userIds: n,
    facepileRef: a
  } = e, i = (0, N.iM)(t, n);
  return (0, r.jsx)("div", {
    ref: a,
    children: (0, r.jsx)(p.ZP, {
      className: el.__invalid_facepile,
      showDefaultAvatarsForNullUsers: true,
      guildId: t.guild_id,
      users: i,
      max: 5,
      size: 16,
      hideMoreUsers: true,
      showUserPopout: true
    })
  })
}

function ex(e) {
  let t, n, {
      firstMedia: a,
      shouldObscure: i,
      obscureReason: s,
      shouldShowAgeVerification: o
    } = e,
    c = (0, h.e7)([Q.Z], () => Q.Z.isFocused()),
    d = (0, k.d$)(a.src),
    u = V.QK.useSetting(),
    m = (0, A.MC)(s),
    {
      src: f,
      width: x,
      height: b,
      alt: p
    } = a;
  if (b > x ? n = 72 : t = 72, o) {
    var j;
    return (0, r.jsx)("div", {
      "aria-label": null != (j = null != m ? m : p) ? j : ea.intl.string(ea.t.hqwnc2),
      className: l()(el.thumbnailContainer, el.obscuredThumbnailPlaceholder),
      style: {
        maxWidth: t,
        maxHeight: n,
        height: b,
        width: x
      }
    })
  }
  return f.startsWith("data:") ? (0, r.jsx)(g.Eep, {
    src: f,
    maxHeight: t,
    maxWidth: n,
    width: x,
    height: b,
    alt: null != p && i ? m : p,
    className: el.thumbnailContainer,
    imageClassName: l()({
      [el.obscured]: i,
      [el.thumbnailOverride]: true
    })
  }) : (0, z.Yi)({
    src: f,
    maxHeight: t,
    maxWidth: n,
    width: x,
    height: b,
    alt: null != p && i ? m : p,
    autoPlay: u,
    animated: d && !i && c,
    srcIsAnimated: a.srcIsAnimated,
    containerClassName: el.thumbnailContainer,
    imageClassName: l()({
      [el.obscured]: i
    }),
    analyticsSource: "ForumPostMediaPreview"
  })
}

function eb(e) {
  let {
    channel: t,
    firstMedia: n
  } = e, [a, i] = (0, A.hL)({
    media: n,
    channel: t
  }), s = (0, T.JO)(i);
  return (0, r.jsx)(g.Rny, {
    enabled: true,
    children: (0, r.jsxs)("div", {
      className: l()(el.bodyMedia, ei.bodyMedia),
      onClick: function(e) {
        e.stopPropagation(), s && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j.Z.showAgeVerificationGetStartedModal({
          entryPoint: v.cU.FORUM_POST_MEDIA_PREVIEW
        }))
      },
      children: [(0, r.jsx)(ex, {
        firstMedia: n,
        shouldObscure: a,
        obscureReason: i,
        shouldShowAgeVerification: s
      }), a && (0, r.jsx)(I.Z, {
        iconClassname: el.obscuredTag,
        obscureReason: i
      })]
    })
  })
}