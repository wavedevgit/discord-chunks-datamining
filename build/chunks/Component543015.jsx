/** Chunk was on 193 **/
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
  Chunk55160 = require("./55160.js"),
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
    isOpen: h,
    messageCount: x,
    content: p,
    firstMessage: j,
    media: v
  } = function(e) {
    let {
      threadId: t,
      overrideMedia: n
    } = e, a = (0, f.e7)([q.Z], () => q.Z.getChannel(t));
    o()(null != a, "the thread should not be null here, a store must have missed an update");
    let i = (0, f.e7)([W.ZP], () => W.ZP.getCurrentSidebarChannelId(a.parent_id) === a.id),
      {
        firstMessage: l
      } = (0, N.cl)(a),
      s = function(e) {
        let {
          firstMessage: t,
          formatInline: n = true,
          noStyleAndInteraction: a = true
        } = e, i = r.useMemo(() => null != t ? (0, Z.Z)(t, null == t ? true : t.messageSnapshots[0]) : null, [t]), {
          hasSpoilerEmbeds: l,
          content: s
        } = r.useMemo(() => (null == i ? true : i.content) != null && "" !== i.content ? (0, D.ZP)(i, {
          formatInline: n,
          noStyleAndInteraction: a,
          allowHeading: true,
          allowList: true
        }) : {
          hasSpoilerEmbeds: false,
          content: null
        }, [n, i, a]), o = (0, O.eL)(t, l), c = (0, O.vg)(t, l);
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
      } = (0, S.nP)(a);
    return {
      channel: a,
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
  let C = (0, f.e7)([J.default, X.Z], () => {
      var e, t, n, a, r, i;
      let l = J.default.getUser(null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport) ? true : e.reported_user_id);
      if (null != l) return l;
      if ((null == j || null == (n = j.messageReference) ? true : n.channel_id) != null && (null == j || null == (a = j.messageReference) ? true : a.message_id) != null) {
        let e = X.Z.getMessage(null == j || null == (r = j.messageReference) ? true : r.channel_id, null == j || null == (i = j.messageReference) ? true : i.message_id);
        if (null != e) return e.author
      }
      return null
    }),
    {
      ref: y,
      height: T
    } = (0, b.ZP)(),
    w = (0, E.xH)(e => e.setCardHeight, u.X);
  r.useEffect(() => {
    null != T && w(t, T)
  }, [T, w, t]), r.useEffect(() => {
    null == i || i(y.current, t)
  }, [y, i, t]);
  let I = r.useRef(null),
    {
      handleLeftClick: P,
      handleRightClick: _
    } = (0, M.Z)({
      facepileRef: I,
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
      var n, a, r = function(e, t) {
        if (null == e) return {};
        var n, a, r = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(k, ["role", "onFocus"]),
    {
      isFocused: H,
      handleFocus: z,
      handleBlur: B
    } = (0, R.Z)(L);
  return (0, a.jsxs)("div", {
    ref: y,
    "data-item-id": t,
    onClick: P,
    onContextMenu: _,
    className: l()(el.container, ei.container, c, {
      [el.isOpen]: h
    }),
    children: [(0, a.jsx)(g.P3F, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = n[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = a
        })
      }
      return e
    }({
      onClick: P,
      focusProps: {
        ringTarget: y
      },
      onContextMenu: _,
      "aria-label": er.intl.formatToPlainString(er.t.pgYN6c, {
        title: d.name,
        count: x
      }),
      className: el.focusTarget,
      onFocus: z,
      onBlur: B
    }, F)), (0, a.jsxs)("div", {
      className: el.left,
      children: [(0, a.jsx)(g.y5t, {
        children: (0, a.jsxs)("div", {
          className: ei.contentAndMedia,
          children: [(0, a.jsx)(ec, {
            channel: d,
            firstMessage: j,
            content: p,
            hasMediaAttachment: null != v,
            originalAuthor: C
          }), (null == j ? true : j.blocked) || null == v ? null : (0, a.jsx)(eb, {
            channel: d,
            firstMedia: v
          })]
        })
      }), (0, a.jsx)(g.Rny, {
        enabled: !H,
        children: (0, a.jsx)(eu, {
          channel: d,
          firstMessage: j,
          facepileRef: I
        })
      })]
    })]
  })
});

