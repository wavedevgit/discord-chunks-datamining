/** Chunk was on 99583 **/
/** chunk id: 336496, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk615550 = require("./615550.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk48854 = require("./48854.js");

function x(e) {
  let {
    guildId: t,
    transitionState: l,
    onClose: x
  } = e, [m, j] = r.useState([]), [b, f] = r.useState(), h = [{
    label: o.intl.string(o.t["//3pvi"]),
    value: c.n7.DM_SPAM
  }, {
    label: o.intl.string(o.t.SdVsip),
    value: c.n7.MENTION_SPAM
  }, {
    label: o.intl.string(o.t.uTiSVL),
    value: c.n7.CHANNEL_SPAM
  }, {
    label: o.intl.string(o.t.GQczU8),
    value: c.n7.SUS_NEW_MEMBERS
  }, {
    label: o.intl.string(o.t.AAgqy3),
    value: c.n7.CHANGING_SETTINGS
  }, {
    label: o.intl.string(o.t.ryPKb7),
    value: c.n7.OTHER
  }], g = r.useCallback(e => {
    j(e)
  }, []);
  return null == t ? (x(), null) : (0, n.jsx)(i.Modal, {
    transitionState: l,
    title: o.intl.string(o.t.f5hd9P),
    actions: [{
      text: o.intl.string(o.t["ETE/oC"]),
      onClick: x,
      variant: "secondary"
    }, {
      text: o.intl.string(o.t.nAt0rE),
      onClick: function() {
        (0, a.zV)(d.HAw.GUILD_RAID_LOCKDOWN_FEEDBACK, {
          raid_lockdown_feedback_type: m,
          raid_lockdown_feedback_other_reason: b,
          guild_id: t
        }), x()
      },
      disabled: 0 === m.length
    }],
    onClose: x,
    children: (0, n.jsxs)(s.BJc, {
      gap: 8,
      children: [(0, n.jsx)(s.$QX, {
        selectedValues: m,
        onChange: g,
        options: h
      }), m.includes(c.n7.OTHER) && (0, n.jsx)("div", {
        className: u.Q8,
        children: (0, n.jsx)(s.fs1, {
          placeholder: o.intl.string(o.t["PAM+JR"]),
          onChange: f,
          value: b,
          autoFocus: true
        })
      })]
    })
  })
}