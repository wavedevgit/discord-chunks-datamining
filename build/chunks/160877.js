/** Chunk was on 57539 **/
n.d(e, {
  $: () => g,
  s: () => C
}), n(953529);
var a = n(255367),
  i = n(73800),
  o = n(120356),
  s = n.n(o),
  r = n(470167),
  l = n(481060),
  c = n(572691),
  d = n(313201),
  u = n(70097),
  m = n(406432),
  x = n(584656),
  h = n(247206),
  _ = n(470734),
  p = n(719548),
  b = n(388032),
  E = n(580297);
let f = t => {
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
  v = t => {
    var e, n, i;
    let {
      embed: o
    } = t;
    if (!p.n2.has(o.type)) return null;
    let s = void 0 !== o.video && o.type !== r.h.GIFV ? o.video.url : null != (i = null == (e = o.thumbnail) ? void 0 : e.url) ? i : null == (n = o.image) ? void 0 : n.url;
    return null == s ? null : (0, a.jsx)(I, {
      url: s
    })
  },
  I = t => {
    let {
      url: e,
      description: n
    } = t, i = (0, m.cb)(e);
    return (0, a.jsx)("div", {
      className: E.mediaContainer,
      children: i ? (0, a.jsx)(u.Z, {
        className: s()(E.video, E.media),
        controls: !0,
        src: e
      }) : (0, a.jsx)("img", {
        className: s()(E.image, E.media),
        src: e,
        alt: n
      })
    })
  };

function C(t) {
  c.Z.pop(), (0, x.t)({
    id: "explicit-media-false-positive-modal",
    text: b.intl.string(b.t.gFsTKi)
  }), t()
}

function g(t) {
  let {
    channelId: e,
    messageId: n,
    isReportFalsePositiveLoading: o,
    analyticsContext: s,
    attachmentPreview: r,
    embedPreview: c,
    onConfirmPress: u,
    transitionState: m,
    onClose: x
  } = t, p = (0, d.Dt)(), I = (0, _.pn)("ExplicitMediaFalsePositiveModal"), C = i.useCallback(() => {
    (0, h.aP)({
      action: h.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: e,
      messageId: n,
      context: s
    }), x()
  }, [e, n, s, x]), g = i.useCallback(() => {
    null == u || u(), (0, h.aP)({
      action: h.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: e,
      messageId: n,
      context: s
    })
  }, [e, n, s, u]);
  i.useEffect(() => {
    (0, h.aP)({
      action: h.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: e,
      messageId: n,
      context: s
    })
  }, [e, n, s]);
  let T = i.useMemo(() => I ? b.intl.string(b.t["z4du/P"]) : b.intl.string(b.t.gg5Dp6), [I]);
  return (0, a.jsxs)(l.Y0X, {
    transitionState: m,
    "aria-labelledby": p,
    size: l.CgR.SMALL,
    parentComponent: "ExplicitMediaFalsePositiveModal",
    children: [(0, a.jsxs)(l.hzk, {
      children: [(0, a.jsx)(l.olH, {
        onClick: C,
        className: E.closeButton
      }), (0, a.jsx)(l.X6q, {
        id: p,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: E.header,
        children: b.intl.string(b.t.TPpVkJ)
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: E.subheader,
        children: T
      }), null != r && (0, a.jsx)(f, {
        attachment: r
      }), null != c && (0, a.jsx)(v, {
        embed: c
      })]
    }), (0, a.jsxs)(l.mzw, {
      children: [(0, a.jsx)(l.zxk, {
        className: E.button,
        disabled: o,
        submitting: o,
        size: l.zxk.Sizes.MEDIUM,
        color: l.zxk.Colors.BRAND,
        onClick: g,
        children: b.intl.string(b.t["cY+Ooa"])
      }), (0, a.jsx)(l.zxk, {
        className: E.button,
        disabled: o,
        color: l.zxk.Colors.TRANSPARENT,
        size: l.zxk.Sizes.MEDIUM,
        onClick: C,
        children: b.intl.string(b.t["ETE/oK"])
      })]
    })]
  })
}