/** Chunk was on 20941 **/
/** chunk id: 247818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => C,
  p6: () => j
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function x(e) {
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

function y(e, t) {
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

function v(e) {
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
var j = ((r = {})[r.PILL_ICON_SIZE = 16] = "PILL_ICON_SIZE", r[r.ROW_ICON_SIZE = 24] = "ROW_ICON_SIZE", r);

function C(e) {
  let {
    selectActionComponent: t,
    queryOptions: n,
    renderIcon: r,
    renderOptionLabel: i,
    defaultValues: o
  } = e, {
    type: j,
    maxValues: C,
    disabled: _
  } = t, A = (0, h.c7)(t), [O, E] = a.useState(false), [S, N] = a.useState(false), [I, P] = a.useState(new Map(null == o ? true : o.map(e => [e.value, e]))), [w, T] = a.useState(new Set(I.keys())), [R, L] = a.useState(() => (null != o ? o : []).map(e => e.value)), [D, k] = a.useState(0);
  a.useEffect(() => {
    let e = (null != o ? o : []).map(e => e.value);
    if (e.every(e => R.includes(e)) && R.every(t => e.includes(t))) return;
    L(e);
    let t = new Map(null == o ? true : o.map(e => [e.value, e]));
    P(t), T(new Set(t.keys())), k(e => e + 1)
  }, [o, R]);
  let M = (0, f.jc)();
  c()(null != M, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
  let {
    state: H,
    executeStateUpdate: U,
    visualState: F,
    isDisabled: G,
    error: V
  } = M.useComponentState(t, I.size > 0 ? {
    type: j,
    selectedOptions: Array.from(I.values())
  } : true), B = null != M.modal, W = F === p.BB.LOADING;
  a.useEffect(() => {
    if ((null == H ? true : H.type) === d.I5.USER_SELECT || (null == H ? true : H.type) === d.I5.ROLE_SELECT || (null == H ? true : H.type) === d.I5.MENTIONABLE_SELECT || (null == H ? true : H.type) === d.I5.CHANNEL_SELECT) {
      let e = new Map(H.selectedOptions.map(e => [e.value, e]));
      P(e), T(new Set(e.keys()))
    }
  }, [H]);
  let z = a.useCallback(() => {
    U({
      type: j,
      selectedOptions: Array.from(I.values())
    }) && T(new Set(I.keys()))
  }, [U, j, I]);
  a.useEffect(() => {
    O || S || I.size === w.size && Array.from(I.keys()).every(e => w.has(e)) || z()
  }, [O, S, w, I, z]);
  let K = 0 === I.size || O,
    Z = {
      isProcessing: W,
      isDisabled: _ || F === p.BB.DISABLED || G,
      wrapperClassName: s()(b.Lt, {
        [b.zE]: B
      }),
      options: e => new Promise(t => {
        t(n(e))
      }),
      placeholder: K ? A : true,
      onClose: () => E(false),
      onOpen: () => E(true),
      onBlur: () => N(false),
      maxVisibleItems: 5,
      renderOptionPrefix: (e, t) => {
        let {
          inPill: n
        } = t, a = n ? 16 : 24, i = r(e, a);
        return null != i ? (0, l.jsx)(v, {
          icon: i,
          iconSize: a
        }) : null
      },
      renderOptionLabel: i
    };
  return (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsx)("div", {
      className: b.kL,
      children: C > 1 ? (0, l.jsx)(u.p, y(x({
        value: Array.from(I.values()),
        onChange: e => {
          O || N(true), P(new Map(e.map(e => [e.value, e])))
        },
        multi: true,
        inputClassNames: s()({
          [b.R]: !K
        }),
        closeOnSelect: false
      }, Z), {
        "data-migration-pending": true
      }), D) : (0, l.jsx)(u.p, y(x({
        value: [...I.values()][0],
        onChange: e => P(null != e ? new Map([
          [e.value, e]
        ]) : new Map),
        clearable: true
      }, Z), {
        "data-migration-pending": true
      }), D)
    }), null == V || B ? null : (0, l.jsx)(m.S0, y(x({}, (0, m.PS)(V)), {
      className: g.z3
    }))]
  })
}