/** Chunk was on 36878 **/
/** chunk id: 867694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk471141 = require("./471141.jsx"),
  Chunk299305 = require("./299305.js");

function o(e) {
  var t;
  let {
    node: n
  } = e, {
    useValue: o,
    setValue: a,
    useTitle: r,
    useSubtitle: u,
    useDisabled: c,
    useTooltip: d
  } = n, f = r(), g = null == u ? true : u(), m = o(), v = null != (t = null == c ? true : c()) && t, b = null == d ? true : d();
  return (0, i.jsx)(l.j, {
    value: m,
    onChange: e => a(e),
    className: s.toggle,
    note: g,
    disabled: v,
    tooltipNote: b,
    hideBorder: true,
    children: f
  })
}