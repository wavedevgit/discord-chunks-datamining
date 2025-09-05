/** Chunk was on web.js **/
/** chunk id: 210851, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk763610 = require("./763610.jsx"),
  Chunk301188 = require("./301188.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = function(e) {
  var t, n;
  let {
    assetKey: l,
    filters: u,
    initialValue: d,
    onFileChange: f,
    title: _
  } = e, [p, h] = i.useState(null), m = i.useRef(null);

  function g(e) {
    if (h(null != e ? e : null), null == e) return;
    let t = URL.createObjectURL(e);
    m.current = t;
    let n = new URL(t);
    n.searchParams.append("mimetype", e.type), n.searchParams.append("name", e.name), f(l, n.toString())
  }
  return i.useEffect(() => () => {
    null != m.current && URL.revokeObjectURL(m.current)
  }, []), (0, r.jsxs)(a.xJW, {
    children: [(0, r.jsx)(a.vwX, {
      tag: a.RB0.H5,
      children: (0, r.jsxs)("div", {
        className: s.headingWithTooltip,
        children: [_, (0, r.jsx)(a.ua7, {
          text: "Supported asset formats: ".concat(u.join(", ")),
          children: e => (0, r.jsx)(a.d3s, c({
            size: "xs"
          }, e))
        })]
      })
    }), (0, r.jsx)(o.Z, {
      filename: null != (n = null != (t = null == p ? true : p.name) ? t : d) ? n : "",
      filters: [{
        name: _,
        extensions: u
      }],
      buttonText: "Browse",
      placeholder: "Select an asset",
      onFileSelect: g
    })]
  })
}