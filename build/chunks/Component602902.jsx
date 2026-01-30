/** Chunk was on 64935 **/
/** chunk id: 602902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => A
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk192308 = require("./192308.js"),
  Chunk397927 = require("./397927.js"),
  Chunk294454 = require("./294454.jsx"),
  Chunk118517 = require("./118517.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk320501 = require("./320501.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk518960 = require("./518960.js"),
  Chunk372684 = require("./372684.js"),
  Chunk439818 = require("./439818.js"),
  Chunk399925 = require("./399925.js"),
  Chunk696016 = require("./696016.js"),
  Chunk652215 = require("./652215.js");
async function A(e, t) {
  let {
    channelId: A,
    analyticsLocations: y,
    messageReference: v
  } = t, x = o.A.getChannel(A);
  if (null != x) {
    if (null != v) {
      let e = u.A.getMessage(v.channel_id, v.message_id);
      null != e && (0, s.Yf)({
        message: e,
        channel: x,
        shouldMention: false,
        showMentionToggle: false
      })
    }
    try {
      let t = [],
        n = [];
      for (let r of e) {
        var O;
        let e = await (0, _.VO)(r),
          i = null != (O = r.name) ? O : (0, h.cM)(p.default.extractTimestamp(r.id)),
          l = (0, g.A)(i);
        if (r.type === f.nQ.CLIP || r.type === f.nQ.VOICE_CLIP) {
          let i = "".concat("" !== l ? l : "clip", ".mp4");
          t.push(new File([e], i, {
            type: "video/mp4"
          })), n.push({
            clip: r
          })
        } else if (r.type === f.nQ.SCREENSHOT) {
          let r = "".concat("" !== l ? l : "screenshot", ".jpeg");
          t.push(new File([e], r, {
            type: "image/jpeg"
          })), n.push({})
        }
        d.default.track(b.HAw.CLIP_SHARED, {
          location_stack: y,
          guild_id: x.guild_id,
          channel_id: x.id,
          channel_type: x.type,
          application_id: r.applicationId,
          clip_id: r.id
        })
      }(0, m.R)(t, x, c.C.ChannelMessage, {
        filesMetadata: n,
        origin: "unknown:clip_share"
      }), i.closeAllModals()
    } catch (e) {
      throw h.nx.error(e), e
    }
  } else(0, l.mMO)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("96758"), n.e("43622"), n.e("75838")]).then(n.bind(n, 243258));
    return n => {
      var i, l;
      return (0, r.jsx)(t, (i = function(e) {
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
      }({}, n), l = l = {
        clips: e,
        analyticsLocations: y
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i))
    }
  }, {
    stackingBehavior: "stack",
    modalKey: a.aU
  })
}