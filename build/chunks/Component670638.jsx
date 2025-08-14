/** Chunk was on web.js **/
/** chunk id: 670638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk479531 = require("./479531.js"),
  Chunk390322 = require("./390322.js"),
  Chunk572004 = require("./572004.js"),
  Chunk63063 = require("./63063.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function P(e) {
  var t;
  let n = (0, o.e7)([g.Z], () => g.Z.questDeliveryOverride, []),
    c = (0, p.GN)(e.questContent),
    T = [E.jn.QUEST_BAR_V2, E.jn.QUEST_BAR].includes(e.questContent),
    S = (0, f.O5)(),
    A = (0, _.aM)(),
    N = (0, m.Yj)(e.quest),
    {
      handleComplete: C,
      handleProgress: R,
      handleResetDismissibilityClick: P,
      handleResetStatusClick: w,
      handleOverrideDeliveryClick: D
    } = (0, m.kJ)(e.quest.id),
    L = () => {
      R(.9 * Math.random() + .03)
    },
    x = i.useCallback(() => {
      if (e.quest.id === y.V6) return void window.open(d.Z.getArticleURL(O.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
      (0, p.nc)(e.quest, {
        content: e.questContent,
        ctaContent: f.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
        impressionId: A,
        sourceQuestContent: e.sourceQuestContent
      })
    }, [A, e.quest, e.questContent, e.sourceQuestContent]),
    M = i.useCallback(() => {
      (0, p.f2)(e.quest.id, {
        content: e.questContent,
        position: e.questContentPosition,
        ctaContent: f.jZ.CONTEXT_MENU_COPY_LINK,
        impressionId: A,
        sourceQuestContent: e.sourceQuestContent
      }), (0, a.showToast)((0, a.createToast)(I.intl.string(I.t["+5kSoa"]), a.ToastType.SUCCESS))
    }, [A, e.quest.id, e.questContent, e.questContentPosition, e.sourceQuestContent]),
    j = () => {
      (0, b.openDisclosureModal)(e.quest, {
        content: e.questContent,
        position: e.questContentPosition,
        ctaContent: f.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
        impressionId: A,
        sourceQuestContent: e.sourceQuestContent
      })
    },
    k = () => {
      S({
        questId: e.quest.id,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentCTA: f.jZ.CONTEXT_MENU_LEARN_MORE,
        sourceQuestContent: e.sourceQuestContent
      }), (0, b.navigateToQuestHome)({
        fromContent: e.questContent,
        questId: e.quest.id
      })
    },
    U = () => {
      null != e.onSelect ? e.onSelect() : (0, s.Zy)()
    },
    G = () => {
      S({
        questId: e.quest.id,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentCTA: f.jZ.CONTEXT_MENU_HIDE_CONTENT,
        sourceQuestContent: e.sourceQuestContent
      }), (0, p.GN)(e.questContent) && ((0, h.gl)(e.quest.id, e.questContent), T && (0, b.maybeShowSurveyForQuest)(e.quest))
    },
    B = e => (0, a.showToast)((0, a.createToast)(new l.Z(e, e.status).message, a.ToastType.FAILURE)),
    Z = () => (0, h.CS)(e.quest.id, true).catch(B),
    F = () => (0, h.is)(e.quest.id).catch(B),
    V = () => {
      w(), F()
    },
    H = false,
    Y = i.useMemo(() => (0, r.jsx)(a.S89, {
      id: "delivery",
      label: "Show in Quest Bar",
      checked: (null == n ? true : n.id) === e.quest.id,
      action: D
    }), [D, e.quest.id, null == n ? true : n.id]),
    W = e.shouldShowDisclosure && e.quest.id !== y.V6;
  return (0, r.jsxs)(a.v2r, {
    variant: "fixed",
    onSelect: U,
    navId: "quests-entry",
    "aria-label": I.intl.string(I.t.ogxXGh),
    onClose: null != (t = null == e ? true : e.onClose) ? t : v.dG,
    children: [(0, r.jsxs)(a.kSQ, {
      children: [(0, r.jsx)(a.sNh, {
        id: "play-game",
        label: N,
        action: x,
        icon: a.zFc
      }), true === e.showShareLink && (0, r.jsx)(a.sNh, {
        id: "share-link",
        label: I.intl.string(I.t.RDE0SU),
        action: M,
        icon: a.TIy
      }), H && Y]
    }, "major-actions"), (0, r.jsxs)(a.kSQ, {
      children: [!e.hideLearnMore && (0, r.jsx)(a.sNh, {
        id: "learn-more",
        label: I.intl.string(I.t.Ws2Bl5),
        action: k,
        icon: a.qDn
      }), W && (0, r.jsx)(a.sNh, {
        id: "display-disclosure",
        label: I.intl.string(I.t.GcsZKC),
        action: j
      }), c && (0, r.jsx)(a.sNh, {
        id: "hide-entrypoint",
        label: I.intl.string(I.t.NN79Ex),
        action: G,
        subtext: I.intl.string(I.t["1u3YPD"])
      })]
    }, "minor-actions"), e.quest.preview && (0, r.jsxs)(a.kSQ, {
      label: "Preview Controls",
      children: [!H && Y, (0, r.jsx)(a.sNh, {
        id: "dismiss",
        label: "Reset Dismissibility",
        action: P
      }), (0, r.jsx)(a.sNh, {
        id: "enrollment",
        label: "Reset Quest",
        action: V
      }), (0, r.jsx)(a.sNh, {
        id: "progress",
        label: "Set Random Quest Progress",
        action: L
      }), (0, r.jsx)(a.sNh, {
        id: "complete",
        label: "Complete Quest",
        action: C
      }), (0, p.$J)(e.quest) && (0, r.jsxs)(a.sNh, {
        id: "console",
        label: "Console Heartbeat",
        children: [(0, r.jsx)(a.sNh, {
          disabled: true,
          id: "status",
          label: "Status: ".concat((0, p.Bz)(e.quest) ? "alive" : "dead")
        }), (0, r.jsx)(a.sNh, {
          id: "start",
          label: "Start heartbeat (cheatmode)",
          action: Z
        }), (0, r.jsx)(a.sNh, {
          id: "stop",
          label: "Stop heartbeat",
          action: F
        })]
      }), (0, r.jsx)(a.sNh, {
        id: "copy-quest-id",
        label: "Copy Quest ID",
        action: () => {
          (0, u.JG)(e.quest.id)
        }
      })]
    }, "preview-controls")]
  })
}

function w(e) {
  let {
    children: t,
    onOpen: n,
    onClose: o,
    preventIdle: s,
    quest: l,
    questContent: u,
    questContentPosition: d,
    sourceQuestContent: _
  } = e, p = C(e, ["children", "onOpen", "onClose", "preventIdle", "quest", "questContent", "questContentPosition", "sourceQuestContent"]), h = (0, f.O5)(), m = i.useRef(null), g = i.useCallback(() => {
    h({
      questId: l.id,
      questContent: u,
      questContentCTA: f.jZ.OPEN_CONTEXT_MENU,
      questContentPosition: d,
      sourceQuestContent: _
    }), null != n && n()
  }, [n, l.id, u, d, h, _]);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: m,
    onRequestOpen: g,
    onRequestClose: o,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return s ? (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(P, N(S({}, p), {
          quest: l,
          questContent: u,
          questContentPosition: d,
          onClose: t,
          sourceQuestContent: _
        }))
      }) : (0, r.jsx)(P, N(S({}, p), {
        quest: l,
        questContent: u,
        questContentPosition: d,
        onClose: t,
        sourceQuestContent: _
      }))
    },
    animation: a.yRy.Animation.NONE,
    children: e => (0, r.jsx)("div", {
      ref: m,
      children: t(e)
    })
  })
}