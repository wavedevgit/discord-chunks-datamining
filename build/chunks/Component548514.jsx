/** Chunk was on 69844 **/
/** chunk id: 548514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk217774 = require("./217774.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk783097 = require("./783097.js"),
  Chunk433534 = require("./433534.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk726521 = require("./726521.js"),
  Chunk703656 = require("./703656.js"),
  Chunk973616 = require("./973616.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk135431 = require("./135431.js"),
  Chunk881294 = require("./881294.js"),
  Chunk258971 = require("./258971.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk219923 = require("./219923.js");
let O = "start_application_install",
  E = "launch_activity";

function N(e) {
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
      "aria-label": S.intl.string(S.t["UKOtz+"])
    }, e))
  })
}

function T(e) {
  let {
    application: t,
    variant: n,
    size: i,
    contentWidth: l
  } = e, {
    onClickInstallApplication: o,
    canInstall: d
  } = function(e) {
    let t = (0, j.nu)(),
      n = a.useCallback(() => {
        var t;
        let n = null != (t = y.z8.getField("guildId")) ? t : true;
        (0, C.L)({
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
      if (t && "true" === e.searchParams.get(O)) {
        e.searchParams.delete(O);
        let t = e.pathname + e.search;
        (0, f.dL)(t), n()
      }
    }, [t, n]), {
      onClickInstallApplication: a.useCallback(() => {
        if ((0, j.zZ)(I.rMx.APP_DIRECTORY_INSTALL_CLICKED, {
            application_id: e.id
          }), (s.tq || s.Em) && null == e.custom_install_url) {
          let t = (0, C.E)({
            applicationId: e.id,
            customInstallUrl: e.custom_install_url,
            installParams: e.install_params,
            integrationTypesConfig: e.integration_types_config
          });
          if (null != t) return void window.open(t, "_blank")
        }
        if (t) n();
        else {
          let t = y.z8.getField("guildId");
          x.default.track(I.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: e.id,
            guild_id: t,
            auth_type: null != e.custom_install_url ? "custom_url" : "in_app",
            source: "product_page",
            device_platform: s.tq ? "mobile_web" : "desktop_web"
          }), (0, j.rf)({
            [O]: "true"
          })
        }
      }, [e, n, t]),
      canInstall: a.useMemo(() => (0, m.Eb)({
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
    "aria-label": S.intl.string(S.t.NgXl3C),
    disabled: !d
  }) : (0, r.jsx)(c.Button, {
    variant: n,
    size: i,
    text: "small" === l ? S.intl.string(S.t.qRZ35t) : S.intl.string(S.t.NgXl3C),
    onClick: o,
    disabled: !d
  })
}

function A(e) {
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
    "aria-label": S.intl.string(S.t.QO7rO6)
  }) : (0, r.jsx)(c.Button, {
    variant: "primary",
    size: t,
    text: S.intl.string(S.t.QO7rO6),
    onClick: a,
    loading: i
  })
}
let L = Chunk473749.forwardRef(function(e, t) {
  let {
    application: n,
    size: i
  } = e, {
    analyticsLocations: s
  } = (0, u.ZP)(), m = a.useCallback(() => {
    let e;
    (0, j.zZ)(I.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
      application_id: n.id
    }), (0, v.JG)((e = n.id, "".concat(location.protocol, "//").concat(location.host).concat(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e))), () => (0, c.showToast)((0, c.createToast)(S.intl.string(S.t["L/PwZf"]), c.ToastType.SUCCESS)))
  }, [n.id]), x = a.useCallback(() => {
    let e = _.ZP.createFromServer(n);
    (0, g.uu)({
      application: e,
      entrypoint: "app_directory"
    })
  }, [n]), C = (0, h.Z)({
    id: n.id,
    label: S.intl.string(S.t["FfCL+6"]),
    onSuccess: () => (0, c.showToast)((0, c.createToast)(S.intl.string(S.t.eNjAah), c.ToastType.SUCCESS))
  }), y = a.useCallback((e, t) => (0, r.jsxs)(c.v2r, {
    navId: "application-directory-profile",
    "aria-label": S.intl.string(S.t["/7I4/C"]),
    onClose: t,
    onSelect: true,
    children: [e ? (0, r.jsx)(c.kSQ, {
      children: (0, r.jsx)(c.sNh, {
        id: "copy",
        label: S.intl.string(S.t.z4sP5J),
        action: m,
        icon: c.xPt
      })
    }) : null, (0, r.jsx)(c.kSQ, {
      children: (0, r.jsx)(c.sNh, {
        id: "report",
        label: S.intl.string(S.t.NgA5vp),
        color: "danger",
        action: x
      })
    }), null != C ? (0, r.jsx)(c.kSQ, {
      children: C
    }) : null]
  }), [C, x, m]), {
    onClickLaunchActivity: O,
    isSubmitting: L
  } = function(e, t) {
    var n;
    let r = e.id,
      i = null == e || null == (n = e.bot) ? true : n.id,
      l = null != i && (0, p.BQ)(e) && (0, p.ye)(e),
      [s, c] = a.useState(false),
      u = (0, j.nu)(),
      m = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
      h = (0, d.Z)({
        applicationId: r,
        analyticsLocations: t,
        runBeforeLaunchAttempt: () => c(true),
        runAfterLaunchAttempt: () => c(false)
      });
    a.useEffect(() => {
      let e = new URL(location.href),
        t = "true" === e.searchParams.get(E);
      if (u && l && t && null != i && null != m) {
        e.searchParams.delete(E);
        let t = e.pathname + e.search;
        (0, f.dL)(t), h()
      }
    }, [u, l, i, m, h]);
    let g = a.useCallback(async () => {
      if (null != i) {
        if ((0, j.zZ)(I.rMx.APP_DIRECTORY_LAUNCH_CLICKED, {
            application_id: r
          }), !u) return void(0, j.rf)({
          [E]: "true"
        });
        await h()
      }
    }, [r, i, u, h]);
    return {
      onClickLaunchActivity: l ? g : true,
      isSubmitting: s
    }
  }(n, s), R = null != O, Z = R ? "secondary" : "primary";
  return (0, r.jsxs)("div", {
    ref: t,
    children: [(0, r.jsxs)("div", {
      className: l()(P.actionContainer, P.wide),
      children: [R && (0, r.jsx)(A, {
        size: i,
        contentWidth: "normal",
        onClick: O,
        isSubmitting: L
      }), (0, r.jsx)(T, {
        application: n,
        size: i,
        contentWidth: "normal",
        variant: Z
      }), v.wS ? (0, r.jsx)(c.hU, {
        variant: "secondary",
        size: i,
        icon: c.xPt,
        onClick: m,
        "aria-label": S.intl.string(S.t.z4sP5J)
      }) : null, (0, r.jsx)(N, {
        renderDropdown: e => y(false, e),
        size: i
      })]
    }), (0, r.jsxs)("div", {
      className: l()(P.actionContainer, P.small),
      children: [R && (0, r.jsx)(A, {
        size: i,
        contentWidth: "small",
        onClick: O,
        isSubmitting: L
      }), (0, r.jsx)(T, {
        application: n,
        size: i,
        contentWidth: "small",
        variant: Z
      }), (0, r.jsx)(N, {
        renderDropdown: e => y(v.wS, e),
        size: i
      })]
    }), (0, r.jsxs)("div", {
      className: l()(P.actionContainer, P.tiny),
      children: [R && (0, r.jsx)(A, {
        size: i,
        contentWidth: "icon",
        onClick: O,
        isSubmitting: L
      }), (0, r.jsx)(T, {
        application: n,
        size: i,
        contentWidth: "icon",
        variant: Z
      }), (0, r.jsx)(N, {
        renderDropdown: e => y(v.wS, e),
        size: i
      })]
    })]
  })
})