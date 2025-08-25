/** Chunk was on web.js **/
/** chunk id: 284267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => i
});
var Chunk36056 = require("./36056.js");

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
        let d = "enum" == i.kind ? r.wx.INT32 : i.T;
        if (!(i.repeat ? s(d, c, u) : a(d, c, u))) returnfalse;
        break;
      case "map":
        if (!("message" == i.V.kind ? l(i.V.T(), o(c), o(u)) : s("enum" == i.V.kind ? r.wx.INT32 : i.V.T, o(c), o(u)))) returnfalse;
        break;
      case "message":
        let f = i.T();
        if (!(i.repeat ? l(f, c, u) : f.equals(c, u))) returnfalse
    }
  }
  returntrue
}
let o = Object.values;

function a(e, t, n) {
  if (t === n) returntrue;
  if (e !== r.wx.BYTES) returnfalse;
  let i = t,
    o = n;
  if (i.length !== o.length) returnfalse;
  for (let e = 0; e < i.length; e++)
    if (i[e] != o[e]) returnfalse;
  returntrue
}

function s(e, t, n) {
  if (t.length !== n.length) returnfalse;
  for (let r = 0; r < t.length; r++)
    if (!a(e, t[r], n[r])) returnfalse;
  returntrue
}

function l(e, t, n) {
  if (t.length !== n.length) returnfalse;
  for (let r = 0; r < t.length; r++)
    if (!e.equals(t[r], n[r])) returnfalse;
  returntrue
}