/** Chunk was on web.js **/
/** chunk id: 907040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eE,
  v: () => el
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  l = require.n(Chunk954955),
  Chunk611144 = require("./611144.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk80932 = require("./80932.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk438332 = require("./438332.js"),
  Chunk664437 = require("./664437.js"),
  Chunk806966 = require("./806966.js"),
  Chunk28546 = require("./28546.js"),
  Chunk691251 = require("./691251.js"),
  Chunk98528 = require("./98528.js"),
  Chunk770812 = require("./770812.jsx"),
  Chunk536442 = require("./536442.js"),
  Chunk609218 = require("./609218.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk984933 = require("./984933.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk111361 = require("./111361.js"),
  Chunk624138 = require("./624138.js"),
  Chunk543241 = require("./543241.js"),
  Chunk253696 = require("./253696.js"),
  Chunk199257 = require("./199257.js"),
  Chunk636411 = require("./636411.jsx"),
  Chunk380331 = require("./380331.jsx"),
  Chunk170762 = require("./170762.jsx"),
  Chunk22363 = require("./22363.jsx"),
  Chunk784222 = require("./784222.js"),
  Chunk141507 = require("./141507.jsx"),
  Chunk669040 = require("./669040.jsx"),
  Chunk901963 = require("./901963.jsx"),
  Chunk212263 = require("./212263.jsx"),
  Chunk149203 = require("./149203.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk185923 = require("./185923.js"),
  Chunk101972 = require("./101972.js");

function ee(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ee(e, t, n[t])
    })
  }
  return e
}

function en(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function er(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : en(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ei = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
  ea = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  eo = 8,
  es = e => e.stopPropagation();
var el = function(e) {
  return e[e.NONE = 0] = "NONE", e[e.TABS_EXPRESSION_PICKER = 1] = "TABS_EXPRESSION_PICKER", e[e.NO_TABS_EXPRESSION_PICKER = 2] = "NO_TABS_EXPRESSION_PICKER", e
}({});
let ec = (e, t) => {
    I.kJ.setInspectedExpressionPosition(e, t, C.u.GRID_NAVIGATOR_EVENT)
  },
  eu = e => {
    let {
      analyticsLocation: t,
      pickerIntention: n,
      columnCounts: r,
      onSelectEmoji: a,
      emojiGrid: o,
      emojiList: s,
      channelGuildId: l,
      isBurstReaction: d
    } = e, f = (0, u.e7)([O.ZP], () => O.ZP.getDisambiguatedEmojiContext(l), [l]), p = i.useCallback((e, r) => {
      if (e.type === H.ld.EMOJI) {
        if (null != e.emoji && r.altKey) return void(f.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, _.Xe)(e.emoji) : ((0, k.J1)({
          emoji: e.emoji,
          location: er(et({}, t), {
            object: Q.qAy.EMOJI
          })
        }), (0, _.$K)(e.emoji)));
        let i = {
          page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
          section: Q.jXE.EMOJI_PICKER_POPOUT,
          object: Q.qAy.EMOJI
        };
        d && (i = {
          page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
          section: Q.jXE.EMOJI_PICKER_POPOUT,
          object: Q.qAy.EMOJI
        }), (0, k.fe)({
          emoji: e.emoji,
          location: i,
          pickerIntention: n,
          category: e.category,
          subCategory: e.subCategory,
          newlyAddedHighlight: e.subCategory === q.t0.NEWLY_ADDED_EMOJI && v.Z.isNewerThanLastSeen(l, e.emoji.id)
        }), a({
          emoji: e.emoji,
          willClose: !r.shiftKey,
          isBurst: d
        })
      }
    }, [a, l, n, f, t, d]), {
      gridDispatch: h,
      getItemProps: m,
      getRowProps: g,
      gridContainerProps: E,
      handleGridContainerKeyDown: b,
      isUsingKeyboardNavigation: y
    } = (0, A.VO)({
      columnCounts: r,
      gridNavigatorId: q.Vr,
      itemGrid: o,
      itemList: s,
      onGridNavigatorItemSelect: p,
      onGridNavigatorPositionChange: ec
    });
    return i.useEffect(() => I.kJ.subscribe(e => e.inspectedExpressionPosition, e => {
      if (null == e) return;
      let {
        columnIndex: t,
        rowIndex: n,
        source: r
      } = e;
      r !== C.u.GRID_NAVIGATOR_EVENT && h({
        type: c.s.SET_FOCUSED_POSITION,
        x: t,
        y: n
      })
    }), [h]), {
      getItemProps: m,
      getRowProps: g,
      gridContainerProps: E,
      handleGridContainerKeyDown: b,
      isUsingKeyboardNavigation: y
    }
  },
  ed = (e, t) => {
    let [n, r] = i.useState(null);
    i.useEffect(() => {
      if (null != n) {
        var e;
        null == (e = t.current) || e.scrollToSectionTop(n), r(null)
      }
    }, [t, n]), i.useEffect(() => {
      r(I.kJ.getState().activeCategoryIndex)
    }, [e])
  },
  ef = (e, t, n, r) => {
    i.useLayoutEffect(() => {
      if (r) {
        var e;
        null == (e = n.current) || e.focus()
      }
    }, [e, t, n, r])
  },
  ep = 200,
  e_ = l()(Chunk543241.to, ep),
  eh = l()(Chunk543241.jA, ep),
  em = {
    section: true,
    openPopoutType: true,
    popoutLocation: true
  },
  eg = function(e, t) {
    var n, a;
    let s, {
        pickerIntention: l,
        channel: c,
        guildId: f,
        closePopout: _,
        emojiSize: C = q.Su.MEDIUM,
        hasTabWrapper: M = false,
        containerContext: ee = 0,
        onSelectEmoji: en,
        onSelectSoundmoji: el,
        containerWidth: ec,
        onNavigateAway: ep,
        persistSearch: eg,
        className: eE,
        headerClassName: eb,
        analyticsOverride: ey = em,
        searchProps: eO = {},
        wrapper: ev,
        shouldHidePickerActions: eS = false,
        messageId: eI,
        renderHeader: eT,
        listHeaderClassName: eC,
        categoryListClassName: eA,
        shouldShowSoundmojiInEmojiPicker: eN = false,
        showOnlyUnicode: eP = false
      } = e,
      {
        onFocus: ew,
        onKeyDown: eR,
        autoFocus: eD = true,
        accessory: ex
      } = eO,
      eL = (0, u.e7)([D.ZP], () => null != f ? D.ZP.getDefaultChannel(f) : null, [f]),
      [ej, eM] = i.useState(null),
      ek = i.useRef(""),
      eU = (0, T.Iu)(e => e.searchQuery),
      eG = i.useRef(null),
      eZ = i.useRef(null),
      eF = i.useRef(null);
    null == c && null != eL && (c = eL);
    let eB = null != (a = null != (n = null == c ? true : c.getGuildId()) ? n : f) ? a : null,
      [eV, eH] = i.useState(false),
      eY = x.default.getCurrentUser(),
      eW = (0, j.I5)(eY);
    i.useImperativeHandle(t, () => ({
      onPickerOpen: tr
    }));
    let {
      location: eK
    } = (0, m.O)(), {
      page: ez,
      section: eq,
      object: eQ,
      openPopoutType: eX,
      popoutLocation: eJ
    } = ey, e$ = i.useMemo(() => er(et({}, eK), {
      section: null != eq ? eq : Q.jXE.EMOJI_PICKER_POPOUT
    }), [eK, eq]), {
      analyticsLocations: e0
    } = (0, b.ZP)(g.Z.EMOJI_PICKER), {
      diversitySurrogate: e1
    } = (0, u.cj)([O.ZP], () => ({
      diversitySurrogate: O.ZP.diversitySurrogate
    })), e3 = (0, k.DV)(eU, c, l, eP), e2 = null == e3 ? 0 : e3.locked.length + e3.unlocked.length, e4 = R.d4.useSetting(), e5 = i.useMemo(() => new Set(e4), [e4]), e8 = i.useCallback(e => {
      R.d4.updateSetting(Array.from(e))
    }, []), e6 = (0, A.ep)({
      gridWrapperRef: eG,
      containerWidth: ec,
      listPaddingLeft: ea,
      listScrollbarWidth: eo
    }), {
      rowCountBySection: e7,
      sectionDescriptors: e9,
      emojiGrid: te,
      columnCounts: tt
    } = (0, H.YH)({
      gridWidth: e6,
      fallbackGuildId: eB,
      channel: c,
      pickerIntention: l,
      emojiSearchResults: e3,
      collapsedSections: e5,
      emojiPaddingHorizontal: ei,
      emojiSpriteSize: C,
      shouldShowSoundmojiInEmojiPicker: eN,
      showOnlyUnicode: eP
    }), {
      newlyAddedEmojis: tn
    } = (0, G.Z)(eB, l);
    (0, U.b)({
      intention: l,
      isBurstReaction: eV,
      analyticsObject: eQ
    });
    let tr = i.useCallback(() => {
        let e = tn.length > 0 ? tn[0].id : null;
        (0, S.pr)(eB, e), (0, U.Z)({
          intention: l,
          isBurstReaction: eV,
          analyticsObject: eQ
        })
      }, [tn, eB, l, eV, eQ]),
      ti = (0, H.rf)({
        pickerIntention: l,
        selectedChannel: c,
        fallbackGuildId: eB,
        closePopout: _,
        onSelectEmoji: en,
        setUpsellConfigs: eM,
        emojiSelectAnalytics: e => {
          "" !== eU ? (0, k.y$)({
            emoji: e.emoji,
            location: er(et({}, e$), {
              object: Q.qAy.EMOJI
            }),
            searchQuery: eU,
            intention: l
          }) : (0, k.fe)({
            emoji: e.emoji,
            location: et(er(et({}, e$), {
              object: null != eQ ? eQ : Q.qAy.EMOJI
            }), null != ez && {
              page: ez
            }),
            pickerIntention: l,
            category: e.category,
            subCategory: e.subCategory,
            position: e.columnIndex + 1,
            newlyAddedHighlight: e.subCategory === q.t0.NEWLY_ADDED_EMOJI && v.Z.isNewerThanLastSeen(eB, e.emoji.id),
            isBurstReaction: eV
          })
        },
        trackEmojiFavorited: e => {
          (0, k.J1)({
            emoji: e.emoji,
            location: er(et({}, e$), {
              object: Q.qAy.EMOJI
            })
          })
        }
      }),
      ta = i.useCallback(() => {
        _(), null == ep || ep()
      }, [_, ep]),
      {
        getItemProps: to,
        getRowProps: ts,
        gridContainerProps: tl,
        handleGridContainerKeyDown: tc,
        isUsingKeyboardNavigation: tu
      } = eu({
        pickerIntention: l,
        analyticsLocation: e$,
        columnCounts: tt,
        onSelectEmoji: en,
        emojiGrid: te,
        emojiList: eZ,
        channelGuildId: eB,
        isBurstReaction: eV
      });
    ed(ec, eZ), ef(ec, e1, eF, eD), i.useEffect(() => {
      eg || (0, T.ql)("")
    }, [eg]), i.useEffect(() => (L.default.track(Q.rMx.OPEN_POPOUT, et({
      type: null != eX ? eX : "Emoji Picker",
      guild_id: eB,
      location: eJ
    }, (0, E.v_)(c))), I.kJ.resetStoreState), [eX, eB, eJ, c]), i.useEffect(() => () => (0, P.Kw)(P.v6.FAVORITE_EMOJI_TOOLTIP), []), i.useLayoutEffect(() => {
      var e;
      let {
        columnIndex: t,
        rowIndex: n
      } = I.kJ.getState().inspectedExpressionPosition;
      (null == (e = te[n]) ? true : e[t]) == null && 0 !== t && I.kJ.setInspectedExpressionPosition(0, 0)
    }, [te]), i.useEffect(() => {
      if ("" === ek.current && "" !== eU && (0, k.PC)(e$, l), 0 === e2 && "" !== eU) e_(e$, eU);
      else if ("" !== eU && ek.current !== eU) {
        var e;
        eh(e2, null != (e = null == e3 ? true : e3.locked.length) ? e : 0, e$, eU, l)
      }
      ek.current = eU
    }, [eU, e$, e2, e3, l]);
    let td = null != ev ? ev : M ? "div" : p.VqE,
      tf = null != e6;
    if ((null == ej ? true : ej.type) === H.Bg.PREMIUM) {
      let e = w.p.NONE;
      2 === ee ? e = w.p.PARENT_CONTAINER : 1 === ee && (e = w.p.TAB_PARENT_CONTAINER), s = (0, r.jsx)(z.Z, {
        onLearnMore: ta,
        emojiDescriptor: ej.emojiDescriptor,
        pickerIntention: l,
        analyticsLocation: e$,
        onClose: () => eM(null),
        channel: c,
        containerContext: e
      })
    } else(null == ej ? true : ej.type) === H.Bg.ROLE_SUBSCRIPTION ? s = (0, r.jsx)(N.Z, {
      onClose: () => eM(null),
      guildId: ej.guildId,
      emojiId: ej.emojiId
    }) : eV && !eW && (s = (0, r.jsx)(Z.Z, {
      onDismiss: () => eH(false)
    }));
    let tp = (e, t) => {
        ti(e, er(et({}, t), {
          isBurst: eV
        }))
      },
      t_ = () => {
        var e;
        eH(!eV), null == (e = eF.current) || e.focus()
      },
      th = (0, r.jsx)(V.Z, {
        channel: c,
        pickerIntention: l,
        emojiListRef: eZ,
        onKeyDown: e => {
          null == tc || tc(e), null == eR || eR(e)
        },
        searchBarRef: eF,
        onFocus: ew,
        autoFocus: eD,
        accessory: ex,
        headerClassName: eb,
        diversitySurrogate: e1,
        isBurstReaction: eV,
        onBurstReactionToggle: t_,
        renderHeader: eT
      }),
      tm = [];
    l === J.Hz.REACTION && tm.push(d.z.SUPER_REACTIONS_NITRO_MARKETING), O.ZP.hasFavoriteEmojis(eB) || tm.push(d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
    let tg = (0, r.jsx)(h.Z, er(et({}, e$), {
      children: (0, r.jsxs)(td, {
        id: q.cZ,
        "aria-labelledby": M ? q.td : true,
        role: M ? "tabpanel" : true,
        className: o()($.wrapper, {
          [$.emojiPickerHasTabWrapper]: M,
          [$.isBurstReactionPicker]: eV && eW
        }),
        children: [M ? null : th, (0, r.jsxs)("div", {
          className: o()($.emojiPicker, eE),
          onScroll: es,
          children: [M ? th : null, (0, r.jsxs)("div", {
            className: $.bodyWrapper,
            ref: eG,
            children: [(0, r.jsx)(K.Z, {
              channel: c,
              closePopout: _
            }), (0, r.jsx)(y.ZP, {
              contentTypes: tm,
              children: e => {
                let {
                  visibleContent: t,
                  markAsDismissed: n
                } = e;
                if (t === d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, r.jsx)(B.Z, {
                  markAsDismissed: () => n(X.L.UNKNOWN)
                })
              }
            }), eS ? null : (0, r.jsx)("div", er(et({
              className: $.emojiPickerListWrapper,
              id: q.Vr
            }, tl), {
              children: tf ? (0, r.jsx)(W.Z, {
                collapsedSections: e5,
                diversitySurrogate: e1,
                emojiGrid: te,
                emojiListRef: eZ,
                emojiSize: C,
                getEmojiItemProps: to,
                getEmojiRowProps: ts,
                gridWidth: e6,
                isUsingKeyboardNavigation: tu,
                onEmojiSelect: tp,
                onSelectSoundmoji: el,
                setUpsellConfigs: eM,
                rowCount: te.length,
                rowCountBySection: e7,
                sectionDescriptors: e9,
                setCollapsedSections: e8,
                channelGuildId: eB,
                channelId: null == c ? true : c.id,
                messageId: eI,
                isBurstReaction: eV,
                listHeaderClassName: eC
              }) : null
            }))]
          }), (0, r.jsx)(Y.k, {
            emojiGrid: te,
            className: $.inspector,
            guildId: eB,
            pickerIntention: l,
            channel: c
          }), s]
        }), eS ? null : (0, r.jsx)(F.Z, {
          className: o()($.categoryList, eA),
          emojiListRef: eZ,
          sectionDescriptors: e9,
          intention: l,
          channel: c,
          fallbackGuildId: eB,
          shouldShowSoundmojiInEmojiPicker: eN,
          showOnlyUnicode: eP
        })]
      })
    }));
    return (0, r.jsx)(b.Gt, {
      value: e0,
      children: tg
    })
  },
  eE = Chunk473749.memo(Chunk473749.forwardRef(eg))