/** Chunk was on 36878 **/
/** chunk id: 867694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => r
});
var Chunk951288 = require("./951288.js"),
  Chunk471141 = require("./471141.jsx"),
  Chunk2644 = require("./2644.js");

function r(e) {
  var t;
  let {
    node: n
  } = e, {
    useValue: r,
    setValue: s,
    useTitle: a,
    useSubtitle: u,
    useDisabled: c,
    useTooltip: d
  } = n, f = a(), g = null == u ? true : u(), v = r(), m = null != (t = null == c ? true : c()) && t, b = null == d ? true : d();
  return (0, i.jsx)(l.j, {
    value: v,
    onChange: e => s(e),
    className: o.toggle,
    note: g,
    disabled: m,
    tooltipNote: b,
    hideBorder: true,
    children: f
  })
}