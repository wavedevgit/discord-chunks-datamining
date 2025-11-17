/** Chunk was on 69844 **/
/** chunk id: 548514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk317381 = require("./317381.js"),
  Chunk197386 = require("./197386.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk279332 = require("./279332.js"),
  Chunk915346 = require("./915346.js"),
  Chunk783097 = require("./783097.js"),
  Chunk433534 = require("./433534.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk276022 = require("./276022.jsx"),
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
let A = "start_application_install",
  L = "launch_activity";

function R(e) {
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
      "aria-label": N.intl.string(N.t["UKOtz+"])
    }, e))
  })
}

function Z(e) {
  let {
    application: t,
    variant: n,
    size: i,
    contentWidth: l
  } = e, {
    onClickInstallApplication: o,
    canInstall: d
  } = function(e) {
    let t = (0, P.nu)(),
      n = a.useCallback(() => {
        var t;
        let n = null != (t = O.z8.getField("guildId")) ? t : true;
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
      if (t && "true" === e.searchParams.get(A)) {
        e.searchParams.delete(A);
        let t = e.pathname + e.search;
        (0, v.dL)(t), n()
      }
    }, [t, n]), {
      onClickInstallApplication: a.useCallback(() => {
        if ((0, P.zZ)(E.rMx.APP_DIRECTORY_INSTALL_CLICKED, {
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
          let t = O.z8.getField("guildId");
          y.default.track(E.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: e.id,
            guild_id: t,
            auth_type: null != e.custom_install_url ? "custom_url" : "in_app",
            source: "product_page",
            device_platform: s.tq ? "mobile_web" : "desktop_web"
          }), (0, P.rf)({
            [A]: "true"
          })
        }
      }, [e, n, t]),
      canInstall: a.useMemo(() => (0, _.Eb)({
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
    "aria-label": N.intl.string(N.t.NgXl3C),
    disabled: !d
  }) : (0, r.jsx)(c.Button, {
    variant: n,
    size: i,
    text: "small" === l ? N.intl.string(N.t.qRZ35t) : N.intl.string(N.t.NgXl3C),
    onClick: o,
    disabled: !d
  })
}

function w(e) {
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
    "aria-label": N.intl.string(N.t.QO7rO6)
  }) : (0, r.jsx)(c.Button, {
    variant: "primary",
    size: t,
    text: N.intl.string(N.t.QO7rO6),
    onClick: a,
    loading: i
  })
}
let D = Chunk473749.forwardRef(function(e, t) {
  let {
    application: n,
    size: i
  } = e, s = m.J.useExperiment({
    location: "UserSettingsAuthedApps"
  }, {
    autoTrackExposure: true
  }).enabled, {
    analyticsLocations: _
  } = (0, p.ZP)(), y = a.useCallback(() => {
    let e;
    (0, P.zZ)(E.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
      application_id: n.id
    }), (0, I.JG)((e = n.id, "".concat(location.protocol, "//").concat(location.host).concat(E.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e))), () => (0, c.showToast)((0, c.createToast)(N.intl.string(N.t["L/PwZf"]), c.ToastType.SUCCESS)))
  }, [n.id]), S = a.useCallback(() => {
    let e = C.ZP.createFromServer(n);
    (0, x.uu)({
      application: e,
      entrypoint: "app_directory"
    })
  }, [n]), O = (0, f.Z)({
    id: n.id,
    label: N.intl.string(N.t["FfCL+6"]),
    onSuccess: () => (0, c.showToast)((0, c.createToast)(N.intl.string(N.t.eNjAah), c.ToastType.SUCCESS))
  }), A = (0, b.Z)({
    application: n,
    onItemClick: () => {
      (0, P.zZ)(E.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
        application_id: n.id
      })
    }
  }), D = a.useCallback((e, t) => (0, r.jsxs)(c.v2r, {
    navId: "application-directory-profile",
    "aria-label": N.intl.string(N.t["/7I4/C"]),
    onClose: t,
    onSelect: true,
    children: [s && (0, r.jsx)(c.kSQ, {
      children: A
    }), e ? (0, r.jsx)(c.kSQ, {
      children: (0, r.jsx)(c.sNh, {
        id: "copy",
        label: N.intl.string(N.t.z4sP5J),
        action: y,
        icon: c.xPt
      })
    }) : null, (0, r.jsx)(c.kSQ, {
      children: (0, r.jsx)(c.sNh, {
        id: "report",
        label: N.intl.string(N.t.NgA5vp),
        color: "danger",
        action: S
      })
    }), null != O ? (0, r.jsx)(c.kSQ, {
      children: O
    }) : null]
  }), [O, S, y, s, A]), {
    onClickLaunchActivity: k,
    isSubmitting: M
  } = function(e, t) {
    var n;
    let r = e.id,
      i = null == e || null == (n = e.bot) ? true : n.id,
      l = null != i && (0, g.BQ)(e) && (0, g.ye)(e),
      [s, c] = a.useState(false),
      p = (0, P.nu)(),
      m = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
      _ = (0, o.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
      f = a.useCallback(async (t, n, r) => {
        if (null != _ && _.applicationId === e.id) {
          let e = _.location;
          (0, u.Z)("guild_id" in e ? e.guild_id : null, e);
          return
        }
        c(true);
        try {
          await (0, h.W)({
            appId: n,
            botId: t,
            analyticsLocations: r
          })
        } catch (e) {}
        c(false)
      }, [_, e.id]);
    a.useEffect(() => {
      let e = new URL(location.href),
        n = "true" === e.searchParams.get(L);
      if (p && l && n && null != i && null != m) {
        e.searchParams.delete(L);
        let n = e.pathname + e.search;
        (0, v.dL)(n), f(i, r, t)
      }
    }, [p, l, i, r, t, m, f]);
    let b = a.useCallback(async () => {
      if (null != i) {
        if ((0, P.zZ)(E.rMx.APP_DIRECTORY_LAUNCH_CLICKED, {
            application_id: r
          }), !p) return void(0, P.rf)({
          [L]: "true"
        });
        await f(i, r, t)
      }
    }, [i, r, t, p, f]);
    return {
      onClickLaunchActivity: l ? b : true,
      isSubmitting: s
    }
  }(n, _), G = null != k, B = G ? "secondary" : "primary";
  return (0, r.jsxs)("div", {
    ref: t,
    children: [(0, r.jsxs)("div", {
      className: l()(T.actionContainer, T.wide),
      children: [G && (0, r.jsx)(w, {
        size: i,
        contentWidth: "normal",
        onClick: k,
        isSubmitting: M
      }), (0, r.jsx)(Z, {
        application: n,
        size: i,
        contentWidth: "normal",
        variant: B
      }), I.wS ? (0, r.jsx)(c.hU, {
        variant: "secondary",
        size: i,
        icon: c.xPt,
        onClick: y,
        "aria-label": N.intl.string(N.t.z4sP5J)
      }) : null, (0, r.jsx)(R, {
        renderDropdown: e => D(false, e),
        size: i
      })]
    }), (0, r.jsxs)("div", {
      className: l()(T.actionContainer, T.small),
      children: [G && (0, r.jsx)(w, {
        size: i,
        contentWidth: "small",
        onClick: k,
        isSubmitting: M
      }), (0, r.jsx)(Z, {
        application: n,
        size: i,
        contentWidth: "small",
        variant: B
      }), (0, r.jsx)(R, {
        renderDropdown: e => D(I.wS, e),
        size: i
      })]
    }), (0, r.jsxs)("div", {
      className: l()(T.actionContainer, T.tiny),
      children: [G && (0, r.jsx)(w, {
        size: i,
        contentWidth: "icon",
        onClick: k,
        isSubmitting: M
      }), (0, r.jsx)(Z, {
        application: n,
        size: i,
        contentWidth: "icon",
        variant: B
      }), (0, r.jsx)(R, {
        renderDropdown: e => D(I.wS, e),
        size: i
      })]
    })]
  })
})