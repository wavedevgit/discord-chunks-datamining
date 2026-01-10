/** Chunk was on 49131 **/
/** chunk id: 219664, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk489549 = require("./489549.js");

function z(e) {
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
let U = Chunk473749.memo(function(e) {
  let {
    id: t,
    threadId: n,
    goToThread: a,
    overrideMedia: i,
    className: l,
    coords: s,
    gridCoords: c,
    gridSectionBoundaries: d,
    observePostVisibilityAnalytics: u
  } = e, m = (0, o.e7)([T.Z], () => T.Z.getChannel(n));
  return null == m ? null : (0, r.jsx)(G, {
    id: t,
    channel: m,
    goToThread: a,
    overrideMedia: i,
    className: l,
    coords: s,
    gridCoords: c,
    observePostVisibilityAnalytics: u,
    gridSectionBoundaries: d
  })
});

function G(e) {
  let {
    id: t,
    channel: n,
    goToThread: i,
    overrideMedia: u,
    className: m,
    coords: h,
    gridCoords: f,
    gridSectionBoundaries: g,
    observePostVisibilityAnalytics: x
  } = e, b = n.id, p = a.useRef(null), j = (0, o.e7)([y.ZP], () => y.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id), {
    firstMessage: v,
    loaded: C
  } = (0, O.cl)(n), {
    messageCountText: T
  } = (0, w.nP)(n), {
    isNew: S,
    hasUnreads: N
  } = (0, w.J$)(n), P = a.useRef(null), {
    handleLeftClick: I,
    handleRightClick: R
  } = (0, A.Z)({
    facepileRef: P,
    goToThread: i,
    channel: n
  });
  a.useEffect(() => {
    null == x || x(p.current, b)
  }, [x, b]);
  let Z = (0, w.xw)(n, s.z.CREATION_DATE, L.R6.POSTED_DURATION_AGO),
    F = (0, E.NN)(n),
    B = (0, k.nX)({
      id: t,
      row: f.row,
      column: f.column,
      section: f.section,
      boundaries: g
    }),
    {
      onFocus: U
    } = B,
    G = function(e, t) {
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
    }(B, ["onFocus"]);
  return (0, r.jsxs)("li", {
    ref: p,
    onClick: I,
    onFocus: U,
    onContextMenu: R,
    className: l()(H.container, m, {
      [H.isOpen]: j
    }),
    style: z({}, h),
    children: [(0, r.jsx)(d.P3F, z({
      onClick: I,
      focusProps: {
        ringTarget: p
      },
      onContextMenu: R,
      "aria-label": D.intl.formatToPlainString(D.t.pgYN6c, {
        title: n.name,
        count: T
      }),
      className: H.focusTarget
    }, G)), (0, r.jsxs)("div", {
      className: H.header,
      children: [(0, r.jsxs)("div", {
        className: H.authorRow,
        children: [(0, r.jsxs)("div", {
          className: H.rowGroup,
          children: [(0, r.jsx)(M.Z, {
            channel: n,
            message: v
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            className: H.postCreationTimestamp,
            children: Z
          })]
        }), S ? (0, r.jsx)(d.IGR, {
          className: H.newBadge,
          color: c.Z.unsafe_rawColors.BRAND_260.css,
          text: D.intl.string(D.t.y2b7CA)
        }) : null]
      }), (0, r.jsx)(d.y5t, {
        children: (0, r.jsx)(d.Heading, {
          variant: "heading-md/extrabold",
          className: H.title,
          color: N ? "text-strong" : "text-muted",
          style: {
            width: "".concat(h.width - 2 * _.I8, "px")
          },
          children: F
        })
      })]
    }), (0, r.jsx)("div", {
      className: H.postBody,
      children: (0, r.jsx)(d.Rny, {
        children: (0, r.jsx)(V, {
          channel: n,
          firstMessage: v,
          isFirstMessageLoaded: C,
          overrideMedia: u,
          coords: h
        })
      })
    }), (0, r.jsx)("div", {
      className: H.footer,
      children: (0, r.jsx)(d.Rny, {
        children: (0, r.jsx)(q, {
          channel: n,
          firstMessage: v,
          facepileRef: P
        })
      })
    })]
  })
}

function V(e) {
  let {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: a,
    overrideMedia: i,
    coords: l
  } = e, {
    isBlocked: s,
    isIgnored: c
  } = (0, o.cj)([N.Z], () => ({
    isBlocked: null != n && N.Z.isBlockedForMessage(n),
    isIgnored: null != n && N.Z.isIgnoredForMessage(n)
  }));
  return s ? (0, r.jsx)($, {
    message: D.intl.string(D.t.Lkp2fB),
    containerWidth: l.width,
    channel: t
  }) : c ? (0, r.jsx)($, {
    message: D.intl.string(D.t.yWK7ZM),
    containerWidth: l.width,
    channel: t
  }) : (0, r.jsx)(W, {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: a,
    overrideMedia: i,
    coords: l
  })
}

function W(e) {
  let {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: a,
    overrideMedia: i,
    coords: l
  } = e, s = (0, o.e7)([T.Z], () => T.Z.getChannel(t.parent_id)), {
    firstMedia: c
  } = (0, w.mX)({
    firstMessage: n,
    formatInline: false,
    noStyleAndInteraction: false
  }), {
    hasUnreads: d
  } = (0, w.J$)(t), u = (0, o.e7)([S.Z], () => S.Z.can(F.Plq.MANAGE_MESSAGES, t)), m = C.QK.useSetting(), h = C.cC.useSetting(), f = (0, p.Z)(h, u), g = (0, P.aU)(n, s, false), x = t.isMediaPost(), [b, j] = (0, _.rI)(l.width - 2 * _.LT, x ? _.Lv.SIXTEEN_BY_NINE : _.Lv.THREE_BY_TWO);
  return (null == n ? true : n.blocked) || null == (null != i ? i : c) ? (0, r.jsx)(Q, {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: a,
    containerWidth: l.width,
    hasUnreads: d
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Y, {
      mediaAttachments: g,
      globalSpoilerRenderSetting: f,
      containerWidth: b,
      containerHeight: j,
      canAutoPlay: m,
      shouldMaintainAspectRatio: x
    }), (0, r.jsx)("div", {
      className: H.tagsRow,
      children: (0, r.jsx)(Z.ZP, {
        channel: t,
        tagsClassName: H.tagPill
      })
    })]
  })
}

function q(e) {
  let {
    channel: t,
    facepileRef: n,
    firstMessage: a
  } = e, i = (0, m.Q)(t.id), l = (null == a ? true : a.reactions) != null && a.reactions.length > 0;
  return (0, r.jsxs)("div", {
    className: H.forumPostControls,
    children: [(0, r.jsxs)("div", {
      className: H.controlsGroup,
      children: [(0, r.jsx)("div", {
        className: H.messageCountContainer,
        children: (0, r.jsx)(E.m9, {
          channel: t,
          iconSize: 16,
          showReadState: true
        })
      }), i.length > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("span", {
          className: H.bullet,
          children: "•"
        }), (0, r.jsxs)("div", {
          className: H.typing,
          children: [(0, r.jsx)(E.og, {
            channel: t,
            userIds: i,
            facepileRef: n
          }), (0, r.jsx)("div", {
            className: H.dots,
            children: (0, r.jsx)(d.bbz, {
              themed: true,
              dotRadius: 2
            })
          }), (0, r.jsx)(u.ZP, {
            channel: t,
            className: H.typingUsers,
            renderDots: false
          })]
        })]
      }) : null]
    }), (0, r.jsxs)("div", {
      className: H.controlsGroup,
      children: [l || null == a ? null : (0, r.jsx)(E.kZ, {
        firstMessage: a,
        channel: t
      }), null == a ? null : (0, r.jsx)(E.au, {
        firstMessage: a,
        channel: t
      })]
    })]
  })
}
let X = e => e.preventDefault(),
  K = Chunk473749.memo(function(e) {
    return (0, r.jsx)(r.Fragment, {
      children: (0, v.Yi)(B(z({}, e), {
        analyticsSource: "ForumPostMediaPreviewImage"
      }))
    })
  }),
  Y = Chunk473749.memo(function(e) {
    let {
      mediaAttachments: t,
      globalSpoilerRenderSetting: n,
      containerWidth: i,
      containerHeight: s,
      canAutoPlay: o,
      shouldMaintainAspectRatio: c = false
    } = e, {
      containsVideo: u,
      containsGif: m
    } = a.useMemo(() => (0, P.cp)(t), [t]), p = a.useMemo(() => t.slice(R.$x, R.GV), [t]), j = (0, R.tu)({
      numAttachments: p.length,
      containerWidth: i,
      containerHeight: s
    }), v = (0, R.S$)({
      imageContainerStyles: j,
      containerWidth: i,
      containerHeight: s
    }), C = (0, g.kh)(f.n.GUILD), y = a.useMemo(() => p.map((e, t) => {
      var a;
      let [i, s] = (0, b.As)(e, !n, C), f = (0, b.MC)(s), g = B(z({}, v[t]), {
        src: e.src,
        width: e.width,
        height: e.height,
        alt: null != e.alt && i ? f : e.alt,
        onClick: X,
        shouldRenderAccessory: !m && !u
      }), p = (0, x.d$)(e.src) ? "".concat(e.src, "?format=png") : e.src, y = o && !i ? e.src : p;
      return (0, r.jsxs)("div", {
        className: H.bodyMediaFrame,
        style: j[t],
        children: [c ? (0, r.jsx)(h.Z, B(z({}, g), {
          src: y,
          backgroundSrc: p,
          aspectRatio: g.maxWidth / g.maxHeight,
          alt: null != (a = g.alt) ? a : "",
          className: l()(H.mediaPostContainer, {
            [H.obscured]: i
          }),
          imageChildClassName: H.mediaPostThumbnail
        })) : e.src.startsWith("data:") ? (0, r.jsx)(d.Eep, B(z({}, g), {
          className: H.mediaContainer,
          imageClassName: l()(H.thumbnailOverride, {
            [H.obscured]: i
          })
        })) : (0, r.jsx)(K, B(z({}, g), {
          autoPlay: o && !i,
          containerClassName: H.mosaicMediaContainer,
          imageClassName: l()(H.imageCover, {
            [H.obscured]: i
          }),
          responsive: true
        })), i && (0, r.jsx)("div", {
          className: H.obscuredTagContainer,
          children: (0, r.jsx)(I.Z, {
            obscureReason: s,
            iconClassname: H.obscuredTag
          })
        })]
      }, e.src)
    }), [o, m, u, n, j, v, p, c, C]);
    return (0, r.jsxs)("div", {
      className: H.bodyMedia,
      style: {
        width: i,
        height: s
      },
      children: [y, (m || u) && (0, r.jsxs)("div", {
        className: H.mediaIconsRow,
        children: [u && (0, r.jsx)(d.o1U, {
          color: "currentColor",
          size: "custom",
          width: 22,
          height: 22,
          className: H.mediaIcon
        }), m && (0, r.jsx)(d.OUq, {
          size: "custom",
          width: 29,
          height: 29,
          color: "currentColor",
          className: H.mediaIcon
        })]
      }), t.length > R.Vn && (0, r.jsx)(J, {
        text: (t.length - R.Vn).toString(),
        icon: d.XBm,
        pillClassName: H.moreImagesPill,
        iconClassName: H.moreImagesPillIcon,
        textClassName: H.moreImagesPillText
      })]
    })
  });

function J(e) {
  let {
    text: t,
    icon: n,
    pillClassName: a,
    iconClassName: i,
    textClassName: l
  } = e;
  return (0, r.jsxs)("div", {
    className: a,
    children: [(0, r.jsx)(n, {
      className: i,
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
    isFirstMessageLoaded: i,
    containerWidth: s,
    hasUnreads: o
  } = e, c = C.jU.useSetting(), [u, m] = (0, _.rI)(s - 2 * _.LT), {
    content: h
  } = (0, w.mX)({
    firstMessage: n,
    formatInline: false,
    noStyleAndInteraction: true
  }), {
    shouldRenderTagsRow: f
  } = (0, Z.DM)({
    channel: t,
    isNew: false
  }), g = a.useMemo(() => ({
    width: u,
    height: m
  }), [u, m]), x = o ? H.textContentUnread : H.textContentRead;
  return (0, r.jsxs)("div", {
    className: H.contentPreview,
    style: g,
    children: [(0, r.jsxs)("div", {
      className: H.content,
      children: [i && null == n && (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: o ? "text-default" : "text-muted",
        children: D.intl.string(D.t.mE3KJN)
      }), i && null != n && (0, r.jsx)(j.ZP, {
        message: n,
        content: h,
        className: x,
        compact: c
      })]
    }), (0, r.jsx)("div", {
      className: l()(H.textContentFooter, {
        [H.noTags]: !f
      }),
      children: f ? (0, r.jsx)(Z.ZP, {
        channel: t,
        tagsClassName: H.tagPill
      }) : null
    })]
  })
}

function $(e) {
  let {
    message: t,
    containerWidth: n,
    channel: i
  } = e, [s, o] = (0, _.rI)(n - 2 * _.LT), {
    shouldRenderTagsRow: c
  } = (0, Z.DM)({
    channel: i,
    isNew: false
  }), u = a.useMemo(() => ({
    width: s,
    height: o
  }), [s, o]);
  return (0, r.jsxs)("div", {
    className: H.contentPreview,
    style: u,
    children: [(0, r.jsx)("div", {
      className: H.content,
      children: (0, r.jsx)(d.Text, {
        className: H.blockedMessage,
        variant: "text-sm/medium",
        color: "text-muted",
        children: t
      })
    }), (0, r.jsx)("div", {
      className: l()(H.textContentFooter, {
        [H.noTags]: !c
      }),
      children: c ? (0, r.jsx)(Z.ZP, {
        channel: i,
        tagsClassName: H.tagPill
      }) : null
    })]
  })
}