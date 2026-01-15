/** Chunk was on web.js **/
/** chunk id: 457040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ea
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk954955 = require("./954955.js"),
  o = require.n(Chunk954955),
  Chunk55160 = require("./55160.js"),
  Chunk442837 = require("./442837.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk806966 = require("./806966.js"),
  Chunk28546 = require("./28546.js"),
  Chunk98528 = require("./98528.js"),
  Chunk98278 = require("./98278.js"),
  Chunk639119 = require("./639119.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk624138 = require("./624138.js"),
  Chunk45521 = require("./45521.js"),
  Chunk285651 = require("./285651.js"),
  Chunk217590 = require("./217590.js"),
  Chunk453070 = require("./453070.js"),
  Chunk926491 = require("./926491.js"),
  Chunk373228 = require("./373228.js"),
  Chunk462109 = require("./462109.js"),
  Chunk422195 = require("./422195.jsx"),
  Chunk657795 = require("./657795.jsx"),
  Chunk489762 = require("./489762.jsx"),
  Chunk31543 = require("./31543.jsx"),
  Chunk15350 = require("./15350.js"),
  Chunk151189 = require("./151189.jsx"),
  Chunk611480 = require("./611480.js"),
  Chunk981631 = require("./981631.js"),
  Chunk807290 = require("./807290.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let V = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
  H = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
  Y = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
  W = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
  K = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
  z = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
  q = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
  Q = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
  X = z + 2 * Q,
  J = q + 2 * Q,
  $ = 8,
  ee = 200,
  et = o()(Chunk217590.Iw, ee),
  en = o()(Chunk217590.m1, ee),
  er = Chunk473749.forwardRef(function(e, t) {
    var a;
    let {
      containerWidth: o,
      channel: c,
      onSelectSticker: v,
      closePopout: G
    } = e, {
      location: F
    } = (0, d.O)(), {
      analyticsLocations: z
    } = (0, p.ZP)(f.Z.STICKER_PICKER), q = (null == (a = (0, E.N)()) ? true : a.subscription_trial) != null, Q = i.useRef(null), ee = i.useRef(null), er = i.useRef(null), ei = (0, S.Q)(e => e.showPremiumUpsell), [ea, eo] = (0, h.Iu)(e => [e.searchQuery, e.isSearchSuggestion], s.X), es = i.useRef("");
    i.useImperativeHandle(t, () => ({
      onPickerOpen: eL
    }));
    let el = (0, C.Sd)(c),
      ec = 0 === el.filter(e => e.type !== N.Ih.EMPTY_GUILD_UPSELL).length,
      eu = (0, m.ep)({
        gridWrapperRef: Q,
        containerWidth: o,
        showingEmptyState: ec,
        listPaddingLeft: H,
        listScrollbarWidth: $
      }),
      ed = b._O.useSetting(),
      ef = i.useMemo(() => new Set(ed), [ed]),
      ep = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
      e_ = i.useMemo(() => (0, L.S)(ea, ep, c), [ea, ep, c]),
      eh = (0, C.RJ)(),
      em = (0, C.LZ)(),
      eg = (0, l.cj)([A.Z], () => A.Z.getAllGuildStickers()),
      {
        sendable: eE = [],
        sendableWithPremium: eb = []
      } = null != e_ ? e_ : {},
      ey = eE.length + eb.length,
      eO = i.useCallback(e => {
        "" === ea ? (0, T.On)(e) : (0, T.Yk)(e, ea, ey), v(e.sticker, N.V0.STICKER_PICKER)
      }, [v, ea, ey]),
      ev = null != eu && eu > V,
      {
        rowCount: eS,
        rowCountBySection: eI,
        stickersGrid: eT,
        gutterWidth: eC,
        columnCounts: eA
      } = (0, C.el)({
        filteredStickers: e_,
        stickersCategories: el,
        collapsedStickersCategories: ef,
        listWidth: eu,
        listPaddingRight: Y,
        stickerNodeMargin: ev ? W : K,
        stickerNodeWidth: ev ? X : J
      }),
      eN = i.useCallback((e, t) => {
        let {
          location: i
        } = t;
        switch (e.type) {
          case N.al.CREATE_STICKER:
            O.default.track(k.rMx.OPEN_MODAL, {
              type: k.jXE.CREATE_STICKER_MODAL,
              location: F
            }), (0, u.ZDy)(async () => {
              let {
                default: t
              } = await Promise.all([n.e("93626"), n.e("47985")]).then(n.bind(n, 136735));
              return n => (0, r.jsx)(t, Z({
                guildId: e.guild_id
              }, n))
            });
            break;
          case N.al.STICKER:
            null != e.sticker && (0, I.kl)(e.sticker, ep, c) && eO(e)
        }
      }, [F, ep, c, eO]),
      {
        getItemProps: eP,
        getRowProps: ew,
        gridContainerProps: eR,
        handleGridContainerKeyDown: eD,
        isUsingKeyboardNavigation: ex
      } = (0, P.t)({
        columnCounts: eA,
        stickersListRef: ee,
        stickersGrid: eT,
        onGridItemSelect: eN,
        store: _.ZN,
        setInspectedStickerPosition: _.ZN.setInspectedExpressionPosition,
        gridNavigatorId: M.Vr
      });
    i.useEffect(() => _.ZN.resetStoreState, []);
    let eL = () => {
      let e = c.getGuildId(),
        t = [];
      if (null !== e) {
        var n;
        t = null != (n = A.Z.getStickersByGuildId(e)) ? n : []
      }
      let r = 0;
      null != eg && [...eg.values()].forEach(e => {
        r += e.length
      }), (0, T.ev)({
        containerWidth: o,
        favoriteStickers: eh,
        frequentlyUsedStickers: em,
        guildStickers: t,
        stickersTotal: r
      })
    };
    i.useEffect(() => {
      "" === es.current && "" !== ea && (0, T.n8)(), es.current = ea
    }, [ea]), i.useEffect(() => {
      0 === ey ? et(ea) : en(ea, ey, eo)
    }, [ea, ey, eo]), i.useLayoutEffect(() => {
      var e;
      null == (e = er.current) || e.focus()
    }, []);
    let ej = i.useCallback(() => {
      G(), O.default.track(k.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: k.jXE.STICKER_PICKER_UPSELL
      }), (0, g.z)()
    }, [G]);
    return (0, r.jsxs)(p.Gt, {
      value: z,
      children: [!(q && ec) && (0, r.jsx)("div", {
        className: U.header,
        children: (0, r.jsx)(x.Z, {
          ref: er,
          onKeyDown: eD,
          stickersListRef: ee,
          channel: c
        })
      }), ec ? (0, r.jsx)(R.Z, {
        className: U.emptyState,
        onClose: G
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", B(Z({
          ref: Q,
          className: U.listWrapper,
          id: M.Vr
        }, eR), {
          children: null != eu ? (0, r.jsx)(D.Z, {
            ref: ee,
            collapsedStickersCategories: ef,
            filteredStickers: e_,
            getStickerItemProps: eP,
            getStickerRowProps: ew,
            gridWidth: eu,
            gutterWidth: eC,
            isUsingKeyboardNavigation: ex,
            onSelectSticker: eO,
            rowCount: eS,
            rowCountBySection: eI,
            stickersCategories: el,
            stickersGrid: eT,
            channel: c
          }) : null
        })), (0, r.jsx)(w.Z, {
          stickersListRef: ee,
          channel: c
        })]
      }), ei && (0, r.jsx)(j.C, {
        onLearnMore: ej
      })]
    })
  }),
  ei = (e, t) => ((0, C.fP)(), (0, r.jsx)("div", {
    className: U.wrapper,
    id: M.nZ,
    "aria-labelledby": M.ED,
    role: "tabpanel",
    children: e.isLoading ? (0, r.jsx)(u.$jN, {
      className: U.loadingIndicator
    }) : (0, r.jsx)(er, B(Z({}, e), {
      ref: t
    }))
  })),
  ea = Chunk473749.forwardRef(ei)