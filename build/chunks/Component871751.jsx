/** Chunk was on web.js **/
/** chunk id: 871751, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => er,
  rr: () => et
}), require("./896048.js"), require("./321073.js"), require("./228524.js"), require("./747238.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
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

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let K = 32,
  z = 12,
  q = 150,
  X = 144,
  Z = 520,
  Q = 5,
  $ = 150;

function J(e, t) {
  let n = z / t,
    r = e * n;
  return "".concat(r + 1, " / ").concat(r + n + 1)
}

function ee(e) {
  let t = x.A.toURLSafe(e);
  return null == t ? e : (t.searchParams.set("format", "png"), t.toString())
}

function et(e) {
  var t, n;
  let {
    className: r,
    iframeWrapperClassName: s,
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
    playable: y = true,
    autoPlay: b = false,
    autoMute: O,
    volume: v,
    onPlay: A,
    onPause: I,
    onEnded: S,
    onControlsHide: C,
    onControlsShow: R,
    onVolumeChange: w,
    onMute: D,
    href: x,
    placeholder: j,
    placeholderVersion: M,
    sourceMetadata: U
  } = e, [G, F] = a.useState(b), B = null != d && null == d.proxyURL, H = a.useCallback(() => F(false), [F]), Y = e => {
    e.preventDefault(), e.stopPropagation(), null == A || A(false), F(true), B && (N._.dispatch(k.jej.VIDEO_EMBED_PLAYBACK_STARTED), N._.subscribeOnce(k.jej.VIDEO_EMBED_PLAYBACK_STARTED, H))
  };
  a.useEffect(() => () => {
    B && N._.unsubscribe(k.jej.VIDEO_EMBED_PLAYBACK_STARTED, H)
  }, [B, H]);
  let {
    width: W,
    height: K
  } = u;
  null != d && (W = d.width, K = d.height);
  let z = (0, P.Uj)({
    width: W,
    height: K,
    maxWidth: l,
    maxHeight: c
  });
  W = Math.max(z.width, q), K = Math.max(z.height, X);
  let Z = (0, T.E)(u);
  if (null != d && null != d.proxyURL) return (0, i.jsx)("div", {
    className: o()(V.pu, r),
    children: m({
      poster: Z,
      src: d.proxyURL,
      placeholder: j,
      placeholderVersion: M,
      width: W,
      height: K,
      responsive: _,
      autoPlay: b,
      onEnded: S,
      naturalWidth: d.width,
      naturalHeight: d.height,
      onVolumeChange: w,
      playable: y,
      autoMute: O,
      volume: v,
      onPlay: A,
      onPause: I,
      onMute: D,
      onControlsHide: C,
      onControlsShow: R,
      sourceMetadata: U
    })
  });
  if (G && null != d) {
    let e, t = true === O || "function" == typeof O && O(),
      n = {
        width: W,
        height: K
      },
      a = {
        width: W,
        height: K
      };
    if (_) {
      let t = 0 !== W ? K / W : 1;
      n = {
        maxWidth: l,
        maxHeight: c,
        width: true,
        height: true
      }, a = {
        paddingBottom: "".concat(100 * t, "%"),
        maxWidth: W
      }, e = {
        position: "absolute",
        top: 0,
        left: 0,
        maxWidth: W,
        maxHeight: K
      }
    }
    return (0, i.jsx)("div", {
      className: r,
      style: n,
      children: (0, i.jsx)("div", {
        className: o()(V.pu, s),
        style: a,
        children: (0, i.jsx)(L.Ay, {
          provider: f,
          src: d.url,
          style: e,
          width: W,
          height: K,
          allowFullScreen: p,
          autoMute: t
        })
      })
    })
  }
  return (0, i.jsxs)("div", {
    className: o()(V.pu, r),
    style: _ ? {
      maxWidth: W
    } : {
      width: W,
      height: K
    },
    children: [h({
      src: Z,
      width: W,
      height: K,
      maxWidth: W,
      maxHeight: K,
      responsive: _,
      containerClassName: V.tW,
      imageClassName: V.jq,
      placeholder: j,
      placeholderVersion: M,
      onClick: y && null != d ? Y : null,
      sourceMetadata: U,
      analyticsSource: "EmbedVideo"
    }), (0, i.jsx)("div", {
      className: V._W,
      children: (0, i.jsx)("div", {
        className: V.Fo,
        children: y ? (0, i.jsx)(E.A, {
          onPlay: null != d ? Y : null,
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
    maxHeight: s,
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
    sourceMetadata: y
  } = e;
  return (0, i.jsx)(m.A, {
    className: o()(V.pu, t),
    original: n,
    poster: (0, T.E)(l),
    src: (0, T.E)(c),
    alt: f,
    width: l.width,
    height: l.height,
    naturalHeight: c.height,
    naturalWidth: c.width,
    maxWidth: a,
    maxHeight: s,
    responsive: d,
    autoPlay: r,
    playable: _,
    renderImageComponent: u,
    hiddenSpoilers: h,
    disableAltTextDisplay: p,
    placeholder: g,
    placeholderVersion: E,
    sourceMetadata: y
  })
}
class er extends(r = Chunk64700.PureComponent) {
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
      className: o()(V.zC, V.aK),
      children: this.renderContentPlaceholder({
        width: 80,
        height: 18
      })
    }) : (0, i.jsx)("div", {
      className: o()(V.zC, V.aK),
      children: null != t.url ? n({
        className: V.Cj,
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
      className: o()(V.rN, V.aK),
      children: this.renderContentPlaceholder({
        width: 150,
        height: 18
      })
    }) : (0, i.jsx)(M.Y.Consumer, {
      children: s => {
        let {
          disableAnimations: l
        } = s;
        return (0, i.jsxs)("div", {
          className: o()(V.rN, V.aK),
          children: [null != t.iconProxyURL ? (0, i.jsx)("img", {
            alt: "",
            className: V.SG,
            src: a && !l ? t.iconProxyURL : ee(t.iconProxyURL)
          }) : null, null != t.url ? n({
            className: V.av,
            href: t.url,
            tabIndex: e ? 0 : false,
            children: t.name,
            target: "_blank",
            rel: "noreferrer noopener",
            messageId: null == r ? true : r.id,
            channelId: null == r ? true : r.channel_id
          }) : (0, i.jsx)("span", {
            className: V.QQ,
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
    return (0, i.jsx)(b.FQ, {
      className: V.Jl,
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
        rawTitle: s,
        url: l
      } = t;
    return null == s ? null : this.shouldShowStaticPlaceholder ? (0, i.jsx)("div", {
      className: o()(V.gt, V.aK),
      children: this.renderContentPlaceholder({
        width: 400,
        height: 30
      })
    }) : (0, i.jsx)("div", {
      className: o()(V.gt, V.aK),
      children: null != l ? n({
        className: V.kv,
        href: l,
        tabIndex: e ? 0 : false,
        children: r(t, s),
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == a ? true : a.id,
        channelId: null == a ? true : a.channel_id
      }) : r(t, s)
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
      className: o()(V.cD, V.aK),
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
        autoPlayGif: s
      } = this.props,
      {
        sourceMetadata: o
      } = this.state;
    return null == t ? null : (0, i.jsx)(M.Y.Consumer, {
      children: i => {
        let {
          disableAnimations: l
        } = i;
        return a({
          containerClassName: V.ad,
          src: (0, T.E)(t),
          original: t.url,
          width: t.width,
          height: t.height,
          maxWidth: n,
          maxHeight: r,
          shouldLink: e,
          autoPlay: s && !l,
          srcIsAnimated: t.srcIsAnimated,
          placeholder: t.placeholder,
          placeholderVersion: t.placeholderVersion,
          sourceMetadata: o,
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
        inline: s
      } = t;
      s || null == r || (n.push(r), r = null), null == r && (r = []), r.push([this.props.renderTitle(e, i), this.props.renderDescription(e, a, true)]), 3 !== r.length && s || (n.push(r), r = null)
    }), null != r && n.push(r), (0, i.jsx)("div", {
      className: V.j0,
      children: n.map((e, t) => {
        let {
          length: n
        } = e;
        return e.map((e, r) => {
          let [a, s] = e;
          return (0, i.jsxs)("div", {
            className: V.Me,
            style: {
              gridColumn: J(r, n)
            },
            children: [(0, i.jsx)("div", {
              className: V.$L,
              children: a
            }), (0, i.jsx)("div", {
              className: V.VN,
              children: s
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
      isVisible: s = true
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, {
      embed: o
    } = this.props, {
      maxMediaHeight: l
    } = this.state;
    if (null == o.images) return null;
    let [c, u, d, f] = o.images.map(e => this.renderImage({
      hiddenSpoiler: a,
      isVisible: s,
      image: e,
      isGalleryImage: true,
      allImages: o.images
    }));
    return null == c && null == u && null == d && null == f ? null : (0, i.jsxs)("div", {
      className: V.$B,
      style: {
        height: l
      },
      children: [(0, i.jsxs)("div", {
        className: V.Zf,
        children: [(0, i.jsx)(p.G.Provider, {
          value: (0, O.b)(o.images[0].url, o.images[0]),
          children: c
        }, 0), null != f && (0, i.jsx)(p.G.Provider, {
          value: (0, O.b)(null == (e = o.images[2]) ? true : e.url, o.images[2]),
          children: d
        }, 2)]
      }), (0, i.jsxs)("div", {
        className: V.Zf,
        children: [(0, i.jsx)(p.G.Provider, {
          value: (0, O.b)(null == (t = o.images[1]) ? true : t.url, o.images[1]),
          children: u
        }, 1), null == f && null != d && (0, i.jsx)(p.G.Provider, {
          value: (0, O.b)(null == (n = o.images[2]) ? true : n.url, o.images[2]),
          children: d
        }, 2), null != f && (0, i.jsx)(p.G.Provider, {
          value: (0, O.b)(null == (r = o.images[3]) ? true : r.url, o.images[3]),
          children: f
        }, 3)]
      })]
    })
  }
  handleImageHover() {
    var e;
    let t = S.A.getChannel(null == (e = this.props.message) ? true : e.channel_id);
    C.default.track(k.HAw.IMAGE_HOVERED, {
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
      isGalleryImage: s = false,
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
    let b = (0, T.E)(a),
      {
        srcToOnClickOverride: O,
        srcToHandlePreloadImage: v
      } = null == c ? {
        srcToOnClickOverride: {},
        srcToHandlePreloadImage: {}
      } : (0, y.o)(c.map(e => W(H({}, (0, _.oU)(e, E, "IMAGE")), {
        original: e.url,
        srcIsAnimated: e.srcIsAnimated
      })), {}, "Embed"),
      A = g.Ay.isAnimated({
        src: (0, T.E)(a),
        original: a.url,
        animated: false,
        srcIsAnimated: a.srcIsAnimated
      }),
      I = {
        containerClassName: o()(d, {
          [V.W$]: !s,
          [V.Lw]: !s,
          [V.I_]: s
        }),
        imageContainerClassName: s ? V.FM : true,
        imageClassName: s ? V.t3 : true,
        src: (0, T.E)(a),
        alt: null == a.description || "" === a.description ? l : a.description,
        responsive: true,
        limitResponsiveWidth: !s,
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
      S = null != (e = null == (t = a.url.split(".").pop()) ? true : t.split("?")[0]) ? e : "";
    return "jpg" === S && (S = "jpeg"), (0, i.jsx)(p.G.Consumer, {
      children: e => (0, i.jsx)(M.Y.Consumer, {
        children: t => {
          let {
            disableAnimations: r
          } = t;
          return u(W(H({}, I), {
            autoPlay: f && !r && !n,
            renderAccessory: A ? e : null,
            handlePreloadImage: v[b],
            onClick: O[b],
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
        video: s,
        provider: o
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
    if (e) return null == s ? null : (0, i.jsx)(M.Y.Consumer, {
      children: e => {
        let {
          disableAnimations: o
        } = e;
        return (0, i.jsx)(en, {
          className: V.W$,
          href: r,
          thumbnail: a,
          video: s,
          maxWidth: _,
          maxHeight: h,
          responsive: true,
          autoPlay: !n && f && !o && t,
          renderImageComponent: c,
          playable: t,
          hiddenSpoilers: n,
          disableAltTextDisplay: null != p,
          placeholder: s.placeholder,
          placeholderVersion: s.placeholderVersion,
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
      className: V.W$,
      href: r,
      allowFullScreen: d,
      thumbnail: a,
      video: s,
      provider: null == o ? true : o.name,
      maxWidth: _,
      maxHeight: h,
      responsive: true,
      renderImageComponent: c,
      renderVideoComponent: l,
      renderLinkComponent: u,
      onControlsShow: g,
      onControlsHide: E,
      playable: t && !n,
      placeholder: null == s ? true : s.placeholder,
      placeholderVersion: null == s ? true : s.placeholderVersion,
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
    return null != t ? (0, i.jsx)(M.Y.Consumer, {
      children: r => {
        let {
          disableAnimations: a
        } = r;
        return (0, i.jsxs)("div", {
          className: o()(V.te, V.aK),
          children: [null != t.iconProxyURL && "" !== t.iconProxyURL ? (0, i.jsx)("img", {
            alt: "",
            className: V.mG,
            src: e && !a ? t.iconProxyURL : ee(t.iconProxyURL)
          }) : null, (0, i.jsxs)("span", {
            className: V.oy,
            children: [t.text, null != t.text && null != n ? (0, i.jsx)("span", {
              className: V.i8,
              children: "•"
            }) : null, null != n ? (0, R.mk)(n) : null]
          })]
        })
      }
    }) : null != n ? (0, i.jsx)("div", {
      className: o()(V.te, V.aK),
      children: (0, i.jsx)("span", {
        className: V.oy,
        children: (0, R.mk)(n)
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
    } = this.state, s = null != (e = n.image) ? e : n.video;
    if (null == s) return null;
    let {
      width: o,
      height: c
    } = (0, P.Uj)({
      width: s.width,
      height: s.height,
      maxWidth: r,
      maxHeight: a
    });
    return (0, i.jsx)(l._V3, {
      className: t,
      readyState: k.Rv1.READY,
      src: "",
      width: o,
      height: c,
      maxWidth: r,
      maxHeight: a,
      mediaLayoutType: U.dG.STATIC,
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
      case k.Auw.GIFV:
        return this.renderVideo({
          gifv: true,
          hiddenSpoiler: e,
          isVisible: n
        });
      case k.Auw.VIDEO:
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
      s = this.renderAuthor(i),
      o = this.renderTitle(i);
    switch (n.type) {
      case k.Auw.IMAGE:
      case k.Auw.VIDEO:
      case k.Auw.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let l = this.renderFields();
    r || (t = this.renderMedia(!i));
    let c = this.renderFooter(),
      u = null == t;
    return n.type === k.Auw.RICH && (u = null == n.video), {
      provider: a,
      author: s,
      title: o,
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
      maxMediaWidth: s,
      maxMediaHeight: o
    } = this.state, l = null != t ? t : r;
    if (null == l) return;
    let {
      width: c
    } = (0, P.Uj)({
      width: l.width,
      height: l.height,
      maxWidth: s,
      maxHeight: o
    });
    if (!e && (i === k.Auw.VIDEO || c >= 300)) return c + K;
    if (i === k.Auw.RICH && true !== n) return Z;
    if (i === k.Auw.GIFV) {
      var u, d, f, p;
      let {
        width: e
      } = (0, P.Uj)({
        width: null != (u = null != (d = null == r ? true : r.width) ? d : null == a ? true : a.width) ? u : 0,
        height: null != (f = null != (p = null == r ? true : r.height) ? p : null == a ? true : a.height) ? f : 0,
        maxWidth: s,
        maxHeight: o
      });
      return e
    }
  }
  getMinSize() {
    let {
      video: e
    } = this.props.embed;
    return null != e ? {
      minWidth: q,
      minHeight: X
    } : true
  }
  isInline() {
    let {
      hideMedia: e,
      embed: t
    } = this.props;
    return !e && (0, w.NV)(t)
  }
  renderSuppressButton(e) {
    return (0, i.jsx)(l.DUT, {
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      className: V.PP,
      onClick: e,
      "aria-label": G.intl.string(G.t.GT3fNz),
      children: (0, i.jsx)(l.PGe, {
        size: "xs",
        color: "currentColor"
      })
    })
  }
  usesJustifiedAutoStyle() {
    let {
      embed: e
    } = this.props;
    return e.type === k.Auw.IMAGE || e.type === k.Auw.VIDEO || e.type === k.Auw.GIFV || (e.type === k.Auw.RICH || e.type === k.Auw.ARTICLE) && (null != e.video || null != e.image)
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
        type: s,
        rawDescription: o
      }
    } = this.props, {
      maxMediaWidth: l,
      maxMediaHeight: u
    } = this.state;
    if (!this.usesJustifiedAutoStyle()) return;
    let d = e ? true : this.getMaxWidth(false);
    if (true === d && true === i && s !== k.Auw.RICH) {
      let e = null != r ? r : a;
      if (true !== e) {
        let {
          minWidth: t,
          minHeight: r
        } = null != (n = this.getMinSize()) ? n : {}, {
          width: i
        } = (0, P.Uj)({
          width: e.width,
          height: e.height,
          maxWidth: l,
          maxHeight: u,
          minWidth: t,
          minHeight: r
        });
        d = i
      }
    }
    let f = $ / (c.A.fontScale / 100),
      p = (null != o ? (0, D.W7)(o) : 0) >= f,
      _ = (null != (t = null == o ? true : o.split("\n").length) ? t : 0) >= Q,
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
    return null != e && f._K.has(e)
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
    return null != t.provider && j.o.includes(t.provider.name) ? (0, i.jsx)(j.A, {
      embed: t,
      className: r
    }) : (0, A.A)(t) ? (0, i.jsx)(I.A, {
      embed: t,
      className: r
    }) : (null == (e = t.provider) ? true : e.name) === "Amazon Music" && t.type === k.Auw.RICH ? (0, i.jsx)(h.A, {
      embed: t,
      className: r
    }) : (0, u.A)(t) ? (0, i.jsx)(d.A, {
      embed: t,
      className: r
    }) : this.isInline() ? null != n ? (0, i.jsx)(v.Ay, {
      type: v.Ay.Types.ATTACHMENT,
      reason: n,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      isSingleMosaicItem: true,
      containerStyles: this.getSpoilerStyles(true),
      obscurityControlClassName: o()({
        [V.yi]: this.state.isVisible && this.state.videoControlsShown
      }),
      children: this.renderInlineMediaEmbed
    }) : this.renderInlineMediaEmbed() : null != n ? (0, i.jsx)(v.Ay, {
      type: v.Ay.Types.EMBED,
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
    super(...e), t = this, B(this, "state", H({
      isVisible: null == this.props.obscureReason,
      videoControlsShown: false,
      sourceMetadata: {
        message: this.props.message,
        identifier: {
          type: "embed",
          embedIndex: this.props.embedIndex
        }
      }
    }, (0, w.ds)(this.props.embed))), B(this, "onReveal", () => {
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
        className: o()(V.JY, r, {
          [V.gT]: n === f.Oc.SPOILER,
          [V.We]: t.shouldObscure,
          [V.dK]: e,
          [V.qU]: t.usesJustifiedAutoStyle()
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
          provider: s,
          author: l,
          title: c,
          description: u,
          fields: d,
          thumbnail: p,
          media: _,
          footer: h
        } = t.renderAll();
      return (0, i.jsx)("article", {
        className: o()(n, V.vO, F.PT, {
          [V.dK]: e,
          [V.o4]: a === f.Oc.SPOILER,
          [V.q$]: t.shouldObscure,
          [V.qU]: t.usesJustifiedAutoStyle()
        }),
        "aria-hidden": e,
        style: {
          borderLeftColor: t.getEmbedColor(e),
          maxWidth: t.getMaxWidth(false)
        },
        children: (0, i.jsx)("div", {
          className: V.UT,
          children: (0, i.jsxs)("div", {
            className: o()({
              [V.Vg]: true,
              [V.$H]: null != p
            }),
            children: [null != r ? t.renderSuppressButton(r) : null, s, l, c, u, d, _, p, h]
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