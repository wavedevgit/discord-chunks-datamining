/** Chunk was on 34740 **/
/** chunk id: 190210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ei
}), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./388685.js"), require("./781311.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk878342 = require("./878342.js"),
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

function et(e, t) {
  let n = e.startsWith("attachment://"),
    i = e;
  if (n) {
    let n = e.slice(13);
    i = t ? "attachment://SPOILER_".concat(en(n)) : e
  }
  return {
    media: {
      url: i,
      proxyUrl: i,
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
let ei = Chunk473749.memo(Chunk473749.forwardRef(function(e, t) {
  var n, l, o, u;
  let {
    textValue: p,
    richValue: h,
    className: b,
    id: E,
    required: P,
    disabled: I,
    accessibilityLabel: Z,
    channel: L,
    type: D,
    focused: G,
    onChange: Y,
    onResize: ei,
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
    "aria-labelledby": ey,
    setEditorRef: eC,
    autoCompletePosition: ev,
    disableThemedBackground: e_ = false,
    emojiPickerCloseOnModalOuterClick: ex,
    parentModalKey: ej
  } = e, eO = j.Z.useField("channelDrafts")[L.id], eE = null != (l = null == eO ? true : eO.title) ? l : "", eS = null == eO ? true : eO.heroFile, eP = null == (o = null == eO ? true : eO.publish) || o, eI = null == (u = null == eO ? true : eO.createThread) || u;
  s()(null != D, "chat input type must be set");
  let {
    analyticsLocations: eZ
  } = (0, v.ZP)(C.Z.CHANNEL_TEXT_AREA), eT = (0, F.qz)(t), eN = r.useRef(null), eA = r.useRef(null), ew = r.useRef(null), eM = r.useRef(null);
  null == eC || eC(eA.current);
  let {
    activeCommand: eR
  } = (0, d.cj)([_.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = D.commands) ? true : e.enabled) ? _.Z.getActiveCommand(L.id) : null,
      activeCommandSection: (null == (t = D.commands) ? true : t.enabled) ? _.Z.getActiveCommandSection(L.id) : null
    }
  }), {
    isLurking: eL,
    isPendingMember: ek,
    disabled: eD,
    canAttachFiles: eU,
    canEveryoneSendMessages: eB
  } = (0, F.TE)(L, D, eR, I), eH = !A.dN.useSetting() && !(0, k.isAndroidWeb)() && null != window.ResizeObserver, eV = !eH || !(null == (n = D.commands) ? true : n.enabled) || !G || p !== q.GI, eF = (0, T.Z)(), {
    fontSize: eG
  } = (0, d.cj)([y.Z], () => ({
    fontSize: y.Z.fontSize,
    isSubmitButtonEnabled: y.Z.isSubmitButtonEnabled
  })), ez = (0, d.e7)([M.Z], () => M.Z.isEnabled()), eW = (0, N.NE)(L);
  (0, F.hJ)(D, eD);
  let {
    eventEmitter: eq,
    handleEditorSelectionChanged: eK
  } = (0, F.x2)(eA, p, h), eY = r.useCallback(e => {
    let t = e => {
        if (e.shouldClear) {
          var t;
          (0, j.c)(L.id, {
            title: "",
            heroFile: null
          }), null == (t = eA.current) || t.blur()
        }
        return e
      },
      n = [],
      i = eE.length > 0 ? eE : e.value.length > 0 ? e.value.slice(0, 80) : X.intl.string(X.t["7Xm5QI"]);
    if (null == eS) return ed(ee($({}, e), {
      announcementSendOptions: {
        createThread: eW && eI,
        threadName: i,
        publish: eP
      }
    })).then(t);
    n.push({
      type: g.re.MEDIA_GALLERY,
      items: [et("attachment://".concat(en(eS.name)), false)],
      id: "".concat(K.Vm)
    }), e.value.length > 0 && n.push({
      type: g.re.TEXT_DISPLAY,
      content: e.value,
      id: "".concat(K.Kb)
    });
    let r = R.Z.getUploads(L.id, w.d.ChannelMessage),
      l = r.filter(e => (e.isImage || e.isVideo) && e.filename !== (null == eS ? true : eS.name)),
      a = r.filter(e => !e.isImage && !e.isVideo && e.filename !== (null == eS ? true : eS.name)),
      o = l.map(e => et("attachment://".concat(en(e.filename)), false));
    return o.length > 0 && n.push({
      type: g.re.MEDIA_GALLERY,
      items: o,
      id: "".concat(K.m2)
    }), a.forEach((e, t) => {
      n.push({
        type: g.re.FILE,
        file: et("attachment://".concat(en(e.filename)), false).media,
        id: "".concat(K.kn + t),
        name: en(e.filename),
        size: null
      })
    }), ed(ee($({}, e), {
      components: n,
      announcementSendOptions: {
        createThread: eW && eI,
        threadName: i,
        publish: eP
      }
    })).then(t)
  }, [ed, eE, eS, L.id, eI, eP, eW]), {
    submit: eX,
    handleSubmit: eJ
  } = (0, F.bL)(eY, D, eA, eM, L.id), {
    autocompleteRef: eQ,
    handleMaybeShowAutocomplete: e$,
    handleHideAutocomplete: e0
  } = (0, F.jx)(), e1 = r.useCallback(() => {
    var e;
    return null == eM || null == (e = eM.current) ? true : e.hide()
  }, []), {
    editorHeight: e2,
    handleResize: e3
  } = (0, F.oR)(ei), {
    handleTab: e4,
    handleEnter: e7,
    handleMoveSelection: e8
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
  }(eQ, eN, eV), {
    expressionPickerView: e5,
    shouldHideExpressionPicker: e6,
    handleOuterClick: e9
  } = (0, F.iV)(D, eA), te = (0, F.aT)(p), {
    currentAutocompleteType: tt,
    handleAutocompleteVisibilityChange: tn
  } = (0, F.vB)(), ti = (0, F.ae)(eA), tr = (0, F.Sg)(eX, D, eA), tl = (0, F.O1)({
    editorRef: eA,
    disabled: eD,
    textValue: p,
    channelId: L.id,
    chatInputType: D,
    submit: eY
  });
  (0, U.S)(eq, L.guild_id, L.id);
  let [ta, to] = r.useState(false), ts = G || ta || p.length > 0 || null != eS || eE.length > 0, {
    editorHeaderHeight: tc,
    paddingTop: tu
  } = (0, f.q_F)({
    editorHeaderHeight: 122 * !!ts,
    paddingTop: 16 * !!ts,
    config: {
      tension: 120,
      friction: 15,
      clamp: true
    }
  }), td = r.useRef(null), [tp, th] = r.useState(false), tf = r.useRef(false), tm = r.useCallback(() => {
    tf.current = true;
    let e = setTimeout(() => {
      tf.current && th(true)
    }, 100);
    return () => clearTimeout(e)
  }, []), tg = r.useCallback(() => {
    tf.current = false;
    let e = setTimeout(() => {
      tf.current || th(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), tb = r.useCallback(() => {
    var e;
    if (null == eS) return;
    let t = null == (e = R.Z.getUploads(L.id, D.drafts.type).find(e => e.filename === eS.name)) ? true : e.id;
    null != t && m.Z.remove(L.id, t, w.d.ChannelMessage), (0, j.c)(L.id, {
      heroFile: null
    })
  }, [L.id, eS, D.drafts.type]);
  return (0, i.jsx)(O.f6, {
    value: eq,
    children: (0, i.jsxs)(v.Gt, {
      value: eZ,
      children: [(0, i.jsxs)("div", {
        ref: eT,
        className: a()(b, Q.channelTextArea),
        onMouseDown: e9,
        children: [(0, i.jsx)("div", {
          ref: ew,
          onScroll: e1,
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
                  height: tc,
                  paddingTop: tu
                },
                children: [null != eS ? (0, i.jsx)(el, {
                  file: eS,
                  onRemoveHeroImage: tb
                }) : null, null != eS ? null : (0, i.jsx)(eo, {
                  channel: L,
                  onImageUploaded: e => (0, j.c)(L.id, {
                    heroFile: e
                  }),
                  onFocus: () => to(true)
                }), (0, i.jsx)("input", {
                  onFocus: () => to(true),
                  onBlur: () => to(false),
                  maxLength: 140,
                  className: J.titleInput,
                  placeholder: X.intl.string(X.t.Z8fYjO),
                  value: eE,
                  onChange: e => (0, j.c)(L.id, {
                    title: e.target.value
                  })
                })]
              }), (0, i.jsx)("div", {
                className: J.inputWrapper,
                children: (0, i.jsx)(f.tEY, {
                  ringTarget: eT,
                  ringClassName: Q.focusRing,
                  children: (0, i.jsx)(H.Z, {
                    ref: eA,
                    id: E,
                    focused: G,
                    useSlate: eH,
                    textValue: p,
                    richValue: h,
                    disabled: eD,
                    placeholder: eg,
                    required: P,
                    accessibilityLabel: Z,
                    isPreviewing: (eL || ek) && eB,
                    channel: L,
                    type: B.Ie.CREATE_ANNOUNCEMENT_POST,
                    canPasteFiles: eU,
                    uploadPromptCharacterCount: W.en1,
                    maxCharacterCount: null != em ? em : eF,
                    allowNewLines: true,
                    "aria-describedby": eb,
                    onChange: Y,
                    onResize: e3,
                    onBlur: es,
                    onFocus: ec,
                    onKeyDown: eu,
                    onSubmit: eX,
                    onTab: e4,
                    onEnter: e7,
                    onMoveSelection: e8,
                    onSelectionChanged: eK,
                    onMaybeShowAutocomplete: e$,
                    onHideAutocomplete: e0,
                    promptToUpload: ep,
                    fontSize: eG,
                    spellcheckEnabled: ez,
                    canOnlyUseTextCommands: false,
                    isEditorIdle: te,
                    currentAutocompleteType: tt,
                    "aria-labelledby": ey
                  })
                })
              })]
            }), (0, i.jsx)("div", {
              className: J.attachmentsContainer,
              children: (0, i.jsx)(z.Z, {
                channelId: L.id,
                type: D,
                canAttachFiles: eU,
                ignoreFile: null == eS ? true : eS.name,
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
            children: [(0, i.jsx)(ea, {
              channel: L
            }), (0, i.jsx)(V.Z, {
              type: B.Ie.CREATE_ANNOUNCEMENT_POST,
              disabled: eD,
              channel: L,
              handleSubmit: eJ,
              isEmpty: 0 === p.trim().length,
              showAllButtons: true
            })]
          }), (0, i.jsx)("div", {
            className: J.footerPart,
            children: (0, i.jsx)("div", {
              ref: td,
              className: J.sendButtonContainer,
              onMouseEnter: tm,
              onMouseLeave: tg,
              children: (0, i.jsx)(f.yRy, {
                targetElementRef: td,
                renderPopout: () => (0, i.jsx)(er, {
                  channelId: L.id,
                  canCreateThread: eW
                }),
                shouldShow: tp,
                autoInvert: true,
                nudgeAlignIntoViewport: true,
                position: "top",
                align: "right",
                children: e => (0, i.jsx)(f.Button, ee($({}, e), {
                  onClick: () => {
                    eX("".concat(eE.length > 0 ? "# ".concat(eE, "\n") : "").concat(p))
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
                      }), eW && eI ? (0, i.jsx)(f.or_, {
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
        }), (0, i.jsx)(x.Z, {
          targetRef: eT,
          ref: eQ,
          channel: L,
          canMentionRoles: eh,
          canMentionChannels: ef,
          useNewSlashCommands: eH,
          canOnlyUseTextCommands: false,
          canSendStickers: true,
          textValue: p,
          focused: G,
          isEditorIdle: te,
          expressionPickerView: e5,
          type: D,
          editorRef: eA,
          onSendMessage: eX,
          onSendSticker: () => {},
          onVisibilityChange: tn,
          editorHeight: e2,
          setValue: (e, t) => null == Y ? true : Y(null, e, t),
          position: ev
        })]
      }), e6 ? null : (0, i.jsx)(S.Z, {
        positionTargetRef: eT,
        type: D,
        onSelectGIF: tr,
        onSelectEmoji: ti,
        onSelectSticker: tl,
        channel: L,
        closeOnModalOuterClick: ex,
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
    channelId: r,
    canCreateThread: l
  } = e, a = j.Z.useField("channelDrafts")[r], o = null == (t = null == a ? true : a.createThread) || t, s = null == (n = null == a ? true : a.publish) || n;
  return (0, i.jsxs)(f.v2r, {
    "aria-label": X.intl.string(X.t["9WnJyo"]),
    navId: "send-announcement-options",
    onClose: W.dG4,
    onSelect: W.dG4,
    children: [(0, i.jsx)(f.S89, {
      id: "create-thread",
      label: X.intl.string(X.t.rBIGBL),
      checked: l && o,
      disabled: !l,
      action: () => {
        (0, j.c)(r, {
          createThread: !o
        })
      }
    }), (0, i.jsx)(f.S89, {
      id: "send-and-publish",
      label: X.intl.string(X.t.MFGE51),
      checked: s,
      action: () => {
        (0, j.c)(r, {
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
    }), o ? (0, i.jsx)(E.ZP, {
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

function ea(e) {
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
      (0, D.d)(e.currentTarget.files, t, w.d.ChannelMessage, {
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

function eo(e) {
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