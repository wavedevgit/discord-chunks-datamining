/** Chunk was on web.js **/
/** chunk id: 893718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O1: () => eI,
  Sg: () => eO,
  TE: () => eP,
  ZP: () => ej,
  aT: () => eL,
  ae: () => ev,
  bL: () => ey,
  hJ: () => eS,
  iV: () => ew,
  jx: () => eC,
  oR: () => eR,
  qz: () => eN,
  vB: () => eM,
  x2: () => eA
}), require("./388685.js"), require("./415506.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk836560 = require("./836560.js"),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk574583 = require("./574583.js"),
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
  Chunk998698 = require("./998698.js"),
  Chunk271668 = require("./271668.jsx"),
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
  Chunk541716 = require("./541716.js"),
  Chunk667829 = require("./667829.jsx"),
  Chunk562267 = require("./562267.jsx"),
  Chunk376918 = require("./376918.js"),
  Chunk760196 = require("./760196.jsx"),
  Chunk258696 = require("./258696.jsx"),
  Chunk303628 = require("./303628.jsx"),
  Chunk472243 = require("./472243.jsx"),
  Chunk872635 = require("./872635.jsx"),
  Chunk887490 = require("./887490.js"),
  Chunk676108 = require("./676108.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk761652 = require("./761652.js"),
  Chunk957825 = require("./957825.js"),
  Chunk744114 = require("./744114.js");

function ef(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function e_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ef(e, t, n[t])
    })
  }
  return e
}

function ep(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eh(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ep(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let em = 450,
  eg = 250;

function eE(e) {
  return e !== F.Z.getChannelId()
}

function eb(e, t) {
  var n, r;
  return null != (r = e && (null == (n = t.submit) ? true : n.clearOnSubmit)) && r
}

function ey(e, t, a, o, s) {
  let [l, c] = i.useState(false), u = i.useCallback((i, d, f, _, m) => {
    var g, E, b;
    if (l) return;
    c(true);
    let y = null != (E = null == (g = M.Z.getStickerPreview(s, t.drafts.type)) ? true : g.map(e => e.id)) ? E : [],
      O = null != (b = H.Z.getUploads(s, t.drafts.type)) ? b : [],
      v = (0, L.q5)(s);
    if (null == d && !_ && !m && (0, R.CB)(O, s)) {
      c(false), (0, p.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("57804"), n.e("90508"), n.e("95546"), n.e("22173"), n.e("44576")]).then(n.bind(n, 273602));
        return t => (0, r.jsx)(e, eh(e_({}, t), {
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
      isGif: _
    }).then(e => {
      var n, r, i;
      let {
        shouldClear: l,
        shouldRefocus: u
      } = e, d = eb(l, t), f = null != a.current;
      d && (eE(s) ? h.Z.saveDraft(s, "", t.drafts.type) : f && (null == (r = a.current) || r.clearValue(), null == (i = o.current) || i.hide())), f && (c(false), (0, C._Q)(), u && (null == (n = a.current) || n.focus()))
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

function eO(e, t, n) {
  return i.useCallback(r => {
    var i, a;
    t === Q.Ie.CREATE_FORUM_POST || t === Q.Ie.CREATE_ANNOUNCEMENT_POST ? null == (a = n.current) || a.insertGIF(r) : e(r.url, true, true, true), (0, C._Q)(), null == (i = n.current) || i.focus()
  }, [n, e, t])
}

function ev(e) {
  return i.useCallback(t => {
    let {
      emoji: n,
      willClose: r
    } = t, i = e.current;
    null != n && null != i && i.insertEmoji({
      emoji: n,
      willClose: r
    }), r && (0, C._Q)()
  }, [e])
}

function eI(e) {
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
    n || (o === Q.Ie.CREATE_ANNOUNCEMENT_POST || (0, j.Hc)(i, r, a, o.drafts.type) ? ((0, ee._H)({
      sticker: e,
      stickerSelectLocation: i,
      isReplacement: null != M.Z.getStickerPreview(a, o.drafts.type),
      analyticsLocations: l
    }), (0, k.eu)(a, e, o.drafts.type)) : (s({
      value: "",
      uploads: true,
      stickers: [e.id]
    }), null == (u = t.current) || u.clearValue()), (0, C._Q)(), null == (c = t.current) || c.focus())
  }, [n, r, a, t, l, s, o])
}

function eT(e, t) {
  return i.useCallback((n, r, i) => {
    let a = e.current;
    null != n && null != a && (W.default.track(el.rMx.SOUNDMOJI_SELECT, {
      channel_id: t.id,
      guild_id: t.guild_id,
      sound_guild_id: n.guildId,
      sound_id: n.soundId,
      source: r
    }), a.insertSound(n)), i && (0, C._Q)(), null == a || a.focus()
  }, [e, t.id, t.guild_id])
}

function eS(e, t) {
  let n = i.useCallback(() => {
      t || (0, C.RO)(eu.X1.EMOJI, e)
    }, [t, e]),
    r = i.useCallback(() => {
      var n;
      !t && (null == (n = e.gifs) ? true : n.allowSending) && (0, C.RO)(eu.X1.GIF, e)
    }, [t, e]),
    a = i.useCallback(() => {
      var n;
      !t && (null == (n = e.stickers) ? true : n.allowSending) && (0, C.RO)(eu.X1.STICKER, e)
    }, [t, e]);
  (0, K.yp)({
    event: el.CkL.TOGGLE_EMOJI_POPOUT,
    handler: n
  }), (0, K.yp)({
    event: el.CkL.TOGGLE_GIF_PICKER,
    handler: r
  }), (0, K.yp)({
    event: el.CkL.TOGGLE_STICKER_PICKER,
    handler: a
  })
}

function eA(e, t, n) {
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

function eC() {
  let e = Chunk647438.useRef(null),
    t = Chunk647438.useCallback(() => {
      var t;
      null == (t = module.current) || exports.onMaybeShowAutocomplete()
    }, []),
    n = Chunk647438.useCallback(() => {
      var t;
      null == (t = module.current) || exports.onHideAutocomplete()
    }, []);
  return {
    autocompleteRef: module,
    handleMaybeShowAutocomplete: exports,
    handleHideAutocomplete: require
  }
}

function eN(e) {
  let t = i.useRef(null);
  if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
  return null == e ? t : e
}

function eR(e) {
  let [t, n] = i.useState(0);
  return {
    editorHeight: t,
    handleResize: i.useCallback(t => {
      n(null != t ? t : 0), null == e || e(t)
    }, [e])
  }
}

function eP(e, t, n, r) {
  let i = e.getGuildId(),
    a = (0, _.e7)([P.Z], () => null != i && P.Z.isLurking(i), [i]),
    o = (0, _.e7)([B.ZP, Y.default], () => {
      var e, t;
      let n = Y.default.getCurrentUser();
      return null != (t = null != i && null != n ? null == (e = B.ZP.getMember(i, n.id)) ? true : e.isPending : null) && t
    }),
    s = (0, _.cj)([Z.Z], () => {
      var i, a;
      let s = e.isPrivate(),
        l = Z.Z.computePermissions(e),
        c = f.e$(l, el.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, el.Plq.CREATE_PRIVATE_THREADS),
        u = (!(null == (i = t.permissions) ? true : i.requireCreateTherads) || c) && (!(null == (a = t.permissions) ? true : a.requireSendMessages) || f.e$(l, el.Plq.SEND_MESSAGES)),
        d = u && f.e$(l, el.Plq.ATTACH_FILES),
        _ = null != n,
        p = (0, U.xl)(e);
      return {
        disabled: r || o || !s && !u || p,
        canAttachFiles: true === t.attachments && (s || o || d || _),
        canCreateThreads: c,
        canEveryoneSendMessages: z.Uu(el.Plq.SEND_MESSAGES, e)
      }
    }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
  return e_({
    isLurking: a,
    isPendingMember: o
  }, s)
}

function ew(e, t) {
  let [n, r] = (0, C.Iu)(e => [e.activeView, e.activeViewType], u.X), a = (0, _.e7)([O.Z], () => O.Z.shouldShowPopup() && O.Z.activeViewType() === e);
  i.useEffect(() => () => {
    (0, C._Q)(e)
  }, [e]);
  let o = i.useCallback(() => {
      var e;
      null != n || a || null == (e = t.current) || e.handleOuterClick()
    }, [n, a, t]),
    s = null == n || null == r || r !== e;
  return {
    expressionPickerView: n,
    shouldHideExpressionPicker: s,
    handleOuterClick: o
  }
}

function eD(e, t, n) {
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

function ex(e, t) {
  let [n, r] = i.useState(null), a = i.useCallback(() => {
    var e, n;
    let i, a = null == (e = t.current) ? true : e.getSlateEditor();
    null != a && (i = null == (n = eo.bN.getSelectedParentOfType(a, S.un)) ? true : n[0].type), r(null != i ? i : null)
  }, [t]);
  return i.useEffect(() => (e.on("selection-changed", a), a(), () => {
    e.off("selection-changed", a)
  }), [a, e]), n
}
let eL = e => {
    let {
      enabled: t,
      onlyExactMatch: n
    } = (0, w.zM)("ChannelTextAreaContainer", {
      autoTrackExposure: false
    }), [r, a] = i.useState(true), o = i.useRef(null);
    return i.useLayoutEffect(() => {
      t && !n && (clearTimeout(o.current), a(false), o.current = setTimeout(() => {
        a(true)
      }, eg))
    }, [n, t, e]), r
  },
  eM = () => {
    let {
      enabled: e
    } = (0, Chunk657871.zM)("ChannelTextAreaContainer", {
      autoTrackExposure: false
    }), [t, n] = Chunk647438.useState(null);
    return {
      currentAutocompleteType: exports,
      handleAutocompleteVisibilityChange: Chunk647438.useCallback((t, r) => {
        e && n(r), t && (0, C._Q)()
      }, [module])
    }
  };

function ek(e, t) {
  var n, a, s, l, u;
  let {
    textValue: f,
    richValue: h,
    className: O,
    innerClassName: S,
    editorClassName: C,
    id: R,
    required: P,
    disabled: w,
    placeholder: L,
    accessibilityLabel: M,
    channel: k,
    type: j,
    focused: U,
    error: B,
    renderAttachButton: Z,
    renderApplicationCommandIcon: F,
    renderAppLauncherButton: H,
    pendingReply: Y,
    onChange: W,
    onResize: K,
    onBlur: z,
    onFocus: ee,
    onKeyDown: eo,
    onSubmit: eu,
    promptToUpload: ef,
    highlighted: e_,
    canMentionRoles: ep,
    canMentionChannels: eh,
    maxCharacterCount: eg,
    showRemainingCharsAfterCount: eE,
    allowNewLines: eb = true,
    characterCountClassName: ek,
    "aria-describedby": ej,
    "aria-labelledby": eU,
    setEditorRef: eG,
    autoCompletePosition: eB,
    children: eZ,
    disableThemedBackground: eF = false,
    emojiPickerCloseOnModalOuterClick: eV,
    parentModalKey: eH,
    onCommandSentinelTyped: eY,
    pendingScheduledMessage: eW,
    showValueWhenDisabled: eK = false
  } = e;
  c()(null != j, "chat input type must be set");
  let {
    analyticsLocations: ez
  } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA), eq = eN(t), eX = i.useRef(null), eQ = i.useRef(null), eJ = i.useRef(null), e$ = i.useRef(null);
  null == eG || eG(eQ.current);
  let e0 = (0, y.Z)(k),
    [e1, e2] = i.useState(!e0);
  (0, m.PM)(eq, e => {
    let {
      width: t
    } = e;
    return e2(!e0 && (null == t || t > em))
  });
  let {
    activeCommand: e3,
    activeCommandSection: e4
  } = (0, _.cj)([v.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = j.commands) ? true : e.enabled) ? v.Z.getActiveCommand(k.id) : null,
      activeCommandSection: (null == (t = j.commands) ? true : t.enabled) ? v.Z.getActiveCommandSection(k.id) : null
    }
  }), {
    isLurking: e8,
    isPendingMember: e5,
    disabled: e6,
    canAttachFiles: e7,
    canCreateThreads: e9,
    canEveryoneSendMessages: te
  } = eP(k, j, e3, w), tt = j.toolbarType === Q.OW.STATIC, tn = !G.dN.useSetting() && !(0, q.isAndroidWeb)() && null != window.ResizeObserver, tr = !tn || !(null == (n = j.commands) ? true : n.enabled) || !U || f !== ec.GI, ti = (0, D.Z)(), {
    fontSize: ta
  } = (0, _.cj)([g.Z], () => ({
    fontSize: g.Z.fontSize
  })), to = (0, _.e7)([V.Z], () => V.Z.isEnabled()), ts = i.useRef(f);
  ts.current = f;
  let tl = i.useCallback((e, t, n) => {
    var r;
    t === ec.GI && "" === ts.current && (null == (r = j.commands) ? true : r.enabled) && (null == eY || eY()), null == W || W(e, t, n)
  }, [W, eY, null == (a = j.commands) ? true : a.enabled]);
  eS(j, e6);
  let {
    eventEmitter: tc,
    handleEditorSelectionChanged: tu
  } = eA(eQ, f, h), {
    submitting: td,
    submit: tf,
    handleSubmit: t_
  } = ey(eu, j, eQ, e$, k.id), {
    autocompleteRef: tp,
    handleMaybeShowAutocomplete: th,
    handleHideAutocomplete: tm
  } = eC(), tg = eO(tf, j, eQ), tE = ev(eQ), tb = eI({
    editorRef: eQ,
    disabled: e6,
    textValue: f,
    channelId: k.id,
    chatInputType: j,
    submit: eu
  }), ty = eT(eQ, k), tO = i.useCallback(() => {
    var e;
    return null == e$ || null == (e = e$.current) ? true : e.hide()
  }, []), {
    editorHeight: tv,
    handleResize: tI
  } = eR(K), {
    handleTab: tT,
    handleEnter: tS,
    handleMoveSelection: tA
  } = eD(tp, eX, tr), {
    expressionPickerView: tC,
    shouldHideExpressionPicker: tN,
    handleOuterClick: tR
  } = ew(j, eQ), tP = ex(tc, eQ), tw = eL(f), {
    currentAutocompleteType: tD,
    handleAutocompleteVisibilityChange: tx
  } = eM();
  (0, X.S)(tc, k.guild_id, k.id);
  let tL = null != Y,
    tM = e6 && !((e8 || e5) && te) || td && (null == (s = j.submit) ? true : s.useDisabledStylesOnSubmit),
    tk = null;
  null != e3 ? tk = null == F ? true : F(e3, e4, ed.attachButton) : (!e6 || e9) && (tk = null == Z ? true : Z(tL, ed.attachButton));
  let tj = tn && null != h && !e6 && j.showCharacterCount && null == e3,
    tU = tn && !__OVERLAY__ && null != h && null == e3 && j.toolbarType !== Q.OW.NONE && !e6,
    tG = (0, et.c)({
      channel: k,
      type: j,
      activeCommand: e3,
      pendingReply: Y,
      pendingScheduledMessage: eW,
      selectedAutocompleteInputType: tP
    }),
    tB = 0 === f.trim().length,
    tZ = j.layout === Q.gy.INLINE,
    tF = j.layout === Q.gy.FLUSH,
    tV = (0, r.jsx)(en.Z, {
      type: j,
      disabled: e6,
      channel: k,
      handleSubmit: t_,
      isEmpty: tB,
      showAllButtons: e1,
      children: null == H ? true : H()
    }),
    tH = tj ? (0, r.jsx)(ei.Z, {
      type: j,
      textValue: f,
      className: ek,
      maxCharacterCount: eg,
      showRemainingCharsAfterCount: eE
    }) : null;
  return (0, r.jsx)(A.f6, {
    value: tc,
    children: (0, r.jsxs)(b.Gt, {
      value: ez,
      children: [tU && tt ? (0, r.jsx)(es.Z, {
        editorRef: eQ,
        options: j.markdown,
        channel: k
      }) : tU ? (0, r.jsx)(ea.Z, {
        ref: e$,
        editorRef: eQ,
        containerRef: eJ,
        options: j.markdown
      }) : null, (0, r.jsxs)("div", {
        ref: eq,
        className: o()(O, {
          [ed.channelTextArea]: true,
          [ed.channelTextAreaDisabled]: tM,
          [ed.highlighted]: e_,
          [ed.textAreaMobileThemed]: d.tq,
          [ed.inlineContainer]: tZ,
          [ed.flushContainer]: tF,
          [ed.error]: null != B
        }),
        children: [tZ || tF ? null : (0, r.jsx)(et.Z, {
          bars: tG
        }), (0, r.jsxs)("div", {
          ref: eJ,
          onScroll: tO,
          className: o()(S, {
            [ed.scrollableContainer]: true,
            [ed.themedBackground]: !eF,
            [ed.hasStackedBar]: tG.stacked.length > 0
          }),
          children: [(0, r.jsx)($.Z, {
            channelId: k.id,
            chatInputType: j
          }), j.hideAttachmentArea ? null : (0, r.jsx)(er.Z, {
            channelId: k.id,
            type: j,
            canAttachFiles: e7
          }), (0, r.jsxs)("div", {
            className: o()(ed.inner, {
              [ed.innerDisabled]: tM,
              [ed.sansAttachButton]: j !== Q.Ie.EDIT && (null != tk || tM && null == tk || e8),
              [ed.sansAttachButtonCreateThread]: j === Q.Ie.THREAD_CREATION,
              [ed.sansAttachButtonCreatePost]: j === Q.Ie.CREATE_FORUM_POST || j === Q.Ie.FORWARD_MESSAGE_INPUT,
              [ed.sansAttachButtonUserProfileReply]: j === Q.Ie.USER_PROFILE_REPLY
            }),
            onMouseDown: tR,
            children: [tk, (0, r.jsx)(p.tEY, {
              ringTarget: eq,
              ringClassName: ed.focusRing,
              children: (0, r.jsx)(J.Z, {
                ref: eQ,
                id: R,
                focused: U,
                useSlate: tn,
                textValue: f,
                richValue: h,
                disabled: e6,
                placeholder: L,
                required: P,
                accessibilityLabel: M,
                isPreviewing: (e8 || e5) && te,
                channel: k,
                type: j,
                canPasteFiles: e7,
                uploadPromptCharacterCount: el.en1,
                maxCharacterCount: null != eg ? eg : ti,
                allowNewLines: eb,
                "aria-describedby": ej,
                onChange: tl,
                onResize: tI,
                onBlur: z,
                onFocus: ee,
                onKeyDown: eo,
                onSubmit: tf,
                onTab: tT,
                onEnter: tS,
                onMoveSelection: tA,
                onSelectionChanged: tu,
                onMaybeShowAutocomplete: th,
                onHideAutocomplete: tm,
                promptToUpload: ef,
                fontSize: ta,
                spellcheckEnabled: to,
                canOnlyUseTextCommands: tL,
                isEditorIdle: tw,
                currentAutocompleteType: tD,
                className: o()({
                  [ed.textAreaThreadCreation]: j === Q.Ie.THREAD_CREATION,
                  [ed.profileBioInput]: j === Q.Ie.PROFILE_BIO_INPUT,
                  [ed.overlayInlineReply]: j === Q.Ie.OVERLAY_INLINE_REPLY
                }, C),
                "aria-labelledby": eU,
                showValueWhenDisabled: eK
              })
            }), tV]
          })]
        }), tr ? null : (0, r.jsx)(I.Z, {
          ref: eX,
          channel: k,
          canOnlyUseTextCommands: tL
        }), (0, r.jsx)(T.Z, {
          ref: tp,
          channel: k,
          canMentionRoles: ep,
          canMentionChannels: eh,
          useNewSlashCommands: tn,
          canOnlyUseTextCommands: tL,
          canSendStickers: null == (l = j.stickers) ? true : l.allowSending,
          canSendSoundmoji: null == (u = j.soundmoji) ? true : u.allowSending,
          textValue: f,
          focused: U,
          isEditorIdle: tw,
          expressionPickerView: tC,
          type: j,
          targetRef: eq,
          editorRef: eQ,
          onSendMessage: tf,
          onSendSticker: tb,
          onVisibilityChange: tx,
          editorScrollerRef: eJ,
          editorHeight: tv,
          barsHeight: 40 * tG.floating.length,
          setValue: (e, t) => null == tl ? true : tl(null, e, t),
          position: eB
        }), (0, r.jsx)(x.Z, {
          textValue: f,
          editorHeight: tv,
          channelId: k.id
        }), tH, eZ]
      }), (0, r.jsx)(p.pdY, {
        error: B
      }), tN ? null : (0, r.jsx)(N.Z, {
        positionTargetRef: eq,
        type: j,
        onSelectGIF: tg,
        onSelectEmoji: tE,
        onSelectSticker: tb,
        onSelectSound: ty,
        channel: k,
        closeOnModalOuterClick: eV,
        parentModalKey: eH,
        position: "top",
        align: "right",
        positionLayerClassName: ed.expressionPickerPositionLayer
      })]
    })
  })
}
let ej = Chunk647438.memo(Chunk647438.forwardRef(ek))