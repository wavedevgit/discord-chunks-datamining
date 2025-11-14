/** Chunk was on web.js **/
/** chunk id: 893718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O1: () => eA,
  Sg: () => eT,
  TE: () => ex,
  ZP: () => eB,
  aT: () => ej,
  ae: () => eS,
  bL: () => eI,
  hJ: () => eN,
  iV: () => eL,
  jx: () => eP,
  oR: () => ew,
  qz: () => eD,
  vB: () => eU,
  x2: () => eR
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
  Chunk303628 = require("./303628.jsx"),
  Chunk472243 = require("./472243.jsx"),
  Chunk872635 = require("./872635.jsx"),
  Chunk887490 = require("./887490.js"),
  Chunk676108 = require("./676108.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk761652 = require("./761652.js"),
  Chunk957825 = require("./957825.js"),
  Chunk564355 = require("./564355.js");

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
  return e !== H.Z.getChannelId()
}

function ev(e, t) {
  var n, r;
  return null != (r = e && (null == (n = t.submit) ? true : n.clearOnSubmit)) && r
}

function eI(e, t, a, o, s) {
  let [l, c] = i.useState(false), u = i.useCallback((i, d, f, _, m) => {
    var g, E, b;
    if (l) return;
    c(true);
    let y = null != (E = null == (g = j.Z.getStickerPreview(s, t.drafts.type)) ? true : g.map(e => e.id)) ? E : [],
      O = null != (b = W.Z.getUploads(s, t.drafts.type)) ? b : [],
      v = (0, k.q5)(s);
    if (null == d && !_ && !m && (0, D.CB)(O, s)) {
      c(false), (0, p.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("57804"), n.e("90508"), n.e("22173"), n.e("95546"), n.e("48890")]).then(n.bind(n, 273602));
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
      confettiPotionEmoji: v,
      command: d,
      commandOptionValues: f,
      isGif: _
    }).then(e => {
      var n, r, i;
      let {
        shouldClear: l,
        shouldRefocus: u
      } = e, d = ev(l, t), f = null != a.current;
      d && (eO(s) ? h.Z.saveDraft(s, "", t.drafts.type) : f && (null == (r = a.current) || r.clearValue(), null == (i = o.current) || i.hide())), f && (c(false), (0, R._Q)(), u && (null == (n = a.current) || n.focus()))
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
    t === ee.Ie.CREATE_FORUM_POST || t === ee.Ie.CREATE_ANNOUNCEMENT_POST ? null == (a = n.current) || a.insertGIF(r) : e(r.url, true, true, true), (0, R._Q)(), null == (i = n.current) || i.focus()
  }, [n, e, t])
}

function eS(e) {
  return i.useCallback(t => {
    let {
      emoji: n,
      willClose: r
    } = t, i = e.current;
    null != n && null != i && i.insertEmoji({
      emoji: n,
      willClose: r
    }), r && (0, R._Q)()
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
      isReplacement: null != j.Z.getStickerPreview(a, o.drafts.type),
      analyticsLocations: l
    }), (0, U.eu)(a, e, o.drafts.type)) : (s({
      value: "",
      uploads: true,
      stickers: [e.id]
    }), null == (u = t.current) || u.clearValue()), (0, R._Q)(), null == (c = t.current) || c.focus())
  }, [n, r, a, t, l, s, o])
}

function eC(e, t) {
  return i.useCallback((n, r, i) => {
    let a = e.current;
    null != n && null != a && (z.default.track(ed.rMx.SOUNDMOJI_SELECT, {
      channel_id: t.id,
      guild_id: t.guild_id,
      sound_guild_id: n.guildId,
      sound_id: n.soundId,
      source: r
    }), a.insertSound(n)), i && (0, R._Q)(), null == a || a.focus()
  }, [e, t.id, t.guild_id])
}

function eN(e, t) {
  let n = i.useCallback(() => {
      t || (0, R.RO)(e_.X1.EMOJI, e)
    }, [t, e]),
    r = i.useCallback(() => {
      var n;
      !t && (null == (n = e.gifs) ? true : n.allowSending) && (0, R.RO)(e_.X1.GIF, e)
    }, [t, e]),
    a = i.useCallback(() => {
      var n;
      !t && (null == (n = e.stickers) ? true : n.allowSending) && (0, R.RO)(e_.X1.STICKER, e)
    }, [t, e]);
  (0, q.yp)({
    event: ed.CkL.TOGGLE_EMOJI_POPOUT,
    handler: n
  }), (0, q.yp)({
    event: ed.CkL.TOGGLE_GIF_PICKER,
    handler: r
  }), (0, q.yp)({
    event: ed.CkL.TOGGLE_STICKER_PICKER,
    handler: a
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

function eP() {
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

function ex(e, t, n, r) {
  let i = e.getGuildId(),
    a = (0, _.e7)([w.Z], () => null != i && w.Z.isLurking(i), [i]),
    o = (0, _.e7)([F.ZP, K.default], () => {
      var e, t;
      let n = K.default.getCurrentUser();
      return null != (t = null != i && null != n ? null == (e = F.ZP.getMember(i, n.id)) ? true : e.isPending : null) && t
    }),
    s = (0, _.cj)([V.Z], () => {
      var i, a;
      let s = e.isPrivate(),
        l = V.Z.computePermissions(e),
        c = f.e$(l, ed.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, ed.Plq.CREATE_PRIVATE_THREADS),
        u = (!(null == (i = t.permissions) ? true : i.requireCreateTherads) || c) && (!(null == (a = t.permissions) ? true : a.requireSendMessages) || f.e$(l, ed.Plq.SEND_MESSAGES)),
        d = u && f.e$(l, ed.Plq.ATTACH_FILES),
        _ = null != n,
        p = (0, B.xl)(e);
      return {
        disabled: r || o || !s && !u || p,
        canAttachFiles: true === t.attachments && (s || o || d || _),
        canCreateThreads: c,
        canEveryoneSendMessages: X.Uu(ed.Plq.SEND_MESSAGES, e)
      }
    }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
  return em({
    isLurking: a,
    isPendingMember: o
  }, s)
}

function eL(e, t) {
  let [n, r] = (0, R.Iu)(e => [e.activeView, e.activeViewType], u.X), a = (0, _.e7)([O.Z], () => O.Z.shouldShowPopup() && O.Z.activeViewType() === e);
  i.useEffect(() => () => {
    (0, R._Q)(e)
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
  let [n, r] = i.useState(null), a = i.useCallback(() => {
    var e, n;
    let i, a = null == (e = t.current) ? true : e.getSlateEditor();
    null != a && (i = null == (n = ec.bN.getSelectedParentOfType(a, C.un)) ? true : n[0].type), r(null != i ? i : null)
  }, [t]);
  return i.useEffect(() => (e.on("selection-changed", a), a(), () => {
    e.off("selection-changed", a)
  }), [a, e]), n
}
let ej = e => {
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
  eU = () => {
    let {
      enabled: e
    } = (0, Chunk657871.zM)("ChannelTextAreaContainer", {
      autoTrackExposure: false
    }), [t, n] = Chunk647438.useState(null);
    return {
      currentAutocompleteType: exports,
      handleAutocompleteVisibilityChange: Chunk647438.useCallback((t, r) => {
        e && n(r), t && (0, R._Q)()
      }, [module])
    }
  };

function eG(e, t) {
  var n, a, s, l, u;
  let {
    textValue: f,
    richValue: h,
    className: O,
    innerClassName: C,
    editorClassName: R,
    id: D,
    required: w,
    disabled: x,
    placeholder: k,
    accessibilityLabel: j,
    channel: U,
    type: G,
    focused: B,
    error: F,
    renderAttachButton: V,
    renderApplicationCommandIcon: H,
    pendingReply: W,
    onChange: K,
    onResize: z,
    onBlur: q,
    onFocus: X,
    onKeyDown: er,
    onSubmit: ec,
    promptToUpload: e_,
    highlighted: eh,
    canMentionRoles: em,
    canMentionChannels: eg,
    maxCharacterCount: eE,
    showRemainingCharsAfterCount: ey,
    allowNewLines: eO = true,
    characterCountClassName: ev,
    "aria-describedby": eG,
    "aria-labelledby": eB,
    setEditorRef: eZ,
    autoCompletePosition: eF,
    children: eV,
    disableThemedBackground: eH = false,
    emojiPickerCloseOnModalOuterClick: eY,
    parentModalKey: eW,
    pendingScheduledMessage: eK,
    showValueWhenDisabled: ez = false
  } = e;
  c()(null != G, "chat input type must be set");
  let {
    analyticsLocations: eq
  } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA), eX = eD(t), eQ = i.useRef(null), eJ = i.useRef(null), e$ = i.useRef(null), e0 = i.useRef(null), e1 = i.useRef(null);
  null == eZ || eZ(e$.current);
  let e2 = (0, y.Z)(U),
    [e3, e4] = i.useState(!e2);
  (0, m.PM)(eX, e => {
    let {
      width: t
    } = e;
    return e4(!e2 && (null == t || t > eb))
  });
  let {
    activeCommand: e8,
    activeCommandSection: e5
  } = (0, _.cj)([I.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = G.commands) ? true : e.enabled) ? I.Z.getActiveCommand(U.id) : null,
      activeCommandSection: (null == (t = G.commands) ? true : t.enabled) ? I.Z.getActiveCommandSection(U.id) : null
    }
  }), {
    isLurking: e6,
    isPendingMember: e7,
    disabled: e9,
    canAttachFiles: te,
    canCreateThreads: tt,
    canEveryoneSendMessages: tn
  } = ex(U, G, e8, x), tr = G.toolbarType === ee.OW.STATIC, ti = !Z.dN.useSetting() && !(0, Q.isAndroidWeb)() && null != window.ResizeObserver, ta = !ti || !(null == (n = G.commands) ? true : n.enabled) || !B || f !== ef.GI, to = (0, L.Z)(), {
    fontSize: ts
  } = (0, _.cj)([g.Z], () => ({
    fontSize: g.Z.fontSize
  })), tl = (0, _.e7)([Y.Z], () => Y.Z.isEnabled());
  eN(G, e9);
  let {
    eventEmitter: tc,
    handleEditorSelectionChanged: tu
  } = eR(e$, f, h), td = i.useRef(f);
  td.current = f;
  let tf = i.useCallback((e, t, n) => {
      var r;
      t === ef.GI && "" === td.current && (null == (r = G.commands) ? true : r.enabled) && tc.emit("command-sentinel-typed"), null == K || K(e, t, n)
    }, [K, null == (a = G.commands) ? true : a.enabled, tc]),
    {
      submitting: t_,
      submit: tp,
      handleSubmit: th
    } = eI(ec, G, e$, e1, U.id),
    {
      autocompleteRef: tm,
      handleMaybeShowAutocomplete: tg,
      handleHideAutocomplete: tE
    } = eP(),
    tb = eT(tp, G, e$),
    ty = eS(e$),
    tO = eA({
      editorRef: e$,
      disabled: e9,
      textValue: f,
      channelId: U.id,
      chatInputType: G,
      submit: ec
    }),
    tv = eC(e$, U),
    tI = i.useCallback(() => {
      var e;
      return null == e1 || null == (e = e1.current) ? true : e.hide()
    }, []),
    {
      editorHeight: tT,
      handleResize: tS
    } = ew(z),
    {
      handleTab: tA,
      handleEnter: tC,
      handleMoveSelection: tN
    } = eM(tm, eQ, ta),
    {
      expressionPickerView: tR,
      shouldHideExpressionPicker: tP,
      handleOuterClick: tD
    } = eL(G, e$),
    tw = ek(tc, e$),
    tx = ej(f),
    {
      currentAutocompleteType: tL,
      handleAutocompleteVisibilityChange: tM
    } = eU(),
    {
      moveAppsEntrypointToOverflow: tk
    } = $.n.useConfig({
      location: "ChannelAppLauncher"
    }),
    tj = (0, S.Z)({
      type: G
    });
  (0, J.S)(tc, U.guild_id, U.id);
  let tU = null != W,
    tG = e9 && !((e6 || e7) && tn) || t_ && (null == (s = G.submit) ? true : s.useDisabledStylesOnSubmit),
    tB = null;
  null != e8 ? tB = null == H ? true : H(e8, e5, ep.attachButton) : (!e9 || tt) && (tB = null == V ? true : V(tU, ep.attachButton));
  let tZ = ti && null != h && !e9 && G.showCharacterCount && null == e8,
    tF = ti && !__OVERLAY__ && null != h && null == e8 && G.toolbarType !== ee.OW.NONE && !e9,
    tV = (0, ei.c)({
      channel: U,
      type: G,
      activeCommand: e8,
      pendingReply: W,
      pendingScheduledMessage: eK,
      selectedAutocompleteInputType: tw
    }),
    tH = 0 === f.trim().length,
    tY = G.layout === ee.gy.INLINE,
    tW = G.layout === ee.gy.FLUSH,
    tK = (0, r.jsx)("div", {
      ref: eJ,
      className: ep.hiddenAppLauncherAnchor
    }),
    tz = tj ? (0, r.jsx)(v.Z, {
      align: tk && G !== ee.Ie.SIDEBAR ? "left" : "right",
      positionTargetRef: eJ,
      channel: U
    }) : null,
    tq = (0, r.jsx)(ea.Z, {
      type: G,
      disabled: e9,
      channel: U,
      handleSubmit: th,
      isEmpty: tH,
      showAllButtons: e3
    }),
    tX = tZ ? (0, r.jsx)(es.Z, {
      type: G,
      textValue: f,
      className: ev,
      maxCharacterCount: eE,
      showRemainingCharsAfterCount: ey
    }) : null;
  return (0, r.jsx)(N.f6, {
    value: tc,
    children: (0, r.jsxs)(b.Gt, {
      value: eq,
      children: [tF && tr ? (0, r.jsx)(eu.Z, {
        editorRef: e$,
        options: G.markdown,
        channel: U
      }) : tF ? (0, r.jsx)(el.Z, {
        ref: e1,
        editorRef: e$,
        containerRef: e0,
        options: G.markdown
      }) : null, (0, r.jsxs)("div", {
        ref: eX,
        className: o()(O, {
          [ep.channelTextArea]: true,
          [ep.channelTextAreaDisabled]: tG,
          [ep.highlighted]: eh,
          [ep.textAreaMobileThemed]: d.tq,
          [ep.inlineContainer]: tY,
          [ep.flushContainer]: tW,
          [ep.error]: null != F
        }),
        children: [tY || tW ? null : (0, r.jsx)(ei.Z, {
          bars: tV
        }), (0, r.jsxs)("div", {
          ref: e0,
          onScroll: tI,
          className: o()(C, {
            [ep.scrollableContainer]: true,
            [ep.themedBackground]: !eH,
            [ep.hasStackedBar]: tV.stacked.length > 0
          }),
          children: [(0, r.jsx)(en.Z, {
            channelId: U.id,
            chatInputType: G
          }), G.hideAttachmentArea ? null : (0, r.jsx)(eo.Z, {
            channelId: U.id,
            type: G,
            canAttachFiles: te
          }), (0, r.jsxs)("div", {
            className: o()(ep.inner, {
              [ep.innerDisabled]: tG,
              [ep.sansAttachButton]: G !== ee.Ie.EDIT && (null != tB || tG && null == tB || e6),
              [ep.sansAttachButtonCreateThread]: G === ee.Ie.THREAD_CREATION,
              [ep.sansAttachButtonCreatePost]: G === ee.Ie.CREATE_FORUM_POST || G === ee.Ie.FORWARD_MESSAGE_INPUT,
              [ep.sansAttachButtonUserProfileReply]: G === ee.Ie.USER_PROFILE_REPLY
            }),
            onMouseDown: tD,
            children: [tz, tk && tK, tB, (0, r.jsx)(p.tEY, {
              ringTarget: eX,
              ringClassName: ep.focusRing,
              children: (0, r.jsx)(et.Z, {
                ref: e$,
                id: D,
                focused: B,
                useSlate: ti,
                textValue: f,
                richValue: h,
                disabled: e9,
                placeholder: k,
                required: w,
                accessibilityLabel: j,
                isPreviewing: (e6 || e7) && tn,
                channel: U,
                type: G,
                canPasteFiles: te,
                uploadPromptCharacterCount: ed.en1,
                maxCharacterCount: null != eE ? eE : to,
                allowNewLines: eO,
                "aria-describedby": eG,
                onChange: tf,
                onResize: tS,
                onBlur: q,
                onFocus: X,
                onKeyDown: er,
                onSubmit: tp,
                onTab: tA,
                onEnter: tC,
                onMoveSelection: tN,
                onSelectionChanged: tu,
                onMaybeShowAutocomplete: tg,
                onHideAutocomplete: tE,
                promptToUpload: e_,
                fontSize: ts,
                spellcheckEnabled: tl,
                canOnlyUseTextCommands: tU,
                isEditorIdle: tx,
                currentAutocompleteType: tL,
                className: o()({
                  [ep.textAreaThreadCreation]: G === ee.Ie.THREAD_CREATION,
                  [ep.profileBioInput]: G === ee.Ie.PROFILE_BIO_INPUT,
                  [ep.overlayInlineReply]: G === ee.Ie.OVERLAY_INLINE_REPLY
                }, R),
                "aria-labelledby": eB,
                showValueWhenDisabled: ez
              })
            }), tq, !tk && tK]
          })]
        }), ta ? null : (0, r.jsx)(T.Z, {
          ref: eQ,
          channel: U,
          canOnlyUseTextCommands: tU
        }), (0, r.jsx)(A.Z, {
          ref: tm,
          channel: U,
          canMentionRoles: em,
          canMentionChannels: eg,
          useNewSlashCommands: ti,
          canOnlyUseTextCommands: tU,
          canSendStickers: null == (l = G.stickers) ? true : l.allowSending,
          canSendSoundmoji: null == (u = G.soundmoji) ? true : u.allowSending,
          textValue: f,
          focused: B,
          isEditorIdle: tx,
          expressionPickerView: tR,
          type: G,
          targetRef: eX,
          editorRef: e$,
          onSendMessage: tp,
          onSendSticker: tO,
          onVisibilityChange: tM,
          editorScrollerRef: e0,
          editorHeight: tT,
          barsHeight: 40 * tV.floating.length,
          setValue: (e, t) => null == tf ? true : tf(null, e, t),
          position: eF
        }), (0, r.jsx)(M.Z, {
          textValue: f,
          editorHeight: tT,
          channelId: U.id
        }), tX, eV]
      }), (0, r.jsx)(p.pdY, {
        error: F
      }), tP ? null : (0, r.jsx)(P.Z, {
        positionTargetRef: eX,
        type: G,
        onSelectGIF: tb,
        onSelectEmoji: ty,
        onSelectSticker: tO,
        onSelectSound: tv,
        channel: U,
        closeOnModalOuterClick: eY,
        parentModalKey: eW,
        position: "top",
        align: "right",
        positionLayerClassName: ep.expressionPickerPositionLayer
      })]
    })
  })
}
let eB = Chunk647438.memo(Chunk647438.forwardRef(eG))