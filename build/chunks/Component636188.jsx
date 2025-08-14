/** Chunk was on 7384 **/
/** chunk id: 636188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk199306 = require("./199306.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e) {
  let {
    icon: t,
    onClick: n,
    text: r,
    children: s,
    className: l,
    selected: c = false,
    disabled: d = false,
    onMouseLeave: u,
    onBlur: m
  } = e;
  return (0, i.jsxs)(o.P3F, {
    className: a()(l, N.backgroundOption, {
      [N.backgroundOptionSelected]: c,
      [N.backgroundOptionDisabled]: d
    }),
    onMouseLeave: u,
    onBlur: m,
    onClick: d ? true : n,
    children: [c ? (0, i.jsx)("div", {
      className: N.backgroundOptionRing
    }) : null, (0, i.jsxs)("div", {
      className: N.backgroundOptionInner,
      children: [s, (0, i.jsxs)("div", {
        className: N.backgroundOptionContent,
        children: [(0, i.jsx)(t, {
          className: N.backgroundIconOptionIcon,
          color: "currentColor",
          size: "custom",
          width: 18,
          height: 18
        }), (0, i.jsx)(o.Text, {
          className: N.backgroundOptionText,
          color: "none",
          variant: "text-sm/normal",
          children: r
        })]
      })]
    })]
  })
}

function R(e) {
  let {
    option: t,
    source: n,
    isAnimated: s
  } = e, [a, l] = r.useState(false);
  if (r.useEffect(() => {
      new Image().src = n
    }, [n]), !s || null == t) return (0, i.jsx)("div", {
    className: N.backgroundImageOption,
    style: {
      backgroundImage: "url(".concat(n, ")")
    }
  });
  let o = (0, x.rI)({
    userId: t.user_id,
    assetId: t.id,
    assetHash: t.asset,
    size: 720,
    canAnimate: false
  });
  return (0, i.jsx)("img", {
    onMouseMove: () => l(true),
    onMouseLeave: () => l(false),
    className: N.backgroundImageOption,
    src: a ? n : o,
    alt: t.id
  })
}

function D(e) {
  var {
    option: t,
    source: r,
    selected: s = false,
    onSelectOption: u,
    isAnimatedImage: x,
    isVideo: _,
    hotspotLocation: E
  } = e, C = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        s = Object.keys(e);
      for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["option", "source", "selected", "onSelectOption", "isAnimatedImage", "isVideo", "hotspotLocation"]);
  let v = (0, d.O)(),
    {
      analyticsLocations: S
    } = (0, p.ZP)(m.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
    P = (0, l.e7)([f.Z], () => null != E && f.Z.hasHotspot(E)),
    D = _ ? (0, i.jsx)(g.Z, {
      className: N.backgroundImageOption,
      src: r,
      loop: true,
      playOnHover: true,
      muted: true
    }) : (0, i.jsx)(R, {
      isAnimated: x,
      option: (0, j.rD)(t) ? t : true,
      source: r
    });

  function Z() {
    null != E && P && (h.Kw(E), b.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
      type: T.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
      location: v.location,
      location_stack: S
    }))
  }
  return (0, i.jsxs)(o.P3F, A(y({}, C), {
    className: a()(N.backgroundOption, {
      [N.backgroundOptionSelected]: s
    }),
    onClick: () => u(t),
    onContextMenu: e => (0, c.jW)(e, async () => {
      let {
        default: e
      } = await n.e("99414").then(n.bind(n, 187658));
      return n => (0, i.jsx)(e, A(y({}, n), {
        backgroundOption: t,
        optionIsInUse: s
      }))
    }),
    children: [s ? (0, i.jsx)("div", {
      className: N.backgroundOptionRing
    }) : null, (0, i.jsx)("div", {
      onFocus: Z,
      onMouseEnter: Z,
      className: N.backgroundOptionInner,
      children: D
    }), _ || x ? (0, i.jsx)("div", {
      className: N.playIcon,
      children: (0, i.jsx)(o.o1U, {
        size: "xxs",
        color: "currentColor"
      })
    }) : null, P && (0, i.jsx)(o.IGR, {
      text: I.intl.string(I.t.y2b7CA),
      className: N.newTextBadge
    })]
  }))
}

function Z() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk199306.customBackgroundTooltip,
    children: [(0, Chunk255367.jsx)(Chunk481060.SrA, {
      size: "md",
      color: "currentColor",
      className: Chunk199306.customBackgroundTooltipIcon
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t["T+yRY2"])
    })]
  })
}

function w(e) {
  let {
    onClick: t,
    tooltipText: n,
    disabled: r = false
  } = e, s = (0, l.e7)([f.Z], () => f.Z.hasHotspot(v.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

  function a() {
    h.Kw(v.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
  }
  let c = s ? I.intl.string(I.t["5TUJOj"]) : n;
  return (0, i.jsxs)(o.DY3, {
    text: c,
    className: N.newBackgroundTooltipContainer,
    children: [(0, i.jsxs)(P, {
      className: N.__invalid_backgroundOptionBlurred,
      disabled: r,
      icon: o.FmF,
      onClick: t,
      onMouseLeave: a,
      onBlur: a,
      text: (0, i.jsxs)("div", {
        className: N.backgroundCustomInlineUpsell,
        children: [(0, i.jsx)(o.SrA, {
          size: "md",
          color: "currentColor",
          className: N.backgroundCustomInlineUpsellIcon
        }), (0, i.jsx)("div", {
          className: N.overflowEllipsis,
          children: I.intl.string(I.t["1t7U8f"])
        })]
      }),
      children: [(0, i.jsx)("div", {
        className: N.backgroundCustomInlineUpsellBackground
      }), (0, i.jsx)("div", {
        className: N.backgroundCustomInlineUpsellBackgroundDarkener
      })]
    }), s && (0, i.jsx)(o.IGR, {
      text: I.intl.string(I.t.y2b7CA),
      className: N.newTextBadge
    })]
  })
}

function k(e) {
  let {
    onClick: t
  } = e, n = (0, d.O)(), {
    analyticsLocations: r
  } = (0, p.ZP)(m.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
  return (0, u.ZP)(() => {
    b.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
      type: T.cd.VIDEO_BACKGROUNDS_INLINE,
      location: n.location,
      location_stack: r
    })
  }), (0, i.jsx)(w, {
    onClick: t,
    tooltipText: I.intl.string(I.t.IqE0T0)
  })
}

function L(e) {
  let {
    onAddBackgroundImage: t,
    disabled: r
  } = e, s = (0, o.vRw)(), a = r ? I.intl.formatToPlainString(I.t.ykGFeH, {
    maxCustomBackgrounds: 25
  }) : I.intl.string(I.t.Qx0tFR), l = [{
    name: I.intl.string(I.t.Sp2NFx),
    extensions: ["jpg", "jpeg", "png", "gif", "mp4"]
  }];
  return (0, i.jsx)(w, {
    disabled: r,
    onClick: function() {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("91689"), n.e("89289"), n.e("74261")]).then(n.bind(n, 28130));
        return n => (0, i.jsx)(e, y({
          maxFileSizeBytes: C.SJ,
          onComplete: e => {
            let {
              imageUri: n,
              file: i,
              isFromTenor: r
            } = e;
            return t(n, i, r)
          },
          uploadType: S.pC.VIDEO_BACKGROUND,
          filters: l,
          modalTitle: I.intl.string(I.t.yG2pUl),
          imageSpecifications: I.intl.string(I.t["72OaxM"]),
          uploadOptionTitle: I.intl.string(I.t.xsW8u7),
          showUpsellHeader: true
        }, n))
      }, {
        contextKey: s
      })
    },
    tooltipText: a
  })
}

function B(e) {
  let {
    canUseCustomBackgrounds: t,
    customBackgroundOptions: n,
    selectedOption: s,
    onSelectOption: a,
    onUpsellClick: l,
    onAddBackgroundImage: c,
    smallerOptions: d
  } = e, u = r.useMemo(() => n.sort((e, t) => null == e.last_used || null == t.last_used ? _.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime()), [n]), g = u.length >= 25, {
    analyticsLocations: h
  } = (0, p.ZP)(m.Z.VIDEO_BACKGROUND_OPTIONS), f = Object.values((0, E.Z)()).sort((e, t) => C.E1[e.id] - C.E1[t.id]);
  return (0, i.jsx)(p.Gt, {
    value: h,
    children: (0, i.jsxs)("div", {
      className: d ? N.backgroundOptionsSmall : N.backgroundOptionsLarge,
      children: [(0, i.jsx)(P, {
        selected: null == s,
        icon: o.t6m,
        onClick: () => a(null),
        text: I.intl.string(I.t.fUdMeH)
      }), (0, i.jsx)(P, {
        className: N.__invalid_backgroundOptionBlurred,
        selected: s === C.f7,
        icon: o.yMH,
        onClick: () => a(C.f7),
        text: I.intl.string(I.t.LhSyLy),
        children: (0, i.jsx)("div", {
          className: N.backgroundOptionBlurBackground
        })
      }), t ? (0, i.jsx)(L, {
        onAddBackgroundImage: c,
        disabled: g
      }) : (0, i.jsx)(k, {
        onClick: l
      }), u.map(e => (0, i.jsx)(o.ua7, {
        text: (0, i.jsx)(Z, {}),
        "aria-label": I.intl.string(I.t["T+yRY2"]),
        children: t => {
          let n = (0, x.rI)({
            userId: e.user_id,
            assetId: e.id,
            assetHash: e.asset,
            size: 720
          });
          return null == n ? null : (0, r.createElement)(D, A(y({}, t), {
            key: e.id,
            option: e,
            source: n,
            selected: (0, j.rD)(s) && s.id === e.id,
            onSelectOption: a,
            isVideo: (0, x.ay)(e.asset),
            isAnimatedImage: (0, x.xR)(e.asset)
          }))
        }
      }, e.id)), f.map(e => {
        let t = true === e.isVideo;
        return (0, i.jsx)(o.ua7, {
          text: e.name,
          "aria-label": e.name,
          children: n => (0, r.createElement)(D, A(y({}, n), {
            key: e.id,
            option: e.id,
            source: e.source,
            selected: s === e.id,
            onSelectOption: a,
            isVideo: t,
            isAnimatedImage: false,
            hotspotLocation: e.hotspotLocation
          }))
        }, e.id)
      })]
    })
  })
}