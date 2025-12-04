/** Chunk was on web.js **/
/** chunk id: 805680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => $
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk873546 = require("./873546.js"),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk347469 = require("./347469.js"),
  Chunk367907 = require("./367907.js"),
  Chunk713913 = require("./713913.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk556019 = require("./556019.js"),
  Chunk455708 = require("./455708.jsx"),
  Chunk314910 = require("./314910.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk125900 = require("./125900.js"),
  Chunk603074 = require("./603074.jsx"),
  Chunk453070 = require("./453070.js"),
  Chunk926491 = require("./926491.js"),
  Chunk457040 = require("./457040.jsx"),
  Chunk740492 = require("./740492.js"),
  Chunk574254 = require("./574254.js"),
  Chunk585483 = require("./585483.js"),
  Chunk28546 = require("./28546.js"),
  Chunk957825 = require("./957825.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk149203 = require("./149203.js"),
  Chunk185923 = require("./185923.js"),
  Chunk611480 = require("./611480.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk887648 = require("./887648.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e, t) {
  if (null == e) return {};
  var n, r, i = z(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let q = Chunk957825.Om + Chunk149203.Su.MEDIUM,
  Q = Chunk473749.memo(function(e) {
    var {
      isActive: t,
      className: n,
      viewType: i,
      autoFocus: a = false,
      "aria-controls": s
    } = e, l = K(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
    return (0, r.jsx)(_.P3F, W(H({
      role: "tab",
      autoFocus: a,
      "aria-controls": t ? s : true
    }, l), {
      onClick: () => {
        E.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
          tab: i,
          badged: false
        }), (0, L.hr)(i)
      },
      "aria-current": t ? "page" : true,
      className: o()(n, F.navButton, F.navItem, {
        [F.navButtonActive]: t
      })
    }))
  }),
  X = e => {
    let {
      positionContainerRef: t,
      drawerRef: n,
      orientation: r
    } = e, a = (0, d.e7)([w.ZP], () => w.ZP.expressionPickerWidth), [o, s] = i.useState(window.innerWidth), [c, u] = i.useState(null != a ? a : j._j.MIN), f = i.useMemo(() => {
      switch (c) {
        case j._j.MIN:
          return j.Om;
        case j._j.MAX:
          return null;
        default:
          return c
      }
    }, [c]), p = i.useCallback(e => {
      let t = e >= o ? j._j.MAX : e <= j.Om ? j._j.MIN : e;
      null == t && null != n.current && (n.current.style.width = ""), m.ZP.updatedUnsyncedSettings({
        expressionPickerWidth: t
      }), u(t)
    }, [n, o]), _ = (0, g.Z)({
      initialElementDimension: f,
      maxDimension: o,
      minDimension: j.Om,
      resizableDomNodeRef: n,
      onElementResize: p,
      orientation: r
    });
    return i.useEffect(() => {
      let e = l().debounce(() => {
        null != t.current && s(t.current.offsetWidth)
      }, 500);
      return window.addEventListener("resize", e), () => {
        window.removeEventListener("resize", e)
      }
    }, [t]), i.useLayoutEffect(() => {
      null != t.current && s(t.current.offsetWidth)
    }, [t]), {
      drawerWidth: f,
      handleDrawerResizeHandleMouseDown: i.useCallback(e => {
        e.stopPropagation(), null != t.current && s(t.current.offsetWidth), _(e)
      }, [t, _])
    }
  };

function J(e) {
  var t, n, a, s;
  let {
    positionTargetRef: l,
    hideGifFavorites: m,
    includeCreateEmojiButton: w,
    onSelectGIF: V,
    onSelectEmoji: H,
    onSelectSticker: Y,
    onSelectSound: W,
    channel: K,
    type: z,
    position: J,
    align: $,
    positionLayerClassName: ee,
    closeOnModalOuterClick: et = false,
    parentModalKey: en
  } = e, er = i.useRef(null), ei = i.useRef(false), ea = i.useRef(null), eo = i.useRef(null), {
    drawerWidth: es,
    handleDrawerResizeHandleMouseDown: el
  } = X({
    positionContainerRef: er,
    drawerRef: eo,
    orientation: "left" === $ ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT
  }), ec = (0, L.Iu)(e => e.activeView), eu = (0, N.fQ)(K), {
    renderWindow: ed,
    windowDispatch: ef
  } = i.useContext(T.ZP), ep = (0, d.e7)([P.Z], () => !P.Z.hasLoadedStickerPacks), e_ = (0, A.V2)({
    location: "expression_picker"
  }), em = (0, d.e7)([D.Z], () => D.Z.isOpen()), eh = null != en, eg = (0, p.useIsModalAtTop)(null != en ? en : ""), {
    reorderExpressionPickerTabs: eE
  } = b.n.useConfig({
    location: "expression_picker"
  }), eb = (null == (t = z.gifs) ? true : t.allowSending) && !c.tq && null != V, ey = (null == (n = z.stickers) ? true : n.allowSending) && null != Y, eO = !(null == (a = z.expressionPicker) ? true : a.onlyEmojis) && (eb || ey), ev = (0, v.qt)({
    location: "expression_picker",
    autoTrackExposure: true,
    disable: !eO || ec !== j.X1.EMOJI
  }), eS = i.useCallback(e => {
    var t;
    if (!eh && (0, p.hasAnyModalOpen)() || eh && !(eg && et) || em || e.defaultPrevented) return;
    let {
      target: n
    } = e;
    if ((0, u.kK)(n) && null != n.closest("." + j.CT)) return;
    for (;
      (0, u.kK)(n);) {
      if (n === eo.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
      n = n.parentNode
    }(0, L._Q)();
    let r = null == (t = (0, u.uB)(e)) ? true : t.activeElement;
    (null == r || "BODY" === r.tagName) && x.S.dispatchToLastSubscribed(M.CkL.TEXTAREA_FOCUS)
  }, [et, eg, eh, em]), eI = i.useCallback(() => {
    (0, L._Q)()
  }, []);
  i.useLayoutEffect(() => {
    let e = () => {
      ec === j.X1.GIF && (0, L._Q)()
    };
    return ed.addEventListener("mousedown", eS), ed.addEventListener("contextmenu", eS), ef.subscribe(M.CkL.POPOUT_CLOSE, eI), x.S.subscribe(M.CkL.CLOSE_GIF_PICKER, e), () => {
      ed.removeEventListener("mousedown", eS), ed.removeEventListener("contextmenu", eS), ef.unsubscribe(M.CkL.POPOUT_CLOSE, eI), x.S.unsubscribe(M.CkL.CLOSE_GIF_PICKER, e)
    }
  }, [ec, eI, eS, ed, ef]), (0, _.Tbt)(er);
  let [eT, eA] = (0, y.US)(e_ ? [f.z.SOUNDMOJI_BADGE] : [], true, false), [eC, eN] = i.useState(false);
  i.useEffect(() => {
    ec === j.X1.SOUNDBOARD && eN(true)
  }, [ec]), i.useEffect(() => () => {
    eC && eA(k.L.TAKE_ACTION)
  }, [eC, eA]), i.useEffect(() => {
    (0, L.ql)("")
  }, []), i.useEffect(() => {
    (!eh && (0, p.hasAnyModalOpen)() || eh && !eg) && (0, L._Q)()
  }, [eg, eh]), i.useEffect(() => {
    if (null != eo.current && !ei.current) {
      var e, t, n, r;
      ec === j.X1.EMOJI ? (null == ea || null == (e = ea.current) ? true : e.onPickerOpen) != null && (null == ea || null == (t = ea.current) || t.onPickerOpen(), ei.current = true) : ec === j.X1.STICKER ? (null == ea || null == (n = ea.current) ? true : n.onPickerOpen) == null || ep || (null == ea || null == (r = ea.current) || r.onPickerOpen(), ei.current = true) : (E.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_OPENED, {
        width: eo.current.offsetWidth,
        tab: ec,
        badged: false
      }), ei.current = true)
    }
  });
  let eP = i.useCallback((e, t) => null == W ? true : W(e, "emoji_picker", t), [W]),
    eR = i.useCallback((e, t) => null == W ? true : W(e, "soundboard_picker", t), [W]),
    ew = (null == (s = z.soundmoji) ? true : s.allowSending) === true && null != W,
    eD = "left" === $ ? "right" : "left",
    ex = null != ee ? ee : "left" === $ ? F.positionLayerDefaultAlignLeft : F.positionLayerDefaultAlignRight,
    eL = eb ? (0, r.jsx)(Q, {
      id: U._3,
      "aria-controls": U.vO,
      "aria-selected": ec === j.X1.GIF,
      isActive: ec === j.X1.GIF,
      viewType: j.X1.GIF,
      children: B.intl.string(B.t["6gUTsS"])
    }) : null,
    ej = ey ? (0, r.jsx)(Q, {
      id: Z.ED,
      "aria-controls": Z.nZ,
      "aria-selected": ec === j.X1.STICKER,
      isActive: ec === j.X1.STICKER,
      autoFocus: !eu,
      viewType: j.X1.STICKER,
      children: (0, r.jsx)("div", {
        className: F.stickersNavItem,
        children: B.intl.string(B.t.nf1s3u)
      })
    }) : null,
    eM = (0, r.jsx)(Q, {
      id: U.td,
      "aria-controls": U.cZ,
      "aria-selected": ec === j.X1.EMOJI,
      isActive: ec === j.X1.EMOJI,
      viewType: j.X1.EMOJI,
      children: B.intl.string(B.t.Xu3wE3)
    });
  return (0, r.jsx)(h.Z, {
    section: M.jXE.EXPRESSION_PICKER,
    children: (0, r.jsx)(I.W5, {
      className: o()(F.positionLayer, ex),
      targetRef: l,
      position: J,
      align: $,
      spacing: 8,
      autoInvert: true,
      clickTrap: true,
      children: e => {
        var t;
        let {
          isPositioned: n
        } = e;
        return (0, r.jsx)("section", {
          className: o()(F.positionContainer, {
            [F.positionContainerOnlyEmoji]: !eO
          }),
          ref: er,
          role: "dialog",
          "aria-label": B.intl.string(B.t.Utlwvi),
          children: n ? (0, r.jsxs)("div", {
            className: F.drawerSizingWrapper,
            style: {
              width: null == es ? true : es,
              [$]: 0
            },
            ref: eo,
            children: [(0, r.jsx)("div", {
              className: F.resizeHandle,
              onMouseDown: el,
              style: {
                [eD]: false
              }
            }), (0, r.jsxs)("div", {
              className: F.contentWrapper,
              children: [eO ? (0, r.jsx)("nav", {
                className: F.nav,
                children: (0, r.jsxs)("div", {
                  className: F.navList,
                  role: "tablist",
                  "aria-label": B.intl.string(B.t["2j4Vgd"]),
                  children: [eE ? (0, r.jsxs)(r.Fragment, {
                    children: [eM, eL, ej]
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [eL, ej, eM]
                  }), e_ && ew && (0, r.jsx)(Q, {
                    id: U.Hr,
                    "aria-controls": U.gV,
                    "aria-selected": ec === j.X1.SOUNDBOARD,
                    isActive: ec === j.X1.SOUNDBOARD,
                    viewType: j.X1.SOUNDBOARD,
                    children: (0, r.jsxs)("div", {
                      className: F.soundmojiLabelContainer,
                      children: [B.intl.string(B.t.EHlAMc), null != eT && (0, r.jsx)(_.IGR, {
                        text: B.intl.string(B.t.y2b7CA)
                      })]
                    })
                  })]
                })
              }) : null, ec === j.X1.STICKER && ey ? (0, r.jsx)(R.Z, {
                isLoading: ep,
                channel: K,
                containerWidth: es,
                onSelectSticker: Y,
                closePopout: eI,
                ref: e => {
                  ea.current = e
                }
              }) : null, ec === j.X1.GIF && eb ? (0, r.jsx)(S.Z, {
                onSelectGIF: V,
                hideFavorites: m,
                persistSearch: true
              }) : null, ec === j.X1.EMOJI ? (0, r.jsx)(O.Z, {
                hasTabWrapper: true,
                containerContext: eO ? O.v.TABS_EXPRESSION_PICKER : O.v.NO_TABS_EXPRESSION_PICKER,
                persistSearch: true,
                channel: K,
                containerWidth: es,
                includeCreateEmojiButton: w,
                emojiSize: null != es && es < q ? U.Su.MEDIUM : U.Su.LARGE,
                pickerIntention: G.Hz.CHAT,
                closePopout: eI,
                onSelectEmoji: H,
                onSelectSoundmoji: eP,
                ref: e => {
                  ea.current = e
                },
                shouldShowSoundmojiInEmojiPicker: (null == (t = z.soundmoji) ? true : t.allowSending) === true,
                showAddEmojiButton: ev.enabled
              }) : null, ec === j.X1.SOUNDBOARD ? (0, r.jsx)("div", {
                className: F.soundboardContainer,
                children: (0, r.jsx)(C.Z, {
                  guildId: K.guild_id,
                  channel: K,
                  containerWidth: es,
                  onClose: eI,
                  onSelect: eR,
                  analyticsSource: "expression-picker",
                  renderHeader: e => (0, r.jsx)("div", {
                    className: F.soundboardHeader,
                    children: e
                  }),
                  inExpressionPicker: true,
                  shouldValidateSelectedSound: true
                })
              }) : null]
            })]
          }) : null
        })
      }
    })
  })
}
let $ = Chunk473749.memo(J)