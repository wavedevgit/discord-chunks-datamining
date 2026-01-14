/** Chunk was on web.js **/
/** chunk id: 812797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bz: () => f,
  MM: () => u,
  VO: () => d,
  fR: () => p,
  zc: () => c
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk353647 = require("./353647.js"),
  Chunk26033 = require("./26033.js"),
  Chunk594190 = require("./594190.js"),
  Chunk621853 = require("./621853.js"),
  Chunk158776 = require("./158776.js");

function c(e) {
  let {
    userIds: t,
    gameIds: n
  } = e;
  return (0, r.e7)([i.Z], () => t.some(e => {
    var t;
    return null == (t = i.Z.getUserOutbox(e)) ? true : t.entries.some(e => null != e && (0, a.dX)(e) && n.has(e.extra.application_id))
  }), [n, t])
}

function u(e) {
  let {
    userIds: t,
    guildIdsWithGameStores: n
  } = e;
  return (0, r.e7)([s.Z], () => {
    for (let e of t) {
      let t = s.Z.getMutualGuilds(e);
      if (null != t) {
        for (let e of t)
          if (n.has(e.guild.id)) returntrue
      }
    }
    returnfalse
  }, [n, t])
}

function d(e) {
  let {
    userIds: t,
    gameIds: n
  } = e;
  return (0, r.e7)([l.Z], () => {
    for (let e of t)
      for (let t of l.Z.getActivities(e))
        if (null != t.application_id && n.has(t.application_id)) returntrue;
    returnfalse
  }, [n, t])
}

function f(e) {
  let {
    gameIds: t
  } = e;
  return (0, r.e7)([o.ZP], () => o.ZP.getGamesSeen(false, false).some(e => null != e.id && t.has(e.id)), [t])
}

function p(e) {
  let {
    gameIds: t
  } = e;
  return (0, r.e7)([o.ZP], () => o.ZP.getRunningGames().some(e => null != e.id && t.has(e.id) && o.ZP.isDetectionEnabled(e)), [t])
}