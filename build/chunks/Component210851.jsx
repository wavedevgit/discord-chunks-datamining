/** Chunk was on 23736 **/
/** chunk id: 210851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk763610 = require("./763610.jsx");
let s = function(e) {
  var t, n;
  let {
    assetKey: s,
    filters: o,
    initialValue: c,
    onFileChange: d,
    title: u
  } = e, [m, p] = r.useState(null), h = r.useRef(null);
  return r.useEffect(() => () => {
    null != h.current && URL.revokeObjectURL(h.current)
  }, []), (0, a.jsx)(i.gNt, {
    label: u,
    description: "Supported asset formats: ".concat(o.join(", ")),
    children: (0, a.jsx)(l.Z, {
      filename: null != (n = null != (t = null == m ? true : m.name) ? t : c) ? n : "",
      filters: [{
        name: u,
        extensions: o
      }],
      buttonText: "Browse",
      placeholder: "Select an asset",
      onFileSelect: function(e) {
        if (p(null != e ? e : null), null == e) return;
        let t = URL.createObjectURL(e);
        h.current = t;
        let n = new URL(t);
        n.searchParams.append("mimetype", e.type), n.searchParams.append("name", e.name), d(s, n.toString())
      }
    })
  })
}