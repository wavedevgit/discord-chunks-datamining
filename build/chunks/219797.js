/** Chunk was on 21607 **/
i.d(t, {
  L9: () => M,
  ZK: () => B,
  d4: () => x,
  dS: () => w,
  jY: () => P,
  q7: () => C,
  vZ: () => O
}), i(953529), i(997841);
var n = i(255367),
  o = i(73800),
  a = i(442837),
  r = i(993365),
  l = i(981729),
  s = i(481060),
  c = i(543651),
  u = i(519320),
  d = i(592125),
  f = i(52824),
  m = i(630388),
  _ = i(591759),
  p = i(850908),
  y = i(524444),
  I = i(981631),
  v = i(388032),
  b = i(324846);

function h(e) {
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

function g(e, t) {
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

function w(e) {
  var t;
  let i = e.item.originalItem;
  return (0, y.Yi)(g(h({}, e), {
    alt: i.description,
    src: (0, f.q)({
      proxyURL: i.proxy_url,
      url: i.url
    }),
    original: i.url,
    placeholder: i.placeholder,
    placeholderVersion: i.placeholder_version,
    srcIsAnimated: (0, m.yE)(null != (t = i.flags) ? t : 0, I.J0y.IS_ANIMATED),
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

function O(e) {
  var t;
  let i = e.item.originalItem,
    a = o.useCallback(() => {
      var e;
      return (0, m.yE)(null != (e = i.flags) ? e : 0, I.J0y.IS_CLIP) ? (0, n.jsxs)(l.DY, {
        text: v.intl.string(v.t["/fgfWl"]),
        className: b.clipPill,
        children: [(0, n.jsx)(s.AlX, {
          size: "xs",
          color: "currentColor"
        }), (0, n.jsx)(r.x, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: v.intl.string(v.t.oA4afH)
        })]
      }) : null
    }, [i]),
    c = _.Z.toURLSafe(i.proxy_url);
  return null == c ? null : (c.searchParams.append("format", "webp"), (0, y.lV)(g(h({}, e), {
    alt: i.description,
    poster: c.toString(),
    fileSize: i.size,
    fileName: (0, p.Z)(i),
    src: i.url,
    placeholder: i.placeholder,
    placeholderVersion: i.placeholder_version,
    srcIsAnimated: (0, m.yE)(null != (t = i.flags) ? t : 0, I.J0y.IS_ANIMATED),
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

function C(e) {
  let t = e.item.originalItem;
  return (0, y.hX)(g(h({}, e), {
    fileSize: t.size,
    fileName: (0, p.Z)(t),
    src: t.url
  }))
}

function P(e) {
  let {
    message: t,
    item: i
  } = e, n = i.originalItem, a = o.useCallback((e, i, o) => {
    var a;
    (0, u.tb)(t.id, null != (a = n.duration_secs) ? a : null, i, t.author.id)
  }, [t, n.duration_secs]), r = o.useCallback((e, i) => {
    var o;
    (0, u.EW)(t.id, null != (o = n.duration_secs) ? o : null, e, t.author.id, i)
  }, [t, n.duration_secs]), l = o.useCallback(e => {
    var i;
    (0, u.Np)(t.id, null != (i = null == e ? void 0 : e.message) ? i : null)
  }, [t]);
  return (0, y.wj)(g(h({}, e), {
    fileSize: n.size,
    fileName: (0, p.Z)(n),
    src: n.url,
    durationSecs: n.duration_secs,
    waveform: n.waveform,
    onPlay: a,
    onPause: r,
    onError: l
  }))
}

function x(e) {
  let t = e.item.originalItem;
  return (0, y.xi)(g(h({}, e), {
    url: t.url,
    fileName: (0, p.Z)(t),
    fileSize: t.size,
    contentType: t.content_type
  }))
}

function B(e) {
  let t = e.item.originalItem;
  return (0, y.ur)(g(h({}, e), {
    url: t.url,
    fileName: (0, p.Z)(t),
    fileSize: t.size
  }))
}

function M(e) {
  return "CLIP" === e.item.type ? (0, n.jsx)(j, {
    attachment: e.item.originalItem,
    message: e.message
  }) : null
}

function j(e) {
  var t;
  let {
    attachment: i,
    message: o
  } = e, r = o.channel_id, l = (0, a.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getBasicChannel(r)) ? void 0 : e.guild_id
  }), {
    clip_created_at: s,
    clip_participants: u,
    title: f,
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
    title: f,
    guildId: l
  })
}