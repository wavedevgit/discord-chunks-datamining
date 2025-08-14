/** Chunk was on 9456 **/
/** chunk id: 749913, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => es
}), require("./388685.js"), require("./781311.js"), require("./290780.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk94171 = require("./94171.js"),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk536895 = require("./536895.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430742 = require("./430742.js"),
  Chunk166459 = require("./166459.js"),
  Chunk541716 = require("./541716.js"),
  Chunk67158 = require("./67158.jsx"),
  Chunk893718 = require("./893718.jsx"),
  Chunk472243 = require("./472243.jsx"),
  Chunk284182 = require("./284182.jsx"),
  Chunk795639 = require("./795639.jsx"),
  Chunk957730 = require("./957730.js"),
  Chunk25015 = require("./25015.jsx"),
  Chunk252032 = require("./252032.jsx"),
  Chunk216572 = require("./216572.js"),
  Chunk913663 = require("./913663.js"),
  Chunk268350 = require("./268350.js"),
  Chunk456077 = require("./456077.js"),
  Chunk488131 = require("./488131.js"),
  Chunk602034 = require("./602034.js"),
  Chunk23750 = require("./23750.js"),
  Chunk703558 = require("./703558.js"),
  Chunk496675 = require("./496675.js"),
  Chunk300429 = require("./300429.js"),
  Chunk117530 = require("./117530.js"),
  Chunk594174 = require("./594174.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk838440 = require("./838440.js"),
  Chunk127654 = require("./127654.js"),
  Chunk681154 = require("./681154.js"),
  Chunk883429 = require("./883429.js"),
  Chunk945141 = require("./945141.js"),
  Chunk456269 = require("./456269.js"),
  Chunk228392 = require("./228392.js"),
  Chunk259637 = require("./259637.jsx"),
  Chunk76451 = require("./76451.jsx"),
  Chunk470623 = require("./470623.jsx"),
  Chunk479099 = require("./479099.jsx"),
  Chunk399894 = require("./399894.jsx"),
  Chunk81490 = require("./81490.js"),
  Chunk710352 = require("./710352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk153846 = require("./153846.js");

function ei(e) {
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

function ea(e, t) {
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
let el = Chunk541716.Ie.CREATE_FORUM_POST;

function es(e) {
  let {
    parentChannel: t,
    isSearchLoading: n,
    numResults: a,
    onChange: s,
    canCreatePost: o,
    inputRef: d
  } = e, u = !(0, S.HL)(t) && o, {
    textAreaState: m,
    formOpen: g,
    previewing: x
  } = (0, K.xH)(e => {
    let {
      textAreaState: t,
      formOpen: n,
      previewing: r
    } = e;
    return {
      textAreaState: t,
      formOpen: n,
      previewing: r
    }
  }, c.X), [p, b] = i.useState(null), j = i.useContext(D.oo), v = i.useCallback(() => {
    j.bumpDispatchPriority()
  }, [j]), C = (0, h.e7)([k.Z], () => k.Z.can(ee.Plq.ATTACH_FILES, t)), w = (0, h.Wu)([L.Z], () => L.Z.getUploads(t.id, Z.d.FirstThreadMessage)), P = g && C && u, I = (null == t ? true : t.isMediaChannel()) === true, M = function(e, t) {
    let n = (0, K.AF)(),
      r = (0, G.ql)(e);
    return i.useCallback(() => {
      let {
        formOpen: i,
        setFormOpenFromUserAction: a,
        name: l,
        textAreaState: s,
        hasClickedForm: o
      } = n.getState();
      !i && (setTimeout(() => {
        if (t.current instanceof f.lcI) {
          var e, n, r, i;
          null == (n = t.current) || null == (e = n._textArea) || e.setSelectionRange(l.length, l.length), null == (i = t.current) || null == (r = i._textArea) || r.focus()
        }
      }, 0), (o && l.length > 0 || s.textValue.trim().length > 0 && s.textValue.trim() !== r || L.Z.getUploads(e.id, Z.d.FirstThreadMessage).length > 0) && a())
    }, [n, e.id, r, t])
  }(t, d), A = function(e) {
    let {
      formOpen: t
    } = (0, K.xH)(e => {
      let {
        formOpen: t
      } = e;
      return {
        formOpen: t
      }
    }, c.X), n = (0, K.AF)(), r = (0, R.r)({
      parentChannel: e
    });
    i.useEffect(() => {
      let {
        setNameError: e,
        setMessageError: t
      } = n.getState();
      e(null), t(null)
    }, [t, n]);
    let a = i.useCallback((t, r, i) => {
      let {
        name: a,
        textAreaState: l
      } = n.getState();
      null == t && (t = l.textValue), t = t.trim();
      let {
        content: s
      } = O.ZP.parse(e, t);
      if (t = s, null == r || 0 === r.length) {
        var o;
        r = null == (o = T.Z.getStickerPreview(e.id, el.drafts.type)) ? true : o.map(e => e.id)
      }
      if ((null == i || 0 === i.length) && (i = L.Z.getUploads(e.id, Z.d.FirstThreadMessage)), null != i && i.length > 0 && e.isMediaChannel()) {
        let e = i.findIndex(e => true === e.isThumbnail);
        if (e > false) {
          let t = i[e];
          i.splice(e, 1), i.unshift(t)
        }
      }
      let c = 0 === a.length,
        d = (null == t || 0 === t.length) && (null == r || 0 === r.length) && 0 === i.length;
      return {
        content: t,
        stickers: r,
        uploads: i,
        hasNameError: c,
        hasMessageError: d
      }
    }, [e, n]);
    return i.useCallback(async (t, i, l) => {
      let {
        setNameError: s,
        setMessageError: o,
        setSubmitting: c,
        resetFormState: d,
        formOpen: u,
        setFormOpen: m,
        setPreviewing: h,
        setFormOpenFromUserAction: g,
        setGuidelinesOpen: f
      } = n.getState(), x = V.Z.hasSeen(e.id);
      if (!u) return (0, q.P_)({
        guildId: e.guild_id,
        channelId: e.id
      }), x || n.getState().setGuidelinesOpen(true), g(), {
        shouldClear: false,
        shouldRefocus: false
      };
      let {
        content: p,
        stickers: b,
        uploads: j,
        hasNameError: v,
        hasMessageError: C
      } = a(t, i, l);
      if (s(v ? (0, B.V_)() : null), o(C ? (0, B.T4)() : null), v || C) return {
        shouldClear: false,
        shouldRefocus: true
      };
      try {
        c(true);
        let {
          valid: t
        } = await (0, z.v)({
          content: p,
          stickers: b,
          uploads: j,
          type: el,
          channel: e
        });
        if (!t) return {
          shouldClear: false,
          shouldRefocus: true
        };
        let n = await r(p, b, j);
        return (0, E.ok)(n), U.Z.resort(e.id), (0, N.qB)(e.id, el.drafts.type), d(), m(false), h(false), V.Z.markAsSeen(e.id), f(false), {
          shouldClear: true,
          shouldRefocus: false
        }
      } catch (t) {
        var _, y;
        return (null == (_ = t.body) ? true : _.code) === ee.evJ.AUTOMOD_TITLE_BLOCKED ? s((0, B.Gx)(t.body, e)) : (null == (y = t.body) ? true : y.code) === ee.evJ.AUTOMOD_MESSAGE_BLOCKED && o((0, B.Gx)(t.body, e)), {
          shouldClear: false,
          shouldRefocus: true
        }
      } finally {
        c(false)
      }
    }, [r, a, e, n])
  }(t);
  return i.useLayoutEffect(s, [g, m, w, s]), (0, r.jsx)(r.Fragment, {
    children: (0, r.jsx)("div", {
      "aria-label": u ? en.intl.string(en.t.dq7mAQ) : en.intl.string(en.t["5h0QOD"]),
      className: l()(er.container, {
        [er.collapsed]: !g
      }),
      onClick: !g && u ? M : true,
      children: (0, r.jsxs)("form", {
        onMouseDown: v,
        onFocus: v,
        onSubmit: e => {
          e.preventDefault(), u && A()
        },
        children: [(0, r.jsxs)("div", {
          className: er.formContainer,
          children: [(0, r.jsx)(eo, {
            parentChannel: t,
            isSearchLoading: n,
            inputRef: d
          }), (0, r.jsxs)("div", {
            className: x ? er.previewForm : er.form,
            children: [(0, r.jsx)(ec, {
              editorRef: p,
              parentChannel: t,
              isSearchLoading: n,
              numResults: a,
              inputRef: d,
              canCreatePost: u
            }), g && (0, r.jsx)(em, {
              editorRef: p,
              setEditorRef: b,
              parentChannel: t,
              submit: A,
              disabled: !u
            }), x && (0, r.jsx)(eh, {})]
          }), P && (I ? (0, r.jsx)(y._, {
            parentChannel: t
          }) : (0, r.jsx)(X.Z, {
            channelId: t.id
          }))]
        }), (0, r.jsxs)("div", {
          className: er.form,
          children: [P && I && (0, r.jsx)(_.Z, {
            parentChannel: t
          }), g && (0, r.jsx)(ep, {
            className: er.horizontalPadding,
            parentChannel: t,
            canCreatePost: u
          })]
        })]
      })
    })
  })
}
let eo = Chunk73800.memo(function(e) {
    let {
      parentChannel: t,
      isSearchLoading: n,
      inputRef: a
    } = e, {
      formOpen: l,
      name: s,
      textAreaState: o,
      hasClickedForm: d,
      submitting: u
    } = (0, K.xH)(e => {
      let {
        formOpen: t,
        nameError: n,
        name: r,
        previewing: i,
        textAreaState: a,
        hasClickedForm: l,
        submitting: s
      } = e;
      return {
        formOpen: t,
        nameError: n,
        name: r,
        textAreaState: a,
        previewing: i,
        hasClickedForm: l,
        submitting: s
      }
    }, c.X), m = (0, K.AF)(), h = (0, G.ql)(t), g = i.useCallback(() => {
      var e;
      m.getState().resetFormState(), x.Z.clearDraft(t.id, Z.d.ThreadSettings), x.Z.clearDraft(t.id, Z.d.FirstThreadMessage), p.Z.clearAll(t.id, Z.d.FirstThreadMessage), m.getState().setFormOpen(false), m.getState().setBodyFocused(false), m.getState().setTitleFocused(false), m.getState().setHasClickedForm(false), m.getState().setPreviewing(false), null == (e = a.current) || e.blur(), (0, q.Oq)({
        guildId: t.guild_id,
        channelId: t.id
      })
    }, [m, t.id, t.guild_id, a]), b = i.useMemo(() => n && !l ? (0, r.jsx)(eC, {}) : n || l || 0 !== o.textValue.trim().length && o.textValue.trim() !== h ? !l && (s.trim().length > 0 || o.textValue.trim().length > 0 && o.textValue.trim() !== h || L.Z.getUploads(t.id, Z.d.FirstThreadMessage).length > 0) && d ? (0, r.jsx)(f.vdY, {
      size: "md",
      color: "currentColor",
      className: er.pencilIcon
    }) : u ? (0, r.jsx)(f.k$p, {
      size: "md",
      color: "currentColor",
      className: er.closeIconDisabled
    }) : (0, r.jsx)(f.ua7, {
      text: en.intl.string(en.t["98EPQE"]),
      children: e => (0, r.jsx)(f.P3F, ea(ei({}, e), {
        onClick: g,
        children: (0, r.jsx)(f.k$p, {
          size: "md",
          color: "currentColor",
          className: er.closeIcon
        })
      }))
    }) : (0, r.jsx)(f._Ve, {
      size: "md",
      color: "currentColor",
      className: er.searchIcon
    }), [n, l, d, s, o.textValue, g, t.id, h, u]);
    return (0, r.jsx)("div", {
      className: er.prefixElement,
      children: b
    })
  }),
  ec = Chunk73800.memo(function(e) {
    let {
      parentChannel: t,
      inputRef: n,
      canCreatePost: a,
      editorRef: l,
      isSearchLoading: s,
      numResults: d
    } = e, {
      formOpen: u,
      nameError: m,
      name: x,
      textAreaState: p,
      previewing: b
    } = (0, K.xH)(e => {
      let {
        formOpen: t,
        nameError: n,
        name: r,
        previewing: i,
        textAreaState: a,
        hasClickedForm: l,
        submitting: s
      } = e;
      return {
        formOpen: t,
        nameError: n,
        name: r,
        textAreaState: a,
        previewing: i,
        hasClickedForm: l,
        submitting: s
      }
    }, c.X), j = (0, K.AF)(), v = null != t.topic && 0 !== t.topic.length, C = V.Z.hasSeen(t.id), _ = (0, G.ql)(t), y = (0, h.e7)([F.default], () => F.default.getCurrentUser());
    o()(null != y, "current user cannot be null"), (0, D.yp)({
      event: ee.CkL.FOCUS_COMPOSER_TITLE,
      handler: () => {
        var e;
        let t = n.current instanceof f.lcI ? null == (e = n.current) ? true : e._textArea : n.current;
        null == t || t.focus(), j.getState().setTitleFocused(true), j.getState().setFormOpen(true), j.getState().setHasClickedForm(true)
      }
    });
    let O = i.useCallback(e => {
        let n = e.clipboardData.files[0];
        null != n && n.type.startsWith("image/") && (e.preventDefault(), (0, H.d)([n], t, Z.d.FirstThreadMessage, {
          origin: "clipboard"
        }), j.getState().setFormOpenFromUserAction())
      }, [t, j]),
      w = (0, B.Op)(m, {
        content: x
      });
    return (0, r.jsxs)("div", {
      className: er.titleContainer,
      onPaste: O,
      children: [u && b ? (0, r.jsx)(f.X6q, {
        variant: "heading-md/semibold",
        className: er.title,
        children: x
      }) : (0, r.jsx)(g.iS, {
        value: x,
        placeholder: a ? u || p.textValue.length > 0 && p.textValue.trim() !== _ ? en.intl.string(en.t.lU4dDQ) : en.intl.string(en.t.CjmivL) : en.intl.string(en.t["5h0QOD"]),
        flex: true,
        autosize: u,
        rows: 1,
        showCharacterCount: false,
        showRemainingCharacterCount: false,
        maxLength: ee.HN8,
        onChange: e => {
          let n = (0, I.Z)(e, false);
          j.getState().setName(n);
          let r = 0 === n.trim().length,
            i = 0 === p.textValue.trim().length,
            a = p.textValue.trim() === _;
          r && (i || a) && j.getState().setHasClickedForm(false), u || U.Z.updateForumSearchQuery(t.id, n)
        },
        onFocus: () => {
          j.getState().setTitleFocused(true), j.getState().setBodyFocused(false)
        },
        onBlur: () => {
          j.getState().setTitleFocused(false);
          let e = (0, I.Z)(x, true);
          e !== x && (j.getState().setName(e), u || U.Z.updateForumSearchQuery(t.id, e))
        },
        onKeyDown: e => {
          var r, i;
          "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), u && x.length > 0 ? null == l || l.focus() : a && e.shiftKey ? ((0, q.nH)({
            guildId: t.guild_id,
            channelId: t.id
          }), v && !C && j.getState().setGuidelinesOpen(true), j.getState().setFormOpenFromUserAction(), x.trim().length > 0 && (j.getState().setBodyFocused(true), null == l || l.focus())) : u || !(x.length > 0) || null != d || s || U.Z.updateForumSearchQuery(t.id, x));
          let o = n.current instanceof f.lcI ? null == (r = n.current) ? true : r._textArea : n.current;
          if ("Home" === e.key || "End" === e.key) {
            if (null == o) return;
            if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) {
              let t = e.shiftKey ? Math.max(o.selectionStart, o.selectionEnd) : 0;
              o.setSelectionRange(0, t, "backward")
            } else {
              let t = e.shiftKey ? Math.min(o.selectionStart, o.selectionEnd) : x.length,
                n = x.length;
              o.setSelectionRange(t, n, "forward")
            }
          }
          "Escape" !== e.key || j.getState().submitting || (null == (i = n.current) || i.blur(), j.getState().setFormOpen(false), j.getState().setTitleFocused(false), j.getState().setBodyFocused(false), j.getState().setPreviewing(false))
        },
        error: w,
        className: er.title,
        inputRef: n
      }), u ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(ed, {
          parentChannel: t
        }), (0, r.jsx)(eb, {
          parentChannel: t,
          canCreatePost: a
        })]
      })]
    })
  });

function ed(e) {
  let {
    parentChannel: t
  } = e, {
    guidelinesOpen: n
  } = (0, K.xH)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }, c.X), i = (0, K.AF)(), a = null != t.topic && 0 !== t.topic.length, s = () => {
    i.getState().setGuidelinesOpen(!n)
  };
  return a ? (0, r.jsx)(f.ua7, {
    text: en.intl.string(en.t["4d4T4u"]),
    children: e => (0, r.jsx)(f.P3F, ea(ei({}, e), {
      onClick: s,
      className: l()(er.forumPostFormButton, {
        [er.forumPostFormButtonActive]: n
      }),
      children: (0, r.jsx)(f.snC, ei({
        size: "md",
        color: "currentColor"
      }, e))
    }))
  }) : null
}
let eu = Chunk73800.memo(function(e) {
    let {
      parentChannel: t,
      textValue: n
    } = e, i = new M.ZP({
      channelId: t.id,
      content: n
    }), {
      content: a
    } = (0, w.Z)(i, {
      hideSimpleEmbedContent: true,
      isInteracting: false,
      formatInline: false,
      allowList: true,
      allowHeading: true,
      previewLinkTarget: true,
      allowLinks: true
    }), s = (0, P.Z)({
      message: i,
      channel: t,
      compact: false
    }, a, false);
    return (0, r.jsx)("div", {
      className: l()(er.channelTextAreaInner, er.previewTextArea),
      children: s
    })
  }),
  em = Chunk73800.memo(function(e) {
    let {
      parentChannel: t,
      submit: n,
      disabled: a = false,
      editorRef: s,
      setEditorRef: d
    } = e, u = (0, h.e7)([F.default], () => F.default.getCurrentUser());
    o()(null != u, "current user cannot be null");
    let {
      messageError: m,
      previewing: g,
      textAreaState: x,
      bodyFocused: p,
      formOpen: b
    } = (0, K.xH)(e => {
      let {
        messageError: t,
        textAreaState: n,
        previewing: r,
        bodyFocused: i,
        formOpen: a
      } = e;
      return {
        messageError: t,
        textAreaState: n,
        previewing: r,
        bodyFocused: i,
        formOpen: a
      }
    }, c.X), j = (0, K.AF)();
    i.useEffect(() => () => (0, q.Vn)({
      guildId: t.guild_id,
      channelId: t.id
    }), [t.guild_id, t.id]);
    let C = i.useCallback(() => {
        j.getState().setBodyFocused(true)
      }, [j]),
      _ = i.useCallback(() => {
        j.getState().setBodyFocused(false)
      }, [j]),
      y = i.useCallback((e, t, n) => {
        let {
          setTextAreaState: r
        } = j.getState();
        r({
          textValue: t,
          richValue: n
        })
      }, [j]),
      O = i.useCallback(e => {
        let {
          value: t,
          uploads: r,
          stickers: i
        } = e;
        return n(t, i, r)
      }, [n]);
    (0, D.yp)({
      event: ee.CkL.TEXTAREA_FOCUS,
      handler: C
    }), (0, D.yp)({
      event: ee.CkL.TEXTAREA_BLUR,
      handler: _
    });
    let w = (0, B.Op)(m, {
      content: x.textValue
    });
    return (0, r.jsx)("div", {
      className: er.bodyContainer,
      children: (0, r.jsxs)("div", {
        className: er.contentContainer,
        children: [g ? (0, r.jsx)(eu, {
          parentChannel: t,
          textValue: x.textValue
        }) : (0, r.jsx)("div", {
          onClick: C,
          children: (0, r.jsx)(v.ZP, {
            type: el,
            setEditorRef: d,
            channel: t,
            placeholder: en.intl.string(en.t["8IPnv7"]),
            textValue: x.textValue,
            richValue: x.richValue,
            focused: p,
            className: er.channelTextArea,
            innerClassName: l()(er.channelTextAreaInner, {
              [er.channelTextAreaInnerError]: null != w
            }),
            onChange: y,
            onSubmit: O,
            promptToUpload: H.d,
            disabled: a,
            onKeyDown: e => {
              ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), b && "Escape" === e.key && !j.getState().submitting && (null == s || s.blur(), j.getState().setFormOpen(false), j.getState().setTitleFocused(false), j.getState().setBodyFocused(false), j.getState().setPreviewing(false))
            },
            autoCompletePosition: "bottom"
          })
        }), (0, r.jsx)(f.pdY, {
          error: w
        })]
      })
    })
  });

function eh() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk153846.previewModeIndicator,
    children: (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "interactive-normal",
      children: Chunk388032.intl.string(Chunk388032.t["WE/cYm"])
    })
  })
}

function eg(e) {
  let {
    textAreaState: t
  } = (0, K.xH)(e => {
    let {
      textAreaState: t
    } = e;
    return {
      textAreaState: t
    }
  }, c.X), n = (0, h.Wu)([L.Z], () => L.Z.getUploads(e.id, Z.d.FirstThreadMessage));
  return i.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n])
}

function ef(e) {
  let t = eg(e),
    {
      appliedTags: n,
      name: r
    } = (0, K.xH)(e => {
      let {
        appliedTags: t,
        name: n
      } = e;
      return {
        appliedTags: t,
        name: n
      }
    }, c.X);
  return i.useMemo(() => e.hasFlag(et.zZ.REQUIRE_TAG) && 0 === n.size && r.length > 0 && t, [n, r, e, t])
}

function ex() {
  let {
    previewing: e
  } = (0, Chunk470623.xH)(e => {
    let {
      previewing: t
    } = e;
    return {
      previewing: t
    }
  }, Chunk94171.X), t = (0, Chunk470623.AF)(), n = Chunk73800.useCallback(() => {
    exports.getState().setPreviewing(!module), (0, Chunk228392.nE)()
  }, [module, exports]);
  return (0, Chunk255367.jsx)(Chunk481060.ua7, {
    text: module ? Chunk388032.intl.string(Chunk388032.t.ojM1xM) : Chunk388032.intl.string(Chunk388032.t.SKNnqq),
    children: t => (0, r.jsx)(f.P3F, ea(ei({}, t), {
      onClick: n,
      className: l()(er.forumPostFormButton, {
        [er.forumPostFormButtonActive]: e
      }),
      children: e ? (0, r.jsx)(f.kZF, ei({
        size: "md",
        color: "currentColor"
      }, t)) : (0, r.jsx)(f.tEF, ei({
        size: "md",
        color: "currentColor"
      }, t))
    }))
  })
}
let ep = Chunk73800.memo(function(e) {
  let {
    parentChannel: t,
    canCreatePost: n,
    className: a
  } = e, {
    textAreaState: l,
    name: s
  } = (0, K.xH)(e => {
    let {
      textAreaState: t,
      name: n
    } = e;
    return {
      textAreaState: t,
      name: n
    }
  }, c.X), {
    rateLimitPerUser: o
  } = t, d = o > 0, u = (0, h.e7)([A.Z], () => A.Z.getSlowmodeCooldownGuess(t.id, A.S.CreateThread)), m = (0, h.e7)([k.Z], () => k.Z.can(ee.Plq.MANAGE_THREADS, t) || k.Z.can(ee.Plq.MANAGE_CHANNELS, t)), g = ef(t), x = (0, K.AF)(), p = i.useCallback(() => {
    x.getState().setBodyFocused(false)
  }, [x]), b = i.useMemo(() => "" !== s.trim() && "" !== l.textValue.trim(), [s, l.textValue]);
  return i.useEffect(() => {
    b || x.getState().setPreviewing(false)
  }, [b, x]), (0, r.jsxs)("div", {
    className: a,
    children: [(0, r.jsx)(ev, {
      parentChannel: t
    }), (0, r.jsx)("div", {
      className: er.tagsDivider
    }), (0, r.jsxs)("div", {
      className: er.controlsContainer,
      children: [(0, r.jsxs)("div", {
        className: er.controls,
        children: [(0, r.jsxs)("div", {
          className: er.wrappedControls,
          children: [(0, r.jsx)(C.Z, {
            type: el,
            textValue: l.textValue,
            className: er.characterCount
          }), d && (0, r.jsx)(Y.Z, {
            rateLimitPerUser: o,
            slowmodeCooldownGuess: u,
            isBypassSlowmode: m,
            leadingIcon: true
          })]
        }), (0, r.jsx)(ed, {
          parentChannel: t
        }), b && (0, r.jsx)(ex, {}), (0, r.jsx)(eb, {
          parentChannel: t,
          disableIfInvalid: true,
          canCreatePost: n,
          disabled: d && !m && u > 0
        })]
      }), (0, r.jsx)(j.Z, {
        type: el,
        className: er.expressionPicker,
        onClick: p
      }, "expression")]
    }), g && (0, r.jsx)(f.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      className: er.requiredError,
      children: en.intl.string(en.t.xPfNQk)
    })]
  })
});

function eb(e) {
  let {
    parentChannel: t,
    canCreatePost: n,
    disabled: i,
    disableIfInvalid: a = false
  } = e, l = (0, S.HL)(t), {
    submitting: s,
    name: o,
    formOpen: d
  } = (0, K.xH)(e => {
    let {
      submitting: t,
      name: n,
      formOpen: r
    } = e;
    return {
      submitting: t,
      name: n,
      formOpen: r
    }
  }, c.X), u = eg(t), m = !ef(t) && u && o.trim().length > 0;
  return __OVERLAY__ || l ? null : (0, r.jsx)(f.zxk, {
    variant: "primary",
    type: "submit",
    loading: s,
    disabled: a && !m || i || !n,
    icon: f.kBi,
    text: d ? en.intl.string(en.t.pIuQIy) : en.intl.string(en.t.TyAuoa)
  })
}

function ej() {
  return Promise.resolve()
}

function ev(e) {
  let {
    parentChannel: t
  } = e, {
    appliedTags: n,
    toggleAppliedTag: a,
    setPopoutOpen: s
  } = (0, K.xH)(e => {
    let {
      appliedTags: t,
      toggleAppliedTag: n,
      setPopoutOpen: r
    } = e;
    return {
      appliedTags: t,
      toggleAppliedTag: n,
      setPopoutOpen: r
    }
  }, c.X), o = n.size >= $.Cn, h = (0, d.ZP)({
    id: "".concat(t.id, "-post-form-tags-navigator"),
    isEnabled: true,
    wrap: true,
    scrollToStart: ej,
    scrollToEnd: ej,
    orientation: m.hy.HORIZONTAL
  }), {
    containerRef: g,
    containerWidth: x
  } = (0, Q.Z)(), p = i.useRef(null), b = i.useRef(null), [j, v] = i.useState(true), C = (0, G.Vm)(t), [_, y] = i.useState(0);
  return (i.useLayoutEffect(() => {
    var e;
    let t = p.current,
      n = null == t || null == (e = t.children) ? true : e[0],
      r = null == t || null == n || n.clientHeight > t.clientHeight;
    if (r !== j && v(r), r && null != g.current && null != n && null != n.children) {
      let {
        left: e,
        top: t
      } = g.current.getBoundingClientRect(), r = 0;
      for (let i of n.children) {
        let {
          right: n,
          top: a,
          height: l
        } = i.getBoundingClientRect();
        if (a - t > l) break;
        n - e > r && (r = n - e)
      }
      y(r)
    }
  }, [C, j, g, x]), 0 === C.length) ? null : (0, r.jsxs)("div", {
    className: er.tagsContainer,
    ref: g,
    children: [(0, r.jsx)(f.lO_, {
      size: "xs",
      color: "currentColor",
      className: er.tagsIcon
    }), (0, r.jsx)("div", {
      className: er.tagList,
      ref: p,
      children: (0, r.jsx)(u.bG, {
        navigator: h,
        children: (0, r.jsx)(u.SJ, {
          children: e => {
            var {
              ref: t
            } = e, i = function(e, t) {
              if (null == e) return {};
              var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
              }
              return i
            }(e, ["ref"]);
            return (0, r.jsx)("div", ea(ei({
              className: er.tagListInner,
              ref: t
            }, i), {
              children: C.map(e => (0, r.jsx)(J.Z, {
                ariaLabel: en.intl.formatToPlainString(en.t.FSZVIS, {
                  tagName: e.name
                }),
                tag: e,
                onClick: o && !n.has(e.id) ? true : () => a(e.id),
                disabled: !n.has(e.id) && n.size >= $.Cn,
                selected: n.has(e.id),
                size: J.Z.Sizes.SMALL
              }, e.id))
            }))
          }
        })
      })
    }), j && (0, r.jsx)(f.yRy, {
      targetElementRef: b,
      onRequestOpen: () => s(true),
      onRequestClose: () => s(false),
      renderPopout: e => {
        let {
          closePopout: i
        } = e;
        return (0, r.jsx)(W.Z, {
          parentChannel: t,
          appliedTags: n,
          maxTagsApplied: o,
          onSelectTag: a,
          onClose: i
        })
      },
      position: "bottom",
      align: "center",
      children: e => (0, r.jsx)("div", {
        ref: b,
        className: er.tagsButton,
        style: {
          left: _
        },
        children: (0, r.jsx)(f.zxk, ea(ei({}, e), {
          size: "sm",
          variant: "secondary",
          icon: f.CJ0,
          iconPosition: "end",
          text: en.intl.string(en.t.IkpM1d)
        }))
      })
    }), (0, r.jsx)("div", {
      className: l()(er.tagsButton, er.tagsButtonPlaceholder),
      children: (0, r.jsx)(f.zxk, {
        size: "sm",
        variant: "secondary",
        icon: f.CJ0,
        iconPosition: "end",
        text: en.intl.string(en.t.IkpM1d)
      })
    })]
  })
}

function eC(e) {
  let {
    style: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: n,
    style: t,
    children: (0, r.jsx)("div", {
      className: er.loader
    })
  })
}