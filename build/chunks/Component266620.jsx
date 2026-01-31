/** Chunk was on 64935 **/
/** chunk id: 266620, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cr: () => x,
  I1: () => E,
  Nj: () => j,
  R6: () => I,
  SX: () => C,
  UB: () => S,
  YE: () => T
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

function v(e) {
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
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  var t;
  let n = e.item.originalItem;
  return (0, h.LL)(O(v({}, e), {
    alt: n.description,
    src: (0, f.E)({
      proxyURL: n.proxy_url,
      url: n.url
    }),
    original: n.url,
    placeholder: n.placeholder,
    placeholderVersion: n.placeholder_version,
    contentType: n.content_type,
    originalContentType: n.original_content_type,
    srcIsAnimated: (0, l.Lt)(null != (t = n.flags) ? t : 0, b.sbO.IS_ANIMATED),
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

function E(e) {
  var t;
  let n = e.item.originalItem,
    a = i.useCallback(() => {
      var e;
      return (0, l.Lt)(null != (e = n.flags) ? e : 0, b.sbO.IS_CLIP) ? (0, r.jsx)(o.m, {
        text: y.intl.string(y.t["/fgfWh"]),
        children: (0, r.jsxs)("div", {
          className: A.M,
          children: [(0, r.jsx)(c.xgA, {
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(s.E, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: y.intl.string(y.t.oA4afG)
          })]
        })
      }) : null
    }, [n]),
    u = g.A.toURLSafe(n.proxy_url);
  return null == u ? null : (u.searchParams.append("format", "webp"), (0, h.$o)(O(v({}, e), {
    alt: n.description,
    poster: u.toString(),
    fileSize: n.size,
    fileName: (0, _.A)(n),
    src: n.url,
    placeholder: n.placeholder,
    placeholderVersion: n.placeholder_version,
    srcIsAnimated: (0, l.Lt)(null != (t = n.flags) ? t : 0, b.sbO.IS_ANIMATED),
    renderOverlayContent: a,
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

function j(e) {
  let t = e.item.originalItem;
  return (0, h.gL)(O(v({}, e), {
    fileSize: t.size,
    fileName: (0, _.A)(t),
    src: t.url
  }))
}

function C(e) {
  let {
    message: t,
    item: n
  } = e, r = n.originalItem, l = (0, d.dx)(d.k0.VOICE_MESSAGE, r.id), a = i.useCallback((e, n, i) => {
    var l;
    (0, p.wQ)(t.id, null != (l = r.duration_secs) ? l : null, n, t.author.id)
  }, [t, r.duration_secs]), s = i.useCallback((e, n) => {
    var i;
    (0, p.dP)(t.id, null != (i = r.duration_secs) ? i : null, e, t.author.id, n)
  }, [t, r.duration_secs]), o = i.useCallback(e => {
    var n;
    (0, p._O)(t.id, null != (n = null == e ? true : e.message) ? n : null)
  }, [t]);
  return (0, h.P$)(O(v({}, e), {
    fileSize: r.size,
    fileName: (0, _.A)(r),
    src: r.url,
    durationSecs: r.duration_secs,
    waveform: r.waveform,
    onPlay: a,
    onPause: s,
    onError: o,
    playbackCacheKey: l
  }))
}

function I(e) {
  let t = e.item.originalItem;
  return (0, h._d)(O(v({}, e), {
    url: t.url,
    fileName: (0, _.A)(t),
    fileSize: t.size,
    contentType: t.content_type
  }))
}

function S(e) {
  let t = e.item.originalItem;
  return (0, h.Dk)(O(v({}, e), {
    url: t.url,
    fileName: (0, _.A)(t),
    fileSize: t.size
  }))
}

function T(e) {
  return "CLIP" === e.item.type ? (0, r.jsx)(N, {
    attachment: e.item.originalItem,
    message: e.message
  }) : null
}

function N(e) {
  var t;
  let {
    attachment: n,
    message: i
  } = e, l = i.channel_id, s = (0, a.bG)([m.A], () => {
    var e;
    return null == (e = m.A.getBasicChannel(l)) ? true : e.guild_id
  }), {
    clip_created_at: o,
    clip_participants: c,
    title: d,
    application: p
  } = n;
  return (0, r.jsx)(u.A, {
    createdAt: null != o ? Date.parse(o) : true,
    participantIds: null != (t = null == c ? true : c.map(e => {
      let {
        id: t
      } = e;
      return t
    })) ? t : [],
    applicationId: null == p ? true : p.id,
    title: d,
    guildId: s
  })
}