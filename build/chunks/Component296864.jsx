/** Chunk was on 84722 **/
/** chunk id: 296864, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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

function f(e) {
  var n;
  let {
    transitionState: t,
    event: f,
    onSuccess: y,
    onClose: N
  } = e, {
    guild_id: k,
    privacy_level: E
  } = f, b = (0, r.e7)([h.Z], () => h.Z.getChannel(f.channel_id), [f]), w = (0, r.e7)([v.Z], () => v.Z.getGuild(k), [k]), {
    canManageGuildEvent: I
  } = (0, u.XJ)(null != b ? b : w), S = I(f), O = (0, r.e7)([o.Z], () => o.Z.isLurking(k), [k]), Z = f.entity_type === p.WX.STAGE_INSTANCE, [_, T] = l.useState(Z), [P, {
    loading: L,
    error: A
  }] = (0, g.Z)();
  if (!S) return null;
  let G = E === p.j8.PUBLIC ? C.intl.string(C.t.HhlaLC) : C.intl.string(C.t.GI3xXV),
    X = () => {
      null == y || y(), N(), (0, d.Ku)(false)
    },
    R = async () => {
      await P(f, _, {
        onSuccess: X
      })
    };
  return (0, i.jsxs)(a.Modal, {
    transitionState: t,
    onClose: N,
    title: f.name,
    subtitle: C.intl.format(C.t.UMajoq, {
      privacyLevel: G,
      privacyLevelHook: (e, n) => E !== p.j8.PUBLIC ? null : (0, i.jsxs)("div", {
        className: j.privacyLevel,
        children: [(0, i.jsx)(c.enf, {
          size: "xs",
          color: "currentColor",
          className: j.publicIcon
        }), (0, i.jsx)(c.Text, {
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
      onClick: R,
      loading: L
    }],
    children: [(0, i.jsx)(x.Z, {
      guild: w,
      channel: b,
      name: f.name,
      description: null != (n = f.description) ? n : true,
      imageSource: (0, m.Z)(f),
      isActive: false,
      isUserLurking: O,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: f
    }), Z && (0, i.jsx)(s.VL, {
      className: j.verticalSpacing,
      checked: _,
      onChange: e => T(e),
      label: C.intl.string(C.t.dGNtgI),
      labelType: "secondary"
    }), null != A && null != A.getAnyErrorMessage() ? (0, i.jsx)(c.Text, {
      color: "text-danger",
      variant: "text-sm/normal",
      className: j.errorMessage,
      children: A.getAnyErrorMessage()
    }) : null]
  })
}