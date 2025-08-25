/** Chunk was on 28382 **/
/** chunk id: 537623, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk369994 = require("./369994.js"),
  Chunk681678 = require("./681678.js"),
  Chunk177862 = require("./177862.js"),
  Chunk981631 = require("./981631.js"),
  Chunk484710 = require("./484710.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk833894 = require("./833894.js");

function E(t) {
  let {
    guildId: e,
    messageId: n,
    transitionState: l,
    onClose: E
  } = t, [I, b] = i.useState([]), [y, C] = i.useState(), A = i.useCallback(() => {
    let t = {
      raid_alert_type: _.wR.JOIN_RAID,
      raid_alert_id: n,
      false_alarm_type: I.map(t => t.toString()),
      false_alarm_other_reason: y,
      guild_id: e
    };
    (0, c.yw)(p.rMx.GUILD_RAID_FEEDBACK, t), (0, u.Fi)(e, n, (0, _.J$)(I)), E(), d.Z.showSuccessToast(O.wQ.SAFETY_FEEDBACK_SUCCESS)
  }, [E, n, e, y, I]), T = [{
    text: f.intl.string(f.t.yeaXw8),
    value: _.$l.LEGITIMATE_ACTIVITY
  }, {
    text: f.intl.string(f.t["o++3Bw"]),
    value: _.$l.DM_SPAM
  }, {
    text: f.intl.string(f.t.UfHAwc),
    value: _.$l.JOIN_RAID
  }, {
    text: f.intl.string(f.t.K3UWeX),
    value: _.$l.OTHER
  }];

  function g(t) {
    I.includes(t) ? b(e => e.filter(e => e !== t)) : b(e => [...e, t])
  }
  return (0, r.jsx)(a.Modal, {
    onClose: E,
    transitionState: l,
    title: f.intl.string(f.t["1zmw/P"]),
    subtitle: f.intl.string(f.t.nF79oK),
    actions: [{
      text: f.intl.string(f.t["ETE/oK"]),
      onClick: E,
      variant: "secondary"
    }, {
      text: f.intl.string(f.t.Gh3A0N),
      onClick: A
    }],
    children: (0, r.jsx)("div", {
      className: h.options,
      children: T.map(t => {
        let {
          text: e,
          value: n
        } = t;
        return (0, r.jsxs)("div", {
          className: o()(h.optionContainer, {
            [h.optionContainerOther]: n === _.$l.OTHER
          }),
          children: [(0, r.jsxs)(s.P3F, {
            className: h.optionText,
            onClick: () => g(n),
            children: [(0, r.jsx)("div", {
              children: (0, r.jsx)(s.XZJ, {
                type: s.XZJ.Types.INVERTED,
                size: 20,
                value: I.includes(n),
                onChange: () => g(n)
              })
            }), (0, r.jsx)(s.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: e
            })]
          }), n === _.$l.OTHER && I.includes(_.$l.OTHER) && (0, r.jsx)("div", {
            className: h.textboxContainer,
            children: (0, r.jsx)(s.Kx8, {
              placeholder: f.intl.string(f.t["PAM+JS"]),
              onChange: C,
              value: y,
              autoFocus: true
            })
          })]
        }, n)
      })
    })
  })
}