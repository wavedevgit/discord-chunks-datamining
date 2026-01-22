/** Chunk was on web.js **/
/** chunk id: 112600, original params: e,t (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.dataFormatterCache = true;
class n {
  constructor() {
    this.dateTime = new Map, this.duration = new Map, this.list = new Map, this.number = new Map, this.pluralRules = new Map, this.relativeTime = new Map
  }
  getDateTimeFormatter(...e) {
    return this._getCached(this.dateTime, e, e => new Intl.DateTimeFormat(...e))
  }
  getDurationFormatter(...e) {
    return this._getCached(this.duration, e, e => new Intl.DurationFormat(...e))
  }
  getListFormatter(...e) {
    return this._getCached(this.list, e, e => new Intl.ListFormat(...e))
  }
  getNumberFormatter(...e) {
    return this._getCached(this.number, e, e => new Intl.NumberFormat(...e))
  }
  getPluralRules(...e) {
    return this._getCached(this.pluralRules, e, e => new Intl.PluralRules(...e))
  }
  getRelativeTimeFormatter(...e) {
    return this._getCached(this.relativeTime, e, e => new Intl.RelativeTimeFormat(...e))
  }
  _getCached(e, t, n) {
    let r = this._getKey(t),
      i = e.get(r);
    if (i) return i;
    let a = n(t);
    return e.set(r, a), a
  }
  _getKey(...e) {
    return JSON.stringify(e)
  }
}
exports.dataFormatterCache = new n