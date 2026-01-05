/** Chunk was on 1272 **/
/** chunk id: 267161, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => V,
  useAppSidebarState: () => B
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk663042 = require("./663042.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk833484 = require("./833484.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk870822 = require("./870822.js"),
  Chunk174556 = require("./174556.js"),
  Chunk99977 = require("./99977.js"),
  Chunk919842 = require("./919842.jsx"),
  Chunk320007 = require("./320007.jsx"),
  Chunk719961 = require("./719961.js"),
  Chunk336219 = require("./336219.js"),
  Chunk609174 = require("./609174.jsx"),
  Chunk257966 = require("./257966.jsx"),
  Chunk111666 = require("./111666.jsx"),
  Chunk413557 = require("./413557.jsx"),
  Chunk300986 = require("./300986.jsx"),
  Chunk314451 = require("./314451.jsx"),
  Chunk137899 = require("./137899.jsx"),
  Chunk273959 = require("./273959.jsx"),
  Chunk821020 = require("./821020.js"),
  Chunk340137 = require("./340137.jsx"),
  Chunk522474 = require("./522474.js"),
  Chunk141321 = require("./141321.jsx"),
  Chunk984802 = require("./984802.js"),
  Chunk695346 = require("./695346.js"),
  Chunk906467 = require("./906467.js"),
  Chunk695103 = require("./695103.js"),
  Chunk451478 = require("./451478.js"),
  Chunk998502 = require("./998502.js"),
  Chunk228488 = require("./228488.js"),
  Chunk950796 = require("./950796.jsx"),
  Chunk741764 = require("./741764.js"),
  Chunk428754 = require("./428754.js");
let B = (0, Chunk663042.U)(() => ({
  isOpen: true
}));

function H(e) {
  let {
    withFastTravel: t,
    quickSwitcherInsteadOfTitle: n,
    focusSectionProps: i
  } = e;
  return n ? (0, r.jsx)(O.R, {
    focusSectionProps: i
  }) : (0, r.jsx)(T.d, {
    withFastTravel: t,
    focusSectionProps: i
  })
}
let V = Chunk473749.memo(function() {
  Chunk473749.useLayoutEffect(() => {
    Chunk998502.ZP.setMinimumSize(Chunk741764.J, Chunk741764.N)
  }, []);
  let {
    notificationCenterVariant: e,
    entrypoint: t
  } = (0, Chunk821020.pN)({
    location: "AppTitleBar"
  }), {
    titlebarFastTravel: n,
    quickSwitcherInsteadOfTitle: l
  } = (0, Chunk336219.t)({
    location: "AppTitleBar"
  }), {
    backForwardButtons: o,
    titlebarIconSize: O
  } = (0, Chunk719961.T)({
    location: "AppTitleBar"
  }), {
    hasBugReporterAccess: T
  } = Chunk174556.Z.useExperiment({
    location: "HeaderBar"
  }, {
    autoTrackExposure: false
  }), {
    enabled: B
  } = Chunk99977.c.useConfig({
    location: "AppTitleBar"
  }), V = (0, Chunk442837.e7)([Chunk906467.Z], () => Chunk906467.Z.isDeveloper), F = (0, Chunk442837.e7)([Chunk695103.Z, Chunk812206.Z], () => Chunk695346.Sb.getSetting() && null != Chunk695103.Z.testModeApplicationId && null != Chunk812206.Z.getApplication(Chunk695103.Z.testModeApplicationId) && (0, Chunk870822.Z)(Chunk812206.Z.getApplication(Chunk695103.Z.testModeApplicationId))), z = null !== module && exports === Chunk821020.u3.TITLE_BAR_LEFT, Y = null === module;
  Chunk473749.useLayoutEffect(() => {
    Chunk998502.ZP.setMinimumSize(Chunk741764.J, Chunk741764.N)
  }, []);
  let W = (0, Chunk984802.Ll)(),
    q = (0, Chunk442837.e7)([Chunk451478.Z, Chunk522474.Z], () => (0, Chunk228488.rB)()),
    K = function(e) {
      let {
        showBackForwardButtons: t,
        showNotificationsInbox: n,
        titlebarFastTravel: r,
        showRecentsButton: l
      } = e;
      return i.useMemo(() => t ? "BACK_FORWARD_NAVIGATION" : n ? "NOTIFICATIONS_INBOX" : r ? "TITLEBAR_FAST_TRAVEL" : l ? "RECENTS" : "HELP", [t, n, r, l])
    }({
      showBackForwardButtons: Chunk663042,
      showNotificationsInbox: z,
      titlebarFastTravel: require,
      showRecentsButton: Y
    });
  if (q) return null;
  let Q = a()(Chunk428754.button, {
    [Chunk428754.smallButton]: "sm" === Chunk257966
  });
  return (0, Chunk54381.jsx)(Chunk481060.Wdt, {
    children: e => (0, r.jsx)(c.f6W, {
      theme: W,
      children: t => {
        var i, a;
        return (0, r.jsx)(k.TF, {
          className: t,
          leading: (0, r.jsxs)(r.Fragment, {
            children: [o && (0, r.jsx)(E.Z, {
              firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === K ? e : true
            }), z && (0, r.jsx)(j.Z, {
              focusSectionProps: "NOTIFICATIONS_INBOX" === K ? e : true
            })]
          }),
          title: (0, r.jsx)(H, {
            withFastTravel: n,
            quickSwitcherInsteadOfTitle: l,
            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === K ? e : true
          }),
          trailing: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(v.Z, {
              className: Q
            }), B && (0, r.jsx)(h.Z, {
              className: Q
            }), (0, r.jsx)(m.Z, {
              canShowReminder: true,
              className: Q
            }), Y && (0, r.jsx)(x.Z, (i = function(e) {
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
            }({}, "RECENTS" === K ? e : {}), a = a = {
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
            }), i)), T ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(C.H, {
                focusSectionProps: "HELP" === K ? e : true,
                className: Q
              }), V ? (0, r.jsx)(y.M, {
                className: Q
              }) : null]
            }) : (0, r.jsx)(I.Z, {
              focusSectionProps: "HELP" === K ? e : true,
              className: Q
            }), F && (0, r.jsx)(u.Z, {
              className: Q
            }), (0, r.jsx)(S.Z, {
              className: Q
            })]
          })
        })
      }
    })
  })
})