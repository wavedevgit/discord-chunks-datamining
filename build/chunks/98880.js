/** Chunk was on 35755 **/
n.d(t, {
  U4: () => B,
  cG: () => ee,
  kA: () => et,
  qR: () => en
}), n(266796), n(789020), n(47120), n(411104);
var i, l = n(200651),
  r = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  c = n(481060),
  u = n(239091),
  d = n(110924),
  p = n(607070),
  m = n(115130),
  h = n(317381),
  f = n(361213),
  v = n(542094),
  N = n(778569),
  x = n(182906),
  y = n(367907),
  b = n(220082),
  E = n(70097),
  j = n(973616),
  C = n(594174),
  g = n(695103),
  P = n(880448),
  A = n(768581),
  I = n(541099),
  _ = n(783097),
  O = n(695676),
  S = n(176412),
  T = n(226026),
  L = n(570949),
  R = n(753972),
  Z = n(981631),
  k = n(217702),
  M = n(388032),
  w = n(219954),
  W = n(413097),
  U = n(969728);

function D() {
  return (D = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  }).apply(this, arguments)
}

function H(e) {
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

function V(e, t) {
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
var B = ((i = {}).ICON = "icon", i.ROW = "row", i.NO_BANNER = "no_banner", i.MEDIUM_BANNER = "medium_banner", i.LARGE_BANNER = "large_banner", i);

function F(e) {
  var t;
  let {
    application: n,
    look: i = "large_banner",
    onClick: r,
    imageStyle: o,
    enableVideoBanner: a = !0,
    children: s,
    sectionName: c,
    resultsPosition: u,
    sectionOverallPosition: p,
    tracksImpression: m = !0,
    disabled: h = !1,
    overrideImageUrl: f,
    showsPromoted: v
  } = e, N = null !== (t = (0, d.Z)(h)) && void 0 !== t ? t : h;
  return (0, l.jsx)(G, {
    application: n,
    onClick: r,
    sectionName: c,
    resultsPosition: u,
    disabled: h,
    tracksImpression: m,
    look: i,
    sectionOverallPosition: p,
    children: "icon" === i ? (0, l.jsx)(z, {
      application: n,
      imageStyle: o,
      children: s
    }) : (0, l.jsx)(Y, {
      application: n,
      look: i,
      imageStyle: o,
      enableVideoBanner: a,
      disableBannerFadeIn: N !== h,
      overrideImageUrl: f,
      showsPromoted: v,
      children: s
    })
  })
}

function G(e) {
  let {
    application: t,
    onClick: n,
    children: i,
    sectionName: o,
    resultsPosition: s,
    sectionOverallPosition: d,
    tracksImpression: p,
    disabled: m,
    containerStyle: h,
    look: f
  } = e, v = r.useCallback(e => {
    if ((0, _.BQ)(t)) {
      let n = t instanceof j.ZP ? t : j.ZP.createFromServer(t);
      (0, u.vq)(e, e => (0, l.jsx)(L.Z, H({
        application: n
      }, e)))
    }
  }, [t]), {
    name: N,
    description: x
  } = r.useMemo(() => (0, _.sl)(t, {
    fakeAppIconURL: W
  }), [t]), {
    trackItemImpressionRef: y
  } = (0, T.Z)({
    applicationId: t.id,
    applicationFlags: (0, _.BQ)(t) ? t.flags : void 0,
    sectionName: o,
    sectionPosition: s,
    sectionOverallPosition: d
  }), b = r.useMemo(() => {
    let e = m ? w.containerDisabled : w.container;
    return a()(e, {
      [w.containerBorderRadius]: "row" !== f,
      [w.rowContainer]: "row" === f,
      [w.iconCard]: "icon" === f
    }, h)
  }, [h, m, f]);
  return m ? (0, l.jsx)("div", {
    ref: p ? y : void 0,
    className: b,
    children: i
  }) : (0, l.jsx)(c.P3F, {
    innerRef: p ? y : void 0,
    className: b,
    onClick: n,
    onContextMenu: v,
    "aria-label": M.NW.formatToPlainString(M.t["zLhr9/"], {
      applicationName: N,
      applicationDescription: x
    }),
    children: (0, l.jsx)(c.Rny, {
      children: i
    })
  })
}

function z(e) {
  let {
    application: t,
    imageStyle: n,
    children: i
  } = e, {
    name: o,
    iconURL: s
  } = r.useMemo(() => (0, _.sl)(t, {
    fakeAppIconURL: W
  }), [t]);
  return (0, l.jsx)(c.ua7, {
    tooltipContentClassName: w.tooltipContent,
    text: o,
    children: e => {
      var t = D({}, function(e) {
        if (null == e) throw TypeError("Cannot destructure " + e);
        return e
      }(e));
      return (0, l.jsxs)("div", V(H({
        className: a()(w.iconContainer, n)
      }, t), {
        children: [(0, l.jsx)(R.Z, {
          src: s,
          className: w.iconCard,
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
    disableBannerFadeIn: u,
    children: d,
    overrideImageUrl: p,
    showsPromoted: h
  } = e, {
    iconURL: f,
    name: v,
    description: N
  } = r.useMemo(() => (0, _.sl)(t, {
    fakeAppIconURL: W
  }), [t]), x = r.useMemo(() => null == N ? null : (0, S.ae)(N), [N]), y = (0, b.ZP)(f, ""), [E, j] = r.useState(!1), C = r.useCallback(() => {
    !0 === o && j(!0)
  }, [o]), P = h || (0, _.lf)(t), A = "large_banner" === n || "medium_banner" === n, I = r.useCallback(() => j(!1), []), O = (0, s.e7)([m.Z, g.Z], () => m.Z.inDevModeForApplication(t.id) || g.Z.inTestModeForApplication(t.id), [t.id]);
  return (0, l.jsxs)(l.Fragment, {
    children: [A ? (0, l.jsxs)("div", {
      onMouseEnter: C,
      onFocus: C,
      onMouseLeave: I,
      onBlur: I,
      className: a()(w.bannerImageContainer, {
        [w.mediumBanner]: "medium_banner" === n,
        [w.largeBanner]: "large_banner" === n
      }),
      children: [(0, l.jsx)("span", {
        className: i,
        children: (0, l.jsx)(Q, {
          application: t,
          fallbackColor: y,
          showVideo: E,
          disableFadeIn: u,
          overrideImageUrl: p
        })
      }), O || P ? (0, l.jsxs)("div", {
        className: w.bannerUpperRightContainer,
        children: [P && (0, l.jsx)("div", {
          className: w.promotedLabelWrapperBanner,
          children: (0, l.jsx)(c.X6q, {
            variant: "text-xxs/medium",
            color: "header-primary",
            children: M.NW.string(M.t["/eVltr"])
          })
        }), O && (0, l.jsx)(q, {})]
      }) : null, (0, l.jsx)("div", {
        className: w.bannerImageChildContainer,
        children: d
      })]
    }) : null, (0, l.jsxs)("div", {
      className: a()(w.appDetailsContainer, {
        [w.appDetailsRowContainer]: "row" === n
      }),
      children: [(0, l.jsx)(R.Z, {
        src: f,
        className: a()(w.icon, {
          [w.rowIcon]: "row" === n
        }),
        "aria-hidden": !0,
        rendersPlaceholder: !0
      }), (0, l.jsxs)("div", {
        className: w.appDetails,
        children: [(0, l.jsxs)("div", {
          className: w.appDetailsHeaderContainer,
          children: [(0, l.jsx)(c.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            lineClamp: 1,
            children: v
          }), !A && P ? (0, l.jsx)("div", {
            className: w.promotedLabelWrapperNonBanner,
            children: (0, l.jsx)(c.Text, {
              variant: "text-xxs/semibold",
              color: "text-muted",
              children: M.NW.string(M.t["/eVltr"])
            })
          }) : null, (0, l.jsx)(X, {
            application: t
          })]
        }), (0, l.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: x
        })]
      }), "row" === n ? (0, l.jsx)("div", {
        className: w.rowDivider
      }) : null]
    })]
  })
}

function q() {
  return (0, l.jsx)(c.ua7, {
    text: M.NW.string(M.t.CfTySU),
    children: e => (0, l.jsx)("div", V(H({
      className: w.devShelfBadge
    }, e), {
      children: (0, l.jsx)(P.Z, {
        className: w.devShelfIcon
      })
    }))
  })
}

function X(e) {
  let {
    application: t
  } = e, n = C.default.getCurrentUser();
  if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
  let i = (0, _.yJ)(t);
  if (null == i || !(0, _.BQ)(t)) return null;
  let r = (0, v.fD)(t, i);
  return null == r ? null : (0, l.jsx)(c.ua7, {
    text: r,
    children: e => (0, l.jsx)("img", H({
      className: w.staffBadge,
      alt: r,
      src: U
    }, e))
  })
}

function Q(e) {
  let {
    application: t,
    fallbackColor: n,
    showVideo: i,
    disableFadeIn: r,
    overrideImageUrl: o
  } = e;
  if (null != o) return (0, l.jsx)("img", {
    src: o,
    alt: (0, _.BQ)(t) ? t.name : "",
    className: a()(w.bannerImage, {
      [w.disableFadeIn]: r
    })
  });
  if ((0, _.BQ)(t)) {
    if ((0, _.ye)(t)) return (0, l.jsx)(J, {
      application: t,
      showVideo: i,
      disableFadeIn: r
    });
    if (null != t.bot) return (0, l.jsx)(K, {
      bot: t.bot,
      fallbackColor: n,
      disableFadeIn: r
    })
  }
  return (0, l.jsx)($, {
    fallbackColor: n,
    disableFadeIn: r
  })
}

function J(e) {
  let {
    application: t,
    showVideo: n,
    disableFadeIn: i
  } = e, o = (0, N.Z)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"]
  }), s = r.useMemo(() => {
    let e = (0, _.yJ)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, f.Z)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), [c, u] = r.useState(n);
  r.useEffect(() => {
    n && u(!0)
  }, [n]);
  let d = a()(w.bannerImage, {
    [w.disableFadeIn]: i
  });
  return (0, l.jsxs)(l.Fragment, {
    children: [null != s && c ? (0, l.jsx)("div", {
      className: w.activityVideoContainer,
      children: (0, l.jsx)("div", {
        className: a()(w.activityVideo, {
          [w.videoFadeOut]: !n
        }),
        onAnimationEnd: () => n ? null : u(!1),
        children: (0, l.jsx)(E.Z, {
          src: s,
          mediaLayoutType: k.hV.MOSAIC,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      })
    }) : null, (0, l.jsx)(x.Z, {
      imageBackground: o,
      applicationName: t.name,
      imageClassName: d,
      imageNotFoundClassName: d
    })]
  })
}

function K(e) {
  let {
    bot: t,
    fallbackColor: n,
    disableFadeIn: i
  } = e, r = (0, s.e7)([p.Z], () => p.Z.useReducedMotion), o = (0, A.aN)({
    id: t.id,
    banner: t.banner,
    canAnimate: !r,
    size: 600
  });
  return null == o ? (0, l.jsx)($, {
    fallbackColor: n,
    disableFadeIn: i
  }) : (0, l.jsx)("img", {
    src: o,
    alt: "",
    className: a()(w.bannerImage, {
      [w.disableFadeIn]: i
    })
  })
}

function $(e) {
  let {
    fallbackColor: t,
    disableFadeIn: n
  } = e;
  return (0, l.jsx)("div", {
    className: a()(w.bannerImage, {
      [w.disableFadeIn]: n
    }),
    style: {
      backgroundColor: t
    }
  })
}

function ee(e) {
  let {
    application: t,
    sectionName: n,
    resultsPosition: i,
    query: l,
    installOnDemand: o,
    location: a
  } = e, {
    pushHistory: s
  } = (0, O.hH)();
  return r.useCallback(e => {
    e.stopPropagation(), (0, y.yw)(Z.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
      application_id: t.id,
      section_name: n,
      search_results_position: i,
      source: I.Z.entrypoint(),
      location: a,
      query: l
    }), s({
      type: O.gc.APPLICATION,
      application: t,
      installOnDemand: o,
      sectionName: n
    })
  }, [t, o, a, s, l, i, n])
}

function et(e) {
  let t = ee(e);
  return (0, l.jsx)(F, V(H({}, e), {
    onClick: t
  }))
}

function en(e) {
  var {
    context: t,
    application: n,
    location: i,
    sectionName: o,
    isOneClickCTA: a,
    fetchesApplication: u = !0
  } = e, d = function(e, t) {
    if (null == e) return {};
    var n, i, l = function(e, t) {
      if (null == e) return {};
      var n, i, l = {},
        r = Object.keys(e);
      for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["context", "application", "location", "sectionName", "isOneClickCTA", "fetchesApplication"]);
  if (!(0, _.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
  let p = r.useId(),
    [m, f] = (0, s.Wu)([h.ZP], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0)]),
    N = null != f && f.isLaunching && f.componentId === p,
    {
      onActivityItemSelected: x,
      activityAction: y,
      buttonColor: b,
      buttonText: E
    } = (0, S.P7)({
      context: t,
      application: n,
      location: i,
      sectionName: o,
      launchingComponentId: p,
      fetchesApplication: u
    });
  return y === v.JS.START || y === v.JS.JOIN ? a ? (0, l.jsx)(F, V(H({}, d), {
    sectionName: o,
    application: n,
    onClick: x,
    disabled: m,
    enableVideoBanner: !N,
    children: N ? (0, l.jsx)(c.$jN, {
      type: c.$jN.Type.PULSING_ELLIPSIS,
      className: w.spinner
    }) : null
  })) : (0, l.jsx)(et, V(H({}, d), {
    context: t,
    sectionName: o,
    application: n,
    location: i
  })) : (0, l.jsx)(F, V(H({}, d), {
    sectionName: o,
    application: n,
    onClick: e => {
      e.stopPropagation()
    },
    imageStyle: w.darkenImage,
    enableVideoBanner: !1,
    disabled: !0,
    children: (0, l.jsx)("div", {
      className: w.voiceLauncherAppCardContainer,
      children: (0, l.jsx)(c.zxk, {
        className: w.voiceLauncherAppCardButton,
        type: "submit",
        size: c.zxk.Sizes.LARGE,
        color: b,
        disabled: m,
        onClick: x,
        "aria-label": M.NW.formatToPlainString(M.t["XjP/R0"], {
          buttonText: E,
          applicationName: n.name
        }),
        submitting: N,
        children: E
      })
    })
  }))
}