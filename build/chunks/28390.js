/** Chunk was on web.js **/
/** chunk id: 28390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk367513 = require("./367513.js"),
  Chunk951001 = require("./951001.js"),
  Chunk398590 = require("./398590.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      selectParticipantId: n
    } = t;
  return r.useCallback(() => {
    var t;
    (0, o.bz)();
    let r = null != (t = e.getGuildId()) ? t : l.ME;
    (0, s.uh)(r, e.id), a.A.channelListScrollTo(r, e.id), null != n && i.A.selectParticipant(e.id, n)
  }, [e, n])
}