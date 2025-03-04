/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => eU
}), n(47120), n(411104), n(566702);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(836560),
  l = n(512722),
  c = n.n(l),
  u = n(232713),
  d = n(873546),
  f = n(149765),
  _ = n(442837),
  p = n(481060),
  h = n(430742),
  g = n(738619),
  m = n(393238),
  E = n(607070),
  v = n(100527),
  b = n(906732),
  y = n(541099),
  O = n(998698),
  S = n(271668),
  I = n(404295),
  T = n(326133),
  N = n(405701),
  A = n(570220),
  C = n(540059),
  R = n(28546),
  P = n(805680),
  D = n(278754),
  w = n(151574),
  L = n(368844),
  x = n(41776),
  M = n(849522),
  k = n(780291),
  j = n(328908),
  U = n(576645),
  G = n(913663),
  B = n(268350),
  V = n(378233),
  F = n(665906),
  Z = n(695346),
  H = n(271383),
  W = n(496675),
  Y = n(944486),
  K = n(398327),
  z = n(117530),
  q = n(594174),
  Q = n(626135),
  X = n(459273),
  J = n(700785),
  $ = n(358085),
  ee = n(746877),
  et = n(541716),
  en = n(667829),
  er = n(319417),
  ei = n(562267),
  eo = n(376918),
  ea = n(760196),
  es = n(258696),
  el = n(303628),
  ec = n(472243),
  eu = n(872635),
  ed = n(676108),
  ef = n(981631),
  e_ = n(665692),
  ep = n(957825),
  eh = n(25675);

function eg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function em(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eg(e, t, n[t])
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

function ev(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eE(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eb = 450;

function ey(e) {
  return e !== Y.Z.getChannelId()
}

function eO(e, t) {
  var n, r;
  return null !== (r = e && (null === (n = t.submit) || void 0 === n ? void 0 : n.clearOnSubmit)) && void 0 !== r && r
}

function eS(e, t, o, a) {
  let [s, l] = i.useState(!1), c = i.useCallback((i, u, d, f, _) => {
    var g, m, E;
    if (s) return;
    l(!0);
    let v = null !== (m = null === (g = G.Z.getStickerPreview(a, t.drafts.type)) || void 0 === g ? void 0 : g.map(e => e.id)) && void 0 !== m ? m : [],
      b = null !== (E = z.Z.getUploads(a, t.drafts.type)) && void 0 !== E ? E : [],
      y = (0, j.q5)(a);
    if (null == u && !f && !_ && (0, L.CB)(b, a)) {
      l(!1), (0, p.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("25292"), n.e("90508"), n.e("95477"), n.e("28467"), n.e("18895"), n.e("78846")]).then(n.bind(n, 273602));
        return t => (0, r.jsx)(e, ev(em({}, t), {
          threadId: a,
          attachments: b,
          sendMessage: () => c(i, void 0, void 0, void 0, !0)
        }))
      });
      return
    }
    e({
      value: i,
      uploads: b,
      stickers: v,
      confettiPotionEmoji: y,
      command: u,
      commandOptionValues: d,
      isGif: f
    }).then(e => {
      let {
        shouldClear: n,
        shouldRefocus: r
      } = e, i = eO(n, t), s = null != o.current;
      i && (ey(a) ? h.Z.saveDraft(a, "", t.drafts.type) : s && o.current.clearValue()), s && (l(!1), (0, R._Q)(), r && o.current.focus())
    })
  }, [o, e, s, t, a]);
  return {
    submitting: s,
    submit: c,
    handleSubmit: i.useCallback(e => {
      var t;
      null == o || null === (t = o.current) || void 0 === t || t.submit(e)
    }, [o])
  }
}

function eI(e, t, n) {
  return i.useCallback(r => {
    var i, o;
    t === et.Ie.CREATE_FORUM_POST ? null === (o = n.current) || void 0 === o || o.insertGIF(r) : e(r.url, void 0, void 0, !0), (0, R._Q)(), null === (i = n.current) || void 0 === i || i.focus()
  }, [n, e, t])
}

function eT(e) {
  return i.useCallback(function(t, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = e.current;
    null != t && null != i && i.insertEmoji(t, n, r), n && (0, R._Q)()
  }, [e])
}

