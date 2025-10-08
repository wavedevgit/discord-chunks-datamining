/** Chunk was on 35755 **/
/** chunk id: 98880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U4: () => z,
  cG: () => ei,
  kA: () => er,
  qR: () => ea
}), require("./953529.js"), require("./997841.js"), require("./388685.js"), require("./415506.js");
var l, Chunk951288 = require("./951288.js"),
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

function G(e) {
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

function q(e, t) {
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
var z = ((l = {}).ICON = "icon", l.ROW = "row", l.NO_BANNER = "no_banner", l.MEDIUM_BANNER = "medium_banner", l.LARGE_BANNER = "large_banner", l);

function Y(e) {
  var t;
  let {
    application: n,
    look: l = "large_banner",
    onClick: r,
    imageStyle: a,
    enableVideoBanner: o = true,
    children: s,
    sectionName: c,
    resultsPosition: u,
    sectionOverallPosition: d,
    tracksImpression: p = true,
    disabled: f = false,
    overrideImageUrl: h,
    showsPromoted: v
  } = e, x = null != (t = (0, m.Z)(f)) ? t : f;
  return (0, i.jsx)(X, {
    application: n,
    onClick: r,
    sectionName: c,
    resultsPosition: u,
    disabled: f,
    tracksImpression: p,
    look: l,
    sectionOverallPosition: d,
    children: "icon" === l ? (0, i.jsx)(Q, {
      application: n,
      imageStyle: a,
      children: s
    }) : (0, i.jsx)(J, {
      application: n,
      look: l,
      imageStyle: a,
      enableVideoBanner: o,
      disableBannerFadeIn: x !== f,
      overrideImageUrl: h,
      showsPromoted: v,
      children: s
    })
  })
}

function X(e) {
  let {
    application: t,
    onClick: n,
    children: l,
    sectionName: a,
    resultsPosition: s,
    sectionOverallPosition: c,
    tracksImpression: p,
    disabled: m,
    containerStyle: f,
    look: h
  } = e, v = r.useCallback(e => {
    if ((0, R.BQ)(t)) {
      let n = t instanceof _.ZP ? t : _.ZP.createFromServer(t);
      (0, d.vq)(e, e => (0, i.jsx)(M.Z, G({
        application: n
      }, e)))
    }
  }, [t]), {
    name: x,
    description: y
  } = r.useMemo(() => (0, R.sl)(t, {
    fakeAppIconURL: W
  }), [t]), {
    trackItemImpressionRef: g
  } = (0, k.Z)({
    applicationId: t.id,
    applicationFlags: (0, R.BQ)(t) ? t.flags : true,
    sectionName: a,
    sectionPosition: s,
    sectionOverallPosition: c,
    promotionalLabel: (0, R.dF)(t)
  }), b = r.useMemo(() => {
    let e = m ? B.containerDisabled : B.container;
    return o()(e, {
      [B.containerBorderRadius]: "row" !== h,
      [B.rowContainer]: "row" === h,
      [B.iconCard]: "icon" === h
    }, f)
  }, [f, m, h]);
  return m ? (0, i.jsx)("div", {
    ref: p ? g : true,
    className: b,
    children: l
  }) : (0, i.jsx)(u.P3F, {
    innerRef: p ? g : true,
    className: b,
    onClick: n,
    onContextMenu: v,
    "aria-label": V.intl.formatToPlainString(V.t["zLhr9/"], {
      applicationName: x,
      applicationDescription: y
    }),
    children: (0, i.jsx)(u.Rny, {
      children: l
    })
  })
}

function Q(e) {
  let {
    application: t,
    imageStyle: n,
    children: l
  } = e, {
    name: a,
    iconURL: s
  } = r.useMemo(() => (0, R.sl)(t, {
    fakeAppIconURL: W
  }), [t]);
  return (0, i.jsx)(c.u, {
    __unsupportedReactNodeAsText: a,
    children: (0, i.jsxs)("div", {
      className: o()(B.iconContainer, n),
      children: [(0, i.jsx)(U.Z, {
        src: s,
        className: B.iconCard,
        "aria-hidden": true,
        rendersPlaceholder: true
      }), l]
    })
  })
}

function J(e) {
  let {
    application: t,
    look: n,
    imageStyle: l,
    enableVideoBanner: a,
    disableBannerFadeIn: c,
    children: d,
    overrideImageUrl: m,
    showsPromoted: f
  } = e, {
    iconURL: v,
    name: x,
    description: y
  } = r.useMemo(() => (0, R.sl)(t, {
    fakeAppIconURL: W
  }), [t]), g = r.useMemo(() => null == y ? null : (0, w.ae)(y), [y]), b = (0, E.ZP)(v, ""), [N, C] = r.useState(false), P = r.useCallback(() => {
    true === a && C(true)
  }, [a]), A = f || (0, R.lf)(t), _ = "large_banner" === n || "medium_banner" === n, O = r.useCallback(() => C(false), []), S = (0, s.e7)([h.Z, I.Z], () => h.Z.inDevModeForApplication(t.id) || I.Z.inTestModeForApplication(t.id), [t.id]), T = (0, R.WA)(t);
  return (0, i.jsxs)(i.Fragment, {
    children: [_ ? (0, i.jsxs)("div", {
      onMouseEnter: P,
      onFocus: P,
      onMouseLeave: O,
      onBlur: O,
      className: o()(B.bannerImageContainer, {
        [B.mediumBanner]: "medium_banner" === n,
        [B.largeBanner]: "large_banner" === n
      }),
      children: [(0, i.jsx)("span", {
        className: l,
        children: (0, i.jsx)(ee, {
          application: t,
          fallbackColor: b,
          showVideo: N,
          disableFadeIn: c,
          overrideImageUrl: m
        })
      }), S || A || T !== p.ww.NONE ? (0, i.jsxs)("div", {
        className: B.bannerUpperRightContainer,
        children: [A && (0, i.jsx)("div", {
          className: B.promotedLabelWrapperBanner,
          children: (0, i.jsx)(u.X6q, {
            variant: "text-xxs/medium",
            color: "header-primary",
            children: V.intl.string(V.t["/eVltr"])
          })
        }), S && (0, i.jsx)(K, {}), T !== p.ww.NONE && (0, i.jsx)(j.Z, {
          labelType: T
        })]
      }) : null, (0, i.jsx)("div", {
        className: B.bannerImageChildContainer,
        children: d
      })]
    }) : null, (0, i.jsxs)("div", {
      className: o()(B.appDetailsContainer, {
        [B.appDetailsRowContainer]: "row" === n
      }),
      children: [(0, i.jsx)(U.Z, {
        src: v,
        className: o()(B.icon, {
          [B.rowIcon]: "row" === n
        }),
        "aria-hidden": true,
        rendersPlaceholder: true
      }), (0, i.jsxs)("div", {
        className: B.appDetails,
        children: [(0, i.jsxs)("div", {
          className: B.appDetailsHeaderContainer,
          children: [(0, i.jsx)(u.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            lineClamp: 1,
            children: x
          }), !_ && A ? (0, i.jsx)("div", {
            className: B.promotedLabelWrapperNonBanner,
            children: (0, i.jsx)(u.Text, {
              variant: "text-xxs/semibold",
              color: "text-muted",
              children: V.intl.string(V.t["/eVltr"])
            })
          }) : null, (0, i.jsx)($, {
            application: t
          })]
        }), (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: g
        })]
      }), "row" === n ? (0, i.jsx)("div", {
        className: B.rowDivider
      }) : null]
    })]
  })
}

function K() {
  return (0, Chunk951288.jsx)(Chunk28664.u, {
    text: Chunk388032.intl.string(Chunk388032.t.CfTySU),
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk992878.devShelfBadge,
      children: (0, Chunk951288.jsx)(Chunk880448.Z, {
        className: Chunk992878.devShelfIcon
      })
    })
  })
}

function $(e) {
  let {
    application: t
  } = e, n = O.default.getCurrentUser();
  if (!(null == n ? true : n.isStaff()) && !(null == n ? true : n.isStaffPersonal())) return null;
  let l = (0, R.yJ)(t);
  if (null == l || !(0, R.BQ)(t)) return null;
  let r = (0, g.fD)(t, l);
  return null == r ? null : (0, i.jsx)(c.u, {
    __unsupportedReactNodeAsText: r,
    children: (0, i.jsx)("img", {
      className: B.staffBadge,
      alt: r,
      src: F
    })
  })
}

function ee(e) {
  let {
    application: t,
    fallbackColor: n,
    showVideo: l,
    disableFadeIn: r,
    overrideImageUrl: a
  } = e;
  if (null != a) return (0, i.jsx)("img", {
    src: a,
    alt: (0, R.BQ)(t) ? t.name : "",
    className: o()(B.bannerImage, {
      [B.disableFadeIn]: r
    })
  });
  if ((0, R.BQ)(t)) {
    if ((0, R.ye)(t)) return (0, i.jsx)(et, {
      application: t,
      showVideo: l,
      disableFadeIn: r
    });
    if (null != t.bot) return (0, i.jsx)(en, {
      bot: t.bot,
      fallbackColor: n,
      disableFadeIn: r
    })
  }
  return (0, i.jsx)(el, {
    fallbackColor: n,
    disableFadeIn: r
  })
}

function et(e) {
  let {
    application: t,
    showVideo: n,
    disableFadeIn: l
  } = e, a = (0, b.Z)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  }), s = r.useMemo(() => {
    let e = (0, R.yJ)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, y.Z)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), [c, u] = r.useState(n);
  r.useEffect(() => {
    n && u(true)
  }, [n]);
  let d = o()(B.bannerImage, {
    [B.disableFadeIn]: l
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [null != s && c ? (0, i.jsx)("div", {
      className: B.activityVideoContainer,
      children: (0, i.jsx)("div", {
        className: o()(B.activityVideo, {
          [B.videoFadeOut]: !n
        }),
        onAnimationEnd: () => n ? null : u(false),
        children: (0, i.jsx)(P.Z, {
          src: s,
          mediaLayoutType: H.hV.MOSAIC,
          loop: true,
          autoPlay: true,
          muted: true
        })
      })
    }) : null, (0, i.jsx)(N.Z, {
      imageBackground: a,
      applicationName: t.name,
      imageClassName: d,
      imageNotFoundClassName: d
    })]
  })
}

function en(e) {
  let {
    bot: t,
    fallbackColor: n,
    disableFadeIn: l
  } = e, r = (0, s.e7)([f.Z], () => f.Z.useReducedMotion), a = (0, T.aN)({
    id: t.id,
    banner: t.banner,
    canAnimate: !r,
    size: 600
  });
  return null == a ? (0, i.jsx)(el, {
    fallbackColor: n,
    disableFadeIn: l
  }) : (0, i.jsx)("img", {
    src: a,
    alt: "",
    className: o()(B.bannerImage, {
      [B.disableFadeIn]: l
    })
  })
}

function el(e) {
  let {
    fallbackColor: t,
    disableFadeIn: n
  } = e;
  return (0, i.jsx)("div", {
    className: o()(B.bannerImage, {
      [B.disableFadeIn]: n
    }),
    style: {
      backgroundColor: t
    }
  })
}

function ei(e) {
  let {
    application: t,
    sectionName: n,
    resultsPosition: l,
    query: i,
    installOnDemand: a,
    location: o
  } = e, {
    pushHistory: s
  } = (0, Z.hH)(), {
    friends: c
  } = (0, x.Z)(t);
  return {
    onClickAppCard: r.useCallback(e => {
      e.stopPropagation(), (0, C.yw)(D.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
        application_id: t.id,
        section_name: n,
        search_results_position: l,
        source: L.Z.entrypoint(),
        promotional_label: (0, R.dF)(t),
        location: o,
        query: i,
        num_friends_who_play: c.length
      }), s({
        type: Z.gc.APPLICATION,
        application: t,
        installOnDemand: a,
        sectionName: n
      })
    }, [t, a, o, s, i, l, n, c])
  }
}

function er(e) {
  let {
    onClickAppCard: t
  } = ei(e);
  return (0, i.jsx)(Y, q(G({}, e), {
    onClick: t
  }))
}

function ea(e) {
  var {
    context: t,
    application: n,
    location: l,
    sectionName: a,
    isOneClickCTA: o,
    fetchesApplication: c = true
  } = e, d = function(e, t) {
    if (null == e) return {};
    var n, l, i = function(e, t) {
      if (null == e) return {};
      var n, l, i = {},
        r = Object.keys(e);
      for (l = 0; l < r.length; l++) n = r[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["context", "application", "location", "sectionName", "isOneClickCTA", "fetchesApplication"]);
  if (!(0, R.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
  let p = r.useId(),
    [m, f, h] = (0, s.Wu)([v.ZP, A.Z], () => [v.ZP.isLaunchingActivity(), v.ZP.getLaunchState(n.id, "channel" === t.type ? t.channel.id : true), A.Z.isLaunchingFrame(n.id)]),
    x = null != f && f.isLaunching && f.componentId === p || h,
    {
      onActivityItemSelected: y,
      activityAction: b,
      buttonVariant: N,
      buttonText: j
    } = (0, w.P7)({
      context: t,
      application: n,
      location: l,
      sectionName: a,
      launchingComponentId: p,
      fetchesApplication: c
    });
  return b === g.JS.START || b === g.JS.JOIN ? o ? (0, i.jsx)(Y, q(G({}, d), {
    sectionName: a,
    application: n,
    onClick: y,
    disabled: m || h,
    enableVideoBanner: !x,
    children: x ? (0, i.jsx)(u.$jN, {
      type: u.$jN.Type.PULSING_ELLIPSIS,
      className: B.spinner
    }) : null
  })) : (0, i.jsx)(er, q(G({}, d), {
    context: t,
    sectionName: a,
    application: n,
    location: l
  })) : (0, i.jsx)(Y, q(G({}, d), {
    sectionName: a,
    application: n,
    onClick: e => {
      e.stopPropagation()
    },
    imageStyle: B.darkenImage,
    enableVideoBanner: false,
    disabled: true,
    children: (0, i.jsx)("div", {
      className: B.voiceLauncherAppCardContainer,
      children: (0, i.jsx)(u.zxk, {
        type: "submit",
        size: "md",
        variant: N,
        disabled: m || h,
        onClick: y,
        "aria-label": V.intl.formatToPlainString(V.t["XjP/R0"], {
          buttonText: j,
          applicationName: n.name
        }),
        loading: x,
        text: j
      })
    })
  }))
}