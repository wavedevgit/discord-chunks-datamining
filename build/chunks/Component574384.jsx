/** Chunk was on web.js **/
/** chunk id: 574384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk489863 = require("./489863.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk990199 = require("./990199.js");
let d = 5;

function f(e) {
  var t;
  let {
    selectedGuildId: n,
    selectedChannelId: f,
    onChannelChange: _,
    error: p
  } = e, [h, m] = i.useState(null), g = i.useRef(false);
  if (i.useEffect(() => {
      async function e(e) {
        let t = await (0, l.UR)(e);
        n === e && (t.sort((e, t) => e.name.localeCompare(t.name)), m({
          guildId: e,
          channels: t
        }), g.current = true)
      }
      m(null), null == n ? _(null) : e(n)
    }, [_, n]), i.useEffect(() => {
      g.current && (null == h ? null != f && _(null) : h.channels.some(e => e.id === f) || _(null))
    }, [h, _, f, n]), null == n) return null;
  let E = null == h || h.guildId !== n ? [] : (null != (t = null == h ? true : h.channels) ? t : []).map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, r.jsxs)("div", {
    className: u.selectorGroup,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-deprecated-12/semibold",
      className: u.sectionLabel,
      children: c.intl.string(c.t["8qKd+J"])
    }), null != p && "" !== p ? (0, r.jsx)(o.x, {
      variant: "text-xs/normal",
      color: "text-danger",
      children: p
    }) : null, (0, r.jsx)(s.VcW, {
      wrapperClassName: u.select,
      maxVisibleItems: d,
      onChange: _,
      placeholder: c.intl.string(c.t["Re/64R"]),
      options: E,
      value: f,
      renderOptionLabel: e => (0, r.jsx)(o.x, {
        variant: "text-md/normal",
        children: e.label
      }),
      renderOptionValue: e => (0, r.jsx)(o.x, {
        variant: "text-md/normal",
        children: e[0].label
      })
    }), (0, r.jsx)(o.x, {
      variant: "text-xs/normal",
      color: "header-secondary",
      className: u.label,
      children: c.intl.string(c.t.kQXMfN)
    })]
  })
}