/** Chunk was on 85372 **/
/** chunk id: 546432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  OB: () => S,
  ZP: () => k,
  mz: () => _
}), require("./997841.js"), require("./388685.js"), require("./539854.js"), require("./35282.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk228458 = require("./228458.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk399654 = require("./399654.js"),
  Chunk162609 = require("./162609.js"),
  Chunk370298 = require("./370298.jsx"),
  Chunk95398 = require("./95398.jsx"),
  Chunk167080 = require("./167080.jsx"),
  Chunk247206 = require("./247206.js"),
  Chunk936141 = require("./936141.js"),
  Chunk262777 = require("./262777.js"),
  Chunk947849 = require("./947849.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk976853 = require("./976853.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk956664 = require("./956664.js"),
  Chunk499376 = require("./499376.js"),
  Chunk217702 = require("./217702.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk337595 = require("./337595.js"),
  Chunk374299 = require("./374299.js");

function M(e) {
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

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  var n;
  return {
    uniqueId: e.id,
    originalItem: e,
    type: (0, C.aw)(e, t),
    downloadUrl: e.url,
    height: e.height,
    width: e.width,
    spoiler: e.spoiler,
    contentType: e.content_type,
    srcIsAnimated: (0, b.yE)(null != (n = e.flags) ? n : 0, P.J0y.IS_ANIMATED)
  }
}
let _ = e => {
  let {
    mimeType: t,
    downloadURL: n,
    onRemoveItem: l,
    showDownload: a,
    showImageAppPicker: c,
    isVisualMediaType: d,
    channelId: h
  } = e, f = i.useRef(null), [y, O] = i.useState(0);
  (0, u.PM)(f, e => {
    let {
      width: t
    } = e;
    null != t && O(Math.floor((t - 8) / 32))
  });
  let g = [],
    [I, x] = i.useState(false),
    j = i.useCallback(() => x(e => !e), []);
  c && g.push((0, r.jsx)(m.Z, {
    toggleShowMenu: j,
    showMenu: I,
    channelId: h,
    className: o()(A.hoverButton, {
      [A.selected]: I
    }),
    imageUrl: n,
    mimeType: t
  }, "app")), null != l && g.push((0, r.jsx)(s.ua7, {
    text: T.intl.string(T.t["/XT3io"]),
    children: e => (0, r.jsx)(s.P3F, L(M({}, e), {
      className: o()(A.hoverButton, N.removeMosaicItemHoverButton),
      focusProps: {
        offset: 2
      },
      onClick: l,
      "aria-label": T.intl.string(T.t["0+xZHx"]),
      children: (0, r.jsx)(s.XHJ, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20
      })
    }))
  }, "remove")), a && g.push((0, r.jsx)(s.ua7, {
    text: T.intl.string(T.t["1WjMbG"]),
    children: e => (0, r.jsx)(p.Z, L(M({}, e), {
      target: "_blank",
      rel: "noreferrer noopener",
      className: A.hoverButton,
      iconClassName: N.downloadHoverButtonIcon,
      focusProps: {
        offset: 2
      },
      href: n,
      mimeType: t
    }))
  }, "download"));
  let E = Math.max(0, g.length - y);
  return (0, r.jsxs)(r.Fragment, {
    children: [y > 0 && g.length > 0 && (0, r.jsx)("div", {
      className: o()(A.hoverButtonGroup, {
        [A.nonMediaMosaicItem]: !d,
        [A.forceShowHover]: I
      }),
      children: g.slice(E)
    }), (0, r.jsx)("div", {
      ref: f,
      className: A.sizer
    })]
  })
};

function D(e) {
  let {
    message: t,
    item: n,
    autoPlayGif: l,
    canRemoveItem: u,
    onRemoveItem: m,
    onClick: h,
    handlePreloadImage: p,
    onContextMenu: f,
    onPlay: y,
    renderImageComponent: O,
    renderVideoComponent: b,
    renderAudioComponent: C,
    renderPlaintextFilePreview: A,
    renderGenericFileComponent: M,
    renderVisualPlaceholderComponent: L,
    className: S,
    imgContainerClassName: D,
    imgClassName: k,
    focusable: W,
    hiddenSpoilers: G,
    mediaLayoutType: F,
    maxWidth: R,
    maxHeight: H,
    hasFooter: V,
    useFullWidth: Z,
    isVisualMediaType: B,
    onVideoControlsShow: U,
    onVideoControlsHide: X,
    isSearchResult: J,
    forcePlaceholder: z
  } = e, {
    width: q,
    height: Y,
    spoiler: K,
    type: Q,
    contentType: $
  } = n, [ee, et] = i.useState(false), [en, er] = i.useState(false), ei = t.getChannelId(), el = j.Z.getChannel(ei), eo = (0, x.Z)(ei), ea = d.P.useExperiment({
    location: "MediaMosaicItem"
  }, {
    autoTrackExposure: true
  }).imageRecsEnabled, es = i.useMemo(() => null != $ && false !== $.indexOf("/") ? $.split("/") : ["unknown", "unknown"], [$]), eu = "IMAGE" === Q && !I.uo.test(n.downloadUrl) && !((I.YG.test(n.downloadUrl) || I.FH.test(n.downloadUrl)) && true === n.srcIsAnimated), ec = false;
  if (B) {
    (null == q || null == Y) && (ec = true);
    let e = (0, w.Dc)({
      width: null != q ? q : 0,
      height: null != Y ? Y : 0,
      maxWidth: null != R ? R : v.mT,
      maxHeight: null != H ? H : v.Jj
    });
    !Z && (e * (null != q ? q : 0) < v.OF || e * (null != Y ? Y : 0) < v.OF) && (ec = true)
  }
  let ed = i.useCallback(() => {
      m(n)
    }, [n, m]),
    em = i.useCallback(e => {
      if (eu && !ec && true !== J)
        if (e && !en) {
          if (er(true), ea) {
            var t;
            (0, c.a)({
              channelId: null != (t = null == el ? true : el.id) ? t : "",
              location: a.I.CONTEXTUAL_IMAGE,
              withCommands: true
            })
          }
          E.default.track(P.rMx.IMAGE_HOVERED, {
            guild_id: null == el ? true : el.guild_id,
            channel_id: null == el ? true : el.id,
            image_recommendations_shown: ea
          })
        } else !e && en && er(false)
    }, [en, el, ea, eu, ec, J]),
    eh = i.useCallback(() => {
      if (F === v.hV.MOSAIC) {
        let e = !eo && ["VIDEO", "CLIP", "AUDIO"].includes(Q) || "OTHER" === Q;
        return ec ? null : !ee && (0, r.jsx)(_, {
          mimeType: es,
          downloadURL: n.downloadUrl,
          showDownload: e,
          showImageAppPicker: eu && ea && true !== J,
          onRemoveItem: u ? ed : true,
          isVisualMediaType: B,
          channelId: ei
        })
      }
      return u && (0, r.jsx)(s.P3F, {
        className: K ? N.spoilerRemoveMosaicItemButton : N.removeMosaicItemButton,
        focusProps: {
          offset: {
            bottom: 4
          }
        },
        onClick: () => m(n),
        "aria-label": T.intl.string(T.t["0+xZHx"]),
        children: (0, r.jsx)(s.Dio, {
          size: "xs",
          color: "currentColor"
        })
      })
    }, [F, u, K, eo, Q, ec, ee, es, n, eu, ea, J, ed, B, ei, m]);
  if (z) return (0, r.jsx)(s.Eep, {
    className: S,
    readyState: P.zo9.READY,
    src: "",
    width: null != q ? q : 350,
    height: null != Y ? Y : 350,
    maxWidth: R,
    maxHeight: H,
    mediaLayoutType: F,
    useFullWidth: Z,
    zoomable: false
  });
  switch (Q) {
    case "IMAGE":
      return (0, r.jsx)(g.h.Consumer, {
        children: e => (0, r.jsx)(O, {
          item: n,
          message: t,
          width: q,
          height: Y,
          autoPlay: l && !G,
          onClick: h,
          onContextMenu: f,
          shouldHideMediaOptions: eo,
          renderAccessory: e,
          renderAdjacentContent: eh,
          containerClassName: S,
          className: D,
          imageClassName: k,
          shouldLink: W,
          hiddenSpoilers: G,
          responsive: true,
          mediaLayoutType: F,
          maxWidth: R,
          maxHeight: H,
          useFullWidth: Z,
          handlePreloadImage: p,
          onMouseEnter: () => em(true),
          onMouseLeave: () => em(false)
        })
      });
    case "VIDEO":
    case "CLIP":
      return (0, r.jsx)(b, {
        item: n,
        message: t,
        width: q,
        height: Y,
        onClick: h,
        onContextMenu: f,
        renderAdjacentContent: eh,
        naturalWidth: q,
        naturalHeight: Y,
        className: o()(S, {
          [N.hasFooter]: V
        }),
        playable: W,
        responsive: true,
        mediaLayoutType: F,
        maxWidth: R,
        maxHeight: H,
        useFullWidth: Z,
        mimeType: es,
        onControlsShow: U,
        onControlsHide: X,
        downloadable: !eo,
        mediaPlayerClassName: V ? N.hasFooter : true
      });
    case "VISUAL_PLACEHOLDER":
      if (null == L) return null;
      return (0, r.jsx)(L, {
        item: n,
        message: t,
        className: D,
        imageClassName: k,
        maxWidth: R,
        maxHeight: H,
        mediaLayoutType: F,
        useFullWidth: Z
      });
    case "AUDIO":
      return (0, r.jsx)(C, {
        item: n,
        message: t,
        className: S,
        playable: W,
        mimeType: es,
        renderAdjacentContent: eh,
        onVolumeShow: () => et(true),
        onVolumeHide: () => et(false),
        onPlay: y
      });
    case "PLAINTEXT_PREVIEW":
      return (0, r.jsx)(A, {
        item: n,
        message: t,
        className: S,
        onClick: h,
        onContextMenu: f,
        renderAdjacentContent: eh
      });
    case "OTHER":
      return (0, r.jsx)(M, {
        item: n,
        message: t,
        className: S,
        onClick: h,
        onContextMenu: f,
        renderAdjacentContent: eh
      });
    case "INVALID":
      return null
  }
}
let k = function(e) {
  var {
    className: t,
    item: n,
    message: l,
    getObscureReason: a,
    useFullWidth: s,
    mediaLayoutType: u,
    isSingleMosaicItem: c,
    footer: d,
    displayGridItem: m
  } = e, p = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["className", "item", "message", "getObscureReason", "useFullWidth", "mediaLayoutType", "isSingleMosaicItem", "footer", "displayGridItem"]);
  let {
    width: g,
    height: I,
    type: x
  } = n, j = a(n, (0, O.v)(l)), [E, b] = i.useState(null != j), P = (0, f.JO)(j), T = u === v.hV.MOSAIC, A = !T && (null != g && g < 200 || null != I && I < 50), S = "IMAGE" === x || "VIDEO" === x, _ = (0, C.R_)(x), k = c && null != j && (0, f.yf)(g, I), [W, G] = i.useState(false), F = () => {
    G(true)
  }, R = () => {
    G(false)
  }, H = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return (0, r.jsx)(D, L(M({}, p), {
      item: n,
      message: l,
      getObscureReason: a,
      hiddenSpoilers: e,
      className: o()(t, N.mosaicItemContent, {
        [N.obscured]: E && !A,
        [N.hiddenSpoiler]: E && j === y.wk.SPOILER,
        [N.hiddenExplicit]: E && null != j && y.Xh.has(j),
        [N.hiddenMosaicItem]: E && e,
        [N.inline]: E && A
      }),
      focusable: !e,
      mediaLayoutType: u,
      hasFooter: null != d,
      useFullWidth: !!k || s,
      isVisualMediaType: _,
      onVideoControlsShow: F,
      onVideoControlsHide: R,
      forcePlaceholder: P && E
    }))
  };
  return (0, r.jsxs)("div", {
    style: m ? {
      minWidth: 0,
      width: "".concat(p.maxWidth, "px")
    } : true,
    className: o()(N.mosaicItem, {
      [N.mosaicItemNoJustify]: S,
      [N.mosaicItemFullWidth]: s,
      [N.mosaicItemMediaMosaic]: T,
      [N.hideOverflow]: T && _,
      [N.mosaicItemWithFooter]: null != d
    }),
    children: [null != j ? (0, r.jsx)(h.ZP, {
      type: h.ZP.Types.ATTACHMENT,
      inline: A,
      reason: j,
      isSingleMosaicItem: c,
      obscured: E,
      containerStyles: function(e, t, n) {
        if (!t) return;
        let r = e.width;
        if (true !== e.width && true !== e.height) {
          let {
            width: t
          } = (0, w.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300
          });
          r = t
        }
        return L(M({}, n !== v.hV.MOSAIC && {
          maxWidth: null != r ? r : "400px"
        }), {
          width: "100%",
          height: "100%",
          justifySelf: "auto"
        })
      }(n, S, u),
      obscurityControlClassName: o()({
        [N.obscureVideoSpacing]: "VIDEO" === x && c && !E && W
      }),
      onToggleObscurity: () => b(e => !e),
      children: e => H(e)
    }) : H(), d]
  })
}