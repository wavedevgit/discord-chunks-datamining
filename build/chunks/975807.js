/** Chunk was on web.js **/
/** chunk id: 975807, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk723702 = require("./723702.js");
async function i(e, t) {
  let {
    default: i
  } = await Promise.resolve().then(n.bind(n, 352423)), a = i(e, {
    skipExtensionCheck: t,
    analyticsLocations: []
  });
  if (null != a) a(null);
  else if (r.isPlatformEmbedded) window.open(e);
  else {
    let t = document.createElement("a");
    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
  }
}