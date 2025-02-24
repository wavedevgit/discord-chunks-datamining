/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
var r = n(709998),
  i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  o = /\\(\\)?/g,
  a = r(function(e) {
    var t = [];
    return 46 === e.charCodeAt(0) && t.push(""), e.replace(i, function(e, n, r, i) {
      t.push(r ? i.replace(o, "$1") : n || e)
    }), t
  });
e.exports = a