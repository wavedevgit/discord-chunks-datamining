/** Chunk was on 3408 **/
/** chunk id: 210851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk763610 = require("./763610.jsx"),
  Chunk745776 = require("./745776.js");
let c = function(e) {
  var t, n;
  let {
    assetKey: c,
    filters: d,
    initialValue: u,
    onFileChange: p,
    title: m
  } = e, [g, f] = s.useState(null), h = s.useRef(null);
  return s.useEffect(() => () => {
    null != h.current && URL.revokeObjectURL(h.current)
  }, []), (0, r.jsxs)(a.xJW, {
    children: [(0, r.jsx)(a.vwX, {
      children: (0, r.jsxs)("div", {
        className: l.headingWithTooltip,
        children: [m, (0, r.jsx)(o.u, {
          text: "Supported asset formats: ".concat(d.join(", ")),
          children: (0, r.jsx)(a.d3s, {
            size: "xs"
          })
        })]
      })
    }), (0, r.jsx)(i.Z, {
      filename: null != (n = null != (t = null == g ? true : g.name) ? t : u) ? n : "",
      filters: [{
        name: m,
        extensions: d
      }],
      buttonText: "Browse",
      placeholder: "Select an asset",
      onFileSelect: function(e) {
        if (f(null != e ? e : null), null == e) return;
        let t = URL.createObjectURL(e);
        h.current = t;
        let n = new URL(t);
        n.searchParams.append("mimetype", e.type), n.searchParams.append("name", e.name), p(c, n.toString())
      }
    })]
  })
}