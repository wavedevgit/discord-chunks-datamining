/** Chunk was on web.js **/
/** chunk id: 774343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var r, i, a, o, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk365113 = require("./365113.js"),
  Chunk592125 = require("./592125.js"),
  Chunk896797 = require("./896797.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk55589 = require("./55589.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = (null != (a = null == (i = window) || null == (r = i.location) ? true : r.pathname) ? a : "").startsWith(Chunk981631.Z5c.ACTIVITIES) ? Chunk981631.Z5c.ACTIVITIES : null;

function E() {
  let e = Chunk55589.Z.getPrivateChannelIds(),
    t = Chunk944486.Z.getChannelId(Chunk981631.ME);
  (null != exports || null != module[0]) && (g = Chunk981631.Z5c.CHANNEL(Chunk981631.ME, null != exports ? exports : module[0]))
}

function b(e) {
  let {
    link: t
  } = e;
  if (g === t) returnfalse;
  g = t
}

function y() {
  if (null == g || !g.startsWith(Chunk981631.Z5c.APPLICATION_STORE)) returnfalse;
  g = Chunk981631.Z5c.APPLICATION_STORE
}

function O(e) {
  let {
    location: t
  } = e;
  b({
    link: t.pathname,
    type: "APP_VIEW_SET_HOME_LINK"
  })
}

function v(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  if (null == t && null != n && !c.o.getConfig({
      location: "appviewstore"
    }).dmsTab) {
    let e = m.Z5c.CHANNEL(m.ME, n);
    if (e !== g) return g = e, true
  }
  returnfalse
}

function S(e) {
  let {
    channel: t
  } = e;
  null == t.guild_id && null != t.id && null != g && g === m.Z5c.CHANNEL(m.ME, t.id) && (g = null)
}
class I extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk896797.Z, Chunk55589.Z, Chunk944486.Z, Chunk430824.Z, Chunk592125.Z)
  }
  getHomeLink() {
    return null != g ? g : Chunk896797.Z.fallbackRoute
  }
}
h(I, "displayName", "AppViewStore");
let T = new I(Chunk570140.Z, {
  OVERLAY_INITIALIZE: E,
  APP_VIEW_SET_HOME_LINK: b,
  APPLICATION_STORE_LOCATION_CHANGE: O,
  APPLICATION_STORE_RESET_NAVIGATION: y,
  CHANNEL_SELECT: v,
  CHANNEL_DELETE: S
})