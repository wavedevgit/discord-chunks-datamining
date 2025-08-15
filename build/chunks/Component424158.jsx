/** Chunk was on 30243 **/
/** chunk id: 424158, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk836636 = require("./836636.js");

function a(e) {
  let {
    label: t,
    description: r,
    component: a,
    renderComponent: c
  } = e, s = (0, i.h4)(a);
  return (0, n.jsxs)(l.xJW, {
    title: t,
    required: a.required,
    error: s,
    titleClassName: o.title,
    children: [null != r && (0, n.jsx)(l.R94, {
      type: l.geA.DESCRIPTION,
      className: o.description,
      children: r
    }), c(a, "label-child")]
  })
}