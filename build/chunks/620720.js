/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(310680),
  i = n(660027),
  o = n(49691),
  a = n(538018);

function s(e, t) {
  void 0 === t && (t = []);
  var n, l = (0, r.Z)(e),
    c = l === (null == (n = e.ownerDocument) ? void 0 : n.body),
    u = (0, o.Z)(l),
    d = c ? [u].concat(u.visualViewport || [], (0, a.Z)(l) ? l : []) : l,
    f = t.concat(d);
  return c ? f : f.concat(s((0, i.Z)(d)))
}