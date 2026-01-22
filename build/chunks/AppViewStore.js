/** Chunk was on web.js **/
/** chunk id: 619921, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var r, i, a, s, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk650048 = require("./650048.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk645959 = require("./645959.js"),
  Chunk652215 = require("./652215.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = (null != (r = null == (a = window) || null == (i = a.location) ? true : i.pathname) ? r : "").startsWith(Chunk652215.BVt.ACTIVITIES) ? Chunk652215.BVt.ACTIVITIES : null;

function g() {
  let e = p.A.getPrivateChannelIds(),
    t = f.A.getChannelId(_.ME);
  (null != t || null != e[0]) && (m = _.BVt.CHANNEL(_.ME, null != t ? t : e[0]))
}

function E(e) {
  let {
    link: t
  } = e;
  if (m === t) returnfalse;
  m = t
}

function b() {
  if (null == m || !m.startsWith(_.BVt.APPLICATION_STORE)) returnfalse;
  m = _.BVt.APPLICATION_STORE
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
    let e = _.BVt.CHANNEL(_.ME, n);
    if (e !== m) return m = e, true
  }
  returnfalse
}

function A(e) {
  let {
    channel: t
  } = e;
  null == t.guild_id && null != t.id && null != m && m === _.BVt.CHANNEL(_.ME, t.id) && (m = null)
}
class v extends(s = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A, p.A, f.A, d.A, c.A)
  }
  getHomeLink() {
    return null != m ? m : u.A.fallbackRoute
  }
}
h(v, "displayName", "AppViewStore");
let S = new v(Chunk73153.h, {
  OVERLAY_INITIALIZE: g,
  APP_VIEW_SET_HOME_LINK: E,
  APPLICATION_STORE_LOCATION_CHANGE: y,
  APPLICATION_STORE_RESET_NAVIGATION: b,
  CHANNEL_SELECT: O,
  CHANNEL_DELETE: A
})