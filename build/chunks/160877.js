/** Chunk was on 57539 **/
n.d(e, {
  $: () => C,
  s: () => p
}), n(953529);
var a = n(255367),
  i = n(73800),
  s = n(120356),
  r = n.n(s),
  o = n(470167),
  l = n(481060),
  c = n(572691),
  d = n(313201),
  u = n(70097),
  m = n(406432),
  h = n(584656),
  x = n(247206),
  _ = n(719548),
  b = n(388032),
  f = n(634593);
let v = t => {
    let {
      attachment: e
    } = t, {
      url: n,
      description: i
    } = e;
    return null == n ? null : (0, a.jsx)(I, {
      url: n,
      description: i
    })
  },
  E = t => {
    var e, n, i;
    let {
      embed: s
    } = t;
    if (!_.n2.has(s.type)) return null;
    let r = void 0 !== s.video && s.type !== o.h.GIFV ? s.video.url : null != (i = null == (e = s.thumbnail) ? void 0 : e.url) ? i : null == (n = s.image) ? void 0 : n.url;
    return null == r ? null : (0, a.jsx)(I, {
      url: r
    })
  },
  I = t => {
    let {
      url: e,
      description: n
    } = t, i = (0, m.cb)(e);
    return (0, a.jsx)("div", {
      className: f.mediaContainer,
      children: i ? (0, a.jsx)(u.Z, {
        className: r()(f.video, f.media),
        controls: !0,
        src: e
      }) : (0, a.jsx)("img", {
        className: r()(f.image, f.media),
        src: e,
        alt: n
      })
    })
  };

function p(t) {
  c.Z.pop(), (0, h.t)({
    id: "explicit-media-false-positive-modal",
    text: b.intl.string(b.t.gFsTKi)
  }), t()
}

function C(t) {
  let {
    channelId: e,
    messageId: n,
    isReportFalsePositiveLoading: s,
    analyticsContext: r,
    attachmentPreview: o,
    embedPreview: c,
    onConfirmPress: u,
    transitionState: m,
    onClose: h
  } = t, _ = (0, d.Dt)(), I = i.useCallback(() => {
    (0, x.aP)({
      action: x.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: e,
      messageId: n,
      context: r
    }), h()
  }, [e, n, r, h]), p = i.useCallback(() => {
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
    children: [(0, a.jsxs)(l.hzk, {
      children: [(0, a.jsx)(l.olH, {
        onClick: I,
        className: f.closeButton
      }), (0, a.jsx)(l.X6q, {
        id: _,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: f.header,
        children: b.intl.string(b.t.TPpVkJ)
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: f.subheader,
        children: b.intl.string(b.t.gg5Dp6)
      }), null != o && (0, a.jsx)(v, {
        attachment: o
      }), null != c && (0, a.jsx)(E, {
        embed: c
      })]
    }), (0, a.jsxs)(l.mzw, {
      children: [(0, a.jsx)(l.zxk, {
        className: f.button,
        disabled: s,
        submitting: s,
        size: l.zxk.Sizes.MEDIUM,
        color: l.zxk.Colors.BRAND,
        onClick: p,
        children: b.intl.string(b.t["cY+Ooa"])
      }), (0, a.jsx)(l.zxk, {
        className: f.button,
        disabled: s,
        color: l.zxk.Colors.TRANSPARENT,
        size: l.zxk.Sizes.MEDIUM,
        onClick: I,
        children: b.intl.string(b.t["ETE/oK"])
      })]
    })]
  })
}