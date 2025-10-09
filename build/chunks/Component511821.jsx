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
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
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
    showBackButton: a = false,
    disabled: l = false,
    loading: s = false
  } = e, {
    hasPaymentSources: o
  } = (0, g.JL)(), d = o ? f.h8.REVIEW : f.h8.ADD_PAYMENT_STEPS;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(r.Button, {
      onClick: () => t(d),
      disabled: l,
      loading: s,
      text: O.intl.string(O.t.XiOHRU)
    }), a ? (0, i.jsx)(h.Z, {
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
    giftRecipient: A,
    emojiConfetti: B,
    soundEffect: L,
    setEmojiConfetti: W,
    setSoundEffect: R
  } = (0, u.wD)(), {
    selectedSkuId: D,
    application: U
  } = (0, g.JL)(), F = (0, l.e7)([j.default], () => j.default.getCurrentUser()), H = (0, l.e7)([_.Z], () => null != D ? _.Z.get(D) : null, [D]), J = null == U ? true : U.guildId, z = (0, l.e7)([b.Z], () => null != J ? b.Z.getGuild(J) : null, [J]);
  a.useEffect(() => {
    null == z && null != H && s.ZP.fetchApplication(H.applicationId, true)
  }, [z, H]);
  let K = (null == H || null == (n = H.tenantMetadata) || null == (t = n.socialLayer) ? true : t.cardImageAssetId) != null && (null == H ? true : H.applicationId) != null ? w.Z.toURLSafe((0, P._W)(H.applicationId, H.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")) : true,
    V = (null == H || null == (h = H.tenantMetadata) || null == (f = h.socialLayer) ? true : f.cardBackgroundImageAssetId) != null && (null == H ? true : H.applicationId) != null ? w.Z.toURLSafe((0, P._W)(H.applicationId, H.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png")) : true,
    Y = async (e, t) => {};
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(m.C3, {
      children: (0, i.jsxs)("div", {
        className: E.stepBody,
        children: [(0, i.jsxs)("div", {
          className: E.bodyColumnLeft,
          children: [null != K && (0, i.jsx)("div", {
            className: E.cardContainer,
            style: null != V ? {
              backgroundImage: "url(".concat(V.toString(), ")")
            } : true,
            children: (0, i.jsx)("img", {
              src: K.toString(),
              alt: null != (x = null == H ? true : H.name) ? x : "",
              className: E.skuImage
            })
          }), (0, i.jsxs)("div", {
            className: E.giftEffectsContainer,
            children: [(0, i.jsx)(C.Z, {
              sound: L,
              onSelect: e => {
                null != R && R(null == e ? true : e)
              }
            }), (0, i.jsx)(v.Z, {
              setEmojiConfetti: W,
              emojiConfetti: null == B ? true : B
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: E.bodyColumnRight,
          children: [(0, i.jsx)(o.Z, {
            selectedSkuId: D,
            validateSelectedGift: Y,
            searchableSelectWrapperClassName: E.recipientPickerSelectWrapper
          }), (0, i.jsx)(p.Z, {
            sectionTitle: O.intl.string(O.t.B3miEx),
            onTextChange: e => null == Z ? true : Z(e),
            pendingText: k,
            currentText: k,
            disableThemedBackground: true,
            className: E.customGiftMessageWrapper,
            innerClassName: E.customGiftMessage
          }), (() => {
            var e, t, n, a;
            if (null == H) return null;
            let l = (0, I.T4)(null != (n = null == (e = H.price) ? true : e.amount) ? n : 0, null != (a = null == (t = H.price) ? true : t.currency) ? a : S.pK.USD);
            return (0, i.jsxs)("div", {
              className: E.giftPreviewContainer,
              children: [(0, i.jsx)(r.vwX, {
                className: E.giftPreviewTitle,
                children: O.intl.string(O.t.PpoJzs)
              }), (0, i.jsxs)("div", {
                className: E.giftPreviewContent,
                children: [(0, i.jsx)("div", {
                  className: E.giftPreviewImageContainer,
                  children: null != K && (0, i.jsx)("div", {
                    className: E.giftPreviewCardContainer,
                    style: null != V ? {
                      backgroundImage: "url(".concat(V.toString(), ")")
                    } : true,
                    children: (0, i.jsx)("img", {
                      src: K.toString(),
                      alt: H.name,
                      className: E.giftPreviewImage
                    })
                  })
                }), (0, i.jsxs)("div", {
                  className: E.giftPreviewTextContainer,
                  children: [null != z && (0, i.jsxs)("div", {
                    className: E.guildNameContainer,
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
                    children: H.name
                  })]
                }), (0, i.jsx)(r.Text, {
                  variant: "text-md/semibold",
                  children: l
                })]
              })]
            })
          })(), null != z && (0, i.jsx)(G, {
            handleClose: N,
            selectedSkuId: D,
            guild: z
          })]
        })]
      })
    }), (0, i.jsx)(m.O3, {
      children: (0, i.jsx)(r.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: E.footer,
        children: (0, i.jsx)(M, {
          onStepChange: y,
          onBackClick: N,
          disabled: null == A || A.id === (null == F ? true : F.id) || k.length > T.$n
        })
      })
    })]
  })
}

function G(e) {
  let {
    handleClose: t,
    guild: n
  } = e;
  return (0, i.jsx)("div", {
    className: E.viewItemButton,
    children: (0, i.jsx)(r.Avr, {
      text: O.intl.string(O.t.ImioFB),
      onClick: function() {
        t(), (0, r.pTH)(), (0, x.uL)(y.Z5c.CHANNEL(n.id, N.oC.GUILD_SHOP))
      },
      textVariant: "text-sm/medium",
      lineClamp: true
    })
  })
}