/** Chunk was on 76323 **/
/** chunk id: 13430, original params: t,e,n (module,exports,require) **/
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
  d = Array.from(Array(31).keys()).map(t => ({
    value: t + 1,
    label: "".concat(t + 1)
  })),
  _ = Array.from(Array(12).keys()).map(t => ({
    value: t + 1,
    label: p[t]
  })),
  E = /[a-zA-Z0-9]/;

function m(t) {
  let {
    options: e,
    selectOption: n,
    children: o
  } = t, [a, i] = l.useState("");
  l.useEffect(() => {
    if ("" !== a) {
      let t = setTimeout(() => i(""), 1e3);
      return () => clearTimeout(t)
    }
  }, [a, i]);
  let u = l.useCallback(t => {
    if (E.test(t.key)) {
      let r = "".concat(a).concat(t.key.toLowerCase()),
        l = e.find(t => t.label.toLowerCase().startsWith(r));
      null != l && n(l.value), i(r)
    }
  }, [n, i, a, e]);
  return (0, r.jsx)("div", {
    onKeyDown: u,
    children: o
  })
}

function A() {
  let t = u()().localeData().longDateFormat("L"),
    e = module.indexOf("D"),
    n = module.indexOf("M"),
    r = module.indexOf("Y");
  return (false === exports || false === require || false === Chunk951288) && (e = 0, n = 1, r = 2), [{
    index: exports,
    type: "day"
  }, {
    index: require,
    type: "month"
  }, {
    index: Chunk951288,
    type: "year"
  }].sort((t, e) => t.index < e.index ? false : 1)
}
let y = Chunk647438.forwardRef(function(t, e) {
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
    name: O,
    labelTag: S
  } = t, {
    day: N,
    setDay: v,
    month: h,
    setMonth: G,
    year: w,
    setYear: C
  } = function(t) {
    let e = null,
      n = null,
      r = null;
    null != t && (e = t.date(), n = t.month() + 1, r = t.year());
    let [o, a] = l.useState(e), [i, u] = l.useState(n), [c, s] = l.useState(r);
    return {
      day: o,
      setDay: a,
      month: i,
      setMonth: u,
      year: c,
      setYear: s
    }
  }(n), U = l.useMemo(() => null != N && null != h && null != w ? u()("".concat(N, "/").concat(h, "/").concat(w), "DD/MM/YYYY") : null, [N, h, w]);
  l.useEffect(() => {
    i((null == U ? true : U.isValid()) ? U : null)
  }, [U, i]);
  let j = E;
  null == U || U.isValid() || (j = s.intl.string(s.t.udnqh4));
  let x = function() {
      let t = new Date().getFullYear(),
        e = l.useRef(Array.from(Array(150).keys()).map(e => ({
          value: t - e - 3,
          label: "".concat(t - e - 3)
        })));
      return l.useEffect(() => {
        e.current = Array.from(Array(150).keys()).map(e => ({
          value: t - e - 3,
          label: "".concat(t - e - 3)
        }))
      }, [t]), e.current
    }(),
    [M, D] = l.useState(y ? 0 : false),
    I = l.useMemo(A, []),
    R = {
      onPopulated: p,
      sortedInputs: I
    },
    k = l.useRef(R);
  l.useEffect(() => {
    k.current = R
  }), l.useEffect(() => {
    let {
      onPopulated: t,
      sortedInputs: e
    } = k.current;
    if (M >= e.length) {
      null == t || t();
      return
    }
  }, [M]);
  let F = [];
  for (let t = 0; t < 3; t++) {
    let {
      type: e
    } = I[t];
    switch (e) {
      case "day":
        F.push({
          key: "day",
          input: (0, r.jsx)(m, {
            options: d,
            selectOption: v,
            children: (0, r.jsx)(c.q4e, {
              "aria-label": s.intl.string(s.t.Voklra),
              popoutPosition: "top",
              placeholder: s.intl.string(s.t.Voklra),
              options: d,
              value: N,
              onChange: e => {
                v(e), D(t + 1)
              },
              maxVisibleItems: 6,
              autoFocus: M === t,
              onOpen: () => null == g ? true : g("".concat(O, "_").concat(e)),
              onClose: () => null == T ? true : T("".concat(O, "_").concat(e))
            })
          })
        });
        break;
      case "month":
        F.push({
          key: "month",
          input: (0, r.jsx)(m, {
            options: _,
            selectOption: G,
            children: (0, r.jsx)(c.q4e, {
              "aria-label": s.intl.string(s.t.UDlN8f),
              popoutPosition: "top",
              placeholder: s.intl.string(s.t.UDlN8f),
              options: _,
              value: h,
              onChange: e => {
                G(e), D(t + 1)
              },
              maxVisibleItems: 6,
              autoFocus: M === t,
              onOpen: () => null == g ? true : g("".concat(O, "_").concat(e)),
              onClose: () => null == T ? true : T("".concat(O, "_").concat(e))
            })
          })
        });
        break;
      case "year":
        F.push({
          key: "year",
          input: (0, r.jsx)(m, {
            options: x,
            selectOption: C,
            children: (0, r.jsx)(c.q4e, {
              "aria-label": s.intl.string(s.t.ZWr5WF),
              popoutPosition: "top",
              placeholder: s.intl.string(s.t.ZWr5WF),
              options: x,
              value: w,
              onChange: e => {
                C(e), D(t + 1)
              },
              maxVisibleItems: 6,
              autoFocus: M === t,
              onOpen: () => null == g ? true : g("".concat(O, "_").concat(e)),
              onClose: () => null == T ? true : T("".concat(O, "_").concat(e))
            })
          })
        })
    }
  }
  return (0, r.jsxs)("fieldset", {
    className: a()(f.container, o),
    children: [(0, r.jsx)(c.vwX, {
      tag: null != S ? S : "legend",
      required: b,
      error: j,
      children: s.intl.string(s.t.xNpFJy)
    }), (0, r.jsx)("div", {
      className: f.inputs,
      children: F.map((t, e) => {
        let {
          key: n,
          input: l
        } = t;
        return (0, r.jsx)("div", {
          tabIndex: e + 1,
          className: f[n],
          children: l
        }, n)
      })
    })]
  })
})