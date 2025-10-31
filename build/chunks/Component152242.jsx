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
  renderStep: e => (0, r.jsx)(k, function(e) {
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
  }({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t["W685+b"])
  }
};

function N(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: i = false,
    disabled: a = false,
    loading: o = false
  } = e, {
    hasPaymentSources: c
  } = (0, s.JL)(), d = c ? u.h8.REVIEW : u.h8.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Button, {
      onClick: () => t(d),
      disabled: a,
      loading: o,
      text: I.intl.string(I.t.XiOHRX)
    }), i ? (0, r.jsx)(g.Z, {
      onClick: n
    }) : null]
  })
}

function k(e) {
  var t;
  let {
    handleStepChange: n,
    handleClose: u
  } = e, {
    customGiftMessage: g = "",
    setCustomGiftMessage: b,
    giftRecipient: h,
    emojiConfetti: _,
    soundEffect: T,
    setEmojiConfetti: k,
    setSoundEffect: Z
  } = (0, c.wD)(), {
    selectedSkuId: L,
    application: D
  } = (0, s.JL)(), M = (0, i.e7)([v.default], () => v.default.getCurrentUser()), R = (0, i.e7)([j.Z], () => null != L ? j.Z.get(L) : null, [L]), G = (0, y.Do)(R), B = (0, y.a7)(R), H = (0, C.K)(R, {
    shouldFetchIfMissing: true
  }), W = async (e, t) => {};
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.C3, {
      children: (0, r.jsxs)("div", {
        className: E.stepBody,
        children: [(0, r.jsxs)("div", {
          className: E.bodyColumnLeft,
          children: [null != G && (0, r.jsx)(P.p, {
            containerClassName: E.skuCardImage,
            cardImage: G,
            cardBackgroundImage: B,
            altText: null != (t = null == R ? true : R.name) ? t : "",
            shape: "square"
          }), (0, r.jsxs)("div", {
            className: E.giftEffectsContainer,
            children: [(0, r.jsx)(m.Z, {
              sound: T,
              onSelect: e => {
                null != Z && Z(null == e ? true : e)
              }
            }), (0, r.jsx)(p.Z, {
              setEmojiConfetti: k,
              emojiConfetti: null == _ ? true : _
            })]
          })]
        }), (0, r.jsxs)("div", {
          className: E.bodyColumnRight,
          children: [(0, r.jsx)(a.Z, {
            selectedSkuId: L,
            validateSelectedGift: W,
            searchableSelectWrapperClassName: E.recipientPickerSelectWrapper
          }), (0, r.jsx)(f.Z, {
            sectionTitle: I.intl.string(I.t.B3miE8),
            onTextChange: e => null == b ? true : b(e),
            pendingText: g,
            currentText: g,
            disableThemedBackground: true,
            className: E.customGiftMessageWrapper,
            innerClassName: E.customGiftMessage
          }), (() => {
            var e, t, n, i;
            if (null == R) return null;
            let a = (0, O.T4)(null != (n = null == (e = R.price) ? true : e.amount) ? n : 0, null != (i = null == (t = R.price) ? true : t.currency) ? i : S.pK.USD);
            return (0, r.jsxs)("div", {
              className: E.giftPreviewContainer,
              children: [(0, r.jsx)(l.vwX, {
                className: E.giftPreviewTitle,
                children: I.intl.string(I.t.PpoJzt)
              }), (0, r.jsxs)("div", {
                className: E.giftPreviewContent,
                children: [(0, r.jsx)("div", {
                  className: E.giftPreviewImageContainer,
                  children: null != R && null != G && (0, r.jsx)(P.p, {
                    containerClassName: E.giftPreviewCardContainer,
                    cardImage: G,
                    cardBackgroundImage: B,
                    altText: R.name,
                    shape: "square"
                  })
                }), (0, r.jsxs)("div", {
                  className: E.giftPreviewTextContainer,
                  children: [null != D && (0, r.jsx)(x.e, {
                    application: D
                  }), (0, r.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: R.name
                  })]
                }), (0, r.jsx)(l.Text, {
                  variant: "text-md/semibold",
                  children: a
                })]
              })]
            })
          })(), null != H && null != R && (0, r.jsx)(A, {
            handleClose: u,
            sku: R,
            guild: H
          })]
        })]
      })
    }), (0, r.jsx)(d.O3, {
      children: (0, r.jsx)(l.mzw, {
        "data-migration-pending": true,
        justify: o.Z.Justify.BETWEEN,
        align: o.Z.Align.CENTER,
        className: E.footer,
        children: (0, r.jsx)(N, {
          onStepChange: n,
          onBackClick: u,
          disabled: null == h || h.id === (null == M ? true : M.id) || g.length > w.$n
        })
      })
    })]
  })
}

function A(e) {
  let {
    handleClose: t,
    guild: n,
    sku: i
  } = e;
  return (0, r.jsx)("div", {
    className: E.viewItemButton,
    children: (0, r.jsx)(l.Avr, {
      text: I.intl.string(I.t.ImioFL),
      onClick: function() {
        var e;
        t();
        let r = null == (e = h.Z.getStorefrontState(n.id)) ? true : e.activePage;
        window.location.pathname.includes(_.Z5c.CHANNELS_GAME_SHOP(n.id, null != r ? r : 0, i.id)) || ((0, l.pTH)(), (0, b.uL)(_.Z5c.CHANNELS_GAME_SHOP(n.id, null != r ? r : 0, i.id, i.slug)))
      },
      textVariant: "text-sm/medium",
      lineClamp: true
    })
  })
}