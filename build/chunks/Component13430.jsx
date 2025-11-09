/** Chunk was on 76323 **/
/** chunk id: 13430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./35282.js"), require("./642613.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk701769 = require("./701769.js");
let p = u()().localeData().months(),
  d = Array.from(Array(31).keys()).map(e => ({
    value: e + 1,
    label: "".concat(e + 1)
  })),
  _ = Array.from(Array(12).keys()).map(e => ({
    value: e + 1,
    label: p[e]
  })),
  E = /[a-zA-Z0-9]/;

function m(e) {
  let {
    options: t,
    selectOption: n,
    children: o
  } = e, [a, i] = l.useState("");
  l.useEffect(() => {
    if ("" !== a) {
      let e = setTimeout(() => i(""), 1e3);
      return () => clearTimeout(e)
    }
  }, [a, i]);
  let u = l.useCallback(e => {
    if (E.test(e.key)) {
      let r = "".concat(a).concat(e.key.toLowerCase()),
        l = t.find(e => e.label.toLowerCase().startsWith(r));
      null != l && n(l.value), i(r)
    }
  }, [n, i, a, t]);
  return (0, r.jsx)("div", {
    onKeyDown: u,
    children: o
  })
}

function A() {
  let e = u()().localeData().longDateFormat("L"),
    t = module.indexOf("D"),
    n = module.indexOf("M"),
    r = module.indexOf("Y");
  return (false === exports || false === require || false === Chunk951288) && (t = 0, n = 1, r = 2), [{
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
let y = Chunk647438.forwardRef(function(e, t) {
  let {
    value: n,
    wrapperClassName: o,
    onChange: i,
    onPopulated: p,
    error: E,
    autoFocus: y,
    required: b,
    onFocus: g,
    onBlur: T,
    name: O
  } = e, {
    day: N,
    setDay: S,
    month: v,
    setMonth: h,
    year: G,
    setYear: w
  } = function(e) {
    let t = null,
      n = null,
      r = null;
    null != e && (t = e.date(), n = e.month() + 1, r = e.year());
    let [o, a] = l.useState(t), [i, u] = l.useState(n), [c, s] = l.useState(r);
    return {
      day: o,
      setDay: a,
      month: i,
      setMonth: u,
      year: c,
      setYear: s
    }
  }(n), C = l.useMemo(() => null != N && null != v && null != G ? u()("".concat(N, "/").concat(v, "/").concat(G), "DD/MM/YYYY") : null, [N, v, G]);
  l.useEffect(() => {
    i((null == C ? true : C.isValid()) ? C : null)
  }, [C, i]);
  let U = E;
  null == C || C.isValid() || (U = s.intl.string(s.t.udnqh6));
  let j = function() {
      let e = new Date().getFullYear(),
        t = l.useRef(Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        })));
      return l.useEffect(() => {
        t.current = Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        }))
      }, [e]), t.current
    }(),
    [M, x] = l.useState(y ? 0 : false),
    I = l.useMemo(A, []),
    D = {
      onPopulated: p,
      sortedInputs: I
    },
    R = l.useRef(D);
  l.useEffect(() => {
    R.current = D
  }), l.useEffect(() => {
    let {
      onPopulated: e,
      sortedInputs: t
    } = R.current;
    if (M >= t.length) {
      null == e || e();
      return
    }
  }, [M]);
  let k = [];
  for (let e = 0; e < 3; e++) {
    let {
      type: t
    } = I[e];
    switch (t) {
      case "day":
        k.push({
          key: "day",
          input: (0, r.jsx)(m, {
            options: d,
            selectOption: S,
            children: (0, r.jsx)(c.q4e, {
              "aria-label": s.intl.string(s.t.Voklre),
              popoutPosition: "top",
              placeholder: s.intl.string(s.t.Voklre),
              options: d,
              value: N,
              onChange: t => {
                S(t), x(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: M === e,
              onOpen: () => null == g ? true : g("".concat(O, "_").concat(t)),
              onClose: () => null == T ? true : T("".concat(O, "_").concat(t))
            })
          })
        });
        break;
      case "month":
        k.push({
          key: "month",
          input: (0, r.jsx)(m, {
            options: _,
            selectOption: h,
            children: (0, r.jsx)(c.q4e, {
              "aria-label": s.intl.string(s.t.UDlN8W),
              popoutPosition: "top",
              placeholder: s.intl.string(s.t.UDlN8W),
              options: _,
              value: v,
              onChange: t => {
                h(t), x(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: M === e,
              onOpen: () => null == g ? true : g("".concat(O, "_").concat(t)),
              onClose: () => null == T ? true : T("".concat(O, "_").concat(t))
            })
          })
        });
        break;
      case "year":
        k.push({
          key: "year",
          input: (0, r.jsx)(m, {
            options: j,
            selectOption: w,
            children: (0, r.jsx)(c.q4e, {
              "aria-label": s.intl.string(s.t.ZWr5WA),
              popoutPosition: "top",
              placeholder: s.intl.string(s.t.ZWr5WA),
              options: j,
              value: G,
              onChange: t => {
                w(t), x(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: M === e,
              onOpen: () => null == g ? true : g("".concat(O, "_").concat(t)),
              onClose: () => null == T ? true : T("".concat(O, "_").concat(t))
            })
          })
        })
    }
  }
  return (0, r.jsx)("fieldset", {
    className: a()(f.container, o),
    children: (0, r.jsx)(c.gNt, {
      label: s.intl.string(s.t.xNpFJ6),
      required: b,
      errorMessage: null != U ? U : true,
      children: (0, r.jsx)("div", {
        className: f.inputs,
        children: k.map((e, t) => {
          let {
            key: n,
            input: l
          } = e;
          return (0, r.jsx)("div", {
            tabIndex: t + 1,
            className: f[n],
            children: l
          }, n)
        })
      })
    })
  })
})