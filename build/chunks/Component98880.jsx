/** Chunk was on web.js **/
/** chunk id: 98880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U4: () => Q,
  cG: () => es,
  kA: () => el,
  qR: () => ec
}), require("./953529.js"), require("./997841.js"), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
var Q = function(e) {
  return e.ICON = "icon", e.ROW = "row", e.NO_BANNER = "no_banner", e.MEDIUM_BANNER = "medium_banner", e.LARGE_BANNER = "large_banner", e
}({});

function X(e) {
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
    tracksImpression: p = true,
    disabled: _ = false,
    overrideImageUrl: m,
    showsPromoted: h
  } = e, g = null != (t = (0, f.Z)(_)) ? t : _;
  return (0, r.jsx)(J, {
    application: n,
    onClick: a,
    sectionName: c,
    resultsPosition: u,
    disabled: _,
    tracksImpression: p,
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
      disableBannerFadeIn: g !== _,
      overrideImageUrl: m,
      showsPromoted: h,
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
    disabled: p,
    containerStyle: _,
    look: m
  } = e, h = i.useCallback(e => {
    if ((0, D.BQ)(t)) {
      let n = t instanceof C.ZP ? t : C.ZP.createFromServer(t);
      (0, u.vq)(e, e => (0, r.jsx)(M.Z, Y({
        application: n
      }, e)))
    }
  }, [t]), {
    name: g,
    description: E
  } = i.useMemo(() => (0, D.sl)(t, {
    fakeAppIconURL: F
  }), [t]), {
    trackItemImpressionRef: b
  } = (0, j.Z)({
    applicationId: t.id,
    applicationFlags: (0, D.BQ)(t) ? t.flags : true,
    sectionName: s,
    sectionPosition: l,
    sectionOverallPosition: d,
    promotionalLabel: (0, D.dF)(t)
  }), y = i.useMemo(() => {
    let e = p ? B.containerDisabled : B.container;
    return o()(e, {
      [B.containerBorderRadius]: "row" !== m,
      [B.rowContainer]: "row" === m,
      [B.iconCard]: "icon" === m
    }, _)
  }, [_, p, m]);
  return p ? (0, r.jsx)("div", {
    ref: f ? b : true,
    className: y,
    children: a
  }) : (0, r.jsx)(c.P3F, {
    innerRef: f ? b : true,
    className: y,
    onClick: n,
    onContextMenu: h,
    "aria-label": Z.intl.formatToPlainString(Z.t["zLhr9+"], {
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
  } = i.useMemo(() => (0, D.sl)(t, {
    fakeAppIconURL: F
  }), [t]);
  return (0, r.jsx)(l.u, {
    __unsupportedReactNodeAsText: s,
    children: (0, r.jsxs)("div", {
      className: o()(B.iconContainer, n),
      children: [(0, r.jsx)(k.Z, {
        src: c,
        className: B.iconCard,
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
    overrideImageUrl: p,
    showsPromoted: m
  } = e, {
    iconURL: h,
    name: g,
    description: E
  } = i.useMemo(() => (0, D.sl)(t, {
    fakeAppIconURL: F
  }), [t]), b = i.useMemo(() => null == E ? null : (0, L.ae)(E), [E]), y = (0, S.ZP)(h, ""), [v, I] = i.useState(false), T = i.useCallback(() => {
    true === l && I(true)
  }, [l]), C = m || (0, D.lf)(t), A = "large_banner" === n || "medium_banner" === n, P = i.useCallback(() => I(false), []), R = (0, s.e7)([_.Z, N.Z], () => _.Z.inDevModeForApplication(t.id) || N.Z.inTestModeForApplication(t.id), [t.id]), w = (0, D.WA)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [A ? (0, r.jsxs)("div", {
      onMouseEnter: T,
      onFocus: T,
      onMouseLeave: P,
      onBlur: P,
      className: o()(B.bannerImageContainer, {
        [B.mediumBanner]: "medium_banner" === n,
        [B.largeBanner]: "large_banner" === n
      }),
      children: [(0, r.jsx)("span", {
        className: a,
        children: (0, r.jsx)(er, {
          application: t,
          fallbackColor: y,
          showVideo: v,
          disableFadeIn: u,
          overrideImageUrl: p
        })
      }), R || C || w !== d.ww.NONE ? (0, r.jsxs)("div", {
        className: B.bannerUpperRightContainer,
        children: [C && (0, r.jsx)("div", {
          className: B.promotedLabelWrapperBanner,
          children: (0, r.jsx)(c.Heading, {
            variant: "text-xxs/medium",
            color: "header-primary",
            children: Z.intl.string(Z.t["/eVltv"])
          })
        }), R && (0, r.jsx)(et, {}), w !== d.ww.NONE && (0, r.jsx)(O.Z, {
          labelType: w
        })]
      }) : null, (0, r.jsx)("div", {
        className: B.bannerImageChildContainer,
        children: f
      })]
    }) : null, (0, r.jsxs)("div", {
      className: o()(B.appDetailsContainer, {
        [B.appDetailsRowContainer]: "row" === n
      }),
      children: [(0, r.jsx)(k.Z, {
        src: h,
        className: o()(B.icon, {
          [B.rowIcon]: "row" === n
        }),
        "aria-hidden": true,
        rendersPlaceholder: true
      }), (0, r.jsxs)("div", {
        className: B.appDetails,
        children: [(0, r.jsxs)("div", {
          className: B.appDetailsHeaderContainer,
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            lineClamp: 1,
            children: g
          }), !A && C ? (0, r.jsx)("div", {
            className: B.promotedLabelWrapperNonBanner,
            children: (0, r.jsx)(c.Text, {
              variant: "text-xxs/semibold",
              color: "text-muted",
              children: Z.intl.string(Z.t["/eVltv"])
            })
          }) : null, (0, r.jsx)(en, {
            application: t
          })]
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          lineClamp: 1,
          children: b
        })]
      }), "row" === n ? (0, r.jsx)("div", {
        className: B.rowDivider
      }) : null]
    })]
  })
}

function et() {
  return (0, Chunk54381.jsx)(Chunk28664.u, {
    text: Chunk388032.intl.string(Chunk388032.t.CfTySQ),
    children: (0, Chunk54381.jsx)("div", {
      className: Chunk992878.devShelfBadge,
      children: (0, Chunk54381.jsx)(Chunk880448.Z, {
        className: Chunk992878.devShelfIcon
      })
    })
  })
}

function en(e) {
  let {
    application: t
  } = e, n = A.default.getCurrentUser();
  if (!(null == n ? true : n.isStaff()) && !(null == n ? true : n.isStaffPersonal())) return null;
  let i = (0, D.yJ)(t);
  if (null == i || !(0, D.BQ)(t)) return null;
  let a = (0, E.fD)(t, i);
  return null == a ? null : (0, r.jsx)(l.u, {
    __unsupportedReactNodeAsText: a,
    children: (0, r.jsx)("img", {
      className: B.staffBadge,
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
    alt: (0, D.BQ)(t) ? t.name : "",
    className: o()(B.bannerImage, {
      [B.disableFadeIn]: a
    })
  });
  if ((0, D.BQ)(t)) {
    if ((0, D.ye)(t)) return (0, r.jsx)(ei, {
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
    names: ["embedded_cover"],
    format: "webp"
  }), l = i.useMemo(() => {
    let e = (0, D.yJ)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, g.Z)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), [c, u] = i.useState(n);
  i.useEffect(() => {
    n && u(true)
  }, [n]);
  let d = o()(B.bannerImage, {
    [B.disableFadeIn]: a
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [null != l && c ? (0, r.jsx)("div", {
      className: B.activityVideoContainer,
      children: (0, r.jsx)("div", {
        className: o()(B.activityVideo, {
          [B.videoFadeOut]: !n
        }),
        onAnimationEnd: () => n ? null : u(false),
        children: (0, r.jsx)(I.Z, {
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
  } = e, a = (0, s.e7)([p.Z], () => p.Z.useReducedMotion), l = (0, R.aN)({
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
    className: o()(B.bannerImage, {
      [B.disableFadeIn]: i
    })
  })
}

function eo(e) {
  let {
    fallbackColor: t,
    disableFadeIn: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(B.bannerImage, {
      [B.disableFadeIn]: n
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
  } = (0, h.Z)(t);
  return {
    onClickAppCard: i.useCallback(e => {
      e.stopPropagation(), (0, v.yw)(U.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
        application_id: t.id,
        section_name: n,
        search_results_position: r,
        source: w.Z.entrypoint(),
        promotional_label: (0, D.dF)(t),
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
  return (0, r.jsx)(X, K(Y({}, e), {
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
  if (!(0, D.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
  let f = i.useId(),
    [p, _, h] = (0, s.Wu)([m.ZP, T.Z], () => [m.ZP.isLaunchingActivity(), m.ZP.getLaunchState(n.id, "channel" === t.type ? t.channel.id : true), T.Z.isLaunchingFrame(n.id)]),
    g = null != _ && _.isLaunching && _.componentId === f || h,
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
  return y === E.JS.START || y === E.JS.JOIN ? l ? (0, r.jsx)(X, K(Y({}, d), {
    sectionName: o,
    application: n,
    onClick: b,
    disabled: p || h,
    enableVideoBanner: !g,
    children: g ? (0, r.jsx)(c.$jN, {
      type: c.$jN.Type.PULSING_ELLIPSIS,
      className: B.spinner
    }) : null
  })) : (0, r.jsx)(el, K(Y({}, d), {
    context: t,
    sectionName: o,
    application: n,
    location: a
  })) : (0, r.jsx)(X, K(Y({}, d), {
    sectionName: o,
    application: n,
    onClick: e => {
      e.stopPropagation()
    },
    imageStyle: B.darkenImage,
    enableVideoBanner: false,
    disabled: true,
    children: (0, r.jsx)("div", {
      className: B.voiceLauncherAppCardContainer,
      children: (0, r.jsx)(c.Button, {
        type: "submit",
        size: "md",
        variant: O,
        disabled: p || h,
        onClick: b,
        "aria-label": Z.intl.formatToPlainString(Z.t["XjP/R+"], {
          buttonText: v,
          applicationName: n.name
        }),
        loading: g,
        text: v
      })
    })
  }))
}