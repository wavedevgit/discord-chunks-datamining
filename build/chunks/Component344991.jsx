/** Chunk was on 30243 **/
/** chunk id: 344991, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  ZP: () => g,
  tE: () => j
}), require("./388685.js");
var n, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk739754 = require("./739754.jsx"),
  Chunk970184 = require("./970184.jsx"),
  Chunk280501 = require("./280501.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk28517 = require("./28517.js"),
  Chunk623734 = require("./623734.js");

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function y(e) {
  let {
    icon: t,
    iconSize: r
  } = e;
  return (0, l.jsx)("div", {
    className: b.iconContainer,
    style: {
      height: r,
      width: r
    },
    children: t
  })
}
var j = ((n = {})[n.PILL_ICON_SIZE = 16] = "PILL_ICON_SIZE", n[n.ROW_ICON_SIZE = 24] = "ROW_ICON_SIZE", n);

function g(e) {
  var t, r;
  let {
    selectActionComponent: n,
    queryOptions: o,
    renderIcon: j,
    renderOptionLabel: g,
    defaultValues: h
  } = e, {
    type: v,
    placeholder: P,
    maxValues: x,
    disabled: S
  } = n, [w, C] = i.useState(false), [E, N] = i.useState(false), [I, T] = i.useState(new Map(null == h ? true : h.map(e => [e.value, e]))), [Z, k] = i.useState(new Set(I.keys())), [L, D] = i.useState(() => (null != h ? h : []).map(e => e.value)), [R, A] = i.useState(0);
  i.useEffect(() => {
    let e = (null != h ? h : []).map(e => e.value);
    if (e.every(e => L.includes(e)) && L.every(t => e.includes(t))) return;
    D(e);
    let t = new Map(null == h ? true : h.map(e => [e.value, e]));
    T(t), k(new Set(t.keys())), A(e => e + 1)
  }, [h, L]);
  let {
    state: _,
    executeStateUpdate: M,
    visualState: U,
    isDisabled: H,
    error: F
  } = (0, d.Ee)(n, {
    type: v,
    selectedOptions: Array.from(I.values())
  }), G = U === p.gH.LOADING;
  i.useEffect(() => {
    if ((null == _ ? true : _.type) === s.re.USER_SELECT || (null == _ ? true : _.type) === s.re.ROLE_SELECT || (null == _ ? true : _.type) === s.re.MENTIONABLE_SELECT || (null == _ ? true : _.type) === s.re.CHANNEL_SELECT) {
      let e = new Map(_.selectedOptions.map(e => [e.value, e]));
      T(e), k(new Set(e.keys()))
    }
  }, [_]);
  let z = i.useCallback(() => {
    M({
      type: v,
      selectedOptions: Array.from(I.values())
    }) && k(new Set(I.keys()))
  }, [M, v, I]);
  i.useEffect(() => {
    !w && !E && (I.size === Z.size && Array.from(I.keys()).every(e => Z.has(e)) || z())
  }, [w, E, Z, I, z]);
  let B = 0 === I.size || w,
    W = {
      isProcessing: G,
      isDisabled: S || U === p.gH.DISABLED || H,
      wrapperClassName: b.select,
      options: e => new Promise(t => {
        t(o(e))
      }),
      placeholder: B ? null != P ? P : f.intl.string(f.t.Otr6W1) : true,
      onClose: () => C(false),
      onOpen: () => C(true),
      onBlur: () => N(false),
      maxVisibleItems: 5,
      optionClassName: b.__invalid_selectOption,
      renderOptionPrefix: (e, t) => {
        let {
          inPill: r
        } = t, n = r ? 16 : 24, i = j(e, n);
        return null != i ? (0, l.jsx)(y, {
          icon: i,
          iconSize: n
        }) : null
      },
      renderOptionLabel: g
    };
  return (0, l.jsxs)(i.Fragment, {
    children: [(0, l.jsx)("div", {
      className: b.container,
      children: x > 1 ? (0, l.jsx)(c.VcW, O({
        className: b.badges,
        value: Array.from(I.values()),
        onChange: e => {
          w || N(true), T(new Map(e.map(e => [e.value, e])))
        },
        multi: true,
        inputClassNames: a()({
          [b.soloInput]: 0 === I.size,
          [b.inlineInput]: I.size > 0,
          [b.hidden]: !B
        }),
        closeOnSelect: false,
        centerCaret: true
      }, W), R) : (0, l.jsx)(c.VcW, O({
        className: (b.badges, b.singleSelect),
        value: [...I.values()][0],
        onChange: e => T(null != e ? new Map([
          [e.value, e]
        ]) : new Map),
        clearable: true,
        centerCaret: true
      }, W), R)
    }), null != F ? (0, l.jsx)(u.st, (t = O({}, (0, u.c4)(F)), r = r = {
      className: m.error
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t)) : null]
  })
}