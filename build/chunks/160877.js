/** Chunk was on 57539 **/
n.d(e, {
  $: () => C,
  s: () => I
}), n(953529);
var a = n(255367),
  i = n(73800),
  o = n(120356),
  r = n.n(o),
  s = n(470167),
  l = n(481060),
  c = n(572691),
  d = n(313201),
  u = n(70097),
  m = n(406432),
  h = n(584656),
  x = n(247206),
  _ = n(719548),
  b = n(388032),
  p = n(580297);
let f = t => {
    let {
      attachment: e
    } = t, {
      url: n,
      description: i
    } = e;
    return null == n ? null : (0, a.jsx)(E, {
      url: n,
      description: i
    })
  },
  v = t => {
    var e, n, i;
    let {
      embed: o
    } = t;
    if (!_.n2.has(o.type)) return null;
    let r = void 0 !== o.video && o.type !== s.h.GIFV ? o.video.url : null != (i = null == (e = o.thumbnail) ? void 0 : e.url) ? i : null == (n = o.image) ? void 0 : n.url;
    return null == r ? null : (0, a.jsx)(E, {
      url: r
    })
  },
  E = t => {
    let {
      url: e,
      description: n
    } = t, i = (0, m.cb)(e);
    return (0, a.jsx)("div", {
      className: p.mediaContainer,
      children: i ? (0, a.jsx)(u.Z, {
        className: r()(p.video, p.media),
        controls: !0,
        src: e
      }) : (0, a.jsx)("img", {
        className: r()(p.image, p.media),
        src: e,
        alt: n
      })
    })
  };

function I(t) {
  c.Z.pop(), (0, h.t)({
    id: "explicit-media-false-positive-modal",
    text: b.intl.string(b.t.gFsTKi)
  }), t()
}

function C(t) {
  let {
    channelId: e,
    messageId: n,
    isReportFalsePositiveLoading: o,
    analyticsContext: r,
    attachmentPreview: s,
    embedPreview: c,
    onConfirmPress: u,
    transitionState: m,
    onClose: h
  } = t, _ = (0, d.Dt)(), E = i.useCallback(() => {
    (0, x.aP)({
      action: x.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: e,
      messageId: n,
      context: r
    }), h()
  }, [e, n, r, h]), I = i.useCallback(() => {
    null == u || u(), (0, x.aP)({
      action: x.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: e,
      messageId: n,
      context: r
    })
  }, [e, n, r, u]);
  return i.useEffect(() => {
    (0, x.aP)({
      action: x.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: e,
      messageId: n,
      context: r
    })
  }, [e, n, r]), (0, a.jsxs)(l.Y0X, {
    transitionState: m,
    "aria-labelledby": _,
    size: l.CgR.SMALL,
    parentComponent: "ExplicitMediaFalsePositiveModal",
    children: [(0, a.jsxs)(l.hzk, {
      children: [(0, a.jsx)(l.olH, {
        onClick: E,
        className: p.closeButton
      }), (0, a.jsx)(l.X6q, {
        id: _,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: p.header,
        children: b.intl.string(b.t.TPpVkJ)
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: p.subheader,
        children: b.intl.string(b.t.gg5Dp6)
      }), null != s && (0, a.jsx)(f, {
        attachment: s
      }), null != c && (0, a.jsx)(v, {
        embed: c
      })]
    }), (0, a.jsxs)(l.mzw, {
      children: [(0, a.jsx)(l.zxk, {
        className: p.button,
        disabled: o,
        submitting: o,
        size: l.zxk.Sizes.MEDIUM,
        color: l.zxk.Colors.BRAND,
        onClick: I,
        children: b.intl.string(b.t["cY+Ooa"])
      }), (0, a.jsx)(l.zxk, {
        className: p.button,
        disabled: o,
        color: l.zxk.Colors.TRANSPARENT,
        size: l.zxk.Sizes.MEDIUM,
        onClick: E,
        children: b.intl.string(b.t["ETE/oK"])
      })]
    })]
  })
}