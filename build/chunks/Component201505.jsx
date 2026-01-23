/** Chunk was on 86142 **/
/** chunk id: 201505, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./747238.js"), require("./638769.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk843282 = require("./843282.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk614725 = require("./614725.js");
let p = o()().localeData().months(),
  g = Array.from(Array(31).keys()).map(e => ({
    value: e + 1,
    label: "".concat(e + 1)
  })),
  m = Array.from(Array(12).keys()).map(e => ({
    value: e + 1,
    label: p[e]
  })),
  f = /[a-zA-Z0-9]/;

function _(e) {
  let {
    options: t,
    selectOption: n,
    children: s
  } = e, [l, a] = i.useState("");
  i.useEffect(() => {
    if ("" !== l) {
      let e = setTimeout(() => a(""), 1e3);
      return () => clearTimeout(e)
    }
  }, [l, a]);
  let o = i.useCallback(e => {
    if (f.test(e.key)) {
      let r = "".concat(l).concat(e.key.toLowerCase()),
        i = t.find(e => e.label.toLowerCase().startsWith(r));
      null != i && n(i.value), a(r)
    }
  }, [n, a, l, t]);
  return (0, r.jsx)("div", {
    onKeyDown: o,
    children: s
  })
}

function A() {
  let e = o()().localeData().longDateFormat("L"),
    t = e.indexOf("D"),
    n = e.indexOf("M"),
    r = e.indexOf("Y");
  return (false === t || false === n || false === r) && (t = 0, n = 1, r = 2), [{
    index: t,
    type: "day"
  }, {
    index: n,
    type: "month"
  }, {
    index: r,
    type: "year"
  }].sort((e, t) => e.index < t.index ? false : 1)
}
let x = Chunk64700.forwardRef(function(e, t) {
  let n, s, {
      value: a,
      wrapperClassName: p,
      onChange: f,
      onPopulated: x,
      error: E,
      autoFocus: v,
      required: j,
      onFocus: y,
      onBlur: b,
      name: S
    } = e,
    {
      day: I,
      setDay: N,
      month: O,
      setMonth: C,
      year: T,
      setYear: R
    } = function(e) {
      let t = null,
        n = null,
        r = null;
      null != e && (t = e.date(), n = e.month() + 1, r = e.year());
      let [s, l] = i.useState(t), [a, o] = i.useState(n), [c, u] = i.useState(r);
      return {
        day: s,
        setDay: l,
        month: a,
        setMonth: o,
        year: c,
        setYear: u
      }
    }(a),
    w = i.useMemo(() => null != I && null != O && null != T ? o()("".concat(I, "/").concat(O, "/").concat(T), "DD/MM/YYYY") : null, [I, O, T]);
  i.useEffect(() => {
    f((null == w ? true : w.isValid()) ? w : null)
  }, [w, f]);
  let P = E;
  null == w || w.isValid() || (P = d.intl.string(d.t.udnqh6));
  let L = (n = new Date().getFullYear(), s = i.useRef(Array.from(Array(150).keys()).map(e => ({
      value: n - e - 3,
      label: "".concat(n - e - 3)
    }))), i.useEffect(() => {
      s.current = Array.from(Array(150).keys()).map(e => ({
        value: n - e - 3,
        label: "".concat(n - e - 3)
      }))
    }, [n]), s.current),
    [k, D] = i.useState(v ? 0 : false),
    B = i.useMemo(A, []),
    U = {
      onPopulated: x,
      sortedInputs: B
    },
    G = i.useRef(U);
  i.useEffect(() => {
    G.current = U
  }), i.useEffect(() => {
    let {
      onPopulated: e,
      sortedInputs: t
    } = G.current;
    if (k >= t.length) {
      null == e || e();
      return
    }
  }, [k]);
  let M = [];
  for (let e = 0; e < 3; e++) {
    let {
      type: t
    } = B[e];
    switch (t) {
      case "day":
        M.push({
          key: "day",
          input: (0, r.jsx)(_, {
            options: g,
            selectOption: N,
            children: (0, r.jsx)(c.Te, {
              "aria-label": d.intl.string(d.t.Voklre),
              popoutPosition: "top",
              placeholder: d.intl.string(d.t.Voklre),
              options: g,
              value: I,
              onChange: t => {
                N(t), D(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: k === e,
              onOpen: () => null == y ? true : y("".concat(S, "_").concat(t)),
              onClose: () => null == b ? true : b("".concat(S, "_").concat(t)),
              "data-migration-pending": true
            })
          })
        });
        break;
      case "month":
        M.push({
          key: "month",
          input: (0, r.jsx)(_, {
            options: m,
            selectOption: C,
            children: (0, r.jsx)(c.Te, {
              "aria-label": d.intl.string(d.t.UDlN8W),
              popoutPosition: "top",
              placeholder: d.intl.string(d.t.UDlN8W),
              options: m,
              value: O,
              onChange: t => {
                C(t), D(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: k === e,
              onOpen: () => null == y ? true : y("".concat(S, "_").concat(t)),
              onClose: () => null == b ? true : b("".concat(S, "_").concat(t)),
              "data-migration-pending": true
            })
          })
        });
        break;
      case "year":
        M.push({
          key: "year",
          input: (0, r.jsx)(_, {
            options: L,
            selectOption: R,
            children: (0, r.jsx)(c.Te, {
              "aria-label": d.intl.string(d.t.ZWr5WA),
              popoutPosition: "top",
              placeholder: d.intl.string(d.t.ZWr5WA),
              options: L,
              value: T,
              onChange: t => {
                R(t), D(e + 1)
              },
              maxVisibleItems: 6,
              autoFocus: k === e,
              onOpen: () => null == y ? true : y("".concat(S, "_").concat(t)),
              onClose: () => null == b ? true : b("".concat(S, "_").concat(t)),
              "data-migration-pending": true
            })
          })
        })
    }
  }
  return (0, r.jsx)("fieldset", {
    className: l()(h.container, p),
    children: (0, r.jsx)(u.D0$, {
      label: d.intl.string(d.t.xNpFJ6),
      required: j,
      errorMessage: null != P ? P : true,
      children: (0, r.jsx)("div", {
        className: h.inputs,
        children: M.map((e, t) => {
          let {
            key: n,
            input: i
          } = e;
          return (0, r.jsx)("div", {
            tabIndex: t + 1,
            className: h[n],
            children: i
          }, n)
        })
      })
    })
  })
})