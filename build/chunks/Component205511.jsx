/** Chunk was on 10150 **/
/** chunk id: 205511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk959078 = require("./959078.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk553795 = require("./553795.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk111382 = require("./111382.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk667105 = require("./667105.jsx"),
  Chunk585857 = require("./585857.jsx"),
  Chunk795057 = require("./795057.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk19672 = require("./19672.js");

function y(e) {
  return (0, r.jsx)(c.Text, {
    className: C.microphoneUnitBodyText,
    color: "text-muted",
    variant: "text-xxs/normal",
    children: e.children
  })
}

function E(e) {
  let {
    quest: t,
    useReducedMotion: n
  } = e, o = (0, g.n)(), l = (0, j.k3)(t.id, x.jn.QUEST_BAR_V2, x.jn.QUEST_BAR_V2), d = (0, j.g2)({
    useReducedMotion: n
  }), b = (0, p.O5)(), _ = (0, m.aM)(), {
    errorHints: E,
    startingConsoleQuest: O,
    startConsoleQuest: S
  } = (0, h.GI)({
    questId: t.id,
    beforeRequest: () => {
      b({
        questId: t.id,
        questContent: x.jn.QUEST_BAR_V2,
        questContentCTA: p.jZ.DEFIBRILLATOR,
        sourceQuestContent: x.jn.QUEST_BAR_V2
      }), d.startAnimation()
    },
    afterRequest: d.stopAnimation
  }), {
    header: T,
    renderBody: w
  } = s.useMemo(() => {
    let e = E.length > 0,
      n = t.config.messages.gameTitle;
    return {
      header: e ? (0, f.Pb)(t) ? v.intl.string(v.t.N33EuL) : v.intl.formatToPlainString(v.t["28Ql27"], {
        gameTitle: n
      }) : (0, f.Pb)(t) ? v.intl.string(v.t.YstzGO) : v.intl.formatToPlainString(v.t.gX0Qcx, {
        gameTitle: n
      }),
      renderBody: e ? () => (0, r.jsx)(r.Fragment, {
        children: E.map((e, n) => {
          if (e.type === i.K.EXPIRED_CREDENTIAL && o) {
            let s = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
              o = (0, f.C9)(e),
              a = (0, f._j)(e);
            return (0, r.jsx)(y, {
              children: v.intl.format(o, {
                account_name: null == s ? true : s.name,
                onClick: () => {
                  (0, f.fY)({
                    quest: t,
                    platformType: a
                  }, {
                    content: x.jn.QUEST_BAR,
                    ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                    impressionId: _,
                    sourceQuestContent: x.jn.QUEST_BAR_V2
                  })
                }
              })
            }, n)
          }
          return (0, r.jsx)(y, {
            children: e.message
          }, n)
        })
      }) : () => (0, r.jsx)(c.Text, {
        className: C.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: (0, f.Pb)(t) ? v.intl.string(v.t.bUyEZZ) : v.intl.format(v.t.GXqvC1, {
          gameTitle: n
        })
      })
    }
  }, [E, t, o, _]);
  return (0, r.jsxs)("div", {
    className: C.microphoneUnit,
    children: [(0, r.jsxs)("div", {
      className: C.microphoneUnitHeader,
      children: [(0, r.jsx)(c.Mgn, {
        size: "custom",
        color: "currentColor",
        className: 0 === E.length ? C.warningCircle : C.errorCircle,
        width: 16,
        height: 16
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: T
      }), (0, r.jsx)(c.P3F, {
        className: a()(C.microphoneUnitRefreshIconWrapper, {
          [C.disabled]: O
        }),
        onClick: () => S(),
        children: d.render()
      })]
    }), (0, r.jsxs)("div", {
      className: a()({
        [C.opacity_50]: O
      }),
      children: [w(), 0 === E.length ? null : (0, r.jsx)(y, {
        children: l
      })]
    })]
  })
}
let O = function(e) {
  let {
    quest: t,
    taskDetails: n
  } = e, o = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), a = (0, h.z6)(), i = s.useMemo(() => (0, f.B3)(t).filter(e => a.xboxAndPlaystationAccounts.find(t => t.type === e)), [a.xboxAndPlaystationAccounts, t]), {
    steps: c,
    hasConnectedAccounts: u,
    isProgressingQuestForLaunchedGame: p,
    isQuestComplete: m
  } = s.useMemo(() => {
    var e;
    let s = i.length > 0,
      o = s && (0, f.Bz)(t),
      l = t.config.messages.gameTitle,
      c = (null == (e = t.userStatus) ? true : e.completedAt) != null;
    return {
      steps: [{
        renderContent: () => {
          var e, n;
          return (0, r.jsx)(b.Q, (e = function(e) {
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
          }({}, a), n = n = {
            quest: t,
            sourceQuestContent: x.jn.QUEST_BAR_V2
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }), e))
        },
        isComplete: s || o || c
      }, {
        renderContent: () => (0, r.jsx)(_.y3, {
          children: (0, f.Pb)(t) ? v.intl.string(v.t["5tXqFe"]) : v.intl.formatToPlainString(v.t["+8JB6Y"], {
            gameTitle: l
          })
        }),
        isComplete: o || c
      }, {
        renderContent: () => (0, r.jsx)(_.y3, {
          children: v.intl.formatToPlainString(v.t.HhfrYS, {
            numMinutes: n.targetMinutes
          })
        }),
        isComplete: c
      }],
      hasConnectedAccounts: s,
      isProgressingQuestForLaunchedGame: o,
      isQuestComplete: c
    }
  }, [a, i.length, t, n.targetMinutes]);
  return (0, r.jsx)(_.ZP, {
    heading: v.intl.string(v.t.UPWlJu),
    steps: c,
    children: u && !p && !m && (0, r.jsx)(E, {
      useReducedMotion: o,
      quest: t
    })
  })
}