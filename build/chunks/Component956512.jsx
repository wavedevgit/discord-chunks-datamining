/** Chunk was on 91173 **/
/** chunk id: 956512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk758371 = require("./758371.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk758199 = require("./758199.jsx"),
  Chunk914498 = require("./914498.js"),
  Chunk880251 = require("./880251.js"),
  Chunk594190 = require("./594190.js"),
  Chunk562224 = require("./562224.js"),
  Chunk199902 = require("./199902.js"),
  Chunk77498 = require("./77498.js"),
  Chunk19780 = require("./19780.js"),
  Chunk768581 = require("./768581.js"),
  Chunk358085 = require("./358085.js"),
  Chunk709054 = require("./709054.js"),
  Chunk915553 = require("./915553.js"),
  Chunk658805 = require("./658805.js"),
  Chunk388032 = require("./388032.jsx");

function y(e) {
  let t, {
      currentUserId: y,
      message: x,
      application: j,
      channel: I,
      analyticsLocations: S,
      onView: T
    } = e,
    {
      staticBannerSrc: P,
      videoBannerSrc: N,
      bannerAspectRatio: A
    } = (0, d.E)(j),
    w = h.ZP.getApplicationIconURL({
      id: j.id,
      icon: j.icon
    }),
    Z = (0, i.e7)([p.ZP, g.Z], () => null != x.application ? p.ZP.getVisibleRunningGames().find(e => {
      var t;
      let {
        id: n,
        name: r
      } = e;
      return null != x.application && (null != n ? n : null == (t = g.Z.getGameByName(r)) ? true : t.id) === x.application.id
    }) : null),
    R = (0, i.e7)([f.Z], () => f.Z.getCurrentUserActiveStream()),
    D = (0, i.e7)([_.Z], () => _.Z.getChannelId()),
    L = E.default.extractTimestamp(x.id) + C.e < Date.now(),
    M = (0, r.jsx)(r.Fragment, {
      children: (0, o._0)(x, j, I, y, false)
    }),
    {
      newestAnalyticsLocation: k
    } = (0, s.ZP)(S, a.Z.REQUEST_TO_STREAM_INVITE_EMBED);
  return L ? t = v.intl.string(O.default.u4QmWl) : null != R ? t = v.intl.string(O.default.P0wwmJ) : D !== I.id ? t = v.intl.string(O.default.qRXatr) : null == Z && (t = v.intl.string(O.default["43zohI"])), (0, r.jsx)(c.W, {
    header: v.intl.string(O.default.DKHheX),
    title: j.name,
    staticBannerSrc: P,
    videoBannerSrc: N,
    bannerAspectRatio: A,
    iconSrc: null != w ? w : true,
    info: M,
    actions: x.author.id === y ? [] : [{
      label: v.intl.string(O.default["5+172d"]),
      trackingArea: u.j_.STREAM,
      disabledReason: t,
      onClick: () => {
        null != Z && ((0, b.isWindows)() ? (0, m.Z)(Z.pid) : (0, l.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("38697"), n.e("46746"), n.e("34983")]).then(n.bind(n, 60594));
          return t => {
            var n, i;
            return (0, r.jsx)(e, (n = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  var r;
                  r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = r
                })
              }
              return e
            }({}, t), i = i = {
              analyticsLocation: k
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
            }), n))
          }
        }))
      }
    }],
    trackingConfig: {
      id: j.id,
      linkType: u.Un.REQUEST_TO_STREAM,
      onView: T
    }
  })
}