/** Chunk was on web.js **/
/** chunk id: 201895, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yb: () => _,
  ZP: () => d
}), require("./539854.js");
var Chunk131704 = require("./131704.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk933557 = require("./933557.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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
      unread: o = false,
      mentionCount: d = 0,
      userCount: f,
      embeddedActivitiesCount: _,
      isSubscriptionGated: p,
      needSubscriptionToAccess: h
    } = e,
    m = (0, s.F6)(n, a.default, i.Z);
  switch (n.type) {
    case l.d4z.DM:
      t = o ? c.t.F2MZsu : c.t.fYqXVY;
      break;
    case l.d4z.GROUP_DM:
      t = o ? c.t["fxxUo/"] : c.t.lts3Ld;
      break;
    case l.d4z.GUILD_STORE:
      t = c.t.Bo4msg;
      break;
    case l.d4z.GUILD_DIRECTORY:
      t = c.t["92EAF2"];
      break;
    case l.d4z.GUILD_ANNOUNCEMENT:
      t = d > 0 ? c.t.sDKIpm : o ? c.t.VM7z8f : c.t.WJ3MPt;
      break;
    case l.d4z.GUILD_VOICE:
      let g = [c.intl.formatToPlainString(c.t.bkpadO, {
        channelName: n.name
      })];
      if (d > 0 && g.push(c.intl.formatToPlainString(c.t["3l1GOx"], {
          mentionCount: d
        })), o && g.push(c.intl.string(c.t.x5zAGZ)), null != f) {
        let e = n.userLimit;
        null != e && e > 0 ? g.push(c.intl.formatToPlainString(c.t["6qgTOF"], {
          userCount: f,
          limit: e
        })) : g.push(c.intl.formatToPlainString(c.t.GNIiAA, {
          userCount: f
        }))
      }
      null != _ && _ > 0 && g.push(c.intl.formatToPlainString(c.t.O6PLYd, {
        activitiesCount: _
      }));
      let E = u({
        isSubscriptionGated: p,
        needSubscriptionToAccess: h
      });
      return null != E && g.push(E), g.join(", ");
    case l.d4z.GUILD_STAGE_VOICE:
      t = c.t.TPPk2T;
      break;
    default:
      t = r.Ec.has(n.type) ? d > 0 ? c.t["ZL7+I6"] : o ? c.t.YlVvmc : c.t["0nZpiF"] : d > 0 ? c.t.g8ONM0 : o ? c.t.smf1CZ : c.t.s0JADj
  }
  let b = [c.intl.formatToPlainString(t, {
      channelName: m,
      mentionCount: d
    })],
    y = u({
      isSubscriptionGated: p,
      needSubscriptionToAccess: h
    });
  return null != y && b.push(y), b.join(", ")
}

function f(e) {
  switch (e) {
    case l.Skl.ONLINE:
      return (0, o.u5)(l.Skl.ONLINE);
    case l.Skl.IDLE:
      return (0, o.u5)(l.Skl.IDLE);
    case l.Skl.DND:
      return (0, o.u5)(l.Skl.DND);
    case l.Skl.INVISIBLE:
      return (0, o.u5)(l.Skl.INVISIBLE);
    default:
      return ""
  }
}

function _(e) {
  let {
    channel: t,
    muted: n,
    userStatus: r
  } = e;
  if (true === n) return c.intl.string(c.t.C4zCMb);
  let i = [];
  return t.type === l.d4z.DM && null != r && i.push(f(r)), i.length > 0 ? i.join(", ") : true
}