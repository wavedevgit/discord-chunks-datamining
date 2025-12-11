/** Chunk was on web.js **/
/** chunk id: 636188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
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

function w(e) {
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

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = 25,
  j = 720;

function M() {
  return [{
    name: Chunk388032.intl.string(Chunk388032.t["Sp2NF+"]),
    extensions: ["jpg", "jpeg", "png", "gif", "mp4"]
  }]
}

function k(e) {
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
    className: o()(s, P.backgroundOption, {
      [P.backgroundOptionSelected]: l,
      [P.backgroundOptionDisabled]: u
    }),
    onMouseLeave: d,
    onBlur: f,
    onClick: u ? true : n,
    children: [l ? (0, r.jsx)("div", {
      className: P.backgroundOptionRing
    }) : null, (0, r.jsxs)("div", {
      className: P.backgroundOptionInner,
      children: [a, (0, r.jsxs)("div", {
        className: P.backgroundOptionContent,
        children: [(0, r.jsx)(t, {
          className: P.backgroundIconOptionIcon,
          color: "currentColor",
          size: "custom",
          width: 18,
          height: 18
        }), (0, r.jsx)(c.Text, {
          className: P.backgroundOptionText,
          color: "none",
          variant: "text-sm/normal",
          children: i
        })]
      })]
    })]
  })
}

function U(e) {
  let {
    option: t,
    source: n,
    isAnimated: a
  } = e, [o, s] = i.useState(false);
  if (i.useEffect(() => {
      new Image().src = n
    }, [n]), !a || null == t) return (0, r.jsx)("div", {
    className: P.backgroundImageOption,
    style: {
      backgroundImage: "url(".concat(n, ")")
    }
  });
  let l = (0, b.rI)({
    userId: t.user_id,
    assetId: t.id,
    assetHash: t.asset,
    size: j,
    canAnimate: false
  });
  return (0, r.jsx)("img", {
    onMouseMove: () => s(true),
    onMouseLeave: () => s(false),
    className: P.backgroundImageOption,
    src: o ? n : l,
    alt: t.id
  })
}

function G(e) {
  let {
    option: t,
    source: i,
    selected: a = false,
    onSelectOption: l,
    isAnimatedImage: f,
    isVideo: b,
    hotspotLocation: y
  } = e, v = (0, d.O)(), {
    analyticsLocations: S
  } = (0, _.ZP)(p.Z.VIDEO_BACKGROUND_IMAGE_OPTION), T = (0, s.e7)([g.Z], () => null != y && g.Z.hasHotspot(y)), C = b ? (0, r.jsx)(m.Z, {
    className: P.backgroundImageOption,
    src: i,
    loop: true,
    playOnHover: true,
    muted: true
  }) : (0, r.jsx)(U, {
    isAnimated: f,
    option: (0, O.rD)(t) ? t : true,
    source: i
  });

  function R() {
    null != y && T && (h.Kw(y), E.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
      type: A.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
      location: v.location,
      location_stack: S
    }))
  }
  return (0, r.jsxs)(c.P3F, {
    className: o()(P.backgroundOption, {
      [P.backgroundOptionSelected]: a
    }),
    onClick: () => l(t),
    onContextMenu: e => (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("99414").then(n.bind(n, 187658));
      return n => (0, r.jsx)(e, x(w({}, n), {
        backgroundOption: t,
        optionIsInUse: a
      }))
    }),
    children: [a ? (0, r.jsx)("div", {
      className: P.backgroundOptionRing
    }) : null, (0, r.jsx)("div", {
      onFocus: R,
      onMouseEnter: R,
      className: P.backgroundOptionInner,
      children: C
    }), b || f ? (0, r.jsx)("div", {
      className: P.playIcon,
      children: (0, r.jsx)(c.o1U, {
        size: "xxs",
        color: "currentColor"
      })
    }) : null, T && (0, r.jsx)(c.IGR, {
      text: N.intl.string(N.t.y2b7CA),
      className: P.newTextBadge
    })]
  })
}

function Z() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk859554.customBackgroundTooltip,
    children: [(0, Chunk54381.jsx)(Chunk481060.SrA, {
      size: "md",
      color: "currentColor",
      className: Chunk859554.customBackgroundTooltipIcon
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t["T+yRY3"])
    })]
  })
}

function B(e) {
  let {
    onClick: t,
    tooltipText: n,
    disabled: i = false
  } = e, a = (0, s.e7)([g.Z], () => g.Z.hasHotspot(T.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

  function o() {
    h.Kw(T.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
  }
  let u = a ? N.intl.string(N.t["5TUJOv"]) : n;
  return (0, r.jsx)(l.u, {
    text: u,
    children: (0, r.jsxs)("div", {
      className: P.newBackgroundTooltipContainer,
      children: [(0, r.jsxs)(k, {
        className: P.__invalid_backgroundOptionBlurred,
        disabled: i,
        icon: c.FmF,
        onClick: t,
        onMouseLeave: o,
        onBlur: o,
        text: (0, r.jsxs)("div", {
          className: P.backgroundCustomInlineUpsell,
          children: [(0, r.jsx)(c.SrA, {
            size: "md",
            color: "currentColor",
            className: P.backgroundCustomInlineUpsellIcon
          }), (0, r.jsx)("div", {
            className: P.overflowEllipsis,
            children: N.intl.string(N.t["1t7U8W"])
          })]
        }),
        children: [(0, r.jsx)("div", {
          className: P.backgroundCustomInlineUpsellBackground
        }), (0, r.jsx)("div", {
          className: P.backgroundCustomInlineUpsellBackgroundDarkener
        })]
      }), a && (0, r.jsx)(c.IGR, {
        text: N.intl.string(N.t.y2b7CA),
        className: P.newTextBadge
      })]
    })
  })
}

function F(e) {
  let {
    onClick: t
  } = e, n = (0, d.O)(), {
    analyticsLocations: i
  } = (0, _.ZP)(p.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
  return (0, f.ZP)(() => {
    E.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
      type: A.cd.VIDEO_BACKGROUNDS_INLINE,
      location: n.location,
      location_stack: i
    })
  }), (0, r.jsx)(B, {
    onClick: t,
    tooltipText: N.intl.string(N.t["IqE0T/"])
  })
}

function V(e) {
  let {
    onAddBackgroundImage: t,
    disabled: i
  } = e, a = (0, c.vRw)(), o = i ? N.intl.formatToPlainString(N.t.ykGFeD, {
    maxCustomBackgrounds: L
  }) : N.intl.string(N.t.Qx0tFc), s = M();

  function l() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("91689"), n.e("89289"), n.e("32603")]).then(n.bind(n, 28130));
      return n => (0, r.jsx)(e, w({
        maxFileSizeBytes: S.SJ,
        onComplete: e => {
          let {
            imageUri: n,
            file: r,
            isFromTenor: i
          } = e;
          return t(n, r, i)
        },
        uploadType: C.pC.VIDEO_BACKGROUND,
        filters: s,
        modalTitle: N.intl.string(N.t.yG2pUi),
        imageSpecifications: N.intl.string(N.t["72OaxN"]),
        uploadOptionTitle: N.intl.string(N.t.xsW8u6),
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

function H(e) {
  let {
    canUseCustomBackgrounds: t,
    customBackgroundOptions: n,
    selectedOption: a,
    onSelectOption: s,
    onUpsellClick: u,
    onAddBackgroundImage: d,
    responsive: f = true
  } = e, m = i.useMemo(() => n.sort((e, t) => null == e.last_used || null == t.last_used ? y.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime()), [n]), h = m.length >= L, {
    analyticsLocations: g
  } = (0, _.ZP)(p.Z.VIDEO_BACKGROUND_OPTIONS), E = Object.values((0, v.Z)()).sort((e, t) => S.E1[e.id] - S.E1[t.id]);
  return (0, r.jsx)(_.Gt, {
    value: g,
    children: (0, r.jsxs)("div", {
      className: o()(P.backgroundOptions, !f && P.backgroundOptionsLarge),
      children: [(0, r.jsx)(k, {
        selected: null == a,
        icon: c.t6m,
        onClick: () => s(null),
        text: N.intl.string(N.t.fUdMeO)
      }), (0, r.jsx)(k, {
        selected: a === S.f7,
        icon: c.yMH,
        onClick: () => s(S.f7),
        text: N.intl.string(N.t.LhSyL8),
        children: (0, r.jsx)("div", {
          className: P.backgroundOptionBlurBackground
        })
      }), t ? (0, r.jsx)(V, {
        onAddBackgroundImage: d,
        disabled: h
      }) : (0, r.jsx)(F, {
        onClick: u
      }), m.map(e => {
        let t = (0, b.rI)({
          userId: e.user_id,
          assetId: e.id,
          assetHash: e.asset,
          size: j
        });
        return null == t ? null : (0, r.jsx)(l.u, {
          __unsupportedReactNodeAsText: (0, r.jsx)(Z, {}),
          "aria-label": N.intl.string(N.t["T+yRY3"]),
          children: (0, r.jsx)(G, {
            option: e,
            source: t,
            selected: (0, O.rD)(a) && a.id === e.id,
            onSelectOption: s,
            isVideo: (0, b.ay)(e.asset),
            isAnimatedImage: (0, b.xR)(e.asset)
          }, e.id)
        }, e.id)
      }), E.map(e => {
        let t = true === e.isVideo;
        return (0, r.jsx)(l.u, {
          text: e.name,
          "aria-label": e.name,
          children: (0, r.jsx)(G, {
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