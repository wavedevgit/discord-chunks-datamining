/** Chunk was on web.js **/
/** chunk id: 998163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => l
});
var Chunk616868 = require("./616868.js"),
  Chunk594886 = require("./594886.js"),
  Chunk970185 = require("./970185.js"),
  Chunk647438 = require("./647438.js");

function s(e) {
  return e && e.__esModule ? e.default : e
}

function l() {
  let {
    locale: e
  } = (0, Chunk594886.j)(), t = (0, Chunk970185.K)(s(Chunk616868.Z), "@react-aria/datepicker");
  return (0, Chunk647438.useMemo)(() => {
    try {
      return new Intl.DisplayNames(module, {
        type: "dateTimeField"
      })
    } catch {
      return new c(module, exports)
    }
  }, [module, exports])
}
class c {
  of(e) {
    return this.dictionary.getStringForLocale(e, this.locale)
  }
  constructor(e, t) {
    this.locale = e, this.dictionary = t
  }
}