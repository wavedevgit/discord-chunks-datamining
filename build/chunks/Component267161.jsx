/** Chunk was on 1272 **/
/** chunk id: 267161, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => V,
  useAppSidebarState: () => U
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk879690 = require("./879690.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk174556 = require("./174556.js"),
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
  Chunk819439 = require("./819439.js"),
  Chunk296241 = require("./296241.jsx"),
  Chunk165017 = require("./165017.js"),
  Chunk984802 = require("./984802.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk451478 = require("./451478.js"),
  Chunk998502 = require("./998502.js"),
  Chunk228488 = require("./228488.js"),
  Chunk403497 = require("./403497.jsx"),
  Chunk950796 = require("./950796.jsx"),
  Chunk176505 = require("./176505.js"),
  Chunk741764 = require("./741764.js"),
  Chunk82504 = require("./82504.js");
let U = (0, Chunk879690.U)(() => ({
  isOpen: true
}));

function G(e) {
  let {
    selectedChannelId: t,
    withFastTravel: n,
    focusSectionProps: i
  } = e, l = (0, s.e7)([x.Z, j.Z], () => {
    let e = x.Z.getGuildId(),
      n = j.Z.getChannel(t);
    return null != e ? e : null == n ? true : n.guild_id
  }), a = (0, T.H)({
    guildId: l,
    channelId: t
  });
  return null == a ? (0, r.jsx)(L.d, {
    selectedChannelId: t,
    withFastTravel: n,
    focusSectionProps: i
  }) : (0, r.jsx)(C.Z, {
    searchContext: a,
    focusSectionProps: i
  })
}

function B(e) {
  let {
    withFastTravel: t,
    quickSwitcherInsteadOfTitle: n,
    focusSectionProps: i
  } = e, l = (0, s.e7)([P.Z], () => P.Z.getChannelId()), a = (0, S.$)({
    location: "TitleText"
  }), o = (0, s.e7)([j.Z], () => {
    let e = j.Z.getChannel(l);
    return null != e && !e.isDirectory() && !e.isGuildVocal()
  });
  return a && null != l && !(0, D.AB)(l) && o ? (0, r.jsx)(G, {
    selectedChannelId: l,
    withFastTravel: t,
    focusSectionProps: i
  }) : n ? (0, r.jsx)(g.R, {
    focusSectionProps: i
  }) : (0, r.jsx)(L.d, {
    selectedChannelId: l,
    withFastTravel: t,
    focusSectionProps: i
  })
}
let V = Chunk647438.memo(function() {
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
    titlebarIconSize: g
  } = (0, Chunk719961.T)({
    location: "AppTitleBar"
  }), {
    hasBugReporterAccess: S
  } = Chunk174556.Z.useExperiment({
    location: "HeaderBar"
  }, {
    autoTrackExposure: false
  }), C = null !== module && exports === Chunk821020.u3.TITLE_BAR_LEFT, T = null === module;
  Chunk647438.useLayoutEffect(() => {
    Chunk998502.ZP.setMinimumSize(Chunk741764.J, Chunk741764.N)
  }, []);
  let j = (0, Chunk984802.Ll)(),
    P = (0, Chunk442837.e7)([Chunk451478.Z, Chunk522474.Z], () => (0, Chunk228488.rB)()),
    x = function(e) {
      let {
        showBackForwardButtons: t,
        showNotificationsInbox: n,
        titlebarFastTravel: r,
        showRecentsButton: l
      } = e;
      return i.useMemo(() => t ? "BACK_FORWARD_NAVIGATION" : n ? "NOTIFICATIONS_INBOX" : r ? "TITLEBAR_FAST_TRAVEL" : l ? "RECENTS" : "HELP", [t, n, r, l])
    }({
      showBackForwardButtons: Chunk879690,
      showNotificationsInbox: Chunk296241,
      titlebarFastTravel: require,
      showRecentsButton: Chunk165017
    });
  if (Chunk944486) return null;
  let L = a()(Chunk82504.button, {
    [Chunk82504.smallButton]: "sm" === Chunk257966
  });
  return (0, Chunk951288.jsx)(Chunk481060.Wdt, {
    children: e => (0, r.jsx)(c.f6W, {
      theme: j,
      children: t => {
        var i, a;
        return (0, r.jsx)(R.TF, {
          className: t,
          leading: (0, r.jsxs)(r.Fragment, {
            children: [o && (0, r.jsx)(h.Z, {
              firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === x ? e : true
            }), C && (0, r.jsx)(y.Z, {
              focusSectionProps: "NOTIFICATIONS_INBOX" === x ? e : true
            })]
          }),
          title: (0, r.jsx)(B, {
            withFastTravel: n,
            quickSwitcherInsteadOfTitle: l,
            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === x ? e : true
          }),
          trailing: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(m.Z, {
              className: L
            }), (0, r.jsx)(d.Z, {
              canShowReminder: true,
              className: L
            }), T && (0, r.jsx)(I.Z, (i = function(e) {
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
            }({}, "RECENTS" === x ? e : {}), a = a = {
              className: L
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(a)).forEach(function(e) {
              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
            }), i)), S ? (0, r.jsx)(_.Z, {
              focusSectionProps: "HELP" === x ? e : true,
              className: L
            }) : (0, r.jsx)(b.Z, {
              focusSectionProps: "HELP" === x ? e : true,
              className: L
            }), (0, r.jsx)(O.Z, {
              className: L
            })]
          })
        })
      }
    })
  })
})