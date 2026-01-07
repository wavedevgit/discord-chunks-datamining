/** Chunk was on web.js **/
/** chunk id: 975104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");

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