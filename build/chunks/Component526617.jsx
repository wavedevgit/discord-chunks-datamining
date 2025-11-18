/** Chunk was on web.js **/
/** chunk id: 526617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => es,
  Z: () => eu
}), require("./388685.js"), require("./856094.js"), require("./472816.js"), require("./794429.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk788911 = require("./788911.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk313201 = require("./313201.js"),
  Chunk880949 = require("./880949.jsx"),
  Chunk806966 = require("./806966.js"),
  Chunk28546 = require("./28546.js"),
  Chunk468954 = require("./468954.jsx"),
  Chunk409700 = require("./409700.jsx"),
  Chunk53691 = require("./53691.jsx"),
  Chunk75145 = require("./75145.jsx"),
  Chunk609218 = require("./609218.jsx"),
  Chunk386965 = require("./386965.js"),
  Chunk695346 = require("./695346.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk887766 = require("./887766.js"),
  Chunk763296 = require("./763296.js"),
  Chunk697426 = require("./697426.js"),
  Chunk242291 = require("./242291.js"),
  Chunk22382 = require("./22382.js"),
  Chunk747071 = require("./747071.js"),
  Chunk421673 = require("./421673.js"),
  Chunk663215 = require("./663215.js"),
  Chunk835648 = require("./835648.jsx"),
  Chunk650743 = require("./650743.jsx"),
  Chunk495332 = require("./495332.js"),
  Chunk343747 = require("./343747.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk412553 = require("./412553.js");

function X(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      X(e, t, n[t])
    })
  }
  return e
}

function J(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function $(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : J(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ee = 16,
  et = 48,
  en = 32,
  er = 32 + Chunk75145.Kn,
  ei = 150,
  ea = "3",
  eo = {
    [Chunk697426.bg.SEARCH]: Chunk100527.Z.SOUNDBOARD_SEARCH_RESULTS_SECTION,
    [Chunk697426.bg.DEFAULTS]: Chunk100527.Z.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
    [Chunk697426.bg.GUILD]: Chunk100527.Z.SOUNDBOARD_GUILD_SOUNDS_SECTION,
    [Chunk697426.bg.FAVORITES]: Chunk100527.Z.SOUNDBOARD_FAVORITES_SECTION,
    [Chunk697426.bg.RECENTLY_HEARD]: Chunk100527.Z.SOUNDBOARD_RECENTLY_HEARD_SECTION,
    [Chunk697426.bg.FREQUENTLY_USED]: Chunk100527.Z.SOUNDBOARD_FREQUENTLY_USED_SECTION
  };

function es(e, t, n) {
  return null == n && e.type === M.bg.GUILD && !t || e.type === M.bg.GUILD && e.guild.id !== n && !t
}

function el(e) {
  let {
    categoryInfo: t,
    collapsed: n,
    toggleCollapsed: i,
    isSectionNitroLocked: a,
    showNitroDivider: s,
    enablePickerUpsellPremiumBrandRefresh: l
  } = e;

  function u() {
    switch (t.type) {
      case M.bg.FAVORITES:
        return (0, r.jsx)(c.r7p, {
          size: "xs",
          color: "currentColor",
          className: q.headerIcon
        });
      case M.bg.RECENTLY_HEARD:
        return (0, r.jsx)(c.T39, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: q.headerIcon
        });
      case M.bg.FREQUENTLY_USED:
        return (0, r.jsx)(c.IeX, {
          className: q.headerIcon
        });
      case M.bg.GUILD:
        return (0, r.jsx)(g.Z, {
          guild: t.guild,
          height: ee,
          width: ee
        });
      case M.bg.DEFAULTS:
        return (0, r.jsx)(c.gw7, {
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor",
          className: q.headerIcon
        });
      case M.bg.SEARCH:
        return (0, r.jsx)(c._Ve, {
          size: "md",
          color: "currentColor",
          className: q.headerIcon
        })
    }
  }

  function d() {
    switch (t.type) {
      case M.bg.FAVORITES:
        return z.intl.string(z.t.k8fFjp);
      case M.bg.RECENTLY_HEARD:
        return z.intl.string(z.t["8i/+SA"]);
      case M.bg.FREQUENTLY_USED:
        return z.intl.string(z.t["+cGVV6"]);
      case M.bg.GUILD:
        return t.guild.name;
      case M.bg.DEFAULTS:
        return z.intl.string(z.t.Rtvk9X);
      case M.bg.SEARCH:
        return z.intl.string(z.t["zkoeq/"])
    }
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [s && (0, r.jsx)(I.ZP, {
      colorOpacity: .35,
      glowOpacity: .35,
      className: q.premiumSectionDivider,
      enableBrandRefresh: l
    }), (0, r.jsx)("div", {
      className: o()(q.sectionContainer, {
        [q.sectionContainerNitroLocked]: a,
        [q.sectionContainerNitroLockedBackground]: a,
        [q.brandRefresh]: l
      }),
      children: (0, r.jsx)(c.P3F, {
        className: q.sectionHeader,
        onClick: i,
        "aria-expanded": !n,
        children: (0, r.jsxs)("div", {
          className: q.sectionHeaderContent,
          children: [u(), (0, r.jsx)(c.Heading, {
            variant: "text-sm/semibold",
            color: "none",
            className: q.sectionTitle,
            children: d()
          }), (0, r.jsx)(P.Z, {
            className: q.headerIcon,
            direction: n ? P.Z.Directions.RIGHT : P.Z.Directions.DOWN
          })]
        })
      })
    })]
  })
}

function ec() {
  return (0, Chunk54381.jsx)(Chunk788911.Z, {
    message: Chunk388032.intl.string(Chunk388032.t.bgDdNK)
  })
}

function eu(e) {
  let {
    guildId: t,
    channel: a,
    containerWidth: d,
    onClose: g,
    onSelect: I,
    shouldValidateSelectedSound: P = false,
    suppressPlaySound: X = false,
    shouldShowUpsell: J = true,
    gridNotice: ee,
    soundButtonOverlay: eu,
    listPadding: ed,
    renderHeader: ef,
    defaultSoundsOnly: e_ = false,
    inExpressionPicker: ep,
    analyticsSource: eh,
    enablePickerUpsellPremiumBrandRefresh: em
  } = e, {
    audioRef: eg
  } = i.useContext(S.Z), {
    analyticsLocations: eE
  } = (0, p.ZP)(), {
    analyticsLocations: eb
  } = (0, p.ZP)(_.Z.PREMIUM_UPSELL), {
    location: ey
  } = (0, f.O)(), eO = i.useMemo(() => $(Q({}, ey), {
    section: Y.jXE.SOUNDBOARD_SOUND_PICKER
  }), [ey]), [ev, eI] = i.useState(null), eT = (0, l.e7)([N.default], () => N.default.getCurrentUser()), eS = (0, w.I5)(eT, K.PremiumTypes.TIER_2), eA = (0, l.e7)([R.Z], () => {
    var e;
    return R.Z.getVoiceState(t, null != (e = null == eT ? true : eT.id) ? e : Y.lds)
  }), eC = (null == eA ? true : eA.selfDeaf) || (null == eA ? true : eA.mute) || (null == eA ? true : eA.suppress), eN = (0, b.Iu)(e => e.searchQuery), eR = null != eN && "" !== eN, eP = (0, m.Dt)(), eD = L.t.useConfig({
    location: "SoundboardSoundGrid"
  }).upsellPinningMode, {
    categories: ew,
    allSounds: eL,
    soundCounts: ex
  } = (0, B.ZP)(a, {}, e_), [eM, ej] = i.useState([]), ek = (0, B.FS)(ew, eM, eN), eU = (0, b.Iu)(e => e.isNitroLockedSectionVisible), [eG, eB] = i.useState(false), eZ = i.useMemo(() => ek.filter(e => e.items.length > 0), [ek]), eF = i.useMemo(() => eZ.findLastIndex(e => !!(0, w._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked), [eZ]), eV = !eS && J && false !== eF, eH = i.useMemo(() => eV ? [0, 0, 8, 0] : [0, 0, 0, 0], [eV]), eY = A.T4.useSetting(), eW = i.useMemo(() => new Set(eY), [eY]), eK = null == a, ez = w.ZP.canUseCustomCallSounds(eT), eq = i.useCallback(e => {
    eW.has(e) ? eW.delete(e) : eW.add(e), A.T4.updateSetting(Array.from(eW))
  }, [eW]), eX = i.useCallback((e, t, n, r) => {
    if (null != I && !P) return I(e, n);
    let i = (0, j.Nq)(eT, e, a, false);
    if (null != I && P && i) I(e, n);
    else if (!X && i && (0, j.C0)(a)) {
      var o;
      (0, j.GN)(e, null != (o = null == a ? true : a.id) ? o : Y.lds, t, r), eR && D.default.track(Y.rMx.SEARCH_RESULT_SELECTED, {
        search_type: Y.aib.SOUNDBOARD,
        channel_id: null == a ? true : a.id,
        query: eN,
        location_stack: t
      })
    } else {
      if ((0, j.Nq)(eT, e, a)) return;
      J && eI(e)
    }
  }, [X, eT, a, J, eR, eN, I, P]), eQ = i.useCallback((e, t) => {
    switch (e.item.type) {
      case M.vB.SOUND:
        var n;
        let r = null != (n = eo[null == e ? true : e.category]) ? n : null,
          i = null == e ? true : e.item.index;
        return eX(e.item.sound, null == r ? eE : [...eE, r], (null == t ? true : t.shiftKey) !== true, i);
      case M.vB.ADD_SOUND:
        return g(), (0, H.Z)(e.item.guild.id)
    }
  }, [eE, eX, g]), eJ = i.useCallback((e, n, i, s, l) => {
    let c = eZ[i.sectionIndex],
      u = J && es(c.categoryInfo, eS, t) && eV;
    return (0, r.jsx)("ul", $(Q({}, n), {
      className: o()(q.soundRow, {
        [q.soundRowNitroLocked]: u,
        [q.brandRefresh]: em
      }),
      children: e.map((e, t) => (0, r.jsx)(V.Z, {
        descriptor: e,
        soundButtonProps: {
          channel: a,
          interactive: eK ? ez : !eC,
          forceSecondaryActions: true,
          analyticsLocations: eE
        },
        rowIndex: i.rowIndex,
        columnIndex: t,
        isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
        suppressPlaySound: X,
        getItemProps: s,
        onSelectItem: eQ,
        onItemMouseEnter: l,
        buttonOverlay: eu,
        isNitroLocked: u,
        shouldShowUpsell: J,
        inExpressionPicker: ep
      }, t))
    }), "row-".concat(n["aria-rowindex"]))
  }, [eZ, J, eS, t, X, eQ, a, eK, ez, eC, eE, eu, eV, ep, em]), e$ = i.useCallback((e, t) => {
    if (e <= 0 || !J) returnfalse;
    let n = eZ[e],
      r = eZ[e - 1],
      i = es(n.categoryInfo, eS, t),
      a = es(r.categoryInfo, eS, t);
    return i && !a
  }, [eZ, J, eS]), e0 = i.useCallback(() => {
    let e = x.Z.getSoundById(ea);
    null != e && eI(e)
  }, []), e1 = i.useCallback(() => {
    let e = (0, w.Px)(K.PremiumTypes.TIER_2);
    return z.intl.format(z.t["tw/SSq"], {
      nitroTierName: e,
      onClick: e0
    })
  }, [e0]), e3 = i.useCallback(e => e$(e, t) ? er : en, [t, e$]), e2 = i.useCallback(e => {
    let t = e === eZ.length - 1;
    return eV && t ? 50 : eV && e === eF ? 20 : 0
  }, [eZ.length, eV, eF]), e4 = i.useCallback((e, t) => (0, r.jsx)("div", {
    children: t
  }, e), []), e5 = i.useCallback((e, n) => {
    let i = "".concat(e.key),
      a = J && es(e.categoryInfo, eS, t),
      o = e$(n, t),
      s = eW.has(i),
      l = () => {
        D.default.track(Y.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
          location: {
            page: Y.ZY5.SOUNDBOARD_POPOUT
          },
          tab: W.X1.SOUNDBOARD,
          guild_id: null != t ? t : null,
          collapsed: !s,
          sticker_pack_id: null,
          num_expressions: e.items.length
        }), eq(i)
      };
    return (0, r.jsx)(el, {
      categoryInfo: e.categoryInfo,
      toggleCollapsed: l,
      collapsed: s,
      isSectionNitroLocked: a && eV,
      showNitroDivider: o && eV,
      enablePickerUpsellPremiumBrandRefresh: em
    }, "header-".concat(i))
  }, [eW, eq, t, e$, J, eS, eV, em]), e8 = i.useCallback((e, t) => {
    let n = t === eZ.length - 1,
      i = t === eF;
    return eV && n ? (0, r.jsx)("div", {
      className: o()(q.lastSectionFooter, {
        [q.nitroLocked]: i,
        [q.brandRefresh]: em
      })
    }) : eV && t === eF ? (0, r.jsx)("div", {
      className: o()(q.smallPaddingFooter, {
        [q.nitroLocked]: i,
        [q.brandRefresh]: em
      })
    }) : null
  }, [eF, eV, eZ.length, em]), e6 = i.useCallback(e => ej((0, G.cK)(e, Array.from(eL.values()).flat(), eT, a, eE)), [a, eT, eL, eE]), e7 = i.useCallback(e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, r.jsx)(e, Q({
        sourceAnalyticsLocations: eE
      }, t))
    })
  }, [eE]), e9 = i.useCallback(() => ep ? (0, r.jsx)(O.Hh, {
    renderPopout: () => (0, r.jsx)(O.hq, {}),
    tooltipText: z.intl.string(z.t["19lt24"]),
    position: "top",
    clickableClassName: o()(q.settingsClickArea, q.settingsSoundmojiClickArea),
    children: (0, r.jsx)(c.gj8, {
      size: "md",
      color: "currentColor",
      className: q.settingsIcon
    })
  }) : (0, r.jsx)(c.P3F, {
    tabIndex: 0,
    className: q.settingsClickArea,
    onClick: e7,
    "aria-label": z.intl.string(z.t.kbFsAD),
    children: (0, r.jsx)(c.gj8, {
      size: "md",
      color: "currentColor",
      className: q.settingsIcon
    })
  }), [ep, e7]), te = i.useCallback(e => (0, r.jsx)(Z.Z, {
    soundboardListRef: e,
    categories: ew,
    shouldUpsellLockedCategories: eV,
    listPadding: ed,
    guildId: t,
    inExpressionPicker: ep
  }), [ew, eV, ed, t, ep]), tt = i.useCallback(() => {
    if (eV) {
      let e;
      switch (eD) {
        case L.o.ALWAYS_PINNED:
          e = true;
          break;
        case L.o.PINNED_ON_SCROLL_DOWN:
          e = eG || eU;
          break;
        default:
          e = eU
      }
      return (0, r.jsx)(v.p, {
        showUpsell: e,
        text: e1(),
        button: z.intl.string(z.t.pj0XBN),
        buttonAnalyticsObject: {
          section: Y.jXE.SOUND_PICKER_FLOATING_UPSELL
        }
      })
    }
    return null
  }, [e1, eV, eD, eU, eG]), tn = i.useCallback(e => {
    var t;
    return (null == e ? true : e.item.type) !== M.vB.SOUND ? null : (0, r.jsx)(F.Z, {
      closePicker: g,
      soundboardSound: null != (t = null == e ? true : e.item.sound) ? t : null
    })
  }, [g]), tr = i.useCallback(e => {
    eB(e > 50)
  }, []), ti = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png", ta = i.useCallback(() => {
    var e;
    let t = x.Z.getSoundById(ea),
      n = new Audio((0, k.Z)(ea));
    null != eg.current && eg.current.pause(), eg.current = n, n.currentTime = 0, n.volume = (0, U.Z)(null != (e = null == t ? true : t.volume) ? e : 1), n.play()
  }, [eg]), to = (0, l.e7)([C.Z], () => C.Z.getMediaSessionId());
  return (0, h.Z)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: eh,
      guild_id: t,
      media_session_id: to,
      available_custom_sounds_count: ex.unlockedCustomSoundCount,
      unavailable_custom_sounds_count: ex.lockedCustomSoundCount,
      favorite_sounds_count: ex.favoriteSoundCount
    }
  }), (0, r.jsxs)(r.Fragment, {
    children: [null != ev ? (0, r.jsx)(T.Z, {
      containerContext: ep ? T.p.TAB_PARENT_CONTAINER : T.p.NONE,
      image: {
        url: ti,
        width: 220,
        height: 132
      },
      title: z.intl.string(ep ? z.t.rZEEvU : z.t.jGDYF0),
      description: z.intl.string(ep ? z.t.ZPNG5A : z.t["grL/hg"]),
      enableSocialProof: true,
      analyticsLocationSection: Y.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
      upsellViewedTrackingData: {
        type: K.cd.SOUND_PICKER_SOUND_CLICKED,
        is_external: true,
        location: $(Q({}, eO), {
          object: Y.qAy.SOUNDBOARD_SOUND
        }),
        location_stack: eb,
        sku_id: w.ZP.getSkuIdForPremiumType(K.PremiumTypes.TIER_2)
      },
      onClose: () => eI(null),
      onLearnMore: g,
      onDisplay: ta
    }) : true, (0, r.jsx)(y.Z, {
      categories: eZ,
      collapsedCategories: eW,
      containerWidth: d,
      store: E.Wq,
      onSelectItem: eQ,
      onSearchExpressions: e6,
      hasSearchResults: eM.length > 0,
      defaultSearchPlaceholder: z.intl.string(z.t.sKt3xS),
      renderRow: eJ,
      renderSectionHeader: e5,
      renderSectionFooter: e8,
      renderSection: e4,
      renderCategoryList: te,
      renderHeaderAccessories: e9,
      rowHeight: et,
      sectionHeaderHeight: e3,
      sectionFooterHeight: e2,
      listPadding: eH,
      itemNodeWidth: ei,
      gridNavigatorId: eP,
      renderEmptySearchState: ec,
      renderInspector: tn,
      gridNotice: ee,
      renderHeader: ef,
      renderUpsell: tt,
      onScroll: tr
    })]
  })
}