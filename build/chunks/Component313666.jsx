/** Chunk was on web.js **/
/** chunk id: 313666, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => d,
  R: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk402453 = require("./402453.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk957618 = require("./957618.js");
let c = (e, t) => {
  switch (e) {
    case "new":
      return t.NEW;
    case "beta":
      return t.BETA;
    case "early_access":
      return t.EARLY_ACCESS;
    case "free_trial":
      return t.BILLING_TRIAL_FREE_TRIAL_TEXT;
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
  } = e, {
    i18n: i
  } = (0, o.ZF)();
  return (0, r.jsx)(s.x, {
    variant: "eyebrow",
    className: a()(l.badge, l[n]),
    children: c(t, i)
  })
}