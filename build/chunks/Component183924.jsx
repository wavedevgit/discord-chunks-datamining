/** Chunk was on web.js **/
/** chunk id: 183924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk518774 = require("./518774.js");

function l(e) {
  let {
    label: t,
    description: n,
    component: l,
    renderComponent: c
  } = e, u = (0, s.bO)(l);
  return l.type === a.I5.CHECKBOX ? c(l, "label-child") : (0, r.jsxs)(i.eIh, {
    title: t,
    required: l.required,
    error: u,
    children: [null != n && (0, r.jsx)(i.ayl, {
      type: i.tiu.DESCRIPTION,
      className: o.h,
      children: n
    }), c(l, "label-child")]
  })
}