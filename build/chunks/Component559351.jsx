/** Chunk was on 46875 **/
/** chunk id: 559351, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => eo
}), require("./896048.js"), require("./733351.js"), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk942381 = require("./942381.js"),
  Chunk884362 = require("./884362.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk741918 = require("./741918.js"),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk189812 = require("./189812.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk465532 = require("./465532.js"),
  Chunk608299 = require("./608299.js"),
  Chunk355622 = require("./355622.js"),
  Chunk530134 = require("./530134.jsx"),
  Chunk133343 = require("./133343.jsx"),
  Chunk257108 = require("./257108.jsx"),
  Chunk960850 = require("./960850.js"),
  Chunk255370 = require("./255370.jsx"),
  Chunk969488 = require("./969488.jsx"),
  Chunk451909 = require("./451909.js"),
  Chunk538355 = require("./538355.jsx"),
  Chunk91624 = require("./91624.jsx"),
  Chunk715757 = require("./715757.js"),
  Chunk931664 = require("./931664.js"),
  Chunk631576 = require("./631576.js"),
  Chunk474078 = require("./474078.js"),
  Chunk747926 = require("./747926.js"),
  Chunk55294 = require("./55294.js"),
  Chunk383233 = require("./383233.js"),
  Chunk31717 = require("./31717.js"),
  Chunk576705 = require("./576705.js"),
  Chunk101392 = require("./101392.js"),
  Chunk522602 = require("./522602.js"),
  Chunk287809 = require("./287809.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk460350 = require("./460350.js"),
  Chunk518960 = require("./518960.js"),
  Chunk265463 = require("./265463.js"),
  Chunk919577 = require("./919577.js"),
  Chunk774812 = require("./774812.js"),
  Chunk435470 = require("./435470.js"),
  Chunk853742 = require("./853742.js"),
  Chunk337337 = require("./337337.jsx"),
  Chunk302487 = require("./302487.jsx"),
  Chunk218152 = require("./218152.jsx"),
  Chunk376310 = require("./376310.jsx"),
  Chunk452778 = require("./452778.jsx"),
  Chunk337666 = require("./337666.js");
require("./253913.js");
var Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641243 = require("./641243.js");

function ei(e) {
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

function es(e, t) {
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
let ec = Chunk355622.oU.CREATE_FORUM_POST;

function eo(e) {
  var t, n;
  let a, s, {
      parentChannel: c,
      isSearchLoading: d,
      numResults: u,
      onChange: m,
      canCreatePost: g,
      inputRef: x
    } = e,
    b = !(0, w.V)(c) && g,
    {
      textAreaState: p,
      formOpen: j,
      previewing: v
    } = (0, Z.kU)(e => {
      let {
        textAreaState: t,
        formOpen: n,
        previewing: l
      } = e;
      return {
        textAreaState: t,
        formOpen: n,
        previewing: l
      }
    }, o.x),
    [y, A] = r.useState(null),
    C = r.useContext(H.EH),
    O = r.useCallback(() => {
      C.bumpDispatchPriority()
    }, [C]),
    _ = (0, f.bG)([U.A], () => U.A.can(en.xBc.ATTACH_FILES, c)),
    E = (0, f.yK)([G.A], () => G.A.getUploads(c.id, L.C.FirstThreadMessage)),
    P = j && _ && b,
    D = (null == c ? true : c.isMediaChannel()) === true,
    F = (t = c, n = x, a = (0, Z.ST)(), s = (0, J.Hv)(t), r.useCallback(() => {
      let {
        formOpen: e,
        setFormOpenFromUserAction: l,
        name: r,
        textAreaState: i,
        hasClickedForm: c
      } = a.getState();
      !e && (setTimeout(() => {
        if ((0, h.vq)(n.current, HTMLTextAreaElement)) {
          var e;
          null == (e = n.current) || e.focus()
        }
      }, 0), (c && r.length > 0 || i.textValue.trim().length > 0 && i.textValue.trim() !== s || G.A.getUploads(t.id, L.C.FirstThreadMessage).length > 0) && l())
    }, [a, t.id, s, n])),
    z = function(e) {
      let {
        formOpen: t
      } = (0, Z.kU)(e => {
        let {
          formOpen: t
        } = e;
        return {
          formOpen: t
        }
      }, o.x), n = (0, Z.ST)(), l = (0, M.N)({
        parentChannel: e
      });
      r.useEffect(() => {
        let {
          setNameError: e,
          setMessageError: t
        } = n.getState();
        e(null), t(null)
      }, [t, n]);
      let a = r.useCallback((t, l, r) => {
        let {
          name: a,
          textAreaState: i
        } = n.getState();
        null == t && (t = i.textValue), t = t.trim();
        let {
          content: s
        } = T.Ay.parse(e, t);
        if (t = s, null == l || 0 === l.length) {
          var c;
          l = null == (c = R.A.getStickerPreview(e.id, ec.drafts.type)) ? true : c.map(e => e.id)
        }
        if ((null == r || 0 === r.length) && (r = G.A.getUploads(e.id, L.C.FirstThreadMessage)), null != r && r.length > 0 && e.isMediaChannel()) {
          let e = r.findIndex(e => true === e.isThumbnail);
          if (e > false) {
            let t = r[e];
            r.splice(e, 1), r.unshift(t)
          }
        }
        let o = 0 === a.length,
          d = (null == t || 0 === t.length) && (null == l || 0 === l.length) && 0 === r.length;
        return {
          content: t,
          stickers: l,
          uploads: r,
          hasNameError: o,
          hasMessageError: d
        }
      }, [e, n]);
      return r.useCallback(async (t, r, i) => {
        let {
          setNameError: s,
          setMessageError: c,
          setSubmitting: o,
          resetFormState: d,
          formOpen: u,
          setFormOpen: m,
          setPreviewing: h,
          setFormOpenFromUserAction: f,
          setGuidelinesOpen: g
        } = n.getState(), x = q.A.hasSeen(e.id);
        if (!u) return (0, X.jr)({
          guildId: e.guild_id,
          channelId: e.id
        }), x || n.getState().setGuidelinesOpen(true), f(), {
          shouldClear: false,
          shouldRefocus: false
        };
        let {
          content: b,
          stickers: p,
          uploads: j,
          hasNameError: v,
          hasMessageError: y
        } = a(t, r, i);
        if (s(v ? (0, K.uW)() : null), c(y ? (0, K.fo)() : null), v || y) return {
          shouldClear: false,
          shouldRefocus: true
        };
        try {
          o(true);
          let {
            valid: t
          } = await (0, V.i)({
            content: b,
            stickers: p,
            uploads: j,
            type: ec,
            channel: e
          });
          if (!t) return {
            shouldClear: false,
            shouldRefocus: true
          };
          let n = await l(b, p, j);
          return (0, I.JA)(n), W.A.resort(e.id), (0, k.x5)(e.id, ec.drafts.type), d(), m(false), h(false), q.A.markAsSeen(e.id), g(false), {
            shouldClear: true,
            shouldRefocus: false
          }
        } catch (t) {
          var A, C;
          return (null == (A = t.body) ? true : A.code) === en.t02.AUTOMOD_TITLE_BLOCKED ? s((0, K.z0)(t.body, e)) : (null == (C = t.body) ? true : C.code) === en.t02.AUTOMOD_MESSAGE_BLOCKED && c((0, K.z0)(t.body, e)), {
            shouldClear: false,
            shouldRefocus: true
          }
        } finally {
          o(false)
        }
      }, [l, a, e, n])
    }(c);
  return r.useLayoutEffect(m, [j, p, E, m]), (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)("div", {
      "aria-label": b ? er.intl.string(er.t.dq7mAa) : er.intl.string(er.t["5h0QOP"]),
      className: i()(ea.kL, {
        [ea.yZ]: !j
      }),
      onClick: !j && b ? F : true,
      children: (0, l.jsxs)("form", {
        onMouseDown: O,
        onFocus: O,
        onSubmit: e => {
          e.preventDefault(), b && z()
        },
        children: [(0, l.jsxs)("div", {
          className: ea.KJ,
          children: [(0, l.jsx)(ed, {
            parentChannel: c,
            isSearchLoading: d,
            inputRef: x
          }), (0, l.jsxs)("div", {
            className: v ? ea.vJ : ea.Zd,
            children: [(0, l.jsx)(eu, {
              editorRef: y,
              parentChannel: c,
              isSearchLoading: d,
              numResults: u,
              inputRef: x,
              canCreatePost: b
            }), j && (0, l.jsx)(ef, {
              editorRef: y,
              setEditorRef: A,
              parentChannel: c,
              submit: z,
              disabled: !b
            }), v && (0, l.jsx)(eg, {})]
          }), P && (D ? (0, l.jsx)(S.f, {
            parentChannel: c
          }) : (0, l.jsx)(Y.h, {
            channelId: c.id
          }))]
        }), (0, l.jsxs)("div", {
          className: ea.Zd,
          children: [P && D && (0, l.jsx)(N.A, {
            parentChannel: c
          }), j && (0, l.jsx)(ej, {
            className: ea.CN,
            parentChannel: c,
            canCreatePost: b
          })]
        })]
      })
    })
  })
}
let ed = Chunk64700.memo(function(e) {
    let {
      parentChannel: t,
      isSearchLoading: n,
      inputRef: a
    } = e, {
      formOpen: i,
      name: s,
      textAreaState: c,
      hasClickedForm: d,
      submitting: u
    } = (0, Z.kU)(e => {
      let {
        formOpen: t,
        nameError: n,
        name: l,
        previewing: r,
        textAreaState: a,
        hasClickedForm: i,
        submitting: s
      } = e;
      return {
        formOpen: t,
        nameError: n,
        name: l,
        textAreaState: a,
        previewing: r,
        hasClickedForm: i,
        submitting: s
      }
    }, o.x), m = (0, Z.ST)(), h = (0, J.Hv)(t), f = r.useCallback(() => {
      var e;
      m.getState().resetFormState(), p.A.clearDraft(t.id, L.C.ThreadSettings), p.A.clearDraft(t.id, L.C.FirstThreadMessage), j.A.clearAll(t.id, L.C.FirstThreadMessage), m.getState().setFormOpen(false), m.getState().setBodyFocused(false), m.getState().setTitleFocused(false), m.getState().setHasClickedForm(false), m.getState().setPreviewing(false), null == (e = a.current) || e.blur(), (0, X.py)({
        guildId: t.guild_id,
        channelId: t.id
      })
    }, [m, t.id, t.guild_id, a]), g = r.useMemo(() => !i && (s.trim().length > 0 || c.textValue.trim().length > 0 && c.textValue.trim() !== h || G.A.getUploads(t.id, L.C.FirstThreadMessage).length > 0) && d ? (0, l.jsx)(b.R2l, {
      size: "md",
      color: "currentColor",
      className: ea.rD
    }) : (0, l.jsx)(b.BT5, {
      onClear: f,
      hasContent: i,
      isLoading: n || u,
      size: "md"
    }), [n, i, d, s, c.textValue, f, t.id, h, u]);
    return (0, l.jsx)("div", {
      className: ea.VB,
      children: g
    })
  }),
  eu = Chunk64700.memo(function(e) {
    let {
      parentChannel: t,
      inputRef: n,
      canCreatePost: a,
      editorRef: i,
      isSearchLoading: s,
      numResults: d
    } = e, {
      formOpen: u,
      nameError: m,
      name: h,
      textAreaState: x,
      previewing: p
    } = (0, Z.kU)(e => {
      let {
        formOpen: t,
        nameError: n,
        name: l,
        previewing: r,
        textAreaState: a,
        hasClickedForm: i,
        submitting: s
      } = e;
      return {
        formOpen: t,
        nameError: n,
        name: l,
        textAreaState: a,
        previewing: r,
        hasClickedForm: i,
        submitting: s
      }
    }, o.x), j = (0, Z.ST)(), v = null != t.topic && 0 !== t.topic.length, y = q.A.hasSeen(t.id), A = (0, J.Hv)(t), C = (0, f.bG)([z.default], () => z.default.getCurrentUser());
    c()(null != C, "current user cannot be null"), (0, H.Vo)({
      event: en.jej.FOCUS_COMPOSER_TITLE,
      handler: () => {
        let e = n.current;
        null == e || e.focus(), j.getState().setTitleFocused(true), j.getState().setFormOpen(true), j.getState().setHasClickedForm(true)
      }
    });
    let O = r.useCallback(async e => {
        let n = e.clipboardData.files[0];
        null != n && n.type.startsWith("image/") && (e.preventDefault(), await (0, B.R)([n], t, L.C.FirstThreadMessage, {
          origin: "clipboard"
        }), j.getState().setFormOpenFromUserAction())
      }, [t, j]),
      N = (0, K.vr)(m, {
        content: h
      });
    return (0, l.jsxs)("div", {
      className: ea.gn,
      onPaste: O,
      children: [u && p ? (0, l.jsx)(b.Heading, {
        variant: "heading-md/semibold",
        className: ea.DD,
        children: h
      }) : (0, l.jsxs)(b.BJc, {
        gap: 4,
        children: [(0, l.jsx)(g.d, {
          value: h,
          placeholder: a ? u || x.textValue.length > 0 && x.textValue.trim() !== A ? er.intl.string(er.t.lU4dDS) : er.intl.string(er.t.CjmivA) : er.intl.string(er.t["5h0QOP"]),
          rows: 1,
          maxLength: en.Ign,
          onChange: e => {
            let n = e.target.value,
              l = (0, P.A)(n, false);
            j.getState().setName(l);
            let r = 0 === l.trim().length,
              a = 0 === x.textValue.trim().length,
              i = x.textValue.trim() === A;
            r && (a || i) && j.getState().setHasClickedForm(false), u || W.A.updateForumSearchQuery(t.id, l)
          },
          onFocus: () => {
            j.getState().setTitleFocused(true), j.getState().setBodyFocused(false)
          },
          onBlur: () => {
            j.getState().setTitleFocused(false);
            let e = (0, P.A)(h, true);
            e !== h && (j.getState().setName(e), u || W.A.updateForumSearchQuery(t.id, e))
          },
          onKeyDown: e => {
            "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), u && h.length > 0 ? null == i || i.focus() : a && e.shiftKey ? ((0, X.sB)({
              guildId: t.guild_id,
              channelId: t.id
            }), v && !y && j.getState().setGuidelinesOpen(true), j.getState().setFormOpenFromUserAction(), h.trim().length > 0 && (j.getState().setBodyFocused(true), null == i || i.focus())) : u || !(h.length > 0) || null != d || s || W.A.updateForumSearchQuery(t.id, h));
            let l = n.current;
            if ("Home" === e.key || "End" === e.key) {
              if (null == l) return;
              if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) {
                let t = e.shiftKey ? Math.max(l.selectionStart, l.selectionEnd) : 0;
                l.setSelectionRange(0, t, "backward")
              } else {
                let t = e.shiftKey ? Math.min(l.selectionStart, l.selectionEnd) : h.length,
                  n = h.length;
                l.setSelectionRange(t, n, "forward")
              }
            }
            if ("Escape" === e.key && !j.getState().submitting) {
              var r;
              null == (r = n.current) || r.blur(), j.getState().setFormOpen(false), j.getState().setTitleFocused(false), j.getState().setBodyFocused(false), j.getState().setPreviewing(false)
            }
          },
          className: ea.DD,
          ref: n
        }), null != N ? (0, l.jsx)(b.dzK, {
          error: N
        }) : null]
      }), u ? null : (0, l.jsxs)(b.BJc, {
        direction: "horizontal",
        gap: 8,
        justify: "end",
        fullWidth: false,
        children: [(0, l.jsx)(em, {
          parentChannel: t
        }), (0, l.jsx)(ev, {
          parentChannel: t,
          canCreatePost: a
        })]
      })]
    })
  });

function em(e) {
  let {
    parentChannel: t
  } = e, {
    guidelinesOpen: n
  } = (0, Z.kU)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }, o.x), r = (0, Z.ST)();
  return null != t.topic && 0 !== t.topic.length ? (0, l.jsx)(x.m, {
    text: er.intl.string(er.t["4d4T4l"]),
    children: (0, l.jsx)(b.K0, {
      size: "sm",
      variant: "secondary",
      onClick: () => {
        r.getState().setGuidelinesOpen(!n)
      },
      icon: b.B8Q,
      "aria-label": er.intl.string(er.t["4d4T4l"])
    })
  }) : null
}
let eh = Chunk64700.memo(function(e) {
    let {
      parentChannel: t,
      textValue: n
    } = e, r = new D.Ay({
      channel_id: t.id,
      content: n
    }), {
      content: a
    } = (0, _.A)(r, {
      hideSimpleEmbedContent: true,
      isInteracting: false,
      formatInline: false,
      allowList: true,
      allowHeading: true,
      previewLinkTarget: true,
      allowLinks: true
    }), s = (0, E.A)({
      message: r,
      channel: t,
      compact: false
    }, a, false);
    return (0, l.jsx)("div", {
      className: i()(ea.SL, ea.ly),
      children: s
    })
  }),
  ef = Chunk64700.memo(function(e) {
    let {
      parentChannel: t,
      submit: n,
      disabled: a = false,
      editorRef: s,
      setEditorRef: d
    } = e, u = (0, f.bG)([z.default], () => z.default.getCurrentUser());
    c()(null != u, "current user cannot be null");
    let {
      messageError: m,
      previewing: h,
      textAreaState: g,
      bodyFocused: x,
      formOpen: p
    } = (0, Z.kU)(e => {
      let {
        messageError: t,
        textAreaState: n,
        previewing: l,
        bodyFocused: r,
        formOpen: a
      } = e;
      return {
        messageError: t,
        textAreaState: n,
        previewing: l,
        bodyFocused: r,
        formOpen: a
      }
    }, o.x), j = (0, Z.ST)();
    r.useEffect(() => () => (0, X._4)({
      guildId: t.guild_id,
      channelId: t.id
    }), [t.guild_id, t.id]);
    let v = r.useCallback(() => {
        j.getState().setBodyFocused(true)
      }, [j]),
      y = r.useCallback(() => {
        j.getState().setBodyFocused(false)
      }, [j]),
      C = r.useCallback((e, t, n) => {
        let {
          setTextAreaState: l
        } = j.getState();
        l({
          textValue: t,
          richValue: n
        })
      }, [j]),
      O = r.useCallback(e => {
        let {
          value: t,
          uploads: l,
          stickers: r
        } = e;
        return n(t, r, l)
      }, [n]);
    (0, H.Vo)({
      event: en.jej.TEXTAREA_FOCUS,
      handler: v
    }), (0, H.Vo)({
      event: en.jej.TEXTAREA_BLUR,
      handler: y
    });
    let N = (0, K.vr)(m, {
      content: g.textValue
    });
    return (0, l.jsx)("div", {
      className: ea.IP,
      children: (0, l.jsxs)("div", {
        className: ea.hQ,
        children: [h ? (0, l.jsx)(eh, {
          parentChannel: t,
          textValue: g.textValue
        }) : (0, l.jsx)("div", {
          onClick: v,
          children: (0, l.jsx)(A.Ay, {
            type: ec,
            setEditorRef: d,
            channel: t,
            placeholder: er.intl.string(er.t["8IPnv1"]),
            textValue: g.textValue,
            richValue: g.richValue,
            focused: x,
            className: ea.gM,
            innerClassName: i()(ea.SL, {
              [ea.cr]: null != N
            }),
            onChange: C,
            onSubmit: O,
            promptToUpload: B.R,
            disabled: a,
            onKeyDown: e => {
              ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), p && "Escape" === e.key && !j.getState().submitting && (null == s || s.blur(), j.getState().setFormOpen(false), j.getState().setTitleFocused(false), j.getState().setBodyFocused(false), j.getState().setPreviewing(false))
            },
            autoCompletePosition: "bottom"
          })
        }), (0, l.jsx)(b.dzK, {
          error: N
        })]
      })
    })
  });

function eg() {
  return (0, l.jsx)("div", {
    className: ea.fv,
    children: (0, l.jsx)(b.Text, {
      variant: "text-sm/normal",
      color: "interactive-text-default",
      children: er.intl.string(er.t["WE/cYo"])
    })
  })
}

function ex(e) {
  let {
    textAreaState: t
  } = (0, Z.kU)(e => {
    let {
      textAreaState: t
    } = e;
    return {
      textAreaState: t
    }
  }, o.x), n = (0, f.yK)([G.A], () => G.A.getUploads(e.id, L.C.FirstThreadMessage));
  return r.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n])
}

function eb(e) {
  let t = ex(e),
    {
      appliedTags: n,
      name: l
    } = (0, Z.kU)(e => {
      let {
        appliedTags: t,
        name: n
      } = e;
      return {
        appliedTags: t,
        name: n
      }
    }, o.x);
  return r.useMemo(() => e.hasFlag(el.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t])
}

function ep() {
  let {
    previewing: e
  } = (0, Z.kU)(e => {
    let {
      previewing: t
    } = e;
    return {
      previewing: t
    }
  }, o.x), t = (0, Z.ST)(), n = r.useCallback(() => {
    t.getState().setPreviewing(!e), (0, X.Q_)()
  }, [e, t]), a = e ? er.intl.string(er.t.ojM1xJ) : er.intl.string(er.t.SKNnqq);
  return (0, l.jsx)(x.m, {
    text: a,
    children: (0, l.jsx)(b.K0, {
      variant: "secondary",
      size: "sm",
      onClick: n,
      icon: e ? b.G3N : b.bMW,
      "aria-label": a
    })
  })
}
let ej = Chunk64700.memo(function(e) {
  let {
    parentChannel: t,
    canCreatePost: n,
    className: a
  } = e, {
    textAreaState: i,
    name: s
  } = (0, Z.kU)(e => {
    let {
      textAreaState: t,
      name: n
    } = e;
    return {
      textAreaState: t,
      name: n
    }
  }, o.x), {
    rateLimitPerUser: c
  } = t, d = c > 0, u = (0, f.bG)([F.A], () => F.A.getSlowmodeCooldownGuess(t.id, F.R.CreateThread)), m = (0, O._)(t, F.R.CreateThread), h = eb(t), g = (0, Z.ST)(), x = r.useCallback(() => {
    g.getState().setBodyFocused(false)
  }, [g]), p = r.useMemo(() => "" !== s.trim() && "" !== i.textValue.trim(), [s, i.textValue]);
  return r.useEffect(() => {
    p || g.getState().setPreviewing(false)
  }, [p, g]), (0, l.jsxs)("div", {
    className: a,
    children: [(0, l.jsx)(eA, {
      parentChannel: t
    }), (0, l.jsx)("div", {
      className: ea.XJ
    }), (0, l.jsxs)("div", {
      className: ea.gO,
      children: [(0, l.jsxs)("div", {
        className: ea.ne,
        children: [(0, l.jsxs)("div", {
          className: ea.Kk,
          children: [(0, l.jsx)(C.A, {
            type: ec,
            textValue: i.textValue,
            className: ea.Dq
          }), d && (0, l.jsx)(ee.A, {
            rateLimitPerUser: c,
            slowmodeCooldownGuess: u,
            isBypassSlowmode: m,
            leadingIcon: true
          })]
        }), (0, l.jsx)(em, {
          parentChannel: t
        }), p && (0, l.jsx)(ep, {}), (0, l.jsx)(ev, {
          parentChannel: t,
          disableIfInvalid: true,
          canCreatePost: n,
          disabled: d && !m && u > 0
        })]
      }), (0, l.jsx)(y.A, {
        type: ec,
        className: ea.n1,
        onClick: x,
        channel: t
      }, "expression")]
    }), h && (0, l.jsx)(b.Text, {
      variant: "text-sm/medium",
      color: "text-feedback-critical",
      className: ea.ku,
      children: er.intl.string(er.t.xPfNQi)
    })]
  })
});

function ev(e) {
  let {
    parentChannel: t,
    canCreatePost: n,
    disabled: r,
    disableIfInvalid: a = false
  } = e, i = (0, w.V)(t), {
    submitting: s,
    name: c,
    formOpen: d
  } = (0, Z.kU)(e => {
    let {
      submitting: t,
      name: n,
      formOpen: l
    } = e;
    return {
      submitting: t,
      name: n,
      formOpen: l
    }
  }, o.x), u = ex(t), m = !eb(t) && u && c.trim().length > 0;
  return __OVERLAY__ || i ? null : (0, l.jsx)(b.Button, {
    variant: "primary",
    type: "submit",
    size: "sm",
    loading: s,
    disabled: a && !m || r || !n,
    icon: b.oyn,
    text: d ? er.intl.string(er.t.pIuQI6) : er.intl.string(er.t.TyAuoT)
  })
}

function ey() {
  return Promise.resolve()
}

function eA(e) {
  let {
    parentChannel: t
  } = e, {
    appliedTags: n,
    toggleAppliedTag: a,
    setPopoutOpen: s
  } = (0, Z.kU)(e => {
    let {
      appliedTags: t,
      toggleAppliedTag: n,
      setPopoutOpen: l
    } = e;
    return {
      appliedTags: t,
      toggleAppliedTag: n,
      setPopoutOpen: l
    }
  }, o.x), c = n.size >= 5, h = (0, d.Ay)({
    id: "".concat(t.id, "-post-form-tags-navigator"),
    isEnabled: true,
    wrap: true,
    scrollToStart: ey,
    scrollToEnd: ey,
    orientation: m.Gl.HORIZONTAL
  }), {
    containerRef: f,
    containerWidth: g
  } = (0, et.A)(), x = r.useRef(null), p = r.useRef(null), [j, v] = r.useState(true), y = (0, J.OT)(t), [A, C] = r.useState(0);
  return (r.useLayoutEffect(() => {
    var e;
    let t = x.current,
      n = null == t || null == (e = t.children) ? true : e[0],
      l = null == t || null == n || n.clientHeight > t.clientHeight;
    if (l !== j && v(l), l && null != f.current && null != n && null != n.children) {
      let {
        left: e,
        top: t
      } = f.current.getBoundingClientRect(), l = 0;
      for (let r of n.children) {
        let {
          right: n,
          top: a,
          height: i
        } = r.getBoundingClientRect();
        if (a - t > i) break;
        n - e > l && (l = n - e)
      }
      C(l)
    }
  }, [y, j, f, g]), 0 === y.length) ? null : (0, l.jsxs)("div", {
    className: ea.Pc,
    ref: f,
    children: [(0, l.jsx)(b.gqV, {
      size: "xs",
      color: "currentColor",
      className: ea.HZ
    }), (0, l.jsx)("div", {
      className: ea.kU,
      ref: x,
      children: (0, l.jsx)(u.hD, {
        navigator: h,
        children: (0, l.jsx)(u.PR, {
          children: e => {
            let {
              ref: t
            } = e, r = function(e, t) {
              if (null == e) return {};
              var n, l, r, a = {};
              if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
                return a
              }
              if (a = function(e, t) {
                  if (null == e) return {};
                  var n, l, r = {},
                    a = Object.getOwnPropertyNames(e);
                  for (l = 0; l < a.length; l++) n = a[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                  return r
                }(e, t), Object.getOwnPropertySymbols)
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
              return a
            }(e, ["ref"]);
            return (0, l.jsx)("div", es(ei({
              className: ea.j5,
              ref: t
            }, r), {
              children: y.map(e => (0, l.jsx)($.A, {
                ariaLabel: er.intl.formatToPlainString(er.t.FSZVIR, {
                  tagName: e.name
                }),
                tag: e,
                onClick: c && !n.has(e.id) ? true : () => a(e.id),
                disabled: !n.has(e.id) && n.size >= 5,
                selected: n.has(e.id),
                size: $.A.Sizes.SMALL
              }, e.id))
            }))
          }
        })
      })
    }), j && (0, l.jsx)(b.YNO, {
      targetElementRef: p,
      onRequestOpen: () => s(true),
      onRequestClose: () => s(false),
      renderPopout: e => {
        let {
          closePopout: r
        } = e;
        return (0, l.jsx)(Q.A, {
          parentChannel: t,
          appliedTags: n,
          maxTagsApplied: c,
          onSelectTag: a,
          onClose: r
        })
      },
      position: "bottom",
      align: "center",
      children: e => (0, l.jsx)("div", {
        ref: p,
        className: ea.Wk,
        style: {
          left: A
        },
        children: (0, l.jsx)(b.Button, es(ei({}, e), {
          size: "sm",
          variant: "secondary",
          icon: b.abt,
          iconPosition: "end",
          text: er.intl.string(er.t.w6T0Yc)
        }))
      })
    }), (0, l.jsx)("div", {
      className: i()(ea.Wk, ea.Dz),
      children: (0, l.jsx)(b.Button, {
        size: "sm",
        variant: "secondary",
        icon: b.abt,
        iconPosition: "end",
        text: er.intl.string(er.t.w6T0Yc)
      })
    })]
  })
}