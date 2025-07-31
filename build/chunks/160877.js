/** Chunk was on 57539 **/
n.d(e, {
  $: () => T,
  s: () => C
}), n(953529);
var i = n(255367),
  a = n(73800),
  l = n(120356),
  o = n.n(l),
  s = n(470167),
  r = n(82659),
  c = n(572691),
  u = n(70097),
  d = n(406432),
  m = n(584656),
  f = n(247206),
  p = n(470734),
  E = n(719548),
  I = n(388032),
  _ = n(580297);
let v = t => {
    let {
      attachment: e
    } = t, {
      url: n,
      description: a
    } = e;
    return null == n ? null : (0, i.jsx)(g, {
      url: n,
      description: a
    })
  },
  x = t => {
    var e, n, a;
    let {
      embed: l
    } = t;
    if (!E.n2.has(l.type)) return null;
    let o = void 0 !== l.video && l.type !== s.h.GIFV ? l.video.url : null != (a = null == (e = l.thumbnail) ? void 0 : e.url) ? a : null == (n = l.image) ? void 0 : n.url;
    return null == o ? null : (0, i.jsx)(g, {
      url: o
    })
  },
  g = t => {
    let {
      url: e,
      description: n
    } = t, a = (0, d.cb)(e);
    return (0, i.jsx)("div", {
      className: _.mediaContainer,
      children: a ? (0, i.jsx)(u.Z, {
        className: o()(_.video, _.media),
        controls: !0,
        src: e
      }) : (0, i.jsx)("img", {
        className: o()(_.image, _.media),
        src: e,
        alt: n
      })
    })
  };

function C(t) {
  c.Z.pop(), (0, m.t)({
    id: "explicit-media-false-positive-modal",
    text: I.intl.string(I.t.gFsTKi)
  }), t()
}

function T(t) {
  let {
    channelId: e,
    messageId: n,
    isReportFalsePositiveLoading: l,
    analyticsContext: o,
    attachmentPreview: s,
    embedPreview: c,
    onConfirmPress: u,
    transitionState: d,
    onClose: m
  } = t, E = (0, p.pn)("ExplicitMediaFalsePositiveModal"), _ = a.useCallback(() => {
    (0, f.aP)({
      action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: e,
      messageId: n,
      context: o
    }), m()
  }, [e, n, o, m]), g = a.useCallback(() => {
    null == u || u(), (0, f.aP)({
      action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: e,
      messageId: n,
      context: o
    })
  }, [e, n, o, u]);
  a.useEffect(() => {
    (0, f.aP)({
      action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: e,
      messageId: n,
      context: o
    })
  }, [e, n, o]);
  let C = a.useMemo(() => E ? I.intl.string(I.t["z4du/P"]) : I.intl.string(I.t.gg5Dp6), [E]);
  return (0, i.jsxs)(r.Modal, {
    transitionState: d,
    onClose: m,
    title: I.intl.string(I.t.TPpVkJ),
    subtitle: C,
    actions: [{
      text: I.intl.string(I.t["ETE/oK"]),
      onClick: _,
      variant: "secondary",
      disabled: l
    }, {
      text: I.intl.string(I.t["cY+Ooa"]),
      onClick: g,
      loading: l,
      disabled: l
    }],
    children: [null != s && (0, i.jsx)(v, {
      attachment: s
    }), null != c && (0, i.jsx)(x, {
      embed: c
    })]
  })
}