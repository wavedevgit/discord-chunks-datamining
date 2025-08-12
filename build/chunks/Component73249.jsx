/** Chunk was on 39476 **/
/** chunk id: 73249, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk927419 = require("./927419.js");

function P() {
  return (P = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function w() {
  (0, Chunk481060.Mr3)(Chunk312097.Q)
}
let L = Chunk73800.forwardRef(function(e, t) {
  var {
    tooltipText: n
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["tooltipText"]);
  return (0, r.jsx)(s.ua7, {
    text: n,
    position: "bottom",
    children: e => {
      var o, l, a = P({}, function(e) {
        if (null == e) throw TypeError("Cannot destructure " + e);
        return e
      }(e));
      return (0, r.jsx)(s.hU, _((o = _({}, a), l = l = {
        buttonRef: t,
        variant: "icon-only",
        "aria-label": n,
        size: "sm"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e))
      }), o), i))
    }
  })
});

function M() {
  let {
    zoomed: e,
    setZoomed: t
  } = (0, Chunk212459.Y)();
  return (0, Chunk255367.jsx)(L, {
    onClick: () => {
      (0, Chunk254109.yg)(module ? Chunk254109.uG.ZOOM_OUT_BUTTON_PRESSED : Chunk254109.uG.ZOOM_IN_BUTTON_PRESSED), exports(!module)
    },
    tooltipText: module ? Chunk388032.intl.string(Chunk388032.t.vOFof3) : Chunk388032.intl.string(Chunk388032.t.Kt4gZ2),
    icon: module ? Chunk481060.BlJ : Chunk481060.OyE
  })
}

function D(e) {
  var t, n;
  let {
    item: o
  } = e, l = null == (t = o.sourceMetadata) ? true : t.message, a = null == (n = o.sourceMetadata) ? true : n.identifier, c = i.useCallback(() => {
    if (null != l && null != a) {
      if ((0, v.yg)(v.uG.FORWARD_PRESSED), "embed" === a.type) return void(0, p.l8)({
        message: l,
        source: "media-viewer",
        forwardOptions: {
          onlyEmbedIndices: [a.embedIndex]
        },
        onRequestSent: w
      });
      (0, p.l8)({
        message: l,
        source: "media-viewer",
        forwardOptions: {
          onlyAttachmentIds: [a.attachmentId]
        },
        onRequestSent: w
      })
    }
  }, [l, a]);
  return null != l && null != a && (0, d.h)(l) ? (0, r.jsx)(L, {
    onClick: c,
    tooltipText: T.intl.string(T.t.I3ltXF),
    icon: s.WZu
  }) : null
}

function I(e) {
  let {
    item: t
  } = e, [n, o] = i.useState(false);
  if (!("VIDEO" === t.type || E.isPlatformEmbedded && null == t.children && "IMAGE" === t.type && (0, m.gS)(t.url, t.contentType))) return null;
  let l = (0, m.s$)(t.url, t.contentType, m.wV);
  async function a() {
    if ((0, v.yg)(v.uG.SAVE_MEDIA_PRESSED), "VIDEO" === t.type && (0, h.q)({
        href: l
      }), "IMAGE" === t.type) {
      o(true);
      try {
        await g.ZP.saveImage(l, t.contentType, m.wV), (0, s.showToast)((0, s.createToast)(T.intl.string(T.t.cqpdJS), s.ToastType.SUCCESS))
      } catch (e) {
        (0, s.showToast)((0, s.createToast)(T.intl.string(T.t["8Ve/S0"]), s.ToastType.FAILURE))
      } finally {
        o(false)
      }
    }
  }
  return (0, r.jsx)(L, {
    onClick: a,
    tooltipText: T.intl.string("VIDEO" === t.type ? T.t.JVuuz8 : T.t["S/xNKS"]),
    loading: n,
    icon: s._8t
  })
}

function N(e) {
  var t;
  let {
    item: n
  } = e;
  if (!(0, m.Jj)(n.url)) return null;
  let i = (0, m.s$)(null != (t = n.original) ? t : n.url, n.contentType);
  return (0, r.jsx)(L, {
    onClick: () => {
      (0, v.yg)(v.uG.OPEN_LINK_PRESSED), (0, h.q)({
        href: i
      })
    },
    tooltipText: T.intl.string(T.t.q5jLJC),
    icon: s.rgF
  })
}

function Z(e) {
  var t, n;
  let {
    item: i,
    canCopyImage: o,
    canCopyLink: l,
    onClose: a,
    onSelect: c
  } = e, d = (null == (n = i.sourceMetadata) || null == (t = n.identifier) ? true : t.type) === "attachment" ? i.sourceMetadata.identifier.attachmentId : null, p = (0, u.Z)({
    id: d,
    label: T.intl.string(T.t.nwg3lZ)
  }), y = function(e) {
    var t;
    let {
      alt: n,
      sourceMetadata: i,
      width: o,
      height: l
    } = e, a = R(T.intl.string(T.t.ILJuBg), "name", {
      subtextLineClamp: 1
    }), c = R(T.intl.string(T.t["3Nf9u7"]), "size"), u = R(T.intl.string(T.t.eOB2eX), "alt", {
      subtextLineClamp: 2
    });
    if ((null == i || null == (t = i.identifier) ? true : t.type) !== "attachment") return null;
    let d = (0, f.Z)(i.identifier),
      p = (0, O.BU)(i.identifier.size / 1e3);
    return (0, r.jsxs)(s.sNh, {
      id: "media-viewer-details",
      label: T.intl.string(T.t.sqBLa2),
      children: [a(d), c(T.intl.formatToPlainString(T.t.DTdonJ, {
        width: o,
        height: l,
        fileSize: p
      })), u(n)]
    }, "media-viewer-details")
  }(i);
  async function h() {
    (0, v.yg)(v.uG.COPY_IMAGE_PRESSED);
    let e = (0, m.s$)(i.url, i.contentType, m.wV);
    try {
      await g.ZP.copyImage(e, i.contentType), (0, s.showToast)((0, s.createToast)(T.intl.string(T.t.bhUpvL), s.ToastType.SUCCESS))
    } catch (e) {
      (0, s.showToast)((0, s.createToast)(T.intl.string(T.t.PTPbj4), s.ToastType.FAILURE))
    }
  }
  return (0, r.jsxs)(s.v2r, {
    navId: "image-menu",
    "aria-label": "placeholder",
    onClose: a,
    onSelect: c,
    children: [(0, r.jsxs)(s.kSQ, {
      children: [o && (0, r.jsx)(s.sNh, {
        label: T.intl.string(T.t.tvUqWl),
        id: "media-viewer-copy-image",
        icon: s.TIy,
        action: h
      }, "media-viewer-copy-image"), l && (0, r.jsx)(s.sNh, {
        id: "media-viewer-copy-link",
        label: T.intl.string(T.t.WqhZsr),
        icon: s.xPt,
        action: function() {
          var e;
          (0, v.yg)(v.uG.COPY_LINK_PRESSED);
          let t = (0, m.s$)(null != (e = i.original) ? e : i.url, i.contentType);
          (0, b.JG)(t, () => (0, s.showToast)((0, s.createToast)(T.intl.string(T.t["L/PwZW"]), s.ToastType.SUCCESS)))
        }
      }, "media-viewer-copy-link")]
    }), y, p]
  })
}

function R(e, t, n) {
  let o = i.useCallback(e => {
    (0, b.JG)(e, () => (0, s.showToast)({
      message: T.intl.string(T.t.mGZ66O),
      type: s.ToastType.SUCCESS,
      id: "media-viewer-detail-copied"
    }))
  }, []);
  return i => null != i ? (0, r.jsx)(s.sNh, _({
    action: () => o(i),
    label: e,
    subtext: i,
    id: t
  }, n), t) : null
}

function k(e) {
  var t, n;
  let {
    item: o
  } = e, l = i.useRef(null), [a, c] = i.useState(false), u = y.Sb.useSetting(), d = "IMAGE" === o.type && null == o.children && !o.animated && (0, m.Lz)(o.url, o.contentType), p = (0, m.Jj)(o.url);
  return u || d || p || (null == (n = o.sourceMetadata) || null == (t = n.identifier) ? true : t.type) === "attachment" ? (0, r.jsx)(s.yRy, {
    targetElementRef: l,
    shouldShow: a,
    align: "left",
    position: "top",
    spacing: 18,
    onRequestClose: () => c(false),
    animation: s.yRy.Animation.NONE,
    renderPopout: () => (0, r.jsx)(Z, {
      item: o,
      canCopyImage: d,
      canCopyLink: p,
      onClose: () => c(false)
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(L, {
        ref: l,
        tooltipText: T.intl.string(T.t.UKOtz8),
        onClick: () => {
          (0, v.yg)(v.uG.MORE_BUTTON_PRESSED), c(!a)
        },
        icon: s.xhG
      })
    }
  }) : null
}
let A = Chunk73800.memo(function(e) {
  let {
    item: t,
    hideMediaOptions: n
  } = e, o = (0, a.e7)([c.Z], () => c.Z.keyboardModeEnabled), s = i.useRef(null), u = i.useCallback(() => {
    var e;
    !o && (null == (e = s.current) ? true : e.contains(document.activeElement)) && document.activeElement.blur()
  }, [o]);
  return ("IMAGE" === t.type || !n) && (0, r.jsx)(j.ZP, {
    mode: j.lx.FOCUS_SENSITIVE,
    children: e => (0, r.jsxs)("div", {
      ref: s,
      className: l()(C.actionButtons, e),
      onClick: e => e.stopPropagation(),
      onMouseLeave: u,
      children: ["IMAGE" === t.type && (0, r.jsx)(M, {}), !n && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(D, {
          item: t
        }), (0, r.jsx)(I, {
          item: t
        }), (0, r.jsx)(N, {
          item: t
        }), (0, r.jsx)(k, {
          item: t
        })]
      })]
    })
  })
})