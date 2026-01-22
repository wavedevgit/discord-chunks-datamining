/** Chunk was on web.js **/
/** chunk id: 944010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => a
});
var Chunk124651 = require("./124651.js"),
  Chunk241518 = require("./241518.js");
class a {
  constructor(e) {
    var t;
    this.fields = null != (t = e.fields) ? t : []
  }
  prepare() {
    if (this.data) return;
    let e = [],
      t = [],
      n = [];
    for (let r of this.fields)
      if (r.oneof) n.includes(r.oneof) || (n.push(r.oneof), e.push(r.oneof), t.push(r.oneof));
      else switch (t.push(r.localName), r.kind) {
        case "scalar":
        case "enum":
          (!r.opt || r.repeat) && e.push(r.localName);
          break;
        case "message":
          r.repeat && e.push(r.localName);
          break;
        case "map":
          e.push(r.localName)
      }
    this.data = {
      req: e,
      known: t,
      oneofs: Object.values(n)
    }
  }
  is(e, t, n = false) {
    if (t < 0) returntrue;
    if (null == e || "object" != typeof e) returnfalse;
    this.prepare();
    let r = Object.keys(e),
      a = this.data;
    if (r.length < a.req.length || a.req.some(e => !r.includes(e)) || !n && r.some(e => !a.known.includes(e))) returnfalse;
    if (t < 1) returntrue;
    for (let r of a.oneofs) {
      let a = e[r];
      if (!(0, i.Zs)(a)) returnfalse;
      if (true === a.oneofKind) continue;
      let s = this.fields.find(e => e.localName === a.oneofKind);
      if (!s || !this.field(a[a.oneofKind], s, n, t)) returnfalse
    }
    for (let r of this.fields)
      if (true === r.oneof && !this.field(e[r.localName], r, n, t)) returnfalse;
    returntrue
  }
  field(e, t, n, i) {
    let a = t.repeat;
    switch (t.kind) {
      case "scalar":
        if (true === e) return t.opt;
        if (a) return this.scalars(e, t.T, i, t.L);
        return this.scalar(e, t.T, t.L);
      case "enum":
        if (true === e) return t.opt;
        if (a) return this.scalars(e, r.LN.INT32, i);
        return this.scalar(e, r.LN.INT32);
      case "message":
        if (true === e) break;
        if (a) return this.messages(e, t.T(), n, i);
        return this.message(e, t.T(), n, i);
      case "map":
        if ("object" != typeof e || null === e) returnfalse;
        if (i < 2) break;
        if (!this.mapKeys(e, t.K, i)) returnfalse;
        switch (t.V.kind) {
          case "scalar":
            return this.scalars(Object.values(e), t.V.T, i, t.V.L);
          case "enum":
            return this.scalars(Object.values(e), r.LN.INT32, i);
          case "message":
            return this.messages(Object.values(e), t.V.T(), n, i)
        }
    }
    returntrue
  }
  message(e, t, n, r) {
    return n ? t.isAssignable(e, r) : t.is(e, r)
  }
  messages(e, t, n, r) {
    if (!Array.isArray(e)) returnfalse;
    if (r < 2) returntrue;
    if (n) {
      for (let n = 0; n < e.length && n < r; n++)
        if (!t.isAssignable(e[n], r - 1)) returnfalse
    } else
      for (let n = 0; n < e.length && n < r; n++)
        if (!t.is(e[n], r - 1)) returnfalse;
    returntrue
  }
  scalar(e, t, n) {
    let i = typeof e;
    switch (t) {
      case r.LN.UINT64:
      case r.LN.FIXED64:
      case r.LN.INT64:
      case r.LN.SFIXED64:
      case r.LN.SINT64:
        switch (n) {
          case r.rO.BIGINT:
            return "bigint" == i;
          case r.rO.NUMBER:
            return "number" == i && !isNaN(e);
          default:
            return "string" == i
        }
      case r.LN.BOOL:
        return "boolean" == i;
      case r.LN.STRING:
        return "string" == i;
      case r.LN.BYTES:
        return e instanceof Uint8Array;
      case r.LN.DOUBLE:
      case r.LN.FLOAT:
        return "number" == i && !isNaN(e);
      default:
        return "number" == i && Number.isInteger(e)
    }
  }
  scalars(e, t, n, r) {
    if (!Array.isArray(e)) returnfalse;
    if (n < 2) returntrue;
    if (Array.isArray(e)) {
      for (let i = 0; i < e.length && i < n; i++)
        if (!this.scalar(e[i], t, r)) returnfalse
    }
    returntrue
  }
  mapKeys(e, t, n) {
    let i = Object.keys(e);
    switch (t) {
      case r.LN.INT32:
      case r.LN.FIXED32:
      case r.LN.SFIXED32:
      case r.LN.SINT32:
      case r.LN.UINT32:
        return this.scalars(i.slice(0, n).map(e => parseInt(e)), t, n);
      case r.LN.BOOL:
        return this.scalars(i.slice(0, n).map(e => "true" == e || "false" != e && e), t, n);
      default:
        return this.scalars(i, t, n, r.rO.STRING)
    }
  }
}