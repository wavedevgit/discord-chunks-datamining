/** Chunk was on 37447 **/
/** chunk id: 670638, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function E(e) {
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
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e) {
  var t;
  let n = (0, s.e7)([C.Z], () => C.Z.questDeliveryOverride, []),
    u = (0, h.GN)(e.questContent),
    E = [j.jn.QUEST_BAR_V2, j.jn.QUEST_BAR].includes(e.questContent),
    q = (0, m.O5)(),
    N = (0, p.aM)(),
    S = (0, x.Yj)(e.quest),
    T = true === e.showShareLink && (0, h.vB)(e.quest.config),
    {
      handleComplete: P,
      handleProgress: w,
      handleResetDismissibilityClick: _,
      handleResetStatusClick: M,
      handleOverrideDeliveryClick: R
    } = (0, x.kJ)(e.quest.id),
    k = o.useCallback(() => {
      if (e.quest.id === b.V6) return void window.open(d.Z.getArticleURL(y.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
      (0, h.nc)(e.quest, {
        content: e.questContent,
        ctaContent: m.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
        impressionId: N,
        sourceQuestContent: e.sourceQuestContent
      })
    }, [N, e.quest, e.questContent, e.sourceQuestContent]),
    D = o.useCallback(() => {
      T && ((0, h.f2)(e.quest.id, {
        content: e.questContent,
        position: e.questContentPosition,
        ctaContent: m.jZ.CONTEXT_MENU_COPY_LINK,
        impressionId: N,
        sourceQuestContent: e.sourceQuestContent
      }), (0, i.showToast)((0, i.createToast)(O.intl.string(O.t["+5kSoa"]), i.ToastType.SUCCESS)))
    }, [N, e.quest.id, e.questContent, e.questContentPosition, e.sourceQuestContent, T]),
    Q = e => (0, i.showToast)((0, i.createToast)(new l.Z(e, e.status).message, i.ToastType.FAILURE)),
    L = () => (0, g.is)(e.quest.id).catch(Q),
    A = o.useMemo(() => (0, r.jsx)(i.S89, {
      id: "delivery",
      label: "Show in Quest Bar",
      checked: (null == n ? true : n.id) === e.quest.id,
      action: R
    }), [R, e.quest.id, null == n ? true : n.id]),
    I = e.shouldShowDisclosure && e.quest.id !== b.V6;
  return (0, r.jsxs)(i.v2r, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, a.Zy)()
    },
    navId: "quests-entry",
    "aria-label": O.intl.string(O.t.ogxXGh),
    onClose: null != (t = null == e ? true : e.onClose) ? t : v.dG,
    children: [(0, r.jsxs)(i.kSQ, {
      children: [(0, r.jsx)(i.sNh, {
        id: "play-game",
        label: S,
        action: k,
        icon: i.zFc
      }), T && (0, r.jsx)(i.sNh, {
        id: "share-link",
        label: O.intl.string(O.t.RDE0SU),
        action: D,
        icon: i.TIy
      }), false]
    }, "major-actions"), (0, r.jsxs)(i.kSQ, {
      children: [!e.hideLearnMore && (0, r.jsx)(i.sNh, {
        id: "learn-more",
        label: O.intl.string(O.t.Ws2Bl5),
        action: () => {
          q({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: m.jZ.CONTEXT_MENU_LEARN_MORE,
            sourceQuestContent: e.sourceQuestContent
          }), (0, f.navigateToQuestHome)({
            fromContent: e.questContent,
            questId: e.quest.id
          })
        },
        icon: i.qDn
      }), I && (0, r.jsx)(i.sNh, {
        id: "display-disclosure",
        label: O.intl.string(O.t.GcsZKC),
        action: () => {
          (0, f.openDisclosureModal)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: m.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
            impressionId: N,
            sourceQuestContent: e.sourceQuestContent
          })
        }
      }), u && (0, r.jsx)(i.sNh, {
        id: "hide-entrypoint",
        label: O.intl.string(O.t.NN79Ex),
        action: () => {
          q({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: m.jZ.CONTEXT_MENU_HIDE_CONTENT,
            sourceQuestContent: e.sourceQuestContent
          }), (0, h.GN)(e.questContent) && ((0, g.gl)(e.quest.id, e.questContent), E && (0, f.maybeShowSurveyForQuest)(e.quest))
        },
        subtext: O.intl.string(O.t["1u3YPD"])
      })]
    }, "minor-actions"), e.quest.preview && (0, r.jsxs)(i.kSQ, {
      label: "Preview Controls",
      children: [A, (0, r.jsx)(i.sNh, {
        id: "dismiss",
        label: "Reset Dismissibility",
        action: _
      }), (0, r.jsx)(i.sNh, {
        id: "enrollment",
        label: "Reset Quest",
        action: () => {
          M(), L()
        }
      }), (0, r.jsx)(i.sNh, {
        id: "progress",
        label: "Set Random Quest Progress",
        action: () => {
          w(.9 * Math.random() + .03)
        }
      }), (0, r.jsx)(i.sNh, {
        id: "complete",
        label: "Complete Quest",
        action: P
      }), (0, h.$J)(e.quest) && (0, r.jsxs)(i.sNh, {
        id: "console",
        label: "Console Heartbeat",
        children: [(0, r.jsx)(i.sNh, {
          disabled: true,
          id: "status",
          label: "Status: ".concat((0, h.Bz)(e.quest) ? "alive" : "dead")
        }), (0, r.jsx)(i.sNh, {
          id: "start",
          label: "Start heartbeat (cheatmode)",
          action: () => (0, g.CS)(e.quest.id, true).catch(Q)
        }), (0, r.jsx)(i.sNh, {
          id: "stop",
          label: "Stop heartbeat",
          action: L
        })]
      }), (0, r.jsx)(i.sNh, {
        id: "copy-quest-id",
        label: "Copy Quest ID",
        action: () => {
          (0, c.JG)(e.quest.id)
        }
      })]
    }, "preview-controls")]
  })
}

function S(e) {
  let {
    children: t,
    onOpen: n,
    onClose: s,
    preventIdle: a,
    quest: l,
    questContent: c,
    questContentPosition: d,
    sourceQuestContent: p
  } = e, h = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        s = Object.keys(e);
      for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["children", "onOpen", "onClose", "preventIdle", "quest", "questContent", "questContentPosition", "sourceQuestContent"]), g = (0, m.O5)(), x = o.useRef(null), C = o.useCallback(() => {
    g({
      questId: l.id,
      questContent: c,
      questContentCTA: m.jZ.OPEN_CONTEXT_MENU,
      questContentPosition: d,
      sourceQuestContent: p
    }), null != n && n()
  }, [n, l.id, c, d, g, p]);
  return (0, r.jsx)(i.yRy, {
    targetElementRef: x,
    onRequestOpen: C,
    onRequestClose: s,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return a ? (0, r.jsx)(u.Z, {
        children: (0, r.jsx)(N, q(E({}, h), {
          quest: l,
          questContent: c,
          questContentPosition: d,
          onClose: t,
          sourceQuestContent: p
        }))
      }) : (0, r.jsx)(N, q(E({}, h), {
        quest: l,
        questContent: c,
        questContentPosition: d,
        onClose: t,
        sourceQuestContent: p
      }))
    },
    animation: i.yRy.Animation.NONE,
    children: e => (0, r.jsx)("div", {
      ref: x,
      children: t(e)
    })
  })
}