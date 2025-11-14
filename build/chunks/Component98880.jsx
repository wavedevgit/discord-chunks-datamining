/** Chunk was on web.js **/
/** chunk id: 98880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U4: () => X,
  cG: () => es,
  kA: () => el,
  qR: () => ec
}), require("./953529.js"), require("./997841.js"), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk591472 = require("./591472.js"),
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

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function W(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i = q(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function q(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var X = function(e) {
  return e.ICON = "icon", e.ROW = "row", e.NO_BANNER = "no_banner", e.MEDIUM_BANNER = "medium_banner", e.LARGE_BANNER = "large_banner", e
}({});

function Q(e) {
  var t;
  let {
    application: n,
    look: i = "large_banner",
    onClick: a,
    imageStyle: o,
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
  return (0, r.jsx)(J, {
    application: n,
    onClick: a,
    sectionName: c,
    resultsPosition: u,
    disabled: p,
    tracksImpression: _,
    look: i,
    sectionOverallPosition: d,
    children: "icon" === i ? (0, r.jsx)($, {
      application: n,
      imageStyle: o,
      children: l
    }) : (0, r.jsx)(ee, {
      application: n,
      look: i,
      imageStyle: o,
      enableVideoBanner: s,
      disableBannerFadeIn: g !== p,
      overrideImageUrl: h,
      showsPromoted: m,
      children: l
    })
  })
}

function J(e) {
  let {
    application: t,
    onClick: n,
    children: a,
    sectionName: s,
    resultsPosition: l,
    sectionOverallPosition: d,
    tracksImpression: f,
    disabled: _,
    containerStyle: p,
    look: h
  } = e, m = i.useCallback(e => {
    if ((0, w.BQ)(t)) {
      let n = t instanceof A.ZP ? t : A.ZP.createFromServer(t);
      (0, u.vq)(e, e => (0, r.jsx)(k.Z, Y({
        application: n
      }, e)))
    }
  }, [t]), {
    name: g,
    description: E
  } = i.useMemo(() => (0, w.sl)(t, {
    fakeAppIconURL: F
  }), [t]), {
    trackItemImpressionRef: b
  } = (0, M.Z)({
    applicationId: t.id,
    applicationFlags: (0, w.BQ)(t) ? t.flags : true,
    sectionName: s,
    sectionPosition: l,
    sectionOverallPosition: d,
    promotionalLabel: (0, w.dF)(t)
  }), y = i.useMemo(() => {
    let e = _ ? Z.containerDisabled : Z.container;
    return o()(e, {
      [Z.containerBorderRadius]: "row" !== h,
      [Z.rowContainer]: "row" === h,
      [Z.iconCard]: "icon" === h
    }, p)
  }, [p, _, h]);
  return _ ? (0, r.jsx)("div", {
    ref: f ? b : true,
    className: y,
    children: a
  }) : (0, r.jsx)(c.P3F, {
    innerRef: f ? b : true,
    className: y,
    onClick: n,
    onContextMenu: m,
    "aria-label": B.intl.formatToPlainString(B.t["zLhr9+"], {
      applicationName: g,
      applicationDescription: E
    }),
    children: (0, r.jsx)(c.Rny, {
      children: a
    })
  })
}

function $(e) {
  let {
    application: t,
    imageStyle: n,
    children: a
  } = e, {
    name: s,
    iconURL: c
  } = i.useMemo(() => (0, w.sl)(t, {
    fakeAppIconURL: F
  }), [t]);
  return (0, r.jsx)(l.u, {
    __unsupportedReactNodeAsText: s,
    children: (0, r.jsxs)("div", {
      className: o()(Z.iconContainer, n),
      children: [(0, r.jsx)(j.Z, {
        src: c,
        className: Z.iconCard,
        "aria-hidden": true,
        rendersPlaceholder: true
      }), a]
    })
  })
}

function ee(e) {
  let {
    application: t,
    look: n,
    imageStyle: a,
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
    fakeAppIconURL: F
  }), [t]), b = i.useMemo(() => null == E ? null : (0, L.ae)(E), [E]), y = (0, I.ZP)(m, ""), [v, T] = i.useState(false), S = i.useCallback(() => {
    true === l && T(true)
  }, [l]), A = h || (0, w.lf)(t), C = "large_banner" === n || "medium_banner" === n, R = i.useCallback(() => T(false), []), P = (0, s.e7)([p.Z, N.Z], () => p.Z.inDevModeForApplication(t.id) || N.Z.inTestModeForApplication(t.id), [t.id]), D = (0, w.WA)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [C ? (0, r.jsxs)("div", {
      onMouseEnter: S,
      onFocus: S,
      onMouseLeave: R,
      onBlur: R,
      className: o()(Z.bannerImageContainer, {
        [Z.mediumBanner]: "medium_banner" === n,
        [Z.largeBanner]: "large_banner" === n
      }),
      children: [(0, r.jsx)("span", {
        className: a,
        children: (0, r.jsx)(er, {
          application: t,
          fallbackColor: y,
          showVideo: v,
          disableFadeIn: u,
          overrideImageUrl: _
        })
      }), P || A || D !== d.ww.NONE ? (0, r.jsxs)("div", {
        className: Z.bannerUpperRightContainer,
        children: [A && (0, r.jsx)("div", {
          className: Z.promotedLabelWrapperBanner,
          children: (0, r.jsx)(c.Heading, {
            variant: "text-xxs/medium",
            color: "header-primary",
            children: B.intl.string(B.t["/eVltv"])
          })
        }), P && (0, r.jsx)(et, {}), D !== d.ww.NONE && (0, r.jsx)(O.Z, {
          labelType: D
        })]
      }) : null, (0, r.jsx)("div", {
        className: Z.bannerImageChildContainer,
        children: f
      })]
    }) : null, (0, r.jsxs)("div", {
      className: o()(Z.appDetailsContainer, {
        [Z.appDetailsRowContainer]: "row" === n
      }),
      children: [(0, r.jsx)(j.Z, {
        src: m,
        className: o()(Z.icon, {
          [Z.rowIcon]: "row" === n
        }),
        "aria-hidden": true,
        rendersPlaceholder: true
      }), (0, r.jsxs)("div", {
        className: Z.appDetails,
        children: [(0, r.jsxs)("div", {
          className: Z.appDetailsHeaderContainer,
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            lineClamp: 1,
            children: g
          }), !C && A ? (0, r.jsx)("div", {
            className: Z.promotedLabelWrapperNonBanner,
            children: (0, r.jsx)(c.Text, {
              variant: "text-xxs/semibold",
              color: "text-muted",
              children: B.intl.string(B.t["/eVltv"])
            })
          }) : null, (0, r.jsx)(en, {
            application: t
          })]
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: b
        })]
      }), "row" === n ? (0, r.jsx)("div", {
        className: Z.rowDivider
      }) : null]
    })]
  })
}

function et() {
  return (0, Chunk951288.jsx)(Chunk28664.u, {
    text: Chunk388032.intl.string(Chunk388032.t.CfTySQ),
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk992878.devShelfBadge,
      children: (0, Chunk951288.jsx)(Chunk880448.Z, {
        className: Chunk992878.devShelfIcon
      })
    })
  })
}

function en(e) {
  let {
    application: t
  } = e, n = C.default.getCurrentUser();
  if (!(null == n ? true : n.isStaff()) && !(null == n ? true : n.isStaffPersonal())) return null;
  let i = (0, w.yJ)(t);
  if (null == i || !(0, w.BQ)(t)) return null;
  let a = (0, E.fD)(t, i);
  return null == a ? null : (0, r.jsx)(l.u, {
    __unsupportedReactNodeAsText: a,
    children: (0, r.jsx)("img", {
      className: Z.staffBadge,
      alt: a,
      src: V
    })
  })
}

function er(e) {
  let {
    application: t,
    fallbackColor: n,
    showVideo: i,
    disableFadeIn: a,
    overrideImageUrl: s
  } = e;
  if (null != s) return (0, r.jsx)("img", {
    src: s,
    alt: (0, w.BQ)(t) ? t.name : "",
    className: o()(Z.bannerImage, {
      [Z.disableFadeIn]: a
    })
  });
  if ((0, w.BQ)(t)) {
    if ((0, w.ye)(t)) return (0, r.jsx)(ei, {
      application: t,
      showVideo: i,
      disableFadeIn: a
    });
    if (null != t.bot) return (0, r.jsx)(ea, {
      bot: t.bot,
      fallbackColor: n,
      disableFadeIn: a
    })
  }
  return (0, r.jsx)(eo, {
    fallbackColor: n,
    disableFadeIn: a
  })
}

function ei(e) {
  let {
    application: t,
    showVideo: n,
    disableFadeIn: a
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
  let d = o()(Z.bannerImage, {
    [Z.disableFadeIn]: a
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [null != l && c ? (0, r.jsx)("div", {
      className: Z.activityVideoContainer,
      children: (0, r.jsx)("div", {
        className: o()(Z.activityVideo, {
          [Z.videoFadeOut]: !n
        }),
        onAnimationEnd: () => n ? null : u(false),
        children: (0, r.jsx)(T.Z, {
          src: l,
          mediaLayoutType: G.hV.MOSAIC,
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
  } = e, a = (0, s.e7)([_.Z], () => _.Z.useReducedMotion), l = (0, P.aN)({
    id: t.id,
    banner: t.banner,
    canAnimate: !a,
    size: 600
  });
  return null == l ? (0, r.jsx)(eo, {
    fallbackColor: n,
    disableFadeIn: i
  }) : (0, r.jsx)("img", {
    src: l,
    alt: "",
    className: o()(Z.bannerImage, {
      [Z.disableFadeIn]: i
    })
  })
}

function eo(e) {
  let {
    fallbackColor: t,
    disableFadeIn: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(Z.bannerImage, {
      [Z.disableFadeIn]: n
    }),
    style: {
      backgroundColor: t
    }
  })
}

function es(e) {
  let {
    application: t,
    sectionName: n,
    resultsPosition: r,
    query: a,
    installOnDemand: o,
    location: s
  } = e, {
    pushHistory: l
  } = (0, x.hH)(), {
    friends: c
  } = (0, m.Z)(t);
  return {
    onClickAppCard: i.useCallback(e => {
      e.stopPropagation(), (0, v.yw)(U.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
        application_id: t.id,
        section_name: n,
        search_results_position: r,
        source: D.Z.entrypoint(),
        promotional_label: (0, w.dF)(t),
        location: s,
        query: a,
        num_friends_who_play: c.length
      }), l({
        type: x.gc.APPLICATION,
        application: t,
        installOnDemand: o,
        sectionName: n
      })
    }, [t, o, s, l, a, r, n, c])
  }
}

function el(e) {
  let {
    onClickAppCard: t
  } = es(e);
  return (0, r.jsx)(Q, K(Y({}, e), {
    onClick: t
  }))
}

function ec(e) {
  var {
    context: t,
    application: n,
    location: a,
    sectionName: o,
    isOneClickCTA: l,
    fetchesApplication: u = true
  } = e, d = z(e, ["context", "application", "location", "sectionName", "isOneClickCTA", "fetchesApplication"]);
  if (!(0, w.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
  let f = i.useId(),
    [_, p, m] = (0, s.Wu)([h.ZP, S.Z], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, "channel" === t.type ? t.channel.id : true), S.Z.isLaunchingFrame(n.id)]),
    g = null != p && p.isLaunching && p.componentId === f || m,
    {
      onActivityItemSelected: b,
      activityAction: y,
      buttonVariant: O,
      buttonText: v
    } = (0, L.P7)({
      context: t,
      application: n,
      location: a,
      sectionName: o,
      launchingComponentId: f,
      fetchesApplication: u
    });
  return y === E.JS.START || y === E.JS.JOIN ? l ? (0, r.jsx)(Q, K(Y({}, d), {
    sectionName: o,
    application: n,
    onClick: b,
    disabled: _ || m,
    enableVideoBanner: !g,
    children: g ? (0, r.jsx)(c.$jN, {
      type: c.$jN.Type.PULSING_ELLIPSIS,
      className: Z.spinner
    }) : null
  })) : (0, r.jsx)(el, K(Y({}, d), {
    context: t,
    sectionName: o,
    application: n,
    location: a
  })) : (0, r.jsx)(Q, K(Y({}, d), {
    sectionName: o,
    application: n,
    onClick: e => {
      e.stopPropagation()
    },
    imageStyle: Z.darkenImage,
    enableVideoBanner: false,
    disabled: true,
    children: (0, r.jsx)("div", {
      className: Z.voiceLauncherAppCardContainer,
      children: (0, r.jsx)(c.Button, {
        type: "submit",
        size: "md",
        variant: O,
        disabled: _ || m,
        onClick: b,
        "aria-label": B.intl.formatToPlainString(B.t["XjP/R+"], {
          buttonText: v,
          applicationName: n.name
        }),
        loading: g,
        text: v
      })
    })
  }))
}