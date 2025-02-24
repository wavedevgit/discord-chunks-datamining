/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n(535213)();
var r = n(245252),
  i = n(665855),
  o = n(247498),
  a = n(350506),
  s = n(665679),
  l = n(705806),
  c = l(s("%Promise.all%")),
  u = l(s("%Promise.reject%"));
e.exports = function(e) {
  var t = this;
  if ("Object" !== i(t)) throw TypeError("`this` value must be an object");
  return c(t, a(o(e), function(e) {
    var n = function(e) {
        return {
          status: "fulfilled",
          value: e
        }
      },
      i = function(e) {
        return {
          status: "rejected",
          reason: e
        }
      },
      o = r(t, e);
    try {
      return o.then(n, i)
    } catch (e) {
      return u(t, e)
    }
  }))
}