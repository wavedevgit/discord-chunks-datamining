/** Chunk was on 8106 **/
/** chunk id: 822693, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  m: () => j
}), require("./388685.js"), require("./290780.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let x = "NO_CHANNEL",
  b = Chunk149765.$e(Chunk981631.Plq.VIEW_CHANNEL, Chunk981631.Plq.CREATE_INSTANT_INVITE);

function j(e) {
  let {
    guildId: t,
    widgetEnabled: n,
    widgetChannelId: l,
    className: f,
    enableLocalUpdate: j
  } = e, v = (0, s.e7)([c.ZP], () => c.ZP.getChannels(t)), _ = i.useMemo(() => {
    let e = [...v[c.sH], ...v[c.Zb]].filter(e => {
      let {
        channel: n
      } = e;
      return n.guild_id === t
    }).filter(e => {
      let {
        channel: t
      } = e;
      return t.id === l || d.Z.can(b, t)
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, o.F6)(t, m.default, u.Z, true)
      }
    });
    return e.unshift({
      value: x,
      label: h.intl.string(h.t.u197b2)
    }), e
  }, [v, t, l]), O = i.useCallback(e => {
    j ? (0, p.c)(t, n, e !== x ? e : null) : g.Z.updateEmbed(t, n, e !== x ? e : null)
  }, [t, n, j]);
  return (0, r.jsx)(a.q4e, {
    options: _,
    value: l,
    onChange: O,
    className: f
  })
}