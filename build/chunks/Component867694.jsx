/** Chunk was on 47129 **/
/** chunk id: 867694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk471141 = require("./471141.jsx"),
  Chunk2644 = require("./2644.js");

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
  } = n, g = a(), f = null == u ? true : u(), y = o(), v = null != (t = null == c ? true : c()) && t, E = null == d ? true : d();
  return (0, r.jsx)(l.j, {
    value: y,
    onChange: e => s(e),
    className: i.toggle,
    note: f,
    disabled: v,
    tooltipNote: E,
    hideBorder: true,
    children: g
  })
}