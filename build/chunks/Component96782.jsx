/** Chunk was on 92414 **/
/** chunk id: 96782, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => W,
  rC: () => S,
  zB: () => E
}), require("./938796.js"), require("./896048.js"), require("./321073.js"), require("./747238.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk665260 = require("./665260.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk384015 = require("./384015.jsx"),
  Chunk390248 = require("./390248.js"),
  Chunk338717 = require("./338717.js"),
  Chunk33358 = require("./33358.js"),
  Chunk643612 = require("./643612.js"),
  Chunk207133 = require("./207133.js"),
  Chunk302031 = require("./302031.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk954571 = require("./954571.js"),
  Chunk515718 = require("./515718.js"),
  Chunk448381 = require("./448381.js"),
  Chunk838541 = require("./838541.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk422436 = require("./422436.js"),
  Chunk295260 = require("./295260.js");

function A(e) {
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

function N(e, t) {
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
    type: (0, b.NI)(e, t),
    downloadUrl: e.url,
    height: e.height,
    width: e.width,
    spoiler: e.spoiler,
    contentType: e.content_type,
    srcIsAnimated: (0, o.Lt)(null != (n = e.flags) ? n : 0, w.sbO.IS_ANIMATED)
  }
}
let E = e => {
  let {
    mimeType: t,
    downloadURL: n,
    onRemoveItem: l,
    showDownload: o,
    isVisualMediaType: m
  } = e, h = i.useRef(null), [p, y] = i.useState(0);
  (0, c.i4)(h, e => {
    let {
      width: t
    } = e;
    null != t && y(Math.floor((t - 8) / 32))
  });
  let f = [];
  null != l && f.push((0, r.jsx)(a.m, {
    text: P.intl.string(P.t["/XT3ij"]),
    children: (0, r.jsx)(u.DUT, {
      className: s()(I.HF, C.GC),
      focusProps: {
        offset: 2
      },
      onClick: l,
      "aria-label": P.intl.string(P.t["0+xZH0"]),
      children: (0, r.jsx)(u.ucK, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20
      })
    })
  }, "remove")), o && f.push((0, r.jsx)(a.m, {
    text: P.intl.string(P.t["1WjMbC"]),
    children: (0, r.jsx)(d.A, {
      target: "_blank",
      rel: "noreferrer noopener",
      className: I.HF,
      iconClassName: C.qG,
      focusProps: {
        offset: 2
      },
      href: n,
      mimeType: t
    })
  }, "download"));
  let g = Math.max(0, f.length - p);
  return (0, r.jsxs)(r.Fragment, {
    children: [p > 0 && f.length > 0 && (0, r.jsx)("div", {
      className: s()(I.aq, {
        [I.XE]: !m
      }),
      children: f.slice(g)
    }), (0, r.jsx)("div", {
      ref: h,
      className: I.St
    })]
  })
};

function M(e) {
  let {
    message: t,
    item: n,
    autoPlayGif: l,
    canRemoveItem: o,
    onRemoveItem: a,
    onClick: c,
    handlePreloadImage: d,
    onContextMenu: m,
    onPlay: h,
    renderImageComponent: p,
    renderVideoComponent: g,
    renderAudioComponent: b,
    renderPlaintextFilePreview: I,
    renderGenericFileComponent: A,
    renderVisualPlaceholderComponent: N,
    className: S,
    imgContainerClassName: M,
    imgClassName: W,
    focusable: D,
    hiddenSpoilers: T,
    mediaLayoutType: k,
    maxWidth: L,
    maxHeight: F,
    hasFooter: _,
    useFullWidth: G,
    isVisualMediaType: H,
    onVideoControlsShow: R,
    onVideoControlsHide: V,
    forcePlaceholder: U
  } = e, {
    width: q,
    height: X,
    spoiler: K,
    type: z,
    contentType: Q
  } = n, [B, Y] = i.useState(false), Z = t.getChannelId(), $ = j.A.getChannel(Z), J = (0, f.A)(Z), ee = i.useMemo(() => null != Q && false !== Q.indexOf("/") ? Q.split("/") : ["unknown", "unknown"], [Q]), et = false;
  if (H) {
    (null == q || null == X) && (et = true);
    let e = (0, O.U8)({
      width: null != q ? q : 0,
      height: null != X ? X : 0,
      maxWidth: null != L ? L : v.k6,
      maxHeight: null != F ? F : v.Rk
    });
    !G && (e * (null != q ? q : 0) < v.ie || e * (null != X ? X : 0) < v.ie) && (et = true)
  }
  let en = i.useCallback(() => {
      a(n)
    }, [n, a]),
    er = i.useCallback(() => {
      x.default.track(w.HAw.IMAGE_HOVERED, {
        guild_id: null == $ ? true : $.guild_id,
        channel_id: null == $ ? true : $.id,
        image_recommendations_shown: false
      })
    }, [$]),
    ei = i.useCallback(() => {
      if (k === v.dG.MOSAIC) {
        let e = !J && ["VIDEO", "CLIP", "AUDIO"].includes(z) || "OTHER" === z;
        return et ? null : !B && (0, r.jsx)(E, {
          mimeType: ee,
          downloadURL: n.downloadUrl,
          showDownload: e,
          onRemoveItem: o ? en : true,
          isVisualMediaType: H
        })
      }
      return o && (0, r.jsx)(u.DUT, {
        className: K ? C.yR : C.Yg,
        focusProps: {
          offset: {
            bottom: 4
          }
        },
        onClick: () => a(n),
        "aria-label": P.intl.string(P.t["0+xZH0"]),
        children: (0, r.jsx)(u.PGe, {
          size: "xs",
          color: "currentColor"
        })
      })
    }, [k, o, K, J, z, et, B, ee, n, en, H, a]);
  if (U) return (0, r.jsx)(u._V3, {
    className: S,
    readyState: w.Rv1.READY,
    src: "",
    width: null != q ? q : 350,
    height: null != X ? X : 350,
    maxWidth: L,
    maxHeight: F,
    mediaLayoutType: k,
    useFullWidth: G,
    zoomable: false
  });
  switch (z) {
    case "IMAGE":
      return (0, r.jsx)(y.G.Consumer, {
        children: e => (0, r.jsx)(p, {
          item: n,
          message: t,
          width: q,
          height: X,
          autoPlay: l && !T,
          onClick: c,
          onContextMenu: m,
          shouldHideMediaOptions: J,
          renderAccessory: e,
          renderAdjacentContent: ei,
          containerClassName: S,
          className: M,
          imageClassName: W,
          shouldLink: D,
          hiddenSpoilers: T,
          responsive: true,
          mediaLayoutType: k,
          maxWidth: L,
          maxHeight: F,
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
        width: q,
        height: X,
        onClick: c,
        onContextMenu: m,
        renderAdjacentContent: ei,
        naturalWidth: q,
        naturalHeight: X,
        className: s()(S, {
          [C.yq]: _
        }),
        playable: D,
        responsive: true,
        mediaLayoutType: k,
        maxWidth: L,
        maxHeight: F,
        useFullWidth: G,
        mimeType: ee,
        onControlsShow: R,
        onControlsHide: V,
        downloadable: !J,
        mediaPlayerClassName: _ ? C.yq : true
      });
    case "VISUAL_PLACEHOLDER":
      if (null == N) return null;
      return (0, r.jsx)(N, {
        item: n,
        message: t,
        className: M,
        imageClassName: W,
        maxWidth: L,
        maxHeight: F,
        mediaLayoutType: k,
        useFullWidth: G
      });
    case "AUDIO":
      return (0, r.jsx)(b, {
        item: n,
        message: t,
        className: S,
        playable: D,
        mimeType: ee,
        renderAdjacentContent: ei,
        onVolumeShow: () => Y(true),
        onVolumeHide: () => Y(false),
        onPlay: h
      });
    case "PLAINTEXT_PREVIEW":
      return (0, r.jsx)(I, {
        item: n,
        message: t,
        className: S,
        onClick: c,
        onContextMenu: m,
        renderAdjacentContent: ei
      });
    case "OTHER":
      return (0, r.jsx)(A, {
        item: n,
        message: t,
        className: S,
        onClick: c,
        onContextMenu: m,
        renderAdjacentContent: ei
      });
    case "INVALID":
      return null
  }
}
let W = function(e) {
  let {
    className: t,
    item: n,
    message: l,
    getObscureReason: o,
    useFullWidth: a,
    mediaLayoutType: u,
    isSingleMosaicItem: c,
    footer: d,
    displayGridItem: y
  } = e, f = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["className", "item", "message", "getObscureReason", "useFullWidth", "mediaLayoutType", "isSingleMosaicItem", "footer", "displayGridItem"]), {
    width: j,
    height: x,
    type: w
  } = n, P = o(n, (0, p.P)(l)), [I, S] = i.useState(null != P), E = (0, m.qZ)(P), W = u === v.dG.MOSAIC, D = !W && (null != j && j < 200 || null != x && x < 50), T = "IMAGE" === w || "VIDEO" === w, k = (0, b.Xg)(w), L = c && null != P && (0, m.j8)(j, x), [F, _] = i.useState(false), G = () => {
    _(true)
  }, H = () => {
    _(false)
  }, R = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return (0, r.jsx)(M, N(A({}, f), {
      item: n,
      message: l,
      getObscureReason: o,
      hiddenSpoilers: e,
      className: s()(t, C.bq, {
        [C.cd]: I && !D,
        [C.rP]: I && P === h.Oc.SPOILER,
        [C.xu]: I && null != P && h._K.has(P),
        [C.sC]: I && e,
        [C.mG]: I && D
      }),
      focusable: !e,
      mediaLayoutType: u,
      hasFooter: null != d,
      useFullWidth: !!L && !!e || a,
      isVisualMediaType: k,
      onVideoControlsShow: G,
      onVideoControlsHide: H,
      forcePlaceholder: E && I
    }))
  };
  return (0, r.jsxs)("div", {
    style: y ? {
      minWidth: 0,
      width: "".concat(f.maxWidth, "px")
    } : true,
    className: s()(C.wO, {
      [C.xV]: T,
      [C.D$]: a,
      [C.UI]: W,
      [C.JP]: W && k,
      [C.hU]: null != d
    }),
    children: [null != P ? (0, r.jsx)(g.Ay, {
      type: g.Ay.Types.ATTACHMENT,
      inline: D,
      reason: P,
      isSingleMosaicItem: c,
      obscured: I,
      containerStyles: function(e, t, n) {
        if (!t) return;
        let r = e.width;
        if (true !== e.width && true !== e.height) {
          let {
            width: t
          } = (0, O.Uj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300
          });
          r = t
        }
        return N(A({}, n !== v.dG.MOSAIC && {
          maxWidth: null != r ? r : "400px"
        }), {
          width: "100%",
          height: "100%",
          justifySelf: "auto"
        })
      }(n, T, u),
      obscurityControlClassName: s()({
        [C.yi]: "VIDEO" === w && c && !I && F
      }),
      onToggleObscurity: () => S(e => !e),
      children: e => R(e)
    }) : R(), d]
  })
}