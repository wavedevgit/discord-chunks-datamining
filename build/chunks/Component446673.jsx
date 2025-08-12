/** Chunk was on web.js **/
/** chunk id: 446673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => l
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk672469 = require("./672469.js");
let s = e => {
  switch (e) {
    case "new":
      return o.intl.string(o.t.y2b7CA);
    case "beta":
      return o.intl.string(o.t.oW0eUV);
    case "early_access":
      return o.intl.string(o.t.EYxi0t);
    case "free_trial":
      return o.intl.string(o.t.IBYG5e);
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
    className: a.badge,
    children: s(t)
  })
}