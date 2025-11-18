/** Chunk was on 32923 **/
/** chunk id: 822693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => j
}), require("./953529.js"), require("./388685.js"), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk434404 = require("./434404.js"),
  Chunk800223 = require("./800223.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let b = "NO_CHANNEL",
  x = Chunk149765.$e(Chunk981631.Plq.VIEW_CHANNEL, Chunk981631.Plq.CREATE_INSTANT_INVITE);

function j(e) {
  let {
    label: t,
    description: n,
    guildId: l,
    widgetEnabled: f,
    widgetChannelId: j,
    className: _,
    enableLocalUpdate: v
  } = e, O = (0, a.e7)([c.ZP], () => c.ZP.getChannels(l)), C = i.useMemo(() => {
    let e = [...O[c.sH], ...O[c.Zb]].filter(e => {
      let {
        channel: t
      } = e;
      return t.guild_id === l
    }).filter(e => {
      let {
        channel: t
      } = e;
      return t.id === j || d.Z.can(x, t)
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, o.F6)(t, g.default, u.Z, true)
      }
    });
    return e.unshift({
      value: b,
      label: h.intl.string(h.t.u197b7)
    }), e
  }, [O, l, j]), y = i.useCallback(e => {
    v ? (0, p.c)(l, f, e !== b ? e : null) : m.Z.updateEmbed(l, f, e !== b ? e : null)
  }, [l, f, v]);
  return (0, r.jsx)(s.q4e, {
    label: t,
    description: n,
    options: C,
    value: j,
    onChange: y,
    className: _
  })
}