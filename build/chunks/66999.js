/** Chunk was on web.js **/
/** chunk id: 66999, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => u,
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk430198 = require("./430198.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
let l = {
  needSubscriptionToAccess: false,
  isSubscriptionGated: false
};

function c(e) {
  return (0, r.cj)([a.Z, i.Z, o.Z], () => u(e, a.Z, i.Z, o.Z), [e])
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a.Z,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : i.Z,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : o.Z,
    c = t.getChannel(e);
  return (null == c ? true : c.isRoleSubscriptionTemplatePreviewChannel()) ? {
    isSubscriptionGated: true,
    needSubscriptionToAccess: true
  } : null != c && n.isChannelGated(c.guild_id, c.id) ? {
    isSubscriptionGated: true,
    needSubscriptionToAccess: c.isGuildVocal() ? !r.can(s.Plq.CONNECT, c) : !r.can(s.Plq.VIEW_CHANNEL, c)
  } : l
}