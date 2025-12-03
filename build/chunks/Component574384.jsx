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
    onChannelChange: p,
    error: _
  } = e, [m, h] = i.useState(null), g = i.useRef(false);
  if (i.useEffect(() => {
      async function e(e) {
        let t = await (0, l.UR)(e);
        n === e && (t.sort((e, t) => e.name.localeCompare(t.name)), h({
          guildId: e,
          channels: t
        }), g.current = true)
      }
      h(null), null == n ? p(null) : e(n)
    }, [p, n]), i.useEffect(() => {
      g.current && (null == m ? null != f && p(null) : m.channels.some(e => e.id === f) || p(null))
    }, [m, p, f, n]), null == n) return null;
  let E = null == m || m.guildId !== n ? [] : (null != (t = null == m ? true : m.channels) ? t : []).map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, r.jsxs)("div", {
    className: u.selectorGroup,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-deprecated-12/semibold",
      className: u.sectionLabel,
      children: c.intl.string(c.t["8qKd+J"])
    }), null != _ && "" !== _ ? (0, r.jsx)(o.x, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      children: _
    }) : null, (0, r.jsx)(s.VcW, {
      wrapperClassName: u.select,
      maxVisibleItems: d,
      onChange: p,
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