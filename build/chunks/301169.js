/** Chunk was on web.js **/
/** chunk id: 301169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => s
});
var Chunk579872 = require("./579872.jsx"),
  Chunk453771 = require("./453771.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let {
    guildId: t,
    code: n
  } = e;
  if (n === a.t02.ENTITY_TOO_LARGE) {
    let e = (0, i.o2)(t);
    return r.A.show({
      title: o.intl.string(o.t["/tGlcj"]),
      body: o.intl.formatToPlainString(o.t.fxEKdS, {
        maxSize: (0, i.Hb)(e)
      })
    }), true
  }
  return n === a.t02.TOO_MANY_ATTACHMENTS ? (r.A.show({
    title: o.intl.string(o.t.wOr6hB),
    body: o.intl.formatToPlainString(o.t["qqyp/e"], {
      limit: a.XgB
    })
  }), true) : n === a.t02.ENTITY_EMPTY ? (r.A.show({
    title: o.intl.string(o.t.B3vFdU),
    body: o.intl.string(o.t["9ZpT2C"])
  }), true) : n === a.t02.INVALID_FILE_ASSET && (r.A.show({
    title: o.intl.string(o.t.B3vFdU),
    body: o.intl.string(o.t.zMEjJg)
  }), true)
}