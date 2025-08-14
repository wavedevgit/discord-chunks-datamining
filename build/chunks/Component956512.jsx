/** Chunk was on web.js **/
/** chunk id: 956512, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
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
  Chunk19780 = require("./19780.js"),
  Chunk768581 = require("./768581.js"),
  Chunk709054 = require("./709054.js"),
  Chunk915553 = require("./915553.js"),
  Chunk658805 = require("./658805.js"),
  Chunk388032 = require("./388032.jsx");

function E(e) {
  let t, {
      currentUserId: n,
      message: E,
      application: b,
      channel: y,
      onView: O
    } = e,
    {
      staticBannerSrc: v,
      videoBannerSrc: I,
      bannerAspectRatio: T
    } = (0, l.E)(b),
    S = _.ZP.getApplicationIconURL({
      id: b.id,
      icon: b.icon
    }),
    A = (0, i.e7)([c.ZP], () => null != E.application ? c.ZP.getRunningGames().find(e => {
      let {
        id: t
      } = e;
      return null != E.application && t === E.application.id
    }) : null),
    N = (0, i.e7)([d.Z], () => d.Z.getCurrentUserActiveStream()),
    C = (0, i.e7)([f.Z], () => f.Z.getChannelId()),
    R = p.default.extractTimestamp(E.id) + h.e < Date.now(),
    P = (0, r.jsx)(r.Fragment, {
      children: (0, o._0)(E, b, y, n, false)
    });
  return R ? t = g.intl.string(m.default.u4QmWl) : null != N ? t = g.intl.string(m.default.P0wwmJ) : C !== y.id ? t = g.intl.string(m.default.qRXatr) : null == A && (t = g.intl.string(m.default["43zohI"])), (0, r.jsx)(a.W, {
    header: g.intl.string(m.default.DKHheX),
    title: b.name,
    staticBannerSrc: v,
    videoBannerSrc: I,
    bannerAspectRatio: T,
    iconSrc: null != S ? S : true,
    info: P,
    actions: E.author.id === n ? [] : [{
      label: g.intl.string(m.default["5+172d"]),
      trackingArea: s.j_.STREAM,
      disabledReason: t,
      onClick: () => {
        null != A && (0, u.Z)(A.pid)
      }
    }],
    trackingConfig: {
      id: b.id,
      linkType: s.Un.REQUEST_TO_STREAM,
      onView: O
    }
  })
}