/** Chunk was on 46875 **/
/** chunk id: 954540, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => ec
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
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
let ec = Chunk64700.memo(function(e) {
  let {
    threadId: t,
    goToThread: n,
    observePostVisibilityAnalytics: a,
    overrideMedia: s,
    className: o
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
    } = e, l = (0, h.bG)([q.A], () => q.A.getChannel(t));
    c()(null != l, "the thread should not be null here, a store must have missed an update");
    let a = (0, h.bG)([W.Ay], () => W.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
      {
        firstMessage: i
      } = (0, S.OA)(l),
      s = function(e) {
        let {
          firstMessage: t,
          formatInline: n = true,
          noStyleAndInteraction: l = true
        } = e, a = r.useMemo(() => null != t ? (0, I.A)(t, null == t ? true : t.messageSnapshots[0]) : null, [t]), {
          hasSpoilerEmbeds: i,
          content: s
        } = r.useMemo(() => (null == a ? true : a.content) != null && "" !== a.content ? (0, F.Ay)(a, {
          formatInline: n,
          noStyleAndInteraction: l,
          allowHeading: true,
          allowList: true
        }) : {
          hasSpoilerEmbeds: false,
          content: null
        }, [n, a, l]), c = (0, T.Ky)(t, i), o = (0, T.L_)(t, i);
        return null == t ? null : {
          hasSpoilerEmbeds: i,
          content: s,
          firstMedia: c,
          firstMediaIsEmbed: o
        }
      }({
        firstMessage: i
      }),
      o = null == s ? true : s.content,
      d = null == s ? true : s.firstMedia,
      {
        messageCountText: u
      } = (0, N.k6)(l);
    return {
      channel: l,
      isOpen: a,
      messageCount: u,
      firstMessage: i,
      content: o,
      media: null != n ? n : d
    }
  }({
    threadId: t,
    overrideMedia: s
  });
  (0, ee.vb)(j);
  let y = (0, h.bG)([Y.default, J.A], () => {
      var e, t, n, l, r, a;
      let i = Y.default.getUser(null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport) ? true : e.reported_user_id);
      if (null != i) return i;
      if ((null == j || null == (n = j.messageReference) ? true : n.channel_id) != null && (null == j || null == (l = j.messageReference) ? true : l.message_id) != null) {
        let e = J.A.getMessage(null == j || null == (r = j.messageReference) ? true : r.channel_id, null == j || null == (a = j.messageReference) ? true : a.message_id);
        if (null != e) return e.author
      }
      return null
    }),
    {
      ref: A,
      height: C
    } = (0, b.Ay)(),
    O = (0, w.kU)(e => e.setCardHeight, u.x);
  r.useEffect(() => {
    null != C && O(t, C)
  }, [C, O, t]), r.useEffect(() => {
    null == a || a(A.current, t)
  }, [A, a, t]);
  let _ = r.useRef(null),
    {
      handleLeftClick: E,
      handleRightClick: R
    } = (0, P.A)({
      facepileRef: _,
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
      var n, l, r, a = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
        return a
      }
      if (a = function(e, t) {
          if (null == e) return {};
          var n, l, r = {},
            a = Object.getOwnPropertyNames(e);
          for (l = 0; l < a.length; l++) n = a[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
          return r
        }(e, t), Object.getOwnPropertySymbols)
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
      return a
    }(M, ["role", "onFocus"]),
    {
      isFocused: G,
      handleFocus: z,
      handleBlur: H
    } = (0, k.A)(L);
  return (0, l.jsxs)("div", {
    ref: A,
    "data-item-id": t,
    onClick: E,
    onContextMenu: R,
    className: i()(ei.kL, ea.kL, o, {
      [ei.nT]: f
    }),
    children: [(0, l.jsx)(g.DUT, function(e) {
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
      onClick: E,
      focusProps: {
        ringTarget: A
      },
      onContextMenu: R,
      "aria-label": er.intl.formatToPlainString(er.t.pgYN6c, {
        title: d.name,
        count: x
      }),
      className: ei.Kv,
      onFocus: z,
      onBlur: H
    }, U)), (0, l.jsxs)("div", {
      className: ei.kb,
      children: [(0, l.jsx)(g.Fmo, {
        children: (0, l.jsxs)("div", {
          className: ea.fx,
          children: [(0, l.jsx)(eo, {
            channel: d,
            firstMessage: j,
            content: p,
            hasMediaAttachment: null != v,
            originalAuthor: y
          }), (null == j ? true : j.blocked) || null == v ? null : (0, l.jsx)(eb, {
            channel: d,
            firstMedia: v
          })]
        })
      }), (0, l.jsx)(g.M1G, {
        enabled: !G,
        children: (0, l.jsx)(eu, {
          channel: d,
          firstMessage: j,
          facepileRef: _
        })
      })]
    })]
  })
});

function eo(e) {
  let {
    channel: t,
    firstMessage: n,
    content: r,
    hasMediaAttachment: a,
    originalAuthor: s
  } = e, {
    hasUnreads: c
  } = (0, N.X5)(t);
  return (0, l.jsxs)("div", {
    className: i()(ea.rf, ei.rf),
    children: [(0, l.jsx)(R.Ay, {
      channel: t
    }), (0, l.jsx)("div", {
      className: (ei.iU, ea.iU),
      children: (0, l.jsx)(ed, {
        channel: t,
        message: n,
        content: r,
        hasMediaAttachment: a,
        hasUnreads: c,
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
    hasMediaAttachment: a,
    hasUnreads: s,
    originalAuthor: c
  } = e, o = (0, h.bG)([_.A], () => _.A.isLoading(n.id)), d = (0, h.bG)([X.A], () => X.A.can(en.xBc.MANAGE_MESSAGES, n)), u = K.gs.useSetting(), m = (0, h.bG)([Q.A], () => Q.A.getGuildId()), {
    contentPlaceholder: f,
    renderedContent: x
  } = null == t ? {
    contentPlaceholder: null,
    renderedContent: null
  } : (0, V.o)(t, r, false, false, i()(ei.BK, ea.BK, es.tZ, es.__invalid_smallFontSize), {
    leadingIconClass: ei.aG,
    trailingIconClass: ei.sl,
    iconSize: el.eJ
  }), b = null != x ? (0, l.jsx)(g.Text, {
    variant: "text-md/normal",
    children: x
  }) : a ? null : (0, l.jsx)(g.Text, {
    tag: "span",
    variant: "text-sm/medium",
    color: s ? "text-default" : "text-muted",
    className: i()(ei.BK, ea.BK),
    "aria-label": "",
    children: null == t ? o ? null : er.intl.string(er.t.mE3KJN) : f
  });
  return (0, l.jsxs)(B.Bs.Provider, {
    value: (0, U.A)(u, d),
    children: [null != c ? (0, l.jsx)(g.euF, {
      size: g._3J.SIZE_40,
      src: c.getAvatarURL(m, (0, g.FT9)(g._3J.SIZE_40)),
      "aria-label": "",
      className: ea.Nd
    }) : null, (0, l.jsxs)("div", {
      className: ea.IF,
      children: [(0, l.jsx)(et.A, {
        channel: n,
        originalAuthor: c,
        message: t
      }), (0, l.jsx)(g.M1G, {
        className: ei.JY,
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
    isNew: a
  } = (0, N.X5)(t), i = (0, A.m)(t.id), s = (null == r ? true : r.reactions) != null && r.reactions.length > 0;
  return (0, l.jsxs)("div", {
    className: ea.qr,
    children: [(0, l.jsxs)("div", {
      className: ea.JS,
      children: [(0, l.jsx)(g.iFK, {
        size: "custom",
        width: 14,
        height: 14
      }), (0, l.jsx)(g.Text, {
        variant: "text-sm/medium",
        children: t.name
      }), a ? (0, l.jsx)(g.LpS, {
        color: g.LU0.unsafe_rawColors.BRAND_260.css,
        text: er.intl.string(er.t.y2b7CA),
        className: ea.Ad
      }) : null]
    }), (0, l.jsxs)("div", {
      className: ea.PQ,
      children: [s || null == r ? null : (0, l.jsx)(eh, {
        firstMessage: r,
        channel: t
      }), (0, l.jsx)(em, {
        channel: t,
        iconSize: 14
      }), (0, l.jsx)("span", {
        className: ei.xE,
        children: "•"
      }), i.length > 0 ? (0, l.jsxs)("div", {
        className: ei.IW,
        children: [(0, l.jsx)(eg, {
          channel: t,
          userIds: i,
          facepileRef: n
        }), (0, l.jsx)("div", {
          className: ei.r$,
          children: (0, l.jsx)(g.nvX, {
            themed: true,
            dotRadius: 2
          })
        }), (0, l.jsx)(x.Ay, {
          channel: t,
          className: ei.mD,
          renderDots: false
        })]
      }) : (0, l.jsx)(ef, {
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
    messageCountText: a,
    unreadCount: s
  } = (0, N.k6)(t);
  return (0, l.jsxs)("div", {
    className: i()(ei.Mv, {
      [ei.hT]: r && null == s
    }),
    children: [(0, l.jsx)("span", {
      className: ei.SZ,
      children: (0, l.jsx)(g.oyn, {
        size: "custom",
        color: "currentColor",
        width: n,
        height: n
      })
    }), "number" == typeof a ? (0, l.jsx)(y.A, {
      value: a,
      digitWidth: 9,
      className: ei.gv
    }) : (0, l.jsx)("div", {
      className: ei.gv,
      children: a
    }), null == s ? null : (0, l.jsxs)(g.Text, {
      className: ei.bU,
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
  } = e, r = (0, h.bG)([q.A], () => q.A.getChannel(n.parent_id)), a = (0, N.Ck)(r), {
    disableReactionCreates: i,
    isLurking: s,
    isPendingMember: c
  } = (0, G.A)(n);
  return null == a || i ? null : (0, l.jsx)(H.qT, {
    className: ei.vC,
    message: t,
    readOnly: n.isArchivedLockedThread(),
    useChatFontScaling: false,
    isLurking: s,
    isPendingMember: c,
    emoji: a,
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

function ef(e) {
  var t;
  let {
    channel: n
  } = e, {
    sortOrder: r
  } = (0, O.R)(n.parent_id), a = (0, N.Mw)(n, r), i = null == (t = n.threadMetadata) ? true : t.createTimestamp, s = null == i ? null : er.intl.formatToPlainString(er.t["13euCd"], {
    timestamp: (0, $.i$)(d()(i), "LLLL")
  });
  return (0, l.jsx)(f.m, {
    text: s,
    children: (0, l.jsx)(g.Text, {
      className: ei.__invalid_activityText,
      variant: "text-sm/normal",
      color: "text-default",
      children: a
    })
  })
}

function eg(e) {
  let {
    channel: t,
    userIds: n,
    facepileRef: r
  } = e, a = (0, N.$I)(t, n);
  return (0, l.jsx)("div", {
    ref: r,
    children: (0, l.jsx)(p.Ay, {
      className: ei.__invalid_facepile,
      showDefaultAvatarsForNullUsers: true,
      guildId: t.guild_id,
      users: a,
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
      shouldObscure: a,
      obscureReason: s,
      shouldShowAgeVerification: c
    } = e,
    o = (0, h.bG)([Z.A], () => Z.A.isFocused()),
    d = (0, M.ge)(r.src),
    u = K.kt.useSetting(),
    m = (0, D.rx)(s),
    {
      src: f,
      width: x,
      height: b,
      alt: p
    } = r;
  if (b > x ? n = 72 : t = 72, c) {
    var j;
    return (0, l.jsx)("div", {
      "aria-label": null != (j = null != m ? m : p) ? j : er.intl.string(er.t.hqwnc2),
      className: i()(ei.iT, ei.nh),
      style: {
        maxWidth: t,
        maxHeight: n,
        height: b,
        width: x
      }
    })
  }
  return f.startsWith("data:") ? (0, l.jsx)(g._V3, {
    src: f,
    maxHeight: t,
    maxWidth: n,
    width: x,
    height: b,
    alt: null != p && a ? m : p,
    className: ei.iT,
    imageClassName: i()({
      [ei.cd]: a,
      [ei.LW]: true
    })
  }) : (0, z.LL)({
    src: f,
    maxHeight: t,
    maxWidth: n,
    width: x,
    height: b,
    alt: null != p && a ? m : p,
    autoPlay: u,
    animated: d && !a && o,
    srcIsAnimated: r.srcIsAnimated,
    containerClassName: ei.iT,
    imageClassName: i()({
      [ei.cd]: a
    }),
    analyticsSource: "ForumPostMediaPreview"
  })
}

function eb(e) {
  let {
    channel: t,
    firstMedia: n
  } = e, [r, a] = (0, D.eJ)({
    media: n,
    channel: t
  }), s = (0, C.qZ)(a);
  return (0, l.jsx)(g.M1G, {
    enabled: true,
    children: (0, l.jsxs)("div", {
      className: i()(ei.pV, ea.pV),
      onClick: function(e) {
        e.stopPropagation(), s && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j.A.showAgeVerificationGetStartedModal({
          entryPoint: v.q1.FORUM_POST_MEDIA_PREVIEW
        }))
      },
      children: [(0, l.jsx)(ex, {
        firstMedia: n,
        shouldObscure: r,
        obscureReason: a,
        shouldShowAgeVerification: s
      }), r && (0, l.jsx)(E.A, {
        iconClassname: ei.yo,
        obscureReason: a
      })]
    })
  })
}