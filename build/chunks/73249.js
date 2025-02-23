/** Chunk was on 79005 (4b4b2de560864052.js) **/
n.d(t, {
  Z: () => W
}), n(47120);
var a = n(200651),
  r = n(192379),
  o = n(120356),
  i = n.n(o),
  c = n(442837),
  s = n(481060),
  l = n(607070),
  u = n(299206),
  d = n(346610),
  p = n(868643),
  m = n(912332),
  _ = n(378409),
  g = n(850908),
  y = n(695346),
  O = n(572004),
  f = n(424218),
  b = n(49012),
  h = n(358085),
  S = n(998502),
  v = n(254109),
  C = n(212459),
  E = n(369171),
  T = n(701865),
  j = n(388032),
  P = n(427955);

function x() {
  return (x = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
    }
    return e
  }).apply(this, arguments)
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N() {
  (0, s.Mr3)(T.U)
}

function D(e) {
  var {
    onClick: t,
    tooltipText: n,
    selected: r,
    icon: o
  } = e, c = function(e, t) {
    if (null == e) return {};
    var n, a, r = function(e, t) {
      if (null == e) return {};
      var n, a, r = {},
        o = Object.keys(e);
      for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (a = 0; a < o.length; a++) n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["onClick", "tooltipText", "selected", "icon"]);
  return (0, a.jsx)(s.ua7, {
    text: n,
    position: "bottom",
    children: e => {
      var n = x({}, function(e) {
        if (null == e) throw TypeError("Cannot destructure " + e);
        return e
      }(e));
      return (0, a.jsx)(s.zxk, I(M(I(M({}, n), {
        onClick: t,
        look: s.iLD.BLANK,
        size: s.PhG.ICON,
        color: s.Ttl.TRANSPARENT,
        className: i()(P.actionButton, {
          [P.selected]: r
        }),
        wrapperClassName: P.actionButtonWrapper,
        innerClassName: P.actionButtonInner,
        grow: !1
      }), c), {
        children: o({
          color: "currentColor",
          size: "sm"
        })
      }))
    }
  })
}

function A() {
  let {
    zoomed: e,
    setZoomed: t
  } = (0, C.Y)();
  return (0, a.jsx)(D, {
    onClick: () => {
      (0, v.yg)(e ? v.uG.ZOOM_OUT_BUTTON_PRESSED : v.uG.ZOOM_IN_BUTTON_PRESSED), t(!e)
    },
    tooltipText: e ? j.NW.string(j.t.vOFof3) : j.NW.string(j.t.Kt4gZ2),
    icon: e ? s.BlJ : s.OyE
  })
}

function w(e) {
  var t, n;
  let {
    item: o
  } = e, i = null === (t = o.sourceMetadata) || void 0 === t ? void 0 : t.message, c = null === (n = o.sourceMetadata) || void 0 === n ? void 0 : n.identifier, l = r.useCallback(() => {
    if (null != i && null != c) {
      if ((0, v.yg)(v.uG.FORWARD_PRESSED), "embed" === c.type) {
        (0, m.l8)({
          message: i,
          source: "media-viewer",
          forwardOptions: {
            onlyEmbedIndices: [c.embedIndex]
          },
          onRequestSent: N
        });
        return
      }(0, m.l8)({
        message: i,
        source: "media-viewer",
        forwardOptions: {
          onlyAttachmentIds: [c.attachmentId]
        },
        onRequestSent: N
      })
    }
  }, [i, c]), {
    canForwardMessages: u
  } = (0, d.yk)({
    location: "ForwardLink"
  }, {
    autoTrackExposure: !1
  });
  return null != i && u && (0, p.h)(i) ? (0, a.jsx)(D, {
    onClick: l,
    tooltipText: j.NW.string(j.t.I3ltXF),
    icon: s.WZu
  }) : null
}

function L(e) {
  let {
    item: t
  } = e, [n, o] = r.useState(!1);
  if (!("VIDEO" === t.type || h.isPlatformEmbedded && null == t.children && "IMAGE" === t.type && (0, _.gS)(t.url))) return null;
  let i = (0, _.s$)(t.url);
  async function c() {
    if ((0, v.yg)(v.uG.SAVE_MEDIA_PRESSED), "VIDEO" === t.type && (0, b.q)({
        href: i
      }), "IMAGE" === t.type) {
      o(!0);
      try {
        await S.ZP.saveImage(i), (0, s.showToast)((0, s.createToast)(j.NW.string(j.t.cqpdJS), s.ToastType.SUCCESS))
      } catch (e) {
        (0, s.showToast)((0, s.createToast)(j.NW.string(j.t["8Ve/S0"]), s.ToastType.FAILURE))
      } finally {
        o(!1)
      }
    }
  }
  return (0, a.jsx)(D, {
    onClick: c,
    tooltipText: j.NW.string("VIDEO" === t.type ? j.t.JVuuz8 : j.t["S/xNKS"]),
    submitting: n,
    icon: s._8t
  })
}

function R(e) {
  var t;
  let {
    item: n
  } = e;
  if (!(0, _.Jj)(n.url)) return null;
  let r = (0, _.s$)(null !== (t = n.original) && void 0 !== t ? t : n.url);
  return (0, a.jsx)(D, {
    onClick: () => {
      (0, v.yg)(v.uG.OPEN_LINK_PRESSED), (0, b.q)({
        href: r
      })
    },
    tooltipText: j.NW.string(j.t.q5jLJC),
    icon: s.rgF
  })
}

function k(e) {
  var t, n;
  let {
    item: r,
    canCopyImage: o,
    canCopyLink: i,
    onClose: c,
    onSelect: l
  } = e, d = (null === (n = r.sourceMetadata) || void 0 === n ? void 0 : null === (t = n.identifier) || void 0 === t ? void 0 : t.type) === "attachment" ? r.sourceMetadata.identifier.attachmentId : null, p = (0, u.Z)({
    id: d,
    label: j.NW.string(j.t.nwg3lZ)
  }), m = function(e) {
    var t;
    let {
      alt: n,
      sourceMetadata: r,
      width: o,
      height: i
    } = e, c = Z(j.NW.string(j.t.ILJuBg), "name", {
      subtextLineClamp: 1
    }), l = Z(j.NW.string(j.t.sPO3io), "size"), u = Z(j.NW.string(j.t.eOB2eX), "alt", {
      subtextLineClamp: 2
    });
    if ((null == r ? void 0 : null === (t = r.identifier) || void 0 === t ? void 0 : t.type) !== "attachment") return null;
    let d = (0, g.Z)(r.identifier),
      p = (0, f.BU)(r.identifier.size / 1e3);
    return (0, a.jsxs)(s.sNh, {
      id: "media-viewer-details",
      label: j.NW.string(j.t.GoCQxc),
      children: [c(d), l(j.NW.formatToPlainString(j.t.DTdonJ, {
        width: o,
        height: i,
        fileSize: p
      })), u(n)]
    }, "media-viewer-details")
  }(r);
  async function y() {
    (0, v.yg)(v.uG.COPY_IMAGE_PRESSED);
    let e = (0, _.s$)(r.url);
    try {
      await S.ZP.copyImage(e), (0, s.showToast)((0, s.createToast)(j.NW.string(j.t.bhUpvL), s.ToastType.SUCCESS))
    } catch (e) {
      (0, s.showToast)((0, s.createToast)(j.NW.string(j.t.PTPbj4), s.ToastType.FAILURE))
    }
  }
  return (0, a.jsxs)(s.v2r, {
    navId: "image-menu",
    "aria-label": "placeholder",
    onClose: c,
    onSelect: l,
    children: [(0, a.jsxs)(s.kSQ, {
      children: [o && (0, a.jsx)(s.sNh, {
        label: j.NW.string(j.t.tvUqWl),
        id: "media-viewer-copy-image",
        icon: s.TIy,
        action: y
      }, "media-viewer-copy-image"), i && (0, a.jsx)(s.sNh, {
        id: "media-viewer-copy-link",
        label: j.NW.string(j.t.WqhZsr),
        icon: s.xPt,
        action: function() {
          var e;
          (0, v.yg)(v.uG.COPY_LINK_PRESSED);
          let t = (0, _.s$)(null !== (e = r.original) && void 0 !== e ? e : r.url);
          h.isPlatformEmbedded ? S.ZP.copy(t) : window.navigator.clipboard.writeText(t), (0, s.showToast)((0, s.createToast)(j.NW.string(j.t["L/PwZW"]), s.ToastType.SUCCESS))
        }
      }, "media-viewer-copy-link")]
    }), m, p]
  })
}

function Z(e, t, n) {
  let o = r.useCallback(e => {
    (0, O.JG)(e), (0, s.showToast)({
      message: j.NW.string(j.t.mGZ66O),
      type: s.ToastType.SUCCESS,
      id: "media-viewer-detail-copied"
    })
  }, []);
  return r => null != r ? (0, a.jsx)(s.sNh, M({
    action: () => o(r),
    label: e,
    subtext: r,
    id: t
  }, n), t) : null
}

function B(e) {
  var t, n;
  let {
    item: o
  } = e, [i, c] = r.useState(!1), l = y.Sb.useSetting(), u = "IMAGE" === o.type && h.isPlatformEmbedded && null == o.children && S.ZP.canCopyImage() && (0, _.Lz)(o.url), d = (0, _.Jj)(o.url);
  return l || u || d || (null === (n = o.sourceMetadata) || void 0 === n ? void 0 : null === (t = n.identifier) || void 0 === t ? void 0 : t.type) === "attachment" ? (0, a.jsx)(s.yRy, {
    shouldShow: i,
    align: "left",
    position: "top",
    spacing: 18,
    onRequestClose: () => c(!1),
    animation: s.yRy.Animation.NONE,
    renderPopout: () => (0, a.jsx)(k, {
      item: o,
      canCopyImage: u,
      canCopyLink: d,
      onClose: () => c(!1)
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, a.jsx)(D, {
        tooltipText: j.NW.string(j.t.UKOtz8),
        onClick: () => {
          (0, v.yg)(v.uG.MORE_BUTTON_PRESSED), c(!i)
        },
        selected: i,
        icon: s.xhG
      })
    }
  }) : null
}
let W = r.memo(function(e) {
  let {
    item: t,
    hideMediaOptions: n
  } = e, o = (0, c.e7)([l.Z], () => l.Z.keyboardModeEnabled), s = r.useRef(null), u = r.useCallback(() => {
    var e;
    !o && (null === (e = s.current) || void 0 === e ? void 0 : e.contains(document.activeElement)) && document.activeElement.blur()
  }, [o]);
  return ("IMAGE" === t.type || !n) && (0, a.jsx)(E.ZP, {
    mode: E.lx.FOCUS_SENSITIVE,
    children: e => (0, a.jsxs)("div", {
      ref: s,
      className: i()(P.actionButtons, e),
      onClick: e => e.stopPropagation(),
      onMouseLeave: u,
      children: ["IMAGE" === t.type && (0, a.jsx)(A, {}), !n && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(w, {
          item: t
        }), (0, a.jsx)(L, {
          item: t
        }), (0, a.jsx)(R, {
          item: t
        }), (0, a.jsx)(B, {
          item: t
        })]
      })]
    })
  })
})