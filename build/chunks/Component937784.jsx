/** Chunk was on 57478 **/
/** chunk id: 937784, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  } = t, h = a.Z.getChannel(f);
  if (null != h) try {
    var y;
    let t = await (0, d.rO)(e, b),
      n = null != (y = e.name) ? y : (0, p.yl)(c.default.extractTimestamp(e.id)),
      l = (0, u.Z)(n);
    (0, s.d)([new File([t], "".concat("" !== l ? l : "clip", ".mp4"), {
      type: "video/mp4"
    })], h, i.d.ChannelMessage, {
      filesMetadata: [{
        clip: e
      }],
      origin: "unknown:clip_share"
    }), o.default.track(m.rMx.CLIP_SHARED, {
      location_stack: g,
      guild_id: h.guild_id,
      channel_id: h.id,
      channel_type: h.type,
      application_id: e.applicationId,
      clip_id: e.id
    })
  } catch (e) {
    throw p.jF.error(e), e
  } else(0, r.ZDy)(async () => {
    let {
      default: t
    } = await n.e("99617").then(n.bind(n, 502801));
    return n => {
      var r, a;
      return (0, l.jsx)(t, (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, n), a = a = {
        clip: e,
        editMetadata: b
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
      }), r))
    }
  })
}