/** Chunk was on web.js **/
/** chunk id: 309098, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => o
});
let r = new Map,
  i = new Map;
class o {
  format(e, t) {
    let n = this.strings.getStringForLocale(e, this.locale);
    return "function" == typeof n ? n(t, this) : n
  }
  plural(e, t, n = "cardinal") {
    let i = t["=" + e];
    if (i) return "function" == typeof i ? i() : i;
    let o = this.locale + ":" + n,
      a = r.get(o);
    return a || (a = new Intl.PluralRules(this.locale, {
      type: n
    }), r.set(o, a)), "function" == typeof(i = t[a.select(e)] || t.other) ? i() : i
  }
  number(e) {
    let t = i.get(this.locale);
    return t || (t = new Intl.NumberFormat(this.locale), i.set(this.locale, t)), t.format(e)
  }
  select(e, t) {
    let n = e[t] || e.other;
    return "function" == typeof n ? n() : n
  }
  constructor(e, t) {
    this.locale = e, this.strings = t
  }
}