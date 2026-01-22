/** Chunk was on 38763 **/
/** chunk id: 201510, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk198982 = require("./198982.js"),
  Chunk775602 = require("./775602.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk445077 = require("./445077.js"),
  Chunk71393 = require("./71393.js"),
  Chunk664531 = require("./664531.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    guildId: t
  } = e, n = (0, l.bG)([h.A], () => h.A.getGuild(t)), [p, k] = a.useState(null), [C, v] = a.useState(""), {
    createMultipleConfettiAt: x
  } = a.useContext(d.x), m = (0, l.bG)([u.A], () => u.A.useReducedMotion, []), w = async t => {
    let {
      onClose: n,
      guildId: i
    } = e;
    t.preventDefault(), k(null);
    try {
      await (0, c.T)(i, {
        nick: C
      }), null == n || n()
    } catch (e) {
      k(new s.LG(e))
    }
  }, {
    transitionState: A,
    onClose: G
  } = e, S = h.A.getGuildsArray().filter(e => e.id !== t && e.features.has(f.GuildFeatures.HUB)).length > 0, y = !m && !S && (null == n ? true : n.features.has(f.GuildFeatures.HUB)) && (0, g.a)();
  return a.useEffect(() => {
    y && x(window.innerWidth / 2, window.innerHeight / 2)
  }, [x, y]), (0, i.jsx)(r.aFV, {
    title: b.intl.formatToPlainString(b.t["d+6kzl"], {
      guildName: null == n ? true : n.name
    }),
    actions: [{
      variant: "secondary",
      text: b.intl.string(b.t["ETE/oC"]),
      onClick: G
    }, {
      variant: "primary",
      text: b.intl.string(b.t.Np4yXU),
      onClick: w
    }],
    transitionState: A,
    onClose: G,
    children: (0, i.jsx)("form", {
      onSubmit: w,
      children: (0, i.jsx)(o.ksK, {
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