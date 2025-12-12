/** Chunk was on web.js **/
/** chunk id: 598634, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk563641 = require("./563641.js");
let i = RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class o {
  timezoneOverrides;
  constructor(e) {
    this.timezoneOverrides = e
  }
  refine(e, t) {
    let n = e.option.timezones ?? {};
    return t.forEach(t => {
      let o = e.text.substring(t.index + t.text.length),
        a = i.exec(o);
      if (!a) return;
      let s = a[1].toUpperCase(),
        l = t.start.date() ?? t.refDate ?? new Date,
        c = {
          ...this.timezoneOverrides,
          ...n
        },
        u = (0, r.XP)(s, l, c);
      if (null == u) return;
      e.debug(() => {
        console.log(`Extracting timezone: '${s}' into: ${u} for: ${t.start}`)
      });
      let d = t.start.get("timezoneOffset");
      !(null !== d && u != d && (t.start.isCertain("timezoneOffset") || s != a[1])) && (!t.start.isOnlyDate() || s == a[1]) && (t.text += a[0], t.start.isCertain("timezoneOffset") || t.start.assign("timezoneOffset", u), null == t.end || t.end.isCertain("timezoneOffset") || t.end.assign("timezoneOffset", u))
    }), t
  }
}