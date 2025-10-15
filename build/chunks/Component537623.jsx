/** Chunk was on 28382 **/
/** chunk id: 537623, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk709867 = require("./709867.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk369994 = require("./369994.js"),
  Chunk681678 = require("./681678.js"),
  Chunk177862 = require("./177862.js"),
  Chunk981631 = require("./981631.js"),
  Chunk484710 = require("./484710.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk833894 = require("./833894.js");

function O(t) {
  let {
    guildId: e,
    messageId: n,
    transitionState: O,
    onClose: I
  } = t, [A, E] = l.useState([]), [y, g] = l.useState(), h = l.useCallback(() => {
    let t = {
      raid_alert_type: d.wR.JOIN_RAID,
      raid_alert_id: n,
      false_alarm_type: A.map(t => t.toString()),
      false_alarm_other_reason: y,
      guild_id: e
    };
    (0, s.yw)(_.rMx.GUILD_RAID_FEEDBACK, t), (0, c.Fi)(e, n, (0, d.J$)(A)), I(), u.Z.showSuccessToast(p.wQ.SAFETY_FEEDBACK_SUCCESS)
  }, [I, n, e, y, A]), D = [{
    label: b.intl.string(b.t.yeaXw8),
    value: d.$l.LEGITIMATE_ACTIVITY
  }, {
    label: b.intl.string(b.t["o++3Bw"]),
    value: d.$l.DM_SPAM
  }, {
    label: b.intl.string(b.t.UfHAwc),
    value: d.$l.JOIN_RAID
  }, {
    label: b.intl.string(b.t.K3UWeX),
    value: d.$l.OTHER
  }], C = l.useCallback(t => {
    E(t)
  }, []);
  return (0, r.jsx)(i.Modal, {
    onClose: I,
    transitionState: O,
    title: b.intl.string(b.t["1zmw/P"]),
    subtitle: b.intl.string(b.t.nF79oK),
    actions: [{
      text: b.intl.string(b.t["ETE/oK"]),
      onClick: I,
      variant: "secondary"
    }, {
      text: b.intl.string(b.t.Gh3A0N),
      onClick: h
    }],
    children: (0, r.jsxs)("div", {
      className: f.options,
      children: [(0, r.jsx)(a.c, {
        selectedValues: A,
        onChange: C,
        options: D
      }), A.includes(d.$l.OTHER) && (0, r.jsx)("div", {
        className: f.textboxContainer,
        children: (0, r.jsx)(o.Kx8, {
          placeholder: b.intl.string(b.t["PAM+JS"]),
          onChange: g,
          value: y,
          autoFocus: true
        })
      })]
    })
  })
}