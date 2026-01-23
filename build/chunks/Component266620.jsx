/** Chunk was on web.js **/
/** chunk id: 266620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cr: () => S,
  I1: () => T,
  Nj: () => C,
  R6: () => w,
  SX: () => N,
  UB: () => R,
  YE: () => P
}), require("./228524.js"), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk571356 = require("./571356.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk458517 = require("./458517.jsx"),
  Chunk713021 = require("./713021.js"),
  Chunk121489 = require("./121489.js"),
  Chunk734057 = require("./734057.js"),
  Chunk644447 = require("./644447.js"),
  Chunk998218 = require("./998218.js"),
  Chunk465856 = require("./465856.js"),
  Chunk652176 = require("./652176.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk928438 = require("./928438.js");

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

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  var t;
  let n = e.item.originalItem;
  return (0, g.LL)(I(v({}, e), {
    alt: n.description,
    src: (0, _.E)({
      proxyURL: n.proxy_url,
      url: n.url
    }),
    original: n.url,
    placeholder: n.placeholder,
    placeholderVersion: n.placeholder_version,
    contentType: n.content_type,
    originalContentType: n.original_content_type,
    srcIsAnimated: (0, a.Lt)(null != (t = n.flags) ? t : 0, E.sbO.IS_ANIMATED),
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

function T(e) {
  var t;
  let n = e.item.originalItem,
    s = i.useCallback(() => {
      var e;
      return (0, a.Lt)(null != (e = n.flags) ? e : 0, E.sbO.IS_CLIP) ? (0, r.jsx)(l.m, {
        text: y.intl.string(y.t["/fgfWh"]),
        children: (0, r.jsxs)("div", {
          className: b.M,
          children: [(0, r.jsx)(c.xgA, {
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(o.E, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: y.intl.string(y.t.oA4afG)
          })]
        })
      }) : null
    }, [n]),
    u = h.A.toURLSafe(n.proxy_url);
  return null == u ? null : (u.searchParams.append("format", "webp"), (0, g.$o)(I(v({}, e), {
    alt: n.description,
    poster: u.toString(),
    fileSize: n.size,
    fileName: (0, m.A)(n),
    src: n.url,
    placeholder: n.placeholder,
    placeholderVersion: n.placeholder_version,
    srcIsAnimated: (0, a.Lt)(null != (t = n.flags) ? t : 0, E.sbO.IS_ANIMATED),
    renderOverlayContent: s,
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

function C(e) {
  let t = e.item.originalItem;
  return (0, g.gL)(I(v({}, e), {
    fileSize: t.size,
    fileName: (0, m.A)(t),
    src: t.url
  }))
}

function N(e) {
  let {
    message: t,
    item: n
  } = e, r = n.originalItem, a = (0, d.dx)(d.k0.VOICE_MESSAGE, r.id), s = i.useCallback((e, n, i) => {
    var a;
    (0, f.wQ)(t.id, null != (a = r.duration_secs) ? a : null, n, t.author.id)
  }, [t, r.duration_secs]), o = i.useCallback((e, n) => {
    var i;
    (0, f.dP)(t.id, null != (i = r.duration_secs) ? i : null, e, t.author.id, n)
  }, [t, r.duration_secs]), l = i.useCallback(e => {
    var n;
    (0, f._O)(t.id, null != (n = null == e ? true : e.message) ? n : null)
  }, [t]);
  return (0, g.P$)(I(v({}, e), {
    fileSize: r.size,
    fileName: (0, m.A)(r),
    src: r.url,
    durationSecs: r.duration_secs,
    waveform: r.waveform,
    onPlay: s,
    onPause: o,
    onError: l,
    playbackCacheKey: a
  }))
}

function w(e) {
  let t = e.item.originalItem;
  return (0, g._d)(I(v({}, e), {
    url: t.url,
    fileName: (0, m.A)(t),
    fileSize: t.size,
    contentType: t.content_type
  }))
}

function R(e) {
  let t = e.item.originalItem;
  return (0, g.Dk)(I(v({}, e), {
    url: t.url,
    fileName: (0, m.A)(t),
    fileSize: t.size
  }))
}

function P(e) {
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
  } = e, a = i.channel_id, o = (0, s.bG)([p.A], () => {
    var e;
    return null == (e = p.A.getBasicChannel(a)) ? true : e.guild_id
  }), {
    clip_created_at: l,
    clip_participants: c,
    title: d,
    application: f
  } = n;
  return (0, r.jsx)(u.A, {
    createdAt: null != l ? Date.parse(l) : true,
    participantIds: null != (t = null == c ? true : c.map(e => {
      let {
        id: t
      } = e;
      return t
    })) ? t : [],
    applicationId: null == f ? true : f.id,
    title: d,
    guildId: o
  })
}