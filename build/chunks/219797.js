/** Chunk was on 21607 **/
i.d(t, {
  L9: () => j,
  ZK: () => M,
  d4: () => B,
  dS: () => O,
  jY: () => x,
  q7: () => P,
  vZ: () => C
}), i(953529), i(997841);
var n = i(200651),
  o = i(192379),
  a = i(442837),
  r = i(993365),
  l = i(981729),
  s = i(481060),
  c = i(543651),
  u = i(177751),
  d = i(519320),
  f = i(592125),
  m = i(52824),
  _ = i(630388),
  p = i(591759),
  y = i(850908),
  I = i(524444),
  v = i(981631),
  b = i(388032),
  h = i(324846);

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = i[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      i.push.apply(i, n)
    }
    return i
  })(Object(t)).forEach(function(i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
  }), e
}

function O(e) {
  var t;
  let i = e.item.originalItem;
  return (0, I.Yi)(w(g({}, e), {
    alt: i.description,
    src: (0, m.q)({
      proxyURL: i.proxy_url,
      url: i.url
    }),
    original: i.url,
    placeholder: i.placeholder,
    placeholderVersion: i.placeholder_version,
    srcIsAnimated: (0, _.yE)(null != (t = i.flags) ? t : 0, v.J0y.IS_ANIMATED),
    sourceMetadata: {
      message: e.message,
      identifier: {
        type: "attachment",
        attachmentId: i.id,
        filename: i.filename,
        title: i.title,
        size: i.size
      }
    },
    analyticsSource: "ImageComponentForMessageAttachment"
  }))
}

function C(e) {
  var t;
  let i = e.item.originalItem,
    a = o.useCallback(() => {
      var e;
      return (0, _.yE)(null != (e = i.flags) ? e : 0, v.J0y.IS_CLIP) ? (0, n.jsxs)(l.DY, {
        text: b.intl.string(b.t["/fgfWl"]),
        className: h.clipPill,
        children: [(0, n.jsx)(s.AlX, {
          size: "xs",
          color: "currentColor"
        }), (0, n.jsx)(r.x, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: b.intl.string(b.t.oA4afH)
        })]
      }) : null
    }, [i]),
    c = p.Z.toURLSafe(i.proxy_url);
  return null == c ? null : (c.searchParams.append("format", "webp"), (0, I.lV)(w(g({}, e), {
    alt: i.description,
    poster: c.toString(),
    fileSize: i.size,
    fileName: (0, y.Z)(i),
    src: i.url,
    placeholder: i.placeholder,
    placeholderVersion: i.placeholder_version,
    srcIsAnimated: (0, _.yE)(null != (t = i.flags) ? t : 0, v.J0y.IS_ANIMATED),
    renderOverlayContent: a,
    sourceMetadata: {
      message: e.message,
      identifier: {
        type: "attachment",
        attachmentId: i.id,
        filename: i.filename,
        size: i.size
      }
    }
  })))
}

function P(e) {
  let t = e.item.originalItem;
  return (0, I.hX)(w(g({}, e), {
    fileSize: t.size,
    fileName: (0, y.Z)(t),
    src: t.url
  }))
}

function x(e) {
  let {
    message: t,
    item: i
  } = e, n = i.originalItem, a = (0, u.RT)(u.Ir.VOICE_MESSAGE, n.id), r = o.useCallback((e, i, o) => {
    var a;
    (0, d.tb)(t.id, null != (a = n.duration_secs) ? a : null, i, t.author.id)
  }, [t, n.duration_secs]), l = o.useCallback((e, i) => {
    var o;
    (0, d.EW)(t.id, null != (o = n.duration_secs) ? o : null, e, t.author.id, i)
  }, [t, n.duration_secs]), s = o.useCallback(e => {
    var i;
    (0, d.Np)(t.id, null != (i = null == e ? void 0 : e.message) ? i : null)
  }, [t]);
  return (0, I.wj)(w(g({}, e), {
    fileSize: n.size,
    fileName: (0, y.Z)(n),
    src: n.url,
    durationSecs: n.duration_secs,
    waveform: n.waveform,
    onPlay: r,
    onPause: l,
    onError: s,
    playbackCacheKey: a
  }))
}

function B(e) {
  let t = e.item.originalItem;
  return (0, I.xi)(w(g({}, e), {
    url: t.url,
    fileName: (0, y.Z)(t),
    fileSize: t.size,
    contentType: t.content_type
  }))
}

function M(e) {
  let t = e.item.originalItem;
  return (0, I.ur)(w(g({}, e), {
    url: t.url,
    fileName: (0, y.Z)(t),
    fileSize: t.size
  }))
}

function j(e) {
  return "CLIP" === e.item.type ? (0, n.jsx)(E, {
    attachment: e.item.originalItem,
    message: e.message
  }) : null
}

function E(e) {
  var t;
  let {
    attachment: i,
    message: o
  } = e, r = o.channel_id, l = (0, a.e7)([f.Z], () => {
    var e;
    return null == (e = f.Z.getBasicChannel(r)) ? void 0 : e.guild_id
  }), {
    clip_created_at: s,
    clip_participants: u,
    title: d,
    application: m
  } = i;
  return (0, n.jsx)(c.Z, {
    createdAt: null != s ? Date.parse(s) : void 0,
    participantIds: null != (t = null == u ? void 0 : u.map(e => {
      let {
        id: t
      } = e;
      return t
    })) ? t : [],
    applicationId: null == m ? void 0 : m.id,
    title: d,
    guildId: l
  })
}