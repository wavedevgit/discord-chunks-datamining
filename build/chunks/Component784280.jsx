/** Chunk was on 53900 **/
/** chunk id: 784280, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function p(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([h.Z], () => h.Z.getGuild(t)), [p, k] = l.useState(null), [C, v] = l.useState(""), {
    createMultipleConfettiAt: x
  } = l.useContext(d.h), m = (0, a.e7)([s.Z], () => s.Z.useReducedMotion, []), w = async t => {
    let {
      onClose: n,
      guildId: i
    } = e;
    t.preventDefault(), k(null);
    try {
      await (0, c.e)(i, {
        nick: C
      }), null == n || n()
    } catch (e) {
      k(new u.Hx(e))
    }
  }, {
    transitionState: S,
    onClose: _
  } = e, y = h.Z.getGuildsArray().filter(e => e.id !== t && e.features.has(g.GuildFeatures.HUB)).length > 0, E = !m && !y && (null == n ? true : n.features.has(g.GuildFeatures.HUB)) && (0, f.b)();
  return l.useEffect(() => {
    E && x(window.innerWidth / 2, window.innerHeight / 2)
  }, [x, E]), (0, i.jsx)(r.u_l, {
    title: b.intl.formatToPlainString(b.t["d+6kzl"], {
      guildName: null == n ? true : n.name
    }),
    actions: [{
      variant: "secondary",
      text: b.intl.string(b.t["ETE/oC"]),
      onClick: _
    }, {
      variant: "primary",
      text: b.intl.string(b.t.Np4yXU),
      onClick: w
    }],
    transitionState: S,
    onClose: _,
    children: (0, i.jsx)("form", {
      onSubmit: w,
      children: (0, i.jsx)(o.oil, {
        label: b.intl.string(b.t.pt6jhx),
        placeholder: b.intl.string(b.t.RfWvWI),
        description: b.intl.string(b.t.VAaqfF),
        onChange: e => {
          v(e)
        },
        error: null == p ? true : p.getFirstFieldErrorMessage("name"),
        value: C
      })
    })
  })
}