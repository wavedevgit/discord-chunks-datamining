/** Chunk was on web.js **/
/** chunk id: 937784, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => I
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk912332 = require("./912332.jsx"),
  Chunk623292 = require("./623292.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk375954 = require("./375954.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk127654 = require("./127654.js"),
  Chunk894694 = require("./894694.js"),
  Chunk61994 = require("./61994.js"),
  Chunk39604 = require("./39604.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function I(e, t) {
  let {
    channelId: b,
    analyticsLocations: O,
    messageReference: I
  } = t, T = l.Z.getChannel(b);
  if (null != T) {
    if (null != I) {
      let e = u.Z.getMessage(I.channel_id, I.message_id);
      null != e && (0, s.fE)({
        message: e,
        channel: T,
        shouldMention: false,
        showMentionToggle: false
      })
    }
    try {
      let t = [],
        n = [];
      for (let r of e) {
        var S;
        let e = await (0, m.rO)(r),
          i = null != (S = r.name) ? S : (0, g.yl)(f.default.extractTimestamp(r.id)),
          a = (0, h.Z)(i);
        if (r.type === p.NJ.CLIP || r.type === p.NJ.VOICE_CLIP) {
          let i = "".concat("" !== a ? a : "clip", ".mp4");
          t.push(new File([e], i, {
            type: "video/mp4"
          })), n.push({
            clip: r
          })
        } else if (r.type === p.NJ.SCREENSHOT) {
          let r = "".concat("" !== a ? a : "screenshot", ".jpeg");
          t.push(new File([e], r, {
            type: "image/jpeg"
          })), n.push({})
        }
        d.default.track(E.rMx.CLIP_SHARED, {
          location_stack: O,
          guild_id: T.guild_id,
          channel_id: T.id,
          channel_type: T.type,
          application_id: r.applicationId,
          clip_id: r.id
        })
      }(0, _.d)(t, T, c.d.ChannelMessage, {
        filesMetadata: n,
        origin: "unknown:clip_share"
      }), i.pT()
    } catch (e) {
      throw g.jF.error(e), e
    }
  } else(0, a.ZDy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("36653"), n.e("33648"), n.e("25881")]).then(n.bind(n, 502801));
    return n => (0, r.jsx)(t, v(y({}, n), {
      clips: e,
      analyticsLocations: O
    }))
  }, {
    stackingBehavior: "stack",
    modalKey: o.so
  })
}