/** Chunk was on web.js **/
/** chunk id: 647423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => l
});
var Chunk925521 = require("./925521.js"),
  Chunk227399 = require("./227399.js"),
  Chunk218769 = require("./218769.js"),
  Chunk473749 = require("./473749.js");

function s(e) {
  return e && e.__esModule ? e.default : e
}

function l() {
  let {
    locale: e
  } = (0, i.j)(), t = (0, a.K)(s(r.Z), "@react-aria/datepicker");
  return (0, o.useMemo)(() => {
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