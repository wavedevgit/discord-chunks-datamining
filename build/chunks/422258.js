/** Chunk was on 92617 **/
/** chunk id: 422258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  JD: () => O,
  Jz: () => f,
  S_: () => g,
  fv: () => A,
  i_: () => p,
  od: () => v,
  p0: () => y,
  w6: () => b
}), require("./896048.js");
var Chunk873298 = require("./873298.js"),
  Chunk594061 = require("./594061.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk661191 = require("./661191.js"),
  Chunk181079 = require("./181079.js"),
  Chunk818348 = require("./818348.js");

function u() {
  let e = d.A.getFavoriteChannels(),
    t = 1;
  for (let n in e) t = Math.max(t, e[n].order);
  return t + 1
}

function s(e) {
  for (let t in e) {
    let n = e[t];
    if (null == n) {
      delete e[t];
      continue
    }
    if (n.type === r.Ip.CATEGORY) continue;
    let i = a.A.getChannel(t);
    if (null == i || !i.isPrivate() && !l.A.can(c.xB.VIEW_CHANNEL, i)) {
      delete e[t];
      continue
    }
  }
}

function f(e, t) {
  d.A.isFavorite(e) || i.wc.updateAsync("favorites", n => {
    n.favoriteChannels[e] = r.wL.create({
      nickname: "",
      type: r.Ip.REFERENCE_ORIGINAL,
      position: u(),
      parentId: null != t ? t : "0"
    }), s(n.favoriteChannels)
  }, i.Sb.FREQUENT_USER_ACTION)
}

function p(e) {
  let t = d.A.getFavorite(e);
  null != t && i.wc.updateAsync("favorites", n => {
    if (delete n.favoriteChannels[e], t.type === r.Ip.CATEGORY)
      for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
    s(n.favoriteChannels)
  }, i.Sb.INFREQUENT_USER_ACTION)
}

function b(e, t) {
  d.A.isFavorite(e) && i.wc.updateAsync("favorites", n => {
    n.favoriteChannels[e].nickname = null != t ? t : ""
  }, i.Sb.INFREQUENT_USER_ACTION)
}

function v(e) {
  let t = o.default.fromTimestamp(Date.now());
  i.wc.updateAsync("favorites", n => {
    n.favoriteChannels[t] = r.wL.create({
      nickname: e,
      type: r.Ip.CATEGORY,
      position: u(),
      parentId: "0"
    })
  }, i.Sb.FREQUENT_USER_ACTION)
}

function A(e) {
  p(e)
}

function g(e) {
  i.wc.updateAsync("favorites", t => {
    for (let r of e)
      if (null != r.position && (t.favoriteChannels[r.id].position = r.position), true !== r.parent_id) {
        var n;
        t.favoriteChannels[r.id].parentId = null != (n = r.parent_id) ? n : "0"
      }
  }, i.Sb.FREQUENT_USER_ACTION)
}

function O(e, t) {
  i.wc.updateAsync("favorites", n => {
    n.favoriteChannels[e].parentId = null != t ? t : "0"
  }, i.Sb.FREQUENT_USER_ACTION)
}

function y() {
  i.wc.updateAsync("favorites", e => {
    e.muted = !e.muted
  }, i.Sb.INFREQUENT_USER_ACTION)
}