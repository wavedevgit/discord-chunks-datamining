/** Chunk was on 70127 **/
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
  Chunk456077 = require("./456077.js"),
  Chunk488131 = require("./488131.js"),
  Chunk842332 = require("./842332.jsx"),
  Chunk602034 = require("./602034.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk177763 = require("./177763.js"),
  Chunk910062 = require("./910062.js");

function q(e) {
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

function K(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: i
  } = e, l = (0, o.e7)([Z.Z], () => Z.Z.getChannel(t)), {
    analyticsLocations: a
  } = (0, b.ZP)(g.Z.CREATE_THREAD);
  return null == l ? null : (0, r.jsx)(b.Gt, {
    value: a,
    children: (0, r.jsx)(R.I3, {
      children: (0, r.jsxs)("section", {
        "aria-label": V.intl.string(V.t.rBIGBA),
        className: z.container,
        children: [(0, r.jsx)(f.Z, {
          channel: l,
          draftType: T.d.FirstThreadMessage
        }), (0, r.jsx)(X, {
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

function X(e) {
  let {
    parentChannelId: t
  } = e, n = i.useCallback(() => {
    let e = T.Z.getThreadSettings(t),
      n = T.Z.getDraft(t, T.d.FirstThreadMessage).trim(),
      r = w.Z.getUploads(t, T.d.FirstThreadMessage);
    if ((null == e ? true : e.name) != null && (null == e ? true : e.name) !== "" || 0 !== n.length || 0 !== r.length) return void p.Z.show({
      title: V.intl.string(V.t["6kDZh4"]),
      body: V.intl.string(V.t.NgS9jY),
      confirmColor: s.Tt.RED,
      confirmText: V.intl.string(V.t["7WGI4O"]),
      confirmVariant: "critical-primary",
      cancelText: V.intl.string(V.t.olcKd3),
      onConfirm: () => {
        (0, B.NK)(t)
      }
    });
    (0, B.NK)(t)
  }, [t]);
  return (0, r.jsxs)(j.ZP, {
    toolbar: (0, r.jsx)(j.ZP.Icon, {
      icon: c.Dio,
      tooltip: V.intl.string(V.t.cpT0Cg),
      onClick: n
    }),
    children: [(0, r.jsx)(j.ZP.Icon, {
      icon: c.or_,
      disabled: true,
      "aria-label": V.intl.string(V.t["7Xm5QE"])
    }), (0, r.jsx)(j.ZP.Title, {
      children: V.intl.string(V.t["4WNcpq"])
    })]
  })
}

function Q(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    location: l
  } = e, s = (0, o.e7)([m.Z], () => m.Z.messageGroupSpacing), d = function() {
    let e = i.useContext(R.oo);
    return i.useCallback(() => {
      e.bumpDispatchPriority()
    }, [e])
  }(), {
    threadSettings: p,
    setThreadSettings: f,
    updateThreadSettings: g
  } = function(e, t) {
    let n = (0, o.e7)([T.Z], () => {
        var t;
        return null != (t = T.Z.getThreadSettings(e.id)) ? t : {}
      }, [e.id]),
      [r, l] = i.useState(n),
      a = i.useCallback(n => {
        var r, i;
        l(e => q({}, e, n)), u.Z.changeThreadSettings(e.id, (r = q({}, n), i = i = {
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
        let l = T.Z.getDraft(e.id, T.d.FirstThreadMessage);
        (0 === l.length || true === n) && r((0, _.eK)(l)), t(null != (i = T.Z.getThreadSettings(e.id)) ? i : {})
      }
      return n(true), T.Z.addChangeListener(n), () => {
        T.Z.removeChangeListener(n)
      }
    }, [e.id, t]), {
      textAreaState: n,
      setTextAreaState: r
    }
  }(t, f), C = (0, k.vH)(t), {
    isGeneratingAI: v,
    enableAIFeatures: x,
    getThreadNameInputAccessory: j
  } = (0, G.U)({
    parentChannel: t,
    parentMessageId: n,
    updateThreadSettings: g,
    threadSettings: p,
    textAreaState: b
  }), {
    nameError: E,
    messageError: P,
    submit: Z,
    submitting: N
  } = function(e) {
    let {
      parentChannel: t,
      parentMessageId: n,
      threadSettings: r,
      privateThreadMode: l,
      textAreaState: a,
      location: o,
      enableAIFeatures: s
    } = e, [c, u] = i.useState(null), [d, p] = i.useState(null), [h, f] = i.useState(false), m = (0, H.Z)({
      parentChannel: t,
      parentMessageId: n,
      threadSettings: r,
      privateThreadMode: l,
      location: o,
      onThreadCreated: B.ok,
      useDefaultThreadName: true
    });
    return {
      nameError: c,
      messageError: d,
      submit: i.useCallback(async (e, i, l) => {
        var o, c, d;
        if (h) return {
          shouldClear: false,
          shouldRefocus: false
        };
        f(true), null == e && (e = a.textValue), e = e.trim(), (null == i || 0 === i.length) && (i = null == (o = S.Z.getStickerPreview(t.id, Y.drafts.type)) ? true : o.map(e => e.id)), (null == l || 0 === l.length) && (l = w.Z.getUploads(t.id, T.d.FirstThreadMessage));
        let g = null != (c = r.name) ? c : "",
          b = (s || null == n) && 0 === g.length,
          y = "" === e && (null == i || 0 === i.length) && 0 === l.length;
        if (u(b ? (0, L.V_)() : null), p(y ? (0, L.T4)() : null), b || y) return f(false), {
          shouldClear: false,
          shouldRefocus: true
        };
        let {
          valid: _
        } = await (0, M.v)({
          content: e,
          stickers: i,
          uploads: l,
          type: Y,
          channel: null == n ? t : null
        });
        if (!_) return f(false), {
          shouldClear: false,
          shouldRefocus: true
        };
        try {
          await m(e, i, l)
        } catch (e) {
          return (null == (d = e.body) ? true : d.code) === F.evJ.AUTOMOD_TITLE_BLOCKED && u((0, L.Gx)(e.body, t)), f(false), {
            shouldClear: false,
            shouldRefocus: true
          }
        }
        return (0, I.qB)(t.id, Y.drafts.type), f(false), {
          shouldClear: true,
          shouldRefocus: false
        }
      }, [m, a.textValue, r.name, n, t, h, s]),
      submitting: h
    }
  }({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: p,
    privateThreadMode: C,
    textAreaState: b,
    location: l,
    enableAIFeatures: x
  }), A = (0, k.oD)(p, C) ? c.qtY : c.or_;
  return (0, r.jsx)("div", {
    className: z.chat,
    onMouseDown: d,
    onFocus: d,
    children: (0, r.jsx)("div", {
      className: a()(z.messagesWrapper, "group-spacing-".concat(s)),
      children: (0, r.jsxs)("form", {
        onSubmit: e => {
          e.preventDefault(), Z()
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
                children: (0, r.jsx)(A, {
                  className: W.icon
                })
              }), (0, r.jsx)($, {
                parentChannel: t,
                parentMessageId: n,
                threadSettings: p,
                updateThreadSettings: g,
                error: E,
                disabled: N,
                isGeneratingAI: v,
                enableAIFeatures: x,
                getThreadNameInputAccessory: j
              }), t.type === F.d4z.GUILD_TEXT ? (0, r.jsx)(J, {
                startedFromMessage: null != n,
                threadSettings: p,
                updateThreadSettings: g,
                privateThreadMode: C
              }) : null]
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
            setTextAreaState: y,
            submit: Z,
            error: P
          }), (0, r.jsx)(h.ZP, {
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
  } = e, a = (0, k.oD)(n, l), o = (0, r.jsx)("div", {
    className: z.privateThreadFormTitle,
    children: (0, r.jsx)("span", {
      className: z.privateThreadFormTitleText,
      children: V.intl.string(V.t.F1zyvb)
    })
  }), u = (0, r.jsx)(s.$q, {
    className: z.checkbox,
    type: s.M0.INVERTED,
    disabled: l === k.Jw.PrivateOnly,
    value: a,
    onChange: (e, t) => i({
      isPrivate: t
    }),
    children: (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "none",
      children: V.intl.string(V.t.TRPp3t)
    })
  });
  return t || l === k.Jw.Disabled ? null : (0, r.jsxs)(c.hjN, {
    title: o,
    className: z.formSection,
    children: [u, a ? (0, r.jsx)(c.Text, {
      className: z.privateThreadDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: V.intl.string(V.t.EWXyc3)
    }) : null]
  })
}

function $(e) {
  var t;
  let {
    parentChannel: n,
    parentMessageId: i,
    threadSettings: l,
    updateThreadSettings: a,
    error: o,
    disabled: s,
    isGeneratingAI: u,
    enableAIFeatures: p,
    getThreadNameInputAccessory: h
  } = e, f = null != (t = l.name) ? t : "", m = (0, L.Op)(o, {
    content: f
  }), g = (0, k.Od)(n, i), b = null != i && !p, y = (0, x.Dt)(), _ = p ? V.intl.string(V.t["Nb2/RE"]) : "" !== g ? g : V.intl.string(V.t["Nb2/RE"]);
  return (0, r.jsx)(c.oil, {
    label: V.intl.string(b ? V.t.JPvIiI : V.t.j3XWjI),
    trailing: h(s),
    value: f,
    id: y,
    placeholder: _,
    maxLength: F.HN8,
    onChange: e => {
      a({
        name: (0, U.Z)(e, false)
      }), "" !== e ? d.Z.startTyping(n.id) : d.Z.stopTyping(n.id)
    },
    onBlur: () => {
      let e = (0, U.Z)(f, true);
      e !== f && a({
        name: e
      })
    },
    error: m,
    disabled: s || u
  })
}

function ee(e) {
  let {
    parentChannel: t,
    textAreaState: n,
    setTextAreaState: l,
    submit: s,
    error: p
  } = e, [h, f] = i.useState(true), m = i.useCallback(() => f(true), []), g = i.useCallback(() => f(false), []), b = i.useCallback((e, n, r) => {
    u.Z.saveDraft(t.id, n, T.d.FirstThreadMessage), l(e => ("" !== n && e.textValue !== n ? d.Z.startTyping(t.id) : "" === n && d.Z.stopTyping(t.id), {
      textValue: n,
      richValue: r
    }))
  }, [t.id, l]), y = i.useCallback(e => {
    let {
      value: t,
      uploads: n,
      stickers: r
    } = e;
    return s(t, r, n)
  }, [s]);
  (0, R.yp)({
    event: F.CkL.TEXTAREA_FOCUS,
    handler: m
  }), (0, R.yp)({
    event: F.CkL.TEXTAREA_BLUR,
    handler: g
  });
  let _ = (0, o.e7)([A.Z], () => A.Z.can(F.Plq.ATTACH_FILES, t)),
    x = (0, L.Op)(p, {
      content: n.textValue
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(v.Z, {
      channelId: t.id,
      type: Y,
      canAttachFiles: _
    }), (0, r.jsx)("div", {
      className: z.starterMessageError,
      children: (0, r.jsx)(c.pdY, {
        error: x
      })
    }), (0, r.jsx)(C.ZP, {
      type: Y,
      channel: t,
      placeholder: V.intl.string(V.t.taZfIC),
      textValue: n.textValue,
      richValue: n.richValue,
      focused: h,
      className: a()(z.channelTextArea, z.channelTextAreaWithTypingIndicator),
      innerClassName: a()(z.channelTextAreaInner, {
        [z.channelTextAreaInnerError]: null != x
      }),
      onFocus: m,
      onBlur: g,
      onChange: b,
      onSubmit: y,
      promptToUpload: D.d5
    })]
  })
}

function et(e) {
  let {
    parentChannel: t,
    parentMessageId: n
  } = e, i = (0, o.e7)([N.Z], () => null == n ? null : N.Z.getMessage(t.id, n)), l = P.jU.useSetting();
  return null != i ? (0, r.jsx)(E.Z, {
    className: z.messagePreview,
    message: i,
    channel: t,
    compact: l,
    renderThreadAccessory: false,
    trackAnnouncementViews: true
  }) : null
}