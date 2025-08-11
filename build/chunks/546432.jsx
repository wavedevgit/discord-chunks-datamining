/** Chunk was on web.js **/
/** chunk id: 546432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OB: () => B,
  ZP: () => H,
  mz: () => Z
}), require("./997841.js"), require("./388685.js"), require("./539854.js"), require("./35282.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk892814 = require("./892814.js"),
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
  Chunk308315 = require("./308315.js"),
  Chunk166011 = require("./166011.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i = k(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function k(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let j = 200,
  U = 50;

function G(e) {
  return "IMAGE" === e || "VIDEO" === e
}

function B(e, t) {
  var n;
  return {
    uniqueId: e.id,
    originalItem: e,
    type: (0, S.aw)(e, t),
    downloadUrl: e.url,
    height: e.height,
    width: e.width,
    spoiler: e.spoiler,
    contentType: e.content_type,
    srcIsAnimated: (0, I.yE)(null != (n = e.flags) ? n : 0, N.J0y.IS_ANIMATED)
  }
}
let Z = e => {
  let {
    mimeType: t,
    downloadURL: n,
    onRemoveItem: o,
    showDownload: s,
    showImageAppPicker: u,
    isVisualMediaType: d,
    channelId: _
  } = e, h = i.useRef(null), [m, g] = i.useState(0);
  (0, c.PM)(h, e => {
    let {
      width: t
    } = e;
    null != t && g(Math.floor((t - 8) / 32))
  });
  let E = [],
    [b, y] = i.useState(false),
    O = i.useCallback(() => y(e => !e), []);
  u && E.push(<f.Z toggleShowMenu={O} showMenu={b} channelId={_} className={a()(P.hoverButton, {
      [P.selected]: b
    })} imageUrl={n} mimeType={t} />), null != o && E.push(<l.ua7 text={C.intl.string(C.t["/XT3io"])}>{e => (0, r.jsx)(l.P3F, x(D({}, e), {
      className: a()(P.hoverButton, R.removeMosaicItemHoverButton),
      focusProps: {
        offset: 2
      },
      onClick: o,
      "aria-label": C.intl.string(C.t["0+xZHx"]),
      children: (0, r.jsx)(l.XHJ, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20
      })
    }))}</l.ua7>), s && E.push(<l.ua7 text={C.intl.string(C.t["1WjMbG"])}>{e => (0, r.jsx)(p.Z, x(D({}, e), {
      target: "_blank",
      rel: "noreferrer noopener",
      className: P.hoverButton,
      iconClassName: R.downloadHoverButtonIcon,
      focusProps: {
        offset: 2
      },
      href: n,
      mimeType: t
    }))}</l.ua7>);
  let v = Math.max(0, E.length - m);
  return <r.Fragment>{m > 0 && E.length > 0 && <div className={a()(P.hoverButtonGroup, {
        [P.nonMediaMosaicItem]: !d,
        [P.forceShowHover]: b
      })}>{E.slice(v)}</div>}{<div ref={h} className={P.sizer} />}</r.Fragment>
};

function F(e) {
  let {
    message: t,
    item: n,
    autoPlayGif: o,
    canRemoveItem: c,
    onRemoveItem: f,
    onClick: _,
    handlePreloadImage: p,
    onContextMenu: h,
    onPlay: m,
    renderImageComponent: g,
    renderVideoComponent: I,
    renderAudioComponent: S,
    renderPlaintextFilePreview: P,
    renderGenericFileComponent: w,
    renderVisualPlaceholderComponent: D,
    className: L,
    imgContainerClassName: x,
    imgClassName: M,
    focusable: k,
    hiddenSpoilers: j,
    mediaLayoutType: U,
    maxWidth: G,
    maxHeight: B,
    hasFooter: F,
    useFullWidth: V,
    isVisualMediaType: H,
    onVideoControlsShow: Y,
    onVideoControlsHide: W,
    isSearchResult: K,
    forcePlaceholder: z
  } = e, {
    width: q,
    height: X,
    spoiler: Q,
    type: J,
    contentType: $
  } = n, [ee, et] = i.useState(false), [en, er] = i.useState(false), ei = t.getChannelId(), eo = O.Z.getChannel(ei), ea = (0, y.Z)(ei), es = d.P.useExperiment({
    location: "MediaMosaicItem"
  }, {
    autoTrackExposure: true
  }).imageRecsEnabled, el = i.useMemo(() => null != $ && false !== $.indexOf("/") ? $.split("/") : ["unknown", "unknown"], [$]), ec = "IMAGE" === J && !b.uo.test(n.downloadUrl) && !((b.YG.test(n.downloadUrl) || b.FH.test(n.downloadUrl)) && true === n.srcIsAnimated), eu = false;
  if (H) {
    (null == q || null == X) && (eu = true);
    let e = (0, T.Dc)({
      width: null != q ? q : 0,
      height: null != X ? X : 0,
      maxWidth: null != G ? G : A.mT,
      maxHeight: null != B ? B : A.Jj
    });
    !V && (e * (null != q ? q : 0) < A.OF || e * (null != X ? X : 0) < A.OF) && (eu = true)
  }
  let ed = i.useCallback(() => {
      f(n)
    }, [n, f]),
    ef = i.useCallback(e => {
      if (ec && !eu && true !== K)
        if (e && !en) {
          if (er(true), es) {
            var t;
            (0, u.a)({
              channelId: null != (t = null == eo ? true : eo.id) ? t : "",
              location: s.I.CONTEXTUAL_IMAGE,
              withCommands: true
            })
          }
          v.default.track(N.rMx.IMAGE_HOVERED, {
            guild_id: null == eo ? true : eo.guild_id,
            channel_id: null == eo ? true : eo.id,
            image_recommendations_shown: es
          })
        } else !e && en && er(false)
    }, [en, eo, es, ec, eu, K]),
    e_ = i.useCallback(() => {
      if (U === A.hV.MOSAIC) {
        let e = !ea && ["VIDEO", "CLIP", "AUDIO"].includes(J) || "OTHER" === J;
        return eu ? null : !ee && <Z mimeType={el} downloadURL={n.downloadUrl} showDownload={e} showImageAppPicker={ec && es && true !== K} onRemoveItem={c ? ed : true} isVisualMediaType={H} channelId={ei} />
      }
      return c && <l.P3F className={Q ? R.spoilerRemoveMosaicItemButton : R.removeMosaicItemButton} focusProps={{
          offset: {
            bottom: 4
          }
        }} onClick={() => f(n)} aria-label={C.intl.string(C.t["0+xZHx"])}><l.Dio size={"xs"} color={"currentColor"} /></l.P3F>
    }, [U, c, Q, ea, J, eu, ee, el, n, ec, es, K, ed, H, ei, f]);
  if (z) return <l.Eep className={L} readyState={N.zo9.READY} src={""} width={null != q ? q : 350} height={null != X ? X : 350} maxWidth={G} maxHeight={B} mediaLayoutType={U} useFullWidth={V} zoomable={false} />;
  switch (J) {
    case "IMAGE":
      return <E.h.Consumer>{e => (0, r.jsx)(g, {
          item: n,
          message: t,
          width: q,
          height: X,
          autoPlay: o && !j,
          onClick: _,
          onContextMenu: h,
          shouldHideMediaOptions: ea,
          renderAccessory: e,
          renderAdjacentContent: e_,
          containerClassName: L,
          className: x,
          imageClassName: M,
          shouldLink: k,
          hiddenSpoilers: j,
          responsive: true,
          mediaLayoutType: U,
          maxWidth: G,
          maxHeight: B,
          useFullWidth: V,
          handlePreloadImage: p,
          onMouseEnter: () => ef(true),
          onMouseLeave: () => ef(false)
        })}</E.h.Consumer>;
    case "VIDEO":
    case "CLIP":
      return <I item={n} message={t} width={q} height={X} onClick={_} onContextMenu={h} renderAdjacentContent={e_} naturalWidth={q} naturalHeight={X} className={a()(L, {
          [R.hasFooter]: F
        })} playable={k} responsive={true} mediaLayoutType={U} maxWidth={G} maxHeight={B} useFullWidth={V} mimeType={el} onControlsShow={Y} onControlsHide={W} downloadable={!ea} mediaPlayerClassName={F ? R.hasFooter : true} />;
    case "VISUAL_PLACEHOLDER":
      if (null == D) return null;
      return <D item={n} message={t} className={x} imageClassName={M} maxWidth={G} maxHeight={B} mediaLayoutType={U} useFullWidth={V} />;
    case "AUDIO":
      return <S item={n} message={t} className={L} playable={k} mimeType={el} renderAdjacentContent={e_} onVolumeShow={() => et(true)} onVolumeHide={() => et(false)} onPlay={m} />;
    case "PLAINTEXT_PREVIEW":
      return <P item={n} message={t} className={L} onClick={_} onContextMenu={h} renderAdjacentContent={e_} />;
    case "OTHER":
      return <w item={n} message={t} className={L} onClick={_} onContextMenu={h} renderAdjacentContent={e_} />;
    case "INVALID":
      return null
  }
}

function V(e, t, n) {
  if (!t) return;
  let r = e.width;
  if (true !== e.width && true !== e.height) {
    let {
      width: t
    } = (0, T.Tj)({
      width: e.width,
      height: e.height,
      maxWidth: 400,
      maxHeight: 300
    });
    r = t
  }
  return x(D({}, n !== A.hV.MOSAIC && {
    maxWidth: null != r ? r : "400px"
  }), {
    width: "100%",
    height: "100%",
    justifySelf: "auto"
  })
}
let H = function(e) {
  var {
    className: t,
    item: n,
    message: o,
    getObscureReason: s,
    useFullWidth: l,
    mediaLayoutType: c,
    isSingleMosaicItem: u,
    footer: d,
    displayGridItem: f
  } = e, p = M(e, ["className", "item", "message", "getObscureReason", "useFullWidth", "mediaLayoutType", "isSingleMosaicItem", "footer", "displayGridItem"]);
  let {
    width: E,
    height: b,
    type: y
  } = n, O = s(n, (0, g.v)(o)), [v, I] = i.useState(null != O), T = (0, h.JO)(O), N = c === A.hV.MOSAIC, C = !N && (null != E && E < j || null != b && b < U), P = G(y), w = (0, S.R_)(y), L = u && null != O && (0, h.yf)(E, b), [k, B] = i.useState(false), Z = () => {
    B(true)
  }, H = () => {
    B(false)
  }, Y = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return <F{...x(D({}, p), {
      item: n,
      message: o,
      getObscureReason: s,
      hiddenSpoilers: e,
      className: a()(t, R.mosaicItemContent, {
        [R.obscured]: v && !C,
        [R.hiddenSpoiler]: v && O === m.wk.SPOILER,
        [R.hiddenExplicit]: v && null != O && m.Xh.has(O),
        [R.hiddenMosaicItem]: v && e,
        [R.inline]: v && C
      }),
      focusable: !e,
      mediaLayoutType: c,
      hasFooter: null != d,
      useFullWidth: !!L || l,
      isVisualMediaType: w,
      onVideoControlsShow: Z,
      onVideoControlsHide: H,
      forcePlaceholder: T && v
    })} />
  };
  return <div style={f ? {
      minWidth: 0,
      width: "".concat(p.maxWidth, "px")
    } : true} className={a()(R.mosaicItem, {
      [R.mosaicItemNoJustify]: P,
      [R.mosaicItemFullWidth]: l,
      [R.mosaicItemMediaMosaic]: N,
      [R.hideOverflow]: N && w,
      [R.mosaicItemWithFooter]: null != d
    })}>{null != O ? <_.ZP type={_.ZP.Types.ATTACHMENT} inline={C} reason={O} isSingleMosaicItem={u} obscured={v} containerStyles={V(n, P, c)} obscurityControlClassName={a()({
        [R.obscureVideoSpacing]: "VIDEO" === y && u && !v && k
      })} onToggleObscurity={() => I(e => !e)}>{e => Y(e)}</_.ZP> : Y()}{d}</div>
}