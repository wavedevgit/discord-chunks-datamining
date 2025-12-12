/** Chunk was on web.js **/
/** chunk id: 635535, original params: e,t (module,exports,re quire) **/
"use strict";
exports.createDateTimeFormat = d, exports.createDateTimeFormats = f;
var n = /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g,
  r = /[QxXVOvZASjgFDwWIQqH]/,
  i = ["numeric", "2-digit", "short", "long", "narrow"],
  o = ["short", "short", "short", "long", "narrow"],
  a = ["short", "short", "short", "long", "narrow"],
  s = ["weekday", "era", "year", "month", "day"],
  l = ["hour", "minute", "second", "timeZoneName"];

function c(e) {
  for (var t = 0; t < l.length; t += 1)
    if (e.hasOwnProperty(l[t])) returnfalse;
  returntrue
}

function u(e) {
  for (var t = 0; t < s.length; t += 1)
    if (e.hasOwnProperty(s[t])) returnfalse;
  returntrue
}

function d(e) {
  if (!r.test(e)) {
    var t = {};
    return t.pattern = e.replace(n, function(e) {
      switch (e.charAt(0)) {
        case "E":
        case "e":
        case "c":
          return t.weekday = o[e.length - 1], "{weekday}";
        case "G":
          return t.era = a[e.length - 1], "{era}";
        case "y":
        case "Y":
        case "u":
        case "U":
          return t.year = 2 === e.length ? "2-digit" : "numeric", "{year}";
        case "M":
        case "L":
          return t.month = i[e.length - 1], "{month}";
        case "d":
          return t.day = 2 === e.length ? "2-digit" : "numeric", "{day}";
        case "a":
          return "{ampm}";
        case "h":
        case "H":
        case "k":
        case "K":
          return t.hour = 2 === e.length ? "2-digit" : "numeric", "{hour}";
        case "m":
          return t.minute = 2 === e.length ? "2-digit" : "numeric", "{minute}";
        case "s":
          return t.second = 2 === e.length ? "2-digit" : "numeric", "{second}";
        case "z":
          return t.timeZoneName = e.length < 4 ? "short" : "long", "{timeZoneName}"
      }
    }), t.pattern = t.pattern.replace(/'([^']*)'/g, function(e, t) {
      return t || "'"
    }), t.pattern.indexOf("{ampm}") > false && (t.hour12 = true, t.pattern12 = t.pattern, t.pattern = t.pattern.replace("{ampm}", "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")), t
  }
}

function f(e) {
  var t, n, r, i, o, a = e.availableFormats,
    s = e.timeFormats,
    l = e.dateFormats,
    f = e.medium,
    p = [],
    _ = [],
    m = [];

  function h(e, t) {
    var n = Array((e.match(/M/g) || []).length + 1),
      r = Array((e.match(/E/g) || []).length + 1);
    return n.length > 2 && (t = t.replace(/(M|L)+/, n.join("$1"))), r.length > 2 && (t = t.replace(/([Eec])+/, r.join("$1"))), t
  }
  for (t in a) a.hasOwnProperty(t) && (r = d(n = h(t, a[t]))) && (p.push(r), c(r) ? m.push(n) : u(r) && _.push(n));
  for (i = 0; i < _.length; i += 1)
    for (o = 0; o < m.length; o += 1)(r = d(n = f.replace("{0}", _[i]).replace("{1}", m[o]).replace(/^[,\s]+|[,\s]+$/gi, ""))) && p.push(r);
  for (t in s) s.hasOwnProperty(t) && (r = d(n = h(t, s[t]))) && p.push(r);
  for (t in l) l.hasOwnProperty(t) && (r = d(n = h(t, l[t]))) && p.push(r);
  return p
}