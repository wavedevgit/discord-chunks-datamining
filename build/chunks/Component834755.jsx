/** Chunk was on web.js **/
/** chunk id: 834755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => J
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk607399 = require("./607399.js"),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk192308 = require("./192308.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk761929 = require("./761929.js"),
  Chunk58149 = require("./58149.js"),
  Chunk184761 = require("./184761.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk937773 = require("./937773.jsx"),
  Chunk855057 = require("./855057.jsx"),
  Chunk750506 = require("./750506.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk704591 = require("./704591.js"),
  Chunk989799 = require("./989799.jsx"),
  Chunk256449 = require("./256449.js"),
  Chunk679382 = require("./679382.js"),
  Chunk669201 = require("./669201.jsx"),
  Chunk964404 = require("./964404.js"),
  Chunk712687 = require("./712687.js"),
  Chunk203982 = require("./203982.js"),
  Chunk151271 = require("./151271.js"),
  Chunk698279 = require("./698279.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk732139 = require("./732139.js"),
  Chunk307731 = require("./307731.js"),
  Chunk823894 = require("./823894.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk228539 = require("./228539.js");

function B(e, t, n) {
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
      B(e, t, n[t])
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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = z(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let q = 498 + Chunk732139.as.MEDIUM,
  Z = Chunk64700.memo(function(e) {
    let {
      isActive: t,
      className: n,
      viewType: i,
      autoFocus: a = false,
      "aria-controls": s
    } = e, l = K(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
    return (0, r.jsx)(_.DUT, W(H({
      role: "tab",
      autoFocus: a,
      "aria-controls": t ? s : true
    }, l), {
      onClick: () => {
        E.Ay.trackWithMetadata(M.HAw.EXPRESSION_PICKER_TAB_CLICKED, {
          tab: i,
          badged: false
        }), (0, L.U)(i)
      },
      "aria-current": t ? "page" : true,
      className: o()(n, V.oi, V.pc, {
        [V.Mv]: t
      })
    }))
  }),
  Q = e => {
    let {
      positionContainerRef: t,
      drawerRef: n,
      orientation: r
    } = e, a = (0, d.bG)([R.Ay], () => R.Ay.expressionPickerWidth), [o, s] = i.useState(window.innerWidth), [c, u] = i.useState(null != a ? a : x.wp.MIN), f = i.useMemo(() => {
      switch (c) {
        case x.wp.MIN:
          return 498;
        case x.wp.MAX:
          return null;
        default:
          return c
      }
    }, [c]), p = i.useCallback(e => {
      let t = e >= o ? x.wp.MAX : e <= 498 ? x.wp.MIN : e;
      null == t && null != n.current && (n.current.style.width = ""), h.Ay.updatedUnsyncedSettings({
        expressionPickerWidth: t
      }), u(t)
    }, [n, o]), _ = (0, g.A)({
      initialElementDimension: f,
      maxDimension: o,
      minDimension: 498,
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
    onSelectGIF: R,
    onSelectEmoji: B,
    onSelectSticker: H,
    onSelectSound: Y,
    channel: W,
    type: K,
    position: z,
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
    orientation: "left" === X ? g.R.HORIZONTAL_RIGHT : g.R.HORIZONTAL_LEFT
  }), es = (0, L.RQ)(e => e.activeView), el = (0, C.ZO)(W), {
    renderWindow: ec,
    windowDispatch: eu
  } = i.useContext(I.Ay), ed = (0, d.bG)([N.A], () => !N.A.hasLoadedStickerPacks), ef = (0, S.tj)({
    location: "expression_picker"
  }), ep = (0, d.bG)([P.A], () => P.A.isOpen()), e_ = null != ee, eh = (0, p.useIsModalAtTop)(null != ee ? ee : ""), {
    reorderExpressionPickerTabs: em
  } = y.C.useConfig({
    location: "expression_picker"
  }), eg = (null == (t = K.gifs) ? true : t.allowSending) && !c.Fr && null != R, eE = (null == (n = K.stickers) ? true : n.allowSending) && null != H, ey = !(null == (a = K.expressionPicker) ? true : a.onlyEmojis) && (eg || eE), eb = i.useCallback(e => {
    var t;
    if (!e_ && (0, p.hasAnyModalOpen)() || e_ && !(eh && $) || ep || e.defaultPrevented) return;
    let {
      target: n
    } = e;
    if ((0, u.vq)(n) && null != n.closest("." + x.VQ)) return;
    for (;
      (0, u.vq)(n);) {
      if (n === ei.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
      n = n.parentNode
    }(0, L.v8)();
    let r = null == (t = (0, u.BF)(e)) ? true : t.activeElement;
    (null == r || "BODY" === r.tagName) && D._.dispatchToLastSubscribed(M.jej.TEXTAREA_FOCUS)
  }, [$, eh, e_, ep]), eO = i.useCallback(() => {
    (0, L.v8)()
  }, []);
  i.useLayoutEffect(() => {
    let e = () => {
      es === x.kx.GIF && (0, L.v8)()
    };
    return ec.addEventListener("mousedown", eb), ec.addEventListener("contextmenu", eb), eu.subscribe(M.jej.POPOUT_CLOSE, eO), D._.subscribe(M.jej.CLOSE_GIF_PICKER, e), () => {
      ec.removeEventListener("mousedown", eb), ec.removeEventListener("contextmenu", eb), eu.unsubscribe(M.jej.POPOUT_CLOSE, eO), D._.unsubscribe(M.jej.CLOSE_GIF_PICKER, e)
    }
  }, [es, eO, eb, ec, eu]), (0, _.tjt)(et);
  let [ev, eA] = (0, b.kn)(ef ? [f.M.SOUNDMOJI_BADGE] : [], true, false), [eI, eS] = i.useState(false);
  i.useEffect(() => {
    es === x.kx.SOUNDBOARD && eS(true)
  }, [es]), i.useEffect(() => () => {
    eI && eA(j.i.TAKE_ACTION)
  }, [eI, eA]), i.useEffect(() => {
    (0, L.Ri)("")
  }, []), i.useEffect(() => {
    (!e_ && (0, p.hasAnyModalOpen)() || e_ && !eh) && (0, L.v8)()
  }, [eh, e_]), i.useEffect(() => {
    if (null != ei.current && !en.current) {
      var e, t, n, r;
      es === x.kx.EMOJI ? (null == er || null == (e = er.current) ? true : e.onPickerOpen) != null && (null == er || null == (t = er.current) || t.onPickerOpen(), en.current = true) : es === x.kx.STICKER ? (null == er || null == (n = er.current) ? true : n.onPickerOpen) == null || ed || (null == er || null == (r = er.current) || r.onPickerOpen(), en.current = true) : (E.Ay.trackWithMetadata(M.HAw.EXPRESSION_PICKER_OPENED, {
        width: ei.current.offsetWidth,
        tab: es,
        badged: false
      }), en.current = true)
    }
  });
  let eT = i.useCallback((e, t) => null == Y ? true : Y(e, "emoji_picker", t), [Y]),
    eC = i.useCallback((e, t) => null == Y ? true : Y(e, "soundboard_picker", t), [Y]),
    eN = (null == (s = K.soundmoji) ? true : s.allowSending) === true && null != Y,
    ew = "left" === X ? "right" : "left",
    eR = null != J ? J : "left" === X ? V.sj : V.Jg,
    eP = eg ? (0, r.jsx)(Z, {
      id: k.g9,
      "aria-controls": k.ni,
      "aria-selected": es === x.kx.GIF,
      isActive: es === x.kx.GIF,
      viewType: x.kx.GIF,
      children: F.intl.string(F.t["6gUTsS"])
    }) : null,
    eD = eE ? (0, r.jsx)(Z, {
      id: G.LD,
      "aria-controls": G.GX,
      "aria-selected": es === x.kx.STICKER,
      isActive: es === x.kx.STICKER,
      autoFocus: !el,
      viewType: x.kx.STICKER,
      children: (0, r.jsx)("div", {
        className: V.dG,
        children: F.intl.string(F.t.nf1s3u)
      })
    }) : null,
    eL = (0, r.jsx)(Z, {
      id: k.k1,
      "aria-controls": k.Do,
      "aria-selected": es === x.kx.EMOJI,
      isActive: es === x.kx.EMOJI,
      viewType: x.kx.EMOJI,
      children: F.intl.string(F.t.Xu3wE3)
    });
  return (0, r.jsx)(m.A, {
    section: M.JJy.EXPRESSION_PICKER,
    children: (0, r.jsx)(A.nE, {
      className: o()(V.T8, eR),
      targetRef: l,
      position: z,
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
          className: o()(V.V6, {
            [V.D0]: !ey
          }),
          ref: et,
          role: "dialog",
          "aria-label": F.intl.string(F.t.Utlwvi),
          children: n ? (0, r.jsxs)("div", {
            className: V.jP,
            style: {
              width: null == ea ? true : ea,
              [X]: 0
            },
            ref: ei,
            children: [(0, r.jsx)("div", {
              className: V.Di,
              onMouseDown: eo,
              style: {
                [ew]: false
              }
            }), (0, r.jsxs)("div", {
              className: V.FG,
              children: [ey ? (0, r.jsx)("nav", {
                className: V.C$,
                children: (0, r.jsxs)("div", {
                  className: V.CT,
                  role: "tablist",
                  "aria-label": F.intl.string(F.t["2j4Vgd"]),
                  children: [em ? (0, r.jsxs)(r.Fragment, {
                    children: [eL, eP, eD]
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [eP, eD, eL]
                  }), ef && eN && (0, r.jsx)(Z, {
                    id: k.N6,
                    "aria-controls": k.AA,
                    "aria-selected": es === x.kx.SOUNDBOARD,
                    isActive: es === x.kx.SOUNDBOARD,
                    viewType: x.kx.SOUNDBOARD,
                    children: (0, r.jsxs)("div", {
                      className: V.sd,
                      children: [F.intl.string(F.t.EHlAMc), null != ev && (0, r.jsx)(_.LpS, {
                        text: F.intl.string(F.t.y2b7CA)
                      })]
                    })
                  })]
                })
              }) : null, es === x.kx.STICKER && eE ? (0, r.jsx)(w.A, {
                isLoading: ed,
                channel: W,
                containerWidth: ea,
                onSelectSticker: H,
                closePopout: eO,
                ref: e => {
                  er.current = e
                }
              }) : null, es === x.kx.GIF && eg ? (0, r.jsx)(v.A, {
                onSelectGIF: R,
                hideFavorites: h,
                persistSearch: true
              }) : null, es === x.kx.EMOJI ? (0, r.jsx)(O.A, {
                hasTabWrapper: true,
                containerContext: ey ? O.f.TABS_EXPRESSION_PICKER : O.f.NO_TABS_EXPRESSION_PICKER,
                persistSearch: true,
                channel: W,
                containerWidth: ea,
                emojiSize: null != ea && ea < q ? k.as.MEDIUM : k.as.LARGE,
                pickerIntention: U.b_.CHAT,
                closePopout: eO,
                onSelectEmoji: B,
                onSelectSoundmoji: eT,
                ref: e => {
                  er.current = e
                },
                shouldShowSoundmojiInEmojiPicker: (null == (t = K.soundmoji) ? true : t.allowSending) === true
              }) : null, es === x.kx.SOUNDBOARD ? (0, r.jsx)("div", {
                className: V.z,
                children: (0, r.jsx)(T.A, {
                  guildId: W.guild_id,
                  channel: W,
                  containerWidth: ea,
                  onClose: eO,
                  onSelect: eC,
                  analyticsSource: "expression-picker",
                  renderHeader: e => (0, r.jsx)("div", {
                    className: V.BG,
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
let J = Chunk64700.memo(X)