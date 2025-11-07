/** Chunk was on web.js **/
/** chunk id: 893718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O1: () => eI,
  Sg: () => eO,
  TE: () => eP,
  ZP: () => ek,
  aT: () => eL,
  ae: () => ev,
  bL: () => ey,
  hJ: () => eT,
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
  Chunk564355 = require("./564355.js");

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
        } = await Promise.all([n.e("57804"), n.e("90508"), n.e("22173"), n.e("95546"), n.e("48890")]).then(n.bind(n, 273602));
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
    n || (o === Q.Ie.CREATE_ANNOUNCEMENT_POST || (0, k.Hc)(i, r, a, o.drafts.type) ? ((0, ee._H)({
      sticker: e,
      stickerSelectLocation: i,
      isReplacement: null != M.Z.getStickerPreview(a, o.drafts.type),
      analyticsLocations: l
    }), (0, j.eu)(a, e, o.drafts.type)) : (s({
      value: "",
      uploads: true,
      stickers: [e.id]
    }), null == (u = t.current) || u.clearValue()), (0, C._Q)(), null == (c = t.current) || c.focus())
  }, [n, r, a, t, l, s, o])
}

function eS(e, t) {
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

function eT(e, t) {
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
    null != a && (i = null == (n = eo.bN.getSelectedParentOfType(a, T.un)) ? true : n[0].type), r(null != i ? i : null)
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

function ej(e, t) {
  var n, a, s, l, u;
  let {
    textValue: f,
    richValue: h,
    className: O,
    innerClassName: T,
    editorClassName: C,
    id: R,
    required: P,
    disabled: w,
    placeholder: L,
    accessibilityLabel: M,
    channel: j,
    type: k,
    focused: U,
    error: B,
    renderAttachButton: Z,
    renderApplicationCommandIcon: F,
    pendingReply: H,
    onChange: Y,
    onResize: W,
    onBlur: K,
    onFocus: z,
    onKeyDown: ee,
    onSubmit: eo,
    promptToUpload: eu,
    highlighted: ef,
    canMentionRoles: e_,
    canMentionChannels: ep,
    maxCharacterCount: eh,
    showRemainingCharsAfterCount: eg,
    allowNewLines: eE = true,
    characterCountClassName: eb,
    "aria-describedby": ej,
    "aria-labelledby": ek,
    setEditorRef: eU,
    autoCompletePosition: eG,
    children: eB,
    disableThemedBackground: eZ = false,
    emojiPickerCloseOnModalOuterClick: eF,
    parentModalKey: eV,
    pendingScheduledMessage: eH,
    showValueWhenDisabled: eY = false
  } = e;
  c()(null != k, "chat input type must be set");
  let {
    analyticsLocations: eW
  } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA), eK = eN(t), ez = i.useRef(null), eq = i.useRef(null), eX = i.useRef(null), eQ = i.useRef(null);
  null == eU || eU(eq.current);
  let eJ = (0, y.Z)(j),
    [e$, e0] = i.useState(!eJ);
  (0, m.PM)(eK, e => {
    let {
      width: t
    } = e;
    return e0(!eJ && (null == t || t > em))
  });
  let {
    activeCommand: e1,
    activeCommandSection: e2
  } = (0, _.cj)([v.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = k.commands) ? true : e.enabled) ? v.Z.getActiveCommand(j.id) : null,
      activeCommandSection: (null == (t = k.commands) ? true : t.enabled) ? v.Z.getActiveCommandSection(j.id) : null
    }
  }), {
    isLurking: e3,
    isPendingMember: e4,
    disabled: e8,
    canAttachFiles: e5,
    canCreateThreads: e6,
    canEveryoneSendMessages: e7
  } = eP(j, k, e1, w), e9 = k.toolbarType === Q.OW.STATIC, te = !G.dN.useSetting() && !(0, q.isAndroidWeb)() && null != window.ResizeObserver, tt = !te || !(null == (n = k.commands) ? true : n.enabled) || !U || f !== ec.GI, tn = (0, D.Z)(), {
    fontSize: tr
  } = (0, _.cj)([g.Z], () => ({
    fontSize: g.Z.fontSize
  })), ti = (0, _.e7)([V.Z], () => V.Z.isEnabled());
  eT(k, e8);
  let {
    eventEmitter: ta,
    handleEditorSelectionChanged: to
  } = eA(eq, f, h), ts = i.useRef(f);
  ts.current = f;
  let tl = i.useCallback((e, t, n) => {
      var r;
      t === ec.GI && "" === ts.current && (null == (r = k.commands) ? true : r.enabled) && ta.emit("command-sentinel-typed"), null == Y || Y(e, t, n)
    }, [Y, null == (a = k.commands) ? true : a.enabled, ta]),
    {
      submitting: tc,
      submit: tu,
      handleSubmit: td
    } = ey(eo, k, eq, eQ, j.id),
    {
      autocompleteRef: tf,
      handleMaybeShowAutocomplete: t_,
      handleHideAutocomplete: tp
    } = eC(),
    th = eO(tu, k, eq),
    tm = ev(eq),
    tg = eI({
      editorRef: eq,
      disabled: e8,
      textValue: f,
      channelId: j.id,
      chatInputType: k,
      submit: eo
    }),
    tE = eS(eq, j),
    tb = i.useCallback(() => {
      var e;
      return null == eQ || null == (e = eQ.current) ? true : e.hide()
    }, []),
    {
      editorHeight: ty,
      handleResize: tO
    } = eR(W),
    {
      handleTab: tv,
      handleEnter: tI,
      handleMoveSelection: tS
    } = eD(tf, ez, tt),
    {
      expressionPickerView: tT,
      shouldHideExpressionPicker: tA,
      handleOuterClick: tC
    } = ew(k, eq),
    tN = ex(ta, eq),
    tR = eL(f),
    {
      currentAutocompleteType: tP,
      handleAutocompleteVisibilityChange: tw
    } = eM();
  (0, X.S)(ta, j.guild_id, j.id);
  let tD = null != H,
    tx = e8 && !((e3 || e4) && e7) || tc && (null == (s = k.submit) ? true : s.useDisabledStylesOnSubmit),
    tL = null;
  null != e1 ? tL = null == F ? true : F(e1, e2, ed.attachButton) : (!e8 || e6) && (tL = null == Z ? true : Z(tD, ed.attachButton));
  let tM = te && null != h && !e8 && k.showCharacterCount && null == e1,
    tj = te && !__OVERLAY__ && null != h && null == e1 && k.toolbarType !== Q.OW.NONE && !e8,
    tk = (0, et.c)({
      channel: j,
      type: k,
      activeCommand: e1,
      pendingReply: H,
      pendingScheduledMessage: eH,
      selectedAutocompleteInputType: tN
    }),
    tU = 0 === f.trim().length,
    tG = k.layout === Q.gy.INLINE,
    tB = k.layout === Q.gy.FLUSH,
    tZ = (0, r.jsx)(en.Z, {
      type: k,
      disabled: e8,
      channel: j,
      handleSubmit: td,
      isEmpty: tU,
      showAllButtons: e$
    }),
    tF = tM ? (0, r.jsx)(ei.Z, {
      type: k,
      textValue: f,
      className: eb,
      maxCharacterCount: eh,
      showRemainingCharsAfterCount: eg
    }) : null;
  return (0, r.jsx)(A.f6, {
    value: ta,
    children: (0, r.jsxs)(b.Gt, {
      value: eW,
      children: [tj && e9 ? (0, r.jsx)(es.Z, {
        editorRef: eq,
        options: k.markdown,
        channel: j
      }) : tj ? (0, r.jsx)(ea.Z, {
        ref: eQ,
        editorRef: eq,
        containerRef: eX,
        options: k.markdown
      }) : null, (0, r.jsxs)("div", {
        ref: eK,
        className: o()(O, {
          [ed.channelTextArea]: true,
          [ed.channelTextAreaDisabled]: tx,
          [ed.highlighted]: ef,
          [ed.textAreaMobileThemed]: d.tq,
          [ed.inlineContainer]: tG,
          [ed.flushContainer]: tB,
          [ed.error]: null != B
        }),
        children: [tG || tB ? null : (0, r.jsx)(et.Z, {
          bars: tk
        }), (0, r.jsxs)("div", {
          ref: eX,
          onScroll: tb,
          className: o()(T, {
            [ed.scrollableContainer]: true,
            [ed.themedBackground]: !eZ,
            [ed.hasStackedBar]: tk.stacked.length > 0
          }),
          children: [(0, r.jsx)($.Z, {
            channelId: j.id,
            chatInputType: k
          }), k.hideAttachmentArea ? null : (0, r.jsx)(er.Z, {
            channelId: j.id,
            type: k,
            canAttachFiles: e5
          }), (0, r.jsxs)("div", {
            className: o()(ed.inner, {
              [ed.innerDisabled]: tx,
              [ed.sansAttachButton]: k !== Q.Ie.EDIT && (null != tL || tx && null == tL || e3),
              [ed.sansAttachButtonCreateThread]: k === Q.Ie.THREAD_CREATION,
              [ed.sansAttachButtonCreatePost]: k === Q.Ie.CREATE_FORUM_POST || k === Q.Ie.FORWARD_MESSAGE_INPUT,
              [ed.sansAttachButtonUserProfileReply]: k === Q.Ie.USER_PROFILE_REPLY
            }),
            onMouseDown: tC,
            children: [tL, (0, r.jsx)(p.tEY, {
              ringTarget: eK,
              ringClassName: ed.focusRing,
              children: (0, r.jsx)(J.Z, {
                ref: eq,
                id: R,
                focused: U,
                useSlate: te,
                textValue: f,
                richValue: h,
                disabled: e8,
                placeholder: L,
                required: P,
                accessibilityLabel: M,
                isPreviewing: (e3 || e4) && e7,
                channel: j,
                type: k,
                canPasteFiles: e5,
                uploadPromptCharacterCount: el.en1,
                maxCharacterCount: null != eh ? eh : tn,
                allowNewLines: eE,
                "aria-describedby": ej,
                onChange: tl,
                onResize: tO,
                onBlur: K,
                onFocus: z,
                onKeyDown: ee,
                onSubmit: tu,
                onTab: tv,
                onEnter: tI,
                onMoveSelection: tS,
                onSelectionChanged: to,
                onMaybeShowAutocomplete: t_,
                onHideAutocomplete: tp,
                promptToUpload: eu,
                fontSize: tr,
                spellcheckEnabled: ti,
                canOnlyUseTextCommands: tD,
                isEditorIdle: tR,
                currentAutocompleteType: tP,
                className: o()({
                  [ed.textAreaThreadCreation]: k === Q.Ie.THREAD_CREATION,
                  [ed.profileBioInput]: k === Q.Ie.PROFILE_BIO_INPUT,
                  [ed.overlayInlineReply]: k === Q.Ie.OVERLAY_INLINE_REPLY
                }, C),
                "aria-labelledby": ek,
                showValueWhenDisabled: eY
              })
            }), tZ]
          })]
        }), tt ? null : (0, r.jsx)(I.Z, {
          ref: ez,
          channel: j,
          canOnlyUseTextCommands: tD
        }), (0, r.jsx)(S.Z, {
          ref: tf,
          channel: j,
          canMentionRoles: e_,
          canMentionChannels: ep,
          useNewSlashCommands: te,
          canOnlyUseTextCommands: tD,
          canSendStickers: null == (l = k.stickers) ? true : l.allowSending,
          canSendSoundmoji: null == (u = k.soundmoji) ? true : u.allowSending,
          textValue: f,
          focused: U,
          isEditorIdle: tR,
          expressionPickerView: tT,
          type: k,
          targetRef: eK,
          editorRef: eq,
          onSendMessage: tu,
          onSendSticker: tg,
          onVisibilityChange: tw,
          editorScrollerRef: eX,
          editorHeight: ty,
          barsHeight: 40 * tk.floating.length,
          setValue: (e, t) => null == tl ? true : tl(null, e, t),
          position: eG
        }), (0, r.jsx)(x.Z, {
          textValue: f,
          editorHeight: ty,
          channelId: j.id
        }), tF, eB]
      }), (0, r.jsx)(p.pdY, {
        error: B
      }), tA ? null : (0, r.jsx)(N.Z, {
        positionTargetRef: eK,
        type: k,
        onSelectGIF: th,
        onSelectEmoji: tm,
        onSelectSticker: tg,
        onSelectSound: tE,
        channel: j,
        closeOnModalOuterClick: eF,
        parentModalKey: eV,
        position: "top",
        align: "right",
        positionLayerClassName: ed.expressionPickerPositionLayer
      })]
    })
  })
}
let ek = Chunk647438.memo(Chunk647438.forwardRef(ej))