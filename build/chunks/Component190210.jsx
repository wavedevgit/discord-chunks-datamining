/** Chunk was on 73755 **/
/** chunk id: 190210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => en
}), require("./539854.js"), require("./953529.js"), require("./388685.js"), require("./781311.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk205120 = require("./205120.js"),
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function ee(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function et(e, t, n) {
  let i = e.startsWith("attachment://"),
    r = e;
  if (i) {
    let t = e.slice(13);
    r = n ? "attachment://SPOILER_".concat(t) : e
  }
  return {
    media: {
      url: r,
      proxyUrl: r,
      loadingState: g.f.UNKNOWN,
      flags: 0
    },
    description: null != t ? t : true,
    spoiler: n
  }
}
let en = Chunk473749.memo(Chunk473749.forwardRef(function(e, t) {
  var n, l, o, u;
  let {
    textValue: p,
    richValue: h,
    className: b,
    id: j,
    required: P,
    disabled: I,
    accessibilityLabel: Z,
    channel: L,
    type: k,
    focused: G,
    onChange: Y,
    onResize: en,
    onBlur: eo,
    onFocus: es,
    onKeyDown: ec,
    onSubmit: eu,
    promptToUpload: ed,
    canMentionRoles: ep,
    canMentionChannels: eh,
    maxCharacterCount: ef,
    placeholder: em,
    "aria-describedby": eg,
    "aria-labelledby": eb,
    setEditorRef: eC,
    autoCompletePosition: ey,
    disableThemedBackground: e_ = false,
    emojiPickerCloseOnModalOuterClick: ev,
    parentModalKey: eO
  } = e, ex = x.Z.useField("channelDrafts")[L.id], eE = null != (l = null == ex ? true : ex.title) ? l : "", ej = null == ex ? true : ex.heroFile, eS = null == (o = null == ex ? true : ex.publish) || o, eP = null == (u = null == ex ? true : ex.createThread) || u;
  s()(null != k, "chat input type must be set");
  let {
    analyticsLocations: eI
  } = (0, _.ZP)(y.Z.CHANNEL_TEXT_AREA), eZ = (0, H.qz)(t), eT = r.useRef(null), eN = r.useRef(null), eA = r.useRef(null), ew = r.useRef(null);
  null == eC || eC(eN.current);
  let {
    activeCommand: eM
  } = (0, d.cj)([v.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = k.commands) ? true : e.enabled) ? v.Z.getActiveCommand(L.id) : null,
      activeCommandSection: (null == (t = k.commands) ? true : t.enabled) ? v.Z.getActiveCommandSection(L.id) : null
    }
  }), {
    isLurking: eR,
    isPendingMember: eL,
    disabled: eD,
    canAttachFiles: ek,
    canEveryoneSendMessages: eU
  } = (0, H.TE)(L, k, eM, I), eV = !A.dN.useSetting() && !(0, D.isAndroidWeb)() && null != window.ResizeObserver, eB = !eV || !(null == (n = k.commands) ? true : n.enabled) || !G || p !== q.GI, eF = (0, T.Z)(), {
    fontSize: eH
  } = (0, d.cj)([C.Z], () => ({
    fontSize: C.Z.fontSize,
    isSubmitButtonEnabled: C.Z.isSubmitButtonEnabled
  })), eG = (0, d.e7)([M.Z], () => M.Z.isEnabled()), eW = (0, N.NE)(L);
  (0, H.hJ)(k, eD, L.id);
  let {
    eventEmitter: ez,
    handleEditorSelectionChanged: eq
  } = (0, H.x2)(eN, p, h), eK = r.useCallback(e => {
    let t = e => {
        if (e.shouldClear) {
          var t;
          (0, x.c)(L.id, {
            title: "",
            heroFile: null
          }), null == (t = eN.current) || t.blur()
        }
        return e
      },
      n = [],
      i = eE.length > 0 ? eE : e.value.length > 0 ? e.value.slice(0, 80) : X.intl.string(X.t["7Xm5QI"]);
    if (null == ej) return eu(ee($({}, e), {
      announcementSendOptions: {
        createThread: eW && eP,
        threadName: i,
        publish: eS
      }
    })).then(t);
    n.push({
      type: g.re.MEDIA_GALLERY,
      items: [et("attachment://".concat(ej.name), null, false)],
      id: "".concat(K.Vm)
    }), e.value.length > 0 && n.push({
      type: g.re.TEXT_DISPLAY,
      content: e.value,
      id: "".concat(K.Kb)
    });
    let r = R.Z.getUploads(L.id, w.d.ChannelMessage),
      l = r.filter(e => (e.isImage || e.isVideo) && e.filename !== (null == ej ? true : ej.name)),
      a = r.filter(e => !e.isImage && !e.isVideo && e.filename !== (null == ej ? true : ej.name)),
      o = l.map(e => et("attachment://".concat(e.filename), e.description, e.spoiler));
    return o.length > 0 && n.push({
      type: g.re.MEDIA_GALLERY,
      items: o,
      id: "".concat(K.m2)
    }), a.forEach((e, t) => {
      n.push({
        type: g.re.FILE,
        file: et("attachment://".concat(e.filename), e.description, e.spoiler).media,
        id: "".concat(K.kn + t),
        spoiler: e.spoiler,
        name: null,
        size: null
      })
    }), eu(ee($({}, e), {
      components: n,
      announcementSendOptions: {
        createThread: eW && eP,
        threadName: i,
        publish: eS
      }
    })).then(t)
  }, [eu, eE, ej, L.id, eP, eS, eW]), {
    submit: eY,
    handleSubmit: eX
  } = (0, H.bL)(eK, k, eN, ew, L.id), {
    autocompleteRef: eJ,
    handleMaybeShowAutocomplete: eQ,
    handleHideAutocomplete: e$
  } = (0, H.jx)(), e0 = r.useCallback(() => {
    var e;
    return null == ew || null == (e = ew.current) ? true : e.hide()
  }, []), {
    editorHeight: e1,
    handleResize: e2
  } = (0, H.oR)(en), {
    handleTab: e3,
    handleEnter: e4,
    handleMoveSelection: e7
  } = function(e, t, n) {
    let i = r.useCallback(() => {
      var i, r;
      return !!(!n && (null == (i = t.current) ? true : i.onTabOrEnter(false))) || (null == (r = e.current) ? true : r.onTabOrEnter(false)) || false
    }, [n]);
    return {
      handleTab: i,
      handleEnter: r.useCallback(() => {
        var i, r;
        return !!(!n && (null == (i = t.current) ? true : i.onTabOrEnter(true))) || (null == (r = e.current) ? true : r.onTabOrEnter(false)) || false
      }, [n]),
      handleMoveSelection: r.useCallback(i => {
        var r, l;
        return !!(!n && (null == (r = t.current) ? true : r.onMoveSelection(i))) || (null == (l = e.current) ? true : l.onMoveSelection(i)) || false
      }, [n])
    }
  }(eJ, eT, eB), {
    expressionPickerView: e8,
    shouldHideExpressionPicker: e5,
    handleOuterClick: e6
  } = (0, H.iV)(k, eN, L.id), e9 = (0, H.aT)(p), {
    currentAutocompleteType: te,
    handleAutocompleteVisibilityChange: tt
  } = (0, H.vB)(k, L.id), tn = (0, H.ae)(eN), ti = (0, H.Sg)(eY, k, eN), tr = (0, H.O1)({
    editorRef: eN,
    disabled: eD,
    textValue: p,
    channelId: L.id,
    chatInputType: k,
    submit: eK
  });
  (0, U.S)(ez, L.guild_id, L.id);
  let [tl, ta] = r.useState(false), to = G || tl || p.length > 0 || null != ej || eE.length > 0, {
    editorHeaderHeight: ts,
    paddingTop: tc
  } = (0, f.q_F)({
    editorHeaderHeight: 122 * !!to,
    paddingTop: 16 * !!to,
    config: {
      tension: 120,
      friction: 15,
      clamp: true
    }
  }), tu = r.useRef(null), [td, tp] = r.useState(false), th = r.useRef(false), tf = r.useCallback(() => {
    th.current = true;
    let e = setTimeout(() => {
      th.current && tp(true)
    }, 100);
    return () => clearTimeout(e)
  }, []), tm = r.useCallback(() => {
    th.current = false;
    let e = setTimeout(() => {
      th.current || tp(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), tg = r.useCallback(() => {
    var e;
    if (null == ej) return;
    let t = null == (e = R.Z.getUploads(L.id, k.drafts.type).find(e => e.filename === ej.name)) ? true : e.id;
    null != t && m.Z.remove(L.id, t, w.d.ChannelMessage), (0, x.c)(L.id, {
      heroFile: null
    })
  }, [L.id, ej, k.drafts.type]);
  return (0, i.jsx)(E.f6, {
    value: ez,
    children: (0, i.jsxs)(_.Gt, {
      value: eI,
      children: [(0, i.jsxs)("div", {
        ref: eZ,
        className: a()(b, Q.channelTextArea),
        onMouseDown: e6,
        children: [(0, i.jsx)("div", {
          ref: eA,
          onScroll: e0,
          className: a()(Q.announcementScrollableContainer, {
            [Q.themedBackground]: !e_
          }),
          children: (0, i.jsxs)("div", {
            className: a()(Q.inner, J.inner),
            children: [(0, i.jsxs)("div", {
              className: J.body,
              children: [(0, i.jsxs)(c.animated.div, {
                className: J.headerInput,
                style: {
                  height: ts,
                  paddingTop: tc
                },
                children: [null != ej ? (0, i.jsx)(er, {
                  file: ej,
                  onRemoveHeroImage: tg
                }) : null, null != ej ? null : (0, i.jsx)(ea, {
                  channel: L,
                  onImageUploaded: e => (0, x.c)(L.id, {
                    heroFile: e
                  }),
                  onFocus: () => ta(true)
                }), (0, i.jsx)("input", {
                  onFocus: () => ta(true),
                  onBlur: () => ta(false),
                  maxLength: 140,
                  className: J.titleInput,
                  placeholder: X.intl.string(X.t.Z8fYjO),
                  value: eE,
                  onChange: e => (0, x.c)(L.id, {
                    title: e.target.value
                  })
                })]
              }), (0, i.jsx)("div", {
                className: J.inputWrapper,
                children: (0, i.jsx)(f.tEY, {
                  ringTarget: eZ,
                  ringClassName: Q.focusRing,
                  children: (0, i.jsx)(B.Z, {
                    ref: eN,
                    id: j,
                    focused: G,
                    useSlate: eV,
                    textValue: p,
                    richValue: h,
                    disabled: eD,
                    placeholder: em,
                    required: P,
                    accessibilityLabel: Z,
                    isPreviewing: (eR || eL) && eU,
                    channel: L,
                    type: V.Ie.CREATE_ANNOUNCEMENT_POST,
                    canPasteFiles: ek,
                    uploadPromptCharacterCount: z.en1,
                    maxCharacterCount: null != ef ? ef : eF,
                    allowNewLines: true,
                    "aria-describedby": eg,
                    onChange: Y,
                    onResize: e2,
                    onBlur: eo,
                    onFocus: es,
                    onKeyDown: ec,
                    onSubmit: eY,
                    onTab: e3,
                    onEnter: e4,
                    onMoveSelection: e7,
                    onSelectionChanged: eq,
                    onMaybeShowAutocomplete: eQ,
                    onHideAutocomplete: e$,
                    promptToUpload: ed,
                    fontSize: eH,
                    spellcheckEnabled: eG,
                    canOnlyUseTextCommands: false,
                    isEditorIdle: e9,
                    currentAutocompleteType: te,
                    "aria-labelledby": eb
                  })
                })
              })]
            }), (0, i.jsx)("div", {
              className: J.attachmentsContainer,
              children: (0, i.jsx)(W.Z, {
                channelId: L.id,
                type: k,
                canAttachFiles: ek,
                ignoreFile: null == ej ? true : ej.name,
                smallAttachments: true
              })
            })]
          })
        }), (0, i.jsx)("div", {
          className: J.divider
        }), (0, i.jsxs)("div", {
          className: J.footer,
          children: [(0, i.jsxs)("div", {
            className: J.footerPart,
            children: [(0, i.jsx)(el, {
              channel: L
            }), (0, i.jsx)(F.Z, {
              type: V.Ie.CREATE_ANNOUNCEMENT_POST,
              disabled: eD,
              channel: L,
              handleSubmit: eX,
              isEmpty: 0 === p.trim().length,
              showAllButtons: true
            })]
          }), (0, i.jsx)("div", {
            className: J.footerPart,
            children: (0, i.jsx)("div", {
              ref: tu,
              className: J.sendButtonContainer,
              onMouseEnter: tf,
              onMouseLeave: tm,
              children: (0, i.jsx)(f.yRy, {
                targetElementRef: tu,
                renderPopout: () => (0, i.jsx)(ei, {
                  channelId: L.id,
                  canCreateThread: eW
                }),
                shouldShow: td,
                autoInvert: true,
                nudgeAlignIntoViewport: true,
                position: "top",
                align: "right",
                children: e => (0, i.jsx)(f.Button, ee($({}, e), {
                  onClick: () => {
                    eY("".concat(eE.length > 0 ? "# ".concat(eE, "\n") : "").concat(p))
                  },
                  disabled: 0 === p.length && 0 === eE.length,
                  size: "sm",
                  "aria-label": X.intl.string(X.t.TXNS7S),
                  innerClassName: J.sendButton,
                  text: (0, i.jsxs)("div", {
                    className: J.sendButtonContents,
                    children: [(0, i.jsx)(f.Text, {
                      variant: "text-sm/semibold",
                      color: "always-white",
                      children: X.intl.string(X.t.TXNS7S)
                    }), (0, i.jsxs)("div", {
                      className: J.sendButtonIcons,
                      children: [(0, i.jsx)(f.Uuj, {
                        size: "xs",
                        color: "white"
                      }), eW && eP ? (0, i.jsx)(f.or_, {
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
        }), (0, i.jsx)(O.Z, {
          targetRef: eZ,
          ref: eJ,
          channel: L,
          canMentionRoles: ep,
          canMentionChannels: eh,
          useNewSlashCommands: eV,
          canOnlyUseTextCommands: false,
          canSendStickers: true,
          textValue: p,
          focused: G,
          isEditorIdle: e9,
          expressionPickerView: e8,
          type: k,
          editorRef: eN,
          onSendMessage: eY,
          onSendSticker: () => {},
          onVisibilityChange: tt,
          editorHeight: e1,
          setValue: (e, t) => null == Y ? true : Y(null, e, t),
          position: ey
        })]
      }), e5 ? null : (0, i.jsx)(S.Z, {
        positionTargetRef: eZ,
        type: k,
        onSelectGIF: ti,
        onSelectEmoji: tn,
        onSelectSticker: tr,
        channel: L,
        closeOnModalOuterClick: ev,
        parentModalKey: eO,
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
    channelId: r,
    canCreateThread: l
  } = e, a = x.Z.useField("channelDrafts")[r], o = null == (t = null == a ? true : a.createThread) || t, s = null == (n = null == a ? true : a.publish) || n;
  return (0, i.jsxs)(f.v2r, {
    "aria-label": X.intl.string(X.t["9WnJyo"]),
    navId: "send-announcement-options",
    onClose: z.dG4,
    onSelect: z.dG4,
    children: [(0, i.jsx)(f.S89, {
      id: "create-thread",
      label: X.intl.string(X.t.rBIGBL),
      checked: l && o,
      disabled: !l,
      action: () => {
        (0, x.c)(r, {
          createThread: !o
        })
      }
    }), (0, i.jsx)(f.S89, {
      id: "send-and-publish",
      label: X.intl.string(X.t.MFGE51),
      checked: s,
      action: () => {
        (0, x.c)(r, {
          publish: !s
        })
      }
    })]
  })
}

function er(e) {
  let {
    file: t,
    onRemoveHeroImage: n
  } = e, [l, a] = r.useState();
  r.useEffect(() => {
    if (null == t || false === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
    let e = URL.createObjectURL(t);
    return a(e), () => {
      a(true), URL.revokeObjectURL(e)
    }
  }, [t]);
  let [o, s] = r.useState(false), c = r.useCallback(() => {
    s(true)
  }, []), u = r.useCallback(() => {
    s(false)
  }, []);
  return null == l ? null : (0, i.jsxs)("div", {
    onMouseEnter: c,
    onMouseLeave: u,
    className: J.heroImageWrapper,
    "aria-hidden": true,
    children: [(0, i.jsx)("img", {
      src: l,
      alt: X.intl.string(X.t["2ePvR8"]),
      className: J.heroImage
    }), o ? (0, i.jsx)(j.ZP, {
      className: J.heroOverlay,
      children: (0, i.jsx)(G.Z, {
        tooltip: X.intl.string(X.t.VjC21x),
        onClick: n,
        dangerous: true,
        children: (0, i.jsx)(f.XHJ, {})
      })
    }) : null]
  })
}

function el(e) {
  let {
    channel: t
  } = e;
  return (0, i.jsx)(P.Z, {
    "aria-label": X.intl.string(X.t["/IBYAq"]),
    className: J.attachButton,
    size: "icon",
    color: "transparent",
    look: "blank",
    onChange: e => {
      (0, k.d)(e.currentTarget.files, t, w.d.ChannelMessage, {
        requireConfirm: true,
        origin: "file_picker"
      }), e.currentTarget.value = null
    },
    children: (0, i.jsx)(f.xD0, {
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
  } = e, a = r.useRef(null), o = async (e, i) => {
    let r = await (0, L.Bo)(e, i.name, i.type),
      l = {
        id: (0, u.Z)(),
        file: r,
        platform: b.ow.WEB,
        isThumbnail: false,
        origin: "file_picker"
      };
    m.Z.addFile({
      file: l,
      channelId: t.id,
      draftType: w.d.ChannelMessage
    }), n(r)
  }, [s, c] = r.useState(false), d = r.useCallback(() => {
    c(true)
  }, []), g = r.useCallback(() => {
    c(false)
  }, []);
  return (0, i.jsx)("div", {
    className: J.heroImageButton,
    children: (0, i.jsx)(h.u, {
      asContainer: true,
      text: X.intl.string(X.t["/IBYAq"]),
      position: "top",
      children: (0, i.jsxs)(f.P3F, {
        className: J.heroImageButton,
        onMouseOver: d,
        onMouseOut: g,
        onFocus: l,
        children: [(0, i.jsx)(Z.ZP, {
          ref: a,
          onChange: o,
          "aria-hidden": true,
          tabIndex: false,
          maxFileSizeBytes: Y.B,
          onFileSizeError: () => (0, I.Z)(Y.B)
        }), (0, i.jsx)(f.FmF, {
          size: "md",
          color: s ? p.Z.colors.INTERACTIVE_ACTIVE : p.Z.colors.INTERACTIVE_NORMAL
        })]
      })
    })
  })
}