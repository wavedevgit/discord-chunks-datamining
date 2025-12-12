/** Chunk was on web.js **/
/** chunk id: 805802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => f
});
var Chunk139232 = require("./139232.js"),
  Chunk812975 = require("./812975.js"),
  Chunk531171 = require("./531171.js"),
  Chunk695170 = require("./695170.js"),
  Chunk686942 = require("./686942.js"),
  Chunk200734 = require("./200734.js"),
  c = {
    dtstart: null,
    cache: false,
    unfold: false,
    forceset: false,
    compatible: false,
    tzid: null
  };

function u(e, t) {
  var n = [],
    r = [],
    i = [],
    o = [],
    a = (0, l.o)(e),
    s = a.dtstart,
    c = a.tzid;
  return g(e, t.unfold).forEach(function(e) {
    if (e) {
      var t, a = h(e),
        s = a.name,
        u = a.parms,
        d = a.value;
      switch (s.toUpperCase()) {
        case "RRULE":
          if (u.length) throw Error("unsupported RRULE parm: ".concat(u.join(",")));
          n.push((0, l.B)(e));
          break;
        case "RDATE":
          var f = null != (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) ? t : [],
            p = f[1];
          p && !c && (c = p), r = r.concat(b(d, u));
          break;
        case "EXRULE":
          if (u.length) throw Error("unsupported EXRULE parm: ".concat(u.join(",")));
          i.push((0, l.B)(d));
          break;
        case "EXDATE":
          o = o.concat(b(d, u));
          break;
        case "DTSTART":
          break;
        default:
          throw Error("unsupported property: " + s)
      }
    }
  }), {
    dtstart: s,
    tzid: c,
    rrulevals: n,
    rdatevals: r,
    exrulevals: i,
    exdatevals: o
  }
}

function d(e, t) {
  var n = u(e, t),
    r = n.rrulevals,
    a = n.rdatevals,
    s = n.exrulevals,
    l = n.exdatevals,
    c = n.dtstart,
    d = n.tzid,
    f = false === t.cache;
  if (t.compatible && (t.forceset = true, t.unfold = true), t.forceset || r.length > 1 || a.length || s.length || l.length) {
    var _ = new o.p(f);
    return _.dtstart(c), _.tzid(d || true), r.forEach(function(e) {
      _.rrule(new i.Ci(p(e, c, d), f))
    }), a.forEach(function(e) {
      _.rdate(e)
    }), s.forEach(function(e) {
      _.exrule(new i.Ci(p(e, c, d), f))
    }), l.forEach(function(e) {
      _.exdate(e)
    }), t.compatible && t.dtstart && _.rdate(c), _
  }
  var m = r[0] || {};
  return new i.Ci(p(m, m.dtstart || t.dtstart || c, m.tzid || t.tzid || d), f)
}

function f(e, t) {
  return true === t && (t = {}), d(e, _(t))
}

function p(e, t, n) {
  return (0, r.pi)((0, r.pi)({}, e), {
    dtstart: t,
    tzid: n
  })
}

function _(e) {
  var t = [],
    n = Object.keys(e),
    i = Object.keys(c);
  if (n.forEach(function(e) {
      (0, s.q9)(i, e) || t.push(e)
    }), t.length) throw Error("Invalid options: " + t.join(", "));
  return (0, r.pi)((0, r.pi)({}, c), e)
}

function m(e) {
  if (false === e.indexOf(":")) return {
    name: "RRULE",
    value: e
  };
  var t = (0, s.Vl)(e, ":", 1);
  return {
    name: t[0],
    value: t[1]
  }
}

function h(e) {
  var t = m(e),
    n = t.name,
    r = t.value,
    i = n.split(";");
  if (!i) throw Error("empty property name");
  return {
    name: i[0].toUpperCase(),
    parms: i.slice(1),
    value: r
  }
}

function g(e, t) {
  if (true === t && (t = false), !(e = e && e.trim())) throw Error("Invalid empty string");
  if (!t) return e.split(/\s/);
  for (var n = e.split("\n"), r = 0; r < n.length;) {
    var i = n[r] = n[r].replace(/\s+$/g, "");
    i ? r > 0 && " " === i[0] ? (n[r - 1] += i.slice(1), n.splice(r, 1)) : r += 1 : n.splice(r, 1)
  }
  return n
}

function E(e) {
  e.forEach(function(e) {
    if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error("unsupported RDATE/EXDATE parm: " + e)
  })
}

function b(e, t) {
  return E(t), e.split(",").map(function(e) {
    return (0, a.gE)(e)
  })
}