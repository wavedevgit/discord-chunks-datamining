/** Chunk was on web.js **/
/** chunk id: 205511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
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

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = 16;

function N(e) {
  return (0, r.jsx)(c.Text, {
    className: v.microphoneUnitBodyText,
    color: "text-muted",
    variant: "text-xxs/normal",
    children: e.children
  })
}

function R(e) {
  let {
    quest: t,
    useReducedMotion: n
  } = e, o = (0, p.n)(), l = (0, E.k3)(t.id, g.jn.QUEST_BAR_V2, g.jn.QUEST_BAR_V2), u = (0, E.g2)({
    useReducedMotion: n
  }), b = (0, f.O5)(), y = (0, _.aM)(), {
    errorHints: I,
    startingConsoleQuest: T,
    startConsoleQuest: S
  } = (0, m.GI)({
    questId: t.id,
    beforeRequest: () => {
      b({
        questId: t.id,
        questContent: g.jn.QUEST_BAR_V2,
        questContentCTA: f.jZ.DEFIBRILLATOR,
        sourceQuestContent: g.jn.QUEST_BAR_V2
      }), u.startAnimation()
    },
    afterRequest: u.stopAnimation
  }), {
    header: A,
    renderBody: R
  } = i.useMemo(() => {
    let e = I.length > 0,
      n = () => (0, r.jsx)(r.Fragment, {
        children: I.map((e, n) => {
          if (e.type === s.K.EXPIRED_CREDENTIAL && o) {
            let i = d.Z.getAccount(e.connected_account_id, e.connected_account_type),
              o = (0, h.C9)(e),
              a = (0, h._j)(e);
            return (0, r.jsx)(N, {
              children: O.intl.format(o, {
                account_name: null == i ? true : i.name,
                onClick: () => {
                  (0, h.fY)({
                    quest: t,
                    platformType: a
                  }, {
                    content: g.jn.QUEST_BAR,
                    ctaContent: f.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                    impressionId: y,
                    sourceQuestContent: g.jn.QUEST_BAR_V2
                  })
                }
              })
            }, n)
          }
          return (0, r.jsx)(N, {
            children: e.message
          }, n)
        })
      }),
      i = t.config.messages.gameTitle;
    return {
      header: e ? O.intl.formatToPlainString(O.t["28Ql29"], {
        gameTitle: i
      }) : O.intl.formatToPlainString(O.t.gX0Qc3, {
        gameTitle: i
      }),
      renderBody: e ? n : () => (0, r.jsx)(c.Text, {
        className: v.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: O.intl.format(O.t.GXqvCw, {
          gameTitle: i
        })
      })
    }
  }, [I, t, o, y]);

  function P() {
    return 0 === I.length ? null : (0, r.jsx)(N, {
      children: l
    })
  }
  return (0, r.jsxs)("div", {
    className: v.microphoneUnit,
    children: [(0, r.jsxs)("div", {
      className: v.microphoneUnitHeader,
      children: [(0, r.jsx)(c.Mgn, {
        size: "custom",
        color: "currentColor",
        className: 0 === I.length ? v.warningCircle : v.errorCircle,
        width: C,
        height: C
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: A
      }), (0, r.jsx)(c.P3F, {
        className: a()(v.microphoneUnitRefreshIconWrapper, {
          [v.disabled]: T
        }),
        onClick: () => S(),
        children: u.render()
      })]
    }), (0, r.jsxs)("div", {
      className: a()({
        [v.opacity_50]: T
      }),
      children: [R(), P()]
    })]
  })
}
let P = function(e) {
  let {
    quest: t,
    taskDetails: n
  } = e, o = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), a = (0, m.z6)(), s = i.useMemo(() => (0, h.B3)(t).filter(e => a.xboxAndPlaystationAccounts.find(t => t.type === e)), [a.xboxAndPlaystationAccounts, t]), {
    steps: c,
    hasConnectedAccounts: d,
    isProgressingQuestForLaunchedGame: f,
    isQuestComplete: _
  } = i.useMemo(() => {
    var e;
    let i = s.length > 0,
      o = i && (0, h.Bz)(t),
      l = t.config.messages.gameTitle,
      c = (null == (e = t.userStatus) ? true : e.completedAt) != null;
    return {
      steps: [{
        renderContent: () => (0, r.jsx)(b.Q, A(T({}, a), {
          quest: t,
          sourceQuestContent: g.jn.QUEST_BAR_V2
        })),
        isComplete: i || o || c
      }, {
        renderContent: () => (0, r.jsx)(y.y3, {
          children: O.intl.formatToPlainString(O.t["+8JB6e"], {
            gameTitle: l
          })
        }),
        isComplete: o || c
      }, {
        renderContent: () => (0, r.jsx)(y.y3, {
          children: O.intl.formatToPlainString(O.t.HhfrYW, {
            numMinutes: n.targetMinutes
          })
        }),
        isComplete: c
      }],
      hasConnectedAccounts: i,
      isProgressingQuestForLaunchedGame: o,
      isQuestComplete: c
    }
  }, [a, s.length, t, n.targetMinutes]), p = d && !f && !_;
  return (0, r.jsx)(y.ZP, {
    heading: O.intl.string(O.t.UPWlJi),
    steps: c,
    children: p && (0, r.jsx)(R, {
      useReducedMotion: o,
      quest: t
    })
  })
}