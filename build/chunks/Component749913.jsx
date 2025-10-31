/** Chunk was on 9456 **/
/** chunk id: 749913, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => ed
}), require("./388685.js"), require("./781311.js"), require("./290780.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk574583 = require("./574583.js"),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk536895 = require("./536895.js"),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk680874 = require("./680874.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk430742 = require("./430742.js"),
  Chunk166459 = require("./166459.js"),
  Chunk541716 = require("./541716.js"),
  Chunk67158 = require("./67158.jsx"),
  Chunk893718 = require("./893718.jsx"),
  Chunk472243 = require("./472243.jsx"),
  Chunk923664 = require("./923664.js"),
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

function es(e) {
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

function eo(e, t) {
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
let ec = Chunk541716.Ie.CREATE_FORUM_POST;

function ed(e) {
  let {
    parentChannel: t,
    isSearchLoading: n,
    numResults: a,
    onChange: s,
    canCreatePost: o,
    inputRef: d
  } = e, u = !(0, I.HL)(t) && o, {
    textAreaState: m,
    formOpen: f,
    previewing: x
  } = (0, Q.xH)(e => {
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
  }, c.X), [p, b] = i.useState(null), j = i.useContext(B.oo), v = i.useCallback(() => {
    j.bumpDispatchPriority()
  }, [j]), _ = (0, g.e7)([F.Z], () => F.Z.can(er.Plq.ATTACH_FILES, t)), C = (0, g.Wu)([H.Z], () => H.Z.getUploads(t.id, L.d.FirstThreadMessage)), y = f && _ && u, T = (null == t ? true : t.isMediaChannel()) === true, O = function(e, t) {
    let n = (0, Q.AF)(),
      r = (0, K.ql)(e);
    return i.useCallback(() => {
      let {
        formOpen: i,
        setFormOpenFromUserAction: a,
        name: l,
        textAreaState: s,
        hasClickedForm: o
      } = n.getState();
      !i && (setTimeout(() => {
        if ((0, h.kK)(t.current, HTMLTextAreaElement)) {
          var e, n;
          null == (e = t.current) || e.setSelectionRange(l.length, l.length), null == (n = t.current) || n.focus()
        }
      }, 0), (o && l.length > 0 || s.textValue.trim().length > 0 && s.textValue.trim() !== r || H.Z.getUploads(e.id, L.d.FirstThreadMessage).length > 0) && a())
    }, [n, e.id, r, t])
  }(t, d), P = function(e) {
    let {
      formOpen: t
    } = (0, Q.xH)(e => {
      let {
        formOpen: t
      } = e;
      return {
        formOpen: t
      }
    }, c.X), n = (0, Q.AF)(), r = (0, k.r)({
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
      } = N.ZP.parse(e, t);
      if (t = s, null == r || 0 === r.length) {
        var o;
        r = null == (o = E.Z.getStickerPreview(e.id, ec.drafts.type)) ? true : o.map(e => e.id)
      }
      if ((null == i || 0 === i.length) && (i = H.Z.getUploads(e.id, L.d.FirstThreadMessage)), null != i && i.length > 0 && e.isMediaChannel()) {
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
      } = n.getState(), x = q.Z.hasSeen(e.id);
      if (!u) return (0, X.P_)({
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
        hasMessageError: _
      } = a(t, i, l);
      if (s(v ? (0, V.V_)() : null), o(_ ? (0, V.T4)() : null), v || _) return {
        shouldClear: false,
        shouldRefocus: true
      };
      try {
        c(true);
        let {
          valid: t
        } = await (0, U.v)({
          content: p,
          stickers: b,
          uploads: j,
          type: ec,
          channel: e
        });
        if (!t) return {
          shouldClear: false,
          shouldRefocus: true
        };
        let n = await r(p, b, j);
        return (0, Z.ok)(n), W.Z.resort(e.id), (0, R.qB)(e.id, ec.drafts.type), d(), m(false), h(false), q.Z.markAsSeen(e.id), f(false), {
          shouldClear: true,
          shouldRefocus: false
        }
      } catch (t) {
        var C, y;
        return (null == (C = t.body) ? true : C.code) === er.evJ.AUTOMOD_TITLE_BLOCKED ? s((0, V.Gx)(t.body, e)) : (null == (y = t.body) ? true : y.code) === er.evJ.AUTOMOD_MESSAGE_BLOCKED && o((0, V.Gx)(t.body, e)), {
          shouldClear: false,
          shouldRefocus: true
        }
      } finally {
        c(false)
      }
    }, [r, a, e, n])
  }(t);
  return i.useLayoutEffect(s, [f, m, C, s]), (0, r.jsx)(r.Fragment, {
    children: (0, r.jsx)("div", {
      "aria-label": u ? ea.intl.string(ea.t.dq7mAa) : ea.intl.string(ea.t["5h0QOP"]),
      className: l()(el.container, {
        [el.collapsed]: !f
      }),
      onClick: !f && u ? O : true,
      children: (0, r.jsxs)("form", {
        onMouseDown: v,
        onFocus: v,
        onSubmit: e => {
          e.preventDefault(), u && P()
        },
        children: [(0, r.jsxs)("div", {
          className: el.formContainer,
          children: [(0, r.jsx)(eu, {
            parentChannel: t,
            isSearchLoading: n,
            inputRef: d
          }), (0, r.jsxs)("div", {
            className: x ? el.previewForm : el.form,
            children: [(0, r.jsx)(em, {
              editorRef: p,
              parentChannel: t,
              isSearchLoading: n,
              numResults: a,
              inputRef: d,
              canCreatePost: u
            }), f && (0, r.jsx)(ef, {
              editorRef: p,
              setEditorRef: b,
              parentChannel: t,
              submit: P,
              disabled: !u
            }), x && (0, r.jsx)(ex, {})]
          }), y && (T ? (0, r.jsx)(S._, {
            parentChannel: t
          }) : (0, r.jsx)(J.Z, {
            channelId: t.id
          }))]
        }), (0, r.jsxs)("div", {
          className: el.form,
          children: [y && T && (0, r.jsx)(w.Z, {
            parentChannel: t
          }), f && (0, r.jsx)(ev, {
            className: el.horizontalPadding,
            parentChannel: t,
            canCreatePost: u
          })]
        })]
      })
    })
  })
}
let eu = Chunk647438.memo(function(e) {
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
    } = (0, Q.xH)(e => {
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
    }, c.X), m = (0, Q.AF)(), h = (0, K.ql)(t), g = i.useCallback(() => {
      var e;
      m.getState().resetFormState(), b.Z.clearDraft(t.id, L.d.ThreadSettings), b.Z.clearDraft(t.id, L.d.FirstThreadMessage), j.Z.clearAll(t.id, L.d.FirstThreadMessage), m.getState().setFormOpen(false), m.getState().setBodyFocused(false), m.getState().setTitleFocused(false), m.getState().setHasClickedForm(false), m.getState().setPreviewing(false), null == (e = a.current) || e.blur(), (0, X.Oq)({
        guildId: t.guild_id,
        channelId: t.id
      })
    }, [m, t.id, t.guild_id, a]), f = i.useMemo(() => !l && (s.trim().length > 0 || o.textValue.trim().length > 0 && o.textValue.trim() !== h || H.Z.getUploads(t.id, L.d.FirstThreadMessage).length > 0) && d ? (0, r.jsx)(p.vdY, {
      size: "md",
      color: "currentColor",
      className: el.pencilIcon
    }) : (0, r.jsx)(p.BK9, {
      onClear: g,
      hasContent: l,
      isLoading: n || u,
      size: "md"
    }), [n, l, d, s, o.textValue, g, t.id, h, u]);
    return (0, r.jsx)("div", {
      className: el.prefixElement,
      children: f
    })
  }),
  em = Chunk647438.memo(function(e) {
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
      name: h,
      textAreaState: x,
      previewing: b
    } = (0, Q.xH)(e => {
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
    }, c.X), j = (0, Q.AF)(), v = null != t.topic && 0 !== t.topic.length, _ = q.Z.hasSeen(t.id), C = (0, K.ql)(t), y = (0, g.e7)([z.default], () => z.default.getCurrentUser());
    o()(null != y, "current user cannot be null"), (0, B.yp)({
      event: er.CkL.FOCUS_COMPOSER_TITLE,
      handler: () => {
        let e = n.current;
        null == e || e.focus(), j.getState().setTitleFocused(true), j.getState().setFormOpen(true), j.getState().setHasClickedForm(true)
      }
    });
    let T = i.useCallback(async e => {
        let n = e.clipboardData.files[0];
        null != n && n.type.startsWith("image/") && (e.preventDefault(), await (0, G.d)([n], t, L.d.FirstThreadMessage, {
          origin: "clipboard"
        }), j.getState().setFormOpenFromUserAction())
      }, [t, j]),
      w = (0, V.Op)(m, {
        content: h
      });
    return (0, r.jsxs)("div", {
      className: el.titleContainer,
      onPaste: T,
      children: [u && b ? (0, r.jsx)(p.Heading, {
        variant: "heading-md/semibold",
        className: el.title,
        children: h
      }) : (0, r.jsxs)(p.Kqy, {
        gap: 4,
        children: [(0, r.jsx)(f.l, {
          value: h,
          placeholder: a ? u || x.textValue.length > 0 && x.textValue.trim() !== C ? ea.intl.string(ea.t.lU4dDS) : ea.intl.string(ea.t.CjmivA) : ea.intl.string(ea.t["5h0QOP"]),
          rows: 1,
          maxLength: er.HN8,
          onChange: e => {
            let n = e.target.value,
              r = (0, M.Z)(n, false);
            j.getState().setName(r);
            let i = 0 === r.trim().length,
              a = 0 === x.textValue.trim().length,
              l = x.textValue.trim() === C;
            i && (a || l) && j.getState().setHasClickedForm(false), u || W.Z.updateForumSearchQuery(t.id, r)
          },
          onFocus: () => {
            j.getState().setTitleFocused(true), j.getState().setBodyFocused(false)
          },
          onBlur: () => {
            j.getState().setTitleFocused(false);
            let e = (0, M.Z)(h, true);
            e !== h && (j.getState().setName(e), u || W.Z.updateForumSearchQuery(t.id, e))
          },
          onKeyDown: e => {
            "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), u && h.length > 0 ? null == l || l.focus() : a && e.shiftKey ? ((0, X.nH)({
              guildId: t.guild_id,
              channelId: t.id
            }), v && !_ && j.getState().setGuidelinesOpen(true), j.getState().setFormOpenFromUserAction(), h.trim().length > 0 && (j.getState().setBodyFocused(true), null == l || l.focus())) : u || !(h.length > 0) || null != d || s || W.Z.updateForumSearchQuery(t.id, h));
            let r = n.current;
            if ("Home" === e.key || "End" === e.key) {
              if (null == r) return;
              if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) {
                let t = e.shiftKey ? Math.max(r.selectionStart, r.selectionEnd) : 0;
                r.setSelectionRange(0, t, "backward")
              } else {
                let t = e.shiftKey ? Math.min(r.selectionStart, r.selectionEnd) : h.length,
                  n = h.length;
                r.setSelectionRange(t, n, "forward")
              }
            }
            if ("Escape" === e.key && !j.getState().submitting) {
              var i;
              null == (i = n.current) || i.blur(), j.getState().setFormOpen(false), j.getState().setTitleFocused(false), j.getState().setBodyFocused(false), j.getState().setPreviewing(false)
            }
          },
          className: el.title,
          ref: n
        }), null != w ? (0, r.jsx)(p.pdY, {
          error: w
        }) : null]
      }), u ? null : (0, r.jsxs)(p.Kqy, {
        direction: "horizontal",
        gap: 8,
        justify: "end",
        children: [(0, r.jsx)(eh, {
          parentChannel: t
        }), (0, r.jsx)(e_, {
          parentChannel: t,
          canCreatePost: a
        })]
      })]
    })
  });

function eh(e) {
  let {
    parentChannel: t
  } = e, {
    guidelinesOpen: n
  } = (0, Q.xH)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }, c.X), i = (0, Q.AF)();
  return null != t.topic && 0 !== t.topic.length ? (0, r.jsx)(x.u, {
    text: ea.intl.string(ea.t["4d4T4l"]),
    children: (0, r.jsx)(p.hU, {
      size: "sm",
      variant: "secondary",
      onClick: () => {
        i.getState().setGuidelinesOpen(!n)
      },
      icon: p.snC,
      "aria-label": ea.intl.string(ea.t["4d4T4l"])
    })
  }) : null
}
let eg = Chunk647438.memo(function(e) {
    let {
      parentChannel: t,
      textValue: n
    } = e, i = new A.ZP({
      channel_id: t.id,
      content: n
    }), {
      content: a
    } = (0, O.Z)(i, {
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
      className: l()(el.channelTextAreaInner, el.previewTextArea),
      children: s
    })
  }),
  ef = Chunk647438.memo(function(e) {
    let {
      parentChannel: t,
      submit: n,
      disabled: a = false,
      editorRef: s,
      setEditorRef: d
    } = e, u = (0, g.e7)([z.default], () => z.default.getCurrentUser());
    o()(null != u, "current user cannot be null");
    let {
      messageError: m,
      previewing: h,
      textAreaState: f,
      bodyFocused: x,
      formOpen: b
    } = (0, Q.xH)(e => {
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
    }, c.X), j = (0, Q.AF)();
    i.useEffect(() => () => (0, X.Vn)({
      guildId: t.guild_id,
      channelId: t.id
    }), [t.guild_id, t.id]);
    let v = i.useCallback(() => {
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
      T = i.useCallback(e => {
        let {
          value: t,
          uploads: r,
          stickers: i
        } = e;
        return n(t, i, r)
      }, [n]);
    (0, B.yp)({
      event: er.CkL.TEXTAREA_FOCUS,
      handler: v
    }), (0, B.yp)({
      event: er.CkL.TEXTAREA_BLUR,
      handler: _
    });
    let w = (0, V.Op)(m, {
      content: f.textValue
    });
    return (0, r.jsx)("div", {
      className: el.bodyContainer,
      children: (0, r.jsxs)("div", {
        className: el.contentContainer,
        children: [h ? (0, r.jsx)(eg, {
          parentChannel: t,
          textValue: f.textValue
        }) : (0, r.jsx)("div", {
          onClick: v,
          children: (0, r.jsx)(C.ZP, {
            type: ec,
            setEditorRef: d,
            channel: t,
            placeholder: ea.intl.string(ea.t["8IPnv1"]),
            textValue: f.textValue,
            richValue: f.richValue,
            focused: x,
            className: el.channelTextArea,
            innerClassName: l()(el.channelTextAreaInner, {
              [el.channelTextAreaInnerError]: null != w
            }),
            onChange: y,
            onSubmit: T,
            promptToUpload: G.d,
            disabled: a,
            onKeyDown: e => {
              ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), b && "Escape" === e.key && !j.getState().submitting && (null == s || s.blur(), j.getState().setFormOpen(false), j.getState().setTitleFocused(false), j.getState().setBodyFocused(false), j.getState().setPreviewing(false))
            },
            autoCompletePosition: "bottom"
          })
        }), (0, r.jsx)(p.pdY, {
          error: w
        })]
      })
    })
  });

function ex() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk153846.previewModeIndicator,
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "interactive-normal",
      children: Chunk388032.intl.string(Chunk388032.t["WE/cYo"])
    })
  })
}

function ep(e) {
  let {
    textAreaState: t
  } = (0, Q.xH)(e => {
    let {
      textAreaState: t
    } = e;
    return {
      textAreaState: t
    }
  }, c.X), n = (0, g.Wu)([H.Z], () => H.Z.getUploads(e.id, L.d.FirstThreadMessage));
  return i.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n])
}

function eb(e) {
  let t = ep(e),
    {
      appliedTags: n,
      name: r
    } = (0, Q.xH)(e => {
      let {
        appliedTags: t,
        name: n
      } = e;
      return {
        appliedTags: t,
        name: n
      }
    }, c.X);
  return i.useMemo(() => e.hasFlag(ei.zZ.REQUIRE_TAG) && 0 === n.size && r.length > 0 && t, [n, r, e, t])
}

function ej() {
  let {
    previewing: e
  } = (0, Chunk470623.xH)(e => {
    let {
      previewing: t
    } = e;
    return {
      previewing: t
    }
  }, Chunk574583.X), t = (0, Chunk470623.AF)(), n = Chunk647438.useCallback(() => {
    exports.getState().setPreviewing(!module), (0, Chunk228392.nE)()
  }, [module, exports]), a = module ? Chunk388032.intl.string(Chunk388032.t.ojM1xJ) : Chunk388032.intl.string(Chunk388032.t.SKNnqq);
  return (0, Chunk951288.jsx)(Chunk28664.u, {
    text: Chunk120356,
    children: (0, Chunk951288.jsx)(Chunk481060.hU, {
      variant: "secondary",
      size: "sm",
      onClick: require,
      icon: module ? Chunk481060.kZF : Chunk481060.tEF,
      "aria-label": Chunk120356
    })
  })
}
let ev = Chunk647438.memo(function(e) {
  let {
    parentChannel: t,
    canCreatePost: n,
    className: a
  } = e, {
    textAreaState: l,
    name: s
  } = (0, Q.xH)(e => {
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
  } = t, d = o > 0, u = (0, g.e7)([D.Z], () => D.Z.getSlowmodeCooldownGuess(t.id, D.S.CreateThread)), m = (0, T.w)(t, D.S.CreateThread), h = eb(t), f = (0, Q.AF)(), x = i.useCallback(() => {
    f.getState().setBodyFocused(false)
  }, [f]), b = i.useMemo(() => "" !== s.trim() && "" !== l.textValue.trim(), [s, l.textValue]);
  return i.useEffect(() => {
    b || f.getState().setPreviewing(false)
  }, [b, f]), (0, r.jsxs)("div", {
    className: a,
    children: [(0, r.jsx)(ey, {
      parentChannel: t
    }), (0, r.jsx)("div", {
      className: el.tagsDivider
    }), (0, r.jsxs)("div", {
      className: el.controlsContainer,
      children: [(0, r.jsxs)("div", {
        className: el.controls,
        children: [(0, r.jsxs)("div", {
          className: el.wrappedControls,
          children: [(0, r.jsx)(y.Z, {
            type: ec,
            textValue: l.textValue,
            className: el.characterCount
          }), d && (0, r.jsx)(ee.Z, {
            rateLimitPerUser: o,
            slowmodeCooldownGuess: u,
            isBypassSlowmode: m,
            leadingIcon: true
          })]
        }), (0, r.jsx)(eh, {
          parentChannel: t
        }), b && (0, r.jsx)(ej, {}), (0, r.jsx)(e_, {
          parentChannel: t,
          disableIfInvalid: true,
          canCreatePost: n,
          disabled: d && !m && u > 0
        })]
      }), (0, r.jsx)(_.Z, {
        type: ec,
        className: el.expressionPicker,
        onClick: x
      }, "expression")]
    }), h && (0, r.jsx)(p.Text, {
      variant: "text-sm/medium",
      color: "text-feedback-critical",
      className: el.requiredError,
      children: ea.intl.string(ea.t.xPfNQi)
    })]
  })
});

function e_(e) {
  let {
    parentChannel: t,
    canCreatePost: n,
    disabled: i,
    disableIfInvalid: a = false
  } = e, l = (0, I.HL)(t), {
    submitting: s,
    name: o,
    formOpen: d
  } = (0, Q.xH)(e => {
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
  }, c.X), u = ep(t), m = !eb(t) && u && o.trim().length > 0;
  return __OVERLAY__ || l ? null : (0, r.jsx)(p.Button, {
    variant: "primary",
    type: "submit",
    size: "sm",
    loading: s,
    disabled: a && !m || i || !n,
    icon: p.kBi,
    text: d ? ea.intl.string(ea.t.pIuQI6) : ea.intl.string(ea.t.TyAuoT)
  })
}

function eC() {
  return Promise.resolve()
}

function ey(e) {
  let {
    parentChannel: t
  } = e, {
    appliedTags: n,
    toggleAppliedTag: a,
    setPopoutOpen: s
  } = (0, Q.xH)(e => {
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
  }, c.X), o = n.size >= en.Cn, h = (0, d.ZP)({
    id: "".concat(t.id, "-post-form-tags-navigator"),
    isEnabled: true,
    wrap: true,
    scrollToStart: eC,
    scrollToEnd: eC,
    orientation: m.hy.HORIZONTAL
  }), {
    containerRef: g,
    containerWidth: f
  } = (0, et.Z)(), x = i.useRef(null), b = i.useRef(null), [j, v] = i.useState(true), _ = (0, K.Vm)(t), [C, y] = i.useState(0);
  return (i.useLayoutEffect(() => {
    var e;
    let t = x.current,
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
  }, [_, j, g, f]), 0 === _.length) ? null : (0, r.jsxs)("div", {
    className: el.tagsContainer,
    ref: g,
    children: [(0, r.jsx)(p.lO_, {
      size: "xs",
      color: "currentColor",
      className: el.tagsIcon
    }), (0, r.jsx)("div", {
      className: el.tagList,
      ref: x,
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
            return (0, r.jsx)("div", eo(es({
              className: el.tagListInner,
              ref: t
            }, i), {
              children: _.map(e => (0, r.jsx)($.Z, {
                ariaLabel: ea.intl.formatToPlainString(ea.t.FSZVIR, {
                  tagName: e.name
                }),
                tag: e,
                onClick: o && !n.has(e.id) ? true : () => a(e.id),
                disabled: !n.has(e.id) && n.size >= en.Cn,
                selected: n.has(e.id),
                size: $.Z.Sizes.SMALL
              }, e.id))
            }))
          }
        })
      })
    }), j && (0, r.jsx)(p.yRy, {
      targetElementRef: b,
      onRequestOpen: () => s(true),
      onRequestClose: () => s(false),
      renderPopout: e => {
        let {
          closePopout: i
        } = e;
        return (0, r.jsx)(Y.Z, {
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
        className: el.tagsButton,
        style: {
          left: C
        },
        children: (0, r.jsx)(p.Button, eo(es({}, e), {
          size: "sm",
          variant: "secondary",
          icon: p.CJ0,
          iconPosition: "end",
          text: ea.intl.string(ea.t.w6T0Yc)
        }))
      })
    }), (0, r.jsx)("div", {
      className: l()(el.tagsButton, el.tagsButtonPlaceholder),
      children: (0, r.jsx)(p.Button, {
        size: "sm",
        variant: "secondary",
        icon: p.CJ0,
        iconPosition: "end",
        text: ea.intl.string(ea.t.w6T0Yc)
      })
    })]
  })
}