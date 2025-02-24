/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
var r = n(915646),
  i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  o = /\\(\\)?/g,
  a = r(function(e) {
    var t = [];
    return 46 === e.charCodeAt(0) && t.push(""), e.replace(i, function(e, n, r, i) {
      t.push(r ? i.replace(o, "$1") : n || e)
    }), t
  });
e.exports = a