function eN(e) {
  let {
    editorRef: t,
    disabled: n,
    textValue: r,
    channelId: o,
    chatInputType: a,
    submit: s
  } = e, {
    analyticsLocations: l
  } = (0, b.ZP)();
  return i.useCallback((e, i) => {
    var c, u;
    n || ((0, V.Hc)(i, r, o, a.drafts.type) ? ((0, eo._H)({
      sticker: e,
      stickerSelectLocation: i,
      isReplacement: null != G.Z.getStickerPreview(o, a.drafts.type),
      analyticsLocations: l
    }), (0, B.eu)(o, e, a.drafts.type)) : (s({
      value: "",
      uploads: void 0,
      stickers: [e.id]
    }), null === (u = t.current) || void 0 === u || u.clearValue()), (0, R._Q)(), null === (c = t.current) || void 0 === c || c.focus())
  }, [n, r, o, a.drafts.type, t, l, s])
}

function eA(e, t) {
  return i.useCallback((n, r, i) => {
    let o = e.current;
    null != n && null != o && (Q.default.track(ef.rMx.SOUNDMOJI_SELECT, {
      channel_id: t.id,
      guild_id: t.guild_id,
      sound_guild_id: n.guildId,
      sound_id: n.soundId,
      source: r
    }), o.insertSound(n)), i && (0, R._Q)(), null == o || o.focus()
  }, [e, t.id, t.guild_id])
}

function eC(e, t) {
  let n = i.useCallback(() => {
      !t && (0, R.RO)(ep.X1.EMOJI, e)
    }, [t, e]),
    r = i.useCallback(() => {
      var n;
      !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, R.RO)(ep.X1.GIF, e)
    }, [t, e]),
    o = i.useCallback(() => {
      var n;
      !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, R.RO)(ep.X1.STICKER, e)
    }, [t, e]);
  (0, X.yp)({
    event: ef.CkL.TOGGLE_EMOJI_POPOUT,
    handler: n
  }), (0, X.yp)({
    event: ef.CkL.TOGGLE_GIF_PICKER,
    handler: r
  }), (0, X.yp)({
    event: ef.CkL.TOGGLE_STICKER_PICKER,
    handler: o
  })
}

function eR(e, t, n) {
  let [r] = i.useState(() => new s.EventEmitter);
  i.useEffect(() => {
    r.emit("text-changed", t, n)
  }, [t, n, r]);
  let o = t => {
    null != e.current && r.emit("selection-changed", t)
  };
  return {
    eventEmitter: r,
    handleEditorSelectionChanged: o
  }
}

function eP() {
  let e = i.useRef(null),
    t = i.useCallback(() => {
      var t;
      null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete()
    }, []),
    n = i.useCallback(() => {
      var t;
      null === (t = e.current) || void 0 === t || t.onHideAutocomplete()
    }, []);
  return {
    autocompleteRef: e,
    handleMaybeShowAutocomplete: t,
    handleHideAutocomplete: n
  }
}

function eD(e) {
  let t = i.useRef(null);
  if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
  return null == e ? t : e
}

function ew(e) {
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
    o = (0, _.e7)([x.Z], () => null != i && x.Z.isLurking(i), [i]),
    a = (0, _.e7)([H.ZP, q.default], () => {
      var e, t;
      let n = q.default.getCurrentUser();
      return null !== (t = null != i && null != n ? null === (e = H.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
    }),
    s = (0, _.cj)([W.Z], () => {
      var i, o;
      let s = e.isPrivate(),
        l = W.Z.computePermissions(e),
        c = f.e$(l, ef.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, ef.Plq.CREATE_PRIVATE_THREADS),
        u = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || c) && (!(null === (o = t.permissions) || void 0 === o ? void 0 : o.requireSendMessages) || f.e$(l, ef.Plq.SEND_MESSAGES)),
        d = u && f.e$(l, ef.Plq.ATTACH_FILES),
        _ = null != n,
        p = (0, F.xl)(e);
      return {
        disabled: r || a || !s && !u || p,
        canAttachFiles: !0 === t.attachments && (s || a || d || _),
        canCreateThreads: c,
        canEveryoneSendMessages: J.Uu(ef.Plq.SEND_MESSAGES, e)
      }
    }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, a]);
  return em({
    isLurking: o,
    isPendingMember: a
  }, s)
}

