/** Chunk was on 77223 **/
/** chunk id: 199226, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => j
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

function j(e) {
  var n;
  let {
    transitionState: l,
    event: j,
    onSuccess: p,
    onClose: k
  } = e, {
    guild_id: y,
    privacy_level: f
  } = j, E = (0, a.bG)([h.A], () => h.A.getChannel(j.channel_id), [j]), w = (0, a.bG)([m.A], () => m.A.getGuild(y), [y]), {
    canManageGuildEvent: _
  } = (0, o.nr)(null != E ? E : w), T = _(j), b = (0, a.bG)([c.A], () => c.A.isLurking(y), [y]), I = j.entity_type === g.Ps.STAGE_INSTANCE, [G, P] = i.useState(I), [S, {
    loading: L,
    error: O
  }] = (0, v.A)();
  if (!T) return null;
  let U = f === g.dD.PUBLIC ? A.intl.string(A.t.HhlaLP) : A.intl.string(A.t.GI3xXd),
    M = () => {
      null == p || p(), k(), (0, u.ek)(false)
    },
    B = async () => {
      await S(j, G, {
        onSuccess: M
      })
    };
  return (0, t.jsxs)(s.Modal, {
    transitionState: l,
    onClose: k,
    title: j.name,
    subtitle: A.intl.format(A.t.UMajol, {
      privacyLevel: U,
      privacyLevelHook: (e, n) => f !== g.dD.PUBLIC ? null : (0, t.jsxs)("div", {
        className: N.ro,
        children: [(0, t.jsx)(r.L_e, {
          size: "xs",
          color: "currentColor",
          className: N.HJ
        }), (0, t.jsx)(r.Text, {
          variant: "text-md/normal",
          children: e
        })]
      }, n)
    }),
    actionBarInput: I ? (0, t.jsxs)(s.DUT, {
      onClick: () => P(!G),
      className: N.Qy,
      children: [(0, t.jsx)(s.P7L, {
        checked: G
      }), (0, t.jsx)(r.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: A.intl.string(A.t["Pe+Pwp"])
      })]
    }) : true,
    actions: [{
      variant: "active",
      text: A.intl.string(A.t.cK1GGY),
      onClick: B,
      loading: L
    }],
    children: [(0, t.jsx)(C.A, {
      guild: w,
      channel: E,
      name: j.name,
      description: null != (n = j.description) ? n : true,
      imageSource: (0, x.A)(j),
      isActive: false,
      isUserLurking: b,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: j,
      hideAgeVerificationNotice: true
    }), g.Tn.has(j.entity_type) && (0, t.jsx)(d.A, {
      className: N.XI,
      channelId: j.channel_id
    }), null != O && null != O.getAnyErrorMessage() ? (0, t.jsx)(r.Text, {
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      className: N.gJ,
      children: O.getAnyErrorMessage()
    }) : null]
  })
}