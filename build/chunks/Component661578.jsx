/** Chunk was on 75393 **/
/** chunk id: 661578, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk959078 = require("./959078.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk553795 = require("./553795.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk111382 = require("./111382.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk387745 = require("./387745.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk585857 = require("./585857.jsx"),
  Chunk187285 = require("./187285.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk260052 = require("./260052.js");

function E(e) {
  return (0, a.jsx)(c.Text, {
    className: S.microphoneUnitBodyText,
    color: "text-muted",
    variant: "text-xxs/normal",
    children: e.children
  })
}

function O(e) {
  let {
    quest: t,
    useReducedMotion: n
  } = e, i = (0, h.n)(), o = (0, j.k3)(t.id, x.jn.QUEST_BAR_V2, x.jn.QUEST_BAR_V2), d = (0, j.g2)({
    useReducedMotion: n
  }), b = (0, m.O5)(), _ = (0, p.aM)(), {
    errorHints: y,
    startingConsoleQuest: O,
    startConsoleQuest: T
  } = (0, f.GI)({
    questId: t.id,
    beforeRequest: () => {
      b({
        questId: t.id,
        questContent: x.jn.QUEST_BAR_V2,
        questContentCTA: m.jZ.DEFIBRILLATOR,
        sourceQuestContent: x.jn.QUEST_BAR_V2
      }), d.startAnimation()
    },
    afterRequest: d.stopAnimation
  }), {
    header: N,
    renderBody: P
  } = r.useMemo(() => {
    let e = y.length > 0,
      n = t.config.messages.gameTitle;
    return {
      header: e ? (0, v.Pb)(t) ? C.intl.string(C.t.N33EuL) : C.intl.formatToPlainString(C.t["28Ql27"], {
        gameTitle: n
      }) : (0, v.Pb)(t) ? C.intl.string(C.t.YstzGO) : C.intl.formatToPlainString(C.t.gX0Qcx, {
        gameTitle: n
      }),
      renderBody: e ? () => (0, a.jsx)(a.Fragment, {
        children: y.map((e, n) => {
          if (e.type === s.K.EXPIRED_CREDENTIAL && i) {
            let r = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
              i = (0, g.C9)(e),
              l = (0, g._j)(e);
            return (0, a.jsx)(E, {
              children: C.intl.format(i, {
                account_name: null == r ? true : r.name,
                onClick: () => {
                  (0, g.fY)({
                    quest: t,
                    platformType: l
                  }, {
                    content: x.jn.QUEST_BAR,
                    ctaContent: m.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                    impressionId: _,
                    sourceQuestContent: x.jn.QUEST_BAR_V2
                  })
                }
              })
            }, n)
          }
          return (0, a.jsx)(E, {
            children: e.message
          }, n)
        })
      }) : () => (0, a.jsx)(c.Text, {
        className: S.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: (0, v.Pb)(t) ? C.intl.string(C.t.bUyEZZ) : C.intl.format(C.t.GXqvC1, {
          gameTitle: n
        })
      })
    }
  }, [y, t, i, _]);
  return (0, a.jsxs)("div", {
    className: S.microphoneUnit,
    children: [(0, a.jsxs)("div", {
      className: S.microphoneUnitHeader,
      children: [(0, a.jsx)(c.Mgn, {
        size: "custom",
        color: "currentColor",
        className: 0 === y.length ? S.warningCircle : S.errorCircle,
        width: 16,
        height: 16
      }), (0, a.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: N
      }), (0, a.jsx)(c.P3F, {
        className: l()(S.microphoneUnitRefreshIconWrapper, {
          [S.disabled]: O
        }),
        onClick: () => T(),
        children: d.render()
      })]
    }), (0, a.jsxs)("div", {
      className: l()({
        [S.opacity_50]: O
      }),
      children: [P(), 0 === y.length ? null : (0, a.jsx)(E, {
        children: o
      })]
    })]
  })
}
let T = function(e) {
  let {
    quest: t,
    taskDetails: n
  } = e, i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), l = (0, f.z6)(), s = r.useMemo(() => (0, g.B3)(t).filter(e => l.xboxAndPlaystationAccounts.find(t => t.type === e)), [l.xboxAndPlaystationAccounts, t]), {
    steps: c,
    hasConnectedAccounts: u,
    isProgressingQuestForLaunchedGame: m,
    isQuestComplete: p
  } = r.useMemo(() => {
    var e;
    let r = s.length > 0,
      i = r && (0, b.Bz)(t),
      o = t.config.messages.gameTitle,
      c = (null == (e = t.userStatus) ? true : e.completedAt) != null;
    return {
      steps: [{
        renderContent: () => {
          var e, n;
          return (0, a.jsx)(_.Q, (e = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                a = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), a.forEach(function(t) {
                var a;
                a = n[t], t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = a
              })
            }
            return e
          }({}, l), n = n = {
            quest: t,
            sourceQuestContent: x.jn.QUEST_BAR_V2
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              n.push.apply(n, a)
            }
            return n
          })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }), e))
        },
        isComplete: r || i || c
      }, {
        renderContent: () => (0, a.jsx)(y.y3, {
          children: (0, v.Pb)(t) ? C.intl.string(C.t["5tXqFe"]) : C.intl.formatToPlainString(C.t["+8JB6Y"], {
            gameTitle: o
          })
        }),
        isComplete: i || c
      }, {
        renderContent: () => (0, a.jsx)(y.y3, {
          children: C.intl.formatToPlainString(C.t.HhfrYS, {
            numMinutes: n.targetMinutes
          })
        }),
        isComplete: c
      }],
      hasConnectedAccounts: r,
      isProgressingQuestForLaunchedGame: i,
      isQuestComplete: c
    }
  }, [l, s.length, t, n.targetMinutes]);
  return (0, a.jsx)(y.ZP, {
    heading: C.intl.string(C.t.UPWlJu),
    steps: c,
    children: u && !m && !p && (0, a.jsx)(O, {
      useReducedMotion: i,
      quest: t
    })
  })
}