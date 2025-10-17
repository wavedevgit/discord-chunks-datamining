/** Chunk was on 98350 **/
/** chunk id: 117984, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  CM: () => v,
  UT: () => O,
  _Z: () => _,
  kj: () => f,
  oC: () => g,
  s3: () => h,
  uA: () => E,
  xh: () => p
}), require("./388685.js");
var Chunk524437 = require("./524437.js"),
  Chunk675478 = require("./675478.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk853856 = require("./853856.js"),
  Chunk231338 = require("./231338.js");

function c() {
  let t = Chunk853856.Z.getFavoriteChannels(),
    e = 1;
  for (let n in module) e = Math.max(exports, module[require].order);
  return exports + 1
}

function d(t) {
  for (let e in t) {
    let n = t[e];
    if (null == n) {
      delete t[e];
      continue
    }
    if (n.type === i.Dd.CATEGORY) continue;
    let l = a.Z.getChannel(e);
    if (null == l || !l.isPrivate() && !r.Z.can(u.Pl.VIEW_CHANNEL, l)) {
      delete t[e];
      continue
    }
  }
}

function f(t, e) {
  s.Z.isFavorite(t) || l.hW.updateAsync("favorites", n => {
    n.favoriteChannels[t] = i.aV.create({
      nickname: "",
      type: i.Dd.REFERENCE_ORIGINAL,
      position: c(),
      parentId: null != e ? e : "0"
    }), d(n.favoriteChannels)
  }, l.fy.FREQUENT_USER_ACTION)
}

function g(t) {
  let e = s.Z.getFavorite(t);
  null != e && l.hW.updateAsync("favorites", n => {
    if (delete n.favoriteChannels[t], e.type === i.Dd.CATEGORY)
      for (let e in n.favoriteChannels) n.favoriteChannels[e].parentId === t && (n.favoriteChannels[e].parentId = "0");
    d(n.favoriteChannels)
  }, l.fy.INFREQUENT_USER_ACTION)
}

function O(t, e) {
  s.Z.isFavorite(t) && l.hW.updateAsync("favorites", n => {
    n.favoriteChannels[t].nickname = null != e ? e : ""
  }, l.fy.INFREQUENT_USER_ACTION)
}

function v(t) {
  let e = o.default.fromTimestamp(Date.now());
  l.hW.updateAsync("favorites", n => {
    n.favoriteChannels[e] = i.aV.create({
      nickname: t,
      type: i.Dd.CATEGORY,
      position: c(),
      parentId: "0"
    })
  }, l.fy.FREQUENT_USER_ACTION)
}

function p(t) {
  g(t)
}

function h(t) {
  l.hW.updateAsync("favorites", e => {
    for (let i of t)
      if (null != i.position && (e.favoriteChannels[i.id].position = i.position), true !== i.parent_id) {
        var n;
        e.favoriteChannels[i.id].parentId = null != (n = i.parent_id) ? n : "0"
      }
  }, l.fy.FREQUENT_USER_ACTION)
}

function E(t, e) {
  l.hW.updateAsync("favorites", n => {
    n.favoriteChannels[t].parentId = null != e ? e : "0"
  }, l.fy.FREQUENT_USER_ACTION)
}

function _() {
  Chunk675478.hW.updateAsync("favorites", t => {
    t.muted = !t.muted
  }, Chunk675478.fy.INFREQUENT_USER_ACTION)
}