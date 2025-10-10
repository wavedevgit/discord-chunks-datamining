/** Chunk was on 45227 **/
/** chunk id: 511821, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  jM: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728345 = require("./728345.js"),
  Chunk225657 = require("./225657.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614277 = require("./614277.jsx"),
  Chunk927699 = require("./927699.jsx"),
  Chunk96848 = require("./96848.jsx"),
  Chunk311821 = require("./311821.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk321051 = require("./321051.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55563 = require("./55563.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk210218 = require("./210218.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397263 = require("./397263.js");
let k = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, i.jsx)(Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t["W685+f"])
  }
};

function M(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: l = false,
    disabled: a = false,
    loading: s = false
  } = e, {
    hasPaymentSources: o
  } = (0, g.JL)(), d = o ? f.h8.REVIEW : f.h8.ADD_PAYMENT_STEPS;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(r.Button, {
      onClick: () => t(d),
      disabled: a,
      loading: s,
      text: E.intl.string(E.t.XiOHRU)
    }), l ? (0, i.jsx)(h.Z, {
      onClick: n
    }) : null]
  })
}

function Z(e) {
  var t, n, f, h, x;
  let {
    handleStepChange: y,
    handleClose: N
  } = e, {
    customGiftMessage: k = "",
    setCustomGiftMessage: Z,
    giftRecipient: G,
    emojiConfetti: B,
    soundEffect: L,
    setEmojiConfetti: W,
    setSoundEffect: R
  } = (0, u.wD)(), {
    selectedSkuId: D,
    application: H
  } = (0, g.JL)(), U = (0, a.e7)([_.default], () => _.default.getCurrentUser()), F = (0, a.e7)([j.Z], () => null != D ? j.Z.get(D) : null, [D]), J = null == H ? true : H.guildId, z = (0, a.e7)([b.Z], () => null != J ? b.Z.getGuild(J) : null, [J]);
  l.useEffect(() => {
    null == z && null != F && s.ZP.fetchApplication(F.applicationId, true)
  }, [z, F]);
  let K = (null == F || null == (n = F.tenantMetadata) || null == (t = n.socialLayer) ? true : t.cardImageAssetId) != null && (null == F ? true : F.applicationId) != null ? w.Z.toURLSafe((0, P._W)(F.applicationId, F.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")) : true,
    V = (null == F || null == (h = F.tenantMetadata) || null == (f = h.socialLayer) ? true : f.cardBackgroundImageAssetId) != null && (null == F ? true : F.applicationId) != null ? w.Z.toURLSafe((0, P._W)(F.applicationId, F.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png")) : true,
    Y = async (e, t) => {};
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(m.C3, {
      children: (0, i.jsxs)("div", {
        className: O.stepBody,
        children: [(0, i.jsxs)("div", {
          className: O.bodyColumnLeft,
          children: [null != K && (0, i.jsx)("div", {
            className: O.cardContainer,
            style: null != V ? {
              backgroundImage: "url(".concat(V.toString(), ")")
            } : true,
            children: (0, i.jsx)("img", {
              src: K.toString(),
              alt: null != (x = null == F ? true : F.name) ? x : "",
              className: O.skuImage
            })
          }), (0, i.jsxs)("div", {
            className: O.giftEffectsContainer,
            children: [(0, i.jsx)(C.Z, {
              sound: L,
              onSelect: e => {
                null != R && R(null == e ? true : e)
              }
            }), (0, i.jsx)(p.Z, {
              setEmojiConfetti: W,
              emojiConfetti: null == B ? true : B
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: O.bodyColumnRight,
          children: [(0, i.jsx)(o.Z, {
            selectedSkuId: D,
            validateSelectedGift: Y,
            searchableSelectWrapperClassName: O.recipientPickerSelectWrapper
          }), (0, i.jsx)(v.Z, {
            sectionTitle: E.intl.string(E.t.B3miEx),
            onTextChange: e => null == Z ? true : Z(e),
            pendingText: k,
            currentText: k,
            disableThemedBackground: true,
            className: O.customGiftMessageWrapper,
            innerClassName: O.customGiftMessage
          }), (() => {
            var e, t, n, l;
            if (null == F) return null;
            let a = (0, I.T4)(null != (n = null == (e = F.price) ? true : e.amount) ? n : 0, null != (l = null == (t = F.price) ? true : t.currency) ? l : T.pK.USD);
            return (0, i.jsxs)("div", {
              className: O.giftPreviewContainer,
              children: [(0, i.jsx)(r.vwX, {
                className: O.giftPreviewTitle,
                children: E.intl.string(E.t.PpoJzs)
              }), (0, i.jsxs)("div", {
                className: O.giftPreviewContent,
                children: [(0, i.jsx)("div", {
                  className: O.giftPreviewImageContainer,
                  children: null != K && (0, i.jsx)("div", {
                    className: O.giftPreviewCardContainer,
                    style: null != V ? {
                      backgroundImage: "url(".concat(V.toString(), ")")
                    } : true,
                    children: (0, i.jsx)("img", {
                      src: K.toString(),
                      alt: F.name,
                      className: O.giftPreviewImage
                    })
                  })
                }), (0, i.jsxs)("div", {
                  className: O.giftPreviewTextContainer,
                  children: [null != z && (0, i.jsxs)("div", {
                    className: O.guildNameContainer,
                    children: [(0, i.jsx)(c.Z, {
                      guild: z,
                      size: c.Z.Sizes.MINI,
                      active: false,
                      showBadge: false
                    }), (0, i.jsx)(r.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: z.name
                    })]
                  }), (0, i.jsx)(r.Text, {
                    variant: "text-md/semibold",
                    children: F.name
                  })]
                }), (0, i.jsx)(r.Text, {
                  variant: "text-md/semibold",
                  children: a
                })]
              })]
            })
          })(), null != z && null != F && (0, i.jsx)(A, {
            handleClose: N,
            sku: F,
            guild: z
          })]
        })]
      })
    }), (0, i.jsx)(m.O3, {
      children: (0, i.jsx)(r.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: O.footer,
        children: (0, i.jsx)(M, {
          onStepChange: y,
          onBackClick: N,
          disabled: null == G || G.id === (null == U ? true : U.id) || k.length > S.$n
        })
      })
    })]
  })
}

function A(e) {
  let {
    handleClose: t,
    guild: n,
    sku: l
  } = e;
  return (0, i.jsx)("div", {
    className: O.viewItemButton,
    children: (0, i.jsx)(r.Avr, {
      text: E.intl.string(E.t.ImioFB),
      onClick: function() {
        var e;
        t();
        let i = null == (e = y.Z.getStorefrontState(n.id)) ? true : e.activePage;
        window.location.pathname.includes(N.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) || ((0, r.pTH)(), (0, x.uL)(N.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id, l.slug)))
      },
      textVariant: "text-sm/medium",
      lineClamp: true
    })
  })
}