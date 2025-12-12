/** Chunk was on web.js **/
/** chunk id: 551228, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => h,
  pi: () => _,
  te: () => p
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk379357 = require("./379357.js"),
  Chunk719247 = require("./719247.js"),
  Chunk442550 = require("./442550.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk443487 = require("./443487.jsx"),
  Chunk451419 = require("./451419.js");
let p = [Chunk297781.XF];

function _(e) {
  var t, n, r, i;
  let s = (0, o.e7)([l.Z], () => l.Z.getMatchingActivity(e)),
    c = (0, o.e7)([a.default], () => a.default.getUser(e.author_id));
  if (null == s || null == c) return {};
  let u = e.extra.entries[0],
    d = null != (r = null != (n = s.state) ? n : null == (t = u.media.artists[0]) ? true : t.name) ? r : u.media.title,
    f = null != (i = s.details) ? i : u.media.title;
  return {
    activity: s,
    artist: d,
    currentEntry: u,
    title: f,
    user: c
  }
}

function m(e) {
  let {
    entry: t,
    channel: n,
    selected: i,
    hovered: o
  } = e, {
    activity: a,
    artist: l
  } = _(t), {
    largeImage: m
  } = (0, s.rv)({
    entry: t
  });
  return null == a ? (0, r.jsx)(d.cA, {}) : (0, r.jsxs)(d.Zb, {
    selected: i,
    children: [(0, r.jsxs)(d.e$, {
      children: [(0, r.jsx)(d.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, r.jsx)(d.ll, {
        children: l.replace(/; /g, ", ")
      }), (0, r.jsx)(u.Gk, {
        location: u.Gt.CARD,
        children: p.map((e, n) => (0, r.jsx)(e, {
          entry: t,
          hovered: o
        }, n))
      })]
    }), (0, r.jsx)(c.f, {
      src: null == m ? true : m.src,
      size: 48,
      className: f.thumbnail
    })]
  })
}
let h = Chunk473749.memo(m)