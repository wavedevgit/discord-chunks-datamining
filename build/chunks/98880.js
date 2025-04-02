/** Chunk was on 35755 **/
n.d(t, {
  U4: () => z,
  cG: () => en,
  kA: () => ei,
  qR: () => er
}), n(266796), n(789020), n(47120), n(411104);
var i, r = n(200651),
  l = n(192379),
  o = n(120356),
  a = n.n(o),
  c = n(442837),
  s = n(481060),
  d = n(239091),
  u = n(911969),
  p = n(110924),
  m = n(607070),
  f = n(115130),
  h = n(317381),
  b = n(361213),
  v = n(542094),
  C = n(778569),
  _ = n(182906),
  x = n(556505),
  y = n(367907),
  N = n(220082),
  g = n(70097),
  j = n(973616),
  P = n(594174),
  E = n(695103),
  A = n(880448),
  O = n(768581),
  I = n(541099),
  S = n(783097),
  T = n(695676),
  L = n(176412),
  R = n(226026),
  w = n(570949),
  k = n(753972),
  Z = n(981631),
  M = n(217702),
  D = n(388032),
  W = n(207530),
  U = n(413097),
  B = n(969728);

function H() {
  return (H = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  }).apply(this, arguments)
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function F(e, t) {
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
var z = ((i = {}).ICON = "icon", i.ROW = "row", i.NO_BANNER = "no_banner", i.MEDIUM_BANNER = "medium_banner", i.LARGE_BANNER = "large_banner", i);

function G(e) {
  var t;
  let {
    application: n,
    look: i = "large_banner",
    onClick: l,
    imageStyle: o,
    enableVideoBanner: a = !0,
    children: c,
    sectionName: s,
    resultsPosition: d,
    sectionOverallPosition: u,
    tracksImpression: m = !0,
    disabled: f = !1,
    overrideImageUrl: h,
    showsPromoted: b
  } = e, v = null !== (t = (0, p.Z)(f)) && void 0 !== t ? t : f;
  return (0, r.jsx)(q, {
    application: n,
    onClick: l,
    sectionName: s,
    resultsPosition: d,
    disabled: f,
    tracksImpression: m,
    look: i,
    sectionOverallPosition: u,
    children: "icon" === i ? (0, r.jsx)(X, {
      application: n,
      imageStyle: o,
      children: c
    }) : (0, r.jsx)(Y, {
      application: n,
      look: i,
      imageStyle: o,
      enableVideoBanner: a,
      disableBannerFadeIn: v !== f,
      overrideImageUrl: h,
      showsPromoted: b,
      children: c
    })
  })
}

function q(e) {
  let {
    application: t,
    onClick: n,
    children: i,
    sectionName: o,
    resultsPosition: c,
    sectionOverallPosition: u,
    tracksImpression: p,
    disabled: m,
    containerStyle: f,
    look: h
  } = e, b = l.useCallback(e => {
    if ((0, S.BQ)(t)) {
      let n = t instanceof j.ZP ? t : j.ZP.createFromServer(t);
      (0, d.vq)(e, e => (0, r.jsx)(w.Z, V({
        application: n
      }, e)))
    }
  }, [t]), {
    name: v,
    description: C
  } = l.useMemo(() => (0, S.sl)(t, {
    fakeAppIconURL: U
  }), [t]), {
    trackItemImpressionRef: _
  } = (0, R.Z)({
    applicationId: t.id,
    applicationFlags: (0, S.BQ)(t) ? t.flags : void 0,
    sectionName: o,
    sectionPosition: c,
    sectionOverallPosition: u
  }), x = l.useMemo(() => {
    let e = m ? W.containerDisabled : W.container;
    return a()(e, {
      [W.containerBorderRadius]: "row" !== h,
      [W.rowContainer]: "row" === h,
      [W.iconCard]: "icon" === h
    }, f)
  }, [f, m, h]);
  return m ? (0, r.jsx)("div", {
    ref: p ? _ : void 0,
    className: x,
    children: i
  }) : (0, r.jsx)(s.P3F, {
    innerRef: p ? _ : void 0,
    className: x,
    onClick: n,
    onContextMenu: b,
    "aria-label": D.NW.formatToPlainString(D.t["zLhr9/"], {
      applicationName: v,
      applicationDescription: C
    }),
    children: (0, r.jsx)(s.Rny, {
      children: i
    })
  })
}

function X(e) {
  let {
    application: t,
    imageStyle: n,
    children: i
  } = e, {
    name: o,
    iconURL: c
  } = l.useMemo(() => (0, S.sl)(t, {
    fakeAppIconURL: U
  }), [t]);
  return (0, r.jsx)(s.ua7, {
    tooltipContentClassName: W.tooltipContent,
    text: o,
    children: e => {
      var t = H({}, function(e) {
        if (null == e) throw TypeError("Cannot destructure " + e);
        return e
      }(e));
      return (0, r.jsxs)("div", F(V({
        className: a()(W.iconContainer, n)
      }, t), {
        children: [(0, r.jsx)(k.Z, {
          src: c,
          className: W.iconCard,
          "aria-hidden": !0,
          rendersPlaceholder: !0
        }), i]
      }))
    }
  })
}

function Y(e) {
  let {
    application: t,
    look: n,
    imageStyle: i,
    enableVideoBanner: o,
    disableBannerFadeIn: d,
    children: p,
    overrideImageUrl: m,
    showsPromoted: h
  } = e, {
    iconURL: b,
    name: v,
    description: C
  } = l.useMemo(() => (0, S.sl)(t, {
    fakeAppIconURL: U
  }), [t]), _ = l.useMemo(() => null == C ? null : (0, L.ae)(C), [C]), y = (0, N.ZP)(b, ""), [g, j] = l.useState(!1), P = l.useCallback(() => {
    !0 === o && j(!0)
  }, [o]), A = h || (0, S.lf)(t), O = "large_banner" === n || "medium_banner" === n, I = l.useCallback(() => j(!1), []), T = (0, c.e7)([f.Z, E.Z], () => f.Z.inDevModeForApplication(t.id) || E.Z.inTestModeForApplication(t.id), [t.id]), R = (0, S.WA)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [O ? (0, r.jsxs)("div", {
      onMouseEnter: P,
      onFocus: P,
      onMouseLeave: I,
      onBlur: I,
      className: a()(W.bannerImageContainer, {
        [W.mediumBanner]: "medium_banner" === n,
        [W.largeBanner]: "large_banner" === n
      }),
      children: [(0, r.jsx)("span", {
        className: i,
        children: (0, r.jsx)(K, {
          application: t,
          fallbackColor: y,
          showVideo: g,
          disableFadeIn: d,
          overrideImageUrl: m
        })
      }), T || A || R !== u.ww.NONE ? (0, r.jsxs)("div", {
        className: W.bannerUpperRightContainer,
        children: [A && (0, r.jsx)("div", {
          className: W.promotedLabelWrapperBanner,
          children: (0, r.jsx)(s.X6q, {
            variant: "text-xxs/medium",
            color: "header-primary",
            children: D.NW.string(D.t["/eVltr"])
          })
        }), T && (0, r.jsx)(Q, {}), R !== u.ww.NONE && (0, r.jsx)(x.Z, {
          labelType: R
        })]
      }) : null, (0, r.jsx)("div", {
        className: W.bannerImageChildContainer,
        children: p
      })]
    }) : null, (0, r.jsxs)("div", {
      className: a()(W.appDetailsContainer, {
        [W.appDetailsRowContainer]: "row" === n
      }),
      children: [(0, r.jsx)(k.Z, {
        src: b,
        className: a()(W.icon, {
          [W.rowIcon]: "row" === n
        }),
        "aria-hidden": !0,
        rendersPlaceholder: !0
      }), (0, r.jsxs)("div", {
        className: W.appDetails,
        children: [(0, r.jsxs)("div", {
          className: W.appDetailsHeaderContainer,
          children: [(0, r.jsx)(s.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            lineClamp: 1,
            children: v
          }), !O && A ? (0, r.jsx)("div", {
            className: W.promotedLabelWrapperNonBanner,
            children: (0, r.jsx)(s.Text, {
              variant: "text-xxs/semibold",
              color: "text-muted",
              children: D.NW.string(D.t["/eVltr"])
            })
          }) : null, (0, r.jsx)(J, {
            application: t
          })]
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: _
        })]
      }), "row" === n ? (0, r.jsx)("div", {
        className: W.rowDivider
      }) : null]
    })]
  })
}

