/** Chunk was on web.js **/
/** chunk id: 602902, original params: e,t,n (module,exports,re quire) **/
"use strict";
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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
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
async function A(e, t) {
  let {
    channelId: y,
    analyticsLocations: O,
    messageReference: A
  } = t, I = l.A.getChannel(y);
  if (null != I) {
    if (null != A) {
      let e = u.A.getMessage(A.channel_id, A.message_id);
      null != e && (0, o.Yf)({
        message: e,
        channel: I,
        shouldMention: false,
        showMentionToggle: false
      })
    }
    try {
      let t = [],
        n = [];
      for (let r of e) {
        var S;
        let e = await (0, m.VO)(r),
          i = null != (S = r.name) ? S : (0, g.cM)(f.default.extractTimestamp(r.id)),
          a = (0, h.A)(i);
        if (r.type === _.nQ.CLIP || r.type === _.nQ.VOICE_CLIP) {
          let i = "".concat("" !== a ? a : "clip", ".mp4");
          t.push(new File([e], i, {
            type: "video/mp4"
          })), n.push({
            clip: r
          })
        } else if (r.type === _.nQ.SCREENSHOT) {
          let r = "".concat("" !== a ? a : "screenshot", ".jpeg");
          t.push(new File([e], r, {
            type: "image/jpeg"
          })), n.push({})
        }
        d.default.track(E.HAw.CLIP_SHARED, {
          location_stack: O,
          guild_id: I.guild_id,
          channel_id: I.id,
          channel_type: I.type,
          application_id: r.applicationId,
          clip_id: r.id
        })
      }(0, p.R)(t, I, c.C.ChannelMessage, {
        filesMetadata: n,
        origin: "unknown:clip_share"
      }), i.closeAllModals()
    } catch (e) {
      throw g.nx.error(e), e
    }
  } else(0, a.mMO)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("96758"), n.e("43622"), n.e("87102")]).then(n.bind(n, 243258));
    return n => (0, r.jsx)(t, v(b({}, n), {
      clips: e,
      analyticsLocations: O
    }))
  }, {
    stackingBehavior: "stack",
    modalKey: s.aU
  })
}