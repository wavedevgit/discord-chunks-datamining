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

function F() {
  return (F = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
    }
    return e
  }).apply(this, arguments)
}

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
    tracksImpression: m = true,
    disabled: f = false,
    overrideImageUrl: h,
    showsPromoted: v
  } = e, y = null != (t = (0, p.Z)(f)) ? t : f;
  return (0, i.jsx)(X, {
    application: n,
    onClick: r,
    sectionName: c,
    resultsPosition: u,
    disabled: f,
    tracksImpression: m,
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
      disableBannerFadeIn: y !== f,
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
    sectionOverallPosition: d,
    tracksImpression: p,
    disabled: m,
    containerStyle: f,
    look: h
  } = e, v = r.useCallback(e => {
    if ((0, L.BQ)(t)) {
      let n = t instanceof O.ZP ? t : O.ZP.createFromServer(t);
      (0, u.vq)(e, e => (0, i.jsx)(k.Z, G({
        application: n
      }, e)))
    }
  }, [t]), {
    name: y,
    description: x
  } = r.useMemo(() => (0, L.sl)(t, {
    fakeAppIconURL: B
  }), [t]), {
    trackItemImpressionRef: b
  } = (0, w.Z)({
    applicationId: t.id,
    applicationFlags: (0, L.BQ)(t) ? t.flags : true,
    sectionName: a,
    sectionPosition: s,
    sectionOverallPosition: d,
    promotionalLabel: (0, L.dF)(t)
  }), g = r.useMemo(() => {
    let e = m ? V.containerDisabled : V.container;
    return o()(e, {
      [V.containerBorderRadius]: "row" !== h,
      [V.rowContainer]: "row" === h,
      [V.iconCard]: "icon" === h
    }, f)
  }, [f, m, h]);
  return m ? (0, i.jsx)("div", {
    ref: p ? b : true,
    className: g,
    children: l
  }) : (0, i.jsx)(c.P3F, {
    innerRef: p ? b : true,
    className: g,
    onClick: n,
    onContextMenu: v,
    "aria-label": H.intl.formatToPlainString(H.t["zLhr9/"], {
      applicationName: y,
      applicationDescription: x
    }),
    children: (0, i.jsx)(c.Rny, {
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
  } = r.useMemo(() => (0, L.sl)(t, {
    fakeAppIconURL: B
  }), [t]);
  return (0, i.jsx)(c.ua7, {
    tooltipContentClassName: V.tooltipContent,
    text: a,
    children: e => {
      var t = F({}, function(e) {
        if (null == e) throw TypeError("Cannot destructure " + e);
        return e
      }(e));
      return (0, i.jsxs)("div", q(G({
        className: o()(V.iconContainer, n)
      }, t), {
        children: [(0, i.jsx)(M.Z, {
          src: s,
          className: V.iconCard,
          "aria-hidden": true,
          rendersPlaceholder: true
        }), l]
      }))
    }
  })
}

function J(e) {
  let {
    application: t,
    look: n,
    imageStyle: l,
    enableVideoBanner: a,
    disableBannerFadeIn: u,
    children: p,
    overrideImageUrl: m,
    showsPromoted: h
  } = e, {
    iconURL: v,
    name: y,
    description: x
  } = r.useMemo(() => (0, L.sl)(t, {
    fakeAppIconURL: B
  }), [t]), b = r.useMemo(() => null == x ? null : (0, Z.ae)(x), [x]), g = (0, C.ZP)(v, ""), [N, E] = r.useState(false), P = r.useCallback(() => {
    true === a && E(true)
  }, [a]), O = h || (0, L.lf)(t), A = "large_banner" === n || "medium_banner" === n, I = r.useCallback(() => E(false), []), S = (0, s.e7)([f.Z, _.Z], () => f.Z.inDevModeForApplication(t.id) || _.Z.inTestModeForApplication(t.id), [t.id]), T = (0, L.WA)(t);
  return (0, i.jsxs)(i.Fragment, {
    children: [A ? (0, i.jsxs)("div", {
      onMouseEnter: P,
      onFocus: P,
      onMouseLeave: I,
      onBlur: I,
      className: o()(V.bannerImageContainer, {
        [V.mediumBanner]: "medium_banner" === n,
        [V.largeBanner]: "large_banner" === n
      }),
      children: [(0, i.jsx)("span", {
        className: l,
        children: (0, i.jsx)(ee, {
          application: t,
          fallbackColor: g,
          showVideo: N,
          disableFadeIn: u,
          overrideImageUrl: m
        })
      }), S || O || T !== d.ww.NONE ? (0, i.jsxs)("div", {
        className: V.bannerUpperRightContainer,
        children: [O && (0, i.jsx)("div", {
          className: V.promotedLabelWrapperBanner,
          children: (0, i.jsx)(c.X6q, {
            variant: "text-xxs/medium",
            color: "header-primary",
            children: H.intl.string(H.t["/eVltr"])
          })
        }), S && (0, i.jsx)(K, {}), T !== d.ww.NONE && (0, i.jsx)(j.Z, {
          labelType: T
        })]
      }) : null, (0, i.jsx)("div", {
        className: V.bannerImageChildContainer,
        children: p
      })]
    }) : null, (0, i.jsxs)("div", {
      className: o()(V.appDetailsContainer, {
        [V.appDetailsRowContainer]: "row" === n
      }),
      children: [(0, i.jsx)(M.Z, {
        src: v,
        className: o()(V.icon, {
          [V.rowIcon]: "row" === n
        }),
        "aria-hidden": true,
        rendersPlaceholder: true
      }), (0, i.jsxs)("div", {
        className: V.appDetails,
        children: [(0, i.jsxs)("div", {
          className: V.appDetailsHeaderContainer,
          children: [(0, i.jsx)(c.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            lineClamp: 1,
            children: y
          }), !A && O ? (0, i.jsx)("div", {
            className: V.promotedLabelWrapperNonBanner,
            children: (0, i.jsx)(c.Text, {
              variant: "text-xxs/semibold",
              color: "text-muted",
              children: H.intl.string(H.t["/eVltr"])
            })
          }) : null, (0, i.jsx)($, {
            application: t
          })]
        }), (0, i.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: b
        })]
      }), "row" === n ? (0, i.jsx)("div", {
        className: V.rowDivider
      }) : null]
    })]
  })
}

function K() {
  return (0, Chunk951288.jsx)(Chunk481060.ua7, {
    text: Chunk388032.intl.string(Chunk388032.t.CfTySU),
    children: e => (0, i.jsx)("div", q(G({
      className: V.devShelfBadge
    }, e), {
      children: (0, i.jsx)(I.Z, {
        className: V.devShelfIcon
      })
    }))
  })
}

function $(e) {
  let {
    application: t
  } = e, n = A.default.getCurrentUser();
  if (!(null == n ? true : n.isStaff()) && !(null == n ? true : n.isStaffPersonal())) return null;
  let l = (0, L.yJ)(t);
  if (null == l || !(0, L.BQ)(t)) return null;
  let r = (0, x.fD)(t, l);
  return null == r ? null : (0, i.jsx)(c.ua7, {
    text: r,
    children: e => (0, i.jsx)("img", G({
      className: V.staffBadge,
      alt: r,
      src: W
    }, e))
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
    alt: (0, L.BQ)(t) ? t.name : "",
    className: o()(V.bannerImage, {
      [V.disableFadeIn]: r
    })
  });
  if ((0, L.BQ)(t)) {
    if ((0, L.ye)(t)) return (0, i.jsx)(et, {
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
    let e = (0, L.yJ)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, y.Z)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), [c, u] = r.useState(n);
  r.useEffect(() => {
    n && u(true)
  }, [n]);
  let d = o()(V.bannerImage, {
    [V.disableFadeIn]: l
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [null != s && c ? (0, i.jsx)("div", {
      className: V.activityVideoContainer,
      children: (0, i.jsx)("div", {
        className: o()(V.activityVideo, {
          [V.videoFadeOut]: !n
        }),
        onAnimationEnd: () => n ? null : u(false),
        children: (0, i.jsx)(E.Z, {
          src: s,
          mediaLayoutType: D.hV.MOSAIC,
          loop: true,
          autoPlay: true,
          muted: true
        })
      })
    }) : null, (0, i.jsx)(g.Z, {
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
  } = e, r = (0, s.e7)([m.Z], () => m.Z.useReducedMotion), a = (0, S.aN)({
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
    className: o()(V.bannerImage, {
      [V.disableFadeIn]: l
    })
  })
}

function el(e) {
  let {
    fallbackColor: t,
    disableFadeIn: n
  } = e;
  return (0, i.jsx)("div", {
    className: o()(V.bannerImage, {
      [V.disableFadeIn]: n
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
  } = (0, R.hH)(), {
    friends: c
  } = (0, v.Z)(t);
  return {
    onClickAppCard: r.useCallback(e => {
      e.stopPropagation(), (0, N.yw)(U.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
        application_id: t.id,
        section_name: n,
        search_results_position: l,
        source: T.Z.entrypoint(),
        promotional_label: (0, L.dF)(t),
        location: o,
        query: i,
        num_friends_who_play: c.length
      }), s({
        type: R.gc.APPLICATION,
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
    fetchesApplication: u = true
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
  if (!(0, L.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
  let p = r.useId(),
    [m, f, v] = (0, s.Wu)([h.ZP, P.Z], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, "channel" === t.type ? t.channel.id : true), P.Z.isLaunchingFrame(n.id)]),
    y = null != f && f.isLaunching && f.componentId === p || v,
    {
      onActivityItemSelected: b,
      activityAction: g,
      buttonVariant: j,
      buttonText: N
    } = (0, Z.P7)({
      context: t,
      application: n,
      location: l,
      sectionName: a,
      launchingComponentId: p,
      fetchesApplication: u
    });
  return g === x.JS.START || g === x.JS.JOIN ? o ? (0, i.jsx)(Y, q(G({}, d), {
    sectionName: a,
    application: n,
    onClick: b,
    disabled: m || v,
    enableVideoBanner: !y,
    children: y ? (0, i.jsx)(c.$jN, {
      type: c.$jN.Type.PULSING_ELLIPSIS,
      className: V.spinner
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
    imageStyle: V.darkenImage,
    enableVideoBanner: false,
    disabled: true,
    children: (0, i.jsx)("div", {
      className: V.voiceLauncherAppCardContainer,
      children: (0, i.jsx)(c.zxk, {
        type: "submit",
        size: "md",
        variant: j,
        disabled: m || v,
        onClick: b,
        "aria-label": H.intl.formatToPlainString(H.t["XjP/R0"], {
          buttonText: N,
          applicationName: n.name
        }),
        loading: y,
        text: N
      })
    })
  }))
}