/** Chunk was on web.js **/
/** chunk id: 786300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");

function a() {
  let e = i.createContext(true);

  function t() {
    let t = i.useContext(e);
    if (null == t) throw Error("Context was used outside of defined provider.");
    return t
  }

  function n() {
    let n = t();
    return function(t) {
      let {
        children: i
      } = t;
      return (0, r.jsx)(e.Provider, {
        value: n,
        children: i
      })
    }
  }
  return [e, t, n]
}