function Q() {
  return (0, r.jsx)(s.ua7, {
    text: D.NW.string(D.t.CfTySU),
    children: e => (0, r.jsx)("div", F(V({
      className: W.devShelfBadge
    }, e), {
      children: (0, r.jsx)(A.Z, {
        className: W.devShelfIcon
      })
    }))
  })
}

function J(e) {
  let {
    application: t
  } = e, n = P.default.getCurrentUser();
  if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
  let i = (0, S.yJ)(t);
  if (null == i || !(0, S.BQ)(t)) return null;
  let l = (0, v.fD)(t, i);
  return null == l ? null : (0, r.jsx)(s.ua7, {
    text: l,
    children: e => (0, r.jsx)("img", V({
      className: W.staffBadge,
      alt: l,
      src: B
    }, e))
  })
}

function K(e) {
  let {
    application: t,
    fallbackColor: n,
    showVideo: i,
    disableFadeIn: l,
    overrideImageUrl: o
  } = e;
  if (null != o) return (0, r.jsx)("img", {
    src: o,
    alt: (0, S.BQ)(t) ? t.name : "",
    className: a()(W.bannerImage, {
      [W.disableFadeIn]: l
    })
  });
  if ((0, S.BQ)(t)) {
    if ((0, S.ye)(t)) return (0, r.jsx)($, {
      application: t,
      showVideo: i,
      disableFadeIn: l
    });
    if (null != t.bot) return (0, r.jsx)(ee, {
      bot: t.bot,
      fallbackColor: n,
      disableFadeIn: l
    })
  }
  return (0, r.jsx)(et, {
    fallbackColor: n,
    disableFadeIn: l
  })
}

