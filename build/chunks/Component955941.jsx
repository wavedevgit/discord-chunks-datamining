/** Chunk was on 78888 **/
/** chunk id: 955941, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk328650 = require("./328650.jsx"),
  Chunk863036 = require("./863036.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk351906 = require("./351906.js"),
  Chunk652215 = require("./652215.js");

function u() {
  let e = (0, i.bG)([c.A], () => c.A.hideInstantInvites),
    {
      channel: t,
      guild: n
    } = (0, i.cf)([s.A, a.A], () => {
      let {
        channel: e
      } = s.A.getProps(), t = null != e ? a.A.getGuild(e.getGuildId()) : null;
      return {
        channel: e,
        guild: t
      }
    }, []),
    u = (0, i.bG)([o.A], () => null != t && o.A.can(d.xBc.CREATE_INSTANT_INVITE, t), [t]),
    {
      invites: h,
      loading: g
    } = (0, i.cf)([s.A], () => s.A.getInvites(), []);
  return (0, l.jsx)(r.A, {
    invites: h,
    loading: g,
    guild: n,
    channel: t,
    canCreateInvites: u,
    hide: e
  })
}