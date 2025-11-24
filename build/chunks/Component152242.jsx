/** Chunk was on 45227 **/
/** chunk id: 152242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  jM: () => A
}), require("./388685.js"), require("./539854.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk358221 = require("./358221.js"),
  Chunk225657 = require("./225657.jsx"),
  Chunk334636 = require("./334636.js"),
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
  Chunk19780 = require("./19780.js"),
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
  Chunk354459 = require("./354459.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397263 = require("./397263.js");
let A = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, i.jsx)(R, function(e) {
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

function L(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: l = false,
    disabled: a = false,
    loading: s = false
  } = e, {
    hasPaymentSources: o
  } = (0, f.JL)(), c = o ? g.h8.REVIEW : g.h8.ADD_PAYMENT_STEPS;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(r.Button, {
      onClick: () => t(c),
      disabled: a,
      loading: s,
      text: G.intl.string(G.t.XiOHRX)
    }), l ? (0, i.jsx)(x.Z, {
      onClick: n
    }) : null]
  })
}

function R(e) {
  var t;
  let {
    handleStepChange: n,
    handleClose: g
  } = e, {
    customGiftMessage: x = "",
    setCustomGiftMessage: w,
    giftRecipient: y,
    emojiConfetti: E,
    soundEffect: A,
    setEmojiConfetti: R,
    setSoundEffect: B,
    giftingOrigin: D
  } = (0, u.wD)(), {
    selectedSkuId: H,
    application: F
  } = (0, f.JL)(), U = (0, a.e7)([j.default], () => j.default.getCurrentUser()), K = function(e) {
    let t = (0, a.e7)([_.Z], () => _.Z.isConnected() ? _.Z.getChannelId() : null),
      [n, i] = l.useState([]);
    return l.useEffect(() => {
      let n = null != t ? s.Z.getParticipants(t) : [],
        l = [],
        a = new Set;
      for (let t of n) !(0, k.Io)(t) && !(0, k._5)(t) || t.user.id === e || a.has(t.user.id) || (a.add(t.user.id), l.push(t));
      l.sort((e, t) => (0, k._5)(e) && !(0, k._5)(t) ? false : (0, k._5)(t) && !(0, k._5)(e) ? 1 : 0), i(l.map(e => e.user.id))
    }, [t, e]), n
  }(null == U ? true : U.id), J = (0, c.Z)({
    location: "Slayer Storefront Gift Customization Step",
    additionalRecipientIds: K
  }), q = (0, a.e7)([b.Z], () => null != H ? b.Z.get(H) : null, [H]), V = (0, P.Do)(q), z = (0, P.a7)(q), Y = (0, T.K)(q, {
    shouldFetchIfMissing: true
  }), X = async (e, t) => {};
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(m.C3, {
      children: (0, i.jsxs)("div", {
        className: M.stepBody,
        children: [(0, i.jsxs)("div", {
          className: M.bodyColumnLeft,
          children: [null != V && (0, i.jsx)(N.p, {
            containerClassName: M.skuCardImage,
            cardImage: V,
            cardBackgroundImage: z,
            altText: null != (t = null == q ? true : q.name) ? t : "",
            shape: "square"
          }), (0, i.jsxs)("div", {
            className: M.giftEffectsContainer,
            children: [(0, i.jsx)(C.Z, {
              sound: A,
              onSelect: e => {
                null != B && B(null == e ? true : e)
              }
            }), (0, i.jsx)(h.Z, {
              setEmojiConfetti: R,
              emojiConfetti: null == E ? true : E
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: M.bodyColumnRight,
          children: [null != y && (D === O.Wt.USER_PROFILE_WISHLIST || D === O.Wt.DM_CHANNEL_WISHLIST) ? (0, i.jsx)(v.s, {
            giftRecipient: y
          }) : (0, i.jsx)(o.Z, {
            selectedSkuId: H,
            validateSelectedGift: X,
            searchableSelectWrapperClassName: M.recipientPickerSelectWrapper,
            recipients: J
          }), (0, i.jsx)(p.Z, {
            sectionTitle: G.intl.string(G.t.B3miE8),
            onTextChange: e => null == w ? true : w(e),
            pendingText: x,
            currentText: x,
            disableThemedBackground: true,
            className: M.customGiftMessageWrapper,
            innerClassName: M.customGiftMessage
          }), (() => {
            var e, t, n, l;
            if (null == q) return null;
            let a = (0, I.T4)(null != (n = null == (e = q.price) ? true : e.amount) ? n : 0, null != (l = null == (t = q.price) ? true : t.currency) ? l : Z.pK.USD);
            return (0, i.jsxs)("div", {
              className: M.giftPreviewContainer,
              children: [(0, i.jsx)(r.vwX, {
                className: M.giftPreviewTitle,
                children: G.intl.string(G.t.PpoJzt)
              }), (0, i.jsxs)("div", {
                className: M.giftPreviewContent,
                children: [(0, i.jsx)("div", {
                  className: M.giftPreviewImageContainer,
                  children: null != q && null != V && (0, i.jsx)(N.p, {
                    containerClassName: M.giftPreviewCardContainer,
                    cardImage: V,
                    cardBackgroundImage: z,
                    altText: q.name,
                    shape: "square"
                  })
                }), (0, i.jsxs)("div", {
                  className: M.giftPreviewTextContainer,
                  children: [null != F && (0, i.jsx)(S.e, {
                    application: F
                  }), (0, i.jsx)(r.Text, {
                    variant: "text-sm/semibold",
                    children: q.name
                  })]
                }), (0, i.jsx)(r.Text, {
                  variant: "text-md/semibold",
                  children: a
                })]
              })]
            })
          })(), null != Y && null != q && (0, i.jsx)(W, {
            handleClose: g,
            sku: q,
            guild: Y
          })]
        })]
      })
    }), (0, i.jsx)(m.O3, {
      children: (0, i.jsx)(r.mzw, {
        "data-migration-pending": true,
        justify: d.Z.Justify.BETWEEN,
        align: d.Z.Align.CENTER,
        className: M.footer,
        children: (0, i.jsx)(L, {
          onStepChange: n,
          onBackClick: g,
          disabled: null == y || y.id === (null == U ? true : U.id) || x.length > O.$n
        })
      })
    })]
  })
}

function W(e) {
  let {
    handleClose: t,
    guild: n,
    sku: l
  } = e;
  return (0, i.jsx)("div", {
    className: M.viewItemButton,
    children: (0, i.jsx)(r.Avr, {
      text: n.id === (0, P.ac)() ? G.intl.string(G.t.nyIcya) : G.intl.string(G.t.ImioFL),
      onClick: function() {
        var e;
        t();
        let i = null == (e = w.Z.getStorefrontState(n.id)) ? true : e.activePage;
        window.location.pathname.includes(E.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) || ((0, r.pTH)(), (0, y.Z)({
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