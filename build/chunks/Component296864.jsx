/** Chunk was on 84722 **/
/** chunk id: 296864, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk915075 = require("./915075.js");

function C(e) {
  var n;
  let {
    transitionState: t,
    event: C,
    onSuccess: f,
    onClose: y
  } = e, {
    guild_id: N,
    privacy_level: k
  } = C, b = (0, r.e7)([d.Z], () => d.Z.getChannel(C.channel_id), [C]), E = (0, r.e7)([h.Z], () => h.Z.getGuild(N), [N]), {
    canManageGuildEvent: w
  } = (0, o.XJ)(null != b ? b : E), I = w(C), O = (0, r.e7)([c.Z], () => c.Z.isLurking(N), [N]), S = C.entity_type === g.WX.STAGE_INSTANCE, [Z, T] = l.useState(S), [_, {
    loading: G,
    error: P
  }] = (0, v.Z)();
  if (!I) return null;
  let A = k === g.j8.PUBLIC ? j.intl.string(j.t.HhlaLC) : j.intl.string(j.t.GI3xXV),
    L = () => {
      null == f || f(), y(), (0, u.Ku)(false)
    },
    X = async () => {
      await _(C, Z, {
        onSuccess: L
      })
    };
  return (0, i.jsxs)(a.Modal, {
    transitionState: t,
    onClose: y,
    title: C.name,
    subtitle: j.intl.format(j.t.UMajoq, {
      privacyLevel: A,
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
      text: j.intl.string(j.t.CZGqeX),
      onClick: () => {
        y()
      }
    }, {
      variant: "active",
      text: j.intl.string(j.t.cK1GGR),
      onClick: X,
      loading: G
    }],
    children: [(0, i.jsx)(x.Z, {
      guild: E,
      channel: b,
      name: C.name,
      description: null != (n = C.description) ? n : true,
      imageSource: (0, m.Z)(C),
      isActive: false,
      isUserLurking: O,
      speakers: [],
      speakerCount: 0,
      rsvped: true,
      guildEvent: C
    }), S && (0, i.jsx)(s.XZJ, {
      className: p.verticalSpacing,
      type: s.XZJ.Types.INVERTED,
      value: Z,
      onChange: e => {
        let {
          currentTarget: n
        } = e;
        return T(n.checked)
      },
      children: (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: j.intl.string(j.t.dGNtgI)
      })
    }), null != P && null != P.getAnyErrorMessage() ? (0, i.jsx)(s.Text, {
      color: "text-danger",
      variant: "text-sm/normal",
      className: p.errorMessage,
      children: P.getAnyErrorMessage()
    }) : null]
  })
}