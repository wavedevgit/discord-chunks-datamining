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
  } = j, E = (0, r.e7)([d.Z], () => d.Z.getChannel(j.channel_id), [j]), b = (0, r.e7)([h.Z], () => h.Z.getGuild(y), [y]), {
    canManageGuildEvent: w
  } = (0, o.XJ)(null != E ? E : b), I = w(j), O = (0, r.e7)([c.Z], () => c.Z.isLurking(y), [y]), S = j.entity_type === x.WX.STAGE_INSTANCE, [Z, _] = l.useState(S), [T, {
    loading: L,
    error: P
  }] = (0, v.Z)();
  if (!I) return null;
  let A = k === x.j8.PUBLIC ? p.intl.string(p.t.HhlaLP) : p.intl.string(p.t.GI3xXd),
    G = () => {
      null == f || f(), N(), (0, u.Ku)(false)
    },
    X = async () => {
      await T(j, Z, {
        onSuccess: G
      })
    };
  return (0, i.jsxs)(a.Modal, {
    transitionState: t,
    onClose: N,
    title: j.name,
    subtitle: p.intl.format(p.t.UMajol, {
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
      text: p.intl.string(p.t.CZGqeT),
      onClick: () => {
        N()
      }
    }, {
      variant: "active",
      text: p.intl.string(p.t.cK1GGY),
      onClick: X,
      loading: L
    }],
    children: [(0, i.jsx)(g.Z, {
      guild: b,
      channel: E,
      name: j.name,
      description: null != (n = j.description) ? n : true,
      imageSource: (0, m.Z)(j),
      isActive: false,
      isUserLurking: O,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: j
    }), S && (0, i.jsx)("div", {
      className: C.verticalSpacing,
      children: (0, i.jsx)(a.XZJ, {
        checked: Z,
        onChange: e => _(e),
        label: p.intl.string(p.t.dGNtgI),
        labelType: "secondary"
      })
    }), null != P && null != P.getAnyErrorMessage() ? (0, i.jsx)(s.Text, {
      color: "text-danger",
      variant: "text-sm/normal",
      className: C.errorMessage,
      children: P.getAnyErrorMessage()
    }) : null]
  })
}