function ec(e) {
  let {
    channel: t,
    firstMessage: n,
    content: r,
    hasMediaAttachment: i,
    originalAuthor: s
  } = e, {
    hasUnreads: o
  } = (0, S.J$)(t);
  return (0, a.jsxs)("div", {
    className: l()(ei.body, el.body),
    children: [(0, a.jsx)(_.ZP, {
      channel: t
    }), (0, a.jsx)("div", {
      className: (el.message, ei.message),
      children: (0, a.jsx)(ed, {
        channel: t,
        message: n,
        content: r,
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
    content: r,
    hasMediaAttachment: i,
    hasUnreads: s,
    originalAuthor: o
  } = e, c = (0, f.e7)([I.Z], () => I.Z.isLoading(n.id)), d = (0, f.e7)([K.Z], () => K.Z.can(en.Plq.MANAGE_MESSAGES, n)), u = V.cC.useSetting(), m = (0, f.e7)([Y.Z], () => Y.Z.getGuildId()), {
    contentPlaceholder: h,
    renderedContent: x
  } = null == t ? {
    contentPlaceholder: null,
    renderedContent: null
  } : (0, U.f)(t, r, false, false, l()(el.messageContent, ei.messageContent, es.inlineFormat, es.__invalid_smallFontSize), {
    leadingIconClass: el.messageContentLeadingIcon,
    trailingIconClass: el.messageContentTrailingIcon,
    iconSize: ea.WW
  }), b = null != x ? (0, a.jsx)(g.Text, {
    variant: "text-md/normal",
    children: x
  }) : i ? null : (0, a.jsx)(g.Text, {
    tag: "span",
    variant: "text-sm/medium",
    color: s ? "text-default" : "text-muted",
    className: l()(el.messageContent, ei.messageContent),
    "aria-label": "",
    children: null == t ? c ? null : er.intl.string(er.t.mE3KJN) : h
  });
  return (0, a.jsxs)(G.aQ.Provider, {
    value: (0, F.Z)(u, d),
    children: [null != o ? (0, a.jsx)(g.qEK, {
      size: g.EFr.SIZE_40,
      src: o.getAvatarURL(m, (0, g.dcp)(g.EFr.SIZE_40)),
      "aria-label": "",
      className: ei.originalMessageAuthorAvatar
    }) : null, (0, a.jsxs)("div", {
      className: ei.originalMessageAuthorAndContent,
      children: [(0, a.jsx)(et.Z, {
        channel: n,
        originalAuthor: o,
        message: t
      }), (0, a.jsx)(g.Rny, {
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
    firstMessage: r
  } = e, {
    isNew: i
  } = (0, S.J$)(t), l = (0, y.Q)(t.id), s = (null == r ? true : r.reactions) != null && r.reactions.length > 0;
  return (0, a.jsxs)("div", {
    className: ei.footer,
    children: [(0, a.jsxs)("div", {
      className: ei.footerChannelTitle,
      children: [(0, a.jsx)(g.U65, {
        size: "custom",
        width: 14,
        height: 14
      }), (0, a.jsx)(g.Text, {
        variant: "text-sm/medium",
        children: t.name
      }), i ? (0, a.jsx)(g.IGR, {
        color: g.TVs.unsafe_rawColors.BRAND_260.css,
        text: er.intl.string(er.t.y2b7CA),
        className: ei.newBadge
      }) : null]
    }), (0, a.jsxs)("div", {
      className: ei.footerMessageSummary,
      children: [s || null == r ? null : (0, a.jsx)(ef, {
        firstMessage: r,
        channel: t
      }), (0, a.jsx)(em, {
        channel: t,
        iconSize: 14
      }), (0, a.jsx)("span", {
        className: el.bullet,
        children: "•"
      }), l.length > 0 ? (0, a.jsxs)("div", {
        className: el.typing,
        children: [(0, a.jsx)(eg, {
          channel: t,
          userIds: l,
          facepileRef: n
        }), (0, a.jsx)("div", {
          className: el.dots,
          children: (0, a.jsx)(g.bbz, {
            themed: true,
            dotRadius: 2
          })
        }), (0, a.jsx)(x.ZP, {
          channel: t,
          className: el.typingUsers,
          renderDots: false
        })]
      }) : (0, a.jsx)(eh, {
        channel: t
      })]
    })]
  })
}

function em(e) {
  let {
    channel: t,
    iconSize: n,
    showReadState: r = false
  } = e, {
    messageCountText: i,
    unreadCount: s
  } = (0, S.nP)(t);
  return (0, a.jsxs)("div", {
    className: l()(el.messageCountBox, {
      [el.hasRead]: r && null == s
    }),
    children: [(0, a.jsx)("span", {
      className: el.messageCountIcon,
      children: (0, a.jsx)(g.kBi, {
        size: "custom",
        color: "currentColor",
        width: n,
        height: n
      })
    }), "number" == typeof i ? (0, a.jsx)(C.Z, {
      value: i,
      digitWidth: 9,
      className: el.messageCountText
    }) : (0, a.jsx)("div", {
      className: el.messageCountText,
      children: i
    }), null == s ? null : (0, a.jsxs)(g.Text, {
      className: el.newMessageCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", er.intl.format(er.t.z3PEth, {
        count: s
      }), ")"]
    })]
  })
}

function ef(e) {
  let {
    firstMessage: t,
    channel: n
  } = e, r = (0, f.e7)([q.Z], () => q.Z.getChannel(n.parent_id)), i = (0, S.Bs)(r), {
    disableReactionCreates: l,
    isLurking: s,
    isPendingMember: o
  } = (0, H.Z)(n);
  return null == i || l ? null : (0, a.jsx)(B.le, {
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

function eh(e) {
  var t;
  let {
    channel: n
  } = e, {
    sortOrder: r
  } = (0, w.H)(n.parent_id), i = (0, S.xw)(n, r), l = null == (t = n.threadMetadata) ? true : t.createTimestamp, s = null == l ? null : er.intl.formatToPlainString(er.t["13euCd"], {
    timestamp: (0, $.vc)(d()(l), "LLLL")
  });
  return (0, a.jsx)(h.u, {
    text: s,
    children: (0, a.jsx)(g.Text, {
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
    facepileRef: r
  } = e, i = (0, S.iM)(t, n);
  return (0, a.jsx)("div", {
    ref: r,
    children: (0, a.jsx)(p.ZP, {
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
      firstMedia: r,
      shouldObscure: i,
      obscureReason: s,
      shouldShowAgeVerification: o
    } = e,
    c = (0, f.e7)([Q.Z], () => Q.Z.isFocused()),
    d = (0, k.d$)(r.src),
    u = V.QK.useSetting(),
    m = (0, A.MC)(s),
    {
      src: h,
      width: x,
      height: b,
      alt: p
    } = r;
  if (b > x ? n = 72 : t = 72, o) {
    var j;
    return (0, a.jsx)("div", {
      "aria-label": null != (j = null != m ? m : p) ? j : er.intl.string(er.t.hqwnc2),
      className: l()(el.thumbnailContainer, el.obscuredThumbnailPlaceholder),
      style: {
        maxWidth: t,
        maxHeight: n,
        height: b,
        width: x
      }
    })
  }
  return h.startsWith("data:") ? (0, a.jsx)(g.Eep, {
    src: h,
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
    src: h,
    maxHeight: t,
    maxWidth: n,
    width: x,
    height: b,
    alt: null != p && i ? m : p,
    autoPlay: u,
    animated: d && !i && c,
    srcIsAnimated: r.srcIsAnimated,
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
  } = e, [r, i] = (0, A.hL)({
    media: n,
    channel: t
  }), s = (0, T.JO)(i);
  return (0, a.jsx)(g.Rny, {
    enabled: true,
    children: (0, a.jsxs)("div", {
      className: l()(el.bodyMedia, ei.bodyMedia),
      onClick: function(e) {
        e.stopPropagation(), s && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j.Z.showAgeVerificationGetStartedModal({
          entryPoint: v.cU.FORUM_POST_MEDIA_PREVIEW
        }))
      },
      children: [(0, a.jsx)(ex, {
        firstMedia: n,
        shouldObscure: r,
        obscureReason: i,
        shouldShowAgeVerification: s
      }), r && (0, a.jsx)(P.Z, {
        iconClassname: el.obscuredTag,
        obscureReason: i
      })]
    })
  })
}