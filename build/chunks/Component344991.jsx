/** Chunk was on web.js **/
/** chunk id: 344991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => I,
  tE: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
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
    className: h.iconContainer,
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

function I(e) {
  let {
    selectActionComponent: t,
    queryOptions: n,
    renderIcon: a,
    renderOptionLabel: s,
    defaultValues: g
  } = e, {
    type: b,
    maxValues: v,
    disabled: I
  } = t, S = (0, p.Wo)(t), [T, A] = i.useState(false), [C, N] = i.useState(false), [R, P] = i.useState(new Map(null == g ? true : g.map(e => [e.value, e]))), [w, D] = i.useState(new Set(R.keys())), [L, x] = i.useState(() => (null != g ? g : []).map(e => e.value)), [M, k] = i.useState(0);
  i.useEffect(() => {
    let e = (null != g ? g : []).map(e => e.value);
    if (e.every(e => L.includes(e)) && L.every(t => e.includes(t))) return;
    x(e);
    let t = new Map(null == g ? true : g.map(e => [e.value, e]));
    P(t), D(new Set(t.keys())), k(e => e + 1)
  }, [g, L]);
  let j = (0, f.CJ)();
  l()(null != j, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
  let {
    state: U,
    executeStateUpdate: G,
    visualState: B,
    isDisabled: Z,
    error: F
  } = j.useComponentState(t, R.size > 0 ? {
    type: b,
    selectedOptions: Array.from(R.values())
  } : true), V = null != j.modal, H = v > 1, Y = B === _.gH.LOADING;
  i.useEffect(() => {
    if ((null == U ? true : U.type) === u.re.USER_SELECT || (null == U ? true : U.type) === u.re.ROLE_SELECT || (null == U ? true : U.type) === u.re.MENTIONABLE_SELECT || (null == U ? true : U.type) === u.re.CHANNEL_SELECT) {
      let e = new Map(U.selectedOptions.map(e => [e.value, e]));
      P(e), D(new Set(e.keys()))
    }
  }, [U]);
  let W = i.useCallback(() => {
    G({
      type: b,
      selectedOptions: Array.from(R.values())
    }) && D(new Set(R.keys()))
  }, [G, b, R]);
  i.useEffect(() => {
    !T && !C && (R.size === w.size && Array.from(R.keys()).every(e => w.has(e)) || W())
  }, [T, C, w, R, W]);
  let K = e => {
      T || N(true), P(new Map(e.map(e => [e.value, e])))
    },
    z = e => P(null != e ? new Map([
      [e.value, e]
    ]) : new Map),
    q = e => new Promise(t => {
      t(n(e))
    }),
    X = (e, t) => {
      let {
        inPill: n
      } = t, i = n ? 16 : 24, o = a(e, i);
      return null != o ? (0, r.jsx)(O, {
        icon: o,
        iconSize: i
      }) : null
    },
    Q = 0 === R.size || T,
    J = {
      isProcessing: Y,
      isDisabled: I || B === _.gH.DISABLED || Z,
      wrapperClassName: o()(h.select, {
        [h.inModal]: V
      }),
      options: q,
      placeholder: Q ? S : true,
      onClose: () => A(false),
      onOpen: () => A(true),
      onBlur: () => N(false),
      maxVisibleItems: 5,
      renderOptionPrefix: X,
      renderOptionLabel: s
    };
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)("div", {
      className: h.container,
      children: H ? (0, r.jsx)(c.VcW, E({
        value: Array.from(R.values()),
        onChange: K,
        multi: true,
        inputClassNames: o()({
          [h.hidden]: !Q
        }),
        closeOnSelect: false
      }, J), M) : (0, r.jsx)(c.VcW, E({
        value: [...R.values()][0],
        onChange: z,
        clearable: true
      }, J), M)
    }), null == F || V ? null : (0, r.jsx)(d.st, y(E({}, (0, d.c4)(F)), {
      className: m.error
    }))]
  })
}