/** Chunk was on web.js **/
/** chunk id: 618865, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk716965 = require("./716965.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk80739 = require("./80739.js");
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
        let t = await (0, s.$Q)(e);
        n === e && (t.sort((e, t) => e.name.localeCompare(t.name)), _({
          guildId: e,
          channels: t
        }), h.current = true)
      }
      _(null), null == n ? d(null) : e(n)
    }, [d, n]), i.useEffect(() => {
      !h.current || (null == p ? null != u && d(null) : p.channels.some(e => e.id === u) || d(null))
    }, [p, d, u, n]), null == n) return null;
  let m = null == p || p.guildId !== n ? [] : (null != (t = null == p ? true : p.channels) ? t : []).map(e => ({
    id: e.id,
    value: e.id,
    label: e.name
  }));
  return (0, r.jsx)("div", {
    className: l.g,
    children: (0, r.jsx)(a.ZiE, {
      label: o.intl.string(o.t["8qKd+J"]),
      helperText: o.intl.string(o.t.kQXMfN),
      selectionMode: "single",
      maxOptionsVisible: c,
      errorMessage: f,
      onSelectionChange: d,
      placeholder: o.intl.string(o.t["Re/64R"]),
      options: m,
      value: null != u ? u : true
    })
  })
}