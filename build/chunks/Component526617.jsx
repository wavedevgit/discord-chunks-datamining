/** Chunk was on web.js **/
/** chunk id: 526617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => es,
  Z: () => eu
}), require("./388685.js"), require("./856094.js"), require("./472816.js"), require("./794429.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    showNitroDivider: s
  } = e;

  function l() {
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

  function u() {
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
      className: q.premiumSectionDivider
    }), (0, r.jsx)("div", {
      className: o()(q.sectionContainer, {
        [q.sectionContainerNitroLocked]: a
      }),
      children: (0, r.jsx)(c.P3F, {
        className: q.sectionHeader,
        onClick: i,
        "aria-expanded": !n,
        children: (0, r.jsxs)("div", {
          className: q.sectionHeaderContent,
          children: [l(), (0, r.jsx)(c.Heading, {
            variant: "text-sm/semibold",
            color: "none",
            className: q.sectionTitle,
            children: u()
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
  return (0, Chunk951288.jsx)(Chunk788911.Z, {
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
    analyticsSource: eh
  } = e, {
    audioRef: em
  } = i.useContext(S.Z), {
    analyticsLocations: eg
  } = (0, p.ZP)(), {
    analyticsLocations: eE
  } = (0, p.ZP)(_.Z.PREMIUM_UPSELL), {
    location: eb
  } = (0, f.O)(), ey = i.useMemo(() => $(Q({}, eb), {
    section: Y.jXE.SOUNDBOARD_SOUND_PICKER
  }), [eb]), [eO, ev] = i.useState(null), eI = (0, l.e7)([N.default], () => N.default.getCurrentUser()), eT = (0, w.I5)(eI, K.PremiumTypes.TIER_2), eS = (0, l.e7)([R.Z], () => {
    var e;
    return R.Z.getVoiceState(t, null != (e = null == eI ? true : eI.id) ? e : Y.lds)
  }), eA = (null == eS ? true : eS.selfDeaf) || (null == eS ? true : eS.mute) || (null == eS ? true : eS.suppress), eC = (0, b.Iu)(e => e.searchQuery), eN = null != eC && "" !== eC, eR = (0, m.Dt)(), eP = x.t.useConfig({
    location: "SoundboardSoundGrid"
  }).upsellPinningMode, {
    categories: eD,
    allSounds: ew,
    soundCounts: ex
  } = (0, B.ZP)(a, {}, e_), [eL, eM] = i.useState([]), ej = (0, B.FS)(eD, eL, eC), ek = (0, b.Iu)(e => e.isNitroLockedSectionVisible), [eU, eG] = i.useState(false), eB = i.useMemo(() => ej.filter(e => e.items.length > 0), [ej]), eZ = i.useMemo(() => eB.findLastIndex(e => !!(0, w._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked), [eB]), eF = !eT && J && false !== eZ, eV = i.useMemo(() => eF ? [0, 0, 8, 0] : [0, 0, 0, 0], [eF]), eH = A.T4.useSetting(), eY = i.useMemo(() => new Set(eH), [eH]), eW = null == a, eK = w.ZP.canUseCustomCallSounds(eI), ez = i.useCallback(e => {
    eY.has(e) ? eY.delete(e) : eY.add(e), A.T4.updateSetting(Array.from(eY))
  }, [eY]), eq = i.useCallback((e, t, n, r) => {
    if (null != I && !P) return I(e, n);
    let i = (0, j.Nq)(eI, e, a, false);
    if (null != I && P && i) I(e, n);
    else if (!X && i && (0, j.C0)(a)) {
      var o;
      (0, j.GN)(e, null != (o = null == a ? true : a.id) ? o : Y.lds, t, r), eN && D.default.track(Y.rMx.SEARCH_RESULT_SELECTED, {
        search_type: Y.aib.SOUNDBOARD,
        channel_id: null == a ? true : a.id,
        query: eC,
        location_stack: t
      })
    } else {
      if ((0, j.Nq)(eI, e, a)) return;
      J && ev(e)
    }
  }, [X, eI, a, J, eN, eC, I, P]), eX = i.useCallback((e, t) => {
    switch (e.item.type) {
      case M.vB.SOUND:
        var n;
        let r = null != (n = eo[null == e ? true : e.category]) ? n : null,
          i = null == e ? true : e.item.index;
        return eq(e.item.sound, null == r ? eg : [...eg, r], (null == t ? true : t.shiftKey) !== true, i);
      case M.vB.ADD_SOUND:
        return g(), (0, H.Z)(e.item.guild.id)
    }
  }, [eg, eq, g]), eQ = i.useCallback((e, n, i, s, l) => {
    let c = eB[i.sectionIndex],
      u = J && es(c.categoryInfo, eT, t) && eF;
    return (0, r.jsx)("ul", $(Q({}, n), {
      className: o()(q.soundRow, {
        [q.soundRowNitroLocked]: u
      }),
      children: e.map((e, t) => (0, r.jsx)(V.Z, {
        descriptor: e,
        soundButtonProps: {
          channel: a,
          interactive: eW ? eK : !eA,
          forceSecondaryActions: true,
          analyticsLocations: eg
        },
        rowIndex: i.rowIndex,
        columnIndex: t,
        isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
        suppressPlaySound: X,
        getItemProps: s,
        onSelectItem: eX,
        onItemMouseEnter: l,
        buttonOverlay: eu,
        isNitroLocked: u,
        shouldShowUpsell: J,
        inExpressionPicker: ep
      }, t))
    }), "row-".concat(n["aria-rowindex"]))
  }, [eB, J, eT, t, X, eX, a, eW, eK, eA, eg, eu, eF, ep]), eJ = i.useCallback((e, t) => {
    if (e <= 0 || !J) returnfalse;
    let n = eB[e],
      r = eB[e - 1],
      i = es(n.categoryInfo, eT, t),
      a = es(r.categoryInfo, eT, t);
    return i && !a
  }, [eB, J, eT]), e$ = i.useCallback(() => {
    let e = L.Z.getSoundById(ea);
    null != e && ev(e)
  }, []), e0 = i.useCallback(() => {
    let e = (0, w.Px)(K.PremiumTypes.TIER_2);
    return z.intl.format(z.t["tw/SSq"], {
      nitroTierName: e,
      onClick: e$
    })
  }, [e$]), e1 = i.useCallback(e => eJ(e, t) ? er : en, [t, eJ]), e2 = i.useCallback(e => {
    let t = e === eB.length - 1;
    return eF && t ? 50 : eF && e === eZ ? 20 : 0
  }, [eB.length, eF, eZ]), e3 = i.useCallback((e, t) => (0, r.jsx)("div", {
    children: t
  }, e), []), e4 = i.useCallback((e, n) => {
    let i = "".concat(e.key),
      a = J && es(e.categoryInfo, eT, t),
      o = eJ(n, t),
      s = eY.has(i),
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
        }), ez(i)
      };
    return (0, r.jsx)(el, {
      categoryInfo: e.categoryInfo,
      toggleCollapsed: l,
      collapsed: s,
      isSectionNitroLocked: a && eF,
      showNitroDivider: o && eF
    }, "header-".concat(i))
  }, [eY, ez, t, eJ, J, eT, eF]), e8 = i.useCallback((e, t) => {
    let n = t === eB.length - 1,
      i = t === eZ;
    return eF && n ? (0, r.jsx)("div", {
      className: o()(q.lastSectionFooter, {
        [q.nitroLocked]: i
      })
    }) : eF && t === eZ ? (0, r.jsx)("div", {
      className: o()(q.smallPaddingFooter, q.nitroLocked)
    }) : null
  }, [eZ, eF, eB.length]), e5 = i.useCallback(e => eM((0, G.cK)(e, Array.from(ew.values()).flat(), eI, a, eg)), [a, eI, ew, eg]), e6 = i.useCallback(e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, r.jsx)(e, Q({
        sourceAnalyticsLocations: eg
      }, t))
    })
  }, [eg]), e7 = i.useCallback(() => ep ? (0, r.jsx)(O.Hh, {
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
    onClick: e6,
    "aria-label": z.intl.string(z.t.kbFsAD),
    children: (0, r.jsx)(c.gj8, {
      size: "md",
      color: "currentColor",
      className: q.settingsIcon
    })
  }), [ep, e6]), e9 = i.useCallback(e => (0, r.jsx)(Z.Z, {
    soundboardListRef: e,
    categories: eD,
    shouldUpsellLockedCategories: eF,
    listPadding: ed,
    guildId: t,
    inExpressionPicker: ep
  }), [eD, eF, ed, t, ep]), te = i.useCallback(() => {
    if (eF) {
      let e;
      switch (eP) {
        case x.o.ALWAYS_PINNED:
          e = true;
          break;
        case x.o.PINNED_ON_SCROLL_DOWN:
          e = eU || ek;
          break;
        default:
          e = ek
      }
      return (0, r.jsx)(v.p, {
        showUpsell: e,
        text: e0(),
        button: z.intl.string(z.t.pj0XBN),
        buttonAnalyticsObject: {
          section: Y.jXE.SOUND_PICKER_FLOATING_UPSELL
        }
      })
    }
    return null
  }, [e0, eF, eP, ek, eU]), tt = i.useCallback(e => {
    var t;
    return (null == e ? true : e.item.type) !== M.vB.SOUND ? null : (0, r.jsx)(F.Z, {
      closePicker: g,
      soundboardSound: null != (t = null == e ? true : e.item.sound) ? t : null
    })
  }, [g]), tn = i.useCallback(e => {
    eG(e > 50)
  }, []), tr = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png", ti = i.useCallback(() => {
    var e;
    let t = L.Z.getSoundById(ea),
      n = new Audio((0, k.Z)(ea));
    null != em.current && em.current.pause(), em.current = n, n.currentTime = 0, n.volume = (0, U.Z)(null != (e = null == t ? true : t.volume) ? e : 1), n.play()
  }, [em]), ta = (0, l.e7)([C.Z], () => C.Z.getMediaSessionId());
  return (0, h.Z)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: eh,
      guild_id: t,
      media_session_id: ta,
      available_custom_sounds_count: ex.unlockedCustomSoundCount,
      unavailable_custom_sounds_count: ex.lockedCustomSoundCount,
      favorite_sounds_count: ex.favoriteSoundCount
    }
  }), (0, r.jsxs)(r.Fragment, {
    children: [null != eO ? (0, r.jsx)(T.Z, {
      containerContext: ep ? T.p.TAB_PARENT_CONTAINER : T.p.NONE,
      image: {
        url: tr,
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
        location: $(Q({}, ey), {
          object: Y.qAy.SOUNDBOARD_SOUND
        }),
        location_stack: eE,
        sku_id: w.ZP.getSkuIdForPremiumType(K.PremiumTypes.TIER_2)
      },
      onClose: () => ev(null),
      onLearnMore: g,
      onDisplay: ti
    }) : true, (0, r.jsx)(y.Z, {
      categories: eB,
      collapsedCategories: eY,
      containerWidth: d,
      store: E.Wq,
      onSelectItem: eX,
      onSearchExpressions: e5,
      hasSearchResults: eL.length > 0,
      defaultSearchPlaceholder: z.intl.string(z.t.sKt3xS),
      renderRow: eQ,
      renderSectionHeader: e4,
      renderSectionFooter: e8,
      renderSection: e3,
      renderCategoryList: e9,
      renderHeaderAccessories: e7,
      rowHeight: et,
      sectionHeaderHeight: e1,
      sectionFooterHeight: e2,
      listPadding: eV,
      itemNodeWidth: ei,
      gridNavigatorId: eR,
      renderEmptySearchState: ec,
      renderInspector: tt,
      gridNotice: ee,
      renderHeader: ef,
      renderUpsell: te,
      onScroll: tn
    })]
  })
}