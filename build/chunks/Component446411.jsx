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
    renderImageComponent: h,
    renderVideoComponent: m,
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
    onVolumeChange: w,
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
  let K = (0, R.Tj)({
    width: Y,
    height: W,
    maxWidth: l,
    maxHeight: c
  });
  Y = Math.max(K.width, z), W = Math.max(K.height, q);
  let Q = (0, C.q)(u);
  if (null != d && null != d.proxyURL) return (0, i.jsx)("div", {
    className: s()(Z.embedVideo, r),
    children: m({
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
      onVolumeChange: w,
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
    children: [h({
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
    hiddenSpoilers: h,
    placeholder: g,
    placeholderVersion: E,
    sourceMetadata: b
  } = e;
  return (0, i.jsx)(m.Z, {
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
    hiddenSpoilers: h,
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
    return null == t ? null : this.shouldShowStaticPlaceholder ? (0, i.jsx)("div", {
      className: s()(Z.embedProvider, Z.embedMargin),
      children: this.renderContentPlaceholder({
        width: 80,
        height: 18
      })
    }) : (0, i.jsx)("div", {
      className: s()(Z.embedProvider, Z.embedMargin),
      children: null != t.url ? n({
        className: Z.embedLink,
        href: t.url,
        tabIndex: e ? 0 : false,
        children: t.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == r ? true : r.id,
        channelId: null == r ? true : r.channel_id
      }) : (0, i.jsx)("span", {
        children: t.name
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
    return null == t ? null : this.shouldShowStaticPlaceholder ? (0, i.jsx)("div", {
      className: s()(Z.embedAuthor, Z.embedMargin),
      children: this.renderContentPlaceholder({
        width: 150,
        height: 18
      })
    }) : (0, i.jsx)(M.G.Consumer, {
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
      } = t;
    return null == o ? null : this.shouldShowStaticPlaceholder ? (0, i.jsx)("div", {
      className: s()(Z.embedTitle, Z.embedMargin),
      children: this.renderContentPlaceholder({
        width: 400,
        height: 30
      })
    }) : (0, i.jsx)("div", {
      className: s()(Z.embedTitle, Z.embedMargin),
      children: null != l ? n({
        className: Z.embedTitleLink,
        href: l,
        tabIndex: e ? 0 : false,
        children: r(t, o),
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == a ? true : a.id,
        channelId: null == a ? true : a.channel_id
      }) : r(t, o)
    })
  }
  renderDescription() {
    let {
      embed: e,
      renderDescription: t
    } = this.props, {
      rawDescription: n
    } = e;
    return null == n ? null : (0, i.jsx)("div", {
      className: s()(Z.embedDescription, Z.embedMargin),
      children: this.shouldShowStaticPlaceholder ? this.renderContentPlaceholder({
        width: 400,
        height: 50
      }) : t(e, n, false)
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
    return null == t ? null : (0, i.jsx)(M.G.Consumer, {
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
    } = e;
    if (null == t || 0 === t.length) return null;
    let n = [],
      r = null;
    return t.forEach(t => {
      let {
        rawName: i,
        rawValue: a,
        inline: o
      } = t;
      o || null == r || (n.push(r), r = null), null == r && (r = []), r.push([this.props.renderTitle(e, i), this.props.renderDescription(e, a, true)]), 3 !== r.length && o || (n.push(r), r = null)
    }), null != r && n.push(r), (0, i.jsx)("div", {
      className: Z.embedFields,
      children: n.map((e, t) => {
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
    return null == c && null == u && null == d && null == f ? null : (0, i.jsxs)("div", {
      className: Z.embedGalleryImagesWrapper,
      style: {
        height: l
      },
      children: [(0, i.jsxs)("div", {
        className: Z.embedGallerySide,
        children: [(0, i.jsx)(p.h.Provider, {
          value: (0, O.P)(s.images[0].url, s.images[0]),
          children: c
        }, 0), null != f && (0, i.jsx)(p.h.Provider, {
          value: (0, O.P)(null == (e = s.images[2]) ? true : e.url, s.images[2]),
          children: d
        }, 2)]
      }), (0, i.jsxs)("div", {
        className: Z.embedGallerySide,
        children: [(0, i.jsx)(p.h.Provider, {
          value: (0, O.P)(null == (t = s.images[1]) ? true : t.url, s.images[1]),
          children: u
        }, 1), null == f && null != d && (0, i.jsx)(p.h.Provider, {
          value: (0, O.P)(null == (n = s.images[2]) ? true : n.url, s.images[2]),
          children: d
        }, 2), null != f && (0, i.jsx)(p.h.Provider, {
          value: (0, O.P)(null == (r = s.images[3]) ? true : r.url, s.images[3]),
          children: f
        }, 3)]
      })]
    })
  }
  handleImageHover() {
    var e;
    let t = T.Z.getChannel(null == (e = this.props.message) ? true : e.channel_id);
    A.default.track(k.rMx.IMAGE_HOVERED, {
      guild_id: null == t ? true : t.guild_id,
      channel_id: null == t ? true : t.id,
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
      alt: l = G.intl.string(G.t.X4IxWL),
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
    if (null == a) return null;
    let y = (0, C.q)(a),
      {
        srcToOnClickOverride: O,
        srcToHandlePreloadImage: v
      } = null == c ? {
        srcToOnClickOverride: {},
        srcToHandlePreloadImage: {}
      } : (0, b.G)(c.map(e => Y(V({}, (0, _.Hv)(e, E, "IMAGE")), {
        original: e.url,
        srcIsAnimated: e.srcIsAnimated
      })), {}, "Embed"),
      S = g.ZP.isAnimated({
        src: (0, C.q)(a),
        original: a.url,
        animated: false,
        srcIsAnimated: a.srcIsAnimated
      }),
      I = {
        containerClassName: s()(d, {
          [Z.embedMedia]: !o,
          [Z.embedImage]: !o,
          [Z.galleryImage]: o
        }),
        imageContainerClassName: o ? Z.galleryImageContainer : true,
        imageClassName: o ? Z.embedGalleryImageElement : true,
        src: (0, C.q)(a),
        alt: null == a.description || "" === a.description ? l : a.description,
        responsive: true,
        limitResponsiveWidth: !o,
        width: a.width,
        height: a.height,
        maxWidth: h,
        maxHeight: m,
        original: a.url,
        shouldLink: r,
        disableAltTextDisplay: null == a.description || "" === a.description,
        hiddenSpoilers: n,
        placeholder: a.placeholder,
        placeholderVersion: a.placeholderVersion,
        srcIsAnimated: a.srcIsAnimated,
        mosaicStyleAlt: true
      },
      T = null != (t = null == (e = a.url.split(".").pop()) ? true : e.split("?")[0]) ? t : "";
    return "jpg" === T && (T = "jpeg"), (0, i.jsx)(p.h.Consumer, {
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
      maxMediaHeight: h,
      sourceMetadata: m
    } = this.state;
    if (null == r || null == a) return null;
    if (e) return null == o ? null : (0, i.jsx)(M.G.Consumer, {
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
          maxHeight: h,
          responsive: true,
          autoPlay: !n && f && !s && t,
          renderImageComponent: c,
          playable: t,
          hiddenSpoilers: n,
          disableAltTextDisplay: null != p,
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
    return (0, i.jsx)(et, {
      className: Z.embedMedia,
      href: r,
      allowFullScreen: d,
      thumbnail: a,
      video: o,
      provider: null == s ? true : s.name,
      maxWidth: _,
      maxHeight: h,
      responsive: true,
      renderImageComponent: c,
      renderVideoComponent: l,
      renderLinkComponent: u,
      onControlsShow: g,
      onControlsHide: E,
      playable: t && !n,
      placeholder: null == o ? true : o.placeholder,
      placeholderVersion: null == o ? true : o.placeholderVersion,
      sourceMetadata: m
    })
  }
  renderFooter() {
    let {
      autoPlayGif: e
    } = this.props, {
      footer: t,
      timestamp: n
    } = this.props.embed;
    return null != t ? (0, i.jsx)(M.G.Consumer, {
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
    }) : null != n ? (0, i.jsx)("div", {
      className: s()(Z.embedFooter, Z.embedMargin),
      children: (0, i.jsx)("span", {
        className: Z.embedFooterText,
        children: (0, P.Y4)(n)
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
    } = this.state, o = null != (e = n.image) ? e : n.video;
    if (null == o) return null;
    let {
      width: s,
      height: c
    } = (0, R.Tj)({
      width: o.width,
      height: o.height,
      maxWidth: r,
      maxHeight: a
    });
    return (0, i.jsx)(l.Eep, {
      className: t,
      readyState: k.zo9.READY,
      src: "",
      width: s,
      height: c,
      maxWidth: r,
      maxHeight: a,
      mediaLayoutType: U.hV.STATIC,
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
    switch (t.type) {
      case k.hBH.GIFV:
        return this.renderVideo({
          gifv: true,
          hiddenSpoiler: e,
          isVisible: n
        });
      case k.hBH.VIDEO:
      default:
        if (null != t.video) return this.renderVideo({
          gifv: false,
          hiddenSpoiler: e,
          isVisible: n
        });
        if (null != t.images) return this.renderImages({
          hiddenSpoiler: e,
          isVisible: n
        });
        return this.renderImage({
          hiddenSpoiler: e,
          isVisible: n,
          image: t.image,
          alt: t.rawTitle
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
      a = this.renderProvider(i),
      o = this.renderAuthor(i),
      s = this.renderTitle(i);
    switch (n.type) {
      case k.hBH.IMAGE:
      case k.hBH.VIDEO:
      case k.hBH.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let l = this.renderFields();
    r || (t = this.renderMedia(!i));
    let c = this.renderFooter(),
      u = null == t;
    return n.type === k.hBH.RICH && (u = null == n.video), {
      provider: a,
      author: o,
      title: s,
      description: e,
      thumbnail: !r && u ? this.renderThumbnail(i) : null,
      fields: l,
      media: t,
      footer: c
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
    } = (0, R.Tj)({
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
      } = (0, R.Tj)({
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
    return null != e ? {
      minWidth: z,
      minHeight: q
    } : true
  }
  isInline() {
    let {
      hideMedia: e,
      embed: t
    } = this.props;
    return !e && (0, w.dY)(t)
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
    return e.type === k.hBH.IMAGE || e.type === k.hBH.VIDEO || e.type === k.hBH.GIFV || (e.type === k.hBH.RICH || e.type === k.hBH.ARTICLE) && (null != e.video || null != e.image)
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
        } = (0, R.Tj)({
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
      h = p || _;
    return {
      maxWidth: true === d || h ? "max-content" : d,
      justifySelf: "auto"
    }
  }
  get shouldObscure() {
    let {
      obscureReason: e
    } = this.props;
    return null != e && f.Xh.has(e)
  }
  get shouldShowStaticPlaceholder() {
    let {
      shouldAgeVerify: e = false
    } = this.props;
    return this.shouldObscure && e
  }
  render() {
    var e;
    let {
      embed: t,
      obscureReason: n,
      className: r
    } = this.props;
    return null != t.provider && j.j.includes(t.provider.name) ? (0, i.jsx)(j.Z, {
      embed: t,
      className: r
    }) : (0, S.Z)(t) ? (0, i.jsx)(I.Z, {
      embed: t,
      className: r
    }) : (null == (e = t.provider) ? true : e.name) === "Amazon Music" && t.type === k.hBH.RICH ? (0, i.jsx)(h.Z, {
      embed: t,
      className: r
    }) : (0, u.Z)(t) ? (0, i.jsx)(d.Z, {
      embed: t,
      className: r
    }) : this.isInline() ? null != n ? (0, i.jsx)(v.ZP, {
      type: v.ZP.Types.ATTACHMENT,
      reason: n,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      isSingleMosaicItem: true,
      containerStyles: this.getSpoilerStyles(true),
      obscurityControlClassName: s()({
        [Z.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown
      }),
      children: this.renderInlineMediaEmbed
    }) : this.renderInlineMediaEmbed() : null != n ? (0, i.jsx)(v.ZP, {
      type: v.ZP.Types.EMBED,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      reason: n,
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
    }, (0, w.vP)(this.props.embed))), B(this, "onReveal", () => {
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
          footer: h
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
            children: [null != r ? t.renderSuppressButton(r) : null, o, l, c, u, d, _, p, h]
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