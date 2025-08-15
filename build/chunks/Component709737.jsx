/** Chunk was on web.js **/
/** chunk id: 709737, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DC: () => c,
  Js: () => u,
  ZR: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk657707 = require("./657707.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk709054 = require("./709054.js"),
  Chunk528567 = require("./528567.js");
require("./814059.js");
var Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    value: t,
    statisticId: n
  } = e, i = l.intl.formatToPlainString(l.t.yhdo8v, {
    value: t,
    statisticName: (0, s.C)(n)
  });
  return (0, r.jsx)(d, {
    text: i
  })
}

function u(e) {
  let {
    intervalStart: t,
    intervalEnd: n
  } = e, s = new Date(o.default.extractTimestamp(t)), c = new Date(o.default.extractTimestamp(n)), u = new Intl.DateTimeFormat(l.intl.currentLocale, {
    month: "numeric",
    day: "numeric"
  }).formatRange(s, c);
  return (0, r.jsx)(a.ej, {
    Icon: i.Que,
    text: u
  })
}

function d(e) {
  let {
    text: t
  } = e;
  return (0, r.jsx)(a.ej, {
    Icon: i.hAD,
    text: t
  })
}