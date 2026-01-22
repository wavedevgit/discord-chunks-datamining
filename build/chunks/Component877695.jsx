/** Chunk was on web.js **/
/** chunk id: 877695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk9994 = require("./9994.js"),
  Chunk461888 = require("./461888.js"),
  Chunk179283 = require("./179283.jsx"),
  Chunk123213 = require("./123213.jsx"),
  Chunk86376 = require("./86376.jsx"),
  Chunk42780 = require("./42780.jsx"),
  Chunk860689 = require("./860689.js"),
  Chunk897288 = require("./897288.jsx"),
  Chunk168428 = require("./168428.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk875871 = require("./875871.js");
let I = 292,
  T = 36,
  C = 48;

function N(e) {
  let {
    invite: t,
    isMemberOfGuild: n,
    message: a,
    onTransitionToInviteChannel: c,
    onAcceptInstantInvite: d
  } = e, f = i.useRef(null), [_, m] = i.useState(true), [N, w] = i.useState(false), P = t.state === A.elq.ACCEPTING, D = (0, o.bG)([u.A], () => u.A.useReducedMotion);
  i.useLayoutEffect(() => {
    var e, t;
    w((null != (e = null == (t = f.current) ? true : t.clientHeight) ? e : 0) > I)
  }, [w]);
  let x = (0, p.oO)(t),
    L = i.useCallback(() => {
      !N || _ && m(false)
    }, [_, N]),
    j = i.useCallback(() => {
      !N || _ || m(true)
    }, [_, N]),
    M = i.useMemo(() => {
      var e;
      return N && (null == (e = f.current) ? true : e.clientHeight) != null ? {
        height: _ ? I : f.current.clientHeight + T + C,
        transition: D ? true : "height 0.2s ease"
      } : {}
    }, [_, N, D]);
  return null == x ? (0, r.jsx)(O.A, {}) : (0, r.jsxs)(l.sqX, {
    className: s()(S.Gg, {
      [S.vk]: N && _
    }),
    onClick: L,
    style: M,
    "aria-label": v.intl.string(v.t.dcl9MQ),
    children: [(0, r.jsxs)("div", {
      className: S.uY,
      ref: f,
      children: [(0, r.jsx)(E.J$, {
        profile: x,
        className: S.vK
      }), (0, r.jsx)(E.CG, {
        profile: x
      }), (0, r.jsx)(g.A, {
        profile: x
      }), (0, r.jsx)(h.P, {
        profile: x,
        className: S.rb
      }), (0, r.jsx)(y.A, {
        guild: null != t.guild ? (0, b.DY)(t.guild) : null,
        roles: t.roles,
        className: S.Ei
      })]
    }), N && !_ ? (0, r.jsx)("div", {
      className: S.Se,
      children: (0, r.jsx)(l.QWc, {
        textVariant: "text-xs/medium",
        variant: "secondary",
        size: "sm",
        onClick: j,
        text: v.intl.string(v.t.xdCLeM)
      })
    }) : null, (0, r.jsxs)("div", {
      className: s()(S.qr, {
        [S.iK]: N
      }),
      children: [N && _ ? (0, r.jsx)("div", {
        className: S.D7
      }) : null, (0, r.jsx)("div", {
        className: s()(S.z8, {
          [S.it]: N && _
        }),
        children: (0, r.jsx)("div", {
          className: S.UD,
          children: (0, r.jsx)(R, {
            invite: t,
            profile: x,
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

function R(e) {
  let {
    invite: t,
    profile: n,
    isMemberOfGuild: a,
    message: s,
    submitting: o,
    onTransitionToInviteChannel: l,
    onAcceptInstantInvite: u
  } = e, {
    guildId: p,
    ctaType: h
  } = (0, _.Ay)(n, _.cn.INVITE, t.code), {
    analyticsLocations: g
  } = (0, f.Ay)(d.A.INVITE_EMBED), E = i.useCallback(() => {
    let e = a ? "transition" : "accept";
    (0, c.he)({
      invite: t,
      action: e,
      inviter_id: s.author.id,
      invite_message_id: s.id
    }, g)
  }, [t, s, g, a]);
  return null == h ? null : (0, r.jsx)(m.Y, {
    guildId: p,
    ctaType: h,
    submitting: o,
    onGoToGuild: l,
    onAcceptInvite: u,
    onStartApplication: u,
    onComplete: E
  })
}