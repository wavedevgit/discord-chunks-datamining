/** Chunk was on web.js **/
/** chunk id: 805680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => $
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk40851 = require("./40851.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk556019 = require("./556019.js"),
  Chunk455708 = require("./455708.jsx"),
  Chunk314910 = require("./314910.jsx"),
  Chunk125900 = require("./125900.js"),
  Chunk603074 = require("./603074.jsx"),
  Chunk453070 = require("./453070.js"),
  Chunk926491 = require("./926491.js"),
  Chunk457040 = require("./457040.jsx"),
  Chunk740492 = require("./740492.js"),
  Chunk574254 = require("./574254.js"),
  Chunk585483 = require("./585483.js"),
  Chunk5967 = require("./5967.js"),
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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let q = Chunk957825.Om + Chunk149203.Su.MEDIUM,
  X = Chunk73800.memo(function(e) {
    var {
      isActive: t,
      className: n,
      viewType: i,
      autoFocus: o = false,
      "aria-controls": s
    } = e, l = K(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
    return (0, r.jsx)(p.P3F, W(H({
      role: "tab",
      autoFocus: o,
      "aria-controls": t ? s : true
    }, l), {
      onClick: () => {
        b.ZP.trackWithMetadata(j.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
          tab: i,
          badged: false
        }), (0, x.hr)(i)
      },
      "aria-current": t ? "page" : true,
      className: a()(n, F.navButton, F.navItem, {
        [F.navButtonActive]: t
      })
    }))
  }),
  Q = e => {
    let {
      positionContainerRef: t,
      drawerRef: n,
      orientation: r
    } = e, o = (0, d.e7)([P.ZP], () => P.ZP.expressionPickerWidth), [a, s] = i.useState(window.innerWidth), [c, u] = i.useState(null != o ? o : M._j.MIN), f = i.useMemo(() => {
      switch (c) {
        case M._j.MIN:
          return M.Om;
        case M._j.MAX:
          return null;
        default:
          return c
      }
    }, [c]), _ = i.useCallback(e => {
      let t = e >= a ? M._j.MAX : e <= M.Om ? M._j.MIN : e;
      null == t && null != n.current && (n.current.style.width = ""), h.ZP.updatedUnsyncedSettings({
        expressionPickerWidth: t
      }), u(t)
    }, [n, a]), p = (0, g.Z)({
      initialElementDimension: f,
      maxDimension: a,
      minDimension: M.Om,
      resizableDomNodeRef: n,
      onElementResize: _,
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
        e.stopPropagation(), null != t.current && s(t.current.offsetWidth), p(e)
      }, [t, p])
    }
  };

function J(e) {
  var t, n, o, s;
  let {
    positionTargetRef: l,
    hideGifFavorites: h,
    includeCreateEmojiButton: P,
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
  } = e, er = i.useRef(null), ei = i.useRef(false), eo = i.useRef(null), ea = i.useRef(null), {
    drawerWidth: es,
    handleDrawerResizeHandleMouseDown: el
  } = Q({
    positionContainerRef: er,
    drawerRef: ea,
    orientation: "left" === $ ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT
  }), ec = (0, x.Iu)(e => e.activeView), eu = (0, N.fQ)(K), {
    renderWindow: ed,
    windowDispatch: ef
  } = i.useContext(E.ZP), e_ = (0, d.e7)([C.Z], () => !C.Z.hasLoadedStickerPacks), ep = (0, S.V2)({
    location: "expression_picker"
  }), eh = (0, d.e7)([w.Z], () => w.Z.isOpen()), em = null != en, eg = (0, _.Jw)(null != en ? en : ""), eE = (null == (t = z.gifs) ? true : t.allowSending) && !c.tq && null != V, eb = (null == (n = z.stickers) ? true : n.allowSending) && null != Y, ey = !(null == (o = z.expressionPicker) ? true : o.onlyEmojis) && (eE || eb), eO = (0, v.qt)({
    location: "expression_picker",
    autoTrackExposure: true,
    disable: !ey || ec !== M.X1.EMOJI
  }), ev = i.useCallback(e => {
    var t;
    if (!em && (0, _.$s)() || em && !(eg && et) || eh || e.defaultPrevented) return;
    let {
      target: n
    } = e;
    if ((0, u.k)(n) && null != n.closest("." + M.CT)) return;
    for (;
      (0, u.k)(n);) {
      if (n === ea.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
      n = n.parentNode
    }(0, x._Q)();
    let r = null == (t = (0, L.uB)(e)) ? true : t.activeElement;
    (null == r || "BODY" === r.tagName) && D.S.dispatchToLastSubscribed(j.CkL.TEXTAREA_FOCUS)
  }, [et, eg, em, eh]), eI = i.useCallback(() => {
    (0, x._Q)()
  }, []);
  i.useLayoutEffect(() => {
    let e = () => {
      ec === M.X1.GIF && (0, x._Q)()
    };
    return ed.addEventListener("mousedown", ev), ed.addEventListener("contextmenu", ev), ef.subscribe(j.CkL.POPOUT_CLOSE, eI), D.S.subscribe(j.CkL.CLOSE_GIF_PICKER, e), () => {
      ed.removeEventListener("mousedown", ev), ed.removeEventListener("contextmenu", ev), ef.unsubscribe(j.CkL.POPOUT_CLOSE, eI), D.S.unsubscribe(j.CkL.CLOSE_GIF_PICKER, e)
    }
  }, [ec, eI, ev, ed, ef]), (0, p.Tbt)(er);
  let [eT, eS] = (0, y.US)(ep ? [f.z.SOUNDMOJI_BADGE] : [], true, false), [eA, eN] = i.useState(false);
  i.useEffect(() => {
    ec === M.X1.SOUNDBOARD && eN(true)
  }, [ec]), i.useEffect(() => () => {
    eA && eS(k.L.TAKE_ACTION)
  }, [eA, eS]), i.useEffect(() => {
    (0, x.ql)("")
  }, []), i.useEffect(() => {
    (!em && (0, _.$s)() || em && !eg) && (0, x._Q)()
  }, [eg, em]), i.useEffect(() => {
    if (null != ea.current && !ei.current) {
      var e, t, n, r;
      ec === M.X1.EMOJI ? (null == eo || null == (e = eo.current) ? true : e.onPickerOpen) != null && (null == eo || null == (t = eo.current) || t.onPickerOpen(), ei.current = true) : ec === M.X1.STICKER ? (null == eo || null == (n = eo.current) ? true : n.onPickerOpen) == null || e_ || (null == eo || null == (r = eo.current) || r.onPickerOpen(), ei.current = true) : (b.ZP.trackWithMetadata(j.rMx.EXPRESSION_PICKER_OPENED, {
        width: ea.current.offsetWidth,
        tab: ec,
        badged: false
      }), ei.current = true)
    }
  });
  let eC = i.useCallback((e, t) => null == W ? true : W(e, "emoji_picker", t), [W]),
    eR = i.useCallback((e, t) => null == W ? true : W(e, "soundboard_picker", t), [W]),
    eP = (null == (s = z.soundmoji) ? true : s.allowSending) === true && null != W,
    ew = "left" === $ ? "right" : "left",
    eD = null != ee ? ee : "left" === $ ? F.positionLayerDefaultAlignLeft : F.positionLayerDefaultAlignRight;
  return (0, r.jsx)(m.Z, {
    section: j.jXE.EXPRESSION_PICKER,
    children: (0, r.jsx)(T.W5, {
      className: a()(F.positionLayer, eD),
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
          className: a()(F.positionContainer, {
            [F.positionContainerOnlyEmoji]: !ey
          }),
          ref: er,
          role: "dialog",
          "aria-label": Z.intl.string(Z.t.Utlwvr),
          children: n ? (0, r.jsxs)("div", {
            className: F.drawerSizingWrapper,
            style: {
              width: null == es ? true : es,
              [$]: 0
            },
            ref: ea,
            children: [(0, r.jsx)("div", {
              className: F.resizeHandle,
              onMouseDown: el,
              style: {
                [ew]: false
              }
            }), (0, r.jsxs)("div", {
              className: F.contentWrapper,
              children: [ey ? (0, r.jsx)("nav", {
                className: F.nav,
                children: (0, r.jsxs)("div", {
                  className: F.navList,
                  role: "tablist",
                  "aria-label": Z.intl.string(Z.t["2j4VgY"]),
                  children: [eE ? (0, r.jsx)(X, {
                    id: U._3,
                    "aria-controls": U.vO,
                    "aria-selected": ec === M.X1.GIF,
                    isActive: ec === M.X1.GIF,
                    viewType: M.X1.GIF,
                    children: Z.intl.string(Z.t["6gUTsb"])
                  }) : null, eb ? (0, r.jsx)(X, {
                    id: B.ED,
                    "aria-controls": B.nZ,
                    "aria-selected": ec === M.X1.STICKER,
                    isActive: ec === M.X1.STICKER,
                    autoFocus: !eu,
                    viewType: M.X1.STICKER,
                    children: (0, r.jsx)("div", {
                      className: F.stickersNavItem,
                      children: Z.intl.string(Z.t.nf1s3t)
                    })
                  }) : null, (0, r.jsx)(X, {
                    id: U.td,
                    "aria-controls": U.cZ,
                    "aria-selected": ec === M.X1.EMOJI,
                    isActive: ec === M.X1.EMOJI,
                    viewType: M.X1.EMOJI,
                    children: Z.intl.string(Z.t.Xu3wEx)
                  }), ep && eP && (0, r.jsx)(X, {
                    id: U.Hr,
                    "aria-controls": U.gV,
                    "aria-selected": ec === M.X1.SOUNDBOARD,
                    isActive: ec === M.X1.SOUNDBOARD,
                    viewType: M.X1.SOUNDBOARD,
                    children: (0, r.jsxs)("div", {
                      className: F.soundmojiLabelContainer,
                      children: [Z.intl.string(Z.t.EHlAMT), null != eT && (0, r.jsx)(p.IGR, {
                        text: Z.intl.string(Z.t.y2b7CA)
                      })]
                    })
                  })]
                })
              }) : null, ec === M.X1.STICKER && eb ? (0, r.jsx)(R.Z, {
                isLoading: e_,
                channel: K,
                containerWidth: es,
                onSelectSticker: Y,
                closePopout: eI,
                ref: e => {
                  eo.current = e
                }
              }) : null, ec === M.X1.GIF && eE ? (0, r.jsx)(I.Z, {
                onSelectGIF: V,
                hideFavorites: h,
                persistSearch: true
              }) : null, ec === M.X1.EMOJI ? (0, r.jsx)(O.Z, {
                hasTabWrapper: true,
                containerContext: ey ? O.v.TABS_EXPRESSION_PICKER : O.v.NO_TABS_EXPRESSION_PICKER,
                persistSearch: true,
                channel: K,
                containerWidth: es,
                includeCreateEmojiButton: P,
                emojiSize: null != es && es < q ? U.Su.MEDIUM : U.Su.LARGE,
                pickerIntention: G.Hz.CHAT,
                closePopout: eI,
                onSelectEmoji: H,
                onSelectSoundmoji: eC,
                ref: e => {
                  eo.current = e
                },
                shouldShowSoundmojiInEmojiPicker: (null == (t = z.soundmoji) ? true : t.allowSending) === true,
                showAddEmojiButton: eO.isEntrypointEnabled && null != K.guild_id
              }) : null, ec === M.X1.SOUNDBOARD ? (0, r.jsx)("div", {
                className: F.soundboardContainer,
                children: (0, r.jsx)(A.Z, {
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
let $ = Chunk73800.memo(J)