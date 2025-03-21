/** Chunk was on 53937 **/
l.d(t, {
  BC: () => G,
  ZP: () => U
}), l(47120), l(653041), l(301563), l(266796);
var n, r = l(200651),
  i = l(192379),
  s = l(120356),
  a = l.n(s),
  o = l(228458),
  d = l(481060),
  u = l(399654),
  c = l(370298),
  h = l(95398),
  m = l(947849),
  p = l(768494),
  g = l(624195),
  b = l(44824),
  v = l(124347),
  f = l(283756),
  y = l(169525),
  x = l(94396),
  w = l(785992),
  I = l(400266),
  j = l(592125),
  O = l(52824),
  N = l(626135),
  S = l(585483),
  C = l(55935),
  E = l(408433),
  P = l(956664),
  T = l(468846),
  M = l(401419),
  A = l(249458),
  H = l(981631),
  k = l(217702),
  L = l(388032),
  R = l(552249),
  V = l(228010),
  _ = l(509045),
  B = l(944951);

function W(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      W(e, t, l[t])
    })
  }
  return e
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}

function G(e) {
  var t, l;
  let {
    className: n,
    iframeWrapperClassName: s,
    maxWidth: o,
    maxHeight: d,
    thumbnail: u,
    video: c,
    provider: h,
    allowFullScreen: m = !0,
    responsive: p = !1,
    renderImageComponent: g,
    renderVideoComponent: b,
    renderLinkComponent: v,
    playable: y = !0,
    autoPlay: x = !1,
    autoMute: w,
    volume: I,
    onPlay: j,
    onPause: N,
    onEnded: C,
    onControlsHide: E,
    onControlsShow: M,
    onVolumeChange: A,
    onMute: k,
    href: L,
    placeholder: V,
    placeholderVersion: _,
    sourceMetadata: B
  } = e, [W, D] = i.useState(x), F = null != c && null == c.proxyURL, G = i.useCallback(() => D(!1), [D]), Z = e => {
    e.preventDefault(), e.stopPropagation(), null == j || j(!1), D(!0), F && (S.S.dispatch(H.CkL.VIDEO_EMBED_PLAYBACK_STARTED), S.S.subscribeOnce(H.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G))
  };
  i.useEffect(() => () => {
    F && S.S.unsubscribe(H.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G)
  }, [F, G]);
  let {
    width: U,
    height: Y
  } = u;
  null != c && (U = c.width, Y = c.height);
  let q = (0, P.Tj)({
    width: U,
    height: Y,
    maxWidth: o,
    maxHeight: d
  });
  U = Math.max(q.width, 150), Y = Math.max(q.height, 144);
  let z = (0, O.q)(u);
  if (null != c && null != c.proxyURL) return (0, r.jsx)("div", {
    className: a()(R.embedVideo, n),
    children: b({
      poster: z,
      src: c.proxyURL,
      placeholder: V,
      placeholderVersion: _,
      width: U,
      height: Y,
      responsive: p,
      autoPlay: x,
      onEnded: C,
      naturalWidth: c.width,
      naturalHeight: c.height,
      onVolumeChange: A,
      playable: y,
      autoMute: w,
      volume: I,
      onPlay: j,
      onPause: N,
      onMute: k,
      onControlsHide: E,
      onControlsShow: M,
      sourceMetadata: B
    })
  });
  if (W && null != c) {
    let e;
    let t = !0 === w || "function" == typeof w && w(),
      l = {
        width: U,
        height: Y
      },
      i = {
        width: U,
        height: Y
      };
    if (p) {
      let t = 0 !== U ? Y / U : 1;
      l = {
        maxWidth: o,
        maxHeight: d,
        width: void 0,
        height: void 0
      }, i = {
        paddingBottom: "".concat(100 * t, "%"),
        maxWidth: U
      }, e = {
        position: "absolute",
        top: 0,
        left: 0,
        maxWidth: U,
        maxHeight: Y
      }
    }
    return (0, r.jsx)("div", {
      className: n,
      style: l,
      children: (0, r.jsx)("div", {
        className: a()(R.embedVideo, s),
        style: i,
        children: (0, r.jsx)(T.ZP, {
          provider: h,
          src: c.url,
          style: e,
          width: U,
          height: Y,
          allowFullScreen: m,
          autoMute: t
        })
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: a()(R.embedVideo, n),
    style: p ? {
      maxWidth: U
    } : {
      width: U,
      height: Y
    },
    children: [g({
      src: z,
      width: U,
      height: Y,
      maxWidth: U,
      maxHeight: Y,
      responsive: p,
      containerClassName: R.embedVideoImageComponent,
      imageClassName: R.embedVideoImageComponentInner,
      placeholder: V,
      placeholderVersion: _,
      onClick: y && null != c ? Z : null,
      sourceMetadata: B,
      analyticsSource: "EmbedVideo"
    }), (0, r.jsx)("div", {
      className: R.embedVideoActions,
      children: (0, r.jsx)("div", {
        className: R.centerContent,
        children: y ? (0, r.jsx)(f.Z, {
          onPlay: null != c ? Z : null,
          externalURL: L,
          renderLinkComponent: v,
          messageId: null == B ? void 0 : null === (t = B.message) || void 0 === t ? void 0 : t.id,
          channelId: null == B ? void 0 : null === (l = B.message) || void 0 === l ? void 0 : l.channel_id
        }) : null
      })
    })]
  })
}

function Z(e) {
  let {
    className: t,
    href: l,
    autoPlay: n,
    maxWidth: i,
    maxHeight: s,
    thumbnail: o,
    video: d,
    renderImageComponent: u,
    responsive: c,
    alt: h,
    disableAltTextDisplay: m = !1,
    playable: p = !0,
    hiddenSpoilers: g,
    placeholder: v,
    placeholderVersion: f,
    sourceMetadata: y
  } = e;
  return (0, r.jsx)(b.Z, {
    className: a()(R.embedVideo, t),
    original: l,
    poster: (0, O.q)(o),
    src: (0, O.q)(d),
    alt: h,
    width: o.width,
    height: o.height,
    naturalHeight: d.height,
    naturalWidth: d.width,
    maxWidth: i,
    maxHeight: s,
    responsive: c,
    autoPlay: n,
    playable: p,
    renderImageComponent: u,
    hiddenSpoilers: g,
    disableAltTextDisplay: m,
    placeholder: v,
    placeholderVersion: f,
    sourceMetadata: y
  })
}
class U extends(n = i.PureComponent) {
  renderProvider() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          provider: t
        },
        renderLinkComponent: l,
        message: n
      } = this.props;
    return null == t ? null : (0, r.jsx)("div", {
      className: a()(R.embedProvider, R.embedMargin),
      children: null != t.url ? l({
        className: R.embedLink,
        href: t.url,
        tabIndex: e ? 0 : -1,
        children: t.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == n ? void 0 : n.id,
        channelId: null == n ? void 0 : n.channel_id
      }) : (0, r.jsx)("span", {
        children: t.name
      })
    })
  }
  renderAuthor() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          author: t
        },
        renderLinkComponent: l,
        message: n
      } = this.props;
    return null == t ? null : (0, r.jsxs)("div", {
      className: a()(R.embedAuthor, R.embedMargin),
      children: [null != t.iconProxyURL ? (0, r.jsx)("img", {
        alt: "",
        className: R.embedAuthorIcon,
        src: t.iconProxyURL
      }) : null, null != t.url ? l({
        className: R.embedAuthorNameLink,
        href: t.url,
        tabIndex: e ? 0 : -1,
        children: t.name,
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == n ? void 0 : n.id,
        channelId: null == n ? void 0 : n.channel_id
      }) : (0, r.jsx)("span", {
        className: R.embedAuthorName,
        children: t.name
      })]
    })
  }
  renderTitle() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: t,
        renderLinkComponent: l,
        renderTitle: n,
        message: i
      } = this.props,
      {
        rawTitle: s,
        url: o
      } = t;
    return null == s ? null : (0, r.jsx)("div", {
      className: a()(R.embedTitle, R.embedMargin),
      children: null != o ? l({
        className: R.embedTitleLink,
        href: o,
        tabIndex: e ? 0 : -1,
        children: n(t, s),
        target: "_blank",
        rel: "noreferrer noopener",
        messageId: null == i ? void 0 : i.id,
        channelId: null == i ? void 0 : i.channel_id
      }) : n(t, s)
    })
  }
  renderDescription() {
    let {
      embed: e,
      renderDescription: t
    } = this.props, {
      rawDescription: l
    } = e;
    return null == l ? null : (0, r.jsx)("div", {
      className: a()(R.embedDescription, R.embedMargin),
      children: t(e, l, !1)
    })
  }
  renderThumbnail() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      {
        embed: {
          thumbnail: t
        },
        maxThumbnailWidth: l,
        maxThumbnailHeight: n,
        renderImageComponent: i,
        autoPlayGif: s
      } = this.props,
      {
        sourceMetadata: a
      } = this.state;
    return null == t ? null : (0, r.jsx)(A.G.Consumer, {
      children: r => {
        let {
          disableAnimations: o
        } = r;
        return i({
          containerClassName: R.embedThumbnail,
          src: (0, O.q)(t),
          original: t.url,
          width: t.width,
          height: t.height,
          maxWidth: l,
          maxHeight: n,
          shouldLink: e,
          autoPlay: s && !o,
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
      fields: t
    } = e;
    if (null == t || 0 === t.length) return null;
    let l = [],
      n = null;
    return t.forEach(t => {
      let {
        rawName: r,
        rawValue: i,
        inline: s
      } = t;
      s || null == n || (l.push(n), n = null), null == n && (n = []), n.push([this.props.renderTitle(e, r), this.props.renderDescription(e, i, !0)]), 3 !== n.length && s || (l.push(n), n = null)
    }), null != n && l.push(n), (0, r.jsx)("div", {
      className: R.embedFields,
      children: l.map((e, t) => {
        let {
          length: l
        } = e;
        return e.map((e, n) => {
          let [i, s] = e;
          return (0, r.jsxs)("div", {
            className: R.embedField,
            style: {
              gridColumn: function(e, t) {
                let l = 12 / t,
                  n = e * l;
                return "".concat(n + 1, " / ").concat(n + l + 1)
              }(n, l)
            },
            children: [(0, r.jsx)("div", {
              className: R.embedFieldName,
              children: i
            }), (0, r.jsx)("div", {
              className: R.embedFieldValue,
              children: s
            })]
          }, "".concat(t, "-").concat(n))
        })
      })
    })
  }
  renderImages() {
    let {
      hiddenSpoiler: e = !1,
      isVisible: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      embed: l
    } = this.props, {
      maxMediaHeight: n
    } = this.state;
    if (null == l.images) return null;
    let [i, s, a, o] = l.images.map(n => this.renderImage({
      hiddenSpoiler: e,
      isVisible: t,
      image: n,
      isGalleryImage: !0,
      allImages: l.images
    }));
    return null == i && null == s && null == a && null == o ? null : (0, r.jsxs)("div", {
      className: R.embedGalleryImagesWrapper,
      style: {
        height: n
      },
      children: [(0, r.jsxs)("div", {
        className: R.embedGallerySide,
        children: [i, null != o && a]
      }), (0, r.jsxs)("div", {
        className: R.embedGallerySide,
        children: [s, null == o && null != a && a, null != o && o]
      })]
    })
  }
  renderImageHoverButtons(e) {
    let {
      mimeType: t,
      downloadURL: l,
      isVisualMediaType: n,
      channelId: i
    } = e;
    return (0, r.jsx)("div", {
      className: a()(V.hoverButtonGroup, {
        [V.nonMediaMosaicItem]: !n,
        [V.forceShowHover]: this.state.showImageAppMenu
      }),
      children: (0, r.jsx)(c.Z, {
        toggleShowMenu: () => {
          this.setState({
            showImageAppMenu: !this.state.showImageAppMenu
          })
        },
        showMenu: this.state.showImageAppMenu,
        channelId: i,
        className: a()(V.hoverButton, {
          [V.selected]: this.state.showImageAppMenu
        }),
        imageUrl: l,
        mimeType: t
      })
    })
  }
  handleImageHover(e, t, l) {
    if (l) {
      if (e && !this.state.isImageHovered) {
        var n, r;
        this.setState({
          isImageHovered: !0
        });
        let e = j.Z.getChannel(null === (n = this.props.message) || void 0 === n ? void 0 : n.channel_id);
        this.props.showImageRecs && (0, u.a)({
          channelId: null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : "",
          location: o.I.CONTEXTUAL_IMAGE,
          withCommands: !0
        }), N.default.track(H.rMx.IMAGE_HOVERED, {
          guild_id: null == e ? void 0 : e.guild_id,
          channel_id: null == e ? void 0 : e.id,
          image_recommendations_shown: this.props.showImageRecs
        })
      } else !e && this.state.isImageHovered && this.setState({
        isImageHovered: !1
      })
    }
  }
  renderImage() {
    var e, t, l, n, i;
    let {
      hiddenSpoiler: s = !1,
      isVisible: o = !0,
      image: d,
      isGalleryImage: u = !1,
      alt: c = L.NW.string(L.t.X4IxWF),
      allImages: h = null
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      renderImageComponent: g,
      className: b,
      autoPlayGif: f
    } = this.props, {
      maxMediaWidth: y,
      maxMediaHeight: w,
      sourceMetadata: I
    } = this.state;
    if (null == d) return null;
    let j = (0, O.q)(d),
      {
        srcToOnClickOverride: N,
        srcToHandlePreloadImage: S
      } = null == h ? {
        srcToOnClickOverride: {},
        srcToHandlePreloadImage: {}
      } : (0, x.J)(h.map(e => F(D({}, (0, p.Hv)(e, I, "IMAGE")), {
        original: e.url,
        srcIsAnimated: e.srcIsAnimated
      })), {}, "Embed"),
      C = v.ZP.isAnimated({
        src: (0, O.q)(d),
        original: d.url,
        animated: !1,
        srcIsAnimated: d.srcIsAnimated
      }),
      E = {
        containerClassName: a()(b, {
          [R.embedMedia]: !u,
          [R.embedImage]: !u,
          [R.galleryImage]: u
        }),
        imageContainerClassName: u ? R.galleryImageContainer : void 0,
        imageClassName: u ? R.embedGalleryImageElement : void 0,
        src: (0, O.q)(d),
        alt: c,
        responsive: !0,
        limitResponsiveWidth: !u,
        width: d.width,
        height: d.height,
        maxWidth: y,
        maxHeight: w,
        original: d.url,
        shouldLink: o,
        disableAltTextDisplay: !0,
        hiddenSpoilers: s,
        placeholder: d.placeholder,
        placeholderVersion: d.placeholderVersion,
        srcIsAnimated: d.srcIsAnimated
      },
      P = null !== (n = null === (e = d.url.split(".").pop()) || void 0 === e ? void 0 : e.split("?")[0]) && void 0 !== n ? n : "";
    "jpg" === P && (P = "jpeg");
    let T = null != d && !v.uo.test(null == d ? void 0 : d.url) && !(d.srcIsAnimated && v.YG.test(null == d ? void 0 : d.url)) && !(d.srcIsAnimated && v.FH.test(null == d ? void 0 : d.url)),
      M = !0 !== this.props.isSearchResult && o && (null === (t = this.props.message) || void 0 === t ? void 0 : t.channel_id) != null && (null === (l = this.props.message) || void 0 === l ? void 0 : l.channel_id) !== void 0 && T && !(null != (i = d) && (i.width <= k.OF || i.height <= k.OF)) && null != P;
    return (0, r.jsx)(m.h.Consumer, {
      children: e => (0, r.jsx)(A.G.Consumer, {
        children: t => {
          let {
            disableAnimations: l
          } = t;
          return g(F(D({}, E), {
            autoPlay: f && !l && !s,
            renderAccessory: C ? e : null,
            handlePreloadImage: S[j],
            onClick: N[j],
            onMouseEnter: () => this.handleImageHover(!0, d, M),
            onMouseLeave: () => this.handleImageHover(!1, d, M),
            renderAdjacentContent: () => {
              var e, t;
              return !0 === this.props.showImageRecs && M ? this.renderImageHoverButtons({
                mimeType: ["image", P],
                downloadURL: null !== (t = d.proxyURL) && void 0 !== t ? t : d.url,
                isVisualMediaType: null != d,
                channelId: null === (e = this.props.message) || void 0 === e ? void 0 : e.channel_id
              }) : null
            },
            sourceMetadata: I,
            analyticsSource: "Embed"
          }))
        }
      }, d.url)
    })
  }
  renderVideo() {
    let {
      gifv: e = !1,
      isVisible: t = !0,
      hiddenSpoiler: l = !1
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      embed: {
        url: n,
        thumbnail: i,
        video: s,
        provider: a
      },
      renderVideoComponent: o,
      renderImageComponent: d,
      renderLinkComponent: u,
      allowFullScreen: c,
      autoPlayGif: h,
      obscureReason: m
    } = this.props, {
      maxMediaWidth: p,
      maxMediaHeight: g,
      sourceMetadata: b
    } = this.state;
    return null == n || null == i ? null : e ? null == s ? null : (0, r.jsx)(A.G.Consumer, {
      children: e => {
        let {
          disableAnimations: a
        } = e;
        return (0, r.jsx)(Z, {
          className: R.embedMedia,
          href: n,
          thumbnail: i,
          video: s,
          maxWidth: p,
          maxHeight: g,
          responsive: !0,
          autoPlay: !l && h && !a && t,
          renderImageComponent: d,
          playable: t,
          hiddenSpoilers: l,
          disableAltTextDisplay: null != m,
          placeholder: s.placeholder,
          placeholderVersion: s.placeholderVersion,
          sourceMetadata: b
        })
      }
    }) : (0, r.jsx)(G, {
      className: R.embedMedia,
      href: n,
      allowFullScreen: c,
      thumbnail: i,
      video: s,
      provider: null == a ? void 0 : a.name,
      maxWidth: p,
      maxHeight: g,
      responsive: !0,
      renderImageComponent: d,
      renderVideoComponent: o,
      renderLinkComponent: u,
      onControlsShow: () => {
        this.setState({
          videoControlsShown: !0
        })
      },
      onControlsHide: () => {
        this.setState({
          videoControlsShown: !1
        })
      },
      playable: t && !l,
      placeholder: null == s ? void 0 : s.placeholder,
      placeholderVersion: null == s ? void 0 : s.placeholderVersion,
      sourceMetadata: b
    })
  }
  renderFooter() {
    let {
      footer: e,
      timestamp: t
    } = this.props.embed;
    if (null != e) {
      let l = null != e.iconProxyURL && "" !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
      return (0, r.jsxs)("div", {
        className: a()(R.embedFooter, R.embedMargin),
        children: [null != l ? (0, r.jsx)("img", {
          alt: "",
          className: R.embedFooterIcon,
          src: l
        }) : null, (0, r.jsxs)("span", {
          className: R.embedFooterText,
          children: [e.text, null != e.text && null != t ? (0, r.jsx)("span", {
            className: R.embedFooterSeparator,
            children: "•"
          }) : null, null != t ? (0, C.Y4)(t) : null]
        })]
      })
    }
    if (null != t) return (0, r.jsx)("div", {
      className: a()(R.embedFooter, R.embedMargin),
      children: (0, r.jsx)("span", {
        className: R.embedFooterText,
        children: (0, C.Y4)(t)
      })
    })
  }
  renderMedia() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      {
        embed: t
      } = this.props,
      {
        isVisible: l
      } = this.state;
    switch (t.type) {
      case H.hBH.GIFV:
        return this.renderVideo({
          gifv: !0,
          hiddenSpoiler: e,
          isVisible: l
        });
      case H.hBH.VIDEO:
      default:
        if (null != t.video) return this.renderVideo({
          gifv: !1,
          hiddenSpoiler: e,
          isVisible: l
        });
        if (null != t.images) return this.renderImages({
          hiddenSpoiler: e,
          isVisible: l
        });
        return this.renderImage({
          hiddenSpoiler: e,
          isVisible: l,
          image: t.image,
          alt: t.rawTitle
        })
    }
  }
  renderAll() {
    let e, t;
    let {
      embed: l,
      hideMedia: n
    } = this.props, {
      isVisible: r
    } = this.state, i = this.renderProvider(r), s = this.renderAuthor(r), a = this.renderTitle(r);
    switch (l.type) {
      case H.hBH.IMAGE:
      case H.hBH.VIDEO:
      case H.hBH.GIFV:
        break;
      default:
        e = this.renderDescription()
    }
    let o = this.renderFields();
    n || (t = this.renderMedia(!r));
    let d = this.renderFooter(),
      u = null == t;
    return l.type === H.hBH.RICH && (u = null == l.video), {
      provider: i,
      author: s,
      title: a,
      description: e,
      thumbnail: !n && u ? this.renderThumbnail(r) : null,
      fields: o,
      media: t,
      footer: d
    }
  }
  getMaxWidth(e) {
    let {
      embed: {
        image: t,
        images: l,
        video: n,
        type: r,
        thumbnail: i
      }
    } = this.props, {
      maxMediaWidth: s,
      maxMediaHeight: a
    } = this.state, o = null != t ? t : n;
    if (null == o) return;
    let {
      width: d
    } = (0, P.Tj)({
      width: o.width,
      height: o.height,
      maxWidth: s,
      maxHeight: a
    });
    if (!e && (r === H.hBH.VIDEO || d >= 300)) return d + 32;
    if (r === H.hBH.RICH && void 0 !== l) return 520;
    if (r === H.hBH.GIFV) {
      var u, c, h, m;
      let {
        width: e
      } = (0, P.Tj)({
        width: null !== (c = null !== (u = null == n ? void 0 : n.width) && void 0 !== u ? u : null == i ? void 0 : i.width) && void 0 !== c ? c : 0,
        height: null !== (m = null !== (h = null == n ? void 0 : n.height) && void 0 !== h ? h : null == i ? void 0 : i.height) && void 0 !== m ? m : 0,
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
    } : void 0
  }
  isInline() {
    let {
      hideMedia: e,
      embed: t
    } = this.props;
    return !e && (0, E.dY)(t)
  }
  renderSuppressButton(e) {
    return (0, r.jsx)(d.P3F, {
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      className: R.embedSuppressButton,
      onClick: e,
      "aria-label": L.NW.string(L.t.GT3fNz),
      children: (0, r.jsx)(d.Dio, {
        size: "xs",
        color: "currentColor"
      })
    })
  }
  usesJustifiedAutoStyle() {
    let {
      embed: e
    } = this.props;
    return e.type === H.hBH.IMAGE || e.type === H.hBH.VIDEO || e.type === H.hBH.GIFV || (e.type === H.hBH.RICH || e.type === H.hBH.ARTICLE) && (null != e.video || null != e.image)
  }
  getEmbedColor(e) {
    let {
      color: t
    } = this.props.embed;
    return null != t && "#ffffff" === t.toLowerCase() || e ? void 0 : t
  }
  getSpoilerStyles(e) {
    let {
      embed: {
        image: t,
        images: l,
        video: n,
        type: r
      }
    } = this.props, {
      maxMediaWidth: i,
      maxMediaHeight: s
    } = this.state;
    if (!this.usesJustifiedAutoStyle()) return;
    let a = e ? void 0 : this.getMaxWidth(!1);
    if (void 0 === a && void 0 === l && r !== H.hBH.RICH) {
      let e = null != t ? t : n;
      if (void 0 !== e) {
        var o;
        let {
          minWidth: t,
          minHeight: l
        } = null !== (o = this.getMinSize()) && void 0 !== o ? o : {}, {
          width: n
        } = (0, P.Tj)({
          width: e.width,
          height: e.height,
          maxWidth: i,
          maxHeight: s,
          minWidth: t,
          minHeight: l
        });
        a = n
      }
    }
    return {
      maxWidth: void 0 === a ? "max-content" : a,
      justifySelf: "auto"
    }
  }
  render() {
    var e;
    let {
      embed: t,
      obscureReason: l,
      className: n
    } = this.props;
    return null != t.provider && M.j.includes(t.provider.name) ? (0, r.jsx)(M.Z, {
      embed: t,
      className: n
    }) : (0, w.Z)(t) ? (0, r.jsx)(I.Z, {
      embed: t,
      className: n
    }) : (null === (e = t.provider) || void 0 === e ? void 0 : e.name) === "Amazon Music" && t.type === H.hBH.RICH ? (0, r.jsx)(g.Z, {
      embed: t,
      className: n
    }) : this.isInline() ? null != l ? (0, r.jsx)(h.ZP, {
      type: h.ZP.Types.ATTACHMENT,
      reason: l,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      isSingleMosaicItem: !0,
      containerStyles: this.getSpoilerStyles(!0),
      obscurityControlClassName: a()({
        [R.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown
      }),
      children: this.renderInlineMediaEmbed
    }) : this.renderInlineMediaEmbed() : null != l ? (0, r.jsx)(h.ZP, {
      type: h.ZP.Types.EMBED,
      onReveal: this.onReveal,
      onToggleObscurity: this.onToggleObscurity,
      reason: l,
      isSingleMosaicItem: !0,
      containerStyles: this.getSpoilerStyles(!1),
      children: this.renderEmbedContent
    }) : this.renderEmbedContent()
  }
  constructor(...e) {
    var t;
    super(...e), t = this, W(this, "state", D({
      isVisible: null == this.props.obscureReason,
      videoControlsShown: !1,
      isImageHovered: !1,
      showImageAppMenu: !1,
      sourceMetadata: {
        message: this.props.message,
        identifier: {
          type: "embed",
          embedIndex: this.props.embedIndex
        }
      }
    }, (0, E.vP)(this.props.embed))), W(this, "onReveal", () => {
      this.setState({
        isVisible: !0
      })
    }), W(this, "onToggleObscurity", () => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }), W(this, "renderInlineMediaEmbed", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          obscureReason: l,
          className: n
        } = t.props,
        i = t.getMaxWidth(!0);
      return (0, r.jsx)("div", {
        "aria-hidden": e,
        className: a()(R.inlineMediaEmbed, n, {
          [R.spoilerAttachment]: l === y.wk.SPOILER,
          [R.hiddenExplicitAttachment]: null != l && [y.wk.EXPLICIT_CONTENT, y.wk.POTENTIAL_EXPLICIT_CONTENT].includes(l),
          [R.isHidden]: e,
          [R.justifyAuto]: t.usesJustifiedAutoStyle(),
          [B.embedFlexGrow]: null != i
        }),
        style: {
          maxWidth: i
        },
        children: t.renderMedia(e)
      })
    }), W(this, "renderEmbedContent", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          className: l,
          onSuppressEmbed: n,
          obscureReason: i
        } = t.props,
        {
          provider: s,
          author: o,
          title: d,
          description: u,
          fields: c,
          thumbnail: h,
          media: m,
          footer: p
        } = t.renderAll();
      return (0, r.jsx)("article", {
        className: a()(l, B.embedFlexGrow, R.embedFull, _.markup, {
          [R.isHidden]: e,
          [R.spoilerEmbed]: i === y.wk.SPOILER,
          [R.hiddenExplicitEmbed]: null != i && [y.wk.EXPLICIT_CONTENT, y.wk.POTENTIAL_EXPLICIT_CONTENT].includes(i),
          [R.justifyAuto]: t.usesJustifiedAutoStyle()
        }),
        "aria-hidden": e,
        style: {
          borderLeftColor: t.getEmbedColor(e),
          maxWidth: t.getMaxWidth(!1)
        },
        children: (0, r.jsx)("div", {
          className: R.gridContainer,
          children: (0, r.jsxs)("div", {
            className: a()({
              [R.grid]: !0,
              [R.hasThumbnail]: null != h
            }),
            children: [null != n ? t.renderSuppressButton(n) : null, s, o, d, u, c, m, h, p]
          })
        })
      })
    })
  }
}
W(U, "defaultProps", {
  hideMedia: !1,
  allowFullScreen: !0,
  maxThumbnailWidth: 80,
  maxThumbnailHeight: 80,
  embedIndex: 0
})