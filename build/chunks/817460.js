/** Chunk was on web.js **/
/** chunk id: 817460, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JE: () => l,
  ab: () => a,
  iG: () => c,
  lL: () => d,
  rC: () => u
});
var Chunk293810 = require("./293810.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function s(e) {
  switch (e) {
    case i.rV.DAY:
      return o.t["3rUmPQ"];
    case i.rV.MONTH:
      return o.t.zuN545;
    case i.rV.YEAR:
      return o.t.cuSp8Q
  }
}

function l(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  return o.intl.format(s(t), {
    count: n
  })
}

function c(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  switch (t) {
    case i.rV.DAY:
      if (n > 0 && n % 7 == 0) return o.intl.formatToPlainString(o.t.iVZYyl, {
        weeks: n / 7
      });
      return o.intl.formatToPlainString(o.t.jzH70Z, {
        days: n
      });
    case i.rV.MONTH:
      return o.intl.formatToPlainString(o.t.erUSmA, {
        months: n
      });
    case i.rV.YEAR:
      return o.intl.formatToPlainString(o.t.IfYQVC, {
        years: n
      })
  }
}

function u(e) {
  return e.ref_type === r.Qs.CHANNEL
}

function d(e) {
  return e.ref_type === r.Qs.INTANGIBLE
}