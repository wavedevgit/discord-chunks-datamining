/** Chunk was on 61344 **/
/** chunk id: 223938, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ee
}), require("./321073.js"), require("./228524.js"), require("./896048.js"), require("./733351.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk353709 = require("./353709.js"),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk608299 = require("./608299.js"),
  Chunk155718 = require("./155718.js"),
  Chunk565150 = require("./565150.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk861382 = require("./861382.js"),
  Chunk875163 = require("./875163.jsx"),
  Chunk224805 = require("./224805.js"),
  Chunk598071 = require("./598071.js"),
  Chunk101555 = require("./101555.jsx"),
  Chunk834755 = require("./834755.jsx"),
  Chunk703007 = require("./703007.jsx"),
  Chunk2553 = require("./2553.js"),
  Chunk946274 = require("./946274.jsx"),
  Chunk135621 = require("./135621.js"),
  Chunk406704 = require("./406704.js"),
  Chunk253932 = require("./253932.js"),
  Chunk31717 = require("./31717.js"),
  Chunk638128 = require("./638128.js"),
  Chunk522602 = require("./522602.js"),
  Chunk515718 = require("./515718.js"),
  Chunk723702 = require("./723702.js"),
  Chunk518960 = require("./518960.js"),
  Chunk486319 = require("./486319.js"),
  Chunk355622 = require("./355622.js"),
  Chunk415409 = require("./415409.jsx"),
  Chunk147025 = require("./147025.jsx"),
  Chunk133343 = require("./133343.jsx"),
  Chunk851023 = require("./851023.jsx"),
  Chunk171593 = require("./171593.jsx"),
  Chunk652215 = require("./652215.js");
require("./827669.js"), require("./294920.js");
var Chunk478644 = require("./478644.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk401376 = require("./401376.js"),
  Chunk111314 = require("./111314.js");

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function Q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function $(e, t, n) {
  let l = e.startsWith("attachment://"),
    r = e;
  if (l) {
    let t = e.slice(13);
    r = n ? "attachment://SPOILER_".concat(t) : e
  }
  return {
    media: {
      url: r,
      proxyUrl: r,
      loadingState: g.TD.UNKNOWN,
      flags: 0
    },
    description: null != t ? t : true,
    spoiler: n
  }
}
let ee = Chunk64700.memo(Chunk64700.forwardRef(function(e, t) {
  var n, i, s, u;
  let h, {
      textValue: p,
      richValue: A,
      className: x,
      id: j,
      required: I,
      disabled: T,
      accessibilityLabel: L,
      channel: U,
      type: K,
      focused: q,
      onChange: ee,
      onResize: ei,
      onBlur: ea,
      onFocus: es,
      onKeyDown: eo,
      onSubmit: ec,
      promptToUpload: eu,
      canMentionRoles: ed,
      canMentionChannels: eh,
      maxCharacterCount: ep,
      placeholder: ef,
      "aria-describedby": em,
      "aria-labelledby": eg,
      setEditorRef: eA,
      autoCompletePosition: eb,
      disableThemedBackground: e_ = false,
      emojiPickerCloseOnModalOuterClick: ey,
      parentModalKey: ev
    } = e,
    eE = O.A.useField("channelDrafts")[U.id],
    eO = null != (n = null == eE ? true : eE.title) ? n : "",
    eC = null == eE ? true : eE.heroFile,
    ex = null == (i = null == eE ? true : eE.publish) || i,
    eS = null == (s = null == eE ? true : eE.createThread) || s;
  o()(null != K, "chat input type must be set");
  let {
    analyticsLocations: ej
  } = (0, y.Ay)(_.A.CHANNEL_TEXT_AREA), eI = (0, V.L0)(t), eT = r.useRef(null), eN = r.useRef(null), eP = r.useRef(null), ew = r.useRef(null);
  null == eA || eA(eN.current);
  let {
    activeCommand: eR
  } = (0, d.cf)([v.A], () => {
    var e, t;
    return {
      activeCommand: (null == (e = K.commands) ? true : e.enabled) ? v.A.getActiveCommand(U.id) : null,
      activeCommandSection: (null == (t = K.commands) ? true : t.enabled) ? v.A.getActiveCommandSection(U.id) : null
    }
  }), {
    isLurking: eD,
    isPendingMember: eM,
    disabled: eL,
    canAttachFiles: ek,
    canEveryoneSendMessages: eU
  } = (0, V.Sk)(U, K, eR, T), eG = !w.D_.useSetting() && !(0, k.isAndroidWeb)() && null != window.ResizeObserver, eF = !eG || !(null == (u = K.commands) ? true : u.enabled) || !q || "/" !== p, eH = (0, N.A)(), {
    fontSize: eB
  } = (0, d.cf)([b.A], () => ({
    fontSize: b.A.fontSize,
    isSubmitButtonEnabled: b.A.isSubmitButtonEnabled
  })), eV = (0, d.bG)([D.A], () => D.A.isEnabled()), eK = (0, P.n)(U);
  (0, V.N_)(K, eL, U.id);
  let {
    eventEmitter: eW,
    handleEditorSelectionChanged: ez
  } = (0, V.ml)(eN, p, A), eq = r.useCallback(e => {
    let t = e => {
        if (e.shouldClear) {
          var t;
          (0, O.x)(U.id, {
            title: "",
            heroFile: null
          }), null == (t = eN.current) || t.blur()
        }
        return e
      },
      n = [],
      l = eO.length > 0 ? eO : e.value.length > 0 ? e.value.slice(0, 80) : Y.intl.string(Y.t["7Xm5QI"]);
    if (null == eC) return ec(Q(X({}, e), {
      announcementSendOptions: {
        createThread: eK && eS,
        threadName: l,
        publish: ex
      }
    })).then(t);
    n.push({
      type: g.I5.MEDIA_GALLERY,
      items: [$("attachment://".concat(eC.name), null, false)],
      id: "".concat(82733)
    }), e.value.length > 0 && n.push({
      type: g.I5.TEXT_DISPLAY,
      content: e.value,
      id: "".concat(82744)
    });
    let r = M.A.getUploads(U.id, R.C.ChannelMessage),
      i = r.filter(e => (e.isImage || e.isVideo) && e.filename !== (null == eC ? true : eC.name)),
      a = r.filter(e => !e.isImage && !e.isVideo && e.filename !== (null == eC ? true : eC.name)),
      s = i.map(e => $("attachment://".concat(e.filename), e.description, e.spoiler));
    return s.length > 0 && n.push({
      type: g.I5.MEDIA_GALLERY,
      items: s,
      id: "".concat(82755)
    }), a.forEach((e, t) => {
      n.push({
        type: g.I5.FILE,
        file: $("attachment://".concat(e.filename), e.description, e.spoiler).media,
        id: "".concat(82766 + t),
        spoiler: e.spoiler,
        name: null,
        size: null
      })
    }), ec(Q(X({}, e), {
      components: n,
      announcementSendOptions: {
        createThread: eK && eS,
        threadName: l,
        publish: ex
      }
    })).then(t)
  }, [ec, eO, eC, U.id, eS, ex, eK]), {
    submit: eY,
    handleSubmit: eJ
  } = (0, V.Zx)(eq, K, eN, ew, U.id), {
    autocompleteRef: eZ,
    handleMaybeShowAutocomplete: eX,
    handleHideAutocomplete: eQ
  } = (0, V.v7)(), e$ = r.useCallback(() => {
    var e;
    return null == ew || null == (e = ew.current) ? true : e.hide()
  }, []), {
    editorHeight: e0,
    handleResize: e1
  } = (0, V.ck)(ei), {
    handleTab: e2,
    handleEnter: e7,
    handleMoveSelection: e3
  } = (h = r.useCallback(() => {
    var e, t;
    return !!(!eF && (null == (e = eT.current) ? true : e.onTabOrEnter(false))) || (null == (t = eZ.current) ? true : t.onTabOrEnter(false)) || false
  }, [eF]), {
    handleTab: h,
    handleEnter: r.useCallback(() => {
      var e, t;
      return !!(!eF && (null == (e = eT.current) ? true : e.onTabOrEnter(true))) || (null == (t = eZ.current) ? true : t.onTabOrEnter(false)) || false
    }, [eF]),
    handleMoveSelection: r.useCallback(e => {
      var t, n;
      return !!(!eF && (null == (t = eT.current) ? true : t.onMoveSelection(e))) || (null == (n = eZ.current) ? true : n.onMoveSelection(e)) || false
    }, [eF])
  }), {
    expressionPickerView: e5,
    shouldHideExpressionPicker: e6,
    handleOuterClick: e9
  } = (0, V.MD)(K, eN, U.id), e8 = (0, V.BX)(p), {
    currentAutocompleteType: e4,
    handleAutocompleteVisibilityChange: te
  } = (0, V.uW)(K, U.id), tt = (0, V.NO)(eN), tn = (0, V.Vu)(eY, K, eN), tl = (0, V.C)({
    editorRef: eN,
    disabled: eL,
    textValue: p,
    channelId: U.id,
    chatInputType: K,
    submit: eq
  });
  (0, G.R)(eW, U.guild_id, U.id);
  let [tr, ti] = r.useState(false), ta = q || tr || p.length > 0 || null != eC || eO.length > 0, {
    editorHeaderHeight: ts,
    paddingTop: to
  } = (0, f.zhh)({
    editorHeaderHeight: 122 * !!ta,
    paddingTop: 16 * !!ta,
    config: {
      tension: 120,
      friction: 15,
      clamp: true
    }
  }), tc = r.useRef(null), [tu, td] = r.useState(false), th = r.useRef(false), tp = r.useCallback(() => {
    th.current = true;
    let e = setTimeout(() => {
      th.current && td(true)
    }, 100);
    return () => clearTimeout(e)
  }, []), tf = r.useCallback(() => {
    th.current = false;
    let e = setTimeout(() => {
      th.current || td(false)
    }, 100);
    return () => clearTimeout(e)
  }, []), tm = r.useCallback(() => {
    var e;
    if (null == eC) return;
    let t = null == (e = M.A.getUploads(U.id, K.drafts.type).find(e => e.filename === eC.name)) ? true : e.id;
    null != t && m.A.remove(U.id, t, R.C.ChannelMessage), (0, O.x)(U.id, {
      heroFile: null
    })
  }, [U.id, eC, K.drafts.type]);
  return (0, l.jsx)(C.Sv, {
    value: eW,
    children: (0, l.jsxs)(y.f5, {
      value: ej,
      children: [(0, l.jsxs)("div", {
        ref: eI,
        className: a()(x, Z.gM),
        onMouseDown: e9,
        children: [(0, l.jsx)("div", {
          ref: eP,
          onScroll: e$,
          className: a()(Z.Ui, {
            [Z.k6]: !e_
          }),
          children: (0, l.jsxs)("div", {
            className: a()(Z.vW, J.vW),
            children: [(0, l.jsxs)("div", {
              className: J.rf,
              children: [(0, l.jsxs)(c.animated.div, {
                className: J.ov,
                style: {
                  height: ts,
                  paddingTop: to
                },
                children: [null != eC ? (0, l.jsx)(en, {
                  file: eC,
                  onRemoveHeroImage: tm
                }) : null, null != eC ? null : (0, l.jsx)(er, {
                  channel: U,
                  onImageUploaded: e => (0, O.x)(U.id, {
                    heroFile: e
                  }),
                  onFocus: () => ti(true)
                }), (0, l.jsx)("input", {
                  onFocus: () => ti(true),
                  onBlur: () => ti(false),
                  maxLength: 140,
                  className: J.hz,
                  placeholder: Y.intl.string(Y.t.Z8fYjO),
                  value: eO,
                  onChange: e => (0, O.x)(U.id, {
                    title: e.target.value
                  })
                })]
              }), (0, l.jsx)("div", {
                className: J.I6,
                children: (0, l.jsx)(f.vN3, {
                  ringTarget: eI,
                  ringClassName: Z.Rg,
                  children: (0, l.jsx)(H.A, {
                    ref: eN,
                    id: j,
                    focused: q,
                    useSlate: eG,
                    textValue: p,
                    richValue: A,
                    disabled: eL,
                    placeholder: ef,
                    required: I,
                    accessibilityLabel: L,
                    isPreviewing: (eD || eM) && eU,
                    channel: U,
                    type: F.oU.CREATE_ANNOUNCEMENT_POST,
                    canPasteFiles: ek,
                    uploadPromptCharacterCount: z.CS1,
                    maxCharacterCount: null != ep ? ep : eH,
                    allowNewLines: true,
                    "aria-describedby": em,
                    onChange: ee,
                    onResize: e1,
                    onBlur: ea,
                    onFocus: es,
                    onKeyDown: eo,
                    onSubmit: eY,
                    onTab: e2,
                    onEnter: e7,
                    onMoveSelection: e3,
                    onSelectionChanged: ez,
                    onMaybeShowAutocomplete: eX,
                    onHideAutocomplete: eQ,
                    promptToUpload: eu,
                    fontSize: eB,
                    spellcheckEnabled: eV,
                    canOnlyUseTextCommands: false,
                    isEditorIdle: e8,
                    currentAutocompleteType: e4,
                    "aria-labelledby": eg
                  })
                })
              })]
            }), (0, l.jsx)("div", {
              className: J.KK,
              children: (0, l.jsx)(W.A, {
                channelId: U.id,
                type: K,
                canAttachFiles: ek,
                ignoreFile: null == eC ? true : eC.name,
                smallAttachments: true
              })
            })]
          })
        }), (0, l.jsx)("div", {
          className: J.yF
        }), (0, l.jsxs)("div", {
          className: J.qr,
          children: [(0, l.jsxs)("div", {
            className: J.j4,
            children: [(0, l.jsx)(el, {
              channel: U
            }), (0, l.jsx)(B.A, {
              type: F.oU.CREATE_ANNOUNCEMENT_POST,
              disabled: eL,
              channel: U,
              handleSubmit: eJ,
              isEmpty: 0 === p.trim().length,
              showAllButtons: true
            })]
          }), (0, l.jsx)("div", {
            className: J.j4,
            children: (0, l.jsx)("div", {
              ref: tc,
              className: J.Qo,
              onMouseEnter: tp,
              onMouseLeave: tf,
              children: (0, l.jsx)(f.YNO, {
                targetElementRef: tc,
                renderPopout: () => (0, l.jsx)(et, {
                  channelId: U.id,
                  canCreateThread: eK
                }),
                shouldShow: tu,
                autoInvert: true,
                nudgeAlignIntoViewport: true,
                position: "top",
                align: "right",
                children: e => (0, l.jsx)(f.Button, Q(X({}, e), {
                  onClick: () => {
                    eY("".concat(eO.length > 0 ? "# ".concat(eO, "\n") : "").concat(p))
                  },
                  disabled: 0 === p.length && 0 === eO.length,
                  size: "sm",
                  "aria-label": Y.intl.string(Y.t.TXNS7S),
                  innerClassName: J.jo,
                  text: (0, l.jsxs)("div", {
                    className: J.f9,
                    children: [(0, l.jsx)(f.Text, {
                      variant: "text-sm/semibold",
                      color: "always-white",
                      children: Y.intl.string(Y.t.TXNS7S)
                    }), (0, l.jsxs)("div", {
                      className: J.pj,
                      children: [(0, l.jsx)(f.lX7, {
                        size: "xs",
                        color: "white"
                      }), eK && eS ? (0, l.jsx)(f.ysw, {
                        size: "xxs",
                        color: "white",
                        className: J.Q5
                      }) : null]
                    })]
                  })
                }))
              })
            })
          })]
        }), (0, l.jsx)(E.A, {
          targetRef: eI,
          ref: eZ,
          channel: U,
          canMentionRoles: ed,
          canMentionChannels: eh,
          useNewSlashCommands: eG,
          canOnlyUseTextCommands: false,
          canSendStickers: true,
          textValue: p,
          focused: q,
          isEditorIdle: e8,
          expressionPickerView: e5,
          type: K,
          editorRef: eN,
          onSendMessage: eY,
          onSendSticker: () => {},
          onVisibilityChange: te,
          editorHeight: e0,
          setValue: (e, t) => null == ee ? true : ee(null, e, t),
          position: eb
        })]
      }), e6 ? null : (0, l.jsx)(S.A, {
        positionTargetRef: eI,
        type: K,
        onSelectGIF: tn,
        onSelectEmoji: tt,
        onSelectSticker: tl,
        channel: U,
        closeOnModalOuterClick: ey,
        parentModalKey: ev,
        position: "top",
        align: "right",
        positionLayerClassName: Z.BD
      })]
    })
  })
}));

function et(e) {
  var t, n;
  let {
    channelId: r,
    canCreateThread: i
  } = e, a = O.A.useField("channelDrafts")[r], s = null == (t = null == a ? true : a.createThread) || t, o = null == (n = null == a ? true : a.publish) || n;
  return (0, l.jsxs)(f.W1t, {
    "data-menu-migrated": true,
    "aria-label": Y.intl.string(Y.t["9WnJyo"]),
    navId: "send-announcement-options",
    onClose: z.tEg,
    onSelect: z.tEg,
    children: [(0, l.jsx)(f.sLh, {
      id: "create-thread",
      label: Y.intl.string(Y.t.rBIGBL),
      checked: i && s,
      disabled: !i,
      action: () => {
        (0, O.x)(r, {
          createThread: !s
        })
      }
    }), (0, l.jsx)(f.sLh, {
      id: "send-and-publish",
      label: Y.intl.string(Y.t.MFGE51),
      checked: o,
      action: () => {
        (0, O.x)(r, {
          publish: !o
        })
      }
    })]
  })
}

function en(e) {
  let {
    file: t,
    onRemoveHeroImage: n
  } = e, [i, a] = r.useState();
  r.useEffect(() => {
    if (null == t || false === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
    let e = URL.createObjectURL(t);
    return a(e), () => {
      a(true), URL.revokeObjectURL(e)
    }
  }, [t]);
  let [s, o] = r.useState(false), c = r.useCallback(() => {
    o(true)
  }, []), u = r.useCallback(() => {
    o(false)
  }, []);
  return null == i ? null : (0, l.jsxs)("div", {
    onMouseEnter: c,
    onMouseLeave: u,
    className: J.Lb,
    "aria-hidden": true,
    children: [(0, l.jsx)("img", {
      src: i,
      alt: Y.intl.string(Y.t["2ePvR8"]),
      className: J.c8
    }), s ? (0, l.jsx)(x.Ay, {
      className: J.jM,
      children: (0, l.jsx)(K.A, {
        tooltip: Y.intl.string(Y.t.VjC21x),
        onClick: n,
        dangerous: true,
        children: (0, l.jsx)(f.ucK, {})
      })
    }) : null]
  })
}

function el(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsx)(j.A, {
    "aria-label": Y.intl.string(Y.t["/IBYAq"]),
    className: J.g$,
    size: "icon",
    color: "transparent",
    look: "blank",
    onChange: e => {
      (0, U.R)(e.currentTarget.files, t, R.C.ChannelMessage, {
        requireConfirm: true,
        origin: "file_picker"
      }), e.currentTarget.value = null
    },
    children: (0, l.jsx)(f.H8$, {
      size: "custom",
      width: 20,
      height: 20,
      color: h.A.colors.INTERACTIVE_TEXT_DEFAULT
    })
  })
}

function er(e) {
  let {
    channel: t,
    onImageUploaded: n,
    onFocus: i
  } = e, a = r.useRef(null), s = async (e, l) => {
    let r = await (0, L.bX)(e, l.name, l.type),
      i = {
        id: (0, u.A)(),
        file: r,
        platform: A.xz.WEB,
        isThumbnail: false,
        origin: "file_picker"
      };
    m.A.addFile({
      file: i,
      channelId: t.id,
      draftType: R.C.ChannelMessage
    }), n(r)
  }, [o, c] = r.useState(false), d = r.useCallback(() => {
    c(true)
  }, []), g = r.useCallback(() => {
    c(false)
  }, []);
  return (0, l.jsx)("div", {
    className: J.qN,
    children: (0, l.jsx)(p.m, {
      asContainer: true,
      text: Y.intl.string(Y.t["/IBYAq"]),
      position: "top",
      children: (0, l.jsxs)(f.DUT, {
        className: J.qN,
        onMouseOver: d,
        onMouseOut: g,
        onFocus: i,
        children: [(0, l.jsx)(T.Ay, {
          ref: a,
          onChange: s,
          "aria-hidden": true,
          tabIndex: false,
          maxFileSizeBytes: q.j,
          onFileSizeError: () => (0, I.A)(q.j)
        }), (0, l.jsx)(f.XGR, {
          size: "md",
          color: o ? h.A.colors.INTERACTIVE_TEXT_ACTIVE : h.A.colors.INTERACTIVE_TEXT_DEFAULT
        })]
      })
    })
  })
}