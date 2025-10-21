/** Chunk was on web.js **/
/** chunk id: 446411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BC: () => ea,
  ZP: () => es
}), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./35282.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk228458 = require("./228458.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk399654 = require("./399654.js"),
  Chunk370298 = require("./370298.jsx"),
  Chunk635477 = require("./635477.js"),
  Chunk715697 = require("./715697.jsx"),
  Chunk95398 = require("./95398.jsx"),
  Chunk936141 = require("./936141.js"),
  Chunk947849 = require("./947849.js"),
  Chunk768494 = require("./768494.js"),
  Chunk624195 = require("./624195.jsx"),
  Chunk44824 = require("./44824.jsx"),
  Chunk124347 = require("./124347.jsx"),
  Chunk283756 = require("./283756.jsx"),
  Chunk120324 = require("./120324.js"),
  Chunk566898 = require("./566898.jsx"),
  Chunk963206 = require("./963206.jsx"),
  Chunk785992 = require("./785992.js"),
  Chunk400266 = require("./400266.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk52824 = require("./52824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk55935 = require("./55935.js"),
  Chunk408433 = require("./408433.js"),
  Chunk956664 = require("./956664.js"),
  Chunk624138 = require("./624138.js"),
  Chunk591759 = require("./591759.js"),
  Chunk468846 = require("./468846.jsx"),
  Chunk401419 = require("./401419.jsx"),
  Chunk249458 = require("./249458.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk781452 = require("./781452.js"),
  Chunk374299 = require("./374299.js"),
  Chunk430864 = require("./430864.js");

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let X = 32,
  Q = 12,
  J = 150,
  $ = 144,
  ee = 520,
  et = 5,
  en = 150;

function er(e, t) {
  let n = Q / t,
    r = e * n;
  return "".concat(r + 1, " / ").concat(r + n + 1)
}

function ei(e) {
  let t = k.Z.toURLSafe(e);
  return null == t ? e : (t.searchParams.set("format", "png"), t.toString())
}

function ea(e) {
  var t, n;
  let {
    className: r,
    iframeWrapperClassName: o,
    maxWidth: l,
    maxHeight: c,
    thumbnail: u,
    video: d,
    provider: f,
    allowFullScreen: _ = true,
    responsive: p = false,
    renderImageComponent: h,
    renderVideoComponent: m,
    renderLinkComponent: g,
    playable: E = true,
    autoPlay: b = false,
    autoMute: y,
    volume: O,
    onPlay: I,
    onPause: T,
    onEnded: S,
    onControlsHide: A,
    onControlsShow: C,
    onVolumeChange: N,
    onMute: P,
    href: D,
    placeholder: L,
    placeholderVersion: M,
    sourceMetadata: k
  } = e, [U, G] = a.useState(b), Z = null != d && null == d.proxyURL, F = a.useCallback(() => G(false), [G]), H = e => {
    e.preventDefault(), e.stopPropagation(), null == I || I(false), G(true), Z && (w.S.dispatch(B.CkL.VIDEO_EMBED_PLAYBACK_STARTED), w.S.subscribeOnce(B.CkL.VIDEO_EMBED_PLAYBACK_STARTED, F))
  };
  a.useEffect(() => () => {
    Z && w.S.unsubscribe(B.CkL.VIDEO_EMBED_PLAYBACK_STARTED, F)
  }, [Z, F]);
  let {
    width: Y,
    height: W
  } = u;
  null != d && (Y = d.width, W = d.height);
  let K = (0, x.Tj)({
    width: Y,
    height: W,
    maxWidth: l,
    maxHeight: c
  });
  Y = Math.max(K.width, J), W = Math.max(K.height, $);
  let z = (0, R.q)(u);
  if (null != d && null != d.proxyURL) return (0, i.jsx)("div", {
    className: s()(V.embedVideo, r),
    children: m({
      poster: z,
      src: d.proxyURL,
      placeholder: L,
      placeholderVersion: M,
      width: Y,
      height: W,
      responsive: p,
      autoPlay: b,
      onEnded: S,
      naturalWidth: d.width,
      naturalHeight: d.height,
      onVolumeChange: N,
      playable: E,
      autoMute: y,
      volume: O,
      onPlay: I,
      onPause: T,
      onMute: P,
      onControlsHide: A,
      onControlsShow: C,
      sourceMetadata: k
    })
  });
  if (U && null != d) {
    let e, t = true === y || "function" == typeof y && y(),
      n = {
        width: Y,
        height: W
      },
      a = {
        width: Y,
        height: W
      };
    if (p) {
      let t = 0 !== Y ? W / Y : 1;
      n = {
        maxWidth: l,
        maxHeight: c,
        width: true,
        height: true
      }, a = {
        paddingBottom: "".concat(100 * t, "%"),
        maxWidth: Y
      }, e = {
        position: "absolute",
        top: 0,
        left: 0,
        maxWidth: Y,
        maxHeight: W
      }
    }
    return (0, i.jsx)("div", {
      className: r,
      style: n,
      children: (0, i.jsx)("div", {
        className: s()(V.embedVideo, o),
        style: a,
        children: (0, i.jsx)(j.ZP, {
          provider: f,
          src: d.url,
          style: e,
          width: Y,
          height: W,
          allowFullScreen: _,
          autoMute: t
        })
      })
    })
  }
  return (0, i.jsxs)("div", {
    className: s()(V.embedVideo, r),
    style: p ? {
      maxWidth: Y
    } : {
      width: Y,
      height: W
    },
    children: [h({
      src: z,
      width: Y,
      height: W,
      maxWidth: Y,
      maxHeight: W,
      responsive: p,
      containerClassName: V.embedVideoImageComponent,
      imageClassName: V.embedVideoImageComponentInner,
      placeholder: L,
      placeholderVersion: M,
      onClick: E && null != d ? H : null,
      sourceMetadata: k,
      analyticsSource: "EmbedVideo"
    }), (0, i.jsx)("div", {
      className: V.embedVideoActions,
      children: (0, i.jsx)("div", {
        className: V.centerContent,
        children: E ? (0, i.jsx)(v.Z, {
          onPlay: null != d ? H : null,
          externalURL: D,
          renderLinkComponent: g,
          messageId: null == k || null == (t = k.message) ? true : t.id,
          channelId: null == k || null == (n = k.message) ? true : n.channel_id
        }) : null
      })
    })]
  })
}

function eo(e) {
  let {
    className: t,
    href: n,
    autoPlay: r,
    maxWidth: a,
    maxHeight: o,
    thumbnail: l,
    video: c,
    renderImageComponent: u,
    responsive: d,
    alt: f,
    disableAltTextDisplay: _ = false,
    playable: p = true,
    hiddenSpoilers: h,
    placeholder: m,
    placeholderVersion: g,
    sourceMetadata: E
  } = e;
  return (0, i.jsx)(y.Z, {
    className: s()(V.embedVideo, t),
    original: n,
    poster: (0, R.q)(l),
    src: (0, R.q)(c),
    alt: f,
    width: l.width,
    height: l.height,
    naturalHeight: c.height,
    naturalWidth: c.width,
    maxWidth: a,
    maxHeight: o,
    responsive: d,
    autoPlay: r,
    playable: p,
    renderImageComponent: u,
    hiddenSpoilers: h,
    disableAltTextDisplay: _,
    placeholder: m,
    placeholderVersion: g,
    sourceMetadata: E
  })
}
class es extends(r = Chunk647438.PureComponent) {
  renderProvider() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      {
        embed: {
          provider: t
        },
        renderLinkComponent: n,
        message: r
      } = this.props;
    return null == exports ? null : this.shouldShowStaticPlaceholder ? (0, Chunk951288.jsx)("div", {
      className: s()(Chunk781452.embedProvider, Chunk781452.embedMargin),
      children: this.renderContentPlaceholder({
        width: 80,
        height: 18
      })
    }) : (0, Chunk951288.jsx)("div", {
      className: s()(Chunk781452.embedProvider, Chunk781452.embedMargin),
      children: null != exports.url ? require({
        className: Chunk781452.embedLink,
        href: exports.url,
        tabIndex: module ? 0 : false,
        children: exports.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == r ? true : r.id,
        channelId: null == r ? true : r.channel_id
      }) : (0, Chunk951288.jsx)("span", {
        children: exports.name
      })
    })
  }
  renderAuthor() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      {
        embed: {
          author: t
        },
        renderLinkComponent: n,
        message: r,
        autoPlayGif: a
      } = this.props;
    return null == exports ? null : this.shouldShowStaticPlaceholder ? (0, Chunk951288.jsx)("div", {
      className: s()(Chunk781452.embedAuthor, Chunk781452.embedMargin),
      children: this.renderContentPlaceholder({
        width: 150,
        height: 18
      })
    }) : (0, Chunk951288.jsx)(Chunk249458.G.Consumer, {
      children: o => {
        let {
          disableAnimations: l
        } = o;
        return (0, i.jsxs)("div", {
          className: s()(V.embedAuthor, V.embedMargin),
          children: [null != t.iconProxyURL ? (0, i.jsx)("img", {
            alt: "",
            className: V.embedAuthorIcon,
            src: a && !l ? t.iconProxyURL : ei(t.iconProxyURL)
          }) : null, null != t.url ? n({
            className: V.embedAuthorNameLink,
            href: t.url,
            tabIndex: e ? 0 : false,
            children: t.name,
            target: "_blank",
            rel: "noreferrer noopener",
            messageId: null == r ? true : r.id,
            channelId: null == r ? true : r.channel_id
          }) : (0, i.jsx)("span", {
            className: V.embedAuthorName,
            children: t.name
          })]
        })
      }
    })
  }
  renderContentPlaceholder(e) {
    let {
      width: t,
      height: n
    } = e;
    return (0, i.jsx)(T.ZT, {
      className: V.contentPlaceholder,
      width: t,
      height: n,
      opacity: .3
    })
  }
  renderTitle() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      {
        embed: t,
        renderLinkComponent: n,
        renderTitle: r,
        message: a
      } = this.props,
      {
        rawTitle: o,
        url: l
      } = exports;
    return null == Chunk120356 ? null : this.shouldShowStaticPlaceholder ? (0, Chunk951288.jsx)("div", {
      className: s()(Chunk781452.embedTitle, Chunk781452.embedMargin),
      children: this.renderContentPlaceholder({
        width: 400,
        height: 30
      })
    }) : (0, Chunk951288.jsx)("div", {
      className: s()(Chunk781452.embedTitle, Chunk781452.embedMargin),
      children: null != Chunk228458 ? require({
        className: Chunk781452.embedTitleLink,
        href: Chunk228458,
        tabIndex: module ? 0 : false,
        children: r(exports, Chunk120356),
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == Chunk647438 ? true : Chunk647438.id,
        channelId: null == Chunk647438 ? true : Chunk647438.channel_id
      }) : r(exports, Chunk120356)
    })
  }
  renderDescription() {
    let {
      embed: e,
      renderDescription: t
    } = this.props, {
      rawDescription: n
    } = module;
    return null == require ? null : (0, Chunk951288.jsx)("div", {
      className: s()(Chunk781452.embedDescription, Chunk781452.embedMargin),
      children: this.shouldShowStaticPlaceholder ? this.renderContentPlaceholder({
        width: 400,
        height: 50
      }) : exports(module, require, false)
    })
  }
  renderThumbnail() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      {
        embed: {
          thumbnail: t
        },
        maxThumbnailWidth: n,
        maxThumbnailHeight: r,
        renderImageComponent: a,
        autoPlayGif: o
      } = this.props,
      {
        sourceMetadata: s
      } = this.state;
    return null == exports ? null : (0, Chunk951288.jsx)(Chunk249458.G.Consumer, {
      children: i => {
        let {
          disableAnimations: l
        } = i;
        return a({
          containerClassName: V.embedThumbnail,
          src: (0, R.q)(t),
          original: t.url,
          width: t.width,
          height: t.height,
          maxWidth: n,
          maxHeight: r,
          shouldLink: e,
          autoPlay: o && !l,
          srcIsAnimated: t.srcIsAnimated,
          placeholder: t.placeholder,
          placeholderVersion: t.placeholderVersion,
          sourceMetadata: s,
          analyticsSource: "Embed"
        })
      }
    })
  }
  renderFields() {
    let {
      embed: e
    } = this.props, {
      fields: t
    } = module;
    if (null == exports || 0 === exports.length) return null;
    let n = [],
      r = null;
    return exports.forEach(t => {
      let {
        rawName: i,
        rawValue: a,
        inline: o
      } = t;
      o || null == r || (n.push(r), r = null), null == r && (r = []), r.push([this.props.renderTitle(e, i), this.props.renderDescription(e, a, true)]), 3 !== r.length && o || (n.push(r), r = null)
    }), null != r && require.push(r), (0, Chunk951288.jsx)("div", {
      className: Chunk781452.embedFields,
      children: require.map((e, t) => {
        let {
          length: n
        } = e;
        return e.map((e, r) => {
          let [a, o] = e;
          return (0, i.jsxs)("div", {
            className: V.embedField,
            style: {
              gridColumn: er(r, n)
            },
            children: [(0, i.jsx)("div", {
              className: V.embedFieldName,
              children: a
            }), (0, i.jsx)("div", {
              className: V.embedFieldValue,
              children: o
            })]
          }, "".concat(t, "-").concat(r))
        })
      })
    })
  }
  renderImages() {
    var e, t, n, r;
    let {
      hiddenSpoiler: a = false,
      isVisible: o = true
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
      embed: s
    } = this.props, {
      maxMediaHeight: l
    } = this.state;
    if (null == s.images) return null;
    let [c, u, d, f] = s.images.map(e => this.renderImage({
      hiddenSpoiler: a,
      isVisible: o,
      image: e,
      isGalleryImage: true,
      allImages: s.images
    }));
    return null == Chunk481060 && null == Chunk607070 && null == Chunk399654 && null == Chunk370298 ? null : (0, Chunk951288.jsxs)("div", {
      className: Chunk781452.embedGalleryImagesWrapper,
      style: {
        height: Chunk228458
      },
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk781452.embedGallerySide,
        children: [(0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(s.images[0].url, s.images[0]),
          children: Chunk481060
        }, 0), null != Chunk370298 && (0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (e = s.images[2]) ? true : module.url, s.images[2]),
          children: Chunk399654
        }, 2)]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk781452.embedGallerySide,
        children: [(0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (t = s.images[1]) ? true : exports.url, s.images[1]),
          children: Chunk607070
        }, 1), null == Chunk370298 && null != Chunk399654 && (0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (n = s.images[2]) ? true : require.url, s.images[2]),
          children: Chunk399654
        }, 2), null != Chunk370298 && (0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (r = s.images[3]) ? true : r.url, s.images[3]),
          children: Chunk370298
        }, 3)]
      })]
    })
  }
  renderImageHoverButtons(e) {
    let {
      mimeType: t,
      downloadURL: n,
      isVisualMediaType: r,
      channelId: a
    } = e, o = () => {
      this.setState({
        showImageAppMenu: !this.state.showImageAppMenu
      })
    };
    return (0, i.jsx)("div", {
      className: s()(H.hoverButtonGroup, {
        [H.nonMediaMosaicItem]: !r,
        [H.forceShowHover]: this.state.showImageAppMenu
      }),
      children: (0, i.jsx)(f.Z, {
        toggleShowMenu: o,
        showMenu: this.state.showImageAppMenu,
        channelId: a,
        className: s()(H.hoverButton, {
          [H.selected]: this.state.showImageAppMenu
        }),
        imageUrl: n,
        mimeType: t
      })
    })
  }
  handleImageHover(e, t, n) {
    if (n)
      if (e && !this.state.isImageHovered) {
        var r, i;
        this.setState({
          isImageHovered: true
        });
        let e = N.Z.getChannel(null == (r = this.props.message) ? true : r.channel_id);
        this.props.showImageRecs && (0, d.a)({
          channelId: null != (i = null == e ? true : e.id) ? i : "",
          location: l.I.CONTEXTUAL_IMAGE,
          withCommands: true
        }), P.default.track(B.rMx.IMAGE_HOVERED, {
          guild_id: null == e ? true : e.guild_id,
          channel_id: null == e ? true : e.id,
          image_recommendations_shown: this.props.showImageRecs
        })
      } else !e && this.state.isImageHovered && this.setState({
        isImageHovered: false
      })
  }
  renderImage() {
    var e, t, n, r;
    let {
      hiddenSpoiler: a = false,
      isVisible: o = true,
      image: l,
      isGalleryImage: c = false,
      alt: u = Chunk388032.intl.string(Chunk388032.t.X4IxWL),
      allImages: d = null
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
      renderImageComponent: f,
      className: _,
      autoPlayGif: p
    } = this.props, {
      maxMediaWidth: h,
      maxMediaHeight: m,
      sourceMetadata: b
    } = this.state;
    if (null == Chunk228458) return null;
    let y = (0, Chunk52824.q)(Chunk228458),
      {
        srcToOnClickOverride: v,
        srcToHandlePreloadImage: T
      } = null == Chunk399654 ? {
        srcToOnClickOverride: {},
        srcToHandlePreloadImage: {}
      } : (0, Chunk120324.G)(Chunk399654.map(e => q(K({}, (0, E.Hv)(e, b, "IMAGE")), {
        original: e.url,
        srcIsAnimated: e.srcIsAnimated
      })), {}, "Embed"),
      S = Chunk124347.ZP.isAnimated({
        src: (0, Chunk52824.q)(Chunk228458),
        original: Chunk228458.url,
        animated: false,
        srcIsAnimated: Chunk228458.srcIsAnimated
      }),
      A = {
        containerClassName: s()(Chunk635477, {
          [Chunk781452.embedMedia]: !Chunk481060,
          [Chunk781452.embedImage]: !Chunk481060,
          [Chunk781452.galleryImage]: Chunk481060
        }),
        imageContainerClassName: Chunk481060 ? Chunk781452.galleryImageContainer : true,
        imageClassName: Chunk481060 ? Chunk781452.embedGalleryImageElement : true,
        src: (0, Chunk52824.q)(Chunk228458),
        alt: null == Chunk228458.description || "" === Chunk228458.description ? Chunk607070 : Chunk228458.description,
        responsive: true,
        limitResponsiveWidth: !Chunk481060,
        width: Chunk228458.width,
        height: Chunk228458.height,
        maxWidth: Chunk95398,
        maxHeight: Chunk936141,
        original: Chunk228458.url,
        shouldLink: Chunk120356,
        disableAltTextDisplay: null == Chunk228458.description || "" === Chunk228458.description,
        hiddenSpoilers: Chunk647438,
        placeholder: Chunk228458.placeholder,
        placeholderVersion: Chunk228458.placeholderVersion,
        srcIsAnimated: Chunk228458.srcIsAnimated,
        mosaicStyleAlt: true
      },
      C = null != (r = null == (e = Chunk228458.url.split(".").pop()) ? true : module.split("?")[0]) ? r : "";
    "jpg" === Chunk400266 && (C = "jpeg");
    let N = null != Chunk228458 && !Chunk124347.uo.test(null == Chunk228458 ? true : Chunk228458.url) && !(Chunk228458.srcIsAnimated && Chunk124347.YG.test(null == Chunk228458 ? true : Chunk228458.url)) && !(Chunk228458.srcIsAnimated && Chunk124347.FH.test(null == Chunk228458 ? true : Chunk228458.url)),
      P = true !== this.props.isSearchResult && Chunk120356 && (null == (t = this.props.message) ? true : exports.channel_id) != null && (null == (n = this.props.message) ? true : require.channel_id) !== true && Chunk592125 && !el(Chunk228458) && null != Chunk400266;
    return (0, Chunk951288.jsx)(Chunk947849.h.Consumer, {
      children: e => (0, i.jsx)(G.G.Consumer, {
        children: t => {
          let {
            disableAnimations: n
          } = t;
          return f(q(K({}, A), {
            autoPlay: p && !n && !a,
            renderAccessory: S ? e : null,
            handlePreloadImage: T[y],
            onClick: v[y],
            onMouseEnter: () => this.handleImageHover(true, l, P),
            onMouseLeave: () => this.handleImageHover(false, l, P),
            renderAdjacentContent: () => {
              var e, t;
              returntrue === this.props.showImageRecs && P ? this.renderImageHoverButtons({
                mimeType: ["image", C],
                downloadURL: null != (t = l.proxyURL) ? t : l.url,
                isVisualMediaType: null != l,
                channelId: null == (e = this.props.message) ? true : e.channel_id
              }) : null
            },
            sourceMetadata: b,
            analyticsSource: "Embed"
          }))
        }
      }, l.url)
    })
  }
  renderVideo() {
    let {
      gifv: e = false,
      isVisible: t = true,
      hiddenSpoiler: n = false
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
      embed: {
        url: r,
        thumbnail: a,
        video: o,
        provider: s
      },
      renderVideoComponent: l,
      renderImageComponent: c,
      renderLinkComponent: u,
      allowFullScreen: d,
      autoPlayGif: f,
      obscureReason: _
    } = this.props, {
      maxMediaWidth: p,
      maxMediaHeight: h,
      sourceMetadata: m
    } = this.state;
    if (null == r || null == Chunk647438) return null;
    if (module) return null == Chunk120356 ? null : (0, Chunk951288.jsx)(Chunk249458.G.Consumer, {
      children: e => {
        let {
          disableAnimations: s
        } = e;
        return (0, i.jsx)(eo, {
          className: V.embedMedia,
          href: r,
          thumbnail: a,
          video: o,
          maxWidth: p,
          maxHeight: h,
          responsive: true,
          autoPlay: !n && f && !s && t,
          renderImageComponent: c,
          playable: t,
          hiddenSpoilers: n,
          disableAltTextDisplay: null != _,
          placeholder: o.placeholder,
          placeholderVersion: o.placeholderVersion,
          sourceMetadata: m
        })
      }
    });
    let g = () => {
        this.setState({
          videoControlsShown: true
        })
      },
      E = () => {
        this.setState({
          videoControlsShown: false
        })
      };
    return (0, Chunk951288.jsx)(ea, {
      className: Chunk781452.embedMedia,
      href: r,
      allowFullScreen: Chunk399654,
      thumbnail: Chunk647438,
      video: Chunk120356,
      provider: null == s ? true : s.name,
      maxWidth: Chunk715697,
      maxHeight: Chunk95398,
      responsive: true,
      renderImageComponent: Chunk481060,
      renderVideoComponent: Chunk228458,
      renderLinkComponent: Chunk607070,
      onControlsShow: Chunk947849,
      onControlsHide: Chunk768494,
      playable: exports && !require,
      placeholder: null == Chunk120356 ? true : Chunk120356.placeholder,
      placeholderVersion: null == Chunk120356 ? true : Chunk120356.placeholderVersion,
      sourceMetadata: Chunk936141
    })
  }
  renderFooter() {
    let {
      autoPlayGif: e
    } = this.props, {
      footer: t,
      timestamp: n
    } = this.props.embed;
    return null != exports ? (0, Chunk951288.jsx)(Chunk249458.G.Consumer, {
      children: r => {
        let {
          disableAnimations: a
        } = r;
        return (0, i.jsxs)("div", {
          className: s()(V.embedFooter, V.embedMargin),
          children: [null != t.iconProxyURL && "" !== t.iconProxyURL ? (0, i.jsx)("img", {
            alt: "",
            className: V.embedFooterIcon,
            src: e && !a ? t.iconProxyURL : ei(t.iconProxyURL)
          }) : null, (0, i.jsxs)("span", {
            className: V.embedFooterText,
            children: [t.text, null != t.text && null != n ? (0, i.jsx)("span", {
              className: V.embedFooterSeparator,
              children: "•"
            }) : null, null != n ? (0, D.Y4)(n) : null]
          })]
        })
      }
    }) : null != require ? (0, Chunk951288.jsx)("div", {
      className: s()(Chunk781452.embedFooter, Chunk781452.embedMargin),
      children: (0, Chunk951288.jsx)("span", {
        className: Chunk781452.embedFooterText,
        children: (0, Chunk55935.Y4)(require)
      })
    }) : true
  }
  renderStaticPlaceholderMedia() {
    var e;
    let {
      className: t,
      embed: n
    } = this.props, {
      maxMediaWidth: r,
      maxMediaHeight: a
    } = this.state, o = null != (e = require.image) ? module : require.video;
    if (null == Chunk120356) return null;
    let {
      width: s,
      height: l
    } = (0, Chunk956664.Tj)({
      width: Chunk120356.width,
      height: Chunk120356.height,
      maxWidth: r,
      maxHeight: Chunk647438
    });
    return (0, Chunk951288.jsx)(Chunk481060.Eep, {
      className: exports,
      readyState: Chunk981631.zo9.READY,
      src: "",
      width: s,
      height: Chunk228458,
      maxWidth: r,
      maxHeight: Chunk647438,
      mediaLayoutType: Chunk217702.hV.STATIC,
      useFullWidth: false,
      zoomable: false
    })
  }
  renderMedia() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
      {
        embed: t
      } = this.props,
      {
        isVisible: n
      } = this.state;
    if (this.shouldShowStaticPlaceholder) return this.renderStaticPlaceholderMedia();
    switch (exports.type) {
      case Chunk981631.hBH.GIFV:
        return this.renderVideo({
          gifv: true,
          hiddenSpoiler: module,
          isVisible: require
        });
      case Chunk981631.hBH.VIDEO:
      default:
        if (null != exports.video) return this.renderVideo({
          gifv: false,
          hiddenSpoiler: module,
          isVisible: require
        });
        if (null != exports.images) return this.renderImages({
          hiddenSpoiler: module,
          isVisible: require
        });
        return this.renderImage({
          hiddenSpoiler: module,
          isVisible: require,
          image: exports.image,
          alt: exports.rawTitle
        })
    }
  }
  renderAll() {
    let e, t, {
        embed: n,
        hideMedia: r
      } = this.props,
      {
        isVisible: i
      } = this.state,
      a = this.renderProvider(Chunk951288),
      o = this.renderAuthor(Chunk951288),
      s = this.renderTitle(Chunk951288);
    switch (require.type) {
      case Chunk981631.hBH.IMAGE:
      case Chunk981631.hBH.VIDEO:
      case Chunk981631.hBH.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let l = this.renderFields();
    r || (t = this.renderMedia(!Chunk951288));
    let c = this.renderFooter(),
      u = null == exports;
    return require.type === Chunk981631.hBH.RICH && (u = null == require.video), {
      provider: Chunk647438,
      author: Chunk120356,
      title: s,
      description: module,
      thumbnail: !r && Chunk607070 ? this.renderThumbnail(Chunk951288) : null,
      fields: Chunk228458,
      media: exports,
      footer: Chunk481060
    }
  }
  getMaxWidth(e) {
    let {
      embed: {
        image: t,
        images: n,
        video: r,
        type: i,
        thumbnail: a
      }
    } = this.props, {
      maxMediaWidth: o,
      maxMediaHeight: s
    } = this.state, l = null != t ? t : r;
    if (null == l) return;
    let {
      width: c
    } = (0, x.Tj)({
      width: l.width,
      height: l.height,
      maxWidth: o,
      maxHeight: s
    });
    if (!e && (i === B.hBH.VIDEO || c >= 300)) return c + X;
    if (i === B.hBH.RICH && true !== n) return ee;
    if (i === B.hBH.GIFV) {
      var u, d, f, _;
      let {
        width: e
      } = (0, x.Tj)({
        width: null != (d = null != (u = null == r ? true : r.width) ? u : null == a ? true : a.width) ? d : 0,
        height: null != (_ = null != (f = null == r ? true : r.height) ? f : null == a ? true : a.height) ? _ : 0,
        maxWidth: o,
        maxHeight: s
      });
      return e
    }
  }
  getMinSize() {
    let {
      video: e
    } = this.props.embed;
    return null != module ? {
      minWidth: J,
      minHeight: $
    } : true
  }
  isInline() {
    let {
      hideMedia: e,
      embed: t
    } = this.props;
    return !module && (0, Chunk408433.dY)(exports)
  }
  renderSuppressButton(e) {
    return (0, i.jsx)(c.P3F, {
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      className: V.embedSuppressButton,
      onClick: e,
      "aria-label": F.intl.string(F.t.GT3fNz),
      children: (0, i.jsx)(c.Dio, {
        size: "xs",
        color: "currentColor"
      })
    })
  }
  usesJustifiedAutoStyle() {
    let {
      embed: e
    } = this.props;
    return module.type === Chunk981631.hBH.IMAGE || module.type === Chunk981631.hBH.VIDEO || module.type === Chunk981631.hBH.GIFV || (module.type === Chunk981631.hBH.RICH || module.type === Chunk981631.hBH.ARTICLE) && (null != module.video || null != module.image)
  }
  getEmbedColor(e) {
    let {
      color: t
    } = this.props.embed;
    return null != t && "#ffffff" === t.toLowerCase() || e ? true : t
  }
  getSpoilerStyles(e) {
    var t, n;
    let {
      embed: {
        image: r,
        images: i,
        video: a,
        type: o,
        rawDescription: s
      }
    } = this.props, {
      maxMediaWidth: l,
      maxMediaHeight: c
    } = this.state;
    if (!this.usesJustifiedAutoStyle()) return;
    let d = e ? true : this.getMaxWidth(false);
    if (true === d && true === i && o !== B.hBH.RICH) {
      let e = null != r ? r : a;
      if (true !== e) {
        let {
          minWidth: n,
          minHeight: r
        } = null != (t = this.getMinSize()) ? t : {}, {
          width: i
        } = (0, x.Tj)({
          width: e.width,
          height: e.height,
          maxWidth: l,
          maxHeight: c,
          minWidth: n,
          minHeight: r
        });
        d = i
      }
    }
    let f = en / (u.Z.fontScale / 100),
      _ = (null != s ? (0, M.TZ)(s) : 0) >= f,
      p = (null != (n = null == s ? true : s.split("\n").length) ? n : 0) >= et,
      h = _ || p;
    return {
      maxWidth: true === d || h ? "max-content" : d,
      justifySelf: "auto"
    }
  }
  get shouldObscure() {
    let {
      obscureReason: e
    } = this.props;
    return null != module && Chunk936141.Xh.has(module)
  }
  get shouldShowStaticPlaceholder() {
    let {
      shouldAgeVerify: e = false
    } = this.props;
    return this.shouldObscure && module
  }
  render() {
    var e;
    let {
      embed: t,
      obscureReason: n,
      className: r
    } = this.props;
    return null != exports.provider && Chunk401419.j.includes(exports.provider.name) ? (0, Chunk951288.jsx)(Chunk401419.Z, {
      embed: exports,
      className: r
    }) : (0, Chunk785992.Z)(exports) ? (0, Chunk951288.jsx)(Chunk400266.Z, {
      embed: exports,
      className: r
    }) : (null == (e = exports.provider) ? true : module.name) === "Amazon Music" && exports.type === Chunk981631.hBH.RICH ? (0, Chunk951288.jsx)(Chunk624195.Z, {
      embed: exports,
      className: r
    }) : (0, Chunk635477.Z)(exports) ? (0, Chunk951288.jsx)(Chunk715697.Z, {
      embed: exports,
      className: r
    }) : this.isInline() ? null != require ? (0, Chunk951288.jsx)(Chunk95398.ZP, {
      type: Chunk95398.ZP.Types.ATTACHMENT,
      reason: require,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      isSingleMosaicItem: true,
      containerStyles: this.getSpoilerStyles(true),
      obscurityControlClassName: s()({
        [Chunk781452.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown
      }),
      children: this.renderInlineMediaEmbed
    }) : this.renderInlineMediaEmbed() : null != require ? (0, Chunk951288.jsx)(Chunk95398.ZP, {
      type: Chunk95398.ZP.Types.EMBED,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      reason: require,
      isSingleMosaicItem: true,
      containerStyles: this.getSpoilerStyles(false),
      children: this.renderEmbedContent
    }) : this.renderEmbedContent()
  }
  constructor(...e) {
    var t;
    super(...e), t = this, W(this, "state", K({
      isVisible: null == this.props.obscureReason,
      videoControlsShown: false,
      isImageHovered: false,
      showImageAppMenu: false,
      sourceMetadata: {
        message: this.props.message,
        identifier: {
          type: "embed",
          embedIndex: this.props.embedIndex
        }
      }
    }, (0, L.vP)(this.props.embed))), W(this, "onReveal", () => {
      this.setState({
        isVisible: true
      })
    }), W(this, "onToggleObscurity", () => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }), W(this, "renderInlineMediaEmbed", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        {
          obscureReason: n,
          className: r
        } = t.props,
        a = t.getMaxWidth(true);
      return (0, i.jsx)("div", {
        "aria-hidden": e,
        className: s()(V.inlineMediaEmbed, r, {
          [V.spoilerAttachment]: n === m.wk.SPOILER,
          [V.hiddenExplicitAttachment]: t.shouldObscure,
          [V.isHidden]: e,
          [V.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        style: {
          maxWidth: a
        },
        children: t.renderMedia(e)
      })
    }), W(this, "renderEmbedContent", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        {
          className: n,
          onSuppressEmbed: r,
          obscureReason: a
        } = t.props,
        {
          provider: o,
          author: l,
          title: c,
          description: u,
          fields: d,
          thumbnail: f,
          media: _,
          footer: p
        } = t.renderAll();
      return (0, i.jsx)("article", {
        className: s()(n, V.embedFull, Y.markup, {
          [V.isHidden]: e,
          [V.spoilerEmbed]: a === m.wk.SPOILER,
          [V.hiddenExplicitEmbed]: t.shouldObscure,
          [V.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        "aria-hidden": e,
        style: {
          borderLeftColor: t.getEmbedColor(e),
          maxWidth: t.getMaxWidth(false)
        },
        children: (0, i.jsx)("div", {
          className: V.gridContainer,
          children: (0, i.jsxs)("div", {
            className: s()({
              [V.grid]: true,
              [V.hasThumbnail]: null != f
            }),
            children: [null != r ? t.renderSuppressButton(r) : null, o, l, c, u, d, _, f, p]
          })
        })
      })
    })
  }
}

function el(e) {
  return null != e && (e.width <= Z.OF || e.height <= Z.OF)
}
W(es, "defaultProps", {
  hideMedia: false,
  allowFullScreen: true,
  maxThumbnailWidth: 80,
  maxThumbnailHeight: 80,
  embedIndex: 0
})