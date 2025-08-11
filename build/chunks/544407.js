/** Chunk was on web.js **/
/** chunk id: 544407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => s
}), require("./388685.js"), require("./539854.js"), require("./642613.js"), require("./49124.js");
var Chunk843991 = require("./843991.js"),
  Chunk625306 = require("./625306.js");
require("./902704.js"), require("./626135.js"), require("./981631.js");

function o(e, t, n, i) {
  if (e === t || i && true === e && null === t) returntrue;
  if ("object" != typeof e || "object" != typeof t || null === e || null === t) returnfalse;
  if (n.has(e)) return n.get(e) === t;
  if (n.set(e, t), e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
  if (e instanceof Set && t instanceof Set) return (0, r.O)(e, t);
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) returnfalse;
    for (let r = 0; r < e.length; r++)
      if (!o(e[r], t[r], n, false)) returnfalse;
    returntrue
  }
  if (Array.isArray(e) || Array.isArray(t)) returnfalse;
  let a = Object.keys(e),
    s = Object.keys(t);
  if (a.length !== s.length) returnfalse;
  for (let r of a)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !o(e[r], t[r], n, false)) returnfalse;
  returntrue
}

function a(e, t) {
  return o(e, t, new Map, true)
}

function s(e, t, n) {
  let r = [];
  t.derived.length !== n.derived.length && r.push({
    type: "length-mismatch",
    primaryLength: t.derived.length,
    shadowLength: n.derived.length
  });
  let i = Object.keys(t.root),
    o = Object.keys(n.root);
  for (let e of i) {
    if (!Object.prototype.hasOwnProperty.call(n.root, e)) {
      r.push({
        type: "missing-record",
        key: e
      });
      continue
    }
    let i = l(e, t.root[e], n.root[e]);
    null != i && r.push(i)
  }
  for (let e of o) Object.prototype.hasOwnProperty.call(t.root, e) || r.push({
    type: "extra-record",
    key: e
  });
  r.length > 0 && d(e, r)
}

function l(e, t, n) {
  let r = [];
  for (let e in t)
    if (Object.prototype.hasOwnProperty.call(t, e)) {
      let i = t[e];
      if (!Object.prototype.hasOwnProperty.call(n, e)) {
        r.push({
          type: "field-missing",
          field: e
        });
        continue
      }
      let o = n[e];
      a(i, o) || r.push({
        type: "value-mismatch",
        field: e,
        primaryValue: i,
        shadowValue: o
      })
    } if (r.length > 0) return {
    type: "record-mismatch",
    key: e,
    primaryRecord: t,
    shadowRecord: n,
    mismatches: r
  }
}

function c(e) {
  return "object" == typeof e && null !== e && !Array.isArray(e) && !(e instanceof Date) && !(e instanceof Set)
}

function u(e, t) {
  let n = new Map;

  function r(e, t) {
    if (!a(e, t)) {
      if ("object" == typeof e && null !== e && "object" == typeof t && null !== t) {
        if (n.has(e)) return void(n.get(e) === t ? console.info("Cycle detected, already compared") : console.info("Cycle detected but different corresponding object"));
        n.set(e, t)
      }
      if (e instanceof Date && t instanceof Date) return void console.info("Date mismatch: primary ".concat(e, ", shadow ").concat(t));
      if (e instanceof Set && t instanceof Set) {
        let n = [...e].filter(e => !t.has(e)),
          r = [...t].filter(t => !e.has(t));
        n.length > 0 && console.info("Only in primary: ", n), r.length > 0 && console.info("Only in shadow: ", r);
        return
      }
      if (Array.isArray(e) && Array.isArray(t)) {
        let n = Math.min(e.length, t.length);
        for (let i = 0; i < n; i++) a(e[i], t[i]) || (console.group("Array index ".concat(i, " mismatch:")), r(e[i], t[i]), console.groupEnd());
        e.length > t.length ? console.info("Extra in primary: ", e.slice(t.length)) : t.length > e.length && console.info("Extra in shadow: ", t.slice(e.length));
        return
      }
      if (c(e) && c(t)) {
        let n = new Set(Object.keys(e)),
          i = new Set(Object.keys(t));
        for (let o of Array.from(new Set([...n, ...i])).sort()) n.has(o) ? i.has(o) ? a(e[o], t[o]) || (console.group("Field ".concat(o, " mismatch:")), r(e[o], t[o]), console.groupEnd()) : console.info("Missing field in shadow: ".concat(o, " = "), e[o]) : console.info("Extra field in shadow: ".concat(o, " = "), t[o]);
        return
      }
      console.info("Value mismatch: primary ", e, " shadow ", t)
    }
  }
  r(e, t)
}

function d(e, t) {
  if (0 === t.length) return;
  console.groupCollapsed("[KvStore:".concat(e, "] Dual-read validation found ").concat(t.length, " error(s)")), console.info("Last Few Actions: ", i.qC());
  let n = [],
    r = [];
  t.forEach(e => {
    switch (e.type) {
      case "length-mismatch":
        console.info("Length mismatch → primary = ".concat(e.primaryLength, ", shadow = ").concat(e.shadowLength));
        break;
      case "missing-record":
        n.push(e.key);
        break;
      case "extra-record":
        r.push(e.key);
        break;
      case "record-mismatch":
        console.groupCollapsed('Record mismatch for key "'.concat(e.key, '"')), e.mismatches.forEach(e => {
          "field-missing" === e.type ? console.info("Field missing: ".concat(String(e.field))) : (console.groupCollapsed('Field "'.concat(String(e.field), '" value mismatch')), u(e.primaryValue, e.shadowValue), console.groupEnd())
        }), console.groupEnd()
    }
  }), n.length > 0 && console.info("Missing records in shadow state: ".concat(n.join(", "))), r.length > 0 && console.info("Extra records in shadow state: ".concat(r.join(", "))), console.groupEnd()
}

function f(e) {
  return null === e ? "null" : "object" != typeof e ? typeof e : Array.isArray(e) ? "array" : "object"
}