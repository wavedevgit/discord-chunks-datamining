/** Chunk was on 84722 **/
/** chunk id: 296864, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk41776 = require("./41776.js"),
  Chunk357156 = require("./357156.js"),
  Chunk513449 = require("./513449.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk305298 = require("./305298.js"),
  Chunk405613 = require("./405613.js"),
  Chunk460838 = require("./460838.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk710421 = require("./710421.js");

function j(e) {
  var n;
  let {
    transitionState: t,
    event: j,
    onSuccess: N,
    onClose: f
  } = e, {
    guild_id: k,
    privacy_level: E
  } = j, y = (0, r.e7)([d.Z], () => d.Z.getChannel(j.channel_id), [j]), w = (0, r.e7)([h.Z], () => h.Z.getGuild(k), [k]), {
    canManageGuildEvent: I
  } = (0, o.XJ)(null != y ? y : w), Z = I(j), _ = (0, r.e7)([c.Z], () => c.Z.isLurking(k), [k]), b = j.entity_type === C.WX.STAGE_INSTANCE, [S, T] = i.useState(b), [A, {
    loading: G,
    error: L
  }] = (0, v.Z)();
  if (!Z) return null;
  let X = E === C.j8.PUBLIC ? g.intl.string(g.t.HhlaLP) : g.intl.string(g.t.GI3xXd),
    O = () => {
      null == N || N(), f(), (0, u.Ku)(false)
    },
    P = async () => {
      await A(j, S, {
        onSuccess: O
      })
    };
  return (0, l.jsxs)(a.Modal, {
    transitionState: t,
    onClose: f,
    title: j.name,
    subtitle: g.intl.format(g.t.UMajol, {
      privacyLevel: X,
      privacyLevelHook: (e, n) => E !== C.j8.PUBLIC ? null : (0, l.jsxs)("div", {
        className: p.privacyLevel,
        children: [(0, l.jsx)(s.enf, {
          size: "xs",
          color: "currentColor",
          className: p.publicIcon
        }), (0, l.jsx)(s.Text, {
          variant: "text-md/normal",
          children: e
        })]
      }, n)
    }),
    actions: [{
      variant: "secondary",
      text: g.intl.string(g.t.CZGqeT),
      onClick: () => {
        f()
      }
    }, {
      variant: "active",
      text: g.intl.string(g.t.cK1GGY),
      onClick: P,
      loading: G
    }],
    children: [(0, l.jsx)(x.Z, {
      guild: w,
      channel: y,
      name: j.name,
      description: null != (n = j.description) ? n : true,
      imageSource: (0, m.Z)(j),
      isActive: false,
      isUserLurking: _,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: j
    }), b && (0, l.jsx)("div", {
      className: p.verticalSpacing,
      children: (0, l.jsx)(a.XZJ, {
        checked: S,
        onChange: e => T(e),
        label: g.intl.string(g.t.dGNtgI),
        labelType: "secondary"
      })
    }), null != L && null != L.getAnyErrorMessage() ? (0, l.jsx)(s.Text, {
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      className: p.errorMessage,
      children: L.getAnyErrorMessage()
    }) : null]
  })
}