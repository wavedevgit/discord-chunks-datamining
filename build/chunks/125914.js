/** Chunk was on web.js **/
/** chunk id: 125914, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.IntlManager = exports.DEFAULT_LOCALE = true;
let Chunk265154 = require("./265154.js"),
  Chunk419953 = require("./419953.js"),
  Chunk99673 = require("./99673.js");
exports.DEFAULT_LOCALE = "en-US";
class o {
  constructor({
    initialLocale: e = t.DEFAULT_LOCALE,
    defaultLocale: n = t.DEFAULT_LOCALE,
    formatConfig: i = r.DEFAULT_FORMAT_CONFIG,
    forceLookupMatcher: o = false
  }) {
    this.onLocaleChange = e => (this._localeSubscriptions.add(e), () => this._localeSubscriptions.delete(e)), this.currentLocale = e, this.defaultLocale = n, this.formatConfig = i, this._forceLookupMatcher = o, this.data = (0, a.makeDataFormatters)([this.currentLocale, this.defaultLocale], this.formatConfig, this._forceLookupMatcher), this._localeSubscriptions = new Set
  }
  withFormatters(e) {
    for (let [t, n] of Object.entries(e)) this[t] = this.makeFormatFunction(n);
    return this
  }
  makeFormatFunction({
    format: e,
    builder: t
  }) {
    let n = e.bind(this);
    return (e, r) => null == e ? null : n(e(this.currentLocale), r, t)
  }
  setLocale(e) {
    this.currentLocale = e, this.data = (0, a.makeDataFormatters)([this.currentLocale, this.defaultLocale], this.formatConfig, this._forceLookupMatcher), this.emitLocaleChange(e)
  }
  emitLocaleChange(e) {
    for (let t of this._localeSubscriptions) t(e)
  }
  string(e) {
    return null == e ? "" : e(this.currentLocale).reserialize()
  }
  reserialize(e) {
    if (null == e) return "";
    let t = e(this.currentLocale);
    return "string" == typeof t ? t : t.reserialize()
  }
  bindFormatValues(e, t, n) {
    return (0, i.bindFormatValues)(e, t.ast, [this.currentLocale, this.defaultLocale], this.data, this.formatConfig, n)
  }
}
exports.IntlManager = o