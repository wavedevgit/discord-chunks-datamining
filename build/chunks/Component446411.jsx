/** Chunk was on 53937 **/
/** chunk id: 446411, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  BC: () => q,
  ZP: () => X
}), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./35282.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function U(e, l, t) {
  return l in e ? Object.defineProperty(e, l, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[l] = t, e
}

function z(e) {
  for (var l = 1; l < arguments.length; l++) {
    var t = null != arguments[l] ? arguments[l] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(l) {
      U(e, l, t[l])
    })
  }
  return e
}

function Y(e, l) {
  return l = null != l ? l : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : (function(e, l) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(l)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
  }), e
}

function q(e) {
  var l, t;
  let {
    className: r,
    iframeWrapperClassName: s,
    maxWidth: o,
    maxHeight: d,
    thumbnail: u,
    video: h,
    provider: c,
    allowFullScreen: m = true,
    responsive: p = false,
    renderImageComponent: g,
    renderVideoComponent: b,
    renderLinkComponent: f,
    playable: v = true,
    autoPlay: y = false,
    autoMute: x,
    volume: w,
    onPlay: I,
    onPause: S,
    onEnded: O,
    onControlsHide: P,
    onControlsShow: C,
    onVolumeChange: E,
    onMute: M,
    href: T,
    placeholder: H,
    placeholderVersion: L,
    sourceMetadata: B
  } = e, [V, W] = i.useState(y), F = null != h && null == h.proxyURL, Z = i.useCallback(() => W(false), [W]), G = e => {
    e.preventDefault(), e.stopPropagation(), null == I || I(false), W(true), F && (A.S.dispatch(D.CkL.VIDEO_EMBED_PLAYBACK_STARTED), A.S.subscribeOnce(D.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z))
  };
  i.useEffect(() => () => {
    F && A.S.unsubscribe(D.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z)
  }, [F, Z]);
  let {
    width: U,
    height: z
  } = u;
  null != h && (U = h.width, z = h.height);
  let Y = (0, k.Tj)({
    width: U,
    height: z,
    maxWidth: o,
    maxHeight: d
  });
  U = Math.max(Y.width, 150), z = Math.max(Y.height, 144);
  let q = (0, N.q)(u);
  if (null != h && null != h.proxyURL) return (0, n.jsx)("div", {
    className: a()(_.embedVideo, r),
    children: b({
      poster: q,
      src: h.proxyURL,
      placeholder: H,
      placeholderVersion: L,
      width: U,
      height: z,
      responsive: p,
      autoPlay: y,
      onEnded: O,
      naturalWidth: h.width,
      naturalHeight: h.height,
      onVolumeChange: E,
      playable: v,
      autoMute: x,
      volume: w,
      onPlay: I,
      onPause: S,
      onMute: M,
      onControlsHide: P,
      onControlsShow: C,
      sourceMetadata: B
    })
  });
  if (V && null != h) {
    let e, l = true === x || "function" == typeof x && x(),
      t = {
        width: U,
        height: z
      },
      i = {
        width: U,
        height: z
      };
    if (p) {
      let l = 0 !== U ? z / U : 1;
      t = {
        maxWidth: o,
        maxHeight: d,
        width: true,
        height: true
      }, i = {
        paddingBottom: "".concat(100 * l, "%"),
        maxWidth: U
      }, e = {
        position: "absolute",
        top: 0,
        left: 0,
        maxWidth: U,
        maxHeight: z
      }
    }
    return (0, n.jsx)("div", {
      className: r,
      style: t,
      children: (0, n.jsx)("div", {
        className: a()(_.embedVideo, s),
        style: i,
        children: (0, n.jsx)(R.ZP, {
          provider: c,
          src: h.url,
          style: e,
          width: U,
          height: z,
          allowFullScreen: m,
          autoMute: l
        })
      })
    })
  }
  return (0, n.jsxs)("div", {
    className: a()(_.embedVideo, r),
    style: p ? {
      maxWidth: U
    } : {
      width: U,
      height: z
    },
    children: [g({
      src: q,
      width: U,
      height: z,
      maxWidth: U,
      maxHeight: z,
      responsive: p,
      containerClassName: _.embedVideoImageComponent,
      imageClassName: _.embedVideoImageComponentInner,
      placeholder: H,
      placeholderVersion: L,
      onClick: v && null != h ? G : null,
      sourceMetadata: B,
      analyticsSource: "EmbedVideo"
    }), (0, n.jsx)("div", {
      className: _.embedVideoActions,
      children: (0, n.jsx)("div", {
        className: _.centerContent,
        children: v ? (0, n.jsx)(j.Z, {
          onPlay: null != h ? G : null,
          externalURL: T,
          renderLinkComponent: f,
          messageId: null == B || null == (l = B.message) ? true : l.id,
          channelId: null == B || null == (t = B.message) ? true : t.channel_id
        }) : null
      })
    })]
  })
}

function K(e) {
  let {
    className: l,
    href: t,
    autoPlay: r,
    maxWidth: i,
    maxHeight: s,
    thumbnail: o,
    video: d,
    renderImageComponent: u,
    responsive: h,
    alt: c,
    disableAltTextDisplay: m = false,
    playable: p = true,
    hiddenSpoilers: g,
    placeholder: b,
    placeholderVersion: f,
    sourceMetadata: v
  } = e;
  return (0, n.jsx)(x.Z, {
    className: a()(_.embedVideo, l),
    original: t,
    poster: (0, N.q)(o),
    src: (0, N.q)(d),
    alt: c,
    width: o.width,
    height: o.height,
    naturalHeight: d.height,
    naturalWidth: d.width,
    maxWidth: i,
    maxHeight: s,
    responsive: h,
    autoPlay: r,
    playable: p,
    renderImageComponent: u,
    hiddenSpoilers: g,
    disableAltTextDisplay: m,
    placeholder: b,
    placeholderVersion: f,
    sourceMetadata: v
  })
}
class X extends(r = Chunk647438.PureComponent) {
  renderProvider() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      {
        embed: {
          provider: l
        },
        renderLinkComponent: t,
        message: r
      } = this.props;
    return null == exports ? null : this.shouldShowStaticPlaceholder ? (0, Chunk951288.jsx)("div", {
      className: a()(Chunk781452.embedProvider, Chunk781452.embedMargin),
      children: this.renderContentPlaceholder({
        width: 80,
        height: 18
      })
    }) : (0, Chunk951288.jsx)("div", {
      className: a()(Chunk781452.embedProvider, Chunk781452.embedMargin),
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
          author: l
        },
        renderLinkComponent: t,
        message: r
      } = this.props;
    return null == exports ? null : this.shouldShowStaticPlaceholder ? (0, Chunk951288.jsx)("div", {
      className: a()(Chunk781452.embedAuthor, Chunk781452.embedMargin),
      children: this.renderContentPlaceholder({
        width: 150,
        height: 18
      })
    }) : (0, Chunk951288.jsxs)("div", {
      className: a()(Chunk781452.embedAuthor, Chunk781452.embedMargin),
      children: [null != exports.iconProxyURL ? (0, Chunk951288.jsx)("img", {
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
      }) : (0, Chunk951288.jsx)("span", {
        className: Chunk781452.embedAuthorName,
        children: exports.name
      })]
    })
  }
  renderContentPlaceholder(e) {
    let {
      width: l,
      height: t
    } = e;
    return (0, n.jsx)(I.ZT, {
      className: _.contentPlaceholder,
      width: l,
      height: t,
      opacity: .3
    })
  }
  renderTitle() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      {
        embed: l,
        renderLinkComponent: t,
        renderTitle: r,
        message: i
      } = this.props,
      {
        rawTitle: s,
        url: o
      } = exports;
    return null == Chunk120356 ? null : this.shouldShowStaticPlaceholder ? (0, Chunk951288.jsx)("div", {
      className: a()(Chunk781452.embedTitle, Chunk781452.embedMargin),
      children: this.renderContentPlaceholder({
        width: 400,
        height: 30
      })
    }) : (0, Chunk951288.jsx)("div", {
      className: a()(Chunk781452.embedTitle, Chunk781452.embedMargin),
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
      renderDescription: l
    } = this.props, {
      rawDescription: t
    } = module;
    return null == require ? null : (0, Chunk951288.jsx)("div", {
      className: a()(Chunk781452.embedDescription, Chunk781452.embedMargin),
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
          thumbnail: l
        },
        maxThumbnailWidth: t,
        maxThumbnailHeight: r,
        renderImageComponent: i,
        autoPlayGif: s
      } = this.props,
      {
        sourceMetadata: a
      } = this.state;
    return null == exports ? null : (0, Chunk951288.jsx)(Chunk249458.G.Consumer, {
      children: n => {
        let {
          disableAnimations: o
        } = n;
        return i({
          containerClassName: _.embedThumbnail,
          src: (0, N.q)(l),
          original: l.url,
          width: l.width,
          height: l.height,
          maxWidth: t,
          maxHeight: r,
          shouldLink: e,
          autoPlay: s && !o,
          srcIsAnimated: l.srcIsAnimated,
          placeholder: l.placeholder,
          placeholderVersion: l.placeholderVersion,
          sourceMetadata: a,
          analyticsSource: "Embed"
        })
      }
    })
  }
  renderFields() {
    let {
      embed: e
    } = this.props, {
      fields: l
    } = module;
    if (null == exports || 0 === exports.length) return null;
    let t = [],
      r = null;
    return exports.forEach(l => {
      let {
        rawName: n,
        rawValue: i,
        inline: s
      } = l;
      s || null == r || (t.push(r), r = null), null == r && (r = []), r.push([this.props.renderTitle(e, n), this.props.renderDescription(e, i, true)]), 3 !== r.length && s || (t.push(r), r = null)
    }), null != r && require.push(r), (0, Chunk951288.jsx)("div", {
      className: Chunk781452.embedFields,
      children: require.map((e, l) => {
        let {
          length: t
        } = e;
        return e.map((e, r) => {
          let [i, s] = e;
          return (0, n.jsxs)("div", {
            className: _.embedField,
            style: {
              gridColumn: function(e, l) {
                let t = 12 / l,
                  r = e * t;
                return "".concat(r + 1, " / ").concat(r + t + 1)
              }(r, t)
            },
            children: [(0, n.jsx)("div", {
              className: _.embedFieldName,
              children: i
            }), (0, n.jsx)("div", {
              className: _.embedFieldValue,
              children: s
            })]
          }, "".concat(l, "-").concat(r))
        })
      })
    })
  }
  renderImages() {
    var e, l, t, r;
    let {
      hiddenSpoiler: i = false,
      isVisible: s = true
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
      embed: a
    } = this.props, {
      maxMediaHeight: o
    } = this.state;
    if (null == a.images) return null;
    let [d, u, h, c] = a.images.map(e => this.renderImage({
      hiddenSpoiler: i,
      isVisible: s,
      image: e,
      isGalleryImage: true,
      allImages: a.images
    }));
    return null == Chunk481060 && null == Chunk607070 && null == Chunk399654 && null == Chunk370298 ? null : (0, Chunk951288.jsxs)("div", {
      className: Chunk781452.embedGalleryImagesWrapper,
      style: {
        height: Chunk228458
      },
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk781452.embedGallerySide,
        children: [(0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(a.images[0].url, a.images[0]),
          children: Chunk481060
        }, 0), null != Chunk370298 && (0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (e = a.images[2]) ? true : module.url, a.images[2]),
          children: Chunk399654
        }, 2)]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk781452.embedGallerySide,
        children: [(0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (l = a.images[1]) ? true : exports.url, a.images[1]),
          children: Chunk607070
        }, 1), null == Chunk370298 && null != Chunk399654 && (0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (t = a.images[2]) ? true : require.url, a.images[2]),
          children: Chunk399654
        }, 2), null != Chunk370298 && (0, Chunk951288.jsx)(Chunk947849.h.Provider, {
          value: (0, Chunk963206.P)(null == (r = a.images[3]) ? true : r.url, a.images[3]),
          children: Chunk370298
        }, 3)]
      })]
    })
  }
  renderImageHoverButtons(e) {
    let {
      mimeType: l,
      downloadURL: t,
      isVisualMediaType: r,
      channelId: i
    } = e, s = () => {
      this.setState({
        showImageAppMenu: !this.state.showImageAppMenu
      })
    };
    return (0, n.jsx)("div", {
      className: a()(Z.hoverButtonGroup, {
        [Z.nonMediaMosaicItem]: !r,
        [Z.forceShowHover]: this.state.showImageAppMenu
      }),
      children: (0, n.jsx)(c.Z, {
        toggleShowMenu: s,
        showMenu: this.state.showImageAppMenu,
        channelId: i,
        className: a()(Z.hoverButton, {
          [Z.selected]: this.state.showImageAppMenu
        }),
        imageUrl: t,
        mimeType: l
      })
    })
  }
  handleImageHover(e, l, t) {
    if (t)
      if (e && !this.state.isImageHovered) {
        var r, n;
        this.setState({
          isImageHovered: true
        });
        let e = E.Z.getChannel(null == (r = this.props.message) ? true : r.channel_id);
        this.props.showImageRecs && (0, h.a)({
          channelId: null != (n = null == e ? true : e.id) ? n : "",
          location: o.I.CONTEXTUAL_IMAGE,
          withCommands: true
        }), M.default.track(D.rMx.IMAGE_HOVERED, {
          guild_id: null == e ? true : e.guild_id,
          channel_id: null == e ? true : e.id,
          image_recommendations_shown: this.props.showImageRecs
        })
      } else !e && this.state.isImageHovered && this.setState({
        isImageHovered: false
      })
  }
  renderImage() {
    var e, l, t, r, i;
    let {
      hiddenSpoiler: s = false,
      isVisible: o = true,
      image: d,
      isGalleryImage: u = false,
      alt: h = Chunk388032.intl.string(Chunk388032.t.X4IxWF),
      allImages: c = null
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
      renderImageComponent: m,
      className: p,
      autoPlayGif: g
    } = this.props, {
      maxMediaWidth: b,
      maxMediaHeight: y,
      sourceMetadata: x
    } = this.state;
    if (null == Chunk481060) return null;
    let j = (0, Chunk52824.q)(Chunk481060),
      {
        srcToOnClickOverride: I,
        srcToHandlePreloadImage: S
      } = null == Chunk370298 ? {
        srcToOnClickOverride: {},
        srcToHandlePreloadImage: {}
      } : (0, Chunk207982.G)(Chunk370298.map(e => Y(z({}, (0, v.Hv)(e, x, "IMAGE")), {
        original: e.url,
        srcIsAnimated: e.srcIsAnimated
      })), {}, "Embed"),
      P = Chunk124347.ZP.isAnimated({
        src: (0, Chunk52824.q)(Chunk481060),
        original: Chunk481060.url,
        animated: false,
        srcIsAnimated: Chunk481060.srcIsAnimated
      }),
      C = {
        containerClassName: a()(Chunk715697, {
          [Chunk781452.embedMedia]: !Chunk607070,
          [Chunk781452.embedImage]: !Chunk607070,
          [Chunk781452.galleryImage]: Chunk607070
        }),
        imageContainerClassName: Chunk607070 ? Chunk781452.galleryImageContainer : true,
        imageClassName: Chunk607070 ? Chunk781452.embedGalleryImageElement : true,
        src: (0, Chunk52824.q)(Chunk481060),
        alt: null == Chunk481060.description || "" === Chunk481060.description ? Chunk399654 : Chunk481060.description,
        responsive: true,
        limitResponsiveWidth: !Chunk607070,
        width: Chunk481060.width,
        height: Chunk481060.height,
        maxWidth: Chunk936141,
        maxHeight: Chunk624195,
        original: Chunk481060.url,
        shouldLink: Chunk228458,
        disableAltTextDisplay: null == Chunk481060.description || "" === Chunk481060.description,
        hiddenSpoilers: Chunk120356,
        placeholder: Chunk481060.placeholder,
        placeholderVersion: Chunk481060.placeholderVersion,
        srcIsAnimated: Chunk481060.srcIsAnimated,
        mosaicStyleAlt: true
      },
      E = null != (r = null == (e = Chunk481060.url.split(".").pop()) ? true : module.split("?")[0]) ? r : "";
    "jpg" === Chunk592125 && (E = "jpeg");
    let M = null != Chunk481060 && !Chunk124347.uo.test(null == Chunk481060 ? true : Chunk481060.url) && !(Chunk481060.srcIsAnimated && Chunk124347.YG.test(null == Chunk481060 ? true : Chunk481060.url)) && !(Chunk481060.srcIsAnimated && Chunk124347.FH.test(null == Chunk481060 ? true : Chunk481060.url)),
      A = true !== this.props.isSearchResult && Chunk228458 && (null == (l = this.props.message) ? true : exports.channel_id) != null && (null == (t = this.props.message) ? true : require.channel_id) !== true && Chunk626135 && !(null != (i = Chunk481060) && (Chunk647438.width <= Chunk217702.OF || Chunk647438.height <= Chunk217702.OF)) && null != Chunk592125;
    return (0, Chunk951288.jsx)(Chunk947849.h.Consumer, {
      children: e => (0, n.jsx)(V.G.Consumer, {
        children: l => {
          let {
            disableAnimations: t
          } = l;
          return m(Y(z({}, C), {
            autoPlay: g && !t && !s,
            renderAccessory: P ? e : null,
            handlePreloadImage: S[j],
            onClick: I[j],
            onMouseEnter: () => this.handleImageHover(true, d, A),
            onMouseLeave: () => this.handleImageHover(false, d, A),
            renderAdjacentContent: () => {
              var e, l;
              returntrue === this.props.showImageRecs && A ? this.renderImageHoverButtons({
                mimeType: ["image", E],
                downloadURL: null != (l = d.proxyURL) ? l : d.url,
                isVisualMediaType: null != d,
                channelId: null == (e = this.props.message) ? true : e.channel_id
              }) : null
            },
            sourceMetadata: x,
            analyticsSource: "Embed"
          }))
        }
      }, d.url)
    })
  }
  renderVideo() {
    let {
      gifv: e = false,
      isVisible: l = true,
      hiddenSpoiler: t = false
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
      embed: {
        url: r,
        thumbnail: i,
        video: s,
        provider: a
      },
      renderVideoComponent: o,
      renderImageComponent: d,
      renderLinkComponent: u,
      allowFullScreen: h,
      autoPlayGif: c,
      obscureReason: m
    } = this.props, {
      maxMediaWidth: p,
      maxMediaHeight: g,
      sourceMetadata: b
    } = this.state;
    if (null == r || null == Chunk647438) return null;
    if (module) return null == Chunk120356 ? null : (0, Chunk951288.jsx)(Chunk249458.G.Consumer, {
      children: e => {
        let {
          disableAnimations: a
        } = e;
        return (0, n.jsx)(K, {
          className: _.embedMedia,
          href: r,
          thumbnail: i,
          video: s,
          maxWidth: p,
          maxHeight: g,
          responsive: true,
          autoPlay: !t && c && !a && l,
          renderImageComponent: d,
          playable: l,
          hiddenSpoilers: t,
          disableAltTextDisplay: null != m,
          placeholder: s.placeholder,
          placeholderVersion: s.placeholderVersion,
          sourceMetadata: b
        })
      }
    });
    let f = () => {
        this.setState({
          videoControlsShown: true
        })
      },
      v = () => {
        this.setState({
          videoControlsShown: false
        })
      };
    return (0, Chunk951288.jsx)(q, {
      className: Chunk781452.embedMedia,
      href: r,
      allowFullScreen: Chunk399654,
      thumbnail: Chunk647438,
      video: Chunk120356,
      provider: null == a ? true : a.name,
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
      footer: e,
      timestamp: l
    } = this.props.embed;
    if (null != module) {
      let t = null != module.iconProxyURL && "" !== module.iconProxyURL ? module.iconProxyURL : module.iconURL;
      return (0, Chunk951288.jsxs)("div", {
        className: a()(Chunk781452.embedFooter, Chunk781452.embedMargin),
        children: [null != require ? (0, Chunk951288.jsx)("img", {
          alt: "",
          className: Chunk781452.embedFooterIcon,
          src: require
        }) : null, (0, Chunk951288.jsxs)("span", {
          className: Chunk781452.embedFooterText,
          children: [module.text, null != module.text && null != exports ? (0, Chunk951288.jsx)("span", {
            className: Chunk781452.embedFooterSeparator,
            children: "•"
          }) : null, null != exports ? (0, Chunk55935.Y4)(exports) : null]
        })]
      })
    }
    if (null != exports) return (0, Chunk951288.jsx)("div", {
      className: a()(Chunk781452.embedFooter, Chunk781452.embedMargin),
      children: (0, Chunk951288.jsx)("span", {
        className: Chunk781452.embedFooterText,
        children: (0, Chunk55935.Y4)(exports)
      })
    })
  }
  renderStaticPlaceholderMedia() {
    var e;
    let {
      className: l,
      embed: t
    } = this.props, {
      maxMediaWidth: r,
      maxMediaHeight: i
    } = this.state, s = null != (e = require.image) ? module : require.video;
    if (null == Chunk120356) return null;
    let {
      width: a,
      height: o
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
      width: a,
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
        embed: l
      } = this.props,
      {
        isVisible: t
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
    let e, l, {
        embed: t,
        hideMedia: r
      } = this.props,
      {
        isVisible: n
      } = this.state,
      i = this.renderProvider(Chunk951288),
      s = this.renderAuthor(Chunk951288),
      a = this.renderTitle(Chunk951288);
    switch (require.type) {
      case Chunk981631.hBH.IMAGE:
      case Chunk981631.hBH.VIDEO:
      case Chunk981631.hBH.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let o = this.renderFields();
    r || (l = this.renderMedia(!Chunk951288));
    let d = this.renderFooter(),
      u = null == exports;
    return require.type === Chunk981631.hBH.RICH && (u = null == require.video), {
      provider: Chunk647438,
      author: Chunk120356,
      title: a,
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
        image: l,
        images: t,
        video: r,
        type: n,
        thumbnail: i
      }
    } = this.props, {
      maxMediaWidth: s,
      maxMediaHeight: a
    } = this.state, o = null != l ? l : r;
    if (null == o) return;
    let {
      width: d
    } = (0, k.Tj)({
      width: o.width,
      height: o.height,
      maxWidth: s,
      maxHeight: a
    });
    if (!e && (n === D.hBH.VIDEO || d >= 300)) return d + 32;
    if (n === D.hBH.RICH && true !== t) return 520;
    if (n === D.hBH.GIFV) {
      var u, h, c, m;
      let {
        width: e
      } = (0, k.Tj)({
        width: null != (h = null != (u = null == r ? true : r.width) ? u : null == i ? true : i.width) ? h : 0,
        height: null != (m = null != (c = null == r ? true : r.height) ? c : null == i ? true : i.height) ? m : 0,
        maxWidth: s,
        maxHeight: a
      });
      return e
    }
  }
  getMinSize() {
    let {
      video: e
    } = this.props.embed;
    return null != module ? {
      minWidth: 150,
      minHeight: 144
    } : true
  }
  isInline() {
    let {
      hideMedia: e,
      embed: l
    } = this.props;
    return !module && (0, Chunk408433.dY)(exports)
  }
  renderSuppressButton(e) {
    return (0, n.jsx)(d.P3F, {
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      className: _.embedSuppressButton,
      onClick: e,
      "aria-label": F.intl.string(F.t.GT3fNz),
      children: (0, n.jsx)(d.Dio, {
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
      color: l
    } = this.props.embed;
    return null != l && "#ffffff" === l.toLowerCase() || e ? true : l
  }
  getSpoilerStyles(e) {
    var l, t;
    let {
      embed: {
        image: r,
        images: n,
        video: i,
        type: s,
        rawDescription: a
      }
    } = this.props, {
      maxMediaWidth: o,
      maxMediaHeight: d
    } = this.state;
    if (!this.usesJustifiedAutoStyle()) return;
    let h = e ? true : this.getMaxWidth(false);
    if (true === h && true === n && s !== D.hBH.RICH) {
      let e = null != r ? r : i;
      if (true !== e) {
        let {
          minWidth: t,
          minHeight: r
        } = null != (l = this.getMinSize()) ? l : {}, {
          width: n
        } = (0, k.Tj)({
          width: e.width,
          height: e.height,
          maxWidth: o,
          maxHeight: d,
          minWidth: t,
          minHeight: r
        });
        h = n
      }
    }
    let c = 150 / (u.Z.fontScale / 100),
      m = null != a ? (0, L.TZ)(a) : 0,
      p = (null != (t = null == a ? true : a.split("\n").length) ? t : 0) >= 5;
    return {
      maxWidth: true === h || m >= c || p ? "max-content" : h,
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
      embed: l,
      obscureReason: t,
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
      obscurityControlClassName: a()({
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
    var l;
    super(...e), l = this, U(this, "state", z({
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
    }, (0, H.vP)(this.props.embed))), U(this, "onReveal", () => {
      this.setState({
        isVisible: true
      })
    }), U(this, "onToggleObscurity", () => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }), U(this, "renderInlineMediaEmbed", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        {
          obscureReason: t,
          className: r
        } = l.props,
        i = l.getMaxWidth(true);
      return (0, n.jsx)("div", {
        "aria-hidden": e,
        className: a()(_.inlineMediaEmbed, r, {
          [_.spoilerAttachment]: t === b.wk.SPOILER,
          [_.hiddenExplicitAttachment]: l.shouldObscure,
          [_.isHidden]: e,
          [_.justifyAuto]: l.usesJustifiedAutoStyle()
        }),
        style: {
          maxWidth: i
        },
        children: l.renderMedia(e)
      })
    }), U(this, "renderEmbedContent", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        {
          className: t,
          onSuppressEmbed: r,
          obscureReason: i
        } = l.props,
        {
          provider: s,
          author: o,
          title: d,
          description: u,
          fields: h,
          thumbnail: c,
          media: m,
          footer: p
        } = l.renderAll();
      return (0, n.jsx)("article", {
        className: a()(t, _.embedFull, G.markup, {
          [_.isHidden]: e,
          [_.spoilerEmbed]: i === b.wk.SPOILER,
          [_.hiddenExplicitEmbed]: l.shouldObscure,
          [_.justifyAuto]: l.usesJustifiedAutoStyle()
        }),
        "aria-hidden": e,
        style: {
          borderLeftColor: l.getEmbedColor(e),
          maxWidth: l.getMaxWidth(false)
        },
        children: (0, n.jsx)("div", {
          className: _.gridContainer,
          children: (0, n.jsxs)("div", {
            className: a()({
              [_.grid]: true,
              [_.hasThumbnail]: null != c
            }),
            children: [null != r ? l.renderSuppressButton(r) : null, s, o, d, u, h, m, c, p]
          })
        })
      })
    })
  }
}
U(X, "defaultProps", {
  hideMedia: false,
  allowFullScreen: true,
  maxThumbnailWidth: 80,
  maxThumbnailHeight: 80,
  embedIndex: 0
})