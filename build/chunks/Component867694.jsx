/** Chunk was on 76210 **/
/** chunk id: 867694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk471141 = require("./471141.jsx"),
  Chunk2644 = require("./2644.js");

function s(e) {
  var t;
  let {
    node: n
  } = e, {
    useValue: s,
    setValue: u,
    useTitle: o,
    useSubtitle: a,
    useDisabled: c,
    useTooltip: d
  } = n, f = o(), g = null == a ? true : a(), v = s(), m = null != (t = null == c ? true : c()) && t, j = null == d ? true : d();
  return (0, l.jsx)(i.j, {
    value: v,
    onChange: e => u(e),
    className: r.toggle,
    note: g,
    disabled: m,
    tooltipNote: j,
    hideBorder: true,
    children: f
  })
}