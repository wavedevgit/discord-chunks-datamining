/** Chunk was on 40396 **/
/** chunk id: 871751, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  Ay: () => q,
  rr: () => z
}), require("./896048.js"), require("./321073.js"), require("./228524.js"), require("./747238.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk684290 = require("./684290.js"),
  Chunk478620 = require("./478620.jsx"),
  Chunk338717 = require("./338717.js"),
  Chunk643612 = require("./643612.js"),
  Chunk731068 = require("./731068.js"),
  Chunk124786 = require("./124786.jsx"),
  Chunk935616 = require("./935616.jsx"),
  Chunk619517 = require("./619517.jsx"),
  Chunk893598 = require("./893598.jsx"),
  Chunk269849 = require("./269849.js"),
  Chunk114212 = require("./114212.jsx"),
  Chunk343552 = require("./343552.jsx"),
  Chunk302031 = require("./302031.jsx"),
  Chunk644119 = require("./644119.js"),
  Chunk780297 = require("./780297.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk644447 = require("./644447.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk405269 = require("./405269.js"),
  Chunk659674 = require("./659674.js"),
  Chunk515718 = require("./515718.js"),
  Chunk240248 = require("./240248.js"),
  Chunk998218 = require("./998218.js"),
  Chunk259407 = require("./259407.jsx"),
  Chunk690595 = require("./690595.jsx"),
  Chunk692051 = require("./692051.js"),
  Chunk652215 = require("./652215.js"),
  Chunk838541 = require("./838541.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk802571 = require("./802571.js"),
  Chunk206314 = require("./206314.js");

function G(e, l, t) {
  return l in e ? Object.defineProperty(e, l, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[l] = t, e
}

function K(e) {
  for (var l = 1; l < arguments.length; l++) {
    var t = null != arguments[l] ? arguments[l] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(l) {
      G(e, l, t[l])
    })
  }
  return e
}

function B(e, l) {
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

function F(e) {
  let l = R.A.toURLSafe(e);
  return null == l ? e : (l.searchParams.set("format", "png"), l.toString())
}

function z(e) {
  var l, t;
  let {
    className: r,
    iframeWrapperClassName: s,
    maxWidth: o,
    maxHeight: u,
    thumbnail: d,
    video: c,
    provider: h,
    allowFullScreen: p = true,
    responsive: m = false,
    renderImageComponent: g,
    renderVideoComponent: f,
    renderLinkComponent: y,
    playable: v = true,
    autoPlay: w = false,
    autoMute: x,
    volume: j,
    onPlay: O,
    onPause: A,
    onEnded: P,
    onControlsHide: I,
    onControlsShow: C,
    onVolumeChange: N,
    onMute: M,
    href: R,
    placeholder: D,
    placeholderVersion: W,
    sourceMetadata: _
  } = e, [V, U] = i.useState(w), G = null != c && null == c.proxyURL, K = i.useCallback(() => U(false), [U]), B = e => {
    e.preventDefault(), e.stopPropagation(), null == O || O(false), U(true), G && (E._.dispatch(L.jej.VIDEO_EMBED_PLAYBACK_STARTED), E._.subscribeOnce(L.jej.VIDEO_EMBED_PLAYBACK_STARTED, K))
  };
  i.useEffect(() => () => {
    G && E._.unsubscribe(L.jej.VIDEO_EMBED_PLAYBACK_STARTED, K)
  }, [G, K]);
  let {
    width: F,
    height: z
  } = d;
  null != c && (F = c.width, z = c.height);
  let Y = (0, T.Uj)({
    width: F,
    height: z,
    maxWidth: o,
    maxHeight: u
  });
  F = Math.max(Y.width, 150), z = Math.max(Y.height, 144);
  let q = (0, S.E)(d);
  if (null != c && null != c.proxyURL) return (0, n.jsx)("div", {
    className: a()(H.pu, r),
    children: f({
      poster: q,
      src: c.proxyURL,
      placeholder: D,
      placeholderVersion: W,
      width: F,
      height: z,
      responsive: m,
      autoPlay: w,
      onEnded: P,
      naturalWidth: c.width,
      naturalHeight: c.height,
      onVolumeChange: N,
      playable: v,
      autoMute: x,
      volume: j,
      onPlay: O,
      onPause: A,
      onMute: M,
      onControlsHide: I,
      onControlsShow: C,
      sourceMetadata: _
    })
  });
  if (V && null != c) {
    let e, l = true === x || "function" == typeof x && x(),
      t = {
        width: F,
        height: z
      },
      i = {
        width: F,
        height: z
      };
    if (m) {
      let l = 0 !== F ? z / F : 1;
      t = {
        maxWidth: o,
        maxHeight: u,
        width: true,
        height: true
      }, i = {
        paddingBottom: "".concat(100 * l, "%"),
        maxWidth: F
      }, e = {
        position: "absolute",
        top: 0,
        left: 0,
        maxWidth: F,
        maxHeight: z
      }
    }
    return (0, n.jsx)("div", {
      className: r,
      style: t,
      children: (0, n.jsx)("div", {
        className: a()(H.pu, s),
        style: i,
        children: (0, n.jsx)(k.Ay, {
          provider: h,
          src: c.url,
          style: e,
          width: F,
          height: z,
          allowFullScreen: p,
          autoMute: l
        })
      })
    })
  }
  return (0, n.jsxs)("div", {
    className: a()(H.pu, r),
    style: m ? {
      maxWidth: F
    } : {
      width: F,
      height: z
    },
    children: [g({
      src: q,
      width: F,
      height: z,
      maxWidth: F,
      maxHeight: z,
      responsive: m,
      containerClassName: H.tW,
      imageClassName: H.jq,
      placeholder: D,
      placeholderVersion: W,
      onClick: v && null != c ? B : null,
      sourceMetadata: _,
      analyticsSource: "EmbedVideo"
    }), (0, n.jsx)("div", {
      className: H._W,
      children: (0, n.jsx)("div", {
        className: H.Fo,
        children: v ? (0, n.jsx)(b.A, {
          onPlay: null != c ? B : null,
          externalURL: R,
          renderLinkComponent: y,
          messageId: null == _ || null == (l = _.message) ? true : l.id,
          channelId: null == _ || null == (t = _.message) ? true : t.channel_id
        }) : null
      })
    })]
  })
}

function Y(e) {
  let {
    className: l,
    href: t,
    autoPlay: r,
    maxWidth: i,
    maxHeight: s,
    thumbnail: o,
    video: u,
    renderImageComponent: d,
    responsive: c,
    alt: h,
    disableAltTextDisplay: p = false,
    playable: m = true,
    hiddenSpoilers: g,
    placeholder: y,
    placeholderVersion: b,
    sourceMetadata: v
  } = e;
  return (0, n.jsx)(f.A, {
    className: a()(H.pu, l),
    original: t,
    poster: (0, S.E)(o),
    src: (0, S.E)(u),
    alt: h,
    width: o.width,
    height: o.height,
    naturalHeight: u.height,
    naturalWidth: u.width,
    maxWidth: i,
    maxHeight: s,
    responsive: c,
    autoPlay: r,
    playable: m,
    renderImageComponent: d,
    hiddenSpoilers: g,
    disableAltTextDisplay: p,
    placeholder: y,
    placeholderVersion: b,
    sourceMetadata: v
  })
}
class q extends(r = Chunk64700.PureComponent) {
  renderProvider() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
      {
        embed: {
          provider: l
        },
        renderLinkComponent: t,
        message: r
      } = this.props;
    return null == l ? null : this.shouldShowStaticPlaceholder ? (0, n.jsx)("div", {
      className: a()(H.zC, H.aK),
      children: this.renderContentPlaceholder({
        width: 80,
        height: 18
      })
    }) : (0, n.jsx)("div", {
      className: a()(H.zC, H.aK),
      children: null != l.url ? t({
        className: H.Cj,
        href: l.url,
        tabIndex: e ? 0 : false,
        children: l.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == r ? true : r.id,
        channelId: null == r ? true : r.channel_id
      }) : (0, n.jsx)("span", {
        children: l.name
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
        message: r,
        autoPlayGif: i
      } = this.props;
    return null == l ? null : this.shouldShowStaticPlaceholder ? (0, n.jsx)("div", {
      className: a()(H.rN, H.aK),
      children: this.renderContentPlaceholder({
        width: 150,
        height: 18
      })
    }) : (0, n.jsx)(W.Y.Consumer, {
      children: s => {
        let {
          disableAnimations: o
        } = s;
        return (0, n.jsxs)("div", {
          className: a()(H.rN, H.aK),
          children: [null != l.iconProxyURL ? (0, n.jsx)("img", {
            alt: "",
            className: H.SG,
            src: i && !o ? l.iconProxyURL : F(l.iconProxyURL)
          }) : null, null != l.url ? t({
            className: H.av,
            href: l.url,
            tabIndex: e ? 0 : false,
            children: l.name,
            target: "_blank",
            rel: "noreferrer noopener",
            messageId: null == r ? true : r.id,
            channelId: null == r ? true : r.channel_id
          }) : (0, n.jsx)("span", {
            className: H.QQ,
            children: l.name
          })]
        })
      }
    })
  }
  renderContentPlaceholder(e) {
    let {
      width: l,
      height: t
    } = e;
    return (0, n.jsx)(w.FQ, {
      className: H.Jl,
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
      } = l;
    return null == s ? null : this.shouldShowStaticPlaceholder ? (0, n.jsx)("div", {
      className: a()(H.gt, H.aK),
      children: this.renderContentPlaceholder({
        width: 400,
        height: 30
      })
    }) : (0, n.jsx)("div", {
      className: a()(H.gt, H.aK),
      children: null != o ? t({
        className: H.kv,
        href: o,
        tabIndex: e ? 0 : false,
        children: r(l, s),
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == i ? true : i.id,
        channelId: null == i ? true : i.channel_id
      }) : r(l, s)
    })
  }
  renderDescription() {
    let {
      embed: e,
      renderDescription: l
    } = this.props, {
      rawDescription: t
    } = e;
    return null == t ? null : (0, n.jsx)("div", {
      className: a()(H.cD, H.aK),
      children: this.shouldShowStaticPlaceholder ? this.renderContentPlaceholder({
        width: 400,
        height: 50
      }) : l(e, t, false)
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
    return null == l ? null : (0, n.jsx)(W.Y.Consumer, {
      children: n => {
        let {
          disableAnimations: o
        } = n;
        return i({
          containerClassName: H.ad,
          src: (0, S.E)(l),
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
    } = e;
    if (null == l || 0 === l.length) return null;
    let t = [],
      r = null;
    return l.forEach(l => {
      let {
        rawName: n,
        rawValue: i,
        inline: s
      } = l;
      s || null == r || (t.push(r), r = null), null == r && (r = []), r.push([this.props.renderTitle(e, n), this.props.renderDescription(e, i, true)]), 3 !== r.length && s || (t.push(r), r = null)
    }), null != r && t.push(r), (0, n.jsx)("div", {
      className: H.j0,
      children: t.map((e, l) => {
        let {
          length: t
        } = e;
        return e.map((e, r) => {
          let i, s, [a, o] = e;
          return (0, n.jsxs)("div", {
            className: H.Me,
            style: {
              gridColumn: (s = r * (i = 12 / t), "".concat(s + 1, " / ").concat(s + i + 1))
            },
            children: [(0, n.jsx)("div", {
              className: H.$L,
              children: a
            }), (0, n.jsx)("div", {
              className: H.VN,
              children: o
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
    let [u, d, c, h] = a.images.map(e => this.renderImage({
      hiddenSpoiler: i,
      isVisible: s,
      image: e,
      isGalleryImage: true,
      allImages: a.images
    }));
    return null == u && null == d && null == c && null == h ? null : (0, n.jsxs)("div", {
      className: H.$B,
      style: {
        height: o
      },
      children: [(0, n.jsxs)("div", {
        className: H.Zf,
        children: [(0, n.jsx)(p.G.Provider, {
          value: (0, x.b)(a.images[0].url, a.images[0]),
          children: u
        }, 0), null != h && (0, n.jsx)(p.G.Provider, {
          value: (0, x.b)(null == (e = a.images[2]) ? true : e.url, a.images[2]),
          children: c
        }, 2)]
      }), (0, n.jsxs)("div", {
        className: H.Zf,
        children: [(0, n.jsx)(p.G.Provider, {
          value: (0, x.b)(null == (l = a.images[1]) ? true : l.url, a.images[1]),
          children: d
        }, 1), null == h && null != c && (0, n.jsx)(p.G.Provider, {
          value: (0, x.b)(null == (t = a.images[2]) ? true : t.url, a.images[2]),
          children: c
        }, 2), null != h && (0, n.jsx)(p.G.Provider, {
          value: (0, x.b)(null == (r = a.images[3]) ? true : r.url, a.images[3]),
          children: h
        }, 3)]
      })]
    })
  }
  handleImageHover() {
    var e;
    let l = P.A.getChannel(null == (e = this.props.message) ? true : e.channel_id);
    I.default.track(L.HAw.IMAGE_HOVERED, {
      guild_id: null == l ? true : l.guild_id,
      channel_id: null == l ? true : l.id,
      image_recommendations_shown: false
    })
  }
  renderImage() {
    var e, l;
    let {
      hiddenSpoiler: t = false,
      isVisible: r = true,
      image: i,
      isGalleryImage: s = false,
      alt: o = V.intl.string(V.t.X4IxWL),
      allImages: u = null
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
      renderImageComponent: d,
      className: c,
      autoPlayGif: h
    } = this.props, {
      maxMediaWidth: g,
      maxMediaHeight: f,
      sourceMetadata: b
    } = this.state;
    if (null == i) return null;
    let w = (0, S.E)(i),
      {
        srcToOnClickOverride: x,
        srcToHandlePreloadImage: j
      } = null == u ? {
        srcToOnClickOverride: {},
        srcToHandlePreloadImage: {}
      } : (0, v.o)(u.map(e => B(K({}, (0, m.oU)(e, b, "IMAGE")), {
        original: e.url,
        srcIsAnimated: e.srcIsAnimated
      })), {}, "Embed"),
      O = y.Ay.isAnimated({
        src: (0, S.E)(i),
        original: i.url,
        animated: false,
        srcIsAnimated: i.srcIsAnimated
      }),
      A = {
        containerClassName: a()(c, {
          [H.W$]: !s,
          [H.Lw]: !s,
          [H.I_]: s
        }),
        imageContainerClassName: s ? H.FM : true,
        imageClassName: s ? H.t3 : true,
        src: (0, S.E)(i),
        alt: null == i.description || "" === i.description ? o : i.description,
        responsive: true,
        limitResponsiveWidth: !s,
        width: i.width,
        height: i.height,
        maxWidth: g,
        maxHeight: f,
        original: i.url,
        shouldLink: r,
        disableAltTextDisplay: null == i.description || "" === i.description,
        hiddenSpoilers: t,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholderVersion,
        srcIsAnimated: i.srcIsAnimated,
        mosaicStyleAlt: true
      },
      P = null != (e = null == (l = i.url.split(".").pop()) ? true : l.split("?")[0]) ? e : "";
    return "jpg" === P && (P = "jpeg"), (0, n.jsx)(p.G.Consumer, {
      children: e => (0, n.jsx)(W.Y.Consumer, {
        children: l => {
          let {
            disableAnimations: r
          } = l;
          return d(B(K({}, A), {
            autoPlay: h && !r && !t,
            renderAccessory: O ? e : null,
            handlePreloadImage: j[w],
            onClick: x[w],
            onMouseEnter: () => this.handleImageHover(),
            sourceMetadata: b,
            analyticsSource: "Embed"
          }))
        }
      }, i.url)
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
      renderImageComponent: u,
      renderLinkComponent: d,
      allowFullScreen: c,
      autoPlayGif: h,
      obscureReason: p
    } = this.props, {
      maxMediaWidth: m,
      maxMediaHeight: g,
      sourceMetadata: f
    } = this.state;
    if (null == r || null == i) return null;
    if (e) return null == s ? null : (0, n.jsx)(W.Y.Consumer, {
      children: e => {
        let {
          disableAnimations: a
        } = e;
        return (0, n.jsx)(Y, {
          className: H.W$,
          href: r,
          thumbnail: i,
          video: s,
          maxWidth: m,
          maxHeight: g,
          responsive: true,
          autoPlay: !t && h && !a && l,
          renderImageComponent: u,
          playable: l,
          hiddenSpoilers: t,
          disableAltTextDisplay: null != p,
          placeholder: s.placeholder,
          placeholderVersion: s.placeholderVersion,
          sourceMetadata: f
        })
      }
    });
    let y = () => {
        this.setState({
          videoControlsShown: true
        })
      },
      b = () => {
        this.setState({
          videoControlsShown: false
        })
      };
    return (0, n.jsx)(z, {
      className: H.W$,
      href: r,
      allowFullScreen: c,
      thumbnail: i,
      video: s,
      provider: null == a ? true : a.name,
      maxWidth: m,
      maxHeight: g,
      responsive: true,
      renderImageComponent: u,
      renderVideoComponent: o,
      renderLinkComponent: d,
      onControlsShow: y,
      onControlsHide: b,
      playable: l && !t,
      placeholder: null == s ? true : s.placeholder,
      placeholderVersion: null == s ? true : s.placeholderVersion,
      sourceMetadata: f
    })
  }
  renderFooter() {
    let {
      autoPlayGif: e
    } = this.props, {
      footer: l,
      timestamp: t
    } = this.props.embed;
    return null != l ? (0, n.jsx)(W.Y.Consumer, {
      children: r => {
        let {
          disableAnimations: i
        } = r;
        return (0, n.jsxs)("div", {
          className: a()(H.te, H.aK),
          children: [null != l.iconProxyURL && "" !== l.iconProxyURL ? (0, n.jsx)("img", {
            alt: "",
            className: H.mG,
            src: e && !i ? l.iconProxyURL : F(l.iconProxyURL)
          }) : null, (0, n.jsxs)("span", {
            className: H.oy,
            children: [l.text, null != l.text && null != t ? (0, n.jsx)("span", {
              className: H.i8,
              children: "•"
            }) : null, null != t ? (0, C.mk)(t) : null]
          })]
        })
      }
    }) : null != t ? (0, n.jsx)("div", {
      className: a()(H.te, H.aK),
      children: (0, n.jsx)("span", {
        className: H.oy,
        children: (0, C.mk)(t)
      })
    }) : true
  }
  renderStaticPlaceholderMedia() {
    var e;
    let {
      className: l,
      embed: t
    } = this.props, {
      maxMediaWidth: r,
      maxMediaHeight: i
    } = this.state, s = null != (e = t.image) ? e : t.video;
    if (null == s) return null;
    let {
      width: a,
      height: u
    } = (0, T.Uj)({
      width: s.width,
      height: s.height,
      maxWidth: r,
      maxHeight: i
    });
    return (0, n.jsx)(o._V3, {
      className: l,
      readyState: L.Rv1.READY,
      src: "",
      width: a,
      height: u,
      maxWidth: r,
      maxHeight: i,
      mediaLayoutType: _.dG.STATIC,
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
    switch (l.type) {
      case L.Auw.GIFV:
        return this.renderVideo({
          gifv: true,
          hiddenSpoiler: e,
          isVisible: t
        });
      case L.Auw.VIDEO:
      default:
        if (null != l.video) return this.renderVideo({
          gifv: false,
          hiddenSpoiler: e,
          isVisible: t
        });
        if (null != l.images) return this.renderImages({
          hiddenSpoiler: e,
          isVisible: t
        });
        return this.renderImage({
          hiddenSpoiler: e,
          isVisible: t,
          image: l.image,
          alt: l.rawTitle
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
      i = this.renderProvider(n),
      s = this.renderAuthor(n),
      a = this.renderTitle(n);
    switch (t.type) {
      case L.Auw.IMAGE:
      case L.Auw.VIDEO:
      case L.Auw.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let o = this.renderFields();
    r || (l = this.renderMedia(!n));
    let u = this.renderFooter(),
      d = null == l;
    return t.type === L.Auw.RICH && (d = null == t.video), {
      provider: i,
      author: s,
      title: a,
      description: e,
      thumbnail: !r && d ? this.renderThumbnail(n) : null,
      fields: o,
      media: l,
      footer: u
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
      width: u
    } = (0, T.Uj)({
      width: o.width,
      height: o.height,
      maxWidth: s,
      maxHeight: a
    });
    if (!e && (n === L.Auw.VIDEO || u >= 300)) return u + 32;
    if (n === L.Auw.RICH && true !== t) return 520;
    if (n === L.Auw.GIFV) {
      var d, c, h, p;
      let {
        width: e
      } = (0, T.Uj)({
        width: null != (d = null != (c = null == r ? true : r.width) ? c : null == i ? true : i.width) ? d : 0,
        height: null != (h = null != (p = null == r ? true : r.height) ? p : null == i ? true : i.height) ? h : 0,
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
    return null != e ? {
      minWidth: 150,
      minHeight: 144
    } : true
  }
  isInline() {
    let {
      hideMedia: e,
      embed: l
    } = this.props;
    return !e && (0, N.NV)(l)
  }
  renderSuppressButton(e) {
    return (0, n.jsx)(o.DUT, {
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      className: H.PP,
      onClick: e,
      "aria-label": V.intl.string(V.t.GT3fNz),
      children: (0, n.jsx)(o.PGe, {
        size: "xs",
        color: "currentColor"
      })
    })
  }
  usesJustifiedAutoStyle() {
    let {
      embed: e
    } = this.props;
    return e.type === L.Auw.IMAGE || e.type === L.Auw.VIDEO || e.type === L.Auw.GIFV || (e.type === L.Auw.RICH || e.type === L.Auw.ARTICLE) && (null != e.video || null != e.image)
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
    let c = e ? true : this.getMaxWidth(false);
    if (true === c && true === n && s !== L.Auw.RICH) {
      let e = null != r ? r : i;
      if (true !== e) {
        let {
          minWidth: l,
          minHeight: r
        } = null != (t = this.getMinSize()) ? t : {}, {
          width: n
        } = (0, T.Uj)({
          width: e.width,
          height: e.height,
          maxWidth: o,
          maxHeight: d,
          minWidth: l,
          minHeight: r
        });
        c = n
      }
    }
    let h = 150 / (u.A.fontScale / 100),
      p = null != a ? (0, M.W7)(a) : 0,
      m = (null != (l = null == a ? true : a.split("\n").length) ? l : 0) >= 5;
    return {
      maxWidth: true === c || p >= h || m ? "max-content" : c,
      justifySelf: "auto"
    }
  }
  get shouldObscure() {
    let {
      obscureReason: e
    } = this.props;
    return null != e && h._K.has(e)
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
      embed: l,
      obscureReason: t,
      className: r
    } = this.props;
    return null != l.provider && D.o.includes(l.provider.name) ? (0, n.jsx)(D.A, {
      embed: l,
      className: r
    }) : (0, O.A)(l) ? (0, n.jsx)(A.A, {
      embed: l,
      className: r
    }) : (null == (e = l.provider) ? true : e.name) === "Amazon Music" && l.type === L.Auw.RICH ? (0, n.jsx)(g.A, {
      embed: l,
      className: r
    }) : (0, d.A)(l) ? (0, n.jsx)(c.A, {
      embed: l,
      className: r
    }) : this.isInline() ? null != t ? (0, n.jsx)(j.Ay, {
      type: j.Ay.Types.ATTACHMENT,
      reason: t,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      isSingleMosaicItem: true,
      containerStyles: this.getSpoilerStyles(true),
      obscurityControlClassName: a()({
        [H.yi]: this.state.isVisible && this.state.videoControlsShown
      }),
      children: this.renderInlineMediaEmbed
    }) : this.renderInlineMediaEmbed() : null != t ? (0, n.jsx)(j.Ay, {
      type: j.Ay.Types.EMBED,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      reason: t,
      isSingleMosaicItem: true,
      containerStyles: this.getSpoilerStyles(false),
      children: this.renderEmbedContent
    }) : this.renderEmbedContent()
  }
  constructor(...e) {
    var l;
    super(...e), l = this, G(this, "state", K({
      isVisible: null == this.props.obscureReason,
      videoControlsShown: false,
      sourceMetadata: {
        message: this.props.message,
        identifier: {
          type: "embed",
          embedIndex: this.props.embedIndex
        }
      }
    }, (0, N.ds)(this.props.embed))), G(this, "onReveal", () => {
      this.setState({
        isVisible: true
      })
    }), G(this, "onToggleObscurity", () => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }), G(this, "renderInlineMediaEmbed", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        {
          obscureReason: t,
          className: r
        } = l.props,
        i = l.getMaxWidth(true);
      return (0, n.jsx)("div", {
        "aria-hidden": e,
        className: a()(H.JY, r, {
          [H.gT]: t === h.Oc.SPOILER,
          [H.We]: l.shouldObscure,
          [H.dK]: e,
          [H.qU]: l.usesJustifiedAutoStyle()
        }),
        style: {
          maxWidth: i
        },
        children: l.renderMedia(e)
      })
    }), G(this, "renderEmbedContent", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        {
          className: t,
          onSuppressEmbed: r,
          obscureReason: i
        } = l.props,
        {
          provider: s,
          author: o,
          title: u,
          description: d,
          fields: c,
          thumbnail: p,
          media: m,
          footer: g
        } = l.renderAll();
      return (0, n.jsx)("article", {
        className: a()(t, H.vO, U.PT, {
          [H.dK]: e,
          [H.o4]: i === h.Oc.SPOILER,
          [H.q$]: l.shouldObscure,
          [H.qU]: l.usesJustifiedAutoStyle()
        }),
        "aria-hidden": e,
        style: {
          borderLeftColor: l.getEmbedColor(e),
          maxWidth: l.getMaxWidth(false)
        },
        children: (0, n.jsx)("div", {
          className: H.UT,
          children: (0, n.jsxs)("div", {
            className: a()({
              [H.Vg]: true,
              [H.$H]: null != p
            }),
            children: [null != r ? l.renderSuppressButton(r) : null, s, o, u, d, c, m, p, g]
          })
        })
      })
    })
  }
}
G(q, "defaultProps", {
  hideMedia: false,
  allowFullScreen: true,
  maxThumbnailWidth: 80,
  maxThumbnailHeight: 80,
  embedIndex: 0
})