/** Chunk was on web.js **/
/** chunk id: 666171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk157559 = require("./157559.js"),
  Chunk198982 = require("./198982.js"),
  Chunk306522 = require("./306522.js"),
  Chunk922482 = require("./922482.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t) {
  let [n, c] = r.useState(false);
  return {
    isLoading: n,
    downloadAttachment: r.useCallback(async n => {
      if (null != e && null != t) {
        c(true);
        try {
          let {
            url: r
          } = await s.P0({
            guildId: e,
            productId: t,
            attachmentId: n
          });
          await o.R(r)
        } catch (t) {
          let e = t instanceof a.LG ? t.getAnyErrorMessage() : true;
          i.A.show({
            title: l.intl.string(l.t.R0RpRX),
            body: null != e ? e : l.intl.string(l.t.eAn6z2)
          })
        } finally {
          c(false)
        }
      }
    }, [e, t])
  }
}