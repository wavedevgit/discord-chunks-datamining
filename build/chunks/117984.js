/** Chunk was on 97418 **/
/** chunk id: 117984, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  CM: () => p,
  UT: () => v,
  _Z: () => m,
  kj: () => c,
  oC: () => _,
  s3: () => g,
  uA: () => R,
  xh: () => h
}), require("./388685.js");
var Chunk524437 = require("./524437.js"),
  Chunk675478 = require("./675478.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk853856 = require("./853856.js"),
  Chunk231338 = require("./231338.js");

function s() {
  let e = Chunk853856.Z.getFavoriteChannels(),
    n = 1;
  for (let t in module) n = Math.max(exports, module[require].order);
  return exports + 1
}

function f(e) {
  for (let n in e) {
    let t = e[n];
    if (null == t) {
      delete e[n];
      continue
    }
    if (t.type === i.Dd.CATEGORY) continue;
    let a = l.Z.getChannel(n);
    if (null == a || !a.isPrivate() && !r.Z.can(d.Pl.VIEW_CHANNEL, a)) {
      delete e[n];
      continue
    }
  }
}

function c(e, n) {
  o.Z.isFavorite(e) || a.hW.updateAsync("favorites", t => {
    t.favoriteChannels[e] = i.aV.create({
      nickname: "",
      type: i.Dd.REFERENCE_ORIGINAL,
      position: s(),
      parentId: null != n ? n : "0"
    }), f(t.favoriteChannels)
  }, a.fy.FREQUENT_USER_ACTION)
}

function _(e) {
  let n = o.Z.getFavorite(e);
  null != n && a.hW.updateAsync("favorites", t => {
    if (delete t.favoriteChannels[e], n.type === i.Dd.CATEGORY)
      for (let n in t.favoriteChannels) t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = "0");
    f(t.favoriteChannels)
  }, a.fy.INFREQUENT_USER_ACTION)
}

function v(e, n) {
  o.Z.isFavorite(e) && a.hW.updateAsync("favorites", t => {
    t.favoriteChannels[e].nickname = null != n ? n : ""
  }, a.fy.INFREQUENT_USER_ACTION)
}

function p(e) {
  let n = u.default.fromTimestamp(Date.now());
  a.hW.updateAsync("favorites", t => {
    t.favoriteChannels[n] = i.aV.create({
      nickname: e,
      type: i.Dd.CATEGORY,
      position: s(),
      parentId: "0"
    })
  }, a.fy.FREQUENT_USER_ACTION)
}

function h(e) {
  _(e)
}

function g(e) {
  a.hW.updateAsync("favorites", n => {
    for (let i of e)
      if (null != i.position && (n.favoriteChannels[i.id].position = i.position), true !== i.parent_id) {
        var t;
        n.favoriteChannels[i.id].parentId = null != (t = i.parent_id) ? t : "0"
      }
  }, a.fy.FREQUENT_USER_ACTION)
}

function R(e, n) {
  a.hW.updateAsync("favorites", t => {
    t.favoriteChannels[e].parentId = null != n ? n : "0"
  }, a.fy.FREQUENT_USER_ACTION)
}

function m() {
  Chunk675478.hW.updateAsync("favorites", e => {
    e.muted = !e.muted
  }, Chunk675478.fy.INFREQUENT_USER_ACTION)
}