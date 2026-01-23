/** Chunk was on 46875 **/
/** chunk id: 891046, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk602137 = require("./602137.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk147192 = require("./147192.jsx"),
  Chunk810181 = require("./810181.js"),
  Chunk234914 = require("./234914.jsx"),
  Chunk930125 = require("./930125.js"),
  Chunk282108 = require("./282108.js"),
  Chunk77350 = require("./77350.js"),
  Chunk294520 = require("./294520.js"),
  Chunk863439 = require("./863439.js"),
  Chunk291812 = require("./291812.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk435470 = require("./435470.js"),
  Chunk473503 = require("./473503.js"),
  Chunk256265 = require("./256265.js"),
  Chunk710948 = require("./710948.jsx"),
  Chunk835369 = require("./835369.jsx"),
  Chunk414368 = require("./414368.js"),
  Chunk715493 = require("./715493.js"),
  Chunk313880 = require("./313880.jsx"),
  Chunk52933 = require("./52933.jsx"),
  Chunk848551 = require("./848551.jsx"),
  Chunk505234 = require("./505234.jsx"),
  Chunk253913 = require("./253913.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk368964 = require("./368964.js");

function z(e) {
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

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let B = Chunk64700.memo(function(e) {
  let {
    id: t,
    threadId: n,
    goToThread: r,
    overrideMedia: i,
    className: a,
    coords: s,
    gridCoords: c,
    gridSectionBoundaries: d,
    observePostVisibilityAnalytics: u
  } = e, m = (0, o.bG)([A.A], () => A.A.getChannel(n));
  return null == m ? null : (0, l.jsx)(V, {
    id: t,
    channel: m,
    goToThread: r,
    overrideMedia: i,
    className: a,
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
    goToThread: i,
    overrideMedia: u,
    className: m,
    coords: h,
    gridCoords: g,
    gridSectionBoundaries: x,
    observePostVisibilityAnalytics: f
  } = e, p = n.id, b = r.useRef(null), j = (0, o.bG)([y.Ay], () => y.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id), {
    firstMessage: v,
    loaded: _
  } = (0, S.OA)(n), {
    messageCountText: A
  } = (0, O.k6)(n), {
    isNew: C,
    hasUnreads: T
  } = (0, O.X5)(n), N = r.useRef(null), {
    handleLeftClick: w,
    handleRightClick: P
  } = (0, D.A)({
    facepileRef: N,
    goToThread: i,
    channel: n
  });
  r.useEffect(() => {
    null == f || f(b.current, p)
  }, [f, p]);
  let k = (0, O.Mw)(n, s.T.CREATION_DATE, L.EG.POSTED_DURATION_AGO),
    U = (0, E.hf)(n),
    H = (0, M.E)({
      id: t,
      row: g.row,
      column: g.column,
      section: g.section,
      boundaries: x
    }),
    {
      onFocus: B
    } = H,
    V = function(e, t) {
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
    }(H, ["onFocus"]);
  return (0, l.jsxs)("li", {
    ref: b,
    onClick: w,
    onFocus: B,
    onContextMenu: P,
    className: a()(G.kL, m, {
      [G.nT]: j
    }),
    style: z({}, h),
    children: [(0, l.jsx)(d.DUT, z({
      onClick: w,
      focusProps: {
        ringTarget: b
      },
      onContextMenu: P,
      "aria-label": F.intl.formatToPlainString(F.t.pgYN6c, {
        title: n.name,
        count: A
      }),
      className: G.Kv
    }, V)), (0, l.jsxs)("div", {
      className: G.wx,
      children: [(0, l.jsxs)("div", {
        className: G.Y6,
        children: [(0, l.jsxs)("div", {
          className: G.wO,
          children: [(0, l.jsx)(R.A, {
            channel: n,
            message: v
          }), (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            className: G.SD,
            children: k
          })]
        }), C ? (0, l.jsx)(d.LpS, {
          className: G.Ad,
          color: c.A.unsafe_rawColors.BRAND_260.css,
          text: F.intl.string(F.t.y2b7CA)
        }) : null]
      }), (0, l.jsx)(d.Fmo, {
        children: (0, l.jsx)(d.Heading, {
          variant: "heading-md/extrabold",
          className: G.DD,
          color: T ? "text-strong" : "text-muted",
          style: {
            width: "".concat(h.width - 2 * I.qf, "px")
          },
          children: U
        })
      })]
    }), (0, l.jsx)("div", {
      className: G.PU,
      children: (0, l.jsx)(d.M1G, {
        children: (0, l.jsx)(K, {
          channel: n,
          firstMessage: v,
          isFirstMessageLoaded: _,
          overrideMedia: u,
          coords: h
        })
      })
    }), (0, l.jsx)("div", {
      className: G.qr,
      children: (0, l.jsx)(d.M1G, {
        children: (0, l.jsx)(q, {
          channel: n,
          firstMessage: v,
          facepileRef: N
        })
      })
    })]
  })
}

function K(e) {
  let {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: r,
    overrideMedia: i,
    coords: a
  } = e, {
    isBlocked: s,
    isIgnored: c
  } = (0, o.cf)([T.A], () => ({
    isBlocked: null != n && T.A.isBlockedForMessage(n),
    isIgnored: null != n && T.A.isIgnoredForMessage(n)
  }));
  return s ? (0, l.jsx)($, {
    message: F.intl.string(F.t.Lkp2fB),
    containerWidth: a.width,
    channel: t
  }) : c ? (0, l.jsx)($, {
    message: F.intl.string(F.t.yWK7ZM),
    containerWidth: a.width,
    channel: t
  }) : (0, l.jsx)(W, {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: r,
    overrideMedia: i,
    coords: a
  })
}

function W(e) {
  let {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: r,
    overrideMedia: i,
    coords: a
  } = e, s = (0, o.bG)([A.A], () => A.A.getChannel(t.parent_id)), {
    firstMedia: c
  } = (0, O.gk)({
    firstMessage: n,
    formatInline: false,
    noStyleAndInteraction: false
  }), {
    hasUnreads: d
  } = (0, O.X5)(t), u = (0, o.bG)([C.A], () => C.A.can(U.xBc.MANAGE_MESSAGES, t)), m = _.kt.useSetting(), h = _.gs.useSetting(), g = (0, b.A)(h, u), x = (0, N.no)(n, s, false), f = t.isMediaPost(), [p, j] = (0, I.tm)(a.width - 2 * I.IZ, f ? I.PL.SIXTEEN_BY_NINE : I.PL.THREE_BY_TWO);
  return (null == n ? true : n.blocked) || null == (null != i ? i : c) ? (0, l.jsx)(Z, {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: r,
    containerWidth: a.width,
    hasUnreads: d
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(Q, {
      mediaAttachments: x,
      globalSpoilerRenderSetting: g,
      containerWidth: p,
      containerHeight: j,
      canAutoPlay: m,
      shouldMaintainAspectRatio: f
    }), (0, l.jsx)("div", {
      className: G.GA,
      children: (0, l.jsx)(k.Ay, {
        channel: t,
        tagsClassName: G.uU
      })
    })]
  })
}

function q(e) {
  let {
    channel: t,
    facepileRef: n,
    firstMessage: r
  } = e, i = (0, m.m)(t.id), a = (null == r ? true : r.reactions) != null && r.reactions.length > 0;
  return (0, l.jsxs)("div", {
    className: G.GD,
    children: [(0, l.jsxs)("div", {
      className: G.QW,
      children: [(0, l.jsx)("div", {
        className: G.mz,
        children: (0, l.jsx)(E.$k, {
          channel: t,
          iconSize: 16,
          showReadState: true
        })
      }), i.length > 0 ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("span", {
          className: G.xE,
          children: "•"
        }), (0, l.jsxs)("div", {
          className: G.IW,
          children: [(0, l.jsx)(E.gL, {
            channel: t,
            userIds: i,
            facepileRef: n
          }), (0, l.jsx)("div", {
            className: G.r$,
            children: (0, l.jsx)(d.nvX, {
              themed: true,
              dotRadius: 2
            })
          }), (0, l.jsx)(u.Ay, {
            channel: t,
            className: G.mD,
            renderDots: false
          })]
        })]
      }) : null]
    }), (0, l.jsxs)("div", {
      className: G.QW,
      children: [a || null == r ? null : (0, l.jsx)(E.NA, {
        firstMessage: r,
        channel: t
      }), null == r ? null : (0, l.jsx)(E.cn, {
        firstMessage: r,
        channel: t
      })]
    })]
  })
}
let J = e => e.preventDefault(),
  X = Chunk64700.memo(function(e) {
    return (0, l.jsx)(l.Fragment, {
      children: (0, v.LL)(H(z({}, e), {
        analyticsSource: "ForumPostMediaPreviewImage"
      }))
    })
  }),
  Q = Chunk64700.memo(function(e) {
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
    } = r.useMemo(() => (0, N.$2)(t), [t]), b = r.useMemo(() => t.slice(P.xA, P.lV), [t]), j = (0, P.eX)({
      numAttachments: b.length,
      containerWidth: i,
      containerHeight: s
    }), v = (0, P.p2)({
      imageContainerStyles: j,
      containerWidth: i,
      containerHeight: s
    }), _ = (0, x.O8)(g.v.GUILD), y = r.useMemo(() => b.map((e, t) => {
      var r;
      let [i, s] = (0, p.K6)(e, !n, _), g = (0, p.rx)(s), x = H(z({}, v[t]), {
        src: e.src,
        width: e.width,
        height: e.height,
        alt: null != e.alt && i ? g : e.alt,
        onClick: J,
        shouldRenderAccessory: !m && !u
      }), b = (0, f.ge)(e.src) ? "".concat(e.src, "?format=png") : e.src, y = o && !i ? e.src : b;
      return (0, l.jsxs)("div", {
        className: G.UV,
        style: j[t],
        children: [c ? (0, l.jsx)(h.A, H(z({}, x), {
          src: y,
          backgroundSrc: b,
          aspectRatio: x.maxWidth / x.maxHeight,
          alt: null != (r = x.alt) ? r : "",
          className: a()(G.EN, {
            [G.cd]: i
          }),
          imageChildClassName: G.Rp
        })) : e.src.startsWith("data:") ? (0, l.jsx)(d._V3, H(z({}, x), {
          className: G.il,
          imageClassName: a()(G.LW, {
            [G.cd]: i
          })
        })) : (0, l.jsx)(X, H(z({}, x), {
          autoPlay: o && !i,
          containerClassName: G.EK,
          imageClassName: a()(G.rp, {
            [G.cd]: i
          }),
          responsive: true
        })), i && (0, l.jsx)("div", {
          className: G.X,
          children: (0, l.jsx)(w.A, {
            obscureReason: s,
            iconClassname: G.yo
          })
        })]
      }, e.src)
    }), [o, m, u, n, j, v, b, c, _]);
    return (0, l.jsxs)("div", {
      className: G.pV,
      style: {
        width: i,
        height: s
      },
      children: [y, (m || u) && (0, l.jsxs)("div", {
        className: G.vz,
        children: [u && (0, l.jsx)(d.udU, {
          color: "currentColor",
          size: "custom",
          width: 22,
          height: 22,
          className: G.cU
        }), m && (0, l.jsx)(d.Osp, {
          size: "custom",
          width: 29,
          height: 29,
          color: "currentColor",
          className: G.cU
        })]
      }), t.length > P.Mm && (0, l.jsx)(Y, {
        text: (t.length - P.Mm).toString(),
        icon: d.xfq,
        pillClassName: G.v3,
        iconClassName: G.In,
        textClassName: G.EY
      })]
    })
  });

function Y(e) {
  let {
    text: t,
    icon: n,
    pillClassName: r,
    iconClassName: i,
    textClassName: a
  } = e;
  return (0, l.jsxs)("div", {
    className: r,
    children: [(0, l.jsx)(n, {
      className: i,
      color: "currentColor"
    }), (0, l.jsxs)(d.Text, {
      variant: "text-xs/medium",
      className: a,
      children: ["+", t]
    })]
  })
}

function Z(e) {
  let {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: i,
    containerWidth: s,
    hasUnreads: o
  } = e, c = _.hH.useSetting(), [u, m] = (0, I.tm)(s - 2 * I.IZ), {
    content: h
  } = (0, O.gk)({
    firstMessage: n,
    formatInline: false,
    noStyleAndInteraction: true
  }), {
    shouldRenderTagsRow: g
  } = (0, k.BA)({
    channel: t,
    isNew: false
  }), x = r.useMemo(() => ({
    width: u,
    height: m
  }), [u, m]), f = o ? G.kR : G.b8;
  return (0, l.jsxs)("div", {
    className: G.Cv,
    style: x,
    children: [(0, l.jsxs)("div", {
      className: G.Qs,
      children: [i && null == n && (0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: o ? "text-default" : "text-muted",
        children: F.intl.string(F.t.mE3KJN)
      }), i && null != n && (0, l.jsx)(j.Ay, {
        message: n,
        content: h,
        className: f,
        compact: c
      })]
    }), (0, l.jsx)("div", {
      className: a()(G.kh, {
        [G.ZH]: !g
      }),
      children: g ? (0, l.jsx)(k.Ay, {
        channel: t,
        tagsClassName: G.uU
      }) : null
    })]
  })
}

function $(e) {
  let {
    message: t,
    containerWidth: n,
    channel: i
  } = e, [s, o] = (0, I.tm)(n - 2 * I.IZ), {
    shouldRenderTagsRow: c
  } = (0, k.BA)({
    channel: i,
    isNew: false
  }), u = r.useMemo(() => ({
    width: s,
    height: o
  }), [s, o]);
  return (0, l.jsxs)("div", {
    className: G.Cv,
    style: u,
    children: [(0, l.jsx)("div", {
      className: G.Qs,
      children: (0, l.jsx)(d.Text, {
        className: G.Wv,
        variant: "text-sm/medium",
        color: "text-muted",
        children: t
      })
    }), (0, l.jsx)("div", {
      className: a()(G.kh, {
        [G.ZH]: !c
      }),
      children: c ? (0, l.jsx)(k.Ay, {
        channel: i,
        tagsClassName: G.uU
      }) : null
    })]
  })
}