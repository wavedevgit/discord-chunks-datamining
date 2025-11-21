/** Chunk was on web.js **/
/** chunk id: 546432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OB: () => j,
  ZP: () => B,
  mz: () => k
}), require("./997841.js"), require("./388685.js"), require("./539854.js"), require("./35282.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function C(e, t, n) {
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
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = w(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let L = 200,
  x = 50;

function M(e) {
  return "IMAGE" === e || "VIDEO" === e
}

function j(e, t) {
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
    srcIsAnimated: (0, s.yE)(null != (n = e.flags) ? n : 0, I.J0y.IS_ANIMATED)
  }
}
let k = e => {
  let {
    mimeType: t,
    downloadURL: n,
    onRemoveItem: a,
    showDownload: s,
    isVisualMediaType: f
  } = e, _ = i.useRef(null), [p, h] = i.useState(0);
  (0, u.PM)(_, e => {
    let {
      width: t
    } = e;
    null != t && h(Math.floor((t - 8) / 32))
  });
  let m = [];
  null != a && m.push((0, r.jsx)(l.u, {
    text: T.intl.string(T.t["/XT3ij"]),
    children: (0, r.jsx)(c.P3F, {
      className: o()(A.hoverButton, S.removeMosaicItemHoverButton),
      focusProps: {
        offset: 2
      },
      onClick: a,
      "aria-label": T.intl.string(T.t["0+xZH0"]),
      children: (0, r.jsx)(c.XHJ, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20
      })
    })
  }, "remove")), s && m.push((0, r.jsx)(l.u, {
    text: T.intl.string(T.t["1WjMbC"]),
    children: (0, r.jsx)(d.Z, {
      target: "_blank",
      rel: "noreferrer noopener",
      className: A.hoverButton,
      iconClassName: S.downloadHoverButtonIcon,
      focusProps: {
        offset: 2
      },
      href: n,
      mimeType: t
    })
  }, "download"));
  let g = Math.max(0, m.length - p);
  return (0, r.jsxs)(r.Fragment, {
    children: [p > 0 && m.length > 0 && (0, r.jsx)("div", {
      className: o()(A.hoverButtonGroup, {
        [A.nonMediaMosaicItem]: !f
      }),
      children: m.slice(g)
    }), (0, r.jsx)("div", {
      ref: _,
      className: A.sizer
    })]
  })
};

function U(e) {
  let {
    message: t,
    item: n,
    autoPlayGif: a,
    canRemoveItem: s,
    onRemoveItem: l,
    onClick: u,
    handlePreloadImage: d,
    onContextMenu: f,
    onPlay: _,
    renderImageComponent: p,
    renderVideoComponent: g,
    renderAudioComponent: O,
    renderPlaintextFilePreview: A,
    renderGenericFileComponent: C,
    renderVisualPlaceholderComponent: N,
    className: R,
    imgContainerClassName: P,
    imgClassName: D,
    focusable: w,
    hiddenSpoilers: L,
    mediaLayoutType: x,
    maxWidth: M,
    maxHeight: j,
    hasFooter: U,
    useFullWidth: G,
    isVisualMediaType: B,
    onVideoControlsShow: Z,
    onVideoControlsHide: F,
    forcePlaceholder: V
  } = e, {
    width: H,
    height: Y,
    spoiler: W,
    type: K,
    contentType: z
  } = n, [q, X] = i.useState(false), Q = t.getChannelId(), J = E.Z.getChannel(Q), $ = (0, m.Z)(Q), ee = i.useMemo(() => null != z && false !== z.indexOf("/") ? z.split("/") : ["unknown", "unknown"], [z]), et = false;
  if (B) {
    (null == H || null == Y) && (et = true);
    let e = (0, y.Dc)({
      width: null != H ? H : 0,
      height: null != Y ? Y : 0,
      maxWidth: null != M ? M : v.mT,
      maxHeight: null != j ? j : v.Jj
    });
    !G && (e * (null != H ? H : 0) < v.OF || e * (null != Y ? Y : 0) < v.OF) && (et = true)
  }
  let en = i.useCallback(() => {
      l(n)
    }, [n, l]),
    er = i.useCallback(() => {
      b.default.track(I.rMx.IMAGE_HOVERED, {
        guild_id: null == J ? true : J.guild_id,
        channel_id: null == J ? true : J.id,
        image_recommendations_shown: false
      })
    }, [J]),
    ei = i.useCallback(() => {
      if (x === v.hV.MOSAIC) {
        let e = !$ && ["VIDEO", "CLIP", "AUDIO"].includes(K) || "OTHER" === K;
        return et ? null : !q && (0, r.jsx)(k, {
          mimeType: ee,
          downloadURL: n.downloadUrl,
          showDownload: e,
          onRemoveItem: s ? en : true,
          isVisualMediaType: B
        })
      }
      return s && (0, r.jsx)(c.P3F, {
        className: W ? S.spoilerRemoveMosaicItemButton : S.removeMosaicItemButton,
        focusProps: {
          offset: {
            bottom: 4
          }
        },
        onClick: () => l(n),
        "aria-label": T.intl.string(T.t["0+xZH0"]),
        children: (0, r.jsx)(c.Dio, {
          size: "xs",
          color: "currentColor"
        })
      })
    }, [x, s, W, $, K, et, q, ee, n, en, B, l]);
  if (V) return (0, r.jsx)(c.Eep, {
    className: R,
    readyState: I.zo9.READY,
    src: "",
    width: null != H ? H : 350,
    height: null != Y ? Y : 350,
    maxWidth: M,
    maxHeight: j,
    mediaLayoutType: x,
    useFullWidth: G,
    zoomable: false
  });
  switch (K) {
    case "IMAGE":
      return (0, r.jsx)(h.h.Consumer, {
        children: e => (0, r.jsx)(p, {
          item: n,
          message: t,
          width: H,
          height: Y,
          autoPlay: a && !L,
          onClick: u,
          onContextMenu: f,
          shouldHideMediaOptions: $,
          renderAccessory: e,
          renderAdjacentContent: ei,
          containerClassName: R,
          className: P,
          imageClassName: D,
          shouldLink: w,
          hiddenSpoilers: L,
          responsive: true,
          mediaLayoutType: x,
          maxWidth: M,
          maxHeight: j,
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
        className: o()(R, {
          [S.hasFooter]: U
        }),
        playable: w,
        responsive: true,
        mediaLayoutType: x,
        maxWidth: M,
        maxHeight: j,
        useFullWidth: G,
        mimeType: ee,
        onControlsShow: Z,
        onControlsHide: F,
        downloadable: !$,
        mediaPlayerClassName: U ? S.hasFooter : true
      });
    case "VISUAL_PLACEHOLDER":
      if (null == N) return null;
      return (0, r.jsx)(N, {
        item: n,
        message: t,
        className: P,
        imageClassName: D,
        maxWidth: M,
        maxHeight: j,
        mediaLayoutType: x,
        useFullWidth: G
      });
    case "AUDIO":
      return (0, r.jsx)(O, {
        item: n,
        message: t,
        className: R,
        playable: w,
        mimeType: ee,
        renderAdjacentContent: ei,
        onVolumeShow: () => X(true),
        onVolumeHide: () => X(false),
        onPlay: _
      });
    case "PLAINTEXT_PREVIEW":
      return (0, r.jsx)(A, {
        item: n,
        message: t,
        className: R,
        onClick: u,
        onContextMenu: f,
        renderAdjacentContent: ei
      });
    case "OTHER":
      return (0, r.jsx)(C, {
        item: n,
        message: t,
        className: R,
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
  return P(N({}, n !== v.hV.MOSAIC && {
    maxWidth: null != r ? r : "400px"
  }), {
    width: "100%",
    height: "100%",
    justifySelf: "auto"
  })
}
let B = function(e) {
  var {
    className: t,
    item: n,
    message: a,
    getObscureReason: s,
    useFullWidth: l,
    mediaLayoutType: c,
    isSingleMosaicItem: u,
    footer: d,
    displayGridItem: h
  } = e, m = D(e, ["className", "item", "message", "getObscureReason", "useFullWidth", "mediaLayoutType", "isSingleMosaicItem", "footer", "displayGridItem"]);
  let {
    width: E,
    height: b,
    type: y
  } = n, I = s(n, (0, p.v)(a)), [T, A] = i.useState(null != I), C = (0, f.JO)(I), R = c === v.hV.MOSAIC, w = !R && (null != E && E < L || null != b && b < x), j = M(y), k = (0, O.R_)(y), B = u && null != I && (0, f.yf)(E, b), [Z, F] = i.useState(false), V = () => {
    F(true)
  }, H = () => {
    F(false)
  }, Y = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return (0, r.jsx)(U, P(N({}, m), {
      item: n,
      message: a,
      getObscureReason: s,
      hiddenSpoilers: e,
      className: o()(t, S.mosaicItemContent, {
        [S.obscured]: T && !w,
        [S.hiddenSpoiler]: T && I === _.wk.SPOILER,
        [S.hiddenExplicit]: T && null != I && _.Xh.has(I),
        [S.hiddenMosaicItem]: T && e,
        [S.inline]: T && w
      }),
      focusable: !e,
      mediaLayoutType: c,
      hasFooter: null != d,
      useFullWidth: !!B && !!e || l,
      isVisualMediaType: k,
      onVideoControlsShow: V,
      onVideoControlsHide: H,
      forcePlaceholder: C && T
    }))
  };
  return (0, r.jsxs)("div", {
    style: h ? {
      minWidth: 0,
      width: "".concat(m.maxWidth, "px")
    } : true,
    className: o()(S.mosaicItem, {
      [S.mosaicItemNoJustify]: j,
      [S.mosaicItemFullWidth]: l,
      [S.mosaicItemMediaMosaic]: R,
      [S.hideOverflow]: R && k,
      [S.mosaicItemWithFooter]: null != d
    }),
    children: [null != I ? (0, r.jsx)(g.ZP, {
      type: g.ZP.Types.ATTACHMENT,
      inline: w,
      reason: I,
      isSingleMosaicItem: u,
      obscured: T,
      containerStyles: G(n, j, c),
      obscurityControlClassName: o()({
        [S.obscureVideoSpacing]: "VIDEO" === y && u && !T && Z
      }),
      onToggleObscurity: () => A(e => !e),
      children: e => Y(e)
    }) : Y(), d]
  })
}