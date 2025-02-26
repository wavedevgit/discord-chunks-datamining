/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => eE,
  v: () => el
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(954955),
  l = n.n(s),
  c = n(611144),
  u = n(442837),
  d = n(704215),
  f = n(477690),
  _ = n(481060),
  p = n(80932),
  h = n(410575),
  g = n(2052),
  m = n(100527),
  E = n(906732),
  v = n(243778),
  b = n(339085),
  y = n(438332),
  O = n(664437),
  S = n(806966),
  I = n(28546),
  T = n(691251),
  N = n(98528),
  A = n(770812),
  C = n(434404),
  R = n(536442),
  P = n(609218),
  D = n(695346),
  w = n(984933),
  L = n(594174),
  x = n(626135),
  M = n(111361),
  k = n(624138),
  j = n(543241),
  U = n(253696),
  G = n(199257),
  B = n(636411),
  V = n(380331),
  F = n(170762),
  Z = n(22363),
  H = n(784222),
  W = n(141507),
  Y = n(669040),
  K = n(901963),
  z = n(212263),
  q = n(149203),
  Q = n(981631),
  X = n(921944),
  J = n(185923),
  $ = n(82845);

function ee(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
let ei = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
  eo = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  ea = 8,
  es = e => e.stopPropagation();
var el = function(e) {
  return e[e.NONE = 0] = "NONE", e[e.TABS_EXPRESSION_PICKER = 1] = "TABS_EXPRESSION_PICKER", e[e.NO_TABS_EXPRESSION_PICKER = 2] = "NO_TABS_EXPRESSION_PICKER", e
}({});
let ec = (e, t) => {
    S.kJ.setInspectedExpressionPosition(e, t, T.u.GRID_NAVIGATOR_EVENT)
  },
  eu = e => {
    let {
      analyticsLocation: t,
      pickerIntention: n,
      columnCounts: r,
      onSelectEmoji: o,
      emojiGrid: a,
      emojiList: s,
      channelGuildId: l,
      isBurstReaction: d
    } = e, f = (0, u.e7)([b.ZP], () => b.ZP.getDisambiguatedEmojiContext(l), [l]), _ = i.useCallback((e, r) => {
      switch (e.type) {
        case H.ld.CREATE_EMOJI:
          o(void 0, !0), C.Z.open(e.guildId, Q.pNK.EMOJI);
          return;
        case H.ld.EMOJI: {
          if (null != e.emoji && r.altKey) {
            f.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, p.Xe)(e.emoji) : ((0, j.J1)({
              emoji: e.emoji,
              location: er(et({}, t), {
                object: Q.qAy.EMOJI
              })
            }), (0, p.$K)(e.emoji));
            return
          }
          let i = {
            page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
            section: Q.jXE.EMOJI_PICKER_POPOUT,
            object: Q.qAy.EMOJI
          };
          d && (i = {
            page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
            section: Q.jXE.EMOJI_PICKER_POPOUT,
            object: Q.qAy.EMOJI
          }), (0, j.fe)({
            emoji: e.emoji,
            location: i,
            pickerIntention: n,
            category: e.category,
            subCategory: e.subCategory,
            newlyAddedHighlight: e.subCategory === q.t0.NEWLY_ADDED_EMOJI && y.Z.isNewerThanLastSeen(l, e.emoji.id)
          }), o(e.emoji, !r.shiftKey, d)
        }
      }
    }, [o, l, n, f, t, d]), {
      gridDispatch: h,
      getItemProps: g,
      getRowProps: m,
      gridContainerProps: E,
      handleGridContainerKeyDown: v,
      isUsingKeyboardNavigation: O
    } = (0, N.VO)({
      columnCounts: r,
      gridNavigatorId: q.Vr,
      itemGrid: a,
      itemList: s,
      onGridNavigatorItemSelect: _,
      onGridNavigatorPositionChange: ec
    });
    return i.useEffect(() => S.kJ.subscribe(e => e.inspectedExpressionPosition, e => {
      if (null == e) return;
      let {
        columnIndex: t,
        rowIndex: n,
        source: r
      } = e;
      r !== T.u.GRID_NAVIGATOR_EVENT && h({
        type: c.s.SET_FOCUSED_POSITION,
        x: t,
        y: n
      })
    }), [h]), {
      getItemProps: g,
      getRowProps: m,
      gridContainerProps: E,
      handleGridContainerKeyDown: v,
      isUsingKeyboardNavigation: O
    }
  },
  ed = (e, t) => {
    let [n, r] = i.useState(null);
    i.useEffect(() => {
      if (null != n) {
        var e;
        null === (e = t.current) || void 0 === e || e.scrollToSectionTop(n), r(null)
      }
    }, [t, n]), i.useEffect(() => {
      r(S.kJ.getState().activeCategoryIndex)
    }, [e])
  },
  ef = (e, t, n, r) => {
    i.useLayoutEffect(() => {
      if (r) {
        var e;
        null === (e = n.current) || void 0 === e || e.focus()
      }
    }, [e, t, n, r])
  },
  e_ = 200,
  ep = l()(j.to, e_),
  eh = l()(j.jA, e_),
  eg = {
    section: void 0,
    openPopoutType: void 0
  },
  em = function(e, t) {
    var n, o;
    let s, {
        pickerIntention: l,
        channel: c,
        guildId: f,
        closePopout: p,
        emojiSize: T = q.Su.MEDIUM,
        hasTabWrapper: C = !1,
        containerContext: k = 0,
        includeCreateEmojiButton: ee,
        onSelectEmoji: en,
        onSelectSoundmoji: el,
        containerWidth: ec,
        onNavigateAway: e_,
        persistSearch: em,
        className: eE,
        headerClassName: ev,
        analyticsOverride: eb = eg,
        searchProps: ey = {},
        wrapper: eO,
        shouldHidePickerActions: eS = !1,
        messageId: eI,
        renderHeader: eT,
        listHeaderClassName: eN,
        categoryListClassName: eA,
        shouldShowSoundmojiInEmojiPicker: eC = !1
      } = e,
      {
        onFocus: eR,
        onKeyDown: eP,
        autoFocus: eD = !0,
        accessory: ew
      } = ey,
      eL = (0, u.e7)([w.ZP], () => null != f ? w.ZP.getDefaultChannel(f) : null, [f]),
      [ex, eM] = i.useState(null),
      ek = i.useRef(""),
      ej = (0, I.Iu)(e => e.searchQuery),
      eU = i.useRef(null),
      eG = i.useRef(null),
      eB = i.useRef(null);
    null == c && null != eL && (c = eL);
    let eV = null !== (o = null !== (n = null == c ? void 0 : c.getGuildId()) && void 0 !== n ? n : f) && void 0 !== o ? o : null,
      [eF, eZ] = i.useState(!1),
      eH = L.default.getCurrentUser(),
      eW = (0, M.I5)(eH);
    i.useImperativeHandle(t, () => ({
      onPickerOpen: tt
    }));
    let {
      location: eY
    } = (0, g.O)(), {
      page: eK,
      section: ez,
      object: eq,
      openPopoutType: eQ
    } = eb, eX = i.useMemo(() => er(et({}, eY), {
      section: null != ez ? ez : Q.jXE.EMOJI_PICKER_POPOUT
    }), [eY, ez]), {
      analyticsLocations: eJ
    } = (0, E.ZP)(m.Z.EMOJI_PICKER), {
      diversitySurrogate: e$
    } = (0, u.cj)([b.ZP], () => ({
      diversitySurrogate: b.ZP.diversitySurrogate
    })), e0 = (0, j.DV)(ej, c, l), e1 = null == e0 ? 0 : e0.locked.length + e0.unlocked.length, e2 = D.d4.useSetting(), e3 = i.useMemo(() => new Set(e2), [e2]), e4 = i.useCallback(e => {
      D.d4.updateSetting(Array.from(e))
    }, []), e6 = (0, N.ep)({
      gridWrapperRef: eU,
      containerWidth: ec,
      listPaddingLeft: eo,
      listScrollbarWidth: ea
    }), {
      rowCountBySection: e5,
      sectionDescriptors: e7,
      emojiGrid: e8,
      columnCounts: e9
    } = (0, H.YH)({
      gridWidth: e6,
      channel: c,
      includeCreateEmojiButton: ee,
      pickerIntention: l,
      emojiSearchResults: e0,
      collapsedSections: e3,
      emojiPaddingHorizontal: ei,
      emojiSpriteSize: T,
      shouldShowSoundmojiInEmojiPicker: eC
    }), {
      newlyAddedEmojis: te
    } = (0, G.Z)(eV, l);
    (0, U.b)({
      intention: l,
      isBurstReaction: eF,
      analyticsObject: eq
    });
    let tt = i.useCallback(() => {
        let e = te.length > 0 ? te[0].id : null;
        (0, O.pr)(eV, e), (0, U.Z)({
          intention: l,
          isBurstReaction: eF,
          analyticsObject: eq
        })
      }, [te, eV, l, eF, eq]),
      tn = (0, H.rf)({
        pickerIntention: l,
        selectedChannel: c,
        closePopout: p,
        onSelectEmoji: en,
        setUpsellConfigs: eM,
        emojiSelectAnalytics: e => {
          "" !== ej ? (0, j.y$)({
            emoji: e.emoji,
            location: er(et({}, eX), {
              object: Q.qAy.EMOJI
            }),
            searchQuery: ej,
            intention: l
          }) : (0, j.fe)({
            emoji: e.emoji,
            location: et(er(et({}, eX), {
              object: null != eq ? eq : Q.qAy.EMOJI
            }), null != eK && {
              page: eK
            }),
            pickerIntention: l,
            category: e.category,
            subCategory: e.subCategory,
            position: e.columnIndex + 1,
            newlyAddedHighlight: e.subCategory === q.t0.NEWLY_ADDED_EMOJI && y.Z.isNewerThanLastSeen(eV, e.emoji.id),
            isBurstReaction: eF
          })
        },
        trackEmojiFavorited: e => {
          (0, j.J1)({
            emoji: e.emoji,
            location: er(et({}, eX), {
              object: Q.qAy.EMOJI
            })
          })
        }
      }),
      tr = i.useCallback(() => {
        p(), null == e_ || e_()
      }, [p, e_]),
      {
        getItemProps: ti,
        getRowProps: to,
        gridContainerProps: ta,
        handleGridContainerKeyDown: ts,
        isUsingKeyboardNavigation: tl
      } = eu({
        pickerIntention: l,
        analyticsLocation: eX,
        columnCounts: e9,
        onSelectEmoji: en,
        emojiGrid: e8,
        emojiList: eG,
        channelGuildId: eV,
        isBurstReaction: eF
      });
    ed(ec, eG), ef(ec, e$, eB, eD), i.useEffect(() => {
      em || (0, I.ql)("")
    }, [em]), i.useEffect(() => (x.default.track(Q.rMx.OPEN_POPOUT, {
      type: null != eQ ? eQ : "Emoji Picker",
      guild_id: eV
    }), S.kJ.resetStoreState), [eQ, eV]), i.useEffect(() => () => (0, R.Kw)(R.v6.FAVORITE_EMOJI_TOOLTIP), []), i.useLayoutEffect(() => {
      var e;
      let {
        columnIndex: t,
        rowIndex: n
      } = S.kJ.getState().inspectedExpressionPosition;
      (null === (e = e8[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && S.kJ.setInspectedExpressionPosition(0, 0)
    }, [e8]), i.useEffect(() => {
      if ("" === ek.current && "" !== ej && (0, j.PC)(eX, l), 0 === e1 && "" !== ej) ep(eX, ej);
      else if ("" !== ej && ek.current !== ej) {
        var e;
        eh(e1, null !== (e = null == e0 ? void 0 : e0.locked.length) && void 0 !== e ? e : 0, eX, ej, l)
      }
      ek.current = ej
    }, [ej, eX, e1, e0, l]);
    let tc = null != eO ? eO : C ? "div" : _.VqE,
      tu = null != e6;
    if ((null == ex ? void 0 : ex.type) === H.Bg.PREMIUM) {
      let e = P.p.NONE;
      2 === k ? e = P.p.PARENT_CONTAINER : 1 === k && (e = P.p.TAB_PARENT_CONTAINER), s = (0, r.jsx)(z.Z, {
        onLearnMore: tr,
        emojiDescriptor: ex.emojiDescriptor,
        pickerIntention: l,
        analyticsLocation: eX,
        onClose: () => eM(null),
        channel: c,
        containerContext: e
      })
    } else(null == ex ? void 0 : ex.type) === H.Bg.ROLE_SUBSCRIPTION ? s = (0, r.jsx)(A.Z, {
      onClose: () => eM(null),
      guildId: ex.guildId,
      emojiId: ex.emojiId
    }) : eF && !eW && (s = (0, r.jsx)(B.Z, {
      onDismiss: () => eZ(!1)
    }));
    let td = (e, t) => {
        tn(e, er(et({}, t), {
          isBurst: eF
        }))
      },
      tf = () => {
        var e;
        eZ(!eF), null === (e = eB.current) || void 0 === e || e.focus()
      },
      t_ = (0, r.jsx)(Z.Z, {
        pickerIntention: l,
        emojiListRef: eG,
        onKeyDown: e => {
          null == ts || ts(e), null == eP || eP(e)
        },
        searchBarRef: eB,
        onFocus: eR,
        autoFocus: eD,
        accessory: ew,
        headerClassName: ev,
        hasTabWrapper: C,
        diversitySurrogate: e$,
        isBurstReaction: eF,
        onBurstReactionToggle: tf,
        renderHeader: eT
      }),
      tp = [];
    l === J.Hz.REACTION && tp.push(d.z.SUPER_REACTIONS_NITRO_MARKETING), b.ZP.hasFavoriteEmojis(eV) || tp.push(d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
    let th = (0, r.jsx)(h.Z, er(et({}, eX), {
      children: (0, r.jsxs)(tc, {
        id: q.cZ,
        "aria-labelledby": C ? q.td : void 0,
        role: C ? "tabpanel" : void 0,
        className: a()($.wrapper, {
          [$.emojiPickerHasTabWrapper]: C,
          [$.isBurstReactionPicker]: eF && eW
        }),
        children: [C ? null : t_, (0, r.jsxs)("div", {
          className: a()($.emojiPicker, eE),
          onScroll: es,
          children: [C ? t_ : null, (0, r.jsxs)("div", {
            className: $.bodyWrapper,
            ref: eU,
            children: [(0, r.jsx)(K.Z, {
              channel: c,
              closePopout: p
            }), (0, r.jsx)(v.ZP, {
              contentTypes: tp,
              children: e => {
                let {
                  visibleContent: t,
                  markAsDismissed: n
                } = e;
                if (t === d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, r.jsx)(F.Z, {
                  markAsDismissed: () => n(X.L.UNKNOWN)
                })
              }
            }), eS ? null : (0, r.jsx)("div", er(et({
              className: $.emojiPickerListWrapper,
              id: q.Vr
            }, ta), {
              children: tu ? (0, r.jsx)(Y.Z, {
                collapsedSections: e3,
                diversitySurrogate: e$,
                emojiGrid: e8,
                emojiListRef: eG,
                emojiSize: T,
                getEmojiItemProps: ti,
                getEmojiRowProps: to,
                gridWidth: e6,
                isUsingKeyboardNavigation: tl,
                onEmojiSelect: td,
                onSelectSoundmoji: el,
                setUpsellConfigs: eM,
                rowCount: e8.length,
                rowCountBySection: e5,
                sectionDescriptors: e7,
                setCollapsedSections: e4,
                channelGuildId: eV,
                channelId: null == c ? void 0 : c.id,
                messageId: eI,
                isBurstReaction: eF,
                listHeaderClassName: eN
              }) : null
            }))]
          }), (0, r.jsx)(W.k, {
            emojiGrid: e8,
            className: $.inspector,
            guildId: eV,
            pickerIntention: l,
            channel: c
          }), s]
        }), eS ? null : (0, r.jsx)(V.Z, {
          className: a()($.categoryList, eA),
          emojiListRef: eG,
          sectionDescriptors: e7,
          intention: l,
          channel: c,
          shouldShowSoundmojiInEmojiPicker: eC
        })]
      })
    }));
    return (0, r.jsx)(E.Gt, {
      value: eJ,
      children: th
    })
  },
  eE = i.memo(i.forwardRef(em))