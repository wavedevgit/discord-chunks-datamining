/** Chunk was on web.js **/
/** chunk id: 508770, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => d,
  U: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk460890 = require("./460890.jsx"),
  Chunk834730 = require("./834730.jsx"),
  Chunk769796 = require("./769796.js");
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
    type: e,
    variant: "brand"
  } : e
}

function d(e) {
  let {
    type: t,
    variant: n = "default",
    icon: i
  } = e, {
    i18n: u
  } = (0, o.G9)();
  return (0, r.jsxs)(s.E, {
    variant: "eyebrow",
    className: a()(l.badge, l[n]),
    children: [null != i && (0, r.jsx)(i, {
      size: "xxs",
      color: "currentColor"
    }), c(t, u)]
  })
}