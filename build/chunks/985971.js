/** Chunk was on web.js **/
/** chunk id: 985971, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => d
});
var Chunk322811 = require("./322811.js");

function i(e, t, n, r) {
  return RegExp(`${e}${t}(\\d{1,4})(?:(?:\\.|:|：)(\\d{1,2})(?:(?::|：)(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${n}`, r)
}

function a(e, t) {
  return RegExp(`^(${e})(\\d{1,4})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${t}`, "i")
}
let o = 2,
  s = 3,
  l = 4,
  c = 5,
  u = 6;
class d {
  strictMode;
  constructor(e = false) {
    this.strictMode = e
  }
  patternFlags() {
    return "i"
  }
  primaryPatternLeftBoundary() {
    return "(^|\\s|T|\\b)"
  }
  primarySuffix() {
    return "(?!/)(?=\\W|$)"
  }
  followingSuffix() {
    return "(?!/)(?=\\W|$)"
  }
  pattern(e) {
    return this.getPrimaryTimePatternThroughCache()
  }
  extract(e, t) {
    let n = this.extractPrimaryTimeComponents(e, t);
    if (!n) return t[0].match(/^\d{4}/) ? t.index += 4 : t.index += t[0].length, null;
    let r = t.index + t[1].length,
      i = t[0].substring(t[1].length),
      a = e.createParsingResult(r, i, n);
    t.index += t[0].length;
    let o = e.text.substring(t.index),
      s = this.getFollowingTimePatternThroughCache().exec(o);
    return i.match(/^\d{3,4}/) && s && (s[0].match(/^\s*([+-])\s*\d{2,4}$/) || s[0].match(/^\s*([+-])\s*\d{2}\W\d{2}/)) ? null : !s || s[0].match(/^\s*([+-])\s*\d{3,4}$/) ? this.checkAndReturnWithoutFollowingPattern(a) : (a.end = this.extractFollowingTimeComponents(e, s, a), a.end && (a.text += s[0]), this.checkAndReturnWithFollowingPattern(a))
  }
  extractPrimaryTimeComponents(e, t, n = false) {
    let i = e.createParsingComponents(),
      a = 0,
      d = null,
      f = parseInt(t[o]);
    if (f > 100) {
      if (4 == t[o].length && null == t[s] && !t[u] || this.strictMode || null != t[s]) return null;
      a = f % 100, f = Math.floor(f / 100)
    }
    if (f > 24) return null;
    if (null != t[s]) {
      if (1 == t[s].length && !t[u]) return null;
      a = parseInt(t[s])
    }
    if (a >= 60) return null;
    if (f > 12 && (d = r.FF.PM), null != t[u]) {
      if (f > 12) return null;
      let e = t[u][0].toLowerCase();
      "a" == e && (d = r.FF.AM, 12 == f && (f = 0)), "p" == e && (d = r.FF.PM, 12 != f && (f += 12))
    }
    if (i.assign("hour", f), i.assign("minute", a), null !== d ? i.assign("meridiem", d) : f < 12 ? i.imply("meridiem", r.FF.AM) : i.imply("meridiem", r.FF.PM), null != t[c]) {
      let e = parseInt(t[c].substring(0, 3));
      if (e >= 1e3) return null;
      i.assign("millisecond", e)
    }
    if (null != t[l]) {
      let e = parseInt(t[l]);
      if (e >= 60) return null;
      i.assign("second", e)
    }
    return i
  }
  extractFollowingTimeComponents(e, t, n) {
    let i = e.createParsingComponents();
    if (null != t[c]) {
      let e = parseInt(t[c].substring(0, 3));
      if (e >= 1e3) return null;
      i.assign("millisecond", e)
    }
    if (null != t[l]) {
      let e = parseInt(t[l]);
      if (e >= 60) return null;
      i.assign("second", e)
    }
    let a = parseInt(t[o]),
      d = 0,
      f = false;
    if (null != t[s] ? d = parseInt(t[s]) : a > 100 && (d = a % 100, a = Math.floor(a / 100)), d >= 60 || a > 24) return null;
    if (a >= 12 && (f = r.FF.PM), null != t[u]) {
      if (a > 12) return null;
      let e = t[u][0].toLowerCase();
      "a" == e && (f = r.FF.AM, 12 == a && (a = 0, i.isCertain("day") || i.imply("day", i.get("day") + 1))), "p" == e && (f = r.FF.PM, 12 != a && (a += 12)), n.start.isCertain("meridiem") || (f == r.FF.AM ? (n.start.imply("meridiem", r.FF.AM), 12 == n.start.get("hour") && n.start.assign("hour", 0)) : (n.start.imply("meridiem", r.FF.PM), 12 != n.start.get("hour") && n.start.assign("hour", n.start.get("hour") + 12)))
    }
    return i.assign("hour", a), i.assign("minute", d), f >= 0 ? i.assign("meridiem", f) : n.start.isCertain("meridiem") && n.start.get("hour") > 12 ? n.start.get("hour") - 12 > a ? i.imply("meridiem", r.FF.AM) : a <= 12 && (i.assign("hour", a + 12), i.assign("meridiem", r.FF.PM)) : a > 12 ? i.imply("meridiem", r.FF.PM) : a <= 12 && i.imply("meridiem", r.FF.AM), i.date().getTime() < n.start.date().getTime() && i.imply("day", i.get("day") + 1), i
  }
  checkAndReturnWithoutFollowingPattern(e) {
    if (e.text.match(/^\d$/) || e.text.match(/^\d\d\d+$/) || e.text.match(/\d[apAP]$/)) return null;
    let t = e.text.match(/[^\d:.](\d[\d.]+)$/);
    if (t) {
      let e = t[1];
      if (this.strictMode || e.includes(".") && !e.match(/\d(\.\d{2})+$/) || parseInt(e) > 24) return null
    }
    return e
  }
  checkAndReturnWithFollowingPattern(e) {
    if (e.text.match(/^\d+-\d+$/)) return null;
    let t = e.text.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
    if (t) {
      if (this.strictMode) return null;
      let e = t[1],
        n = t[2];
      if (n.includes(".") && !n.match(/\d(\.\d{2})+$/)) return null;
      let r = parseInt(n),
        i = parseInt(e);
      if (r > 24 || i > 24) return null
    }
    return e
  }
  cachedPrimaryPrefix = null;
  cachedPrimarySuffix = null;
  cachedPrimaryTimePattern = null;
  getPrimaryTimePatternThroughCache() {
    let e = this.primaryPrefix(),
      t = this.primarySuffix();
    return this.cachedPrimaryPrefix === e && this.cachedPrimarySuffix === t || (this.cachedPrimaryTimePattern = i(this.primaryPatternLeftBoundary(), e, t, this.patternFlags()), this.cachedPrimaryPrefix = e, this.cachedPrimarySuffix = t), this.cachedPrimaryTimePattern
  }
  cachedFollowingPhase = null;
  cachedFollowingSuffix = null;
  cachedFollowingTimePatten = null;
  getFollowingTimePatternThroughCache() {
    let e = this.followingPhase(),
      t = this.followingSuffix();
    return this.cachedFollowingPhase === e && this.cachedFollowingSuffix === t || (this.cachedFollowingTimePatten = a(e, t), this.cachedFollowingPhase = e, this.cachedFollowingSuffix = t), this.cachedFollowingTimePatten
  }
}