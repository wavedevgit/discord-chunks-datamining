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
    setValue: a,
    useTitle: s,
    useSubtitle: u,
    useDisabled: c,
    useTooltip: d
  } = n, _ = s(), E = null == u ? true : u(), N = o(), g = null != (t = null == c ? true : c()) && t, f = null == d ? true : d();
  return (0, i.jsx)(r.j, {
    value: N,
    onChange: e => a(e),
    className: l.toggle,
    note: E,
    disabled: g,
    tooltipNote: f,
    hideBorder: true,
    children: _
  })
}