/** Chunk was on 76323 **/
/** chunk id: 13430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./35282.js"), require("./642613.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk449804 = require("./449804.js");
let d = u()().localeData().months(),
  _ = Array.from(Array(31).keys()).map(e => ({
    value: e + 1,
    label: "".concat(e + 1)
  })),
  E = Array.from(Array(12).keys()).map(e => ({
    value: e + 1,
    label: d[e]
  })),
  m = /[a-zA-Z0-9]/;

function A(e) {
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
    if (m.test(e.key)) {
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

function y() {
  let e = u()().localeData().longDateFormat("L"),
    t = module.indexOf("D"),
    n = module.indexOf("M"),
    r = module.indexOf("Y");
  return (false === exports || false === require || false === Chunk54381) && (t = 0, n = 1, r = 2), [{
    index: exports,
    type: "day"
  }, {
    index: require,
    type: "month"
  }, {
    index: Chunk54381,
    type: "year"
  }].sort((e, t) => e.index < t.index ? false : 1)
}
let b = Chunk473749.forwardRef(function(e, t) {
  let {
    value: n,
    wrapperClassName: o,
    onChange: i,
    onPopulated: d,
    error: m,
    autoFocus: b,
    required: g,
    onFocus: T,
    onBlur: O,
    name: N
  } = e, {
    day: S,
    setDay: v,
    month: h,
    setMonth: G,
    year: w,
    setYear: C
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
  }(n), U = l.useMemo(() => null != S && null != h && null != w ? u()("".concat(S, "/").concat(h, "/").concat(w), "DD/MM/YYYY") : null, [S, h, w]);
  l.useEffect(() => {
    i((null == U ? true : U.isValid()) ? U : null)
  }, [U, i]);
  let j = m;
  null == U || U.isValid() || (j = f.intl.string(f.t.udnqh6));
  let M = function() {
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
    [x, I] = l.useState(b ? 0 : false),
    D = l.useMemo(y, []),
    R = {
      onPopulated: d,
      sortedInputs: D
    },
    k = l.useRef(R);
  l.useEffect(() => {
    k.current = R
  }), l.useEffect(() => {
    let {
      onPopulated: e,
      sortedInputs: t
    } = k.current;
    if (x >= t.length) {
      null == e || e();
      return
    }
  }, [x]);
  let P = [];
  for (let e = 0; e < 3; e++) {
    let {
      type: t
    } = D[e];
    switch (t) {
      case "day":
        P.push({
          key: "day",
          input: (0, r.jsx)(A, {
            options: _,
            selectOption: v,
            children: (0, r.jsx)(c.y6, {
              "aria-label": f.intl.string(f.t.Voklre),
              popoutPosition: "top",
              placeholder: f.intl.string(f.t.Voklre),
              options: _,
              value: S,
              onChange: t => {
                v(t), I(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: x === e,
              onOpen: () => null == T ? true : T("".concat(N, "_").concat(t)),
              onClose: () => null == O ? true : O("".concat(N, "_").concat(t))
            })
          })
        });
        break;
      case "month":
        P.push({
          key: "month",
          input: (0, r.jsx)(A, {
            options: E,
            selectOption: G,
            children: (0, r.jsx)(c.y6, {
              "aria-label": f.intl.string(f.t.UDlN8W),
              popoutPosition: "top",
              placeholder: f.intl.string(f.t.UDlN8W),
              options: E,
              value: h,
              onChange: t => {
                G(t), I(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: x === e,
              onOpen: () => null == T ? true : T("".concat(N, "_").concat(t)),
              onClose: () => null == O ? true : O("".concat(N, "_").concat(t))
            })
          })
        });
        break;
      case "year":
        P.push({
          key: "year",
          input: (0, r.jsx)(A, {
            options: M,
            selectOption: C,
            children: (0, r.jsx)(c.y6, {
              "aria-label": f.intl.string(f.t.ZWr5WA),
              popoutPosition: "top",
              placeholder: f.intl.string(f.t.ZWr5WA),
              options: M,
              value: w,
              onChange: t => {
                C(t), I(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: x === e,
              onOpen: () => null == T ? true : T("".concat(N, "_").concat(t)),
              onClose: () => null == O ? true : O("".concat(N, "_").concat(t))
            })
          })
        })
    }
  }
  return (0, r.jsx)("fieldset", {
    className: a()(p.container, o),
    children: (0, r.jsx)(s.gNt, {
      label: f.intl.string(f.t.xNpFJ6),
      required: g,
      errorMessage: null != j ? j : true,
      children: (0, r.jsx)("div", {
        className: p.inputs,
        children: P.map((e, t) => {
          let {
            key: n,
            input: l
          } = e;
          return (0, r.jsx)("div", {
            tabIndex: t + 1,
            className: p[n],
            children: l
          }, n)
        })
      })
    })
  })
})