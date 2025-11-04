/** Chunk was on 91053 **/
/** chunk id: 657218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => K
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430742 = require("./430742.js"),
  Chunk144144 = require("./144144.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk738619 = require("./738619.jsx"),
  Chunk561472 = require("./561472.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk303628 = require("./303628.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk967128 = require("./967128.jsx"),
  Chunk665149 = require("./665149.jsx"),
  Chunk294218 = require("./294218.jsx"),
  Chunk913663 = require("./913663.js"),
  Chunk268350 = require("./268350.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk117530 = require("./117530.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk838440 = require("./838440.js"),
  Chunk127654 = require("./127654.js"),
  Chunk241309 = require("./241309.js"),
  Chunk928477 = require("./928477.js"),
  Chunk543855 = require("./543855.js"),
  Chunk488131 = require("./488131.js"),
  Chunk842332 = require("./842332.jsx"),
  Chunk602034 = require("./602034.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk757212 = require("./757212.js"),
  Chunk149623 = require("./149623.js");

function Y(e) {
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
let q = Chunk541716.Ie.THREAD_CREATION;

function K(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: i
  } = e, l = (0, s.e7)([P.Z], () => P.Z.getChannel(t)), {
    analyticsLocations: a
  } = (0, b.ZP)(m.Z.CREATE_THREAD);
  return null == l ? null : (0, r.jsx)(b.Gt, {
    value: a,
    children: (0, r.jsx)(A.I3, {
      children: (0, r.jsxs)("section", {
        "aria-label": V.intl.string(V.t.rBIGBL),
        className: z.container,
        children: [(0, r.jsx)(f.Z, {
          channel: l,
          draftType: T.d.FirstThreadMessage
        }), (0, r.jsx)(Q, {
          parentChannelId: t
        }), (0, r.jsx)(X, {
          parentChannel: l,
          parentMessageId: n,
          location: i
        })]
      })
    })
  })
}

function Q(e) {
  let {
    parentChannelId: t
  } = e, n = i.useCallback(() => {
    let e = T.Z.getThreadSettings(t),
      n = T.Z.getDraft(t, T.d.FirstThreadMessage).trim(),
      r = w.Z.getUploads(t, T.d.FirstThreadMessage);
    if ((null == e ? true : e.name) != null && (null == e ? true : e.name) !== "" || 0 !== n.length || 0 !== r.length) return void h.Z.show({
      title: V.intl.string(V.t["6kDZh1"]),
      body: V.intl.string(V.t.NgS9jX),
      confirmColor: o.Tt.RED,
      confirmText: V.intl.string(V.t["7WGI4H"]),
      confirmVariant: "critical-primary",
      cancelText: V.intl.string(V.t["olcKd/"]),
      onConfirm: () => {
        (0, G.NK)(t)
      }
    });
    (0, G.NK)(t)
  }, [t]);
  return (0, r.jsxs)(C.ZP, {
    toolbar: (0, r.jsx)(C.ZP.Icon, {
      icon: c.Dio,
      tooltip: V.intl.string(V.t.cpT0Cq),
      onClick: n
    }),
    children: [(0, r.jsx)(C.ZP.Icon, {
      icon: c.or_,
      disabled: true,
      "aria-label": V.intl.string(V.t["7Xm5QI"])
    }), (0, r.jsx)(C.ZP.Title, {
      children: V.intl.string(V.t["4WNcpu"])
    })]
  })
}

function X(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    location: l
  } = e, o = (0, s.e7)([g.Z], () => g.Z.messageGroupSpacing), u = function() {
    let e = i.useContext(A.oo);
    return i.useCallback(() => {
      e.bumpDispatchPriority()
    }, [e])
  }(), {
    threadSettings: h,
    setThreadSettings: f,
    updateThreadSettings: m
  } = function(e, t) {
    let n = (0, s.e7)([T.Z], () => {
        var t;
        return null != (t = T.Z.getThreadSettings(e.id)) ? t : {}
      }, [e.id]),
      [r, l] = i.useState(n),
      a = i.useCallback(n => {
        var r, i;
        l(e => Y({}, e, n)), d.Z.changeThreadSettings(e.id, (r = Y({}, n), i = i = {
          parentMessageId: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
        }), r))
      }, [e.id, t]);
    return {
      threadSettings: r,
      setThreadSettings: l,
      updateThreadSettings: a
    }
  }(t, n), {
    textAreaState: b,
    setTextAreaState: _
  } = function(e, t) {
    let [n, r] = i.useState((0, y.H2)());
    return i.useEffect(() => {
      function n(n) {
        var i;
        let l = T.Z.getDraft(e.id, T.d.FirstThreadMessage);
        (0 === l.length || true === n) && r((0, y.eK)(l)), t(null != (i = T.Z.getThreadSettings(e.id)) ? i : {})
      }
      return n(true), T.Z.addChangeListener(n), () => {
        T.Z.removeChangeListener(n)
      }
    }, [e.id, t]), {
      textAreaState: n,
      setTextAreaState: r
    }
  }(t, f), x = (0, k.vH)(t), {
    isGeneratingAI: v,
    enableAIFeatures: j,
    getThreadNameInputAccessory: C
  } = (0, H.U)({
    parentChannel: t,
    parentMessageId: n,
    updateThreadSettings: m,
    threadSettings: h,
    textAreaState: b
  }), {
    nameError: I,
    messageError: Z,
    submit: P,
    submitting: N
  } = function(e) {
    let {
      parentChannel: t,
      parentMessageId: n,
      threadSettings: r,
      privateThreadMode: l,
      textAreaState: a,
      location: s,
      enableAIFeatures: o
    } = e, [c, d] = i.useState(null), [u, h] = i.useState(null), [p, f] = i.useState(false), g = (0, F.Z)({
      parentChannel: t,
      parentMessageId: n,
      threadSettings: r,
      privateThreadMode: l,
      location: s,
      onThreadCreated: G.ok,
      useDefaultThreadName: true
    });
    return {
      nameError: c,
      messageError: u,
      submit: i.useCallback(async (e, i, l) => {
        var s, c, u;
        if (p) return {
          shouldClear: false,
          shouldRefocus: false
        };
        f(true), null == e && (e = a.textValue), e = e.trim(), (null == i || 0 === i.length) && (i = null == (s = S.Z.getStickerPreview(t.id, q.drafts.type)) ? true : s.map(e => e.id)), (null == l || 0 === l.length) && (l = w.Z.getUploads(t.id, T.d.FirstThreadMessage));
        let m = null != (c = r.name) ? c : "",
          b = (o || null == n) && 0 === m.length,
          _ = "" === e && (null == i || 0 === i.length) && 0 === l.length;
        if (d(b ? (0, M.V_)() : null), h(_ ? (0, M.T4)() : null), b || _) return f(false), {
          shouldClear: false,
          shouldRefocus: true
        };
        let {
          valid: y
        } = await (0, D.v)({
          content: e,
          stickers: i,
          uploads: l,
          type: q,
          channel: null == n ? t : null
        });
        if (!y) return f(false), {
          shouldClear: false,
          shouldRefocus: true
        };
        try {
          await g(e, i, l)
        } catch (e) {
          return (null == (u = e.body) ? true : u.code) === B.evJ.AUTOMOD_TITLE_BLOCKED && d((0, M.Gx)(e.body, t)), f(false), {
            shouldClear: false,
            shouldRefocus: true
          }
        }
        return (0, E.qB)(t.id, q.drafts.type), f(false), {
          shouldClear: true,
          shouldRefocus: false
        }
      }, [g, a.textValue, r.name, n, t, p, o]),
      submitting: p
    }
  }({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: h,
    privateThreadMode: x,
    textAreaState: b,
    location: l,
    enableAIFeatures: j
  }), R = (0, k.oD)(h, x) ? c.qtY : c.or_;
  return (0, r.jsx)("div", {
    className: z.chat,
    onMouseDown: u,
    onFocus: u,
    children: (0, r.jsx)("div", {
      className: a()(z.messagesWrapper, "group-spacing-".concat(o)),
      children: (0, r.jsxs)("form", {
        onSubmit: e => {
          e.preventDefault(), P()
        },
        className: z.form,
        children: [(0, r.jsx)(c.Ttm, {
          className: z.scroller,
          fade: true,
          children: (0, r.jsxs)("div", {
            className: z.scrollerInner,
            children: [(0, r.jsxs)(O.ZP, {
              channelId: "create-thread-null",
              children: [(0, r.jsx)("div", {
                className: a()(W.iconWrapper, z.iconWrapper),
                children: (0, r.jsx)(R, {
                  className: W.icon
                })
              }), (0, r.jsxs)(c.C3N, {
                children: [(0, r.jsx)($, {
                  parentChannel: t,
                  parentMessageId: n,
                  threadSettings: h,
                  updateThreadSettings: m,
                  error: I,
                  disabled: N,
                  isGeneratingAI: v,
                  enableAIFeatures: j,
                  getThreadNameInputAccessory: C
                }), t.type === B.d4z.GUILD_TEXT ? (0, r.jsx)(J, {
                  startedFromMessage: null != n,
                  threadSettings: h,
                  updateThreadSettings: m,
                  privateThreadMode: x
                }) : null]
              })]
            }), (0, r.jsx)(et, {
              parentChannel: t,
              parentMessageId: n
            })]
          })
        }), (0, r.jsxs)("div", {
          className: z.submitContainer,
          children: [(0, r.jsx)(ee, {
            parentChannel: t,
            textAreaState: b,
            setTextAreaState: _,
            submit: P,
            error: Z
          }), (0, r.jsx)(p.ZP, {
            channel: t,
            isThreadCreation: true,
            className: z.typingIndicator,
            isInTextChannel: true
          })]
        })]
      })
    })
  })
}

function J(e) {
  let {
    startedFromMessage: t,
    threadSettings: n,
    updateThreadSettings: i,
    privateThreadMode: l
  } = e, a = (0, k.oD)(n, l), s = (0, r.jsx)(c.Checkbox, {
    disabled: l === k.Jw.PrivateOnly,
    checked: a,
    onChange: e => i({
      isPrivate: e
    }),
    label: V.intl.string(V.t.TRPp3g)
  });
  return t || l === k.Jw.Disabled ? null : (0, r.jsx)(c.gNt, {
    label: V.intl.string(V.t.F1zyvU),
    helperText: a ? V.intl.string(V.t.EWXycz) : true,
    children: s
  })
}

function $(e) {
  var t;
  let {
    parentChannel: n,
    parentMessageId: i,
    threadSettings: l,
    updateThreadSettings: a,
    error: s,
    disabled: o,
    isGeneratingAI: d,
    enableAIFeatures: h,
    getThreadNameInputAccessory: p
  } = e, f = null != (t = l.name) ? t : "", g = (0, M.Op)(s, {
    content: f
  }), m = (0, k.Od)(n, i), b = null != i && !h, _ = (0, j.Dt)(), y = h ? V.intl.string(V.t["Nb2/RE"]) : "" !== m ? m : V.intl.string(V.t["Nb2/RE"]);
  return (0, r.jsx)(c.oil, {
    label: V.intl.string(b ? V.t.JPvIiL : V.t.j3XWjD),
    trailing: p(o),
    value: f,
    id: _,
    placeholder: y,
    maxLength: B.HN8,
    onChange: e => {
      a({
        name: (0, U.Z)(e, false)
      }), "" !== e ? u.Z.startTyping(n.id) : u.Z.stopTyping(n.id)
    },
    onBlur: () => {
      let e = (0, U.Z)(f, true);
      e !== f && a({
        name: e
      })
    },
    error: g,
    disabled: o || d
  })
}

function ee(e) {
  let {
    parentChannel: t,
    textAreaState: n,
    setTextAreaState: l,
    submit: o,
    error: h
  } = e, [p, f] = i.useState(true), g = i.useCallback(() => f(true), []), m = i.useCallback(() => f(false), []), b = i.useCallback((e, n, r) => {
    d.Z.saveDraft(t.id, n, T.d.FirstThreadMessage), l(e => ("" !== n && e.textValue !== n ? u.Z.startTyping(t.id) : "" === n && u.Z.stopTyping(t.id), {
      textValue: n,
      richValue: r
    }))
  }, [t.id, l]), _ = i.useCallback(e => {
    let {
      value: t,
      uploads: n,
      stickers: r
    } = e;
    return o(t, r, n)
  }, [o]);
  (0, A.yp)({
    event: B.CkL.TEXTAREA_FOCUS,
    handler: g
  }), (0, A.yp)({
    event: B.CkL.TEXTAREA_BLUR,
    handler: m
  });
  let y = (0, s.e7)([R.Z], () => R.Z.can(B.Plq.ATTACH_FILES, t)),
    j = (0, M.Op)(h, {
      content: n.textValue
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(v.Z, {
      channelId: t.id,
      type: q,
      canAttachFiles: y
    }), (0, r.jsx)("div", {
      className: z.starterMessageError,
      children: (0, r.jsx)(c.pdY, {
        error: j
      })
    }), (0, r.jsx)(x.ZP, {
      type: q,
      channel: t,
      placeholder: V.intl.string(V.t.taZfIC),
      textValue: n.textValue,
      richValue: n.richValue,
      focused: p,
      className: a()(z.channelTextArea, z.channelTextAreaWithTypingIndicator),
      innerClassName: a()(z.channelTextAreaInner, {
        [z.channelTextAreaInnerError]: null != j
      }),
      onFocus: g,
      onBlur: m,
      onChange: b,
      onSubmit: _,
      promptToUpload: L.d
    })]
  })
}

function et(e) {
  let {
    parentChannel: t,
    parentMessageId: n
  } = e, i = (0, s.e7)([N.Z], () => null == n ? null : N.Z.getMessage(t.id, n)), l = Z.jU.useSetting();
  return null != i ? (0, r.jsx)(I.Z, {
    className: z.messagePreview,
    message: i,
    channel: t,
    compact: l,
    renderThreadAccessory: false,
    trackAnnouncementViews: true
  }) : null
}