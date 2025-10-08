/** Chunk was on 45227 **/
/** chunk id: 511821, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  jM: () => O
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
  Chunk321051 = require("./321051.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55563 = require("./55563.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk305745 = require("./305745.js");
let O = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, i.jsx)(E, function(e) {
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

function S(e) {
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
    children: [(0, i.jsx)(r.zxk, {
      onClick: () => t(d),
      disabled: l,
      loading: s,
      text: N.intl.string(N.t.XiOHRU)
    }), a ? (0, i.jsx)(h.Z, {
      onClick: n
    }) : null]
  })
}

function E(e) {
  var t, n, f, h, O;
  let {
    handleStepChange: E,
    handleClose: k
  } = e, {
    customGiftMessage: M = "",
    setCustomGiftMessage: Z,
    giftRecipient: G,
    emojiConfetti: A,
    soundEffect: L,
    setEmojiConfetti: B,
    setSoundEffect: W
  } = (0, u.wD)(), {
    selectedSkuId: R,
    application: D
  } = (0, g.JL)(), U = (0, l.e7)([C.default], () => C.default.getCurrentUser()), F = (0, l.e7)([j.Z], () => null != R ? j.Z.get(R) : null, [R]), J = null == D ? true : D.guildId, z = (0, l.e7)([x.Z], () => null != J ? x.Z.getGuild(J) : null, [J]);
  a.useEffect(() => {
    null == z && null != F && s.ZP.fetchApplication(F.applicationId, true)
  }, [z, F]);
  let H = (null == F || null == (n = F.tenantMetadata) || null == (t = n.socialLayer) ? true : t.cardImageAssetId) != null && (null == F ? true : F.applicationId) != null ? P.Z.toURLSafe((0, I._W)(F.applicationId, F.tenantMetadata.socialLayer.cardImageAssetId, 512, "png")) : true,
    K = (null == F || null == (h = F.tenantMetadata) || null == (f = h.socialLayer) ? true : f.cardBackgroundImageAssetId) != null && (null == F ? true : F.applicationId) != null ? P.Z.toURLSafe((0, I._W)(F.applicationId, F.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png")) : true,
    X = async (e, t) => {};
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(m.C3, {
      children: (0, i.jsxs)("div", {
        className: T.stepBody,
        children: [(0, i.jsxs)("div", {
          className: T.bodyColumnLeft,
          children: [null != H && (0, i.jsx)("div", {
            className: T.cardContainer,
            style: null != K ? {
              backgroundImage: "url(".concat(K.toString(), ")")
            } : true,
            children: (0, i.jsx)("img", {
              src: H.toString(),
              alt: null != (O = null == F ? true : F.name) ? O : "",
              className: T.skuImage
            })
          }), (0, i.jsxs)("div", {
            className: T.giftEffectsContainer,
            children: [(0, i.jsx)(b.Z, {
              sound: L,
              onSelect: e => {
                null != W && W(null == e ? true : e)
              }
            }), (0, i.jsx)(v.Z, {
              setEmojiConfetti: B,
              emojiConfetti: null == A ? true : A
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: T.bodyColumnRight,
          children: [(0, i.jsx)(o.Z, {
            selectedSkuId: R,
            validateSelectedGift: X,
            searchableSelectWrapperClassName: T.recipientPickerSelectWrapper
          }), (0, i.jsx)(p.Z, {
            sectionTitle: N.intl.string(N.t.B3miEx),
            onTextChange: e => null == Z ? true : Z(e),
            pendingText: M,
            currentText: M,
            disableThemedBackground: true,
            className: T.customGiftMessageWrapper,
            innerClassName: T.customGiftMessage
          }), (() => {
            var e, t, n, a;
            if (null == F) return null;
            let l = (0, _.T4)(null != (n = null == (e = F.price) ? true : e.amount) ? n : 0, null != (a = null == (t = F.price) ? true : t.currency) ? a : w.pK.USD);
            return (0, i.jsxs)("div", {
              className: T.giftPreviewContainer,
              children: [(0, i.jsx)(r.vwX, {
                className: T.giftPreviewTitle,
                children: N.intl.string(N.t.PpoJzs)
              }), (0, i.jsxs)("div", {
                className: T.giftPreviewContent,
                children: [(0, i.jsx)("div", {
                  className: T.giftPreviewImageContainer,
                  children: null != H && (0, i.jsx)("div", {
                    className: T.giftPreviewCardContainer,
                    style: null != K ? {
                      backgroundImage: "url(".concat(K.toString(), ")")
                    } : true,
                    children: (0, i.jsx)("img", {
                      src: H.toString(),
                      alt: F.name,
                      className: T.giftPreviewImage
                    })
                  })
                }), (0, i.jsxs)("div", {
                  className: T.giftPreviewTextContainer,
                  children: [null != z && (0, i.jsxs)("div", {
                    className: T.guildNameContainer,
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
                  children: l
                })]
              })]
            })
          })()]
        })]
      })
    }), (0, i.jsx)(m.O3, {
      children: (0, i.jsx)(r.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: T.footer,
        children: (0, i.jsx)(S, {
          onStepChange: E,
          onBackClick: k,
          disabled: null == G || G.id === (null == U ? true : U.id) || M.length > y.$n
        })
      })
    })]
  })
}