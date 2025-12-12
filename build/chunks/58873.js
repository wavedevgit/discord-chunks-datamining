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
  if (n === o.evJ.ENTITY_TOO_LARGE) {
    let e = (0, i.dg)(t);
    return r.Z.show({
      title: a.intl.string(a.t["/tGlcj"]),
      body: a.intl.formatToPlainString(a.t.fxEKdS, {
        maxSize: (0, i.Ng)(e)
      })
    }), true
  }
  return n === o.evJ.TOO_MANY_ATTACHMENTS ? (r.Z.show({
    title: a.intl.string(a.t.wOr6hB),
    body: a.intl.formatToPlainString(a.t["qqyp/e"], {
      limit: o.dN1
    })
  }), true) : (n === o.evJ.ENTITY_EMPTY && r.Z.show({
    title: a.intl.string(a.t.B3vFdU),
    body: a.intl.string(a.t["9ZpT2C"])
  }), false)
}