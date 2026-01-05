/** Chunk was on web.js **/
/** chunk id: 774343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var r, i, a, o, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk896797 = require("./896797.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk55589 = require("./55589.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = (null != (a = null == (i = window) || null == (r = i.location) ? true : r.pathname) ? a : "").startsWith(Chunk981631.Z5c.ACTIVITIES) ? Chunk981631.Z5c.ACTIVITIES : null;

function g() {
  let e = Chunk55589.Z.getPrivateChannelIds(),
    t = Chunk944486.Z.getChannelId(Chunk981631.ME);
  (null != exports || null != module[0]) && (h = Chunk981631.Z5c.CHANNEL(Chunk981631.ME, null != exports ? exports : module[0]))
}

function E(e) {
  let {
    link: t
  } = e;
  if (h === t) returnfalse;
  h = t
}

function b() {
  if (null == h || !h.startsWith(Chunk981631.Z5c.APPLICATION_STORE)) returnfalse;
  h = Chunk981631.Z5c.APPLICATION_STORE
}

function y(e) {
  let {
    location: t
  } = e;
  E({
    link: t.pathname,
    type: "APP_VIEW_SET_HOME_LINK"
  })
}

function O(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  if (null == t && null != n) {
    let e = _.Z5c.CHANNEL(_.ME, n);
    if (e !== h) return h = e, true
  }
  returnfalse
}

function v(e) {
  let {
    channel: t
  } = e;
  null == t.guild_id && null != t.id && null != h && h === _.Z5c.CHANNEL(_.ME, t.id) && (h = null)
}
class S extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk896797.Z, Chunk55589.Z, Chunk944486.Z, Chunk430824.Z, Chunk592125.Z)
  }
  getHomeLink() {
    return null != h ? h : Chunk896797.Z.fallbackRoute
  }
}
m(S, "displayName", "AppViewStore");
let I = new S(Chunk570140.Z, {
  OVERLAY_INITIALIZE: g,
  APP_VIEW_SET_HOME_LINK: E,
  APPLICATION_STORE_LOCATION_CHANGE: y,
  APPLICATION_STORE_RESET_NAVIGATION: b,
  CHANNEL_SELECT: O,
  CHANNEL_DELETE: v
})