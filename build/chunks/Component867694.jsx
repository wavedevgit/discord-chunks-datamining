/** Chunk was on 47129 **/
/** chunk id: 867694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk471141 = require("./471141.jsx"),
  Chunk601857 = require("./601857.js");

function o(e) {
  var t;
  let {
    node: n
  } = e, {
    useValue: o,
    setValue: s,
    useTitle: a,
    useSubtitle: u,
    useDisabled: c,
    useTooltip: d
  } = n, f = a(), g = null == u ? true : u(), O = o(), y = null != (t = null == c ? true : c()) && t, E = null == d ? true : d();
  return (0, r.jsx)(i.j, {
    value: O,
    onChange: e => s(e),
    className: l.toggle,
    note: g,
    disabled: y,
    tooltipNote: E,
    hideBorder: true,
    children: f
  })
}