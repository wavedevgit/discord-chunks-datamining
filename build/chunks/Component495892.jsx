/** Chunk was on 21376 **/
/** chunk id: 495892, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk132580 = require("./132580.jsx"),
  Chunk688465 = require("./688465.jsx"),
  Chunk236413 = require("./236413.js"),
  Chunk727072 = require("./727072.js"),
  Chunk85960 = require("./85960.js"),
  Chunk65912 = require("./65912.js"),
  Chunk457414 = require("./457414.js"),
  Chunk154502 = require("./154502.jsx"),
  Chunk295708 = require("./295708.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk260107 = require("./260107.js");

function _(e) {
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

function O(e, t) {
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

function y(e) {
  let {
    rule: t,
    triggerType: n
  } = e, l = i.useMemo(() => null == t ? (0, g.V9)(n).map(e => (0, r.jsx)(h.Z, {
    actionType: e,
    triggerType: n
  }, e)) : (0, g.V9)(n).reduce((e, i) => {
    var l;
    let s = t.actions.find(e => {
      let {
        type: t
      } = e;
      return i === t
    });
    return null == s || e.push((0, r.jsx)(h.Z, {
      actionType: i,
      action: s,
      triggerType: null != (l = null == t ? true : t.triggerType) ? l : n
    }, i)), e
  }, []), [t, n]);
  return 0 === l.length ? null : (0, r.jsx)("div", {
    className: v.actionRuleListContainer,
    children: l
  })
}
let C = e => {
    e.stopPropagation(), e.preventDefault()
  },
  N = e => {
    var {
      className: t,
      children: n
    } = e, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["className", "children"]);
    return (0, r.jsx)(a.P3F, O(_({
      className: t,
      onClick: C,
      onMouseDown: C,
      onMouseUp: C
    }, i), {
      children: n
    }))
  };

function E(e) {
  var t;
  let {
    rule: n,
    onChangeRule: i,
    onContextMenu: l
  } = e, o = () => i(O(_({}, n), {
    enabled: !n.enabled
  })), c = e => {
    C(e), l(e)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: v.ruleTextContainer,
      children: (0, r.jsx)(b.Z, {
        rule: n,
        onChangeRule: i
      })
    }), (0, r.jsxs)(N, {
      className: v.actionContainer,
      children: [(0, r.jsx)(s.T2, {
        onChange: o,
        checked: null != (t = null == n ? true : n.enabled) && t
      }), (0, r.jsx)(a.ua7, {
        text: j.intl.string(j.t.UKOtz8),
        position: "top",
        "aria-label": j.intl.string(j.t.PdRCRk),
        children: e => (0, r.jsx)(a.P3F, O(_({}, e), {
          onClick: c,
          className: v.menuIconButton,
          children: (0, r.jsx)(a.Huf, {
            size: "md",
            color: "currentColor",
            className: v.menuIcon
          })
        }))
      })]
    })]
  })
}

function I(e) {
  return (0, g.r5)(e, g.vT.ALPHA) ? (0, r.jsx)(c.Z, {
    className: v.alphaBetaTag
  }) : (0, g.r5)(e, g.vT.BETA) ? (0, r.jsx)(d.Z, {
    className: v.alphaBetaTag
  }) : null
}

function S(e) {
  let {
    rule: t,
    isDefaultRule: n,
    onContextMenu: o
  } = e, c = (0, f.w)(t.triggerType, t), {
    isLoading: d,
    saveRule: g
  } = (0, p.w)(), {
    updateRule: h
  } = (0, m.pH)(t.guildId), [b, x] = i.useState(t.enabled), E = (0, l.throttle)(async (e, n) => {
    if (n.preventDefault(), n.stopPropagation(), !d) {
      let e = O(_({}, t), {
        enabled: !b
      });
      x(!b);
      let n = await g(e, []);
      null != n && (h(n), x(n.enabled))
    }
  }, 300), S = e => {
    C(e), o(e)
  };
  if (null == c) return null;
  let {
    headerText: T,
    headerSubtext: P,
    descriptionText: w,
    icon: R
  } = c, Z = !(0, u.Vb)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: v.ruleIconContainer,
      children: (0, r.jsx)(R, {
        size: "md",
        color: "currentColor",
        className: v.ruleIcon
      })
    }), (0, r.jsxs)("div", {
      className: v.ruleTextContainer,
      children: [(0, r.jsxs)(a.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: v.ruleTextHeaderContainer,
        children: [(0, r.jsxs)("div", {
          className: v.ruleTextHeader,
          children: [T, I(t.triggerType)]
        }), (0, r.jsx)(a.Text, {
          className: v.ruleSubtextHeader,
          variant: "text-sm/normal",
          children: P
        })]
      }), Z && (0, r.jsx)(a.Text, {
        className: v.ruleTextDescription,
        variant: "text-sm/normal",
        children: w
      }), (0, r.jsx)(y, {
        rule: t,
        triggerType: t.triggerType
      })]
    }), (0, r.jsxs)(N, {
      className: v.actionContainer,
      children: [(0, r.jsx)(s.T2, {
        onChange: E,
        checked: null != b && b
      }), !n && (0, r.jsx)(a.ua7, {
        text: j.intl.string(j.t.UKOtz8),
        position: "top",
        "aria-label": j.intl.string(j.t.PdRCRk),
        children: e => (0, r.jsx)(a.P3F, O(_({}, e), {
          onClick: S,
          className: v.menuIconButton,
          children: (0, r.jsx)(a.Huf, {
            size: "md",
            color: "currentColor",
            className: v.menuIcon
          })
        }))
      })]
    })]
  })
}

function T(e) {
  let {
    triggerType: t,
    onSetupRule: n
  } = e, l = i.useMemo(() => (0, f.w)(t), [t]);
  if (null == l) return null;
  let {
    headerText: s,
    descriptionText: o,
    icon: c
  } = l;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: v.ruleIconContainer,
      children: (0, r.jsx)(c, {
        color: "currentColor",
        size: "md",
        className: v.ruleIcon
      })
    }), (0, r.jsxs)("div", {
      className: v.ruleTextContainer,
      children: [(0, r.jsx)(a.X6q, {
        className: v.ruleTextHeader,
        variant: "text-md/semibold",
        color: "header-primary",
        children: (0, r.jsxs)("div", {
          className: v.ruleTextHeader,
          children: [s, I(t)]
        })
      }), (0, r.jsx)(a.Text, {
        className: v.ruleTextDescription,
        variant: "text-sm/normal",
        children: o
      }), (0, r.jsx)(y, {
        triggerType: t
      })]
    }), (0, r.jsx)(N, {
      className: v.actionContainer,
      children: (0, r.jsx)(a.zxk, {
        variant: "primary",
        size: "sm",
        text: t === x.fX.KEYWORD ? j.intl.string(j.t.CumH4u) : j.intl.string(j.t.oRs6mJ),
        onClick: n
      })
    })]
  })
}

function P(e) {
  let {
    rule: t,
    triggerType: i,
    isEditMode: l,
    isDefaultRule: s,
    forceSetup: c,
    onSetupRule: d,
    onChangeRule: u
  } = e, m = e => {
    null != t && (e.preventDefault(), e.stopPropagation(), (0, o.jW)(e, async () => {
      let {
        default: e
      } = await n.e("25443").then(n.bind(n, 46577));
      return n => (0, r.jsx)(e, _({
        rule: t
      }, n))
    }))
  }, g = (0, r.jsx)(T, {
    triggerType: i,
    onSetupRule: d
  });
  return null == t || c || (g = l ? (0, r.jsx)(E, {
    rule: t,
    onChangeRule: u,
    onContextMenu: m
  }) : (0, r.jsx)(S, {
    rule: t,
    isDefaultRule: s,
    onContextMenu: m
  })), (0, r.jsx)(a.P3F, {
    className: v.mainContainer,
    onContextMenu: m,
    children: g
  })
}