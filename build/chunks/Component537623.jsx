/** Chunk was on 28382 **/
/** chunk id: 537623, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
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
    onClose: f
  } = t, [I, A] = l.useState([]), [E, y] = l.useState(), g = l.useCallback(() => {
    let t = {
      raid_alert_type: c.wR.JOIN_RAID,
      raid_alert_id: n,
      false_alarm_type: I.map(t => t.toString()),
      false_alarm_other_reason: E,
      guild_id: e
    };
    (0, o.yw)(d.rMx.GUILD_RAID_FEEDBACK, t), (0, s.Fi)(e, n, (0, c.J$)(I)), f(), u.Z.showSuccessToast(_.wQ.SAFETY_FEEDBACK_SUCCESS)
  }, [f, n, e, E, I]), h = [{
    label: p.intl.string(p.t.yeaXw5),
    value: c.$l.LEGITIMATE_ACTIVITY
  }, {
    label: p.intl.string(p.t["o++3B8"]),
    value: c.$l.DM_SPAM
  }, {
    label: p.intl.string(p.t.UfHAwZ),
    value: c.$l.JOIN_RAID
  }, {
    label: p.intl.string(p.t.K3UWeR),
    value: c.$l.OTHER
  }], D = l.useCallback(t => {
    A(t)
  }, []);
  return (0, r.jsx)(i.Modal, {
    onClose: f,
    transitionState: O,
    title: p.intl.string(p.t["1zmw/H"]),
    subtitle: p.intl.string(p.t.nF79oO),
    actions: [{
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: f,
      variant: "secondary"
    }, {
      text: p.intl.string(p.t.Gh3A0O),
      onClick: g
    }],
    children: (0, r.jsxs)("div", {
      className: b.options,
      children: [(0, r.jsx)(a.cOn, {
        selectedValues: I,
        onChange: D,
        options: h
      }), I.includes(c.$l.OTHER) && (0, r.jsx)("div", {
        className: b.textboxContainer,
        children: (0, r.jsx)(a.Kx8, {
          placeholder: p.intl.string(p.t["PAM+JR"]),
          onChange: y,
          value: E,
          autoFocus: true
        })
      })]
    })
  })
}