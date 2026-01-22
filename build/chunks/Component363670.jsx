/** Chunk was on web.js **/
/** chunk id: 363670, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => m,
  hh: () => p,
  u7: () => _
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk939341 = require("./939341.js"),
  Chunk574520 = require("./574520.js"),
  Chunk263577 = require("./263577.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk868065 = require("./868065.jsx"),
  Chunk332225 = require("./332225.js");
let p = [Chunk506326.R_];

function _(e) {
  var t, n, r, i;
  let o = (0, a.bG)([l.A], () => l.A.getMatchingActivity(e)),
    c = (0, a.bG)([s.default], () => s.default.getUser(e.author_id));
  if (null == o || null == c) return {};
  let u = e.extra.entries[0],
    d = null != (t = null != (n = o.state) ? n : null == (i = u.media.artists[0]) ? true : i.name) ? t : u.media.title,
    f = null != (r = o.details) ? r : u.media.title;
  return {
    activity: o,
    artist: d,
    currentEntry: u,
    title: f,
    user: c
  }
}

function h(e) {
  let {
    entry: t,
    channel: n,
    selected: i,
    hovered: a
  } = e, {
    activity: s,
    artist: l
  } = _(t), {
    largeImage: h
  } = (0, o.nO)({
    entry: t
  });
  return null == s ? (0, r.jsx)(d.eG, {}) : (0, r.jsxs)(d.Zp, {
    selected: i,
    children: [(0, r.jsxs)(d.UA, {
      children: [(0, r.jsx)(d.Hp, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }), (0, r.jsx)(d.ZB, {
        children: l.replace(/; /g, ", ")
      }), (0, r.jsx)(u.mG, {
        location: u.N5.CARD,
        children: p.map((e, n) => (0, r.jsx)(e, {
          entry: t,
          hovered: a
        }, n))
      })]
    }), (0, r.jsx)(c.V, {
      src: null == h ? true : h.src,
      size: 48,
      className: f.xn
    })]
  })
}
let m = Chunk64700.memo(h)