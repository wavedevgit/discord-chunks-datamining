/** Chunk was on web.js **/
/** chunk id: 805680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => J
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
  Chunk132775 = require("./132775.js");

function B(e, t, n) {
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
      B(e, t, n[t])
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
  q = Chunk473749.memo(function(e) {
    var {
      isActive: t,
      className: n,
      viewType: i,
      autoFocus: a = false,
      "aria-controls": s
    } = e, l = W(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
    return (0, r.jsx)(_.P3F, Y(V({
      role: "tab",
      autoFocus: a,
      "aria-controls": t ? s : true
    }, l), {
      onClick: () => {
        E.ZP.trackWithMetadata(j.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
          tab: i,
          badged: false
        }), (0, x.hr)(i)
      },
      "aria-current": t ? "page" : true,
      className: o()(n, F.navButton, F.navItem, {
        [F.navButtonActive]: t
      })
    }))
  }),
  Q = e => {
    let {
      positionContainerRef: t,
      drawerRef: n,
      orientation: r
    } = e, a = (0, d.e7)([w.ZP], () => w.ZP.expressionPickerWidth), [o, s] = i.useState(window.innerWidth), [c, u] = i.useState(null != a ? a : L._j.MIN), f = i.useMemo(() => {
      switch (c) {
        case L._j.MIN:
          return L.Om;
        case L._j.MAX:
          return null;
        default:
          return c
      }
    }, [c]), p = i.useCallback(e => {
      let t = e >= o ? L._j.MAX : e <= L.Om ? L._j.MIN : e;
      null == t && null != n.current && (n.current.style.width = ""), h.ZP.updatedUnsyncedSettings({
        expressionPickerWidth: t
      }), u(t)
    }, [n, o]), _ = (0, g.Z)({
      initialElementDimension: f,
      maxDimension: o,
      minDimension: L.Om,
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

function X(e) {
  var t, n, a, s;
  let {
    positionTargetRef: l,
    hideGifFavorites: h,
    onSelectGIF: w,
    onSelectEmoji: B,
    onSelectSticker: V,
    onSelectSound: H,
    channel: Y,
    type: W,
    position: K,
    align: X,
    positionLayerClassName: J,
    closeOnModalOuterClick: $ = false,
    parentModalKey: ee
  } = e, et = i.useRef(null), en = i.useRef(false), er = i.useRef(null), ei = i.useRef(null), {
    drawerWidth: ea,
    handleDrawerResizeHandleMouseDown: eo
  } = Q({
    positionContainerRef: et,
    drawerRef: ei,
    orientation: "left" === X ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT
  }), es = (0, x.Iu)(e => e.activeView), el = (0, A.fQ)(Y), {
    renderWindow: ec,
    windowDispatch: eu
  } = i.useContext(I.ZP), ed = (0, d.e7)([N.Z], () => !N.Z.hasLoadedStickerPacks), ef = (0, T.V2)({
    location: "expression_picker"
  }), ep = (0, d.e7)([R.Z], () => R.Z.isOpen()), e_ = null != ee, eh = (0, p.useIsModalAtTop)(null != ee ? ee : ""), {
    reorderExpressionPickerTabs: em
  } = b.n.useConfig({
    location: "expression_picker"
  }), eg = (null == (t = W.gifs) ? true : t.allowSending) && !c.tq && null != w, eE = (null == (n = W.stickers) ? true : n.allowSending) && null != V, eb = !(null == (a = W.expressionPicker) ? true : a.onlyEmojis) && (eg || eE), ey = i.useCallback(e => {
    var t;
    if (!e_ && (0, p.hasAnyModalOpen)() || e_ && !(eh && $) || ep || e.defaultPrevented) return;
    let {
      target: n
    } = e;
    if ((0, u.kK)(n) && null != n.closest("." + L.CT)) return;
    for (;
      (0, u.kK)(n);) {
      if (n === ei.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
      n = n.parentNode
    }(0, x._Q)();
    let r = null == (t = (0, u.uB)(e)) ? true : t.activeElement;
    (null == r || "BODY" === r.tagName) && D.S.dispatchToLastSubscribed(j.CkL.TEXTAREA_FOCUS)
  }, [$, eh, e_, ep]), eO = i.useCallback(() => {
    (0, x._Q)()
  }, []);
  i.useLayoutEffect(() => {
    let e = () => {
      es === L.X1.GIF && (0, x._Q)()
    };
    return ec.addEventListener("mousedown", ey), ec.addEventListener("contextmenu", ey), eu.subscribe(j.CkL.POPOUT_CLOSE, eO), D.S.subscribe(j.CkL.CLOSE_GIF_PICKER, e), () => {
      ec.removeEventListener("mousedown", ey), ec.removeEventListener("contextmenu", ey), eu.unsubscribe(j.CkL.POPOUT_CLOSE, eO), D.S.unsubscribe(j.CkL.CLOSE_GIF_PICKER, e)
    }
  }, [es, eO, ey, ec, eu]), (0, _.Tbt)(et);
  let [ev, eS] = (0, y.US)(ef ? [f.z.SOUNDMOJI_BADGE] : [], true, false), [eI, eT] = i.useState(false);
  i.useEffect(() => {
    es === L.X1.SOUNDBOARD && eT(true)
  }, [es]), i.useEffect(() => () => {
    eI && eS(M.L.TAKE_ACTION)
  }, [eI, eS]), i.useEffect(() => {
    (0, x.ql)("")
  }, []), i.useEffect(() => {
    (!e_ && (0, p.hasAnyModalOpen)() || e_ && !eh) && (0, x._Q)()
  }, [eh, e_]), i.useEffect(() => {
    if (null != ei.current && !en.current) {
      var e, t, n, r;
      es === L.X1.EMOJI ? (null == er || null == (e = er.current) ? true : e.onPickerOpen) != null && (null == er || null == (t = er.current) || t.onPickerOpen(), en.current = true) : es === L.X1.STICKER ? (null == er || null == (n = er.current) ? true : n.onPickerOpen) == null || ed || (null == er || null == (r = er.current) || r.onPickerOpen(), en.current = true) : (E.ZP.trackWithMetadata(j.rMx.EXPRESSION_PICKER_OPENED, {
        width: ei.current.offsetWidth,
        tab: es,
        badged: false
      }), en.current = true)
    }
  });
  let eC = i.useCallback((e, t) => null == H ? true : H(e, "emoji_picker", t), [H]),
    eA = i.useCallback((e, t) => null == H ? true : H(e, "soundboard_picker", t), [H]),
    eN = (null == (s = W.soundmoji) ? true : s.allowSending) === true && null != H,
    eP = "left" === X ? "right" : "left",
    ew = null != J ? J : "left" === X ? F.positionLayerDefaultAlignLeft : F.positionLayerDefaultAlignRight,
    eR = eg ? (0, r.jsx)(q, {
      id: k._3,
      "aria-controls": k.vO,
      "aria-selected": es === L.X1.GIF,
      isActive: es === L.X1.GIF,
      viewType: L.X1.GIF,
      children: Z.intl.string(Z.t["6gUTsS"])
    }) : null,
    eD = eE ? (0, r.jsx)(q, {
      id: G.ED,
      "aria-controls": G.nZ,
      "aria-selected": es === L.X1.STICKER,
      isActive: es === L.X1.STICKER,
      autoFocus: !el,
      viewType: L.X1.STICKER,
      children: (0, r.jsx)("div", {
        className: F.stickersNavItem,
        children: Z.intl.string(Z.t.nf1s3u)
      })
    }) : null,
    ex = (0, r.jsx)(q, {
      id: k.td,
      "aria-controls": k.cZ,
      "aria-selected": es === L.X1.EMOJI,
      isActive: es === L.X1.EMOJI,
      viewType: L.X1.EMOJI,
      children: Z.intl.string(Z.t.Xu3wE3)
    });
  return (0, r.jsx)(m.Z, {
    section: j.jXE.EXPRESSION_PICKER,
    children: (0, r.jsx)(S.W5, {
      className: o()(F.positionLayer, ew),
      targetRef: l,
      position: K,
      align: X,
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
            [F.positionContainerOnlyEmoji]: !eb
          }),
          ref: et,
          role: "dialog",
          "aria-label": Z.intl.string(Z.t.Utlwvi),
          children: n ? (0, r.jsxs)("div", {
            className: F.drawerSizingWrapper,
            style: {
              width: null == ea ? true : ea,
              [X]: 0
            },
            ref: ei,
            children: [(0, r.jsx)("div", {
              className: F.resizeHandle,
              onMouseDown: eo,
              style: {
                [eP]: false
              }
            }), (0, r.jsxs)("div", {
              className: F.contentWrapper,
              children: [eb ? (0, r.jsx)("nav", {
                className: F.nav,
                children: (0, r.jsxs)("div", {
                  className: F.navList,
                  role: "tablist",
                  "aria-label": Z.intl.string(Z.t["2j4Vgd"]),
                  children: [em ? (0, r.jsxs)(r.Fragment, {
                    children: [ex, eR, eD]
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [eR, eD, ex]
                  }), ef && eN && (0, r.jsx)(q, {
                    id: k.Hr,
                    "aria-controls": k.gV,
                    "aria-selected": es === L.X1.SOUNDBOARD,
                    isActive: es === L.X1.SOUNDBOARD,
                    viewType: L.X1.SOUNDBOARD,
                    children: (0, r.jsxs)("div", {
                      className: F.soundmojiLabelContainer,
                      children: [Z.intl.string(Z.t.EHlAMc), null != ev && (0, r.jsx)(_.IGR, {
                        text: Z.intl.string(Z.t.y2b7CA)
                      })]
                    })
                  })]
                })
              }) : null, es === L.X1.STICKER && eE ? (0, r.jsx)(P.Z, {
                isLoading: ed,
                channel: Y,
                containerWidth: ea,
                onSelectSticker: V,
                closePopout: eO,
                ref: e => {
                  er.current = e
                }
              }) : null, es === L.X1.GIF && eg ? (0, r.jsx)(v.Z, {
                onSelectGIF: w,
                hideFavorites: h,
                persistSearch: true
              }) : null, es === L.X1.EMOJI ? (0, r.jsx)(O.Z, {
                hasTabWrapper: true,
                containerContext: eb ? O.v.TABS_EXPRESSION_PICKER : O.v.NO_TABS_EXPRESSION_PICKER,
                persistSearch: true,
                channel: Y,
                containerWidth: ea,
                emojiSize: null != ea && ea < z ? k.Su.MEDIUM : k.Su.LARGE,
                pickerIntention: U.Hz.CHAT,
                closePopout: eO,
                onSelectEmoji: B,
                onSelectSoundmoji: eC,
                ref: e => {
                  er.current = e
                },
                shouldShowSoundmojiInEmojiPicker: (null == (t = W.soundmoji) ? true : t.allowSending) === true
              }) : null, es === L.X1.SOUNDBOARD ? (0, r.jsx)("div", {
                className: F.soundboardContainer,
                children: (0, r.jsx)(C.Z, {
                  guildId: Y.guild_id,
                  channel: Y,
                  containerWidth: ea,
                  onClose: eO,
                  onSelect: eA,
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
let J = Chunk473749.memo(X)