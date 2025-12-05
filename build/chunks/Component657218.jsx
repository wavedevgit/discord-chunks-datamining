/** Chunk was on 89522 **/
/** chunk id: 657218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q
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
  Chunk757212 = require("./757212.js"),
  Chunk149623 = require("./149623.js");

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
let Y = Chunk541716.Ie.THREAD_CREATION;

function q(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: i
  } = e, l = (0, s.e7)([Z.Z], () => Z.Z.getChannel(t)), {
    analyticsLocations: a
  } = (0, m.ZP)(g.Z.CREATE_THREAD);
  return null == l ? null : (0, r.jsx)(m.Gt, {
    value: a,
    children: (0, r.jsx)(w.I3, {
      children: (0, r.jsxs)("section", {
        "aria-label": B.intl.string(B.t.rBIGBL),
        className: V.container,
        children: [(0, r.jsx)(h.Z, {
          channel: l,
          draftType: P.d.FirstThreadMessage
        }), (0, r.jsx)(K, {
          parentChannelId: t
        }), (0, r.jsx)(Q, {
          parentChannel: l,
          parentMessageId: n,
          location: i
        })]
      })
    })
  })
}

function K(e) {
  let {
    parentChannelId: t
  } = e, n = i.useCallback(() => {
    let e = P.Z.getThreadSettings(t),
      n = P.Z.getDraft(t, P.d.FirstThreadMessage).trim(),
      r = R.Z.getUploads(t, P.d.FirstThreadMessage);
    if ((null == e ? true : e.name) != null && (null == e ? true : e.name) !== "" || 0 !== n.length || 0 !== r.length) return void u.Z.show({
      title: B.intl.string(B.t["6kDZh1"]),
      body: B.intl.string(B.t.NgS9jX),
      confirmText: B.intl.string(B.t["7WGI4H"]),
      confirmVariant: "critical-primary",
      cancelText: B.intl.string(B.t["olcKd/"]),
      onConfirm: () => {
        (0, U.NK)(t)
      }
    });
    (0, U.NK)(t)
  }, [t]);
  return (0, r.jsxs)(v.ZP, {
    toolbar: (0, r.jsx)(v.ZP.Icon, {
      icon: o.Dio,
      tooltip: B.intl.string(B.t.cpT0Cq),
      onClick: n
    }),
    children: [(0, r.jsx)(v.ZP.Icon, {
      icon: o.or_,
      disabled: true,
      "aria-label": B.intl.string(B.t["7Xm5QI"])
    }), (0, r.jsx)(v.ZP.Title, {
      children: B.intl.string(B.t["4WNcpu"])
    })]
  })
}

function Q(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    location: l
  } = e, d = (0, s.e7)([f.Z], () => f.Z.messageGroupSpacing), u = function() {
    let e = i.useContext(w.oo);
    return i.useCallback(() => {
      e.bumpDispatchPriority()
    }, [e])
  }(), {
    threadSettings: h,
    setThreadSettings: g,
    updateThreadSettings: m
  } = function(e, t) {
    let n = (0, s.e7)([P.Z], () => {
        var t;
        return null != (t = P.Z.getThreadSettings(e.id)) ? t : {}
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
    setTextAreaState: y
  } = function(e, t) {
    let [n, r] = i.useState((0, _.H2)());
    return i.useEffect(() => {
      function n(n) {
        var i;
        let l = P.Z.getDraft(e.id, P.d.FirstThreadMessage);
        (0 === l.length || true === n) && r((0, _.eK)(l)), t(null != (i = P.Z.getThreadSettings(e.id)) ? i : {})
      }
      return n(true), P.Z.addChangeListener(n), () => {
        P.Z.removeChangeListener(n)
      }
    }, [e.id, t]), {
      textAreaState: n,
      setTextAreaState: r
    }
  }(t, g), O = (0, M.vH)(t), {
    isGeneratingAI: x,
    enableAIFeatures: v,
    getThreadNameInputAccessory: C
  } = (0, G.U)({
    parentChannel: t,
    parentMessageId: n,
    updateThreadSettings: m,
    threadSettings: h,
    textAreaState: b
  }), {
    nameError: E,
    messageError: Z,
    submit: T,
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
    } = e, [c, d] = i.useState(null), [u, p] = i.useState(null), [h, f] = i.useState(false), g = (0, H.Z)({
      parentChannel: t,
      parentMessageId: n,
      threadSettings: r,
      privateThreadMode: l,
      location: s,
      onThreadCreated: U.ok,
      useDefaultThreadName: true
    });
    return {
      nameError: c,
      messageError: u,
      submit: i.useCallback(async (e, i, l) => {
        var s, c, u;
        if (h) return {
          shouldClear: false,
          shouldRefocus: false
        };
        f(true), null == e && (e = a.textValue), e = e.trim(), (null == i || 0 === i.length) && (i = null == (s = I.Z.getStickerPreview(t.id, Y.drafts.type)) ? true : s.map(e => e.id)), (null == l || 0 === l.length) && (l = R.Z.getUploads(t.id, P.d.FirstThreadMessage));
        let m = null != (c = r.name) ? c : "",
          b = (o || null == n) && 0 === m.length,
          _ = "" === e && (null == i || 0 === i.length) && 0 === l.length;
        if (d(b ? (0, L.V_)() : null), p(_ ? (0, L.T4)() : null), b || _) return f(false), {
          shouldClear: false,
          shouldRefocus: true
        };
        let {
          valid: y
        } = await (0, A.v)({
          content: e,
          stickers: i,
          uploads: l,
          type: Y,
          channel: null == n ? t : null
        });
        if (!y) return f(false), {
          shouldClear: false,
          shouldRefocus: true
        };
        try {
          await g(e, i, l)
        } catch (e) {
          return (null == (u = e.body) ? true : u.code) === F.evJ.AUTOMOD_TITLE_BLOCKED && d((0, L.Gx)(e.body, t)), f(false), {
            shouldClear: false,
            shouldRefocus: true
          }
        }
        return (0, S.qB)(t.id, Y.drafts.type), f(false), {
          shouldClear: true,
          shouldRefocus: false
        }
      }, [g, a.textValue, r.name, n, t, h, o]),
      submitting: h
    }
  }({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: h,
    privateThreadMode: O,
    textAreaState: b,
    location: l,
    enableAIFeatures: v
  }), D = (0, M.oD)(h, O) ? o.qtY : o.or_;
  return (0, r.jsx)("div", {
    className: V.chat,
    onMouseDown: u,
    onFocus: u,
    children: (0, r.jsx)("div", {
      className: a()(V.messagesWrapper, "group-spacing-".concat(d)),
      children: (0, r.jsxs)("form", {
        onSubmit: e => {
          e.preventDefault(), T()
        },
        className: V.form,
        children: [(0, r.jsx)(o.Ttm, {
          className: V.scroller,
          fade: true,
          children: (0, r.jsxs)("div", {
            className: V.scrollerInner,
            children: [(0, r.jsxs)(j.ZP, {
              channelId: "create-thread-null",
              children: [(0, r.jsx)("div", {
                className: a()(z.iconWrapper, V.iconWrapper),
                children: (0, r.jsx)(D, {
                  className: z.icon
                })
              }), (0, r.jsxs)(o.C3N, {
                children: [(0, r.jsx)(J, {
                  parentChannel: t,
                  parentMessageId: n,
                  threadSettings: h,
                  updateThreadSettings: m,
                  error: E,
                  disabled: N,
                  isGeneratingAI: x,
                  enableAIFeatures: v,
                  getThreadNameInputAccessory: C
                }), t.type === F.d4z.GUILD_TEXT ? (0, r.jsx)(X, {
                  startedFromMessage: null != n,
                  threadSettings: h,
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
            setTextAreaState: y,
            submit: T,
            error: Z
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

function X(e) {
  let {
    startedFromMessage: t,
    threadSettings: n,
    updateThreadSettings: i,
    privateThreadMode: l
  } = e, a = (0, M.oD)(n, l), s = (0, r.jsx)(o.Checkbox, {
    disabled: l === M.Jw.PrivateOnly,
    checked: a,
    onChange: e => i({
      isPrivate: e
    }),
    label: B.intl.string(B.t.TRPp3g)
  });
  return t || l === M.Jw.Disabled ? null : (0, r.jsx)(o.gNt, {
    label: B.intl.string(B.t.F1zyvU),
    helperText: a ? B.intl.string(B.t.EWXycz) : true,
    children: s
  })
}

function J(e) {
  var t;
  let {
    parentChannel: n,
    parentMessageId: i,
    threadSettings: l,
    updateThreadSettings: a,
    error: s,
    disabled: c,
    isGeneratingAI: u,
    enableAIFeatures: p,
    getThreadNameInputAccessory: h
  } = e, f = null != (t = l.name) ? t : "", g = (0, L.Op)(s, {
    content: f
  }), m = (0, M.Od)(n, i), b = null != i && !p, _ = (0, x.Dt)(), y = p ? B.intl.string(B.t["Nb2/RE"]) : "" !== m ? m : B.intl.string(B.t["Nb2/RE"]);
  return (0, r.jsx)(o.oil, {
    label: B.intl.string(b ? B.t.JPvIiL : B.t.j3XWjD),
    trailing: h(c),
    value: f,
    id: _,
    placeholder: y,
    maxLength: F.HN8,
    onChange: e => {
      a({
        name: (0, k.Z)(e, false)
      }), "" !== e ? d.Z.startTyping(n.id) : d.Z.stopTyping(n.id)
    },
    onBlur: () => {
      let e = (0, k.Z)(f, true);
      e !== f && a({
        name: e
      })
    },
    error: g,
    disabled: c || u
  })
}

function $(e) {
  let {
    parentChannel: t,
    textAreaState: n,
    setTextAreaState: l,
    submit: u,
    error: p
  } = e, [h, f] = i.useState(true), g = i.useCallback(() => f(true), []), m = i.useCallback(() => f(false), []), b = i.useCallback((e, n, r) => {
    c.Z.saveDraft(t.id, n, P.d.FirstThreadMessage), l(e => ("" !== n && e.textValue !== n ? d.Z.startTyping(t.id) : "" === n && d.Z.stopTyping(t.id), {
      textValue: n,
      richValue: r
    }))
  }, [t.id, l]), _ = i.useCallback(e => {
    let {
      value: t,
      uploads: n,
      stickers: r
    } = e;
    return u(t, r, n)
  }, [u]);
  (0, w.yp)({
    event: F.CkL.TEXTAREA_FOCUS,
    handler: g
  }), (0, w.yp)({
    event: F.CkL.TEXTAREA_BLUR,
    handler: m
  });
  let x = (0, s.e7)([N.Z], () => N.Z.can(F.Plq.ATTACH_FILES, t)),
    j = (0, L.Op)(p, {
      content: n.textValue
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O.Z, {
      channelId: t.id,
      type: Y,
      canAttachFiles: x
    }), (0, r.jsx)("div", {
      className: V.starterMessageError,
      children: (0, r.jsx)(o.pdY, {
        error: j
      })
    }), (0, r.jsx)(y.ZP, {
      type: Y,
      channel: t,
      placeholder: B.intl.string(B.t.taZfIC),
      textValue: n.textValue,
      richValue: n.richValue,
      focused: h,
      className: a()(V.channelTextArea, V.channelTextAreaWithTypingIndicator),
      innerClassName: a()(V.channelTextAreaInner, {
        [V.channelTextAreaInnerError]: null != j
      }),
      onFocus: g,
      onBlur: m,
      onChange: b,
      onSubmit: _,
      promptToUpload: D.d
    })]
  })
}

function ee(e) {
  let {
    parentChannel: t,
    parentMessageId: n
  } = e, i = (0, s.e7)([T.Z], () => null == n ? null : T.Z.getMessage(t.id, n)), l = E.jU.useSetting();
  return null != i ? (0, r.jsx)(C.Z, {
    className: V.messagePreview,
    message: i,
    channel: t,
    compact: l,
    renderThreadAccessory: false,
    trackAnnouncementViews: true
  }) : null
}