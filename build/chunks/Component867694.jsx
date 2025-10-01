/** Chunk was on 54573 **/
/** chunk id: 867694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk471141 = require("./471141.jsx"),
  Chunk601857 = require("./601857.js");

function i(e) {
  var t;
  let {
    node: n
  } = e, {
    useValue: i,
    setValue: a,
    useTitle: s,
    useSubtitle: c,
    useDisabled: u,
    useTooltip: d
  } = n, f = s(), b = null == c ? true : c(), m = i(), p = null != (t = null == u ? true : u()) && t, j = null == d ? true : d();
  return (0, r.jsx)(o.j, {
    value: m,
    onChange: e => a(e),
    className: l.toggle,
    note: b,
    disabled: p,
    tooltipNote: j,
    hideBorder: true,
    children: f
  })
}