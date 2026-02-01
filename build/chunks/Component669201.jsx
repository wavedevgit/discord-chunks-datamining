/** Chunk was on web.js **/
/** chunk id: 669201, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ea
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk111956 = require("./111956.js"),
  o = require.n(Chunk111956),
  Chunk942381 = require("./942381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212245 = require("./212245.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk850992 = require("./850992.js"),
  Chunk151271 = require("./151271.js"),
  Chunk887695 = require("./887695.js"),
  Chunk87719 = require("./87719.js"),
  Chunk234419 = require("./234419.js"),
  Chunk253932 = require("./253932.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk240248 = require("./240248.js"),
  Chunk410558 = require("./410558.js"),
  Chunk361670 = require("./361670.js"),
  Chunk891090 = require("./891090.js"),
  Chunk256449 = require("./256449.js"),
  Chunk679382 = require("./679382.js"),
  Chunk842086 = require("./842086.js"),
  Chunk313519 = require("./313519.js"),
  Chunk647117 = require("./647117.jsx"),
  Chunk234091 = require("./234091.jsx"),
  Chunk275589 = require("./275589.jsx"),
  Chunk642550 = require("./642550.jsx"),
  Chunk616961 = require("./616961.js"),
  Chunk994048 = require("./994048.jsx"),
  Chunk823894 = require("./823894.js"),
  Chunk652215 = require("./652215.js"),
  Chunk654329 = require("./654329.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
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
let H = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
  Y = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
  W = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
  K = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
  z = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
  q = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
  Z = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
  Q = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
  X = q + 2 * Q,
  J = Z + 2 * Q,
  $ = 8,
  ee = 200,
  et = o()(Chunk891090.Qz, ee),
  en = o()(Chunk891090.HA, ee),
  er = Chunk64700.forwardRef(function(e, t) {
    var a;
    let {
      containerWidth: o,
      channel: c,
      onSelectSticker: v,
      closePopout: G
    } = e, {
      location: F
    } = (0, d.p)(), {
      analyticsLocations: q
    } = (0, p.Ay)(f.A.STICKER_PICKER), Z = (null == (a = (0, E.V)()) ? true : a.subscription_trial) != null, Q = i.useRef(null), ee = i.useRef(null), er = i.useRef(null), ei = (0, A.P)(e => e.showPremiumUpsell), [ea, eo] = (0, h.RQ)(e => [e.searchQuery, e.isSearchSuggestion], s.x), es = i.useRef("");
    i.useImperativeHandle(t, () => ({
      onPickerOpen: ex
    }));
    let el = (0, T.pD)(c),
      ec = 0 === el.filter(e => e.type !== N.Z2.EMPTY_GUILD_UPSELL).length,
      eu = (0, m.oV)({
        gridWrapperRef: Q,
        containerWidth: o,
        showingEmptyState: ec,
        listPaddingLeft: Y,
        listScrollbarWidth: $
      }),
      ed = y.tP.useSetting(),
      ef = i.useMemo(() => new Set(ed), [ed]),
      ep = (0, l.bG)([b.default], () => b.default.getCurrentUser()),
      e_ = i.useMemo(() => (0, x.y)(ea, ep, c), [ea, ep, c]),
      eh = (0, T.Gc)(),
      em = (0, T.UT)(),
      eg = (0, l.cf)([C.A], () => C.A.getAllGuildStickers()),
      {
        sendable: eE = [],
        sendableWithPremium: ey = []
      } = null != e_ ? e_ : {},
      eb = eE.length + ey.length,
      eO = i.useCallback(e => {
        "" === ea ? (0, S.ry)(e) : (0, S.nQ)(e, ea, eb), v(e.sticker, N.D6.STICKER_PICKER)
      }, [v, ea, eb]),
      ev = null != eu && eu > H,
      {
        rowCount: eA,
        rowCountBySection: eI,
        stickersGrid: eS,
        gutterWidth: eT,
        columnCounts: eC
      } = (0, T._c)({
        filteredStickers: e_,
        stickersCategories: el,
        collapsedStickersCategories: ef,
        listWidth: eu,
        listPaddingRight: W,
        stickerNodeMargin: ev ? K : z,
        stickerNodeWidth: ev ? X : J
      }),
      eN = i.useCallback((e, t) => {
        let {
          location: i
        } = t;
        switch (e.type) {
          case N.op.CREATE_STICKER:
            O.default.track(k.HAw.OPEN_MODAL, {
              type: k.JJy.CREATE_STICKER_MODAL,
              location: F
            }), (0, u.mMO)(async () => {
              let {
                default: t
              } = await Promise.all([n.e("29143"), n.e("64800")]).then(n.bind(n, 445002));
              return n => (0, r.jsx)(t, V({
                guildId: e.guild_id
              }, n))
            });
            break;
          case N.op.STICKER:
            null != e.sticker && (0, I.G7)(e.sticker, ep, c) && eO(e)
        }
      }, [F, ep, c, eO]),
      {
        getItemProps: ew,
        getRowProps: eR,
        gridContainerProps: eP,
        handleGridContainerKeyDown: eD,
        isUsingKeyboardNavigation: eL
      } = (0, w.J)({
        columnCounts: eC,
        stickersListRef: ee,
        stickersGrid: eS,
        onGridItemSelect: eN,
        store: _.bM,
        setInspectedStickerPosition: _.bM.setInspectedExpressionPosition,
        gridNavigatorId: j.lq
      });
    i.useEffect(() => _.bM.resetStoreState, []);
    let ex = () => {
      let e = c.getGuildId(),
        t = [];
      if (null !== e) {
        var n;
        t = null != (n = C.A.getStickersByGuildId(e)) ? n : []
      }
      let r = 0;
      null != eg && [...eg.values()].forEach(e => {
        r += e.length
      }), (0, S.p4)({
        containerWidth: o,
        favoriteStickers: eh,
        frequentlyUsedStickers: em,
        guildStickers: t,
        stickersTotal: r
      })
    };
    i.useEffect(() => {
      "" === es.current && "" !== ea && (0, S.Fg)(), es.current = ea
    }, [ea]), i.useEffect(() => {
      0 === eb ? et(ea) : en(ea, eb, eo)
    }, [ea, eb, eo]), i.useLayoutEffect(() => {
      var e;
      null == (e = er.current) || e.focus()
    }, []);
    let eM = i.useCallback(() => {
      G(), O.default.track(k.HAw.PREMIUM_PROMOTION_OPENED, {
        location_section: k.JJy.STICKER_PICKER_UPSELL
      }), (0, g.e)()
    }, [G]);
    return (0, r.jsxs)(p.f5, {
      value: q,
      children: [!(Z && ec) && (0, r.jsx)("div", {
        className: U.wx,
        children: (0, r.jsx)(L.A, {
          ref: er,
          onKeyDown: eD,
          stickersListRef: ee,
          channel: c
        })
      }), ec ? (0, r.jsx)(P.A, {
        className: U.p$,
        onClose: G
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", B(V({
          ref: Q,
          className: U.AD,
          id: j.lq
        }, eP), {
          children: null != eu ? (0, r.jsx)(D.A, {
            ref: ee,
            collapsedStickersCategories: ef,
            filteredStickers: e_,
            getStickerItemProps: ew,
            getStickerRowProps: eR,
            gridWidth: eu,
            gutterWidth: eT,
            isUsingKeyboardNavigation: eL,
            onSelectSticker: eO,
            rowCount: eA,
            rowCountBySection: eI,
            stickersCategories: el,
            stickersGrid: eS,
            channel: c
          }) : null
        })), (0, r.jsx)(R.A, {
          stickersListRef: ee,
          channel: c
        })]
      }), ei && (0, r.jsx)(M.j, {
        onLearnMore: eM
      })]
    })
  }),
  ei = (e, t) => ((0, T.XQ)(), (0, r.jsx)("div", {
    className: U.iE,
    id: j.GX,
    "aria-labelledby": j.LD,
    role: "tabpanel",
    children: e.isLoading ? (0, r.jsx)(u.y$y, {
      className: U.Mz
    }) : (0, r.jsx)(er, B(V({}, e), {
      ref: t
    }))
  })),
  ea = Chunk64700.forwardRef(ei)