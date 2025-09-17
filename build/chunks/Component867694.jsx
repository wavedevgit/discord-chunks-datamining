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
    setValue: a,
    useTitle: s,
    useSubtitle: u,
    useDisabled: c,
    useTooltip: d
  } = n, g = s(), f = null == u ? true : u(), y = o(), O = null != (t = null == c ? true : c()) && t, E = null == d ? true : d();
  return (0, r.jsx)(i.j, {
    value: y,
    onChange: e => a(e),
    className: l.toggle,
    note: f,
    disabled: O,
    tooltipNote: E,
    hideBorder: true,
    children: g
  })
}