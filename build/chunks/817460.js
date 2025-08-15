/** Chunk was on 81498 **/
/** chunk id: 817460, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  JE: () => o,
  ab: () => l,
  iG: () => a,
  lL: () => c,
  rC: () => u
});
var Chunk293810 = require("./293810.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function o(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  return s.intl.format(function(e) {
    switch (e) {
      case r.rV.DAY:
        return s.t["3rUmPT"];
      case r.rV.MONTH:
        return s.t["zuN54+"];
      case r.rV.YEAR:
        return s.t.cuSp8f
    }
  }(t), {
    count: n
  })
}

function a(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  switch (t) {
    case r.rV.DAY:
      if (n > 0 && n % 7 == 0) return s.intl.formatToPlainString(s.t.iVZYys, {
        weeks: n / 7
      });
      return s.intl.formatToPlainString(s.t.jzH70d, {
        days: n
      });
    case r.rV.MONTH:
      return s.intl.formatToPlainString(s.t.erUSmJ, {
        months: n
      });
    case r.rV.YEAR:
      return s.intl.formatToPlainString(s.t.IfYQVF, {
        years: n
      })
  }
}

function u(e) {
  return e.ref_type === i.Qs.CHANNEL
}

function c(e) {
  return e.ref_type === i.Qs.INTANGIBLE
}