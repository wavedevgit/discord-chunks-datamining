/** Chunk was on web.js **/
/** chunk id: 294819, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => l
});
var Chunk908909 = require("./908909.js"),
  Chunk853590 = require("./853590.js"),
  Chunk47276 = require("./47276.js"),
  Chunk64700 = require("./64700.js");

function o(e) {
  return e && e.__esModule ? e.default : e
}

function l() {
  let {
    locale: e
  } = (0, i.Y)(), t = (0, a.e)(o(r.A), "@react-aria/datepicker");
  return (0, s.useMemo)(() => {
    try {
      return new Intl.DisplayNames(e, {
        type: "dateTimeField"
      })
    } catch {
      return new c(e, t)
    }
  }, [e, t])
}
class c {
  of(e) {
    return this.dictionary.getStringForLocale(e, this.locale)
  }
  constructor(e, t) {
    this.locale = e, this.dictionary = t
  }
}