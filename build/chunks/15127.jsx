/** Chunk was on web.js **/
/** chunk id: 15127, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gc: () => c,
  ol: () => u,
  q3: () => l
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk981631 = require("./981631.js");

function a(e, t) {
  if (null == e) return {};
  var n, r, i = s(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function s(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let l = Chunk73800.createContext({
  titleId: true,
  errorId: true,
  error: true,
  isFocused: true,
  setIsFocused: Chunk981631.dG4,
  hasValue: true,
  setHasValue: Chunk981631.dG4
});

function c() {
  return Chunk73800.useContext(l)
}

function u(e) {
  var {
    children: t
  } = e, n = a(e, ["children"]);
  return <l.Provider value={n}>{t}</l.Provider>
}