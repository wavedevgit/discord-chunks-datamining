/** Chunk was on web.js **/
/** chunk id: 128435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./314940.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk263568 = require("./263568.js"),
  Chunk481060 = require("./481060.js"),
  Chunk203143 = require("./203143.js"),
  Chunk365206 = require("./365206.js"),
  Chunk294608 = require("./294608.js"),
  Chunk65145 = require("./65145.jsx"),
  Chunk920557 = require("./920557.js"),
  Chunk484953 = require("./484953.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e) {
  let {
    media: t
  } = e;
  return <c.X6q variant={"text-md/medium"} className={h.question} scaleFontToUserSetting={true}>{t.text}</c.X6q>
}

function b(e) {
  let {
    buttonLabel: t,
    secondaryLabel: n,
    handleClick: i,
    isInteractive: o,
    className: s
  } = e;
  return <div className={a()(h.detailsText, s)}>{o ? <c.Avr text={t} onClick={i} variant={"secondary"} textVariant={"text-sm/medium"} /> : <c.Text variant={"text-sm/normal"} color={"text-muted"} scaleFontToUserSetting={true}>{t}</c.Text>}{null != n && <c.Text variant={"text-sm/normal"} color={"text-muted"} scaleFontToUserSetting={true}>{n}</c.Text>}</div>
}

function y(e, t) {
  let n = {
    answers: t.answers,
    answersInteraction: t.answersInteraction,
    answerTapAccessibilityLabel: t.answerTapAccessibilityLabel,
    isExpired: t.isExpired,
    canTapAnswers: t.canTapAnswers,
    hasSelectedAnyAnswer: t.hasSelectedAnswer,
    myAvatarUrl: t.myAvatarUrl,
    canShowVoteCounts: t.canShowVoteCounts
  };
  return (0, s.EQ)(t.layoutType).with(l.C.DEFAULT, () => <p.K{...g({}, n)} />).with(l.C.IMAGE_ONLY_ANSWERS, () => <d.Z{...g({}, n)} />).otherwise(() => null)
}

function O(e) {
  let {
    action: t,
    channelId: n,
    messageId: o,
    isInteractive: a,
    className: s
  } = e, {
    actionButtonRef: l,
    manageFocusOnAction: d
  } = (0, _.dv)(), f = i.useCallback(async () => {
    (null == t ? true : t.type) != null && (await u.Z.handlePollActionTapped({
      channelId: n,
      messageId: o,
      type: t.type
    }), d(t.type))
  }, [null == t ? true : t.type, n, o, d]);
  return null == t ? null : "button" === t.presentation || "secondaryButton" === t.presentation ? <c.zxk buttonRef={l} onClick={f} disabled={!t.enabled} variant={"secondaryButton" === t.presentation ? "secondary" : "primary"} size={"sm"} text={t.label} /> : "textButton" === t.presentation ? <c.Avr buttonRef={l} onClick={f} text={t.label} variant={"secondary"} textVariant={"text-sm/medium"} /> : <b buttonLabel={t.label} secondaryLabel={t.secondaryLabel} handleClick={f} isInteractive={a} className={s} />
}

function v(e) {
  let {
    message: t,
    poll: n,
    className: i
  } = e, o = (0, f.$B)(n.containerStyle), s = y(t, n);
  return null == s ? null : <div className={a()(h.container, o, i)}><c.y5t>{<div className={h.header}>{<E media={n.question} />}{null != n.promptLabel && <c.Text variant={"text-sm/normal"} color={"text-muted"} className={h.prompt} scaleFontToUserSetting={true}>{n.promptLabel}</c.Text>}</div>}{s}{<div className={h.bottomBar}>{<O channelId={t.getChannelId()} messageId={t.id} action={n.secondaryAction} className={h.secondaryAction} isInteractive={n.isInteractive} />}{<O channelId={t.getChannelId()} messageId={t.id} action={n.tertiaryAction} className={h.tertiaryAction} />}{<O channelId={t.getChannelId()} messageId={t.id} action={n.primaryAction} />}</div>}</c.y5t></div>
}

function I(e) {
  let {
    message: t,
    poll: n,
    className: i
  } = e;
  return <f.XL message={t} poll={n}><_.Pk><v message={t} poll={n} className={i} /></_.Pk></f.XL>
}