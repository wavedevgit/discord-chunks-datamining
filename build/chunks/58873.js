/** Chunk was on web.js **/
/** chunk id: 58873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk240872 = require("./240872.jsx"),
  Chunk403182 = require("./403182.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    guildId: t,
    code: n
  } = e;
  if (n === a.evJ.ENTITY_TOO_LARGE) {
    let e = (0, i.dg)(t);
    return r.Z.show({
      title: o.intl.string(o.t["/tGlcj"]),
      body: o.intl.formatToPlainString(o.t.fxEKdS, {
        maxSize: (0, i.Ng)(e)
      })
    }), true
  }
  return n === a.evJ.TOO_MANY_ATTACHMENTS ? (r.Z.show({
    title: o.intl.string(o.t.wOr6hB),
    body: o.intl.formatToPlainString(o.t["qqyp/e"], {
      limit: a.dN1
    })
  }), true) : (n === a.evJ.ENTITY_EMPTY && r.Z.show({
    title: o.intl.string(o.t.B3vFdU),
    body: o.intl.string(o.t["9ZpT2C"])
  }), false)
}