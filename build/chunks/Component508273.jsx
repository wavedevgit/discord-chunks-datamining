/** Chunk was on 91173 **/
/** chunk id: 508273, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk358595 = require("./358595.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk492681 = require("./492681.js");

function y(e) {
  let {
    invite: t,
    isMemberOfGuild: n,
    message: l,
    onTransitionToInviteChannel: c,
    onAcceptInstantInvite: d
  } = e, p = i.useRef(null), [f, g] = i.useState(true), [y, j] = i.useState(false), I = t.state === C.r2o.ACCEPTING, S = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
  i.useLayoutEffect(() => {
    var e, t;
    j((null != (t = null == (e = p.current) ? true : e.clientHeight) ? t : 0) > 292)
  }, [j]);
  let T = (0, m.PC)(t),
    P = i.useCallback(() => {
      y && f && g(false)
    }, [f, y]),
    N = i.useCallback(() => {
      y && (f || g(true))
    }, [f, y]),
    A = i.useMemo(() => {
      var e;
      return y && (null == (e = p.current) ? true : e.clientHeight) != null ? {
        height: f ? 292 : p.current.clientHeight + 36 + 48,
        transition: S ? true : "height 0.2s ease"
      } : {}
    }, [f, y, S]);
  return null == T ? (0, r.jsx)(E.Z, {}) : (0, r.jsxs)(s.P3F, {
    className: a()(O.guildInviteContainer, {
      [O.clickable]: y && f
    }),
    onClick: P,
    style: A,
    children: [(0, r.jsxs)("div", {
      className: O.cardHeightMeasure,
      ref: p,
      children: [(0, r.jsx)(b.Z7, {
        profile: T,
        className: O.banner
      }), (0, r.jsx)(b.N3, {
        profile: T
      }), (0, r.jsx)(h.Z, {
        profile: T
      }), (0, r.jsx)(_.E, {
        profile: T,
        className: O.mainContent
      })]
    }), y && !f ? (0, r.jsx)("div", {
      className: O.hideDetailsButtonContainer,
      children: (0, r.jsx)(s.Avr, {
        textVariant: "text-xs/medium",
        variant: "secondary",
        size: "sm",
        onClick: N,
        text: v.intl.string(v.t.xdCLeH)
      })
    }) : null, (0, r.jsxs)("div", {
      className: a()(O.footer, {
        [O.floatingFooter]: y
      }),
      children: [y && f ? (0, r.jsx)("div", {
        className: O.gradient
      }) : null, (0, r.jsx)("div", {
        className: a()(O.footerContent, {
          [O.collapsedFooterContent]: y && f
        }),
        children: (0, r.jsx)("div", {
          className: O.buttonContainer,
          children: (0, r.jsx)(x, {
            invite: t,
            profile: T,
            isMemberOfGuild: n,
            message: l,
            submitting: I,
            onTransitionToInviteChannel: c,
            onAcceptInstantInvite: d
          })
        })
      })]
    })]
  })
}

function x(e) {
  let {
    invite: t,
    profile: n,
    isMemberOfGuild: l,
    message: a,
    submitting: o,
    onTransitionToInviteChannel: s,
    onAcceptInstantInvite: u
  } = e, {
    guildId: m,
    ctaType: _
  } = (0, f.ZP)(n, f.F3.INVITE), {
    analyticsLocations: h
  } = (0, p.ZP)(d.Z.INVITE_EMBED), b = i.useCallback(() => {
    let e = l ? "transition" : "accept";
    (0, c.r$)({
      invite: t,
      action: e,
      inviter_id: a.author.id,
      invite_message_id: a.id
    }, h)
  }, [t, a, h, l]);
  return null == _ ? null : (0, r.jsx)(g.o, {
    guildId: m,
    ctaType: _,
    submitting: o,
    onGoToGuild: s,
    onAcceptInvite: u,
    onStartApplication: u,
    onComplete: b
  })
}