function ex(e, t, n) {
  let [r, o] = (0, R.Iu)(e => [e.activeView, e.activeViewType], u.X), a = (0, _.e7)([y.Z], () => y.Z.shouldShowPopup() && y.Z.activeViewType() === e), s = (0, C.Q3)("ChannelTextAreaContainer");
  i.useEffect(() => () => {
    (0, R._Q)(e)
  }, [e]);
  let l = i.useCallback(e => {
      t.emit("autocomplete-visibility-change", e), e && (0, R._Q)()
    }, [t]),
    c = i.useCallback(() => {
      var e;
      null != r || s && a || null === (e = n.current) || void 0 === e || e.handleOuterClick()
    }, [r, s, a, n]),
    d = null == r || null == o || o !== e;
  return {
    expressionPickerView: r,
    shouldHideExpressionPicker: d,
    handleAutocompleteVisibilityChange: l,
    handleOuterClick: c
  }
}

function eM(e, t, n) {
  let r = i.useCallback(() => {
    var r, i;
    return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!1))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1)) || !1
  }, [n, t, e]);
  return {
    handleTab: r,
    handleEnter: i.useCallback(() => {
      var r, i;
      return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!0))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0)) || !1
    }, [n, t, e]),
    handleMoveSelection: i.useCallback(r => {
      var i, o;
      return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onMoveSelection(r))) || (null === (o = e.current) || void 0 === o ? void 0 : o.onMoveSelection(r)) || !1
    }, [n, t, e])
  }
}

function ek(e, t, n, r) {
  var i, o;
  let a = (0, D.pR)(),
    s = (0, _.e7)([G.Z], () => G.Z.getStickerPreview(e.id, t.drafts.type)),
    l = null != s && s.length > 0;
  return a && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (o = r.current) || void 0 === o ? void 0 : o.isVisible()) !== !0 && !__OVERLAY__ && null != n
}

