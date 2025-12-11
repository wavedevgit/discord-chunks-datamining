/** Chunk was on web.js **/
/** chunk id: 219797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L9: () => w,
  ZK: () => R,
  d4: () => P,
  dS: () => T,
  jY: () => N,
  q7: () => A,
  vZ: () => C
}), require("./953529.js"), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk993365 = require("./993365.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk543651 = require("./543651.jsx"),
  Chunk177751 = require("./177751.js"),
  Chunk519320 = require("./519320.js"),
  Chunk592125 = require("./592125.js"),
  Chunk52824 = require("./52824.js"),
  Chunk591759 = require("./591759.js"),
  Chunk850908 = require("./850908.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk977267 = require("./977267.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  var t;
  let n = e.item.originalItem;
  return (0, g.Yi)(I(v({}, e), {
    alt: n.description,
    src: (0, _.q)({
      proxyURL: n.proxy_url,
      url: n.url
    }),
    original: n.url,
    placeholder: n.placeholder,
    placeholderVersion: n.placeholder_version,
    contentType: n.content_type,
    originalContentType: n.original_content_type,
    srcIsAnimated: (0, a.yE)(null != (t = n.flags) ? t : 0, E.J0y.IS_ANIMATED),
    sourceMetadata: {
      message: e.message,
      identifier: {
        type: "attachment",
        attachmentId: n.id,
        filename: n.filename,
        title: n.title,
        size: n.size
      }
    },
    analyticsSource: "ImageComponentForMessageAttachment"
  }))
}

function C(e) {
  var t;
  let n = e.item.originalItem,
    o = i.useCallback(() => {
      var e;
      return (0, a.yE)(null != (e = n.flags) ? e : 0, E.J0y.IS_CLIP) ? (0, r.jsx)(l.u, {
        text: b.intl.string(b.t["/fgfWh"]),
        children: (0, r.jsxs)("div", {
          className: y.clipPill,
          children: [(0, r.jsx)(c.AlX, {
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(s.x, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: b.intl.string(b.t.oA4afG)
          })]
        })
      }) : null
    }, [n]),
    u = m.Z.toURLSafe(n.proxy_url);
  return null == u ? null : (u.searchParams.append("format", "webp"), (0, g.lV)(I(v({}, e), {
    alt: n.description,
    poster: u.toString(),
    fileSize: n.size,
    fileName: (0, h.Z)(n),
    src: n.url,
    placeholder: n.placeholder,
    placeholderVersion: n.placeholder_version,
    srcIsAnimated: (0, a.yE)(null != (t = n.flags) ? t : 0, E.J0y.IS_ANIMATED),
    renderOverlayContent: o,
    sourceMetadata: {
      message: e.message,
      identifier: {
        type: "attachment",
        attachmentId: n.id,
        filename: n.filename,
        size: n.size
      }
    }
  })))
}

function A(e) {
  let t = e.item.originalItem;
  return (0, g.hX)(I(v({}, e), {
    fileSize: t.size,
    fileName: (0, h.Z)(t),
    src: t.url
  }))
}

function N(e) {
  let {
    message: t,
    item: n
  } = e, r = n.originalItem, a = (0, d.RT)(d.Ir.VOICE_MESSAGE, r.id), o = i.useCallback((e, n, i) => {
    var a;
    (0, f.tb)(t.id, null != (a = r.duration_secs) ? a : null, n, t.author.id)
  }, [t, r.duration_secs]), s = i.useCallback((e, n) => {
    var i;
    (0, f.EW)(t.id, null != (i = r.duration_secs) ? i : null, e, t.author.id, n)
  }, [t, r.duration_secs]), l = i.useCallback(e => {
    var n;
    (0, f.Np)(t.id, null != (n = null == e ? true : e.message) ? n : null)
  }, [t]);
  return (0, g.wj)(I(v({}, e), {
    fileSize: r.size,
    fileName: (0, h.Z)(r),
    src: r.url,
    durationSecs: r.duration_secs,
    waveform: r.waveform,
    onPlay: o,
    onPause: s,
    onError: l,
    playbackCacheKey: a
  }))
}

function P(e) {
  let t = e.item.originalItem;
  return (0, g.xi)(I(v({}, e), {
    url: t.url,
    fileName: (0, h.Z)(t),
    fileSize: t.size,
    contentType: t.content_type
  }))
}

function R(e) {
  let t = e.item.originalItem;
  return (0, g.ur)(I(v({}, e), {
    url: t.url,
    fileName: (0, h.Z)(t),
    fileSize: t.size
  }))
}

function w(e) {
  return "CLIP" === e.item.type ? (0, r.jsx)(D, {
    attachment: e.item.originalItem,
    message: e.message
  }) : null
}

function D(e) {
  var t;
  let {
    attachment: n,
    message: i
  } = e, a = i.channel_id, s = (0, o.e7)([p.Z], () => {
    var e;
    return null == (e = p.Z.getBasicChannel(a)) ? true : e.guild_id
  }), {
    clip_created_at: l,
    clip_participants: c,
    title: d,
    application: f
  } = n;
  return (0, r.jsx)(u.Z, {
    createdAt: null != l ? Date.parse(l) : true,
    participantIds: null != (t = null == c ? true : c.map(e => {
      let {
        id: t
      } = e;
      return t
    })) ? t : [],
    applicationId: null == f ? true : f.id,
    title: d,
    guildId: s
  })
}