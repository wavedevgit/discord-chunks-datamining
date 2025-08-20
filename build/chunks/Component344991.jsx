/** Chunk was on web.js **/
/** chunk id: 344991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => O,
  tE: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk739754 = require("./739754.jsx"),
  Chunk970184 = require("./970184.jsx"),
  Chunk280501 = require("./280501.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk28517 = require("./28517.js"),
  Chunk623734 = require("./623734.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    icon: t,
    iconSize: n
  } = e;
  return (0, r.jsx)("div", {
    className: _.iconContainer,
    style: {
      height: n,
      width: n
    },
    children: t
  })
}
var y = function(e) {
  return e[e.PILL_ICON_SIZE = 16] = "PILL_ICON_SIZE", e[e.ROW_ICON_SIZE = 24] = "ROW_ICON_SIZE", e
}({});

function O(e) {
  let {
    selectActionComponent: t,
    queryOptions: n,
    renderIcon: a,
    renderOptionLabel: h,
    defaultValues: g
  } = e, {
    type: y,
    placeholder: O,
    maxValues: v,
    disabled: I
  } = t, [T, S] = i.useState(false), [A, C] = i.useState(false), [N, R] = i.useState(new Map(null == g ? true : g.map(e => [e.value, e]))), [P, w] = i.useState(new Set(N.keys())), [D, x] = i.useState(() => (null != g ? g : []).map(e => e.value)), [L, j] = i.useState(0);
  i.useEffect(() => {
    let e = (null != g ? g : []).map(e => e.value);
    if (e.every(e => D.includes(e)) && D.every(t => e.includes(t))) return;
    x(e);
    let t = new Map(null == g ? true : g.map(e => [e.value, e]));
    R(t), w(new Set(t.keys())), j(e => e + 1)
  }, [g, D]);
  let {
    state: M,
    executeStateUpdate: k,
    visualState: U,
    isDisabled: G,
    error: B
  } = (0, u.Ee)(t, {
    type: y,
    selectedOptions: Array.from(N.values())
  }), Z = v > 1, V = U === d.gH.LOADING;
  i.useEffect(() => {
    if ((null == M ? true : M.type) === l.re.USER_SELECT || (null == M ? true : M.type) === l.re.ROLE_SELECT || (null == M ? true : M.type) === l.re.MENTIONABLE_SELECT || (null == M ? true : M.type) === l.re.CHANNEL_SELECT) {
      let e = new Map(M.selectedOptions.map(e => [e.value, e]));
      R(e), w(new Set(e.keys()))
    }
  }, [M]);
  let F = i.useCallback(() => {
    k({
      type: y,
      selectedOptions: Array.from(N.values())
    }) && w(new Set(N.keys()))
  }, [k, y, N]);
  i.useEffect(() => {
    !T && !A && (N.size === P.size && Array.from(N.keys()).every(e => P.has(e)) || F())
  }, [T, A, P, N, F]);
  let H = e => {
      T || C(true), R(new Map(e.map(e => [e.value, e])))
    },
    Y = e => R(null != e ? new Map([
      [e.value, e]
    ]) : new Map),
    W = e => new Promise(t => {
      t(n(e))
    }),
    K = (e, t) => {
      let {
        inPill: n
      } = t, i = n ? 16 : 24, o = a(e, i);
      return null != o ? (0, r.jsx)(b, {
        icon: o,
        iconSize: i
      }) : null
    },
    z = 0 === N.size || T,
    q = {
      isProcessing: V,
      isDisabled: I || U === d.gH.DISABLED || G,
      wrapperClassName: _.select,
      options: W,
      placeholder: z ? null != O ? O : f.intl.string(f.t.Otr6W1) : true,
      onClose: () => S(false),
      onOpen: () => S(true),
      onBlur: () => C(false),
      maxVisibleItems: 5,
      optionClassName: _.__invalid_selectOption,
      renderOptionPrefix: K,
      renderOptionLabel: h
    };
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)("div", {
      className: _.container,
      children: Z ? (0, r.jsx)(s.VcW, m({
        className: _.badges,
        value: Array.from(N.values()),
        onChange: H,
        multi: true,
        inputClassNames: o()({
          [_.soloInput]: 0 === N.size,
          [_.inlineInput]: N.size > 0,
          [_.hidden]: !z
        }),
        closeOnSelect: false,
        centerCaret: true
      }, q), L) : (0, r.jsx)(s.VcW, m({
        className: (_.badges, _.singleSelect),
        value: [...N.values()][0],
        onChange: Y,
        clearable: true,
        centerCaret: true
      }, q), L)
    }), null != B ? (0, r.jsx)(c.st, E(m({}, (0, c.c4)(B)), {
      className: p.error
    })) : null]
  })
}