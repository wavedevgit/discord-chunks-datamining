/** Chunk was on web.js **/
/** chunk id: 893718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O1: () => eA,
  Sg: () => eT,
  TE: () => eL,
  ZP: () => eF,
  aT: () => eU,
  ae: () => eC,
  bL: () => eI,
  hJ: () => eP,
  iV: () => ej,
  jx: () => ew,
  oR: () => ex,
  qz: () => eD,
  vB: () => eG,
  x2: () => eR
}), require("./388685.js"), require("./415506.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk836560 = require("./836560.js"),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk55160 = require("./55160.js"),
  Chunk873546 = require("./873546.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430742 = require("./430742.js"),
  Chunk393238 = require("./393238.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk989573 = require("./989573.js"),
  Chunk541099 = require("./541099.js"),
  Chunk663924 = require("./663924.jsx"),
  Chunk998698 = require("./998698.js"),
  Chunk271668 = require("./271668.jsx"),
  Chunk61356 = require("./61356.js"),
  Chunk326133 = require("./326133.jsx"),
  Chunk106824 = require("./106824.js"),
  Chunk570220 = require("./570220.js"),
  Chunk28546 = require("./28546.js"),
  Chunk805680 = require("./805680.jsx"),
  Chunk368844 = require("./368844.js"),
  Chunk41776 = require("./41776.js"),
  Chunk657871 = require("./657871.js"),
  Chunk849522 = require("./849522.js"),
  Chunk780291 = require("./780291.jsx"),
  Chunk328908 = require("./328908.js"),
  Chunk913663 = require("./913663.js"),
  Chunk268350 = require("./268350.js"),
  Chunk378233 = require("./378233.js"),
  Chunk665906 = require("./665906.js"),
  Chunk695346 = require("./695346.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk398327 = require("./398327.js"),
  Chunk117530 = require("./117530.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk700785 = require("./700785.js"),
  Chunk358085 = require("./358085.js"),
  Chunk746877 = require("./746877.js"),
  Chunk713913 = require("./713913.js"),
  Chunk541716 = require("./541716.js"),
  Chunk667829 = require("./667829.jsx"),
  Chunk562267 = require("./562267.jsx"),
  Chunk376918 = require("./376918.js"),
  Chunk760196 = require("./760196.jsx"),
  Chunk258696 = require("./258696.jsx"),
  Chunk175592 = require("./175592.jsx"),
  Chunk303628 = require("./303628.jsx"),
  Chunk472243 = require("./472243.jsx"),
  Chunk872635 = require("./872635.jsx"),
  Chunk887490 = require("./887490.js"),
  Chunk676108 = require("./676108.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk761652 = require("./761652.js"),
  Chunk957825 = require("./957825.js"),
  Chunk72775 = require("./72775.js");

function eh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eh(e, t, n[t])
    })
  }
  return e
}

function eE(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eb(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eE(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ey = 450,
  eO = 250;

function ev(e) {
  return e !== H.Z.getChannelId()
}

function eS(e, t) {
  var n, r;
  return null != (r = e && (null == (n = t.submit) ? true : n.clearOnSubmit)) && r
}

function eI(e, t, a, o, s) {
  let [l, c] = i.useState(false), u = i.useCallback((i, d, f, p, h) => {
    var g, E, b;
    if (l) return;
    c(true);
    let y = null != (E = null == (g = k.Z.getStickerPreview(s, t.drafts.type)) ? true : g.map(e => e.id)) ? E : [],
      O = null != (b = W.Z.getUploads(s, t.drafts.type)) ? b : [],
      v = (0, M.q5)(s);
    if (null == d && !p && !h && (0, w.CB)(O, s)) {
      c(false), (0, _.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("57804"), n.e("90508"), n.e("22173"), n.e("95546"), n.e("27381")]).then(n.bind(n, 273602));
        return t => (0, r.jsx)(e, eb(eg({}, t), {
          threadId: s,
          attachments: O,
          sendMessage: () => u(i, true, true, true, true)
        }))
      });
      return
    }
    e({
      value: i,
      uploads: O,
      stickers: y,
      confettiPotionEmoji: v,
      command: d,
      commandOptionValues: f,
      isGif: p
    }).then(e => {
      var n, r, i;
      let {
        shouldClear: l,
        shouldRefocus: u
      } = e, d = eS(l, t), f = null != a.current;
      d && (ev(s) ? m.Z.saveDraft(s, "", t.drafts.type) : f && (null == (r = a.current) || r.clearValue(), null == (i = o.current) || i.hide())), f && (c(false), (0, P._Q)(), u && (null == (n = a.current) || n.focus()))
    })
  }, [a, o, e, l, t, s]);
  return {
    submitting: l,
    submit: u,
    handleSubmit: i.useCallback(e => {
      var t;
      null == a || null == (t = a.current) || t.submit(e)
    }, [a])
  }
}

function eT(e, t, n) {
  return i.useCallback(r => {
    var i, a;
    t === ee.Ie.CREATE_FORUM_POST || t === ee.Ie.CREATE_ANNOUNCEMENT_POST ? null == (a = n.current) || a.insertGIF(r) : e(r.url, true, true, true), (0, P._Q)(), null == (i = n.current) || i.focus()
  }, [n, e, t])
}

function eC(e) {
  return i.useCallback(t => {
    let {
      emoji: n,
      willClose: r
    } = t, i = e.current;
    null != n && null != i && i.insertEmoji({
      emoji: n,
      willClose: r
    }), r && (0, P._Q)()
  }, [e])
}

function eA(e) {
  let {
    editorRef: t,
    disabled: n,
    textValue: r,
    channelId: a,
    chatInputType: o,
    submit: s
  } = e, {
    analyticsLocations: l
  } = (0, b.ZP)();
  return i.useCallback((e, i) => {
    var c, u;
    n || (o === ee.Ie.CREATE_ANNOUNCEMENT_POST || (0, G.Hc)(i, r, a, o.drafts.type) ? ((0, er._H)({
      sticker: e,
      stickerSelectLocation: i,
      isReplacement: null != k.Z.getStickerPreview(a, o.drafts.type),
      analyticsLocations: l
    }), (0, U.eu)(a, e, o.drafts.type)) : (s({
      value: "",
      uploads: true,
      stickers: [e.id]
    }), null == (u = t.current) || u.clearValue()), (0, P._Q)(), null == (c = t.current) || c.focus())
  }, [n, r, a, t, l, s, o])
}

function eN(e, t) {
  return i.useCallback((n, r, i) => {
    let a = e.current;
    null != n && null != a && (z.default.track(ef.rMx.SOUNDMOJI_SELECT, {
      channel_id: t.id,
      guild_id: t.guild_id,
      sound_guild_id: n.guildId,
      sound_id: n.soundId,
      source: r
    }), a.insertSound(n)), i && (0, P._Q)(), null == a || a.focus()
  }, [e, t.id, t.guild_id])
}

function eP(e, t, n) {
  let r = i.useCallback(() => {
      t || (0, P.RO)(e_.X1.EMOJI, e, n)
    }, [t, e, n]),
    a = i.useCallback(() => {
      var r;
      !t && (null == (r = e.gifs) ? true : r.allowSending) && (0, P.RO)(e_.X1.GIF, e, n)
    }, [t, e, n]),
    o = i.useCallback(() => {
      var r;
      !t && (null == (r = e.stickers) ? true : r.allowSending) && (0, P.RO)(e_.X1.STICKER, e, n)
    }, [t, e, n]);
  (0, q.yp)({
    event: ef.CkL.TOGGLE_EMOJI_POPOUT,
    handler: r
  }), (0, q.yp)({
    event: ef.CkL.TOGGLE_GIF_PICKER,
    handler: a
  }), (0, q.yp)({
    event: ef.CkL.TOGGLE_STICKER_PICKER,
    handler: o
  })
}

function eR(e, t, n) {
  let [r] = i.useState(() => new s.EventEmitter);
  i.useEffect(() => {
    r.emit("text-changed", t, n)
  }, [t, n, r]);
  let a = t => {
    null != e.current && r.emit("selection-changed", t)
  };
  return {
    eventEmitter: r,
    handleEditorSelectionChanged: a
  }
}

function ew() {
  let e = Chunk473749.useRef(null),
    t = Chunk473749.useCallback(() => {
      var t;
      null == (t = module.current) || exports.onMaybeShowAutocomplete()
    }, []),
    n = Chunk473749.useCallback(() => {
      var t;
      null == (t = module.current) || exports.onHideAutocomplete()
    }, []);
  return {
    autocompleteRef: module,
    handleMaybeShowAutocomplete: exports,
    handleHideAutocomplete: require
  }
}

function eD(e) {
  let t = i.useRef(null);
  if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
  return null == e ? t : e
}

function ex(e) {
  let [t, n] = i.useState(0);
  return {
    editorHeight: t,
    handleResize: i.useCallback(t => {
      n(null != t ? t : 0), null == e || e(t)
    }, [e])
  }
}

function eL(e, t, n, r) {
  let i = e.getGuildId(),
    a = (0, p.e7)([D.Z], () => null != i && D.Z.isLurking(i), [i]),
    o = (0, p.e7)([B.ZP, K.default], () => {
      var e, t;
      let n = K.default.getCurrentUser();
      return null != (t = null != i && null != n ? null == (e = B.ZP.getMember(i, n.id)) ? true : e.isPending : null) && t
    }),
    s = (0, p.cj)([V.Z], () => {
      var i, a;
      let s = e.isPrivate(),
        l = V.Z.computePermissions(e),
        c = f.e$(l, ef.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, ef.Plq.CREATE_PRIVATE_THREADS),
        u = (!(null == (i = t.permissions) ? true : i.requireCreateTherads) || c) && (!(null == (a = t.permissions) ? true : a.requireSendMessages) || f.e$(l, ef.Plq.SEND_MESSAGES)),
        d = u && f.e$(l, ef.Plq.ATTACH_FILES),
        p = null != n,
        _ = (0, Z.xl)(e);
      return {
        disabled: r || o || !s && !u || _,
        canAttachFiles: true === t.attachments && (s || o || d || p),
        canCreateThreads: c,
        canEveryoneSendMessages: Q.Uu(ef.Plq.SEND_MESSAGES, e)
      }
    }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
  return eg({
    isLurking: a,
    isPendingMember: o
  }, s)
}

function ej(e, t, n) {
  let [r, a, o] = (0, P.Iu)(e => [e.activeView, e.activeViewType, e.activeChannelId], u.X), s = (0, p.e7)([O.Z], () => O.Z.shouldShowPopup() && O.Z.activeViewType() === e && O.Z.activeChannelId() === n);
  i.useEffect(() => () => {
    (0, P._Q)(e, n)
  }, [e, n]);
  let l = i.useCallback(() => {
      var e;
      null != r || s || null == (e = t.current) || e.handleOuterClick()
    }, [r, s, t]),
    c = null == r || null == a || a !== e || o !== n;
  return {
    expressionPickerView: r,
    shouldHideExpressionPicker: c,
    handleOuterClick: l
  }
}

function eM(e, t, n) {
  let r = i.useCallback(() => {
    var r, i;
    return !!(!n && (null == (r = t.current) ? true : r.onTabOrEnter(false))) || (null == (i = e.current) ? true : i.onTabOrEnter(false)) || false
  }, [n, t, e]);
  return {
    handleTab: r,
    handleEnter: i.useCallback(() => {
      var r, i;
      return !!(!n && (null == (r = t.current) ? true : r.onTabOrEnter(true))) || (null == (i = e.current) ? true : i.onTabOrEnter(true)) || false
    }, [n, t, e]),
    handleMoveSelection: i.useCallback(r => {
      var i, a;
      return !!(!n && (null == (i = t.current) ? true : i.onMoveSelection(r))) || (null == (a = e.current) ? true : a.onMoveSelection(r)) || false
    }, [n, t, e])
  }
}

function ek(e, t) {
  let [n, r] = i.useState({
    selectedAutocompleteInputType: null,
    selectedAutocompleteInputError: false
  }), a = i.useCallback(() => {
    var e, n, i, a;
    let o, s = null == (e = t.current) ? true : e.getSlateEditor();
    null != s && (o = null == (n = eu.bN.getSelectedParentOfType(s, A.un)) ? true : n[0]), r({
      selectedAutocompleteInputType: null != (i = null == o ? true : o.type) ? i : null,
      selectedAutocompleteInputError: null != (a = null == o ? true : o.error) && a
    })
  }, [t]);
  return i.useEffect(() => (e.on("selection-changed", a), e.on("submit-failure", a), a(), () => {
    e.off("selection-changed", a), e.on("submit-failure", a)
  }), [a, e]), n
}
let eU = e => {
    let {
      enabled: t,
      onlyExactMatch: n
    } = (0, x.zM)("ChannelTextAreaContainer", {
      autoTrackExposure: false
    }), [r, a] = i.useState(true), o = i.useRef(null);
    return i.useLayoutEffect(() => {
      t && !n && (clearTimeout(o.current), a(false), o.current = setTimeout(() => {
        a(true)
      }, eO))
    }, [n, t, e]), r
  },
  eG = (e, t) => {
    let {
      enabled: n
    } = (0, x.zM)("ChannelTextAreaContainer", {
      autoTrackExposure: false
    }), [r, a] = i.useState(null);
    return {
      currentAutocompleteType: r,
      handleAutocompleteVisibilityChange: i.useCallback((r, i) => {
        n && a(i), r && (0, P._Q)(e, t)
      }, [n, e, t])
    }
  };

function eZ(e, t) {
  var n, a, s, l, u;
  let {
    textValue: f,
    richValue: m,
    className: O,
    innerClassName: A,
    editorClassName: P,
    id: w,
    required: D,
    disabled: x,
    placeholder: M,
    accessibilityLabel: k,
    channel: U,
    type: G,
    focused: Z,
    error: B,
    renderAttachButton: V,
    renderApplicationCommandIcon: H,
    pendingReply: W,
    onChange: K,
    onResize: z,
    onBlur: q,
    onFocus: Q,
    onKeyDown: er,
    onSubmit: eu,
    promptToUpload: e_,
    highlighted: eh,
    canMentionRoles: eg,
    canMentionChannels: eE,
    maxCharacterCount: eb,
    showRemainingCharsAfterCount: eO,
    allowNewLines: ev = true,
    characterCountClassName: eS,
    "aria-describedby": eZ,
    "aria-labelledby": eF,
    setEditorRef: eB,
    autoCompletePosition: eV,
    children: eH,
    disableThemedBackground: eY = false,
    emojiPickerCloseOnModalOuterClick: eW,
    parentModalKey: eK,
    pendingScheduledMessage: ez,
    showValueWhenDisabled: eq = false
  } = e;
  c()(null != G, "chat input type must be set");
  let {
    analyticsLocations: eQ
  } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA), eX = eD(t), eJ = i.useRef(null), e$ = i.useRef(null), e0 = i.useRef(null), e1 = i.useRef(null), e3 = i.useRef(null);
  null == eB || eB(e0.current);
  let e2 = (0, y.Z)(U),
    [e4, e5] = i.useState(!e2);
  (0, h.PM)(eX, e => {
    let {
      width: t
    } = e;
    return e5(!e2 && (null == t || t > ey))
  });
  let {
    activeCommand: e8,
    activeCommandSection: e6
  } = (0, p.cj)([S.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = G.commands) ? true : e.enabled) ? S.Z.getActiveCommand(U.id) : null,
      activeCommandSection: (null == (t = G.commands) ? true : t.enabled) ? S.Z.getActiveCommandSection(U.id) : null
    }
  }), {
    isLurking: e7,
    isPendingMember: e9,
    disabled: te,
    canAttachFiles: tt,
    canCreateThreads: tn,
    canEveryoneSendMessages: tr
  } = eL(U, G, e8, x), ti = G.toolbarType === ee.OW.STATIC, ta = !F.dN.useSetting() && !(0, X.isAndroidWeb)() && null != window.ResizeObserver, to = !ta || !(null == (n = G.commands) ? true : n.enabled) || !Z || f !== ep.GI, ts = (0, L.Z)(), {
    fontSize: tl
  } = (0, p.cj)([g.Z], () => ({
    fontSize: g.Z.fontSize
  })), tc = (0, p.e7)([Y.Z], () => Y.Z.isEnabled());
  eP(G, te, U.id);
  let {
    eventEmitter: tu,
    handleEditorSelectionChanged: td
  } = eR(e0, f, m), tf = i.useRef(f);
  tf.current = f;
  let tp = i.useCallback((e, t, n) => {
      var r;
      t === ep.GI && "" === tf.current && (null == (r = G.commands) ? true : r.enabled) && tu.emit("command-sentinel-typed"), null == K || K(e, t, n)
    }, [K, null == (a = G.commands) ? true : a.enabled, tu]),
    {
      submitting: t_,
      submit: tm,
      handleSubmit: th
    } = eI(eu, G, e0, e3, U.id),
    {
      autocompleteRef: tg,
      handleMaybeShowAutocomplete: tE,
      handleHideAutocomplete: tb
    } = ew(),
    ty = eT(tm, G, e0),
    tO = eC(e0),
    tv = eA({
      editorRef: e0,
      disabled: te,
      textValue: f,
      channelId: U.id,
      chatInputType: G,
      submit: eu
    }),
    tS = eN(e0, U),
    tI = i.useCallback(() => {
      var e;
      return null == e3 || null == (e = e3.current) ? true : e.hide()
    }, []),
    {
      editorHeight: tT,
      handleResize: tC
    } = ex(z),
    {
      handleTab: tA,
      handleEnter: tN,
      handleMoveSelection: tP
    } = eM(tg, eJ, to),
    {
      expressionPickerView: tR,
      shouldHideExpressionPicker: tw,
      handleOuterClick: tD
    } = ej(G, e0, U.id),
    {
      selectedAutocompleteInputType: tx,
      selectedAutocompleteInputError: tL
    } = ek(tu, e0),
    tj = eU(f),
    {
      currentAutocompleteType: tM,
      handleAutocompleteVisibilityChange: tk
    } = eG(G, U.id),
    {
      moveAppsEntrypointToOverflow: tU
    } = $.n.useConfig({
      location: "ChannelAppLauncher"
    }),
    tG = (0, T.Z)({
      type: G,
      channelId: U.id
    }),
    tZ = i.useCallback(() => {
      tu.emit("submit-failure")
    }, [tu]);
  (0, J.S)(tu, U.guild_id, U.id);
  let tF = null != W,
    tB = te && !((e7 || e9) && tr) || t_ && (null == (s = G.submit) ? true : s.useDisabledStylesOnSubmit),
    tV = null;
  null != e8 ? tV = null == H ? true : H(e8, e6, em.attachButton) : (!te || tn) && (tV = null == V ? true : V(tF, em.attachButton));
  let tH = ta && null != m && !te && G.showCharacterCount && null == e8,
    tY = ta && !__OVERLAY__ && null != m && null == e8 && G.toolbarType !== ee.OW.NONE && !te,
    tW = (0, ei.c)({
      channel: U,
      type: G,
      activeCommand: e8,
      pendingReply: W,
      pendingScheduledMessage: ez,
      selectedAutocompleteInputType: tx,
      selectedAutocompleteInputError: tL
    }),
    tK = 0 === f.trim().length,
    tz = G.layout === ee.gy.INLINE,
    tq = G.layout === ee.gy.FLUSH,
    tQ = (0, r.jsx)("div", {
      ref: e$,
      className: em.hiddenAppLauncherAnchor
    }),
    tX = tG ? (0, r.jsx)(v.Z, {
      align: tU && G !== ee.Ie.SIDEBAR ? "left" : "right",
      positionTargetRef: e$,
      channel: U
    }) : null,
    tJ = (0, r.jsx)(ea.Z, {
      type: G,
      disabled: te,
      channel: U,
      handleSubmit: th,
      isEmpty: tK,
      showAllButtons: e4
    }),
    t$ = tH ? (0, r.jsx)(el.Z, {
      type: G,
      textValue: f,
      className: eS,
      maxCharacterCount: eb,
      showRemainingCharsAfterCount: eO
    }) : null;
  return (0, r.jsx)(N.f6, {
    value: tu,
    children: (0, r.jsxs)(b.Gt, {
      value: eQ,
      children: [tY && ti ? (0, r.jsx)(ed.Z, {
        editorRef: e0,
        options: G.markdown,
        channel: U
      }) : tY ? (0, r.jsx)(ec.Z, {
        ref: e3,
        editorRef: e0,
        containerRef: e1,
        options: G.markdown
      }) : null, (0, r.jsxs)("div", {
        ref: eX,
        className: o()(O, {
          [em.channelTextArea]: true,
          [em.channelTextAreaDisabled]: tB,
          [em.highlighted]: eh,
          [em.textAreaMobileThemed]: d.tq,
          [em.inlineContainer]: tz,
          [em.flushContainer]: tq,
          [em.error]: null != B
        }),
        children: [tz || tq ? null : (0, r.jsx)(ei.Z, {
          bars: tW
        }), (0, r.jsxs)("div", {
          ref: e1,
          onScroll: tI,
          className: o()(A, {
            [em.scrollableContainer]: true,
            [em.themedBackground]: !eY,
            [em.hasStackedBar]: tW.stacked.length > 0
          }),
          children: [(0, r.jsx)(en.Z, {
            channelId: U.id,
            chatInputType: G
          }), G.hideAttachmentArea ? null : (0, r.jsx)(es.Z, {
            channelId: U.id,
            type: G,
            canAttachFiles: tt
          }), (0, r.jsxs)("div", {
            className: o()(em.inner, {
              [em.innerDisabled]: tB,
              [em.sansAttachButton]: G !== ee.Ie.EDIT && (null != tV || tB && null == tV || e7),
              [em.sansAttachButtonCreateThread]: G === ee.Ie.THREAD_CREATION,
              [em.sansAttachButtonCreatePost]: G === ee.Ie.CREATE_FORUM_POST || G === ee.Ie.FORWARD_MESSAGE_INPUT,
              [em.sansAttachButtonUserProfileReply]: G === ee.Ie.USER_PROFILE_REPLY
            }),
            onMouseDown: tD,
            children: [tX, tU && tQ, tV, (0, r.jsx)(_.tEY, {
              ringTarget: eX,
              ringClassName: em.focusRing,
              children: (0, r.jsx)(et.Z, {
                ref: e0,
                id: w,
                focused: Z,
                useSlate: ta,
                textValue: f,
                richValue: m,
                disabled: te,
                placeholder: M,
                required: D,
                accessibilityLabel: k,
                isPreviewing: (e7 || e9) && tr,
                channel: U,
                type: G,
                canPasteFiles: tt,
                uploadPromptCharacterCount: ef.en1,
                maxCharacterCount: null != eb ? eb : ts,
                allowNewLines: ev,
                "aria-describedby": eZ,
                onChange: tp,
                onResize: tC,
                onBlur: q,
                onFocus: Q,
                onKeyDown: er,
                onSubmit: tm,
                onSubmitFailure: tZ,
                onTab: tA,
                onEnter: tN,
                onMoveSelection: tP,
                onSelectionChanged: td,
                onMaybeShowAutocomplete: tE,
                onHideAutocomplete: tb,
                promptToUpload: e_,
                fontSize: tl,
                spellcheckEnabled: tc,
                canOnlyUseTextCommands: tF,
                isEditorIdle: tj,
                currentAutocompleteType: tM,
                className: o()({
                  [em.textAreaThreadCreation]: G === ee.Ie.THREAD_CREATION,
                  [em.profileBioInput]: G === ee.Ie.PROFILE_BIO_INPUT,
                  [em.overlayInlineReply]: G === ee.Ie.OVERLAY_INLINE_REPLY
                }, P),
                "aria-labelledby": eF,
                showValueWhenDisabled: eq
              })
            }), tJ, !tU && tQ]
          })]
        }), (0, r.jsx)(eo.P, {
          channel: U,
          type: G,
          pendingScheduledMessage: ez
        }), to ? null : (0, r.jsx)(I.Z, {
          ref: eJ,
          channel: U,
          canOnlyUseTextCommands: tF
        }), (0, r.jsx)(C.Z, {
          ref: tg,
          channel: U,
          canMentionRoles: eg,
          canMentionChannels: eE,
          useNewSlashCommands: ta,
          canOnlyUseTextCommands: tF,
          canSendStickers: null == (l = G.stickers) ? true : l.allowSending,
          canSendSoundmoji: null == (u = G.soundmoji) ? true : u.allowSending,
          textValue: f,
          focused: Z,
          isEditorIdle: tj,
          expressionPickerView: tR,
          type: G,
          targetRef: eX,
          editorRef: e0,
          onSendMessage: tm,
          onSendSticker: tv,
          onVisibilityChange: tk,
          editorScrollerRef: e1,
          editorHeight: tT,
          barsHeight: 40 * tW.floating.length,
          setValue: (e, t) => null == tp ? true : tp(null, e, t),
          position: eV
        }), (0, r.jsx)(j.Z, {
          textValue: f,
          editorHeight: tT,
          channelId: U.id
        }), t$, eH]
      }), (0, r.jsx)(_.pdY, {
        error: B
      }), tw ? null : (0, r.jsx)(R.Z, {
        positionTargetRef: eX,
        type: G,
        onSelectGIF: ty,
        onSelectEmoji: tO,
        onSelectSticker: tv,
        onSelectSound: tS,
        channel: U,
        closeOnModalOuterClick: eW,
        parentModalKey: eK,
        position: "top",
        align: "right",
        positionLayerClassName: em.expressionPickerPositionLayer
      })]
    })
  })
}
let eF = Chunk473749.memo(Chunk473749.forwardRef(eZ))