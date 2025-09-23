/** Chunk was on 80037 **/
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
  Chunk401393 = require("./401393.js"),
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
  Chunk310069 = require("./310069.js"),
  Chunk744114 = require("./744114.js");

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
    required: P,
    disabled: I,
    accessibilityLabel: Z,
    channel: k,
    type: D,
    focused: G,
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
    setEditorRef: eC,
    autoCompletePosition: e_,
    children: ev,
    disableThemedBackground: ex = false,
    emojiPickerCloseOnModalOuterClick: eO,
    parentModalKey: ej
  } = e, eE = O.Z.useField("channelDrafts")[k.id], eS = null != (l = null == eE ? true : eE.title) ? l : "", eP = null == eE ? true : eE.heroFile, eI = null == (o = null == eE ? true : eE.publish) || o, eZ = null == (u = null == eE ? true : eE.createThread) || u;
  s()(null != D, "chat input type must be set");
  let {
    analyticsLocations: eT
  } = (0, _.ZP)(C.Z.CHANNEL_TEXT_AREA), eN = (0, H.qz)(t), eA = i.useRef(null), ew = i.useRef(null), eM = i.useRef(null), eR = i.useRef(null);
  null == eC || eC(ew.current);
  let {
    activeCommand: ek
  } = (0, d.cj)([v.Z], () => {
    var e, t;
    return {
      activeCommand: (null == (e = D.commands) ? true : e.enabled) ? v.Z.getActiveCommand(k.id) : null,
      activeCommandSection: (null == (t = D.commands) ? true : t.enabled) ? v.Z.getActiveCommandSection(k.id) : null
    }
  }), {
    isLurking: eL,
    isPendingMember: eD,
    disabled: eU,
    canAttachFiles: eB,
    canEveryoneSendMessages: eV
  } = (0, H.TE)(k, D, ek, I), eF = !A.dN.useSetting() && !(0, L.isAndroidWeb)() && null != window.ResizeObserver, eH = !eF || !(null == (n = D.commands) ? true : n.enabled) || !G || p !== q.GI, eG = (0, T.Z)(), {
    fontSize: ez
  } = (0, d.cj)([y.Z], () => ({
    fontSize: y.Z.fontSize,
    isSubmitButtonEnabled: y.Z.isSubmitButtonEnabled
  })), eW = (0, d.e7)([M.Z], () => M.Z.isEnabled()), eq = (0, N.NE)(k);
  (0, H.hJ)(D, eU);
  let {
    eventEmitter: eY,
    handleEditorSelectionChanged: eK
  } = (0, H.x2)(ew, p, h), eX = i.useCallback(e => {
    let t = e => {
        if (e.shouldClear) {
          var t;
          (0, O.c)(k.id, {
            title: "",
            heroFile: null
          }), null == (t = ew.current) || t.blur()
        }
        return e
      },
      n = [],
      r = eS.length > 0 ? eS : e.value.length > 0 ? e.value.slice(0, 80) : X.intl.string(X.t["7Xm5QE"]);
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
    let i = R.Z.getUploads(k.id, w.d.ChannelMessage),
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
  }, [ed, eS, eP, k.id, eZ, eI, eq]), {
    submit: eJ,
    handleSubmit: eQ
  } = (0, H.bL)(eX, D, ew, eR, k.id), {
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
    handleAutocompleteVisibilityChange: te,
    handleOuterClick: tt
  } = (0, H.iV)(D, eY, ew), tn = (0, H.ae)(ew), tr = (0, H.Sg)(eJ, D, ew), ti = (0, H.O1)({
    editorRef: ew,
    disabled: eU,
    textValue: p,
    channelId: k.id,
    chatInputType: D,
    submit: eX
  });
  (0, U.S)(eY, k.guild_id, k.id);
  let [tl, ta] = i.useState(false), to = G || tl || p.length > 0 || null != eP || eS.length > 0, {
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
    if (null == eP) return;
    let t = null == (e = R.Z.getUploads(k.id, D.drafts.type).find(e => e.filename === eP.name)) ? true : e.id;
    null != t && m.Z.remove(k.id, t, w.d.ChannelMessage), (0, O.c)(k.id, {
      heroFile: null
    })
  }, [k.id, eP, D.drafts.type]);
  return (0, r.jsx)(j.f6, {
    value: eY,
    children: (0, r.jsxs)(_.Gt, {
      value: eT,
      children: [(0, r.jsxs)("div", {
        ref: eN,
        className: a()(b, Q.channelTextArea),
        onMouseDown: tt,
        children: [(0, r.jsx)("div", {
          ref: eM,
          onScroll: e2,
          className: a()(Q.announcementScrollableContainer, {
            [Q.themedBackground]: !ex
          }),
          children: (0, r.jsxs)("div", {
            className: a()(Q.inner, J.inner),
            children: [(0, r.jsxs)("div", {
              className: J.body,
              children: [(0, r.jsxs)(c.animated.div, {
                className: J.headerInput,
                style: {
                  height: ts,
                  paddingTop: tc
                },
                children: [null != eP ? (0, r.jsx)(el, {
                  file: eP,
                  onRemoveHeroImage: tg
                }) : null, null != eP ? null : (0, r.jsx)(eo, {
                  channel: k,
                  onImageUploaded: e => (0, O.c)(k.id, {
                    heroFile: e
                  }),
                  onFocus: () => ta(true)
                }), (0, r.jsx)("input", {
                  onFocus: () => ta(true),
                  onBlur: () => ta(false),
                  maxLength: 140,
                  className: J.titleInput,
                  placeholder: X.intl.string(X.t.Z8fYjI),
                  value: eS,
                  onChange: e => (0, O.c)(k.id, {
                    title: e.target.value
                  })
                })]
              }), (0, r.jsx)("div", {
                className: J.inputWrapper,
                children: (0, r.jsx)(f.tEY, {
                  ringTarget: eN,
                  ringClassName: Q.focusRing,
                  children: (0, r.jsx)(V.Z, {
                    ref: ew,
                    id: E,
                    focused: G,
                    useSlate: eF,
                    textValue: p,
                    richValue: h,
                    disabled: eU,
                    placeholder: eg,
                    required: P,
                    accessibilityLabel: Z,
                    isPreviewing: (eL || eD) && eV,
                    channel: k,
                    type: B.Ie.CREATE_ANNOUNCEMENT_POST,
                    canPasteFiles: eB,
                    uploadPromptCharacterCount: W.en1,
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
                    fontSize: ez,
                    spellcheckEnabled: eW,
                    canOnlyUseTextCommands: false,
                    "aria-labelledby": ey
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: J.attachmentsContainer,
              children: (0, r.jsx)(z.Z, {
                channelId: k.id,
                type: D,
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
              channel: k
            }), (0, r.jsx)(F.Z, {
              type: B.Ie.CREATE_ANNOUNCEMENT_POST,
              disabled: eU,
              channel: k,
              handleSubmit: eQ,
              isEmpty: 0 === p.trim().length,
              showAllButtons: true
            })]
          }), (0, r.jsx)("div", {
            className: J.footerPart,
            children: (0, r.jsx)("div", {
              ref: tu,
              className: J.sendButtonContainer,
              onMouseEnter: tf,
              onMouseLeave: tm,
              children: (0, r.jsx)(f.yRy, {
                targetElementRef: tu,
                renderPopout: () => (0, r.jsx)(ei, {
                  channelId: k.id,
                  canCreateThread: eq
                }),
                shouldShow: td,
                autoInvert: true,
                nudgeAlignIntoViewport: true,
                position: "top",
                align: "right",
                children: e => (0, r.jsx)(f.zxk, ee($({}, e), {
                  onClick: () => {
                    eJ("".concat(eS.length > 0 ? "# ".concat(eS, "\n") : "").concat(p))
                  },
                  disabled: 0 === p.length && 0 === eS.length,
                  size: "sm",
                  "aria-label": X.intl.string(X.t.TXNS7e),
                  innerClassName: J.sendButton,
                  text: (0, r.jsxs)("div", {
                    className: J.sendButtonContents,
                    children: [(0, r.jsx)(f.Text, {
                      variant: "text-sm/semibold",
                      color: "always-white",
                      children: X.intl.string(X.t.TXNS7e)
                    }), (0, r.jsxs)("div", {
                      className: J.sendButtonIcons,
                      children: [(0, r.jsx)(f.Uuj, {
                        size: "xs",
                        color: "white"
                      }), eq && eZ ? (0, r.jsx)(f.or_, {
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
        }), (0, r.jsx)(x.Z, {
          targetRef: eN,
          ref: e$,
          channel: k,
          canMentionRoles: eh,
          canMentionChannels: ef,
          useNewSlashCommands: eF,
          canOnlyUseTextCommands: false,
          canSendStickers: true,
          textValue: p,
          focused: G,
          expressionPickerView: e5,
          type: D,
          editorRef: ew,
          onSendMessage: eJ,
          onSendSticker: () => {},
          onVisibilityChange: te,
          editorHeight: e3,
          setValue: (e, t) => null == K ? true : K(null, e, t),
          position: e_
        }), ev]
      }), e9 ? null : (0, r.jsx)(S.Z, {
        positionTargetRef: eN,
        type: D,
        onSelectGIF: tr,
        onSelectEmoji: tn,
        onSelectSticker: ti,
        channel: k,
        closeOnModalOuterClick: eO,
        parentModalKey: ej,
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
    className: J.heroImageWrapper,
    "aria-hidden": true,
    children: [(0, r.jsx)("img", {
      src: l,
      alt: X.intl.string(X.t["2ePvR0"]),
      className: J.heroImage
    }), o ? (0, r.jsx)(E.ZP, {
      className: J.heroOverlay,
      children: (0, r.jsx)(G.Z, {
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
  return (0, r.jsx)(P.Z, {
    "aria-label": X.intl.string(X.t["/IBYAg"]),
    className: J.attachButton,
    size: "icon",
    color: "transparent",
    look: "blank",
    onChange: e => {
      (0, D.d5)(e.currentTarget.files, t, w.d.ChannelMessage, {
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
    let i = await (0, k.Bo)(e, r.name, r.type),
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
    children: (0, r.jsx)(h.u, {
      asContainer: true,
      text: X.intl.string(X.t["/IBYAg"]),
      position: "top",
      children: (0, r.jsxs)(f.P3F, {
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
        }), (0, r.jsx)(f.FmF, {
          size: "md",
          color: s ? p.Z.colors.INTERACTIVE_ACTIVE : p.Z.colors.INTERACTIVE_NORMAL
        })]
      })
    })
  })
}