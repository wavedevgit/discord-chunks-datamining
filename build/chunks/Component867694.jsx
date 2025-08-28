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
  } = n, _ = a(), E = null == u ? true : u(), f = o(), N = null != (t = null == c ? true : c()) && t, T = null == d ? true : d();
  return (0, i.jsx)(r.j, {
    value: f,
    onChange: e => s(e),
    className: l.toggle,
    note: E,
    disabled: N,
    tooltipNote: T,
    hideBorder: true,
    children: _
  })
}