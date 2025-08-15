/** Chunk was on web.js **/
/** chunk id: 446673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => l
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk580309 = require("./580309.js");
let s = e => {
  switch (e) {
    case "new":
      return a.intl.string(a.t.y2b7CA);
    case "beta":
      return a.intl.string(a.t.oW0eUV);
    case "early_access":
      return a.intl.string(a.t.EYxi0t);
    case "free_trial":
      return a.intl.string(a.t.IBYG5e);
    default:
      return e.text
  }
};

function l(e) {
  let {
    badge: t
  } = e;
  return (0, r.jsx)(i.Text, {
    variant: "eyebrow",
    className: o.badge,
    children: s(t)
  })
}