/** Chunk was on 5665 **/
/** chunk id: 190210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => en
}), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./388685.js"), require("./781311.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk202841 = require("./202841.js"),
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
  Chunk593514 = require("./593514.js"),
  Chunk564355 = require("./564355.js");

function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function $(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ee(e, t) {
  let n = e.startsWith("attachment://"),
    r = e;
  if (n) {
    let n = e.slice(13);
    r = t ? "attachment://SPOILER_".concat(et(n)) : e
  }
  return {
    media: {
      url: r,
      proxyUrl: r,
      loadingState: m.f.UNKNOWN,
      flags: 0
    },
    description: e,
    spoiler: t
  }
}

function et(e) {
  return null == e ? "unnamed_file" : e.replace(/\s/g, "_")
}
let en = Chunk647438.memo(Chunk647438.forwardRef(function(e, t) {
  var n, l, o, u;
  let {
    textValue: p,
    richValue: g,
    className: j,
    id: S,
    required: I,
    disabled: P,
    accessibilityLabel: M,
    channel: L,
    type: H,
    focused: q,
    onChange: en,
    onResize: eo,
    onBlur: es,
    onFocus: ec,
    onKeyDown: eu,
    onSubmit: ed,
    promptToUpload: ep,
    canMentionRoles: eh,
    canMentionChannels: ef,
    maxCharacterCount: em,
    placeholder: eg,
    "aria-describedby": eb,
    "aria-labelledby": e_,
    setEditorRef: ey,
    autoCompletePosition: eC,
    children: ex,
    disableThemedBackground: ev = false,
    emojiPickerCloseOnModalOuterClick: eO,
    parentModalKey: ej
  } = e, eE = v.Z.useField("channelDrafts")[L.id], eS = null != (l = null == eE ? true : eE.title) ? l : "", eI = null == eE ? true : eE.heroFile, eP = null == (o = null == eE ? true : eE.publish) || o, eZ = null == (u = null == eE ? true : eE.createThread) || u;
  s()(null != H, "chat input type must be set");
  let {
    analyticsLocations: eT
  } = (0, y.ZP)(_.Z.CHANNEL_TEXT_AREA), eN = (0, G.qz)(t), eA = i.useRef(null), ew = i.useRef(null), eR = i.useRef(null), eM = i.useRef(null);
  null == ey || ey(ew.current);
  let {
    activeCommand: eD
  } = (0, d.cj)([C.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = H.commands) ? true : e.enabled) ? C.Z.getActiveCommand(L.id) : null,
      activeCommandSection: (null == (t = H.commands) ? true : t.enabled) ? C.Z.getActiveCommandSection(L.id) : null
    }
  }), {
    isLurking: eL,
    isPendingMember: ek,
    disabled: eU,
    canAttachFiles: eB,
    canEveryoneSendMessages: eF
  } = (0, G.TE)(L, H, eD, P), eG = !N.dN.useSetting() && !(0, D.isAndroidWeb)() && null != window.ResizeObserver, eH = !eG || !(null == (n = H.commands) ? true : n.enabled) || !q || p !== W.GI, eV = (0, Z.Z)(), {
    fontSize: ez
  } = (0, d.cj)([b.Z], () => ({
    fontSize: b.Z.fontSize,
    isSubmitButtonEnabled: b.Z.isSubmitButtonEnabled
  })), eW = (0, d.e7)([w.Z], () => w.Z.isEnabled()), eY = (0, T.NE)(L);
  (0, G.hJ)(H, eU);
  let {
    eventEmitter: eq,
    handleEditorSelectionChanged: eK
  } = (0, G.x2)(ew, p, g), eX = i.useCallback(e => {
    let t = e => {
        if (e.shouldClear) {
          var t;
          (0, v.c)(L.id, {
            title: "",
            heroFile: null
          }), null == (t = ew.current) || t.blur()
        }
        return e
      },
      n = [],
      r = eS.length > 0 ? eS : e.value.length > 0 ? e.value.slice(0, 80) : K.intl.string(K.t["7Xm5QE"]);
    if (null == eI) return ed($(J({}, e), {
      announcementSendOptions: {
        createThread: eY && eZ,
        threadName: r,
        publish: eP
      }
    })).then(t);
    n.push({
      type: m.re.MEDIA_GALLERY,
      items: [ee("attachment://".concat(et(eI.name)), false)],
      id: "".concat(Y.Vm)
    }), e.value.length > 0 && n.push({
      type: m.re.TEXT_DISPLAY,
      content: e.value,
      id: "".concat(Y.Kb)
    });
    let i = R.Z.getUploads(L.id, A.d.ChannelMessage),
      l = i.filter(e => (e.isImage || e.isVideo) && e.filename !== (null == eI ? true : eI.name)),
      a = i.filter(e => !e.isImage && !e.isVideo && e.filename !== (null == eI ? true : eI.name)),
      o = l.map(e => ee("attachment://".concat(et(e.filename)), false));
    return o.length > 0 && n.push({
      type: m.re.MEDIA_GALLERY,
      items: o,
      id: "".concat(Y.m2)
    }), a.forEach((e, t) => {
      n.push({
        type: m.re.FILE,
        file: ee("attachment://".concat(et(e.filename)), false).media,
        id: "".concat(Y.kn + t),
        name: et(e.filename),
        size: null
      })
    }), ed($(J({}, e), {
      components: n,
      announcementSendOptions: {
        createThread: eY && eZ,
        threadName: r,
        publish: eP
      }
    })).then(t)
  }, [ed, eS, eI, L.id, eZ, eP, eY]), {
    submit: eQ,
    handleSubmit: eJ
  } = (0, G.bL)(eX, H, ew, eM, L.id), {
    autocompleteRef: e$,
    handleMaybeShowAutocomplete: e0,
    handleHideAutocomplete: e1
  } = (0, G.jx)(), e2 = i.useCallback(() => {
    var e;
    return null == eM || null == (e = eM.current) ? true : e.hide()
  }, []), {
    editorHeight: e8,
    handleResize: e3
  } = (0, G.oR)(eo), {
    handleTab: e4,
    handleEnter: e7,
    handleMoveSelection: e6
  } = function(e, t, n) {
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
        var i, l;
        return !!(!n && (null == (i = t.current) ? true : i.onMoveSelection(r))) || (null == (l = e.current) ? true : l.onMoveSelection(r)) || false
      }, [n])
    }
  }(e$, eA, eH), {
    expressionPickerView: e5,
    shouldHideExpressionPicker: e9,
    handleAutocompleteVisibilityChange: te,
    handleOuterClick: tt
  } = (0, G.iV)(H, eq, ew), tn = (0, G.ae)(ew), tr = (0, G.Sg)(eQ, H, ew), ti = (0, G.O1)({
    editorRef: ew,
    disabled: eU,
    textValue: p,
    channelId: L.id,
    chatInputType: H,
    submit: eX
  });
  (0, k.S)(eq, L.guild_id, L.id);
  let [tl, ta] = i.useState(false), to = q || tl || p.length > 0 || null != eI || eS.length > 0, {
    editorHeaderHeight: ts,
    paddingTop: tc
  } = (0, h.q_F)({
    editorHeaderHeight: 122 * !!to,
    paddingTop: 16 * !!to,
    config: {
      tension: 120,
      friction: 15,
      clamp: true
    }
  }), tu = i.useRef(null), [td, tp] = i.useState(false), th = i.useRef(false), tf = i.useCallback(() => {
    th.current = true;
    let e = setTimeout(() => {
      th.current && tp(true)
    }, 100);
    return () => clearTimeout(e)
  }, []), tm = i.useCallback(() => {
    th.current = false;
    let e = setTimeout(() => {
      th.current || tp(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), tg = i.useCallback(() => {
    var e;
    if (null == eI) return;
    let t = null == (e = R.Z.getUploads(L.id, H.drafts.type).find(e => e.filename === eI.name)) ? true : e.id;
    null != t && f.Z.remove(L.id, t, A.d.ChannelMessage), (0, v.c)(L.id, {
      heroFile: null
    })
  }, [L.id, eI, H.drafts.type]);
  return (0, r.jsx)(O.f6, {
    value: eq,
    children: (0, r.jsxs)(y.Gt, {
      value: eT,
      children: [(0, r.jsxs)("div", {
        ref: eN,
        className: a()(j, Q.channelTextArea),
        onMouseDown: tt,
        children: [(0, r.jsx)("div", {
          ref: eR,
          onScroll: e2,
          className: a()(Q.announcementScrollableContainer, {
            [Q.themedBackground]: !ev
          }),
          children: (0, r.jsxs)("div", {
            className: a()(Q.inner, X.inner),
            children: [(0, r.jsxs)("div", {
              className: X.body,
              children: [(0, r.jsxs)(c.animated.div, {
                className: X.headerInput,
                style: {
                  height: ts,
                  paddingTop: tc
                },
                children: [null != eI ? (0, r.jsx)(ei, {
                  file: eI,
                  onRemoveHeroImage: tg
                }) : null, null != eI ? null : (0, r.jsx)(ea, {
                  channel: L,
                  onImageUploaded: e => (0, v.c)(L.id, {
                    heroFile: e
                  }),
                  onFocus: () => ta(true)
                }), (0, r.jsx)("input", {
                  onFocus: () => ta(true),
                  onBlur: () => ta(false),
                  maxLength: 140,
                  className: X.titleInput,
                  placeholder: K.intl.string(K.t.Z8fYjI),
                  value: eS,
                  onChange: e => (0, v.c)(L.id, {
                    title: e.target.value
                  })
                })]
              }), (0, r.jsx)("div", {
                className: X.inputWrapper,
                children: (0, r.jsx)(h.tEY, {
                  ringTarget: eN,
                  ringClassName: Q.focusRing,
                  children: (0, r.jsx)(B.Z, {
                    ref: ew,
                    id: S,
                    focused: q,
                    useSlate: eG,
                    textValue: p,
                    richValue: g,
                    disabled: eU,
                    placeholder: eg,
                    required: I,
                    accessibilityLabel: M,
                    isPreviewing: (eL || ek) && eF,
                    channel: L,
                    type: U.Ie.CREATE_ANNOUNCEMENT_POST,
                    canPasteFiles: eB,
                    uploadPromptCharacterCount: z.en1,
                    maxCharacterCount: null != em ? em : eV,
                    allowNewLines: true,
                    "aria-describedby": eb,
                    onChange: en,
                    onResize: e3,
                    onBlur: es,
                    onFocus: ec,
                    onKeyDown: eu,
                    onSubmit: eQ,
                    onTab: e4,
                    onEnter: e7,
                    onMoveSelection: e6,
                    onSelectionChanged: eK,
                    onMaybeShowAutocomplete: e0,
                    onHideAutocomplete: e1,
                    promptToUpload: ep,
                    fontSize: ez,
                    spellcheckEnabled: eW,
                    canOnlyUseTextCommands: false,
                    "aria-labelledby": e_
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: X.attachmentsContainer,
              children: (0, r.jsx)(V.Z, {
                channelId: L.id,
                type: H,
                canAttachFiles: eB,
                ignoreFile: null == eI ? true : eI.name,
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
            children: [(0, r.jsx)(el, {
              channel: L
            }), (0, r.jsx)(F.Z, {
              type: U.Ie.CREATE_ANNOUNCEMENT_POST,
              disabled: eU,
              channel: L,
              handleSubmit: eJ,
              isEmpty: 0 === p.trim().length,
              showAllButtons: true
            })]
          }), (0, r.jsx)("div", {
            className: X.footerPart,
            children: (0, r.jsx)("div", {
              ref: tu,
              className: X.sendButtonContainer,
              onMouseEnter: tf,
              onMouseLeave: tm,
              children: (0, r.jsx)(h.yRy, {
                targetElementRef: tu,
                renderPopout: () => (0, r.jsx)(er, {
                  channelId: L.id,
                  canCreateThread: eY
                }),
                shouldShow: td,
                autoInvert: true,
                nudgeAlignIntoViewport: true,
                position: "top",
                align: "right",
                children: e => (0, r.jsx)(h.zxk, $(J({}, e), {
                  onClick: () => {
                    eQ("".concat(eS.length > 0 ? "# ".concat(eS, "\n") : "").concat(p))
                  },
                  disabled: 0 === p.length && 0 === eS.length,
                  size: "sm",
                  "aria-label": K.intl.string(K.t.TXNS7e),
                  innerClassName: X.sendButton,
                  text: (0, r.jsxs)("div", {
                    className: X.sendButtonContents,
                    children: [(0, r.jsx)(h.Text, {
                      variant: "text-sm/semibold",
                      color: "always-white",
                      children: K.intl.string(K.t.TXNS7e)
                    }), (0, r.jsxs)("div", {
                      className: X.sendButtonIcons,
                      children: [(0, r.jsx)(h.Uuj, {
                        size: "xs",
                        color: "white"
                      }), eY && eZ ? (0, r.jsx)(h.or_, {
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
        }), (0, r.jsx)(x.Z, {
          targetRef: eN,
          ref: e$,
          channel: L,
          canMentionRoles: eh,
          canMentionChannels: ef,
          useNewSlashCommands: eG,
          canOnlyUseTextCommands: false,
          canSendStickers: true,
          textValue: p,
          focused: q,
          expressionPickerView: e5,
          type: H,
          editorRef: ew,
          onSendMessage: eQ,
          onSendSticker: () => {},
          onVisibilityChange: te,
          editorHeight: e8,
          setValue: (e, t) => null == en ? true : en(null, e, t),
          position: eC
        }), ex]
      }), e9 ? null : (0, r.jsx)(E.Z, {
        positionTargetRef: eN,
        type: H,
        onSelectGIF: tr,
        onSelectEmoji: tn,
        onSelectSticker: ti,
        channel: L,
        closeOnModalOuterClick: eO,
        parentModalKey: ej,
        position: "top",
        align: "right",
        positionLayerClassName: Q.expressionPickerPositionLayer
      })]
    })
  })
}));

function er(e) {
  var t, n;
  let {
    channelId: i,
    canCreateThread: l
  } = e, a = v.Z.useField("channelDrafts")[i], o = null == (t = null == a ? true : a.createThread) || t, s = null == (n = null == a ? true : a.publish) || n;
  return (0, r.jsxs)(h.v2r, {
    "aria-label": K.intl.string(K.t["9WnJys"]),
    navId: "send-announcement-options",
    onClose: z.dG4,
    onSelect: z.dG4,
    children: [(0, r.jsx)(h.S89, {
      id: "create-thread",
      label: K.intl.string(K.t.rBIGBA),
      checked: l && o,
      disabled: !l,
      action: () => {
        (0, v.c)(i, {
          createThread: !o
        })
      }
    }), (0, r.jsx)(h.S89, {
      id: "send-and-publish",
      label: K.intl.string(K.t["MFGE5+"]),
      checked: s,
      action: () => {
        (0, v.c)(i, {
          publish: !s
        })
      }
    })]
  })
}

function ei(e) {
  let {
    file: t,
    onRemoveHeroImage: n
  } = e, [l, a] = i.useState();
  i.useEffect(() => {
    if (null == t || false === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
    let e = URL.createObjectURL(t);
    return a(e), () => {
      a(true), URL.revokeObjectURL(e)
    }
  }, [t]);
  let [o, s] = i.useState(false), c = i.useCallback(() => {
    s(true)
  }, []), u = i.useCallback(() => {
    s(false)
  }, []);
  return null == l ? null : (0, r.jsxs)("div", {
    onMouseEnter: c,
    onMouseLeave: u,
    className: X.heroImageWrapper,
    "aria-hidden": true,
    children: [(0, r.jsx)("img", {
      src: l,
      alt: K.intl.string(K.t["2ePvR0"]),
      className: X.heroImage
    }), o ? (0, r.jsx)(j.ZP, {
      className: X.heroOverlay,
      children: (0, r.jsx)(H.Z, {
        tooltip: K.intl.string(K.t.VjC219),
        onClick: n,
        dangerous: true,
        children: (0, r.jsx)(h.XHJ, {})
      })
    }) : null]
  })
}

function el(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsx)(S.Z, {
    "aria-label": K.intl.string(K.t["/IBYAg"]),
    className: X.attachButton,
    size: "icon",
    color: "transparent",
    look: "blank",
    onChange: e => {
      (0, L.d5)(e.currentTarget.files, t, A.d.ChannelMessage, {
        requireConfirm: true,
        origin: "file_picker"
      }), e.currentTarget.value = null
    },
    children: (0, r.jsx)(h.xD0, {
      size: "custom",
      width: 20,
      height: 20,
      color: p.Z.colors.INTERACTIVE_NORMAL
    })
  })
}

function ea(e) {
  let {
    channel: t,
    onImageUploaded: n,
    onFocus: l
  } = e, a = i.useRef(null), o = async (e, r) => {
    let i = await (0, M.Bo)(e, r.name, r.type),
      l = {
        id: (0, u.Z)(),
        file: i,
        platform: g.ow.WEB,
        isThumbnail: false,
        origin: "file_picker"
      };
    f.Z.addFile({
      file: l,
      channelId: t.id,
      draftType: A.d.ChannelMessage
    }), n(i)
  }, [s, c] = i.useState(false), d = i.useCallback(() => {
    c(true)
  }, []), m = i.useCallback(() => {
    c(false)
  }, []);
  return (0, r.jsx)(h.DY3, {
    text: K.intl.string(K.t["/IBYAg"]),
    position: "top",
    className: X.heroImageButton,
    children: (0, r.jsxs)(h.P3F, {
      className: X.heroImageButton,
      onMouseOver: d,
      onMouseOut: m,
      onFocus: l,
      children: [(0, r.jsx)(P.ZP, {
        ref: a,
        onChange: o,
        "aria-hidden": true,
        tabIndex: false,
        maxFileSizeBytes: q.B,
        onFileSizeError: () => (0, I.Z)(q.B)
      }), (0, r.jsx)(h.FmF, {
        size: "md",
        color: s ? p.Z.colors.INTERACTIVE_ACTIVE : p.Z.colors.INTERACTIVE_NORMAL
      })]
    })
  })
}