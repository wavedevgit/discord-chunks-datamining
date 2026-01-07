/** Chunk was on 86915 **/
/** chunk id: 428813, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk270394 = require("./270394.jsx"),
  Chunk388610 = require("./388610.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk246946 = require("./246946.js"),
  Chunk981631 = require("./981631.js");

function u() {
  let e = (0, l.e7)([c.Z], () => c.Z.hideInstantInvites),
    {
      channel: t,
      guild: n
    } = (0, l.cj)([a.Z, s.Z], () => {
      let {
        channel: e
      } = a.Z.getProps(), t = null != e ? s.Z.getGuild(e.getGuildId()) : null;
      return {
        channel: e,
        guild: t
      }
    }, []),
    u = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.CREATE_INSTANT_INVITE, t), [t]),
    {
      invites: h,
      loading: g
    } = (0, l.cj)([a.Z], () => a.Z.getInvites(), []);
  return (0, i.jsx)(r.Z, {
    invites: h,
    loading: g,
    guild: n,
    channel: t,
    canCreateInvites: u,
    hide: e
  })
}