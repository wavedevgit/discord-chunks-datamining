/** Chunk was on web.js **/
/** chunk id: 126341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk424046 = require("./424046.js"),
  Chunk89199 = require("./89199.js");
class o {
  refine(e, t) {
    return e.option.forwardDate && t.forEach(t => {
      let n = e.reference.getDateWithAdjustedTimezone();
      if (t.start.isOnlyTime() && e.reference.instant > t.start.date()) {
        let n = e.reference.getDateWithAdjustedTimezone(),
          i = new Date(n);
        i.setDate(i.getDate() + 1), r.YY(t.start, i), e.debug(() => {
          console.log(`${this.constructor.name} adjusted ${t} time from the ref date (${n}) to the following day (${i})`)
        }), t.end && t.end.isOnlyTime() && (r.YY(t.end, i), t.start.date() > t.end.date() && (i.setDate(i.getDate() + 1), r.YY(t.end, i)))
      }
      if (t.start.isOnlyWeekdayComponent() && n > t.start.date()) {
        let o = t.start.get("weekday") - n.getDay();
        if (o <= 0 && (o += 7), n = (0, i.WK)(n, {
            day: o
          }), (0, r.YY)(t.start, n), e.debug(() => {
            console.log(`${this.constructor.name} adjusted ${t} weekday (${t.start})`)
          }), t.end && t.end.isOnlyWeekdayComponent()) {
          let o = t.end.get("weekday") - n.getDay();
          o <= 0 && (o += 7), n = (0, i.WK)(n, {
            day: o
          }), (0, r.YY)(t.end, n), e.debug(() => {
            console.log(`${this.constructor.name} adjusted ${t} weekday (${t.end})`)
          })
        }
      }
      if (t.start.isDateWithUnknownYear() && n > t.start.date())
        for (let r = 0; r < 3 && n > t.start.date(); r++) t.start.imply("year", t.start.get("year") + 1), e.debug(() => {
          console.log(`${this.constructor.name} adjusted ${t} year (${t.start})`)
        }), t.end && !t.end.isCertain("year") && (t.end.imply("year", t.end.get("year") + 1), e.debug(() => {
          console.log(`${this.constructor.name} adjusted ${t} month (${t.start})`)
        }))
    }), t
  }
}