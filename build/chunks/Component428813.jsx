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
  let e = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hideInstantInvites),
    {
      channel: t,
      guild: n
    } = (0, Chunk442837.cj)([Chunk388610.Z, Chunk430824.Z], () => {
      let {
        channel: e
      } = Chunk388610.Z.getProps(), t = null != module ? Chunk430824.Z.getGuild(module.getGuildId()) : null;
      return {
        channel: module,
        guild: exports
      }
    }, []),
    u = (0, Chunk442837.e7)([Chunk496675.Z], () => null != exports && Chunk496675.Z.can(Chunk981631.Plq.CREATE_INSTANT_INVITE, exports), [exports]),
    {
      invites: h,
      loading: g
    } = (0, Chunk442837.cj)([Chunk388610.Z], () => Chunk388610.Z.getInvites(), []);
  return (0, Chunk54381.jsx)(Chunk270394.Z, {
    invites: h,
    loading: g,
    guild: require,
    channel: exports,
    canCreateInvites: u,
    hide: module
  })
}