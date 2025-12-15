/** Chunk was on 45227 **/
/** chunk id: 152242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  jM: () => W
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
  Chunk442538 = require("./442538.js");
let W = {
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
    showBackButton: a = false,
    disabled: l = false,
    loading: r = false
  } = e, {
    hasPaymentSources: s
  } = (0, m.JL)(), d = s ? p.h8.REVIEW : p.h8.ADD_PAYMENT_STEPS;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.Button, {
      onClick: () => t(d),
      disabled: l,
      loading: r,
      text: A.intl.string(A.t.XiOHRX)
    }), a ? (0, i.jsx)(v.Z, {
      onClick: n
    }) : null]
  })
}

function R(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    getLeftColumnComponent: l,
    getRightColumnComponent: p,
    onStepChange: v,
    onBackClick: y,
    disabled: T
  } = (e => {
    let {
      handleStepChange: t,
      handleClose: n
    } = e, {
      customGiftMessage: l = "",
      setCustomGiftMessage: f,
      giftRecipient: p,
      emojiConfetti: h,
      soundEffect: v,
      setEmojiConfetti: y,
      setSoundEffect: T,
      giftingOrigin: O
    } = (0, g.wD)(), {
      selectedSkuId: W,
      application: B
    } = (0, m.JL)(), R = (0, s.e7)([P.default], () => P.default.getCurrentUser()), H = function(e) {
      let t = (0, u.Z)({
          location: "Slayer Storefront Gift Customization Step"
        }),
        n = function(e) {
          let t = (0, s.e7)([I.Z], () => I.Z.isConnected() ? I.Z.getChannelId() : null),
            [n, i] = a.useState([]);
          return a.useEffect(() => {
            let n = null != t ? d.Z.getParticipants(t) : [],
              a = [],
              l = new Set;
            for (let t of n) !(0, Z.Io)(t) && !(0, Z._5)(t) || t.user.id === e || l.has(t.user.id) || (l.add(t.user.id), a.push(t));
            a.sort((e, t) => (0, Z._5)(e) && !(0, Z._5)(t) ? false : (0, Z._5)(t) && !(0, Z._5)(e) ? 1 : 0), i(a.map(e => e.user))
          }, [t, e]), n
        }(e);
      return a.useMemo(() => r().uniqWith([...n, ...t], (e, t) => e.id === t.id), [t, n])
    }(null == R ? true : R.id), F = (0, s.e7)([w.Z], () => null != W ? w.Z.get(W) : null, [W]), U = (0, _.Do)(F), K = (0, _.a7)(F), J = (0, k.K)(F, {
      shouldFetchIfMissing: true
    }), q = async (e, t) => {}, V = e => {
      null != T && T(null == e ? true : e)
    };
    return {
      getLeftColumnComponent: () => {
        var e;
        return (0, i.jsxs)("div", {
          className: L.bodyColumnLeft,
          children: [null != U && (0, i.jsx)(E.p, {
            containerClassName: L.skuCardImage,
            cardImage: U,
            cardBackgroundImage: K,
            altText: null != (e = null == F ? true : F.name) ? e : "",
            shape: "square"
          }), (0, i.jsxs)("div", {
            className: L.giftEffectsContainer,
            children: [(0, i.jsx)(j.Z, {
              sound: v,
              onSelect: V
            }), (0, i.jsx)(x.Z, {
              setEmojiConfetti: y,
              emojiConfetti: null == h ? true : h
            })]
          })]
        })
      },
      getRightColumnComponent: () => (0, i.jsxs)("div", {
        className: L.bodyColumnRight,
        children: [null != p && (O === G.Wt.USER_PROFILE_WISHLIST || O === G.Wt.DM_CHANNEL_WISHLIST) ? (0, i.jsx)(b.s, {
          giftRecipient: p
        }) : (0, i.jsx)(c.Z, {
          selectedSkuId: W,
          validateSelectedGift: q,
          searchableSelectWrapperClassName: L.recipientPickerSelectWrapper,
          recipients: H
        }), (0, i.jsx)(C.Z, {
          sectionTitle: A.intl.string(A.t.B3miE8),
          onTextChange: e => null == f ? true : f(e),
          pendingText: l,
          currentText: l,
          disableThemedBackground: true,
          className: L.customGiftMessageWrapper,
          innerClassName: L.customGiftMessage
        }), (() => {
          var e, t, n, a;
          if (null == F) return null;
          let l = (0, S.T4)(null != (n = null == (e = F.price) ? true : e.amount) ? n : 0, null != (a = null == (t = F.price) ? true : t.currency) ? a : M.pK.USD);
          return (0, i.jsxs)("div", {
            className: L.giftPreviewContainer,
            children: [(0, i.jsx)(o.vwX, {
              className: L.giftPreviewTitle,
              children: A.intl.string(A.t.PpoJzt)
            }), (0, i.jsxs)("div", {
              className: L.giftPreviewContent,
              children: [(0, i.jsx)("div", {
                className: L.giftPreviewImageContainer,
                children: null != F && null != U && (0, i.jsx)(E.p, {
                  containerClassName: L.giftPreviewCardContainer,
                  cardImage: U,
                  cardBackgroundImage: K,
                  altText: F.name,
                  shape: "square"
                })
              }), (0, i.jsxs)("div", {
                className: L.giftPreviewTextContainer,
                children: [null != B && (0, i.jsx)(N.e, {
                  application: B
                }), (0, i.jsx)(o.Text, {
                  variant: "text-sm/semibold",
                  children: F.name
                })]
              }), (0, i.jsx)(o.Text, {
                variant: "text-md/semibold",
                children: l
              })]
            })]
          })
        })(), null != J && null != F && (0, i.jsx)(D, {
          handleClose: n,
          sku: F,
          guild: J
        })]
      }),
      onStepChange: t,
      onBackClick: n,
      disabled: null == p || p.id === (null == R ? true : R.id) || l.length > G.$n
    }
  })({
    handleStepChange: t,
    handleClose: n
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(h.C3, {
      children: (0, i.jsxs)("div", {
        className: L.stepBody,
        children: [l(), p()]
      })
    }), (0, i.jsx)(h.O3, {
      children: (0, i.jsx)(o.mzw, {
        "data-migration-pending": true,
        justify: f.Z.Justify.BETWEEN,
        align: f.Z.Align.CENTER,
        className: L.footer,
        children: (0, i.jsx)(B, {
          onStepChange: v,
          onBackClick: y,
          disabled: T
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
  } = e, r = a.useCallback(() => {
    (0, T.eagerNavigateToSocialLayerStorefront)({
      guildId: n.id
    })
  }, [n.id]), s = a.useCallback(() => {
    var e;
    t();
    let i = null == (e = y.Z.getStorefrontState(n.id)) ? true : e.activePage;
    window.location.pathname.includes(O.Z5c.CHANNELS_GAME_SHOP(n.id, null != i ? i : 0, l.id)) || ((0, o.pTH)(), (0, T.default)({
      guildId: n.id,
      pageIndex: null != i ? i : 0,
      skuId: l.id,
      slug: l.slug
    }))
  }, [n.id, l.id, l.slug, t]);
  return (0, i.jsx)("div", {
    className: L.viewItemButton,
    children: (0, i.jsx)(o.Avr, {
      text: n.id === (0, _.ac)() ? A.intl.string(A.t.nyIcya) : A.intl.string(A.t.ImioFL),
      onMouseDown: r,
      onClick: s,
      textVariant: "text-sm/medium",
      lineClamp: true
    })
  })
}