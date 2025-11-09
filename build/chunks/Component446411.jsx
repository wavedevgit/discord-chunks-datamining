/** Chunk was on web.js **/
/** chunk id: 446411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BC: () => et,
  ZP: () => er
}), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./35282.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk111925 = require("./111925.js"),
  Chunk602009 = require("./602009.js");

function F(e, t, n) {
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
      F(e, t, n[t])
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
  X = 520,
  Q = 5,
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
    allowFullScreen: _ = true,
    responsive: p = false,
    renderImageComponent: h,
    renderVideoComponent: m,
    renderLinkComponent: g,
    playable: b = true,
    autoPlay: y = false,
    autoMute: O,
    volume: v,
    onPlay: I,
    onPause: S,
    onEnded: T,
    onControlsHide: C,
    onControlsShow: R,
    onVolumeChange: P,
    onMute: D,
    href: x,
    placeholder: M,
    placeholderVersion: j,
    sourceMetadata: U
  } = e, [G, Z] = a.useState(y), F = null != d && null == d.proxyURL, V = a.useCallback(() => Z(false), [Z]), H = e => {
    e.preventDefault(), e.stopPropagation(), null == I || I(false), Z(true), F && (N.S.dispatch(k.CkL.VIDEO_EMBED_PLAYBACK_STARTED), N.S.subscribeOnce(k.CkL.VIDEO_EMBED_PLAYBACK_STARTED, V))
  };
  a.useEffect(() => () => {
    F && N.S.unsubscribe(k.CkL.VIDEO_EMBED_PLAYBACK_STARTED, V)
  }, [F, V]);
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
  let X = (0, A.q)(u);
  if (null != d && null != d.proxyURL) return (0, i.jsx)("div", {
    className: s()(B.embedVideo, r),
    children: m({
      poster: X,
      src: d.proxyURL,
      placeholder: M,
      placeholderVersion: j,
      width: Y,
      height: W,
      responsive: p,
      autoPlay: y,
      onEnded: T,
      naturalWidth: d.width,
      naturalHeight: d.height,
      onVolumeChange: P,
      playable: b,
      autoMute: O,
      volume: v,
      onPlay: I,
      onPause: S,
      onMute: D,
      onControlsHide: C,
      onControlsShow: R,
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
        className: s()(B.embedVideo, o),
        style: a,
        children: (0, i.jsx)(L.ZP, {
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
    className: s()(B.embedVideo, r),
    style: p ? {
      maxWidth: Y
    } : {
      width: Y,
      height: W
    },
    children: [h({
      src: X,
      width: Y,
      height: W,
      maxWidth: Y,
      maxHeight: W,
      responsive: p,
      containerClassName: B.embedVideoImageComponent,
      imageClassName: B.embedVideoImageComponentInner,
      placeholder: M,
      placeholderVersion: j,
      onClick: b && null != d ? H : null,
      sourceMetadata: U,
      analyticsSource: "EmbedVideo"
    }), (0, i.jsx)("div", {
      className: B.embedVideoActions,
      children: (0, i.jsx)("div", {
        className: B.centerContent,
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
    disableAltTextDisplay: _ = false,
    playable: p = true,
    hiddenSpoilers: h,
    placeholder: g,
    placeholderVersion: E,
    sourceMetadata: b
  } = e;
  return (0, i.jsx)(m.Z, {
    className: s()(B.embedVideo, t),
    original: n,
    poster: (0, A.q)(l),
    src: (0, A.q)(c),
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
    placeholder: g,
    placeholderVersion: E,
    sourceMetadata: b
  })
}
class er extends(r = Chunk647438.PureComponent) {
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
      className: s()(Chunk111925.embedProvider, Chunk111925.embedMargin),
      children: this.renderContentPlaceholder({
        width: 80,
        height: 18
      })
    }) : (0, Chunk951288.jsx)("div", {
      className: s()(Chunk111925.embedProvider, Chunk111925.embedMargin),
      children: null != exports.url ? require({
        className: Chunk111925.embedLink,
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
      className: s()(Chunk111925.embedAuthor, Chunk111925.embedMargin),
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
          className: s()(B.embedAuthor, B.embedMargin),
          children: [null != t.iconProxyURL ? (0, i.jsx)("img", {
            alt: "",
            className: B.embedAuthorIcon,
            src: a && !l ? t.iconProxyURL : ee(t.iconProxyURL)
          }) : null, null != t.url ? n({
            className: B.embedAuthorNameLink,
            href: t.url,
            tabIndex: e ? 0 : false,
            children: t.name,
            target: "_blank",
            rel: "noreferrer noopener",
            messageId: null == r ? true : r.id,
            channelId: null == r ? true : r.channel_id
          }) : (0, i.jsx)("span", {
            className: B.embedAuthorName,
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
      className: B.contentPlaceholder,
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
      className: s()(Chunk111925.embedTitle, Chunk111925.embedMargin),
      children: this.renderContentPlaceholder({
        width: 400,
        height: 30
      })
    }) : (0, Chunk951288.jsx)("div", {
      className: s()(Chunk111925.embedTitle, Chunk111925.embedMargin),
      children: null != Chunk481060 ? require({
        className: Chunk111925.embedTitleLink,
        href: Chunk481060,
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
      className: s()(Chunk111925.embedDescription, Chunk111925.embedMargin),
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
          containerClassName: B.embedThumbnail,
          src: (0, A.q)(t),
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
      className: Chunk111925.embedFields,
      children: require.map((e, t) => {
        let {
          length: n
        } = e;
        return e.map((e, r) => {
          let [a, o] = e;
          return (0, i.jsxs)("div", {
            className: B.embedField,
            style: {
              gridColumn: $(r, n)
            },
            children: [(0, i.jsx)("div", {
              className: B.embedFieldName,
              children: a
            }), (0, i.jsx)("div", {
              className: B.embedFieldValue,
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
    return null == Chunk607070 && null == Chunk635477 && null == Chunk715697 && null == Chunk936141 ? null : (0, Chunk951288.jsxs)("div", {
      className: Chunk111925.embedGalleryImagesWrapper,
      style: {
        height: Chunk481060
      },
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk111925.embedGallerySide,
        children: [(0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(s.images[0].url, s.images[0]),
          children: Chunk607070
        }, 0), null != Chunk936141 && (0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (e = s.images[2]) ? true : module.url, s.images[2]),
          children: Chunk715697
        }, 2)]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk111925.embedGallerySide,
        children: [(0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (t = s.images[1]) ? true : exports.url, s.images[1]),
          children: Chunk635477
        }, 1), null == Chunk936141 && null != Chunk715697 && (0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (n = s.images[2]) ? true : require.url, s.images[2]),
          children: Chunk715697
        }, 2), null != Chunk936141 && (0, Chunk951288.jsx)(Chunk947849.h.Provider, {
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
      maxMediaWidth: h,
      maxMediaHeight: m,
      sourceMetadata: E
    } = this.state;
    if (null == Chunk647438) return null;
    let y = (0, Chunk52824.q)(Chunk647438),
      {
        srcToOnClickOverride: O,
        srcToHandlePreloadImage: v
      } = null == Chunk607070 ? {
        srcToOnClickOverride: {},
        srcToHandlePreloadImage: {}
      } : (0, Chunk120324.G)(Chunk607070.map(e => Y(V({}, (0, p.Hv)(e, E, "IMAGE")), {
        original: e.url,
        srcIsAnimated: e.srcIsAnimated
      })), {}, "Embed"),
      I = Chunk124347.ZP.isAnimated({
        src: (0, Chunk52824.q)(Chunk647438),
        original: Chunk647438.url,
        animated: false,
        srcIsAnimated: Chunk647438.srcIsAnimated
      }),
      S = {
        containerClassName: s()(Chunk715697, {
          [Chunk111925.embedMedia]: !Chunk120356,
          [Chunk111925.embedImage]: !Chunk120356,
          [Chunk111925.galleryImage]: Chunk120356
        }),
        imageContainerClassName: Chunk120356 ? Chunk111925.galleryImageContainer : true,
        imageClassName: Chunk120356 ? Chunk111925.embedGalleryImageElement : true,
        src: (0, Chunk52824.q)(Chunk647438),
        alt: null == Chunk647438.description || "" === Chunk647438.description ? Chunk481060 : Chunk647438.description,
        responsive: true,
        limitResponsiveWidth: !Chunk120356,
        width: Chunk647438.width,
        height: Chunk647438.height,
        maxWidth: Chunk624195,
        maxHeight: Chunk44824,
        original: Chunk647438.url,
        shouldLink: r,
        disableAltTextDisplay: null == Chunk647438.description || "" === Chunk647438.description,
        hiddenSpoilers: require,
        placeholder: Chunk647438.placeholder,
        placeholderVersion: Chunk647438.placeholderVersion,
        srcIsAnimated: Chunk647438.srcIsAnimated,
        mosaicStyleAlt: true
      },
      T = null != (t = null == (e = Chunk647438.url.split(".").pop()) ? true : module.split("?")[0]) ? exports : "";
    return "jpg" === Chunk592125 && (T = "jpeg"), (0, Chunk951288.jsx)(Chunk947849.h.Consumer, {
      children: e => (0, i.jsx)(j.G.Consumer, {
        children: t => {
          let {
            disableAnimations: r
          } = t;
          return u(Y(V({}, S), {
            autoPlay: f && !r && !n,
            renderAccessory: I ? e : null,
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
        return (0, i.jsx)(en, {
          className: B.embedMedia,
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
    return (0, Chunk951288.jsx)(et, {
      className: Chunk111925.embedMedia,
      href: r,
      allowFullScreen: Chunk715697,
      thumbnail: Chunk647438,
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
    return null != exports ? (0, Chunk951288.jsx)(Chunk249458.G.Consumer, {
      children: r => {
        let {
          disableAnimations: a
        } = r;
        return (0, i.jsxs)("div", {
          className: s()(B.embedFooter, B.embedMargin),
          children: [null != t.iconProxyURL && "" !== t.iconProxyURL ? (0, i.jsx)("img", {
            alt: "",
            className: B.embedFooterIcon,
            src: e && !a ? t.iconProxyURL : ee(t.iconProxyURL)
          }) : null, (0, i.jsxs)("span", {
            className: B.embedFooterText,
            children: [t.text, null != t.text && null != n ? (0, i.jsx)("span", {
              className: B.embedFooterSeparator,
              children: "•"
            }) : null, null != n ? (0, R.Y4)(n) : null]
          })]
        })
      }
    }) : null != require ? (0, Chunk951288.jsx)("div", {
      className: s()(Chunk111925.embedFooter, Chunk111925.embedMargin),
      children: (0, Chunk951288.jsx)("span", {
        className: Chunk111925.embedFooterText,
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
      maxHeight: Chunk647438
    });
    return (0, Chunk951288.jsx)(Chunk481060.Eep, {
      className: exports,
      readyState: Chunk981631.zo9.READY,
      src: "",
      width: s,
      height: Chunk607070,
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
      thumbnail: !r && Chunk635477 ? this.renderThumbnail(Chunk951288) : null,
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
    if (i === k.hBH.RICH && true !== n) return X;
    if (i === k.hBH.GIFV) {
      var u, d, f, _;
      let {
        width: e
      } = (0, w.Tj)({
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
      className: B.embedSuppressButton,
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
      _ = (null != s ? (0, D.TZ)(s) : 0) >= f,
      p = (null != (n = null == s ? true : s.split("\n").length) ? n : 0) >= Q,
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
    }) : this.isInline() ? null != require ? (0, Chunk951288.jsx)(Chunk411405.ZP, {
      type: Chunk411405.ZP.Types.ATTACHMENT,
      reason: require,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      isSingleMosaicItem: true,
      containerStyles: this.getSpoilerStyles(true),
      obscurityControlClassName: s()({
        [Chunk111925.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown
      }),
      children: this.renderInlineMediaEmbed
    }) : this.renderInlineMediaEmbed() : null != require ? (0, Chunk951288.jsx)(Chunk411405.ZP, {
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
    super(...e), t = this, F(this, "state", V({
      isVisible: null == this.props.obscureReason,
      videoControlsShown: false,
      sourceMetadata: {
        message: this.props.message,
        identifier: {
          type: "embed",
          embedIndex: this.props.embedIndex
        }
      }
    }, (0, P.vP)(this.props.embed))), F(this, "onReveal", () => {
      this.setState({
        isVisible: true
      })
    }), F(this, "onToggleObscurity", () => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }), F(this, "renderInlineMediaEmbed", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        {
          obscureReason: n,
          className: r
        } = t.props,
        a = t.getMaxWidth(true);
      return (0, i.jsx)("div", {
        "aria-hidden": e,
        className: s()(B.inlineMediaEmbed, r, {
          [B.spoilerAttachment]: n === f.wk.SPOILER,
          [B.hiddenExplicitAttachment]: t.shouldObscure,
          [B.isHidden]: e,
          [B.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        style: {
          maxWidth: a
        },
        children: t.renderMedia(e)
      })
    }), F(this, "renderEmbedContent", function() {
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
          thumbnail: _,
          media: p,
          footer: h
        } = t.renderAll();
      return (0, i.jsx)("article", {
        className: s()(n, B.embedFull, Z.markup, {
          [B.isHidden]: e,
          [B.spoilerEmbed]: a === f.wk.SPOILER,
          [B.hiddenExplicitEmbed]: t.shouldObscure,
          [B.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        "aria-hidden": e,
        style: {
          borderLeftColor: t.getEmbedColor(e),
          maxWidth: t.getMaxWidth(false)
        },
        children: (0, i.jsx)("div", {
          className: B.gridContainer,
          children: (0, i.jsxs)("div", {
            className: s()({
              [B.grid]: true,
              [B.hasThumbnail]: null != _
            }),
            children: [null != r ? t.renderSuppressButton(r) : null, o, l, c, u, d, p, _, h]
          })
        })
      })
    })
  }
}
F(er, "defaultProps", {
  hideMedia: false,
  allowFullScreen: true,
  maxThumbnailWidth: 80,
  maxThumbnailHeight: 80,
  embedIndex: 0
})