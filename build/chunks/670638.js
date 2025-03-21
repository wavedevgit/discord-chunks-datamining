/** Chunk was on 37447 **/
n.d(t, {
  r: () => q
});
var r = n(200651),
  s = n(192379),
  o = n(442837),
  i = n(481060),
  a = n(239091),
  l = n(479531),
  c = n(390322),
  u = n(63063),
  d = n(617136),
  m = n(915750),
  p = n(272008),
  x = n(113434),
  g = n(569984),
  h = n(497505),
  f = n(918701),
  j = n(341907),
  b = n(46140),
  C = n(642145),
  v = n(981631),
  N = n(231338),
  y = n(388032);

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function T(e, t) {
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

function E(e) {
  var t;
  let n = (0, o.e7)([g.Z], () => g.Z.questDeliveryOverride, []),
    c = (0, f.GN)(e.questContent),
    O = !(0, f.q8)(e.quest) && !(0, f.pO)(e.quest),
    T = [h.jn.QUEST_BAR_V2, h.jn.QUEST_BAR].includes(e.questContent),
    E = (0, f.zK)(e.quest, b.S7.DISMISSAL_SURVEY),
    q = (0, d.O5)(),
    S = (0, m.aM)(),
    {
      handleComplete: P,
      handleProgress: w,
      handleResetDismissibilityClick: R,
      handleResetStatusClick: _,
      handleOverrideDeliveryClick: I
    } = (0, x.kJ)(e.quest.id),
    D = s.useCallback(() => {
      if (e.quest.id === C.V) {
        window.open(u.Z.getArticleURL(v.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
        return
      }(0, f.FE)(e.quest, {
        content: e.questContent,
        ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
        impressionId: S
      })
    }, [S, e.quest, e.questContent]),
    M = s.useCallback(() => {
      (0, f.f2)(e.quest.id, {
        content: e.questContent,
        position: e.questContentPosition,
        ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK,
        impressionId: S
      }), (0, i.showToast)((0, i.createToast)(y.NW.string(y.t["+5kSoa"]), i.ToastType.SUCCESS))
    }, [S, e.quest.id, e.questContent, e.questContentPosition]),
    A = e => (0, i.showToast)((0, i.createToast)(new l.Z(e, e.status).message, i.ToastType.FAILURE)),
    W = () => (0, p.is)(e.quest.id).catch(A),
    Z = s.useMemo(() => O ? y.t.lwQdjI : y.t.hvVgAQ, [O]),
    k = s.useMemo(() => (0, r.jsx)(i.S89, {
      id: "delivery",
      label: "Show in Quest Bar",
      checked: (null == n ? void 0 : n.id) === e.quest.id,
      action: I
    }), [I, e.quest.id, null == n ? void 0 : n.id]),
    L = e.shouldShowDisclosure && e.quest.id !== C.V;
  return (0, r.jsxs)(i.v2r, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, a.Zy)()
    },
    navId: "quests-entry",
    "aria-label": y.NW.string(y.t.ogxXGh),
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : N.dG,
    children: [(0, r.jsxs)(i.kSQ, {
      children: [(0, r.jsx)(i.sNh, {
        id: "play-game",
        label: y.NW.string(Z),
        action: D,
        icon: i.zFc
      }), !0 === e.showShareLink && (0, r.jsx)(i.sNh, {
        id: "share-link",
        label: y.NW.string(y.t.RDE0SU),
        action: M,
        icon: i.TIy
      }), !1]
    }, "major-actions"), (0, r.jsxs)(i.kSQ, {
      children: [!e.hideLearnMore && (0, r.jsx)(i.sNh, {
        id: "learn-more",
        label: y.NW.string(y.t.Ws2Bl5),
        action: () => {
          q({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: d.jZ.CONTEXT_MENU_LEARN_MORE
          }), (0, j.navigateToQuestHome)({
            fromContent: e.questContent,
            questId: e.quest.id
          })
        },
        icon: i.qDn
      }), L && (0, r.jsx)(i.sNh, {
        id: "display-disclosure",
        label: y.NW.string(y.t.GcsZKC),
        action: () => {
          (0, j.openDisclosureModal)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
            impressionId: S
          })
        }
      }), c && (0, r.jsx)(i.sNh, {
        id: "hide-entrypoint",
        label: y.NW.string(y.t.NN79Ex),
        action: () => {
          q({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT
          }), (0, f.GN)(e.questContent) && ((0, p.gl)(e.quest.id, e.questContent), E && T && (0, j.maybeShowSurveyForQuest)(e.quest))
        },
        subtext: y.NW.string(y.t["1u3YPD"])
      })]
    }, "minor-actions"), e.quest.preview && (0, r.jsxs)(i.kSQ, {
      label: "Preview Controls",
      children: [k, (0, r.jsx)(i.sNh, {
        id: "dismiss",
        label: "Reset Dismissibility",
        action: R
      }), (0, r.jsx)(i.sNh, {
        id: "enrollment",
        label: "Reset Quest",
        action: () => {
          _(), W()
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
      }), (0, f.$J)(e.quest) && (0, r.jsxs)(i.sNh, {
        id: "console",
        label: "Console Heartbeat",
        children: [(0, r.jsx)(i.sNh, {
          disabled: !0,
          id: "status",
          label: "Status: ".concat((0, f.Bz)(e.quest) ? "alive" : "dead")
        }), (0, r.jsx)(i.sNh, {
          id: "start",
          label: "Start heartbeat (cheatmode)",
          action: () => (0, p.CS)(e.quest.id, !0).catch(A)
        }), (0, r.jsx)(i.sNh, {
          id: "stop",
          label: "Stop heartbeat",
          action: W
        })]
      })]
    }, "preview-controls")]
  })
}

function q(e) {
  let {
    children: t,
    onOpen: n,
    onClose: o,
    preventIdle: a,
    quest: l,
    questContent: u,
    questContentPosition: m
  } = e, p = function(e, t) {
    if (null == e) return {};
    var n, r, s = function(e, t) {
      if (null == e) return {};
      var n, r, s = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
      return s
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
    }
    return s
  }(e, ["children", "onOpen", "onClose", "preventIdle", "quest", "questContent", "questContentPosition"]), x = (0, d.O5)(), g = s.useCallback(() => {
    x({
      questId: l.id,
      questContent: u,
      questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
      questContentPosition: m
    }), null != n && n()
  }, [n, l.id, u, m, x]);
  return (0, r.jsx)(i.yRy, {
    onRequestOpen: g,
    onRequestClose: o,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return a ? (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(E, T(O({}, p), {
          quest: l,
          questContent: u,
          questContentPosition: m,
          onClose: t
        }))
      }) : (0, r.jsx)(E, T(O({}, p), {
        quest: l,
        questContent: u,
        questContentPosition: m,
        onClose: t
      }))
    },
    animation: i.yRy.Animation.NONE,
    children: e => t(e)
  })
}