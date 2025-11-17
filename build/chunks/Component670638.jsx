/** Chunk was on web.js **/
/** chunk id: 670638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => L
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk479531 = require("./479531.js"),
  Chunk703656 = require("./703656.js"),
  Chunk390322 = require("./390322.js"),
  Chunk572004 = require("./572004.js"),
  Chunk63063 = require("./63063.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk36243 = require("./36243.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = w(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function x(e) {
  var t;
  let n = (0, a.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
    u = (0, m.GN)(e.questContent),
    C = [b.jn.QUEST_BAR_V2, b.jn.QUEST_BAR].includes(e.questContent),
    N = (0, p.O5)(),
    R = (0, h.aM)(),
    P = (0, g.ly)(e.quest),
    D = true === e.showShareLink && (0, m.vB)(e.quest.config),
    {
      handleComplete: w,
      handleProgress: x,
      handleResetDismissibilityClick: L,
      handleResetStatusClick: M,
      handleOverrideDeliveryClick: k
    } = (0, g.kJ)(e.quest.id),
    j = () => {
      x(.9 * Math.random() + .03)
    },
    U = i.useCallback(() => {
      if (e.quest.id === I.V6) return void window.open(f.Z.getArticleURL(T.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
      (0, m.nc)(e.quest, {
        content: e.questContent,
        ctaContent: p.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
        impressionId: R,
        sourceQuestContent: e.sourceQuestContent
      })
    }, [R, e.quest, e.questContent, e.sourceQuestContent]),
    G = (0, v.yc)({
      isShareable: D,
      questId: e.quest.id,
      trackingCtx: i.useMemo(() => ({
        content: e.questContent,
        position: e.questContentPosition,
        ctaContent: p.jZ.CONTEXT_MENU_COPY_LINK,
        impressionId: R,
        sourceQuestContent: e.sourceQuestContent
      }), [e.questContent, e.questContentPosition, e.sourceQuestContent, R])
    }),
    B = () => {
      (0, O.openDisclosureModal)(e.quest, {
        content: e.questContent,
        position: e.questContentPosition,
        ctaContent: p.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
        impressionId: R,
        sourceQuestContent: e.sourceQuestContent
      })
    },
    Z = () => {
      N({
        questId: e.quest.id,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentCTA: p.jZ.CONTEXT_MENU_LEARN_MORE,
        sourceQuestContent: e.sourceQuestContent
      }), (0, O.navigateToQuestHome)({
        fromContent: e.questContent,
        questId: e.quest.id
      })
    },
    F = () => {
      null != e.onSelect ? e.onSelect() : (0, s.Zy)()
    },
    V = () => {
      N({
        questId: e.quest.id,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentCTA: p.jZ.CONTEXT_MENU_HIDE_CONTENT,
        sourceQuestContent: e.sourceQuestContent
      }), (0, m.GN)(e.questContent) && ((0, _.gl)(e.quest.id, e.questContent), C && (0, O.maybeShowSurveyForQuest)(e.quest))
    },
    H = e => (0, o.showToast)((0, o.createToast)(new l.Z(e, e.status).message, o.ToastType.FAILURE)),
    Y = () => (0, _.CS)(e.quest.id, true).catch(H),
    W = () => (0, _.is)(e.quest.id).catch(H),
    K = () => {
      M(), W()
    },
    z = (0, g.m4)(e.quest),
    q = i.useMemo(() => (0, r.jsx)(o.S89, {
      id: "delivery",
      label: "Show in Quest Bar",
      checked: (null == n ? true : n.id) === e.quest.id,
      action: k
    }), [k, e.quest.id, null == n ? true : n.id]),
    X = i.useCallback(() => {
      (0, c.uL)(T.Z5c.QUEST_PREVIEW_TOOL_2(e.quest.id))
    }, [e.quest.id]),
    Q = e.shouldShowDisclosure && e.quest.id !== I.V6;
  return (0, r.jsxs)(o.v2r, {
    variant: "fixed",
    onSelect: F,
    navId: "quests-entry",
    "aria-label": A.intl.string(A.t.ogxXGq),
    onClose: null != (t = null == e ? true : e.onClose) ? t : S.dG,
    children: [(0, r.jsxs)(o.kSQ, {
      children: [(0, r.jsx)(o.sNh, {
        id: "play-game",
        label: P,
        action: U,
        icon: o.zFc
      }), D && (0, r.jsx)(o.sNh, {
        id: "share-link",
        label: A.intl.string(A.t.RDE0Sc),
        action: G,
        icon: o.TIy
      }), z && q]
    }, "major-actions"), (0, r.jsxs)(o.kSQ, {
      children: [!e.hideLearnMore && (0, r.jsx)(o.sNh, {
        id: "learn-more",
        label: A.intl.string(A.t["Ws2Bl+"]),
        action: Z,
        icon: o.qDn
      }), Q && (0, r.jsx)(o.sNh, {
        id: "display-disclosure",
        label: A.intl.string(A.t.GcsZKJ),
        action: B
      }), u && (0, r.jsx)(o.sNh, {
        id: "hide-entrypoint",
        label: A.intl.string(A.t.NN79E9),
        action: V,
        subtext: A.intl.string(A.t.RK9gxo)
      })]
    }, "minor-actions"), e.quest.preview && (0, r.jsxs)(o.kSQ, {
      label: A.intl.string(A.t["Ape+mm"]),
      children: [(0, r.jsx)(o.sNh, {
        id: "dismiss",
        label: A.intl.string(A.t.JF6W66),
        action: L
      }), (0, r.jsx)(o.sNh, {
        id: "enrollment",
        label: A.intl.string(A.t.taqkwK),
        action: K
      }), (0, r.jsx)(o.sNh, {
        id: "progress",
        label: A.intl.string(A.t.cKSLr4),
        action: j
      }), (0, r.jsx)(o.sNh, {
        id: "complete",
        label: A.intl.string(A.t.jQEfRT),
        action: w
      }), (0, m.$J)(e.quest) && (0, r.jsxs)(o.sNh, {
        id: "console",
        label: "Console Heartbeat",
        children: [(0, r.jsx)(o.sNh, {
          disabled: true,
          id: "status",
          label: "Status: ".concat((0, m.Bz)(e.quest) ? "alive" : "dead")
        }), (0, r.jsx)(o.sNh, {
          id: "start",
          label: "Start heartbeat (cheatmode)",
          action: Y
        }), (0, r.jsx)(o.sNh, {
          id: "stop",
          label: "Stop heartbeat",
          action: W
        })]
      }), (0, r.jsx)(o.sNh, {
        id: "copy-quest-id",
        label: A.intl.string(A.t.oisrFi),
        action: () => {
          (0, d.JG)(e.quest.id)
        }
      }), (0, y.T)({
        location: I.dr.QUEST_PREVIEW_TOOL_2
      }) && (0, r.jsx)(o.sNh, {
        id: "preview",
        label: A.intl.string(A.t.tx5Ax5),
        action: X
      })]
    }, "preview-controls")]
  })
}

function L(e) {
  let {
    children: t,
    onOpen: n,
    onClose: a,
    preventIdle: s,
    quest: l,
    questContent: c,
    questContentPosition: d,
    sourceQuestContent: f
  } = e, _ = D(e, ["children", "onOpen", "onClose", "preventIdle", "quest", "questContent", "questContentPosition", "sourceQuestContent"]), h = (0, p.O5)(), m = i.useRef(null), g = i.useCallback(() => {
    h({
      questId: l.id,
      questContent: c,
      questContentCTA: p.jZ.OPEN_CONTEXT_MENU,
      questContentPosition: d,
      sourceQuestContent: f
    }), null != n && n()
  }, [n, l.id, c, d, h, f]);
  return (0, r.jsx)(o.yRy, {
    targetElementRef: m,
    onRequestOpen: g,
    onRequestClose: a,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return s ? (0, r.jsx)(u.Z, {
        children: (0, r.jsx)(x, P(N({}, _), {
          quest: l,
          questContent: c,
          questContentPosition: d,
          onClose: t,
          sourceQuestContent: f
        }))
      }) : (0, r.jsx)(x, P(N({}, _), {
        quest: l,
        questContent: c,
        questContentPosition: d,
        onClose: t,
        sourceQuestContent: f
      }))
    },
    animation: o.yRy.Animation.NONE,
    children: e => (0, r.jsx)("div", {
      ref: m,
      children: t(e)
    })
  })
}