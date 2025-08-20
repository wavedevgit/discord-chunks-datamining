/** Chunk was on 84722 **/
/** chunk id: 296864, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
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
    onClose: N
  } = e, {
    guild_id: y,
    privacy_level: k
  } = j, E = (0, r.e7)([d.Z], () => d.Z.getChannel(j.channel_id), [j]), w = (0, r.e7)([h.Z], () => h.Z.getGuild(y), [y]), {
    canManageGuildEvent: b
  } = (0, o.XJ)(null != E ? E : w), I = b(j), Z = (0, r.e7)([c.Z], () => c.Z.isLurking(y), [y]), S = j.entity_type === g.WX.STAGE_INSTANCE, [O, _] = l.useState(S), [T, {
    loading: P,
    error: A
  }] = (0, v.Z)();
  if (!I) return null;
  let G = k === g.j8.PUBLIC ? C.intl.string(C.t.HhlaLC) : C.intl.string(C.t.GI3xXV),
    L = () => {
      null == f || f(), N(), (0, u.Ku)(false)
    },
    X = async () => {
      await T(j, O, {
        onSuccess: L
      })
    };
  return (0, i.jsxs)(a.Modal, {
    transitionState: t,
    onClose: N,
    title: j.name,
    subtitle: C.intl.format(C.t.UMajoq, {
      privacyLevel: G,
      privacyLevelHook: (e, n) => k !== g.j8.PUBLIC ? null : (0, i.jsxs)("div", {
        className: p.privacyLevel,
        children: [(0, i.jsx)(s.enf, {
          size: "xs",
          color: "currentColor",
          className: p.publicIcon
        }), (0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          children: e
        })]
      }, n)
    }),
    actions: [{
      variant: "secondary",
      text: C.intl.string(C.t.CZGqeX),
      onClick: () => {
        N()
      }
    }, {
      variant: "active",
      text: C.intl.string(C.t.cK1GGR),
      onClick: X,
      loading: P
    }],
    children: [(0, i.jsx)(x.Z, {
      guild: w,
      channel: E,
      name: j.name,
      description: null != (n = j.description) ? n : true,
      imageSource: (0, m.Z)(j),
      isActive: false,
      isUserLurking: Z,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: j
    }), S && (0, i.jsx)(s.XZJ, {
      className: p.verticalSpacing,
      type: s.XZJ.Types.INVERTED,
      value: O,
      onChange: e => {
        let {
          currentTarget: n
        } = e;
        return _(n.checked)
      },
      children: (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: C.intl.string(C.t.dGNtgI)
      })
    }), null != A && null != A.getAnyErrorMessage() ? (0, i.jsx)(s.Text, {
      color: "text-danger",
      variant: "text-sm/normal",
      className: p.errorMessage,
      children: A.getAnyErrorMessage()
    }) : null]
  })
}