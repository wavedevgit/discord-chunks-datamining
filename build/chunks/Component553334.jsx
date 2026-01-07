/** Chunk was on 6284 **/
/** chunk id: 553334, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk656872 = require("./656872.js");
let d = [{
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
  nameGetter: () => u.intl.string(u.t["+RZgNV"])
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
  nameGetter: () => u.intl.string(u.t.kgPXgv)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
  nameGetter: () => u.intl.string(u.t.vujsUK)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
  nameGetter: () => u.intl.string(u.t.AYAOLF)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
  nameGetter: () => u.intl.string(u.t.wZLu3Y)
}];

function _(t) {
  let {
    application: e,
    subscriptionId: n,
    onClose: _,
    transitionState: p
  } = t, [I, N] = i.useState(false), [O, A] = i.useState(null), [E, S] = i.useState(""), f = i.useCallback(() => {
    null != O && (c.default.track(o.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
      answer: O,
      application_id: e.id,
      reason: E,
      subscription_id: n
    }), _())
  }, [e.id, n, O, _, E]);
  return i.useEffect(() => {
    s.ZP.updatedUnsyncedSettings({
      disableApplicationSubscriptionCancellationSurvey: I
    })
  }, [I]), (0, a.jsxs)(l.Modal, {
    title: u.intl.string(u.t.zPxMdQ),
    subtitle: u.intl.string(u.t["QJGdB+"]),
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t.geKm7t),
      onClick: f,
      disabled: null == O
    }],
    onClose: _,
    transitionState: p,
    children: [(0, a.jsx)("div", {
      className: C.answerChoicesContainer,
      children: (0, a.jsx)(r.FXm, {
        value: O,
        options: d.map(t => {
          let {
            nameGetter: e,
            value: n
          } = t;
          return {
            name: e(),
            value: n
          }
        }),
        onChange: t => A(t)
      })
    }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === O && (0, a.jsx)("div", {
      className: C.otherField,
      children: (0, a.jsx)(r.oil, {
        autoFocus: true,
        placeholder: u.intl.string(u.t.s6tM8c),
        value: E,
        onChange: S
      })
    }), (0, a.jsx)(r.Checkbox, {
      checked: I,
      onChange: t => N(t),
      label: u.intl.string(u.t["3vPFQi"]),
      labelType: "secondary"
    })]
  })
}