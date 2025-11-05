/** Chunk was on 88647 **/
/** chunk id: 190210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => er
}), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./388685.js"), require("./781311.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk426322 = require("./426322.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
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

function $(e) {
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

function ee(e, t) {
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

function et(e, t) {
  let n = e.startsWith("attachment://"),
    r = e;
  if (n) {
    let n = e.slice(13);
    r = t ? "attachment://SPOILER_".concat(en(n)) : e
  }
  return {
    media: {
      url: r,
      proxyUrl: r,
      loadingState: g.f.UNKNOWN,
      flags: 0
    },
    description: e,
    spoiler: t
  }
}

function en(e) {
  return null == e ? "unnamed_file" : e.replace(/\s/g, "_")
}
let er = Chunk647438.memo(Chunk647438.forwardRef(function(e, t) {
  var n, l, o, u;
  let {
    textValue: p,
    richValue: f,
    className: b,
    id: j,
    required: P,
    disabled: I,
    accessibilityLabel: Z,
    channel: D,
    type: L,
    focused: G,
    onChange: K,
    onResize: er,
    onBlur: es,
    onFocus: ec,
    onKeyDown: eu,
    onSubmit: ed,
    promptToUpload: ep,
    canMentionRoles: ef,
    canMentionChannels: eh,
    maxCharacterCount: em,
    placeholder: eg,
    "aria-describedby": eb,
    "aria-labelledby": e_,
    setEditorRef: ey,
    autoCompletePosition: eC,
    children: ev,
    disableThemedBackground: eO = false,
    emojiPickerCloseOnModalOuterClick: ex,
    parentModalKey: eE
  } = e, ej = x.Z.useField("channelDrafts")[D.id], eS = null != (l = null == ej ? true : ej.title) ? l : "", eP = null == ej ? true : ej.heroFile, eI = null == (o = null == ej ? true : ej.publish) || o, eZ = null == (u = null == ej ? true : ej.createThread) || u;
  s()(null != L, "chat input type must be set");
  let {
    analyticsLocations: eT
  } = (0, C.ZP)(y.Z.CHANNEL_TEXT_AREA), eN = (0, H.qz)(t), eA = i.useRef(null), ew = i.useRef(null), eM = i.useRef(null), eR = i.useRef(null);
  null == ey || ey(ew.current);
  let {
    activeCommand: eD
  } = (0, d.cj)([v.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = L.commands) ? true : e.enabled) ? v.Z.getActiveCommand(D.id) : null,
      activeCommandSection: (null == (t = L.commands) ? true : t.enabled) ? v.Z.getActiveCommandSection(D.id) : null
    }
  }), {
    isLurking: ek,
    isPendingMember: eL,
    disabled: eU,
    canAttachFiles: eB,
    canEveryoneSendMessages: eF
  } = (0, H.TE)(D, L, eD, I), eV = !A.dN.useSetting() && !(0, k.isAndroidWeb)() && null != window.ResizeObserver, eH = !eV || !(null == (n = L.commands) ? true : n.enabled) || !G || p !== q.GI, eG = (0, T.Z)(), {
    fontSize: eW
  } = (0, d.cj)([_.Z], () => ({
    fontSize: _.Z.fontSize,
    isSubmitButtonEnabled: _.Z.isSubmitButtonEnabled
  })), ez = (0, d.e7)([M.Z], () => M.Z.isEnabled()), eq = (0, N.NE)(D);
  (0, H.hJ)(L, eU);
  let {
    eventEmitter: eY,
    handleEditorSelectionChanged: eK
  } = (0, H.x2)(ew, p, f), eX = i.useCallback(e => {
    let t = e => {
        if (e.shouldClear) {
          var t;
          (0, x.c)(D.id, {
            title: "",
            heroFile: null
          }), null == (t = ew.current) || t.blur()
        }
        return e
      },
      n = [],
      r = eS.length > 0 ? eS : e.value.length > 0 ? e.value.slice(0, 80) : X.intl.string(X.t["7Xm5QI"]);
    if (null == eP) return ed(ee($({}, e), {
      announcementSendOptions: {
        createThread: eq && eZ,
        threadName: r,
        publish: eI
      }
    })).then(t);
    n.push({
      type: g.re.MEDIA_GALLERY,
      items: [et("attachment://".concat(en(eP.name)), false)],
      id: "".concat(Y.Vm)
    }), e.value.length > 0 && n.push({
      type: g.re.TEXT_DISPLAY,
      content: e.value,
      id: "".concat(Y.Kb)
    });
    let i = R.Z.getUploads(D.id, w.d.ChannelMessage),
      l = i.filter(e => (e.isImage || e.isVideo) && e.filename !== (null == eP ? true : eP.name)),
      a = i.filter(e => !e.isImage && !e.isVideo && e.filename !== (null == eP ? true : eP.name)),
      o = l.map(e => et("attachment://".concat(en(e.filename)), false));
    return o.length > 0 && n.push({
      type: g.re.MEDIA_GALLERY,
      items: o,
      id: "".concat(Y.m2)
    }), a.forEach((e, t) => {
      n.push({
        type: g.re.FILE,
        file: et("attachment://".concat(en(e.filename)), false).media,
        id: "".concat(Y.kn + t),
        name: en(e.filename),
        size: null
      })
    }), ed(ee($({}, e), {
      components: n,
      announcementSendOptions: {
        createThread: eq && eZ,
        threadName: r,
        publish: eI
      }
    })).then(t)
  }, [ed, eS, eP, D.id, eZ, eI, eq]), {
    submit: eJ,
    handleSubmit: eQ
  } = (0, H.bL)(eX, L, ew, eR, D.id), {
    autocompleteRef: e$,
    handleMaybeShowAutocomplete: e0,
    handleHideAutocomplete: e1
  } = (0, H.jx)(), e2 = i.useCallback(() => {
    var e;
    return null == eR || null == (e = eR.current) ? true : e.hide()
  }, []), {
    editorHeight: e3,
    handleResize: e8
  } = (0, H.oR)(er), {
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
    handleOuterClick: te
  } = (0, H.iV)(L, ew), tt = (0, H.aT)(p), {
    currentAutocompleteType: tn,
    handleAutocompleteVisibilityChange: tr
  } = (0, H.vB)(), ti = (0, H.ae)(ew), tl = (0, H.Sg)(eJ, L, ew), ta = (0, H.O1)({
    editorRef: ew,
    disabled: eU,
    textValue: p,
    channelId: D.id,
    chatInputType: L,
    submit: eX
  });
  (0, U.S)(eY, D.guild_id, D.id);
  let [to, ts] = i.useState(false), tc = G || to || p.length > 0 || null != eP || eS.length > 0, {
    editorHeaderHeight: tu,
    paddingTop: td
  } = (0, h.q_F)({
    editorHeaderHeight: 122 * !!tc,
    paddingTop: 16 * !!tc,
    config: {
      tension: 120,
      friction: 15,
      clamp: true
    }
  }), tp = i.useRef(null), [tf, th] = i.useState(false), tm = i.useRef(false), tg = i.useCallback(() => {
    tm.current = true;
    let e = setTimeout(() => {
      tm.current && th(true)
    }, 100);
    return () => clearTimeout(e)
  }, []), tb = i.useCallback(() => {
    tm.current = false;
    let e = setTimeout(() => {
      tm.current || th(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), t_ = i.useCallback(() => {
    var e;
    if (null == eP) return;
    let t = null == (e = R.Z.getUploads(D.id, L.drafts.type).find(e => e.filename === eP.name)) ? true : e.id;
    null != t && m.Z.remove(D.id, t, w.d.ChannelMessage), (0, x.c)(D.id, {
      heroFile: null
    })
  }, [D.id, eP, L.drafts.type]);
  return (0, r.jsx)(E.f6, {
    value: eY,
    children: (0, r.jsxs)(C.Gt, {
      value: eT,
      children: [(0, r.jsxs)("div", {
        ref: eN,
        className: a()(b, Q.channelTextArea),
        onMouseDown: te,
        children: [(0, r.jsx)("div", {
          ref: eM,
          onScroll: e2,
          className: a()(Q.announcementScrollableContainer, {
            [Q.themedBackground]: !eO
          }),
          children: (0, r.jsxs)("div", {
            className: a()(Q.inner, J.inner),
            children: [(0, r.jsxs)("div", {
              className: J.body,
              children: [(0, r.jsxs)(c.animated.div, {
                className: J.headerInput,
                style: {
                  height: tu,
                  paddingTop: td
                },
                children: [null != eP ? (0, r.jsx)(el, {
                  file: eP,
                  onRemoveHeroImage: t_
                }) : null, null != eP ? null : (0, r.jsx)(eo, {
                  channel: D,
                  onImageUploaded: e => (0, x.c)(D.id, {
                    heroFile: e
                  }),
                  onFocus: () => ts(true)
                }), (0, r.jsx)("input", {
                  onFocus: () => ts(true),
                  onBlur: () => ts(false),
                  maxLength: 140,
                  className: J.titleInput,
                  placeholder: X.intl.string(X.t.Z8fYjO),
                  value: eS,
                  onChange: e => (0, x.c)(D.id, {
                    title: e.target.value
                  })
                })]
              }), (0, r.jsx)("div", {
                className: J.inputWrapper,
                children: (0, r.jsx)(h.tEY, {
                  ringTarget: eN,
                  ringClassName: Q.focusRing,
                  children: (0, r.jsx)(F.Z, {
                    ref: ew,
                    id: j,
                    focused: G,
                    useSlate: eV,
                    textValue: p,
                    richValue: f,
                    disabled: eU,
                    placeholder: eg,
                    required: P,
                    accessibilityLabel: Z,
                    isPreviewing: (ek || eL) && eF,
                    channel: D,
                    type: B.Ie.CREATE_ANNOUNCEMENT_POST,
                    canPasteFiles: eB,
                    uploadPromptCharacterCount: z.en1,
                    maxCharacterCount: null != em ? em : eG,
                    allowNewLines: true,
                    "aria-describedby": eb,
                    onChange: K,
                    onResize: e8,
                    onBlur: es,
                    onFocus: ec,
                    onKeyDown: eu,
                    onSubmit: eJ,
                    onTab: e4,
                    onEnter: e7,
                    onMoveSelection: e6,
                    onSelectionChanged: eK,
                    onMaybeShowAutocomplete: e0,
                    onHideAutocomplete: e1,
                    promptToUpload: ep,
                    fontSize: eW,
                    spellcheckEnabled: ez,
                    canOnlyUseTextCommands: false,
                    isEditorIdle: tt,
                    currentAutocompleteType: tn,
                    "aria-labelledby": e_
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: J.attachmentsContainer,
              children: (0, r.jsx)(W.Z, {
                channelId: D.id,
                type: L,
                canAttachFiles: eB,
                ignoreFile: null == eP ? true : eP.name,
                smallAttachments: true
              })
            })]
          })
        }), (0, r.jsx)("div", {
          className: J.divider
        }), (0, r.jsxs)("div", {
          className: J.footer,
          children: [(0, r.jsxs)("div", {
            className: J.footerPart,
            children: [(0, r.jsx)(ea, {
              channel: D
            }), (0, r.jsx)(V.Z, {
              type: B.Ie.CREATE_ANNOUNCEMENT_POST,
              disabled: eU,
              channel: D,
              handleSubmit: eQ,
              isEmpty: 0 === p.trim().length,
              showAllButtons: true
            })]
          }), (0, r.jsx)("div", {
            className: J.footerPart,
            children: (0, r.jsx)("div", {
              ref: tp,
              className: J.sendButtonContainer,
              onMouseEnter: tg,
              onMouseLeave: tb,
              children: (0, r.jsx)(h.yRy, {
                targetElementRef: tp,
                renderPopout: () => (0, r.jsx)(ei, {
                  channelId: D.id,
                  canCreateThread: eq
                }),
                shouldShow: tf,
                autoInvert: true,
                nudgeAlignIntoViewport: true,
                position: "top",
                align: "right",
                children: e => (0, r.jsx)(h.Button, ee($({}, e), {
                  onClick: () => {
                    eJ("".concat(eS.length > 0 ? "# ".concat(eS, "\n") : "").concat(p))
                  },
                  disabled: 0 === p.length && 0 === eS.length,
                  size: "sm",
                  "aria-label": X.intl.string(X.t.TXNS7S),
                  innerClassName: J.sendButton,
                  text: (0, r.jsxs)("div", {
                    className: J.sendButtonContents,
                    children: [(0, r.jsx)(h.Text, {
                      variant: "text-sm/semibold",
                      color: "always-white",
                      children: X.intl.string(X.t.TXNS7S)
                    }), (0, r.jsxs)("div", {
                      className: J.sendButtonIcons,
                      children: [(0, r.jsx)(h.Uuj, {
                        size: "xs",
                        color: "white"
                      }), eq && eZ ? (0, r.jsx)(h.or_, {
                        size: "xxs",
                        color: "white",
                        className: J.subIcon
                      }) : null]
                    })]
                  })
                }))
              })
            })
          })]
        }), (0, r.jsx)(O.Z, {
          targetRef: eN,
          ref: e$,
          channel: D,
          canMentionRoles: ef,
          canMentionChannels: eh,
          useNewSlashCommands: eV,
          canOnlyUseTextCommands: false,
          canSendStickers: true,
          textValue: p,
          focused: G,
          isEditorIdle: tt,
          expressionPickerView: e5,
          type: L,
          editorRef: ew,
          onSendMessage: eJ,
          onSendSticker: () => {},
          onVisibilityChange: tr,
          editorHeight: e3,
          setValue: (e, t) => null == K ? true : K(null, e, t),
          position: eC
        }), ev]
      }), e9 ? null : (0, r.jsx)(S.Z, {
        positionTargetRef: eN,
        type: L,
        onSelectGIF: tl,
        onSelectEmoji: ti,
        onSelectSticker: ta,
        channel: D,
        closeOnModalOuterClick: ex,
        parentModalKey: eE,
        position: "top",
        align: "right",
        positionLayerClassName: Q.expressionPickerPositionLayer
      })]
    })
  })
}));

function ei(e) {
  var t, n;
  let {
    channelId: i,
    canCreateThread: l
  } = e, a = x.Z.useField("channelDrafts")[i], o = null == (t = null == a ? true : a.createThread) || t, s = null == (n = null == a ? true : a.publish) || n;
  return (0, r.jsxs)(h.v2r, {
    "aria-label": X.intl.string(X.t["9WnJyo"]),
    navId: "send-announcement-options",
    onClose: z.dG4,
    onSelect: z.dG4,
    children: [(0, r.jsx)(h.S89, {
      id: "create-thread",
      label: X.intl.string(X.t.rBIGBL),
      checked: l && o,
      disabled: !l,
      action: () => {
        (0, x.c)(i, {
          createThread: !o
        })
      }
    }), (0, r.jsx)(h.S89, {
      id: "send-and-publish",
      label: X.intl.string(X.t.MFGE51),
      checked: s,
      action: () => {
        (0, x.c)(i, {
          publish: !s
        })
      }
    })]
  })
}

function el(e) {
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
    className: J.heroImageWrapper,
    "aria-hidden": true,
    children: [(0, r.jsx)("img", {
      src: l,
      alt: X.intl.string(X.t["2ePvR8"]),
      className: J.heroImage
    }), o ? (0, r.jsx)(j.ZP, {
      className: J.heroOverlay,
      children: (0, r.jsx)(G.Z, {
        tooltip: X.intl.string(X.t.VjC21x),
        onClick: n,
        dangerous: true,
        children: (0, r.jsx)(h.XHJ, {})
      })
    }) : null]
  })
}

function ea(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsx)(P.Z, {
    "aria-label": X.intl.string(X.t["/IBYAq"]),
    className: J.attachButton,
    size: "icon",
    color: "transparent",
    look: "blank",
    onChange: e => {
      (0, L.d)(e.currentTarget.files, t, w.d.ChannelMessage, {
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

function eo(e) {
  let {
    channel: t,
    onImageUploaded: n,
    onFocus: l
  } = e, a = i.useRef(null), o = async (e, r) => {
    let i = await (0, D.Bo)(e, r.name, r.type),
      l = {
        id: (0, u.Z)(),
        file: i,
        platform: b.ow.WEB,
        isThumbnail: false,
        origin: "file_picker"
      };
    m.Z.addFile({
      file: l,
      channelId: t.id,
      draftType: w.d.ChannelMessage
    }), n(i)
  }, [s, c] = i.useState(false), d = i.useCallback(() => {
    c(true)
  }, []), g = i.useCallback(() => {
    c(false)
  }, []);
  return (0, r.jsx)("div", {
    className: J.heroImageButton,
    children: (0, r.jsx)(f.u, {
      asContainer: true,
      text: X.intl.string(X.t["/IBYAq"]),
      position: "top",
      children: (0, r.jsxs)(h.P3F, {
        className: J.heroImageButton,
        onMouseOver: d,
        onMouseOut: g,
        onFocus: l,
        children: [(0, r.jsx)(Z.ZP, {
          ref: a,
          onChange: o,
          "aria-hidden": true,
          tabIndex: false,
          maxFileSizeBytes: K.B,
          onFileSizeError: () => (0, I.Z)(K.B)
        }), (0, r.jsx)(h.FmF, {
          size: "md",
          color: s ? p.Z.colors.INTERACTIVE_ACTIVE : p.Z.colors.INTERACTIVE_NORMAL
        })]
      })
    })
  })
}