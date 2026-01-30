/** Chunk was on 64935 **/
/** chunk id: 99072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk456060 = require("./456060.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk572211 = require("./572211.jsx"),
  Chunk354287 = require("./354287.js"),
  Chunk112150 = require("./112150.js"),
  Chunk15285 = require("./15285.js"),
  Chunk72432 = require("./72432.js"),
  Chunk616356 = require("./616356.js"),
  Chunk760751 = require("./760751.js"),
  Chunk383501 = require("./383501.js"),
  Chunk486020 = require("./486020.js"),
  Chunk723702 = require("./723702.js"),
  Chunk661191 = require("./661191.js"),
  Chunk820672 = require("./820672.js"),
  Chunk768349 = require("./768349.js"),
  Chunk426127 = require("./426127.js"),
  Chunk985018 = require("./985018.jsx");

function E(e) {
  let {
    currentUserId: t,
    message: E,
    application: j,
    channel: C,
    analyticsLocations: I,
    onView: S
  } = e, {
    staticBannerSrc: T,
    videoBannerSrc: N,
    bannerAspectRatio: P
  } = (0, d.f)(j), w = h.Ay.getApplicationIconURL({
    id: j.id,
    icon: j.icon
  }), R = (0, i.bG)([p.Ay, g.A], () => p.Ay.getVisibleRunningGames().find(e => {
    let {
      id: t
    } = e;
    if (t === j.id) returntrue;
    let n = g.A.getGameByApplication(j);
    return null != n && t === n.id
  })), D = (0, i.bG)([f.A], () => f.A.getCurrentUserActiveStream()), L = (0, i.bG)([_.A], () => _.A.getChannelId()), M = A.default.extractTimestamp(E.id) + y.M < Date.now(), k = (0, r.jsx)(r.Fragment, {
    children: (0, a.Wf)(E, C, t)
  }), {
    analyticsLocations: U
  } = (0, o.Ay)(I, s.A.REQUEST_TO_STREAM_INVITE_EMBED), G = O.intl.string(x.default["5+172e"]), B = false;
  return M ? (G = O.intl.string(x.default.u4QmWl), B = true) : null != D ? (G = O.intl.string(x.default.P0wwmM), B = true) : L !== C.id ? (G = O.intl.string(x.default.qRXats), B = true) : null == R && (G = O.intl.string(x.default["43zohO"]), B = true), (0, r.jsx)(c.h, {
    header: O.intl.string(x.default.nAyuPp),
    title: j.name,
    staticBannerSrc: T,
    videoBannerSrc: N,
    bannerAspectRatio: P,
    iconSrc: null != w ? w : true,
    info: k,
    actions: E.author.id === t ? [] : [{
      label: G,
      trackingArea: u.kY.STREAM,
      disabled: B,
      onClick: () => {
        null != R && ((0, b.isWindows)() ? (0, m.A)(R.pid) : (0, l.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("96811"), n.e("48697")]).then(n.bind(n, 648230));
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
              analyticsLocations: U
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
      linkType: v.J.REQUEST_TO_STREAM,
      guildId: C.guild_id,
      channelId: C.id,
      messageId: E.id,
      onView: S,
      isDeadEnd: M
    }
  })
}