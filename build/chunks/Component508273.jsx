/** Chunk was on web.js **/
/** chunk id: 508273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
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
  Chunk358595 = require("./358595.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk492681 = require("./492681.js");
let I = 292,
  S = 36,
  T = 48;

function A(e) {
  let {
    invite: t,
    isMemberOfGuild: n,
    message: a,
    onTransitionToInviteChannel: c,
    onAcceptInstantInvite: d
  } = e, f = i.useRef(null), [p, m] = i.useState(true), [A, N] = i.useState(false), R = t.state === y.r2o.ACCEPTING, P = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
  i.useLayoutEffect(() => {
    var e, t;
    N((null != (t = null == (e = f.current) ? true : e.clientHeight) ? t : 0) > I)
  }, [N]);
  let w = (0, _.PC)(t),
    D = i.useCallback(() => {
      A && p && m(false)
    }, [p, A]),
    x = i.useCallback(() => {
      A && (p || m(true))
    }, [p, A]),
    L = i.useMemo(() => {
      var e;
      return A && (null == (e = f.current) ? true : e.clientHeight) != null ? {
        height: p ? I : f.current.clientHeight + S + T,
        transition: P ? true : "height 0.2s ease"
      } : {}
    }, [p, A, P]);
  return null == w ? (0, r.jsx)(b.Z, {}) : (0, r.jsxs)(l.P3F, {
    className: o()(v.guildInviteContainer, {
      [v.clickable]: A && p
    }),
    onClick: D,
    style: L,
    children: [(0, r.jsxs)("div", {
      className: v.cardHeightMeasure,
      ref: f,
      children: [(0, r.jsx)(E.Z7, {
        profile: w,
        className: v.banner
      }), (0, r.jsx)(E.N3, {
        profile: w
      }), (0, r.jsx)(g.Z, {
        profile: w
      }), (0, r.jsx)(h.E, {
        profile: w,
        className: v.mainContent
      })]
    }), A && !p ? (0, r.jsx)("div", {
      className: v.hideDetailsButtonContainer,
      children: (0, r.jsx)(l.Avr, {
        textVariant: "text-xs/medium",
        variant: "secondary",
        size: "sm",
        onClick: x,
        text: O.intl.string(O.t.xdCLeH)
      })
    }) : null, (0, r.jsxs)("div", {
      className: o()(v.footer, {
        [v.floatingFooter]: A
      }),
      children: [A && p ? (0, r.jsx)("div", {
        className: v.gradient
      }) : null, (0, r.jsx)("div", {
        className: o()(v.footerContent, {
          [v.collapsedFooterContent]: A && p
        }),
        children: (0, r.jsx)("div", {
          className: v.buttonContainer,
          children: (0, r.jsx)(C, {
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

function C(e) {
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
  } = (0, p.ZP)(n, p.F3.INVITE), {
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