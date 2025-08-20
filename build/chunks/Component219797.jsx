/** Chunk was on 43694 **/
/** chunk id: 219797, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  L9: () => S,
  ZK: () => B,
  d4: () => O,
  dS: () => T,
  jY: () => w,
  q7: () => M,
  vZ: () => x
}), require("./953529.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk993365 = require("./993365.js"),
  Chunk981729 = require("./981729.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk543651 = require("./543651.jsx"),
  Chunk177751 = require("./177751.js"),
  Chunk519320 = require("./519320.js"),
  Chunk592125 = require("./592125.js"),
  Chunk52824 = require("./52824.js"),
  Chunk630388 = require("./630388.js"),
  Chunk591759 = require("./591759.js"),
  Chunk850908 = require("./850908.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk512399 = require("./512399.js");

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      o = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), o.forEach(function(t) {
      var o;
      o = a[t], t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = o
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      a.push.apply(a, o)
    }
    return a
  })(Object(t)).forEach(function(a) {
    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
  }), e
}

function T(e) {
  var t;
  let a = e.item.originalItem;
  return (0, C.Yi)(v(I({}, e), {
    alt: a.description,
    src: (0, m.q)({
      proxyURL: a.proxy_url,
      url: a.url
    }),
    original: a.url,
    placeholder: a.placeholder,
    placeholderVersion: a.placeholder_version,
    contentType: a.content_type,
    originalContentType: a.original_content_type,
    srcIsAnimated: (0, u.yE)(null != (t = a.flags) ? t : 0, b.J0y.IS_ANIMATED),
    sourceMetadata: {
      message: e.message,
      identifier: {
        type: "attachment",
        attachmentId: a.id,
        filename: a.filename,
        title: a.title,
        size: a.size
      }
    },
    analyticsSource: "ImageComponentForMessageAttachment"
  }))
}

function x(e) {
  var t;
  let a = e.item.originalItem,
    i = n.useCallback(() => {
      var e;
      return (0, u.yE)(null != (e = a.flags) ? e : 0, b.J0y.IS_CLIP) ? (0, o.jsxs)(c.DY, {
        text: h.intl.string(h.t["/fgfWl"]),
        className: y.clipPill,
        children: [(0, o.jsx)(s.AlX, {
          size: "xs",
          color: "currentColor"
        }), (0, o.jsx)(r.x, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: h.intl.string(h.t.oA4afH)
        })]
      }) : null
    }, [a]),
    l = f.Z.toURLSafe(a.proxy_url);
  return null == l ? null : (l.searchParams.append("format", "webp"), (0, C.lV)(v(I({}, e), {
    alt: a.description,
    poster: l.toString(),
    fileSize: a.size,
    fileName: (0, g.Z)(a),
    src: a.url,
    placeholder: a.placeholder,
    placeholderVersion: a.placeholder_version,
    srcIsAnimated: (0, u.yE)(null != (t = a.flags) ? t : 0, b.J0y.IS_ANIMATED),
    renderOverlayContent: i,
    sourceMetadata: {
      message: e.message,
      identifier: {
        type: "attachment",
        attachmentId: a.id,
        filename: a.filename,
        size: a.size
      }
    }
  })))
}

function M(e) {
  let t = e.item.originalItem;
  return (0, C.hX)(v(I({}, e), {
    fileSize: t.size,
    fileName: (0, g.Z)(t),
    src: t.url
  }))
}

function w(e) {
  let {
    message: t,
    item: a
  } = e, o = a.originalItem, i = (0, _.RT)(_.Ir.VOICE_MESSAGE, o.id), r = n.useCallback((e, a, n) => {
    var i;
    (0, d.tb)(t.id, null != (i = o.duration_secs) ? i : null, a, t.author.id)
  }, [t, o.duration_secs]), c = n.useCallback((e, a) => {
    var n;
    (0, d.EW)(t.id, null != (n = o.duration_secs) ? n : null, e, t.author.id, a)
  }, [t, o.duration_secs]), s = n.useCallback(e => {
    var a;
    (0, d.Np)(t.id, null != (a = null == e ? true : e.message) ? a : null)
  }, [t]);
  return (0, C.wj)(v(I({}, e), {
    fileSize: o.size,
    fileName: (0, g.Z)(o),
    src: o.url,
    durationSecs: o.duration_secs,
    waveform: o.waveform,
    onPlay: r,
    onPause: c,
    onError: s,
    playbackCacheKey: i
  }))
}

function O(e) {
  let t = e.item.originalItem;
  return (0, C.xi)(v(I({}, e), {
    url: t.url,
    fileName: (0, g.Z)(t),
    fileSize: t.size,
    contentType: t.content_type
  }))
}

function B(e) {
  let t = e.item.originalItem;
  return (0, C.ur)(v(I({}, e), {
    url: t.url,
    fileName: (0, g.Z)(t),
    fileSize: t.size
  }))
}

function S(e) {
  return "CLIP" === e.item.type ? (0, o.jsx)(A, {
    attachment: e.item.originalItem,
    message: e.message
  }) : null
}

function A(e) {
  var t;
  let {
    attachment: a,
    message: n
  } = e, r = n.channel_id, c = (0, i.e7)([p.Z], () => {
    var e;
    return null == (e = p.Z.getBasicChannel(r)) ? true : e.guild_id
  }), {
    clip_created_at: s,
    clip_participants: _,
    title: d,
    application: m
  } = a;
  return (0, o.jsx)(l.Z, {
    createdAt: null != s ? Date.parse(s) : true,
    participantIds: null != (t = null == _ ? true : _.map(e => {
      let {
        id: t
      } = e;
      return t
    })) ? t : [],
    applicationId: null == m ? true : m.id,
    title: d,
    guildId: c
  })
}