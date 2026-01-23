/** Chunk was on 65599 **/
/** chunk id: 933378, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk114046 = require("./114046.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk962173 = require("./962173.js"),
  Chunk216456 = require("./216456.js"),
  Chunk906822 = require("./906822.jsx"),
  Chunk733788 = require("./733788.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk901406 = require("./901406.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk495242 = require("./495242.jsx"),
  Chunk52093 = require("./52093.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk883476 = require("./883476.js");

function S(e) {
  return (0, a.jsx)(c.Text, {
    className: C.eW,
    color: "text-muted",
    variant: "text-xxs/normal",
    children: e.children
  })
}

function O(e) {
  let {
    quest: t,
    useReducedMotion: n
  } = e, r = (0, h.J)(), o = (0, j.H1)(t.id, x.uF.QUEST_BAR_V2, x.uF.QUEST_BAR_V2), d = (0, j.Xf)({
    useReducedMotion: n
  }), b = (0, m.Ut)(), _ = (0, p.go)(), {
    errorHints: y,
    startingConsoleQuest: O,
    startConsoleQuest: E
  } = (0, g.Wj)({
    questId: t.id,
    beforeRequest: () => {
      b({
        questId: t.id,
        questContent: x.uF.QUEST_BAR_V2,
        questContentCTA: m.Cy.DEFIBRILLATOR,
        sourceQuestContent: x.uF.QUEST_BAR_V2
      }), d.startAnimation()
    },
    afterRequest: d.stopAnimation
  }), {
    header: T,
    renderBody: N
  } = l.useMemo(() => {
    let e = y.length > 0,
      n = t.config.messages.gameTitle;
    return {
      header: e ? (0, v.ui)(t) ? A.intl.string(A.t.N33EuL) : A.intl.formatToPlainString(A.t["28Ql27"], {
        gameTitle: n
      }) : (0, v.ui)(t) ? A.intl.string(A.t.YstzGO) : A.intl.formatToPlainString(A.t.gX0Qcx, {
        gameTitle: n
      }),
      renderBody: e ? () => (0, a.jsx)(a.Fragment, {
        children: y.map((e, n) => {
          if (e.type === s._.EXPIRED_CREDENTIAL && r) {
            let l = u.A.getAccount(e.connected_account_id, e.connected_account_type),
              r = (0, f.IG)(e),
              i = (0, f.$J)(e);
            return (0, a.jsx)(S, {
              children: A.intl.format(r, {
                account_name: null == l ? true : l.name,
                onClick: () => {
                  (0, f.v0)({
                    quest: t,
                    platformType: i
                  }, {
                    content: x.uF.QUEST_BAR,
                    ctaContent: m.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                    impressionId: _,
                    sourceQuestContent: x.uF.QUEST_BAR_V2
                  })
                }
              })
            }, n)
          }
          return (0, a.jsx)(S, {
            children: e.message
          }, n)
        })
      }) : () => (0, a.jsx)(c.Text, {
        className: C.eW,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: (0, v.ui)(t) ? A.intl.string(A.t.bUyEZZ) : A.intl.format(A.t.GXqvC1, {
          gameTitle: n
        })
      })
    }
  }, [y, t, r, _]);
  return (0, a.jsxs)("div", {
    className: C.XK,
    children: [(0, a.jsxs)("div", {
      className: C.oK,
      children: [(0, a.jsx)(c.EpV, {
        size: "custom",
        color: "currentColor",
        className: 0 === y.length ? C.pH : C.JA,
        width: 16,
        height: 16
      }), (0, a.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: T
      }), (0, a.jsx)(c.DUT, {
        className: i()(C.w, {
          [C.r9]: O
        }),
        onClick: () => E(),
        children: d.render()
      })]
    }), (0, a.jsxs)("div", {
      className: i()({
        [C.Iu]: O
      }),
      children: [N(), 0 === y.length ? null : (0, a.jsx)(S, {
        children: o
      })]
    })]
  })
}
let E = function(e) {
  let {
    quest: t,
    taskDetails: n
  } = e, r = (0, o.bG)([d.A], () => d.A.useReducedMotion), i = (0, g.Du)(), s = l.useMemo(() => (0, f.bg)(t).filter(e => i.xboxAndPlaystationAccounts.find(t => t.type === e)), [i.xboxAndPlaystationAccounts, t]), {
    steps: c,
    hasConnectedAccounts: u,
    isProgressingQuestForLaunchedGame: m,
    isQuestComplete: p
  } = l.useMemo(() => {
    var e;
    let l = s.length > 0,
      r = l && (0, b.YL)(t),
      o = t.config.messages.gameTitle,
      c = (null == (e = t.userStatus) ? true : e.completedAt) != null;
    return {
      steps: [{
        renderContent: () => {
          var e, n;
          return (0, a.jsx)(_.Z, (e = function(e) {
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
          }({}, i), n = n = {
            quest: t,
            sourceQuestContent: x.uF.QUEST_BAR_V2
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
        isComplete: l || r || c
      }, {
        renderContent: () => (0, a.jsx)(y.L5, {
          children: (0, v.ui)(t) ? A.intl.string(A.t["5tXqFe"]) : A.intl.formatToPlainString(A.t["+8JB6Y"], {
            gameTitle: o
          })
        }),
        isComplete: r || c
      }, {
        renderContent: () => (0, a.jsx)(y.L5, {
          children: A.intl.formatToPlainString(A.t.HhfrYS, {
            numMinutes: n.targetMinutes
          })
        }),
        isComplete: c
      }],
      hasConnectedAccounts: l,
      isProgressingQuestForLaunchedGame: r,
      isQuestComplete: c
    }
  }, [i, s.length, t, n.targetMinutes]);
  return (0, a.jsx)(y.Ay, {
    heading: A.intl.string(A.t.UPWlJu),
    steps: c,
    children: u && !m && !p && (0, a.jsx)(O, {
      useReducedMotion: r,
      quest: t
    })
  })
}