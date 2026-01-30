/** Chunk was on 49559 **/
/** chunk id: 247818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => v,
  p6: () => A
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk444550 = require("./444550.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk594808 = require("./594808.jsx"),
  Chunk207963 = require("./207963.jsx"),
  Chunk489414 = require("./489414.js"),
  Chunk814890 = require("./814890.js"),
  Chunk57856 = require("./57856.js"),
  Chunk979811 = require("./979811.js");

function h(e) {
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

function j(e, t) {
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

function g(e) {
  let {
    icon: t,
    iconSize: n
  } = e;
  return (0, l.jsx)("div", {
    className: b.zc,
    style: {
      height: n,
      width: n
    },
    children: t
  })
}
var A = ((r = {})[r.PILL_ICON_SIZE = 16] = "PILL_ICON_SIZE", r[r.ROW_ICON_SIZE = 24] = "ROW_ICON_SIZE", r);

function v(e) {
  let {
    selectActionComponent: t,
    queryOptions: n,
    renderIcon: r,
    renderOptionLabel: i,
    defaultValues: s
  } = e, {
    type: A,
    maxValues: v,
    disabled: E
  } = t, C = (0, O.c7)(t), [x, N] = a.useState(false), [I, P] = a.useState(false), [S, _] = a.useState(new Map(null == s ? true : s.map(e => [e.value, e]))), [T, R] = a.useState(new Set(S.keys())), [w, D] = a.useState(() => (null != s ? s : []).map(e => e.value)), [L, k] = a.useState(0);
  a.useEffect(() => {
    let e = (null != s ? s : []).map(e => e.value);
    if (e.every(e => w.includes(e)) && w.every(t => e.includes(t))) return;
    D(e);
    let t = new Map(null == s ? true : s.map(e => [e.value, e]));
    _(t), R(new Set(t.keys())), k(e => e + 1)
  }, [s, w]);
  let U = (0, m.jc)();
  c()(null != U, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
  let {
    state: M,
    executeStateUpdate: H,
    visualState: K,
    isDisabled: F,
    error: G
  } = U.useComponentState(t, S.size > 0 ? {
    type: A,
    selectedOptions: Array.from(S.values())
  } : true), B = null != U.modal, Y = K === f.BB.LOADING;
  a.useEffect(() => {
    if ((null == M ? true : M.type) === d.I5.USER_SELECT || (null == M ? true : M.type) === d.I5.ROLE_SELECT || (null == M ? true : M.type) === d.I5.MENTIONABLE_SELECT || (null == M ? true : M.type) === d.I5.CHANNEL_SELECT) {
      let e = new Map(M.selectedOptions.map(e => [e.value, e]));
      _(e), R(new Set(e.keys()))
    }
  }, [M]);
  let z = a.useCallback(() => {
    H({
      type: A,
      selectedOptions: Array.from(S.values())
    }) && R(new Set(S.keys()))
  }, [H, A, S]);
  a.useEffect(() => {
    x || I || S.size === T.size && Array.from(S.keys()).every(e => T.has(e)) || z()
  }, [x, I, T, S, z]);
  let V = 0 === S.size || x,
    X = {
      isProcessing: Y,
      isDisabled: E || K === f.BB.DISABLED || F,
      wrapperClassName: o()(b.Lt, {
        [b.zE]: B
      }),
      options: e => new Promise(t => {
        t(n(e))
      }),
      placeholder: V ? C : true,
      onClose: () => N(false),
      onOpen: () => N(true),
      onBlur: () => P(false),
      maxVisibleItems: 5,
      renderOptionPrefix: (e, t) => {
        let {
          inPill: n
        } = t, a = n ? 16 : 24, i = r(e, a);
        return null != i ? (0, l.jsx)(g, {
          icon: i,
          iconSize: a
        }) : null
      },
      renderOptionLabel: i
    };
  return (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsx)("div", {
      className: b.kL,
      children: v > 1 ? (0, l.jsx)(u.p, j(h({
        value: Array.from(S.values()),
        onChange: e => {
          x || P(true), _(new Map(e.map(e => [e.value, e])))
        },
        multi: true,
        inputClassNames: o()({
          [b.R]: !V
        }),
        closeOnSelect: false
      }, X), {
        "data-migration-pending": true
      }), L) : (0, l.jsx)(u.p, j(h({
        value: [...S.values()][0],
        onChange: e => _(null != e ? new Map([
          [e.value, e]
        ]) : new Map),
        clearable: true
      }, X), {
        "data-migration-pending": true
      }), L)
    }), null == G || B ? null : (0, l.jsx)(p.S0, j(h({}, (0, p.PS)(G)), {
      className: y.z3
    }))]
  })
}