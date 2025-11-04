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
  Chunk251660 = require("./251660.jsx"),
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

function k(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: r = false,
    disabled: a = false,
    loading: o = false
  } = e, {
    hasPaymentSources: s
  } = (0, c.JL)(), u = s ? d.h8.REVIEW : d.h8.ADD_PAYMENT_STEPS;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Button, {
      onClick: () => t(u),
      disabled: a,
      loading: o,
      text: E.intl.string(E.t.XiOHRX)
    }), r ? (0, i.jsx)(p.Z, {
      onClick: n
    }) : null]
  })
}

function Z(e) {
  var t;
  let {
    handleStepChange: n,
    handleClose: d
  } = e, {
    customGiftMessage: p = "",
    setCustomGiftMessage: v,
    giftRecipient: _,
    emojiConfetti: O,
    soundEffect: T,
    setEmojiConfetti: Z,
    setSoundEffect: G,
    giftingOrigin: A
  } = (0, s.wD)(), {
    selectedSkuId: L,
    application: W
  } = (0, c.JL)(), B = (0, r.e7)([h.default], () => h.default.getCurrentUser()), D = (0, r.e7)([x.Z], () => null != L ? x.Z.get(L) : null, [L]), H = (0, C.Do)(D), R = (0, C.a7)(D), F = (0, P.K)(D, {
    shouldFetchIfMissing: true
  }), U = async (e, t) => {};
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.C3, {
      children: (0, i.jsxs)("div", {
        className: S.stepBody,
        children: [(0, i.jsxs)("div", {
          className: S.bodyColumnLeft,
          children: [null != H && (0, i.jsx)(w.p, {
            containerClassName: S.skuCardImage,
            cardImage: H,
            cardBackgroundImage: R,
            altText: null != (t = null == D ? true : D.name) ? t : "",
            shape: "square"
          }), (0, i.jsxs)("div", {
            className: S.giftEffectsContainer,
            children: [(0, i.jsx)(b.Z, {
              sound: T,
              onSelect: e => {
                null != G && G(null == e ? true : e)
              }
            }), (0, i.jsx)(g.Z, {
              setEmojiConfetti: Z,
              emojiConfetti: null == O ? true : O
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: S.bodyColumnRight,
          children: [null != _ && (A === I.Wt.USER_PROFILE_WISHLIST || A === I.Wt.DM_CHANNEL_WISHLIST) ? (0, i.jsx)(m.s, {
            giftRecipient: _
          }) : (0, i.jsx)(a.Z, {
            selectedSkuId: L,
            validateSelectedGift: U,
            searchableSelectWrapperClassName: S.recipientPickerSelectWrapper
          }), (0, i.jsx)(f.Z, {
            sectionTitle: E.intl.string(E.t.B3miE8),
            onTextChange: e => null == v ? true : v(e),
            pendingText: p,
            currentText: p,
            disableThemedBackground: true,
            className: S.customGiftMessageWrapper,
            innerClassName: S.customGiftMessage
          }), (() => {
            var e, t, n, r;
            if (null == D) return null;
            let a = (0, j.T4)(null != (n = null == (e = D.price) ? true : e.amount) ? n : 0, null != (r = null == (t = D.price) ? true : t.currency) ? r : N.pK.USD);
            return (0, i.jsxs)("div", {
              className: S.giftPreviewContainer,
              children: [(0, i.jsx)(l.vwX, {
                className: S.giftPreviewTitle,
                children: E.intl.string(E.t.PpoJzt)
              }), (0, i.jsxs)("div", {
                className: S.giftPreviewContent,
                children: [(0, i.jsx)("div", {
                  className: S.giftPreviewImageContainer,
                  children: null != D && null != H && (0, i.jsx)(w.p, {
                    containerClassName: S.giftPreviewCardContainer,
                    cardImage: H,
                    cardBackgroundImage: R,
                    altText: D.name,
                    shape: "square"
                  })
                }), (0, i.jsxs)("div", {
                  className: S.giftPreviewTextContainer,
                  children: [null != W && (0, i.jsx)(y.e, {
                    application: W
                  }), (0, i.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: D.name
                  })]
                }), (0, i.jsx)(l.Text, {
                  variant: "text-md/semibold",
                  children: a
                })]
              })]
            })
          })(), null != F && null != D && (0, i.jsx)(M, {
            handleClose: d,
            sku: D,
            guild: F
          })]
        })]
      })
    }), (0, i.jsx)(u.O3, {
      children: (0, i.jsx)(l.mzw, {
        "data-migration-pending": true,
        justify: o.Z.Justify.BETWEEN,
        align: o.Z.Align.CENTER,
        className: S.footer,
        children: (0, i.jsx)(k, {
          onStepChange: n,
          onBackClick: d,
          disabled: null == _ || _.id === (null == B ? true : B.id) || p.length > I.$n
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
    className: S.viewItemButton,
    children: (0, i.jsx)(l.Avr, {
      text: E.intl.string(E.t.ImioFL),
      onClick: function() {
        var e;
        t();
        let i = null == (e = _.Z.getStorefrontState(n.id)) ? true : e.activePage;
        window.location.pathname.includes(O.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, r.id)) || ((0, l.pTH)(), (0, v.uL)(O.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, r.id, r.slug)))
      },
      textVariant: "text-sm/medium",
      lineClamp: true
    })
  })
}