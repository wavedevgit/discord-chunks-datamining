/** Chunk was on 47841 **/
/** chunk id: 645105, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk525113 = require("./525113.jsx"),
  Chunk611371 = require("./611371.jsx"),
  Chunk627794 = require("./627794.js"),
  Chunk928348 = require("./928348.js"),
  Chunk53594 = require("./53594.js"),
  Chunk268749 = require("./268749.js"),
  Chunk878701 = require("./878701.js"),
  Chunk542210 = require("./542210.jsx"),
  Chunk780679 = require("./780679.jsx"),
  Chunk411335 = require("./411335.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk985681 = require("./985681.js");

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
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function v(e, t) {
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
  } = e, l = i.useMemo(() => null == t ? (0, m.J6)(n).map(e => (0, r.jsx)(b.A, {
    actionType: e,
    triggerType: n
  }, e)) : (0, m.J6)(n).reduce((e, i) => {
    var l;
    let s = t.actions.find(e => {
      let {
        type: t
      } = e;
      return i === t
    });
    return null == s || e.push((0, r.jsx)(b.A, {
      actionType: i,
      action: s,
      triggerType: null != (l = null == t ? true : t.triggerType) ? l : n
    }, i)), e
  }, []), [t, n]);
  return 0 === l.length ? null : (0, r.jsx)("div", {
    className: _.Wy,
    children: l
  })
}
let A = e => {
    e.stopPropagation(), e.preventDefault()
  },
  E = e => {
    let {
      className: t,
      children: n
    } = e, i = function(e, t) {
      if (null == e) return {};
      var n, r, i, l = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }
      if (l = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.getOwnPropertyNames(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
          return i
        }(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(e, ["className", "children"]);
    return (0, r.jsx)(a.DUT, v(O({
      className: t,
      onClick: A,
      onMouseDown: A,
      onMouseUp: A
    }, i), {
      children: n
    }))
  };

function N(e) {
  var t;
  let {
    rule: n,
    onChangeRule: i,
    onContextMenu: l
  } = e, o = () => i(v(O({}, n), {
    enabled: !n.enabled
  }));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: _.XG,
      children: (0, r.jsx)(h.A, {
        rule: n,
        onChangeRule: i
      })
    }), (0, r.jsxs)(E, {
      className: _.Ik,
      children: [(0, r.jsx)(a.dOG, {
        onChange: o,
        checked: null != (t = null == n ? true : n.enabled) && t
      }), (0, r.jsx)(s.m, {
        text: j.intl.string(j.t["UKOtz+"]),
        position: "top",
        "aria-label": j.intl.string(j.t.PdRCRg),
        children: (0, r.jsx)(a.DUT, {
          onClick: e => {
            A(e), l(e)
          },
          className: _.p5,
          children: (0, r.jsx)(a.FHP, {
            size: "md",
            color: "currentColor",
            className: _.ro
          })
        })
      })]
    })]
  })
}

function S(e) {
  return (0, m.ub)(e, m.H2.ALPHA) ? (0, r.jsx)(c.A, {
    className: _.n0
  }) : (0, m.ub)(e, m.H2.BETA) ? (0, r.jsx)(d.A, {
    className: _.n0
  }) : null
}

function I(e) {
  let {
    rule: t,
    isDefaultRule: n,
    onContextMenu: o
  } = e, c = (0, f.l)(t.triggerType, t), {
    isLoading: d,
    saveRule: m
  } = (0, p.S)(), {
    updateRule: b
  } = (0, g.wP)(t.guildId), [h, x] = i.useState(t.enabled), N = (0, l.throttle)(async () => {
    if (!d) {
      let e = v(O({}, t), {
        enabled: !h
      });
      x(!h);
      let n = await m(e, []);
      null != n && (b(n), x(n.enabled))
    }
  }, 300);
  if (null == c) return null;
  let {
    headerText: I,
    headerSubtext: T,
    descriptionText: C,
    icon: P
  } = c, w = !(0, u.wC)(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: _.Ji,
      children: (0, r.jsx)(P, {
        size: "md",
        color: "currentColor",
        className: _.S3
      })
    }), (0, r.jsxs)("div", {
      className: _.XG,
      children: [(0, r.jsxs)(a.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        className: _.aY,
        children: [(0, r.jsxs)("div", {
          className: _.bR,
          children: [I, S(t.triggerType)]
        }), (0, r.jsx)(a.Text, {
          className: _.bL,
          variant: "text-sm/normal",
          children: T
        })]
      }), w && (0, r.jsx)(a.Text, {
        className: _.mT,
        variant: "text-sm/normal",
        children: C
      }), (0, r.jsx)(y, {
        rule: t,
        triggerType: t.triggerType
      })]
    }), (0, r.jsxs)(E, {
      className: _.Ik,
      children: [(0, r.jsx)(a.dOG, {
        onChange: N,
        checked: null != h && h
      }), !n && (0, r.jsx)(s.m, {
        text: j.intl.string(j.t["UKOtz+"]),
        position: "top",
        "aria-label": j.intl.string(j.t.PdRCRg),
        children: (0, r.jsx)(a.DUT, {
          onClick: e => {
            A(e), o(e)
          },
          className: _.p5,
          children: (0, r.jsx)(a.FHP, {
            size: "md",
            color: "currentColor",
            className: _.ro
          })
        })
      })]
    })]
  })
}

function T(e) {
  let {
    triggerType: t,
    onSetupRule: n
  } = e, l = i.useMemo(() => (0, f.l)(t), [t]);
  if (null == l) return null;
  let {
    headerText: s,
    descriptionText: o,
    icon: c
  } = l;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: _.Ji,
      children: (0, r.jsx)(c, {
        color: "currentColor",
        size: "md",
        className: _.S3
      })
    }), (0, r.jsxs)("div", {
      className: _.XG,
      children: [(0, r.jsx)(a.Heading, {
        className: _.bR,
        variant: "text-md/semibold",
        color: "text-strong",
        children: (0, r.jsxs)("div", {
          className: _.bR,
          children: [s, S(t)]
        })
      }), (0, r.jsx)(a.Text, {
        className: _.mT,
        variant: "text-sm/normal",
        children: o
      }), (0, r.jsx)(y, {
        triggerType: t
      })]
    }), (0, r.jsx)(E, {
      className: _.Ik,
      children: (0, r.jsx)(a.Button, {
        variant: "primary",
        size: "sm",
        text: t === x.uh.KEYWORD ? j.intl.string(j.t.CumH4u) : j.intl.string(j.t.oRs6mG),
        onClick: n
      })
    })]
  })
}

function C(e) {
  let {
    rule: t,
    triggerType: i,
    isEditMode: l,
    isDefaultRule: s,
    forceSetup: c,
    onSetupRule: d,
    onChangeRule: u
  } = e, g = e => {
    null != t && (e.preventDefault(), e.stopPropagation(), (0, o.L3)(e, async () => {
      let {
        default: e
      } = await n.e("52106").then(n.bind(n, 345585));
      return n => (0, r.jsx)(e, O({
        rule: t
      }, n))
    }))
  }, m = (0, r.jsx)(T, {
    triggerType: i,
    onSetupRule: d
  });
  return null == t || c || (m = l ? (0, r.jsx)(N, {
    rule: t,
    onChangeRule: u,
    onContextMenu: g
  }) : (0, r.jsx)(I, {
    rule: t,
    isDefaultRule: s,
    onContextMenu: g
  })), (0, r.jsx)(a.DUT, {
    className: _.rs,
    onContextMenu: g,
    children: m
  })
}