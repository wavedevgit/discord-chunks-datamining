/** Chunk was on 45227 **/
/** chunk id: 152242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  jM: () => E
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
  Chunk305745 = require("./305745.js");
let E = {
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

function S(e) {
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
      text: T.intl.string(T.t.XiOHRX)
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
    setCustomGiftMessage: C,
    giftRecipient: y,
    emojiConfetti: O,
    soundEffect: E,
    setEmojiConfetti: Z,
    setSoundEffect: G,
    giftingOrigin: A
  } = (0, s.wD)(), {
    selectedSkuId: W,
    application: B
  } = (0, c.JL)(), D = (0, r.e7)([b.default], () => b.default.getCurrentUser()), L = (0, r.e7)([h.Z], () => null != W ? h.Z.get(W) : null, [W]), H = (0, j.Do)(L), R = (0, j.a7)(L), F = (0, P.K)(L, {
    shouldFetchIfMissing: true
  }), U = async (e, t) => {};
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.C3, {
      children: (0, i.jsxs)("div", {
        className: k.stepBody,
        children: [(0, i.jsxs)("div", {
          className: k.bodyColumnLeft,
          children: [null != H && (0, i.jsx)(w.p, {
            containerClassName: k.skuCardImage,
            cardImage: H,
            cardBackgroundImage: R,
            altText: null != (t = null == L ? true : L.name) ? t : "",
            shape: "square"
          }), (0, i.jsxs)("div", {
            className: k.giftEffectsContainer,
            children: [(0, i.jsx)(v.Z, {
              sound: E,
              onSelect: e => {
                null != G && G(null == e ? true : e)
              }
            }), (0, i.jsx)(g.Z, {
              setEmojiConfetti: Z,
              emojiConfetti: null == O ? true : O
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: k.bodyColumnRight,
          children: [null != y && (A === I.Wt.USER_PROFILE_WISHLIST || A === I.Wt.DM_CHANNEL_WISHLIST) ? (0, i.jsx)(m.s, {
            giftRecipient: y
          }) : (0, i.jsx)(a.Z, {
            selectedSkuId: W,
            validateSelectedGift: U,
            searchableSelectWrapperClassName: k.recipientPickerSelectWrapper
          }), (0, i.jsx)(f.Z, {
            sectionTitle: T.intl.string(T.t.B3miE8),
            onTextChange: e => null == C ? true : C(e),
            pendingText: p,
            currentText: p,
            disableThemedBackground: true,
            className: k.customGiftMessageWrapper,
            innerClassName: k.customGiftMessage
          }), (() => {
            var e, t, n, r;
            if (null == L) return null;
            let a = (0, x.T4)(null != (n = null == (e = L.price) ? true : e.amount) ? n : 0, null != (r = null == (t = L.price) ? true : t.currency) ? r : N.pK.USD);
            return (0, i.jsxs)("div", {
              className: k.giftPreviewContainer,
              children: [(0, i.jsx)(l.vwX, {
                className: k.giftPreviewTitle,
                children: T.intl.string(T.t.PpoJzt)
              }), (0, i.jsxs)("div", {
                className: k.giftPreviewContent,
                children: [(0, i.jsx)("div", {
                  className: k.giftPreviewImageContainer,
                  children: null != L && null != H && (0, i.jsx)(w.p, {
                    containerClassName: k.giftPreviewCardContainer,
                    cardImage: H,
                    cardBackgroundImage: R,
                    altText: L.name,
                    shape: "square"
                  })
                }), (0, i.jsxs)("div", {
                  className: k.giftPreviewTextContainer,
                  children: [null != B && (0, i.jsx)(_.e, {
                    application: B
                  }), (0, i.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: L.name
                  })]
                }), (0, i.jsx)(l.Text, {
                  variant: "text-md/semibold",
                  children: a
                })]
              })]
            })
          })(), null != F && null != L && (0, i.jsx)(M, {
            handleClose: d,
            sku: L,
            guild: F
          })]
        })]
      })
    }), (0, i.jsx)(u.O3, {
      children: (0, i.jsx)(l.mzw, {
        "data-migration-pending": true,
        justify: o.Z.Justify.BETWEEN,
        align: o.Z.Align.CENTER,
        className: k.footer,
        children: (0, i.jsx)(S, {
          onStepChange: n,
          onBackClick: d,
          disabled: null == y || y.id === (null == D ? true : D.id) || p.length > I.$n
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
    children: (0, i.jsx)(l.Avr, {
      text: T.intl.string(T.t.ImioFL),
      onClick: function() {
        var e;
        t();
        let i = null == (e = C.Z.getStorefrontState(n.id)) ? true : e.activePage;
        window.location.pathname.includes(O.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, r.id)) || ((0, l.pTH)(), (0, y.Z)({
          guildId: n.id,
          pageIndex: null != i ? i : 0,
          skuId: r.id,
          slug: r.slug
        }))
      },
      textVariant: "text-sm/medium",
      lineClamp: true
    })
  })
}