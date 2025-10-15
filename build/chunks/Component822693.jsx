/** Chunk was on 64982 **/
/** chunk id: 822693, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  m: () => j
}), require("./953529.js"), require("./388685.js"), require("./290780.js");
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
let b = "NO_CHANNEL",
  x = Chunk149765.$e(Chunk981631.Plq.VIEW_CHANNEL, Chunk981631.Plq.CREATE_INSTANT_INVITE);

function j(e) {
  let {
    label: t,
    description: n,
    guildId: l,
    widgetEnabled: f,
    widgetChannelId: j,
    className: v,
    enableLocalUpdate: _
  } = e, C = (0, a.e7)([c.ZP], () => c.ZP.getChannels(l)), O = i.useMemo(() => {
    let e = [...C[c.sH], ...C[c.Zb]].filter(e => {
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
  }, [C, l, j]), y = i.useCallback(e => {
    _ ? (0, p.c)(l, f, e !== b ? e : null) : m.Z.updateEmbed(l, f, e !== b ? e : null)
  }, [l, f, _]);
  return (0, r.jsx)(s.q4e, {
    label: t,
    description: n,
    options: O,
    value: j,
    onChange: y,
    className: v
  })
}