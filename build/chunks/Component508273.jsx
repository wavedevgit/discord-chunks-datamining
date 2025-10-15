/** Chunk was on web.js **/
/** chunk id: 508273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk406218 = require("./406218.js"),
  Chunk993860 = require("./993860.js"),
  Chunk328656 = require("./328656.jsx"),
  Chunk708321 = require("./708321.jsx"),
  Chunk174161 = require("./174161.jsx"),
  Chunk798476 = require("./798476.jsx"),
  Chunk254887 = require("./254887.jsx"),
  Chunk358595 = require("./358595.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk492681 = require("./492681.js");
let T = 292,
  S = 36,
  A = 48;

function C(e) {
  let {
    invite: t,
    isMemberOfGuild: n,
    message: a,
    onTransitionToInviteChannel: c,
    onAcceptInstantInvite: d
  } = e, f = i.useRef(null), [p, m] = i.useState(true), [C, R] = i.useState(false), P = t.state === O.r2o.ACCEPTING, w = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
  i.useLayoutEffect(() => {
    var e, t;
    R((null != (t = null == (e = f.current) ? true : e.clientHeight) ? t : 0) > T)
  }, [R]);
  let D = (0, _.PC)(t),
    L = i.useCallback(() => {
      C && p && m(false)
    }, [p, C]),
    x = i.useCallback(() => {
      C && (p || m(true))
    }, [p, C]),
    M = i.useMemo(() => {
      var e;
      return C && (null == (e = f.current) ? true : e.clientHeight) != null ? {
        height: p ? T : f.current.clientHeight + S + A,
        transition: w ? true : "height 0.2s ease"
      } : {}
    }, [p, C, w]);
  return null == D ? (0, r.jsx)(y.Z, {}) : (0, r.jsxs)(l.kL8, {
    className: o()(I.guildInviteContainer, {
      [I.clickable]: C && p
    }),
    onClick: L,
    style: M,
    "aria-label": v.intl.string(v.t.dcl9MQ),
    children: [(0, r.jsxs)("div", {
      className: I.cardHeightMeasure,
      ref: f,
      children: [(0, r.jsx)(E.Z7, {
        profile: D,
        className: I.banner
      }), (0, r.jsx)(E.N3, {
        profile: D
      }), (0, r.jsx)(g.Z, {
        profile: D
      }), (0, r.jsx)(h.E, {
        profile: D,
        className: I.mainContent
      }), (0, r.jsx)(b.Z, {
        invite: t
      })]
    }), C && !p ? (0, r.jsx)("div", {
      className: I.hideDetailsButtonContainer,
      children: (0, r.jsx)(l.Avr, {
        textVariant: "text-xs/medium",
        variant: "secondary",
        size: "sm",
        onClick: x,
        text: v.intl.string(v.t.xdCLeM)
      })
    }) : null, (0, r.jsxs)("div", {
      className: o()(I.footer, {
        [I.floatingFooter]: C
      }),
      children: [C && p ? (0, r.jsx)("div", {
        className: I.gradient
      }) : null, (0, r.jsx)("div", {
        className: o()(I.footerContent, {
          [I.collapsedFooterContent]: C && p
        }),
        children: (0, r.jsx)("div", {
          className: I.buttonContainer,
          children: (0, r.jsx)(N, {
            invite: t,
            profile: D,
            isMemberOfGuild: n,
            message: a,
            submitting: P,
            onTransitionToInviteChannel: c,
            onAcceptInstantInvite: d
          })
        })
      })]
    })]
  })
}

function N(e) {
  let {
    invite: t,
    profile: n,
    isMemberOfGuild: a,
    message: o,
    submitting: s,
    onTransitionToInviteChannel: l,
    onAcceptInstantInvite: u
  } = e, {
    guildId: _,
    ctaType: h
  } = (0, p.ZP)(n, p.F3.INVITE, t.code), {
    analyticsLocations: g
  } = (0, f.ZP)(d.Z.INVITE_EMBED), E = i.useCallback(() => {
    let e = a ? "transition" : "accept";
    (0, c.r$)({
      invite: t,
      action: e,
      inviter_id: o.author.id,
      invite_message_id: o.id
    }, g)
  }, [t, o, g, a]);
  return null == h ? null : (0, r.jsx)(m.o, {
    guildId: _,
    ctaType: h,
    submitting: s,
    onGoToGuild: l,
    onAcceptInvite: u,
    onStartApplication: u,
    onComplete: E
  })
}