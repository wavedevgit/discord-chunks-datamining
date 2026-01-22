/** Chunk was on 77223 **/
/** chunk id: 199226, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk857071 = require("./857071.js"),
  Chunk931991 = require("./931991.js"),
  Chunk571909 = require("./571909.js"),
  Chunk660110 = require("./660110.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk883931 = require("./883931.js"),
  Chunk691012 = require("./691012.js"),
  Chunk895202 = require("./895202.jsx"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk587880 = require("./587880.js");

function f(e) {
  var n;
  let {
    transitionState: t,
    event: f,
    onSuccess: N,
    onClose: p
  } = e, {
    guild_id: y,
    privacy_level: k
  } = f, E = (0, r.bG)([h.A], () => h.A.getChannel(f.channel_id), [f]), _ = (0, r.bG)([x.A], () => x.A.getGuild(y), [y]), {
    canManageGuildEvent: T
  } = (0, o.nr)(null != E ? E : _), w = T(f), G = (0, r.bG)([c.A], () => c.A.isLurking(y), [y]), P = f.entity_type === g.Ps.STAGE_INSTANCE, [b, S] = i.useState(P), [I, {
    loading: L,
    error: M
  }] = (0, m.A)();
  if (!w) return null;
  let U = k === g.dD.PUBLIC ? A.intl.string(A.t.HhlaLP) : A.intl.string(A.t.GI3xXd),
    O = () => {
      null == N || N(), p(), (0, u.ek)(false)
    },
    D = async () => {
      await I(f, b, {
        onSuccess: O
      })
    };
  return (0, l.jsxs)(s.Modal, {
    transitionState: t,
    onClose: p,
    title: f.name,
    subtitle: A.intl.format(A.t.UMajol, {
      privacyLevel: U,
      privacyLevelHook: (e, n) => k !== g.dD.PUBLIC ? null : (0, l.jsxs)("div", {
        className: C.ro,
        children: [(0, l.jsx)(a.L_e, {
          size: "xs",
          color: "currentColor",
          className: C.HJ
        }), (0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          children: e
        })]
      }, n)
    }),
    actionBarInput: P ? (0, l.jsxs)(s.DUT, {
      onClick: () => S(!b),
      className: C.Qy,
      children: [(0, l.jsx)(s.P7L, {
        checked: b
      }), (0, l.jsx)(a.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: A.intl.string(A.t["Pe+Pwp"])
      })]
    }) : true,
    actions: [{
      variant: "active",
      text: A.intl.string(A.t.cK1GGY),
      onClick: D,
      loading: L
    }],
    children: [(0, l.jsx)(j.A, {
      guild: _,
      channel: E,
      name: f.name,
      description: null != (n = f.description) ? n : true,
      imageSource: (0, v.A)(f),
      isActive: false,
      isUserLurking: G,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: f,
      hideAgeVerificationNotice: true
    }), g.Tn.has(f.entity_type) && (0, l.jsx)(d.A, {
      className: C.XI
    }), null != M && null != M.getAnyErrorMessage() ? (0, l.jsx)(a.Text, {
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      className: C.gJ,
      children: M.getAnyErrorMessage()
    }) : null]
  })
}