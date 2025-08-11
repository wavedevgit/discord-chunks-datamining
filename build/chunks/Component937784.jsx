/** Chunk was on 2668 **/
/** chunk id: 937784, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk127654 = require("./127654.js"),
  Chunk61994 = require("./61994.js"),
  Chunk39604 = require("./39604.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js");
async function f(e, t) {
  let {
    channelId: f,
    editMetadata: b,
    analyticsLocations: g
  } = t, j = a.Z.getChannel(f);
  if (null != j) try {
    var h;
    let t = await (0, d.rO)(e, b),
      n = null != (h = e.name) ? h : (0, p.yl)(s.default.extractTimestamp(e.id)),
      r = (0, u.Z)(n);
    (0, c.d)([new File([t], "".concat("" !== r ? r : "clip", ".mp4"), {
      type: "video/mp4"
    })], j, i.d.ChannelMessage, {
      filesMetadata: [{
        clip: e
      }],
      origin: "unknown:clip_share"
    }), o.default.track(m.rMx.CLIP_SHARED, {
      location_stack: g,
      guild_id: j.guild_id,
      channel_id: j.id,
      channel_type: j.type,
      application_id: e.applicationId,
      clip_id: e.id
    })
  } catch (e) {
    throw p.jF.error(e), e
  } else(0, l.ZDy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("4192"), n.e("62117"), n.e("99617")]).then(n.bind(n, 502801));
    return n => {
      var l, a;
      return (0, r.jsx)(t, (l = function(e) {
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
      }({}, n), a = a = {
        clip: e,
        editMetadata: b
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
      }), l))
    }
  })
}