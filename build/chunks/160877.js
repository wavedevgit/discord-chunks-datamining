/** Chunk was on 57539 **/
n.d(e, {
  $: () => T,
  s: () => C
}), n(953529);
var a = n(255367),
  i = n(73800),
  r = n(120356),
  s = n.n(r),
  o = n(470167),
  l = n(755721),
  c = n(481060),
  d = n(572691),
  u = n(313201),
  m = n(70097),
  h = n(406432),
  x = n(584656),
  p = n(247206),
  _ = n(470734),
  b = n(719548),
  v = n(388032),
  f = n(580297);
let E = t => {
    let {
      attachment: e
    } = t, {
      url: n,
      description: i
    } = e;
    return null == n ? null : (0, a.jsx)(g, {
      url: n,
      description: i
    })
  },
  I = t => {
    var e, n, i;
    let {
      embed: r
    } = t;
    if (!b.n2.has(r.type)) return null;
    let s = void 0 !== r.video && r.type !== o.h.GIFV ? r.video.url : null != (i = null == (e = r.thumbnail) ? void 0 : e.url) ? i : null == (n = r.image) ? void 0 : n.url;
    return null == s ? null : (0, a.jsx)(g, {
      url: s
    })
  },
  g = t => {
    let {
      url: e,
      description: n
    } = t, i = (0, h.cb)(e);
    return (0, a.jsx)("div", {
      className: f.mediaContainer,
      children: i ? (0, a.jsx)(m.Z, {
        className: s()(f.video, f.media),
        controls: !0,
        src: e
      }) : (0, a.jsx)("img", {
        className: s()(f.image, f.media),
        src: e,
        alt: n
      })
    })
  };

function C(t) {
  d.Z.pop(), (0, x.t)({
    id: "explicit-media-false-positive-modal",
    text: v.intl.string(v.t.gFsTKi)
  }), t()
}

function T(t) {
  let {
    channelId: e,
    messageId: n,
    isReportFalsePositiveLoading: r,
    analyticsContext: s,
    attachmentPreview: o,
    embedPreview: d,
    onConfirmPress: m,
    transitionState: h,
    onClose: x
  } = t, b = (0, u.Dt)(), g = (0, _.pn)("ExplicitMediaFalsePositiveModal"), C = i.useCallback(() => {
    (0, p.aP)({
      action: p.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: e,
      messageId: n,
      context: s
    }), x()
  }, [e, n, s, x]), T = i.useCallback(() => {
    null == m || m(), (0, p.aP)({
      action: p.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: e,
      messageId: n,
      context: s
    })
  }, [e, n, s, m]);
  i.useEffect(() => {
    (0, p.aP)({
      action: p.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: e,
      messageId: n,
      context: s
    })
  }, [e, n, s]);
  let j = i.useMemo(() => g ? v.intl.string(v.t["z4du/P"]) : v.intl.string(v.t.gg5Dp6), [g]);
  return (0, a.jsxs)(c.Y0X, {
    transitionState: h,
    "aria-labelledby": b,
    size: c.CgR.SMALL,
    parentComponent: "ExplicitMediaFalsePositiveModal",
    children: [(0, a.jsxs)(c.hzk, {
      children: [(0, a.jsx)(c.olH, {
        onClick: C,
        className: f.closeButton
      }), (0, a.jsx)(c.X6q, {
        id: b,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: f.header,
        children: v.intl.string(v.t.TPpVkJ)
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: f.subheader,
        children: j
      }), null != o && (0, a.jsx)(E, {
        attachment: o
      }), null != d && (0, a.jsx)(I, {
        embed: d
      })]
    }), (0, a.jsxs)(c.mzw, {
      children: [(0, a.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: f.button,
        children: (0, a.jsx)(c.zxk, {
          variant: "primary",
          text: v.intl.string(v.t["cY+Ooa"]),
          disabled: r,
          loading: r,
          onClick: T
        })
      }), (0, a.jsx)(l.zx, {
        className: f.button,
        disabled: r,
        color: l.zx.Colors.TRANSPARENT,
        size: l.zx.Sizes.MEDIUM,
        onClick: C,
        children: v.intl.string(v.t["ETE/oK"])
      })]
    })]
  })
}