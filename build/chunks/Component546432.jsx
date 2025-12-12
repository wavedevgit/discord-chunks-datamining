/** Chunk was on web.js **/
/** chunk id: 546432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OB: () => M,
  ZP: () => Z,
  mz: () => k
}), require("./997841.js"), require("./388685.js"), require("./539854.js"), require("./35282.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk95015 = require("./95015.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk167080 = require("./167080.jsx"),
  Chunk247206 = require("./247206.js"),
  Chunk936141 = require("./936141.js"),
  Chunk262777 = require("./262777.js"),
  Chunk947849 = require("./947849.js"),
  Chunk976853 = require("./976853.js"),
  Chunk411405 = require("./411405.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk956664 = require("./956664.js"),
  Chunk499376 = require("./499376.js"),
  Chunk217702 = require("./217702.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk337595 = require("./337595.js"),
  Chunk374299 = require("./374299.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = D(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let x = 200,
  L = 50;

function j(e) {
  return "IMAGE" === e || "VIDEO" === e
}

function M(e, t) {
  var n;
  return {
    uniqueId: e.id,
    originalItem: e,
    type: (0, O.aw)(e, t),
    downloadUrl: e.url,
    height: e.height,
    width: e.width,
    spoiler: e.spoiler,
    contentType: e.content_type,
    srcIsAnimated: (0, s.yE)(null != (n = e.flags) ? n : 0, S.J0y.IS_ANIMATED)
  }
}
let k = e => {
  let {
    mimeType: t,
    downloadURL: n,
    onRemoveItem: o,
    showDownload: s,
    isVisualMediaType: f
  } = e, p = i.useRef(null), [_, m] = i.useState(0);
  (0, u.PM)(p, e => {
    let {
      width: t
    } = e;
    null != t && m(Math.floor((t - 8) / 32))
  });
  let h = [];
  null != o && h.push((0, r.jsx)(l.u, {
    text: I.intl.string(I.t["/XT3ij"]),
    children: (0, r.jsx)(c.P3F, {
      className: a()(C.hoverButton, T.removeMosaicItemHoverButton),
      focusProps: {
        offset: 2
      },
      onClick: o,
      "aria-label": I.intl.string(I.t["0+xZH0"]),
      children: (0, r.jsx)(c.XHJ, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20
      })
    })
  }, "remove")), s && h.push((0, r.jsx)(l.u, {
    text: I.intl.string(I.t["1WjMbC"]),
    children: (0, r.jsx)(d.Z, {
      target: "_blank",
      rel: "noreferrer noopener",
      className: C.hoverButton,
      iconClassName: T.downloadHoverButtonIcon,
      focusProps: {
        offset: 2
      },
      href: n,
      mimeType: t
    })
  }, "download"));
  let g = Math.max(0, h.length - _);
  return (0, r.jsxs)(r.Fragment, {
    children: [_ > 0 && h.length > 0 && (0, r.jsx)("div", {
      className: a()(C.hoverButtonGroup, {
        [C.nonMediaMosaicItem]: !f
      }),
      children: h.slice(g)
    }), (0, r.jsx)("div", {
      ref: p,
      className: C.sizer
    })]
  })
};

function U(e) {
  let {
    message: t,
    item: n,
    autoPlayGif: o,
    canRemoveItem: s,
    onRemoveItem: l,
    onClick: u,
    handlePreloadImage: d,
    onContextMenu: f,
    onPlay: p,
    renderImageComponent: _,
    renderVideoComponent: g,
    renderAudioComponent: O,
    renderPlaintextFilePreview: C,
    renderGenericFileComponent: A,
    renderVisualPlaceholderComponent: N,
    className: P,
    imgContainerClassName: R,
    imgClassName: w,
    focusable: D,
    hiddenSpoilers: x,
    mediaLayoutType: L,
    maxWidth: j,
    maxHeight: M,
    hasFooter: U,
    useFullWidth: G,
    isVisualMediaType: Z,
    onVideoControlsShow: F,
    onVideoControlsHide: B,
    forcePlaceholder: V
  } = e, {
    width: H,
    height: Y,
    spoiler: W,
    type: K,
    contentType: z
  } = n, [q, Q] = i.useState(false), X = t.getChannelId(), J = E.Z.getChannel(X), $ = (0, h.Z)(X), ee = i.useMemo(() => null != z && false !== z.indexOf("/") ? z.split("/") : ["unknown", "unknown"], [z]), et = false;
  if (Z) {
    (null == H || null == Y) && (et = true);
    let e = (0, y.Dc)({
      width: null != H ? H : 0,
      height: null != Y ? Y : 0,
      maxWidth: null != j ? j : v.mT,
      maxHeight: null != M ? M : v.Jj
    });
    !G && (e * (null != H ? H : 0) < v.OF || e * (null != Y ? Y : 0) < v.OF) && (et = true)
  }
  let en = i.useCallback(() => {
      l(n)
    }, [n, l]),
    er = i.useCallback(() => {
      b.default.track(S.rMx.IMAGE_HOVERED, {
        guild_id: null == J ? true : J.guild_id,
        channel_id: null == J ? true : J.id,
        image_recommendations_shown: false
      })
    }, [J]),
    ei = i.useCallback(() => {
      if (L === v.hV.MOSAIC) {
        let e = !$ && ["VIDEO", "CLIP", "AUDIO"].includes(K) || "OTHER" === K;
        return et ? null : !q && (0, r.jsx)(k, {
          mimeType: ee,
          downloadURL: n.downloadUrl,
          showDownload: e,
          onRemoveItem: s ? en : true,
          isVisualMediaType: Z
        })
      }
      return s && (0, r.jsx)(c.P3F, {
        className: W ? T.spoilerRemoveMosaicItemButton : T.removeMosaicItemButton,
        focusProps: {
          offset: {
            bottom: 4
          }
        },
        onClick: () => l(n),
        "aria-label": I.intl.string(I.t["0+xZH0"]),
        children: (0, r.jsx)(c.Dio, {
          size: "xs",
          color: "currentColor"
        })
      })
    }, [L, s, W, $, K, et, q, ee, n, en, Z, l]);
  if (V) return (0, r.jsx)(c.Eep, {
    className: P,
    readyState: S.zo9.READY,
    src: "",
    width: null != H ? H : 350,
    height: null != Y ? Y : 350,
    maxWidth: j,
    maxHeight: M,
    mediaLayoutType: L,
    useFullWidth: G,
    zoomable: false
  });
  switch (K) {
    case "IMAGE":
      return (0, r.jsx)(m.h.Consumer, {
        children: e => (0, r.jsx)(_, {
          item: n,
          message: t,
          width: H,
          height: Y,
          autoPlay: o && !x,
          onClick: u,
          onContextMenu: f,
          shouldHideMediaOptions: $,
          renderAccessory: e,
          renderAdjacentContent: ei,
          containerClassName: P,
          className: R,
          imageClassName: w,
          shouldLink: D,
          hiddenSpoilers: x,
          responsive: true,
          mediaLayoutType: L,
          maxWidth: j,
          maxHeight: M,
          useFullWidth: G,
          handlePreloadImage: d,
          onMouseEnter: er
        })
      });
    case "VIDEO":
    case "CLIP":
      return (0, r.jsx)(g, {
        item: n,
        message: t,
        width: H,
        height: Y,
        onClick: u,
        onContextMenu: f,
        renderAdjacentContent: ei,
        naturalWidth: H,
        naturalHeight: Y,
        className: a()(P, {
          [T.hasFooter]: U
        }),
        playable: D,
        responsive: true,
        mediaLayoutType: L,
        maxWidth: j,
        maxHeight: M,
        useFullWidth: G,
        mimeType: ee,
        onControlsShow: F,
        onControlsHide: B,
        downloadable: !$,
        mediaPlayerClassName: U ? T.hasFooter : true
      });
    case "VISUAL_PLACEHOLDER":
      if (null == N) return null;
      return (0, r.jsx)(N, {
        item: n,
        message: t,
        className: R,
        imageClassName: w,
        maxWidth: j,
        maxHeight: M,
        mediaLayoutType: L,
        useFullWidth: G
      });
    case "AUDIO":
      return (0, r.jsx)(O, {
        item: n,
        message: t,
        className: P,
        playable: D,
        mimeType: ee,
        renderAdjacentContent: ei,
        onVolumeShow: () => Q(true),
        onVolumeHide: () => Q(false),
        onPlay: p
      });
    case "PLAINTEXT_PREVIEW":
      return (0, r.jsx)(C, {
        item: n,
        message: t,
        className: P,
        onClick: u,
        onContextMenu: f,
        renderAdjacentContent: ei
      });
    case "OTHER":
      return (0, r.jsx)(A, {
        item: n,
        message: t,
        className: P,
        onClick: u,
        onContextMenu: f,
        renderAdjacentContent: ei
      });
    case "INVALID":
      return null
  }
}

function G(e, t, n) {
  if (!t) return;
  let r = e.width;
  if (true !== e.width && true !== e.height) {
    let {
      width: t
    } = (0, y.Tj)({
      width: e.width,
      height: e.height,
      maxWidth: 400,
      maxHeight: 300
    });
    r = t
  }
  return R(N({}, n !== v.hV.MOSAIC && {
    maxWidth: null != r ? r : "400px"
  }), {
    width: "100%",
    height: "100%",
    justifySelf: "auto"
  })
}
let Z = function(e) {
  var {
    className: t,
    item: n,
    message: o,
    getObscureReason: s,
    useFullWidth: l,
    mediaLayoutType: c,
    isSingleMosaicItem: u,
    footer: d,
    displayGridItem: m
  } = e, h = w(e, ["className", "item", "message", "getObscureReason", "useFullWidth", "mediaLayoutType", "isSingleMosaicItem", "footer", "displayGridItem"]);
  let {
    width: E,
    height: b,
    type: y
  } = n, S = s(n, (0, _.v)(o)), [I, C] = i.useState(null != S), A = (0, f.JO)(S), P = c === v.hV.MOSAIC, D = !P && (null != E && E < x || null != b && b < L), M = j(y), k = (0, O.R_)(y), Z = u && null != S && (0, f.yf)(E, b), [F, B] = i.useState(false), V = () => {
    B(true)
  }, H = () => {
    B(false)
  }, Y = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return (0, r.jsx)(U, R(N({}, h), {
      item: n,
      message: o,
      getObscureReason: s,
      hiddenSpoilers: e,
      className: a()(t, T.mosaicItemContent, {
        [T.obscured]: I && !D,
        [T.hiddenSpoiler]: I && S === p.wk.SPOILER,
        [T.hiddenExplicit]: I && null != S && p.Xh.has(S),
        [T.hiddenMosaicItem]: I && e,
        [T.inline]: I && D
      }),
      focusable: !e,
      mediaLayoutType: c,
      hasFooter: null != d,
      useFullWidth: !!Z && !!e || l,
      isVisualMediaType: k,
      onVideoControlsShow: V,
      onVideoControlsHide: H,
      forcePlaceholder: A && I
    }))
  };
  return (0, r.jsxs)("div", {
    style: m ? {
      minWidth: 0,
      width: "".concat(h.maxWidth, "px")
    } : true,
    className: a()(T.mosaicItem, {
      [T.mosaicItemNoJustify]: M,
      [T.mosaicItemFullWidth]: l,
      [T.mosaicItemMediaMosaic]: P,
      [T.hideOverflow]: P && k,
      [T.mosaicItemWithFooter]: null != d
    }),
    children: [null != S ? (0, r.jsx)(g.ZP, {
      type: g.ZP.Types.ATTACHMENT,
      inline: D,
      reason: S,
      isSingleMosaicItem: u,
      obscured: I,
      containerStyles: G(n, M, c),
      obscurityControlClassName: a()({
        [T.obscureVideoSpacing]: "VIDEO" === y && u && !I && F
      }),
      onToggleObscurity: () => C(e => !e),
      children: e => Y(e)
    }) : Y(), d]
  })
}