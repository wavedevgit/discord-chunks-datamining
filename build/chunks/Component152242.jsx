/** Chunk was on 45227 **/
/** chunk id: 152242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  jM: () => L
}), require("./388685.js"), require("./539854.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk358221 = require("./358221.js"),
  Chunk225657 = require("./225657.jsx"),
  Chunk725243 = require("./725243.js"),
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
let L = {
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

function B(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: l = false,
    disabled: a = false,
    loading: r = false
  } = e, {
    hasPaymentSources: s
  } = (0, m.JL)(), c = s ? p.h8.REVIEW : p.h8.ADD_PAYMENT_STEPS;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.Button, {
      onClick: () => t(c),
      disabled: a,
      loading: r,
      text: A.intl.string(A.t.XiOHRX)
    }), l ? (0, i.jsx)(C.Z, {
      onClick: n
    }) : null]
  })
}

function R(e) {
  var t;
  let {
    handleStepChange: n,
    handleClose: a
  } = e, {
    customGiftMessage: p = "",
    setCustomGiftMessage: C,
    giftRecipient: S,
    emojiConfetti: T,
    soundEffect: O,
    setEmojiConfetti: L,
    setSoundEffect: R,
    giftingOrigin: H
  } = (0, g.wD)(), {
    selectedSkuId: F,
    application: U
  } = (0, m.JL)(), K = (0, s.e7)([I.default], () => I.default.getCurrentUser()), J = function(e) {
    let t = (0, u.Z)({
        location: "Slayer Storefront Gift Customization Step"
      }),
      n = function(e) {
        let t = (0, s.e7)([b.Z], () => b.Z.isConnected() ? b.Z.getChannelId() : null),
          [n, i] = l.useState([]);
        return l.useEffect(() => {
          let n = null != t ? c.Z.getParticipants(t) : [],
            l = [],
            a = new Set;
          for (let t of n) !(0, Z.Io)(t) && !(0, Z._5)(t) || t.user.id === e || a.has(t.user.id) || (a.add(t.user.id), l.push(t));
          l.sort((e, t) => (0, Z._5)(e) && !(0, Z._5)(t) ? false : (0, Z._5)(t) && !(0, Z._5)(e) ? 1 : 0), i(l.map(e => e.user))
        }, [t, e]), n
      }(e);
    return l.useMemo(() => r().uniqWith([...n, ...t], (e, t) => e.id === t.id), [t, n])
  }(null == K ? true : K.id), q = (0, s.e7)([P.Z], () => null != F ? P.Z.get(F) : null, [F]), V = (0, y.Do)(q), z = (0, y.a7)(q), Y = (0, E.K)(q, {
    shouldFetchIfMissing: true
  }), X = async (e, t) => {};
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(h.C3, {
      children: (0, i.jsxs)("div", {
        className: W.stepBody,
        children: [(0, i.jsxs)("div", {
          className: W.bodyColumnLeft,
          children: [null != V && (0, i.jsx)(k.p, {
            containerClassName: W.skuCardImage,
            cardImage: V,
            cardBackgroundImage: z,
            altText: null != (t = null == q ? true : q.name) ? t : "",
            shape: "square"
          }), (0, i.jsxs)("div", {
            className: W.giftEffectsContainer,
            children: [(0, i.jsx)(j.Z, {
              sound: O,
              onSelect: e => {
                null != R && R(null == e ? true : e)
              }
            }), (0, i.jsx)(v.Z, {
              setEmojiConfetti: L,
              emojiConfetti: null == T ? true : T
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: W.bodyColumnRight,
          children: [null != S && (H === G.Wt.USER_PROFILE_WISHLIST || H === G.Wt.DM_CHANNEL_WISHLIST) ? (0, i.jsx)(_.s, {
            giftRecipient: S
          }) : (0, i.jsx)(d.Z, {
            selectedSkuId: F,
            validateSelectedGift: X,
            searchableSelectWrapperClassName: W.recipientPickerSelectWrapper,
            recipients: J
          }), (0, i.jsx)(x.Z, {
            sectionTitle: A.intl.string(A.t.B3miE8),
            onTextChange: e => null == C ? true : C(e),
            pendingText: p,
            currentText: p,
            disableThemedBackground: true,
            className: W.customGiftMessageWrapper,
            innerClassName: W.customGiftMessage
          }), (() => {
            var e, t, n, l;
            if (null == q) return null;
            let a = (0, w.T4)(null != (n = null == (e = q.price) ? true : e.amount) ? n : 0, null != (l = null == (t = q.price) ? true : t.currency) ? l : M.pK.USD);
            return (0, i.jsxs)("div", {
              className: W.giftPreviewContainer,
              children: [(0, i.jsx)(o.vwX, {
                className: W.giftPreviewTitle,
                children: A.intl.string(A.t.PpoJzt)
              }), (0, i.jsxs)("div", {
                className: W.giftPreviewContent,
                children: [(0, i.jsx)("div", {
                  className: W.giftPreviewImageContainer,
                  children: null != q && null != V && (0, i.jsx)(k.p, {
                    containerClassName: W.giftPreviewCardContainer,
                    cardImage: V,
                    cardBackgroundImage: z,
                    altText: q.name,
                    shape: "square"
                  })
                }), (0, i.jsxs)("div", {
                  className: W.giftPreviewTextContainer,
                  children: [null != U && (0, i.jsx)(N.e, {
                    application: U
                  }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    children: q.name
                  })]
                }), (0, i.jsx)(o.Text, {
                  variant: "text-md/semibold",
                  children: a
                })]
              })]
            })
          })(), null != Y && null != q && (0, i.jsx)(D, {
            handleClose: a,
            sku: q,
            guild: Y
          })]
        })]
      })
    }), (0, i.jsx)(h.O3, {
      children: (0, i.jsx)(o.mzw, {
        "data-migration-pending": true,
        justify: f.Z.Justify.BETWEEN,
        align: f.Z.Align.CENTER,
        className: W.footer,
        children: (0, i.jsx)(B, {
          onStepChange: n,
          onBackClick: a,
          disabled: null == S || S.id === (null == K ? true : K.id) || p.length > G.$n
        })
      })
    })]
  })
}

function D(e) {
  let {
    handleClose: t,
    guild: n,
    sku: l
  } = e;
  return (0, i.jsx)("div", {
    className: W.viewItemButton,
    children: (0, i.jsx)(o.Avr, {
      text: n.id === (0, y.ac)() ? A.intl.string(A.t.nyIcya) : A.intl.string(A.t.ImioFL),
      onClick: function() {
        var e;
        t();
        let i = null == (e = S.Z.getStorefrontState(n.id)) ? true : e.activePage;
        window.location.pathname.includes(O.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) || ((0, o.pTH)(), (0, T.default)({
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