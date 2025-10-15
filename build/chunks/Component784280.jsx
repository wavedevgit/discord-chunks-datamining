/** Chunk was on 53900 **/
/** chunk id: 784280, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk781792 = require("./781792.js"),
  Chunk430824 = require("./430824.js"),
  Chunk645792 = require("./645792.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  let {
    guildId: e
  } = t, n = (0, a.e7)([h.Z], () => h.Z.getGuild(e)), [p, k] = l.useState(null), [v, C] = l.useState(""), {
    createMultipleConfettiAt: x
  } = l.useContext(c.h), m = (0, a.e7)([u.Z], () => u.Z.useReducedMotion, []), w = async e => {
    let {
      onClose: n,
      guildId: i
    } = t;
    e.preventDefault(), k(null);
    try {
      await (0, d.e)(i, {
        nick: v
      }), null == n || n()
    } catch (t) {
      k(new s.Hx(t))
    }
  }, {
    transitionState: S,
    onClose: _
  } = t, y = h.Z.getGuildsArray().filter(t => t.id !== e && t.features.has(g.oNc.HUB)).length > 0, E = !m && !y && (null == n ? true : n.features.has(g.oNc.HUB)) && (0, f.b)();
  return l.useEffect(() => {
    E && x(window.innerWidth / 2, window.innerHeight / 2)
  }, [x, E]), (0, i.jsx)(o.u_l, {
    title: b.intl.formatToPlainString(b.t["d+6kzs"], {
      guildName: null == n ? true : n.name
    }),
    actions: [{
      variant: "secondary",
      text: b.intl.string(b.t["ETE/oK"]),
      onClick: _
    }, {
      variant: "primary",
      text: b.intl.string(b.t.Np4yXV),
      onClick: w
    }],
    transitionState: S,
    onClose: _,
    children: (0, i.jsx)("form", {
      onSubmit: w,
      children: (0, i.jsx)(r.oil, {
        label: b.intl.string(b.t.pt6jh4),
        placeholder: b.intl.string(b.t.RfWvWF),
        description: b.intl.string(b.t.VAaqfH),
        onChange: t => {
          C(t)
        },
        error: null == p ? true : p.getFirstFieldErrorMessage("name"),
        value: v
      })
    })
  })
}