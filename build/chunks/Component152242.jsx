/** Chunk was on 45227 **/
/** chunk id: 152242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  jM: () => T
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
let T = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, i.jsx)(S, function(e) {
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

function E(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: r = false,
    disabled: l = false,
    loading: s = false
  } = e, {
    hasPaymentSources: o
  } = (0, c.JL)(), u = o ? d.h8.REVIEW : d.h8.ADD_PAYMENT_STEPS;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.Button, {
      onClick: () => t(u),
      disabled: l,
      loading: s,
      text: N.intl.string(N.t.XiOHRX)
    }), r ? (0, i.jsx)(m.Z, {
      onClick: n
    }) : null]
  })
}

function S(e) {
  var t;
  let {
    handleStepChange: n,
    handleClose: d
  } = e, {
    customGiftMessage: m = "",
    setCustomGiftMessage: p,
    giftRecipient: C,
    emojiConfetti: w,
    soundEffect: T,
    setEmojiConfetti: S,
    setSoundEffect: G
  } = (0, o.wD)(), {
    selectedSkuId: Z,
    application: A
  } = (0, c.JL)(), B = (0, r.e7)([v.default], () => v.default.getCurrentUser()), D = (0, r.e7)([h.Z], () => null != Z ? h.Z.get(Z) : null, [Z]), L = (0, j.Do)(D), H = (0, j.a7)(D), W = (0, _.K)(D, {
    shouldFetchIfMissing: true
  }), R = async (e, t) => {};
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.C3, {
      children: (0, i.jsxs)("div", {
        className: k.stepBody,
        children: [(0, i.jsxs)("div", {
          className: k.bodyColumnLeft,
          children: [null != L && (0, i.jsx)(P.p, {
            containerClassName: k.skuCardImage,
            cardImage: L,
            cardBackgroundImage: H,
            altText: null != (t = null == D ? true : D.name) ? t : "",
            shape: "square"
          }), (0, i.jsxs)("div", {
            className: k.giftEffectsContainer,
            children: [(0, i.jsx)(b.Z, {
              sound: T,
              onSelect: e => {
                null != G && G(null == e ? true : e)
              }
            }), (0, i.jsx)(g.Z, {
              setEmojiConfetti: S,
              emojiConfetti: null == w ? true : w
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: k.bodyColumnRight,
          children: [(0, i.jsx)(l.Z, {
            selectedSkuId: Z,
            validateSelectedGift: R,
            searchableSelectWrapperClassName: k.recipientPickerSelectWrapper
          }), (0, i.jsx)(f.Z, {
            sectionTitle: N.intl.string(N.t.B3miE8),
            onTextChange: e => null == p ? true : p(e),
            pendingText: m,
            currentText: m,
            disableThemedBackground: true,
            className: k.customGiftMessageWrapper,
            innerClassName: k.customGiftMessage
          }), (() => {
            var e, t, n, r;
            if (null == D) return null;
            let l = (0, x.T4)(null != (n = null == (e = D.price) ? true : e.amount) ? n : 0, null != (r = null == (t = D.price) ? true : t.currency) ? r : I.pK.USD);
            return (0, i.jsxs)("div", {
              className: k.giftPreviewContainer,
              children: [(0, i.jsx)(a.vwX, {
                className: k.giftPreviewTitle,
                children: N.intl.string(N.t.PpoJzt)
              }), (0, i.jsxs)("div", {
                className: k.giftPreviewContent,
                children: [(0, i.jsx)("div", {
                  className: k.giftPreviewImageContainer,
                  children: null != D && null != L && (0, i.jsx)(P.p, {
                    containerClassName: k.giftPreviewCardContainer,
                    cardImage: L,
                    cardBackgroundImage: H,
                    altText: D.name,
                    shape: "square"
                  })
                }), (0, i.jsxs)("div", {
                  className: k.giftPreviewTextContainer,
                  children: [null != A && (0, i.jsx)(y.e, {
                    application: A
                  }), (0, i.jsx)(a.Text, {
                    variant: "text-md/semibold",
                    children: D.name
                  })]
                }), (0, i.jsx)(a.Text, {
                  variant: "text-md/semibold",
                  children: l
                })]
              })]
            })
          })(), null != W && null != D && (0, i.jsx)(M, {
            handleClose: d,
            sku: D,
            guild: W
          })]
        })]
      })
    }), (0, i.jsx)(u.O3, {
      children: (0, i.jsx)(a.mzw, {
        "data-migration-pending": true,
        justify: s.Z.Justify.BETWEEN,
        align: s.Z.Align.CENTER,
        className: k.footer,
        children: (0, i.jsx)(E, {
          onStepChange: n,
          onBackClick: d,
          disabled: null == C || C.id === (null == B ? true : B.id) || m.length > O.$n
        })
      })
    })]
  })
}

function M(e) {
  let {
    handleClose: t,
    guild: n,
    sku: r
  } = e;
  return (0, i.jsx)("div", {
    className: k.viewItemButton,
    children: (0, i.jsx)(a.Avr, {
      text: N.intl.string(N.t.ImioFL),
      onClick: function() {
        var e;
        t();
        let i = null == (e = C.Z.getStorefrontState(n.id)) ? true : e.activePage;
        window.location.pathname.includes(w.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, r.id)) || ((0, a.pTH)(), (0, p.uL)(w.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, r.id, r.slug)))
      },
      textVariant: "text-sm/medium",
      lineClamp: true
    })
  })
}