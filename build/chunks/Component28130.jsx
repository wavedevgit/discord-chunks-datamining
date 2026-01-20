/** Chunk was on 89289 **/
/** chunk id: 28130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => B
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

function _(e) {
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
let Z = [{
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

function I(e) {
  let {
    shouldAnimate: t = true
  } = e;
  return (0, r.jsx)("div", {
    className: F.gifGrid,
    children: Z.map(e => (0, r.jsx)("div", {
      className: F.gif,
      style: {
        backgroundImage: "url(".concat(t ? e.gif : e.png, ")")
      }
    }, e.gif))
  })
}

function D(e) {
  let {
    guildFeature: t,
    guild: n
  } = e;
  if (null == t || null == n) return;
  let r = (0, E._p)(t),
    a = n.features.has(t);
  if (null == r) return;
  let l = (0, E.nW)(r);
  return a ? w.intl.formatToPlainString(w.t.u3L3TX, {
    levelName: l
  }) : w.intl.formatToPlainString(w.t["r/v25U"], {
    levelName: l
  })
}

function k(e) {
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

function L(e) {
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
          text: w.intl.string(w.t["5AFxuK"]),
          children: (0, r.jsx)(u.SrA, {
            size: "xs",
            color: "currentColor",
            className: F.premiumWheel
          })
        }), n]
      })]
    }), c && (0, r.jsx)(k, {
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
  }), p = D({
    guildFeature: f,
    guild: a
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.tEY, {
      within: true,
      children: (0, r.jsxs)("div", {
        className: i()(F.option, F.imageUploadOption),
        children: [(0, r.jsx)(L, {
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

function M(e) {
  let {
    uploadType: t,
    guild: n,
    handleOpenGIFPickerModal: a
  } = e, {
    shouldAnimate: l,
    onMouseEnter: i,
    onMouseLeave: s
  } = (0, y.Z)(), o = (0, N.Kq)(t), c = (0, N.C6)(t, {
    isGIF: true
  }), d = D({
    guildFeature: c,
    guild: n
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(u.P3F, {
      className: F.option,
      onClick: a,
      "aria-label": w.intl.string(w.t["xsC+/y"]),
      onMouseEnter: i,
      onMouseLeave: s,
      children: [(0, r.jsx)(I, {
        shouldAnimate: l
      }), (0, r.jsx)(L, {
        icon: (0, r.jsx)(u.OUq, {
          size: "md",
          color: "currentColor"
        }),
        label: w.intl.string(w.t["xsC+/y"]),
        guildFeature: c,
        guild: n,
        shouldShowPremiumIcon: o
      })]
    }), null != d && (0, r.jsx)(u.nn4, {
      children: d
    })]
  })
}

function B(e) {
  let {
    transitionState: t,
    onClose: l,
    onComplete: i,
    uploadType: o,
    maxFileSizeBytes: p,
    showUpsellHeader: g,
    filters: y,
    analyticsLocation: E,
    analyticsLocations: N = [],
    imageSpecifications: Z,
    modalTitle: I = w.intl.string(w.t.DToW4e),
    uploadOptionTitle: D = w.intl.string(w.t["MsUY/S"]),
    allowRecentAvatarsSelection: k = true
  } = e, L = (0, s.e7)([v.default], () => v.default.getCurrentUser()), B = (0, s.e7)([C.Z], () => C.Z.getGuildId()), H = (0, s.e7)([j.Z], () => j.Z.getGuild(B)), V = (0, u.vRw)(), G = o === R.pC.AVATAR || o === R.pC.BANNER, z = !O.ZP.canUseAnimatedAvatar(L) && o === R.pC.AVATAR, q = (0, m.M)(!G), {
    analyticsLocations: W,
    newestAnalyticsLocation: X
  } = (0, f.ZP)(N, d.Z.SELECT_IMAGE_MODAL), Y = a.useCallback(e => {
    let {
      assetOrigin: t = b.q.NEW_ASSET,
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
  }, [l, i]), J = a.useCallback((e, t) => {
    if (t.type === P.m.MP4) return Y({
      imageUri: e,
      file: t
    });
    (0, u.ZDy)(async () => {
      let {
        default: a
      } = await Promise.all([n.e("30409"), n.e("59732"), n.e("2624")]).then(n.bind(n, 712451));
      return n => (0, r.jsx)(a, _({
        imageUri: e,
        file: t,
        onCrop: Y,
        uploadType: o,
        showUpsellHeader: g,
        analyticsPage: null == E ? true : E.page
      }, n))
    }, {
      contextKey: V
    })
  }, [null == E ? true : E.page, V, Y, g, o]), K = a.useCallback(() => {
    (0, S.Z)(p)
  }, [p]), Q = a.useCallback(() => {
    (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("72891").then(n.bind(n, 195297));
      return t => (0, r.jsx)(e, _({
        uploadType: o,
        onComplete: e => {
          let {
            imageUri: t,
            file: n
          } = e;
          return Y({
            imageUri: t,
            file: n,
            isFromTenor: true
          })
        },
        showUpsellHeader: g,
        analyticsPage: null == E ? true : E.page
      }, t))
    }, {
      contextKey: V
    })
  }, [null == E ? true : E.page, V, Y, g, o]);
  a.useEffect(() => {
    z && x.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
      type: T.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: W
    }), x.default.track(T.rMx.OPEN_MODAL, {
      type: T.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: E,
      location_stack: W,
      upload_type: o
    })
  }, [z, E, W, o]);
  let $ = g && q,
    ee = k && o === R.pC.AVATAR;
  return (0, r.jsx)(c.u_l, {
    transitionState: t,
    onClose: l,
    size: "md",
    title: I,
    actions: [],
    children: (0, r.jsxs)("div", {
      className: F.modalContent,
      children: [(0, r.jsxs)("div", {
        className: F.imageSelectionSection,
        children: [(0, r.jsxs)("ul", {
          className: F.optionsList,
          "aria-label": w.intl.string(w.t.iBnqtQ),
          children: [(0, r.jsx)("li", {
            children: (0, r.jsx)(U, {
              label: D,
              uploadType: o,
              guild: H,
              handleOpenImageEditingModal: J,
              maxFileSizeBytes: p,
              filters: y,
              handleFileSizeError: K
            })
          }), (0, r.jsx)("li", {
            children: (0, r.jsx)(M, {
              uploadType: o,
              guild: H,
              handleOpenGIFPickerModal: Q
            })
          })]
        }), null != Z ? (0, r.jsx)(u.Text, {
          className: F.imageSpecifications,
          variant: "text-sm/normal",
          color: "text-muted",
          children: Z
        }) : null]
      }), ee && (0, r.jsx)(A.Z, {
        onComplete: Y
      }), $ && (0, r.jsx)(h.Z, {
        uploadType: o,
        analyticsSource: X,
        showUpsell: true,
        position: "inline",
        className: F.premiumUpsell
      })]
    })
  })
}