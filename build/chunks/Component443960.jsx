/** Chunk was on 90228 **/
/** chunk id: 443960, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk643374 = require("./643374.jsx");
let s = function(e) {
  var t, n;
  let {
    assetKey: s,
    filters: o,
    initialValue: c,
    onFileChange: d,
    title: u
  } = e, [m, p] = l.useState(null), h = l.useRef(null);
  return l.useEffect(() => () => {
    null != h.current && URL.revokeObjectURL(h.current)
  }, []), (0, a.jsx)(r.D0$, {
    label: u,
    description: "Supported asset formats: ".concat(o.join(", ")),
    children: (0, a.jsx)(i.A, {
      filename: null != (t = null != (n = null == m ? true : m.name) ? n : c) ? t : "",
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