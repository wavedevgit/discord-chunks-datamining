/** Chunk was on 1272 **/
/** chunk id: 267161, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => D,
  useAppSidebarState: () => L
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk191336 = require("./191336.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk174556 = require("./174556.js"),
  Chunk99977 = require("./99977.js"),
  Chunk919842 = require("./919842.jsx"),
  Chunk320007 = require("./320007.jsx"),
  Chunk719961 = require("./719961.js"),
  Chunk336219 = require("./336219.js"),
  Chunk609174 = require("./609174.jsx"),
  Chunk257966 = require("./257966.jsx"),
  Chunk111666 = require("./111666.jsx"),
  Chunk300986 = require("./300986.jsx"),
  Chunk314451 = require("./314451.jsx"),
  Chunk35583 = require("./35583.jsx"),
  Chunk821020 = require("./821020.js"),
  Chunk340137 = require("./340137.jsx"),
  Chunk522474 = require("./522474.js"),
  Chunk141321 = require("./141321.jsx"),
  Chunk984802 = require("./984802.js"),
  Chunk451478 = require("./451478.js"),
  Chunk998502 = require("./998502.js"),
  Chunk228488 = require("./228488.js"),
  Chunk403497 = require("./403497.jsx"),
  Chunk950796 = require("./950796.jsx"),
  Chunk741764 = require("./741764.js"),
  Chunk851352 = require("./851352.js");
let L = (0, Chunk191336.U)(() => ({
  isOpen: true
}));

function R(e) {
  let {
    withFastTravel: t,
    quickSwitcherInsteadOfTitle: n,
    focusSectionProps: i
  } = e;
  return n ? (0, r.jsx)(b.R, {
    focusSectionProps: i
  }) : (0, r.jsx)(x.d, {
    withFastTravel: t,
    focusSectionProps: i
  })
}
let D = Chunk647438.memo(function() {
  Chunk647438.useLayoutEffect(() => {
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
    titlebarIconSize: b
  } = (0, Chunk719961.T)({
    location: "AppTitleBar"
  }), {
    hasBugReporterAccess: x
  } = Chunk174556.Z.useExperiment({
    location: "HeaderBar"
  }, {
    autoTrackExposure: false
  }), {
    enabled: L
  } = Chunk99977.c.useConfig({
    location: "AppTitleBar"
  }), D = null !== module && exports === Chunk821020.u3.TITLE_BAR_LEFT, M = null === module;
  Chunk647438.useLayoutEffect(() => {
    Chunk998502.ZP.setMinimumSize(Chunk741764.J, Chunk741764.N)
  }, []);
  let k = (0, Chunk984802.Ll)(),
    U = (0, Chunk442837.e7)([Chunk451478.Z, Chunk522474.Z], () => (0, Chunk228488.rB)()),
    G = function(e) {
      let {
        showBackForwardButtons: t,
        showNotificationsInbox: n,
        titlebarFastTravel: r,
        showRecentsButton: l
      } = e;
      return i.useMemo(() => t ? "BACK_FORWARD_NAVIGATION" : n ? "NOTIFICATIONS_INBOX" : r ? "TITLEBAR_FAST_TRAVEL" : l ? "RECENTS" : "HELP", [t, n, r, l])
    }({
      showBackForwardButtons: Chunk191336,
      showNotificationsInbox: D,
      titlebarFastTravel: require,
      showRecentsButton: M
    });
  if (U) return null;
  let B = a()(Chunk851352.button, {
    [Chunk851352.smallButton]: "sm" === Chunk257966
  });
  return (0, Chunk951288.jsx)(Chunk481060.Wdt, {
    children: e => (0, r.jsx)(c.f6W, {
      theme: k,
      children: t => {
        var i, a;
        return (0, r.jsx)(Z.TF, {
          className: t,
          leading: (0, r.jsxs)(r.Fragment, {
            children: [o && (0, r.jsx)(m.Z, {
              firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === G ? e : true
            }), D && (0, r.jsx)(I.Z, {
              focusSectionProps: "NOTIFICATIONS_INBOX" === G ? e : true
            })]
          }),
          title: (0, r.jsx)(R, {
            withFastTravel: n,
            quickSwitcherInsteadOfTitle: l,
            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === G ? e : true
          }),
          trailing: (0, r.jsxs)(r.Fragment, {
            children: [L && (0, r.jsx)(p.Z, {
              className: B
            }), (0, r.jsx)(_.Z, {
              className: B
            }), (0, r.jsx)(f.Z, {
              canShowReminder: true,
              className: B
            }), M && (0, r.jsx)(S.Z, (i = function(e) {
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
            }({}, "RECENTS" === G ? e : {}), a = a = {
              className: B
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(a)).forEach(function(e) {
              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
            }), i)), x ? (0, r.jsx)(O.Z, {
              focusSectionProps: "HELP" === G ? e : true,
              className: B
            }) : (0, r.jsx)(E.Z, {
              focusSectionProps: "HELP" === G ? e : true,
              className: B
            }), (0, r.jsx)(v.Z, {
              className: B
            })]
          })
        })
      }
    })
  })
})