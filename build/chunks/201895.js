/** Chunk was on web.js **/
/** chunk id: 201895, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => u
}), require("./539854.js");
var Chunk131704 = require("./131704.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js");
require("./51144.js");
var Chunk933557 = require("./933557.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    isSubscriptionGated: t,
    needSubscriptionToAccess: n
  } = e;
  if (t)
    if (n) return l.intl.string(l.t["oj+HOs"]);
    else return l.intl.string(l.t.xI3TQQ)
}

function u(e) {
  let t, {
      channel: n,
      unread: u = false,
      mentionCount: d = 0,
      userCount: f,
      embeddedActivitiesCount: _,
      isSubscriptionGated: p,
      needSubscriptionToAccess: h
    } = e,
    m = (0, o.F6)(n, a.default, i.Z);
  switch (n.type) {
    case s.d4z.DM:
      t = u ? l.t.F2MZsu : l.t.fYqXVY;
      break;
    case s.d4z.GROUP_DM:
      t = u ? l.t["fxxUo/"] : l.t.lts3Ld;
      break;
    case s.d4z.GUILD_STORE:
      t = l.t.Bo4msg;
      break;
    case s.d4z.GUILD_DIRECTORY:
      t = l.t["92EAF2"];
      break;
    case s.d4z.GUILD_ANNOUNCEMENT:
      t = d > 0 ? l.t.sDKIpm : u ? l.t.VM7z8f : l.t.WJ3MPt;
      break;
    case s.d4z.GUILD_VOICE:
      let g = [l.intl.formatToPlainString(l.t.bkpadO, {
        channelName: n.name
      })];
      if (d > 0 && g.push(l.intl.formatToPlainString(l.t["3l1GOx"], {
          mentionCount: d
        })), u && g.push(l.intl.string(l.t.x5zAGZ)), null != f) {
        let e = n.userLimit;
        null != e && e > 0 ? g.push(l.intl.formatToPlainString(l.t["6qgTOF"], {
          userCount: f,
          limit: e
        })) : g.push(l.intl.formatToPlainString(l.t.GNIiAA, {
          userCount: f
        }))
      }
      null != _ && _ > 0 && g.push(l.intl.formatToPlainString(l.t.O6PLYd, {
        activitiesCount: _
      }));
      let E = c({
        isSubscriptionGated: p,
        needSubscriptionToAccess: h
      });
      return null != E && g.push(E), g.join(", ");
    case s.d4z.GUILD_STAGE_VOICE:
      t = l.t.TPPk2T;
      break;
    default:
      t = r.Ec.has(n.type) ? d > 0 ? l.t["ZL7+I6"] : u ? l.t.YlVvmc : l.t["0nZpiF"] : d > 0 ? l.t.g8ONM0 : u ? l.t.smf1CZ : l.t.s0JADj
  }
  let b = [l.intl.formatToPlainString(t, {
      channelName: m,
      mentionCount: d
    })],
    y = c({
      isSubscriptionGated: p,
      needSubscriptionToAccess: h
    });
  return null != y && b.push(y), b.join(", ")
}