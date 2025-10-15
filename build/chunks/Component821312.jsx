/** Chunk was on 87641 **/
/** chunk id: 821312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk709867 = require("./709867.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk177862 = require("./177862.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk882313 = require("./882313.js");

function m(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: m
  } = e, [b, g] = r.useState([]), [f, h] = r.useState(), x = [{
    label: u.intl.string(u.t["//3pvr"]),
    value: c.C2.DM_SPAM
  }, {
    label: u.intl.string(u.t.SdVsio),
    value: c.C2.MENTION_SPAM
  }, {
    label: u.intl.string(u.t.uTiSVF),
    value: c.C2.CHANNEL_SPAM
  }, {
    label: u.intl.string(u.t.GQczU1),
    value: c.C2.SUS_NEW_MEMBERS
  }, {
    label: u.intl.string(u.t.AAgqy8),
    value: c.C2.CHANGING_SETTINGS
  }, {
    label: u.intl.string(u.t.ryPKb2),
    value: c.C2.OTHER
  }], j = r.useCallback(e => {
    g(e)
  }, []);
  return null == t ? (m(), null) : (0, i.jsx)(l.Modal, {
    transitionState: n,
    title: u.intl.string(u.t.f5hd9P),
    actions: [{
      text: u.intl.string(u.t["ETE/oK"]),
      onClick: m,
      variant: "secondary"
    }, {
      text: u.intl.string(u.t.nAt0rK),
      onClick: function() {
        (0, s.yw)(d.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
          raid_lockdown_feedback_type: b,
          raid_lockdown_feedback_other_reason: f,
          guild_id: t
        }), m()
      },
      disabled: 0 === b.length
    }],
    onClose: m,
    children: (0, i.jsxs)(o.Kqy, {
      gap: 8,
      children: [(0, i.jsx)(a.c, {
        selectedValues: b,
        onChange: j,
        options: x
      }), b.includes(c.C2.OTHER) && (0, i.jsx)("div", {
        className: p.textboxContainer,
        children: (0, i.jsx)(o.Kx8, {
          placeholder: u.intl.string(u.t["PAM+JS"]),
          onChange: h,
          value: f,
          autoFocus: true
        })
      })]
    })
  })
}