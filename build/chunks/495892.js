/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => B
}), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(392711),
  a = n(481060),
  l = n(239091),
  o = n(132580),
  A = n(688465),
  c = n(236413),
  d = n(727072),
  u = n(85960),
  g = n(65912),
  f = n(457414),
  m = n(154502),
  p = n(295708),
  h = n(273504),
  C = n(388032),
  b = n(529749);

function v(e) {
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

function x(e, t) {
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
  let {
    rule: t,
    triggerType: n
  } = e, s = i.useMemo(() => null == t ? (0, u.V9)(n).map(e => (0, r.jsx)(m.Z, {
    actionType: e,
    triggerType: n
  }, e)) : (0, u.V9)(n).reduce((e, i) => {
    var s;
    let a = t.actions.find(e => {
      let {
        type: t
      } = e;
      return i === t
    });
    return null == a || e.push((0, r.jsx)(m.Z, {
      actionType: i,
      action: a,
      triggerType: null !== (s = null == t ? void 0 : t.triggerType) && void 0 !== s ? s : n
    }, i)), e
  }, []), [t, n]);
  return 0 === s.length ? null : (0, r.jsx)("div", {
    className: b.actionRuleListContainer,
    children: s
  })
}
let j = (e, t) => () => t(x(v({}, e), {
    enabled: !e.enabled
  })),
  E = e => {
    e.stopPropagation(), e.preventDefault()
  },
  I = e => {
    var {
      className: t,
      children: n
    } = e, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["className", "children"]);
    return (0, r.jsx)(a.P3F, x(v({
      className: t,
      onClick: E,
      onMouseDown: E,
      onMouseUp: E
    }, i), {
      children: n
    }))
  };

function O(e) {
  var t;
  let {
    rule: n,
    onChangeRule: i,
    onContextMenu: s
  } = e, l = j(n, i), o = e => {
    E(e), s(e)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: b.ruleTextContainer,
      children: (0, r.jsx)(p.Z, {
        rule: n,
        onChangeRule: i
      })
    }), (0, r.jsxs)(I, {
      className: b.actionContainer,
      children: [(0, r.jsx)(a.rsf, {
        className: b.toggle,
        onChange: l,
        checked: null !== (t = null == n ? void 0 : n.enabled) && void 0 !== t && t
      }), (0, r.jsx)(a.ua7, {
        text: C.NW.string(C.t.UKOtz8),
        position: "top",
        "aria-label": C.NW.string(C.t.PdRCRk),
        children: e => (0, r.jsx)(a.P3F, x(v({}, e), {
          onClick: o,
          className: b.menuIconButton,
          children: (0, r.jsx)(a.Huf, {
            size: "md",
            color: "currentColor",
            className: b.menuIcon
          })
        }))
      })]
    })]
  })
}

function y(e) {
  return (0, u.r5)(e, u.vT.ALPHA) ? (0, r.jsx)(o.Z, {
    className: b.alphaBetaTag
  }) : (0, u.r5)(e, u.vT.BETA) ? (0, r.jsx)(A.Z, {
    className: b.alphaBetaTag
  }) : null
}

