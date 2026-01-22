/** Chunk was on web.js **/
/** chunk id: 559506, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk922590 = require("./922590.js"),
  Chunk622543 = require("./622543.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    userId: t,
    className: n
  } = e, c = (0, s.f1)(t), u = (0, s.fi)(t), d = (0, i.bG)([o.A], () => {
    var e;
    return null == (e = o.A.getUserProfile(t)) ? true : e.fetchError
  });
  return c.length > 0 || u.length > 0 || null == d ? null : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(a.wx6, {
      type: "warning",
      children: l.intl.string(l.t.p3Q9Y2)
    })
  })
}