/** Chunk was on web.js **/
/** chunk id: 937773, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eE,
  f: () => el
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk111956 = require("./111956.js"),
  l = require.n(Chunk111956),
  Chunk788413 = require("./788413.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk554375 = require("./554375.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk212245 = require("./212245.js"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk379848 = require("./379848.jsx"),
  Chunk508675 = require("./508675.js"),
  Chunk598770 = require("./598770.js"),
  Chunk451731 = require("./451731.js"),
  Chunk850992 = require("./850992.js"),
  Chunk151271 = require("./151271.js"),
  Chunk60587 = require("./60587.js"),
  Chunk887695 = require("./887695.js"),
  Chunk564068 = require("./564068.jsx"),
  Chunk450510 = require("./450510.js"),
  Chunk421162 = require("./421162.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk808728 = require("./808728.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk474090 = require("./474090.js"),
  Chunk240248 = require("./240248.js"),
  Chunk822123 = require("./822123.js"),
  Chunk141862 = require("./141862.js"),
  Chunk316884 = require("./316884.js"),
  Chunk370968 = require("./370968.jsx"),
  Chunk653145 = require("./653145.jsx"),
  Chunk624751 = require("./624751.jsx"),
  Chunk867738 = require("./867738.jsx"),
  Chunk484333 = require("./484333.js"),
  Chunk815082 = require("./815082.jsx"),
  Chunk775505 = require("./775505.jsx"),
  Chunk178898 = require("./178898.jsx"),
  Chunk148361 = require("./148361.jsx"),
  Chunk732139 = require("./732139.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk307731 = require("./307731.js"),
  Chunk836553 = require("./836553.js");

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
let ei = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
  ea = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  es = 8,
  eo = e => e.stopPropagation();
var el = function(e) {
  return e[e.NONE = 0] = "NONE", e[e.TABS_EXPRESSION_PICKER = 1] = "TABS_EXPRESSION_PICKER", e[e.NO_TABS_EXPRESSION_PICKER = 2] = "NO_TABS_EXPRESSION_PICKER", e
}({});
let ec = (e, t) => {
    I.Om.setInspectedExpressionPosition(e, t, T.t.GRID_NAVIGATOR_EVENT)
  },
  eu = e => {
    let {
      analyticsLocation: t,
      pickerIntention: n,
      columnCounts: r,
      onSelectEmoji: a,
      emojiGrid: s,
      emojiList: o,
      channelGuildId: l,
      isBurstReaction: d
    } = e, f = (0, u.bG)([O.Ay], () => O.Ay.getDisambiguatedEmojiContext(l), [l]), p = i.useCallback((e, r) => {
      if (e.type === Y.bm.EMOJI) {
        if (null != e.emoji && r.altKey) return void(f.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, _.Sw)(e.emoji) : ((0, k.C5)({
          emoji: e.emoji,
          location: er(et({}, t), {
            object: Z.ZSU.EMOJI
          })
        }), (0, _.V4)(e.emoji)));
        let i = {
          page: null != l ? Z.liQ.GUILD_CHANNEL : Z.liQ.DM_CHANNEL,
          section: Z.JJy.EMOJI_PICKER_POPOUT,
          object: Z.ZSU.EMOJI
        };
        d && (i = {
          page: null != l ? Z.liQ.GUILD_CHANNEL : Z.liQ.DM_CHANNEL,
          section: Z.JJy.EMOJI_PICKER_POPOUT,
          object: Z.ZSU.EMOJI
        }), (0, k._7)({
          emoji: e.emoji,
          location: i,
          pickerIntention: n,
          category: e.category,
          subCategory: e.subCategory,
          newlyAddedHighlight: e.subCategory === X.tm.NEWLY_ADDED_EMOJI && v.A.isNewerThanLastSeen(l, e.emoji.id)
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
      handleGridContainerKeyDown: y,
      isUsingKeyboardNavigation: b
    } = (0, C.Ff)({
      columnCounts: r,
      gridNavigatorId: X.lq,
      itemGrid: s,
      itemList: o,
      onGridNavigatorItemSelect: p,
      onGridNavigatorPositionChange: ec
    });
    return i.useEffect(() => I.Om.subscribe(e => e.inspectedExpressionPosition, e => {
      if (null == e) return;
      let {
        columnIndex: t,
        rowIndex: n,
        source: r
      } = e;
      r !== T.t.GRID_NAVIGATOR_EVENT && h({
        type: c.n.SET_FOCUSED_POSITION,
        x: t,
        y: n
      })
    }), [h]), {
      getItemProps: m,
      getRowProps: g,
      gridContainerProps: E,
      handleGridContainerKeyDown: y,
      isUsingKeyboardNavigation: b
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
      r(I.Om.getState().activeCategoryIndex)
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
  e_ = l()(Chunk822123.bo, ep),
  eh = l()(Chunk822123.Wi, ep),
  em = {
    section: true,
    openPopoutType: true,
    popoutLocation: true
  },
  eg = function(e, t) {
    var n, a;
    let o, {
        pickerIntention: l,
        channel: c,
        guildId: f,
        closePopout: _,
        emojiSize: T = X.as.MEDIUM,
        hasTabWrapper: M = false,
        containerContext: ee = 0,
        onSelectEmoji: en,
        onSelectSoundmoji: el,
        containerWidth: ec,
        onNavigateAway: ep,
        persistSearch: eg,
        className: eE,
        headerClassName: ey,
        analyticsOverride: eb = em,
        searchProps: eO = {},
        wrapper: ev,
        shouldHidePickerActions: eA = false,
        messageId: eI,
        renderHeader: eS,
        listHeaderClassName: eT,
        categoryListClassName: eC,
        shouldShowSoundmojiInEmojiPicker: eN = false,
        showOnlyUnicode: eR = false
      } = e,
      {
        onFocus: ew,
        onKeyDown: eP,
        autoFocus: eD = true,
        accessory: ex
      } = eO,
      eL = (0, u.bG)([D.Ay], () => null != f ? D.Ay.getDefaultChannel(f) : null, [f]),
      [ej, eM] = i.useState(null),
      ek = i.useRef(""),
      eU = (0, S.RQ)(e => e.searchQuery),
      eG = i.useRef(null),
      eV = i.useRef(null),
      eF = i.useRef(null);
    null == c && null != eL && (c = eL);
    let eB = null != (n = null != (a = null == c ? true : c.getGuildId()) ? a : f) ? n : null,
      [eH, eY] = i.useState(false),
      eW = x.default.getCurrentUser(),
      eK = (0, j.ki)(eW);
    i.useImperativeHandle(t, () => ({
      onPickerOpen: tr
    }));
    let {
      location: ez
    } = (0, m.p)(), {
      page: eq,
      section: eX,
      object: eZ,
      openPopoutType: eQ,
      popoutLocation: e$
    } = eb, eJ = i.useMemo(() => er(et({}, ez), {
      section: null != eX ? eX : Z.JJy.EMOJI_PICKER_POPOUT
    }), [ez, eX]), {
      analyticsLocations: e0
    } = (0, y.Ay)(g.A.EMOJI_PICKER), {
      diversitySurrogate: e1
    } = (0, u.cf)([O.Ay], () => ({
      diversitySurrogate: O.Ay.diversitySurrogate
    })), e2 = (0, k.sL)(eU, c, l, eR), e3 = null == e2 ? 0 : e2.locked.length + e2.unlocked.length, e6 = P.iM.useSetting(), e4 = i.useMemo(() => new Set(e6), [e6]), e5 = i.useCallback(e => {
      P.iM.updateSetting(Array.from(e))
    }, []), e7 = (0, C.oV)({
      gridWrapperRef: eG,
      containerWidth: ec,
      listPaddingLeft: ea,
      listScrollbarWidth: es
    }), {
      rowCountBySection: e8,
      sectionDescriptors: e9,
      emojiGrid: te,
      columnCounts: tt
    } = (0, Y.wu)({
      gridWidth: e7,
      fallbackGuildId: eB,
      channel: c,
      pickerIntention: l,
      emojiSearchResults: e2,
      collapsedSections: e4,
      emojiPaddingHorizontal: ei,
      emojiSpriteSize: T,
      shouldShowSoundmojiInEmojiPicker: eN,
      showOnlyUnicode: eR
    }), {
      newlyAddedEmojis: tn
    } = (0, G.A)(eB, l);
    (0, U.y)({
      intention: l,
      isBurstReaction: eH,
      analyticsObject: eZ
    });
    let tr = i.useCallback(() => {
        let e = tn.length > 0 ? tn[0].id : null;
        (0, A.uV)(eB, e), (0, U.A)({
          intention: l,
          isBurstReaction: eH,
          analyticsObject: eZ
        })
      }, [tn, eB, l, eH, eZ]),
      ti = (0, Y.Mq)({
        pickerIntention: l,
        selectedChannel: c,
        fallbackGuildId: eB,
        closePopout: _,
        onSelectEmoji: en,
        setUpsellConfigs: eM,
        emojiSelectAnalytics: e => {
          "" !== eU ? (0, k.Wf)({
            emoji: e.emoji,
            location: er(et({}, eJ), {
              object: Z.ZSU.EMOJI
            }),
            searchQuery: eU,
            intention: l
          }) : (0, k._7)({
            emoji: e.emoji,
            location: et(er(et({}, eJ), {
              object: null != eZ ? eZ : Z.ZSU.EMOJI
            }), null != eq && {
              page: eq
            }),
            pickerIntention: l,
            category: e.category,
            subCategory: e.subCategory,
            position: e.columnIndex + 1,
            newlyAddedHighlight: e.subCategory === X.tm.NEWLY_ADDED_EMOJI && v.A.isNewerThanLastSeen(eB, e.emoji.id),
            isBurstReaction: eH
          })
        },
        trackEmojiFavorited: e => {
          (0, k.C5)({
            emoji: e.emoji,
            location: er(et({}, eJ), {
              object: Z.ZSU.EMOJI
            })
          })
        }
      }),
      ta = i.useCallback(() => {
        _(), null == ep || ep()
      }, [_, ep]),
      {
        getItemProps: ts,
        getRowProps: to,
        gridContainerProps: tl,
        handleGridContainerKeyDown: tc,
        isUsingKeyboardNavigation: tu
      } = eu({
        pickerIntention: l,
        analyticsLocation: eJ,
        columnCounts: tt,
        onSelectEmoji: en,
        emojiGrid: te,
        emojiList: eV,
        channelGuildId: eB,
        isBurstReaction: eH
      });
    ed(ec, eV), ef(ec, e1, eF, eD), i.useEffect(() => {
      eg || (0, S.Ri)("")
    }, [eg]), i.useEffect(() => (L.default.track(Z.HAw.OPEN_POPOUT, et({
      type: null != eQ ? eQ : "Emoji Picker",
      guild_id: eB,
      location: e$
    }, (0, E.dI)(c))), I.Om.resetStoreState), [eQ, eB, e$, c]), i.useEffect(() => () => (0, R.sF)(R._2.FAVORITE_EMOJI_TOOLTIP), []), i.useLayoutEffect(() => {
      var e;
      let {
        columnIndex: t,
        rowIndex: n
      } = I.Om.getState().inspectedExpressionPosition;
      (null == (e = te[n]) ? true : e[t]) == null && 0 !== t && I.Om.setInspectedExpressionPosition(0, 0)
    }, [te]), i.useEffect(() => {
      if ("" === ek.current && "" !== eU && (0, k.EG)(eJ, l), 0 === e3 && "" !== eU) e_(eJ, eU);
      else if ("" !== eU && ek.current !== eU) {
        var e;
        eh(e3, null != (e = null == e2 ? true : e2.locked.length) ? e : 0, eJ, eU, l)
      }
      ek.current = eU
    }, [eU, eJ, e3, e2, l]);
    let td = null != ev ? ev : M ? "div" : p.lGe,
      tf = null != e7;
    if ((null == ej ? true : ej.type) === Y.a2.PREMIUM) {
      let e = w.N.NONE;
      2 === ee ? e = w.N.PARENT_CONTAINER : 1 === ee && (e = w.N.TAB_PARENT_CONTAINER), o = (0, r.jsx)(q.A, {
        onLearnMore: ta,
        emojiDescriptor: ej.emojiDescriptor,
        pickerIntention: l,
        analyticsLocation: eJ,
        onClose: () => eM(null),
        channel: c,
        containerContext: e
      })
    } else(null == ej ? true : ej.type) === Y.a2.ROLE_SUBSCRIPTION ? o = (0, r.jsx)(N.A, {
      onClose: () => eM(null),
      guildId: ej.guildId,
      emojiId: ej.emojiId
    }) : eH && !eK && (o = (0, r.jsx)(V.A, {
      onDismiss: () => eY(false)
    }));
    let tp = (e, t) => {
        ti(e, er(et({}, t), {
          isBurst: eH
        }))
      },
      t_ = () => {
        var e;
        eY(!eH), null == (e = eF.current) || e.focus()
      },
      th = (0, r.jsx)(H.A, {
        channel: c,
        pickerIntention: l,
        emojiListRef: eV,
        onKeyDown: e => {
          null == tc || tc(e), null == eP || eP(e)
        },
        searchBarRef: eF,
        onFocus: ew,
        autoFocus: eD,
        accessory: ex,
        headerClassName: ey,
        diversitySurrogate: e1,
        isBurstReaction: eH,
        onBurstReactionToggle: t_,
        renderHeader: eS
      }),
      tm = [];
    l === $.b_.REACTION && tm.push(d.M.SUPER_REACTIONS_NITRO_MARKETING), O.Ay.hasFavoriteEmojis(eB) || tm.push(d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
    let tg = (0, r.jsx)(h.A, er(et({}, eJ), {
      children: (0, r.jsxs)(td, {
        id: X.Do,
        "aria-labelledby": M ? X.k1 : true,
        role: M ? "tabpanel" : true,
        className: s()(J.iE, {
          [J.r6]: M,
          [J.cB]: eH && eK
        }),
        children: [M ? null : th, (0, r.jsxs)("div", {
          className: s()(J.Fb, eE),
          onScroll: eo,
          children: [M ? th : null, (0, r.jsxs)("div", {
            className: J.uK,
            ref: eG,
            children: [(0, r.jsx)(z.A, {
              channel: c,
              closePopout: _
            }), (0, r.jsx)(b.Ay, {
              contentTypes: tm,
              children: e => {
                let {
                  visibleContent: t,
                  markAsDismissed: n
                } = e;
                if (t === d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, r.jsx)(B.A, {
                  markAsDismissed: () => n(Q.i.UNKNOWN)
                })
              }
            }), eA ? null : (0, r.jsx)("div", er(et({
              className: J.Iy,
              id: X.lq
            }, tl), {
              children: tf ? (0, r.jsx)(K.A, {
                collapsedSections: e4,
                diversitySurrogate: e1,
                emojiGrid: te,
                emojiListRef: eV,
                emojiSize: T,
                getEmojiItemProps: ts,
                getEmojiRowProps: to,
                gridWidth: e7,
                isUsingKeyboardNavigation: tu,
                onEmojiSelect: tp,
                onSelectSoundmoji: el,
                setUpsellConfigs: eM,
                rowCount: te.length,
                rowCountBySection: e8,
                sectionDescriptors: e9,
                setCollapsedSections: e5,
                channelGuildId: eB,
                channelId: null == c ? true : c.id,
                messageId: eI,
                isBurstReaction: eH,
                listHeaderClassName: eT
              }) : null
            }))]
          }), (0, r.jsx)(W.Y, {
            emojiGrid: te,
            className: J.qV,
            guildId: eB,
            pickerIntention: l,
            channel: c
          }), o]
        }), eA ? null : (0, r.jsx)(F.A, {
          className: s()(J.jv, eC),
          emojiListRef: eV,
          sectionDescriptors: e9,
          intention: l,
          channel: c,
          fallbackGuildId: eB,
          shouldShowSoundmojiInEmojiPicker: eN,
          showOnlyUnicode: eR
        })]
      })
    }));
    return (0, r.jsx)(y.f5, {
      value: e0,
      children: tg
    })
  },
  eE = Chunk64700.memo(Chunk64700.forwardRef(eg))