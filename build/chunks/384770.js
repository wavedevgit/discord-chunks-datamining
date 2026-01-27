/** Chunk was on web.js **/
/** chunk id: 384770, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => i
});
var Chunk124651 = require("./124651.js");

function i(e, t, n) {
  if (t === n) returntrue;
  if (!t || !n) returnfalse;
  for (let i of e.fields) {
    let e = i.localName,
      c = i.oneof ? t[i.oneof][e] : t[e],
      u = i.oneof ? n[i.oneof][e] : n[e];
    switch (i.kind) {
      case "enum":
      case "scalar":
        let d = "enum" == i.kind ? r.LN.INT32 : i.T;
        if (!(i.repeat ? s(d, c, u) : o(d, c, u))) returnfalse;
        break;
      case "map":
        if (!("message" == i.V.kind ? l(i.V.T(), a(c), a(u)) : s("enum" == i.V.kind ? r.LN.INT32 : i.V.T, a(c), a(u)))) returnfalse;
        break;
      case "message":
        let f = i.T();
        if (!(i.repeat ? l(f, c, u) : f.equals(c, u))) returnfalse
    }
  }
  returntrue
}
let a = Object.values;

function o(e, t, n) {
  if (t === n) returntrue;
  if (e !== r.LN.BYTES) returnfalse;
  let i = t,
    a = n;
  if (i.length !== a.length) returnfalse;
  for (let e = 0; e < i.length; e++)
    if (i[e] != a[e]) returnfalse;
  returntrue
}

function s(e, t, n) {
  if (t.length !== n.length) returnfalse;
  for (let r = 0; r < t.length; r++)
    if (!o(e, t[r], n[r])) returnfalse;
  returntrue
}

function l(e, t, n) {
  if (t.length !== n.length) returnfalse;
  for (let r = 0; r < t.length; r++)
    if (!e.equals(t[r], n[r])) returnfalse;
  returntrue
}