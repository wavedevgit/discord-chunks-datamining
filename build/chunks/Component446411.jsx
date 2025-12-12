/** Chunk was on web.js **/
/** chunk id: 446411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BC: () => et,
  ZP: () => er
}), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./35282.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk635477 = require("./635477.js"),
  Chunk715697 = require("./715697.jsx"),
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
  Chunk411405 = require("./411405.jsx"),
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
  Chunk838983 = require("./838983.js"),
  Chunk960324 = require("./960324.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let W = 32,
  K = 12,
  z = 150,
  q = 144,
  Q = 520,
  X = 5,
  J = 150;

function $(e, t) {
  let n = K / t,
    r = e * n;
  return "".concat(r + 1, " / ").concat(r + n + 1)
}

function ee(e) {
  let t = x.Z.toURLSafe(e);
  return null == t ? e : (t.searchParams.set("format", "png"), t.toString())
}

function et(e) {
  var t, n;
  let {
    className: r,
    iframeWrapperClassName: o,
    maxWidth: l,
    maxHeight: c,
    thumbnail: u,
    video: d,
    provider: f,
    allowFullScreen: p = true,
    responsive: _ = false,
    renderImageComponent: m,
    renderVideoComponent: h,
    renderLinkComponent: g,
    playable: b = true,
    autoPlay: y = false,
    autoMute: O,
    volume: v,
    onPlay: S,
    onPause: I,
    onEnded: T,
    onControlsHide: A,
    onControlsShow: P,
    onVolumeChange: R,
    onMute: D,
    href: x,
    placeholder: j,
    placeholderVersion: M,
    sourceMetadata: U
  } = e, [G, F] = a.useState(y), B = null != d && null == d.proxyURL, V = a.useCallback(() => F(false), [F]), H = e => {
    e.preventDefault(), e.stopPropagation(), null == S || S(false), F(true), B && (N.S.dispatch(k.CkL.VIDEO_EMBED_PLAYBACK_STARTED), N.S.subscribeOnce(k.CkL.VIDEO_EMBED_PLAYBACK_STARTED, V))
  };
  a.useEffect(() => () => {
    B && N.S.unsubscribe(k.CkL.VIDEO_EMBED_PLAYBACK_STARTED, V)
  }, [B, V]);
  let {
    width: Y,
    height: W
  } = u;
  null != d && (Y = d.width, W = d.height);
  let K = (0, w.Tj)({
    width: Y,
    height: W,
    maxWidth: l,
    maxHeight: c
  });
  Y = Math.max(K.width, z), W = Math.max(K.height, q);
  let Q = (0, C.q)(u);
  if (null != d && null != d.proxyURL) return (0, i.jsx)("div", {
    className: s()(Z.embedVideo, r),
    children: h({
      poster: Q,
      src: d.proxyURL,
      placeholder: j,
      placeholderVersion: M,
      width: Y,
      height: W,
      responsive: _,
      autoPlay: y,
      onEnded: T,
      naturalWidth: d.width,
      naturalHeight: d.height,
      onVolumeChange: R,
      playable: b,
      autoMute: O,
      volume: v,
      onPlay: S,
      onPause: I,
      onMute: D,
      onControlsHide: A,
      onControlsShow: P,
      sourceMetadata: U
    })
  });
  if (G && null != d) {
    let e, t = true === O || "function" == typeof O && O(),
      n = {
        width: Y,
        height: W
      },
      a = {
        width: Y,
        height: W
      };
    if (_) {
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
        className: s()(Z.embedVideo, o),
        style: a,
        children: (0, i.jsx)(L.ZP, {
          provider: f,
          src: d.url,
          style: e,
          width: Y,
          height: W,
          allowFullScreen: p,
          autoMute: t
        })
      })
    })
  }
  return (0, i.jsxs)("div", {
    className: s()(Z.embedVideo, r),
    style: _ ? {
      maxWidth: Y
    } : {
      width: Y,
      height: W
    },
    children: [m({
      src: Q,
      width: Y,
      height: W,
      maxWidth: Y,
      maxHeight: W,
      responsive: _,
      containerClassName: Z.embedVideoImageComponent,
      imageClassName: Z.embedVideoImageComponentInner,
      placeholder: j,
      placeholderVersion: M,
      onClick: b && null != d ? H : null,
      sourceMetadata: U,
      analyticsSource: "EmbedVideo"
    }), (0, i.jsx)("div", {
      className: Z.embedVideoActions,
      children: (0, i.jsx)("div", {
        className: Z.centerContent,
        children: b ? (0, i.jsx)(E.Z, {
          onPlay: null != d ? H : null,
          externalURL: x,
          renderLinkComponent: g,
          messageId: null == U || null == (t = U.message) ? true : t.id,
          channelId: null == U || null == (n = U.message) ? true : n.channel_id
        }) : null
      })
    })]
  })
}

function en(e) {
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
    disableAltTextDisplay: p = false,
    playable: _ = true,
    hiddenSpoilers: m,
    placeholder: g,
    placeholderVersion: E,
    sourceMetadata: b
  } = e;
  return (0, i.jsx)(h.Z, {
    className: s()(Z.embedVideo, t),
    original: n,
    poster: (0, C.q)(l),
    src: (0, C.q)(c),
    alt: f,
    width: l.width,
    height: l.height,
    naturalHeight: c.height,
    naturalWidth: c.width,
    maxWidth: a,
    maxHeight: o,
    responsive: d,
    autoPlay: r,
    playable: _,
    renderImageComponent: u,
    hiddenSpoilers: m,
    disableAltTextDisplay: p,
    placeholder: g,
    placeholderVersion: E,
    sourceMetadata: b
  })
}
class er extends(r = Chunk473749.PureComponent) {
  renderProvider() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      {
        embed: {
          provider: t
        },
        renderLinkComponent: n,
        message: r
      } = this.props;
    return null == exports ? null : this.shouldShowStaticPlaceholder ? (0, Chunk54381.jsx)("div", {
      className: s()(Chunk838983.embedProvider, Chunk838983.embedMargin),
      children: this.renderContentPlaceholder({
        width: 80,
        height: 18
      })
    }) : (0, Chunk54381.jsx)("div", {
      className: s()(Chunk838983.embedProvider, Chunk838983.embedMargin),
      children: null != exports.url ? require({
        className: Chunk838983.embedLink,
        href: exports.url,
        tabIndex: module ? 0 : false,
        children: exports.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == r ? true : r.id,
        channelId: null == r ? true : r.channel_id
      }) : (0, Chunk54381.jsx)("span", {
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
    return null == exports ? null : this.shouldShowStaticPlaceholder ? (0, Chunk54381.jsx)("div", {
      className: s()(Chunk838983.embedAuthor, Chunk838983.embedMargin),
      children: this.renderContentPlaceholder({
        width: 150,
        height: 18
      })
    }) : (0, Chunk54381.jsx)(Chunk249458.G.Consumer, {
      children: o => {
        let {
          disableAnimations: l
        } = o;
        return (0, i.jsxs)("div", {
          className: s()(Z.embedAuthor, Z.embedMargin),
          children: [null != t.iconProxyURL ? (0, i.jsx)("img", {
            alt: "",
            className: Z.embedAuthorIcon,
            src: a && !l ? t.iconProxyURL : ee(t.iconProxyURL)
          }) : null, null != t.url ? n({
            className: Z.embedAuthorNameLink,
            href: t.url,
            tabIndex: e ? 0 : false,
            children: t.name,
            target: "_blank",
            rel: "noreferrer noopener",
            messageId: null == r ? true : r.id,
            channelId: null == r ? true : r.channel_id
          }) : (0, i.jsx)("span", {
            className: Z.embedAuthorName,
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
    return (0, i.jsx)(y.ZT, {
      className: Z.contentPlaceholder,
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
    return null == Chunk120356 ? null : this.shouldShowStaticPlaceholder ? (0, Chunk54381.jsx)("div", {
      className: s()(Chunk838983.embedTitle, Chunk838983.embedMargin),
      children: this.renderContentPlaceholder({
        width: 400,
        height: 30
      })
    }) : (0, Chunk54381.jsx)("div", {
      className: s()(Chunk838983.embedTitle, Chunk838983.embedMargin),
      children: null != Chunk481060 ? require({
        className: Chunk838983.embedTitleLink,
        href: Chunk481060,
        tabIndex: module ? 0 : false,
        children: r(exports, Chunk120356),
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == Chunk473749 ? true : Chunk473749.id,
        channelId: null == Chunk473749 ? true : Chunk473749.channel_id
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
    return null == require ? null : (0, Chunk54381.jsx)("div", {
      className: s()(Chunk838983.embedDescription, Chunk838983.embedMargin),
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
    return null == exports ? null : (0, Chunk54381.jsx)(Chunk249458.G.Consumer, {
      children: i => {
        let {
          disableAnimations: l
        } = i;
        return a({
          containerClassName: Z.embedThumbnail,
          src: (0, C.q)(t),
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
    }), null != r && require.push(r), (0, Chunk54381.jsx)("div", {
      className: Chunk838983.embedFields,
      children: require.map((e, t) => {
        let {
          length: n
        } = e;
        return e.map((e, r) => {
          let [a, o] = e;
          return (0, i.jsxs)("div", {
            className: Z.embedField,
            style: {
              gridColumn: $(r, n)
            },
            children: [(0, i.jsx)("div", {
              className: Z.embedFieldName,
              children: a
            }), (0, i.jsx)("div", {
              className: Z.embedFieldValue,
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
    return null == Chunk607070 && null == Chunk635477 && null == Chunk715697 && null == Chunk936141 ? null : (0, Chunk54381.jsxs)("div", {
      className: Chunk838983.embedGalleryImagesWrapper,
      style: {
        height: Chunk481060
      },
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk838983.embedGallerySide,
        children: [(0, Chunk54381.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(s.images[0].url, s.images[0]),
          children: Chunk607070
        }, 0), null != Chunk936141 && (0, Chunk54381.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (e = s.images[2]) ? true : module.url, s.images[2]),
          children: Chunk715697
        }, 2)]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk838983.embedGallerySide,
        children: [(0, Chunk54381.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (t = s.images[1]) ? true : exports.url, s.images[1]),
          children: Chunk635477
        }, 1), null == Chunk936141 && null != Chunk715697 && (0, Chunk54381.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (n = s.images[2]) ? true : require.url, s.images[2]),
          children: Chunk715697
        }, 2), null != Chunk936141 && (0, Chunk54381.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (r = s.images[3]) ? true : r.url, s.images[3]),
          children: Chunk936141
        }, 3)]
      })]
    })
  }
  handleImageHover() {
    var e;
    let t = Chunk592125.Z.getChannel(null == (e = this.props.message) ? true : module.channel_id);
    Chunk626135.default.track(Chunk981631.rMx.IMAGE_HOVERED, {
      guild_id: null == exports ? true : exports.guild_id,
      channel_id: null == exports ? true : exports.id,
      image_recommendations_shown: false
    })
  }
  renderImage() {
    var e, t;
    let {
      hiddenSpoiler: n = false,
      isVisible: r = true,
      image: a,
      isGalleryImage: o = false,
      alt: l = Chunk388032.intl.string(Chunk388032.t.X4IxWL),
      allImages: c = null
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
      renderImageComponent: u,
      className: d,
      autoPlayGif: f
    } = this.props, {
      maxMediaWidth: m,
      maxMediaHeight: h,
      sourceMetadata: E
    } = this.state;
    if (null == Chunk473749) return null;
    let y = (0, Chunk52824.q)(Chunk473749),
      {
        srcToOnClickOverride: O,
        srcToHandlePreloadImage: v
      } = null == Chunk607070 ? {
        srcToOnClickOverride: {},
        srcToHandlePreloadImage: {}
      } : (0, Chunk120324.G)(Chunk607070.map(e => Y(V({}, (0, _.Hv)(e, E, "IMAGE")), {
        original: e.url,
        srcIsAnimated: e.srcIsAnimated
      })), {}, "Embed"),
      S = Chunk124347.ZP.isAnimated({
        src: (0, Chunk52824.q)(Chunk473749),
        original: Chunk473749.url,
        animated: false,
        srcIsAnimated: Chunk473749.srcIsAnimated
      }),
      I = {
        containerClassName: s()(Chunk715697, {
          [Chunk838983.embedMedia]: !Chunk120356,
          [Chunk838983.embedImage]: !Chunk120356,
          [Chunk838983.galleryImage]: Chunk120356
        }),
        imageContainerClassName: Chunk120356 ? Chunk838983.galleryImageContainer : true,
        imageClassName: Chunk120356 ? Chunk838983.embedGalleryImageElement : true,
        src: (0, Chunk52824.q)(Chunk473749),
        alt: null == Chunk473749.description || "" === Chunk473749.description ? Chunk481060 : Chunk473749.description,
        responsive: true,
        limitResponsiveWidth: !Chunk120356,
        width: Chunk473749.width,
        height: Chunk473749.height,
        maxWidth: Chunk624195,
        maxHeight: Chunk44824,
        original: Chunk473749.url,
        shouldLink: r,
        disableAltTextDisplay: null == Chunk473749.description || "" === Chunk473749.description,
        hiddenSpoilers: require,
        placeholder: Chunk473749.placeholder,
        placeholderVersion: Chunk473749.placeholderVersion,
        srcIsAnimated: Chunk473749.srcIsAnimated,
        mosaicStyleAlt: true
      },
      T = null != (t = null == (e = Chunk473749.url.split(".").pop()) ? true : module.split("?")[0]) ? exports : "";
    return "jpg" === Chunk592125 && (T = "jpeg"), (0, Chunk54381.jsx)(Chunk947849.h.Consumer, {
      children: e => (0, i.jsx)(M.G.Consumer, {
        children: t => {
          let {
            disableAnimations: r
          } = t;
          return u(Y(V({}, I), {
            autoPlay: f && !r && !n,
            renderAccessory: S ? e : null,
            handlePreloadImage: v[y],
            onClick: O[y],
            onMouseEnter: () => this.handleImageHover(),
            sourceMetadata: E,
            analyticsSource: "Embed"
          }))
        }
      }, a.url)
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
      obscureReason: p
    } = this.props, {
      maxMediaWidth: _,
      maxMediaHeight: m,
      sourceMetadata: h
    } = this.state;
    if (null == r || null == Chunk473749) return null;
    if (module) return null == Chunk120356 ? null : (0, Chunk54381.jsx)(Chunk249458.G.Consumer, {
      children: e => {
        let {
          disableAnimations: s
        } = e;
        return (0, i.jsx)(en, {
          className: Z.embedMedia,
          href: r,
          thumbnail: a,
          video: o,
          maxWidth: _,
          maxHeight: m,
          responsive: true,
          autoPlay: !n && f && !s && t,
          renderImageComponent: c,
          playable: t,
          hiddenSpoilers: n,
          disableAltTextDisplay: null != p,
          placeholder: o.placeholder,
          placeholderVersion: o.placeholderVersion,
          sourceMetadata: h
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
    return (0, Chunk54381.jsx)(et, {
      className: Chunk838983.embedMedia,
      href: r,
      allowFullScreen: Chunk715697,
      thumbnail: Chunk473749,
      video: Chunk120356,
      provider: null == s ? true : s.name,
      maxWidth: Chunk768494,
      maxHeight: Chunk624195,
      responsive: true,
      renderImageComponent: Chunk607070,
      renderVideoComponent: Chunk481060,
      renderLinkComponent: Chunk635477,
      onControlsShow: Chunk124347,
      onControlsHide: Chunk283756,
      playable: exports && !require,
      placeholder: null == Chunk120356 ? true : Chunk120356.placeholder,
      placeholderVersion: null == Chunk120356 ? true : Chunk120356.placeholderVersion,
      sourceMetadata: Chunk44824
    })
  }
  renderFooter() {
    let {
      autoPlayGif: e
    } = this.props, {
      footer: t,
      timestamp: n
    } = this.props.embed;
    return null != exports ? (0, Chunk54381.jsx)(Chunk249458.G.Consumer, {
      children: r => {
        let {
          disableAnimations: a
        } = r;
        return (0, i.jsxs)("div", {
          className: s()(Z.embedFooter, Z.embedMargin),
          children: [null != t.iconProxyURL && "" !== t.iconProxyURL ? (0, i.jsx)("img", {
            alt: "",
            className: Z.embedFooterIcon,
            src: e && !a ? t.iconProxyURL : ee(t.iconProxyURL)
          }) : null, (0, i.jsxs)("span", {
            className: Z.embedFooterText,
            children: [t.text, null != t.text && null != n ? (0, i.jsx)("span", {
              className: Z.embedFooterSeparator,
              children: "•"
            }) : null, null != n ? (0, P.Y4)(n) : null]
          })]
        })
      }
    }) : null != require ? (0, Chunk54381.jsx)("div", {
      className: s()(Chunk838983.embedFooter, Chunk838983.embedMargin),
      children: (0, Chunk54381.jsx)("span", {
        className: Chunk838983.embedFooterText,
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
      height: c
    } = (0, Chunk956664.Tj)({
      width: Chunk120356.width,
      height: Chunk120356.height,
      maxWidth: r,
      maxHeight: Chunk473749
    });
    return (0, Chunk54381.jsx)(Chunk481060.Eep, {
      className: exports,
      readyState: Chunk981631.zo9.READY,
      src: "",
      width: s,
      height: Chunk607070,
      maxWidth: r,
      maxHeight: Chunk473749,
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
      a = this.renderProvider(Chunk54381),
      o = this.renderAuthor(Chunk54381),
      s = this.renderTitle(Chunk54381);
    switch (require.type) {
      case Chunk981631.hBH.IMAGE:
      case Chunk981631.hBH.VIDEO:
      case Chunk981631.hBH.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let l = this.renderFields();
    r || (t = this.renderMedia(!Chunk54381));
    let c = this.renderFooter(),
      u = null == exports;
    return require.type === Chunk981631.hBH.RICH && (u = null == require.video), {
      provider: Chunk473749,
      author: Chunk120356,
      title: s,
      description: module,
      thumbnail: !r && Chunk635477 ? this.renderThumbnail(Chunk54381) : null,
      fields: Chunk481060,
      media: exports,
      footer: Chunk607070
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
    } = (0, w.Tj)({
      width: l.width,
      height: l.height,
      maxWidth: o,
      maxHeight: s
    });
    if (!e && (i === k.hBH.VIDEO || c >= 300)) return c + W;
    if (i === k.hBH.RICH && true !== n) return Q;
    if (i === k.hBH.GIFV) {
      var u, d, f, p;
      let {
        width: e
      } = (0, w.Tj)({
        width: null != (d = null != (u = null == r ? true : r.width) ? u : null == a ? true : a.width) ? d : 0,
        height: null != (p = null != (f = null == r ? true : r.height) ? f : null == a ? true : a.height) ? p : 0,
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
      minWidth: z,
      minHeight: q
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
    return (0, i.jsx)(l.P3F, {
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      className: Z.embedSuppressButton,
      onClick: e,
      "aria-label": G.intl.string(G.t.GT3fNz),
      children: (0, i.jsx)(l.Dio, {
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
      maxMediaHeight: u
    } = this.state;
    if (!this.usesJustifiedAutoStyle()) return;
    let d = e ? true : this.getMaxWidth(false);
    if (true === d && true === i && o !== k.hBH.RICH) {
      let e = null != r ? r : a;
      if (true !== e) {
        let {
          minWidth: n,
          minHeight: r
        } = null != (t = this.getMinSize()) ? t : {}, {
          width: i
        } = (0, w.Tj)({
          width: e.width,
          height: e.height,
          maxWidth: l,
          maxHeight: u,
          minWidth: n,
          minHeight: r
        });
        d = i
      }
    }
    let f = J / (c.Z.fontScale / 100),
      p = (null != s ? (0, D.TZ)(s) : 0) >= f,
      _ = (null != (n = null == s ? true : s.split("\n").length) ? n : 0) >= X,
      m = p || _;
    return {
      maxWidth: true === d || m ? "max-content" : d,
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
    return null != exports.provider && Chunk401419.j.includes(exports.provider.name) ? (0, Chunk54381.jsx)(Chunk401419.Z, {
      embed: exports,
      className: r
    }) : (0, Chunk785992.Z)(exports) ? (0, Chunk54381.jsx)(Chunk400266.Z, {
      embed: exports,
      className: r
    }) : (null == (e = exports.provider) ? true : module.name) === "Amazon Music" && exports.type === Chunk981631.hBH.RICH ? (0, Chunk54381.jsx)(Chunk624195.Z, {
      embed: exports,
      className: r
    }) : (0, Chunk635477.Z)(exports) ? (0, Chunk54381.jsx)(Chunk715697.Z, {
      embed: exports,
      className: r
    }) : this.isInline() ? null != require ? (0, Chunk54381.jsx)(Chunk411405.ZP, {
      type: Chunk411405.ZP.Types.ATTACHMENT,
      reason: require,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      isSingleMosaicItem: true,
      containerStyles: this.getSpoilerStyles(true),
      obscurityControlClassName: s()({
        [Chunk838983.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown
      }),
      children: this.renderInlineMediaEmbed
    }) : this.renderInlineMediaEmbed() : null != require ? (0, Chunk54381.jsx)(Chunk411405.ZP, {
      type: Chunk411405.ZP.Types.EMBED,
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
    super(...e), t = this, B(this, "state", V({
      isVisible: null == this.props.obscureReason,
      videoControlsShown: false,
      sourceMetadata: {
        message: this.props.message,
        identifier: {
          type: "embed",
          embedIndex: this.props.embedIndex
        }
      }
    }, (0, R.vP)(this.props.embed))), B(this, "onReveal", () => {
      this.setState({
        isVisible: true
      })
    }), B(this, "onToggleObscurity", () => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }), B(this, "renderInlineMediaEmbed", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        {
          obscureReason: n,
          className: r
        } = t.props,
        a = t.getMaxWidth(true);
      return (0, i.jsx)("div", {
        "aria-hidden": e,
        className: s()(Z.inlineMediaEmbed, r, {
          [Z.spoilerAttachment]: n === f.wk.SPOILER,
          [Z.hiddenExplicitAttachment]: t.shouldObscure,
          [Z.isHidden]: e,
          [Z.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        style: {
          maxWidth: a
        },
        children: t.renderMedia(e)
      })
    }), B(this, "renderEmbedContent", function() {
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
          thumbnail: p,
          media: _,
          footer: m
        } = t.renderAll();
      return (0, i.jsx)("article", {
        className: s()(n, Z.embedFull, F.markup, {
          [Z.isHidden]: e,
          [Z.spoilerEmbed]: a === f.wk.SPOILER,
          [Z.hiddenExplicitEmbed]: t.shouldObscure,
          [Z.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        "aria-hidden": e,
        style: {
          borderLeftColor: t.getEmbedColor(e),
          maxWidth: t.getMaxWidth(false)
        },
        children: (0, i.jsx)("div", {
          className: Z.gridContainer,
          children: (0, i.jsxs)("div", {
            className: s()({
              [Z.grid]: true,
              [Z.hasThumbnail]: null != p
            }),
            children: [null != r ? t.renderSuppressButton(r) : null, o, l, c, u, d, _, p, m]
          })
        })
      })
    })
  }
}
B(er, "defaultProps", {
  hideMedia: false,
  allowFullScreen: true,
  maxThumbnailWidth: 80,
  maxThumbnailHeight: 80,
  embedIndex: 0
})