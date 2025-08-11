/** Chunk was on web.js **/
/** chunk id: 975104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js");

function o() {
  let e = Chunk73800.createContext(true);

  function t() {
    let t = Chunk73800.useContext(module);
    if (null == exports) throw Error("Context was used outside of defined provider.");
    return exports
  }

  function n() {
    let n = exports();
    return function(t) {
      let {
        children: i
      } = t;
      return <e.Provider value={n}>{i}</e.Provider>
    }
  }
  return [module, exports, require]
}