/** Chunk was on web.js **/
/** chunk id: 932318, original params: e,t,n (module,exports,re quire) **/
"use strict";
module.exports = function(e, t) {
  var r, i, a, o, s, l, c = this,
    u = [];
  for (a = 0, r = n(246734)(e), o = n(976617), s = n(577360), l = n(921194); a < r.length; ++a) o[i = r[a]] && (i = o[i]), t && "keypress" !== t && s[i] && (i = s[i], u.push("shift")), l(i) && u.push(i);
  return t = c.pickBestAction(i, u, t), {
    key: i,
    modifiers: u,
    action: t
  }
}