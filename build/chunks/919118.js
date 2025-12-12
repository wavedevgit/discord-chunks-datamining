/** Chunk was on web.js **/
/** chunk id: 919118, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  J: () => a
});
let i = Symbol.for("react-aria.i18n.locale"),
  o = Symbol.for("react-aria.i18n.strings");
class a {
  getStringForLocale(e, t) {
    let n = this.getStringsForLocale(t)[e];
    if (!n) throw Error(`Could not find intl message ${e} in ${t} locale`);
    return n
  }
  getStringsForLocale(e) {
    let t = this.strings[e];
    return t || (t = s(e, this.strings, this.defaultLocale), this.strings[e] = t), t
  }
  static getGlobalDictionaryForPackage(e) {
    if ("undefined" == typeof window) return null;
    let t = window[i];
    if (true === r) {
      let e = window[o];
      if (!e) return null;
      for (let n in r = {}, e) r[n] = new a({
        [t]: e[n]
      }, t)
    }
    let n = null == r ? true : r[e];
    if (!n) throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return n
  }
  constructor(e, t = "en-US") {
    this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e)), this.defaultLocale = t
  }
}

function s(e, t, n = "en-US") {
  if (t[e]) return t[e];
  let r = l(e);
  if (t[r]) return t[r];
  for (let e in t)
    if (e.startsWith(r + "-")) return t[e];
  return t[n]
}

function l(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0]
}