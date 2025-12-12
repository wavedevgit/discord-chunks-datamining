/** Chunk was on web.js **/
/** chunk id: 201129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => o
});
var Chunk86465 = require("./86465.js"),
  Chunk193902 = require("./193902.js");
class o {
  parsers;
  refiners;
  defaultConfig = new Chunk193902.Z;
  constructor(e) {
    e = e || this.defaultConfig.createCasualConfiguration(), this.parsers = [...e.parsers], this.refiners = [...e.refiners]
  }
  clone() {
    return new o({
      parsers: [...this.parsers],
      refiners: [...this.refiners]
    })
  }
  parseDate(e, t, n) {
    let r = this.parse(e, t, n);
    return r.length > 0 ? r[0].start.date() : null
  }
  parse(e, t, n) {
    let r = new a(e, t, n),
      i = [];
    return this.parsers.forEach(e => {
      let t = o.executeParser(r, e);
      i = i.concat(t)
    }), i.sort((e, t) => e.index - t.index), this.refiners.forEach(function(e) {
      i = e.refine(r, i)
    }), i
  }
  static executeParser(e, t) {
    let n = [],
      i = t.pattern(e),
      o = e.text,
      a = e.text,
      s = i.exec(a);
    for (; s;) {
      let l = s.index + o.length - a.length;
      s.index = l;
      let c = t.extract(e, s);
      if (!c) {
        a = o.substring(s.index + 1), s = i.exec(a);
        continue
      }
      let u = null;
      c instanceof r.G5 ? u = c : c instanceof r.L ? (u = e.createParsingResult(s.index, s[0])).start = c : u = e.createParsingResult(s.index, s[0], c);
      let d = u.index,
        f = u.text;
      e.debug(() => console.log(`${t.constructor.name} extracted (at index=${d}) '${f}'`)), n.push(u), a = o.substring(d + f.length), s = i.exec(a)
    }
    return n
  }
}
class a {
  text;
  option;
  reference;
  refDate;
  constructor(e, t, n) {
    this.text = e, this.option = n ?? {}, this.reference = r.X2.fromInput(t, this.option.timezones), this.refDate = this.reference.instant
  }
  createParsingComponents(e) {
    return e instanceof r.L ? e : new r.L(this.reference, e)
  }
  createParsingResult(e, t, n, i) {
    let o = "string" == typeof t ? t : this.text.substring(e, t),
      a = n ? this.createParsingComponents(n) : null,
      s = i ? this.createParsingComponents(i) : null;
    return new r.G5(this.reference, e, o, a, s)
  }
  debug(e) {
    this.option.debug && (this.option.debug instanceof Function ? this.option.debug(e) : this.option.debug.debug(e))
  }
}