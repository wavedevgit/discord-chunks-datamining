/** Chunk was on 49152 **/
/** chunk id: 657218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => K
}), require("./781311.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430742 = require("./430742.js"),
  Chunk144144 = require("./144144.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk738619 = require("./738619.js"),
  Chunk561472 = require("./561472.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.js"),
  Chunk303628 = require("./303628.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk967128 = require("./967128.js"),
  Chunk665149 = require("./665149.js"),
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
  Chunk842332 = require("./842332.js"),
  Chunk602034 = require("./602034.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk776584 = require("./776584.js"),
  Chunk128337 = require("./128337.js");

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
  return null == l ? null : <b.Gt value={a}><A.I3><section aria-label={W.intl.string(W.t.rBIGBA)} className={V.container}>{<f.Z channel={l} draftType={T.d.FirstThreadMessage} />}{<Q parentChannelId={t} />}{<X parentChannel={l} parentMessageId={n} location={i} />}</section></A.I3></b.Gt>
}

function Q(e) {
  let {
    parentChannelId: t
  } = e, n = i.useCallback(() => {
    let e = T.Z.getThreadSettings(t),
      n = T.Z.getDraft(t, T.d.FirstThreadMessage).trim(),
      r = w.Z.getUploads(t, T.d.FirstThreadMessage);
    if ((null == e ? true : e.name) != null && (null == e ? true : e.name) !== "" || 0 !== n.length || 0 !== r.length) return void h.Z.show({
      title: W.intl.string(W.t["6kDZh4"]),
      body: W.intl.string(W.t.NgS9jY),
      confirmColor: o.Tt.RED,
      confirmText: W.intl.string(W.t["7WGI4O"]),
      confirmVariant: "critical-primary",
      cancelText: W.intl.string(W.t.olcKd3),
      onConfirm: () => {
        (0, F.NK)(t)
      }
    });
    (0, F.NK)(t)
  }, [t]);
  return <C.ZP toolbar={(0, r.jsx)(C.ZP.Icon, {
      icon: c.Dio,
      tooltip: W.intl.string(W.t.cpT0Cg),
      onClick: n
    })}>{<C.ZP.Icon icon={c.or_} disabled={true} aria-label={W.intl.string(W.t["7Xm5QE"])} />}{<C.ZP.Title>{W.intl.string(W.t["4WNcpq"])}</C.ZP.Title>}</C.ZP>
}

function X(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    location: l
  } = e, o = (0, s.e7)([g.Z], () => g.Z.messageGroupSpacing), d = function() {
    let e = i.useContext(A.oo);
    return i.useCallback(() => {
      e.bumpDispatchPriority()
    }, [e])
  }(), {
    threadSettings: h,
    setThreadSettings: f,
    updateThreadSettings: m
  } = function(e, t) {
    let [n, r] = i.useState({}), l = i.useCallback(n => {
      var i, l;
      r(e => Y({}, e, n)), u.Z.changeThreadSettings(e.id, (i = Y({}, n), l = l = {
        parentMessageId: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i))
    }, [e.id, t]);
    return {
      threadSettings: n,
      setThreadSettings: r,
      updateThreadSettings: l
    }
  }(t, n), {
    textAreaState: b,
    setTextAreaState: y
  } = function(e, t) {
    let [n, r] = i.useState((0, x.H2)());
    return i.useEffect(() => {
      function n(n) {
        var i;
        let l = T.Z.getDraft(e.id, T.d.FirstThreadMessage);
        (0 === l.length || true === n) && r((0, x.eK)(l)), t(null != (i = T.Z.getThreadSettings(e.id)) ? i : {})
      }
      return n(true), T.Z.addChangeListener(n), () => {
        T.Z.removeChangeListener(n)
      }
    }, [e.id, t]), {
      textAreaState: n,
      setTextAreaState: r
    }
  }(t, f), _ = (0, M.vH)(t), {
    isGeneratingAI: j,
    enableAIFeatures: O,
    renderAiGenerateButton: C
  } = (0, H.U)({
    parentChannel: t,
    parentMessageId: n,
    updateThreadSettings: m,
    threadSettings: h,
    textAreaState: b
  }), {
    nameError: E,
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
    } = e, [c, u] = i.useState(null), [d, h] = i.useState(null), [p, f] = i.useState(false), g = (0, G.Z)({
      parentChannel: t,
      parentMessageId: n,
      threadSettings: r,
      privateThreadMode: l,
      location: s,
      onThreadCreated: F.ok,
      useDefaultThreadName: true
    });
    return {
      nameError: c,
      messageError: d,
      submit: i.useCallback(async (e, i, l) => {
        var s, c, d;
        if (p) return {
          shouldClear: false,
          shouldRefocus: false
        };
        f(true), null == e && (e = a.textValue), e = e.trim(), (null == i || 0 === i.length) && (i = null == (s = S.Z.getStickerPreview(t.id, q.drafts.type)) ? true : s.map(e => e.id)), (null == l || 0 === l.length) && (l = w.Z.getUploads(t.id, T.d.FirstThreadMessage));
        let m = null != (c = r.name) ? c : "",
          b = (o || null == n) && 0 === m.length,
          y = "" === e && (null == i || 0 === i.length) && 0 === l.length;
        if (u(b ? (0, L.V_)() : null), h(y ? (0, L.T4)() : null), b || y) return f(false), {
          shouldClear: false,
          shouldRefocus: true
        };
        if (null == n) {
          let {
            valid: n
          } = await (0, D.v)({
            content: e,
            stickers: i,
            uploads: l,
            type: q,
            channel: t
          });
          if (!n) return f(false), {
            shouldClear: false,
            shouldRefocus: true
          }
        }
        try {
          await g(e, i, l)
        } catch (e) {
          return (null == (d = e.body) ? true : d.code) === B.evJ.AUTOMOD_TITLE_BLOCKED && u((0, L.Gx)(e.body, t)), f(false), {
            shouldClear: false,
            shouldRefocus: true
          }
        }
        return (0, I.qB)(t.id, q.drafts.type), f(false), {
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
    privateThreadMode: _,
    textAreaState: b,
    location: l,
    enableAIFeatures: O
  }), R = (0, M.oD)(h, _) ? c.qtY : c.or_;
  return <div className={V.chat} onMouseDown={d} onFocus={d}><div className={a()(V.messagesWrapper, "group-spacing-".concat(o))}><form onSubmit={e => {
          e.preventDefault(), P()
        }} className={V.form}>{<c.Ttm className={V.scroller} fade={true}><div className={V.scrollerInner}>{<v.ZP channelId={"create-thread-null"}>{<div className={z.iconWrapper}><R className={z.icon} /></div>}{<$ parentChannel={t} parentMessageId={n} threadSettings={h} updateThreadSettings={m} error={E} disabled={N} isGeneratingAI={j} enableAIFeatures={O} renderAiGenerateButton={C} />}{t.type === B.d4z.GUILD_TEXT ? <J startedFromMessage={null != n} threadSettings={h} updateThreadSettings={m} privateThreadMode={_} /> : null}</v.ZP>}{<et parentChannel={t} parentMessageId={n} />}</div></c.Ttm>}{<div className={V.submitContainer}>{<ee parentChannel={t} textAreaState={b} setTextAreaState={y} submit={P} error={Z} />}{<p.ZP channel={t} isThreadCreation={true} className={V.typingIndicator} isInTextChannel={true} />}</div>}</form></div></div>
}

function J(e) {
  let {
    startedFromMessage: t,
    threadSettings: n,
    updateThreadSettings: i,
    privateThreadMode: l
  } = e, a = (0, M.oD)(n, l), s = <div className={V.privateThreadFormTitle}><span className={V.privateThreadFormTitleText}>{W.intl.string(W.t.F1zyvb)}</span></div>, o = <c.XZJ className={V.checkbox} type={c.XZJ.Types.INVERTED} disabled={l === M.Jw.PrivateOnly} value={a} onChange={(e, t) => i({
      isPrivate: t
    })}><c.Text variant={"text-md/normal"} color={"none"}>{W.intl.string(W.t.TRPp3t)}</c.Text></c.XZJ>;
  return t || l === M.Jw.Disabled ? null : <c.hjN title={s} className={V.formSection}>{o}{a ? <c.Text className={V.privateThreadDescription} variant={"text-xs/normal"} color={"header-secondary"}>{W.intl.string(W.t.EWXyc3)}</c.Text> : null}</c.hjN>
}

function $(e) {
  var t;
  let {
    parentChannel: n,
    parentMessageId: i,
    threadSettings: l,
    updateThreadSettings: s,
    error: u,
    disabled: h,
    isGeneratingAI: p,
    enableAIFeatures: f,
    renderAiGenerateButton: g
  } = e, m = null != (t = l.name) ? t : "", b = (0, L.Op)(u, {
    content: m
  }), y = (0, M.Od)(n, i), x = null != i && !f, _ = (0, O.Dt)(), j = f ? W.intl.string(W.t["Nb2/RE"]) : "" !== y ? y : W.intl.string(W.t["Nb2/RE"]);
  return <c.hjN tag={"label"} htmlFor={_} title={W.intl.string(x ? W.t.JPvIiI : W.t.j3XWjI)} className={V.formSection}><div className={V.threadNameContainer}>{<o.Is value={m} id={_} placeholder={j} maxLength={B.HN8} onChange={e => {
          s({
            name: (0, U.Z)(e, false)
          }), "" !== e ? d.Z.startTyping(n.id) : d.Z.stopTyping(n.id)
        }} onBlur={() => {
          let e = (0, U.Z)(m, true);
          e !== m && s({
            name: e
          })
        }} error={b} disabled={h || p} inputClassName={a()({
          [V.threadNameInputWithAI]: f
        })} />}{g(h)}</div></c.hjN>
}

function ee(e) {
  let {
    parentChannel: t,
    textAreaState: n,
    setTextAreaState: l,
    submit: o,
    error: h
  } = e, [p, f] = i.useState(true), g = i.useCallback(() => f(true), []), m = i.useCallback(() => f(false), []), b = i.useCallback((e, n, r) => {
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
    return o(t, r, n)
  }, [o]);
  (0, A.yp)({
    event: B.CkL.TEXTAREA_FOCUS,
    handler: g
  }), (0, A.yp)({
    event: B.CkL.TEXTAREA_BLUR,
    handler: m
  });
  let x = (0, s.e7)([R.Z], () => R.Z.can(B.Plq.ATTACH_FILES, t)),
    O = (0, L.Op)(h, {
      content: n.textValue
    });
  return <r.Fragment>{<j.Z channelId={t.id} type={q} canAttachFiles={x} />}{<div className={V.starterMessageError}><c.pdY error={O} /></div>}{<_.ZP type={q} channel={t} placeholder={W.intl.string(W.t.taZfIC)} textValue={n.textValue} richValue={n.richValue} focused={p} className={a()(V.channelTextArea, V.channelTextAreaWithTypingIndicator)} innerClassName={a()(V.channelTextAreaInner, {
        [V.channelTextAreaInnerError]: null != O
      })} onFocus={g} onBlur={m} onChange={b} onSubmit={y} promptToUpload={k.d} />}</r.Fragment>
}

function et(e) {
  let {
    parentChannel: t,
    parentMessageId: n
  } = e, i = (0, s.e7)([N.Z], () => null == n ? null : N.Z.getMessage(t.id, n)), l = Z.jU.useSetting();
  return null != i ? <E.Z className={V.messagePreview} message={i} channel={t} compact={l} renderThreadAccessory={false} trackAnnouncementViews={true} /> : null
}