/** Chunk was on 92917 **/
/** chunk id: 877695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function j(e) {
  let {
    invite: t,
    isMemberOfGuild: n,
    message: l,
    onTransitionToInviteChannel: c,
    onAcceptInstantInvite: d
  } = e, p = i.useRef(null), [f, h] = i.useState(true), [j, I] = i.useState(false), S = t.state === x.elq.ACCEPTING, T = (0, s.bG)([u.A], () => u.A.useReducedMotion);
  i.useLayoutEffect(() => {
    var e, t;
    I((null != (e = null == (t = p.current) ? true : t.clientHeight) ? e : 0) > 292)
  }, [I]);
  let N = (0, m.oO)(t),
    P = i.useCallback(() => {
      !j || f && h(false)
    }, [f, j]),
    w = i.useCallback(() => {
      !j || f || h(true)
    }, [f, j]),
    R = i.useMemo(() => {
      var e;
      return j && (null == (e = p.current) ? true : e.clientHeight) != null ? {
        height: f ? 292 : p.current.clientHeight + 36 + 48,
        transition: T ? true : "height 0.2s ease"
      } : {}
    }, [f, j, T]);
  return null == N ? (0, r.jsx)(v.A, {}) : (0, r.jsxs)(o.sqX, {
    className: a()(E.Gg, {
      [E.vk]: j && f
    }),
    onClick: P,
    style: R,
    "aria-label": O.intl.string(O.t.dcl9MQ),
    children: [(0, r.jsxs)("div", {
      className: E.uY,
      ref: p,
      children: [(0, r.jsx)(b.J$, {
        profile: N,
        className: E.vK
      }), (0, r.jsx)(b.CG, {
        profile: N
      }), (0, r.jsx)(_.A, {
        profile: N
      }), (0, r.jsx)(g.P, {
        profile: N,
        className: E.rb
      }), (0, r.jsx)(y.A, {
        guild: null != t.guild ? (0, A.DY)(t.guild) : null,
        roles: t.roles,
        className: E.Ei
      })]
    }), j && !f ? (0, r.jsx)("div", {
      className: E.Se,
      children: (0, r.jsx)(o.QWc, {
        textVariant: "text-xs/medium",
        variant: "secondary",
        size: "sm",
        onClick: w,
        text: O.intl.string(O.t.xdCLeM)
      })
    }) : null, (0, r.jsxs)("div", {
      className: a()(E.qr, {
        [E.iK]: j
      }),
      children: [j && f ? (0, r.jsx)("div", {
        className: E.D7
      }) : null, (0, r.jsx)("div", {
        className: a()(E.z8, {
          [E.it]: j && f
        }),
        children: (0, r.jsx)("div", {
          className: E.UD,
          children: (0, r.jsx)(C, {
            invite: t,
            profile: N,
            isMemberOfGuild: n,
            message: l,
            submitting: S,
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
    isMemberOfGuild: l,
    message: a,
    submitting: s,
    onTransitionToInviteChannel: o,
    onAcceptInstantInvite: u
  } = e, {
    guildId: m,
    ctaType: g
  } = (0, f.Ay)(n, f.cn.INVITE, t.code), {
    analyticsLocations: _
  } = (0, p.Ay)(d.A.INVITE_EMBED), b = i.useCallback(() => {
    let e = l ? "transition" : "accept";
    (0, c.he)({
      invite: t,
      action: e,
      inviter_id: a.author.id,
      invite_message_id: a.id
    }, _)
  }, [t, a, _, l]);
  return null == g ? null : (0, r.jsx)(h.Y, {
    guildId: m,
    ctaType: g,
    submitting: s,
    onGoToGuild: o,
    onAcceptInvite: u,
    onStartApplication: u,
    onComplete: b
  })
}