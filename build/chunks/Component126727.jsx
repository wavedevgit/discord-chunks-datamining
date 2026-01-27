/** Chunk was on 20941 **/
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
      label: m,
      placeholder: f,
      minLength: p,
      maxLength: h,
      required: b,
      value: g
    } = e,
    [x, y] = l.useState(null != g ? g : ""),
    {
      state: v,
      executeStateUpdate: j,
      error: C
    } = (0, s.At)(e, null != g ? {
      type: n,
      value: g
    } : true),
    _ = (0, o.FG)(e.id);
  l.useEffect(() => {
    (null == v ? true : v.type) === n && y(v.value)
  }, [n, v]);
  let A = {
    value: x,
    placeholder: f,
    minLength: p,
    maxLength: h,
    required: b,
    onChange: e => {
      y(e), j({
        type: n,
        value: e
      })
    },
    autoFocus: _
  };
  switch (d) {
    case i.qz.SMALL:
      t = (0, r.jsx)(a.ksK, u({}, A));
      break;
    case i.qz.PARAGRAPH:
      t = (0, r.jsx)(a.fs1, u({
        autosize: true
      }, A))
  }
  return null != m ? (0, r.jsx)(a.eIh, {
    title: m,
    required: b,
    className: c.k,
    error: C,
    children: t
  }) : t
}