/** Chunk was on 45227 **/
/** chunk id: 152242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  jM: () => S
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk225657 = require("./225657.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614277 = require("./614277.jsx"),
  Chunk927699 = require("./927699.jsx"),
  Chunk96848 = require("./96848.jsx"),
  Chunk311821 = require("./311821.jsx"),
  Chunk251660 = require("./251660.jsx"),
  Chunk321051 = require("./321051.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk55563 = require("./55563.js"),
  Chunk937615 = require("./937615.js"),
  Chunk164670 = require("./164670.js"),
  Chunk210218 = require("./210218.js"),
  Chunk705338 = require("./705338.js"),
  Chunk703400 = require("./703400.jsx"),
  Chunk242723 = require("./242723.js"),
  Chunk848118 = require("./848118.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397263 = require("./397263.js");
let S = {
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
    useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t["W685+b"])
  }
};

function O(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: l = false,
    disabled: r = false,
    loading: s = false
  } = e, {
    hasPaymentSources: o
  } = (0, d.JL)(), u = o ? c.h8.REVIEW : c.h8.ADD_PAYMENT_STEPS;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.Button, {
      onClick: () => t(u),
      disabled: r,
      loading: s,
      text: k.intl.string(k.t.XiOHRX)
    }), l ? (0, i.jsx)(m.Z, {
      onClick: n
    }) : null]
  })
}

function Z(e) {
  var t;
  let {
    handleStepChange: n,
    handleClose: c
  } = e, {
    customGiftMessage: m = "",
    setCustomGiftMessage: b,
    giftRecipient: _,
    emojiConfetti: N,
    soundEffect: S,
    setEmojiConfetti: Z,
    setSoundEffect: G,
    giftingOrigin: A
  } = (0, o.wD)(), {
    selectedSkuId: W,
    application: B
  } = (0, d.JL)(), L = (0, l.e7)([v.default], () => v.default.getCurrentUser()), H = (0, l.e7)([h.Z], () => null != W ? h.Z.get(W) : null, [W]), R = (0, j.Do)(H), D = (0, j.a7)(H), F = (0, P.K)(H, {
    shouldFetchIfMissing: true
  }), U = async (e, t) => {};
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.C3, {
      children: (0, i.jsxs)("div", {
        className: E.stepBody,
        children: [(0, i.jsxs)("div", {
          className: E.bodyColumnLeft,
          children: [null != R && (0, i.jsx)(w.p, {
            containerClassName: E.skuCardImage,
            cardImage: R,
            cardBackgroundImage: D,
            altText: null != (t = null == H ? true : H.name) ? t : "",
            shape: "square"
          }), (0, i.jsxs)("div", {
            className: E.giftEffectsContainer,
            children: [(0, i.jsx)(x.Z, {
              sound: S,
              onSelect: e => {
                null != G && G(null == e ? true : e)
              }
            }), (0, i.jsx)(g.Z, {
              setEmojiConfetti: Z,
              emojiConfetti: null == N ? true : N
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: E.bodyColumnRight,
          children: [null != _ && (A === T.Wt.USER_PROFILE_WISHLIST || A === T.Wt.DM_CHANNEL_WISHLIST) ? (0, i.jsx)(p.s, {
            giftRecipient: _
          }) : (0, i.jsx)(r.Z, {
            selectedSkuId: W,
            validateSelectedGift: U,
            searchableSelectWrapperClassName: E.recipientPickerSelectWrapper
          }), (0, i.jsx)(f.Z, {
            sectionTitle: k.intl.string(k.t.B3miE8),
            onTextChange: e => null == b ? true : b(e),
            pendingText: m,
            currentText: m,
            disableThemedBackground: true,
            className: E.customGiftMessageWrapper,
            innerClassName: E.customGiftMessage
          }), (() => {
            var e, t, n, l;
            if (null == H) return null;
            let r = (0, C.T4)(null != (n = null == (e = H.price) ? true : e.amount) ? n : 0, null != (l = null == (t = H.price) ? true : t.currency) ? l : y.pK.USD);
            return (0, i.jsxs)("div", {
              className: E.giftPreviewContainer,
              children: [(0, i.jsx)(a.vwX, {
                className: E.giftPreviewTitle,
                children: k.intl.string(k.t.PpoJzt)
              }), (0, i.jsxs)("div", {
                className: E.giftPreviewContent,
                children: [(0, i.jsx)("div", {
                  className: E.giftPreviewImageContainer,
                  children: null != H && null != R && (0, i.jsx)(w.p, {
                    containerClassName: E.giftPreviewCardContainer,
                    cardImage: R,
                    cardBackgroundImage: D,
                    altText: H.name,
                    shape: "square"
                  })
                }), (0, i.jsxs)("div", {
                  className: E.giftPreviewTextContainer,
                  children: [null != B && (0, i.jsx)(I.e, {
                    application: B
                  }), (0, i.jsx)(a.Text, {
                    variant: "text-md/semibold",
                    children: H.name
                  })]
                }), (0, i.jsx)(a.Text, {
                  variant: "text-md/semibold",
                  children: r
                })]
              })]
            })
          })(), null != F && null != H && (0, i.jsx)(M, {
            handleClose: c,
            sku: H,
            guild: F
          })]
        })]
      })
    }), (0, i.jsx)(u.O3, {
      children: (0, i.jsx)(a.mzw, {
        "data-migration-pending": true,
        justify: s.Z.Justify.BETWEEN,
        align: s.Z.Align.CENTER,
        className: E.footer,
        children: (0, i.jsx)(O, {
          onStepChange: n,
          onBackClick: c,
          disabled: null == _ || _.id === (null == L ? true : L.id) || m.length > T.$n
        })
      })
    })]
  })
}

function M(e) {
  let {
    handleClose: t,
    guild: n,
    sku: l
  } = e;
  return (0, i.jsx)("div", {
    className: E.viewItemButton,
    children: (0, i.jsx)(a.Avr, {
      text: k.intl.string(k.t.ImioFL),
      onClick: function() {
        var e;
        t();
        let i = null == (e = b.Z.getStorefrontState(n.id)) ? true : e.activePage;
        window.location.pathname.includes(N.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) || ((0, a.pTH)(), (0, _.Z)({
          guildId: n.id,
          pageIndex: null != i ? i : 0,
          skuId: l.id,
          slug: l.slug
        }))
      },
      textVariant: "text-sm/medium",
      lineClamp: true
    })
  })
}