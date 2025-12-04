/** Chunk was on 91848 **/
/** chunk id: 13430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./35282.js"), require("./642613.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  r = require.n(Chunk913527),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk67706 = require("./67706.js");
let p = r()().localeData().months(),
  f = Array.from(Array(31).keys()).map(e => ({
    value: e + 1,
    label: "".concat(e + 1)
  })),
  m = Array.from(Array(12).keys()).map(e => ({
    value: e + 1,
    label: p[e]
  })),
  h = /[a-zA-Z0-9]/;

function b(e) {
  let {
    options: t,
    selectOption: n,
    children: s
  } = e, [l, i] = o.useState("");
  o.useEffect(() => {
    if ("" !== l) {
      let e = setTimeout(() => i(""), 1e3);
      return () => clearTimeout(e)
    }
  }, [l, i]);
  let r = o.useCallback(e => {
    if (h.test(e.key)) {
      let a = "".concat(l).concat(e.key.toLowerCase()),
        o = t.find(e => e.label.toLowerCase().startsWith(a));
      null != o && n(o.value), i(a)
    }
  }, [n, i, l, t]);
  return (0, a.jsx)("div", {
    onKeyDown: r,
    children: s
  })
}

function E() {
  let e = r()().localeData().longDateFormat("L"),
    t = module.indexOf("D"),
    n = module.indexOf("M"),
    a = module.indexOf("Y");
  return (false === exports || false === require || false === Chunk54381) && (t = 0, n = 1, a = 2), [{
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
let N = Chunk473749.forwardRef(function(e, t) {
  let {
    value: n,
    wrapperClassName: s,
    onChange: i,
    onPopulated: p,
    error: h,
    autoFocus: N,
    required: x,
    onFocus: A,
    onBlur: T,
    name: C
  } = e, {
    day: j,
    setDay: y,
    month: O,
    setMonth: v,
    year: I,
    setYear: g
  } = function(e) {
    let t = null,
      n = null,
      a = null;
    null != e && (t = e.date(), n = e.month() + 1, a = e.year());
    let [s, l] = o.useState(t), [i, r] = o.useState(n), [c, u] = o.useState(a);
    return {
      day: s,
      setDay: l,
      month: i,
      setMonth: r,
      year: c,
      setYear: u
    }
  }(n), G = o.useMemo(() => null != j && null != O && null != I ? r()("".concat(j, "/").concat(O, "/").concat(I), "DD/MM/YYYY") : null, [j, O, I]);
  o.useEffect(() => {
    i((null == G ? true : G.isValid()) ? G : null)
  }, [G, i]);
  let F = h;
  null == G || G.isValid() || (F = d.intl.string(d.t.udnqh6));
  let D = function() {
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
    [S, L] = o.useState(N ? 0 : false),
    w = o.useMemo(E, []),
    M = {
      onPopulated: p,
      sortedInputs: w
    },
    k = o.useRef(M);
  o.useEffect(() => {
    k.current = M
  }), o.useEffect(() => {
    let {
      onPopulated: e,
      sortedInputs: t
    } = k.current;
    if (S >= t.length) {
      null == e || e();
      return
    }
  }, [S]);
  let P = [];
  for (let e = 0; e < 3; e++) {
    let {
      type: t
    } = w[e];
    switch (t) {
      case "day":
        P.push({
          key: "day",
          input: (0, a.jsx)(b, {
            options: f,
            selectOption: y,
            children: (0, a.jsx)(c.y6, {
              "aria-label": d.intl.string(d.t.Voklre),
              popoutPosition: "top",
              placeholder: d.intl.string(d.t.Voklre),
              options: f,
              value: j,
              onChange: t => {
                y(t), L(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: S === e,
              onOpen: () => null == A ? true : A("".concat(C, "_").concat(t)),
              onClose: () => null == T ? true : T("".concat(C, "_").concat(t))
            })
          })
        });
        break;
      case "month":
        P.push({
          key: "month",
          input: (0, a.jsx)(b, {
            options: m,
            selectOption: v,
            children: (0, a.jsx)(c.y6, {
              "aria-label": d.intl.string(d.t.UDlN8W),
              popoutPosition: "top",
              placeholder: d.intl.string(d.t.UDlN8W),
              options: m,
              value: O,
              onChange: t => {
                v(t), L(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: S === e,
              onOpen: () => null == A ? true : A("".concat(C, "_").concat(t)),
              onClose: () => null == T ? true : T("".concat(C, "_").concat(t))
            })
          })
        });
        break;
      case "year":
        P.push({
          key: "year",
          input: (0, a.jsx)(b, {
            options: D,
            selectOption: g,
            children: (0, a.jsx)(c.y6, {
              "aria-label": d.intl.string(d.t.ZWr5WA),
              popoutPosition: "top",
              placeholder: d.intl.string(d.t.ZWr5WA),
              options: D,
              value: I,
              onChange: t => {
                g(t), L(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: S === e,
              onOpen: () => null == A ? true : A("".concat(C, "_").concat(t)),
              onClose: () => null == T ? true : T("".concat(C, "_").concat(t))
            })
          })
        })
    }
  }
  return (0, a.jsx)("fieldset", {
    className: l()(_.container, s),
    children: (0, a.jsx)(u.gNt, {
      label: d.intl.string(d.t.xNpFJ6),
      required: x,
      errorMessage: null != F ? F : true,
      children: (0, a.jsx)("div", {
        className: _.inputs,
        children: P.map((e, t) => {
          let {
            key: n,
            input: o
          } = e;
          return (0, a.jsx)("div", {
            tabIndex: t + 1,
            className: _[n],
            children: o
          }, n)
        })
      })
    })
  })
})