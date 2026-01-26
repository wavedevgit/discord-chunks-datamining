/** Chunk was on 88962 **/
/** chunk id: 422258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  JD: () => b,
  Jz: () => f,
  S_: () => C,
  fv: () => p,
  i_: () => v,
  od: () => _,
  p0: () => g,
  w6: () => A
}), require("./896048.js");
var Chunk873298 = require("./873298.js"),
  Chunk594061 = require("./594061.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk661191 = require("./661191.js"),
  Chunk181079 = require("./181079.js"),
  Chunk818348 = require("./818348.js");

function s() {
  let e = o.A.getFavoriteChannels(),
    t = 1;
  for (let n in e) t = Math.max(t, e[n].order);
  return t + 1
}

function c(e) {
  for (let t in e) {
    let n = e[t];
    if (null == n) {
      delete e[t];
      continue
    }
    if (n.type === i.Ip.CATEGORY) continue;
    let a = l.A.getChannel(t);
    if (null == a || !a.isPrivate() && !r.A.can(u.xB.VIEW_CHANNEL, a)) {
      delete e[t];
      continue
    }
  }
}

function f(e, t) {
  o.A.isFavorite(e) || a.wc.updateAsync("favorites", n => {
    n.favoriteChannels[e] = i.wL.create({
      nickname: "",
      type: i.Ip.REFERENCE_ORIGINAL,
      position: s(),
      parentId: null != t ? t : "0"
    }), c(n.favoriteChannels)
  }, a.Sb.FREQUENT_USER_ACTION)
}

function v(e) {
  let t = o.A.getFavorite(e);
  null != t && a.wc.updateAsync("favorites", n => {
    if (delete n.favoriteChannels[e], t.type === i.Ip.CATEGORY)
      for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
    c(n.favoriteChannels)
  }, a.Sb.INFREQUENT_USER_ACTION)
}

function A(e, t) {
  o.A.isFavorite(e) && a.wc.updateAsync("favorites", n => {
    n.favoriteChannels[e].nickname = null != t ? t : ""
  }, a.Sb.INFREQUENT_USER_ACTION)
}

function _(e) {
  let t = d.default.fromTimestamp(Date.now());
  a.wc.updateAsync("favorites", n => {
    n.favoriteChannels[t] = i.wL.create({
      nickname: e,
      type: i.Ip.CATEGORY,
      position: s(),
      parentId: "0"
    })
  }, a.Sb.FREQUENT_USER_ACTION)
}

function p(e) {
  v(e)
}

function C(e) {
  a.wc.updateAsync("favorites", t => {
    for (let i of e)
      if (null != i.position && (t.favoriteChannels[i.id].position = i.position), true !== i.parent_id) {
        var n;
        t.favoriteChannels[i.id].parentId = null != (n = i.parent_id) ? n : "0"
      }
  }, a.Sb.FREQUENT_USER_ACTION)
}

function b(e, t) {
  a.wc.updateAsync("favorites", n => {
    n.favoriteChannels[e].parentId = null != t ? t : "0"
  }, a.Sb.FREQUENT_USER_ACTION)
}

function g() {
  a.wc.updateAsync("favorites", e => {
    e.muted = !e.muted
  }, a.Sb.INFREQUENT_USER_ACTION)
}