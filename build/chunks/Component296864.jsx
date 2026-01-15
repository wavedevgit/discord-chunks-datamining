/** Chunk was on 84722 **/
/** chunk id: 296864, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk41776 = require("./41776.js"),
  Chunk357156 = require("./357156.js"),
  Chunk513449 = require("./513449.js"),
  Chunk937096 = require("./937096.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk305298 = require("./305298.js"),
  Chunk405613 = require("./405613.js"),
  Chunk460838 = require("./460838.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk710421 = require("./710421.js");

function p(e) {
  var n;
  let {
    transitionState: t,
    event: p,
    onSuccess: N,
    onClose: k
  } = e, {
    guild_id: E,
    privacy_level: y
  } = p, _ = (0, r.e7)([h.Z], () => h.Z.getChannel(p.channel_id), [p]), w = (0, r.e7)([x.Z], () => x.Z.getGuild(E), [E]), {
    canManageGuildEvent: T
  } = (0, o.XJ)(null != _ ? _ : w), Z = T(p), S = (0, r.e7)([c.Z], () => c.Z.isLurking(E), [E]), I = p.entity_type === j.WX.STAGE_INSTANCE, [A, b] = l.useState(I), [P, {
    loading: G,
    error: L
  }] = (0, v.Z)();
  if (!Z) return null;
  let O = y === j.j8.PUBLIC ? f.intl.string(f.t.HhlaLP) : f.intl.string(f.t.GI3xXd),
    R = () => {
      null == N || N(), k(), (0, u.Ku)(false)
    },
    M = async () => {
      await P(p, A, {
        onSuccess: R
      })
    };
  return (0, i.jsxs)(a.Modal, {
    transitionState: t,
    onClose: k,
    title: p.name,
    subtitle: f.intl.format(f.t.UMajol, {
      privacyLevel: O,
      privacyLevelHook: (e, n) => y !== j.j8.PUBLIC ? null : (0, i.jsxs)("div", {
        className: C.privacyLevel,
        children: [(0, i.jsx)(s.enf, {
          size: "xs",
          color: "currentColor",
          className: C.publicIcon
        }), (0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          children: e
        })]
      }, n)
    }),
    actionBarInput: I ? (0, i.jsxs)(a.P3F, {
      onClick: () => b(!A),
      className: C.notificationToggle,
      children: [(0, i.jsx)(a.FZ5, {
        checked: A
      }), (0, i.jsx)(s.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: f.intl.string(f.t["Pe+Pwp"])
      })]
    }) : true,
    actions: [{
      variant: "active",
      text: f.intl.string(f.t.cK1GGY),
      onClick: M,
      loading: G
    }],
    children: [(0, i.jsx)(g.Z, {
      guild: w,
      channel: _,
      name: p.name,
      description: null != (n = p.description) ? n : true,
      imageSource: (0, m.Z)(p),
      isActive: false,
      isUserLurking: S,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: p,
      hideAgeVerificationNotice: true
    }), j.Qk.has(p.entity_type) && (0, i.jsx)(d.Z, {
      className: C.ageVerificationNotice
    }), null != L && null != L.getAnyErrorMessage() ? (0, i.jsx)(s.Text, {
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      className: C.errorMessage,
      children: L.getAnyErrorMessage()
    }) : null]
  })
}