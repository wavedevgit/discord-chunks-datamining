/** Chunk was on 49559 **/
/** chunk id: 183924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk518774 = require("./518774.js");

function s(e) {
  let {
    label: t,
    description: n,
    component: s,
    renderComponent: c
  } = e, u = (0, i.bO)(s);
  return s.type === a.I5.CHECKBOX ? c(s, "label-child") : (0, r.jsxs)(l.eIh, {
    title: t,
    required: s.required,
    error: u,
    children: [null != n && (0, r.jsx)(l.ayl, {
      type: l.tiu.DESCRIPTION,
      className: o.h,
      children: n
    }), c(s, "label-child")]
  })
}