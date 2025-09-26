/** Chunk was on web.js **/
/** chunk id: 893718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O1: () => eO,
  Sg: () => eb,
  TE: () => eN,
  ZP: () => ex,
  ae: () => ey,
  bL: () => eE,
  hJ: () => eI,
  iV: () => eR,
  jx: () => eS,
  oR: () => eC,
  qz: () => eA,
  x2: () => eT
}), require("./388685.js"), require("./415506.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk836560 = require("./836560.js"),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk524825 = require("./524825.js"),
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

function ed(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ed(e, t, n[t])
    })
  }
  return e
}

function e_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ep(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : e_(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eh = 450;

function em(e) {
  return e !== Z.Z.getChannelId()
}

function eg(e, t) {
  var n, r;
  return null != (r = e && (null == (n = t.submit) ? true : n.clearOnSubmit)) && r
}

function eE(e, t, a, o, s) {
  let [l, c] = i.useState(false), u = i.useCallback((i, d, f, _, m) => {
    var g, E, b;
    if (l) return;
    c(true);
    let y = null != (E = null == (g = L.Z.getStickerPreview(s, t.drafts.type)) ? true : g.map(e => e.id)) ? E : [],
      O = null != (b = V.Z.getUploads(s, t.drafts.type)) ? b : [],
      v = (0, x.q5)(s);
    if (null == d && !_ && !m && (0, R.CB)(O, s)) {
      c(false), (0, p.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("57804"), n.e("90508"), n.e("22173"), n.e("95546"), n.e("48890")]).then(n.bind(n, 273602));
        return t => (0, r.jsx)(e, ep(ef({}, t), {
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
      } = e, d = eg(l, t), f = null != a.current;
      d && (em(s) ? h.Z.saveDraft(s, "", t.drafts.type) : f && (null == (r = a.current) || r.clearValue(), null == (i = o.current) || i.hide())), f && (c(false), (0, C._Q)(), u && (null == (n = a.current) || n.focus()))
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

function eb(e, t, n) {
  return i.useCallback(r => {
    var i, a;
    t === X.Ie.CREATE_FORUM_POST || t === X.Ie.CREATE_ANNOUNCEMENT_POST ? null == (a = n.current) || a.insertGIF(r) : e(r.url, true, true, true), (0, C._Q)(), null == (i = n.current) || i.focus()
  }, [n, e, t])
}

function ey(e) {
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

function eO(e) {
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
    n || (o === X.Ie.CREATE_ANNOUNCEMENT_POST || (0, M.Hc)(i, r, a, o.drafts.type) ? ((0, $._H)({
      sticker: e,
      stickerSelectLocation: i,
      isReplacement: null != L.Z.getStickerPreview(a, o.drafts.type),
      analyticsLocations: l
    }), (0, j.eu)(a, e, o.drafts.type)) : (s({
      value: "",
      uploads: true,
      stickers: [e.id]
    }), null == (u = t.current) || u.clearValue()), (0, C._Q)(), null == (c = t.current) || c.focus())
  }, [n, r, a, t, l, s, o])
}

function ev(e, t) {
  return i.useCallback((n, r, i) => {
    let a = e.current;
    null != n && null != a && (Y.default.track(es.rMx.SOUNDMOJI_SELECT, {
      channel_id: t.id,
      guild_id: t.guild_id,
      sound_guild_id: n.guildId,
      sound_id: n.soundId,
      source: r
    }), a.insertSound(n)), i && (0, C._Q)(), null == a || a.focus()
  }, [e, t.id, t.guild_id])
}

function eI(e, t) {
  let n = i.useCallback(() => {
      t || (0, C.RO)(ec.X1.EMOJI, e)
    }, [t, e]),
    r = i.useCallback(() => {
      var n;
      !t && (null == (n = e.gifs) ? true : n.allowSending) && (0, C.RO)(ec.X1.GIF, e)
    }, [t, e]),
    a = i.useCallback(() => {
      var n;
      !t && (null == (n = e.stickers) ? true : n.allowSending) && (0, C.RO)(ec.X1.STICKER, e)
    }, [t, e]);
  (0, W.yp)({
    event: es.CkL.TOGGLE_EMOJI_POPOUT,
    handler: n
  }), (0, W.yp)({
    event: es.CkL.TOGGLE_GIF_PICKER,
    handler: r
  }), (0, W.yp)({
    event: es.CkL.TOGGLE_STICKER_PICKER,
    handler: a
  })
}

function eT(e, t, n) {
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

function eS() {
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

function eA(e) {
  let t = i.useRef(null);
  if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
  return null == e ? t : e
}

function eC(e) {
  let [t, n] = i.useState(0);
  return {
    editorHeight: t,
    handleResize: i.useCallback(t => {
      n(null != t ? t : 0), null == e || e(t)
    }, [e])
  }
}

function eN(e, t, n, r) {
  let i = e.getGuildId(),
    a = (0, _.e7)([P.Z], () => null != i && P.Z.isLurking(i), [i]),
    o = (0, _.e7)([G.ZP, H.default], () => {
      var e, t;
      let n = H.default.getCurrentUser();
      return null != (t = null != i && null != n ? null == (e = G.ZP.getMember(i, n.id)) ? true : e.isPending : null) && t
    }),
    s = (0, _.cj)([B.Z], () => {
      var i, a;
      let s = e.isPrivate(),
        l = B.Z.computePermissions(e),
        c = f.e$(l, es.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, es.Plq.CREATE_PRIVATE_THREADS),
        u = (!(null == (i = t.permissions) ? true : i.requireCreateTherads) || c) && (!(null == (a = t.permissions) ? true : a.requireSendMessages) || f.e$(l, es.Plq.SEND_MESSAGES)),
        d = u && f.e$(l, es.Plq.ATTACH_FILES),
        _ = null != n,
        p = (0, k.xl)(e);
      return {
        disabled: r || o || !s && !u || p,
        canAttachFiles: true === t.attachments && (s || o || d || _),
        canCreateThreads: c,
        canEveryoneSendMessages: K.Uu(es.Plq.SEND_MESSAGES, e)
      }
    }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
  return ef({
    isLurking: a,
    isPendingMember: o
  }, s)
}

function eR(e, t, n) {
  let [r, a] = (0, C.Iu)(e => [e.activeView, e.activeViewType], u.X), o = (0, _.e7)([O.Z], () => O.Z.shouldShowPopup() && O.Z.activeViewType() === e);
  i.useEffect(() => () => {
    (0, C._Q)(e)
  }, [e]);
  let s = i.useCallback(e => {
      t.emit("autocomplete-visibility-change", e), e && (0, C._Q)()
    }, [t]),
    l = i.useCallback(() => {
      var e;
      null != r || o || null == (e = n.current) || e.handleOuterClick()
    }, [r, o, n]),
    c = null == r || null == a || a !== e;
  return {
    expressionPickerView: r,
    shouldHideExpressionPicker: c,
    handleAutocompleteVisibilityChange: s,
    handleOuterClick: l
  }
}

function eP(e, t, n) {
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

function ew(e, t) {
  let [n, r] = i.useState(null), a = i.useCallback(() => {
    var e, n;
    let i, a = null == (e = t.current) ? true : e.getSlateEditor();
    null != a && (i = null == (n = ea.bN.getSelectedParentOfType(a, S.un)) ? true : n[0].type), r(null != i ? i : null)
  }, [t]);
  return i.useEffect(() => (e.on("selection-changed", a), a(), () => {
    e.off("selection-changed", a)
  }), [a, e]), n
}

function eD(e, t) {
  var n, a, s, l, u;
  let {
    textValue: f,
    richValue: h,
    className: O,
    innerClassName: S,
    editorClassName: C,
    id: R,
    required: P,
    disabled: x,
    placeholder: L,
    accessibilityLabel: j,
    channel: M,
    type: k,
    focused: G,
    error: B,
    renderAttachButton: Z,
    renderApplicationCommandIcon: V,
    renderAppLauncherButton: H,
    pendingReply: Y,
    onChange: W,
    onResize: K,
    onBlur: $,
    onFocus: ea,
    onKeyDown: ec,
    onSubmit: ed,
    promptToUpload: ef,
    highlighted: e_,
    canMentionRoles: ep,
    canMentionChannels: em,
    maxCharacterCount: eg,
    showRemainingCharsAfterCount: eD,
    allowNewLines: ex = true,
    characterCountClassName: eL,
    "aria-describedby": ej,
    "aria-labelledby": eM,
    setEditorRef: ek,
    autoCompletePosition: eU,
    children: eG,
    disableThemedBackground: eB = false,
    emojiPickerCloseOnModalOuterClick: eZ,
    parentModalKey: eF,
    onCommandSentinelTyped: eV,
    pendingScheduledMessage: eH,
    showValueWhenDisabled: eY = false
  } = e;
  c()(null != k, "chat input type must be set");
  let {
    analyticsLocations: eW
  } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA), eK = eA(t), ez = i.useRef(null), eq = i.useRef(null), eX = i.useRef(null), eQ = i.useRef(null);
  null == ek || ek(eq.current);
  let eJ = (0, y.Z)(M),
    [e$, e0] = i.useState(!eJ);
  (0, m.PM)(eK, e => {
    let {
      width: t
    } = e;
    return e0(!eJ && (null == t || t > eh))
  });
  let {
    activeCommand: e1,
    activeCommandSection: e2
  } = (0, _.cj)([v.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = k.commands) ? true : e.enabled) ? v.Z.getActiveCommand(M.id) : null,
      activeCommandSection: (null == (t = k.commands) ? true : t.enabled) ? v.Z.getActiveCommandSection(M.id) : null
    }
  }), {
    isLurking: e3,
    isPendingMember: e4,
    disabled: e8,
    canAttachFiles: e5,
    canCreateThreads: e6,
    canEveryoneSendMessages: e7
  } = eN(M, k, e1, x), e9 = k.toolbarType === X.OW.STATIC, te = !U.dN.useSetting() && !(0, z.isAndroidWeb)() && null != window.ResizeObserver, tt = !te || !(null == (n = k.commands) ? true : n.enabled) || !G || f !== el.GI, tn = (0, w.Z)(), {
    fontSize: tr
  } = (0, _.cj)([g.Z], () => ({
    fontSize: g.Z.fontSize
  })), ti = (0, _.e7)([F.Z], () => F.Z.isEnabled()), ta = i.useRef(f);
  ta.current = f;
  let to = i.useCallback((e, t, n) => {
    var r;
    t === el.GI && "" === ta.current && (null == (r = k.commands) ? true : r.enabled) && (null == eV || eV()), null == W || W(e, t, n)
  }, [W, eV, null == (a = k.commands) ? true : a.enabled]);
  eI(k, e8);
  let {
    eventEmitter: ts,
    handleEditorSelectionChanged: tl
  } = eT(eq, f, h), {
    submitting: tc,
    submit: tu,
    handleSubmit: td
  } = eE(ed, k, eq, eQ, M.id), {
    autocompleteRef: tf,
    handleMaybeShowAutocomplete: t_,
    handleHideAutocomplete: tp
  } = eS(), th = eb(tu, k, eq), tm = ey(eq), tg = eO({
    editorRef: eq,
    disabled: e8,
    textValue: f,
    channelId: M.id,
    chatInputType: k,
    submit: ed
  }), tE = ev(eq, M), tb = i.useCallback(() => {
    var e;
    return null == eQ || null == (e = eQ.current) ? true : e.hide()
  }, []), {
    editorHeight: ty,
    handleResize: tO
  } = eC(K), {
    handleTab: tv,
    handleEnter: tI,
    handleMoveSelection: tT
  } = eP(tf, ez, tt), {
    expressionPickerView: tS,
    shouldHideExpressionPicker: tA,
    handleAutocompleteVisibilityChange: tC,
    handleOuterClick: tN
  } = eR(k, ts, eq), tR = ew(ts, eq);
  (0, q.S)(ts, M.guild_id, M.id);
  let tP = null != Y,
    tw = e8 && !((e3 || e4) && e7) || tc && (null == (s = k.submit) ? true : s.useDisabledStylesOnSubmit),
    tD = null;
  null != e1 ? tD = null == V ? true : V(e1, e2, eu.attachButton) : (!e8 || e6) && (tD = null == Z ? true : Z(tP, eu.attachButton));
  let tx = te && null != h && !e8 && k.showCharacterCount && null == e1,
    tL = te && !__OVERLAY__ && null != h && null == e1 && k.toolbarType !== X.OW.NONE && !e8,
    tj = (0, ee.c)({
      channel: M,
      type: k,
      activeCommand: e1,
      pendingReply: Y,
      pendingScheduledMessage: eH,
      selectedAutocompleteInputType: tR
    }),
    tM = 0 === f.trim().length,
    tk = k.layout === X.gy.INLINE,
    tU = k.layout === X.gy.FLUSH,
    tG = (0, r.jsx)(et.Z, {
      type: k,
      disabled: e8,
      channel: M,
      handleSubmit: td,
      isEmpty: tM,
      showAllButtons: e$,
      children: null == H ? true : H()
    }),
    tB = tx ? (0, r.jsx)(er.Z, {
      type: k,
      textValue: f,
      className: eL,
      maxCharacterCount: eg,
      showRemainingCharsAfterCount: eD
    }) : null;
  return (0, r.jsx)(A.f6, {
    value: ts,
    children: (0, r.jsxs)(b.Gt, {
      value: eW,
      children: [tL && e9 ? (0, r.jsx)(eo.Z, {
        editorRef: eq,
        options: k.markdown,
        channel: M
      }) : tL ? (0, r.jsx)(ei.Z, {
        ref: eQ,
        editorRef: eq,
        containerRef: eX,
        options: k.markdown
      }) : null, (0, r.jsxs)("div", {
        ref: eK,
        className: o()(O, {
          [eu.channelTextArea]: true,
          [eu.channelTextAreaDisabled]: tw,
          [eu.highlighted]: e_,
          [eu.textAreaMobileThemed]: d.tq,
          [eu.inlineContainer]: tk,
          [eu.flushContainer]: tU,
          [eu.error]: null != B
        }),
        children: [tk || tU ? null : (0, r.jsx)(ee.Z, {
          bars: tj
        }), (0, r.jsxs)("div", {
          ref: eX,
          onScroll: tb,
          className: o()(S, {
            [eu.scrollableContainer]: true,
            [eu.themedBackground]: !eB,
            [eu.hasStackedBar]: tj.stacked.length > 0
          }),
          children: [(0, r.jsx)(J.Z, {
            channelId: M.id,
            chatInputType: k
          }), k.hideAttachmentArea ? null : (0, r.jsx)(en.Z, {
            channelId: M.id,
            type: k,
            canAttachFiles: e5
          }), (0, r.jsxs)("div", {
            className: o()(eu.inner, {
              [eu.innerDisabled]: tw,
              [eu.sansAttachButton]: k !== X.Ie.EDIT && (null != tD || tw && null == tD || e3),
              [eu.sansAttachButtonCreateThread]: k === X.Ie.THREAD_CREATION,
              [eu.sansAttachButtonCreatePost]: k === X.Ie.CREATE_FORUM_POST || k === X.Ie.FORWARD_MESSAGE_INPUT,
              [eu.sansAttachButtonUserProfileReply]: k === X.Ie.USER_PROFILE_REPLY
            }),
            onMouseDown: tN,
            children: [tD, (0, r.jsx)(p.tEY, {
              ringTarget: eK,
              ringClassName: eu.focusRing,
              children: (0, r.jsx)(Q.Z, {
                ref: eq,
                id: R,
                focused: G,
                useSlate: te,
                textValue: f,
                richValue: h,
                disabled: e8,
                placeholder: L,
                required: P,
                accessibilityLabel: j,
                isPreviewing: (e3 || e4) && e7,
                channel: M,
                type: k,
                canPasteFiles: e5,
                uploadPromptCharacterCount: es.en1,
                maxCharacterCount: null != eg ? eg : tn,
                allowNewLines: ex,
                "aria-describedby": ej,
                onChange: to,
                onResize: tO,
                onBlur: $,
                onFocus: ea,
                onKeyDown: ec,
                onSubmit: tu,
                onTab: tv,
                onEnter: tI,
                onMoveSelection: tT,
                onSelectionChanged: tl,
                onMaybeShowAutocomplete: t_,
                onHideAutocomplete: tp,
                promptToUpload: ef,
                fontSize: tr,
                spellcheckEnabled: ti,
                canOnlyUseTextCommands: tP,
                className: o()({
                  [eu.textAreaThreadCreation]: k === X.Ie.THREAD_CREATION,
                  [eu.profileBioInput]: k === X.Ie.PROFILE_BIO_INPUT,
                  [eu.overlayInlineReply]: k === X.Ie.OVERLAY_INLINE_REPLY
                }, C),
                "aria-labelledby": eM,
                showValueWhenDisabled: eY
              })
            }), tG]
          })]
        }), tt ? null : (0, r.jsx)(I.Z, {
          ref: ez,
          channel: M,
          canOnlyUseTextCommands: tP
        }), (0, r.jsx)(T.Z, {
          ref: tf,
          channel: M,
          canMentionRoles: ep,
          canMentionChannels: em,
          useNewSlashCommands: te,
          canOnlyUseTextCommands: tP,
          canSendStickers: null == (l = k.stickers) ? true : l.allowSending,
          canSendSoundmoji: null == (u = k.soundmoji) ? true : u.allowSending,
          textValue: f,
          focused: G,
          expressionPickerView: tS,
          type: k,
          targetRef: eK,
          editorRef: eq,
          onSendMessage: tu,
          onSendSticker: tg,
          onVisibilityChange: tC,
          editorScrollerRef: eX,
          editorHeight: ty,
          barsHeight: 40 * tj.floating.length,
          setValue: (e, t) => null == to ? true : to(null, e, t),
          position: eU
        }), (0, r.jsx)(D.Z, {
          textValue: f,
          editorHeight: ty,
          channelId: M.id
        }), tB, eG]
      }), (0, r.jsx)(p.pdY, {
        error: B
      }), tA ? null : (0, r.jsx)(N.Z, {
        positionTargetRef: eK,
        type: k,
        onSelectGIF: th,
        onSelectEmoji: tm,
        onSelectSticker: tg,
        onSelectSound: tE,
        channel: M,
        closeOnModalOuterClick: eZ,
        parentModalKey: eF,
        position: "top",
        align: "right",
        positionLayerClassName: eu.expressionPickerPositionLayer
      })]
    })
  })
}
let ex = Chunk647438.memo(Chunk647438.forwardRef(eD))