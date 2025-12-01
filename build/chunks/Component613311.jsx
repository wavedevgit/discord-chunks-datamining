/** Chunk was on 1272 **/
/** chunk id: 613311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eh
}), require("./415506.js"), require("./953529.js"), require("./539854.js"), require("./290780.js"), require("./388685.js"), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk659429 = require("./659429.js"),
  Chunk496929 = require("./496929.js"),
  Chunk558381 = require("./558381.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk224336 = require("./224336.jsx"),
  Chunk730749 = require("./730749.jsx"),
  Chunk666743 = require("./666743.jsx"),
  Chunk115130 = require("./115130.js"),
  Chunk812206 = require("./812206.js"),
  Chunk770146 = require("./770146.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk606081 = require("./606081.jsx"),
  Chunk252618 = require("./252618.js"),
  Chunk100159 = require("./100159.js"),
  Chunk646288 = require("./646288.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk210887 = require("./210887.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk525395 = require("./525395.js"),
  Chunk558314 = require("./558314.js"),
  Chunk580130 = require("./580130.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk695103 = require("./695103.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk3570 = require("./3570.js"),
  Chunk689796 = require("./689796.jsx"),
  Chunk15470 = require("./15470.jsx"),
  Chunk506648 = require("./506648.jsx"),
  Chunk449275 = require("./449275.jsx"),
  Chunk445986 = require("./445986.jsx"),
  Chunk119520 = require("./119520.jsx"),
  Chunk450233 = require("./450233.jsx"),
  Chunk726581 = require("./726581.jsx"),
  Chunk74153 = require("./74153.jsx"),
  Chunk125930 = require("./125930.jsx"),
  Chunk178071 = require("./178071.jsx"),
  Chunk176055 = require("./176055.jsx"),
  Chunk843445 = require("./843445.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk561537 = require("./561537.js");

function eu(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ed(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eu(e, t, n[t])
    })
  }
  return e
}

function ep(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class ef extends Chunk473749.PureComponent {
  get isChannelType() {
    return null != this.props.channel
  }
  componentDidMount() {
    let {
      sku: e,
      storeListing: t,
      isFetchingEntitlements: n,
      shouldFetchStatistics: r,
      didFetchEntitlements: i,
      location: l,
      fetchStoreListing: a
    } = this.props;
    if (null != Chunk120356.state) {
      let {
        analyticsSource: e,
        analyticsProperties: t
      } = Chunk120356.state;
      this._analyticsSource = module, this._extraAnalyticsProperties = exports
    } else this._analyticsSource = Chunk981631.SaU;
    (null == exports || exports.isSlimDirectoryVersion()) && a(), null != module && (require || Chunk473749 || (0, Chunk496929.yD)(module.applicationId), Chunk54381 && Chunk570140.Z.wait(() => (0, Chunk659429.$)(module.applicationId))), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentDidUpdate(e) {
    let {
      locale: t,
      sku: n,
      shouldFetchStatistics: r,
      skuId: i,
      storeListingId: l,
      slug: a,
      storeListing: s,
      fetchStoreListing: o
    } = this.props;
    if (s !== e.storeListing && null != s && (0, Y.s)(es.jE.STORE_LISTING, {
        skuId: i,
        slug: a
      }), (t !== e.locale || i !== e.skuId) && o(), r && !e.shouldFetchStatistics) {
      if (null == n) throw Error("Unexpected missing sku");
      h.Z.wait(() => (0, g.$)(n.applicationId))
    }(i !== e.skuId || l !== e.storeListingId) && (this._trackedViewed = false), this.trackViewed(), this.replaceUrlWithSlug()
  }
  componentWillUnmount() {
    this.showCopyLinkTextTimeout.stop();
    let {
      analyticsContext: {
        loadId: e,
        loadDate: t
      }
    } = this.props;
    null != exports && Chunk626135.default.track(Chunk981631.rMx.STORE_LISTING_EXITED, {
      load_id: module,
      duration_ms: Date.now() - exports
    })
  }
  replaceUrlWithSlug() {}
  trackViewed() {
    let {
      sku: e,
      storeListing: t,
      hasFetchedNews: n,
      analyticsContext: r
    } = this.props;
    if (this._trackedViewed || null == module || null == exports || null == exports.description || !(this.isChannelType || require)) return;
    let i = exports.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
      images: 0,
      videos: 0
    });
    Chunk626135.default.track(Chunk981631.rMx.STORE_LISTING_VIEWED, ed(ep(ed({}, this._extraAnalyticsProperties), {
      load_id: Chunk54381.loadId,
      has_description: null != exports.description && exports.description.length > 0,
      has_staff_review: null != exports.staffNotes,
      carousel_image_count: Chunk473749.images,
      carousel_video_count: Chunk473749.videos,
      location: Chunk54381.location.page,
      source: this._analyticsSource
    }), (0, Chunk100159.Z)(module, true))), this._trackedViewed = true
  }
  renderHeader(e, t) {
    let {
      channel: n,
      isAuthenticated: l
    } = this.props;
    return (0, r.jsx)(x.Z, {
      isAuthenticated: l,
      toolbar: this.renderHeaderToolbar(e, t),
      children: null != n ? (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(x.Z.Icon, {
          icon: f.lO_,
          "aria-label": eo.intl.string(eo.t["P1/Erq"])
        }), (0, r.jsx)(x.Z.Title, {
          children: n.name
        })]
      }) : null != t && t.premium ? (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(x.Z.Icon, {
          icon: f.SrA,
          "aria-label": eo.intl.string(eo.t.Ipxkog)
        }), (0, r.jsx)(et.Z, {
          sku: t
        })]
      }) : null != t ? (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(x.Z.Icon, {
          icon: f.lO_,
          "aria-label": eo.intl.string(eo.t["P1/Erq"])
        }), (0, r.jsx)(x.Z.Title, {
          children: t.name
        })]
      }) : null
    })
  }
  parseMediaItems(e, t, n) {
    let {
      assetId: r,
      youtubeVideoId: i
    } = t;
    if (null != r) {
      let t = n.find(e => e.id === r);
      if (null != t) {
        let {
          width: n,
          height: r
        } = t;
        if (null == n || null == r) throw Error("ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined");
        return t.mimeType.startsWith("video/") ? {
          type: ea.s9s.VIDEO,
          thumbnailSrc: (0, z._W)(e.id, t, 1024, "webp"),
          src: (0, z._W)(e.id, t),
          height: r,
          width: n
        } : {
          type: ea.s9s.IMG,
          src: (0, z._W)(e.id, t, 1024),
          height: r,
          width: n
        }
      }
    }
    if (null != i) return {
      type: ea.s9s.YOUTUBE_VIDEO,
      youtubeVideoId: i
    };
    throw Error("Store carousel item must have one of assetId or youtubeVideoId")
  }
  renderHeaderAssets(e, t, n) {
    let {
      theme: i
    } = this.props, l = t.headerBackground, a = (0, d.ap)(i) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
    return null == l || null == a ? (0, r.jsx)("div", {
      className: ec.noHeaderSpacer
    }) : (0, r.jsxs)("div", {
      className: ec.headerAssets,
      children: [(0, r.jsx)("div", {
        className: ec.headerBackground,
        style: {
          backgroundImage: "url(".concat((0, z._W)(e.id, l, 1024, "png"), ")")
        }
      }), (0, r.jsx)("img", {
        className: ec.headerLogo,
        src: (0, z._W)(e.id, a, 1024, "png"),
        alt: n.name
      })]
    })
  }
  renderWhyYouMightLikeThis(e, t) {
    return (0, r.jsx)(ee.Z, {
      sku: e,
      storeListing: t,
      className: ec.whyYouMightLikeIt
    })
  }
  renderVerifiedGuildInvite(e, t) {
    if (null == e.guild) return null;
    let {
      channel: n,
      pageSize: i
    } = this.props;
    return (0, r.jsx)(ei.Z, {
      skuId: t.id,
      guild: e.guild,
      className: ec.guildInvite,
      inChannel: null != n,
      pageSize: i
    })
  }
  renderFeatures(e) {
    return (0, r.jsx)(K.Z, {
      sku: e
    })
  }
  renderSystemRequirements(e) {
    return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length ? null : (0, r.jsx)(en.Z, {
      className: ec.systemRequirements,
      systemRequirements: e.systemRequirements,
      pageSize: this.props.pageSize
    })
  }
  renderDescription(e, t, n) {
    let {
      description: l
    } = t;
    if (null == l) throw Error("Rendering ApplicationStoreListing without description");
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(C.Z, {
        tag: "h1",
        children: eo.intl.format(eo.t.tluX4B, {
          name: n.name
        })
      }), (0, r.jsx)(E.Z, {}), (0, r.jsx)(q.Z, {
        applicationId: e.id,
        blurb: t.summary,
        description: l,
        className: ec.description,
        assets: t.assets
      })]
    })
  }
  renderApplicationContentRating(e) {
    return (0, r.jsx)(W.Z, {
      sku: e,
      className: ec.contentRating
    })
  }
  renderApplicationLegalInfo(e) {
    return (0, r.jsx)(Q.Z, {
      sku: e,
      className: ec.legalInfo
    })
  }
  renderJsonLD() {
    let {
      sku: e,
      storeListing: t,
      application: n
    } = this.props;
    if (null == module || null == exports || null == require) return null;
    let i = [],
      l = require.getSplashURL(1024);
    null != Chunk120356 && Chunk473749.push(Chunk120356), null != exports.headerLogoLightTheme && Chunk473749.unshift((0, Chunk73346._W)(require.id, exports.headerLogoLightTheme, 1024, "jpg"));
    let a = Chunk606081.Z.Product({
        name: module.name,
        description: null != module.summary && "" !== module.summary ? module.summary : exports.tagline,
        image: Chunk606081.Z.Product.Image(Chunk473749),
        sku: module.id
      }),
      s = module.getPrice();
    if (null != Chunk95015) {
      let {
        amount: e,
        currency: t
      } = Chunk95015;
      a.offers = Chunk606081.Z.Offer({
        priceCurrency: exports.toUpperCase(),
        price: (0, Chunk937615.T4)(module, exports, {
          style: "decimal"
        })
      })
    }
    let o = Chunk606081.Z.ItemPage({
      mainEntity: a
    });
    return (0, Chunk54381.jsx)(Chunk606081.Z, {
      data: Chunk442837
    })
  }
  renderSmall(e, t, n) {
    return (0, r.jsxs)("div", {
      className: a()(ec.listing, ec.listingSmall),
      children: [this.renderHeaderAssets(e, t, n), this.renderCarousel(e, t), this.renderWhyYouMightLikeThis(n, t), this.renderDescription(e, t, n), this.renderVerifiedGuildInvite(t, n), this.renderFeatures(n), this.renderSystemRequirements(n), this.renderApplicationContentRating(n), this.renderApplicationLegalInfo(n)]
    })
  }
  renderLarge(e, t, n) {
    return (0, r.jsxs)("div", {
      className: ec.listing,
      children: [this.renderHeaderAssets(e, t, n), this.renderCarousel(e, t), (0, r.jsx)("div", {
        className: ec.listingLarge,
        children: (0, r.jsxs)("div", {
          className: ec.body,
          children: [(0, r.jsxs)("div", {
            className: ec.leftColumn,
            children: [this.renderWhyYouMightLikeThis(n, t), this.renderDescription(e, t, n), this.renderSystemRequirements(n), this.renderApplicationContentRating(n), this.renderApplicationLegalInfo(n)]
          }), (0, r.jsxs)("div", {
            className: ec.rightColumn,
            children: [this.renderVerifiedGuildInvite(t, n), this.renderFeatures(n)]
          })]
        })
      })]
    })
  }
  render() {
    let {
      application: e,
      sku: t,
      storeListing: n,
      matureAgree: l,
      isAuthenticated: a
    } = this.props;
    if (null == module || null == exports || null == require || require.isSlimDirectoryVersion()) return (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
      children: [this.renderHeader(module, exports), (0, Chunk54381.jsx)(Chunk600164.Z, {
        align: Chunk600164.Z.Align.CENTER,
        justify: Chunk600164.Z.Justify.CENTER,
        children: (0, Chunk54381.jsx)(Chunk481060.$jN, {
          className: Chunk561537.spinner
        })
      })]
    });
    if (!Chunk120356 && exports.showAgeGate) {
      let n = a ? null : (0, Chunk54381.jsx)("div", {
        className: Chunk561537.gatedListing,
        children: this.renderListing()
      });
      return (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk252618.yY, {
          location: module.name
        }), this.renderJsonLD(), this.renderHeader(module, exports), (0, Chunk54381.jsx)(Chunk119520.Z, {
          game: module
        }), require]
      })
    }
    return a ? (0, Chunk54381.jsxs)("div", {
      className: Chunk561537.listingWrapper,
      children: [(0, Chunk54381.jsx)(Chunk252618.yY, {
        location: module.name
      }), this.renderJsonLD(), (0, Chunk54381.jsx)(Chunk410575.Z, {
        section: Chunk981631.jXE.NAVIGATION,
        children: this.renderHeader(module, exports)
      }), (0, Chunk54381.jsx)(Chunk410575.Z, {
        section: Chunk981631.jXE.BODY,
        children: this.renderListing()
      })]
    }) : (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk252618.yY, {
        location: module.name
      }), this.renderJsonLD(), this.renderHeader(module, exports), this.renderListing()]
    })
  }
  constructor(...e) {
    super(...e), eu(this, "showCopyLinkTextTimeout", new c.V7), eu(this, "_trackedViewed", false), eu(this, "_analyticsSource", null), eu(this, "_extraAnalyticsProperties", null), eu(this, "state", {
      showHeaderPurchaseUnit: false,
      showLinkCopied: false
    }), eu(this, "trackCarouselScroll", (e, t, n) => {
      let {
        sku: r
      } = this.props;
      null != r && H.default.track(ea.rMx.STORE_LISTING_MEDIA_SCROLLED, ep(ed({}, (0, j.Z)(r)), {
        card_index: n,
        card_type: e.type === ea.s9s.IMG ? "image" : "video"
      }))
    }), eu(this, "copyCurrentUrl", () => {
      var e;
      let {
        location: t
      } = this.props, n = (e = t.pathname, "".concat(location.protocol, "//").concat(location.host).concat(e));
      (0, V.JG)(n, () => this.setState({
        showLinkCopied: true
      }, () => {
        this.showCopyLinkTextTimeout.start(1500, () => {
          this.setState({
            showLinkCopied: false
          })
        })
      }))
    }), eu(this, "handleCreateInstantInvite", () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      null != e && null != t && (0, f.ZDy)(async () => {
        let {
          default: i
        } = await Promise.all([n.e("7654"), n.e("77653")]).then(n.bind(n, 560114));
        return n => (0, r.jsx)(i, ep(ed({}, n), {
          guild: t,
          channel: e,
          source: ea.t4x.GUILD_CHANNELS
        }))
      })
    }), eu(this, "renderInviteLink", () => {
      let {
        channel: e,
        guild: t
      } = this.props;
      return null != e && null != t && (L.Z.can(ea.Plq.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode) ? (0, r.jsx)(p.zx, {
        "aria-label": eo.intl.string(eo.t.zJrgTG),
        look: p.zx.Looks.BLANK,
        size: p.zx.Sizes.NONE,
        onClick: this.handleCreateInstantInvite,
        className: ec.link,
        children: (0, r.jsx)(f.xPt, {
          size: "md",
          color: "currentColor",
          className: ec.linkIcon
        })
      }) : null
    }), eu(this, "renderCopyLink", () => {
      let {
        showLinkCopied: e
      } = this.state;
      return this.isChannelType ? this.renderInviteLink() : (0, r.jsx)(u.u, {
        text: e ? eo.intl.string(eo.t.uvTCOY) : null,
        position: "left",
        forceOpen: e,
        children: (0, r.jsx)(p.zx, {
          "aria-label": e ? eo.intl.string(eo.t.uvTCOY) : eo.intl.string(eo.t.WqhZss),
          look: p.zx.Looks.BLANK,
          size: p.zx.Sizes.NONE,
          onClick: this.copyCurrentUrl,
          className: ec.link,
          children: (0, r.jsx)(f.xPt, {
            size: "md",
            color: "currentColor",
            className: ec.linkIcon
          })
        })
      })
    }), eu(this, "renderHeaderToolbar", (e, t) => {
      let {
        isInTestMode: n,
        slug: i,
        storeListing: l,
        analyticsContext: {
          location: s
        }
      } = this.props, {
        showHeaderPurchaseUnit: o
      } = this.state;
      return (0, r.jsxs)("div", {
        className: ec.headerBarListing,
        children: [(0, r.jsx)("div", {
          className: ec.headerSection,
          children: n && null != t ? (0, r.jsx)(er.Z, {
            size: er.y.Sizes.MIN,
            dropdownSize: er.y.DropdownSizes.MEDIUM,
            look: er.y.Looks.OUTLINED,
            color: er.y.Colors.RED,
            skuId: t.id,
            className: ec.testModeSelectButton,
            currentStoreListingId: null != l ? l.id : null,
            onStoreListingSelect: e => {
              null != t && (0, _.yt)(t.id, {
                slug: i,
                analyticsSource: {
                  page: s.page,
                  section: ea.jXE.NAVIGATION,
                  object: null
                },
                storeListingId: e.id
              })
            }
          }) : null
        }), (0, r.jsx)("div", {
          className: ec.headerSection,
          children: (0, r.jsxs)("div", {
            className: a()(ec.headerPurchase, {
              [ec.active]: o
            }),
            children: [null != t ? (0, P.Z)(t) : null, null != e && null != t ? (0, r.jsx)("div", {
              children: "deprecated!"
            }) : null, (0, r.jsx)($.Z, {
              messageStyle: $.G.SHORT,
              className: ec.purchaseError
            })]
          })
        }), this.renderCopyLink()]
      })
    }), eu(this, "renderCarousel", (e, t) => {
      if (0 === t.carouselItems.length) return null;
      let {
        pageSize: n,
        isFocused: i
      } = this.props;
      return (0, r.jsx)(b.Z, {
        section: ea.jXE.HERO,
        children: (0, r.jsx)(J.Z, {
          pageSize: n,
          items: t.carouselItems.map(n => this.parseMediaItems(e, n, t.assets)),
          autoplayInterval: 8e3,
          paused: !i,
          onIntentionalChange: this.trackCarouselScroll
        })
      })
    }), eu(this, "renderListing", () => {
      let {
        application: e,
        storeListing: t,
        sku: n,
        pageSize: i
      } = this.props;
      return null == e || null == n || null == t || t.isSlimDirectoryVersion() ? (0, r.jsx)(S.Z, {
        align: S.Z.Align.CENTER,
        justify: S.Z.Justify.CENTER,
        children: (0, r.jsx)(f.$jN, {})
      }) : i === el.b.SMALL ? this.renderSmall(e, t, n) : this.renderLarge(e, t, n)
    })
  }
}
let eh = (0, Chunk730749.Z)((0, Chunk666743.Z)(Chunk442837.ZP.connectStores([Chunk558314.Z, Chunk210887.Z, Chunk706454.default, Chunk451478.Z, Chunk551428.Z, Chunk55563.Z, Chunk695103.Z, Chunk115130.Z, Chunk812206.Z, Chunk525395.Z, Chunk430824.Z, Chunk580130.Z], e => {
  let t, n, r, {
    inputSkuId: i,
    applicationId: l,
    storeListingId: a,
    isAuthenticated: o,
    channel: c
  } = e;
  if (null == l) {
    if (null == i) throw Error("Needs applicationId or skuId");
    t = i, null != (l = null != (n = k.Z.get(i)) ? n.applicationId : null) && (r = I.Z.getApplication(l))
  } else if (null == i) {
    if (null == l) throw Error("Needs applicationId or skuId");
    null != (r = I.Z.getApplication(l)) && (t = r.destinationSkuId), n = null != t ? k.Z.get(t) : null
  }(null == n ? true : n.flags) != null && (0, s.yE)(n.flags, ea.l4R.STICKER) && (n = null);
  let u = null != l && (G.Z.inTestModeForApplication(l) || v.Z.inDevModeForApplication(l));
  return {
    skuId: t,
    application: null != l ? I.Z.getApplication(l) : null,
    isFetchingEntitlements: null != l && M.Z.applicationIdsFetching.has(l),
    didFetchEntitlements: null != l && M.Z.applicationIdsFetched.has(l),
    shouldFetchStatistics: o && null != l && R.Z.shouldFetchStatisticsForApplication(l),
    sku: n,
    isFocused: B.Z.isFocused(),
    storeListing: U.Z.getStoreListing({
      storeListingId: a,
      skuId: t,
      channelId: null != c ? c.id : null,
      isTestMode: u
    }),
    isInTestMode: null != l && u,
    matureAgree: D.Z.didMatureAgree,
    theme: Z.Z.theme,
    locale: A.default.locale,
    guild: null != c ? w.Z.getGuild(c.getGuildId()) : null
  }
})(ef)))