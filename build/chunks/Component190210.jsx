/** Chunk was on 82124 **/
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
  Chunk81239 = require("./81239.js"),
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
  Chunk525308 = require("./525308.js"),
  Chunk72775 = require("./72775.js");

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

function et(e, t, n) {
  let r = e.startsWith("attachment://"),
    i = e;
  if (r) {
    let t = e.slice(13);
    i = n ? "attachment://SPOILER_".concat(t) : e
  }
  return {
    media: {
      url: i,
      proxyUrl: i,
      loadingState: m.f.UNKNOWN,
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
    richValue: f,
    className: b,
    id: S,
    required: I,
    disabled: P,
    accessibilityLabel: Z,
    channel: M,
    type: L,
    focused: V,
    onChange: q,
    onResize: en,
    onBlur: eo,
    onFocus: es,
    onKeyDown: ec,
    onSubmit: eu,
    promptToUpload: ed,
    canMentionRoles: ep,
    canMentionChannels: ef,
    maxCharacterCount: eh,
    placeholder: eg,
    "aria-describedby": em,
    "aria-labelledby": eb,
    setEditorRef: ey,
    autoCompletePosition: ev,
    disableThemedBackground: eO = false,
    emojiPickerCloseOnModalOuterClick: ej,
    parentModalKey: ex
  } = e, eC = C.Z.useField("channelDrafts")[M.id], eE = null != (l = null == eC ? true : eC.title) ? l : "", eS = null == eC ? true : eC.heroFile, e_ = null == (o = null == eC ? true : eC.publish) || o, eI = null == (u = null == eC ? true : eC.createThread) || u;
  s()(null != L, "chat input type must be set");
  let {
    analyticsLocations: eP
  } = (0, O.ZP)(v.Z.CHANNEL_TEXT_AREA), eZ = (0, H.qz)(t), eN = i.useRef(null), eT = i.useRef(null), eA = i.useRef(null), ew = i.useRef(null);
  null == ey || ey(eT.current);
  let {
    activeCommand: eR
  } = (0, d.cj)([j.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = L.commands) ? true : e.enabled) ? j.Z.getActiveCommand(M.id) : null,
      activeCommandSection: (null == (t = L.commands) ? true : t.enabled) ? j.Z.getActiveCommandSection(M.id) : null
    }
  }), {
    isLurking: eD,
    isPendingMember: eM,
    disabled: ek,
    canAttachFiles: eL,
    canEveryoneSendMessages: eU
  } = (0, H.TE)(M, L, eR, P), eG = !A.dN.useSetting() && !(0, k.isAndroidWeb)() && null != window.ResizeObserver, eB = !eG || !(null == (n = L.commands) ? true : n.enabled) || !V || p !== K.GI, eF = (0, N.Z)(), {
    fontSize: eH
  } = (0, d.cj)([y.Z], () => ({
    fontSize: y.Z.fontSize,
    isSubmitButtonEnabled: y.Z.isSubmitButtonEnabled
  })), eV = (0, d.e7)([R.Z], () => R.Z.isEnabled()), ez = (0, T.NE)(M);
  (0, H.hJ)(L, ek, M.id);
  let {
    eventEmitter: eW,
    handleEditorSelectionChanged: eK
  } = (0, H.x2)(eT, p, f), eY = i.useCallback(e => {
    let t = e => {
        if (e.shouldClear) {
          var t;
          (0, C.c)(M.id, {
            title: "",
            heroFile: null
          }), null == (t = eT.current) || t.blur()
        }
        return e
      },
      n = [],
      r = eE.length > 0 ? eE : e.value.length > 0 ? e.value.slice(0, 80) : X.intl.string(X.t["7Xm5QI"]);
    if (null == eS) return eu(ee($({}, e), {
      announcementSendOptions: {
        createThread: ez && eI,
        threadName: r,
        publish: e_
      }
    })).then(t);
    n.push({
      type: m.re.MEDIA_GALLERY,
      items: [et("attachment://".concat(eS.name), null, false)],
      id: "".concat(Y.Vm)
    }), e.value.length > 0 && n.push({
      type: m.re.TEXT_DISPLAY,
      content: e.value,
      id: "".concat(Y.Kb)
    });
    let i = D.Z.getUploads(M.id, w.d.ChannelMessage),
      l = i.filter(e => (e.isImage || e.isVideo) && e.filename !== (null == eS ? true : eS.name)),
      a = i.filter(e => !e.isImage && !e.isVideo && e.filename !== (null == eS ? true : eS.name)),
      o = l.map(e => et("attachment://".concat(e.filename), e.description, e.spoiler));
    return o.length > 0 && n.push({
      type: m.re.MEDIA_GALLERY,
      items: o,
      id: "".concat(Y.m2)
    }), a.forEach((e, t) => {
      n.push({
        type: m.re.FILE,
        file: et("attachment://".concat(e.filename), e.description, e.spoiler).media,
        id: "".concat(Y.kn + t),
        spoiler: e.spoiler,
        name: null,
        size: null
      })
    }), eu(ee($({}, e), {
      components: n,
      announcementSendOptions: {
        createThread: ez && eI,
        threadName: r,
        publish: e_
      }
    })).then(t)
  }, [eu, eE, eS, M.id, eI, e_, ez]), {
    submit: eq,
    handleSubmit: eX
  } = (0, H.bL)(eY, L, eT, ew, M.id), {
    autocompleteRef: eQ,
    handleMaybeShowAutocomplete: eJ,
    handleHideAutocomplete: e$
  } = (0, H.jx)(), e0 = i.useCallback(() => {
    var e;
    return null == ew || null == (e = ew.current) ? true : e.hide()
  }, []), {
    editorHeight: e1,
    handleResize: e4
  } = (0, H.oR)(en), {
    handleTab: e3,
    handleEnter: e7,
    handleMoveSelection: e8
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
  }(eQ, eN, eB), {
    expressionPickerView: e2,
    shouldHideExpressionPicker: e5,
    handleOuterClick: e6
  } = (0, H.iV)(L, eT, M.id), e9 = (0, H.aT)(p), {
    currentAutocompleteType: te,
    handleAutocompleteVisibilityChange: tt
  } = (0, H.vB)(L, M.id), tn = (0, H.ae)(eT), tr = (0, H.Sg)(eq, L, eT), ti = (0, H.O1)({
    editorRef: eT,
    disabled: ek,
    textValue: p,
    channelId: M.id,
    chatInputType: L,
    submit: eY
  });
  (0, U.S)(eW, M.guild_id, M.id);
  let [tl, ta] = i.useState(false), to = V || tl || p.length > 0 || null != eS || eE.length > 0, {
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
  }), tu = i.useRef(null), [td, tp] = i.useState(false), tf = i.useRef(false), th = i.useCallback(() => {
    tf.current = true;
    let e = setTimeout(() => {
      tf.current && tp(true)
    }, 100);
    return () => clearTimeout(e)
  }, []), tg = i.useCallback(() => {
    tf.current = false;
    let e = setTimeout(() => {
      tf.current || tp(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), tm = i.useCallback(() => {
    var e;
    if (null == eS) return;
    let t = null == (e = D.Z.getUploads(M.id, L.drafts.type).find(e => e.filename === eS.name)) ? true : e.id;
    null != t && g.Z.remove(M.id, t, w.d.ChannelMessage), (0, C.c)(M.id, {
      heroFile: null
    })
  }, [M.id, eS, L.drafts.type]);
  return (0, r.jsx)(E.f6, {
    value: eW,
    children: (0, r.jsxs)(O.Gt, {
      value: eP,
      children: [(0, r.jsxs)("div", {
        ref: eZ,
        className: a()(b, J.channelTextArea),
        onMouseDown: e6,
        children: [(0, r.jsx)("div", {
          ref: eA,
          onScroll: e0,
          className: a()(J.announcementScrollableContainer, {
            [J.themedBackground]: !eO
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
                children: [null != eS ? (0, r.jsx)(ei, {
                  file: eS,
                  onRemoveHeroImage: tm
                }) : null, null != eS ? null : (0, r.jsx)(ea, {
                  channel: M,
                  onImageUploaded: e => (0, C.c)(M.id, {
                    heroFile: e
                  }),
                  onFocus: () => ta(true)
                }), (0, r.jsx)("input", {
                  onFocus: () => ta(true),
                  onBlur: () => ta(false),
                  maxLength: 140,
                  className: Q.titleInput,
                  placeholder: X.intl.string(X.t.Z8fYjO),
                  value: eE,
                  onChange: e => (0, C.c)(M.id, {
                    title: e.target.value
                  })
                })]
              }), (0, r.jsx)("div", {
                className: Q.inputWrapper,
                children: (0, r.jsx)(h.tEY, {
                  ringTarget: eZ,
                  ringClassName: J.focusRing,
                  children: (0, r.jsx)(B.Z, {
                    ref: eT,
                    id: S,
                    focused: V,
                    useSlate: eG,
                    textValue: p,
                    richValue: f,
                    disabled: ek,
                    placeholder: eg,
                    required: I,
                    accessibilityLabel: Z,
                    isPreviewing: (eD || eM) && eU,
                    channel: M,
                    type: G.Ie.CREATE_ANNOUNCEMENT_POST,
                    canPasteFiles: eL,
                    uploadPromptCharacterCount: W.en1,
                    maxCharacterCount: null != eh ? eh : eF,
                    allowNewLines: true,
                    "aria-describedby": em,
                    onChange: q,
                    onResize: e4,
                    onBlur: eo,
                    onFocus: es,
                    onKeyDown: ec,
                    onSubmit: eq,
                    onTab: e3,
                    onEnter: e7,
                    onMoveSelection: e8,
                    onSelectionChanged: eK,
                    onMaybeShowAutocomplete: eJ,
                    onHideAutocomplete: e$,
                    promptToUpload: ed,
                    fontSize: eH,
                    spellcheckEnabled: eV,
                    canOnlyUseTextCommands: false,
                    isEditorIdle: e9,
                    currentAutocompleteType: te,
                    "aria-labelledby": eb
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: Q.attachmentsContainer,
              children: (0, r.jsx)(z.Z, {
                channelId: M.id,
                type: L,
                canAttachFiles: eL,
                ignoreFile: null == eS ? true : eS.name,
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
            children: [(0, r.jsx)(el, {
              channel: M
            }), (0, r.jsx)(F.Z, {
              type: G.Ie.CREATE_ANNOUNCEMENT_POST,
              disabled: ek,
              channel: M,
              handleSubmit: eX,
              isEmpty: 0 === p.trim().length,
              showAllButtons: true
            })]
          }), (0, r.jsx)("div", {
            className: Q.footerPart,
            children: (0, r.jsx)("div", {
              ref: tu,
              className: Q.sendButtonContainer,
              onMouseEnter: th,
              onMouseLeave: tg,
              children: (0, r.jsx)(h.yRy, {
                targetElementRef: tu,
                renderPopout: () => (0, r.jsx)(er, {
                  channelId: M.id,
                  canCreateThread: ez
                }),
                shouldShow: td,
                autoInvert: true,
                nudgeAlignIntoViewport: true,
                position: "top",
                align: "right",
                children: e => (0, r.jsx)(h.Button, ee($({}, e), {
                  onClick: () => {
                    eq("".concat(eE.length > 0 ? "# ".concat(eE, "\n") : "").concat(p))
                  },
                  disabled: 0 === p.length && 0 === eE.length,
                  size: "sm",
                  "aria-label": X.intl.string(X.t.TXNS7S),
                  innerClassName: Q.sendButton,
                  text: (0, r.jsxs)("div", {
                    className: Q.sendButtonContents,
                    children: [(0, r.jsx)(h.Text, {
                      variant: "text-sm/semibold",
                      color: "always-white",
                      children: X.intl.string(X.t.TXNS7S)
                    }), (0, r.jsxs)("div", {
                      className: Q.sendButtonIcons,
                      children: [(0, r.jsx)(h.Uuj, {
                        size: "xs",
                        color: "white"
                      }), ez && eI ? (0, r.jsx)(h.or_, {
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
          targetRef: eZ,
          ref: eQ,
          channel: M,
          canMentionRoles: ep,
          canMentionChannels: ef,
          useNewSlashCommands: eG,
          canOnlyUseTextCommands: false,
          canSendStickers: true,
          textValue: p,
          focused: V,
          isEditorIdle: e9,
          expressionPickerView: e2,
          type: L,
          editorRef: eT,
          onSendMessage: eq,
          onSendSticker: () => {},
          onVisibilityChange: tt,
          editorHeight: e1,
          setValue: (e, t) => null == q ? true : q(null, e, t),
          position: ev
        })]
      }), e5 ? null : (0, r.jsx)(_.Z, {
        positionTargetRef: eZ,
        type: L,
        onSelectGIF: tr,
        onSelectEmoji: tn,
        onSelectSticker: ti,
        channel: M,
        closeOnModalOuterClick: ej,
        parentModalKey: ex,
        position: "top",
        align: "right",
        positionLayerClassName: J.expressionPickerPositionLayer
      })]
    })
  })
}));

function er(e) {
  var t, n;
  let {
    channelId: i,
    canCreateThread: l
  } = e, a = C.Z.useField("channelDrafts")[i], o = null == (t = null == a ? true : a.createThread) || t, s = null == (n = null == a ? true : a.publish) || n;
  return (0, r.jsxs)(h.v2r, {
    "aria-label": X.intl.string(X.t["9WnJyo"]),
    navId: "send-announcement-options",
    onClose: W.dG4,
    onSelect: W.dG4,
    children: [(0, r.jsx)(h.S89, {
      id: "create-thread",
      label: X.intl.string(X.t.rBIGBL),
      checked: l && o,
      disabled: !l,
      action: () => {
        (0, C.c)(i, {
          createThread: !o
        })
      }
    }), (0, r.jsx)(h.S89, {
      id: "send-and-publish",
      label: X.intl.string(X.t.MFGE51),
      checked: s,
      action: () => {
        (0, C.c)(i, {
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
    className: Q.heroImageWrapper,
    "aria-hidden": true,
    children: [(0, r.jsx)("img", {
      src: l,
      alt: X.intl.string(X.t["2ePvR8"]),
      className: Q.heroImage
    }), o ? (0, r.jsx)(S.ZP, {
      className: Q.heroOverlay,
      children: (0, r.jsx)(V.Z, {
        tooltip: X.intl.string(X.t.VjC21x),
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
  return (0, r.jsx)(I.Z, {
    "aria-label": X.intl.string(X.t["/IBYAq"]),
    className: Q.attachButton,
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
      color: p.Z.colors.INTERACTIVE_TEXT_DEFAULT
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
        platform: b.ow.WEB,
        isThumbnail: false,
        origin: "file_picker"
      };
    g.Z.addFile({
      file: l,
      channelId: t.id,
      draftType: w.d.ChannelMessage
    }), n(i)
  }, [s, c] = i.useState(false), d = i.useCallback(() => {
    c(true)
  }, []), m = i.useCallback(() => {
    c(false)
  }, []);
  return (0, r.jsx)("div", {
    className: Q.heroImageButton,
    children: (0, r.jsx)(f.u, {
      asContainer: true,
      text: X.intl.string(X.t["/IBYAq"]),
      position: "top",
      children: (0, r.jsxs)(h.P3F, {
        className: Q.heroImageButton,
        onMouseOver: d,
        onMouseOut: m,
        onFocus: l,
        children: [(0, r.jsx)(Z.ZP, {
          ref: a,
          onChange: o,
          "aria-hidden": true,
          tabIndex: false,
          maxFileSizeBytes: q.B,
          onFileSizeError: () => (0, P.Z)(q.B)
        }), (0, r.jsx)(h.FmF, {
          size: "md",
          color: s ? p.Z.colors.INTERACTIVE_TEXT_ACTIVE : p.Z.colors.INTERACTIVE_TEXT_DEFAULT
        })]
      })
    })
  })
}