/** Chunk was on 39476 **/
/** chunk id: 73249, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk868643 = require("./868643.js"),
  Chunk912332 = require("./912332.jsx"),
  Chunk296182 = require("./296182.js"),
  Chunk850908 = require("./850908.js"),
  Chunk695346 = require("./695346.js"),
  Chunk572004 = require("./572004.js"),
  Chunk424218 = require("./424218.js"),
  Chunk49012 = require("./49012.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk254109 = require("./254109.js"),
  Chunk212459 = require("./212459.js"),
  Chunk369171 = require("./369171.js"),
  Chunk312097 = require("./312097.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk152514 = require("./152514.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function P() {
  (0, Chunk481060.Mr3)(Chunk312097.Q)
}
let R = Chunk647438.forwardRef(function(e, t) {
  var {
    tooltipText: n
  } = e, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["tooltipText"]);
  return (0, i.jsx)(s.u, {
    text: n,
    position: "bottom",
    children: (0, i.jsx)(c.hU, x({
      buttonRef: t,
      variant: "icon-only",
      "aria-label": n,
      size: "sm"
    }, r))
  })
});

function L() {
  let {
    zoomed: e,
    setZoomed: t
  } = (0, Chunk212459.Y)();
  return (0, Chunk951288.jsx)(R, {
    onClick: () => {
      (0, Chunk254109.yg)(module ? Chunk254109.uG.ZOOM_OUT_BUTTON_PRESSED : Chunk254109.uG.ZOOM_IN_BUTTON_PRESSED), exports(!module)
    },
    tooltipText: module ? Chunk388032.intl.string(Chunk388032.t.vOFof8) : Chunk388032.intl.string(Chunk388032.t.Kt4gZ6),
    icon: module ? Chunk481060.BlJ : Chunk481060.OyE
  })
}

function M(e) {
  var t, n;
  let {
    item: l
  } = e, a = null == (t = l.sourceMetadata) ? true : t.message, o = null == (n = l.sourceMetadata) ? true : n.identifier, s = r.useCallback(() => {
    if (null != a && null != o) {
      if ((0, S.yg)(S.uG.FORWARD_PRESSED), "embed" === o.type) return void(0, p.l8)({
        message: a,
        source: "media-viewer",
        forwardOptions: {
          onlyEmbedIndices: [o.embedIndex]
        },
        onRequestSent: P
      });
      (0, p.l8)({
        message: a,
        source: "media-viewer",
        forwardOptions: {
          onlyAttachmentIds: [o.attachmentId]
        },
        onRequestSent: P
      })
    }
  }, [a, o]);
  return null != a && null != o && (0, f.h)(a) ? (0, i.jsx)(R, {
    onClick: s,
    tooltipText: C.intl.string(C.t.I3ltXO),
    icon: c.WZu
  }) : null
}

function I(e) {
  let {
    item: t
  } = e, [n, l] = r.useState(false), a = "VIDEO" === t.type, o = "IMAGE" === t.type, s = null != t.children, u = (0, m.gS)((0, m.lT)(t.original, t.url), t.contentType, t.originalContentType);
  if (!(a || h.isPlatformEmbedded && !s && o && u)) return null;
  let d = (0, m.s$)((0, m.lT)(t.original, t.url), t.contentType, t.originalContentType, m.wV);
  async function f() {
    if ((0, S.yg)(S.uG.SAVE_MEDIA_PRESSED), "VIDEO" === t.type && (0, g.q)({
        href: d
      }), "IMAGE" === t.type) {
      l(true);
      try {
        let e = await _.ZP.saveImage(d, t.contentType, m.wV);
        if (e === _.mQ.ERRORED) throw Error("DesktopNativeUtils.saveImage errored for ".concat(d));
        e === _.mQ.SAVED && ((0, S.rm)(d, true), (0, c.showToast)((0, c.createToast)(C.intl.string(C.t.cqpdJW), c.ToastType.SUCCESS)))
      } catch (e) {
        (0, S.rm)(d, false), (0, c.showToast)((0, c.createToast)(C.intl.string(C.t["8Ve/S0"]), c.ToastType.FAILURE))
      } finally {
        l(false)
      }
    }
  }
  return (0, i.jsx)(R, {
    onClick: f,
    tooltipText: C.intl.string("VIDEO" === t.type ? C.t.JVuuz3 : C.t["S/xNKV"]),
    loading: n,
    icon: c._8t
  })
}

function w(e) {
  let {
    item: t
  } = e;
  if (!(0, m.Jj)(t.url)) return null;
  let n = (0, m.s$)((0, m.lT)(t.original, t.url), t.contentType, t.originalContentType);
  return (0, i.jsx)(R, {
    onClick: () => {
      (0, S.yg)(S.uG.OPEN_LINK_PRESSED), (0, S.jc)(n), (0, g.q)({
        href: n
      })
    },
    tooltipText: C.intl.string(C.t.q5jLJB),
    icon: c.rgF
  })
}

function A(e) {
  var t, n;
  let {
    item: r,
    canCopyImage: l,
    canCopyLink: a,
    onClose: o,
    onSelect: s
  } = e, u = (null == (n = r.sourceMetadata) || null == (t = n.identifier) ? true : t.type) === "attachment" ? r.sourceMetadata.identifier.attachmentId : null, f = (0, d.Z)({
    id: u,
    label: C.intl.string(C.t.nwg3lR)
  }), p = function(e) {
    var t;
    let {
      alt: n,
      sourceMetadata: r,
      width: l,
      height: a
    } = e, o = N(C.intl.string(C.t.ILJuBq), "name", {
      subtextLineClamp: 1
    }), s = N(C.intl.string(C.t["3Nf9u2"]), "size"), u = N(C.intl.string(C.t.eOB2eR), "alt", {
      subtextLineClamp: 2
    });
    if ((null == r || null == (t = r.identifier) ? true : t.type) !== "attachment") return null;
    let d = (0, y.Z)(r.identifier),
      f = (0, E.BU)(r.identifier.size / 1e3);
    return (0, i.jsxs)(c.sNh, {
      id: "media-viewer-details",
      label: C.intl.string(C.t.sqBLa9),
      children: [o(d), s(C.intl.formatToPlainString(C.t.DTdonA, {
        width: l,
        height: a,
        fileSize: f
      })), u(n)]
    }, "media-viewer-details")
  }(r);
  async function O() {
    (0, S.yg)(S.uG.COPY_IMAGE_PRESSED);
    let e = (0, m.s$)((0, m.lT)(r.original, r.url), r.contentType, r.originalContentType, m.wV);
    try {
      var t;
      await _.ZP.copyImage(e, null != (t = r.originalContentType) ? t : r.contentType), (0, S.gR)(e, true), (0, c.showToast)((0, c.createToast)(C.intl.string(C.t.bhUpvC), c.ToastType.SUCCESS))
    } catch (t) {
      (0, S.gR)(e, false), (0, c.showToast)((0, c.createToast)(C.intl.string(C.t.PTPbjx), c.ToastType.FAILURE))
    }
  }
  return (0, i.jsxs)(c.v2r, {
    navId: "image-menu",
    "aria-label": "placeholder",
    onClose: o,
    onSelect: s,
    children: [(0, i.jsxs)(c.kSQ, {
      children: [l && (0, i.jsx)(c.sNh, {
        label: C.intl.string(C.t.tvUqWn),
        id: "media-viewer-copy-image",
        icon: c.TIy,
        action: O
      }, "media-viewer-copy-image"), a && (0, i.jsx)(c.sNh, {
        id: "media-viewer-copy-link",
        label: C.intl.string(C.t.WqhZss),
        icon: c.xPt,
        action: function() {
          (0, S.yg)(S.uG.COPY_LINK_PRESSED);
          let e = (0, m.s$)((0, m.lT)(r.original, r.url), r.contentType, r.originalContentType);
          (0, b.JG)(e, () => {
            (0, S.mL)(e, true), (0, c.showToast)((0, c.createToast)(C.intl.string(C.t["L/PwZf"]), c.ToastType.SUCCESS))
          }, () => {
            (0, S.mL)(e, false), (0, c.showToast)((0, c.createToast)(C.intl.string(C.t.uVV00B), c.ToastType.FAILURE))
          })
        }
      }, "media-viewer-copy-link")]
    }), p, f]
  })
}

function N(e, t, n) {
  let l = r.useCallback(e => {
    (0, b.JG)(e, () => (0, c.showToast)({
      message: C.intl.string(C.t.mGZ66D),
      type: c.ToastType.SUCCESS,
      id: "media-viewer-detail-copied"
    }))
  }, []);
  return r => null != r ? (0, i.jsx)(c.sNh, x({
    action: () => l(r),
    label: e,
    subtext: r,
    id: t
  }, n), t) : null
}

function Z(e) {
  var t, n;
  let {
    item: l
  } = e, a = r.useRef(null), [o, s] = r.useState(false), u = O.Sb.useSetting(), d = "IMAGE" === l.type, f = null == l.children, p = !l.animated, y = (0, m.Lz)(l.url, l.contentType, l.originalContentType), b = d && f && p && y, E = (0, m.Jj)(l.url);
  return u || b || E || (null == (n = l.sourceMetadata) || null == (t = n.identifier) ? true : t.type) === "attachment" ? (0, i.jsx)(c.yRy, {
    targetElementRef: a,
    shouldShow: o,
    align: "left",
    position: "top",
    spacing: 18,
    onRequestClose: () => s(false),
    animation: c.yRy.Animation.NONE,
    renderPopout: () => (0, i.jsx)(A, {
      item: l,
      canCopyImage: b,
      canCopyLink: E,
      onClose: () => s(false)
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, i.jsx)(R, {
        ref: a,
        tooltipText: C.intl.string(C.t["UKOtz+"]),
        onClick: () => {
          (0, S.yg)(S.uG.MORE_BUTTON_PRESSED), s(!o)
        },
        icon: c.xhG
      })
    }
  }) : null
}
let k = Chunk647438.memo(function(e) {
  let {
    item: t,
    hideMediaOptions: n
  } = e, l = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled), s = r.useRef(null), c = r.useCallback(() => {
    var e;
    !l && (null == (e = s.current) ? true : e.contains(document.activeElement)) && document.activeElement.blur()
  }, [l]);
  return ("IMAGE" === t.type || !n) && (0, i.jsx)(T.ZP, {
    mode: T.lx.FOCUS_SENSITIVE,
    children: e => (0, i.jsxs)("div", {
      ref: s,
      className: a()(D.actionButtons, e),
      onClick: e => e.stopPropagation(),
      onMouseLeave: c,
      children: ["IMAGE" === t.type && (0, i.jsx)(L, {}), !n && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(M, {
          item: t
        }), (0, i.jsx)(I, {
          item: t
        }), (0, i.jsx)(w, {
          item: t
        }), (0, i.jsx)(Z, {
          item: t
        })]
      })]
    })
  })
})