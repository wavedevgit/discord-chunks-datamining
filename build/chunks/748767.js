/** Chunk was on web.js **/
/** chunk id: 748767, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk894186 = require("./894186.js");
let i = RegExp("(^|\\s|T)(?:(?:um|von)\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)", "i"),
  o = RegExp("^\\s*(\\-|\\–|\\~|\\〜|bis(?:\\s+um)?|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)", "i"),
  a = 2,
  s = 3,
  l = 4,
  c = 5;
class u {
  pattern(e) {
    return i
  }
  extract(e, t) {
    let n = e.createParsingResult(t.index + t[1].length, t[0].substring(t[1].length));
    if (n.text.match(/^\d{4}$/) || (n.start = u.extractTimeComponent(n.start.clone(), t), !n.start)) return t.index += t[0].length, null;
    let r = e.text.substring(t.index + t[0].length),
      i = o.exec(r);
    return i && (n.end = u.extractTimeComponent(n.start.clone(), i), n.end && (n.text += i[0])), n
  }
  static extractTimeComponent(e, t) {
    let n = 0,
      i = 0,
      o = null;
    if (n = parseInt(t[a]), null != t[s] && (i = parseInt(t[s])), i >= 60 || n > 24) return null;
    if (n >= 12 && (o = r.GG.PM), null != t[c]) {
      if (n > 12) return null;
      let e = t[c].toLowerCase();
      e.match(/morgen|vormittag/) && (o = r.GG.AM, 12 == n && (n = 0)), e.match(/nachmittag|abend/) && (o = r.GG.PM, 12 != n && (n += 12)), e.match(/nacht/) && (12 == n ? (o = r.GG.AM, n = 0) : n < 6 ? o = r.GG.AM : (o = r.GG.PM, n += 12))
    }
    if (e.assign("hour", n), e.assign("minute", i), null !== o ? e.assign("meridiem", o) : n < 12 ? e.imply("meridiem", r.GG.AM) : e.imply("meridiem", r.GG.PM), null != t[l]) {
      let n = parseInt(t[l]);
      if (n >= 60) return null;
      e.assign("second", n)
    }
    return e
  }
}