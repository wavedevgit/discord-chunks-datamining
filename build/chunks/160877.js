/** Chunk was on 57539 **/
n.d(e, {
  $: () => g,
  s: () => I
}), n(953529);
var a = n(255367),
  i = n(73800),
  o = n(120356),
  r = n.n(o),
  l = n(470167),
  s = n(82659),
  c = n(572691),
  d = n(70097),
  u = n(406432),
  m = n(584656),
  _ = n(247206),
  p = n(470734),
  x = n(719548),
  f = n(388032),
  v = n(580297);
let h = t => {
    let {
      attachment: e
    } = t, {
      url: n,
      description: i
    } = e;
    return null == n ? null : (0, a.jsx)(b, {
      url: n,
      description: i
    })
  },
  E = t => {
    var e, n, i;
    let {
      embed: o
    } = t;
    if (!x.n2.has(o.type)) return null;
    let r = void 0 !== o.video && o.type !== l.h.GIFV ? o.video.url : null != (i = null == (e = o.thumbnail) ? void 0 : e.url) ? i : null == (n = o.image) ? void 0 : n.url;
    return null == r ? null : (0, a.jsx)(b, {
      url: r
    })
  },
  b = t => {
    let {
      url: e,
      description: n
    } = t, i = (0, u.cb)(e);
    return (0, a.jsx)("div", {
      className: v.mediaContainer,
      children: i ? (0, a.jsx)(d.Z, {
        className: r()(v.video, v.media),
        controls: !0,
        src: e
      }) : (0, a.jsx)("img", {
        className: r()(v.image, v.media),
        src: e,
        alt: n
      })
    })
  };

function I(t) {
  c.Z.pop(), (0, m.t)({
    id: "explicit-media-false-positive-modal",
    text: f.intl.string(f.t.gFsTKi)
  }), t()
}

function g(t) {
  let {
    channelId: e,
    messageId: n,
    isReportFalsePositiveLoading: o,
    analyticsContext: r,
    attachmentPreview: l,
    embedPreview: c,
    onConfirmPress: d,
    transitionState: u,
    onClose: m
  } = t, x = (0, p.pn)("ExplicitMediaFalsePositiveModal"), v = i.useCallback(() => {
    (0, _.aP)({
      action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: e,
      messageId: n,
      context: r
    }), m()
  }, [e, n, r, m]), b = i.useCallback(() => {
    null == d || d(), (0, _.aP)({
      action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: e,
      messageId: n,
      context: r
    })
  }, [e, n, r, d]);
  i.useEffect(() => {
    (0, _.aP)({
      action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: e,
      messageId: n,
      context: r
    })
  }, [e, n, r]);
  let I = i.useMemo(() => x ? f.intl.string(f.t["z4du/P"]) : f.intl.string(f.t.gg5Dp6), [x]);
  return (0, a.jsxs)(s.Modal, {
    transitionState: u,
    onClose: m,
    title: f.intl.string(f.t.TPpVkJ),
    subtitle: I,
    actions: [{
      text: f.intl.string(f.t["ETE/oK"]),
      onClick: v,
      variant: "secondary",
      disabled: o
    }, {
      text: f.intl.string(f.t["cY+Ooa"]),
      onClick: b,
      loading: o,
      disabled: o
    }],
    children: [null != l && (0, a.jsx)(h, {
      attachment: l
    }), null != c && (0, a.jsx)(E, {
      embed: c
    })]
  })
}