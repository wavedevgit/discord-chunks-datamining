/** Chunk was on 46875 **/
/** chunk id: 559351, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => ec
}), require("./896048.js"), require("./733351.js"), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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

function ea(e) {
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
let eo = Chunk355622.oU.CREATE_FORUM_POST;

function ec(e) {
  var t, n;
  let i, s, {
      parentChannel: o,
      isSearchLoading: d,
      numResults: u,
      onChange: m,
      canCreatePost: x,
      inputRef: f
    } = e,
    p = !(0, E.V)(o) && x,
    {
      textAreaState: b,
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
    }, c.x),
    [_, y] = r.useState(null),
    A = r.useContext(H.EH),
    C = r.useCallback(() => {
      A.bumpDispatchPriority()
    }, [A]),
    N = (0, g.bG)([U.A], () => U.A.can(en.xBc.ATTACH_FILES, o)),
    w = (0, g.yK)([G.A], () => G.A.getUploads(o.id, L.C.FirstThreadMessage)),
    R = j && N && p,
    D = (null == o ? true : o.isMediaChannel()) === true,
    F = (t = o, n = f, i = (0, Z.ST)(), s = (0, J.Hv)(t), r.useCallback(() => {
      let {
        formOpen: e,
        setFormOpenFromUserAction: l,
        name: r,
        textAreaState: a,
        hasClickedForm: o
      } = i.getState();
      !e && (setTimeout(() => {
        if ((0, h.vq)(n.current, HTMLTextAreaElement)) {
          var e;
          null == (e = n.current) || e.focus()
        }
      }, 0), (o && r.length > 0 || a.textValue.trim().length > 0 && a.textValue.trim() !== s || G.A.getUploads(t.id, L.C.FirstThreadMessage).length > 0) && l())
    }, [i, t.id, s, n])),
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
      }, c.x), n = (0, Z.ST)(), l = (0, M.N)({
        parentChannel: e
      });
      r.useEffect(() => {
        let {
          setNameError: e,
          setMessageError: t
        } = n.getState();
        e(null), t(null)
      }, [t, n]);
      let i = r.useCallback((t, l, r) => {
        let {
          name: i,
          textAreaState: a
        } = n.getState();
        null == t && (t = a.textValue), t = t.trim();
        let {
          content: s
        } = S.Ay.parse(e, t);
        if (t = s, null == l || 0 === l.length) {
          var o;
          l = null == (o = I.A.getStickerPreview(e.id, eo.drafts.type)) ? true : o.map(e => e.id)
        }
        if ((null == r || 0 === r.length) && (r = G.A.getUploads(e.id, L.C.FirstThreadMessage)), null != r && r.length > 0 && e.isMediaChannel()) {
          let e = r.findIndex(e => true === e.isThumbnail);
          if (e > false) {
            let t = r[e];
            r.splice(e, 1), r.unshift(t)
          }
        }
        let c = 0 === i.length,
          d = (null == t || 0 === t.length) && (null == l || 0 === l.length) && 0 === r.length;
        return {
          content: t,
          stickers: l,
          uploads: r,
          hasNameError: c,
          hasMessageError: d
        }
      }, [e, n]);
      return r.useCallback(async (t, r, a) => {
        let {
          setNameError: s,
          setMessageError: o,
          setSubmitting: c,
          resetFormState: d,
          formOpen: u,
          setFormOpen: m,
          setPreviewing: h,
          setFormOpenFromUserAction: g,
          setGuidelinesOpen: x
        } = n.getState(), f = q.A.hasSeen(e.id);
        if (!u) return (0, X.jr)({
          guildId: e.guild_id,
          channelId: e.id
        }), f || n.getState().setGuidelinesOpen(true), g(), {
          shouldClear: false,
          shouldRefocus: false
        };
        let {
          content: p,
          stickers: b,
          uploads: j,
          hasNameError: v,
          hasMessageError: _
        } = i(t, r, a);
        if (s(v ? (0, K.uW)() : null), o(_ ? (0, K.fo)() : null), v || _) return {
          shouldClear: false,
          shouldRefocus: true
        };
        try {
          c(true);
          let {
            valid: t
          } = await (0, B.i)({
            content: p,
            stickers: b,
            uploads: j,
            type: eo,
            channel: e
          });
          if (!t) return {
            shouldClear: false,
            shouldRefocus: true
          };
          let n = await l(p, b, j);
          return (0, k.JA)(n), W.A.resort(e.id), (0, P.x5)(e.id, eo.drafts.type), d(), m(false), h(false), q.A.markAsSeen(e.id), x(false), {
            shouldClear: true,
            shouldRefocus: false
          }
        } catch (t) {
          var y, A;
          return (null == (y = t.body) ? true : y.code) === en.t02.AUTOMOD_TITLE_BLOCKED ? s((0, K.z0)(t.body, e)) : (null == (A = t.body) ? true : A.code) === en.t02.AUTOMOD_MESSAGE_BLOCKED && o((0, K.z0)(t.body, e)), {
            shouldClear: false,
            shouldRefocus: true
          }
        } finally {
          c(false)
        }
      }, [l, i, e, n])
    }(o);
  return r.useLayoutEffect(m, [j, b, w, m]), (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)("div", {
      "aria-label": p ? er.intl.string(er.t.dq7mAa) : er.intl.string(er.t["5h0QOP"]),
      className: a()(ei.kL, {
        [ei.yZ]: !j
      }),
      onClick: !j && p ? F : true,
      children: (0, l.jsxs)("form", {
        onMouseDown: C,
        onFocus: C,
        onSubmit: e => {
          e.preventDefault(), p && z()
        },
        children: [(0, l.jsxs)("div", {
          className: ei.KJ,
          children: [(0, l.jsx)(ed, {
            parentChannel: o,
            isSearchLoading: d,
            inputRef: f
          }), (0, l.jsxs)("div", {
            className: v ? ei.vJ : ei.Zd,
            children: [(0, l.jsx)(eu, {
              editorRef: _,
              parentChannel: o,
              isSearchLoading: d,
              numResults: u,
              inputRef: f,
              canCreatePost: p
            }), j && (0, l.jsx)(eg, {
              editorRef: _,
              setEditorRef: y,
              parentChannel: o,
              submit: z,
              disabled: !p
            }), v && (0, l.jsx)(ex, {})]
          }), R && (D ? (0, l.jsx)(O.f, {
            parentChannel: o
          }) : (0, l.jsx)(Y.h, {
            channelId: o.id
          }))]
        }), (0, l.jsxs)("div", {
          className: ei.Zd,
          children: [R && D && (0, l.jsx)(T.A, {
            parentChannel: o
          }), j && (0, l.jsx)(ej, {
            className: ei.CN,
            parentChannel: o,
            canCreatePost: p
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
      inputRef: i
    } = e, {
      formOpen: a,
      name: s,
      textAreaState: o,
      hasClickedForm: d,
      submitting: u
    } = (0, Z.kU)(e => {
      let {
        formOpen: t,
        nameError: n,
        name: l,
        previewing: r,
        textAreaState: i,
        hasClickedForm: a,
        submitting: s
      } = e;
      return {
        formOpen: t,
        nameError: n,
        name: l,
        textAreaState: i,
        previewing: r,
        hasClickedForm: a,
        submitting: s
      }
    }, c.x), m = (0, Z.ST)(), h = (0, J.Hv)(t), g = r.useCallback(() => {
      var e;
      m.getState().resetFormState(), b.A.clearDraft(t.id, L.C.ThreadSettings), b.A.clearDraft(t.id, L.C.FirstThreadMessage), j.A.clearAll(t.id, L.C.FirstThreadMessage), m.getState().setFormOpen(false), m.getState().setBodyFocused(false), m.getState().setTitleFocused(false), m.getState().setHasClickedForm(false), m.getState().setPreviewing(false), null == (e = i.current) || e.blur(), (0, X.py)({
        guildId: t.guild_id,
        channelId: t.id
      })
    }, [m, t.id, t.guild_id, i]), x = r.useMemo(() => !a && (s.trim().length > 0 || o.textValue.trim().length > 0 && o.textValue.trim() !== h || G.A.getUploads(t.id, L.C.FirstThreadMessage).length > 0) && d ? (0, l.jsx)(p.R2l, {
      size: "md",
      color: "currentColor",
      className: ei.rD
    }) : (0, l.jsx)(p.BT5, {
      onClear: g,
      hasContent: a,
      isLoading: n || u,
      size: "md"
    }), [n, a, d, s, o.textValue, g, t.id, h, u]);
    return (0, l.jsx)("div", {
      className: ei.VB,
      children: x
    })
  }),
  eu = Chunk64700.memo(function(e) {
    let {
      parentChannel: t,
      inputRef: n,
      canCreatePost: i,
      editorRef: a,
      isSearchLoading: s,
      numResults: d
    } = e, {
      formOpen: u,
      nameError: m,
      name: h,
      textAreaState: f,
      previewing: b
    } = (0, Z.kU)(e => {
      let {
        formOpen: t,
        nameError: n,
        name: l,
        previewing: r,
        textAreaState: i,
        hasClickedForm: a,
        submitting: s
      } = e;
      return {
        formOpen: t,
        nameError: n,
        name: l,
        textAreaState: i,
        previewing: r,
        hasClickedForm: a,
        submitting: s
      }
    }, c.x), j = (0, Z.ST)(), v = null != t.topic && 0 !== t.topic.length, _ = q.A.hasSeen(t.id), y = (0, J.Hv)(t), A = (0, g.bG)([z.default], () => z.default.getCurrentUser());
    o()(null != A, "current user cannot be null"), (0, H.Vo)({
      event: en.jej.FOCUS_COMPOSER_TITLE,
      handler: () => {
        let e = n.current;
        null == e || e.focus(), j.getState().setTitleFocused(true), j.getState().setFormOpen(true), j.getState().setHasClickedForm(true)
      }
    });
    let C = r.useCallback(async e => {
        let n = e.clipboardData.files[0];
        null != n && n.type.startsWith("image/") && (e.preventDefault(), await (0, V.R)([n], t, L.C.FirstThreadMessage, {
          origin: "clipboard"
        }), j.getState().setFormOpenFromUserAction())
      }, [t, j]),
      T = (0, K.vr)(m, {
        content: h
      });
    return (0, l.jsxs)("div", {
      className: ei.gn,
      onPaste: C,
      children: [u && b ? (0, l.jsx)(p.Heading, {
        variant: "heading-md/semibold",
        className: ei.DD,
        children: h
      }) : (0, l.jsxs)(p.BJc, {
        gap: 4,
        children: [(0, l.jsx)(x.d, {
          value: h,
          placeholder: i ? u || f.textValue.length > 0 && f.textValue.trim() !== y ? er.intl.string(er.t.lU4dDS) : er.intl.string(er.t.CjmivA) : er.intl.string(er.t["5h0QOP"]),
          rows: 1,
          maxLength: en.Ign,
          onChange: e => {
            let n = e.target.value,
              l = (0, R.A)(n, false);
            j.getState().setName(l);
            let r = 0 === l.trim().length,
              i = 0 === f.textValue.trim().length,
              a = f.textValue.trim() === y;
            r && (i || a) && j.getState().setHasClickedForm(false), u || W.A.updateForumSearchQuery(t.id, l)
          },
          onFocus: () => {
            j.getState().setTitleFocused(true), j.getState().setBodyFocused(false)
          },
          onBlur: () => {
            j.getState().setTitleFocused(false);
            let e = (0, R.A)(h, true);
            e !== h && (j.getState().setName(e), u || W.A.updateForumSearchQuery(t.id, e))
          },
          onKeyDown: e => {
            "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), u && h.length > 0 ? null == a || a.focus() : i && e.shiftKey ? ((0, X.sB)({
              guildId: t.guild_id,
              channelId: t.id
            }), v && !_ && j.getState().setGuidelinesOpen(true), j.getState().setFormOpenFromUserAction(), h.trim().length > 0 && (j.getState().setBodyFocused(true), null == a || a.focus())) : u || !(h.length > 0) || null != d || s || W.A.updateForumSearchQuery(t.id, h));
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
          className: ei.DD,
          ref: n
        }), null != T ? (0, l.jsx)(p.dzK, {
          error: T
        }) : null]
      }), u ? null : (0, l.jsxs)(p.BJc, {
        direction: "horizontal",
        gap: 8,
        justify: "end",
        fullWidth: false,
        children: [(0, l.jsx)(em, {
          parentChannel: t
        }), (0, l.jsx)(ev, {
          parentChannel: t,
          canCreatePost: i
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
  }, c.x), r = (0, Z.ST)();
  return null != t.topic && 0 !== t.topic.length ? (0, l.jsx)(f.m, {
    text: er.intl.string(er.t["4d4T4l"]),
    children: (0, l.jsx)(p.K0, {
      size: "sm",
      variant: "secondary",
      onClick: () => {
        r.getState().setGuidelinesOpen(!n)
      },
      icon: p.B8Q,
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
      content: i
    } = (0, N.A)(r, {
      hideSimpleEmbedContent: true,
      isInteracting: false,
      formatInline: false,
      allowList: true,
      allowHeading: true,
      previewLinkTarget: true,
      allowLinks: true
    }), s = (0, w.A)({
      message: r,
      channel: t,
      compact: false
    }, i, false);
    return (0, l.jsx)("div", {
      className: a()(ei.SL, ei.ly),
      children: s
    })
  }),
  eg = Chunk64700.memo(function(e) {
    let {
      parentChannel: t,
      submit: n,
      disabled: i = false,
      editorRef: s,
      setEditorRef: d
    } = e, u = (0, g.bG)([z.default], () => z.default.getCurrentUser());
    o()(null != u, "current user cannot be null");
    let {
      messageError: m,
      previewing: h,
      textAreaState: x,
      bodyFocused: f,
      formOpen: b
    } = (0, Z.kU)(e => {
      let {
        messageError: t,
        textAreaState: n,
        previewing: l,
        bodyFocused: r,
        formOpen: i
      } = e;
      return {
        messageError: t,
        textAreaState: n,
        previewing: l,
        bodyFocused: r,
        formOpen: i
      }
    }, c.x), j = (0, Z.ST)();
    r.useEffect(() => () => (0, X._4)({
      guildId: t.guild_id,
      channelId: t.id
    }), [t.guild_id, t.id]);
    let v = r.useCallback(() => {
        j.getState().setBodyFocused(true)
      }, [j]),
      _ = r.useCallback(() => {
        j.getState().setBodyFocused(false)
      }, [j]),
      A = r.useCallback((e, t, n) => {
        let {
          setTextAreaState: l
        } = j.getState();
        l({
          textValue: t,
          richValue: n
        })
      }, [j]),
      C = r.useCallback(e => {
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
      handler: _
    });
    let T = (0, K.vr)(m, {
      content: x.textValue
    });
    return (0, l.jsx)("div", {
      className: ei.IP,
      children: (0, l.jsxs)("div", {
        className: ei.hQ,
        children: [h ? (0, l.jsx)(eh, {
          parentChannel: t,
          textValue: x.textValue
        }) : (0, l.jsx)("div", {
          onClick: v,
          children: (0, l.jsx)(y.Ay, {
            type: eo,
            setEditorRef: d,
            channel: t,
            placeholder: er.intl.string(er.t["8IPnv1"]),
            textValue: x.textValue,
            richValue: x.richValue,
            focused: f,
            className: ei.gM,
            innerClassName: a()(ei.SL, {
              [ei.cr]: null != T
            }),
            onChange: A,
            onSubmit: C,
            promptToUpload: V.R,
            disabled: i,
            onKeyDown: e => {
              ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), b && "Escape" === e.key && !j.getState().submitting && (null == s || s.blur(), j.getState().setFormOpen(false), j.getState().setTitleFocused(false), j.getState().setBodyFocused(false), j.getState().setPreviewing(false))
            },
            autoCompletePosition: "bottom"
          })
        }), (0, l.jsx)(p.dzK, {
          error: T
        })]
      })
    })
  });

function ex() {
  return (0, l.jsx)("div", {
    className: ei.fv,
    children: (0, l.jsx)(p.Text, {
      variant: "text-sm/normal",
      color: "interactive-text-default",
      children: er.intl.string(er.t["WE/cYo"])
    })
  })
}

function ef(e) {
  let {
    textAreaState: t
  } = (0, Z.kU)(e => {
    let {
      textAreaState: t
    } = e;
    return {
      textAreaState: t
    }
  }, c.x), n = (0, g.yK)([G.A], () => G.A.getUploads(e.id, L.C.FirstThreadMessage));
  return r.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n])
}

function ep(e) {
  let t = ef(e),
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
    }, c.x);
  return r.useMemo(() => e.hasFlag(el.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t])
}

function eb() {
  let {
    previewing: e
  } = (0, Z.kU)(e => {
    let {
      previewing: t
    } = e;
    return {
      previewing: t
    }
  }, c.x), t = (0, Z.ST)(), n = r.useCallback(() => {
    t.getState().setPreviewing(!e), (0, X.Q_)()
  }, [e, t]), i = e ? er.intl.string(er.t.ojM1xJ) : er.intl.string(er.t.SKNnqq);
  return (0, l.jsx)(f.m, {
    text: i,
    children: (0, l.jsx)(p.K0, {
      variant: "secondary",
      size: "sm",
      onClick: n,
      icon: e ? p.G3N : p.bMW,
      "aria-label": i
    })
  })
}
let ej = Chunk64700.memo(function(e) {
  let {
    parentChannel: t,
    canCreatePost: n,
    className: i
  } = e, {
    textAreaState: a,
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
  }, c.x), {
    rateLimitPerUser: o
  } = t, d = o > 0, u = (0, g.bG)([F.A], () => F.A.getSlowmodeCooldownGuess(t.id, F.R.CreateThread)), m = (0, C._)(t, F.R.CreateThread), h = ep(t), x = (0, Z.ST)(), f = r.useCallback(() => {
    x.getState().setBodyFocused(false)
  }, [x]), b = r.useMemo(() => "" !== s.trim() && "" !== a.textValue.trim(), [s, a.textValue]);
  return r.useEffect(() => {
    b || x.getState().setPreviewing(false)
  }, [b, x]), (0, l.jsxs)("div", {
    className: i,
    children: [(0, l.jsx)(ey, {
      parentChannel: t
    }), (0, l.jsx)("div", {
      className: ei.XJ
    }), (0, l.jsxs)("div", {
      className: ei.gO,
      children: [(0, l.jsxs)("div", {
        className: ei.ne,
        children: [(0, l.jsxs)("div", {
          className: ei.Kk,
          children: [(0, l.jsx)(A.A, {
            type: eo,
            textValue: a.textValue,
            className: ei.Dq
          }), d && (0, l.jsx)(ee.A, {
            rateLimitPerUser: o,
            slowmodeCooldownGuess: u,
            isBypassSlowmode: m,
            leadingIcon: true
          })]
        }), (0, l.jsx)(em, {
          parentChannel: t
        }), b && (0, l.jsx)(eb, {}), (0, l.jsx)(ev, {
          parentChannel: t,
          disableIfInvalid: true,
          canCreatePost: n,
          disabled: d && !m && u > 0
        })]
      }), (0, l.jsx)(_.A, {
        type: eo,
        className: ei.n1,
        onClick: f,
        channel: t
      }, "expression")]
    }), h && (0, l.jsx)(p.Text, {
      variant: "text-sm/medium",
      color: "text-feedback-critical",
      className: ei.ku,
      children: er.intl.string(er.t.xPfNQi)
    })]
  })
});

function ev(e) {
  let {
    parentChannel: t,
    canCreatePost: n,
    disabled: r,
    disableIfInvalid: i = false
  } = e, a = (0, E.V)(t), {
    submitting: s,
    name: o,
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
  }, c.x), u = ef(t), m = !ep(t) && u && o.trim().length > 0;
  return __OVERLAY__ || a ? null : (0, l.jsx)(p.Button, {
    variant: "primary",
    type: "submit",
    size: "sm",
    loading: s,
    disabled: i && !m || r || !n,
    icon: p.oyn,
    text: d ? er.intl.string(er.t.pIuQI6) : er.intl.string(er.t.TyAuoT)
  })
}

function e_() {
  return Promise.resolve()
}

function ey(e) {
  let {
    parentChannel: t
  } = e, {
    appliedTags: n,
    toggleAppliedTag: i,
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
  }, c.x), o = n.size >= 5, h = (0, d.Ay)({
    id: "".concat(t.id, "-post-form-tags-navigator"),
    isEnabled: true,
    wrap: true,
    scrollToStart: e_,
    scrollToEnd: e_,
    orientation: m.Gl.HORIZONTAL
  }), {
    containerRef: g,
    containerWidth: x
  } = (0, et.A)(), f = r.useRef(null), b = r.useRef(null), [j, v] = r.useState(true), _ = (0, J.OT)(t), [y, A] = r.useState(0);
  return (r.useLayoutEffect(() => {
    var e;
    let t = f.current,
      n = null == t || null == (e = t.children) ? true : e[0],
      l = null == t || null == n || n.clientHeight > t.clientHeight;
    if (l !== j && v(l), l && null != g.current && null != n && null != n.children) {
      let {
        left: e,
        top: t
      } = g.current.getBoundingClientRect(), l = 0;
      for (let r of n.children) {
        let {
          right: n,
          top: i,
          height: a
        } = r.getBoundingClientRect();
        if (i - t > a) break;
        n - e > l && (l = n - e)
      }
      A(l)
    }
  }, [_, j, g, x]), 0 === _.length) ? null : (0, l.jsxs)("div", {
    className: ei.Pc,
    ref: g,
    children: [(0, l.jsx)(p.gqV, {
      size: "xs",
      color: "currentColor",
      className: ei.HZ
    }), (0, l.jsx)("div", {
      className: ei.kU,
      ref: f,
      children: (0, l.jsx)(u.hD, {
        navigator: h,
        children: (0, l.jsx)(u.PR, {
          children: e => {
            let {
              ref: t
            } = e, r = function(e, t) {
              if (null == e) return {};
              var n, l, r, i = {};
              if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
                return i
              }
              if (i = function(e, t) {
                  if (null == e) return {};
                  var n, l, r = {},
                    i = Object.getOwnPropertyNames(e);
                  for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                  return r
                }(e, t), Object.getOwnPropertySymbols)
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
              return i
            }(e, ["ref"]);
            return (0, l.jsx)("div", es(ea({
              className: ei.j5,
              ref: t
            }, r), {
              children: _.map(e => (0, l.jsx)($.A, {
                ariaLabel: er.intl.formatToPlainString(er.t.FSZVIR, {
                  tagName: e.name
                }),
                tag: e,
                onClick: o && !n.has(e.id) ? true : () => i(e.id),
                disabled: !n.has(e.id) && n.size >= 5,
                selected: n.has(e.id),
                size: $.A.Sizes.SMALL
              }, e.id))
            }))
          }
        })
      })
    }), j && (0, l.jsx)(p.YNO, {
      targetElementRef: b,
      onRequestOpen: () => s(true),
      onRequestClose: () => s(false),
      renderPopout: e => {
        let {
          closePopout: r
        } = e;
        return (0, l.jsx)(Q.A, {
          parentChannel: t,
          appliedTags: n,
          maxTagsApplied: o,
          onSelectTag: i,
          onClose: r
        })
      },
      position: "bottom",
      align: "center",
      children: e => (0, l.jsx)("div", {
        ref: b,
        className: ei.Wk,
        style: {
          left: y
        },
        children: (0, l.jsx)(p.Button, es(ea({}, e), {
          size: "sm",
          variant: "secondary",
          icon: p.abt,
          iconPosition: "end",
          text: er.intl.string(er.t.w6T0Yc)
        }))
      })
    }), (0, l.jsx)("div", {
      className: a()(ei.Wk, ei.Dz),
      children: (0, l.jsx)(p.Button, {
        size: "sm",
        variant: "secondary",
        icon: p.abt,
        iconPosition: "end",
        text: er.intl.string(er.t.w6T0Yc)
      })
    })]
  })
}