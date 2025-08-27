/** Chunk was on web.js **/
/** chunk id: 690032, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => o
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk593473 = require("./593473.js"),
  Chunk591759 = require("./591759.js");
let a = e => {
    if (null == e || "" === e) return null;
    try {
      let t = new URL(e);
      return i.Z.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null
    } catch (e) {
      return null
    }
  },
  o = e => {
    let t = (0, r.parse)(e);
    return {
      desktop: a(t.desktop_link),
      mobile: a(t.mobile_link)
    }
  }