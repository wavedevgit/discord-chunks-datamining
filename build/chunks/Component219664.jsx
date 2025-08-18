/** Chunk was on 9456 **/
/** chunk id: 219664, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk683860 = require("./683860.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk738619 = require("./738619.jsx"),
  Chunk824578 = require("./824578.js"),
  Chunk841762 = require("./841762.jsx"),
  Chunk991621 = require("./991621.js"),
  Chunk629710 = require("./629710.js"),
  Chunk406432 = require("./406432.js"),
  Chunk169525 = require("./169525.js"),
  Chunk255269 = require("./255269.js"),
  Chunk930282 = require("./930282.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk456269 = require("./456269.js"),
  Chunk109590 = require("./109590.js"),
  Chunk368844 = require("./368844.js"),
  Chunk73315 = require("./73315.jsx"),
  Chunk404616 = require("./404616.jsx"),
  Chunk510060 = require("./510060.js"),
  Chunk983200 = require("./983200.js"),
  Chunk196255 = require("./196255.jsx"),
  Chunk858543 = require("./858543.jsx"),
  Chunk482062 = require("./482062.jsx"),
  Chunk883728 = require("./883728.jsx"),
  Chunk710352 = require("./710352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk740202 = require("./740202.js");

function H(e) {
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
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let U = Chunk647438.memo(function(e) {
  let {
    id: t,
    threadId: n,
    goToThread: i,
    overrideMedia: a,
    className: l,
    coords: s,
    gridCoords: c,
    gridSectionBoundaries: d,
    observePostVisibilityAnalytics: u
  } = e, m = (0, o.e7)([y.Z], () => y.Z.getChannel(n));
  return null == m ? null : (0, r.jsx)(V, {
    id: t,
    channel: m,
    goToThread: i,
    overrideMedia: a,
    className: l,
    coords: s,
    gridCoords: c,
    observePostVisibilityAnalytics: u,
    gridSectionBoundaries: d
  })
});

function V(e) {
  let {
    id: t,
    channel: n,
    goToThread: a,
    overrideMedia: u,
    className: m,
    coords: h,
    gridCoords: g,
    gridSectionBoundaries: f,
    observePostVisibilityAnalytics: x
  } = e, p = n.id, b = i.useRef(null), j = (0, o.e7)([C.ZP], () => C.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id), {
    firstMessage: v,
    loaded: _
  } = (0, S.cl)(n), {
    messageCountText: y
  } = (0, T.nP)(n), {
    isNew: w,
    hasUnreads: O
  } = (0, T.J$)(n), P = i.useRef(null), {
    handleLeftClick: N,
    handleRightClick: R
  } = (0, A.Z)({
    facepileRef: P,
    goToThread: a,
    channel: n
  });
  i.useEffect(() => {
    null == x || x(b.current, p)
  }, [x, p]);
  let Z = (0, T.xw)(n, s.z.CREATION_DATE, L.R6.POSTED_DURATION_AGO),
    F = (0, I.NN)(n),
    B = (0, k.nX)({
      id: t,
      row: g.row,
      column: g.column,
      section: g.section,
      boundaries: f
    }),
    {
      onFocus: U
    } = B,
    V = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(B, ["onFocus"]);
  return (0, r.jsxs)("li", {
    ref: b,
    onClick: N,
    onFocus: U,
    onContextMenu: R,
    className: l()(z.container, m, {
      [z.isOpen]: j
    }),
    style: H({}, h),
    children: [(0, r.jsx)(d.P3F, H({
      onClick: N,
      focusProps: {
        ringTarget: b
      },
      onContextMenu: R,
      "aria-label": D.intl.formatToPlainString(D.t.pgYN6e, {
        title: n.name,
        count: y
      }),
      className: z.focusTarget
    }, V)), (0, r.jsxs)("div", {
      className: z.header,
      children: [(0, r.jsxs)("div", {
        className: z.authorRow,
        children: [(0, r.jsxs)("div", {
          className: z.rowGroup,
          children: [(0, r.jsx)(M.Z, {
            channel: n,
            message: v
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: z.postCreationTimestamp,
            children: Z
          })]
        }), w ? (0, r.jsx)(d.IGR, {
          className: z.newBadge,
          color: c.Z.unsafe_rawColors.BRAND_260.css,
          text: D.intl.string(D.t.y2b7CA)
        }) : null]
      }), (0, r.jsx)(d.y5t, {
        children: (0, r.jsx)(d.X6q, {
          variant: "heading-md/extrabold",
          className: z.title,
          color: O ? "header-primary" : "text-muted",
          style: {
            width: "".concat(h.width - 2 * E.I8, "px")
          },
          children: F
        })
      })]
    }), (0, r.jsx)("div", {
      className: z.postBody,
      children: (0, r.jsx)(d.Rny, {
        children: (0, r.jsx)(G, {
          channel: n,
          firstMessage: v,
          isFirstMessageLoaded: _,
          overrideMedia: u,
          coords: h
        })
      })
    }), (0, r.jsx)("div", {
      className: z.footer,
      children: (0, r.jsx)(d.Rny, {
        children: (0, r.jsx)(W, {
          channel: n,
          firstMessage: v,
          facepileRef: P
        })
      })
    })]
  })
}

function G(e) {
  let {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: i,
    overrideMedia: a,
    coords: l
  } = e, {
    isBlocked: s,
    isIgnored: c
  } = (0, o.cj)([O.Z], () => ({
    isBlocked: null != n && O.Z.isBlockedForMessage(n),
    isIgnored: null != n && O.Z.isIgnoredForMessage(n)
  }));
  return s ? (0, r.jsx)($, {
    message: D.intl.string(D.t.Lkp2fH),
    containerWidth: l.width,
    channel: t
  }) : c ? (0, r.jsx)($, {
    message: D.intl.string(D.t.yWK7ZG),
    containerWidth: l.width,
    channel: t
  }) : (0, r.jsx)(q, {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: i,
    overrideMedia: a,
    coords: l
  })
}

function q(e) {
  let {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: i,
    overrideMedia: a,
    coords: l
  } = e, s = (0, o.e7)([y.Z], () => y.Z.getChannel(t.parent_id)), {
    firstMedia: c
  } = (0, T.mX)({
    firstMessage: n,
    formatInline: false,
    noStyleAndInteraction: false
  }), {
    hasUnreads: d
  } = (0, T.J$)(t), u = (0, o.e7)([w.Z], () => w.Z.can(F.Plq.MANAGE_MESSAGES, t)), m = _.QK.useSetting(), h = _.cC.useSetting(), g = (0, b.Z)(h, u), f = (0, P.aU)(n, s, false), [x, p] = (0, E.rI)(l.width - 2 * E.LT), j = (null == n ? true : n.blocked) || null == (null != a ? a : c), v = t.isMediaPost();
  return j ? (0, r.jsx)(Q, {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: i,
    containerWidth: l.width,
    hasUnreads: d
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(J, {
      mediaAttachments: f,
      globalSpoilerRenderSetting: g,
      containerWidth: x,
      containerHeight: v ? 9 / 16 * x : p,
      canAutoPlay: m,
      shouldMaintainAspectRatio: v
    }), (0, r.jsx)("div", {
      className: z.tagsRow,
      children: (0, r.jsx)(Z.ZP, {
        channel: t,
        tagsClassName: z.tagPill
      })
    })]
  })
}

function W(e) {
  let {
    channel: t,
    facepileRef: n,
    firstMessage: i
  } = e, a = (0, m.Q)(t.id), l = (null == i ? true : i.reactions) != null && i.reactions.length > 0;
  return (0, r.jsxs)("div", {
    className: z.forumPostControls,
    children: [(0, r.jsxs)("div", {
      className: z.controlsGroup,
      children: [(0, r.jsx)("div", {
        className: z.messageCountContainer,
        children: (0, r.jsx)(I.m9, {
          channel: t,
          iconSize: 16,
          showReadState: true
        })
      }), a.length > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("span", {
          className: z.bullet,
          children: "•"
        }), (0, r.jsxs)("div", {
          className: z.typing,
          children: [(0, r.jsx)(I.og, {
            channel: t,
            userIds: a,
            facepileRef: n
          }), (0, r.jsx)("div", {
            className: z.dots,
            children: (0, r.jsx)(d.bbz, {
              themed: true,
              dotRadius: 2
            })
          }), (0, r.jsx)(u.ZP, {
            channel: t,
            className: z.typingUsers,
            renderDots: false
          })]
        })]
      }) : null]
    }), (0, r.jsxs)("div", {
      className: z.controlsGroup,
      children: [l || null == i ? null : (0, r.jsx)(I.kZ, {
        firstMessage: i,
        channel: t
      }), null == i ? null : (0, r.jsx)(I.au, {
        firstMessage: i,
        channel: t
      })]
    })]
  })
}
let X = e => e.preventDefault(),
  K = Chunk647438.memo(function(e) {
    return (0, r.jsx)(r.Fragment, {
      children: (0, v.Yi)(B(H({}, e), {
        analyticsSource: "ForumPostMediaPreviewImage"
      }))
    })
  }),
  J = Chunk647438.memo(function(e) {
    let {
      mediaAttachments: t,
      globalSpoilerRenderSetting: n,
      containerWidth: a,
      containerHeight: s,
      canAutoPlay: o,
      shouldMaintainAspectRatio: c = false
    } = e, {
      containsVideo: u,
      containsGif: m
    } = i.useMemo(() => (0, P.cp)(t), [t]), b = i.useMemo(() => t.slice(R.$x, R.GV), [t]), j = (0, R.tu)({
      numAttachments: b.length,
      containerWidth: a,
      containerHeight: s
    }), v = (0, R.S$)({
      imageContainerStyles: j,
      containerWidth: a,
      containerHeight: s
    }), _ = (0, f.kh)(g.n.GUILD), C = i.useMemo(() => b.map((e, t) => {
      var i;
      let [a, s] = (0, p.As)(e, !n, _), g = (0, p.MC)(s), f = B(H({}, v[t]), {
        src: e.src,
        width: e.width,
        height: e.height,
        alt: null != e.alt && a ? g : e.alt,
        onClick: X,
        shouldRenderAccessory: !m && !u
      }), b = (0, x.d$)(e.src) ? "".concat(e.src, "?format=png") : e.src, C = o && !a ? e.src : b;
      return (0, r.jsxs)("div", {
        className: z.bodyMediaFrame,
        style: j[t],
        children: [c ? (0, r.jsx)(h.Z, B(H({}, f), {
          src: C,
          backgroundSrc: b,
          aspectRatio: f.maxWidth / f.maxHeight,
          alt: null != (i = f.alt) ? i : "",
          className: l()(z.mediaPostContainer, {
            [z.obscured]: a
          }),
          imageChildClassName: z.mediaPostThumbnail
        })) : e.src.startsWith("data:") ? (0, r.jsx)(d.Eep, B(H({}, f), {
          className: z.mediaContainer,
          imageClassName: l()(z.thumbnailOverride, {
            [z.obscured]: a
          })
        })) : (0, r.jsx)(K, B(H({}, f), {
          autoPlay: o && !a,
          containerClassName: z.mosaicMediaContainer,
          imageClassName: l()(z.imageCover, {
            [z.obscured]: a
          }),
          responsive: true
        })), a && (0, r.jsx)("div", {
          className: z.obscuredTagContainer,
          children: (0, r.jsx)(N.Z, {
            obscureReason: s,
            iconClassname: z.obscuredTag
          })
        })]
      }, e.src)
    }), [o, m, u, n, j, v, b, c, _]);
    return (0, r.jsxs)("div", {
      className: z.bodyMedia,
      style: {
        width: a,
        height: s
      },
      children: [C, (m || u) && (0, r.jsxs)("div", {
        className: z.mediaIconsRow,
        children: [u && (0, r.jsx)(d.o1U, {
          color: "currentColor",
          size: "custom",
          width: 22,
          height: 22,
          className: z.mediaIcon
        }), m && (0, r.jsx)(d.OUq, {
          size: "custom",
          width: 29,
          height: 29,
          color: "currentColor",
          className: z.mediaIcon
        })]
      }), t.length > R.Vn && (0, r.jsx)(Y, {
        text: (t.length - R.Vn).toString(),
        icon: d.XBm,
        pillClassName: z.moreImagesPill,
        iconClassName: z.moreImagesPillIcon,
        textClassName: z.moreImagesPillText
      })]
    })
  });

function Y(e) {
  let {
    text: t,
    icon: n,
    pillClassName: i,
    iconClassName: a,
    textClassName: l
  } = e;
  return (0, r.jsxs)("div", {
    className: i,
    children: [(0, r.jsx)(n, {
      className: a,
      color: "currentColor"
    }), (0, r.jsxs)(d.Text, {
      variant: "text-xs/medium",
      className: l,
      children: ["+", t]
    })]
  })
}

function Q(e) {
  let {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: a,
    containerWidth: s,
    hasUnreads: o
  } = e, c = _.jU.useSetting(), [u, m] = (0, E.rI)(s - 2 * E.LT), {
    content: h
  } = (0, T.mX)({
    firstMessage: n,
    formatInline: false,
    noStyleAndInteraction: true
  }), {
    shouldRenderTagsRow: g
  } = (0, Z.DM)({
    channel: t,
    isNew: false
  }), f = i.useMemo(() => ({
    width: u,
    height: m
  }), [u, m]), x = o ? z.textContentUnread : z.textContentRead;
  return (0, r.jsxs)("div", {
    className: z.contentPreview,
    style: f,
    children: [(0, r.jsxs)("div", {
      className: z.content,
      children: [a && null == n && (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: o ? "header-secondary" : "text-muted",
        children: D.intl.string(D.t.mE3KJC)
      }), a && null != n && (0, r.jsx)(j.ZP, {
        message: n,
        content: h,
        className: x,
        compact: c
      })]
    }), (0, r.jsx)("div", {
      className: l()(z.textContentFooter, {
        [z.noTags]: !g
      }),
      children: g ? (0, r.jsx)(Z.ZP, {
        channel: t,
        tagsClassName: z.tagPill
      }) : null
    })]
  })
}

function $(e) {
  let {
    message: t,
    containerWidth: n,
    channel: a
  } = e, [s, o] = (0, E.rI)(n - 2 * E.LT), {
    shouldRenderTagsRow: c
  } = (0, Z.DM)({
    channel: a,
    isNew: false
  }), u = i.useMemo(() => ({
    width: s,
    height: o
  }), [s, o]);
  return (0, r.jsxs)("div", {
    className: z.contentPreview,
    style: u,
    children: [(0, r.jsx)("div", {
      className: z.content,
      children: (0, r.jsx)(d.Text, {
        className: z.blockedMessage,
        variant: "text-sm/medium",
        color: "text-muted",
        children: t
      })
    }), (0, r.jsx)("div", {
      className: l()(z.textContentFooter, {
        [z.noTags]: !c
      }),
      children: c ? (0, r.jsx)(Z.ZP, {
        channel: a,
        tagsClassName: z.tagPill
      }) : null
    })]
  })
}