function ej(e, t) {
  var n, o, s, l, u, f, h, y, R, D, L, x, j, G, B;
  let {
    textValue: V,
    richValue: F,
    className: H,
    innerClassName: W,
    editorClassName: Y,
    id: z,
    required: q,
    disabled: Q,
    placeholder: X,
    accessibilityLabel: J,
    channel: eo,
    type: ep,
    focused: eg,
    renderAttachButton: em,
    renderApplicationCommandIcon: eE,
    renderAppLauncherButton: ev,
    renderAppCommandButton: ey,
    renderLeftAccessories: eO,
    pendingReply: ej,
    onChange: eU,
    onResize: eG,
    onBlur: eB,
    onFocus: eV,
    onKeyDown: eF,
    onSubmit: eZ,
    promptToUpload: eH,
    highlighted: eW,
    canMentionRoles: eY,
    canMentionChannels: eK,
    maxCharacterCount: ez,
    showRemainingCharsAfterCount: eq,
    allowNewLines: eQ = !0,
    characterCountClassName: eX,
    "aria-describedby": eJ,
    "aria-labelledby": e$,
    setEditorRef: e0,
    autoCompletePosition: e1,
    children: e2,
    disableThemedBackground: e3 = !1,
    emojiPickerCloseOnModalOuterClick: e4,
    parentModalKey: e6,
    onCommandSentinelTyped: e5,
    pendingScheduledMessage: e7
  } = e;
  c()(null != ep, "chat input type must be set");
  let {
    analyticsLocations: e8
  } = (0, b.ZP)(v.Z.CHANNEL_TEXT_AREA), e9 = (0, C.R6)("ChannelTextAreaContainer"), te = (0, C.Q3)("ChannelTextAreaContainer"), tt = eD(t), tn = i.useRef(null), tr = i.useRef(null), ti = i.useRef(null), to = i.useRef(null);
  null == e0 || e0(tr.current);
  let ta = (0, U.Nt)(),
    ts = (0, I.h9)(eo.id),
    [tl, tc] = i.useState(!ts);
  (0, m.P)(tt, e => {
    let {
      width: t
    } = e;
    return tc(!ts && (null == t || t > eb))
  });
  let {
    activeCommand: tu,
    activeCommandSection: td
  } = (0, _.cj)([O.Z], () => {
    var e, t;
    return {
      activeCommand: (null === (e = ep.commands) || void 0 === e ? void 0 : e.enabled) ? O.Z.getActiveCommand(eo.id) : null,
      activeCommandSection: (null === (t = ep.commands) || void 0 === t ? void 0 : t.enabled) ? O.Z.getActiveCommandSection(eo.id) : null
    }
  }), {
    isLurking: tf,
    isPendingMember: t_,
    disabled: tp,
    canAttachFiles: th,
    canCreateThreads: tg,
    canEveryoneSendMessages: tm
  } = eL(eo, ep, tu, Q), tE = ep.toolbarType === et.OW.STATIC, tv = !Z.dN.useSetting() && !(0, $.isAndroidWeb)() && null != window.ResizeObserver, tb = !tv || !(null === (n = ep.commands) || void 0 === n ? void 0 : n.enabled) || !eg || V !== e_.GI, ty = (0, M.Z)(), {
    isSubmitButtonEnabled: tO,
    fontSize: tS
  } = (0, _.cj)([E.Z], () => ({
    fontSize: E.Z.fontSize,
    isSubmitButtonEnabled: E.Z.isSubmitButtonEnabled
  })), tI = (0, _.e7)([K.Z], () => K.Z.isEnabled()), tT = i.useRef(V);
  tT.current = V;
  let tN = i.useCallback((e, t, n) => {
    var r;
    t === e_.GI && "" === tT.current && (null === (r = ep.commands) || void 0 === r ? void 0 : r.enabled) && (null == e5 || e5()), null == eU || eU(e, t, n)
  }, [eU, e5, null === (o = ep.commands) || void 0 === o ? void 0 : o.enabled]);
  eC(ep, tp);
  let {
    eventEmitter: tA,
    handleEditorSelectionChanged: tC
  } = eR(tr, V, F), {
    submitting: tR,
    submit: tP,
    handleSubmit: tD
  } = eS(eZ, ep, tr, eo.id), {
    autocompleteRef: tw,
    handleMaybeShowAutocomplete: tL,
    handleHideAutocomplete: tx
  } = eP(), tM = eI(tP, ep, tr), tk = eT(tr), tj = eN({
    editorRef: tr,
    disabled: tp,
    textValue: V,
    channelId: eo.id,
    chatInputType: ep,
    submit: eZ
  }), tU = eA(tr, eo), tG = i.useCallback(() => {
    var e;
    return null == to ? void 0 : null === (e = to.current) || void 0 === e ? void 0 : e.hide()
  }, []), {
    editorHeight: tB,
    handleResize: tV
  } = ew(eG), {
    handleTab: tF,
    handleEnter: tZ,
    handleMoveSelection: tH
  } = eM(tw, tn, tb), {
    expressionPickerView: tW,
    shouldHideExpressionPicker: tY,
    handleAutocompleteVisibilityChange: tK,
    handleOuterClick: tz
  } = ex(ep, tA, tr);
  (0, ee.S)(tA, eo.guild_id, eo.id);
  let tq = null != ej,
    tQ = tp && !((tf || t_) && tm) || tR && (null === (s = ep.submit) || void 0 === s ? void 0 : s.useDisabledStylesOnSubmit),
    tX = null;
  null != tu ? tX = null == eE ? void 0 : eE(tu, td, eh.attachButton) : (!tp || tg) && (tX = null == em ? void 0 : em(tq, eh.attachButton));
  let tJ = tv && null != F && !tp && ep.showCharacterCount && null == tu,
    t$ = tv && !__OVERLAY__ && null != F && null == tu && ep.toolbarType !== et.OW.NONE,
    t0 = ek(eo, ep, F, tw),
    t1 = (0, ea.c)({
      channel: eo,
      type: ep,
      activeCommand: tu,
      pendingReply: ej,
      pendingScheduledMessage: e7
    }),
    t2 = 0 === V.trim().length,
    t3 = (0, es.G)(eo.id, ep, t2),
    t4 = !0 === ep.showSlowmodeIndicator,
    t6 = !0 === ep.showTypingIndicator,
    t5 = te && ep.layout === et.gy.INLINE,
    t7 = te && ep.layout === et.gy.FLUSH,
    t8 = i.useRef(null),
    t9 = i.useCallback(e => {
      if (e.target === t8.current) {
        var t;
        null === (t = tr.current) || void 0 === t || t.focus()
      }
    }, []),
    ne = (0, r.jsx)(es.Z, {
      type: ep,
      disabled: tp,
      channel: eo,
      handleSubmit: tD,
      isEmpty: t2,
      showAllButtons: tl,
      children: te ? null == ev ? void 0 : ev() : null
    }),
    nt = tJ ? (0, r.jsx)(ec.Z, {
      type: ep,
      textValue: V,
      className: eX,
      maxCharacterCount: ez,
      showRemainingCharsAfterCount: eq
    }) : null,
    nn = e9 ? tp ? null : (0, r.jsxs)("div", {
      className: eh.accessoryBar,
      onClick: t9,
      ref: t8,
      children: [(0, r.jsxs)("div", {
        className: eh.accessoryBarLeft,
        children: [null == eO ? void 0 : eO(), tX, t6 ? (0, r.jsx)(g.Z, {
          channel: eo,
          poggermodeEnabled: !1
        }) : null]
      }), (0, r.jsxs)("div", {
        className: eh.accessoryBarRight,
        children: [nt, ne]
      })]
    }) : null;
  return (0, r.jsx)(A.f6, {
    value: tA,
    children: (0, r.jsxs)(b.Gt, {
      value: e8,
      children: [t$ && tE ? (0, r.jsx)(ed.Z, {
        editorRef: tr,
        options: ep.markdown,
        channel: eo
      }) : t$ ? (0, r.jsx)(eu.Z, {
        ref: to,
        editorRef: tr,
        containerRef: ti,
        options: ep.markdown
      }) : null, (0, r.jsxs)("div", {
        ref: tt,
        className: a()(H, {
          [eh.channelTextArea]: !0,
          [eh.channelTextAreaDisabled]: tQ,
          [eh.highlighted]: eW,
          [eh.textAreaMobileThemed]: d.tq,
          [eh.inlineContainer]: t5,
          [eh.flushContainer]: t7
        }),
        children: [t5 || t7 ? null : (0, r.jsx)(ea.Z, {
          bars: t1
        }), (0, r.jsxs)("div", {
          ref: ti,
          onScroll: tG,
          className: a()(W, {
            [eh.scrollableContainer]: !0,
            [eh.themedBackground]: !e3,
            [eh.hasStackedBar]: t1.stacked.length > 0
          }),
          children: [(0, r.jsx)(ei.Z, {
            channelId: eo.id,
            chatInputType: ep
          }), ep.hideAttachmentArea ? null : (0, r.jsx)(el.Z, {
            channelId: eo.id,
            type: ep,
            canAttachFiles: th
          }), (0, r.jsxs)("div", {
            className: a()(eh.inner, {
              [eh.innerDisabled]: tQ,
              [eh.sansAttachButton]: ep !== et.Ie.EDIT && (null != tX || tQ && null == tX || tf),
              [eh.sansAttachButtonCreateThread]: ep === et.Ie.THREAD_CREATION,
              [eh.sansAttachButtonCreatePost]: ep === et.Ie.CREATE_FORUM_POST || ep === et.Ie.FORWARD_MESSAGE_INPUT,
              [eh.sansAttachButtonUserProfileReply]: ep === et.Ie.USER_PROFILE_REPLY
            }),
            onMouseDown: tz,
            children: [e9 ? null : tX, (0, r.jsx)(p.tEY, {
              ringTarget: tt,
              ringClassName: eh.focusRing,
              children: (0, r.jsx)(en.Z, {
                ref: tr,
                id: z,
                focused: eg,
                useSlate: tv,
                textValue: V,
                richValue: F,
                disabled: tp,
                placeholder: X,
                required: q,
                accessibilityLabel: J,
                isPreviewing: (tf || t_) && tm,
                channel: eo,
                type: ep,
                canPasteFiles: th,
                uploadPromptCharacterCount: ef.en1,
                maxCharacterCount: null != ez ? ez : ty,
                allowNewLines: eQ,
                "aria-describedby": eJ,
                onChange: tN,
                onResize: tV,
                onBlur: eB,
                onFocus: eV,
                onKeyDown: eF,
                onSubmit: tP,
                onTab: tF,
                onEnter: tZ,
                onMoveSelection: tH,
                onSelectionChanged: tC,
                onMaybeShowAutocomplete: tL,
                onHideAutocomplete: tx,
                promptToUpload: eH,
                fontSize: tS,
                spellcheckEnabled: tI,
                canOnlyUseTextCommands: tq,
                className: a()({
                  [eh.textAreaThreadCreation]: ep === et.Ie.THREAD_CREATION,
                  [eh.profileBioInput]: ep === et.Ie.PROFILE_BIO_INPUT,
                  [eh.overlayInlineReply]: ep === et.Ie.OVERLAY_INLINE_REPLY
                }, Y),
                "aria-labelledby": e$
              })
            }), e9 ? (0, r.jsxs)("div", {
              className: eh.rightAccessories,
              children: [t4 ? (0, r.jsx)(N.Z, {
                channel: eo
              }) : null, null !== (x = null == ey ? void 0 : ey()) && void 0 !== x ? x : null, (null === (l = ep.submit) || void 0 === l ? void 0 : l.button) != null && ((null === (u = ep.submit) || void 0 === u ? void 0 : u.ignorePreference) || tO) ? (0, r.jsx)(er.Z, {
                onClick: tD,
                disabled: tp || t3
              }) : null]
            }) : ne]
          })]
        }), e9 && !ep.hideAccessoryBar ? nn : null, tb ? null : (0, r.jsx)(S.Z, {
          ref: tn,
          channel: eo,
          canOnlyUseTextCommands: tq
        }), (0, r.jsx)(T.Z, {
          ref: tw,
          channel: eo,
          canMentionRoles: eY,
          canMentionChannels: eK,
          useNewSlashCommands: tv,
          canOnlyUseTextCommands: tq,
          canSendStickers: null === (f = ep.stickers) || void 0 === f ? void 0 : f.allowSending,
          canSendSoundmoji: null === (h = ep.soundmoji) || void 0 === h ? void 0 : h.allowSending,
          textValue: V,
          focused: eg,
          expressionPickerView: tW,
          type: ep,
          targetRef: tt,
          editorRef: tr,
          onSendMessage: tP,
          onSendSticker: tj,
          onVisibilityChange: tK,
          editorHeight: tB,
          setValue: (e, t) => null == tN ? void 0 : tN(null, e, t),
          position: e1
        }), (0, r.jsx)(k.Z, {
          textValue: V,
          editorHeight: tB,
          channelId: eo.id
        }), e9 ? null : nt, t0 ? (0, r.jsx)(w.Z, {
          editorRef: tr,
          channel: eo,
          isEditorFocused: eg,
          onSelectSticker: tj,
          submitButtonVisible: (null === (y = ep.submit) || void 0 === y ? void 0 : y.button) && (null !== (j = null === (R = ep.submit) || void 0 === R ? void 0 : R.ignorePreference) && void 0 !== j ? j : tO),
          stickerIconVisible: null !== (G = null === (D = ep.stickers) || void 0 === D ? void 0 : D.button) && void 0 !== G && G && !(ta && null !== (B = null === (L = ep.confetti) || void 0 === L ? void 0 : L.button) && void 0 !== B && B)
        }) : null, e2]
      }), tY ? null : (0, r.jsx)(P.Z, {
        positionTargetRef: tt,
        type: ep,
        onSelectGIF: tM,
        onSelectEmoji: tk,
        onSelectSticker: tj,
        onSelectSound: tU,
        channel: eo,
        closeOnModalOuterClick: e4,
        parentModalKey: e6,
        position: "top",
        align: "right",
        positionLayerClassName: eh.expressionPickerPositionLayer
      })]
    })
  })
}
let eU = i.memo(i.forwardRef(ej))