/** Chunk was on web.js **/
/** chunk id: 882072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk529200 = require("./529200.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk4274 = require("./4274.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  var t, n;
  let {
    author: c,
    inviteError: u
  } = e, d = (0, i.bG)([s.default], () => s.default.getId()) === c.id ? l.intl.string(l.t.C89OLE) : l.intl.string(l.t.YVub5y), f = (0, o.g)(null == u ? true : u.code);
  return (0, r.jsxs)(a.A, {
    children: [(0, r.jsx)(a.A.Header, {
      text: d
    }), (0, r.jsxs)(a.A.Body, {
      children: [(0, r.jsx)(a.A.Icon, {
        expired: true
      }), (0, r.jsx)(a.A.Info, {
        expired: true,
        title: null != (t = null == f ? true : f.title) ? t : l.intl.string(l.t["Jhx/ud"]),
        children: null != (n = null == f ? true : f.description) ? n : null == u ? true : u.message
      })]
    })]
  })
}