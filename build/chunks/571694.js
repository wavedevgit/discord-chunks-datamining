/** Chunk was on web.js **/
/** chunk id: 571694, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => s
}), require("./896048.js");
var Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk403362 = require("./403362.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 32,
    n = arguments.length > 2 ? arguments[2] : true;
  switch (e.type) {
    case o.rbe.DM:
      let [s] = e.recipients.map(r.default.getUser).filter(a.Vq);
      if (null == s) return null;
      return s.getAvatarURL(true, t, n);
    case o.rbe.GROUP_DM:
      return i.Ay.getChannelIconURL({
        id: e.id,
        icon: e.icon,
        applicationId: e.getApplicationId(),
        size: t
      })
  }
}