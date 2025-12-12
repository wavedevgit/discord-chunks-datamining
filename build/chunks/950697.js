/** Chunk was on web.js **/
/** chunk id: 950697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk36056 = require("./36056.js"),
  Chunk350508 = require("./350508.js");
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
      if (Chunk36056.oneof) require.includes(Chunk36056.oneof) || (require.push(Chunk36056.oneof), module.push(Chunk36056.oneof), exports.push(Chunk36056.oneof));
      else switch (exports.push(Chunk36056.localName), Chunk36056.kind) {
        case "scalar":
        case "enum":
          (!Chunk36056.opt || Chunk36056.repeat) && module.push(Chunk36056.localName);
          break;
        case "message":
          Chunk36056.repeat && module.push(Chunk36056.localName);
          break;
        case "map":
          module.push(Chunk36056.localName)
      }
    this.data = {
      req: module,
      known: exports,
      oneofs: Object.values(require)
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
      if (!(0, i.Li)(a)) returnfalse;
      if (true === a.oneofKind) continue;
      let o = this.fields.find(e => e.localName === a.oneofKind);
      if (!o || !this.field(a[a.oneofKind], o, n, t)) returnfalse
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
        if (a) return this.scalars(e, r.wx.INT32, i);
        return this.scalar(e, r.wx.INT32);
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
            return this.scalars(Object.values(e), r.wx.INT32, i);
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
      case r.wx.UINT64:
      case r.wx.FIXED64:
      case r.wx.INT64:
      case r.wx.SFIXED64:
      case r.wx.SINT64:
        switch (n) {
          case r.pz.BIGINT:
            return "bigint" == i;
          case r.pz.NUMBER:
            return "number" == i && !isNaN(e);
          default:
            return "string" == i
        }
      case r.wx.BOOL:
        return "boolean" == i;
      case r.wx.STRING:
        return "string" == i;
      case r.wx.BYTES:
        return e instanceof Uint8Array;
      case r.wx.DOUBLE:
      case r.wx.FLOAT:
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
      case r.wx.INT32:
      case r.wx.FIXED32:
      case r.wx.SFIXED32:
      case r.wx.SINT32:
      case r.wx.UINT32:
        return this.scalars(i.slice(0, n).map(e => parseInt(e)), t, n);
      case r.wx.BOOL:
        return this.scalars(i.slice(0, n).map(e => "true" == e || "false" != e && e), t, n);
      default:
        return this.scalars(i, t, n, r.pz.STRING)
    }
  }
}