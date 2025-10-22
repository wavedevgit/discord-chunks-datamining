/** Chunk was on 99063 **/
/** chunk id: 821312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk177862 = require("./177862.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk340528 = require("./340528.js");

function p(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: p
  } = e, [m, b] = r.useState([]), [g, f] = r.useState(), h = [{
    label: d.intl.string(d.t["//3pvi"]),
    value: s.C2.DM_SPAM
  }, {
    label: d.intl.string(d.t.SdVsip),
    value: s.C2.MENTION_SPAM
  }, {
    label: d.intl.string(d.t.uTiSVL),
    value: s.C2.CHANNEL_SPAM
  }, {
    label: d.intl.string(d.t.GQczU8),
    value: s.C2.SUS_NEW_MEMBERS
  }, {
    label: d.intl.string(d.t.AAgqy3),
    value: s.C2.CHANGING_SETTINGS
  }, {
    label: d.intl.string(d.t.ryPKb7),
    value: s.C2.OTHER
  }], x = r.useCallback(e => {
    b(e)
  }, []);
  return null == t ? (p(), null) : (0, i.jsx)(l.Modal, {
    transitionState: n,
    title: d.intl.string(d.t.f5hd9P),
    actions: [{
      text: d.intl.string(d.t["ETE/oC"]),
      onClick: p,
      variant: "secondary"
    }, {
      text: d.intl.string(d.t.nAt0rE),
      onClick: function() {
        (0, o.yw)(c.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
          raid_lockdown_feedback_type: m,
          raid_lockdown_feedback_other_reason: g,
          guild_id: t
        }), p()
      },
      disabled: 0 === m.length
    }],
    onClose: p,
    children: (0, i.jsxs)(a.Kqy, {
      gap: 8,
      children: [(0, i.jsx)(a.cOn, {
        selectedValues: m,
        onChange: x,
        options: h
      }), m.includes(s.C2.OTHER) && (0, i.jsx)("div", {
        className: u.textboxContainer,
        children: (0, i.jsx)(a.Kx8, {
          placeholder: d.intl.string(d.t["PAM+JR"]),
          onChange: f,
          value: g,
          autoFocus: true
        })
      })]
    })
  })
}