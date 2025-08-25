/** Chunk was on web.js **/
/** chunk id: 886138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = {
  get: i
};

function i(e) {
  if (e) return e;
  if ("undefined" != typeof DOMParser) return new DOMParser;
  try {
    let {
      DOMParser: e,
      onErrorStopParsing: t
    } = require("@xmldom/xmldom");
    return new e({
      onError: t
    })
  } catch (e) {
    return
  }
}