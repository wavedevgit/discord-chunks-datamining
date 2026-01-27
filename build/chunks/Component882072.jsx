/** Chunk was on 92917 **/
/** chunk id: 882072, original params: e,t,n (module,exports,require) **/
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
  } = e, d = (0, i.bG)([a.default], () => a.default.getId()) === c.id ? o.intl.string(o.t.C89OLE) : o.intl.string(o.t.YVub5y), p = (0, s.g)(null == u ? true : u.code);
  return (0, r.jsxs)(l.A, {
    children: [(0, r.jsx)(l.A.Header, {
      text: d
    }), (0, r.jsxs)(l.A.Body, {
      children: [(0, r.jsx)(l.A.Icon, {
        expired: true
      }), (0, r.jsx)(l.A.Info, {
        expired: true,
        title: null != (t = null == p ? true : p.title) ? t : o.intl.string(o.t["Jhx/ud"]),
        children: null != (n = null == p ? true : p.description) ? n : null == u ? true : u.message
      })]
    })]
  })
}