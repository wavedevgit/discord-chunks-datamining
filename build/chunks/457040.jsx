/** Chunk was on web.js **/
/** chunk id: 457040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eo
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk954955 = require("./954955.js"),
  a = require.n(Chunk954955),
  Chunk94171 = require("./94171.js"),
  Chunk442837 = require("./442837.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
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
  Chunk657795 = require("./657795.js"),
  Chunk489762 = require("./489762.js"),
  Chunk31543 = require("./31543.jsx"),
  Chunk15350 = require("./15350.js"),
  Chunk151189 = require("./151189.jsx"),
  Chunk611480 = require("./611480.js"),
  Chunk981631 = require("./981631.js"),
  Chunk655304 = require("./655304.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
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

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
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
  X = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
  Q = z + 2 * X,
  J = q + 2 * X,
  $ = 8,
  ee = 200,
  et = a()(Chunk217590.Iw, ee),
  en = a()(Chunk217590.m1, ee),
  er = Chunk73800.forwardRef(function(e, t) {
    var o;
    let {
      containerWidth: a,
      channel: c,
      onSelectSticker: v,
      closePopout: G
    } = e, {
      location: Z
    } = (0, d.O)(), {
      analyticsLocations: z
    } = (0, _.ZP)(f.Z.STICKER_PICKER), q = (null == (o = (0, E.N)()) ? true : o.subscription_trial) != null, X = i.useRef(null), ee = i.useRef(null), er = i.useRef(null), ei = (0, I.Q)(e => e.showPremiumUpsell), [eo, ea] = (0, h.Iu)(e => [e.searchQuery, e.isSearchSuggestion], s.X), es = i.useRef("");
    i.useImperativeHandle(t, () => ({
      onPickerOpen: ex
    }));
    let el = (0, A.Sd)(c),
      ec = 0 === el.filter(e => e.type !== C.Ih.EMPTY_GUILD_UPSELL).length,
      eu = (0, m.ep)({
        gridWrapperRef: X,
        containerWidth: a,
        showingEmptyState: ec,
        listPaddingLeft: H,
        listScrollbarWidth: $
      }),
      ed = b._O.useSetting(),
      ef = i.useMemo(() => new Set(ed), [ed]),
      e_ = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
      ep = i.useMemo(() => (0, x.S)(eo, e_, c), [eo, e_, c]),
      eh = (0, A.RJ)(),
      em = (0, A.LZ)(),
      eg = (0, l.cj)([N.Z], () => N.Z.getAllGuildStickers()),
      {
        sendable: eE = [],
        sendableWithPremium: eb = []
      } = null != ep ? ep : {},
      ey = eE.length + eb.length,
      eO = i.useCallback(e => {
        "" === eo ? (0, S.On)(e) : (0, S.Yk)(e, eo, ey), v(e.sticker, C.V0.STICKER_PICKER)
      }, [v, eo, ey]),
      ev = null != eu && eu > V,
      {
        rowCount: eI,
        rowCountBySection: eT,
        stickersGrid: eS,
        gutterWidth: eA,
        columnCounts: eN
      } = (0, A.el)({
        filteredStickers: ep,
        stickersCategories: el,
        collapsedStickersCategories: ef,
        listWidth: eu,
        listPaddingRight: Y,
        stickerNodeMargin: ev ? W : K,
        stickerNodeWidth: ev ? Q : J
      }),
      eC = i.useCallback((e, t) => {
        let {
          location: i
        } = t;
        switch (e.type) {
          case C.al.CREATE_STICKER:
            O.default.track(j.rMx.OPEN_MODAL, {
              type: j.jXE.CREATE_STICKER_MODAL,
              location: Z
            }), (0, u.ZDy)(async () => {
              let {
                default: t
              } = await Promise.all([n.e("93626"), n.e("61547")]).then(n.bind(n, 136735));
              return n => <t{...B({
                guildId: e.guild_id
              }, n)} />
            });
            break;
          case C.al.STICKER:
            null != e.sticker && (0, T.kl)(e.sticker, e_, c) && eO(e)
        }
      }, [Z, e_, c, eO]),
      {
        getItemProps: eR,
        getRowProps: eP,
        gridContainerProps: ew,
        handleGridContainerKeyDown: eD,
        isUsingKeyboardNavigation: eL
      } = (0, R.t)({
        columnCounts: eN,
        stickersListRef: ee,
        stickersGrid: eS,
        onGridItemSelect: eC,
        store: p.ZN,
        setInspectedStickerPosition: p.ZN.setInspectedExpressionPosition,
        gridNavigatorId: k.Vr
      });
    i.useEffect(() => p.ZN.resetStoreState, []);
    let ex = () => {
      let e = c.getGuildId(),
        t = [];
      if (null !== e) {
        var n;
        t = null != (n = N.Z.getStickersByGuildId(e)) ? n : []
      }
      let r = 0;
      null != eg && [...eg.values()].forEach(e => {
        r += e.length
      }), (0, S.ev)({
        containerWidth: a,
        favoriteStickers: eh,
        frequentlyUsedStickers: em,
        guildStickers: t,
        stickersTotal: r
      })
    };
    i.useEffect(() => {
      "" === es.current && "" !== eo && (0, S.n8)(), es.current = eo
    }, [eo]), i.useEffect(() => {
      0 === ey ? et(eo) : en(eo, ey, ea)
    }, [eo, ey, ea]), i.useLayoutEffect(() => {
      var e;
      null == (e = er.current) || e.focus()
    }, []);
    let eM = i.useCallback(() => {
      G(), O.default.track(j.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: j.jXE.STICKER_PICKER_UPSELL
      }), (0, g.z)()
    }, [G]);
    return <_.Gt value={z}>{!(q && ec) && <div className={U.header}><L.Z ref={er} onKeyDown={eD} stickersListRef={ee} channel={c} /></div>}{ec ? <w.Z className={U.emptyState} onClose={G} /> : <r.Fragment>{<div{...F(B({
          ref: X,
          className: U.listWrapper,
          id: k.Vr
        }, ew), {
          children: null != eu ? (0, r.jsx)(D.Z, {
            ref: ee,
            collapsedStickersCategories: ef,
            filteredStickers: ep,
            getStickerItemProps: eR,
            getStickerRowProps: eP,
            gridWidth: eu,
            gutterWidth: eA,
            isUsingKeyboardNavigation: eL,
            onSelectSticker: eO,
            rowCount: eI,
            rowCountBySection: eT,
            stickersCategories: el,
            stickersGrid: eS,
            channel: c
          }) : null
        })} />}{<P.Z stickersListRef={ee} channel={c} />}</r.Fragment>}{ei && <M.C onLearnMore={eM} />}</_.Gt>
  }),
  ei = (e, t) => ((0, A.fP)(), <div className={U.wrapper} id={k.nZ} aria-labelledby={k.ED} role={"tabpanel"}>{e.isLoading ? (0, r.jsx)(u.$jN, {
      className: U.loadingIndicator
    }) : (0, r.jsx)(er, F(B({}, e), {
      ref: t
    }))}</div>),
  eo = Chunk73800.forwardRef(ei)