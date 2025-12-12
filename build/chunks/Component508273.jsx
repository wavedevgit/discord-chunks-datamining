/** Chunk was on web.js **/
/** chunk id: 508273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  C = 48;

function A(e) {
  let {
    invite: t,
    isMemberOfGuild: n,
    message: o,
    onTransitionToInviteChannel: c,
    onAcceptInstantInvite: d
  } = e, f = i.useRef(null), [_, h] = i.useState(true), [A, P] = i.useState(false), R = t.state === O.r2o.ACCEPTING, w = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
  i.useLayoutEffect(() => {
    var e, t;
    P((null != (t = null == (e = f.current) ? true : e.clientHeight) ? t : 0) > I)
  }, [P]);
  let D = (0, p.PC)(t),
    x = i.useCallback(() => {
      A && _ && h(false)
    }, [_, A]),
    L = i.useCallback(() => {
      A && (_ || h(true))
    }, [_, A]),
    j = i.useMemo(() => {
      var e;
      return A && (null == (e = f.current) ? true : e.clientHeight) != null ? {
        height: _ ? I : f.current.clientHeight + T + C,
        transition: w ? true : "height 0.2s ease"
      } : {}
    }, [_, A, w]);
  return null == D ? (0, r.jsx)(y.Z, {}) : (0, r.jsxs)(l.kL8, {
    className: a()(S.guildInviteContainer, {
      [S.clickable]: A && _
    }),
    onClick: x,
    style: j,
    "aria-label": v.intl.string(v.t.dcl9MQ),
    children: [(0, r.jsxs)("div", {
      className: S.cardHeightMeasure,
      ref: f,
      children: [(0, r.jsx)(E.Z7, {
        profile: D,
        className: S.banner
      }), (0, r.jsx)(E.N3, {
        profile: D
      }), (0, r.jsx)(g.Z, {
        profile: D
      }), (0, r.jsx)(m.E, {
        profile: D,
        className: S.mainContent
      }), (0, r.jsx)(b.Z, {
        invite: t
      })]
    }), A && !_ ? (0, r.jsx)("div", {
      className: S.hideDetailsButtonContainer,
      children: (0, r.jsx)(l.Avr, {
        textVariant: "text-xs/medium",
        variant: "secondary",
        size: "sm",
        onClick: L,
        text: v.intl.string(v.t.xdCLeM)
      })
    }) : null, (0, r.jsxs)("div", {
      className: a()(S.footer, {
        [S.floatingFooter]: A
      }),
      children: [A && _ ? (0, r.jsx)("div", {
        className: S.gradient
      }) : null, (0, r.jsx)("div", {
        className: a()(S.footerContent, {
          [S.collapsedFooterContent]: A && _
        }),
        children: (0, r.jsx)("div", {
          className: S.buttonContainer,
          children: (0, r.jsx)(N, {
            invite: t,
            profile: D,
            isMemberOfGuild: n,
            message: o,
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
    isMemberOfGuild: o,
    message: a,
    submitting: s,
    onTransitionToInviteChannel: l,
    onAcceptInstantInvite: u
  } = e, {
    guildId: p,
    ctaType: m
  } = (0, _.ZP)(n, _.F3.INVITE, t.code), {
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