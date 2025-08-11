/** Chunk was on web.js **/
/** chunk id: 508273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk406218 = require("./406218.js"),
  Chunk993860 = require("./993860.js"),
  Chunk328656 = require("./328656.jsx"),
  Chunk708321 = require("./708321.js"),
  Chunk174161 = require("./174161.jsx"),
  Chunk798476 = require("./798476.js"),
  Chunk358595 = require("./358595.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk583136 = require("./583136.js");
let I = 292,
  T = 36,
  S = 48;

function A(e) {
  let {
    invite: t,
    isMemberOfGuild: n,
    message: o,
    onTransitionToInviteChannel: c,
    onAcceptInstantInvite: d
  } = e, f = i.useRef(null), [p, m] = i.useState(true), [A, C] = i.useState(false), R = t.state === y.r2o.ACCEPTING, P = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
  i.useLayoutEffect(() => {
    var e, t;
    C((null != (t = null == (e = f.current) ? true : e.clientHeight) ? t : 0) > I)
  }, [C]);
  let w = (0, _.PC)(t),
    D = i.useCallback(() => {
      A && p && m(false)
    }, [p, A]),
    L = i.useCallback(() => {
      A && (p || m(true))
    }, [p, A]),
    x = i.useMemo(() => {
      var e;
      return A && (null == (e = f.current) ? true : e.clientHeight) != null ? {
        height: p ? I : f.current.clientHeight + T + S,
        transition: P ? true : "height 0.2s ease"
      } : {}
    }, [p, A, P]);
  return null == w ? <b.Z /> : <l.P3F className={a()(v.guildInviteContainer, {
      [v.clickable]: A && p
    })} onClick={D} style={x}>{<div className={v.cardHeightMeasure} ref={f}>{<E.Z7 profile={w} className={v.banner} />}{<E.N3 profile={w} />}{<g.Z profile={w} />}{<h.E profile={w} className={v.mainContent} />}</div>}{A && !p ? <div className={v.hideDetailsButtonContainer}><l.Avr textVariant={"text-xs/medium"} variant={"secondary"} size={"sm"} onClick={L} text={O.intl.string(O.t.xdCLeH)} /></div> : null}{<div className={a()(v.footer, {
        [v.floatingFooter]: A
      })}>{A && p ? <div className={v.gradient} /> : null}{<div className={a()(v.footerContent, {
          [v.collapsedFooterContent]: A && p
        })}><div className={v.buttonContainer}><N invite={t} profile={w} isMemberOfGuild={n} message={o} submitting={R} onTransitionToInviteChannel={c} onAcceptInstantInvite={d} /></div></div>}</div>}</l.P3F>
}

function N(e) {
  let {
    invite: t,
    profile: n,
    isMemberOfGuild: o,
    message: a,
    submitting: s,
    onTransitionToInviteChannel: l,
    onAcceptInstantInvite: u
  } = e, {
    guildId: _,
    ctaType: h
  } = (0, p.ZP)(n, p.F3.INVITE), {
    analyticsLocations: g
  } = (0, f.ZP)(d.Z.INVITE_EMBED), E = i.useCallback(() => {
    let e = o ? "transition" : "accept";
    (0, c.r$)({
      invite: t,
      action: e,
      inviter_id: a.author.id,
      invite_message_id: a.id
    }, g)
  }, [t, a, g, o]);
  return null == h ? null : <m.o guildId={_} ctaType={h} submitting={s} onGoToGuild={l} onAcceptInvite={u} onStartApplication={u} onComplete={E} />
}