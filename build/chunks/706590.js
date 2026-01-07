/** Chunk was on web.js **/
/** chunk id: 706590, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p,
  z: () => f
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk853856 = require("./853856.js"),
  Chunk362658 = require("./362658.js"),
  Chunk231338 = require("./231338.js");

function f(e, t, n) {
  let {
    canShow: r,
    isFavoritesPerk: a
  } = u.Z.getCurrentConfig({
    location: "isFavoritesGuildVisible"
  }, {
    autoTrackExposure: false
  });
  if (a) returntrue;
  if (!r) returnfalse;
  let o = e.getFavoriteChannels();
  if (i().isEmpty(o)) returnfalse;
  let s = l.default.keys(o).filter(e => {
    let r = t.getChannel(e);
    return null != r && (!!r.isPrivate() || n.can(d.Pl.VIEW_CHANNEL, r))
  });
  return !i().isEmpty(s)
}

function p() {
  let {
    canShow: e,
    isFavoritesPerk: t
  } = (0, u.z)("useIsFavoritesGuildVisible"), n = (0, a.e7)([c.Z, o.Z, s.Z], () => e && f(c.Z, o.Z, s.Z));
  return !!t || n
}