function $(e) {
  let {
    application: t,
    showVideo: n,
    disableFadeIn: i
  } = e, o = (0, C.Z)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  }), c = l.useMemo(() => {
    let e = (0, S.yJ)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, b.Z)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), [s, d] = l.useState(n);
  l.useEffect(() => {
    n && d(!0)
  }, [n]);
  let u = a()(W.bannerImage, {
    [W.disableFadeIn]: i
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [null != c && s ? (0, r.jsx)("div", {
      className: W.activityVideoContainer,
      children: (0, r.jsx)("div", {
        className: a()(W.activityVideo, {
          [W.videoFadeOut]: !n
        }),
        onAnimationEnd: () => n ? null : d(!1),
        children: (0, r.jsx)(g.Z, {
          src: c,
          mediaLayoutType: M.hV.MOSAIC,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      })
    }) : null, (0, r.jsx)(_.Z, {
      imageBackground: o,
      applicationName: t.name,
      imageClassName: u,
      imageNotFoundClassName: u
    })]
  })
}

function ee(e) {
  let {
    bot: t,
    fallbackColor: n,
    disableFadeIn: i
  } = e, l = (0, c.e7)([m.Z], () => m.Z.useReducedMotion), o = (0, O.aN)({
    id: t.id,
    banner: t.banner,
    canAnimate: !l,
    size: 600
  });
  return null == o ? (0, r.jsx)(et, {
    fallbackColor: n,
    disableFadeIn: i
  }) : (0, r.jsx)("img", {
    src: o,
    alt: "",
    className: a()(W.bannerImage, {
      [W.disableFadeIn]: i
    })
  })
}

function et(e) {
  let {
    fallbackColor: t,
    disableFadeIn: n
  } = e;
  return (0, r.jsx)("div", {
    className: a()(W.bannerImage, {
      [W.disableFadeIn]: n
    }),
    style: {
      backgroundColor: t
    }
  })
}

function en(e) {
  let {
    application: t,
    sectionName: n,
    resultsPosition: i,
    query: r,
    installOnDemand: o,
    location: a
  } = e, {
    pushHistory: c
  } = (0, T.hH)();
  return l.useCallback(e => {
    e.stopPropagation(), (0, y.yw)(Z.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
      application_id: t.id,
      section_name: n,
      search_results_position: i,
      source: I.Z.entrypoint(),
      location: a,
      query: r
    }), c({
      type: T.gc.APPLICATION,
      application: t,
      installOnDemand: o,
      sectionName: n
    })
  }, [t, o, a, c, r, i, n])
}

function ei(e) {
  let t = en(e);
  return (0, r.jsx)(G, F(V({}, e), {
    onClick: t
  }))
}

function er(e) {
  var {
    context: t,
    application: n,
    location: i,
    sectionName: o,
    isOneClickCTA: a,
    fetchesApplication: d = !0
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["context", "application", "location", "sectionName", "isOneClickCTA", "fetchesApplication"]);
  if (!(0, S.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
  let p = l.useId(),
    [m, f] = (0, c.Wu)([h.ZP], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0)]),
    b = null != f && f.isLaunching && f.componentId === p,
    {
      onActivityItemSelected: C,
      activityAction: _,
      buttonColor: x,
      buttonText: y
    } = (0, L.P7)({
      context: t,
      application: n,
      location: i,
      sectionName: o,
      launchingComponentId: p,
      fetchesApplication: d
    });
  return _ === v.JS.START || _ === v.JS.JOIN ? a ? (0, r.jsx)(G, F(V({}, u), {
    sectionName: o,
    application: n,
    onClick: C,
    disabled: m,
    enableVideoBanner: !b,
    children: b ? (0, r.jsx)(s.$jN, {
      type: s.$jN.Type.PULSING_ELLIPSIS,
      className: W.spinner
    }) : null
  })) : (0, r.jsx)(ei, F(V({}, u), {
    context: t,
    sectionName: o,
    application: n,
    location: i
  })) : (0, r.jsx)(G, F(V({}, u), {
    sectionName: o,
    application: n,
    onClick: e => {
      e.stopPropagation()
    },
    imageStyle: W.darkenImage,
    enableVideoBanner: !1,
    disabled: !0,
    children: (0, r.jsx)("div", {
      className: W.voiceLauncherAppCardContainer,
      children: (0, r.jsx)(s.zxk, {
        className: W.voiceLauncherAppCardButton,
        type: "submit",
        size: s.zxk.Sizes.LARGE,
        color: x,
        disabled: m,
        onClick: C,
        "aria-label": D.NW.formatToPlainString(D.t["XjP/R0"], {
          buttonText: y,
          applicationName: n.name
        }),
        submitting: b,
        children: y
      })
    })
  }))
}