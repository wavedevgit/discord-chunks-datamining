/** Chunk was on 62987 **/
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
  Chunk938288 = require("./938288.js"),
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
    richValue: h,
    className: b,
    id: E,
    required: I,
    disabled: P,
    accessibilityLabel: Z,
    channel: D,
    type: k,
    focused: V,
    onChange: K,
    onResize: er,
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
    setEditorRef: e_,
    autoCompletePosition: eC,
    children: ev,
    disableThemedBackground: ex = false,
    emojiPickerCloseOnModalOuterClick: eO,
    parentModalKey: ej
  } = e, eE = O.Z.useField("channelDrafts")[D.id], eS = null != (l = null == eE ? true : eE.title) ? l : "", eI = null == eE ? true : eE.heroFile, eP = null == (o = null == eE ? true : eE.publish) || o, eZ = null == (u = null == eE ? true : eE.createThread) || u;
  s()(null != k, "chat input type must be set");
  let {
    analyticsLocations: eT
  } = (0, C.ZP)(_.Z.CHANNEL_TEXT_AREA), eN = (0, F.qz)(t), eA = i.useRef(null), ew = i.useRef(null), eR = i.useRef(null), eM = i.useRef(null);
  null == e_ || e_(ew.current);
  let {
    activeCommand: eD
  } = (0, d.cj)([v.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = k.commands) ? true : e.enabled) ? v.Z.getActiveCommand(D.id) : null,
      activeCommandSection: (null == (t = k.commands) ? true : t.enabled) ? v.Z.getActiveCommandSection(D.id) : null
    }
  }), {
    isLurking: eL,
    isPendingMember: ek,
    disabled: eU,
    canAttachFiles: eB,
    canEveryoneSendMessages: eG
  } = (0, F.TE)(D, k, eD, P), eH = !A.dN.useSetting() && !(0, L.isAndroidWeb)() && null != window.ResizeObserver, eF = !eH || !(null == (n = k.commands) ? true : n.enabled) || !V || p !== q.GI, eV = (0, T.Z)(), {
    fontSize: ez
  } = (0, d.cj)([y.Z], () => ({
    fontSize: y.Z.fontSize,
    isSubmitButtonEnabled: y.Z.isSubmitButtonEnabled
  })), eW = (0, d.e7)([R.Z], () => R.Z.isEnabled()), eq = (0, N.NE)(D);
  (0, F.hJ)(k, eU);
  let {
    eventEmitter: eY,
    handleEditorSelectionChanged: eK
  } = (0, F.x2)(ew, p, h), eX = i.useCallback(e => {
    let t = e => {
        if (e.shouldClear) {
          var t;
          (0, O.c)(D.id, {
            title: "",
            heroFile: null
          }), null == (t = ew.current) || t.blur()
        }
        return e
      },
      n = [],
      r = eS.length > 0 ? eS : e.value.length > 0 ? e.value.slice(0, 80) : X.intl.string(X.t["7Xm5QE"]);
    if (null == eI) return ed(ee($({}, e), {
      announcementSendOptions: {
        createThread: eq && eZ,
        threadName: r,
        publish: eP
      }
    })).then(t);
    n.push({
      type: g.re.MEDIA_GALLERY,
      items: [et("attachment://".concat(en(eI.name)), false)],
      id: "".concat(Y.Vm)
    }), e.value.length > 0 && n.push({
      type: g.re.TEXT_DISPLAY,
      content: e.value,
      id: "".concat(Y.Kb)
    });
    let i = M.Z.getUploads(D.id, w.d.ChannelMessage),
      l = i.filter(e => (e.isImage || e.isVideo) && e.filename !== (null == eI ? true : eI.name)),
      a = i.filter(e => !e.isImage && !e.isVideo && e.filename !== (null == eI ? true : eI.name)),
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
        publish: eP
      }
    })).then(t)
  }, [ed, eS, eI, D.id, eZ, eP, eq]), {
    submit: eQ,
    handleSubmit: eJ
  } = (0, F.bL)(eX, k, ew, eM, D.id), {
    autocompleteRef: e$,
    handleMaybeShowAutocomplete: e0,
    handleHideAutocomplete: e1
  } = (0, F.jx)(), e2 = i.useCallback(() => {
    var e;
    return null == eM || null == (e = eM.current) ? true : e.hide()
  }, []), {
    editorHeight: e8,
    handleResize: e3
  } = (0, F.oR)(er), {
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
  }(e$, eA, eF), {
    expressionPickerView: e5,
    shouldHideExpressionPicker: e9,
    handleAutocompleteVisibilityChange: te,
    handleOuterClick: tt
  } = (0, F.iV)(k, eY, ew), tn = (0, F.ae)(ew), tr = (0, F.Sg)(eQ, k, ew), ti = (0, F.O1)({
    editorRef: ew,
    disabled: eU,
    textValue: p,
    channelId: D.id,
    chatInputType: k,
    submit: eX
  });
  (0, U.S)(eY, D.guild_id, D.id);
  let [tl, ta] = i.useState(false), to = V || tl || p.length > 0 || null != eI || eS.length > 0, {
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
    let t = null == (e = M.Z.getUploads(D.id, k.drafts.type).find(e => e.filename === eI.name)) ? true : e.id;
    null != t && m.Z.remove(D.id, t, w.d.ChannelMessage), (0, O.c)(D.id, {
      heroFile: null
    })
  }, [D.id, eI, k.drafts.type]);
  return (0, r.jsx)(j.f6, {
    value: eY,
    children: (0, r.jsxs)(C.Gt, {
      value: eT,
      children: [(0, r.jsxs)("div", {
        ref: eN,
        className: a()(b, J.channelTextArea),
        onMouseDown: tt,
        children: [(0, r.jsx)("div", {
          ref: eR,
          onScroll: e2,
          className: a()(J.announcementScrollableContainer, {
            [J.themedBackground]: !ex
          }),
          children: (0, r.jsxs)("div", {
            className: a()(J.inner, Q.inner),
            children: [(0, r.jsxs)("div", {
              className: Q.body,
              children: [(0, r.jsxs)(c.animated.div, {
                className: Q.headerInput,
                style: {
                  height: ts,
                  paddingTop: tc
                },
                children: [null != eI ? (0, r.jsx)(el, {
                  file: eI,
                  onRemoveHeroImage: tg
                }) : null, null != eI ? null : (0, r.jsx)(eo, {
                  channel: D,
                  onImageUploaded: e => (0, O.c)(D.id, {
                    heroFile: e
                  }),
                  onFocus: () => ta(true)
                }), (0, r.jsx)("input", {
                  onFocus: () => ta(true),
                  onBlur: () => ta(false),
                  maxLength: 140,
                  className: Q.titleInput,
                  placeholder: X.intl.string(X.t.Z8fYjI),
                  value: eS,
                  onChange: e => (0, O.c)(D.id, {
                    title: e.target.value
                  })
                })]
              }), (0, r.jsx)("div", {
                className: Q.inputWrapper,
                children: (0, r.jsx)(f.tEY, {
                  ringTarget: eN,
                  ringClassName: J.focusRing,
                  children: (0, r.jsx)(G.Z, {
                    ref: ew,
                    id: E,
                    focused: V,
                    useSlate: eH,
                    textValue: p,
                    richValue: h,
                    disabled: eU,
                    placeholder: eg,
                    required: I,
                    accessibilityLabel: Z,
                    isPreviewing: (eL || ek) && eG,
                    channel: D,
                    type: B.Ie.CREATE_ANNOUNCEMENT_POST,
                    canPasteFiles: eB,
                    uploadPromptCharacterCount: W.en1,
                    maxCharacterCount: null != em ? em : eV,
                    allowNewLines: true,
                    "aria-describedby": eb,
                    onChange: K,
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
                    "aria-labelledby": ey
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: Q.attachmentsContainer,
              children: (0, r.jsx)(z.Z, {
                channelId: D.id,
                type: k,
                canAttachFiles: eB,
                ignoreFile: null == eI ? true : eI.name,
                smallAttachments: true
              })
            })]
          })
        }), (0, r.jsx)("div", {
          className: Q.divider
        }), (0, r.jsxs)("div", {
          className: Q.footer,
          children: [(0, r.jsxs)("div", {
            className: Q.footerPart,
            children: [(0, r.jsx)(ea, {
              channel: D
            }), (0, r.jsx)(H.Z, {
              type: B.Ie.CREATE_ANNOUNCEMENT_POST,
              disabled: eU,
              channel: D,
              handleSubmit: eJ,
              isEmpty: 0 === p.trim().length,
              showAllButtons: true
            })]
          }), (0, r.jsx)("div", {
            className: Q.footerPart,
            children: (0, r.jsx)("div", {
              ref: tu,
              className: Q.sendButtonContainer,
              onMouseEnter: tf,
              onMouseLeave: tm,
              children: (0, r.jsx)(f.yRy, {
                targetElementRef: tu,
                renderPopout: () => (0, r.jsx)(ei, {
                  channelId: D.id,
                  canCreateThread: eq
                }),
                shouldShow: td,
                autoInvert: true,
                nudgeAlignIntoViewport: true,
                position: "top",
                align: "right",
                children: e => (0, r.jsx)(f.zxk, ee($({}, e), {
                  onClick: () => {
                    eQ("".concat(eS.length > 0 ? "# ".concat(eS, "\n") : "").concat(p))
                  },
                  disabled: 0 === p.length && 0 === eS.length,
                  size: "sm",
                  "aria-label": X.intl.string(X.t.TXNS7e),
                  innerClassName: Q.sendButton,
                  text: (0, r.jsxs)("div", {
                    className: Q.sendButtonContents,
                    children: [(0, r.jsx)(f.Text, {
                      variant: "text-sm/semibold",
                      color: "always-white",
                      children: X.intl.string(X.t.TXNS7e)
                    }), (0, r.jsxs)("div", {
                      className: Q.sendButtonIcons,
                      children: [(0, r.jsx)(f.Uuj, {
                        size: "xs",
                        color: "white"
                      }), eq && eZ ? (0, r.jsx)(f.or_, {
                        size: "xxs",
                        color: "white",
                        className: Q.subIcon
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
          channel: D,
          canMentionRoles: eh,
          canMentionChannels: ef,
          useNewSlashCommands: eH,
          canOnlyUseTextCommands: false,
          canSendStickers: true,
          textValue: p,
          focused: V,
          expressionPickerView: e5,
          type: k,
          editorRef: ew,
          onSendMessage: eQ,
          onSendSticker: () => {},
          onVisibilityChange: te,
          editorHeight: e8,
          setValue: (e, t) => null == K ? true : K(null, e, t),
          position: eC
        }), ev]
      }), e9 ? null : (0, r.jsx)(S.Z, {
        positionTargetRef: eN,
        type: k,
        onSelectGIF: tr,
        onSelectEmoji: tn,
        onSelectSticker: ti,
        channel: D,
        closeOnModalOuterClick: eO,
        parentModalKey: ej,
        position: "top",
        align: "right",
        positionLayerClassName: J.expressionPickerPositionLayer
      })]
    })
  })
}));

function ei(e) {
  var t, n;
  let {
    channelId: i,
    canCreateThread: l
  } = e, a = O.Z.useField("channelDrafts")[i], o = null == (t = null == a ? true : a.createThread) || t, s = null == (n = null == a ? true : a.publish) || n;
  return (0, r.jsxs)(f.v2r, {
    "aria-label": X.intl.string(X.t["9WnJys"]),
    navId: "send-announcement-options",
    onClose: W.dG4,
    onSelect: W.dG4,
    children: [(0, r.jsx)(f.S89, {
      id: "create-thread",
      label: X.intl.string(X.t.rBIGBA),
      checked: l && o,
      disabled: !l,
      action: () => {
        (0, O.c)(i, {
          createThread: !o
        })
      }
    }), (0, r.jsx)(f.S89, {
      id: "send-and-publish",
      label: X.intl.string(X.t["MFGE5+"]),
      checked: s,
      action: () => {
        (0, O.c)(i, {
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
    className: Q.heroImageWrapper,
    "aria-hidden": true,
    children: [(0, r.jsx)("img", {
      src: l,
      alt: X.intl.string(X.t["2ePvR0"]),
      className: Q.heroImage
    }), o ? (0, r.jsx)(E.ZP, {
      className: Q.heroOverlay,
      children: (0, r.jsx)(V.Z, {
        tooltip: X.intl.string(X.t.VjC219),
        onClick: n,
        dangerous: true,
        children: (0, r.jsx)(f.XHJ, {})
      })
    }) : null]
  })
}

function ea(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsx)(I.Z, {
    "aria-label": X.intl.string(X.t["/IBYAg"]),
    className: Q.attachButton,
    size: "icon",
    color: "transparent",
    look: "blank",
    onChange: e => {
      (0, k.d5)(e.currentTarget.files, t, w.d.ChannelMessage, {
        requireConfirm: true,
        origin: "file_picker"
      }), e.currentTarget.value = null
    },
    children: (0, r.jsx)(f.xD0, {
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
  return (0, r.jsx)(h.u, {
    asContainer: true,
    text: X.intl.string(X.t["/IBYAg"]),
    position: "top",
    children: (0, r.jsxs)(f.P3F, {
      className: Q.heroImageButton,
      onMouseOver: d,
      onMouseOut: g,
      onFocus: l,
      children: [(0, r.jsx)(Z.ZP, {
        ref: a,
        onChange: o,
        "aria-hidden": true,
        tabIndex: false,
        maxFileSizeBytes: K.B,
        onFileSizeError: () => (0, P.Z)(K.B)
      }), (0, r.jsx)(f.FmF, {
        size: "md",
        color: s ? p.Z.colors.INTERACTIVE_ACTIVE : p.Z.colors.INTERACTIVE_NORMAL
      })]
    })
  })
}