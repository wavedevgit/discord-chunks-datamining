/** Chunk was on web.js **/
/** chunk id: 133343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eG,
  BX: () => eM,
  C: () => eS,
  L0: () => eR,
  MD: () => ex,
  NO: () => eI,
  N_: () => eC,
  Sk: () => eD,
  Vu: () => eA,
  Zx: () => ev,
  ck: () => eP,
  ml: () => eN,
  uW: () => ek,
  v7: () => ew
}), require("./896048.js"), require("./65821.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
  Chunk954571 = require("./954571.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk488926 = require("./488926.js"),
  Chunk723702 = require("./723702.js"),
  Chunk486319 = require("./486319.js"),
  Chunk184761 = require("./184761.js"),
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

function e_(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      e_(e, t, n[t])
    })
  }
  return e
}

function em(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eg(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : em(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eE = 450,
  ey = 250;

function eb(e) {
  return e !== H.A.getChannelId()
}

function eO(e, t) {
  var n, r;
  return null != (n = e && (null == (r = t.submit) ? true : r.clearOnSubmit)) && n
}

function ev(e, t, a, s, o) {
  let [l, c] = i.useState(false), u = i.useCallback((i, d, f, p, m) => {
    var g, E, y;
    if (l) return;
    c(true);
    let b = null != (g = null == (y = M.A.getStickerPreview(o, t.drafts.type)) ? true : y.map(e => e.id)) ? g : [],
      O = null != (E = W.A.getUploads(o, t.drafts.type)) ? E : [];
    if (null == d && !p && !m && (0, P.xz)(O, o)) {
      c(false), (0, _.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49681"), n.e("99011"), n.e("48898"), n.e("91798")]).then(n.bind(n, 538899));
        return t => (0, r.jsx)(e, eg(eh({}, t), {
          threadId: o,
          attachments: O,
          sendMessage: () => u(i, true, true, true, true)
        }))
      });
      return
    }
    e({
      value: i,
      uploads: O,
      stickers: b,
      command: d,
      commandOptionValues: f,
      isGif: p
    }).then(e => {
      var n, r, i;
      let {
        shouldClear: l,
        shouldRefocus: u
      } = e, d = eO(l, t), f = null != a.current;
      d && (eb(o) ? h.A.saveDraft(o, "", t.drafts.type) : f && (null == (r = a.current) || r.clearValue(), null == (i = s.current) || i.hide())), f && (c(false), (0, w.v8)(), u && (null == (n = a.current) || n.focus()))
    })
  }, [a, s, e, l, t, o]);
  return {
    submitting: l,
    submit: u,
    handleSubmit: i.useCallback(e => {
      var t;
      null == a || null == (t = a.current) || t.submit(e)
    }, [a])
  }
}

function eA(e, t, n) {
  return i.useCallback(r => {
    var i, a;
    t === $.oU.CREATE_FORUM_POST || t === $.oU.CREATE_ANNOUNCEMENT_POST ? null == (a = n.current) || a.insertGIF(r) : e(r.url, true, true, true), (0, w.v8)(), null == (i = n.current) || i.focus()
  }, [n, e, t])
}

function eI(e) {
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

function eS(e) {
  let {
    editorRef: t,
    disabled: n,
    textValue: r,
    channelId: a,
    chatInputType: s,
    submit: o
  } = e, {
    analyticsLocations: l
  } = (0, y.Ay)();
  return i.useCallback((e, i) => {
    var c, u;
    n || (s === $.oU.CREATE_ANNOUNCEMENT_POST || (0, U.YS)(i, r, a, s.drafts.type) ? ((0, en.fh)({
      sticker: e,
      stickerSelectLocation: i,
      isReplacement: null != M.A.getStickerPreview(a, s.drafts.type),
      analyticsLocations: l
    }), (0, k.$x)(a, e, s.drafts.type)) : (o({
      value: "",
      uploads: true,
      stickers: [e.id]
    }), null == (u = t.current) || u.clearValue()), (0, w.v8)(), null == (c = t.current) || c.focus())
  }, [n, r, a, t, l, o, s])
}

function eT(e, t) {
  return i.useCallback((n, r, i) => {
    let a = e.current;
    null != n && null != a && (z.default.track(ed.HAw.SOUNDMOJI_SELECT, {
      channel_id: t.id,
      guild_id: t.guild_id,
      sound_guild_id: n.guildId,
      sound_id: n.soundId,
      source: r
    }), a.insertSound(n)), i && (0, w.v8)(), null == a || a.focus()
  }, [e, t.id, t.guild_id])
}

function eC(e, t, n) {
  let r = i.useCallback(() => {
      t || (0, w.r$)(ef.kx.EMOJI, e, n)
    }, [t, e, n]),
    a = i.useCallback(() => {
      var r;
      !t && (null == (r = e.gifs) ? true : r.allowSending) && (0, w.r$)(ef.kx.GIF, e, n)
    }, [t, e, n]),
    s = i.useCallback(() => {
      var r;
      !t && (null == (r = e.stickers) ? true : r.allowSending) && (0, w.r$)(ef.kx.STICKER, e, n)
    }, [t, e, n]);
  (0, q.Vo)({
    event: ed.jej.TOGGLE_EMOJI_POPOUT,
    handler: r
  }), (0, q.Vo)({
    event: ed.jej.TOGGLE_GIF_PICKER,
    handler: a
  }), (0, q.Vo)({
    event: ed.jej.TOGGLE_STICKER_PICKER,
    handler: s
  })
}

function eN(e, t, n) {
  let [r] = i.useState(() => new o.EventEmitter);
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

function eP(e) {
  let [t, n] = i.useState(0);
  return {
    editorHeight: t,
    handleResize: i.useCallback(t => {
      n(null != t ? t : 0), null == e || e(t)
    }, [e])
  }
}

function eD(e, t, n, r) {
  let i = e.getGuildId(),
    a = (0, p.bG)([D.A], () => null != i && D.A.isLurking(i), [i]),
    s = (0, p.bG)([F.Ay, K.default], () => {
      var e, t;
      let n = K.default.getCurrentUser();
      return null != (e = null != i && null != n ? null == (t = F.Ay.getMember(i, n.id)) ? true : t.isPending : null) && e
    }),
    o = (0, p.cf)([B.A], () => {
      var i, a;
      let o = e.isPrivate(),
        l = B.A.computePermissions(e),
        c = f.zy(l, ed.xBc.CREATE_PUBLIC_THREADS) || f.zy(l, ed.xBc.CREATE_PRIVATE_THREADS),
        u = (!(null == (i = t.permissions) ? true : i.requireCreateTherads) || c) && (!(null == (a = t.permissions) ? true : a.requireSendMessages) || f.zy(l, ed.xBc.SEND_MESSAGES)),
        d = u && f.zy(l, ed.xBc.ATTACH_FILES),
        p = null != n,
        _ = (0, G.UJ)(e);
      return {
        disabled: r || s || !o && !u || _,
        canAttachFiles: true === t.attachments && (o || s || d || p),
        canCreateThreads: c,
        canEveryoneSendMessages: Z.MJ(ed.xBc.SEND_MESSAGES, e)
      }
    }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, s]);
  return eh({
    isLurking: a,
    isPendingMember: s
  }, o)
}

function ex(e, t, n) {
  let [r, a, s] = (0, w.RQ)(e => [e.activeView, e.activeViewType, e.activeChannelId], u.x), o = (0, p.bG)([O.A], () => O.A.shouldShowPopup() && O.A.activeViewType() === e && O.A.activeChannelId() === n);
  i.useEffect(() => () => {
    (0, w.v8)(e, n)
  }, [e, n]);
  let l = i.useCallback(() => {
      var e;
      null != r || o || null == (e = t.current) || e.handleOuterClick()
    }, [r, o, t]),
    c = null == r || null == a || a !== e || s !== n;
  return {
    expressionPickerView: r,
    shouldHideExpressionPicker: c,
    handleOuterClick: l
  }
}

function eL(e, t, n) {
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
    let s, o = null == (i = t.current) ? true : i.getSlateEditor();
    null != o && (s = null == (a = ec.VW.getSelectedParentOfType(o, C.mk)) ? true : a[0]), r({
      selectedAutocompleteInputType: null != (e = null == s ? true : s.type) ? e : null,
      selectedAutocompleteInputError: null != (n = null == s ? true : s.error) && n
    })
  }, [t]);
  return i.useEffect(() => (e.on("selection-changed", a), e.on("submit-failure", a), a(), () => {
    e.off("selection-changed", a), e.on("submit-failure", a)
  }), [a, e]), n
}
let eM = e => {
    let {
      enabled: t,
      onlyExactMatch: n
    } = (0, x.us)("ChannelTextAreaContainer", {
      autoTrackExposure: false
    }), [r, a] = i.useState(true), s = i.useRef(null);
    return i.useLayoutEffect(() => {
      t && !n && (clearTimeout(s.current), a(false), s.current = setTimeout(() => {
        a(true)
      }, ey))
    }, [n, t, e]), r
  },
  ek = (e, t) => {
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

function eU(e, t) {
  var n, a, o, l, u;
  let {
    textValue: f,
    richValue: h,
    className: O,
    innerClassName: C,
    editorClassName: w,
    id: P,
    required: D,
    disabled: x,
    placeholder: M,
    accessibilityLabel: k,
    channel: U,
    type: G,
    focused: F,
    error: B,
    renderAttachButton: H,
    renderApplicationCommandIcon: W,
    renderButtons: K,
    pendingReply: z,
    onChange: q,
    onResize: Z,
    onBlur: en,
    onFocus: ec,
    onKeyDown: ef,
    onSubmit: e_,
    promptToUpload: eh,
    highlighted: em,
    canMentionRoles: eg,
    canMentionChannels: ey,
    maxCharacterCount: eb,
    showRemainingCharsAfterCount: eO,
    allowNewLines: eU = true,
    characterCountClassName: eG,
    "aria-describedby": eV,
    "aria-labelledby": eF,
    setEditorRef: eB,
    autoCompletePosition: eH,
    children: eY,
    disableThemedBackground: eW = false,
    emojiPickerCloseOnModalOuterClick: eK,
    parentModalKey: ez,
    pendingScheduledMessage: eq,
    showValueWhenDisabled: eZ = false
  } = e;
  c()(null != G, "chat input type must be set");
  let {
    analyticsLocations: eX
  } = (0, y.Ay)(E.A.CHANNEL_TEXT_AREA), eQ = eR(t), eJ = i.useRef(null), e$ = i.useRef(null), e0 = i.useRef(null), e1 = i.useRef(null), e2 = i.useRef(null);
  null == eB || eB(e0.current);
  let e3 = (0, b.A)(U),
    [e6, e4] = i.useState(!e3);
  (0, m.i4)(eQ, e => {
    let {
      width: t
    } = e;
    return e4(!e3 && (null == t || t > eE))
  });
  let {
    activeCommand: e5,
    activeCommandSection: e7
  } = (0, p.cf)([A.A], () => {
    var e, t;
    return {
      activeCommand: (null == (e = G.commands) ? true : e.enabled) ? A.A.getActiveCommand(U.id) : null,
      activeCommandSection: (null == (t = G.commands) ? true : t.enabled) ? A.A.getActiveCommandSection(U.id) : null
    }
  }), {
    isLurking: e8,
    isPendingMember: e9,
    disabled: te,
    canAttachFiles: tt,
    canCreateThreads: tn,
    canEveryoneSendMessages: tr
  } = eD(U, G, e5, x), ti = G.toolbarType === $.O1.STATIC, ta = !V.D_.useSetting() && !(0, X.isAndroidWeb)() && null != window.ResizeObserver, ts = !ta || !(null == (n = G.commands) ? true : n.enabled) || !F || "/" !== f, to = (0, L.A)(), {
    fontSize: tl
  } = (0, p.cf)([g.A], () => ({
    fontSize: g.A.fontSize
  })), tc = (0, p.bG)([Y.A], () => Y.A.isEnabled());
  eC(G, te, U.id);
  let {
    eventEmitter: tu,
    handleEditorSelectionChanged: td
  } = eN(e0, f, h), tf = i.useRef(f);
  tf.current = f;
  let tp = i.useCallback((e, t, n) => {
      var r;
      "/" === t && "" === tf.current && (null == (r = G.commands) ? true : r.enabled) && tu.emit("command-sentinel-typed"), null == q || q(e, t, n)
    }, [q, null == (a = G.commands) ? true : a.enabled, tu]),
    {
      submitting: t_,
      submit: th,
      handleSubmit: tm
    } = ev(e_, G, e0, e2, U.id),
    {
      autocompleteRef: tg,
      handleMaybeShowAutocomplete: tE,
      handleHideAutocomplete: ty
    } = ew(),
    tb = eA(th, G, e0),
    tO = eI(e0),
    tv = eS({
      editorRef: e0,
      disabled: te,
      textValue: f,
      channelId: U.id,
      chatInputType: G,
      submit: e_
    }),
    tA = eT(e0, U),
    tI = i.useCallback(() => {
      var e;
      return null == e2 || null == (e = e2.current) ? true : e.hide()
    }, []),
    {
      editorHeight: tS,
      handleResize: tT
    } = eP(Z),
    {
      handleTab: tC,
      handleEnter: tN,
      handleMoveSelection: tw
    } = eL(tg, eJ, ts),
    {
      expressionPickerView: tR,
      shouldHideExpressionPicker: tP,
      handleOuterClick: tD
    } = ex(G, e0, U.id),
    {
      selectedAutocompleteInputType: tx,
      selectedAutocompleteInputError: tL
    } = ej(tu, e0),
    tj = eM(f),
    {
      currentAutocompleteType: tM,
      handleAutocompleteVisibilityChange: tk
    } = ek(G, U.id),
    {
      moveAppsEntrypointToOverflow: tU
    } = J.C.useConfig({
      location: "ChannelAppLauncher"
    }),
    tG = (0, S.A)({
      type: G,
      channelId: U.id
    }),
    tV = i.useCallback(() => {
      tu.emit("submit-failure")
    }, [tu]);
  (0, Q.R)(tu, U.guild_id, U.id);
  let tF = null != z,
    tB = te && !((e8 || e9) && tr) || t_ && (null == (o = G.submit) ? true : o.useDisabledStylesOnSubmit),
    tH = null;
  null != e5 ? tH = null == W ? true : W(e5, e7, ep.g$) : (!te || tn) && (tH = null == H ? true : H(tF, ep.g$));
  let tY = ta && null != h && !te && G.showCharacterCount && null == e5,
    tW = ta && !__OVERLAY__ && null != h && null == e5 && G.toolbarType !== $.O1.NONE && !te,
    tK = (0, er.Y)({
      channel: U,
      type: G,
      activeCommand: e5,
      pendingReply: z,
      pendingScheduledMessage: eq,
      selectedAutocompleteInputType: tx,
      selectedAutocompleteInputError: tL
    }),
    tz = 0 === f.trim().length,
    tq = G.layout === $.wt.INLINE,
    tZ = G.layout === $.wt.FLUSH,
    tX = (0, r.jsx)("div", {
      ref: e$,
      className: ep.BW
    }),
    tQ = tG ? (0, r.jsx)(v.A, {
      align: tU && G !== $.oU.SIDEBAR ? "left" : "right",
      positionTargetRef: e$,
      channel: U
    }) : null,
    tJ = null != K ? K() : (0, r.jsx)(ei.A, {
      type: G,
      disabled: te,
      channel: U,
      handleSubmit: tm,
      isEmpty: tz,
      showAllButtons: e6
    }),
    t$ = tY ? (0, r.jsx)(eo.A, {
      type: G,
      textValue: f,
      className: eG,
      maxCharacterCount: eb,
      showRemainingCharsAfterCount: eO
    }) : null;
  return (0, r.jsx)(N.Sv, {
    value: tu,
    children: (0, r.jsxs)(y.f5, {
      value: eX,
      children: [tW && ti ? (0, r.jsx)(eu.A, {
        editorRef: e0,
        options: G.markdown,
        channel: U
      }) : tW ? (0, r.jsx)(el.A, {
        ref: e2,
        editorRef: e0,
        containerRef: e1,
        options: G.markdown
      }) : null, (0, r.jsxs)("div", {
        ref: eQ,
        className: s()(O, {
          [ep.gM]: true,
          [ep.h9]: tB,
          [ep.mr]: em,
          [ep.Wn]: d.Fr,
          [ep.Ls]: tq,
          [ep.AH]: tZ,
          [ep.z3]: null != B
        }),
        children: [tq || tZ ? null : (0, r.jsx)(er.A, {
          bars: tK
        }), (0, r.jsxs)("div", {
          ref: e1,
          onScroll: tI,
          className: s()(C, {
            [ep.xx]: true,
            [ep.k6]: !eW,
            [ep.Ri]: tK.stacked.length > 0
          }),
          children: [(0, r.jsx)(et.A, {
            channelId: U.id,
            chatInputType: G
          }), G.hideAttachmentArea ? null : (0, r.jsx)(es.A, {
            channelId: U.id,
            type: G,
            canAttachFiles: tt
          }), (0, r.jsxs)("div", {
            className: s()(ep.vW, {
              [ep.BF]: tB,
              [ep.RL]: G !== $.oU.EDIT && (null != tH || tB && null == tH || e8),
              [ep.fk]: G === $.oU.THREAD_CREATION,
              [ep.TZ]: G === $.oU.CREATE_FORUM_POST || G === $.oU.FORWARD_MESSAGE_INPUT,
              [ep.$i]: G === $.oU.USER_PROFILE_REPLY
            }),
            onMouseDown: tD,
            children: [tQ, tU && tX, tH, (0, r.jsx)(_.vN3, {
              ringTarget: eQ,
              ringClassName: ep.Rg,
              children: (0, r.jsx)(ee.A, {
                ref: e0,
                id: P,
                focused: F,
                useSlate: ta,
                textValue: f,
                richValue: h,
                disabled: te,
                placeholder: M,
                required: D,
                accessibilityLabel: k,
                isPreviewing: (e8 || e9) && tr,
                channel: U,
                type: G,
                canPasteFiles: tt,
                uploadPromptCharacterCount: ed.CS1,
                maxCharacterCount: null != eb ? eb : to,
                allowNewLines: eU,
                "aria-describedby": eV,
                onChange: tp,
                onResize: tT,
                onBlur: en,
                onFocus: ec,
                onKeyDown: ef,
                onSubmit: th,
                onSubmitFailure: tV,
                onTab: tC,
                onEnter: tN,
                onMoveSelection: tw,
                onSelectionChanged: td,
                onMaybeShowAutocomplete: tE,
                onHideAutocomplete: ty,
                promptToUpload: eh,
                fontSize: tl,
                spellcheckEnabled: tc,
                canOnlyUseTextCommands: tF,
                isEditorIdle: tj,
                currentAutocompleteType: tM,
                className: s()({
                  [ep.QI]: G === $.oU.THREAD_CREATION,
                  [ep.AV]: G === $.oU.PROFILE_BIO_INPUT,
                  [ep.GR]: G === $.oU.OVERLAY_INLINE_REPLY
                }, w),
                "aria-labelledby": eF,
                showValueWhenDisabled: eZ
              })
            }), tJ, !tU && tX]
          })]
        }), (0, r.jsx)(ea.a, {
          channel: U,
          type: G,
          pendingScheduledMessage: eq
        }), ts ? null : (0, r.jsx)(I.A, {
          ref: eJ,
          channel: U,
          canOnlyUseTextCommands: tF
        }), (0, r.jsx)(T.A, {
          ref: tg,
          channel: U,
          canMentionRoles: eg,
          canMentionChannels: ey,
          useNewSlashCommands: ta,
          canOnlyUseTextCommands: tF,
          canSendStickers: null == (l = G.stickers) ? true : l.allowSending,
          canSendSoundmoji: null == (u = G.soundmoji) ? true : u.allowSending,
          textValue: f,
          focused: F,
          isEditorIdle: tj,
          expressionPickerView: tR,
          type: G,
          targetRef: eQ,
          editorRef: e0,
          onSendMessage: th,
          onSendSticker: tv,
          onVisibilityChange: tk,
          editorScrollerRef: e1,
          editorHeight: tS,
          barsHeight: 40 * tK.floating.length,
          setValue: (e, t) => null == tp ? true : tp(null, e, t),
          position: eH
        }), (0, r.jsx)(j.A, {
          textValue: f,
          editorHeight: tS,
          channelId: U.id
        }), t$, eY]
      }), (0, r.jsx)(_.dzK, {
        error: B
      }), tP ? null : (0, r.jsx)(R.A, {
        positionTargetRef: eQ,
        type: G,
        onSelectGIF: tb,
        onSelectEmoji: tO,
        onSelectSticker: tv,
        onSelectSound: tA,
        channel: U,
        closeOnModalOuterClick: eK,
        parentModalKey: ez,
        position: "top",
        align: "right",
        positionLayerClassName: ep.BD
      })]
    })
  })
}
let eG = Chunk64700.memo(Chunk64700.forwardRef(eU))