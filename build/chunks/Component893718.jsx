/** Chunk was on web.js **/
/** chunk id: 893718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O1: () => eC,
  Sg: () => eI,
  TE: () => ex,
  ZP: () => eZ,
  aT: () => ek,
  ae: () => eT,
  bL: () => eS,
  hJ: () => eN,
  iV: () => eL,
  jx: () => ew,
  oR: () => eD,
  qz: () => eR,
  vB: () => eU,
  x2: () => eP
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

function em(e) {
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

function eg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eE(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eg(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eb = 450,
  ey = 250;

function eO(e) {
  return e !== V.Z.getChannelId()
}

function ev(e, t) {
  var n, r;
  return null != (r = e && (null == (n = t.submit) ? true : n.clearOnSubmit)) && r
}

function eS(e, t, a, o, s) {
  let [l, c] = i.useState(false), u = i.useCallback((i, d, f, p, m) => {
    var g, E, b;
    if (l) return;
    c(true);
    let y = null != (E = null == (g = M.Z.getStickerPreview(s, t.drafts.type)) ? true : g.map(e => e.id)) ? E : [],
      O = null != (b = Y.Z.getUploads(s, t.drafts.type)) ? b : [];
    if (null == d && !p && !m && (0, R.CB)(O, s)) {
      c(false), (0, _.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("57804"), n.e("90508"), n.e("87646"), n.e("96551")]).then(n.bind(n, 273602));
        return t => (0, r.jsx)(e, eE(em({}, t), {
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
      command: d,
      commandOptionValues: f,
      isGif: p
    }).then(e => {
      var n, r, i;
      let {
        shouldClear: l,
        shouldRefocus: u
      } = e, d = ev(l, t), f = null != a.current;
      d && (eO(s) ? h.Z.saveDraft(s, "", t.drafts.type) : f && (null == (r = a.current) || r.clearValue(), null == (i = o.current) || i.hide())), f && (c(false), (0, P._Q)(), u && (null == (n = a.current) || n.focus()))
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

function eI(e, t, n) {
  return i.useCallback(r => {
    var i, a;
    t === $.Ie.CREATE_FORUM_POST || t === $.Ie.CREATE_ANNOUNCEMENT_POST ? null == (a = n.current) || a.insertGIF(r) : e(r.url, true, true, true), (0, P._Q)(), null == (i = n.current) || i.focus()
  }, [n, e, t])
}

function eT(e) {
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

function eC(e) {
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
    n || (o === $.Ie.CREATE_ANNOUNCEMENT_POST || (0, U.Hc)(i, r, a, o.drafts.type) ? ((0, en._H)({
      sticker: e,
      stickerSelectLocation: i,
      isReplacement: null != M.Z.getStickerPreview(a, o.drafts.type),
      analyticsLocations: l
    }), (0, k.eu)(a, e, o.drafts.type)) : (s({
      value: "",
      uploads: true,
      stickers: [e.id]
    }), null == (u = t.current) || u.clearValue()), (0, P._Q)(), null == (c = t.current) || c.focus())
  }, [n, r, a, t, l, s, o])
}

function eA(e, t) {
  return i.useCallback((n, r, i) => {
    let a = e.current;
    null != n && null != a && (K.default.track(ed.rMx.SOUNDMOJI_SELECT, {
      channel_id: t.id,
      guild_id: t.guild_id,
      sound_guild_id: n.guildId,
      sound_id: n.soundId,
      source: r
    }), a.insertSound(n)), i && (0, P._Q)(), null == a || a.focus()
  }, [e, t.id, t.guild_id])
}

function eN(e, t, n) {
  let r = i.useCallback(() => {
      t || (0, P.RO)(ep.X1.EMOJI, e, n)
    }, [t, e, n]),
    a = i.useCallback(() => {
      var r;
      !t && (null == (r = e.gifs) ? true : r.allowSending) && (0, P.RO)(ep.X1.GIF, e, n)
    }, [t, e, n]),
    o = i.useCallback(() => {
      var r;
      !t && (null == (r = e.stickers) ? true : r.allowSending) && (0, P.RO)(ep.X1.STICKER, e, n)
    }, [t, e, n]);
  (0, z.yp)({
    event: ed.CkL.TOGGLE_EMOJI_POPOUT,
    handler: r
  }), (0, z.yp)({
    event: ed.CkL.TOGGLE_GIF_PICKER,
    handler: a
  }), (0, z.yp)({
    event: ed.CkL.TOGGLE_STICKER_PICKER,
    handler: o
  })
}

function eP(e, t, n) {
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
  let e = i.useRef(null),
    t = i.useCallback(() => {
      var t;
      null == (t = e.current) || t.onMaybeShowAutocomplete()
    }, []),
    n = i.useCallback(() => {
      var t;
      null == (t = e.current) || t.onHideAutocomplete()
    }, []);
  return {
    autocompleteRef: e,
    handleMaybeShowAutocomplete: t,
    handleHideAutocomplete: n
  }
}

function eR(e) {
  let t = i.useRef(null);
  if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
  return null == e ? t : e
}

function eD(e) {
  let [t, n] = i.useState(0);
  return {
    editorHeight: t,
    handleResize: i.useCallback(t => {
      n(null != t ? t : 0), null == e || e(t)
    }, [e])
  }
}

function ex(e, t, n, r) {
  let i = e.getGuildId(),
    a = (0, p.e7)([D.Z], () => null != i && D.Z.isLurking(i), [i]),
    o = (0, p.e7)([F.ZP, W.default], () => {
      var e, t;
      let n = W.default.getCurrentUser();
      return null != (t = null != i && null != n ? null == (e = F.ZP.getMember(i, n.id)) ? true : e.isPending : null) && t
    }),
    s = (0, p.cj)([B.Z], () => {
      var i, a;
      let s = e.isPrivate(),
        l = B.Z.computePermissions(e),
        c = f.e$(l, ed.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, ed.Plq.CREATE_PRIVATE_THREADS),
        u = (!(null == (i = t.permissions) ? true : i.requireCreateTherads) || c) && (!(null == (a = t.permissions) ? true : a.requireSendMessages) || f.e$(l, ed.Plq.SEND_MESSAGES)),
        d = u && f.e$(l, ed.Plq.ATTACH_FILES),
        p = null != n,
        _ = (0, G.xl)(e);
      return {
        disabled: r || o || !s && !u || _,
        canAttachFiles: true === t.attachments && (s || o || d || p),
        canCreateThreads: c,
        canEveryoneSendMessages: q.Uu(ed.Plq.SEND_MESSAGES, e)
      }
    }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
  return em({
    isLurking: a,
    isPendingMember: o
  }, s)
}

function eL(e, t, n) {
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

function ej(e, t, n) {
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

function eM(e, t) {
  let [n, r] = i.useState({
    selectedAutocompleteInputType: null,
    selectedAutocompleteInputError: false
  }), a = i.useCallback(() => {
    var e, n, i, a;
    let o, s = null == (e = t.current) ? true : e.getSlateEditor();
    null != s && (o = null == (n = ec.bN.getSelectedParentOfType(s, A.un)) ? true : n[0]), r({
      selectedAutocompleteInputType: null != (i = null == o ? true : o.type) ? i : null,
      selectedAutocompleteInputError: null != (a = null == o ? true : o.error) && a
    })
  }, [t]);
  return i.useEffect(() => (e.on("selection-changed", a), e.on("submit-failure", a), a(), () => {
    e.off("selection-changed", a), e.on("submit-failure", a)
  }), [a, e]), n
}
let ek = e => {
    let {
      enabled: t,
      onlyExactMatch: n
    } = (0, x.zM)("ChannelTextAreaContainer", {
      autoTrackExposure: false
    }), [r, a] = i.useState(true), o = i.useRef(null);
    return i.useLayoutEffect(() => {
      t && !n && (clearTimeout(o.current), a(false), o.current = setTimeout(() => {
        a(true)
      }, ey))
    }, [n, t, e]), r
  },
  eU = (e, t) => {
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

function eG(e, t) {
  var n, a, s, l, u;
  let {
    textValue: f,
    richValue: h,
    className: O,
    innerClassName: A,
    editorClassName: P,
    id: R,
    required: D,
    disabled: x,
    placeholder: M,
    accessibilityLabel: k,
    channel: U,
    type: G,
    focused: F,
    error: B,
    renderAttachButton: V,
    renderApplicationCommandIcon: Y,
    renderButtons: W,
    pendingReply: K,
    onChange: z,
    onResize: q,
    onBlur: en,
    onFocus: ec,
    onKeyDown: ep,
    onSubmit: eh,
    promptToUpload: em,
    highlighted: eg,
    canMentionRoles: eE,
    canMentionChannels: ey,
    maxCharacterCount: eO,
    showRemainingCharsAfterCount: ev,
    allowNewLines: eG = true,
    characterCountClassName: eZ,
    "aria-describedby": eF,
    "aria-labelledby": eB,
    setEditorRef: eV,
    autoCompletePosition: eH,
    children: eY,
    disableThemedBackground: eW = false,
    emojiPickerCloseOnModalOuterClick: eK,
    parentModalKey: ez,
    pendingScheduledMessage: eq,
    showValueWhenDisabled: eQ = false
  } = e;
  c()(null != G, "chat input type must be set");
  let {
    analyticsLocations: eX
  } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA), eJ = eR(t), e$ = i.useRef(null), e0 = i.useRef(null), e1 = i.useRef(null), e3 = i.useRef(null), e2 = i.useRef(null);
  null == eV || eV(e1.current);
  let e4 = (0, y.Z)(U),
    [e5, e8] = i.useState(!e4);
  (0, m.PM)(eJ, e => {
    let {
      width: t
    } = e;
    return e8(!e4 && (null == t || t > eb))
  });
  let {
    activeCommand: e6,
    activeCommandSection: e7
  } = (0, p.cj)([S.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = G.commands) ? true : e.enabled) ? S.Z.getActiveCommand(U.id) : null,
      activeCommandSection: (null == (t = G.commands) ? true : t.enabled) ? S.Z.getActiveCommandSection(U.id) : null
    }
  }), {
    isLurking: e9,
    isPendingMember: te,
    disabled: tt,
    canAttachFiles: tn,
    canCreateThreads: tr,
    canEveryoneSendMessages: ti
  } = ex(U, G, e6, x), ta = G.toolbarType === $.OW.STATIC, to = !Z.dN.useSetting() && !(0, Q.isAndroidWeb)() && null != window.ResizeObserver, ts = !to || !(null == (n = G.commands) ? true : n.enabled) || !F || f !== ef.GI, tl = (0, L.Z)(), {
    fontSize: tc
  } = (0, p.cj)([g.Z], () => ({
    fontSize: g.Z.fontSize
  })), tu = (0, p.e7)([H.Z], () => H.Z.isEnabled());
  eN(G, tt, U.id);
  let {
    eventEmitter: td,
    handleEditorSelectionChanged: tf
  } = eP(e1, f, h), tp = i.useRef(f);
  tp.current = f;
  let t_ = i.useCallback((e, t, n) => {
      var r;
      t === ef.GI && "" === tp.current && (null == (r = G.commands) ? true : r.enabled) && td.emit("command-sentinel-typed"), null == z || z(e, t, n)
    }, [z, null == (a = G.commands) ? true : a.enabled, td]),
    {
      submitting: th,
      submit: tm,
      handleSubmit: tg
    } = eS(eh, G, e1, e2, U.id),
    {
      autocompleteRef: tE,
      handleMaybeShowAutocomplete: tb,
      handleHideAutocomplete: ty
    } = ew(),
    tO = eI(tm, G, e1),
    tv = eT(e1),
    tS = eC({
      editorRef: e1,
      disabled: tt,
      textValue: f,
      channelId: U.id,
      chatInputType: G,
      submit: eh
    }),
    tI = eA(e1, U),
    tT = i.useCallback(() => {
      var e;
      return null == e2 || null == (e = e2.current) ? true : e.hide()
    }, []),
    {
      editorHeight: tC,
      handleResize: tA
    } = eD(q),
    {
      handleTab: tN,
      handleEnter: tP,
      handleMoveSelection: tw
    } = ej(tE, e$, ts),
    {
      expressionPickerView: tR,
      shouldHideExpressionPicker: tD,
      handleOuterClick: tx
    } = eL(G, e1, U.id),
    {
      selectedAutocompleteInputType: tL,
      selectedAutocompleteInputError: tj
    } = eM(td, e1),
    tM = ek(f),
    {
      currentAutocompleteType: tk,
      handleAutocompleteVisibilityChange: tU
    } = eU(G, U.id),
    {
      moveAppsEntrypointToOverflow: tG
    } = J.n.useConfig({
      location: "ChannelAppLauncher"
    }),
    tZ = (0, T.Z)({
      type: G,
      channelId: U.id
    }),
    tF = i.useCallback(() => {
      td.emit("submit-failure")
    }, [td]);
  (0, X.S)(td, U.guild_id, U.id);
  let tB = null != K,
    tV = tt && !((e9 || te) && ti) || th && (null == (s = G.submit) ? true : s.useDisabledStylesOnSubmit),
    tH = null;
  null != e6 ? tH = null == Y ? true : Y(e6, e7, e_.attachButton) : (!tt || tr) && (tH = null == V ? true : V(tB, e_.attachButton));
  let tY = to && null != h && !tt && G.showCharacterCount && null == e6,
    tW = to && !__OVERLAY__ && null != h && null == e6 && G.toolbarType !== $.OW.NONE && !tt,
    tK = (0, er.c)({
      channel: U,
      type: G,
      activeCommand: e6,
      pendingReply: K,
      pendingScheduledMessage: eq,
      selectedAutocompleteInputType: tL,
      selectedAutocompleteInputError: tj
    }),
    tz = 0 === f.trim().length,
    tq = G.layout === $.gy.INLINE,
    tQ = G.layout === $.gy.FLUSH,
    tX = (0, r.jsx)("div", {
      ref: e0,
      className: e_.hiddenAppLauncherAnchor
    }),
    tJ = tZ ? (0, r.jsx)(v.Z, {
      align: tG && G !== $.Ie.SIDEBAR ? "left" : "right",
      positionTargetRef: e0,
      channel: U
    }) : null,
    t$ = null != W ? W() : (0, r.jsx)(ei.Z, {
      type: G,
      disabled: tt,
      channel: U,
      handleSubmit: tg,
      isEmpty: tz,
      showAllButtons: e5
    }),
    t0 = tY ? (0, r.jsx)(es.Z, {
      type: G,
      textValue: f,
      className: eZ,
      maxCharacterCount: eO,
      showRemainingCharsAfterCount: ev
    }) : null;
  return (0, r.jsx)(N.f6, {
    value: td,
    children: (0, r.jsxs)(b.Gt, {
      value: eX,
      children: [tW && ta ? (0, r.jsx)(eu.Z, {
        editorRef: e1,
        options: G.markdown,
        channel: U
      }) : tW ? (0, r.jsx)(el.Z, {
        ref: e2,
        editorRef: e1,
        containerRef: e3,
        options: G.markdown
      }) : null, (0, r.jsxs)("div", {
        ref: eJ,
        className: o()(O, {
          [e_.channelTextArea]: true,
          [e_.channelTextAreaDisabled]: tV,
          [e_.highlighted]: eg,
          [e_.textAreaMobileThemed]: d.tq,
          [e_.inlineContainer]: tq,
          [e_.flushContainer]: tQ,
          [e_.error]: null != B
        }),
        children: [tq || tQ ? null : (0, r.jsx)(er.Z, {
          bars: tK
        }), (0, r.jsxs)("div", {
          ref: e3,
          onScroll: tT,
          className: o()(A, {
            [e_.scrollableContainer]: true,
            [e_.themedBackground]: !eW,
            [e_.hasStackedBar]: tK.stacked.length > 0
          }),
          children: [(0, r.jsx)(et.Z, {
            channelId: U.id,
            chatInputType: G
          }), G.hideAttachmentArea ? null : (0, r.jsx)(eo.Z, {
            channelId: U.id,
            type: G,
            canAttachFiles: tn
          }), (0, r.jsxs)("div", {
            className: o()(e_.inner, {
              [e_.innerDisabled]: tV,
              [e_.sansAttachButton]: G !== $.Ie.EDIT && (null != tH || tV && null == tH || e9),
              [e_.sansAttachButtonCreateThread]: G === $.Ie.THREAD_CREATION,
              [e_.sansAttachButtonCreatePost]: G === $.Ie.CREATE_FORUM_POST || G === $.Ie.FORWARD_MESSAGE_INPUT,
              [e_.sansAttachButtonUserProfileReply]: G === $.Ie.USER_PROFILE_REPLY
            }),
            onMouseDown: tx,
            children: [tJ, tG && tX, tH, (0, r.jsx)(_.tEY, {
              ringTarget: eJ,
              ringClassName: e_.focusRing,
              children: (0, r.jsx)(ee.Z, {
                ref: e1,
                id: R,
                focused: F,
                useSlate: to,
                textValue: f,
                richValue: h,
                disabled: tt,
                placeholder: M,
                required: D,
                accessibilityLabel: k,
                isPreviewing: (e9 || te) && ti,
                channel: U,
                type: G,
                canPasteFiles: tn,
                uploadPromptCharacterCount: ed.en1,
                maxCharacterCount: null != eO ? eO : tl,
                allowNewLines: eG,
                "aria-describedby": eF,
                onChange: t_,
                onResize: tA,
                onBlur: en,
                onFocus: ec,
                onKeyDown: ep,
                onSubmit: tm,
                onSubmitFailure: tF,
                onTab: tN,
                onEnter: tP,
                onMoveSelection: tw,
                onSelectionChanged: tf,
                onMaybeShowAutocomplete: tb,
                onHideAutocomplete: ty,
                promptToUpload: em,
                fontSize: tc,
                spellcheckEnabled: tu,
                canOnlyUseTextCommands: tB,
                isEditorIdle: tM,
                currentAutocompleteType: tk,
                className: o()({
                  [e_.textAreaThreadCreation]: G === $.Ie.THREAD_CREATION,
                  [e_.profileBioInput]: G === $.Ie.PROFILE_BIO_INPUT,
                  [e_.overlayInlineReply]: G === $.Ie.OVERLAY_INLINE_REPLY
                }, P),
                "aria-labelledby": eB,
                showValueWhenDisabled: eQ
              })
            }), t$, !tG && tX]
          })]
        }), (0, r.jsx)(ea.P, {
          channel: U,
          type: G,
          pendingScheduledMessage: eq
        }), ts ? null : (0, r.jsx)(I.Z, {
          ref: e$,
          channel: U,
          canOnlyUseTextCommands: tB
        }), (0, r.jsx)(C.Z, {
          ref: tE,
          channel: U,
          canMentionRoles: eE,
          canMentionChannels: ey,
          useNewSlashCommands: to,
          canOnlyUseTextCommands: tB,
          canSendStickers: null == (l = G.stickers) ? true : l.allowSending,
          canSendSoundmoji: null == (u = G.soundmoji) ? true : u.allowSending,
          textValue: f,
          focused: F,
          isEditorIdle: tM,
          expressionPickerView: tR,
          type: G,
          targetRef: eJ,
          editorRef: e1,
          onSendMessage: tm,
          onSendSticker: tS,
          onVisibilityChange: tU,
          editorScrollerRef: e3,
          editorHeight: tC,
          barsHeight: 40 * tK.floating.length,
          setValue: (e, t) => null == t_ ? true : t_(null, e, t),
          position: eH
        }), (0, r.jsx)(j.Z, {
          textValue: f,
          editorHeight: tC,
          channelId: U.id
        }), t0, eY]
      }), (0, r.jsx)(_.pdY, {
        error: B
      }), tD ? null : (0, r.jsx)(w.Z, {
        positionTargetRef: eJ,
        type: G,
        onSelectGIF: tO,
        onSelectEmoji: tv,
        onSelectSticker: tS,
        onSelectSound: tI,
        channel: U,
        closeOnModalOuterClick: eK,
        parentModalKey: ez,
        position: "top",
        align: "right",
        positionLayerClassName: e_.expressionPickerPositionLayer
      })]
    })
  })
}
let eZ = Chunk473749.memo(Chunk473749.forwardRef(eG))