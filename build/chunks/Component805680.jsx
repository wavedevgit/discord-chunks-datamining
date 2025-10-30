/** Chunk was on web.js **/
/** chunk id: 805680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => J
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk364744 = require("./364744.js");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function W(e, t) {
  if (null == e) return {};
  var n, r, i = K(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function K(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let z = Chunk957825.Om + Chunk149203.Su.MEDIUM,
  q = Chunk647438.memo(function(e) {
    var {
      isActive: t,
      className: n,
      viewType: i,
      autoFocus: a = false,
      "aria-controls": s
    } = e, l = W(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
    return (0, r.jsx)(p.P3F, Y(V({
      role: "tab",
      autoFocus: a,
      "aria-controls": t ? s : true
    }, l), {
      onClick: () => {
        E.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
          tab: i,
          badged: false
        }), (0, x.hr)(i)
      },
      "aria-current": t ? "page" : true,
      className: o()(n, Z.navButton, Z.navItem, {
        [Z.navButtonActive]: t
      })
    }))
  }),
  X = e => {
    let {
      positionContainerRef: t,
      drawerRef: n,
      orientation: r
    } = e, a = (0, d.e7)([P.ZP], () => P.ZP.expressionPickerWidth), [o, s] = i.useState(window.innerWidth), [c, u] = i.useState(null != a ? a : L._j.MIN), f = i.useMemo(() => {
      switch (c) {
        case L._j.MIN:
          return L.Om;
        case L._j.MAX:
          return null;
        default:
          return c
      }
    }, [c]), _ = i.useCallback(e => {
      let t = e >= o ? L._j.MAX : e <= L.Om ? L._j.MIN : e;
      null == t && null != n.current && (n.current.style.width = ""), h.ZP.updatedUnsyncedSettings({
        expressionPickerWidth: t
      }), u(t)
    }, [n, o]), p = (0, g.Z)({
      initialElementDimension: f,
      maxDimension: o,
      minDimension: L.Om,
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

function Q(e) {
  var t, n, a, s;
  let {
    positionTargetRef: l,
    hideGifFavorites: h,
    includeCreateEmojiButton: P,
    onSelectGIF: F,
    onSelectEmoji: V,
    onSelectSticker: H,
    onSelectSound: Y,
    channel: W,
    type: K,
    position: Q,
    align: J,
    positionLayerClassName: $,
    closeOnModalOuterClick: ee = false,
    parentModalKey: et
  } = e, en = i.useRef(null), er = i.useRef(false), ei = i.useRef(null), ea = i.useRef(null), {
    drawerWidth: eo,
    handleDrawerResizeHandleMouseDown: es
  } = X({
    positionContainerRef: en,
    drawerRef: ea,
    orientation: "left" === J ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT
  }), el = (0, x.Iu)(e => e.activeView), ec = (0, C.fQ)(W), {
    renderWindow: eu,
    windowDispatch: ed
  } = i.useContext(T.ZP), ef = (0, d.e7)([N.Z], () => !N.Z.hasLoadedStickerPacks), e_ = (0, S.V2)({
    location: "expression_picker"
  }), ep = (0, d.e7)([w.Z], () => w.Z.isOpen()), eh = null != et, em = (0, _.Jw)(null != et ? et : ""), eg = (null == (t = K.gifs) ? true : t.allowSending) && !c.tq && null != F, eE = (null == (n = K.stickers) ? true : n.allowSending) && null != H, eb = !(null == (a = K.expressionPicker) ? true : a.onlyEmojis) && (eg || eE), ey = (0, O.qt)({
    location: "expression_picker",
    autoTrackExposure: true,
    disable: !eb || el !== L.X1.EMOJI
  }), eO = null == W.guild_id ? ey.isEntrypointEnabledInDMs : ey.isEntrypointEnabled, ev = i.useCallback(e => {
    var t;
    if (!eh && (0, _.$s)() || eh && !(em && ee) || ep || e.defaultPrevented) return;
    let {
      target: n
    } = e;
    if ((0, u.kK)(n) && null != n.closest("." + L.CT)) return;
    for (;
      (0, u.kK)(n);) {
      if (n === ea.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
      n = n.parentNode
    }(0, x._Q)();
    let r = null == (t = (0, u.uB)(e)) ? true : t.activeElement;
    (null == r || "BODY" === r.tagName) && D.S.dispatchToLastSubscribed(M.CkL.TEXTAREA_FOCUS)
  }, [ee, em, eh, ep]), eI = i.useCallback(() => {
    (0, x._Q)()
  }, []);
  i.useLayoutEffect(() => {
    let e = () => {
      el === L.X1.GIF && (0, x._Q)()
    };
    return eu.addEventListener("mousedown", ev), eu.addEventListener("contextmenu", ev), ed.subscribe(M.CkL.POPOUT_CLOSE, eI), D.S.subscribe(M.CkL.CLOSE_GIF_PICKER, e), () => {
      eu.removeEventListener("mousedown", ev), eu.removeEventListener("contextmenu", ev), ed.unsubscribe(M.CkL.POPOUT_CLOSE, eI), D.S.unsubscribe(M.CkL.CLOSE_GIF_PICKER, e)
    }
  }, [el, eI, ev, eu, ed]), (0, p.Tbt)(en);
  let [eT, eS] = (0, b.US)(e_ ? [f.z.SOUNDMOJI_BADGE] : [], true, false), [eA, eC] = i.useState(false);
  i.useEffect(() => {
    el === L.X1.SOUNDBOARD && eC(true)
  }, [el]), i.useEffect(() => () => {
    eA && eS(k.L.TAKE_ACTION)
  }, [eA, eS]), i.useEffect(() => {
    (0, x.ql)("")
  }, []), i.useEffect(() => {
    (!eh && (0, _.$s)() || eh && !em) && (0, x._Q)()
  }, [em, eh]), i.useEffect(() => {
    if (null != ea.current && !er.current) {
      var e, t, n, r;
      el === L.X1.EMOJI ? (null == ei || null == (e = ei.current) ? true : e.onPickerOpen) != null && (null == ei || null == (t = ei.current) || t.onPickerOpen(), er.current = true) : el === L.X1.STICKER ? (null == ei || null == (n = ei.current) ? true : n.onPickerOpen) == null || ef || (null == ei || null == (r = ei.current) || r.onPickerOpen(), er.current = true) : (E.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_OPENED, {
        width: ea.current.offsetWidth,
        tab: el,
        badged: false
      }), er.current = true)
    }
  });
  let eN = i.useCallback((e, t) => null == Y ? true : Y(e, "emoji_picker", t), [Y]),
    eR = i.useCallback((e, t) => null == Y ? true : Y(e, "soundboard_picker", t), [Y]),
    eP = (null == (s = K.soundmoji) ? true : s.allowSending) === true && null != Y,
    ew = "left" === J ? "right" : "left",
    eD = null != $ ? $ : "left" === J ? Z.positionLayerDefaultAlignLeft : Z.positionLayerDefaultAlignRight;
  return (0, r.jsx)(m.Z, {
    section: M.jXE.EXPRESSION_PICKER,
    children: (0, r.jsx)(I.W5, {
      className: o()(Z.positionLayer, eD),
      targetRef: l,
      position: Q,
      align: J,
      spacing: 8,
      autoInvert: true,
      clickTrap: true,
      children: e => {
        var t;
        let {
          isPositioned: n
        } = e;
        return (0, r.jsx)("section", {
          className: o()(Z.positionContainer, {
            [Z.positionContainerOnlyEmoji]: !eb
          }),
          ref: en,
          role: "dialog",
          "aria-label": B.intl.string(B.t.Utlwvi),
          children: n ? (0, r.jsxs)("div", {
            className: Z.drawerSizingWrapper,
            style: {
              width: null == eo ? true : eo,
              [J]: 0
            },
            ref: ea,
            children: [(0, r.jsx)("div", {
              className: Z.resizeHandle,
              onMouseDown: es,
              style: {
                [ew]: false
              }
            }), (0, r.jsxs)("div", {
              className: Z.contentWrapper,
              children: [eb ? (0, r.jsx)("nav", {
                className: Z.nav,
                children: (0, r.jsxs)("div", {
                  className: Z.navList,
                  role: "tablist",
                  "aria-label": B.intl.string(B.t["2j4Vgd"]),
                  children: [eg ? (0, r.jsx)(q, {
                    id: j._3,
                    "aria-controls": j.vO,
                    "aria-selected": el === L.X1.GIF,
                    isActive: el === L.X1.GIF,
                    viewType: L.X1.GIF,
                    children: B.intl.string(B.t["6gUTsS"])
                  }) : null, eE ? (0, r.jsx)(q, {
                    id: G.ED,
                    "aria-controls": G.nZ,
                    "aria-selected": el === L.X1.STICKER,
                    isActive: el === L.X1.STICKER,
                    autoFocus: !ec,
                    viewType: L.X1.STICKER,
                    children: (0, r.jsx)("div", {
                      className: Z.stickersNavItem,
                      children: B.intl.string(B.t.nf1s3u)
                    })
                  }) : null, (0, r.jsx)(q, {
                    id: j.td,
                    "aria-controls": j.cZ,
                    "aria-selected": el === L.X1.EMOJI,
                    isActive: el === L.X1.EMOJI,
                    viewType: L.X1.EMOJI,
                    children: B.intl.string(B.t.Xu3wE3)
                  }), e_ && eP && (0, r.jsx)(q, {
                    id: j.Hr,
                    "aria-controls": j.gV,
                    "aria-selected": el === L.X1.SOUNDBOARD,
                    isActive: el === L.X1.SOUNDBOARD,
                    viewType: L.X1.SOUNDBOARD,
                    children: (0, r.jsxs)("div", {
                      className: Z.soundmojiLabelContainer,
                      children: [B.intl.string(B.t.EHlAMc), null != eT && (0, r.jsx)(p.IGR, {
                        text: B.intl.string(B.t.y2b7CA)
                      })]
                    })
                  })]
                })
              }) : null, el === L.X1.STICKER && eE ? (0, r.jsx)(R.Z, {
                isLoading: ef,
                channel: W,
                containerWidth: eo,
                onSelectSticker: H,
                closePopout: eI,
                ref: e => {
                  ei.current = e
                }
              }) : null, el === L.X1.GIF && eg ? (0, r.jsx)(v.Z, {
                onSelectGIF: F,
                hideFavorites: h,
                persistSearch: true
              }) : null, el === L.X1.EMOJI ? (0, r.jsx)(y.Z, {
                hasTabWrapper: true,
                containerContext: eb ? y.v.TABS_EXPRESSION_PICKER : y.v.NO_TABS_EXPRESSION_PICKER,
                persistSearch: true,
                channel: W,
                containerWidth: eo,
                includeCreateEmojiButton: P,
                emojiSize: null != eo && eo < z ? j.Su.MEDIUM : j.Su.LARGE,
                pickerIntention: U.Hz.CHAT,
                closePopout: eI,
                onSelectEmoji: V,
                onSelectSoundmoji: eN,
                ref: e => {
                  ei.current = e
                },
                shouldShowSoundmojiInEmojiPicker: (null == (t = K.soundmoji) ? true : t.allowSending) === true,
                showAddEmojiButton: eO
              }) : null, el === L.X1.SOUNDBOARD ? (0, r.jsx)("div", {
                className: Z.soundboardContainer,
                children: (0, r.jsx)(A.Z, {
                  guildId: W.guild_id,
                  channel: W,
                  containerWidth: eo,
                  onClose: eI,
                  onSelect: eR,
                  analyticsSource: "expression-picker",
                  renderHeader: e => (0, r.jsx)("div", {
                    className: Z.soundboardHeader,
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
let J = Chunk647438.memo(Q)