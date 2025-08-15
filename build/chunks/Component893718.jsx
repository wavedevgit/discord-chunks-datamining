/** Chunk was on web.js **/
/** chunk id: 893718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O1: () => eO,
  Sg: () => eb,
  TE: () => eC,
  ZP: () => eL,
  ae: () => ey,
  bL: () => eE,
  hJ: () => eI,
  iV: () => eR,
  jx: () => eS,
  oR: () => eN,
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
  return e !== V.Z.getChannelId()
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
    let y = null != (E = null == (g = x.Z.getStickerPreview(s, t.drafts.type)) ? true : g.map(e => e.id)) ? E : [],
      O = null != (b = Z.Z.getUploads(s, t.drafts.type)) ? b : [],
      v = (0, L.q5)(s);
    if (null == d && !_ && !m && (0, R.CB)(O, s)) {
      c(false), (0, p.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("66549"), n.e("25292"), n.e("90508"), n.e("28467"), n.e("38626"), n.e("40694"), n.e("46653"), n.e("22173"), n.e("6410")]).then(n.bind(n, 273602));
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
      d && (em(s) ? h.Z.saveDraft(s, "", t.drafts.type) : f && (null == (r = a.current) || r.clearValue(), null == (i = o.current) || i.hide())), f && (c(false), (0, N._Q)(), u && (null == (n = a.current) || n.focus()))
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
    t === X.Ie.CREATE_FORUM_POST || t === X.Ie.CREATE_ANNOUNCEMENT_POST ? null == (a = n.current) || a.insertGIF(r) : e(r.url, true, true, true), (0, N._Q)(), null == (i = n.current) || i.focus()
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
    }), r && (0, N._Q)()
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
    n || (o === X.Ie.CREATE_ANNOUNCEMENT_POST || (0, k.Hc)(i, r, a, o.drafts.type) ? ((0, $._H)({
      sticker: e,
      stickerSelectLocation: i,
      isReplacement: null != x.Z.getStickerPreview(a, o.drafts.type),
      analyticsLocations: l
    }), (0, M.eu)(a, e, o.drafts.type)) : (s({
      value: "",
      uploads: true,
      stickers: [e.id]
    }), null == (u = t.current) || u.clearValue()), (0, N._Q)(), null == (c = t.current) || c.focus())
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
    }), a.insertSound(n)), i && (0, N._Q)(), null == a || a.focus()
  }, [e, t.id, t.guild_id])
}

function eI(e, t) {
  let n = i.useCallback(() => {
      t || (0, N.RO)(ec.X1.EMOJI, e)
    }, [t, e]),
    r = i.useCallback(() => {
      var n;
      !t && (null == (n = e.gifs) ? true : n.allowSending) && (0, N.RO)(ec.X1.GIF, e)
    }, [t, e]),
    a = i.useCallback(() => {
      var n;
      !t && (null == (n = e.stickers) ? true : n.allowSending) && (0, N.RO)(ec.X1.STICKER, e)
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

function eN(e) {
  let [t, n] = i.useState(0);
  return {
    editorHeight: t,
    handleResize: i.useCallback(t => {
      n(null != t ? t : 0), null == e || e(t)
    }, [e])
  }
}

function eC(e, t, n, r) {
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
        p = (0, j.xl)(e);
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
  let [r, a] = (0, N.Iu)(e => [e.activeView, e.activeViewType], u.X), o = (0, _.e7)([O.Z], () => O.Z.shouldShowPopup() && O.Z.activeViewType() === e);
  i.useEffect(() => () => {
    (0, N._Q)(e)
  }, [e]);
  let s = i.useCallback(e => {
      t.emit("autocomplete-visibility-change", e), e && (0, N._Q)()
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
    editorClassName: N,
    id: R,
    required: P,
    disabled: L,
    placeholder: x,
    accessibilityLabel: M,
    channel: k,
    type: j,
    focused: G,
    error: B,
    renderAttachButton: V,
    renderApplicationCommandIcon: Z,
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
    allowNewLines: eL = true,
    characterCountClassName: ex,
    "aria-describedby": eM,
    "aria-labelledby": ek,
    setEditorRef: ej,
    autoCompletePosition: eU,
    children: eG,
    disableThemedBackground: eB = false,
    emojiPickerCloseOnModalOuterClick: eV,
    parentModalKey: eF,
    onCommandSentinelTyped: eZ,
    pendingScheduledMessage: eH
  } = e;
  c()(null != j, "chat input type must be set");
  let {
    analyticsLocations: eY
  } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA), eW = eA(t), eK = i.useRef(null), ez = i.useRef(null), eq = i.useRef(null), eX = i.useRef(null);
  null == ej || ej(ez.current);
  let eQ = (0, y.Z)(k),
    [eJ, e$] = i.useState(!eQ);
  (0, m.PM)(eW, e => {
    let {
      width: t
    } = e;
    return e$(!eQ && (null == t || t > eh))
  });
  let {
    activeCommand: e0,
    activeCommandSection: e1
  } = (0, _.cj)([v.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = j.commands) ? true : e.enabled) ? v.Z.getActiveCommand(k.id) : null,
      activeCommandSection: (null == (t = j.commands) ? true : t.enabled) ? v.Z.getActiveCommandSection(k.id) : null
    }
  }), {
    isLurking: e2,
    isPendingMember: e3,
    disabled: e4,
    canAttachFiles: e8,
    canCreateThreads: e6,
    canEveryoneSendMessages: e5
  } = eC(k, j, e0, L), e7 = j.toolbarType === X.OW.STATIC, e9 = !U.dN.useSetting() && !(0, z.isAndroidWeb)() && null != window.ResizeObserver, te = !e9 || !(null == (n = j.commands) ? true : n.enabled) || !G || f !== el.GI, tt = (0, w.Z)(), {
    fontSize: tn
  } = (0, _.cj)([g.Z], () => ({
    fontSize: g.Z.fontSize
  })), tr = (0, _.e7)([F.Z], () => F.Z.isEnabled()), ti = i.useRef(f);
  ti.current = f;
  let ta = i.useCallback((e, t, n) => {
    var r;
    t === el.GI && "" === ti.current && (null == (r = j.commands) ? true : r.enabled) && (null == eZ || eZ()), null == W || W(e, t, n)
  }, [W, eZ, null == (a = j.commands) ? true : a.enabled]);
  eI(j, e4);
  let {
    eventEmitter: to,
    handleEditorSelectionChanged: ts
  } = eT(ez, f, h), {
    submitting: tl,
    submit: tc,
    handleSubmit: tu
  } = eE(ed, j, ez, eX, k.id), {
    autocompleteRef: td,
    handleMaybeShowAutocomplete: tf,
    handleHideAutocomplete: t_
  } = eS(), tp = eb(tc, j, ez), th = ey(ez), tm = eO({
    editorRef: ez,
    disabled: e4,
    textValue: f,
    channelId: k.id,
    chatInputType: j,
    submit: ed
  }), tg = ev(ez, k), tE = i.useCallback(() => {
    var e;
    return null == eX || null == (e = eX.current) ? true : e.hide()
  }, []), {
    editorHeight: tb,
    handleResize: ty
  } = eN(K), {
    handleTab: tO,
    handleEnter: tv,
    handleMoveSelection: tI
  } = eP(td, eK, te), {
    expressionPickerView: tT,
    shouldHideExpressionPicker: tS,
    handleAutocompleteVisibilityChange: tA,
    handleOuterClick: tN
  } = eR(j, to, ez), tC = ew(to, ez);
  (0, q.S)(to, k.guild_id, k.id);
  let tR = null != Y,
    tP = e4 && !((e2 || e3) && e5) || tl && (null == (s = j.submit) ? true : s.useDisabledStylesOnSubmit),
    tw = null;
  null != e0 ? tw = null == Z ? true : Z(e0, e1, eu.attachButton) : (!e4 || e6) && (tw = null == V ? true : V(tR, eu.attachButton));
  let tD = e9 && null != h && !e4 && j.showCharacterCount && null == e0,
    tL = e9 && !__OVERLAY__ && null != h && null == e0 && j.toolbarType !== X.OW.NONE,
    tx = (0, ee.c)({
      channel: k,
      type: j,
      activeCommand: e0,
      pendingReply: Y,
      pendingScheduledMessage: eH,
      selectedAutocompleteInputType: tC
    }),
    tM = 0 === f.trim().length,
    tk = j.layout === X.gy.INLINE,
    tj = j.layout === X.gy.FLUSH,
    tU = (0, r.jsx)(et.Z, {
      type: j,
      disabled: e4,
      channel: k,
      handleSubmit: tu,
      isEmpty: tM,
      showAllButtons: eJ,
      children: null == H ? true : H()
    }),
    tG = tD ? (0, r.jsx)(er.Z, {
      type: j,
      textValue: f,
      className: ex,
      maxCharacterCount: eg,
      showRemainingCharsAfterCount: eD
    }) : null;
  return (0, r.jsx)(A.f6, {
    value: to,
    children: (0, r.jsxs)(b.Gt, {
      value: eY,
      children: [tL && e7 ? (0, r.jsx)(eo.Z, {
        editorRef: ez,
        options: j.markdown,
        channel: k
      }) : tL ? (0, r.jsx)(ei.Z, {
        ref: eX,
        editorRef: ez,
        containerRef: eq,
        options: j.markdown
      }) : null, (0, r.jsxs)("div", {
        ref: eW,
        className: o()(O, {
          [eu.channelTextArea]: true,
          [eu.channelTextAreaDisabled]: tP,
          [eu.highlighted]: e_,
          [eu.textAreaMobileThemed]: d.tq,
          [eu.inlineContainer]: tk,
          [eu.flushContainer]: tj,
          [eu.error]: null != B
        }),
        children: [tk || tj ? null : (0, r.jsx)(ee.Z, {
          bars: tx
        }), (0, r.jsxs)("div", {
          ref: eq,
          onScroll: tE,
          className: o()(S, {
            [eu.scrollableContainer]: true,
            [eu.themedBackground]: !eB,
            [eu.hasStackedBar]: tx.stacked.length > 0
          }),
          children: [(0, r.jsx)(J.Z, {
            channelId: k.id,
            chatInputType: j
          }), j.hideAttachmentArea ? null : (0, r.jsx)(en.Z, {
            channelId: k.id,
            type: j,
            canAttachFiles: e8
          }), (0, r.jsxs)("div", {
            className: o()(eu.inner, {
              [eu.innerDisabled]: tP,
              [eu.sansAttachButton]: j !== X.Ie.EDIT && (null != tw || tP && null == tw || e2),
              [eu.sansAttachButtonCreateThread]: j === X.Ie.THREAD_CREATION,
              [eu.sansAttachButtonCreatePost]: j === X.Ie.CREATE_FORUM_POST || j === X.Ie.FORWARD_MESSAGE_INPUT,
              [eu.sansAttachButtonUserProfileReply]: j === X.Ie.USER_PROFILE_REPLY
            }),
            onMouseDown: tN,
            children: [tw, (0, r.jsx)(p.tEY, {
              ringTarget: eW,
              ringClassName: eu.focusRing,
              children: (0, r.jsx)(Q.Z, {
                ref: ez,
                id: R,
                focused: G,
                useSlate: e9,
                textValue: f,
                richValue: h,
                disabled: e4,
                placeholder: x,
                required: P,
                accessibilityLabel: M,
                isPreviewing: (e2 || e3) && e5,
                channel: k,
                type: j,
                canPasteFiles: e8,
                uploadPromptCharacterCount: es.en1,
                maxCharacterCount: null != eg ? eg : tt,
                allowNewLines: eL,
                "aria-describedby": eM,
                onChange: ta,
                onResize: ty,
                onBlur: $,
                onFocus: ea,
                onKeyDown: ec,
                onSubmit: tc,
                onTab: tO,
                onEnter: tv,
                onMoveSelection: tI,
                onSelectionChanged: ts,
                onMaybeShowAutocomplete: tf,
                onHideAutocomplete: t_,
                promptToUpload: ef,
                fontSize: tn,
                spellcheckEnabled: tr,
                canOnlyUseTextCommands: tR,
                className: o()({
                  [eu.textAreaThreadCreation]: j === X.Ie.THREAD_CREATION,
                  [eu.profileBioInput]: j === X.Ie.PROFILE_BIO_INPUT,
                  [eu.overlayInlineReply]: j === X.Ie.OVERLAY_INLINE_REPLY
                }, N),
                "aria-labelledby": ek
              })
            }), tU]
          })]
        }), te ? null : (0, r.jsx)(I.Z, {
          ref: eK,
          channel: k,
          canOnlyUseTextCommands: tR
        }), (0, r.jsx)(T.Z, {
          ref: td,
          channel: k,
          canMentionRoles: ep,
          canMentionChannels: em,
          useNewSlashCommands: e9,
          canOnlyUseTextCommands: tR,
          canSendStickers: null == (l = j.stickers) ? true : l.allowSending,
          canSendSoundmoji: null == (u = j.soundmoji) ? true : u.allowSending,
          textValue: f,
          focused: G,
          expressionPickerView: tT,
          type: j,
          targetRef: eW,
          editorRef: ez,
          onSendMessage: tc,
          onSendSticker: tm,
          onVisibilityChange: tA,
          editorScrollerRef: eq,
          editorHeight: tb,
          barsHeight: 40 * tx.floating.length,
          setValue: (e, t) => null == ta ? true : ta(null, e, t),
          position: eU
        }), (0, r.jsx)(D.Z, {
          textValue: f,
          editorHeight: tb,
          channelId: k.id
        }), tG, eG]
      }), (0, r.jsx)(p.pdY, {
        error: B
      }), tS ? null : (0, r.jsx)(C.Z, {
        positionTargetRef: eW,
        type: j,
        onSelectGIF: tp,
        onSelectEmoji: th,
        onSelectSticker: tm,
        onSelectSound: tg,
        channel: k,
        closeOnModalOuterClick: eV,
        parentModalKey: eF,
        position: "top",
        align: "right",
        positionLayerClassName: eu.expressionPickerPositionLayer
      })]
    })
  })
}
let eL = Chunk647438.memo(Chunk647438.forwardRef(eD))