/** Chunk was on web.js **/
/** chunk id: 218075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => o,
  j: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk39919 = require("./39919.js"),
  o = function(e) {
    return e.SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD", e.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD", e
  }({});

function l(e) {
  let {
    paymentRestrictionBannerType: t
  } = e, n = "";
  if (!t) return null;
  switch (t) {
    case "SELECT_PAYMENT_METHOD":
      n = a.intl.string(a.t.Tdb5qb);
      break;
    case "ADD_NEW_PAYMENT_METHOD":
      n = a.intl.string(a.t["6d44F5"])
  }
  return (0, r.jsxs)("div", {
    className: s.Y4,
    children: [(0, r.jsxs)("div", {
      className: s.NX,
      children: [(0, r.jsx)(i.k9F, {
        size: "md",
        color: "white",
        className: s.Kk
      }), (0, r.jsx)(i.k9F, {
        size: "md",
        color: "currentColor",
        className: s.kV
      })]
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: n
    }), (0, r.jsx)("div", {
      className: s.u
    })]
  })
}