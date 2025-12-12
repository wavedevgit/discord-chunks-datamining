/** Chunk was on web.js **/
/** chunk id: 43267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => s
}), require("./388685.js");
var Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 32,
    n = arguments.length > 2 ? arguments[2] : true;
  switch (e.type) {
    case o.d4z.DM:
      let [s] = e.recipients.map(r.default.getUser).filter(a.lm);
      if (null == s) return null;
      return s.getAvatarURL(true, t, n);
    case o.d4z.GROUP_DM:
      return i.ZP.getChannelIconURL({
        id: e.id,
        icon: e.icon,
        applicationId: e.getApplicationId(),
        size: t
      })
  }
}