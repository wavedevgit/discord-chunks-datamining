/** Chunk was on 89289 **/
/** chunk id: 28130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => H
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk807582 = require("./807582.jsx"),
  Chunk813197 = require("./813197.jsx"),
  Chunk222062 = require("./222062.js"),
  Chunk530329 = require("./530329.jsx"),
  Chunk373230 = require("./373230.js"),
  Chunk72703 = require("./72703.js"),
  Chunk782818 = require("./782818.jsx"),
  Chunk442552 = require("./442552.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk267642 = require("./267642.js"),
  Chunk74538 = require("./74538.js"),
  Chunk621961 = require("./621961.js"),
  Chunk884858 = require("./884858.js"),
  Chunk981631 = require("./981631.js"),
  Chunk486324 = require("./486324.js"),
  Chunk869783 = require("./869783.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk570162 = require("./570162.js");

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let I = [{
  gif: require("./495682.js"),
  png: require("./458060.js")
}, {
  gif: require("./842786.js"),
  png: require("./460790.js")
}, {
  gif: require("./578831.js"),
  png: require("./642193.js")
}, {
  gif: require("./145908.js"),
  png: require("./690695.js")
}];

function D(e) {
  let {
    shouldAnimate: t = true
  } = e;
  return (0, r.jsx)("div", {
    className: F.gifGrid,
    children: I.map(e => (0, r.jsx)("div", {
      className: F.gif,
      style: {
        backgroundImage: "url(".concat(t ? e.gif : e.png, ")")
      }
    }, e.gif))
  })
}

function k(e) {
  let {
    guildFeature: t,
    guild: n
  } = e;
  if (null == t || null == n) return;
  let r = (0, O._p)(t),
    a = n.features.has(t);
  if (null == r) return;
  let l = (0, O.nW)(r);
  return a ? _.intl.formatToPlainString(_.t.u3L3TX, {
    levelName: l
  }) : _.intl.formatToPlainString(_.t["r/v25U"], {
    levelName: l
  })
}

function L(e) {
  let {
    guildFeature: t,
    guild: n
  } = e;
  return (0, r.jsx)("div", {
    className: F.boostingPill,
    children: (0, r.jsx)(p.Z, {
      guildFeature: t,
      guild: n,
      hideTooltip: true
    })
  })
}

function M(e) {
  let {
    icon: t,
    label: n,
    guildFeature: a,
    guild: l,
    shouldShowPremiumIcon: s
  } = e, c = null != l && null != a;
  return (0, r.jsxs)("div", {
    className: i()(F.optionDescription, {
      [F.hasBoostingPill]: c
    }),
    "aria-hidden": true,
    children: [(0, r.jsxs)("div", {
      className: F.optionIconAndLabel,
      children: [t, (0, r.jsxs)(u.Text, {
        variant: "text-sm/semibold",
        className: i()(F.optionLabelText, {
          [F.hasPremiumIcon]: s
        }),
        children: [s && (0, r.jsx)(o.u, {
          asContainer: true,
          text: _.intl.string(_.t["5AFxuK"]),
          children: (0, r.jsx)(u.SrA, {
            size: "xs",
            color: "currentColor",
            className: F.premiumWheel
          })
        }), n]
      })]
    }), c && (0, r.jsx)(L, {
      guild: l,
      guildFeature: a
    })]
  })
}

function U(e) {
  let {
    label: t,
    uploadType: n,
    guild: a,
    maxFileSizeBytes: l,
    filters: s,
    handleOpenImageEditingModal: o,
    handleFileSizeError: c
  } = e, d = (0, N.GY)(n), f = (0, N.C6)(n, {
    isGIF: false
  }), p = k({
    guildFeature: f,
    guild: a
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.tEY, {
      within: true,
      children: (0, r.jsxs)("div", {
        className: i()(F.option, F.imageUploadOption),
        children: [(0, r.jsx)(M, {
          icon: (0, r.jsx)(u.FmF, {
            size: "md",
            color: "currentColor"
          }),
          label: t,
          guildFeature: f,
          guild: a,
          shouldShowPremiumIcon: d
        }), (0, r.jsx)(g.ZP, {
          "aria-label": t,
          tabIndex: 0,
          onChange: o,
          maxFileSizeBytes: l,
          onFileSizeError: c,
          filters: s,
          multiple: false
        })]
      })
    }), null != p && (0, r.jsx)(u.nn4, {
      children: p
    })]
  })
}

function B(e) {
  let {
    uploadType: t,
    guild: n,
    handleOpenGIFPickerModal: a
  } = e, {
    shouldAnimate: l,
    onMouseEnter: i,
    onMouseLeave: s
  } = (0, j.Z)(), o = (0, N.Kq)(t), c = (0, N.C6)(t, {
    isGIF: true
  }), d = k({
    guildFeature: c,
    guild: n
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(u.P3F, {
      className: F.option,
      onClick: a,
      "aria-label": _.intl.string(_.t["xsC+/y"]),
      onMouseEnter: i,
      onMouseLeave: s,
      children: [(0, r.jsx)(D, {
        shouldAnimate: l
      }), (0, r.jsx)(M, {
        icon: (0, r.jsx)(u.OUq, {
          size: "md",
          color: "currentColor"
        }),
        label: _.intl.string(_.t["xsC+/y"]),
        guildFeature: c,
        guild: n,
        shouldShowPremiumIcon: o
      })]
    }), null != d && (0, r.jsx)(u.nn4, {
      children: d
    })]
  })
}

function H(e) {
  let {
    transitionState: t,
    onClose: l,
    onComplete: i,
    uploadType: o,
    maxFileSizeBytes: p,
    showUpsellHeader: g,
    filters: j,
    analyticsLocation: O,
    analyticsLocations: N = [],
    imageSpecifications: I,
    modalTitle: D = _.intl.string(_.t.DToW4e),
    uploadOptionTitle: k = _.intl.string(_.t["MsUY/S"]),
    allowRecentAvatarsSelection: L = true
  } = e, M = (0, s.e7)([x.default], () => x.default.getCurrentUser()), H = (0, s.e7)([v.Z], () => v.Z.getGuildId()), V = (0, s.e7)([C.Z], () => C.Z.getGuild(H)), G = (0, u.vRw)(), z = o === R.pC.AVATAR || o === R.pC.BANNER, q = !S.ZP.canUseAnimatedAvatar(M) && o === R.pC.AVATAR, W = (0, m.M)(!z), X = (0, b.T)({
    location: "NewSelectImageModal"
  }) && L, {
    analyticsLocations: Y,
    newestAnalyticsLocation: J
  } = (0, f.ZP)(N, d.Z.SELECT_IMAGE_MODAL), K = a.useCallback(e => {
    let {
      assetOrigin: t = A.q.NEW_ASSET,
      imageUri: n,
      file: r,
      originalAsset: a,
      isFromTenor: s = false
    } = e;
    l(), i({
      assetOrigin: t,
      imageUri: n,
      file: r,
      originalAsset: a,
      isFromTenor: s
    })
  }, [l, i]), Q = a.useCallback((e, t) => {
    if (t.type === P.m.MP4) return K({
      imageUri: e,
      file: t
    });
    (0, u.ZDy)(async () => {
      let {
        default: a
      } = await Promise.all([n.e("59732"), n.e("2624")]).then(n.bind(n, 712451));
      return n => (0, r.jsx)(a, Z({
        imageUri: e,
        file: t,
        onCrop: K,
        uploadType: o,
        showUpsellHeader: g,
        analyticsPage: null == O ? true : O.page
      }, n))
    }, {
      contextKey: G
    })
  }, [null == O ? true : O.page, G, K, g, o]), $ = a.useCallback(() => {
    (0, T.Z)(p)
  }, [p]), ee = a.useCallback(() => {
    (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("72891").then(n.bind(n, 195297));
      return t => (0, r.jsx)(e, Z({
        uploadType: o,
        onComplete: e => {
          let {
            imageUri: t,
            file: n
          } = e;
          return K({
            imageUri: t,
            file: n,
            isFromTenor: true
          })
        },
        showUpsellHeader: g,
        analyticsPage: null == O ? true : O.page
      }, t))
    }, {
      contextKey: G
    })
  }, [null == O ? true : O.page, G, K, g, o]);
  a.useEffect(() => {
    q && E.default.track(w.rMx.PREMIUM_UPSELL_VIEWED, {
      type: w.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: Y
    }), E.default.track(w.rMx.OPEN_MODAL, {
      type: w.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: O,
      location_stack: Y,
      upload_type: o
    })
  }, [q, O, Y, o]);
  let et = g && W,
    en = o === R.pC.AVATAR && X;
  return (0, r.jsx)(c.u_l, {
    transitionState: t,
    onClose: l,
    size: "md",
    title: D,
    actions: [],
    children: (0, r.jsxs)("div", {
      className: F.modalContent,
      children: [(0, r.jsxs)("div", {
        className: F.imageSelectionSection,
        children: [(0, r.jsxs)("ul", {
          className: F.optionsList,
          "aria-label": _.intl.string(_.t.iBnqtQ),
          children: [(0, r.jsx)("li", {
            children: (0, r.jsx)(U, {
              label: k,
              uploadType: o,
              guild: V,
              handleOpenImageEditingModal: Q,
              maxFileSizeBytes: p,
              filters: j,
              handleFileSizeError: $
            })
          }), (0, r.jsx)("li", {
            children: (0, r.jsx)(B, {
              uploadType: o,
              guild: V,
              handleOpenGIFPickerModal: ee
            })
          })]
        }), null != I ? (0, r.jsx)(u.Text, {
          className: F.imageSpecifications,
          variant: "text-sm/normal",
          color: "text-muted",
          children: I
        }) : null]
      }), en && (0, r.jsx)(y.Z, {
        onComplete: K
      }), et && (0, r.jsx)(h.Z, {
        uploadType: o,
        analyticsSource: J,
        showUpsell: true,
        position: "inline",
        showShadow: false,
        className: F.premiumUpsell
      })]
    })
  })
}