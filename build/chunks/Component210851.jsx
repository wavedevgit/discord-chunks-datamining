/** Chunk was on 50433 **/
/** chunk id: 210851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk763610 = require("./763610.jsx");
let i = function(e) {
  var t, n;
  let {
    assetKey: i,
    filters: l,
    initialValue: c,
    onFileChange: d,
    title: u
  } = e, [p, m] = s.useState(null), g = s.useRef(null);
  return s.useEffect(() => () => {
    null != g.current && URL.revokeObjectURL(g.current)
  }, []), (0, r.jsx)(o.gNt, {
    label: u,
    description: "Supported asset formats: ".concat(l.join(", ")),
    children: (0, r.jsx)(a.Z, {
      filename: null != (n = null != (t = null == p ? true : p.name) ? t : c) ? n : "",
      filters: [{
        name: u,
        extensions: l
      }],
      buttonText: "Browse",
      placeholder: "Select an asset",
      onFileSelect: function(e) {
        if (m(null != e ? e : null), null == e) return;
        let t = URL.createObjectURL(e);
        g.current = t;
        let n = new URL(t);
        n.searchParams.append("mimetype", e.type), n.searchParams.append("name", e.name), d(i, n.toString())
      }
    })
  })
}