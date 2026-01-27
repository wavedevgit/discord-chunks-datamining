/** Chunk was on web.js **/
/** chunk id: 721592, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c,
  p: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk717125 = require("./717125.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");
let l = {
  needSubscriptionToAccess: false,
  isSubscriptionGated: false
};

function c(e) {
  return (0, r.cf)([a.A, i.A, o.A], () => u(e, a.A, i.A, o.A), [e])
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a.A,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : i.A,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : o.A,
    c = t.getChannel(e);
  return (null == c ? true : c.isRoleSubscriptionTemplatePreviewChannel()) ? {
    isSubscriptionGated: true,
    needSubscriptionToAccess: true
  } : null != c && n.isChannelGated(c.guild_id, c.id) ? {
    isSubscriptionGated: true,
    needSubscriptionToAccess: c.isGuildVocal() ? !r.can(s.xBc.CONNECT, c) : !r.can(s.xBc.VIEW_CHANNEL, c)
  } : l
}