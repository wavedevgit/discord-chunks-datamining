/** Chunk was on 84722 **/
/** chunk id: 296864, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk602872 = require("./602872.js");

function j(e) {
  var n;
  let {
    transitionState: t,
    event: j,
    onSuccess: f,
    onClose: y
  } = e, {
    guild_id: N,
    privacy_level: k
  } = j, E = (0, a.e7)([d.Z], () => d.Z.getChannel(j.channel_id), [j]), b = (0, a.e7)([h.Z], () => h.Z.getGuild(N), [N]), {
    canManageGuildEvent: w
  } = (0, o.XJ)(null != E ? E : b), I = w(j), S = (0, a.e7)([c.Z], () => c.Z.isLurking(N), [N]), Z = j.entity_type === x.WX.STAGE_INSTANCE, [O, _] = l.useState(Z), [T, {
    loading: P,
    error: G
  }] = (0, v.Z)();
  if (!I) return null;
  let A = k === x.j8.PUBLIC ? p.intl.string(p.t.HhlaLC) : p.intl.string(p.t.GI3xXV),
    L = () => {
      null == f || f(), y(), (0, u.Ku)(false)
    },
    X = async () => {
      await T(j, O, {
        onSuccess: L
      })
    };
  return (0, i.jsxs)(r.Modal, {
    transitionState: t,
    onClose: y,
    title: j.name,
    subtitle: p.intl.format(p.t.UMajoq, {
      privacyLevel: A,
      privacyLevelHook: (e, n) => k !== x.j8.PUBLIC ? null : (0, i.jsxs)("div", {
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
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t.CZGqeX),
      onClick: () => {
        y()
      }
    }, {
      variant: "active",
      text: p.intl.string(p.t.cK1GGR),
      onClick: X,
      loading: P
    }],
    children: [(0, i.jsx)(m.Z, {
      guild: b,
      channel: E,
      name: j.name,
      description: null != (n = j.description) ? n : true,
      imageSource: (0, g.Z)(j),
      isActive: false,
      isUserLurking: S,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: j
    }), Z && (0, i.jsx)("div", {
      className: C.verticalSpacing,
      children: (0, i.jsx)(r.XZJ, {
        checked: O,
        onChange: e => _(e),
        label: p.intl.string(p.t.dGNtgI),
        labelType: "secondary"
      })
    }), null != G && null != G.getAnyErrorMessage() ? (0, i.jsx)(s.Text, {
      color: "text-danger",
      variant: "text-sm/normal",
      className: C.errorMessage,
      children: G.getAnyErrorMessage()
    }) : null]
  })
}