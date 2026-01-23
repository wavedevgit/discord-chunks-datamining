/** Chunk was on 53653 **/
/** chunk id: 551028, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => V
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk753838 = require("./753838.jsx"),
  Chunk946274 = require("./946274.jsx"),
  Chunk702211 = require("./702211.js"),
  Chunk699576 = require("./699576.jsx"),
  Chunk392107 = require("./392107.js"),
  Chunk778576 = require("./778576.jsx"),
  Chunk45837 = require("./45837.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk473145 = require("./473145.js"),
  Chunk927578 = require("./927578.js"),
  Chunk854896 = require("./854896.js"),
  Chunk2553 = require("./2553.js"),
  Chunk652215 = require("./652215.js"),
  Chunk339984 = require("./339984.js"),
  Chunk693591 = require("./693591.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk341078 = require("./341078.js");

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let L = [{
  gif: require("./981355.js"),
  png: require("./775788.js")
}, {
  gif: require("./640237.js"),
  png: require("./689006.js")
}, {
  gif: require("./964805.js"),
  png: require("./533798.js")
}, {
  gif: require("./322821.js"),
  png: require("./891814.js")
}];

function I(e) {
  let {
    shouldAnimate: t = true
  } = e;
  return (0, n.jsx)("div", {
    className: _.p8,
    children: L.map(e => (0, n.jsx)("div", {
      className: _.nX,
      style: {
        backgroundImage: "url(".concat(t ? e.gif : e.png, ")")
      }
    }, e.gif))
  })
}

function H(e) {
  let {
    guildFeature: t,
    guild: r
  } = e;
  if (null == t || null == r) return;
  let n = (0, C.Ys)(t),
    l = r.features.has(t);
  if (null == n) return;
  let a = (0, C.gb)(n);
  return l ? P.intl.formatToPlainString(P.t.u3L3TX, {
    levelName: a
  }) : P.intl.formatToPlainString(P.t["r/v25U"], {
    levelName: a
  })
}

function k(e) {
  let {
    guildFeature: t,
    guild: r
  } = e;
  return (0, n.jsx)("div", {
    className: _.x9,
    children: (0, n.jsx)(p.A, {
      guildFeature: t,
      guild: r,
      hideTooltip: true
    })
  })
}

function D(e) {
  let {
    icon: t,
    label: r,
    guildFeature: l,
    guild: a,
    shouldShowPremiumIcon: s
  } = e, c = null != a && null != l;
  return (0, n.jsxs)("div", {
    className: i()(_.q3, {
      [_.j5]: c
    }),
    "aria-hidden": true,
    children: [(0, n.jsxs)("div", {
      className: _.Mn,
      children: [t, (0, n.jsxs)(u.Text, {
        variant: "text-sm/semibold",
        className: i()(_.xo, {
          [_.Fy]: s
        }),
        children: [s && (0, n.jsx)(o.m, {
          asContainer: true,
          text: P.intl.string(P.t["5AFxuK"]),
          children: (0, n.jsx)(u.tvc, {
            size: "xs",
            color: "currentColor",
            className: _.T$
          })
        }), r]
      })]
    }), c && (0, n.jsx)(k, {
      guild: a,
      guildFeature: l
    })]
  })
}

function U(e) {
  let {
    label: t,
    uploadType: r,
    guild: l,
    maxFileSizeBytes: a,
    filters: s,
    handleOpenImageEditingModal: o,
    handleFileSizeError: c
  } = e, f = (0, R.CK)(r), d = (0, R.VS)(r, {
    isGIF: false
  }), p = H({
    guildFeature: d,
    guild: l
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(u.vN3, {
      within: true,
      children: (0, n.jsxs)("div", {
        className: i()(_.uK, _.kU),
        children: [(0, n.jsx)(D, {
          icon: (0, n.jsx)(u.XGR, {
            size: "md",
            color: "currentColor"
          }),
          label: t,
          guildFeature: d,
          guild: l,
          shouldShowPremiumIcon: f
        }), (0, n.jsx)(g.Ay, {
          "aria-label": t,
          tabIndex: 0,
          onChange: o,
          maxFileSizeBytes: a,
          onFileSizeError: c,
          filters: s,
          multiple: false
        })]
      })
    }), null != p && (0, n.jsx)(u.AC4, {
      children: p
    })]
  })
}

function M(e) {
  let {
    uploadType: t,
    guild: r,
    handleOpenGIFPickerModal: l
  } = e, {
    shouldAnimate: a,
    onMouseEnter: i,
    onMouseLeave: s
  } = (0, m.A)(), o = (0, R.xc)(t), c = (0, R.VS)(t, {
    isGIF: true
  }), f = H({
    guildFeature: c,
    guild: r
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(u.DUT, {
      className: _.uK,
      onClick: l,
      "aria-label": P.intl.string(P.t["xsC+/y"]),
      onMouseEnter: i,
      onMouseLeave: s,
      children: [(0, n.jsx)(I, {
        shouldAnimate: a
      }), (0, n.jsx)(D, {
        icon: (0, n.jsx)(u.Osp, {
          size: "md",
          color: "currentColor"
        }),
        label: P.intl.string(P.t["xsC+/y"]),
        guildFeature: c,
        guild: r,
        shouldShowPremiumIcon: o
      })]
    }), null != f && (0, n.jsx)(u.AC4, {
      children: f
    })]
  })
}

function V(e) {
  let {
    transitionState: t,
    onClose: a,
    onComplete: i,
    uploadType: o,
    maxFileSizeBytes: p,
    showUpsellHeader: g,
    filters: m,
    analyticsLocation: C,
    analyticsLocations: R = [],
    imageSpecifications: L,
    modalTitle: I = P.intl.string(P.t.DToW4e),
    uploadOptionTitle: H = P.intl.string(P.t["MsUY/S"]),
    allowRecentAvatarsSelection: k = true
  } = e, D = (0, s.bG)([x.default], () => x.default.getCurrentUser()), V = (0, s.bG)([O.A], () => O.A.getGuildId()), G = (0, s.bG)([j.A], () => j.A.getGuild(V)), B = (0, u.k34)(), K = o === T.HL.AVATAR || o === T.HL.BANNER, z = !v.Ay.canUseAnimatedAvatar(D) && o === T.HL.AVATAR, J = (0, b.b)(!K), {
    analyticsLocations: q,
    newestAnalyticsLocation: W
  } = (0, d.Ay)(R, f.A.SELECT_IMAGE_MODAL), X = l.useCallback(e => {
    let {
      assetOrigin: t = A.E.NEW_ASSET,
      imageUri: r,
      file: n,
      originalAsset: l,
      isFromTenor: s = false
    } = e;
    a(), i({
      assetOrigin: t,
      imageUri: r,
      file: n,
      originalAsset: l,
      isFromTenor: s
    })
  }, [a, i]), Z = l.useCallback((e, t) => {
    if (t.type === S.a.MP4) return X({
      imageUri: e,
      file: t
    });
    (0, u.mMO)(async () => {
      let {
        default: l
      } = await Promise.all([r.e("35929"), r.e("74571"), r.e("1208")]).then(r.bind(r, 142630));
      return r => (0, n.jsx)(l, F({
        imageUri: e,
        file: t,
        onCrop: X,
        uploadType: o,
        showUpsellHeader: g,
        analyticsPage: null == C ? true : C.page
      }, r))
    }, {
      contextKey: B
    })
  }, [null == C ? true : C.page, B, X, g, o]), Y = l.useCallback(() => {
    (0, w.A)(p)
  }, [p]), $ = l.useCallback(() => {
    (0, u.mMO)(async () => {
      let {
        default: e
      } = await r.e("87916").then(r.bind(r, 682503));
      return t => (0, n.jsx)(e, F({
        uploadType: o,
        onComplete: e => {
          let {
            imageUri: t,
            file: r
          } = e;
          return X({
            imageUri: t,
            file: r,
            isFromTenor: true
          })
        },
        showUpsellHeader: g,
        analyticsPage: null == C ? true : C.page
      }, t))
    }, {
      contextKey: B
    })
  }, [null == C ? true : C.page, B, X, g, o]);
  l.useEffect(() => {
    z && E.default.track(N.HAw.PREMIUM_UPSELL_VIEWED, {
      type: N.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: q
    }), E.default.track(N.HAw.OPEN_MODAL, {
      type: N.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: C,
      location_stack: q,
      upload_type: o
    })
  }, [z, C, q, o]);
  let Q = g && J,
    ee = k && o === T.HL.AVATAR;
  return (0, n.jsx)(c.aFV, {
    transitionState: t,
    onClose: a,
    size: "md",
    title: I,
    actions: [],
    children: (0, n.jsxs)("div", {
      className: _.jE,
      children: [(0, n.jsxs)("div", {
        className: _.pd,
        children: [(0, n.jsxs)("ul", {
          className: _.f9,
          "aria-label": P.intl.string(P.t.iBnqtQ),
          children: [(0, n.jsx)("li", {
            children: (0, n.jsx)(U, {
              label: H,
              uploadType: o,
              guild: G,
              handleOpenImageEditingModal: Z,
              maxFileSizeBytes: p,
              filters: m,
              handleFileSizeError: Y
            })
          }), (0, n.jsx)("li", {
            children: (0, n.jsx)(M, {
              uploadType: o,
              guild: G,
              handleOpenGIFPickerModal: $
            })
          })]
        }), null != L ? (0, n.jsx)(u.Text, {
          className: _.KQ,
          variant: "text-sm/normal",
          color: "text-muted",
          children: L
        }) : null]
      }), ee && (0, n.jsx)(h.A, {
        onComplete: X
      }), Q && (0, n.jsx)(y.A, {
        uploadType: o,
        analyticsSource: W,
        showUpsell: true,
        position: "inline",
        className: _.Lu
      })]
    })
  })
}