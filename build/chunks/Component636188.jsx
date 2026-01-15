/** Chunk was on web.js **/
/** chunk id: 636188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Y
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk2052 = require("./2052.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk142497 = require("./142497.js"),
  Chunk810788 = require("./810788.js"),
  Chunk260818 = require("./260818.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk709054 = require("./709054.js"),
  Chunk647177 = require("./647177.js"),
  Chunk63985 = require("./63985.js"),
  Chunk678916 = require("./678916.js"),
  Chunk981631 = require("./981631.js"),
  Chunk190378 = require("./190378.js"),
  Chunk486324 = require("./486324.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk859554 = require("./859554.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = 25,
  M = 720;

function k() {
  return [{
    name: P.intl.string(P.t["Sp2NF+"]),
    extensions: ["jpg", "jpeg", "png", "gif", "mp4"]
  }]
}

function U(e) {
  let {
    icon: t,
    onClick: n,
    text: i,
    children: a,
    className: s,
    selected: l = false,
    disabled: u = false,
    onMouseLeave: d,
    onBlur: f
  } = e;
  return (0, r.jsxs)(c.P3F, {
    className: o()(s, w.backgroundOption, {
      [w.backgroundOptionSelected]: l,
      [w.backgroundOptionDisabled]: u
    }),
    onMouseLeave: d,
    onBlur: f,
    onClick: u ? true : n,
    children: [l ? (0, r.jsx)("div", {
      className: w.backgroundOptionRing
    }) : null, (0, r.jsxs)("div", {
      className: w.backgroundOptionInner,
      children: [a, (0, r.jsxs)("div", {
        className: w.backgroundOptionContent,
        children: [(0, r.jsx)(t, {
          className: w.backgroundIconOptionIcon,
          color: "currentColor",
          size: "custom",
          width: 18,
          height: 18
        }), (0, r.jsx)(c.Text, {
          className: w.backgroundOptionText,
          color: "none",
          variant: "text-sm/normal",
          children: i
        })]
      })]
    })]
  })
}

function G(e) {
  let {
    option: t,
    source: n,
    isAnimated: a
  } = e, [o, s] = i.useState(false);
  if (i.useEffect(() => {
      new Image().src = n
    }, [n]), !a || null == t) return (0, r.jsx)("div", {
    className: w.backgroundImageOption,
    style: {
      backgroundImage: "url(".concat(n, ")")
    }
  });
  let l = (0, y.rI)({
    userId: t.user_id,
    assetId: t.id,
    assetHash: t.asset,
    size: M,
    canAnimate: false
  });
  return (0, r.jsx)("img", {
    onMouseMove: () => s(true),
    onMouseLeave: () => s(false),
    className: w.backgroundImageOption,
    src: o ? n : l,
    alt: t.id
  })
}

function Z(e) {
  let {
    option: t,
    source: a,
    selected: l = false,
    onSelectOption: f,
    isAnimatedImage: y,
    isVideo: O,
    hotspotLocation: S
  } = e, I = (0, d.O)(), {
    analyticsLocations: C
  } = (0, _.ZP)(p.Z.VIDEO_BACKGROUND_IMAGE_OPTION), A = (0, s.e7)([g.Z], () => null != S && g.Z.hasHotspot(S)), R = i.useCallback(e => {
    if (!(0, E.V)(e)) throw e
  }, []), x = O ? (0, r.jsx)(h.Z, {
    className: w.backgroundImageOption,
    src: a,
    loop: true,
    playOnHover: true,
    muted: true,
    onPlayError: R
  }) : (0, r.jsx)(G, {
    isAnimated: y,
    option: (0, v.rD)(t) ? t : true,
    source: a
  });

  function j() {
    null != S && A && (m.Kw(S), b.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
      type: N.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
      location: I.location,
      location_stack: C
    }))
  }
  return (0, r.jsxs)(c.P3F, {
    className: o()(w.backgroundOption, {
      [w.backgroundOptionSelected]: l
    }),
    onClick: () => f(t),
    onContextMenu: e => (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("99414").then(n.bind(n, 187658));
      return n => (0, r.jsx)(e, L(D({}, n), {
        backgroundOption: t,
        optionIsInUse: l
      }))
    }),
    children: [l ? (0, r.jsx)("div", {
      className: w.backgroundOptionRing
    }) : null, (0, r.jsx)("div", {
      onFocus: j,
      onMouseEnter: j,
      className: w.backgroundOptionInner,
      children: x
    }), O || y ? (0, r.jsx)("div", {
      className: w.playIcon,
      children: (0, r.jsx)(c.o1U, {
        size: "xxs",
        color: "currentColor"
      })
    }) : null, A && (0, r.jsx)(c.IGR, {
      text: P.intl.string(P.t.y2b7CA),
      className: w.newTextBadge
    })]
  })
}

function F() {
  return (0, r.jsxs)("div", {
    className: w.customBackgroundTooltip,
    children: [(0, r.jsx)(c.SrA, {
      size: "md",
      color: "currentColor",
      className: w.customBackgroundTooltipIcon
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: P.intl.string(P.t["T+yRY3"])
    })]
  })
}

function B(e) {
  let {
    onClick: t,
    tooltipText: n,
    disabled: i = false
  } = e, a = (0, s.e7)([g.Z], () => g.Z.hasHotspot(C.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

  function o() {
    m.Kw(C.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
  }
  let u = a ? P.intl.string(P.t["5TUJOv"]) : n;
  return (0, r.jsx)(l.u, {
    text: u,
    children: (0, r.jsxs)("div", {
      className: w.newBackgroundTooltipContainer,
      children: [(0, r.jsxs)(U, {
        className: w.__invalid_backgroundOptionBlurred,
        disabled: i,
        icon: c.FmF,
        onClick: t,
        onMouseLeave: o,
        onBlur: o,
        text: (0, r.jsxs)("div", {
          className: w.backgroundCustomInlineUpsell,
          children: [(0, r.jsx)(c.SrA, {
            size: "md",
            color: "currentColor",
            className: w.backgroundCustomInlineUpsellIcon
          }), (0, r.jsx)("div", {
            className: w.overflowEllipsis,
            children: P.intl.string(P.t["1t7U8W"])
          })]
        }),
        children: [(0, r.jsx)("div", {
          className: w.backgroundCustomInlineUpsellBackground
        }), (0, r.jsx)("div", {
          className: w.backgroundCustomInlineUpsellBackgroundDarkener
        })]
      }), a && (0, r.jsx)(c.IGR, {
        text: P.intl.string(P.t.y2b7CA),
        className: w.newTextBadge
      })]
    })
  })
}

function V(e) {
  let {
    onClick: t
  } = e, n = (0, d.O)(), {
    analyticsLocations: i
  } = (0, _.ZP)(p.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
  return (0, f.ZP)(() => {
    b.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
      type: N.cd.VIDEO_BACKGROUNDS_INLINE,
      location: n.location,
      location_stack: i
    })
  }), (0, r.jsx)(B, {
    onClick: t,
    tooltipText: P.intl.string(P.t["IqE0T/"])
  })
}

function H(e) {
  let {
    onAddBackgroundImage: t,
    disabled: i
  } = e, a = (0, c.vRw)(), o = i ? P.intl.formatToPlainString(P.t.ykGFeD, {
    maxCustomBackgrounds: j
  }) : P.intl.string(P.t.Qx0tFc), s = k();

  function l() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("91689"), n.e("89289"), n.e("32603")]).then(n.bind(n, 28130));
      return n => (0, r.jsx)(e, D({
        maxFileSizeBytes: I.SJ,
        onComplete: e => {
          let {
            imageUri: n,
            file: r,
            isFromTenor: i
          } = e;
          return t(n, r, i)
        },
        uploadType: A.pC.VIDEO_BACKGROUND,
        filters: s,
        modalTitle: P.intl.string(P.t.yG2pUi),
        imageSpecifications: P.intl.string(P.t["72OaxN"]),
        uploadOptionTitle: P.intl.string(P.t.xsW8u6),
        showUpsellHeader: true
      }, n))
    }, {
      contextKey: a
    })
  }
  return (0, r.jsx)(B, {
    disabled: i,
    onClick: l,
    tooltipText: o
  })
}

function Y(e) {
  let {
    canUseCustomBackgrounds: t,
    customBackgroundOptions: n,
    selectedOption: a,
    onSelectOption: s,
    onUpsellClick: u,
    onAddBackgroundImage: d,
    responsive: f = true
  } = e, h = i.useMemo(() => n.sort((e, t) => null == e.last_used || null == t.last_used ? O.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime()), [n]), m = h.length >= j, {
    analyticsLocations: g
  } = (0, _.ZP)(p.Z.VIDEO_BACKGROUND_OPTIONS), E = Object.values((0, S.Z)()).sort((e, t) => I.E1[e.id] - I.E1[t.id]);
  return (0, r.jsx)(_.Gt, {
    value: g,
    children: (0, r.jsxs)("div", {
      className: o()(w.backgroundOptions, !f && w.backgroundOptionsLarge),
      children: [(0, r.jsx)(U, {
        selected: null == a,
        icon: c.t6m,
        onClick: () => s(null),
        text: P.intl.string(P.t.fUdMeO)
      }), (0, r.jsx)(U, {
        selected: a === I.f7,
        icon: c.yMH,
        onClick: () => s(I.f7),
        text: P.intl.string(P.t.LhSyL8),
        children: (0, r.jsx)("div", {
          className: w.backgroundOptionBlurBackground
        })
      }), t ? (0, r.jsx)(H, {
        onAddBackgroundImage: d,
        disabled: m
      }) : (0, r.jsx)(V, {
        onClick: u
      }), h.map(e => {
        let t = (0, y.rI)({
          userId: e.user_id,
          assetId: e.id,
          assetHash: e.asset,
          size: M
        });
        return null == t ? null : (0, r.jsx)(l.u, {
          __unsupportedReactNodeAsText: (0, r.jsx)(F, {}),
          "aria-label": P.intl.string(P.t["T+yRY3"]),
          children: (0, r.jsx)(Z, {
            option: e,
            source: t,
            selected: (0, v.rD)(a) && a.id === e.id,
            onSelectOption: s,
            isVideo: (0, y.ay)(e.asset),
            isAnimatedImage: (0, y.xR)(e.asset)
          }, e.id)
        }, e.id)
      }), E.map(e => {
        let t = true === e.isVideo;
        return (0, r.jsx)(l.u, {
          text: e.name,
          "aria-label": e.name,
          children: (0, r.jsx)(Z, {
            option: e.id,
            source: e.source,
            selected: a === e.id,
            onSelectOption: s,
            isVideo: t,
            isAnimatedImage: false,
            hotspotLocation: e.hotspotLocation
          }, e.id)
        }, e.id)
      })]
    })
  })
}