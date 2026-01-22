/** Chunk was on web.js **/
/** chunk id: 834755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => $
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
  X = Chunk64700.memo(function(e) {
    let {
      isActive: t,
      className: n,
      viewType: i,
      autoFocus: a = false,
      "aria-controls": o
    } = e, l = K(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
    return (0, r.jsx)(_.DUT, W(H({
      role: "tab",
      autoFocus: a,
      "aria-controls": t ? o : true
    }, l), {
      onClick: () => {
        E.Ay.trackWithMetadata(j.HAw.EXPRESSION_PICKER_TAB_CLICKED, {
          tab: i,
          badged: false
        }), (0, x.U)(i)
      },
      "aria-current": t ? "page" : true,
      className: s()(n, F.oi, F.pc, {
        [F.Mv]: t
      })
    }))
  }),
  Z = e => {
    let {
      positionContainerRef: t,
      drawerRef: n,
      orientation: r
    } = e, a = (0, d.bG)([w.Ay], () => w.Ay.expressionPickerWidth), [s, o] = i.useState(window.innerWidth), [c, u] = i.useState(null != a ? a : L.wp.MIN), f = i.useMemo(() => {
      switch (c) {
        case L.wp.MIN:
          return 498;
        case L.wp.MAX:
          return null;
        default:
          return c
      }
    }, [c]), p = i.useCallback(e => {
      let t = e >= s ? L.wp.MAX : e <= 498 ? L.wp.MIN : e;
      null == t && null != n.current && (n.current.style.width = ""), h.Ay.updatedUnsyncedSettings({
        expressionPickerWidth: t
      }), u(t)
    }, [n, s]), _ = (0, g.A)({
      initialElementDimension: f,
      maxDimension: s,
      minDimension: 498,
      resizableDomNodeRef: n,
      onElementResize: p,
      orientation: r
    });
    return i.useEffect(() => {
      let e = l().debounce(() => {
        null != t.current && o(t.current.offsetWidth)
      }, 500);
      return window.addEventListener("resize", e), () => {
        window.removeEventListener("resize", e)
      }
    }, [t]), i.useLayoutEffect(() => {
      null != t.current && o(t.current.offsetWidth)
    }, [t]), {
      drawerWidth: f,
      handleDrawerResizeHandleMouseDown: i.useCallback(e => {
        e.stopPropagation(), null != t.current && o(t.current.offsetWidth), _(e)
      }, [t, _])
    }
  };

function Q(e) {
  var t, n, a, o;
  let {
    positionTargetRef: l,
    hideGifFavorites: h,
    onSelectGIF: w,
    onSelectEmoji: B,
    onSelectSticker: H,
    onSelectSound: Y,
    channel: W,
    type: K,
    position: z,
    align: Q,
    positionLayerClassName: $,
    closeOnModalOuterClick: J = false,
    parentModalKey: ee
  } = e, et = i.useRef(null), en = i.useRef(false), er = i.useRef(null), ei = i.useRef(null), {
    drawerWidth: ea,
    handleDrawerResizeHandleMouseDown: es
  } = Z({
    positionContainerRef: et,
    drawerRef: ei,
    orientation: "left" === Q ? g.R.HORIZONTAL_RIGHT : g.R.HORIZONTAL_LEFT
  }), eo = (0, x.RQ)(e => e.activeView), el = (0, C.ZO)(W), {
    renderWindow: ec,
    windowDispatch: eu
  } = i.useContext(S.Ay), ed = (0, d.bG)([N.A], () => !N.A.hasLoadedStickerPacks), ef = (0, I.tj)({
    location: "expression_picker"
  }), ep = (0, d.bG)([P.A], () => P.A.isOpen()), e_ = null != ee, eh = (0, p.useIsModalAtTop)(null != ee ? ee : ""), {
    reorderExpressionPickerTabs: em
  } = b.C.useConfig({
    location: "expression_picker"
  }), eg = (null == (t = K.gifs) ? true : t.allowSending) && !c.Fr && null != w, eE = (null == (n = K.stickers) ? true : n.allowSending) && null != H, eb = !(null == (a = K.expressionPicker) ? true : a.onlyEmojis) && (eg || eE), ey = i.useCallback(e => {
    var t;
    if (!e_ && (0, p.hasAnyModalOpen)() || e_ && !(eh && J) || ep || e.defaultPrevented) return;
    let {
      target: n
    } = e;
    if ((0, u.vq)(n) && null != n.closest("." + L.VQ)) return;
    for (;
      (0, u.vq)(n);) {
      if (n === ei.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
      n = n.parentNode
    }(0, x.v8)();
    let r = null == (t = (0, u.BF)(e)) ? true : t.activeElement;
    (null == r || "BODY" === r.tagName) && D._.dispatchToLastSubscribed(j.jej.TEXTAREA_FOCUS)
  }, [J, eh, e_, ep]), eO = i.useCallback(() => {
    (0, x.v8)()
  }, []);
  i.useLayoutEffect(() => {
    let e = () => {
      eo === L.kx.GIF && (0, x.v8)()
    };
    return ec.addEventListener("mousedown", ey), ec.addEventListener("contextmenu", ey), eu.subscribe(j.jej.POPOUT_CLOSE, eO), D._.subscribe(j.jej.CLOSE_GIF_PICKER, e), () => {
      ec.removeEventListener("mousedown", ey), ec.removeEventListener("contextmenu", ey), eu.unsubscribe(j.jej.POPOUT_CLOSE, eO), D._.unsubscribe(j.jej.CLOSE_GIF_PICKER, e)
    }
  }, [eo, eO, ey, ec, eu]), (0, _.tjt)(et);
  let [eA, ev] = (0, y.kn)(ef ? [f.M.SOUNDMOJI_BADGE] : [], true, false), [eS, eI] = i.useState(false);
  i.useEffect(() => {
    eo === L.kx.SOUNDBOARD && eI(true)
  }, [eo]), i.useEffect(() => () => {
    eS && ev(M.i.TAKE_ACTION)
  }, [eS, ev]), i.useEffect(() => {
    (0, x.Ri)("")
  }, []), i.useEffect(() => {
    (!e_ && (0, p.hasAnyModalOpen)() || e_ && !eh) && (0, x.v8)()
  }, [eh, e_]), i.useEffect(() => {
    if (null != ei.current && !en.current) {
      var e, t, n, r;
      eo === L.kx.EMOJI ? (null == er || null == (e = er.current) ? true : e.onPickerOpen) != null && (null == er || null == (t = er.current) || t.onPickerOpen(), en.current = true) : eo === L.kx.STICKER ? (null == er || null == (n = er.current) ? true : n.onPickerOpen) == null || ed || (null == er || null == (r = er.current) || r.onPickerOpen(), en.current = true) : (E.Ay.trackWithMetadata(j.HAw.EXPRESSION_PICKER_OPENED, {
        width: ei.current.offsetWidth,
        tab: eo,
        badged: false
      }), en.current = true)
    }
  });
  let eT = i.useCallback((e, t) => null == Y ? true : Y(e, "emoji_picker", t), [Y]),
    eC = i.useCallback((e, t) => null == Y ? true : Y(e, "soundboard_picker", t), [Y]),
    eN = (null == (o = K.soundmoji) ? true : o.allowSending) === true && null != Y,
    eR = "left" === Q ? "right" : "left",
    ew = null != $ ? $ : "left" === Q ? F.sj : F.Jg,
    eP = eg ? (0, r.jsx)(X, {
      id: k.g9,
      "aria-controls": k.ni,
      "aria-selected": eo === L.kx.GIF,
      isActive: eo === L.kx.GIF,
      viewType: L.kx.GIF,
      children: V.intl.string(V.t["6gUTsS"])
    }) : null,
    eD = eE ? (0, r.jsx)(X, {
      id: G.LD,
      "aria-controls": G.GX,
      "aria-selected": eo === L.kx.STICKER,
      isActive: eo === L.kx.STICKER,
      autoFocus: !el,
      viewType: L.kx.STICKER,
      children: (0, r.jsx)("div", {
        className: F.dG,
        children: V.intl.string(V.t.nf1s3u)
      })
    }) : null,
    ex = (0, r.jsx)(X, {
      id: k.k1,
      "aria-controls": k.Do,
      "aria-selected": eo === L.kx.EMOJI,
      isActive: eo === L.kx.EMOJI,
      viewType: L.kx.EMOJI,
      children: V.intl.string(V.t.Xu3wE3)
    });
  return (0, r.jsx)(m.A, {
    section: j.JJy.EXPRESSION_PICKER,
    children: (0, r.jsx)(v.nE, {
      className: s()(F.T8, ew),
      targetRef: l,
      position: z,
      align: Q,
      spacing: 8,
      autoInvert: true,
      clickTrap: true,
      children: e => {
        var t;
        let {
          isPositioned: n
        } = e;
        return (0, r.jsx)("section", {
          className: s()(F.V6, {
            [F.D0]: !eb
          }),
          ref: et,
          role: "dialog",
          "aria-label": V.intl.string(V.t.Utlwvi),
          children: n ? (0, r.jsxs)("div", {
            className: F.jP,
            style: {
              width: null == ea ? true : ea,
              [Q]: 0
            },
            ref: ei,
            children: [(0, r.jsx)("div", {
              className: F.Di,
              onMouseDown: es,
              style: {
                [eR]: false
              }
            }), (0, r.jsxs)("div", {
              className: F.FG,
              children: [eb ? (0, r.jsx)("nav", {
                className: F.C$,
                children: (0, r.jsxs)("div", {
                  className: F.CT,
                  role: "tablist",
                  "aria-label": V.intl.string(V.t["2j4Vgd"]),
                  children: [em ? (0, r.jsxs)(r.Fragment, {
                    children: [ex, eP, eD]
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [eP, eD, ex]
                  }), ef && eN && (0, r.jsx)(X, {
                    id: k.N6,
                    "aria-controls": k.AA,
                    "aria-selected": eo === L.kx.SOUNDBOARD,
                    isActive: eo === L.kx.SOUNDBOARD,
                    viewType: L.kx.SOUNDBOARD,
                    children: (0, r.jsxs)("div", {
                      className: F.sd,
                      children: [V.intl.string(V.t.EHlAMc), null != eA && (0, r.jsx)(_.LpS, {
                        text: V.intl.string(V.t.y2b7CA)
                      })]
                    })
                  })]
                })
              }) : null, eo === L.kx.STICKER && eE ? (0, r.jsx)(R.A, {
                isLoading: ed,
                channel: W,
                containerWidth: ea,
                onSelectSticker: H,
                closePopout: eO,
                ref: e => {
                  er.current = e
                }
              }) : null, eo === L.kx.GIF && eg ? (0, r.jsx)(A.A, {
                onSelectGIF: w,
                hideFavorites: h,
                persistSearch: true
              }) : null, eo === L.kx.EMOJI ? (0, r.jsx)(O.A, {
                hasTabWrapper: true,
                containerContext: eb ? O.f.TABS_EXPRESSION_PICKER : O.f.NO_TABS_EXPRESSION_PICKER,
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
              }) : null, eo === L.kx.SOUNDBOARD ? (0, r.jsx)("div", {
                className: F.z,
                children: (0, r.jsx)(T.A, {
                  guildId: W.guild_id,
                  channel: W,
                  containerWidth: ea,
                  onClose: eO,
                  onSelect: eC,
                  analyticsSource: "expression-picker",
                  renderHeader: e => (0, r.jsx)("div", {
                    className: F.BG,
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
let $ = Chunk64700.memo(Q)