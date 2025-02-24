/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
e.exports.parse = function(e) {
  var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
  if (!t) return null;
  t.shift();
  var n = null,
    r = [];
  t[2] && (n = (a = t[2].split("-")).shift(), r = a);
  var i = [];
  t[5] && (i = t[5].split("-")).shift();
  var o = [];
  if (t[6]) {
    (a = t[6].split("-")).shift();
    for (var a, s, l = []; a.length;) {
      var c = a.shift();
      1 === c.length ? s ? (o.push({
        singleton: s,
        extension: l
      }), s = c, l = []) : s = c : l.push(c)
    }
    o.push({
      singleton: s,
      extension: l
    })
  }
  var u = [];
  t[7] && ((u = t[7].split("-")).shift(), u.shift());
  var d = [];
  return t[8] && (d = t[8].split("-")).shift(), {
    langtag: {
      language: {
        language: n,
        extlang: r
      },
      script: t[3] || null,
      region: t[4] || null,
      variant: i,
      extension: o,
      privateuse: u
    },
    privateuse: d,
    grandfathered: {
      irregular: t[0] || null,
      regular: t[1] || null
    }
  }
}