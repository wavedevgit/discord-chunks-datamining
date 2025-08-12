/** Chunk was on web.js **/
/** chunk id: 190210, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => es
}), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./388685.js"), require("./781311.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk717976 = require("./717976.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk166459 = require("./166459.js"),
  Chunk911969 = require("./911969.js"),
  Chunk476326 = require("./476326.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk998698 = require("./998698.js"),
  Chunk326133 = require("./326133.jsx"),
  Chunk507366 = require("./507366.js"),
  Chunk570220 = require("./570220.js"),
  Chunk951394 = require("./951394.jsx"),
  Chunk805680 = require("./805680.jsx"),
  Chunk374794 = require("./374794.jsx"),
  Chunk884858 = require("./884858.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk849522 = require("./849522.js"),
  Chunk665906 = require("./665906.js"),
  Chunk695346 = require("./695346.js"),
  Chunk703558 = require("./703558.js"),
  Chunk398327 = require("./398327.js"),
  Chunk117530 = require("./117530.js"),
  Chunk956664 = require("./956664.js"),
  Chunk358085 = require("./358085.js"),
  Chunk127654 = require("./127654.js"),
  Chunk746877 = require("./746877.js"),
  Chunk541716 = require("./541716.js"),
  Chunk667829 = require("./667829.jsx"),
  Chunk258696 = require("./258696.jsx"),
  Chunk893718 = require("./893718.jsx"),
  Chunk273031 = require("./273031.jsx"),
  Chunk303628 = require("./303628.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk761652 = require("./761652.js"),
  Chunk224837 = require("./224837.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk871962 = require("./871962.js"),
  Chunk939267 = require("./939267.js");

function J(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      J(e, t, n[t])
    })
  }
  return e
}

function ee(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function et(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ee(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let en = 140;

function er(e, t, n) {
  let r = i.useCallback(() => {
    var r, i;
    return !!(!n && (null == (r = t.current) ? true : r.onTabOrEnter(false))) || (null == (i = e.current) ? true : i.onTabOrEnter(false)) || false
  }, [n]);
  return {
    handleTab: r,
    handleEnter: i.useCallback(() => {
      var r, i;
      return !!(!n && (null == (r = t.current) ? true : r.onTabOrEnter(true))) || (null == (i = e.current) ? true : i.onTabOrEnter(false)) || false
    }, [n]),
    handleMoveSelection: i.useCallback(r => {
      var i, o;
      return !!(!n && (null == (i = t.current) ? true : i.onMoveSelection(r))) || (null == (o = e.current) ? true : o.onMoveSelection(r)) || false
    }, [n])
  }
}

function ei(e, t) {
  let n = e.startsWith("attachment://"),
    r = e;
  if (n) {
    let n = e.slice(13);
    r = t ? "attachment://SPOILER_".concat(eo(n)) : e
  }
  return {
    media: {
      url: r,
      proxyUrl: r,
      loadingState: h.f.UNKNOWN,
      flags: 0
    },
    description: e,
    spoiler: t
  }
}

function eo(e) {
  return null == e ? "unnamed_file" : e.replace(/\s/g, "_")
}

function ea(e, t) {
  var n, o, s, u;
  let {
    textValue: f,
    richValue: m,
    className: T,
    id: A,
    required: N,
    disabled: C,
    accessibilityLabel: M,
    channel: j,
    type: V,
    focused: z,
    onChange: J,
    onResize: ee,
    onBlur: ea,
    onFocus: es,
    onKeyDown: ef,
    onSubmit: e_,
    promptToUpload: ep,
    canMentionRoles: eh,
    canMentionChannels: em,
    maxCharacterCount: eg,
    placeholder: eE,
    "aria-describedby": eb,
    "aria-labelledby": ey,
    setEditorRef: eO,
    autoCompletePosition: ev,
    children: eI,
    disableThemedBackground: eT = false,
    emojiPickerCloseOnModalOuterClick: eS,
    parentModalKey: eA
  } = e, eN = v.Z.useField("channelDrafts")[j.id], eC = null != (o = null == eN ? true : eN.title) ? o : "", eR = null == eN ? true : eN.heroFile, eP = null == (s = null == eN ? true : eN.publish) || s, ew = null == (u = null == eN ? true : eN.createThread) || u;
  l()(null != V, "chat input type must be set");
  let {
    analyticsLocations: eD
  } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA), eL = (0, F.qz)(t), ex = i.useRef(null), eM = i.useRef(null), ek = i.useRef(null), ej = i.useRef(null);
  null == eO || eO(eM.current);
  let {
    activeCommand: eU
  } = (0, d.cj)([y.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = V.commands) ? true : e.enabled) ? y.Z.getActiveCommand(j.id) : null,
      activeCommandSection: (null == (t = V.commands) ? true : t.enabled) ? y.Z.getActiveCommandSection(j.id) : null
    }
  }), {
    isLurking: eG,
    isPendingMember: eB,
    disabled: eZ,
    canAttachFiles: eF,
    canEveryoneSendMessages: eV
  } = (0, F.TE)(j, V, eU, C), eH = !w.dN.useSetting() && !(0, k.isAndroidWeb)() && null != window.ResizeObserver, eY = !eH || !(null == (n = V.commands) ? true : n.enabled) || !z || f !== W.GI, eW = (0, R.Z)(), {
    fontSize: eK
  } = (0, d.cj)([g.Z], () => ({
    fontSize: g.Z.fontSize,
    isSubmitButtonEnabled: g.Z.isSubmitButtonEnabled
  })), ez = (0, d.e7)([L.Z], () => L.Z.isEnabled()), eq = (0, P.NE)(j);
  (0, F.hJ)(V, eZ);
  let {
    eventEmitter: eX,
    handleEditorSelectionChanged: eQ
  } = (0, F.x2)(eM, f, m), eJ = i.useCallback(e => {
    var t;
    let n = [];
    null != eR && n.push({
      type: h.re.MEDIA_GALLERY,
      items: [ei("attachment://".concat(eo(eR.name)), false)],
      id: "".concat(K.Vm)
    }), e.value.length > 0 && n.push({
      type: h.re.TEXT_DISPLAY,
      content: e.value,
      id: "".concat(K.Kb)
    });
    let r = x.Z.getUploads(j.id, D.d.ChannelMessage),
      i = r.filter(e => (e.isImage || e.isVideo) && e.filename !== (null == eR ? true : eR.name)),
      o = r.filter(e => !e.isImage && !e.isVideo && e.filename !== (null == eR ? true : eR.name)),
      a = i.map(e => ei("attachment://".concat(eo(e.filename)), false));
    return a.length > 0 && n.push({
      type: h.re.MEDIA_GALLERY,
      items: a,
      id: "".concat(K.m2)
    }), o.forEach((e, t) => {
      n.push({
        type: h.re.FILE,
        file: ei("attachment://".concat(eo(e.filename)), false).media,
        id: "".concat(K.kn + t),
        name: eo(e.filename),
        size: null
      })
    }), (0, v.c)(j.id, {
      title: "",
      heroFile: null
    }), null == (t = eM.current) || t.blur(), e_(et($({}, e), {
      components: n,
      announcementSendOptions: {
        createThread: eq && ew,
        threadName: eC.length > 0 ? eC : q.intl.string(q.t["7Xm5QE"]),
        publish: eP
      }
    }))
  }, [e_, eC, eR, j.id, ew, eP, eq]), {
    submit: e$,
    handleSubmit: e0
  } = (0, F.bL)(eJ, V, eM, ej, j.id), {
    autocompleteRef: e1,
    handleMaybeShowAutocomplete: e2,
    handleHideAutocomplete: e3
  } = (0, F.jx)(), e5 = i.useCallback(() => {
    var e;
    return null == ej || null == (e = ej.current) ? true : e.hide()
  }, []), {
    editorHeight: e4,
    handleResize: e6
  } = (0, F.oR)(ee), {
    handleTab: e8,
    handleEnter: e7,
    handleMoveSelection: e9
  } = er(e1, ex, eY), {
    expressionPickerView: te,
    shouldHideExpressionPicker: tt,
    handleAutocompleteVisibilityChange: tn,
    handleOuterClick: tr
  } = (0, F.iV)(V, eX, eM), ti = (0, F.ae)(eM), to = (0, F.Sg)(e$, V, eM), ta = (0, F.O1)({
    editorRef: eM,
    disabled: eZ,
    textValue: f,
    channelId: j.id,
    chatInputType: V,
    submit: eJ
  });
  (0, U.S)(eX, j.guild_id, j.id);
  let [ts, tl] = i.useState(false), tc = z || ts || f.length > 0 || null != eR || eC.length > 0, {
    editorHeaderHeight: tu,
    paddingTop: td
  } = (0, _.q_F)({
    editorHeaderHeight: 122 * !!tc,
    paddingTop: 16 * !!tc,
    config: {
      tension: 120,
      friction: 15,
      clamp: true
    }
  }), tf = i.useRef(null), [t_, tp] = i.useState(false), th = i.useRef(false), tm = i.useCallback(() => {
    th.current = true;
    let e = setTimeout(() => {
      th.current && tp(true)
    }, 100);
    return () => clearTimeout(e)
  }, []), tg = i.useCallback(() => {
    th.current = false;
    let e = setTimeout(() => {
      th.current || tp(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), tE = i.useCallback(() => {
    var e;
    if (null == eR) return;
    let t = null == (e = x.Z.getUploads(j.id, V.drafts.type).find(e => e.filename === eR.name)) ? true : e.id;
    null != t && p.Z.remove(j.id, t, D.d.ChannelMessage), (0, v.c)(j.id, {
      heroFile: null
    })
  }, [j.id, eR, V.drafts.type]);
  return (0, r.jsx)(I.f6, {
    value: eX,
    children: (0, r.jsxs)(b.Gt, {
      value: eD,
      children: [(0, r.jsxs)("div", {
        ref: eL,
        className: a()(T, Q.channelTextArea),
        onMouseDown: tr,
        children: [(0, r.jsx)("div", {
          ref: ek,
          onScroll: e5,
          className: a()(Q.announcementScrollableContainer, {
            [Q.themedBackground]: !eT
          }),
          children: (0, r.jsxs)("div", {
            className: a()(Q.inner, X.inner),
            children: [(0, r.jsxs)("div", {
              className: X.body,
              children: [(0, r.jsxs)(c.animated.div, {
                className: X.headerInput,
                style: {
                  height: tu,
                  paddingTop: td
                },
                children: [null != eR ? (0, r.jsx)(ec, {
                  file: eR,
                  onRemoveHeroImage: tE
                }) : null, null != eR ? null : (0, r.jsx)(ed, {
                  channel: j,
                  onImageUploaded: e => (0, v.c)(j.id, {
                    heroFile: e
                  }),
                  onFocus: () => tl(true)
                }), (0, r.jsx)("input", {
                  onFocus: () => tl(true),
                  onBlur: () => tl(false),
                  maxLength: en,
                  className: X.titleInput,
                  placeholder: q.intl.string(q.t.Z8fYjI),
                  value: eC,
                  onChange: e => (0, v.c)(j.id, {
                    title: e.target.value
                  })
                })]
              }), (0, r.jsx)("div", {
                className: X.inputWrapper,
                children: (0, r.jsx)(_.tEY, {
                  ringTarget: eL,
                  ringClassName: Q.focusRing,
                  children: (0, r.jsx)(B.Z, {
                    ref: eM,
                    id: A,
                    focused: z,
                    useSlate: eH,
                    textValue: f,
                    richValue: m,
                    disabled: eZ,
                    placeholder: eE,
                    required: N,
                    accessibilityLabel: M,
                    isPreviewing: (eG || eB) && eV,
                    channel: j,
                    type: G.Ie.CREATE_ANNOUNCEMENT_POST,
                    canPasteFiles: eF,
                    uploadPromptCharacterCount: Y.en1,
                    maxCharacterCount: null != eg ? eg : eW,
                    allowNewLines: true,
                    "aria-describedby": eb,
                    onChange: J,
                    onResize: e6,
                    onBlur: ea,
                    onFocus: es,
                    onKeyDown: ef,
                    onSubmit: e$,
                    onTab: e8,
                    onEnter: e7,
                    onMoveSelection: e9,
                    onSelectionChanged: eQ,
                    onMaybeShowAutocomplete: e2,
                    onHideAutocomplete: e3,
                    promptToUpload: ep,
                    fontSize: eK,
                    spellcheckEnabled: ez,
                    canOnlyUseTextCommands: false,
                    "aria-labelledby": ey
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: X.attachmentsContainer,
              children: (0, r.jsx)(H.Z, {
                channelId: j.id,
                type: V,
                canAttachFiles: eF,
                ignoreFile: null == eR ? true : eR.name,
                smallAttachments: true
              })
            })]
          })
        }), (0, r.jsx)("div", {
          className: X.divider
        }), (0, r.jsxs)("div", {
          className: X.footer,
          children: [(0, r.jsxs)("div", {
            className: X.footerPart,
            children: [(0, r.jsx)(eu, {
              channel: j
            }), (0, r.jsx)(Z.Z, {
              type: G.Ie.CREATE_ANNOUNCEMENT_POST,
              disabled: eZ,
              channel: j,
              handleSubmit: e0,
              isEmpty: 0 === f.trim().length,
              showAllButtons: true
            })]
          }), (0, r.jsx)("div", {
            className: X.footerPart,
            children: (0, r.jsx)("div", {
              ref: tf,
              className: X.sendButtonContainer,
              onMouseEnter: tm,
              onMouseLeave: tg,
              children: (0, r.jsx)(_.yRy, {
                targetElementRef: tf,
                renderPopout: () => (0, r.jsx)(el, {
                  channelId: j.id,
                  canCreateThread: eq
                }),
                shouldShow: t_,
                autoInvert: true,
                nudgeAlignIntoViewport: true,
                position: "top",
                align: "right",
                children: e => (0, r.jsx)(_.zxk, et($({}, e), {
                  onClick: () => {
                    e$("".concat(eC.length > 0 ? "# ".concat(eC, "\n") : "").concat(f))
                  },
                  disabled: 0 === f.length && 0 === eC.length,
                  size: "sm",
                  "aria-label": q.intl.string(q.t.TXNS7e),
                  innerClassName: X.sendButton,
                  text: (0, r.jsxs)("div", {
                    className: X.sendButtonContents,
                    children: [(0, r.jsx)(_.Text, {
                      variant: "text-sm/semibold",
                      color: "always-white",
                      children: q.intl.string(q.t.TXNS7e)
                    }), (0, r.jsxs)("div", {
                      className: X.sendButtonIcons,
                      children: [(0, r.jsx)(_.Uuj, {
                        size: "xs",
                        color: "white"
                      }), eq && ew ? (0, r.jsx)(_.or_, {
                        size: "xxs",
                        color: "white",
                        className: X.subIcon
                      }) : null]
                    })]
                  })
                }))
              })
            })
          })]
        }), (0, r.jsx)(O.Z, {
          targetRef: eL,
          ref: e1,
          channel: j,
          canMentionRoles: eh,
          canMentionChannels: em,
          useNewSlashCommands: eH,
          canOnlyUseTextCommands: false,
          canSendStickers: true,
          textValue: f,
          focused: z,
          expressionPickerView: te,
          type: V,
          editorRef: eM,
          onSendMessage: e$,
          onSendSticker: () => {},
          onVisibilityChange: tn,
          editorHeight: e4,
          setValue: (e, t) => null == J ? true : J(null, e, t),
          position: ev
        }), eI]
      }), tt ? null : (0, r.jsx)(S.Z, {
        positionTargetRef: eL,
        type: V,
        onSelectGIF: to,
        onSelectEmoji: ti,
        onSelectSticker: ta,
        channel: j,
        closeOnModalOuterClick: eS,
        parentModalKey: eA,
        position: "top",
        align: "right",
        positionLayerClassName: Q.expressionPickerPositionLayer
      })]
    })
  })
}
let es = Chunk73800.memo(Chunk73800.forwardRef(ea));

function el(e) {
  var t, n;
  let {
    channelId: i,
    canCreateThread: o
  } = e, a = v.Z.useField("channelDrafts")[i], s = null == (t = null == a ? true : a.createThread) || t, l = null == (n = null == a ? true : a.publish) || n;
  return (0, r.jsxs)(_.v2r, {
    "aria-label": q.intl.string(q.t["9WnJys"]),
    navId: "send-announcement-options",
    onClose: Y.dG4,
    onSelect: Y.dG4,
    children: [(0, r.jsx)(_.S89, {
      id: "create-thread",
      label: q.intl.string(q.t.rBIGBA),
      checked: o && s,
      disabled: !o,
      action: () => {
        (0, v.c)(i, {
          createThread: !s
        })
      }
    }), (0, r.jsx)(_.S89, {
      id: "send-and-publish",
      label: q.intl.string(q.t["MFGE5+"]),
      checked: l,
      action: () => {
        (0, v.c)(i, {
          publish: !l
        })
      }
    })]
  })
}

function ec(e) {
  let {
    file: t,
    onRemoveHeroImage: n
  } = e, [o, a] = i.useState();
  i.useEffect(() => {
    if (null == t || false === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
    let e = URL.createObjectURL(t);
    return a(e), () => {
      a(true), URL.revokeObjectURL(e)
    }
  }, [t]);
  let [s, l] = i.useState(false), c = i.useCallback(() => {
    l(true)
  }, []), u = i.useCallback(() => {
    l(false)
  }, []);
  return null == o ? null : (0, r.jsxs)("div", {
    onMouseEnter: c,
    onMouseLeave: u,
    className: X.heroImageWrapper,
    "aria-hidden": true,
    children: [(0, r.jsx)("img", {
      src: o,
      alt: q.intl.string(q.t["2ePvR0"]),
      className: X.heroImage
    }), s ? (0, r.jsx)(T.ZP, {
      className: X.heroOverlay,
      children: (0, r.jsx)(V.Z, {
        tooltip: q.intl.string(q.t.VjC219),
        onClick: n,
        dangerous: true,
        children: (0, r.jsx)(_.XHJ, {})
      })
    }) : null]
  })
}

function eu(e) {
  let {
    channel: t
  } = e, n = e => {
    (0, j.d)(e.currentTarget.files, t, D.d.ChannelMessage, {
      requireConfirm: true,
      origin: "file_picker"
    }), e.currentTarget.value = null
  };
  return (0, r.jsx)(A.Z, {
    "aria-label": q.intl.string(q.t["/IBYAg"]),
    className: X.attachButton,
    size: "icon",
    color: "transparent",
    look: "blank",
    onChange: n,
    children: (0, r.jsx)(_.xD0, {
      size: "custom",
      width: 20,
      height: 20,
      color: f.Z.colors.INTERACTIVE_NORMAL
    })
  })
}

function ed(e) {
  let {
    channel: t,
    onImageUploaded: n,
    onFocus: o
  } = e, a = i.useRef(null), s = async (e, r) => {
    let i = await (0, M.Bo)(e, r.name, r.type),
      o = {
        id: (0, u.Z)(),
        file: i,
        platform: m.ow.WEB,
        isThumbnail: false,
        origin: "file_picker"
      };
    p.Z.addFile({
      file: o,
      channelId: t.id,
      draftType: D.d.ChannelMessage
    }), n(i)
  }, [l, c] = i.useState(false), d = i.useCallback(() => {
    c(true)
  }, []), h = i.useCallback(() => {
    c(false)
  }, []);
  return (0, r.jsx)(_.DY3, {
    text: q.intl.string(q.t["/IBYAg"]),
    position: "top",
    className: X.heroImageButton,
    children: (0, r.jsxs)(_.P3F, {
      className: X.heroImageButton,
      onMouseOver: d,
      onMouseOut: h,
      onFocus: o,
      children: [(0, r.jsx)(C.ZP, {
        ref: a,
        onChange: s,
        "aria-hidden": true,
        tabIndex: false,
        maxFileSizeBytes: z.B,
        onFileSizeError: () => (0, N.Z)(z.B)
      }), (0, r.jsx)(_.FmF, {
        size: "md",
        color: l ? f.Z.colors.INTERACTIVE_ACTIVE : f.Z.colors.INTERACTIVE_NORMAL
      })]
    })
  })
}