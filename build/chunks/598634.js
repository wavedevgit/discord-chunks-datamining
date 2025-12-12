/** Chunk was on web.js **/
/** chunk id: 598634, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk563641 = require("./563641.js");
let i = RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class a {
  timezoneOverrides;
  constructor(e) {
    this.timezoneOverrides = e
  }
  refine(e, t) {
    let n = e.option.timezones ?? {};
    return t.forEach(t => {
      let a = e.text.substring(t.index + t.text.length),
        o = i.exec(a);
      if (!o) return;
      let s = o[1].toUpperCase(),
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
      !(null !== d && u != d && (t.start.isCertain("timezoneOffset") || s != o[1])) && (!t.start.isOnlyDate() || s == o[1]) && (t.text += o[0], t.start.isCertain("timezoneOffset") || t.start.assign("timezoneOffset", u), null == t.end || t.end.isCertain("timezoneOffset") || t.end.assign("timezoneOffset", u))
    }), t
  }
}