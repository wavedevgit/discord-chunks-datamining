/** Chunk was on web.js **/
/** chunk id: 526617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => el,
  Z: () => ed
}), require("./388685.js"), require("./856094.js");
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
  Chunk763296 = require("./763296.js"),
  Chunk697426 = require("./697426.js"),
  Chunk9551 = require("./9551.js"),
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
  Chunk641295 = require("./641295.js");

function Q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Q(e, t, n[t])
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
  er = 8,
  ei = 32 + Chunk75145.Kn - er,
  ea = 150,
  eo = "3",
  es = {
    [Chunk697426.bg.SEARCH]: Chunk100527.Z.SOUNDBOARD_SEARCH_RESULTS_SECTION,
    [Chunk697426.bg.DEFAULTS]: Chunk100527.Z.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
    [Chunk697426.bg.GUILD]: Chunk100527.Z.SOUNDBOARD_GUILD_SOUNDS_SECTION,
    [Chunk697426.bg.FAVORITES]: Chunk100527.Z.SOUNDBOARD_FAVORITES_SECTION,
    [Chunk697426.bg.RECENTLY_HEARD]: Chunk100527.Z.SOUNDBOARD_RECENTLY_HEARD_SECTION,
    [Chunk697426.bg.FREQUENTLY_USED]: Chunk100527.Z.SOUNDBOARD_FREQUENTLY_USED_SECTION
  };

function el(e, t, n) {
  return null == n && e.type === L.bg.GUILD && !t || e.type === L.bg.GUILD && e.guild.id !== n && !t
}

function ec(e) {
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
      case L.bg.FAVORITES:
        return (0, r.jsx)(c.r7p, {
          size: "xs",
          color: "currentColor",
          className: q.headerIcon
        });
      case L.bg.RECENTLY_HEARD:
        return (0, r.jsx)(c.T39, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: q.headerIcon
        });
      case L.bg.FREQUENTLY_USED:
        return (0, r.jsx)(c.IeX, {
          className: q.headerIcon
        });
      case L.bg.GUILD:
        return (0, r.jsx)(g.Z, {
          guild: t.guild,
          height: ee,
          width: ee
        });
      case L.bg.DEFAULTS:
        return (0, r.jsx)(c.gw7, {
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor",
          className: q.headerIcon
        });
      case L.bg.SEARCH:
        return (0, r.jsx)(c._Ve, {
          size: "md",
          color: "currentColor",
          className: q.headerIcon
        })
    }
  }

  function d() {
    switch (t.type) {
      case L.bg.FAVORITES:
        return z.intl.string(z.t.k8fFjp);
      case L.bg.RECENTLY_HEARD:
        return z.intl.string(z.t["8i/+SA"]);
      case L.bg.FREQUENTLY_USED:
        return z.intl.string(z.t["+cGVV6"]);
      case L.bg.GUILD:
        return t.guild.name;
      case L.bg.DEFAULTS:
        return z.intl.string(z.t.Rtvk9X);
      case L.bg.SEARCH:
        return z.intl.string(z.t["zkoeq/"])
    }
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [s && (0, r.jsx)(S.ZP, {
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
          }), (0, r.jsx)(R.Z, {
            className: q.headerIcon,
            direction: n ? R.Z.Directions.RIGHT : R.Z.Directions.DOWN
          })]
        })
      })
    })]
  })
}

function eu() {
  return (0, Chunk54381.jsx)(Chunk788911.Z, {
    message: Chunk388032.intl.string(Chunk388032.t.bgDdNK)
  })
}

function ed(e) {
  let {
    guildId: t,
    channel: a,
    containerWidth: d,
    onClose: g,
    onSelect: S,
    shouldValidateSelectedSound: R = false,
    suppressPlaySound: Q = false,
    shouldShowUpsell: J = true,
    gridNotice: ee,
    soundButtonOverlay: er,
    listPadding: ed,
    renderHeader: ef,
    defaultSoundsOnly: ep = false,
    inExpressionPicker: e_,
    analyticsSource: em,
    enablePickerUpsellPremiumBrandRefresh: eh
  } = e, {
    audioRef: eg
  } = i.useContext(T.Z), {
    analyticsLocations: eE
  } = (0, _.ZP)(), {
    analyticsLocations: eb
  } = (0, _.ZP)(p.Z.PREMIUM_UPSELL), {
    location: ey
  } = (0, f.O)(), eO = i.useMemo(() => $(X({}, ey), {
    section: Y.jXE.SOUNDBOARD_SOUND_PICKER
  }), [ey]), [ev, eS] = i.useState(null), eI = (0, l.e7)([N.default], () => N.default.getCurrentUser()), eT = (0, D.I5)(eI, K.PremiumTypes.TIER_2), eC = (0, l.e7)([P.Z], () => {
    var e;
    return P.Z.getVoiceState(t, null != (e = null == eI ? true : eI.id) ? e : Y.lds)
  }), eA = (null == eC ? true : eC.selfDeaf) || (null == eC ? true : eC.mute) || (null == eC ? true : eC.suppress), eN = (0, b.Iu)(e => e.searchQuery), eP = null != eN && "" !== eN, eR = (0, h.Dt)(), ew = j.V.useConfig({
    location: "SoundboardSoundGrid"
  }).enabled, {
    categories: eD,
    availableSounds: ex,
    soundCounts: eL
  } = (0, Z.ZP)(a, {}, ep), [ej, eM] = i.useState([]), ek = (0, Z.FS)(eD, ej, eN), eU = (0, b.Iu)(e => e.isNitroLockedSectionVisible), eG = i.useMemo(() => ek.filter(e => e.items.length > 0), [ek]), eZ = i.useMemo(() => eG.findLastIndex(e => !!(0, D._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked), [eG]), eF = !eT && J && false !== eZ, eB = i.useMemo(() => eF ? [0, 0, 8, 0] : [0, 0, 0, 0], [eF]), eV = C.T4.useSetting(), eH = i.useMemo(() => new Set(eV), [eV]), eY = null == a, eW = D.ZP.canUseCustomCallSounds(eI), eK = i.useCallback(e => {
    eH.has(e) ? eH.delete(e) : eH.add(e), C.T4.updateSetting(Array.from(eH))
  }, [eH]), ez = i.useCallback((e, t, n, r) => {
    if (null != S && !R) return S(e, n);
    let i = (0, M.Nq)(eI, e, a, false);
    if (null != S && R && i) S(e, n);
    else if (!Q && i && (0, M.C0)(a)) {
      var o;
      (0, M.GN)(e, null != (o = null == a ? true : a.id) ? o : Y.lds, t, r), eP && w.default.track(Y.rMx.SEARCH_RESULT_SELECTED, {
        search_type: Y.aib.SOUNDBOARD,
        channel_id: null == a ? true : a.id,
        query: eN,
        location_stack: t
      })
    } else {
      if ((0, M.Nq)(eI, e, a)) return;
      J && eS(e)
    }
  }, [Q, eI, a, J, eP, eN, S, R]), eq = i.useCallback((e, t) => {
    switch (e.item.type) {
      case L.vB.SOUND:
        var n;
        let r = null != (n = es[null == e ? true : e.category]) ? n : null,
          i = null == e ? true : e.item.index;
        return ez(e.item.sound, null == r ? eE : [...eE, r], (null == t ? true : t.shiftKey) !== true, i);
      case L.vB.ADD_SOUND:
        return g(), (0, H.Z)(e.item.guild.id)
    }
  }, [eE, ez, g]), eQ = i.useCallback((e, n, i, s, l) => {
    let c = eG[i.sectionIndex],
      u = J && el(c.categoryInfo, eT, t) && eF;
    return (0, r.jsx)("ul", $(X({}, n), {
      className: o()(q.soundRow, {
        [q.soundRowNitroLocked]: u,
        [q.brandRefresh]: eh
      }),
      children: e.map((e, t) => (0, r.jsx)(V.Z, {
        descriptor: e,
        soundButtonProps: {
          channel: a,
          interactive: eY ? eW : !eA,
          forceSecondaryActions: true,
          analyticsLocations: eE
        },
        rowIndex: i.rowIndex,
        columnIndex: t,
        isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
        suppressPlaySound: Q,
        getItemProps: s,
        onSelectItem: eq,
        onItemMouseEnter: l,
        buttonOverlay: er,
        isNitroLocked: u,
        shouldShowUpsell: J,
        inExpressionPicker: e_
      }, t))
    }), "row-".concat(n["aria-rowindex"]))
  }, [eG, J, eT, t, Q, eq, a, eY, eW, eA, eE, er, eF, e_, eh]), eX = i.useCallback((e, t) => {
    if (e <= 0 || !J) returnfalse;
    let n = eG[e],
      r = eG[e - 1],
      i = el(n.categoryInfo, eT, t),
      a = el(r.categoryInfo, eT, t);
    return i && !a
  }, [eG, J, eT]), eJ = i.useCallback(() => {
    let e = x.Z.getSoundById(eo);
    null != e && eS(e)
  }, []), e$ = i.useCallback(() => {
    let e = (0, D.Px)(K.PremiumTypes.TIER_2);
    return z.intl.format(z.t["tw/SSq"], {
      nitroTierName: e,
      onClick: eJ
    })
  }, [eJ]), e0 = i.useCallback(e => eX(e, t) ? ei : en, [t, eX]), e1 = i.useCallback(e => {
    let t = e === eG.length - 1;
    return eF && t ? 50 : eF && e === eZ ? 20 : 0
  }, [eG.length, eF, eZ]), e3 = i.useCallback((e, t) => (0, r.jsx)("div", {
    children: t
  }, e), []), e2 = i.useCallback((e, n) => {
    let i = "".concat(e.key),
      a = J && el(e.categoryInfo, eT, t),
      o = eX(n, t),
      s = eH.has(i),
      l = () => {
        w.default.track(Y.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
          location: {
            page: Y.ZY5.SOUNDBOARD_POPOUT
          },
          tab: W.X1.SOUNDBOARD,
          guild_id: null != t ? t : null,
          collapsed: !s,
          sticker_pack_id: null,
          num_expressions: e.items.length
        }), eK(i)
      };
    return (0, r.jsx)(ec, {
      categoryInfo: e.categoryInfo,
      toggleCollapsed: l,
      collapsed: s,
      isSectionNitroLocked: a && eF,
      showNitroDivider: o && eF,
      enablePickerUpsellPremiumBrandRefresh: eh
    }, "header-".concat(i))
  }, [eH, eK, t, eX, J, eT, eF, eh]), e4 = i.useCallback((e, t) => {
    let n = t === eG.length - 1,
      i = t === eZ;
    return eF && n ? (0, r.jsx)("div", {
      className: o()(q.lastSectionFooter, {
        [q.nitroLocked]: i,
        [q.brandRefresh]: eh
      })
    }) : eF && t === eZ ? (0, r.jsx)("div", {
      className: o()(q.smallPaddingFooter, {
        [q.nitroLocked]: i,
        [q.brandRefresh]: eh
      })
    }) : null
  }, [eZ, eF, eG.length, eh]), e5 = i.useCallback(e => eM((0, G.cK)(e, ex, eI, a, eE)), [a, eI, ex, eE]), e8 = i.useCallback(e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, r.jsx)(e, X({
        sourceAnalyticsLocations: eE
      }, t))
    })
  }, [eE]), e6 = i.useCallback(() => e_ ? (0, r.jsx)(O.Hh, {
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
    onClick: e8,
    "aria-label": z.intl.string(z.t.kbFsAD),
    children: (0, r.jsx)(c.gj8, {
      size: "md",
      color: "currentColor",
      className: q.settingsIcon
    })
  }), [e_, e8]), e7 = i.useCallback(e => (0, r.jsx)(F.Z, {
    soundboardListRef: e,
    categories: eD,
    shouldUpsellLockedCategories: eF,
    listPadding: ed,
    guildId: t,
    inExpressionPicker: e_
  }), [eD, eF, ed, t, e_]), e9 = i.useCallback(() => {
    if (eF) {
      let e = eU;
      return ew && (e = true), (0, r.jsx)(v.p, {
        showUpsell: e,
        text: e$(),
        button: z.intl.string(z.t.pj0XBN),
        buttonAnalyticsObject: {
          section: Y.jXE.SOUND_PICKER_FLOATING_UPSELL
        }
      })
    }
    return null
  }, [e$, eF, ew, eU]), te = i.useCallback(e => {
    var t;
    return (null == e ? true : e.item.type) !== L.vB.SOUND ? null : (0, r.jsx)(B.Z, {
      closePicker: g,
      soundboardSound: null != (t = null == e ? true : e.item.sound) ? t : null
    })
  }, [g]), tt = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png", tn = i.useCallback(() => {
    var e;
    let t = x.Z.getSoundById(eo),
      n = new Audio((0, k.Z)(eo));
    null != eg.current && eg.current.pause(), eg.current = n, n.currentTime = 0, n.volume = (0, U.Z)(null != (e = null == t ? true : t.volume) ? e : 1), n.play()
  }, [eg]), tr = (0, l.e7)([A.Z], () => A.Z.getMediaSessionId());
  return (0, m.Z)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: em,
      guild_id: t,
      media_session_id: tr,
      available_custom_sounds_count: eL.unlockedCustomSoundCount,
      unavailable_custom_sounds_count: eL.lockedCustomSoundCount,
      favorite_sounds_count: eL.favoriteSoundCount
    }
  }), (0, r.jsxs)(r.Fragment, {
    children: [null != ev ? (0, r.jsx)(I.Z, {
      containerContext: e_ ? I.p.TAB_PARENT_CONTAINER : I.p.NONE,
      image: {
        url: tt,
        width: 220,
        height: 132
      },
      title: z.intl.string(e_ ? z.t.rZEEvU : z.t.jGDYF0),
      description: z.intl.string(e_ ? z.t.ZPNG5A : z.t["grL/hg"]),
      enableSocialProof: true,
      analyticsLocationSection: Y.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
      upsellViewedTrackingData: {
        type: K.cd.SOUND_PICKER_SOUND_CLICKED,
        is_external: true,
        location: $(X({}, eO), {
          object: Y.qAy.SOUNDBOARD_SOUND
        }),
        location_stack: eb,
        sku_id: D.ZP.getSkuIdForPremiumType(K.PremiumTypes.TIER_2)
      },
      onClose: () => eS(null),
      onLearnMore: g,
      onDisplay: tn
    }) : true, (0, r.jsx)(y.Z, {
      categories: eG,
      collapsedCategories: eH,
      containerWidth: d,
      store: E.Wq,
      onSelectItem: eq,
      onSearchExpressions: e5,
      hasSearchResults: ej.length > 0,
      defaultSearchPlaceholder: z.intl.string(z.t.sKt3xS),
      renderRow: eQ,
      renderSectionHeader: e2,
      renderSectionFooter: e4,
      renderSection: e3,
      renderCategoryList: e7,
      renderHeaderAccessories: e6,
      rowHeight: et,
      sectionHeaderHeight: e0,
      sectionFooterHeight: e1,
      listPadding: eB,
      itemNodeWidth: ea,
      gridNavigatorId: eR,
      renderEmptySearchState: eu,
      renderInspector: te,
      gridNotice: ee,
      renderHeader: ef,
      renderUpsell: e9
    })]
  })
}