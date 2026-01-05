/** Chunk was on web.js **/
/** chunk id: 508273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
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
  Chunk411198 = require("./411198.js"),
  Chunk254887 = require("./254887.jsx"),
  Chunk358595 = require("./358595.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk642438 = require("./642438.js");
let T = 292,
  C = 36,
  A = 48;

function N(e) {
  let {
    invite: t,
    isMemberOfGuild: n,
    message: a,
    onTransitionToInviteChannel: c,
    onAcceptInstantInvite: d
  } = e, f = i.useRef(null), [_, h] = i.useState(true), [N, R] = i.useState(false), w = t.state === v.r2o.ACCEPTING, D = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
  i.useLayoutEffect(() => {
    var e, t;
    R((null != (t = null == (e = f.current) ? true : e.clientHeight) ? t : 0) > T)
  }, [R]);
  let x = (0, p.PC)(t),
    L = i.useCallback(() => {
      N && _ && h(false)
    }, [_, N]),
    j = i.useCallback(() => {
      N && (_ || h(true))
    }, [_, N]),
    M = i.useMemo(() => {
      var e;
      return N && (null == (e = f.current) ? true : e.clientHeight) != null ? {
        height: _ ? T : f.current.clientHeight + C + A,
        transition: D ? true : "height 0.2s ease"
      } : {}
    }, [_, N, D]);
  return null == x ? (0, r.jsx)(O.Z, {}) : (0, r.jsxs)(l.kL8, {
    className: o()(I.guildInviteContainer, {
      [I.clickable]: N && _
    }),
    onClick: L,
    style: M,
    "aria-label": S.intl.string(S.t.dcl9MQ),
    children: [(0, r.jsxs)("div", {
      className: I.cardHeightMeasure,
      ref: f,
      children: [(0, r.jsx)(E.Z7, {
        profile: x,
        className: I.banner
      }), (0, r.jsx)(E.N3, {
        profile: x
      }), (0, r.jsx)(g.Z, {
        profile: x
      }), (0, r.jsx)(m.E, {
        profile: x,
        className: I.mainContent
      }), (0, r.jsx)(y.Z, {
        guild: null != t.guild ? (0, b.Qs)(t.guild) : null,
        roles: t.roles,
        className: I.rolesList
      })]
    }), N && !_ ? (0, r.jsx)("div", {
      className: I.hideDetailsButtonContainer,
      children: (0, r.jsx)(l.Avr, {
        textVariant: "text-xs/medium",
        variant: "secondary",
        size: "sm",
        onClick: j,
        text: S.intl.string(S.t.xdCLeM)
      })
    }) : null, (0, r.jsxs)("div", {
      className: o()(I.footer, {
        [I.floatingFooter]: N
      }),
      children: [N && _ ? (0, r.jsx)("div", {
        className: I.gradient
      }) : null, (0, r.jsx)("div", {
        className: o()(I.footerContent, {
          [I.collapsedFooterContent]: N && _
        }),
        children: (0, r.jsx)("div", {
          className: I.buttonContainer,
          children: (0, r.jsx)(P, {
            invite: t,
            profile: x,
            isMemberOfGuild: n,
            message: a,
            submitting: w,
            onTransitionToInviteChannel: c,
            onAcceptInstantInvite: d
          })
        })
      })]
    })]
  })
}

function P(e) {
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