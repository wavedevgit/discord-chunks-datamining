/** Chunk was on web.js **/
/** chunk id: 574384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk489863 = require("./489863.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk829478 = require("./829478.js");
let c = 5;

function u(e) {
  var t;
  let {
    selectedGuildId: n,
    selectedChannelId: u,
    onChannelChange: d,
    error: f
  } = e, [p, _] = i.useState(null), h = i.useRef(false);
  if (i.useEffect(() => {
      async function e(e) {
        let t = await (0, o.UR)(e);
        n === e && (t.sort((e, t) => e.name.localeCompare(t.name)), _({
          guildId: e,
          channels: t
        }), h.current = true)
      }
      _(null), null == n ? d(null) : e(n)
    }, [d, n]), i.useEffect(() => {
      h.current && (null == p ? null != u && d(null) : p.channels.some(e => e.id === u) || d(null))
    }, [p, d, u, n]), null == n) return null;
  let m = null == p || p.guildId !== n ? [] : (null != (t = null == p ? true : p.channels) ? t : []).map(e => ({
    id: e.id,
    value: e.id,
    label: e.name
  }));
  return (0, r.jsx)("div", {
    className: l.selector,
    children: (0, r.jsx)(a.VcW, {
      label: s.intl.string(s.t["8qKd+J"]),
      helperText: s.intl.string(s.t.kQXMfN),
      selectionMode: "single",
      maxOptionsVisible: c,
      errorMessage: f,
      onSelectionChange: d,
      placeholder: s.intl.string(s.t["Re/64R"]),
      options: m,
      value: null != u ? u : true
    })
  })
}