/** Chunk was on web.js **/
/** chunk id: 446673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => d,
  R: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk580309 = require("./580309.js");
let c = e => {
  switch (e) {
    case "new":
      return s.intl.string(s.t.y2b7CA);
    case "beta":
      return s.intl.string(s.t.oW0eUV);
    case "early_access":
      return s.intl.string(s.t.EYxi0t);
    case "free_trial":
      return s.intl.string(s.t.IBYG5e);
    default:
      return e.text
  }
};

function u(e) {
  return "string" == typeof e || e.hasOwnProperty("text") ? {
    type: e
  } : e
}

function d(e) {
  let {
    type: t,
    variant: n = "default"
  } = e;
  return (0, r.jsx)(o.Text, {
    variant: "eyebrow",
    className: a()(l.badge, l[n]),
    children: c(t)
  })
}