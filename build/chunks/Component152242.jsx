/** Chunk was on 45227 **/
/** chunk id: 152242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  jM: () => O
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
  Chunk703656 = require("./703656.js"),
  Chunk321051 = require("./321051.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk55563 = require("./55563.js"),
  Chunk937615 = require("./937615.js"),
  Chunk164670 = require("./164670.js"),
  Chunk210218 = require("./210218.js"),
  Chunk703400 = require("./703400.jsx"),
  Chunk242723 = require("./242723.js"),
  Chunk848118 = require("./848118.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397263 = require("./397263.js");
let O = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, i.jsx)(k, function(e) {
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
    showBackButton: l = false,
    disabled: a = false,
    loading: s = false
  } = e, {
    hasPaymentSources: o
  } = (0, c.JL)(), u = o ? d.h8.REVIEW : d.h8.ADD_PAYMENT_STEPS;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(r.Button, {
      onClick: () => t(u),
      disabled: a,
      loading: s,
      text: T.intl.string(T.t.XiOHRU)
    }), l ? (0, i.jsx)(m.Z, {
      onClick: n
    }) : null]
  })
}

function k(e) {
  var t;
  let {
    handleStepChange: n,
    handleClose: d
  } = e, {
    customGiftMessage: m = "",
    setCustomGiftMessage: p,
    giftRecipient: j,
    emojiConfetti: I,
    soundEffect: O,
    setEmojiConfetti: k,
    setSoundEffect: Z
  } = (0, o.wD)(), {
    selectedSkuId: M,
    application: A
  } = (0, c.JL)(), B = (0, l.e7)([h.default], () => h.default.getCurrentUser()), L = (0, l.e7)([C.Z], () => null != M ? C.Z.get(M) : null, [M]), W = (0, b.Do)(L), D = (0, b.a7)(L), H = (0, P.K)(L, {
    shouldFetchIfMissing: true
  }), R = async (e, t) => {};
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.C3, {
      children: (0, i.jsxs)("div", {
        className: E.stepBody,
        children: [(0, i.jsxs)("div", {
          className: E.bodyColumnLeft,
          children: [null != W && (0, i.jsx)(w.p, {
            className: E.skuCardImage,
            cardImage: W,
            cardBackgroundImage: D,
            altText: null != (t = null == L ? true : L.name) ? t : ""
          }), (0, i.jsxs)("div", {
            className: E.giftEffectsContainer,
            children: [(0, i.jsx)(v.Z, {
              sound: O,
              onSelect: e => {
                null != Z && Z(null == e ? true : e)
              }
            }), (0, i.jsx)(g.Z, {
              setEmojiConfetti: k,
              emojiConfetti: null == I ? true : I
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: E.bodyColumnRight,
          children: [(0, i.jsx)(a.Z, {
            selectedSkuId: M,
            validateSelectedGift: R,
            searchableSelectWrapperClassName: E.recipientPickerSelectWrapper
          }), (0, i.jsx)(f.Z, {
            sectionTitle: T.intl.string(T.t.B3miEx),
            onTextChange: e => null == p ? true : p(e),
            pendingText: m,
            currentText: m,
            disableThemedBackground: true,
            className: E.customGiftMessageWrapper,
            innerClassName: E.customGiftMessage
          }), (() => {
            var e, t, n, l;
            if (null == L) return null;
            let a = (0, x.T4)(null != (n = null == (e = L.price) ? true : e.amount) ? n : 0, null != (l = null == (t = L.price) ? true : t.currency) ? l : N.pK.USD);
            return (0, i.jsxs)("div", {
              className: E.giftPreviewContainer,
              children: [(0, i.jsx)(r.vwX, {
                className: E.giftPreviewTitle,
                children: T.intl.string(T.t.PpoJzs)
              }), (0, i.jsxs)("div", {
                className: E.giftPreviewContent,
                children: [(0, i.jsx)("div", {
                  className: E.giftPreviewImageContainer,
                  children: null != L && null != W && (0, i.jsx)(w.p, {
                    className: E.giftPreviewCardContainer,
                    cardImage: W,
                    cardBackgroundImage: D,
                    altText: L.name
                  })
                }), (0, i.jsxs)("div", {
                  className: E.giftPreviewTextContainer,
                  children: [null != A && (0, i.jsx)(_.e, {
                    application: A
                  }), (0, i.jsx)(r.Text, {
                    variant: "text-md/semibold",
                    children: L.name
                  })]
                }), (0, i.jsx)(r.Text, {
                  variant: "text-md/semibold",
                  children: a
                })]
              })]
            })
          })(), null != H && null != L && (0, i.jsx)(G, {
            handleClose: d,
            sku: L,
            guild: H
          })]
        })]
      })
    }), (0, i.jsx)(u.O3, {
      children: (0, i.jsx)(r.mzw, {
        "data-migration-pending": true,
        justify: s.Z.Justify.BETWEEN,
        align: s.Z.Align.CENTER,
        className: E.footer,
        children: (0, i.jsx)(S, {
          onStepChange: n,
          onBackClick: d,
          disabled: null == j || j.id === (null == B ? true : B.id) || m.length > y.$n
        })
      })
    })]
  })
}

function G(e) {
  let {
    handleClose: t,
    guild: n,
    sku: l
  } = e;
  return (0, i.jsx)("div", {
    className: E.viewItemButton,
    children: (0, i.jsx)(r.Avr, {
      text: T.intl.string(T.t.ImioFB),
      onClick: function() {
        var e;
        t();
        let i = null == (e = j.Z.getStorefrontState(n.id)) ? true : e.activePage;
        window.location.pathname.includes(I.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) || ((0, r.pTH)(), (0, p.uL)(I.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id, l.slug)))
      },
      textVariant: "text-sm/medium",
      lineClamp: true
    })
  })
}