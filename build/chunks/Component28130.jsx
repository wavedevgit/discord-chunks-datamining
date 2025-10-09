/** Chunk was on 89289 **/
/** chunk id: 28130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => B
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk133495 = require("./133495.js");

function F(e) {
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
    className: _.gifGrid,
    children: Z.map(e => (0, r.jsx)("div", {
      className: _.gif,
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
  let r = (0, E._p)(t),
    l = n.features.has(t);
  if (null == r) return;
  let a = (0, E.nW)(r);
  return l ? P.intl.formatToPlainString(P.t.u3L3TU, {
    levelName: a
  }) : P.intl.formatToPlainString(P.t["r/v25e"], {
    levelName: a
  })
}

function D(e) {
  let {
    guildFeature: t,
    guild: n
  } = e;
  return (0, r.jsx)("div", {
    className: _.boostingPill,
    children: (0, r.jsx)(f.Z, {
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
    guildFeature: l,
    guild: a,
    shouldShowPremiumIcon: s
  } = e, u = null != a && null != l;
  return (0, r.jsxs)("div", {
    className: i()(_.optionDescription, {
      [_.hasBoostingPill]: u
    }),
    "aria-hidden": true,
    children: [(0, r.jsxs)("div", {
      className: _.optionIconAndLabel,
      children: [t, (0, r.jsxs)(c.Text, {
        variant: "text-sm/semibold",
        className: i()(_.optionLabelText, {
          [_.hasPremiumIcon]: s
        }),
        children: [s && (0, r.jsx)(o.u, {
          asContainer: true,
          text: P.intl.string(P.t["5AFxuL"]),
          children: (0, r.jsx)(c.SrA, {
            size: "xs",
            color: "currentColor",
            className: _.premiumWheel
          })
        }), n]
      })]
    }), u && (0, r.jsx)(D, {
      guild: a,
      guildFeature: l
    })]
  })
}

function L(e) {
  let {
    label: t,
    uploadType: n,
    guild: l,
    maxFileSizeBytes: a,
    filters: s,
    handleOpenImageEditingModal: o,
    handleFileSizeError: u
  } = e, d = (0, N.GY)(n), f = (0, N.C6)(n, {
    isGIF: false
  }), g = k({
    guildFeature: f,
    guild: l
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.tEY, {
      within: true,
      children: (0, r.jsxs)("div", {
        className: i()(_.option, _.imageUploadOption),
        children: [(0, r.jsx)(M, {
          icon: (0, r.jsx)(c.FmF, {
            size: "md",
            color: "currentColor"
          }),
          label: t,
          guildFeature: f,
          guild: l,
          shouldShowPremiumIcon: d
        }), (0, r.jsx)(p.ZP, {
          "aria-label": t,
          tabIndex: 0,
          onChange: o,
          maxFileSizeBytes: a,
          onFileSizeError: u,
          filters: s,
          multiple: false
        })]
      })
    }), null != g && (0, r.jsx)(c.nn4, {
      children: g
    })]
  })
}

function U(e) {
  let {
    uploadType: t,
    guild: n,
    handleOpenGIFPickerModal: l
  } = e, {
    shouldAnimate: a,
    onMouseEnter: i,
    onMouseLeave: s
  } = (0, A.Z)(), o = (0, N.Kq)(t), u = (0, N.C6)(t, {
    isGIF: true
  }), d = k({
    guildFeature: u,
    guild: n
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(c.P3F, {
      className: _.option,
      onClick: l,
      "aria-label": P.intl.string(P.t["xsC+//"]),
      onMouseEnter: i,
      onMouseLeave: s,
      children: [(0, r.jsx)(I, {
        shouldAnimate: a
      }), (0, r.jsx)(M, {
        icon: (0, r.jsx)(c.OUq, {
          size: "md",
          color: "currentColor"
        }),
        label: P.intl.string(P.t["xsC+//"]),
        guildFeature: u,
        guild: n,
        shouldShowPremiumIcon: o
      })]
    }), null != d && (0, r.jsx)(c.nn4, {
      children: d
    })]
  })
}

function B(e) {
  let {
    transitionState: t,
    onClose: a,
    onComplete: i,
    uploadType: o,
    maxFileSizeBytes: f,
    showUpsellHeader: p,
    filters: A,
    analyticsLocation: E,
    analyticsLocations: N = [],
    imageSpecifications: Z,
    modalTitle: I = P.intl.string(P.t.DToW4e),
    uploadOptionTitle: k = P.intl.string(P.t["MsUY/f"]),
    allowRecentAvatarsSelection: D = true
  } = e, M = (0, s.e7)([C.default], () => C.default.getCurrentUser()), B = (0, s.e7)([y.Z], () => y.Z.getGuildId()), H = (0, s.e7)([x.Z], () => x.Z.getGuild(B)), V = (0, c.vRw)(), z = o === w.pC.AVATAR || o === w.pC.BANNER, G = !O.ZP.canUseAnimatedAvatar(M) && o === w.pC.AVATAR, W = (0, g.M)(!z), q = (0, h.T)({
    location: "NewSelectImageModal"
  }) && D, {
    analyticsLocations: Y,
    newestAnalyticsLocation: X
  } = (0, d.ZP)(N, u.Z.SELECT_IMAGE_MODAL), J = l.useCallback(e => {
    let {
      assetOrigin: t = b.q.NEW_ASSET,
      imageUri: n,
      file: r,
      originalAsset: l,
      isFromTenor: s = false
    } = e;
    a(), i({
      assetOrigin: t,
      imageUri: n,
      file: r,
      originalAsset: l,
      isFromTenor: s
    })
  }, [a, i]), K = l.useCallback((e, t) => {
    if (t.type === R.m.MP4) return J({
      imageUri: e,
      file: t
    });
    (0, c.ZDy)(async () => {
      let {
        default: l
      } = await Promise.all([n.e("59732"), n.e("11866")]).then(n.bind(n, 712451));
      return n => (0, r.jsx)(l, F({
        imageUri: e,
        file: t,
        onCrop: J,
        uploadType: o,
        showUpsellHeader: p,
        analyticsPage: null == E ? true : E.page
      }, n))
    }, {
      contextKey: V
    })
  }, [null == E ? true : E.page, V, J, p, o]), $ = l.useCallback(() => {
    (0, S.Z)(f)
  }, [f]), Q = l.useCallback(() => {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("72891").then(n.bind(n, 195297));
      return t => (0, r.jsx)(e, F({
        uploadType: o,
        onComplete: e => {
          let {
            imageUri: t,
            file: n
          } = e;
          return J({
            imageUri: t,
            file: n,
            isFromTenor: true
          })
        },
        showUpsellHeader: p,
        analyticsPage: null == E ? true : E.page
      }, t))
    }, {
      contextKey: V
    })
  }, [null == E ? true : E.page, V, J, p, o]);
  l.useEffect(() => {
    G && v.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
      type: T.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: Y
    }), v.default.track(T.rMx.OPEN_MODAL, {
      type: T.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: E,
      location_stack: Y,
      upload_type: o
    })
  }, [G, E, Y, o]);
  let ee = p && W,
    et = o === w.pC.AVATAR && q;
  return (0, r.jsxs)(c.Y0X, {
    transitionState: t,
    size: c.CgR.DYNAMIC,
    className: _.modal,
    parentComponent: "SelectImageModal",
    children: [(0, r.jsxs)(c.xBx, {
      className: _.modalHeader,
      separator: false,
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        children: I
      }), (0, r.jsx)(c.olH, {
        onClick: a,
        className: _.modalCloseButton
      })]
    }), (0, r.jsxs)(c.hzk, {
      className: _.modalContent,
      children: [(0, r.jsxs)("div", {
        className: _.imageSelectionSection,
        children: [(0, r.jsxs)("ul", {
          className: _.optionsList,
          "aria-label": P.intl.string(P.t.iBnqtb),
          children: [(0, r.jsx)("li", {
            children: (0, r.jsx)(L, {
              label: k,
              uploadType: o,
              guild: H,
              handleOpenImageEditingModal: K,
              maxFileSizeBytes: f,
              filters: A,
              handleFileSizeError: $
            })
          }), (0, r.jsx)("li", {
            children: (0, r.jsx)(U, {
              uploadType: o,
              guild: H,
              handleOpenGIFPickerModal: Q
            })
          })]
        }), null != Z ? (0, r.jsx)(c.Text, {
          className: _.imageSpecifications,
          variant: "text-sm/normal",
          color: "text-muted",
          children: Z
        }) : null]
      }), et && (0, r.jsx)(j.Z, {
        onComplete: J
      }), ee && (0, r.jsx)(m.Z, {
        uploadType: o,
        analyticsSource: X,
        showUpsell: true,
        position: "inline",
        showShadow: false,
        className: _.premiumUpsell
      })]
    })]
  })
}