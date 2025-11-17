/** Chunk was on web.js **/
/** chunk id: 907040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eb,
  v: () => ec
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
  Chunk434404 = require("./434404.js"),
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
  Chunk359175 = require("./359175.js");

function et(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function en(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      et(e, t, n[t])
    })
  }
  return e
}

function er(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ei(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : er(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ea = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
  eo = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  es = 8,
  el = e => e.stopPropagation();
var ec = function(e) {
  return e[e.NONE = 0] = "NONE", e[e.TABS_EXPRESSION_PICKER = 1] = "TABS_EXPRESSION_PICKER", e[e.NO_TABS_EXPRESSION_PICKER = 2] = "NO_TABS_EXPRESSION_PICKER", e
}({});
let eu = (e, t) => {
    T.kJ.setInspectedExpressionPosition(e, t, A.u.GRID_NAVIGATOR_EVENT)
  },
  ed = e => {
    let {
      analyticsLocation: t,
      pickerIntention: n,
      columnCounts: r,
      onSelectEmoji: a,
      emojiGrid: o,
      emojiList: s,
      channelGuildId: l,
      isBurstReaction: d
    } = e, f = (0, u.e7)([O.ZP], () => O.ZP.getDisambiguatedEmojiContext(l), [l]), _ = i.useCallback((e, r) => {
      switch (e.type) {
        case Y.ld.CREATE_EMOJI:
          a({
            emoji: true,
            willClose: true
          }), R.Z.open(e.guildId, Q.pNK.EMOJI);
          return;
        case Y.ld.EMOJI: {
          if (null != e.emoji && r.altKey) return void(f.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, p.Xe)(e.emoji) : ((0, U.J1)({
            emoji: e.emoji,
            location: ei(en({}, t), {
              object: Q.qAy.EMOJI
            })
          }), (0, p.$K)(e.emoji)));
          let i = {
            page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
            section: Q.jXE.EMOJI_PICKER_POPOUT,
            object: Q.qAy.EMOJI
          };
          d && (i = {
            page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
            section: Q.jXE.EMOJI_PICKER_POPOUT,
            object: Q.qAy.EMOJI
          }), (0, U.fe)({
            emoji: e.emoji,
            location: i,
            pickerIntention: n,
            category: e.category,
            subCategory: e.subCategory,
            newlyAddedHighlight: e.subCategory === X.t0.NEWLY_ADDED_EMOJI && v.Z.isNewerThanLastSeen(l, e.emoji.id)
          }), a({
            emoji: e.emoji,
            willClose: !r.shiftKey,
            isBurst: d
          })
        }
      }
    }, [a, l, n, f, t, d]), {
      gridDispatch: h,
      getItemProps: m,
      getRowProps: g,
      gridContainerProps: E,
      handleGridContainerKeyDown: b,
      isUsingKeyboardNavigation: y
    } = (0, C.VO)({
      columnCounts: r,
      gridNavigatorId: X.Vr,
      itemGrid: o,
      itemList: s,
      onGridNavigatorItemSelect: _,
      onGridNavigatorPositionChange: eu
    });
    return i.useEffect(() => T.kJ.subscribe(e => e.inspectedExpressionPosition, e => {
      if (null == e) return;
      let {
        columnIndex: t,
        rowIndex: n,
        source: r
      } = e;
      r !== A.u.GRID_NAVIGATOR_EVENT && h({
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
  ef = (e, t) => {
    let [n, r] = i.useState(null);
    i.useEffect(() => {
      if (null != n) {
        var e;
        null == (e = t.current) || e.scrollToSectionTop(n), r(null)
      }
    }, [t, n]), i.useEffect(() => {
      r(T.kJ.getState().activeCategoryIndex)
    }, [e])
  },
  e_ = (e, t, n, r) => {
    i.useLayoutEffect(() => {
      if (r) {
        var e;
        null == (e = n.current) || e.focus()
      }
    }, [e, t, n, r])
  },
  ep = 200,
  eh = l()(Chunk543241.to, ep),
  em = l()(Chunk543241.jA, ep),
  eg = {
    section: true,
    openPopoutType: true,
    popoutLocation: true
  },
  eE = function(e, t) {
    var n, a;
    let s, {
        pickerIntention: l,
        channel: c,
        guildId: f,
        closePopout: p,
        emojiSize: A = X.Su.MEDIUM,
        hasTabWrapper: R = false,
        containerContext: j = 0,
        includeCreateEmojiButton: et,
        onSelectEmoji: er,
        onSelectSoundmoji: ec,
        containerWidth: eu,
        onNavigateAway: ep,
        persistSearch: eE,
        className: eb,
        headerClassName: ey,
        analyticsOverride: eO = eg,
        searchProps: ev = {},
        wrapper: eI,
        shouldHidePickerActions: eT = false,
        messageId: eS,
        renderHeader: eA,
        listHeaderClassName: eC,
        categoryListClassName: eN,
        shouldShowSoundmojiInEmojiPicker: eR = false,
        showOnlyUnicode: eP = false,
        showAddEmojiButton: eD = false
      } = e,
      {
        onFocus: ew,
        onKeyDown: ex,
        autoFocus: eL = true,
        accessory: eM
      } = ev,
      ek = (0, u.e7)([x.ZP], () => null != f ? x.ZP.getDefaultChannel(f) : null, [f]),
      [ej, eU] = i.useState(null),
      eG = i.useRef(""),
      eB = (0, S.Iu)(e => e.searchQuery),
      eZ = i.useRef(null),
      eF = i.useRef(null),
      eV = i.useRef(null);
    null == c && null != ek && (c = ek);
    let eH = null != (a = null != (n = null == c ? true : c.getGuildId()) ? n : f) ? a : null,
      [eY, eW] = i.useState(false),
      eK = L.default.getCurrentUser(),
      ez = (0, k.I5)(eK);
    i.useImperativeHandle(t, () => ({
      onPickerOpen: ta
    }));
    let {
      location: eq
    } = (0, m.O)(), {
      page: eX,
      section: eQ,
      object: eJ,
      openPopoutType: e$,
      popoutLocation: e0
    } = eO, e1 = i.useMemo(() => ei(en({}, eq), {
      section: null != eQ ? eQ : Q.jXE.EMOJI_PICKER_POPOUT
    }), [eq, eQ]), {
      analyticsLocations: e3
    } = (0, b.ZP)(g.Z.EMOJI_PICKER), {
      diversitySurrogate: e2
    } = (0, u.cj)([O.ZP], () => ({
      diversitySurrogate: O.ZP.diversitySurrogate
    })), e4 = (0, U.DV)(eB, c, l, eP), e5 = null == e4 ? 0 : e4.locked.length + e4.unlocked.length, e8 = w.d4.useSetting(), e6 = i.useMemo(() => new Set(e8), [e8]), e7 = i.useCallback(e => {
      w.d4.updateSetting(Array.from(e))
    }, []), e9 = (0, C.ep)({
      gridWrapperRef: eZ,
      containerWidth: eu,
      listPaddingLeft: eo,
      listScrollbarWidth: es
    }), {
      rowCountBySection: te,
      sectionDescriptors: tt,
      emojiGrid: tn,
      columnCounts: tr
    } = (0, Y.YH)({
      gridWidth: e9,
      channel: c,
      includeCreateEmojiButton: et,
      pickerIntention: l,
      emojiSearchResults: e4,
      collapsedSections: e6,
      emojiPaddingHorizontal: ea,
      emojiSpriteSize: A,
      shouldShowSoundmojiInEmojiPicker: eR,
      showOnlyUnicode: eP
    }), {
      newlyAddedEmojis: ti
    } = (0, B.Z)(eH, l);
    (0, G.b)({
      intention: l,
      isBurstReaction: eY,
      analyticsObject: eJ
    });
    let ta = i.useCallback(() => {
        let e = ti.length > 0 ? ti[0].id : null;
        (0, I.pr)(eH, e), (0, G.Z)({
          intention: l,
          isBurstReaction: eY,
          analyticsObject: eJ
        })
      }, [ti, eH, l, eY, eJ]),
      to = (0, Y.rf)({
        pickerIntention: l,
        selectedChannel: c,
        closePopout: p,
        onSelectEmoji: er,
        setUpsellConfigs: eU,
        emojiSelectAnalytics: e => {
          "" !== eB ? (0, U.y$)({
            emoji: e.emoji,
            location: ei(en({}, e1), {
              object: Q.qAy.EMOJI
            }),
            searchQuery: eB,
            intention: l
          }) : (0, U.fe)({
            emoji: e.emoji,
            location: en(ei(en({}, e1), {
              object: null != eJ ? eJ : Q.qAy.EMOJI
            }), null != eX && {
              page: eX
            }),
            pickerIntention: l,
            category: e.category,
            subCategory: e.subCategory,
            position: e.columnIndex + 1,
            newlyAddedHighlight: e.subCategory === X.t0.NEWLY_ADDED_EMOJI && v.Z.isNewerThanLastSeen(eH, e.emoji.id),
            isBurstReaction: eY
          })
        },
        trackEmojiFavorited: e => {
          (0, U.J1)({
            emoji: e.emoji,
            location: ei(en({}, e1), {
              object: Q.qAy.EMOJI
            })
          })
        }
      }),
      ts = i.useCallback(() => {
        p(), null == ep || ep()
      }, [p, ep]),
      {
        getItemProps: tl,
        getRowProps: tc,
        gridContainerProps: tu,
        handleGridContainerKeyDown: td,
        isUsingKeyboardNavigation: tf
      } = ed({
        pickerIntention: l,
        analyticsLocation: e1,
        columnCounts: tr,
        onSelectEmoji: er,
        emojiGrid: tn,
        emojiList: eF,
        channelGuildId: eH,
        isBurstReaction: eY
      });
    ef(eu, eF), e_(eu, e2, eV, eL), i.useEffect(() => {
      eE || (0, S.ql)("")
    }, [eE]), i.useEffect(() => (M.default.track(Q.rMx.OPEN_POPOUT, en({
      type: null != e$ ? e$ : "Emoji Picker",
      guild_id: eH,
      location: e0
    }, (0, E.v_)(c))), T.kJ.resetStoreState), [e$, eH, e0, c]), i.useEffect(() => () => (0, P.Kw)(P.v6.FAVORITE_EMOJI_TOOLTIP), []), i.useLayoutEffect(() => {
      var e;
      let {
        columnIndex: t,
        rowIndex: n
      } = T.kJ.getState().inspectedExpressionPosition;
      (null == (e = tn[n]) ? true : e[t]) == null && 0 !== t && T.kJ.setInspectedExpressionPosition(0, 0)
    }, [tn]), i.useEffect(() => {
      if ("" === eG.current && "" !== eB && (0, U.PC)(e1, l), 0 === e5 && "" !== eB) eh(e1, eB);
      else if ("" !== eB && eG.current !== eB) {
        var e;
        em(e5, null != (e = null == e4 ? true : e4.locked.length) ? e : 0, e1, eB, l)
      }
      eG.current = eB
    }, [eB, e1, e5, e4, l]);
    let t_ = null != eI ? eI : R ? "div" : _.VqE,
      tp = null != e9;
    if ((null == ej ? true : ej.type) === Y.Bg.PREMIUM) {
      let e = D.p.NONE;
      2 === j ? e = D.p.PARENT_CONTAINER : 1 === j && (e = D.p.TAB_PARENT_CONTAINER), s = (0, r.jsx)(q.Z, {
        onLearnMore: ts,
        emojiDescriptor: ej.emojiDescriptor,
        pickerIntention: l,
        analyticsLocation: e1,
        onClose: () => eU(null),
        channel: c,
        containerContext: e
      })
    } else(null == ej ? true : ej.type) === Y.Bg.ROLE_SUBSCRIPTION ? s = (0, r.jsx)(N.Z, {
      onClose: () => eU(null),
      guildId: ej.guildId,
      emojiId: ej.emojiId
    }) : eY && !ez && (s = (0, r.jsx)(Z.Z, {
      onDismiss: () => eW(false)
    }));
    let th = (e, t) => {
        to(e, ei(en({}, t), {
          isBurst: eY
        }))
      },
      tm = () => {
        var e;
        eW(!eY), null == (e = eV.current) || e.focus()
      },
      tg = (0, r.jsx)(H.Z, {
        channel: c,
        pickerIntention: l,
        emojiListRef: eF,
        onKeyDown: e => {
          null == td || td(e), null == ex || ex(e)
        },
        searchBarRef: eV,
        onFocus: ew,
        autoFocus: eL,
        accessory: eM,
        headerClassName: ey,
        diversitySurrogate: e2,
        isBurstReaction: eY,
        onBurstReactionToggle: tm,
        renderHeader: eA,
        showAddEmojiButton: eD
      }),
      tE = [];
    l === $.Hz.REACTION && tE.push(d.z.SUPER_REACTIONS_NITRO_MARKETING), O.ZP.hasFavoriteEmojis(eH) || tE.push(d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
    let tb = (0, r.jsx)(h.Z, ei(en({}, e1), {
      children: (0, r.jsxs)(t_, {
        id: X.cZ,
        "aria-labelledby": R ? X.td : true,
        role: R ? "tabpanel" : true,
        className: o()(ee.wrapper, {
          [ee.emojiPickerHasTabWrapper]: R,
          [ee.isBurstReactionPicker]: eY && ez
        }),
        children: [R ? null : tg, (0, r.jsxs)("div", {
          className: o()(ee.emojiPicker, eb),
          onScroll: el,
          children: [R ? tg : null, (0, r.jsxs)("div", {
            className: ee.bodyWrapper,
            ref: eZ,
            children: [(0, r.jsx)(z.Z, {
              channel: c,
              closePopout: p
            }), (0, r.jsx)(y.ZP, {
              contentTypes: tE,
              children: e => {
                let {
                  visibleContent: t,
                  markAsDismissed: n
                } = e;
                if (t === d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, r.jsx)(V.Z, {
                  markAsDismissed: () => n(J.L.UNKNOWN)
                })
              }
            }), eT ? null : (0, r.jsx)("div", ei(en({
              className: ee.emojiPickerListWrapper,
              id: X.Vr
            }, tu), {
              children: tp ? (0, r.jsx)(K.Z, {
                collapsedSections: e6,
                diversitySurrogate: e2,
                emojiGrid: tn,
                emojiListRef: eF,
                emojiSize: A,
                getEmojiItemProps: tl,
                getEmojiRowProps: tc,
                gridWidth: e9,
                isUsingKeyboardNavigation: tf,
                onEmojiSelect: th,
                onSelectSoundmoji: ec,
                setUpsellConfigs: eU,
                rowCount: tn.length,
                rowCountBySection: te,
                sectionDescriptors: tt,
                setCollapsedSections: e7,
                channelGuildId: eH,
                channelId: null == c ? true : c.id,
                messageId: eS,
                isBurstReaction: eY,
                listHeaderClassName: eC
              }) : null
            }))]
          }), (0, r.jsx)(W.k, {
            emojiGrid: tn,
            className: ee.inspector,
            guildId: eH,
            pickerIntention: l,
            channel: c
          }), s]
        }), eT ? null : (0, r.jsx)(F.Z, {
          className: o()(ee.categoryList, eN),
          emojiListRef: eF,
          sectionDescriptors: tt,
          intention: l,
          channel: c,
          shouldShowSoundmojiInEmojiPicker: eR,
          showOnlyUnicode: eP
        })]
      })
    }));
    return (0, r.jsx)(b.Gt, {
      value: e3,
      children: tb
    })
  },
  eb = Chunk473749.memo(Chunk473749.forwardRef(eE))