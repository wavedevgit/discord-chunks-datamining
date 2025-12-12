/** Chunk was on web.js **/
/** chunk id: 771206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk122289 = require("./122289.js"),
  Chunk622999 = require("./622999.js");

function o() {
  let [e, t] = Chunk473749.useState(null);
  return Chunk473749.useEffect(() => {
    (0, Chunk622999.d2)().then(e => t(e)).catch(e => {
      (0, i.q2)(e)
    })
  }, []), module
}