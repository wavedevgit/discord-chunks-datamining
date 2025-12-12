/** Chunk was on web.js **/
/** chunk id: 86465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G5: () => l,
  L: () => s,
  X2: () => o
});
var Chunk424046 = require("./424046.js"),
  Chunk563641 = require("./563641.js"),
  Chunk89199 = require("./89199.js");
class o {
  instant;
  timezoneOffset;
  constructor(e, t) {
    this.instant = e ?? new Date, this.timezoneOffset = t ?? null
  }
  static fromDate(e) {
    return new o(e)
  }
  static fromInput(e, t) {
    if (e instanceof Date) return o.fromDate(e);
    let n = e?.instant ?? new Date,
      r = (0, i.XP)(e?.timezone, n, t);
    return new o(n, r)
  }
  getDateWithAdjustedTimezone() {
    let e = new Date(this.instant);
    return null !== this.timezoneOffset && module.setMinutes(module.getMinutes() - this.getSystemTimezoneAdjustmentMinute(this.instant)), module
  }
  getSystemTimezoneAdjustmentMinute(e, t) {
    (!e || 0 > e.getTime()) && (e = new Date);
    let n = -e.getTimezoneOffset(),
      r = t ?? this.timezoneOffset ?? n;
    return n - r
  }
  getTimezoneOffset() {
    return this.timezoneOffset ?? -this.instant.getTimezoneOffset()
  }
}
class s {
  knownValues;
  impliedValues;
  reference;
  _tags = new Set;
  constructor(e, t) {
    if (this.reference = e, this.knownValues = {}, this.impliedValues = {}, t)
      for (let e in t) this.knownValues[e] = t[e];
    let n = e.getDateWithAdjustedTimezone();
    this.imply("day", n.getDate()), this.imply("month", n.getMonth() + 1), this.imply("year", n.getFullYear()), this.imply("hour", 12), this.imply("minute", 0), this.imply("second", 0), this.imply("millisecond", 0)
  }
  static createRelativeFromReference(e, t = a.df) {
    let n = (0, a.WK)(e.getDateWithAdjustedTimezone(), t),
      i = new s(e);
    return i.addTag("result/relativeDate"), "hour" in t || "minute" in t || "second" in t || "millisecond" in t ? (i.addTag("result/relativeDateAndTime"), (0, r.rv)(i, n), (0, r.cz)(i, n), i.assign("timezoneOffset", e.getTimezoneOffset())) : ((0, r.hO)(i, n), i.imply("timezoneOffset", e.getTimezoneOffset()), "day" in t ? (i.assign("day", n.getDate()), i.assign("month", n.getMonth() + 1), i.assign("year", n.getFullYear()), i.assign("weekday", n.getDay())) : "week" in t ? (i.assign("day", n.getDate()), i.assign("month", n.getMonth() + 1), i.assign("year", n.getFullYear()), i.imply("weekday", n.getDay())) : (i.imply("day", n.getDate()), "month" in t ? (i.assign("month", n.getMonth() + 1), i.assign("year", n.getFullYear())) : (i.imply("month", n.getMonth() + 1), "year" in t ? i.assign("year", n.getFullYear()) : i.imply("year", n.getFullYear())))), i
  }
  get(e) {
    return e in this.knownValues ? this.knownValues[e] : e in this.impliedValues ? this.impliedValues[e] : null
  }
  isCertain(e) {
    return e in this.knownValues
  }
  getCertainComponents() {
    return Object.keys(this.knownValues)
  }
  imply(e, t) {
    return e in this.knownValues || (this.impliedValues[e] = t), this
  }
  assign(e, t) {
    return this.knownValues[e] = t, delete this.impliedValues[e], this
  }
  addDurationAsImplied(e) {
    let t = this.dateWithoutTimezoneAdjustment(),
      n = (0, a.WK)(t, e);
    return ("day" in e || "week" in e || "month" in e || "year" in e) && (this.delete(["day", "weekday", "month", "year"]), this.imply("day", n.getDate()), this.imply("weekday", n.getDay()), this.imply("month", n.getMonth() + 1), this.imply("year", n.getFullYear())), ("second" in e || "minute" in e || "hour" in e) && (this.delete(["second", "minute", "hour"]), this.imply("second", n.getSeconds()), this.imply("minute", n.getMinutes()), this.imply("hour", n.getHours())), this
  }
  delete(e) {
    for (let t of ("string" == typeof e && (e = [e]), e)) delete this.knownValues[t], delete this.impliedValues[t]
  }
  clone() {
    let e = new s(this.reference);
    for (let t in module.knownValues = {}, module.impliedValues = {}, this.knownValues) module.knownValues[exports] = this.knownValues[exports];
    for (let t in this.impliedValues) module.impliedValues[exports] = this.impliedValues[exports];
    return module
  }
  isOnlyDate() {
    return !this.isCertain("hour") && !this.isCertain("minute") && !this.isCertain("second")
  }
  isOnlyTime() {
    return !this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month") && !this.isCertain("year")
  }
  isOnlyWeekdayComponent() {
    return this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month")
  }
  isDateWithUnknownYear() {
    return this.isCertain("month") && !this.isCertain("year")
  }
  isValidDate() {
    let e = this.dateWithoutTimezoneAdjustment();
    return module.getFullYear() === this.get("year") && module.getMonth() === this.get("month") - 1 && module.getDate() === this.get("day") && (null == this.get("hour") || module.getHours() == this.get("hour")) && (null == this.get("minute") || module.getMinutes() == this.get("minute"))
  }
  toString() {
    return `[ParsingComponents {
            tags: ${JSON.stringify(Array.from(this._tags).sort())}, 
            knownValues: ${JSON.stringify(this.knownValues)}, 
            impliedValues: ${JSON.stringify(this.impliedValues)}}, 
            reference: ${JSON.stringify(this.reference)}]`
  }
  date() {
    let e = this.dateWithoutTimezoneAdjustment(),
      t = this.reference.getSystemTimezoneAdjustmentMinute(module, this.get("timezoneOffset"));
    return new Date(module.getTime() + 6e4 * exports)
  }
  addTag(e) {
    return this._tags.add(e), this
  }
  addTags(e) {
    for (let t of e) this._tags.add(t);
    return this
  }
  tags() {
    return new Set(this._tags)
  }
  dateWithoutTimezoneAdjustment() {
    let e = new Date(this.get("year"), this.get("month") - 1, this.get("day"), this.get("hour"), this.get("minute"), this.get("second"), this.get("millisecond"));
    return module.setFullYear(this.get("year")), module
  }
}
class l {
  refDate;
  index;
  text;
  reference;
  start;
  end;
  constructor(e, t, n, r, i) {
    this.reference = e, this.refDate = e.instant, this.index = t, this.text = n, this.start = r || new s(e), this.end = i
  }
  clone() {
    let e = new l(this.reference, this.index, this.text);
    return module.start = this.start ? this.start.clone() : null, module.end = this.end ? this.end.clone() : null, module
  }
  date() {
    return this.start.date()
  }
  addTag(e) {
    return this.start.addTag(e), this.end && this.end.addTag(e), this
  }
  addTags(e) {
    return this.start.addTags(e), this.end && this.end.addTags(e), this
  }
  tags() {
    let e = new Set(this.start.tags());
    if (this.end)
      for (let t of this.end.tags()) module.add(exports);
    return module
  }
  toString() {
    let e = Array.from(this.tags()).sort();
    return `[ParsingResult {index: ${this.index}, text: '${this.text}', tags: ${JSON.stringify(module)} ...}]`
  }
}