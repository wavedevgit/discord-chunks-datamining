/** Chunk was on web.js **/
/** chunk id: 98880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U4: () => Q,
  cG: () => el,
  kA: () => ec,
  qR: () => eu
}), require("./953529.js"), require("./997841.js"), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk911969 = require("./911969.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk115130 = require("./115130.js"),
  Chunk317381 = require("./317381.js"),
  Chunk723163 = require("./723163.js"),
  Chunk361213 = require("./361213.js"),
  Chunk542094 = require("./542094.js"),
  Chunk778569 = require("./778569.js"),
  Chunk182906 = require("./182906.jsx"),
  Chunk556505 = require("./556505.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk220082 = require("./220082.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk973616 = require("./973616.js"),
  Chunk594174 = require("./594174.js"),
  Chunk695103 = require("./695103.js"),
  Chunk880448 = require("./880448.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk541099 = require("./541099.js"),
  Chunk783097 = require("./783097.js"),
  Chunk695676 = require("./695676.js"),
  Chunk176412 = require("./176412.js"),
  Chunk226026 = require("./226026.js"),
  Chunk570949 = require("./570949.jsx"),
  Chunk753972 = require("./753972.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk992878 = require("./992878.js"),
  Chunk413097 = require("./413097.js"),
  Chunk969728 = require("./969728.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H() {
  return (H = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function Y(e) {
  if (null == e) throw TypeError("Cannot destructure " + e);
  return e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function q(e, t) {
  if (null == e) return {};
  var n, r, i = X(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function X(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var Q = function(e) {
  return e.ICON = "icon", e.ROW = "row", e.NO_BANNER = "no_banner", e.MEDIUM_BANNER = "medium_banner", e.LARGE_BANNER = "large_banner", e
}({});

function J(e) {
  var t;
  let {
    application: n,
    look: i = "large_banner",
    onClick: o,
    imageStyle: a,
    enableVideoBanner: s = true,
    children: l,
    sectionName: c,
    resultsPosition: u,
    sectionOverallPosition: d,
    tracksImpression: _ = true,
    disabled: p = false,
    overrideImageUrl: h,
    showsPromoted: m
  } = e, g = null != (t = (0, f.Z)(p)) ? t : p;
  return (0, r.jsx)($, {
    application: n,
    onClick: o,
    sectionName: c,
    resultsPosition: u,
    disabled: p,
    tracksImpression: _,
    look: i,
    sectionOverallPosition: d,
    children: "icon" === i ? (0, r.jsx)(ee, {
      application: n,
      imageStyle: a,
      children: l
    }) : (0, r.jsx)(et, {
      application: n,
      look: i,
      imageStyle: a,
      enableVideoBanner: s,
      disableBannerFadeIn: g !== p,
      overrideImageUrl: h,
      showsPromoted: m,
      children: l
    })
  })
}

function $(e) {
  let {
    application: t,
    onClick: n,
    children: o,
    sectionName: s,
    resultsPosition: l,
    sectionOverallPosition: d,
    tracksImpression: f,
    disabled: _,
    containerStyle: p,
    look: h
  } = e, m = i.useCallback(e => {
    if ((0, w.BQ)(t)) {
      let n = t instanceof S.ZP ? t : S.ZP.createFromServer(t);
      (0, u.vq)(e, e => (0, r.jsx)(M.Z, W({
        application: n
      }, e)))
    }
  }, [t]), {
    name: g,
    description: E
  } = i.useMemo(() => (0, w.sl)(t, {
    fakeAppIconURL: Z
  }), [t]), {
    trackItemImpressionRef: b
  } = (0, x.Z)({
    applicationId: t.id,
    applicationFlags: (0, w.BQ)(t) ? t.flags : true,
    sectionName: s,
    sectionPosition: l,
    sectionOverallPosition: d,
    promotionalLabel: (0, w.dF)(t)
  }), y = i.useMemo(() => {
    let e = _ ? B.containerDisabled : B.container;
    return a()(e, {
      [B.containerBorderRadius]: "row" !== h,
      [B.rowContainer]: "row" === h,
      [B.iconCard]: "icon" === h
    }, p)
  }, [p, _, h]);
  return _ ? (0, r.jsx)("div", {
    ref: f ? b : true,
    className: y,
    children: o
  }) : (0, r.jsx)(c.P3F, {
    innerRef: f ? b : true,
    className: y,
    onClick: n,
    onContextMenu: m,
    "aria-label": G.intl.formatToPlainString(G.t["zLhr9/"], {
      applicationName: g,
      applicationDescription: E
    }),
    children: (0, r.jsx)(c.Rny, {
      children: o
    })
  })
}

function ee(e) {
  let {
    application: t,
    imageStyle: n,
    children: o
  } = e, {
    name: s,
    iconURL: l
  } = i.useMemo(() => (0, w.sl)(t, {
    fakeAppIconURL: Z
  }), [t]);
  return (0, r.jsx)(c.ua7, {
    tooltipContentClassName: B.tooltipContent,
    text: s,
    children: e => {
      var t = H({}, Y(e));
      return (0, r.jsxs)("div", z(W({
        className: a()(B.iconContainer, n)
      }, t), {
        children: [(0, r.jsx)(k.Z, {
          src: l,
          className: B.iconCard,
          "aria-hidden": true,
          rendersPlaceholder: true
        }), o]
      }))
    }
  })
}

function et(e) {
  let {
    application: t,
    look: n,
    imageStyle: o,
    enableVideoBanner: l,
    disableBannerFadeIn: u,
    children: f,
    overrideImageUrl: _,
    showsPromoted: h
  } = e, {
    iconURL: m,
    name: g,
    description: E
  } = i.useMemo(() => (0, w.sl)(t, {
    fakeAppIconURL: Z
  }), [t]), b = i.useMemo(() => null == E ? null : (0, L.ae)(E), [E]), y = (0, I.ZP)(m, ""), [v, T] = i.useState(false), S = i.useCallback(() => {
    true === l && T(true)
  }, [l]), A = h || (0, w.lf)(t), C = "large_banner" === n || "medium_banner" === n, R = i.useCallback(() => T(false), []), P = (0, s.e7)([p.Z, N.Z], () => p.Z.inDevModeForApplication(t.id) || N.Z.inTestModeForApplication(t.id), [t.id]), D = (0, w.WA)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [C ? (0, r.jsxs)("div", {
      onMouseEnter: S,
      onFocus: S,
      onMouseLeave: R,
      onBlur: R,
      className: a()(B.bannerImageContainer, {
        [B.mediumBanner]: "medium_banner" === n,
        [B.largeBanner]: "large_banner" === n
      }),
      children: [(0, r.jsx)("span", {
        className: o,
        children: (0, r.jsx)(ei, {
          application: t,
          fallbackColor: y,
          showVideo: v,
          disableFadeIn: u,
          overrideImageUrl: _
        })
      }), P || A || D !== d.ww.NONE ? (0, r.jsxs)("div", {
        className: B.bannerUpperRightContainer,
        children: [A && (0, r.jsx)("div", {
          className: B.promotedLabelWrapperBanner,
          children: (0, r.jsx)(c.X6q, {
            variant: "text-xxs/medium",
            color: "header-primary",
            children: G.intl.string(G.t["/eVltr"])
          })
        }), P && (0, r.jsx)(en, {}), D !== d.ww.NONE && (0, r.jsx)(O.Z, {
          labelType: D
        })]
      }) : null, (0, r.jsx)("div", {
        className: B.bannerImageChildContainer,
        children: f
      })]
    }) : null, (0, r.jsxs)("div", {
      className: a()(B.appDetailsContainer, {
        [B.appDetailsRowContainer]: "row" === n
      }),
      children: [(0, r.jsx)(k.Z, {
        src: m,
        className: a()(B.icon, {
          [B.rowIcon]: "row" === n
        }),
        "aria-hidden": true,
        rendersPlaceholder: true
      }), (0, r.jsxs)("div", {
        className: B.appDetails,
        children: [(0, r.jsxs)("div", {
          className: B.appDetailsHeaderContainer,
          children: [(0, r.jsx)(c.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            lineClamp: 1,
            children: g
          }), !C && A ? (0, r.jsx)("div", {
            className: B.promotedLabelWrapperNonBanner,
            children: (0, r.jsx)(c.Text, {
              variant: "text-xxs/semibold",
              color: "text-muted",
              children: G.intl.string(G.t["/eVltr"])
            })
          }) : null, (0, r.jsx)(er, {
            application: t
          })]
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: b
        })]
      }), "row" === n ? (0, r.jsx)("div", {
        className: B.rowDivider
      }) : null]
    })]
  })
}

function en() {
  return (0, Chunk255367.jsx)(Chunk481060.ua7, {
    text: Chunk388032.intl.string(Chunk388032.t.CfTySU),
    children: e => (0, r.jsx)("div", z(W({
      className: B.devShelfBadge
    }, e), {
      children: (0, r.jsx)(C.Z, {
        className: B.devShelfIcon
      })
    }))
  })
}

function er(e) {
  let {
    application: t
  } = e, n = A.default.getCurrentUser();
  if (!(null == n ? true : n.isStaff()) && !(null == n ? true : n.isStaffPersonal())) return null;
  let i = (0, w.yJ)(t);
  if (null == i || !(0, w.BQ)(t)) return null;
  let o = (0, E.fD)(t, i);
  return null == o ? null : (0, r.jsx)(c.ua7, {
    text: o,
    children: e => (0, r.jsx)("img", W({
      className: B.staffBadge,
      alt: o,
      src: F
    }, e))
  })
}

function ei(e) {
  let {
    application: t,
    fallbackColor: n,
    showVideo: i,
    disableFadeIn: o,
    overrideImageUrl: s
  } = e;
  if (null != s) return (0, r.jsx)("img", {
    src: s,
    alt: (0, w.BQ)(t) ? t.name : "",
    className: a()(B.bannerImage, {
      [B.disableFadeIn]: o
    })
  });
  if ((0, w.BQ)(t)) {
    if ((0, w.ye)(t)) return (0, r.jsx)(eo, {
      application: t,
      showVideo: i,
      disableFadeIn: o
    });
    if (null != t.bot) return (0, r.jsx)(ea, {
      bot: t.bot,
      fallbackColor: n,
      disableFadeIn: o
    })
  }
  return (0, r.jsx)(es, {
    fallbackColor: n,
    disableFadeIn: o
  })
}

function eo(e) {
  let {
    application: t,
    showVideo: n,
    disableFadeIn: o
  } = e, s = (0, b.Z)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  }), l = i.useMemo(() => {
    let e = (0, w.yJ)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, g.Z)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), [c, u] = i.useState(n);
  i.useEffect(() => {
    n && u(true)
  }, [n]);
  let d = a()(B.bannerImage, {
    [B.disableFadeIn]: o
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [null != l && c ? (0, r.jsx)("div", {
      className: B.activityVideoContainer,
      children: (0, r.jsx)("div", {
        className: a()(B.activityVideo, {
          [B.videoFadeOut]: !n
        }),
        onAnimationEnd: () => n ? null : u(false),
        children: (0, r.jsx)(T.Z, {
          src: l,
          mediaLayoutType: U.hV.MOSAIC,
          loop: true,
          autoPlay: true,
          muted: true
        })
      })
    }) : null, (0, r.jsx)(y.Z, {
      imageBackground: s,
      applicationName: t.name,
      imageClassName: d,
      imageNotFoundClassName: d
    })]
  })
}

function ea(e) {
  let {
    bot: t,
    fallbackColor: n,
    disableFadeIn: i
  } = e, o = (0, s.e7)([_.Z], () => _.Z.useReducedMotion), l = (0, R.aN)({
    id: t.id,
    banner: t.banner,
    canAnimate: !o,
    size: 600
  });
  return null == l ? (0, r.jsx)(es, {
    fallbackColor: n,
    disableFadeIn: i
  }) : (0, r.jsx)("img", {
    src: l,
    alt: "",
    className: a()(B.bannerImage, {
      [B.disableFadeIn]: i
    })
  })
}

function es(e) {
  let {
    fallbackColor: t,
    disableFadeIn: n
  } = e;
  return (0, r.jsx)("div", {
    className: a()(B.bannerImage, {
      [B.disableFadeIn]: n
    }),
    style: {
      backgroundColor: t
    }
  })
}

function el(e) {
  let {
    application: t,
    sectionName: n,
    resultsPosition: r,
    query: o,
    installOnDemand: a,
    location: s
  } = e, {
    pushHistory: l
  } = (0, D.hH)(), {
    friends: c
  } = (0, m.Z)(t);
  return {
    onClickAppCard: i.useCallback(e => {
      e.stopPropagation(), (0, v.yw)(j.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
        application_id: t.id,
        section_name: n,
        search_results_position: r,
        source: P.Z.entrypoint(),
        promotional_label: (0, w.dF)(t),
        location: s,
        query: o,
        num_friends_who_play: c.length
      }), l({
        type: D.gc.APPLICATION,
        application: t,
        installOnDemand: a,
        sectionName: n
      })
    }, [t, a, s, l, o, r, n, c])
  }
}

function ec(e) {
  let {
    onClickAppCard: t
  } = el(e);
  return (0, r.jsx)(J, z(W({}, e), {
    onClick: t
  }))
}

function eu(e) {
  var {
    context: t,
    application: n,
    location: o,
    sectionName: a,
    isOneClickCTA: u,
    fetchesApplication: d = true
  } = e, f = q(e, ["context", "application", "location", "sectionName", "isOneClickCTA", "fetchesApplication"]);
  if (!(0, w.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
  let _ = i.useId(),
    [p, m] = (0, s.Wu)([h.ZP], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, "channel" === t.type ? t.channel.id : true)]),
    g = null != m && m.isLaunching && m.componentId === _,
    {
      onActivityItemSelected: b,
      activityAction: y,
      buttonColor: O,
      buttonText: v
    } = (0, L.P7)({
      context: t,
      application: n,
      location: o,
      sectionName: a,
      launchingComponentId: _,
      fetchesApplication: d
    });
  return y === E.JS.START || y === E.JS.JOIN ? u ? (0, r.jsx)(J, z(W({}, f), {
    sectionName: a,
    application: n,
    onClick: b,
    disabled: p,
    enableVideoBanner: !g,
    children: g ? (0, r.jsx)(c.$jN, {
      type: c.$jN.Type.PULSING_ELLIPSIS,
      className: B.spinner
    }) : null
  })) : (0, r.jsx)(ec, z(W({}, f), {
    context: t,
    sectionName: a,
    application: n,
    location: o
  })) : (0, r.jsx)(J, z(W({}, f), {
    sectionName: a,
    application: n,
    onClick: e => {
      e.stopPropagation()
    },
    imageStyle: B.darkenImage,
    enableVideoBanner: false,
    disabled: true,
    children: (0, r.jsx)("div", {
      className: B.voiceLauncherAppCardContainer,
      children: (0, r.jsx)(l.zx, {
        className: B.voiceLauncherAppCardButton,
        type: "submit",
        size: l.zx.Sizes.LARGE,
        color: O,
        disabled: p,
        onClick: b,
        "aria-label": G.intl.formatToPlainString(G.t["XjP/R0"], {
          buttonText: v,
          applicationName: n.name
        }),
        submitting: g,
        children: v
      })
    })
  }))
}