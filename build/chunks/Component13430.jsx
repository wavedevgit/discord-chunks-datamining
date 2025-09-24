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
    name: A,
    labelTag: C
  } = e, {
    day: j,
    setDay: O,
    month: y,
    setMonth: v,
    year: I,
    setYear: g
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
  }(n), G = o.useMemo(() => null != j && null != y && null != I ? i()("".concat(j, "/").concat(y, "/").concat(I), "DD/MM/YYYY") : null, [j, y, I]);
  o.useEffect(() => {
    l((null == G ? true : G.isValid()) ? G : null)
  }, [G, l]);
  let F = m;
  null == G || G.isValid() || (F = u.intl.string(u.t.udnqh4));
  let S = function() {
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
    [D, L] = o.useState(E ? 0 : false),
    k = o.useMemo(b, []),
    w = {
      onPopulated: _,
      sortedInputs: k
    },
    M = o.useRef(w);
  o.useEffect(() => {
    M.current = w
  }), o.useEffect(() => {
    let {
      onPopulated: e,
      sortedInputs: t
    } = M.current;
    if (D >= t.length) {
      null == e || e();
      return
    }
  }, [D]);
  let P = [];
  for (let e = 0; e < 3; e++) {
    let {
      type: t
    } = k[e];
    switch (t) {
      case "day":
        P.push({
          key: "day",
          input: (0, a.jsx)(h, {
            options: p,
            selectOption: O,
            children: (0, a.jsx)(c.q4e, {
              "aria-label": u.intl.string(u.t.Voklra),
              popoutPosition: "top",
              placeholder: u.intl.string(u.t.Voklra),
              options: p,
              value: j,
              onChange: t => {
                O(t), L(e + 1)
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
        P.push({
          key: "month",
          input: (0, a.jsx)(h, {
            options: f,
            selectOption: v,
            children: (0, a.jsx)(c.q4e, {
              "aria-label": u.intl.string(u.t.UDlN8f),
              popoutPosition: "top",
              placeholder: u.intl.string(u.t.UDlN8f),
              options: f,
              value: y,
              onChange: t => {
                v(t), L(e + 1)
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
        P.push({
          key: "year",
          input: (0, a.jsx)(h, {
            options: S,
            selectOption: g,
            children: (0, a.jsx)(c.q4e, {
              "aria-label": u.intl.string(u.t.ZWr5WF),
              popoutPosition: "top",
              placeholder: u.intl.string(u.t.ZWr5WF),
              options: S,
              value: I,
              onChange: t => {
                g(t), L(e + 1)
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
  return (0, a.jsxs)("fieldset", {
    className: r()(d.container, s),
    children: [(0, a.jsx)(c.vwX, {
      tag: null != C ? C : "legend",
      required: N,
      error: F,
      children: u.intl.string(u.t.xNpFJy)
    }), (0, a.jsx)("div", {
      className: d.inputs,
      children: P.map((e, t) => {
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
    })]
  })
})