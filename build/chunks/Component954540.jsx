/** Chunk was on 46875 **/
/** chunk id: 954540, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => eo
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  d = require.n(Chunk989349),
  Chunk942381 = require("./942381.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk147192 = require("./147192.jsx"),
  Chunk765671 = require("./765671.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk114166 = require("./114166.jsx"),
  Chunk810181 = require("./810181.js"),
  Chunk390248 = require("./390248.js"),
  Chunk422844 = require("./422844.js"),
  Chunk435470 = require("./435470.js"),
  Chunk473503 = require("./473503.js"),
  Chunk256265 = require("./256265.js"),
  Chunk969043 = require("./969043.js"),
  Chunk710948 = require("./710948.jsx"),
  Chunk218152 = require("./218152.jsx"),
  Chunk52933 = require("./52933.jsx"),
  Chunk504261 = require("./504261.js"),
  Chunk505234 = require("./505234.jsx"),
  Chunk387408 = require("./387408.js"),
  Chunk77350 = require("./77350.js"),
  Chunk294520 = require("./294520.js"),
  Chunk505527 = require("./505527.js"),
  Chunk863439 = require("./863439.js"),
  Chunk465364 = require("./465364.js"),
  Chunk467073 = require("./467073.js"),
  Chunk652176 = require("./652176.jsx"),
  Chunk260821 = require("./260821.jsx"),
  Chunk448368 = require("./448368.jsx"),
  Chunk302031 = require("./302031.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk531685 = require("./531685.js"),
  Chunk405269 = require("./405269.js"),
  Chunk715757 = require("./715757.js"),
  Chunk95905 = require("./95905.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk838541 = require("./838541.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk518335 = require("./518335.js"),
  Chunk558997 = require("./558997.js"),
  Chunk206314 = require("./206314.js");
let eo = Chunk64700.memo(function(e) {
  let {
    threadId: t,
    goToThread: n,
    observePostVisibilityAnalytics: i,
    overrideMedia: s,
    className: c
  } = e, {
    channel: d,
    isOpen: g,
    messageCount: f,
    content: b,
    firstMessage: j,
    media: v
  } = function(e) {
    let {
      threadId: t,
      overrideMedia: n
    } = e, l = (0, h.bG)([q.A], () => q.A.getChannel(t));
    o()(null != l, "the thread should not be null here, a store must have missed an update");
    let i = (0, h.bG)([W.Ay], () => W.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
      {
        firstMessage: a
      } = (0, O.OA)(l),
      s = function(e) {
        let {
          firstMessage: t,
          formatInline: n = true,
          noStyleAndInteraction: l = true
        } = e, i = r.useMemo(() => null != t ? (0, k.A)(t, null == t ? true : t.messageSnapshots[0]) : null, [t]), {
          hasSpoilerEmbeds: a,
          content: s
        } = r.useMemo(() => (null == i ? true : i.content) != null && "" !== i.content ? (0, F.Ay)(i, {
          formatInline: n,
          noStyleAndInteraction: l,
          allowHeading: true,
          allowList: true
        }) : {
          hasSpoilerEmbeds: false,
          content: null
        }, [n, i, l]), o = (0, S.Ky)(t, a), c = (0, S.L_)(t, a);
        return null == t ? null : {
          hasSpoilerEmbeds: a,
          content: s,
          firstMedia: o,
          firstMediaIsEmbed: c
        }
      }({
        firstMessage: a
      }),
      c = null == s ? true : s.content,
      d = null == s ? true : s.firstMedia,
      {
        messageCountText: u
      } = (0, T.k6)(l);
    return {
      channel: l,
      isOpen: i,
      messageCount: u,
      firstMessage: a,
      content: c,
      media: null != n ? n : d
    }
  }({
    threadId: t,
    overrideMedia: s
  });
  (0, ee.vb)(j);
  let _ = (0, h.bG)([Y.default, J.A], () => {
      var e, t, n, l, r, i;
      let a = Y.default.getUser(null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport) ? true : e.reported_user_id);
      if (null != a) return a;
      if ((null == j || null == (n = j.messageReference) ? true : n.channel_id) != null && (null == j || null == (l = j.messageReference) ? true : l.message_id) != null) {
        let e = J.A.getMessage(null == j || null == (r = j.messageReference) ? true : r.channel_id, null == j || null == (i = j.messageReference) ? true : i.message_id);
        if (null != e) return e.author
      }
      return null
    }),
    {
      ref: y,
      height: A
    } = (0, p.Ay)(),
    C = (0, E.kU)(e => e.setCardHeight, u.x);
  r.useEffect(() => {
    null != A && C(t, A)
  }, [A, C, t]), r.useEffect(() => {
    null == i || i(y.current, t)
  }, [y, i, t]);
  let N = r.useRef(null),
    {
      handleLeftClick: w,
      handleRightClick: I
    } = (0, R.A)({
      facepileRef: N,
      goToThread: n,
      channel: d
    }),
    M = (0, m.rm)(t),
    {
      role: D,
      onFocus: L
    } = M,
    U = function(e, t) {
      if (null == e) return {};
      var n, l, r, i = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i
      }
      if (i = function(e, t) {
          if (null == e) return {};
          var n, l, r = {},
            i = Object.getOwnPropertyNames(e);
          for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
          return r
        }(e, t), Object.getOwnPropertySymbols)
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
      return i
    }(M, ["role", "onFocus"]),
    {
      isFocused: G,
      handleFocus: z,
      handleBlur: H
    } = (0, P.A)(L);
  return (0, l.jsxs)("div", {
    ref: y,
    "data-item-id": t,
    onClick: w,
    onContextMenu: I,
    className: a()(ea.kL, ei.kL, c, {
      [ea.nT]: g
    }),
    children: [(0, l.jsx)(x.DUT, function(e) {
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
    }({
      onClick: w,
      focusProps: {
        ringTarget: y
      },
      onContextMenu: I,
      "aria-label": er.intl.formatToPlainString(er.t.pgYN6c, {
        title: d.name,
        count: f
      }),
      className: ea.Kv,
      onFocus: z,
      onBlur: H
    }, U)), (0, l.jsxs)("div", {
      className: ea.kb,
      children: [(0, l.jsx)(x.Fmo, {
        children: (0, l.jsxs)("div", {
          className: ei.fx,
          children: [(0, l.jsx)(ec, {
            channel: d,
            firstMessage: j,
            content: b,
            hasMediaAttachment: null != v,
            originalAuthor: _
          }), (null == j ? true : j.blocked) || null == v ? null : (0, l.jsx)(ep, {
            channel: d,
            firstMedia: v
          })]
        })
      }), (0, l.jsx)(x.M1G, {
        enabled: !G,
        children: (0, l.jsx)(eu, {
          channel: d,
          firstMessage: j,
          facepileRef: N
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
  } = (0, T.X5)(t);
  return (0, l.jsxs)("div", {
    className: a()(ei.rf, ea.rf),
    children: [(0, l.jsx)(I.Ay, {
      channel: t
    }), (0, l.jsx)("div", {
      className: (ea.iU, ei.iU),
      children: (0, l.jsx)(ed, {
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
let ed = Chunk64700.memo(function(e) {
  let {
    message: t,
    channel: n,
    content: r,
    hasMediaAttachment: i,
    hasUnreads: s,
    originalAuthor: o
  } = e, c = (0, h.bG)([N.A], () => N.A.isLoading(n.id)), d = (0, h.bG)([X.A], () => X.A.can(en.xBc.MANAGE_MESSAGES, n)), u = K.gs.useSetting(), m = (0, h.bG)([Q.A], () => Q.A.getGuildId()), {
    contentPlaceholder: g,
    renderedContent: f
  } = null == t ? {
    contentPlaceholder: null,
    renderedContent: null
  } : (0, B.o)(t, r, false, false, a()(ea.BK, ei.BK, es.tZ, es.__invalid_smallFontSize), {
    leadingIconClass: ea.aG,
    trailingIconClass: ea.sl,
    iconSize: el.eJ
  }), p = null != f ? (0, l.jsx)(x.Text, {
    variant: "text-md/normal",
    children: f
  }) : i ? null : (0, l.jsx)(x.Text, {
    tag: "span",
    variant: "text-sm/medium",
    color: s ? "text-default" : "text-muted",
    className: a()(ea.BK, ei.BK),
    "aria-label": "",
    children: null == t ? c ? null : er.intl.string(er.t.mE3KJN) : g
  });
  return (0, l.jsxs)(V.Bs.Provider, {
    value: (0, U.A)(u, d),
    children: [null != o ? (0, l.jsx)(x.euF, {
      size: x._3J.SIZE_40,
      src: o.getAvatarURL(m, (0, x.FT9)(x._3J.SIZE_40)),
      "aria-label": "",
      className: ei.Nd
    }) : null, (0, l.jsxs)("div", {
      className: ei.IF,
      children: [(0, l.jsx)(et.A, {
        channel: n,
        originalAuthor: o,
        message: t
      }), (0, l.jsx)(x.M1G, {
        className: ea.JY,
        children: p
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
  } = (0, T.X5)(t), a = (0, y.m)(t.id), s = (null == r ? true : r.reactions) != null && r.reactions.length > 0;
  return (0, l.jsxs)("div", {
    className: ei.qr,
    children: [(0, l.jsxs)("div", {
      className: ei.JS,
      children: [(0, l.jsx)(x.iFK, {
        size: "custom",
        width: 14,
        height: 14
      }), (0, l.jsx)(x.Text, {
        variant: "text-sm/medium",
        children: t.name
      }), i ? (0, l.jsx)(x.LpS, {
        color: x.LU0.unsafe_rawColors.BRAND_260.css,
        text: er.intl.string(er.t.y2b7CA),
        className: ei.Ad
      }) : null]
    }), (0, l.jsxs)("div", {
      className: ei.PQ,
      children: [s || null == r ? null : (0, l.jsx)(eh, {
        firstMessage: r,
        channel: t
      }), (0, l.jsx)(em, {
        channel: t,
        iconSize: 14
      }), (0, l.jsx)("span", {
        className: ea.xE,
        children: "•"
      }), a.length > 0 ? (0, l.jsxs)("div", {
        className: ea.IW,
        children: [(0, l.jsx)(ex, {
          channel: t,
          userIds: a,
          facepileRef: n
        }), (0, l.jsx)("div", {
          className: ea.r$,
          children: (0, l.jsx)(x.nvX, {
            themed: true,
            dotRadius: 2
          })
        }), (0, l.jsx)(f.Ay, {
          channel: t,
          className: ea.mD,
          renderDots: false
        })]
      }) : (0, l.jsx)(eg, {
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
  } = (0, T.k6)(t);
  return (0, l.jsxs)("div", {
    className: a()(ea.Mv, {
      [ea.hT]: r && null == s
    }),
    children: [(0, l.jsx)("span", {
      className: ea.SZ,
      children: (0, l.jsx)(x.oyn, {
        size: "custom",
        color: "currentColor",
        width: n,
        height: n
      })
    }), "number" == typeof i ? (0, l.jsx)(_.A, {
      value: i,
      digitWidth: 9,
      className: ea.gv
    }) : (0, l.jsx)("div", {
      className: ea.gv,
      children: i
    }), null == s ? null : (0, l.jsxs)(x.Text, {
      className: ea.bU,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", er.intl.format(er.t.z3PEth, {
        count: s
      }), ")"]
    })]
  })
}

function eh(e) {
  let {
    firstMessage: t,
    channel: n
  } = e, r = (0, h.bG)([q.A], () => q.A.getChannel(n.parent_id)), i = (0, T.Ck)(r), {
    disableReactionCreates: a,
    isLurking: s,
    isPendingMember: o
  } = (0, G.A)(n);
  return null == i || a ? null : (0, l.jsx)(H.qT, {
    className: ea.vC,
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
    type: L.v.NORMAL,
    emojiSize: "reaction",
    emojiSizeTooltip: "reaction"
  })
}

function eg(e) {
  var t;
  let {
    channel: n
  } = e, {
    sortOrder: r
  } = (0, C.R)(n.parent_id), i = (0, T.Mw)(n, r), a = null == (t = n.threadMetadata) ? true : t.createTimestamp, s = null == a ? null : er.intl.formatToPlainString(er.t["13euCd"], {
    timestamp: (0, $.i$)(d()(a), "LLLL")
  });
  return (0, l.jsx)(g.m, {
    text: s,
    children: (0, l.jsx)(x.Text, {
      className: ea.__invalid_activityText,
      variant: "text-sm/normal",
      color: "text-default",
      children: i
    })
  })
}

function ex(e) {
  let {
    channel: t,
    userIds: n,
    facepileRef: r
  } = e, i = (0, T.$I)(t, n);
  return (0, l.jsx)("div", {
    ref: r,
    children: (0, l.jsx)(b.Ay, {
      className: ea.__invalid_facepile,
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

function ef(e) {
  let t, n, {
      firstMedia: r,
      shouldObscure: i,
      obscureReason: s,
      shouldShowAgeVerification: o
    } = e,
    c = (0, h.bG)([Z.A], () => Z.A.isFocused()),
    d = (0, M.ge)(r.src),
    u = K.kt.useSetting(),
    m = (0, D.rx)(s),
    {
      src: g,
      width: f,
      height: p,
      alt: b
    } = r;
  if (p > f ? n = 72 : t = 72, o) {
    var j;
    return (0, l.jsx)("div", {
      "aria-label": null != (j = null != m ? m : b) ? j : er.intl.string(er.t.hqwnc2),
      className: a()(ea.iT, ea.nh),
      style: {
        maxWidth: t,
        maxHeight: n,
        height: p,
        width: f
      }
    })
  }
  return g.startsWith("data:") ? (0, l.jsx)(x._V3, {
    src: g,
    maxHeight: t,
    maxWidth: n,
    width: f,
    height: p,
    alt: null != b && i ? m : b,
    className: ea.iT,
    imageClassName: a()({
      [ea.cd]: i,
      [ea.LW]: true
    })
  }) : (0, z.LL)({
    src: g,
    maxHeight: t,
    maxWidth: n,
    width: f,
    height: p,
    alt: null != b && i ? m : b,
    autoPlay: u,
    animated: d && !i && c,
    srcIsAnimated: r.srcIsAnimated,
    containerClassName: ea.iT,
    imageClassName: a()({
      [ea.cd]: i
    }),
    analyticsSource: "ForumPostMediaPreview"
  })
}

function ep(e) {
  let {
    channel: t,
    firstMedia: n
  } = e, [r, i] = (0, D.eJ)({
    media: n,
    channel: t
  }), s = (0, A.qZ)(i);
  return (0, l.jsx)(x.M1G, {
    enabled: true,
    children: (0, l.jsxs)("div", {
      className: a()(ea.pV, ei.pV),
      onClick: function(e) {
        e.stopPropagation(), s && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j.A.showAgeVerificationGetStartedModal({
          entryPoint: v.q1.FORUM_POST_MEDIA_PREVIEW
        }))
      },
      children: [(0, l.jsx)(ef, {
        firstMedia: n,
        shouldObscure: r,
        obscureReason: i,
        shouldShowAgeVerification: s
      }), r && (0, l.jsx)(w.A, {
        iconClassname: ea.yo,
        obscureReason: i
      })]
    })
  })
}