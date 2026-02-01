/** Chunk was on 7602 **/
/** chunk id: 835369, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  $k: () => em,
  Ay: () => ed,
  Co: () => ea,
  NA: () => ev,
  T5: () => eo,
  cn: () => ep,
  gL: () => ex,
  hf: () => ec
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  h = require.n(Chunk989349),
  Chunk942381 = require("./942381.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk147192 = require("./147192.jsx"),
  Chunk765671 = require("./765671.js"),
  Chunk570209 = require("./570209.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk114166 = require("./114166.jsx"),
  Chunk810181 = require("./810181.js"),
  Chunk390248 = require("./390248.js"),
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
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk531685 = require("./531685.js"),
  Chunk405269 = require("./405269.js"),
  Chunk422844 = require("./422844.js"),
  Chunk435470 = require("./435470.js"),
  Chunk473503 = require("./473503.js"),
  Chunk969043 = require("./969043.js"),
  Chunk768953 = require("./768953.js"),
  Chunk710948 = require("./710948.jsx"),
  Chunk218152 = require("./218152.jsx"),
  Chunk313880 = require("./313880.jsx"),
  Chunk52933 = require("./52933.jsx"),
  Chunk504261 = require("./504261.js"),
  Chunk555540 = require("./555540.js"),
  Chunk505234 = require("./505234.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk838541 = require("./838541.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk558997 = require("./558997.js"),
  Chunk206314 = require("./206314.js");

function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var s = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(s);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
      return Object.getOwnPropertyDescriptor(s, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = s[t], t in e ? Object.defineProperty(e, t, {
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
  ed = Chunk64700.memo(function(e) {
    let {
      threadId: t,
      goToThread: s,
      observePostVisibilityAnalytics: r,
      overrideMedia: a,
      className: d,
      containerWidth: h
    } = e, {
      channel: m,
      isOpen: v,
      messageCount: f,
      firstMessage: A,
      content: b,
      media: j
    } = function(e) {
      let {
        threadId: t,
        overrideMedia: s
      } = e, i = (0, g.bG)([H.A], () => H.A.getChannel(t));
      o()(null != i, "the thread should not be null here, a store must have missed an update");
      let n = (0, g.bG)([R.Ay], () => R.Ay.getCurrentSidebarChannelId(i.parent_id) === i.id),
        {
          firstMessage: r
        } = (0, V.OA)(i),
        {
          content: l,
          firstMedia: a
        } = (0, W.gk)({
          firstMessage: r
        }),
        {
          messageCountText: d
        } = (0, W.k6)(i);
      return {
        channel: i,
        isOpen: n,
        messageCount: d,
        firstMessage: r,
        content: l,
        media: null != s ? s : a
      }
    }({
      threadId: t,
      overrideMedia: a
    }), {
      ref: S,
      height: O
    } = (0, x.Ay)(), y = (0, J.kU)(e => e.setCardHeight, c.x);
    n.useEffect(() => {
      null != O && y(t, O)
    }, [O, y, t]), n.useEffect(() => {
      null == r || r(S.current, t)
    }, [S, r, t]);
    let C = n.useRef(null),
      {
        handleLeftClick: T,
        handleRightClick: N
      } = (0, ee.A)({
        facepileRef: C,
        goToThread: s,
        channel: m
      }),
      w = (0, u.rm)(t),
      {
        role: P,
        onFocus: F
      } = w,
      E = function(e, t) {
        if (null == e) return {};
        var s, i, n, r = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (n = 0, s = Reflect.ownKeys(e); n < s.length; n++) i = s[n], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
          return r
        }
        if (r = function(e, t) {
            if (null == e) return {};
            var s, i, n = {},
              r = Object.getOwnPropertyNames(e);
            for (i = 0; i < r.length; i++) s = r[i], !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s]);
            return n
          }(e, t), Object.getOwnPropertySymbols)
          for (n = 0, s = Object.getOwnPropertySymbols(e); n < s.length; n++) i = s[n], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
        return r
      }(w, ["role", "onFocus"]),
      {
        isFocused: k,
        handleFocus: _,
        handleBlur: M
      } = (0, Q.A)(F);
    return (0, i.jsxs)("div", {
      ref: S,
      "data-item-id": t,
      onClick: T,
      onContextMenu: N,
      className: l()(en.kL, d, {
        [en.nT]: v
      }),
      children: [(0, i.jsx)(p.DUT, el({
        onClick: T,
        focusProps: {
          ringTarget: S
        },
        onContextMenu: N,
        "aria-label": ei.intl.formatToPlainString(ei.t.pgYN6c, {
          title: m.name,
          count: f
        }),
        className: en.Kv,
        onFocus: _,
        onBlur: M
      }, E)), (0, i.jsxs)("div", {
        className: en.kb,
        children: [(0, i.jsx)(p.Fmo, {
          children: (0, i.jsx)(eh, {
            channel: m,
            firstMessage: A,
            content: b,
            hasMediaAttachment: null != j,
            containerWidth: h
          })
        }), (0, i.jsx)(p.M1G, {
          enabled: !k,
          children: (0, i.jsx)(eg, {
            channel: m,
            firstMessage: A,
            facepileRef: C
          })
        })]
      }), (null == A ? true : A.blocked) || null == j ? null : (0, i.jsx)(eb, {
        channel: m,
        firstMedia: j
      })]
    })
  });

function eh(e) {
  let {
    channel: t,
    firstMessage: s,
    content: n,
    hasMediaAttachment: r,
    containerWidth: a
  } = e, {
    isNew: o,
    hasUnreads: d
  } = (0, W.X5)(t), h = ec(t), {
    postTitleRef: c,
    isNewBadgeOverflow: u
  } = (0, Y.$)(o, 24, a);
  return (0, i.jsxs)("div", {
    className: en.rf,
    children: [(0, i.jsx)(Z.Ay, {
      channel: t
    }), (0, i.jsx)("div", {
      className: l()(en.wx, {
        [en.qN]: u
      }),
      children: (0, i.jsxs)("div", {
        className: en.TK,
        children: [(0, i.jsx)(p.Heading, {
          variant: "heading-lg/semibold",
          color: d ? "text-strong" : "text-muted",
          lineClamp: 2,
          className: en.o$,
          children: (0, i.jsxs)("span", {
            ref: c,
            children: [h, o && (0, i.jsx)("span", {
              className: en.pr,
              children: (0, i.jsx)(p.LpS, {
                className: en.Ad,
                color: m.A.unsafe_rawColors.BRAND_260.css,
                text: ei.intl.string(ei.t.y2b7CA)
              })
            })]
          })
        }), o && u && (0, i.jsx)(p.LpS, {
          className: en.Ad,
          color: m.A.unsafe_rawColors.BRAND_260.css,
          text: ei.intl.string(ei.t.y2b7CA)
        })]
      })
    }), (0, i.jsx)("div", {
      className: en.iU,
      children: (0, i.jsx)(eu, {
        channel: t,
        message: s,
        content: n,
        hasMediaAttachment: r,
        hasUnreads: d
      })
    })]
  })
}

function ec(e) {
  let t = (0, g.bG)([K.A], () => K.A.getHasSearchResults(e.parent_id)),
    s = (0, g.bG)([K.A], () => K.A.getSearchQuery(e.parent_id)),
    i = n.useMemo(() => (0, A.wG)(t && null != s ? s : "", true), [t, s]);
  return n.useMemo(() => (0, F.Ay)({
    content: e.name,
    embeds: []
  }, {
    postProcessor: i
  }).content, [e.name, i])
}
let eu = Chunk64700.memo(function(e) {
  let {
    message: t,
    channel: s,
    content: n,
    hasMediaAttachment: r,
    hasUnreads: a
  } = e, {
    isBlocked: o,
    isIgnored: d
  } = (0, g.cf)([G.A], () => ({
    isBlocked: null != t && G.A.isBlockedForMessage(t),
    isIgnored: null != t && G.A.isIgnoredForMessage(t)
  })), h = (0, g.bG)([q.A], () => q.A.isLoading(s.id)), c = (0, g.bG)([D.A], () => D.A.can(et.xBc.MANAGE_MESSAGES, s)), u = L.gs.useSetting(), m = null;
  if (o) m = (0, i.jsx)(p.Text, {
    className: en.Wv,
    variant: "text-sm/medium",
    color: "text-muted",
    children: ei.intl.string(ei.t.Lkp2fB)
  });
  else if (d) m = (0, i.jsx)(p.Text, {
    className: en.Wv,
    variant: "text-sm/medium",
    color: "text-muted",
    children: ei.intl.string(ei.t.yWK7ZM)
  });
  else {
    let {
      contentPlaceholder: e,
      renderedContent: s
    } = null == t ? {
      contentPlaceholder: null,
      renderedContent: null
    } : (0, M.o)(t, n, o, d, l()(en.BK, er.tZ, er.__invalid_smallFontSize), {
      leadingIconClass: en.aG,
      trailingIconClass: en.sl,
      iconSize: es.eJ
    });
    m = null != s ? (0, i.jsx)(p.Text, {
      variant: "text-sm/semibold",
      color: a ? "text-default" : "text-muted",
      children: s
    }) : r ? null : (0, i.jsx)(p.Text, {
      tag: "span",
      variant: "text-sm/medium",
      color: a ? "text-default" : "text-muted",
      className: en.BK,
      children: null == t ? h ? null : ei.intl.string(ei.t.mE3KJN) : e
    })
  }
  return (0, i.jsxs)(I.Bs.Provider, {
    value: (0, P.A)(u, c),
    children: [!o && (0, i.jsx)(X.A, {
      channel: s,
      message: t,
      renderColon: null != m,
      hasUnreads: a
    }), (0, i.jsx)(p.M1G, {
      className: en.JY,
      children: m
    })]
  })
});

function eg(e) {
  let {
    channel: t,
    facepileRef: s,
    firstMessage: n
  } = e, r = (0, y.m)(t.id), l = (null == n ? true : n.reactions) != null && n.reactions.length > 0;
  return (0, i.jsxs)("div", {
    className: en.qr,
    children: [l || null == n ? null : (0, i.jsx)(ev, {
      firstMessage: n,
      channel: t
    }), null == n ? null : (0, i.jsx)(ep, {
      firstMessage: n,
      channel: t
    }), (0, i.jsx)(em, {
      channel: t,
      iconSize: 14
    }), (0, i.jsx)("span", {
      className: en.xE,
      children: "•"
    }), r.length > 0 ? (0, i.jsxs)("div", {
      className: en.IW,
      children: [(0, i.jsx)(ex, {
        channel: t,
        userIds: r,
        facepileRef: s
      }), (0, i.jsx)("div", {
        className: en.r$,
        children: (0, i.jsx)(p.nvX, {
          themed: true,
          dotRadius: 2
        })
      }), (0, i.jsx)(f.Ay, {
        channel: t,
        className: en.mD,
        renderDots: false
      })]
    }) : (0, i.jsx)(ef, {
      channel: t
    })]
  })
}

function em(e) {
  let {
    channel: t,
    iconSize: s,
    showReadState: n = false
  } = e, {
    messageCountText: r,
    unreadCount: a
  } = (0, W.k6)(t);
  return (0, i.jsxs)("div", {
    className: l()(en.Mv, {
      [en.hT]: n && null == a
    }),
    children: [(0, i.jsx)("span", {
      className: en.SZ,
      children: (0, i.jsx)(p.oyn, {
        size: "custom",
        color: "currentColor",
        width: s,
        height: s
      })
    }), "number" == typeof r ? (0, i.jsx)(O.A, {
      value: r,
      digitWidth: 9,
      className: en.gv
    }) : (0, i.jsx)("div", {
      className: en.gv,
      children: r
    }), null == a ? null : (0, i.jsxs)(p.Text, {
      className: en.bU,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", ei.intl.format(ei.t.z3PEth, {
        count: a
      }), ")"]
    })]
  })
}

function ev(e) {
  let {
    firstMessage: t,
    channel: s
  } = e, n = (0, g.bG)([H.A], () => H.A.getChannel(s.parent_id)), r = (0, W.Ck)(n), {
    disableReactionCreates: l,
    isLurking: a,
    isPendingMember: o
  } = (0, E.A)(s);
  return null == r || l ? null : (0, i.jsx)(_.qT, {
    className: en.vC,
    message: t,
    readOnly: s.isArchivedLockedThread(),
    useChatFontScaling: false,
    isLurking: a,
    isPendingMember: o,
    emoji: r,
    hideCount: true,
    count: 0,
    burst_count: 0,
    me: false,
    me_burst: false,
    type: w.v.NORMAL,
    emojiSize: "reaction",
    emojiSizeTooltip: "reaction"
  })
}

function ep(e) {
  var t;
  let {
    firstMessage: s,
    channel: n
  } = e, r = (0, W.lQ)(s), {
    disableReactionUpdates: l,
    isLurking: a,
    isPendingMember: o
  } = (0, E.A)(n);
  return null == r ? null : (0, i.jsx)(_.qT, el({
    className: en.vC,
    message: s,
    readOnly: l || n.isArchivedLockedThread(),
    isLurking: a,
    isPendingMember: o,
    useChatFontScaling: false,
    type: r.burst_count >= r.count ? w.v.BURST : w.v.NORMAL,
    emojiSize: "reaction",
    emojiSizeTooltip: "reaction"
  }, r), "".concat(null != (t = r.emoji.id) ? t : 0, ":").concat(r.emoji.name))
}

function ef(e) {
  var t;
  let {
    channel: s
  } = e, {
    sortOrder: n
  } = (0, z.R)(s.parent_id), r = (0, W.Mw)(s, n), l = null == (t = s.threadMetadata) ? true : t.createTimestamp, a = null == l ? null : ei.intl.formatToPlainString(ei.t["13euCd"], {
    timestamp: (0, B.i$)(h()(l), "LLLL")
  });
  return (0, i.jsx)(v.m, {
    text: a,
    children: (0, i.jsx)(p.Text, {
      className: en.__invalid_activityText,
      variant: "text-sm/normal",
      color: "text-default",
      children: r
    })
  })
}

function ex(e) {
  let {
    channel: t,
    userIds: s,
    facepileRef: n
  } = e, r = (0, W.$I)(t, s);
  return (0, i.jsx)("div", {
    ref: n,
    children: (0, i.jsx)(b.Ay, {
      className: en.__invalid_facepile,
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

function eA(e) {
  let {
    firstMedia: t,
    shouldObscure: s,
    obscureReason: n,
    shouldShowAgeVerification: r
  } = e, a = (0, g.bG)([U.A], () => U.A.isFocused()), o = (0, T.ge)(t.src), d = L.kt.useSetting(), h = (0, N.rx)(n), {
    src: c,
    width: u,
    height: m,
    alt: v
  } = t;
  if (r) {
    var f;
    return (0, i.jsx)("div", {
      "aria-label": null != (f = null != h ? h : v) ? f : ei.intl.string(ei.t.hqwnc2),
      className: l()(en.iT, en.nh),
      style: {
        maxWidth: eo,
        maxHeight: ea,
        height: m,
        width: u
      }
    })
  }
  return c.startsWith("data:") ? (0, i.jsx)(p._V3, {
    src: c,
    width: u,
    height: m,
    minWidth: eo,
    minHeight: ea,
    alt: null != v && s ? h : v,
    className: en.iT,
    imageClassName: l()(en.LW, {
      [en.cd]: s
    })
  }) : (0, k.LL)({
    src: c,
    width: u,
    height: m,
    minWidth: eo,
    minHeight: ea,
    alt: null != v && s ? h : v,
    autoPlay: d,
    animated: o && !s && a,
    srcIsAnimated: t.srcIsAnimated,
    containerClassName: en.iT,
    imageClassName: l()(en.LW, {
      [en.cd]: s
    }),
    analyticsSource: "ForumPostMediaPreview"
  })
}

function eb(e) {
  let {
    channel: t,
    firstMedia: s
  } = e, [n, r] = (0, N.eJ)({
    media: s,
    channel: t
  }), l = (0, C.qZ)(r);
  return (0, i.jsx)(p.M1G, {
    enabled: true,
    children: (0, i.jsxs)("div", {
      className: en.pV,
      onClick: function(e) {
        e.stopPropagation(), l && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j.A.showAgeVerificationGetStartedModal({
          entryPoint: S.q1.FORUM_POST_MEDIA_PREVIEW
        }))
      },
      children: [(0, i.jsx)(eA, {
        firstMedia: s,
        shouldObscure: n,
        obscureReason: r,
        shouldShowAgeVerification: l
      }), n && (0, i.jsx)($.A, {
        iconClassname: en.yo,
        obscureReason: r
      })]
    })
  })
}