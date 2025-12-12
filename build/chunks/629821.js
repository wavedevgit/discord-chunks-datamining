/** Chunk was on web.js **/
/** chunk id: 629821, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => d
});
var Chunk894186 = require("./894186.js");

function i(e, t, n, r) {
  return RegExp(`${e}${t}(\\d{1,4})(?:(?:\\.|:|：)(\\d{1,2})(?:(?::|：)(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${n}`, r)
}

function o(e, t) {
  return RegExp(`^(${e})(\\d{1,4})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${t}`, "i")
}
let a = 2,
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
      o = e.createParsingResult(r, i, n);
    t.index += t[0].length;
    let a = e.text.substring(t.index),
      s = this.getFollowingTimePatternThroughCache().exec(a);
    return i.match(/^\d{3,4}/) && s && (s[0].match(/^\s*([+-])\s*\d{2,4}$/) || s[0].match(/^\s*([+-])\s*\d{2}\W\d{2}/)) ? null : !s || s[0].match(/^\s*([+-])\s*\d{3,4}$/) ? this.checkAndReturnWithoutFollowingPattern(o) : (o.end = this.extractFollowingTimeComponents(e, s, o), o.end && (o.text += s[0]), this.checkAndReturnWithFollowingPattern(o))
  }
  extractPrimaryTimeComponents(e, t, n = false) {
    let i = e.createParsingComponents(),
      o = 0,
      d = null,
      f = parseInt(t[a]);
    if (f > 100) {
      if (4 == t[a].length && null == t[s] && !t[u] || this.strictMode || null != t[s]) return null;
      o = f % 100, f = Math.floor(f / 100)
    }
    if (f > 24) return null;
    if (null != t[s]) {
      if (1 == t[s].length && !t[u]) return null;
      o = parseInt(t[s])
    }
    if (o >= 60) return null;
    if (f > 12 && (d = r.GG.PM), null != t[u]) {
      if (f > 12) return null;
      let e = t[u][0].toLowerCase();
      "a" == e && (d = r.GG.AM, 12 == f && (f = 0)), "p" == e && (d = r.GG.PM, 12 != f && (f += 12))
    }
    if (i.assign("hour", f), i.assign("minute", o), null !== d ? i.assign("meridiem", d) : f < 12 ? i.imply("meridiem", r.GG.AM) : i.imply("meridiem", r.GG.PM), null != t[c]) {
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
    let o = parseInt(t[a]),
      d = 0,
      f = false;
    if (null != t[s] ? d = parseInt(t[s]) : o > 100 && (d = o % 100, o = Math.floor(o / 100)), d >= 60 || o > 24) return null;
    if (o >= 12 && (f = r.GG.PM), null != t[u]) {
      if (o > 12) return null;
      let e = t[u][0].toLowerCase();
      "a" == e && (f = r.GG.AM, 12 == o && (o = 0, i.isCertain("day") || i.imply("day", i.get("day") + 1))), "p" == e && (f = r.GG.PM, 12 != o && (o += 12)), n.start.isCertain("meridiem") || (f == r.GG.AM ? (n.start.imply("meridiem", r.GG.AM), 12 == n.start.get("hour") && n.start.assign("hour", 0)) : (n.start.imply("meridiem", r.GG.PM), 12 != n.start.get("hour") && n.start.assign("hour", n.start.get("hour") + 12)))
    }
    return i.assign("hour", o), i.assign("minute", d), f >= 0 ? i.assign("meridiem", f) : n.start.isCertain("meridiem") && n.start.get("hour") > 12 ? n.start.get("hour") - 12 > o ? i.imply("meridiem", r.GG.AM) : o <= 12 && (i.assign("hour", o + 12), i.assign("meridiem", r.GG.PM)) : o > 12 ? i.imply("meridiem", r.GG.PM) : o <= 12 && i.imply("meridiem", r.GG.AM), i.date().getTime() < n.start.date().getTime() && i.imply("day", i.get("day") + 1), i
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
    return this.cachedPrimaryPrefix === module && this.cachedPrimarySuffix === exports || (this.cachedPrimaryTimePattern = i(this.primaryPatternLeftBoundary(), module, exports, this.patternFlags()), this.cachedPrimaryPrefix = module, this.cachedPrimarySuffix = exports), this.cachedPrimaryTimePattern
  }
  cachedFollowingPhase = null;
  cachedFollowingSuffix = null;
  cachedFollowingTimePatten = null;
  getFollowingTimePatternThroughCache() {
    let e = this.followingPhase(),
      t = this.followingSuffix();
    return this.cachedFollowingPhase === module && this.cachedFollowingSuffix === exports || (this.cachedFollowingTimePatten = o(module, exports), this.cachedFollowingPhase = module, this.cachedFollowingSuffix = exports), this.cachedFollowingTimePatten
  }
}