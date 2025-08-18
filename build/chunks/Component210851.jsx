/** Chunk was on 21046 **/
/** chunk id: 210851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk763610 = require("./763610.jsx"),
  Chunk301188 = require("./301188.js");
let l = function(e) {
  var t, n;
  let {
    assetKey: l,
    filters: c,
    initialValue: d,
    onFileChange: u,
    title: p
  } = e, [m, f] = s.useState(null), g = s.useRef(null);
  return s.useEffect(() => () => {
    null != g.current && URL.revokeObjectURL(g.current)
  }, []), (0, r.jsxs)(o.xJW, {
    children: [(0, r.jsx)(o.vwX, {
      tag: o.RB0.H5,
      children: (0, r.jsxs)("div", {
        className: i.headingWithTooltip,
        children: [p, (0, r.jsx)(o.ua7, {
          text: "Supported asset formats: ".concat(c.join(", ")),
          children: e => (0, r.jsx)(o.d3s, function(e) {
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
          }({
            size: "xs"
          }, e))
        })]
      })
    }), (0, r.jsx)(a.Z, {
      filename: null != (n = null != (t = null == m ? true : m.name) ? t : d) ? n : "",
      filters: [{
        name: p,
        extensions: c
      }],
      buttonText: "Browse",
      placeholder: "Select an asset",
      onFileSelect: function(e) {
        if (f(null != e ? e : null), null == e) return;
        let t = URL.createObjectURL(e);
        g.current = t;
        let n = new URL(t);
        n.searchParams.append("mimetype", e.type), n.searchParams.append("name", e.name), u(l, n.toString())
      }
    })]
  })
}