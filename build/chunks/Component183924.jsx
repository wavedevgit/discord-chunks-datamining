/** Chunk was on 20941 **/
/** chunk id: 183924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk518774 = require("./518774.js");

function o(e) {
  let {
    label: t,
    description: n,
    component: o,
    renderComponent: c
  } = e, u = (0, i.bO)(o);
  return o.type === a.I5.CHECKBOX ? c(o, "label-child") : (0, r.jsxs)(l.eIh, {
    title: t,
    required: o.required,
    error: u,
    children: [null != n && (0, r.jsx)(l.ayl, {
      type: l.tiu.DESCRIPTION,
      className: s.h,
      children: n
    }), c(o, "label-child")]
  })
}