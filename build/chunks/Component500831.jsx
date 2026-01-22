/** Chunk was on 21738 **/
/** chunk id: 500831, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => H,
  useAppSidebarState: () => V
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk353640 = require("./353640.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk526900 = require("./526900.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk875444 = require("./875444.js"),
  Chunk770031 = require("./770031.js"),
  Chunk488556 = require("./488556.js"),
  Chunk994641 = require("./994641.jsx"),
  Chunk932340 = require("./932340.jsx"),
  Chunk545167 = require("./545167.js"),
  Chunk420936 = require("./420936.js"),
  Chunk733738 = require("./733738.jsx"),
  Chunk27169 = require("./27169.jsx"),
  Chunk871432 = require("./871432.jsx"),
  Chunk540177 = require("./540177.jsx"),
  Chunk898642 = require("./898642.jsx"),
  Chunk558416 = require("./558416.jsx"),
  Chunk358832 = require("./358832.jsx"),
  Chunk663111 = require("./663111.jsx"),
  Chunk851109 = require("./851109.js"),
  Chunk667086 = require("./667086.jsx"),
  Chunk87001 = require("./87001.js"),
  Chunk52144 = require("./52144.jsx"),
  Chunk97469 = require("./97469.js"),
  Chunk253932 = require("./253932.js"),
  Chunk540999 = require("./540999.js"),
  Chunk147964 = require("./147964.js"),
  Chunk531685 = require("./531685.js"),
  Chunk837921 = require("./837921.js"),
  Chunk475815 = require("./475815.js"),
  Chunk71855 = require("./71855.jsx");
require("./801416.js");
var Chunk260175 = require("./260175.js");
let V = (0, Chunk353640.v)(() => ({
  isOpen: true
}));

function B(e) {
  let {
    withFastTravel: t,
    quickSwitcherInsteadOfTitle: n,
    focusSectionProps: i
  } = e;
  return n ? (0, r.jsx)(E.F, {
    focusSectionProps: i
  }) : (0, r.jsx)(C.M, {
    withFastTravel: t,
    focusSectionProps: i
  })
}
let H = Chunk64700.memo(function() {
  i.useLayoutEffect(() => {
    M.Ay.setMinimumSize(800, 500)
  }, []);
  let {
    notificationCenterVariant: e,
    entrypoint: t
  } = (0, N.X8)({
    location: "AppTitleBar"
  }), {
    titlebarFastTravel: n,
    quickSwitcherInsteadOfTitle: l
  } = (0, b.t)({
    location: "AppTitleBar"
  }), {
    backForwardButtons: s,
    titlebarIconSize: E
  } = (0, m.p)({
    location: "AppTitleBar"
  }), {
    hasBugReporterAccess: C
  } = f.A.useExperiment({
    location: "HeaderBar"
  }, {
    autoTrackExposure: false
  }), {
    enabled: V
  } = h.w.useConfig({
    location: "AppTitleBar"
  }), H = (0, o.bG)([L.A], () => L.A.isDeveloper), F = (0, o.bG)([R.A, d.A], () => w.Q_.getSetting() && null != R.A.testModeApplicationId && null != d.A.getApplication(R.A.testModeApplicationId) && (0, p.A)(d.A.getApplication(R.A.testModeApplicationId))), Y = null !== e && t === N.RK.TITLE_BAR_LEFT, K = null === e;
  i.useLayoutEffect(() => {
    M.Ay.setMinimumSize(800, 500)
  }, []);
  let z = (0, P.NC)(),
    W = (0, o.bG)([D.A, j.A], () => (0, k._U)()),
    q = function(e) {
      let {
        showBackForwardButtons: t,
        showNotificationsInbox: n,
        titlebarFastTravel: r,
        showRecentsButton: l
      } = e;
      return i.useMemo(() => t ? "BACK_FORWARD_NAVIGATION" : n ? "NOTIFICATIONS_INBOX" : r ? "TITLEBAR_FAST_TRAVEL" : l ? "RECENTS" : "HELP", [t, n, r, l])
    }({
      showBackForwardButtons: s,
      showNotificationsInbox: Y,
      titlebarFastTravel: n,
      showRecentsButton: K
    });
  if (W) return null;
  let Q = a()(G.x, {
    [G.U]: "sm" === E
  });
  return (0, r.jsx)(c.skg, {
    children: e => (0, r.jsx)(c.NPJ, {
      theme: z,
      children: t => {
        var i, a;
        return (0, r.jsx)(U.cq, {
          className: t,
          leading: (0, r.jsxs)(r.Fragment, {
            children: [s && (0, r.jsx)(_.A, {
              firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === q ? e : true
            }), Y && (0, r.jsx)(T.A, {
              focusSectionProps: "NOTIFICATIONS_INBOX" === q ? e : true
            })]
          }),
          title: (0, r.jsx)(B, {
            withFastTravel: n,
            quickSwitcherInsteadOfTitle: l,
            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === q ? e : true
          }),
          trailing: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(O.A, {
              className: Q
            }), V && (0, r.jsx)(A.A, {
              className: Q
            }), (0, r.jsx)(g.A, {
              canShowReminder: true,
              className: Q
            }), K && (0, r.jsx)(x.A, (i = function(e) {
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
            }({}, "RECENTS" === q ? e : {}), a = a = {
              className: Q
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(a)).forEach(function(e) {
              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
            }), i)), C ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(v.w, {
                focusSectionProps: "HELP" === q ? e : true,
                className: Q
              }), H ? (0, r.jsx)(y.R, {
                className: Q
              }) : null]
            }) : (0, r.jsx)(I.A, {
              focusSectionProps: "HELP" === q ? e : true,
              className: Q
            }), F && (0, r.jsx)(u.A, {
              className: Q
            }), (0, r.jsx)(S.A, {
              className: Q
            })]
          })
        })
      }
    })
  })
})