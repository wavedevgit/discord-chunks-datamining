/** Chunk was on web.js **/
/** chunk id: 832275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p,
  J: () => f
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk661191 = require("./661191.js"),
  Chunk181079 = require("./181079.js"),
  Chunk616075 = require("./616075.js"),
  Chunk818348 = require("./818348.js");

function f(e, t, n) {
  let {
    canShow: r,
    isFavoritesPerk: a
  } = u.A.getCurrentConfig({
    location: "isFavoritesGuildVisible"
  }, {
    autoTrackExposure: false
  });
  if (a) returntrue;
  if (!r) returnfalse;
  let s = e.getFavoriteChannels();
  if (i().isEmpty(s)) returnfalse;
  let o = l.default.keys(s).filter(e => {
    let r = t.getChannel(e);
    return null != r && (!!r.isPrivate() || n.can(d.xB.VIEW_CHANNEL, r))
  });
  return !i().isEmpty(o)
}

function p() {
  let {
    canShow: e,
    isFavoritesPerk: t
  } = (0, u.l)("useIsFavoritesGuildVisible"), n = (0, a.bG)([c.A, s.A, o.A], () => e && f(c.A, s.A, o.A));
  return !!t || n
}