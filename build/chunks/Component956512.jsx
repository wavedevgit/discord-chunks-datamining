/** Chunk was on web.js **/
/** chunk id: 956512, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk758371 = require("./758371.js"),
  Chunk758199 = require("./758199.jsx"),
  Chunk914498 = require("./914498.js"),
  Chunk880251 = require("./880251.js"),
  Chunk594190 = require("./594190.js"),
  Chunk562224 = require("./562224.js"),
  Chunk199902 = require("./199902.js"),
  Chunk77498 = require("./77498.js"),
  Chunk19780 = require("./19780.js"),
  Chunk768581 = require("./768581.js"),
  Chunk709054 = require("./709054.js"),
  Chunk915553 = require("./915553.js"),
  Chunk658805 = require("./658805.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let t, {
      currentUserId: n,
      message: b,
      application: y,
      channel: O,
      onView: v
    } = e,
    {
      staticBannerSrc: I,
      videoBannerSrc: T,
      bannerAspectRatio: S
    } = (0, l.E)(y),
    A = p.ZP.getApplicationIconURL({
      id: y.id,
      icon: y.icon
    }),
    N = (0, i.e7)([c.ZP, f.Z], () => null != b.application ? c.ZP.getVisibleRunningGames().find(e => {
      var t;
      let {
        id: n,
        name: r
      } = e;
      return null != b.application && (null != n ? n : null == (t = f.Z.getGameByName(r)) ? true : t.id) === b.application.id
    }) : null),
    C = (0, i.e7)([d.Z], () => d.Z.getCurrentUserActiveStream()),
    R = (0, i.e7)([_.Z], () => _.Z.getChannelId()),
    P = h.default.extractTimestamp(b.id) + m.e < Date.now(),
    w = (0, r.jsx)(r.Fragment, {
      children: (0, o._0)(b, y, O, n, false)
    });
  return P ? t = E.intl.string(g.default.u4QmWl) : null != C ? t = E.intl.string(g.default.P0wwmJ) : R !== O.id ? t = E.intl.string(g.default.qRXatr) : null == N && (t = E.intl.string(g.default["43zohI"])), (0, r.jsx)(a.W, {
    header: E.intl.string(g.default.DKHheX),
    title: y.name,
    staticBannerSrc: I,
    videoBannerSrc: T,
    bannerAspectRatio: S,
    iconSrc: null != A ? A : true,
    info: w,
    actions: b.author.id === n ? [] : [{
      label: E.intl.string(g.default["5+172d"]),
      trackingArea: s.j_.STREAM,
      disabledReason: t,
      onClick: () => {
        null != N && (0, u.Z)(N.pid)
      }
    }],
    trackingConfig: {
      id: y.id,
      linkType: s.Un.REQUEST_TO_STREAM,
      onView: v
    }
  })
}