function w(e) {
  let {
    rule: t,
    isDefaultRule: n,
    onContextMenu: l
  } = e, o = (0, f.w)(t.triggerType, t), {
    isLoading: A,
    saveRule: u
  } = (0, g.w)(), {
    updateRule: m
  } = (0, d.pH)(t.guildId), [p, h] = i.useState(t.enabled), j = (0, s.throttle)(async (e, n) => {
    if (n.preventDefault(), n.stopPropagation(), !A) {
      let e = x(v({}, t), {
        enabled: !p
      });
      h(!p);
      let n = await u(e, []);
      null != n && (m(n), h(n.enabled))
    }
  }, 300), O = e => {
    E(e), l(e)
  };
  if (null == o) return null;
  let {
    headerText: w,
    headerSubtext: P,
    descriptionText: B,
    icon: D
  } = o, T = !(0, c.Vb)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: b.ruleIconContainer,
      children: (0, r.jsx)(D, {
        size: "md",
        color: "currentColor",
        className: b.ruleIcon
      })
    }), (0, r.jsxs)("div", {
      className: b.ruleTextContainer,
      children: [(0, r.jsxs)(a.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: b.ruleTextHeaderContainer,
        children: [(0, r.jsxs)("div", {
          className: b.ruleTextHeader,
          children: [w, y(t.triggerType)]
        }), (0, r.jsx)(a.Text, {
          className: b.ruleSubtextHeader,
          variant: "text-sm/normal",
          children: P
        })]
      }), T && (0, r.jsx)(a.Text, {
        className: b.ruleTextDescription,
        variant: "text-sm/normal",
        children: B
      }), (0, r.jsx)(N, {
        rule: t,
        triggerType: t.triggerType
      })]
    }), (0, r.jsxs)(I, {
      className: b.actionContainer,
      children: [(0, r.jsx)(a.rsf, {
        className: b.toggle,
        onChange: j,
        checked: null != p && p
      }), !n && (0, r.jsx)(a.ua7, {
        text: C.NW.string(C.t.UKOtz8),
        position: "top",
        "aria-label": C.NW.string(C.t.PdRCRk),
        children: e => (0, r.jsx)(a.P3F, x(v({}, e), {
          onClick: O,
          className: b.menuIconButton,
          children: (0, r.jsx)(a.Huf, {
            size: "md",
            color: "currentColor",
            className: b.menuIcon
          })
        }))
      })]
    })]
  })
}

function P(e) {
  let {
    triggerType: t,
    onSetupRule: n
  } = e, s = i.useMemo(() => (0, f.w)(t), [t]);
  if (null == s) return null;
  let {
    headerText: l,
    descriptionText: o,
    icon: A
  } = s;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: b.ruleIconContainer,
      children: (0, r.jsx)(A, {
        color: "currentColor",
        size: "md",
        className: b.ruleIcon
      })
    }), (0, r.jsxs)("div", {
      className: b.ruleTextContainer,
      children: [(0, r.jsx)(a.X6q, {
        className: b.ruleTextHeader,
        variant: "text-md/semibold",
        color: "header-primary",
        children: (0, r.jsxs)("div", {
          className: b.ruleTextHeader,
          children: [l, y(t)]
        })
      }), (0, r.jsx)(a.Text, {
        className: b.ruleTextDescription,
        variant: "text-sm/normal",
        children: o
      }), (0, r.jsx)(N, {
        triggerType: t
      })]
    }), (0, r.jsx)(I, {
      className: b.actionContainer,
      children: (0, r.jsx)(a.zxk, {
        size: a.zxk.Sizes.SMALL,
        onClick: n,
        children: t === h.fX.KEYWORD ? C.NW.string(C.t.CumH4u) : C.NW.string(C.t.oRs6mJ)
      })
    })]
  })
}

function B(e) {
  let {
    rule: t,
    triggerType: i,
    isEditMode: s,
    isDefaultRule: o,
    forceSetup: A,
    onSetupRule: c,
    onChangeRule: d
  } = e, u = e => {
    null != t && (e.preventDefault(), e.stopPropagation(), (0, l.jW)(e, async () => {
      let {
        default: e
      } = await n.e("25443").then(n.bind(n, 46577));
      return n => (0, r.jsx)(e, v({
        rule: t
      }, n))
    }))
  }, g = (0, r.jsx)(P, {
    triggerType: i,
    onSetupRule: c
  });
  return null == t || A || (g = s ? (0, r.jsx)(O, {
    rule: t,
    onChangeRule: d,
    onContextMenu: u
  }) : (0, r.jsx)(w, {
    rule: t,
    isDefaultRule: o,
    onContextMenu: u
  })), (0, r.jsx)(a.P3F, {
    className: b.mainContainer,
    onContextMenu: u,
    children: g
  })
}