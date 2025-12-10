/** Chunk was on web.js **/
/** chunk id: 344991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => S,
  tE: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk668339 = require("./668339.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk739754 = require("./739754.jsx"),
  Chunk970184 = require("./970184.jsx"),
  Chunk280501 = require("./280501.js"),
  Chunk292419 = require("./292419.js"),
  Chunk28517 = require("./28517.js"),
  Chunk219879 = require("./219879.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let {
    icon: t,
    iconSize: n
  } = e;
  return (0, r.jsx)("div", {
    className: m.iconContainer,
    style: {
      height: n,
      width: n
    },
    children: t
  })
}
var v = function(e) {
  return e[e.PILL_ICON_SIZE = 16] = "PILL_ICON_SIZE", e[e.ROW_ICON_SIZE = 24] = "ROW_ICON_SIZE", e
}({});

function S(e) {
  let {
    selectActionComponent: t,
    queryOptions: n,
    renderIcon: a,
    renderOptionLabel: s,
    defaultValues: g
  } = e, {
    type: b,
    maxValues: v,
    disabled: S
  } = t, I = (0, _.Wo)(t), [T, C] = i.useState(false), [A, N] = i.useState(false), [P, R] = i.useState(new Map(null == g ? true : g.map(e => [e.value, e]))), [D, w] = i.useState(new Set(P.keys())), [x, L] = i.useState(() => (null != g ? g : []).map(e => e.value)), [j, M] = i.useState(0);
  i.useEffect(() => {
    let e = (null != g ? g : []).map(e => e.value);
    if (e.every(e => x.includes(e)) && x.every(t => e.includes(t))) return;
    L(e);
    let t = new Map(null == g ? true : g.map(e => [e.value, e]));
    R(t), w(new Set(t.keys())), M(e => e + 1)
  }, [g, x]);
  let k = (0, f.CJ)();
  l()(null != k, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
  let {
    state: U,
    executeStateUpdate: G,
    visualState: Z,
    isDisabled: B,
    error: F
  } = k.useComponentState(t, P.size > 0 ? {
    type: b,
    selectedOptions: Array.from(P.values())
  } : true), V = null != k.modal, H = v > 1, Y = Z === p.gH.LOADING;
  i.useEffect(() => {
    if ((null == U ? true : U.type) === u.re.USER_SELECT || (null == U ? true : U.type) === u.re.ROLE_SELECT || (null == U ? true : U.type) === u.re.MENTIONABLE_SELECT || (null == U ? true : U.type) === u.re.CHANNEL_SELECT) {
      let e = new Map(U.selectedOptions.map(e => [e.value, e]));
      R(e), w(new Set(e.keys()))
    }
  }, [U]);
  let W = i.useCallback(() => {
    G({
      type: b,
      selectedOptions: Array.from(P.values())
    }) && w(new Set(P.keys()))
  }, [G, b, P]);
  i.useEffect(() => {
    !T && !A && (P.size === D.size && Array.from(P.keys()).every(e => D.has(e)) || W())
  }, [T, A, D, P, W]);
  let K = e => {
      T || N(true), R(new Map(e.map(e => [e.value, e])))
    },
    z = e => R(null != e ? new Map([
      [e.value, e]
    ]) : new Map),
    q = e => new Promise(t => {
      t(n(e))
    }),
    Q = (e, t) => {
      let {
        inPill: n
      } = t, i = n ? 16 : 24, o = a(e, i);
      return null != o ? (0, r.jsx)(O, {
        icon: o,
        iconSize: i
      }) : null
    },
    X = 0 === P.size || T,
    J = {
      isProcessing: Y,
      isDisabled: S || Z === p.gH.DISABLED || B,
      wrapperClassName: o()(m.select, {
        [m.inModal]: V
      }),
      options: q,
      placeholder: X ? I : true,
      onClose: () => C(false),
      onOpen: () => C(true),
      onBlur: () => N(false),
      maxVisibleItems: 5,
      renderOptionPrefix: Q,
      renderOptionLabel: s
    };
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)("div", {
      className: m.container,
      children: H ? (0, r.jsx)(c.d, E({
        value: Array.from(P.values()),
        onChange: K,
        multi: true,
        inputClassNames: o()({
          [m.hidden]: !X
        }),
        closeOnSelect: false
      }, J), j) : (0, r.jsx)(c.d, E({
        value: [...P.values()][0],
        onChange: z,
        clearable: true
      }, J), j)
    }), null == F || V ? null : (0, r.jsx)(d.st, y(E({}, (0, d.c4)(F)), {
      className: h.error
    }))]
  })
}