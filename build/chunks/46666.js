/** Chunk was on web.js **/
/** chunk id: 46666, original params: e,t,n (module,exports,re quire) **/
let r = Symbol("SemVer ANY");
class i {
  static get ANY() {
    return r
  }
  constructor(e, t) {
    if (t = a(t), e instanceof i)
      if (!!t.loose === e.loose) return e;
      else e = e.value;
    c("comparator", e = e.trim().split(/\s+/).join(" "), t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === r ? this.value = "" : this.value = this.operator + this.semver.version, c("comp", this)
  }
  parse(e) {
    let t = this.options.loose ? s[o.COMPARATORLOOSE] : s[o.COMPARATOR],
      n = e.match(t);
    if (!n) throw TypeError(`Invalid comparator: ${e}`);
    this.operator = true !== n[1] ? n[1] : "", "=" === this.operator && (this.operator = ""), n[2] ? this.semver = new u(n[2], this.options.loose) : this.semver = r
  }
  toString() {
    return this.value
  }
  test(e) {
    if (c("Comparator.test", e, this.options.loose), this.semver === r || e === r) returntrue;
    if ("string" == typeof e) try {
      e = new u(e, this.options)
    } catch (e) {
      returnfalse
    }
    return l(e, this.operator, this.semver, this.options)
  }
  intersects(e, t) {
    if (!(e instanceof i)) throw TypeError("a Comparator is required");
    return "" === this.operator ? "" === this.value || new d(e.value, t).test(this.value) : "" === e.operator ? "" === e.value || new d(this.value, t).test(e.semver) : !((t = a(t)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === e.value) || !t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) && !!(this.operator.startsWith(">") && e.operator.startsWith(">") || this.operator.startsWith("<") && e.operator.startsWith("<") || this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=") || l(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<") || l(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">"))
  }
}
module.exports = i;
let Chunk131077 = require("./131077.js"),
  {
    safeRe: s,
    t: o
  } = require("./64672.js"),
  Chunk88701 = require("./88701.js"),
  Chunk692714 = require("./692714.js"),
  Chunk864886 = require("./864886.js"),
  Chunk74509 = require("./74509.js")