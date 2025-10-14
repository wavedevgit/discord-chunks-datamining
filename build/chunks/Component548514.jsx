/** Chunk was on 69844 **/
/** chunk id: 548514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk317381 = require("./317381.js"),
  Chunk197386 = require("./197386.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk279332 = require("./279332.js"),
  Chunk915346 = require("./915346.js"),
  Chunk783097 = require("./783097.js"),
  Chunk433534 = require("./433534.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk276022 = require("./276022.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk706454 = require("./706454.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk135431 = require("./135431.js"),
  Chunk881294 = require("./881294.js"),
  Chunk258971 = require("./258971.js"),
  Chunk98449 = require("./98449.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk219923 = require("./219923.js");
let L = "start_application_install",
  R = "launch_activity";

function Z(e) {
  let {
    renderDropdown: t,
    size: n
  } = e, i = a.useRef(null);
  return (0, r.jsx)(c.yRy, {
    targetElementRef: i,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return t(n)
    },
    position: "left",
    align: "top",
    animation: c.yRy.Animation.NONE,
    children: e => (0, r.jsx)(c.hU, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      buttonRef: i,
      variant: "secondary",
      size: n,
      icon: c.xhG,
      "aria-label": T.intl.string(T.t.UKOtz8)
    }, e))
  })
}

function w(e) {
  let {
    application: t,
    variant: n,
    size: i,
    contentWidth: l
  } = e, {
    onClickInstallApplication: o,
    canInstall: d
  } = function(e) {
    let t = (0, O.nu)(),
      n = a.useCallback(() => {
        var t;
        let n = null != (t = P.z8.getField("guildId")) ? t : true;
        (0, S.L)({
          applicationId: e.id,
          customInstallUrl: e.custom_install_url,
          installParams: e.install_params,
          integrationTypesConfig: e.integration_types_config,
          guildId: n,
          source: "product_page"
        })
      }, [e]);
    return a.useEffect(() => {
      let e = new URL(location.href);
      if (t && "true" === e.searchParams.get(L)) {
        e.searchParams.delete(L);
        let t = e.pathname + e.search;
        (0, v.dL)(t), n()
      }
    }, [t, n]), {
      onClickInstallApplication: a.useCallback(() => {
        if ((0, O.zZ)(N.rMx.APP_DIRECTORY_INSTALL_CLICKED, {
            application_id: e.id
          }), (s.tq || s.Em) && null == e.custom_install_url) {
          let t = (0, S.E)({
            applicationId: e.id,
            customInstallUrl: e.custom_install_url,
            installParams: e.install_params,
            integrationTypesConfig: e.integration_types_config
          });
          if (null != t) return void window.open(t, "_blank")
        }
        if (t) n();
        else {
          let t = P.z8.getField("guildId");
          y.default.track(N.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: e.id,
            guild_id: t,
            auth_type: null != e.custom_install_url ? "custom_url" : "in_app",
            source: "product_page",
            device_platform: s.tq ? "mobile_web" : "desktop_web"
          }), (0, O.rf)({
            [L]: "true"
          })
        }
      }, [e, n, t]),
      canInstall: a.useMemo(() => (0, f.Eb)({
        customInstallUrl: e.custom_install_url,
        installParams: e.install_params,
        integrationTypesConfig: e.integration_types_config
      }), [e])
    }
  }(t);
  return "icon" === l ? (0, r.jsx)(c.hU, {
    variant: n,
    icon: c.svS,
    size: i,
    onClick: o,
    "aria-label": T.intl.string(T.t.NgXl3N),
    disabled: !d
  }) : (0, r.jsx)(c.Button, {
    variant: n,
    size: i,
    text: "small" === l ? T.intl.string(T.t.qRZ35u) : T.intl.string(T.t.NgXl3N),
    onClick: o,
    disabled: !d
  })
}

function D(e) {
  let {
    size: t,
    contentWidth: n,
    onClick: a,
    isSubmitting: i
  } = e;
  return "icon" === n ? (0, r.jsx)(c.hU, {
    variant: "primary",
    icon: c.o1U,
    size: t,
    onClick: a,
    loading: i,
    "aria-label": T.intl.string(T.t.QO7rOz)
  }) : (0, r.jsx)(c.Button, {
    variant: "primary",
    size: t,
    text: T.intl.string(T.t.QO7rOz),
    onClick: a,
    loading: i
  })
}
let k = Chunk647438.forwardRef(function(e, t) {
  let {
    application: n,
    size: i
  } = e, s = h.J.useExperiment({
    location: "UserSettingsAuthedApps"
  }, {
    autoTrackExposure: true
  }).enabled, {
    analyticsLocations: f
  } = (0, m.ZP)(), y = a.useCallback(() => {
    let e;
    (0, O.zZ)(N.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
      application_id: n.id
    }), (0, I.JG)((e = n.id, "".concat(location.protocol, "//").concat(location.host).concat(N.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e))), () => (0, c.showToast)((0, c.createToast)(T.intl.string(T.t["L/PwZW"]), c.ToastType.SUCCESS)))
  }, [n.id]), S = (0, o.e7)([C.default], () => C.default.locale), P = a.useCallback(() => {
    (0, d.Z)((0, E.G)({
      id: n.id,
      name: n.name,
      locale: S
    }))
  }, [S, n]), L = (0, b.Z)({
    id: n.id,
    label: T.intl.string(T.t["FfCL+/"]),
    onSuccess: () => (0, c.showToast)((0, c.createToast)(T.intl.string(T.t.eNjAam), c.ToastType.SUCCESS))
  }), k = (0, x.Z)({
    application: n,
    onItemClick: () => {
      (0, O.zZ)(N.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
        application_id: n.id
      })
    }
  }), M = a.useCallback((e, t) => (0, r.jsxs)(c.v2r, {
    navId: "application-directory-profile",
    "aria-label": T.intl.string(T.t["/7I4/P"]),
    onClose: t,
    onSelect: true,
    children: [s && (0, r.jsx)(c.kSQ, {
      children: k
    }), e ? (0, r.jsx)(c.kSQ, {
      children: (0, r.jsx)(c.sNh, {
        id: "copy",
        label: T.intl.string(T.t.z4sP5O),
        action: y,
        icon: c.xPt
      })
    }) : null, (0, r.jsx)(c.kSQ, {
      children: (0, r.jsx)(c.sNh, {
        id: "report",
        label: T.intl.string(T.t.NgA5vr),
        color: "danger",
        action: P
      })
    }), null != L ? (0, r.jsx)(c.kSQ, {
      children: L
    }) : null]
  }), [L, P, y, s, k]), {
    onClickLaunchActivity: G,
    isSubmitting: B
  } = function(e, t) {
    var n;
    let r = e.id,
      i = null == e || null == (n = e.bot) ? true : n.id,
      l = null != i && (0, _.BQ)(e) && (0, _.ye)(e),
      [s, c] = a.useState(false),
      d = (0, O.nu)(),
      m = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
      h = (0, o.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity()),
      f = a.useCallback(async (t, n, r) => {
        if (null != h && h.applicationId === e.id) {
          let e = h.location;
          (0, p.Z)("guild_id" in e ? e.guild_id : null, e);
          return
        }
        c(true);
        try {
          await (0, g.W)({
            appId: n,
            botId: t,
            analyticsLocations: r
          })
        } catch (e) {}
        c(false)
      }, [h, e.id]);
    a.useEffect(() => {
      let e = new URL(location.href),
        n = "true" === e.searchParams.get(R);
      if (d && l && n && null != i && null != m) {
        e.searchParams.delete(R);
        let n = e.pathname + e.search;
        (0, v.dL)(n), f(i, r, t)
      }
    }, [d, l, i, r, t, m, f]);
    let b = a.useCallback(async () => {
      if (null != i) {
        if ((0, O.zZ)(N.rMx.APP_DIRECTORY_LAUNCH_CLICKED, {
            application_id: r
          }), !d) return void(0, O.rf)({
          [R]: "true"
        });
        await f(i, r, t)
      }
    }, [i, r, t, d, f]);
    return {
      onClickLaunchActivity: l ? b : true,
      isSubmitting: s
    }
  }(n, f), U = null != G, z = U ? "secondary" : "primary";
  return (0, r.jsxs)("div", {
    ref: t,
    children: [(0, r.jsxs)("div", {
      className: l()(A.actionContainer, A.wide),
      children: [U && (0, r.jsx)(D, {
        size: i,
        contentWidth: "normal",
        onClick: G,
        isSubmitting: B
      }), (0, r.jsx)(w, {
        application: n,
        size: i,
        contentWidth: "normal",
        variant: z
      }), I.wS ? (0, r.jsx)(c.hU, {
        variant: "secondary",
        size: i,
        icon: c.xPt,
        onClick: y,
        "aria-label": T.intl.string(T.t.z4sP5O)
      }) : null, (0, r.jsx)(Z, {
        renderDropdown: e => M(false, e),
        size: i
      })]
    }), (0, r.jsxs)("div", {
      className: l()(A.actionContainer, A.small),
      children: [U && (0, r.jsx)(D, {
        size: i,
        contentWidth: "small",
        onClick: G,
        isSubmitting: B
      }), (0, r.jsx)(w, {
        application: n,
        size: i,
        contentWidth: "small",
        variant: z
      }), (0, r.jsx)(Z, {
        renderDropdown: e => M(I.wS, e),
        size: i
      })]
    }), (0, r.jsxs)("div", {
      className: l()(A.actionContainer, A.tiny),
      children: [U && (0, r.jsx)(D, {
        size: i,
        contentWidth: "icon",
        onClick: G,
        isSubmitting: B
      }), (0, r.jsx)(w, {
        application: n,
        size: i,
        contentWidth: "icon",
        variant: z
      }), (0, r.jsx)(Z, {
        renderDropdown: e => M(I.wS, e),
        size: i
      })]
    })]
  })
})