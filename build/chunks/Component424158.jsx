/** Chunk was on web.js **/
/** chunk id: 424158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk836636 = require("./836636.js");

function s(e) {
  let {
    label: t,
    description: n,
    component: s,
    renderComponent: l
  } = e, c = (0, o.h4)(s);
  return (0, r.jsxs)(i.xJW, {
    title: t,
    required: s.required,
    error: c,
    titleClassName: a.title,
    children: [null != n && (0, r.jsx)(i.R94, {
      type: i.geA.DESCRIPTION,
      className: a.description,
      children: n
    }), l(s, "label-child")]
  })
}