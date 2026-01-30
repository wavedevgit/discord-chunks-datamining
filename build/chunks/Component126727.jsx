/** Chunk was on 49559 **/
/** chunk id: 126727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk969508 = require("./969508.js"),
  Chunk717820 = require("./717820.js");

function u(e) {
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

function d(e) {
  let t, {
      type: n,
      style: d,
      label: p,
      placeholder: m,
      minLength: f,
      maxLength: O,
      required: b,
      value: y
    } = e,
    [h, j] = l.useState(null != y ? y : ""),
    {
      state: g,
      executeStateUpdate: A,
      error: v
    } = (0, o.At)(e, null != y ? {
      type: n,
      value: y
    } : true),
    E = (0, s.FG)(e.id);
  l.useEffect(() => {
    (null == g ? true : g.type) === n && j(g.value)
  }, [n, g]);
  let C = {
    value: h,
    placeholder: m,
    minLength: f,
    maxLength: O,
    required: b,
    onChange: e => {
      j(e), A({
        type: n,
        value: e
      })
    },
    autoFocus: E
  };
  switch (d) {
    case i.qz.SMALL:
      t = (0, r.jsx)(a.ksK, u({}, C));
      break;
    case i.qz.PARAGRAPH:
      t = (0, r.jsx)(a.fs1, u({
        autosize: true
      }, C))
  }
  return null != p ? (0, r.jsx)(a.eIh, {
    title: p,
    required: b,
    className: c.k,
    error: v,
    children: t
  }) : t
}