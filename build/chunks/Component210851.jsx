/** Chunk was on 10150 **/
/** chunk id: 210851, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk763610 = require("./763610.jsx"),
  Chunk188764 = require("./188764.js");
let o = function(e) {
  var t, s;
  let {
    assetKey: o,
    filters: c,
    initialValue: u,
    onFileChange: d,
    title: g
  } = e, [f, h] = r.useState(null), m = r.useRef(null);
  return r.useEffect(() => () => {
    null != m.current && URL.revokeObjectURL(m.current)
  }, []), (0, n.jsxs)(a.xJW, {
    children: [(0, n.jsx)(a.vwX, {
      children: (0, n.jsxs)("div", {
        className: l.headingWithTooltip,
        children: [g, (0, n.jsx)(a.ua7, {
          text: "Supported asset formats: ".concat(c.join(", ")),
          children: e => (0, n.jsx)(a.d3s, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(s);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = s[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({
            size: "xs"
          }, e))
        })]
      })
    }), (0, n.jsx)(i.Z, {
      filename: null != (s = null != (t = null == f ? true : f.name) ? t : u) ? s : "",
      filters: [{
        name: g,
        extensions: c
      }],
      buttonText: "Browse",
      placeholder: "Select an asset",
      onFileSelect: function(e) {
        if (h(null != e ? e : null), null == e) return;
        let t = URL.createObjectURL(e);
        m.current = t;
        let s = new URL(t);
        s.searchParams.append("mimetype", e.type), s.searchParams.append("name", e.name), d(o, s.toString())
      }
    })]
  })
}