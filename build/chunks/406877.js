/** Chunk was on 26434 **/
/** chunk id: 406877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk668781 = require("./668781.js"),
  Chunk881052 = require("./881052.js"),
  Chunk824389 = require("./824389.js"),
  Chunk179838 = require("./179838.js"),
  Chunk388032 = require("./388032.jsx");

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
          } = await o.gs({
            guildId: e,
            productId: t,
            attachmentId: n
          });
          await a.L(r)
        } catch (t) {
          let e = t instanceof l.Hx ? t.getAnyErrorMessage() : true;
          i.Z.show({
            title: s.intl.string(s.t.R0RpRU),
            body: null != e ? e : s.intl.string(s.t.eAn6z8)
          })
        } finally {
          c(false)
        }
      }
    }, [e, t])
  }
}