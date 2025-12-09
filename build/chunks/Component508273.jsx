/** Chunk was on web.js **/
/** chunk id: 508273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let I = 292,
  T = 36,
  A = 48;

function C(e) {
  let {
    invite: t,
    isMemberOfGuild: n,
    message: a,
    onTransitionToInviteChannel: c,
    onAcceptInstantInvite: d
  } = e, f = i.useRef(null), [_, h] = i.useState(true), [C, P] = i.useState(false), R = t.state === O.r2o.ACCEPTING, D = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
  i.useLayoutEffect(() => {
    var e, t;
    P((null != (t = null == (e = f.current) ? true : e.clientHeight) ? t : 0) > I)
  }, [P]);
  let w = (0, p.PC)(t),
    x = i.useCallback(() => {
      C && _ && h(false)
    }, [_, C]),
    L = i.useCallback(() => {
      C && (_ || h(true))
    }, [_, C]),
    j = i.useMemo(() => {
      var e;
      return C && (null == (e = f.current) ? true : e.clientHeight) != null ? {
        height: _ ? I : f.current.clientHeight + T + A,
        transition: D ? true : "height 0.2s ease"
      } : {}
    }, [_, C, D]);
  return null == w ? (0, r.jsx)(y.Z, {}) : (0, r.jsxs)(l.kL8, {
    className: o()(S.guildInviteContainer, {
      [S.clickable]: C && _
    }),
    onClick: x,
    style: j,
    "aria-label": v.intl.string(v.t.dcl9MQ),
    children: [(0, r.jsxs)("div", {
      className: S.cardHeightMeasure,
      ref: f,
      children: [(0, r.jsx)(E.Z7, {
        profile: w,
        className: S.banner
      }), (0, r.jsx)(E.N3, {
        profile: w
      }), (0, r.jsx)(g.Z, {
        profile: w
      }), (0, r.jsx)(m.E, {
        profile: w,
        className: S.mainContent
      }), (0, r.jsx)(b.Z, {
        invite: t
      })]
    }), C && !_ ? (0, r.jsx)("div", {
      className: S.hideDetailsButtonContainer,
      children: (0, r.jsx)(l.Avr, {
        textVariant: "text-xs/medium",
        variant: "secondary",
        size: "sm",
        onClick: L,
        text: v.intl.string(v.t.xdCLeM)
      })
    }) : null, (0, r.jsxs)("div", {
      className: o()(S.footer, {
        [S.floatingFooter]: C
      }),
      children: [C && _ ? (0, r.jsx)("div", {
        className: S.gradient
      }) : null, (0, r.jsx)("div", {
        className: o()(S.footerContent, {
          [S.collapsedFooterContent]: C && _
        }),
        children: (0, r.jsx)("div", {
          className: S.buttonContainer,
          children: (0, r.jsx)(N, {
            invite: t,
            profile: w,
            isMemberOfGuild: n,
            message: a,
            submitting: R,
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
    guildId: p,
    ctaType: m
  } = (0, _.ZP)(n, _.F3.INVITE, t.code), {
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
  return null == m ? null : (0, r.jsx)(h.o, {
    guildId: p,
    ctaType: m,
    submitting: s,
    onGoToGuild: l,
    onAcceptInvite: u,
    onStartApplication: u,
    onComplete: E
  })
}