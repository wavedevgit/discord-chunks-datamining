/** Chunk was on 30243 **/
/** chunk id: 889515, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk739754 = require("./739754.jsx"),
  Chunk970184 = require("./970184.jsx"),
  Chunk520525 = require("./520525.js");

function a(e) {
  let {
    components: t,
    renderComponents: r
  } = e, {
    message: a
  } = (0, i.CJ)();
  return null == t || 0 === t.length ? null : (0, n.jsxs)("div", {
    className: o.container,
    children: [(0, n.jsx)("div", {
      className: o.children,
      children: r(t)
    }), null != a ? (0, n.jsx)(l.ZP, {
      className: o.error,
      message: a,
      component: e
    }) : null]
  })
}