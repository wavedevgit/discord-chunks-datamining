/** Chunk was on web.js **/
/** chunk id: 963027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => d,
  r2: () => p
}), require("./321073.js");
var Chunk95701 = require("./95701.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk47167 = require("./47167.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    isSubscriptionGated: t,
    needSubscriptionToAccess: n
  } = e;
  if (t)
    if (n) return c.intl.string(c.t["oj+HOs"]);
    else return c.intl.string(c.t.xI3TQQ)
}

function d(e) {
  let t, {
      channel: n,
      unread: s = false,
      mentionCount: d = 0,
      userCount: f,
      embeddedActivitiesCount: p,
      isSubscriptionGated: _,
      needSubscriptionToAccess: h
    } = e,
    m = (0, o.m1)(n, a.default, i.A);
  switch (n.type) {
    case l.rbe.DM:
      t = s ? c.t.F2MZsu : c.t.fYqXVY;
      break;
    case l.rbe.GROUP_DM:
      t = s ? c.t["fxxUo/"] : c.t.lts3Ld;
      break;
    case l.rbe.GUILD_STORE:
      t = c.t.Bo4msg;
      break;
    case l.rbe.GUILD_DIRECTORY:
      t = c.t["92EAF2"];
      break;
    case l.rbe.GUILD_ANNOUNCEMENT:
      t = d > 0 ? c.t.sDKIpm : s ? c.t.VM7z8f : c.t.WJ3MPt;
      break;
    case l.rbe.GUILD_VOICE:
      let g = [c.intl.formatToPlainString(c.t.bkpadO, {
        channelName: m
      })];
      if (d > 0 && g.push(c.intl.formatToPlainString(c.t["3l1GOx"], {
          mentionCount: d
        })), s && g.push(c.intl.string(c.t.x5zAGZ)), null != f) {
        let e = n.userLimit;
        null != e && e > 0 ? g.push(c.intl.formatToPlainString(c.t["6qgTOF"], {
          userCount: f,
          limit: e
        })) : g.push(c.intl.formatToPlainString(c.t.GNIiAA, {
          userCount: f
        }))
      }
      null != p && p > 0 && g.push(c.intl.formatToPlainString(c.t.O6PLYd, {
        activitiesCount: p
      }));
      let E = u({
        isSubscriptionGated: _,
        needSubscriptionToAccess: h
      });
      return null != E && g.push(E), g.join(", ");
    case l.rbe.GUILD_STAGE_VOICE:
      t = c.t.TPPk2T;
      break;
    default:
      t = r.Le.has(n.type) ? d > 0 ? c.t["ZL7+I6"] : s ? c.t.YlVvmc : c.t["0nZpiF"] : d > 0 ? c.t.g8ONM0 : s ? c.t.smf1CZ : c.t.s0JADj
  }
  let b = [c.intl.formatToPlainString(t, {
      channelName: m,
      mentionCount: d
    })],
    y = u({
      isSubscriptionGated: _,
      needSubscriptionToAccess: h
    });
  return null != y && b.push(y), b.join(", ")
}

function f(e) {
  switch (e) {
    case l.clD.ONLINE:
      return (0, s.MU)(l.clD.ONLINE);
    case l.clD.IDLE:
      return (0, s.MU)(l.clD.IDLE);
    case l.clD.DND:
      return (0, s.MU)(l.clD.DND);
    case l.clD.INVISIBLE:
      return (0, s.MU)(l.clD.INVISIBLE);
    default:
      return ""
  }
}

function p(e) {
  let {
    channel: t,
    muted: n,
    userStatus: r
  } = e;
  if (true === n) return c.intl.string(c.t.C4zCMb);
  let i = [];
  return t.type === l.rbe.DM && null != r && i.push(f(r)), i.length > 0 ? i.join(", ") : true
}