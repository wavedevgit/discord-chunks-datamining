/** Chunk was on web.js **/
/** chunk id: 150677, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js");

function i() {
  let e = window,
    [t, n] = Chunk647438.useState(module.document.hasFocus());
  return Chunk647438.useEffect(() => {
    let t = () => require(true),
      r = () => require(false);
    return module.addEventListener("focus", exports), module.addEventListener("blur", Chunk647438), () => {
      module.removeEventListener("focus", exports), module.removeEventListener("blur", Chunk647438)
    }
  }, [module]), exports
}