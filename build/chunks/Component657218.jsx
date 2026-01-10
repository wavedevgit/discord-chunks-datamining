/** Chunk was on 81985 **/
/** chunk id: 657218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Y
}), require("./781311.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk456077 = require("./456077.js"),
  Chunk488131 = require("./488131.js"),
  Chunk842332 = require("./842332.jsx"),
  Chunk602034 = require("./602034.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk666765 = require("./666765.js"),
  Chunk616508 = require("./616508.js");

function W(e) {
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
let K = Chunk541716.Ie.THREAD_CREATION;

function Y(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: i
  } = e, l = (0, o.e7)([P.Z], () => P.Z.getChannel(t)), {
    analyticsLocations: a
  } = (0, m.ZP)(g.Z.CREATE_THREAD);
  return null == l ? null : (0, r.jsx)(m.Gt, {
    value: a,
    children: (0, r.jsx)(w.I3, {
      children: (0, r.jsxs)("section", {
        "aria-label": H.intl.string(H.t.rBIGBL),
        className: V.container,
        children: [(0, r.jsx)(f.Z, {
          channel: l,
          draftType: Z.d.FirstThreadMessage
        }), (0, r.jsx)(q, {
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

function q(e) {
  let {
    parentChannelId: t
  } = e, n = i.useCallback(() => {
    let e = Z.Z.getThreadSettings(t),
      n = Z.Z.getDraft(t, Z.d.FirstThreadMessage).trim(),
      r = A.Z.getUploads(t, Z.d.FirstThreadMessage);
    if ((null == e ? true : e.name) != null && (null == e ? true : e.name) !== "" || 0 !== n.length || 0 !== r.length) return void d.Z.show({
      title: H.intl.string(H.t["6kDZh1"]),
      body: H.intl.string(H.t.NgS9jX),
      confirmText: H.intl.string(H.t["7WGI4H"]),
      confirmVariant: "critical-primary",
      cancelText: H.intl.string(H.t["olcKd/"]),
      onConfirm: () => {
        (0, U.NK)(t)
      }
    });
    (0, U.NK)(t)
  }, [t]);
  return (0, r.jsxs)(C.ZP, {
    toolbar: (0, r.jsx)(C.ZP.Icon, {
      icon: s.Dio,
      tooltip: H.intl.string(H.t.cpT0Cq),
      onClick: n
    }),
    children: [(0, r.jsx)(C.ZP.Icon, {
      icon: s.or_,
      disabled: true,
      "aria-label": H.intl.string(H.t["7Xm5QI"])
    }), (0, r.jsx)(C.ZP.Title, {
      children: H.intl.string(H.t["4WNcpu"])
    })]
  })
}

function X(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    location: l
  } = e, u = (0, o.e7)([h.Z], () => h.Z.messageGroupSpacing), d = function() {
    let e = i.useContext(w.oo);
    return i.useCallback(() => {
      e.bumpDispatchPriority()
    }, [e])
  }(), {
    threadSettings: f,
    setThreadSettings: g,
    updateThreadSettings: m
  } = function(e, t) {
    let n = (0, o.e7)([Z.Z], () => {
        var t;
        return null != (t = Z.Z.getThreadSettings(e.id)) ? t : {}
      }, [e.id]),
      [r, l] = i.useState(n),
      a = i.useCallback(n => {
        var r, i;
        l(e => W({}, e, n)), c.Z.changeThreadSettings(e.id, (r = W({}, n), i = i = {
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
    setTextAreaState: v
  } = function(e, t) {
    let [n, r] = i.useState((0, y.H2)());
    return i.useEffect(() => {
      function n(n) {
        var i;
        let l = Z.Z.getDraft(e.id, Z.d.FirstThreadMessage);
        (0 === l.length || true === n) && r((0, y.eK)(l)), t(null != (i = Z.Z.getThreadSettings(e.id)) ? i : {})
      }
      return n(true), Z.Z.addChangeListener(n), () => {
        Z.Z.removeChangeListener(n)
      }
    }, [e.id, t]), {
      textAreaState: n,
      setTextAreaState: r
    }
  }(t, g), O = (0, k.vH)(t), {
    isGeneratingAI: j,
    enableAIFeatures: C,
    getThreadNameInputAccessory: E
  } = (0, G.U)({
    parentChannel: t,
    parentMessageId: n,
    updateThreadSettings: m,
    threadSettings: f,
    textAreaState: b
  }), {
    nameError: I,
    messageError: P,
    submit: N,
    submitting: T
  } = function(e) {
    let {
      parentChannel: t,
      parentMessageId: n,
      threadSettings: r,
      privateThreadMode: l,
      textAreaState: a,
      location: o,
      enableAIFeatures: s
    } = e, [c, u] = i.useState(null), [d, p] = i.useState(null), [f, h] = i.useState(false), g = (0, B.Z)({
      parentChannel: t,
      parentMessageId: n,
      threadSettings: r,
      privateThreadMode: l,
      location: o,
      onThreadCreated: U.ok,
      useDefaultThreadName: true
    });
    return {
      nameError: c,
      messageError: d,
      submit: i.useCallback(async (e, i, l) => {
        var o, c, d;
        if (f) return {
          shouldClear: false,
          shouldRefocus: false
        };
        h(true), null == e && (e = a.textValue), e = e.trim(), (null == i || 0 === i.length) && (i = null == (o = S.Z.getStickerPreview(t.id, K.drafts.type)) ? true : o.map(e => e.id)), (null == l || 0 === l.length) && (l = A.Z.getUploads(t.id, Z.d.FirstThreadMessage));
        let m = null != (c = r.name) ? c : "",
          b = (s || null == n) && 0 === m.length,
          y = "" === e && (null == i || 0 === i.length) && 0 === l.length;
        if (u(b ? (0, M.V_)() : null), p(y ? (0, M.T4)() : null), b || y) return h(false), {
          shouldClear: false,
          shouldRefocus: true
        };
        let {
          valid: v
        } = await (0, R.v)({
          content: e,
          stickers: i,
          uploads: l,
          type: K,
          channel: null == n ? t : null
        });
        if (!v) return h(false), {
          shouldClear: false,
          shouldRefocus: true
        };
        try {
          await g(e, i, l)
        } catch (e) {
          return (null == (d = e.body) ? true : d.code) === F.evJ.AUTOMOD_TITLE_BLOCKED && u((0, M.Gx)(e.body, t)), h(false), {
            shouldClear: false,
            shouldRefocus: true
          }
        }
        return (0, _.qB)(t.id, K.drafts.type), h(false), {
          shouldClear: true,
          shouldRefocus: false
        }
      }, [g, a.textValue, r.name, n, t, f, s]),
      submitting: f
    }
  }({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: f,
    privateThreadMode: O,
    textAreaState: b,
    location: l,
    enableAIFeatures: C
  }), D = (0, k.oD)(f, O) ? s.qtY : s.or_;
  return (0, r.jsx)("div", {
    className: V.chat,
    onMouseDown: d,
    onFocus: d,
    children: (0, r.jsx)("div", {
      className: a()(V.messagesWrapper, "group-spacing-".concat(u)),
      children: (0, r.jsxs)("form", {
        onSubmit: e => {
          e.preventDefault(), N()
        },
        className: V.form,
        children: [(0, r.jsx)(s.Ttm, {
          className: V.scroller,
          fade: true,
          children: (0, r.jsxs)("div", {
            className: V.scrollerInner,
            children: [(0, r.jsxs)(x.ZP, {
              channelId: "create-thread-null",
              children: [(0, r.jsx)("div", {
                className: a()(z.iconWrapper, V.iconWrapper),
                children: (0, r.jsx)(D, {
                  className: z.icon
                })
              }), (0, r.jsxs)(s.C3N, {
                children: [(0, r.jsx)(J, {
                  parentChannel: t,
                  parentMessageId: n,
                  threadSettings: f,
                  updateThreadSettings: m,
                  error: I,
                  disabled: T,
                  isGeneratingAI: j,
                  enableAIFeatures: C,
                  getThreadNameInputAccessory: E
                }), t.type === F.d4z.GUILD_TEXT ? (0, r.jsx)(Q, {
                  startedFromMessage: null != n,
                  threadSettings: f,
                  updateThreadSettings: m,
                  privateThreadMode: O
                }) : null]
              })]
            }), (0, r.jsx)(ee, {
              parentChannel: t,
              parentMessageId: n
            })]
          })
        }), (0, r.jsxs)("div", {
          className: V.submitContainer,
          children: [(0, r.jsx)($, {
            parentChannel: t,
            textAreaState: b,
            setTextAreaState: v,
            submit: N,
            error: P
          }), (0, r.jsx)(p.ZP, {
            channel: t,
            isThreadCreation: true,
            className: V.typingIndicator,
            isInTextChannel: true
          })]
        })]
      })
    })
  })
}

function Q(e) {
  let {
    startedFromMessage: t,
    threadSettings: n,
    updateThreadSettings: i,
    privateThreadMode: l
  } = e, a = (0, k.oD)(n, l), o = (0, r.jsx)(s.Checkbox, {
    disabled: l === k.Jw.PrivateOnly,
    checked: a,
    onChange: e => i({
      isPrivate: e
    }),
    label: H.intl.string(H.t.TRPp3g)
  });
  return t || l === k.Jw.Disabled ? null : (0, r.jsx)(s.gNt, {
    label: H.intl.string(H.t.F1zyvU),
    helperText: a ? H.intl.string(H.t.EWXycz) : true,
    children: o
  })
}

function J(e) {
  var t;
  let {
    parentChannel: n,
    parentMessageId: i,
    threadSettings: l,
    updateThreadSettings: a,
    error: o,
    disabled: c,
    isGeneratingAI: d,
    enableAIFeatures: p,
    getThreadNameInputAccessory: f
  } = e, h = null != (t = l.name) ? t : "", g = (0, M.Op)(o, {
    content: h
  }), m = (0, k.Od)(n, i), b = null != i && !p, y = (0, j.Dt)(), v = p ? H.intl.string(H.t["Nb2/RE"]) : "" !== m ? m : H.intl.string(H.t["Nb2/RE"]);
  return (0, r.jsx)(s.oil, {
    label: H.intl.string(b ? H.t.JPvIiL : H.t.j3XWjD),
    trailing: f(c),
    value: h,
    id: y,
    placeholder: v,
    maxLength: F.HN8,
    onChange: e => {
      a({
        name: (0, L.Z)(e, false)
      }), "" !== e ? u.Z.startTyping(n.id) : u.Z.stopTyping(n.id)
    },
    onBlur: () => {
      let e = (0, L.Z)(h, true);
      e !== h && a({
        name: e
      })
    },
    error: g,
    disabled: c || d
  })
}

function $(e) {
  let {
    parentChannel: t,
    textAreaState: n,
    setTextAreaState: l,
    submit: d,
    error: p
  } = e, [f, h] = i.useState(true), g = i.useCallback(() => h(true), []), m = i.useCallback(() => h(false), []), b = i.useCallback((e, n, r) => {
    c.Z.saveDraft(t.id, n, Z.d.FirstThreadMessage), l(e => ("" !== n && e.textValue !== n ? u.Z.startTyping(t.id) : "" === n && u.Z.stopTyping(t.id), {
      textValue: n,
      richValue: r
    }))
  }, [t.id, l]), y = i.useCallback(e => {
    let {
      value: t,
      uploads: n,
      stickers: r
    } = e;
    return d(t, r, n)
  }, [d]);
  (0, w.yp)({
    event: F.CkL.TEXTAREA_FOCUS,
    handler: g
  }), (0, w.yp)({
    event: F.CkL.TEXTAREA_BLUR,
    handler: m
  });
  let j = (0, o.e7)([T.Z], () => T.Z.can(F.Plq.ATTACH_FILES, t)),
    x = (0, M.Op)(p, {
      content: n.textValue
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O.Z, {
      channelId: t.id,
      type: K,
      canAttachFiles: j
    }), (0, r.jsx)("div", {
      className: V.starterMessageError,
      children: (0, r.jsx)(s.pdY, {
        error: x
      })
    }), (0, r.jsx)(v.ZP, {
      type: K,
      channel: t,
      placeholder: H.intl.string(H.t.taZfIC),
      textValue: n.textValue,
      richValue: n.richValue,
      focused: f,
      className: a()(V.channelTextArea, V.channelTextAreaWithTypingIndicator),
      innerClassName: a()(V.channelTextAreaInner, {
        [V.channelTextAreaInnerError]: null != x
      }),
      onFocus: g,
      onBlur: m,
      onChange: b,
      onSubmit: y,
      promptToUpload: D.d
    })]
  })
}

function ee(e) {
  let {
    parentChannel: t,
    parentMessageId: n
  } = e, i = (0, o.e7)([N.Z], () => null == n ? null : N.Z.getMessage(t.id, n)), l = I.jU.useSetting();
  return null != i ? (0, r.jsx)(E.Z, {
    className: V.messagePreview,
    message: i,
    channel: t,
    compact: l,
    renderThreadAccessory: false,
    trackAnnouncementViews: true
  }) : null
}