/** Chunk was on web.js **/
/** chunk id: 446411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BC: () => er,
  ZP: () => eo
}), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./35282.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk892814 = require("./892814.js"),
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
  Chunk566898 = require("./566898.jsx"),
  Chunk963206 = require("./963206.jsx"),
  Chunk207982 = require("./207982.js"),
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
  Chunk468846 = require("./468846.jsx"),
  Chunk401419 = require("./401419.jsx"),
  Chunk249458 = require("./249458.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk781452 = require("./781452.js"),
  Chunk374299 = require("./374299.js"),
  Chunk430864 = require("./430864.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let q = 32,
  X = 12,
  Q = 150,
  J = 144,
  $ = 520,
  ee = 5,
  et = 150;

function en(e, t) {
  let n = X / t,
    r = e * n;
  return "".concat(r + 1, " / ").concat(r + n + 1)
}

function er(e) {
  var t, n;
  let {
    className: r,
    iframeWrapperClassName: a,
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
    onControlsShow: N,
    onVolumeChange: C,
    onMute: P,
    href: D,
    placeholder: L,
    placeholderVersion: M,
    sourceMetadata: j
  } = e, [U, B] = o.useState(b), Z = null != d && null == d.proxyURL, V = o.useCallback(() => B(false), [B]), H = e => {
    e.preventDefault(), e.stopPropagation(), null == I || I(false), B(true), Z && (w.S.dispatch(G.CkL.VIDEO_EMBED_PLAYBACK_STARTED), w.S.subscribeOnce(G.CkL.VIDEO_EMBED_PLAYBACK_STARTED, V))
  };
  o.useEffect(() => () => {
    Z && w.S.unsubscribe(G.CkL.VIDEO_EMBED_PLAYBACK_STARTED, V)
  }, [Z, V]);
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
  Y = Math.max(K.width, Q), W = Math.max(K.height, J);
  let z = (0, R.q)(u);
  if (null != d && null != d.proxyURL) return (0, i.jsx)("div", {
    className: s()(F.embedVideo, r),
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
      onVolumeChange: C,
      playable: E,
      autoMute: y,
      volume: O,
      onPlay: I,
      onPause: T,
      onMute: P,
      onControlsHide: A,
      onControlsShow: N,
      sourceMetadata: j
    })
  });
  if (U && null != d) {
    let e, t = true === y || "function" == typeof y && y(),
      n = {
        width: Y,
        height: W
      },
      o = {
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
      }, o = {
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
        className: s()(F.embedVideo, a),
        style: o,
        children: (0, i.jsx)(k.ZP, {
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
    className: s()(F.embedVideo, r),
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
      containerClassName: F.embedVideoImageComponent,
      imageClassName: F.embedVideoImageComponentInner,
      placeholder: L,
      placeholderVersion: M,
      onClick: E && null != d ? H : null,
      sourceMetadata: j,
      analyticsSource: "EmbedVideo"
    }), (0, i.jsx)("div", {
      className: F.embedVideoActions,
      children: (0, i.jsx)("div", {
        className: F.centerContent,
        children: E ? (0, i.jsx)(v.Z, {
          onPlay: null != d ? H : null,
          externalURL: D,
          renderLinkComponent: g,
          messageId: null == j || null == (t = j.message) ? true : t.id,
          channelId: null == j || null == (n = j.message) ? true : n.channel_id
        }) : null
      })
    })]
  })
}

function ei(e) {
  let {
    className: t,
    href: n,
    autoPlay: r,
    maxWidth: o,
    maxHeight: a,
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
    className: s()(F.embedVideo, t),
    original: n,
    poster: (0, R.q)(l),
    src: (0, R.q)(c),
    alt: f,
    width: l.width,
    height: l.height,
    naturalHeight: c.height,
    naturalWidth: c.width,
    maxWidth: o,
    maxHeight: a,
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
class eo extends(r = Chunk73800.PureComponent) {
  renderProvider() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      {
        embed: {
          provider: t
        },
        renderLinkComponent: n,
        message: r
      } = this.props;
    return null == exports ? null : this.shouldShowStaticPlaceholder ? (0, Chunk255367.jsx)("div", {
      className: s()(Chunk781452.embedProvider, Chunk781452.embedMargin),
      children: this.renderContentPlaceholder({
        width: 80,
        height: 18
      })
    }) : (0, Chunk255367.jsx)("div", {
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
      }) : (0, Chunk255367.jsx)("span", {
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
        message: r
      } = this.props;
    return null == exports ? null : this.shouldShowStaticPlaceholder ? (0, Chunk255367.jsx)("div", {
      className: s()(Chunk781452.embedAuthor, Chunk781452.embedMargin),
      children: this.renderContentPlaceholder({
        width: 150,
        height: 18
      })
    }) : (0, Chunk255367.jsxs)("div", {
      className: s()(Chunk781452.embedAuthor, Chunk781452.embedMargin),
      children: [null != exports.iconProxyURL ? (0, Chunk255367.jsx)("img", {
        alt: "",
        className: Chunk781452.embedAuthorIcon,
        src: exports.iconProxyURL
      }) : null, null != exports.url ? require({
        className: Chunk781452.embedAuthorNameLink,
        href: exports.url,
        tabIndex: module ? 0 : false,
        children: exports.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == r ? true : r.id,
        channelId: null == r ? true : r.channel_id
      }) : (0, Chunk255367.jsx)("span", {
        className: Chunk781452.embedAuthorName,
        children: exports.name
      })]
    })
  }
  renderContentPlaceholder(e) {
    let {
      width: t,
      height: n
    } = e;
    return (0, i.jsx)(I.ZT, {
      className: F.contentPlaceholder,
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
        message: o
      } = this.props,
      {
        rawTitle: a,
        url: l
      } = exports;
    return null == Chunk120356 ? null : this.shouldShowStaticPlaceholder ? (0, Chunk255367.jsx)("div", {
      className: s()(Chunk781452.embedTitle, Chunk781452.embedMargin),
      children: this.renderContentPlaceholder({
        width: 400,
        height: 30
      })
    }) : (0, Chunk255367.jsx)("div", {
      className: s()(Chunk781452.embedTitle, Chunk781452.embedMargin),
      children: null != Chunk892814 ? require({
        className: Chunk781452.embedTitleLink,
        href: Chunk892814,
        tabIndex: module ? 0 : false,
        children: r(exports, Chunk120356),
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == Chunk73800 ? true : Chunk73800.id,
        channelId: null == Chunk73800 ? true : Chunk73800.channel_id
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
    return null == require ? null : (0, Chunk255367.jsx)("div", {
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
        renderImageComponent: o,
        autoPlayGif: a
      } = this.props,
      {
        sourceMetadata: s
      } = this.state;
    return null == exports ? null : (0, Chunk255367.jsx)(Chunk249458.G.Consumer, {
      children: i => {
        let {
          disableAnimations: l
        } = i;
        return o({
          containerClassName: F.embedThumbnail,
          src: (0, R.q)(t),
          original: t.url,
          width: t.width,
          height: t.height,
          maxWidth: n,
          maxHeight: r,
          shouldLink: e,
          autoPlay: a && !l,
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
        rawValue: o,
        inline: a
      } = t;
      a || null == r || (n.push(r), r = null), null == r && (r = []), r.push([this.props.renderTitle(e, i), this.props.renderDescription(e, o, true)]), 3 !== r.length && a || (n.push(r), r = null)
    }), null != r && require.push(r), (0, Chunk255367.jsx)("div", {
      className: Chunk781452.embedFields,
      children: require.map((e, t) => {
        let {
          length: n
        } = e;
        return e.map((e, r) => {
          let [o, a] = e;
          return (0, i.jsxs)("div", {
            className: F.embedField,
            style: {
              gridColumn: en(r, n)
            },
            children: [(0, i.jsx)("div", {
              className: F.embedFieldName,
              children: o
            }), (0, i.jsx)("div", {
              className: F.embedFieldValue,
              children: a
            })]
          }, "".concat(t, "-").concat(r))
        })
      })
    })
  }
  renderImages() {
    var e, t, n, r;
    let {
      hiddenSpoiler: o = false,
      isVisible: a = true
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
      embed: s
    } = this.props, {
      maxMediaHeight: l
    } = this.state;
    if (null == s.images) return null;
    let [c, u, d, f] = s.images.map(e => this.renderImage({
      hiddenSpoiler: o,
      isVisible: a,
      image: e,
      isGalleryImage: true,
      allImages: s.images
    }));
    return null == Chunk481060 && null == Chunk607070 && null == Chunk399654 && null == Chunk370298 ? null : (0, Chunk255367.jsxs)("div", {
      className: Chunk781452.embedGalleryImagesWrapper,
      style: {
        height: Chunk892814
      },
      children: [(0, Chunk255367.jsxs)("div", {
        className: Chunk781452.embedGallerySide,
        children: [(0, Chunk255367.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(s.images[0].url, s.images[0]),
          children: Chunk481060
        }, 0), null != Chunk370298 && (0, Chunk255367.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (e = s.images[2]) ? true : module.url, s.images[2]),
          children: Chunk399654
        }, 2)]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk781452.embedGallerySide,
        children: [(0, Chunk255367.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (t = s.images[1]) ? true : exports.url, s.images[1]),
          children: Chunk607070
        }, 1), null == Chunk370298 && null != Chunk399654 && (0, Chunk255367.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (n = s.images[2]) ? true : require.url, s.images[2]),
          children: Chunk399654
        }, 2), null != Chunk370298 && (0, Chunk255367.jsx)(Chunk947849.h.Provider, {
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
      channelId: o
    } = e, a = () => {
      this.setState({
        showImageAppMenu: !this.state.showImageAppMenu
      })
    };
    return (0, i.jsx)("div", {
      className: s()(V.hoverButtonGroup, {
        [V.nonMediaMosaicItem]: !r,
        [V.forceShowHover]: this.state.showImageAppMenu
      }),
      children: (0, i.jsx)(f.Z, {
        toggleShowMenu: a,
        showMenu: this.state.showImageAppMenu,
        channelId: o,
        className: s()(V.hoverButton, {
          [V.selected]: this.state.showImageAppMenu
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
        let e = C.Z.getChannel(null == (r = this.props.message) ? true : r.channel_id);
        this.props.showImageRecs && (0, d.a)({
          channelId: null != (i = null == e ? true : e.id) ? i : "",
          location: l.I.CONTEXTUAL_IMAGE,
          withCommands: true
        }), P.default.track(G.rMx.IMAGE_HOVERED, {
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
      hiddenSpoiler: o = false,
      isVisible: a = true,
      image: l,
      isGalleryImage: c = false,
      alt: u = Chunk388032.intl.string(Chunk388032.t.X4IxWF),
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
    if (null == Chunk892814) return null;
    let y = (0, Chunk52824.q)(Chunk892814),
      {
        srcToOnClickOverride: v,
        srcToHandlePreloadImage: I
      } = null == Chunk399654 ? {
        srcToOnClickOverride: {},
        srcToHandlePreloadImage: {}
      } : (0, Chunk207982.G)(Chunk399654.map(e => z(W({}, (0, E.Hv)(e, b, "IMAGE")), {
        original: e.url,
        srcIsAnimated: e.srcIsAnimated
      })), {}, "Embed"),
      T = Chunk124347.ZP.isAnimated({
        src: (0, Chunk52824.q)(Chunk892814),
        original: Chunk892814.url,
        animated: false,
        srcIsAnimated: Chunk892814.srcIsAnimated
      }),
      A = {
        containerClassName: s()(Chunk635477, {
          [Chunk781452.embedMedia]: !Chunk481060,
          [Chunk781452.embedImage]: !Chunk481060,
          [Chunk781452.galleryImage]: Chunk481060
        }),
        imageContainerClassName: Chunk481060 ? Chunk781452.galleryImageContainer : true,
        imageClassName: Chunk481060 ? Chunk781452.embedGalleryImageElement : true,
        src: (0, Chunk52824.q)(Chunk892814),
        alt: null == Chunk892814.description || "" === Chunk892814.description ? Chunk607070 : Chunk892814.description,
        responsive: true,
        limitResponsiveWidth: !Chunk481060,
        width: Chunk892814.width,
        height: Chunk892814.height,
        maxWidth: Chunk95398,
        maxHeight: Chunk936141,
        original: Chunk892814.url,
        shouldLink: Chunk120356,
        disableAltTextDisplay: null == Chunk892814.description || "" === Chunk892814.description,
        hiddenSpoilers: Chunk73800,
        placeholder: Chunk892814.placeholder,
        placeholderVersion: Chunk892814.placeholderVersion,
        srcIsAnimated: Chunk892814.srcIsAnimated,
        mosaicStyleAlt: true
      },
      N = null != (r = null == (e = Chunk892814.url.split(".").pop()) ? true : module.split("?")[0]) ? r : "";
    "jpg" === Chunk400266 && (N = "jpeg");
    let C = null != Chunk892814 && !Chunk124347.uo.test(null == Chunk892814 ? true : Chunk892814.url) && !(Chunk892814.srcIsAnimated && Chunk124347.YG.test(null == Chunk892814 ? true : Chunk892814.url)) && !(Chunk892814.srcIsAnimated && Chunk124347.FH.test(null == Chunk892814 ? true : Chunk892814.url)),
      P = true !== this.props.isSearchResult && Chunk120356 && (null == (t = this.props.message) ? true : exports.channel_id) != null && (null == (n = this.props.message) ? true : require.channel_id) !== true && Chunk592125 && !ea(Chunk892814) && null != Chunk400266;
    return (0, Chunk255367.jsx)(Chunk947849.h.Consumer, {
      children: e => (0, i.jsx)(U.G.Consumer, {
        children: t => {
          let {
            disableAnimations: n
          } = t;
          return f(z(W({}, A), {
            autoPlay: p && !n && !o,
            renderAccessory: T ? e : null,
            handlePreloadImage: I[y],
            onClick: v[y],
            onMouseEnter: () => this.handleImageHover(true, l, P),
            onMouseLeave: () => this.handleImageHover(false, l, P),
            renderAdjacentContent: () => {
              var e, t;
              returntrue === this.props.showImageRecs && P ? this.renderImageHoverButtons({
                mimeType: ["image", N],
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
        thumbnail: o,
        video: a,
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
    if (null == r || null == Chunk73800) return null;
    if (module) return null == Chunk120356 ? null : (0, Chunk255367.jsx)(Chunk249458.G.Consumer, {
      children: e => {
        let {
          disableAnimations: s
        } = e;
        return (0, i.jsx)(ei, {
          className: F.embedMedia,
          href: r,
          thumbnail: o,
          video: a,
          maxWidth: p,
          maxHeight: h,
          responsive: true,
          autoPlay: !n && f && !s && t,
          renderImageComponent: c,
          playable: t,
          hiddenSpoilers: n,
          disableAltTextDisplay: null != _,
          placeholder: a.placeholder,
          placeholderVersion: a.placeholderVersion,
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
    return (0, Chunk255367.jsx)(er, {
      className: Chunk781452.embedMedia,
      href: r,
      allowFullScreen: Chunk399654,
      thumbnail: Chunk73800,
      video: Chunk120356,
      provider: null == s ? true : s.name,
      maxWidth: Chunk715697,
      maxHeight: Chunk95398,
      responsive: true,
      renderImageComponent: Chunk481060,
      renderVideoComponent: Chunk892814,
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
      footer: e,
      timestamp: t
    } = this.props.embed;
    if (null != module) {
      let n = null != module.iconProxyURL && "" !== module.iconProxyURL ? module.iconProxyURL : module.iconURL;
      return (0, Chunk255367.jsxs)("div", {
        className: s()(Chunk781452.embedFooter, Chunk781452.embedMargin),
        children: [null != require ? (0, Chunk255367.jsx)("img", {
          alt: "",
          className: Chunk781452.embedFooterIcon,
          src: require
        }) : null, (0, Chunk255367.jsxs)("span", {
          className: Chunk781452.embedFooterText,
          children: [module.text, null != module.text && null != exports ? (0, Chunk255367.jsx)("span", {
            className: Chunk781452.embedFooterSeparator,
            children: "•"
          }) : null, null != exports ? (0, Chunk55935.Y4)(exports) : null]
        })]
      })
    }
    if (null != exports) return (0, Chunk255367.jsx)("div", {
      className: s()(Chunk781452.embedFooter, Chunk781452.embedMargin),
      children: (0, Chunk255367.jsx)("span", {
        className: Chunk781452.embedFooterText,
        children: (0, Chunk55935.Y4)(exports)
      })
    })
  }
  renderStaticPlaceholderMedia() {
    var e;
    let {
      className: t,
      embed: n
    } = this.props, {
      maxMediaWidth: r,
      maxMediaHeight: o
    } = this.state, a = null != (e = require.image) ? module : require.video;
    if (null == Chunk120356) return null;
    let {
      width: s,
      height: l
    } = (0, Chunk956664.Tj)({
      width: Chunk120356.width,
      height: Chunk120356.height,
      maxWidth: r,
      maxHeight: Chunk73800
    });
    return (0, Chunk255367.jsx)(Chunk481060.Eep, {
      className: exports,
      readyState: Chunk981631.zo9.READY,
      src: "",
      width: s,
      height: Chunk892814,
      maxWidth: r,
      maxHeight: Chunk73800,
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
      o = this.renderProvider(Chunk255367),
      a = this.renderAuthor(Chunk255367),
      s = this.renderTitle(Chunk255367);
    switch (require.type) {
      case Chunk981631.hBH.IMAGE:
      case Chunk981631.hBH.VIDEO:
      case Chunk981631.hBH.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let l = this.renderFields();
    r || (t = this.renderMedia(!Chunk255367));
    let c = this.renderFooter(),
      u = null == exports;
    return require.type === Chunk981631.hBH.RICH && (u = null == require.video), {
      provider: Chunk73800,
      author: Chunk120356,
      title: s,
      description: module,
      thumbnail: !r && Chunk607070 ? this.renderThumbnail(Chunk255367) : null,
      fields: Chunk892814,
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
        thumbnail: o
      }
    } = this.props, {
      maxMediaWidth: a,
      maxMediaHeight: s
    } = this.state, l = null != t ? t : r;
    if (null == l) return;
    let {
      width: c
    } = (0, x.Tj)({
      width: l.width,
      height: l.height,
      maxWidth: a,
      maxHeight: s
    });
    if (!e && (i === G.hBH.VIDEO || c >= 300)) return c + q;
    if (i === G.hBH.RICH && true !== n) return $;
    if (i === G.hBH.GIFV) {
      var u, d, f, _;
      let {
        width: e
      } = (0, x.Tj)({
        width: null != (d = null != (u = null == r ? true : r.width) ? u : null == o ? true : o.width) ? d : 0,
        height: null != (_ = null != (f = null == r ? true : r.height) ? f : null == o ? true : o.height) ? _ : 0,
        maxWidth: a,
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
      minWidth: Q,
      minHeight: J
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
      className: F.embedSuppressButton,
      onClick: e,
      "aria-label": Z.intl.string(Z.t.GT3fNz),
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
        video: o,
        type: a,
        rawDescription: s
      }
    } = this.props, {
      maxMediaWidth: l,
      maxMediaHeight: c
    } = this.state;
    if (!this.usesJustifiedAutoStyle()) return;
    let d = e ? true : this.getMaxWidth(false);
    if (true === d && true === i && a !== G.hBH.RICH) {
      let e = null != r ? r : o;
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
    let f = et / (u.Z.fontScale / 100),
      _ = (null != s ? (0, M.TZ)(s) : 0) >= f,
      p = (null != (n = null == s ? true : s.split("\n").length) ? n : 0) >= ee,
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
    return null != exports.provider && Chunk401419.j.includes(exports.provider.name) ? (0, Chunk255367.jsx)(Chunk401419.Z, {
      embed: exports,
      className: r
    }) : (0, Chunk785992.Z)(exports) ? (0, Chunk255367.jsx)(Chunk400266.Z, {
      embed: exports,
      className: r
    }) : (null == (e = exports.provider) ? true : module.name) === "Amazon Music" && exports.type === Chunk981631.hBH.RICH ? (0, Chunk255367.jsx)(Chunk624195.Z, {
      embed: exports,
      className: r
    }) : (0, Chunk635477.Z)(exports) ? (0, Chunk255367.jsx)(Chunk715697.Z, {
      embed: exports,
      className: r
    }) : this.isInline() ? null != require ? (0, Chunk255367.jsx)(Chunk95398.ZP, {
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
    }) : this.renderInlineMediaEmbed() : null != require ? (0, Chunk255367.jsx)(Chunk95398.ZP, {
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
    super(...e), t = this, Y(this, "state", W({
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
    }, (0, L.vP)(this.props.embed))), Y(this, "onReveal", () => {
      this.setState({
        isVisible: true
      })
    }), Y(this, "onToggleObscurity", () => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }), Y(this, "renderInlineMediaEmbed", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        {
          obscureReason: n,
          className: r
        } = t.props,
        o = t.getMaxWidth(true);
      return (0, i.jsx)("div", {
        "aria-hidden": e,
        className: s()(F.inlineMediaEmbed, r, {
          [F.spoilerAttachment]: n === m.wk.SPOILER,
          [F.hiddenExplicitAttachment]: t.shouldObscure,
          [F.isHidden]: e,
          [F.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        style: {
          maxWidth: o
        },
        children: t.renderMedia(e)
      })
    }), Y(this, "renderEmbedContent", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        {
          className: n,
          onSuppressEmbed: r,
          obscureReason: o
        } = t.props,
        {
          provider: a,
          author: l,
          title: c,
          description: u,
          fields: d,
          thumbnail: f,
          media: _,
          footer: p
        } = t.renderAll();
      return (0, i.jsx)("article", {
        className: s()(n, F.embedFull, H.markup, {
          [F.isHidden]: e,
          [F.spoilerEmbed]: o === m.wk.SPOILER,
          [F.hiddenExplicitEmbed]: t.shouldObscure,
          [F.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        "aria-hidden": e,
        style: {
          borderLeftColor: t.getEmbedColor(e),
          maxWidth: t.getMaxWidth(false)
        },
        children: (0, i.jsx)("div", {
          className: F.gridContainer,
          children: (0, i.jsxs)("div", {
            className: s()({
              [F.grid]: true,
              [F.hasThumbnail]: null != f
            }),
            children: [null != r ? t.renderSuppressButton(r) : null, a, l, c, u, d, _, f, p]
          })
        })
      })
    })
  }
}

function ea(e) {
  return null != e && (e.width <= B.OF || e.height <= B.OF)
}
Y(eo, "defaultProps", {
  hideMedia: false,
  allowFullScreen: true,
  maxThumbnailWidth: 80,
  maxThumbnailHeight: 80,
  embedIndex: 0
})