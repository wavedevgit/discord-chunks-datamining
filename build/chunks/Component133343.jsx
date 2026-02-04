/** Chunk was on web.js **/
/** chunk id: 133343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eF,
  BX: () => ek,
  C: () => eT,
  L0: () => eP,
  MD: () => ex,
  NO: () => eS,
  N_: () => eN,
  Sk: () => eL,
  Vu: () => eI,
  Zx: () => eA,
  ck: () => eD,
  ml: () => ew,
  uW: () => eU,
  v7: () => eR
}), require("./896048.js"), require("./65821.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk143236 = require("./143236.js"),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk942381 = require("./942381.js"),
  Chunk607399 = require("./607399.js"),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk465532 = require("./465532.js"),
  Chunk765671 = require("./765671.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk177640 = require("./177640.js"),
  Chunk989837 = require("./989837.js"),
  Chunk667889 = require("./667889.jsx"),
  Chunk861382 = require("./861382.js"),
  Chunk391848 = require("./391848.jsx"),
  Chunk186226 = require("./186226.js"),
  Chunk875163 = require("./875163.jsx"),
  Chunk31498 = require("./31498.js"),
  Chunk598071 = require("./598071.js"),
  Chunk151271 = require("./151271.js"),
  Chunk834755 = require("./834755.jsx"),
  Chunk256265 = require("./256265.js"),
  Chunk380544 = require("./380544.js"),
  Chunk857071 = require("./857071.js"),
  Chunk968011 = require("./968011.js"),
  Chunk135621 = require("./135621.js"),
  Chunk235430 = require("./235430.jsx"),
  Chunk931664 = require("./931664.js"),
  Chunk631576 = require("./631576.js"),
  Chunk378058 = require("./378058.js"),
  Chunk406704 = require("./406704.js"),
  Chunk253932 = require("./253932.js"),
  Chunk696451 = require("./696451.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk638128 = require("./638128.js"),
  Chunk522602 = require("./522602.js"),
  Chunk287809 = require("./287809.js"),
  Chunk821102 = require("./821102.js"),
  Chunk954571 = require("./954571.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk488926 = require("./488926.js"),
  Chunk723702 = require("./723702.js"),
  Chunk486319 = require("./486319.js"),
  Chunk355622 = require("./355622.js"),
  Chunk415409 = require("./415409.jsx"),
  Chunk824842 = require("./824842.jsx"),
  Chunk612394 = require("./612394.js"),
  Chunk877146 = require("./877146.jsx"),
  Chunk147025 = require("./147025.jsx"),
  Chunk776384 = require("./776384.jsx"),
  Chunk171593 = require("./171593.jsx"),
  Chunk257108 = require("./257108.jsx"),
  Chunk135261 = require("./135261.jsx"),
  Chunk711371 = require("./711371.js"),
  Chunk476739 = require("./476739.jsx"),
  Chunk652215 = require("./652215.js");
require("./827669.js");
var Chunk698279 = require("./698279.js"),
  Chunk111314 = require("./111314.js");

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
let ey = 450,
  eb = 250;

function eO(e) {
  return e !== Y.A.getChannelId()
}

function ev(e, t) {
  var n, r;
  return null != (n = e && (null == (r = t.submit) ? true : r.clearOnSubmit)) && n
}

function eA(e, t, a, o, s) {
  let [l, c] = i.useState(false), u = i.useCallback((i, d, f, p, m, g) => {
    var E, y, b;
    if (l) return;
    c(true);
    let O = null != (E = null == (b = k.A.getStickerPreview(s, t.drafts.type)) ? true : b.map(e => e.id)) ? E : [],
      v = null != (y = K.A.getUploads(s, t.drafts.type)) ? y : [];
    if (null == d && !p && !m && (0, P.xz)(v, s)) {
      c(false), (0, _.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49681"), n.e("99011"), n.e("94857"), n.e("7034"), n.e("12907"), n.e("7602"), n.e("39289")]).then(n.bind(n, 538899));
        return t => (0, r.jsx)(e, eE(em({}, t), {
          threadId: s,
          attachments: v,
          sendMessage: () => u(i, true, true, true, true)
        }))
      });
      return
    }
    e({
      value: i,
      uploads: v,
      stickers: O,
      command: d,
      commandOptionValues: f,
      isGif: p,
      gifMetadata: g
    }).then(e => {
      var n, r, i;
      let {
        shouldClear: l,
        shouldRefocus: u
      } = e, d = ev(l, t), f = null != a.current;
      d && (eO(s) ? h.A.saveDraft(s, "", t.drafts.type) : f && (null == (r = a.current) || r.clearValue(), null == (i = o.current) || i.hide())), f && (c(false), (0, w.v8)(), u && (null == (n = a.current) || n.focus()))
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
    var i, a, o;
    if (t === ee.oU.CREATE_FORUM_POST || t === ee.oU.CREATE_ANNOUNCEMENT_POST) null == (a = n.current) || a.insertGIF(r);
    else {
      let t = {
        gif_provider: null != (o = r.provider) ? o : (0, D.cf)(),
        load_id: q.A.getAnalyticsID(),
        source_object: "GIF Picker",
        gif_url: r.url,
        gif_id: r.id
      };
      e(r.url, true, true, true, true, t)
    }(0, w.v8)(), null == (i = n.current) || i.focus()
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
    }), r && (0, w.v8)()
  }, [e])
}

function eT(e) {
  let {
    editorRef: t,
    disabled: n,
    textValue: r,
    channelId: a,
    chatInputType: o,
    submit: s
  } = e, {
    analyticsLocations: l
  } = (0, y.Ay)();
  return i.useCallback((e, i) => {
    var c, u;
    n || (o === ee.oU.CREATE_ANNOUNCEMENT_POST || (0, G.YS)(i, r, a, o.drafts.type) ? ((0, er.fh)({
      sticker: e,
      stickerSelectLocation: i,
      isReplacement: null != k.A.getStickerPreview(a, o.drafts.type),
      analyticsLocations: l
    }), (0, U.$x)(a, e, o.drafts.type)) : (s({
      value: "",
      uploads: true,
      stickers: [e.id]
    }), null == (u = t.current) || u.clearValue()), (0, w.v8)(), null == (c = t.current) || c.focus())
  }, [n, r, a, t, l, s, o])
}

function eC(e, t) {
  return i.useCallback((n, r, i) => {
    let a = e.current;
    null != n && null != a && (Z.default.track(ef.HAw.SOUNDMOJI_SELECT, {
      channel_id: t.id,
      guild_id: t.guild_id,
      sound_guild_id: n.guildId,
      sound_id: n.soundId,
      source: r
    }), a.insertSound(n)), i && (0, w.v8)(), null == a || a.focus()
  }, [e, t.id, t.guild_id])
}

function eN(e, t, n) {
  let r = i.useCallback(() => {
      t || (0, w.r$)(ep.kx.EMOJI, e, n)
    }, [t, e, n]),
    a = i.useCallback(() => {
      var r;
      !t && (null == (r = e.gifs) ? true : r.allowSending) && (0, w.r$)(ep.kx.GIF, e, n)
    }, [t, e, n]),
    o = i.useCallback(() => {
      var r;
      !t && (null == (r = e.stickers) ? true : r.allowSending) && (0, w.r$)(ep.kx.STICKER, e, n)
    }, [t, e, n]);
  (0, Q.Vo)({
    event: ef.jej.TOGGLE_EMOJI_POPOUT,
    handler: r
  }), (0, Q.Vo)({
    event: ef.jej.TOGGLE_GIF_PICKER,
    handler: a
  }), (0, Q.Vo)({
    event: ef.jej.TOGGLE_STICKER_PICKER,
    handler: o
  })
}

function ew(e, t, n) {
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

function eR() {
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

function eP(e) {
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

function eL(e, t, n, r) {
  let i = e.getGuildId(),
    a = (0, p.bG)([L.A], () => null != i && L.A.isLurking(i), [i]),
    o = (0, p.bG)([B.Ay, z.default], () => {
      var e, t;
      let n = z.default.getCurrentUser();
      return null != (e = null != i && null != n ? null == (t = B.Ay.getMember(i, n.id)) ? true : t.isPending : null) && e
    }),
    s = (0, p.cf)([H.A], () => {
      var i, a;
      let s = e.isPrivate(),
        l = H.A.computePermissions(e),
        c = f.zy(l, ef.xBc.CREATE_PUBLIC_THREADS) || f.zy(l, ef.xBc.CREATE_PRIVATE_THREADS),
        u = (!(null == (i = t.permissions) ? true : i.requireCreateTherads) || c) && (!(null == (a = t.permissions) ? true : a.requireSendMessages) || f.zy(l, ef.xBc.SEND_MESSAGES)),
        d = u && f.zy(l, ef.xBc.ATTACH_FILES),
        p = null != n,
        _ = (0, F.UJ)(e);
      return {
        disabled: r || o || !s && !u || _,
        canAttachFiles: true === t.attachments && (s || o || d || p),
        canCreateThreads: c,
        canEveryoneSendMessages: X.MJ(ef.xBc.SEND_MESSAGES, e)
      }
    }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
  return em({
    isLurking: a,
    isPendingMember: o
  }, s)
}

function ex(e, t, n) {
  let [r, a, o] = (0, w.RQ)(e => [e.activeView, e.activeViewType, e.activeChannelId], u.x), s = (0, p.bG)([O.A], () => O.A.shouldShowPopup() && O.A.activeViewType() === e && O.A.activeChannelId() === n);
  i.useEffect(() => () => {
    (0, w.v8)(e, n)
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

function ej(e, t) {
  let [n, r] = i.useState({
    selectedAutocompleteInputType: null,
    selectedAutocompleteInputError: false
  }), a = i.useCallback(() => {
    var e, n, i, a;
    let o, s = null == (i = t.current) ? true : i.getSlateEditor();
    null != s && (o = null == (a = eu.VW.getSelectedParentOfType(s, C.mk)) ? true : a[0]), r({
      selectedAutocompleteInputType: null != (e = null == o ? true : o.type) ? e : null,
      selectedAutocompleteInputError: null != (n = null == o ? true : o.error) && n
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
    } = (0, x.us)("ChannelTextAreaContainer", {
      autoTrackExposure: false
    }), [r, a] = i.useState(true), o = i.useRef(null);
    return i.useLayoutEffect(() => {
      t && !n && (clearTimeout(o.current), a(false), o.current = setTimeout(() => {
        a(true)
      }, eb))
    }, [n, t, e]), r
  },
  eU = (e, t) => {
    let {
      enabled: n
    } = (0, x.us)("ChannelTextAreaContainer", {
      autoTrackExposure: false
    }), [r, a] = i.useState(null);
    return {
      currentAutocompleteType: r,
      handleAutocompleteVisibilityChange: i.useCallback((r, i) => {
        n && a(i), r && (0, w.v8)(e, t)
      }, [n, e, t])
    }
  };

function eG(e, t) {
  var n, a, s, l, u;
  let {
    textValue: f,
    richValue: h,
    className: O,
    innerClassName: C,
    editorClassName: w,
    id: P,
    required: D,
    disabled: L,
    placeholder: x,
    accessibilityLabel: k,
    channel: U,
    type: G,
    focused: F,
    error: B,
    renderAttachButton: H,
    renderApplicationCommandIcon: Y,
    renderButtons: K,
    pendingReply: z,
    onChange: q,
    onResize: Z,
    onBlur: Q,
    onFocus: X,
    onKeyDown: er,
    onSubmit: eu,
    promptToUpload: ep,
    highlighted: eh,
    canMentionRoles: em,
    canMentionChannels: eg,
    maxCharacterCount: eE,
    showRemainingCharsAfterCount: eb,
    allowNewLines: eO = true,
    characterCountClassName: ev,
    "aria-describedby": eG,
    "aria-labelledby": eF,
    setEditorRef: eV,
    autoCompletePosition: eB,
    children: eH,
    disableThemedBackground: eY = false,
    emojiPickerCloseOnModalOuterClick: eW,
    parentModalKey: eK,
    pendingScheduledMessage: ez,
    showValueWhenDisabled: eq = false
  } = e;
  c()(null != G, "chat input type must be set");
  let {
    analyticsLocations: eZ
  } = (0, y.Ay)(E.A.CHANNEL_TEXT_AREA), eQ = eP(t), eX = i.useRef(null), eJ = i.useRef(null), e$ = i.useRef(null), e0 = i.useRef(null), e1 = i.useRef(null);
  null == eV || eV(e$.current);
  let e2 = (0, b.A)(U),
    [e3, e6] = i.useState(!e2);
  (0, m.i4)(eQ, e => {
    let {
      width: t
    } = e;
    return e6(!e2 && (null == t || t > ey))
  });
  let {
    activeCommand: e4,
    activeCommandSection: e5
  } = (0, p.cf)([A.A], () => {
    var e, t;
    return {
      activeCommand: (null == (e = G.commands) ? true : e.enabled) ? A.A.getActiveCommand(U.id) : null,
      activeCommandSection: (null == (t = G.commands) ? true : t.enabled) ? A.A.getActiveCommandSection(U.id) : null
    }
  }), {
    isLurking: e7,
    isPendingMember: e8,
    disabled: e9,
    canAttachFiles: te,
    canCreateThreads: tt,
    canEveryoneSendMessages: tn
  } = eL(U, G, e4, L), tr = G.toolbarType === ee.O1.STATIC, ti = !V.D_.useSetting() && !(0, J.isAndroidWeb)() && null != window.ResizeObserver, ta = !ti || !(null == (n = G.commands) ? true : n.enabled) || !F || "/" !== f, to = (0, M.A)(), {
    fontSize: ts
  } = (0, p.cf)([g.A], () => ({
    fontSize: g.A.fontSize
  })), tl = (0, p.bG)([W.A], () => W.A.isEnabled());
  eN(G, e9, U.id);
  let {
    eventEmitter: tc,
    handleEditorSelectionChanged: tu
  } = ew(e$, f, h), td = i.useRef(f);
  td.current = f;
  let tf = i.useCallback((e, t, n) => {
      var r;
      "/" === t && "" === td.current && (null == (r = G.commands) ? true : r.enabled) && tc.emit("command-sentinel-typed"), null == q || q(e, t, n)
    }, [q, null == (a = G.commands) ? true : a.enabled, tc]),
    {
      submitting: tp,
      submit: t_,
      handleSubmit: th
    } = eA(eu, G, e$, e1, U.id),
    {
      autocompleteRef: tm,
      handleMaybeShowAutocomplete: tg,
      handleHideAutocomplete: tE
    } = eR(),
    ty = eI(t_, G, e$),
    tb = eS(e$),
    tO = eT({
      editorRef: e$,
      disabled: e9,
      textValue: f,
      channelId: U.id,
      chatInputType: G,
      submit: eu
    }),
    tv = eC(e$, U),
    tA = i.useCallback(() => {
      var e;
      return null == e1 || null == (e = e1.current) ? true : e.hide()
    }, []),
    {
      editorHeight: tI,
      handleResize: tS
    } = eD(Z),
    {
      handleTab: tT,
      handleEnter: tC,
      handleMoveSelection: tN
    } = eM(tm, eX, ta),
    {
      expressionPickerView: tw,
      shouldHideExpressionPicker: tR,
      handleOuterClick: tP
    } = ex(G, e$, U.id),
    {
      selectedAutocompleteInputType: tD,
      selectedAutocompleteInputError: tL
    } = ej(tc, e$),
    tx = ek(f),
    {
      currentAutocompleteType: tM,
      handleAutocompleteVisibilityChange: tj
    } = eU(G, U.id),
    tk = (0, S.A)({
      type: G,
      channelId: U.id
    }),
    tU = i.useCallback(() => {
      tc.emit("submit-failure")
    }, [tc]);
  (0, $.R)(tc, U.guild_id, U.id);
  let tG = null != z,
    tF = e9 && !((e7 || e8) && tn) || tp && (null == (s = G.submit) ? true : s.useDisabledStylesOnSubmit),
    tV = null;
  null != e4 ? tV = null == Y ? true : Y(e4, e5, e_.g$) : (!e9 || tt) && (tV = null == H ? true : H(tG, e_.g$));
  let tB = ti && null != h && !e9 && G.showCharacterCount && null == e4,
    tH = ti && !__OVERLAY__ && null != h && null == e4 && G.toolbarType !== ee.O1.NONE && !e9,
    tY = (0, ei.Y)({
      channel: U,
      type: G,
      activeCommand: e4,
      pendingReply: z,
      pendingScheduledMessage: ez,
      selectedAutocompleteInputType: tD,
      selectedAutocompleteInputError: tL
    }),
    tW = 0 === f.trim().length,
    tK = G.layout === ee.wt.INLINE,
    tz = G.layout === ee.wt.FLUSH,
    tq = (0, r.jsx)("div", {
      ref: eJ,
      className: e_.BW
    }),
    tZ = tk ? (0, r.jsx)(v.A, {
      align: "right",
      positionTargetRef: eJ,
      channel: U
    }) : null,
    tQ = null != K ? K() : (0, r.jsx)(ea.A, {
      type: G,
      disabled: e9,
      channel: U,
      handleSubmit: th,
      isEmpty: tW,
      showAllButtons: e3
    }),
    tX = tB ? (0, r.jsx)(el.A, {
      type: G,
      textValue: f,
      className: ev,
      maxCharacterCount: eE,
      showRemainingCharsAfterCount: eb
    }) : null;
  return (0, r.jsx)(N.Sv, {
    value: tc,
    children: (0, r.jsxs)(y.f5, {
      value: eZ,
      children: [tH && tr ? (0, r.jsx)(ed.A, {
        editorRef: e$,
        options: G.markdown,
        channel: U
      }) : tH ? (0, r.jsx)(ec.A, {
        ref: e1,
        editorRef: e$,
        containerRef: e0,
        options: G.markdown
      }) : null, (0, r.jsxs)("div", {
        ref: eQ,
        className: o()(O, {
          [e_.gM]: true,
          [e_.h9]: tF,
          [e_.mr]: eh,
          [e_.Wn]: d.Fr,
          [e_.Ls]: tK,
          [e_.AH]: tz,
          [e_.z3]: null != B
        }),
        children: [tK || tz ? null : (0, r.jsx)(ei.A, {
          bars: tY
        }), (0, r.jsxs)("div", {
          ref: e0,
          onScroll: tA,
          className: o()(C, {
            [e_.xx]: true,
            [e_.k6]: !eY,
            [e_.Ri]: tY.stacked.length > 0
          }),
          children: [(0, r.jsx)(en.A, {
            channelId: U.id,
            chatInputType: G
          }), G.hideAttachmentArea ? null : (0, r.jsx)(es.A, {
            channelId: U.id,
            type: G,
            canAttachFiles: te
          }), (0, r.jsxs)("div", {
            className: o()(e_.vW, {
              [e_.BF]: tF,
              [e_.RL]: G !== ee.oU.EDIT && (null != tV || tF && null == tV || e7),
              [e_.fk]: G === ee.oU.THREAD_CREATION,
              [e_.TZ]: G === ee.oU.CREATE_FORUM_POST || G === ee.oU.FORWARD_MESSAGE_INPUT,
              [e_.$i]: G === ee.oU.USER_PROFILE_REPLY
            }),
            onMouseDown: tP,
            children: [tZ, tV, (0, r.jsx)(_.vN3, {
              ringTarget: eQ,
              ringClassName: e_.Rg,
              children: (0, r.jsx)(et.A, {
                ref: e$,
                id: P,
                focused: F,
                useSlate: ti,
                textValue: f,
                richValue: h,
                disabled: e9,
                placeholder: x,
                required: D,
                accessibilityLabel: k,
                isPreviewing: (e7 || e8) && tn,
                channel: U,
                type: G,
                canPasteFiles: te,
                uploadPromptCharacterCount: ef.CS1,
                maxCharacterCount: null != eE ? eE : to,
                allowNewLines: eO,
                "aria-describedby": eG,
                onChange: tf,
                onResize: tS,
                onBlur: Q,
                onFocus: X,
                onKeyDown: er,
                onSubmit: t_,
                onSubmitFailure: tU,
                onTab: tT,
                onEnter: tC,
                onMoveSelection: tN,
                onSelectionChanged: tu,
                onMaybeShowAutocomplete: tg,
                onHideAutocomplete: tE,
                promptToUpload: ep,
                fontSize: ts,
                spellcheckEnabled: tl,
                canOnlyUseTextCommands: tG,
                isEditorIdle: tx,
                currentAutocompleteType: tM,
                className: o()({
                  [e_.QI]: G === ee.oU.THREAD_CREATION,
                  [e_.AV]: G === ee.oU.PROFILE_BIO_INPUT,
                  [e_.GR]: G === ee.oU.OVERLAY_INLINE_REPLY
                }, w),
                "aria-labelledby": eF,
                showValueWhenDisabled: eq
              })
            }), tQ, tq]
          })]
        }), (0, r.jsx)(eo.a, {
          channel: U,
          type: G,
          pendingScheduledMessage: ez
        }), ta ? null : (0, r.jsx)(I.A, {
          ref: eX,
          channel: U,
          canOnlyUseTextCommands: tG
        }), (0, r.jsx)(T.A, {
          ref: tm,
          channel: U,
          canMentionRoles: em,
          canMentionChannels: eg,
          useNewSlashCommands: ti,
          canOnlyUseTextCommands: tG,
          canSendStickers: null == (l = G.stickers) ? true : l.allowSending,
          canSendSoundmoji: null == (u = G.soundmoji) ? true : u.allowSending,
          textValue: f,
          focused: F,
          isEditorIdle: tx,
          expressionPickerView: tw,
          type: G,
          targetRef: eQ,
          editorRef: e$,
          onSendMessage: t_,
          onSendSticker: tO,
          onVisibilityChange: tj,
          editorScrollerRef: e0,
          editorHeight: tI,
          barsHeight: 40 * tY.floating.length,
          setValue: (e, t) => null == tf ? true : tf(null, e, t),
          position: eB
        }), (0, r.jsx)(j.A, {
          textValue: f,
          editorHeight: tI,
          channelId: U.id
        }), tX, eH]
      }), (0, r.jsx)(_.dzK, {
        error: B
      }), tR ? null : (0, r.jsx)(R.A, {
        positionTargetRef: eQ,
        type: G,
        onSelectGIF: ty,
        onSelectEmoji: tb,
        onSelectSticker: tO,
        onSelectSound: tv,
        channel: U,
        closeOnModalOuterClick: eW,
        parentModalKey: eK,
        position: "top",
        align: "right",
        positionLayerClassName: e_.BD
      })]
    })
  })
}
let eF = Chunk64700.memo(Chunk64700.forwardRef(eG))