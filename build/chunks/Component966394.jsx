/** Chunk was on 47841 **/
/** chunk id: 966394, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  s: () => j
}), require("./228524.js"), require("./896048.js"), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk808728 = require("./808728.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk997509 = require("./997509.js"),
  Chunk875331 = require("./875331.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let h = "NO_CHANNEL",
  x = Chunk136722.kg(Chunk652215.xBc.VIEW_CHANNEL, Chunk652215.xBc.CREATE_INSTANT_INVITE);

function j(e) {
  let {
    label: t,
    description: n,
    guildId: l,
    widgetEnabled: f,
    widgetChannelId: j,
    enableLocalUpdate: _
  } = e, O = (0, s.bG)([c.Ay], () => c.Ay.getChannels(l)), v = i.useMemo(() => {
    let e = [...O[c.I6], ...O[c.vM]].filter(e => {
      let {
        channel: t
      } = e;
      return t.guild_id === l
    }).filter(e => {
      let {
        channel: t
      } = e;
      return t.id === j || d.A.can(x, t)
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        id: t.id,
        value: t.id,
        label: (0, o.m1)(t, g.default, u.A, true)
      }
    });
    return e.unshift({
      id: "no-instant-invite",
      value: h,
      label: b.intl.string(b.t.u197b7)
    }), e
  }, [O, l, j]), y = i.useCallback(e => {
    _ ? (0, p.E)(l, f, e !== h ? e : null) : m.A.updateEmbed(l, f, e !== h ? e : null)
  }, [l, f, _]);
  return (0, r.jsx)(a.l6P, {
    label: t,
    description: n,
    options: v,
    value: null != j ? j : true,
    onSelectionChange: y,
    selectionMode: "single",
    fullWidth: true
  })
}