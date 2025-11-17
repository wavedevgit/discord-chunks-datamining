/** Chunk was on web.js **/
/** chunk id: 150677, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i() {
  let e = window,
    [t, n] = Chunk473749.useState(module.document.hasFocus());
  return Chunk473749.useEffect(() => {
    let t = () => require(true),
      r = () => require(false);
    return module.addEventListener("focus", exports), module.addEventListener("blur", Chunk473749), () => {
      module.removeEventListener("focus", exports), module.removeEventListener("blur", Chunk473749)
    }
  }, [module]), exports
}