/** Chunk was on 97492 **/
/** chunk id: 168675, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => q
}), require("./733351.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk465532 = require("./465532.js"),
  Chunk414798 = require("./414798.js"),
  Chunk579872 = require("./579872.jsx"),
  Chunk147192 = require("./147192.jsx"),
  Chunk738876 = require("./738876.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk171593 = require("./171593.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk314307 = require("./314307.jsx"),
  Chunk58736 = require("./58736.jsx"),
  Chunk636922 = require("./636922.jsx"),
  Chunk931664 = require("./931664.js"),
  Chunk631576 = require("./631576.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk522602 = require("./522602.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk460350 = require("./460350.js"),
  Chunk518960 = require("./518960.js"),
  Chunk710640 = require("./710640.js"),
  Chunk393309 = require("./393309.js"),
  Chunk474078 = require("./474078.js"),
  Chunk747926 = require("./747926.js"),
  Chunk965601 = require("./965601.jsx"),
  Chunk55294 = require("./55294.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk770587 = require("./770587.js"),
  Chunk790687 = require("./790687.js");

function z(e) {
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
let Y = Chunk355622.oU.THREAD_CREATION;

function q(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: l
  } = e, i = (0, s.bG)([I.A], () => I.A.getChannel(t)), {
    analyticsLocations: a
  } = (0, g.Ay)(b.A.CREATE_THREAD);
  return null == i ? null : (0, r.jsx)(g.f5, {
    value: a,
    children: (0, r.jsx)(R.Ah, {
      children: (0, r.jsxs)("section", {
        "aria-label": B.intl.string(B.t.rBIGBL),
        className: K.kL,
        children: [(0, r.jsx)(p.A, {
          channel: i,
          draftType: N.C.FirstThreadMessage
        }), (0, r.jsx)(X, {
          parentChannelId: t
        }), (0, r.jsx)(J, {
          parentChannel: i,
          parentMessageId: n,
          location: l
        })]
      })
    })
  })
}

function X(e) {
  let {
    parentChannelId: t
  } = e, n = l.useCallback(() => {
    let e = N.A.getThreadSettings(t),
      n = N.A.getDraft(t, N.C.FirstThreadMessage).trim(),
      r = w.A.getUploads(t, N.C.FirstThreadMessage);
    (null == e ? true : e.name) != null && (null == e ? true : e.name) !== "" || 0 !== n.length || 0 !== r.length ? d.A.show({
      title: B.intl.string(B.t["6kDZh1"]),
      body: B.intl.string(B.t.NgS9jX),
      confirmText: B.intl.string(B.t["7WGI4H"]),
      confirmVariant: "critical-primary",
      cancelText: B.intl.string(B.t["olcKd/"]),
      onConfirm: () => {
        (0, U.bA)(t)
      }
    }) : (0, U.bA)(t)
  }, [t]);
  return (0, r.jsxs)(x.Ay, {
    toolbar: (0, r.jsx)(x.Ay.Icon, {
      icon: o.PGe,
      tooltip: B.intl.string(B.t.cpT0Cq),
      onClick: n
    }),
    children: [(0, r.jsx)(x.Ay.Icon, {
      icon: o.ysw,
      disabled: true,
      "aria-label": B.intl.string(B.t["7Xm5QI"])
    }), (0, r.jsx)(x.Ay.Title, {
      children: B.intl.string(B.t["4WNcpu"])
    })]
  })
}

function J(e) {
  let t, {
      parentChannel: n,
      parentMessageId: i,
      location: u
    } = e,
    d = (0, s.bG)([h.A], () => h.A.messageGroupSpacing),
    p = (t = l.useContext(R.EH), l.useCallback(() => {
      t.bumpDispatchPriority()
    }, [t])),
    {
      threadSettings: b,
      setThreadSettings: g,
      updateThreadSettings: m
    } = function(e, t) {
      let n = (0, s.bG)([N.A], () => {
          var t;
          return null != (t = N.A.getThreadSettings(e.id)) ? t : {}
        }, [e.id]),
        [r, i] = l.useState(n),
        a = l.useCallback(n => {
          var r, l;
          i(e => z({}, e, n)), c.A.changeThreadSettings(e.id, (r = z({}, n), l = l = {
            parentMessageId: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
          }), r))
        }, [e.id, t]);
      return {
        threadSettings: r,
        setThreadSettings: i,
        updateThreadSettings: a
      }
    }(n, i),
    {
      textAreaState: y,
      setTextAreaState: O
    } = function(e, t) {
      let [n, r] = l.useState((0, A.N3)());
      return l.useEffect(() => {
        function n(n) {
          var l;
          let i = N.A.getDraft(e.id, N.C.FirstThreadMessage);
          (0 === i.length || true === n) && r((0, A.ur)(i)), t(null != (l = N.A.getThreadSettings(e.id)) ? l : {})
        }
        return n(true), N.A.addChangeListener(n), () => {
          N.A.removeChangeListener(n)
        }
      }, [e.id, t]), {
        textAreaState: n,
        setTextAreaState: r
      }
    }(n, g),
    j = (0, G.EN)(n),
    {
      isGeneratingAI: x,
      enableAIFeatures: E,
      getThreadNameInputAccessory: S
    } = (0, V.C)({
      parentChannel: n,
      parentMessageId: i,
      updateThreadSettings: m,
      threadSettings: b,
      textAreaState: y
    }),
    {
      nameError: I,
      messageError: T,
      submit: P,
      submitting: M
    } = function(e) {
      let {
        parentChannel: t,
        parentMessageId: n,
        threadSettings: r,
        privateThreadMode: i,
        textAreaState: a,
        location: s,
        enableAIFeatures: o
      } = e, [c, u] = l.useState(null), [d, f] = l.useState(null), [p, h] = l.useState(false), b = (0, F.A)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: r,
        privateThreadMode: i,
        location: s,
        onThreadCreated: U.JA,
        useDefaultThreadName: true
      });
      return {
        nameError: c,
        messageError: d,
        submit: l.useCallback(async (e, l, i) => {
          var s, c, d;
          if (p) return {
            shouldClear: false,
            shouldRefocus: false
          };
          h(true), null == e && (e = a.textValue), e = e.trim(), (null == l || 0 === l.length) && (l = null == (c = _.A.getStickerPreview(t.id, Y.drafts.type)) ? true : c.map(e => e.id)), (null == i || 0 === i.length) && (i = w.A.getUploads(t.id, N.C.FirstThreadMessage));
          let g = null != (s = r.name) ? s : "",
            m = (o || null == n) && 0 === g.length,
            A = "" === e && (null == l || 0 === l.length) && 0 === i.length;
          if (u(m ? (0, L.uW)() : null), f(A ? (0, L.fo)() : null), m || A) return h(false), {
            shouldClear: false,
            shouldRefocus: true
          };
          let {
            valid: y
          } = await (0, D.i)({
            content: e,
            stickers: l,
            uploads: i,
            type: Y,
            channel: null == n ? t : null
          });
          if (!y) return h(false), {
            shouldClear: false,
            shouldRefocus: true
          };
          try {
            await b(e, l, i)
          } catch (e) {
            return (null == (d = e.body) ? true : d.code) === H.t02.AUTOMOD_TITLE_BLOCKED && u((0, L.z0)(e.body, t)), h(false), {
              shouldClear: false,
              shouldRefocus: true
            }
          }
          return (0, C.x5)(t.id, Y.drafts.type), h(false), {
            shouldClear: true,
            shouldRefocus: false
          }
        }, [b, a.textValue, r.name, n, t, p, o]),
        submitting: p
      }
    }({
      parentChannel: n,
      parentMessageId: i,
      threadSettings: b,
      privateThreadMode: j,
      textAreaState: y,
      location: u,
      enableAIFeatures: E
    }),
    k = (0, G.Iy)(b, j) ? o.tn0 : o.ysw;
  return (0, r.jsx)("div", {
    className: K.TE,
    onMouseDown: p,
    onFocus: p,
    children: (0, r.jsx)("div", {
      className: a()(K.Og, "group-spacing-".concat(d)),
      children: (0, r.jsxs)("form", {
        onSubmit: e => {
          e.preventDefault(), P()
        },
        className: K.Zd,
        children: [(0, r.jsx)(o.HOs, {
          className: K.XG,
          fade: true,
          children: (0, r.jsxs)("div", {
            className: K.bv,
            children: [(0, r.jsxs)(v.Ay, {
              channelId: "create-thread-null",
              children: [(0, r.jsx)("div", {
                className: a()(W.P0, K.P0),
                children: (0, r.jsx)(k, {
                  className: W.Kk
                })
              }), (0, r.jsxs)(o.nVY, {
                children: [(0, r.jsx)(Z, {
                  parentChannel: n,
                  parentMessageId: i,
                  threadSettings: b,
                  updateThreadSettings: m,
                  error: I,
                  disabled: M,
                  isGeneratingAI: x,
                  enableAIFeatures: E,
                  getThreadNameInputAccessory: S
                }), n.type === H.rbe.GUILD_TEXT ? (0, r.jsx)(Q, {
                  startedFromMessage: null != i,
                  threadSettings: b,
                  updateThreadSettings: m,
                  privateThreadMode: j
                }) : null]
              })]
            }), (0, r.jsx)(ee, {
              parentChannel: n,
              parentMessageId: i
            })]
          })
        }), (0, r.jsxs)("div", {
          className: K.Eh,
          children: [(0, r.jsx)($, {
            parentChannel: n,
            textAreaState: y,
            setTextAreaState: O,
            submit: P,
            error: T
          }), (0, r.jsx)(f.Ay, {
            channel: n,
            isThreadCreation: true,
            className: K.RL,
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
    updateThreadSettings: l,
    privateThreadMode: i
  } = e, a = (0, G.Iy)(n, i), s = (0, r.jsx)(o.Checkbox, {
    disabled: i === G.jk.PrivateOnly,
    checked: a,
    onChange: e => l({
      isPrivate: e
    }),
    label: B.intl.string(B.t.TRPp3g)
  });
  return t || i === G.jk.Disabled ? null : (0, r.jsx)(o.D0$, {
    label: B.intl.string(B.t.F1zyvU),
    helperText: a ? B.intl.string(B.t.EWXycz) : true,
    children: s
  })
}

function Z(e) {
  var t;
  let {
    parentChannel: n,
    parentMessageId: l,
    threadSettings: i,
    updateThreadSettings: a,
    error: s,
    disabled: c,
    isGeneratingAI: d,
    enableAIFeatures: f,
    getThreadNameInputAccessory: p
  } = e, h = null != (t = i.name) ? t : "", b = (0, L.vr)(s, {
    content: h
  }), g = (0, G.l1)(n, l), m = null != l && !f, A = (0, j.GV)(), y = f ? B.intl.string(B.t["Nb2/RE"]) : "" !== g ? g : B.intl.string(B.t["Nb2/RE"]);
  return (0, r.jsx)(o.ksK, {
    label: B.intl.string(m ? B.t.JPvIiL : B.t.j3XWjD),
    trailing: p(c),
    value: h,
    id: A,
    placeholder: y,
    maxLength: H.Ign,
    onChange: e => {
      a({
        name: (0, k.A)(e, false)
      }), "" !== e ? u.A.startTyping(n.id) : u.A.stopTyping(n.id)
    },
    onBlur: () => {
      let e = (0, k.A)(h, true);
      e !== h && a({
        name: e
      })
    },
    error: b,
    disabled: c || d
  })
}

function $(e) {
  let {
    parentChannel: t,
    textAreaState: n,
    setTextAreaState: i,
    submit: d,
    error: f
  } = e, [p, h] = l.useState(true), b = l.useCallback(() => h(true), []), g = l.useCallback(() => h(false), []), m = l.useCallback((e, n, r) => {
    c.A.saveDraft(t.id, n, N.C.FirstThreadMessage), i(e => ("" !== n && e.textValue !== n ? u.A.startTyping(t.id) : "" === n && u.A.stopTyping(t.id), {
      textValue: n,
      richValue: r
    }))
  }, [t.id, i]), A = l.useCallback(e => {
    let {
      value: t,
      uploads: n,
      stickers: r
    } = e;
    return d(t, r, n)
  }, [d]);
  (0, R.Vo)({
    event: H.jej.TEXTAREA_FOCUS,
    handler: b
  }), (0, R.Vo)({
    event: H.jej.TEXTAREA_BLUR,
    handler: g
  });
  let j = (0, s.bG)([P.A], () => P.A.can(H.xBc.ATTACH_FILES, t)),
    v = (0, L.vr)(f, {
      content: n.textValue
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O.A, {
      channelId: t.id,
      type: Y,
      canAttachFiles: j
    }), (0, r.jsx)("div", {
      className: K.xN,
      children: (0, r.jsx)(o.dzK, {
        error: v
      })
    }), (0, r.jsx)(y.Ay, {
      type: Y,
      channel: t,
      placeholder: B.intl.string(B.t.taZfIC),
      textValue: n.textValue,
      richValue: n.richValue,
      focused: p,
      className: a()(K.gM, K.Yy),
      innerClassName: a()(K.SL, {
        [K.cr]: null != v
      }),
      onFocus: b,
      onBlur: g,
      onChange: m,
      onSubmit: A,
      promptToUpload: M.R
    })]
  })
}

function ee(e) {
  let {
    parentChannel: t,
    parentMessageId: n
  } = e, l = (0, s.bG)([T.A], () => null == n ? null : T.A.getMessage(t.id, n)), i = S.hH.useSetting();
  return null != l ? (0, r.jsx)(E.A, {
    className: K.IL,
    message: l,
    channel: t,
    compact: i,
    renderThreadAccessory: false,
    trackAnnouncementViews: true
  }) : null
}