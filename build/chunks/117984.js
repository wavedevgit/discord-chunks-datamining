/** Chunk was on 56167 **/
/** chunk id: 117984, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  CM: () => v,
  UT: () => h,
  _Z: () => Z,
  kj: () => f,
  oC: () => g,
  s3: () => _,
  uA: () => p,
  xh: () => b
}), require("./388685.js");
var Chunk524437 = require("./524437.js"),
  Chunk675478 = require("./675478.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk853856 = require("./853856.js"),
  Chunk231338 = require("./231338.js");

function d() {
  let e = Chunk853856.Z.getFavoriteChannels(),
    n = 1;
  for (let t in module) n = Math.max(exports, module[require].order);
  return exports + 1
}

function c(e) {
  for (let n in e) {
    let t = e[n];
    if (null == t) {
      delete e[n];
      continue
    }
    if (t.type === i.Dd.CATEGORY) continue;
    let l = r.Z.getChannel(n);
    if (null == l || !l.isPrivate() && !a.Z.can(s.Pl.VIEW_CHANNEL, l)) {
      delete e[n];
      continue
    }
  }
}

function f(e, n) {
  u.Z.isFavorite(e) || l.hW.updateAsync("favorites", t => {
    t.favoriteChannels[e] = i.aV.create({
      nickname: "",
      type: i.Dd.REFERENCE_ORIGINAL,
      position: d(),
      parentId: null != n ? n : "0"
    }), c(t.favoriteChannels)
  }, l.fy.FREQUENT_USER_ACTION)
}

function g(e) {
  let n = u.Z.getFavorite(e);
  null != n && l.hW.updateAsync("favorites", t => {
    if (delete t.favoriteChannels[e], n.type === i.Dd.CATEGORY)
      for (let n in t.favoriteChannels) t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = "0");
    c(t.favoriteChannels)
  }, l.fy.INFREQUENT_USER_ACTION)
}

function h(e, n) {
  u.Z.isFavorite(e) && l.hW.updateAsync("favorites", t => {
    t.favoriteChannels[e].nickname = null != n ? n : ""
  }, l.fy.INFREQUENT_USER_ACTION)
}

function v(e) {
  let n = o.default.fromTimestamp(Date.now());
  l.hW.updateAsync("favorites", t => {
    t.favoriteChannels[n] = i.aV.create({
      nickname: e,
      type: i.Dd.CATEGORY,
      position: d(),
      parentId: "0"
    })
  }, l.fy.FREQUENT_USER_ACTION)
}

function b(e) {
  g(e)
}

function _(e) {
  l.hW.updateAsync("favorites", n => {
    for (let i of e)
      if (null != i.position && (n.favoriteChannels[i.id].position = i.position), true !== i.parent_id) {
        var t;
        n.favoriteChannels[i.id].parentId = null != (t = i.parent_id) ? t : "0"
      }
  }, l.fy.FREQUENT_USER_ACTION)
}

function p(e, n) {
  l.hW.updateAsync("favorites", t => {
    t.favoriteChannels[e].parentId = null != n ? n : "0"
  }, l.fy.FREQUENT_USER_ACTION)
}

function Z() {
  Chunk675478.hW.updateAsync("favorites", e => {
    e.muted = !e.muted
  }, Chunk675478.fy.INFREQUENT_USER_ACTION)
}