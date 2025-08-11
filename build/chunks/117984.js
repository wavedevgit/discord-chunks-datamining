/** Chunk was on 67326 **/
/** chunk id: 117984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CM: () => p,
  UT: () => v,
  _Z: () => C,
  kj: () => c,
  oC: () => _,
  s3: () => h,
  uA: () => g,
  xh: () => b
}), require("./388685.js");
var Chunk524437 = require("./524437.js"),
  Chunk675478 = require("./675478.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk853856 = require("./853856.js"),
  Chunk231338 = require("./231338.js");

function f() {
  let e = Chunk853856.Z.getFavoriteChannels(),
    t = 1;
  for (let n in module) t = Math.max(exports, module[require].order);
  return exports + 1
}

function s(e) {
  for (let t in e) {
    let n = e[t];
    if (null == n) {
      delete e[t];
      continue
    }
    if (n.type === i.Dd.CATEGORY) continue;
    let a = r.Z.getChannel(t);
    if (null == a || !a.isPrivate() && !l.Z.can(u.Pl.VIEW_CHANNEL, a)) {
      delete e[t];
      continue
    }
  }
}

function c(e, t) {
  d.Z.isFavorite(e) || a.hW.updateAsync("favorites", n => {
    n.favoriteChannels[e] = i.aV.create({
      nickname: "",
      type: i.Dd.REFERENCE_ORIGINAL,
      position: f(),
      parentId: null != t ? t : "0"
    }), s(n.favoriteChannels)
  }, a.fy.FREQUENT_USER_ACTION)
}

function _(e) {
  let t = d.Z.getFavorite(e);
  null != t && a.hW.updateAsync("favorites", n => {
    if (delete n.favoriteChannels[e], t.type === i.Dd.CATEGORY)
      for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
    s(n.favoriteChannels)
  }, a.fy.INFREQUENT_USER_ACTION)
}

function v(e, t) {
  d.Z.isFavorite(e) && a.hW.updateAsync("favorites", n => {
    n.favoriteChannels[e].nickname = null != t ? t : ""
  }, a.fy.INFREQUENT_USER_ACTION)
}

function p(e) {
  let t = o.default.fromTimestamp(Date.now());
  a.hW.updateAsync("favorites", n => {
    n.favoriteChannels[t] = i.aV.create({
      nickname: e,
      type: i.Dd.CATEGORY,
      position: f(),
      parentId: "0"
    })
  }, a.fy.FREQUENT_USER_ACTION)
}

function b(e) {
  _(e)
}

function h(e) {
  a.hW.updateAsync("favorites", t => {
    for (let i of e)
      if (null != i.position && (t.favoriteChannels[i.id].position = i.position), true !== i.parent_id) {
        var n;
        t.favoriteChannels[i.id].parentId = null != (n = i.parent_id) ? n : "0"
      }
  }, a.fy.FREQUENT_USER_ACTION)
}

function g(e, t) {
  a.hW.updateAsync("favorites", n => {
    n.favoriteChannels[e].parentId = null != t ? t : "0"
  }, a.fy.FREQUENT_USER_ACTION)
}

function C() {
  Chunk675478.hW.updateAsync("favorites", e => {
    e.muted = !e.muted
  }, Chunk675478.fy.INFREQUENT_USER_ACTION)
}