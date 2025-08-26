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
    setValue: a,
    useTitle: o,
    useSubtitle: u,
    useDisabled: c,
    useTooltip: d
  } = n, T = o(), O = null == u ? true : u(), f = s(), N = null != (t = null == c ? true : c()) && t, I = null == d ? true : d();
  return (0, l.jsx)(i.j, {
    value: f,
    onChange: e => a(e),
    className: r.toggle,
    note: O,
    disabled: N,
    tooltipNote: I,
    hideBorder: true,
    children: T
  })
}