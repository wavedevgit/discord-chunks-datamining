/** Chunk was on 92917 **/
/** chunk id: 666171, original params: e,t,n (module,exports,require) **/
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
          } = await a.P0({
            guildId: e,
            productId: t,
            attachmentId: n
          });
          await s.R(r)
        } catch (t) {
          let e = t instanceof l.LG ? t.getAnyErrorMessage() : true;
          i.A.show({
            title: o.intl.string(o.t.R0RpRX),
            body: null != e ? e : o.intl.string(o.t.eAn6z2)
          })
        } finally {
          c(false)
        }
      }
    }, [e, t])
  }
}