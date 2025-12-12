/** Chunk was on web.js **/
/** chunk id: 406877, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
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
          } = await a.gs({
            guildId: e,
            productId: t,
            attachmentId: n
          });
          await s.L(r)
        } catch (t) {
          let e = t instanceof o.Hx ? t.getAnyErrorMessage() : true;
          i.Z.show({
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