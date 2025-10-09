/** Chunk was on 91848 **/
/** chunk id: 13430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./35282.js"), require("./642613.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk67706 = require("./67706.js");
let _ = i()().localeData().months(),
  p = Array.from(Array(31).keys()).map(e => ({
    value: e + 1,
    label: "".concat(e + 1)
  })),
  f = Array.from(Array(12).keys()).map(e => ({
    value: e + 1,
    label: _[e]
  })),
  m = /[a-zA-Z0-9]/;

function h(e) {
  let {
    options: t,
    selectOption: n,
    children: s
  } = e, [r, l] = o.useState("");
  o.useEffect(() => {
    if ("" !== r) {
      let e = setTimeout(() => l(""), 1e3);
      return () => clearTimeout(e)
    }
  }, [r, l]);
  let i = o.useCallback(e => {
    if (m.test(e.key)) {
      let a = "".concat(r).concat(e.key.toLowerCase()),
        o = t.find(e => e.label.toLowerCase().startsWith(a));
      null != o && n(o.value), l(a)
    }
  }, [n, l, r, t]);
  return (0, a.jsx)("div", {
    onKeyDown: i,
    children: s
  })
}

function b() {
  let e = i()().localeData().longDateFormat("L"),
    t = module.indexOf("D"),
    n = module.indexOf("M"),
    a = module.indexOf("Y");
  return (false === exports || false === require || false === Chunk951288) && (t = 0, n = 1, a = 2), [{
    index: exports,
    type: "day"
  }, {
    index: require,
    type: "month"
  }, {
    index: Chunk951288,
    type: "year"
  }].sort((e, t) => e.index < t.index ? false : 1)
}
let E = Chunk647438.forwardRef(function(e, t) {
  let {
    value: n,
    wrapperClassName: s,
    onChange: l,
    onPopulated: _,
    error: m,
    autoFocus: E,
    required: N,
    onFocus: x,
    onBlur: T,
    name: A
  } = e, {
    day: C,
    setDay: j,
    month: O,
    setMonth: y,
    year: v,
    setYear: I
  } = function(e) {
    let t = null,
      n = null,
      a = null;
    null != e && (t = e.date(), n = e.month() + 1, a = e.year());
    let [s, r] = o.useState(t), [l, i] = o.useState(n), [c, u] = o.useState(a);
    return {
      day: s,
      setDay: r,
      month: l,
      setMonth: i,
      year: c,
      setYear: u
    }
  }(n), g = o.useMemo(() => null != C && null != O && null != v ? i()("".concat(C, "/").concat(O, "/").concat(v), "DD/MM/YYYY") : null, [C, O, v]);
  o.useEffect(() => {
    l((null == g ? true : g.isValid()) ? g : null)
  }, [g, l]);
  let G = m;
  null == g || g.isValid() || (G = u.intl.string(u.t.udnqh4));
  let F = function() {
      let e = new Date().getFullYear(),
        t = o.useRef(Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        })));
      return o.useEffect(() => {
        t.current = Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        }))
      }, [e]), t.current
    }(),
    [D, S] = o.useState(E ? 0 : false),
    L = o.useMemo(b, []),
    k = {
      onPopulated: _,
      sortedInputs: L
    },
    w = o.useRef(k);
  o.useEffect(() => {
    w.current = k
  }), o.useEffect(() => {
    let {
      onPopulated: e,
      sortedInputs: t
    } = w.current;
    if (D >= t.length) {
      null == e || e();
      return
    }
  }, [D]);
  let M = [];
  for (let e = 0; e < 3; e++) {
    let {
      type: t
    } = L[e];
    switch (t) {
      case "day":
        M.push({
          key: "day",
          input: (0, a.jsx)(h, {
            options: p,
            selectOption: j,
            children: (0, a.jsx)(c.q4e, {
              "aria-label": u.intl.string(u.t.Voklra),
              popoutPosition: "top",
              placeholder: u.intl.string(u.t.Voklra),
              options: p,
              value: C,
              onChange: t => {
                j(t), S(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: D === e,
              onOpen: () => null == x ? true : x("".concat(A, "_").concat(t)),
              onClose: () => null == T ? true : T("".concat(A, "_").concat(t))
            })
          })
        });
        break;
      case "month":
        M.push({
          key: "month",
          input: (0, a.jsx)(h, {
            options: f,
            selectOption: y,
            children: (0, a.jsx)(c.q4e, {
              "aria-label": u.intl.string(u.t.UDlN8f),
              popoutPosition: "top",
              placeholder: u.intl.string(u.t.UDlN8f),
              options: f,
              value: O,
              onChange: t => {
                y(t), S(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: D === e,
              onOpen: () => null == x ? true : x("".concat(A, "_").concat(t)),
              onClose: () => null == T ? true : T("".concat(A, "_").concat(t))
            })
          })
        });
        break;
      case "year":
        M.push({
          key: "year",
          input: (0, a.jsx)(h, {
            options: F,
            selectOption: I,
            children: (0, a.jsx)(c.q4e, {
              "aria-label": u.intl.string(u.t.ZWr5WF),
              popoutPosition: "top",
              placeholder: u.intl.string(u.t.ZWr5WF),
              options: F,
              value: v,
              onChange: t => {
                I(t), S(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: D === e,
              onOpen: () => null == x ? true : x("".concat(A, "_").concat(t)),
              onClose: () => null == T ? true : T("".concat(A, "_").concat(t))
            })
          })
        })
    }
  }
  return (0, a.jsx)("fieldset", {
    className: r()(d.container, s),
    children: (0, a.jsx)(c.gNt, {
      label: u.intl.string(u.t.xNpFJy),
      required: N,
      errorMessage: null != G ? G : true,
      children: (0, a.jsx)("div", {
        className: d.inputs,
        children: M.map((e, t) => {
          let {
            key: n,
            input: o
          } = e;
          return (0, a.jsx)("div", {
            tabIndex: t + 1,
            className: d[n],
            children: o
          }, n)
        })
      })
    })
  })
})