/** Chunk was on web.js **/
/** chunk id: 503163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk19467 = require("./19467.js");
class i extends Chunk19467.w {
  strictMode;
  constructor(e) {
    super(), this.strictMode = e
  }
  isValid(e, t) {
    return t.text.replace(" ", "").match(/^\d*(\.\d*)?$/) ? (e.debug(() => {
      console.log(`Removing unlikely result '${t.text}'`)
    }), false) : t.start.isValidDate() ? t.end && !t.end.isValidDate() ? (e.debug(() => {
      console.log(`Removing invalid result: ${t} (${t.end})`)
    }), false) : !this.strictMode || this.isStrictModeValid(e, t) : (e.debug(() => {
      console.log(`Removing invalid result: ${t} (${t.start})`)
    }), false)
  }
  isStrictModeValid(e, t) {
    return !t.start.isOnlyWeekdayComponent() || (e.debug(() => {
      console.log(`(Strict) Removing weekday only component: ${t} (${t.end})`)
    }), false)
  }
}