/** Chunk was on web.js **/
/** chunk id: 169909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gt: () => eu,
  Ps: () => ec,
  r0: () => $,
  wW: () => ed
}), require("./228524.js"), require("./938796.js"), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk696292 = require("./696292.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk155718 = require("./155718.js"),
  Chunk475743 = require("./475743.js"),
  Chunk775602 = require("./775602.js"),
  Chunk10716 = require("./10716.js"),
  Chunk933958 = require("./933958.js"),
  Chunk625929 = require("./625929.js"),
  Chunk435582 = require("./435582.js"),
  Chunk849269 = require("./849269.js"),
  Chunk283488 = require("./283488.js"),
  Chunk881343 = require("./881343.jsx"),
  Chunk697675 = require("./697675.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk654107 = require("./654107.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk91242 = require("./91242.js"),
  Chunk753845 = require("./753845.jsx"),
  Chunk611010 = require("./611010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk147964 = require("./147964.js"),
  Chunk168936 = require("./168936.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk989837 = require("./989837.js"),
  Chunk735991 = require("./735991.js"),
  Chunk485878 = require("./485878.js"),
  Chunk297486 = require("./297486.js"),
  Chunk786115 = require("./786115.js"),
  Chunk346446 = require("./346446.jsx"),
  Chunk717048 = require("./717048.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk838541 = require("./838541.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk880445 = require("./880445.js"),
  Chunk291071 = require("./291071.js"),
  Chunk3697 = require("./3697.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = Q(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function Q(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
var $ = function(e) {
  return e.ICON = "icon", e.ROW = "row", e.NO_BANNER = "no_banner", e.MEDIUM_BANNER = "medium_banner", e.LARGE_BANNER = "large_banner", e
}({});

function J(e) {
  var t;
  let {
    application: n,
    look: i = "large_banner",
    onClick: a,
    imageStyle: s,
    enableVideoBanner: l = true,
    children: c,
    sectionName: u,
    resultsPosition: d,
    sectionOverallPosition: f,
    tracksImpression: _ = true,
    disabled: h = false,
    overrideImageUrl: m,
    showsPromoted: g
  } = e, E = null != (t = (0, p.A)(h)) ? t : h;
  return (0, r.jsx)(ee, {
    application: n,
    onClick: a,
    sectionName: u,
    resultsPosition: d,
    disabled: h,
    tracksImpression: _,
    look: i,
    sectionOverallPosition: f,
    children: (0, r.jsx)(C.A, {
      applicationId: n.id,
      questContent: o.u.APP_LAUNCHER,
      children: e => (0, r.jsx)("div", {
        ref: e,
        children: "icon" === i ? (0, r.jsx)(et, {
          application: n,
          imageStyle: s,
          children: c
        }) : (0, r.jsx)(en, {
          application: n,
          look: i,
          imageStyle: s,
          enableVideoBanner: l,
          disableBannerFadeIn: E !== h,
          overrideImageUrl: m,
          showsPromoted: g,
          children: c
        })
      })
    })
  })
}

function ee(e) {
  let {
    application: t,
    onClick: n,
    children: a,
    sectionName: o,
    resultsPosition: l,
    sectionOverallPosition: c,
    tracksImpression: f,
    disabled: p,
    containerStyle: _,
    look: h
  } = e, m = i.useCallback(e => {
    if ((0, L.$B)(t)) {
      let n = t instanceof N.Ay ? t : N.Ay.createFromServer(t);
      (0, d.jA)(e, e => (0, r.jsx)(U.A, z({
        application: n
      }, e)))
    }
  }, [t]), {
    name: g,
    description: E
  } = i.useMemo(() => (0, L.X2)(t, {
    fakeAppIconURL: Y
  }), [t]), {
    trackItemImpressionRef: b
  } = (0, k.A)({
    applicationId: t.id,
    applicationFlags: (0, L.$B)(t) ? t.flags : true,
    sectionName: o,
    sectionPosition: l,
    sectionOverallPosition: c,
    promotionalLabel: (0, L.Ii)(t)
  }), y = i.useMemo(() => {
    let e = p ? H.Qz : H.kL;
    return s()(e, {
      [H.uS]: "row" !== h,
      [H.qd]: "row" === h,
      [H.oI]: "icon" === h
    }, _)
  }, [_, p, h]);
  return p ? (0, r.jsx)("div", {
    ref: f ? b : true,
    className: y,
    children: a
  }) : (0, r.jsx)(u.DUT, {
    innerRef: f ? b : true,
    className: y,
    onClick: n,
    onContextMenu: m,
    "aria-label": B.intl.formatToPlainString(B.t["zLhr9+"], {
      applicationName: g,
      applicationDescription: E
    }),
    children: (0, r.jsx)(u.M1G, {
      children: a
    })
  })
}

function et(e) {
  let {
    application: t,
    imageStyle: n,
    children: a
  } = e, {
    name: o,
    iconURL: l
  } = i.useMemo(() => (0, L.X2)(t, {
    fakeAppIconURL: Y
  }), [t]);
  return (0, r.jsx)(c.m, {
    __unsupportedReactNodeAsText: o,
    children: (0, r.jsxs)("div", {
      className: s()(H.zc, n),
      children: [(0, r.jsx)(G.A, {
        src: l,
        className: H.oI,
        "aria-hidden": true,
        rendersPlaceholder: true
      }), a]
    })
  })
}

function en(e) {
  let {
    application: t,
    look: n,
    imageStyle: a,
    enableVideoBanner: o,
    disableBannerFadeIn: c,
    children: d,
    overrideImageUrl: p,
    showsPromoted: _
  } = e, {
    iconURL: m,
    name: g,
    description: E
  } = i.useMemo(() => (0, L.X2)(t, {
    fakeAppIconURL: Y
  }), [t]), b = i.useMemo(() => null == E ? null : (0, M.SD)(E), [E]), y = (0, S.Ay)(m, ""), [O, v] = i.useState(false), I = i.useCallback(() => {
    true === o && v(true)
  }, [o]), T = _ || (0, L.NO)(t), C = "large_banner" === n || "medium_banner" === n, N = i.useCallback(() => v(false), []), R = (0, l.bG)([h.A, w.A], () => h.A.inDevModeForApplication(t.id) || w.A.inTestModeForApplication(t.id), [t.id]), P = (0, L.fl)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [C ? (0, r.jsxs)("div", {
      onMouseEnter: I,
      onFocus: I,
      onMouseLeave: N,
      onBlur: N,
      className: s()(H.zK, {
        [H.i2]: "medium_banner" === n,
        [H.ir]: "large_banner" === n
      }),
      children: [(0, r.jsx)("span", {
        className: a,
        children: (0, r.jsx)(ea, {
          application: t,
          fallbackColor: y,
          showVideo: O,
          disableFadeIn: c,
          overrideImageUrl: p
        })
      }), R || T || P !== f.Hr.NONE ? (0, r.jsxs)("div", {
        className: H.YN,
        children: [T && (0, r.jsx)("div", {
          className: H.Ag,
          children: (0, r.jsx)(u.Heading, {
            variant: "text-xxs/medium",
            color: "text-strong",
            children: B.intl.string(B.t["/eVltv"])
          })
        }), R && (0, r.jsx)(er, {}), P !== f.Hr.NONE && (0, r.jsx)(A.A, {
          labelType: P
        })]
      }) : null, (0, r.jsx)("div", {
        className: H.Re,
        children: d
      })]
    }) : null, (0, r.jsxs)("div", {
      className: s()(H.TD, {
        [H.Ne]: "row" === n
      }),
      children: [(0, r.jsx)(G.A, {
        src: m,
        className: s()(H.Kk, {
          [H.aL]: "row" === n
        }),
        "aria-hidden": true,
        rendersPlaceholder: true
      }), (0, r.jsxs)("div", {
        className: H.eV,
        children: [(0, r.jsxs)("div", {
          className: H.mD,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: g
          }), !C && T ? (0, r.jsx)("div", {
            className: H.nb,
            children: (0, r.jsx)(u.Text, {
              variant: "text-xxs/semibold",
              color: "text-muted",
              children: B.intl.string(B.t["/eVltv"])
            })
          }) : null, (0, r.jsx)(ei, {
            application: t
          })]
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          lineClamp: 1,
          children: b
        })]
      }), "row" === n ? (0, r.jsx)("div", {
        className: H.ek
      }) : null]
    })]
  })
}

function er() {
  return (0, r.jsx)(c.m, {
    text: B.intl.string(B.t.CfTySQ),
    children: (0, r.jsx)("div", {
      className: H.hh,
      children: (0, r.jsx)(P.A, {
        className: H.bB
      })
    })
  })
}

function ei(e) {
  let {
    application: t
  } = e, n = R.default.getCurrentUser();
  if (!(null == n ? true : n.isStaff()) && !(null == n ? true : n.isStaffPersonal())) return null;
  let i = (0, L.Cx)(t);
  if (null == i || !(0, L.$B)(t)) return null;
  let a = (0, b.l$)(t, i);
  return null == a ? null : (0, r.jsx)(c.m, {
    __unsupportedReactNodeAsText: a,
    children: (0, r.jsx)("img", {
      className: H.io,
      alt: a,
      src: W
    })
  })
}

function ea(e) {
  let {
    application: t,
    fallbackColor: n,
    showVideo: i,
    disableFadeIn: a,
    overrideImageUrl: o
  } = e;
  if (null != o) return (0, r.jsx)("img", {
    src: o,
    alt: (0, L.$B)(t) ? t.name : "",
    className: s()(H._e, {
      [H.cG]: a
    })
  });
  if ((0, L.$B)(t)) {
    if ((0, L.Ag)(t)) return (0, r.jsx)(es, {
      application: t,
      showVideo: i,
      disableFadeIn: a
    });
    if (null != t.bot) return (0, r.jsx)(eo, {
      bot: t.bot,
      fallbackColor: n,
      disableFadeIn: a
    })
  }
  return (0, r.jsx)(el, {
    fallbackColor: n,
    disableFadeIn: a
  })
}

function es(e) {
  let {
    application: t,
    showVideo: n,
    disableFadeIn: a
  } = e, o = (0, y.A)({
    applicationId: t.id,
    size: 600,
    names: ["embedded_cover"],
    format: "webp"
  }), l = i.useMemo(() => {
    let e = (0, L.Cx)(t);
    return null != e && null != e.activity_preview_video_asset_id ? (0, E.A)(t.id, e.activity_preview_video_asset_id) : null
  }, [t]), [c, u] = i.useState(n);
  i.useEffect(() => {
    n && u(true)
  }, [n]);
  let d = s()(H._e, {
    [H.cG]: a
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [null != l && c ? (0, r.jsx)("div", {
      className: H.SF,
      children: (0, r.jsx)("div", {
        className: s()(H.T0, {
          [H.Q]: !n
        }),
        onAnimationEnd: () => n ? null : u(false),
        children: (0, r.jsx)(I.A, {
          src: l,
          mediaLayoutType: F.dG.MOSAIC,
          loop: true,
          autoPlay: true,
          muted: true
        })
      })
    }) : null, (0, r.jsx)(O.A, {
      imageBackground: o,
      applicationName: t.name,
      imageClassName: d,
      imageNotFoundClassName: d
    })]
  })
}

function eo(e) {
  let {
    bot: t,
    fallbackColor: n,
    disableFadeIn: i
  } = e, a = (0, l.bG)([_.A], () => _.A.useReducedMotion), o = (0, D.z)({
    id: t.id,
    banner: t.banner,
    canAnimate: !a,
    size: 600
  });
  return null == o ? (0, r.jsx)(el, {
    fallbackColor: n,
    disableFadeIn: i
  }) : (0, r.jsx)("img", {
    src: o,
    alt: "",
    className: s()(H._e, {
      [H.cG]: i
    })
  })
}

function el(e) {
  let {
    fallbackColor: t,
    disableFadeIn: n
  } = e;
  return (0, r.jsx)("div", {
    className: s()(H._e, {
      [H.cG]: n
    }),
    style: {
      backgroundColor: t
    }
  })
}

function ec(e) {
  let {
    application: t,
    sectionName: n,
    resultsPosition: r,
    query: a,
    installOnDemand: s,
    location: o
  } = e, {
    pushHistory: l
  } = (0, j.uM)(), {
    friends: c
  } = (0, g.A)(t);
  return {
    onClickAppCard: i.useCallback(e => {
      e.stopPropagation(), (0, v.zV)(V.HAw.APPLICATION_COMMAND_SECTION_SELECTED, {
        application_id: t.id,
        section_name: n,
        search_results_position: r,
        source: x.A.entrypoint(),
        promotional_label: (0, L.Ii)(t),
        location: o,
        query: a,
        num_friends_who_play: c.length
      }), l({
        type: j.Wy.APPLICATION,
        application: t,
        installOnDemand: s,
        sectionName: n
      })
    }, [t, s, o, l, a, r, n, c])
  }
}

function eu(e) {
  let {
    onClickAppCard: t
  } = ec(e);
  return (0, r.jsx)(J, X(z({}, e), {
    onClick: t
  }))
}

function ed(e) {
  let {
    context: t,
    application: n,
    location: a,
    sectionName: s,
    isOneClickCTA: o,
    fetchesApplication: c = true
  } = e, d = Z(e, ["context", "application", "location", "sectionName", "isOneClickCTA", "fetchesApplication"]);
  if (!(0, L.$B)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
  let f = i.useId(),
    [p, _, h] = (0, l.yK)([m.Ay, T.A], () => [m.Ay.isLaunchingActivity(), m.Ay.getLaunchState(n.id, "channel" === t.type ? t.channel.id : true), T.A.isLaunchingFrame(n.id)]),
    g = null != _ && _.isLaunching && _.componentId === f || h,
    {
      onActivityItemSelected: E,
      activityAction: y,
      buttonVariant: O,
      buttonText: A
    } = (0, M.dn)({
      context: t,
      application: n,
      location: a,
      sectionName: s,
      launchingComponentId: f,
      fetchesApplication: c
    });
  return y === b.o6.START || y === b.o6.JOIN ? o ? (0, r.jsx)(J, X(z({}, d), {
    sectionName: s,
    application: n,
    onClick: E,
    disabled: p || h,
    enableVideoBanner: !g,
    children: g ? (0, r.jsx)(u.y$y, {
      type: u.y$y.Type.PULSING_ELLIPSIS,
      className: H.u1
    }) : null
  })) : (0, r.jsx)(eu, X(z({}, d), {
    context: t,
    sectionName: s,
    application: n,
    location: a
  })) : (0, r.jsx)(J, X(z({}, d), {
    sectionName: s,
    application: n,
    onClick: e => {
      e.stopPropagation()
    },
    imageStyle: H.TO,
    enableVideoBanner: false,
    disabled: true,
    children: (0, r.jsx)("div", {
      className: H.BC,
      children: (0, r.jsx)(u.Button, {
        type: "submit",
        size: "md",
        variant: O,
        disabled: p || h,
        onClick: E,
        "aria-label": B.intl.formatToPlainString(B.t["XjP/R+"], {
          buttonText: A,
          applicationName: n.name
        }),
        loading: g,
        text: A
      })
    })
  }))
}