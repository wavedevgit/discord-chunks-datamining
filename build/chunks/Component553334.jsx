/** Chunk was on 6284 **/
/** chunk id: 553334, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk321599 = require("./321599.js");
let _ = [{
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t["+RZgNV"])
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t.kgPXgv)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t.vujsUK)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t.AYAOLF)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t.wZLu3Y)
}];

function d(t) {
  let {
    application: e,
    subscriptionId: n,
    onClose: d,
    transitionState: p
  } = t, [I, N] = a.useState(false), [O, A] = a.useState(null), [E, S] = a.useState(""), P = a.useCallback(() => {
    null != O && (c.default.track(o.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
      answer: O,
      application_id: e.id,
      reason: E,
      subscription_id: n
    }), d())
  }, [e.id, n, O, d, E]);
  return a.useEffect(() => {
    s.ZP.updatedUnsyncedSettings({
      disableApplicationSubscriptionCancellationSurvey: I
    })
  }, [I]), (0, i.jsxs)(l.Modal, {
    title: u.intl.string(u.t.zPxMdQ),
    subtitle: u.intl.string(u.t["QJGdB+"]),
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t.geKm7t),
      onClick: P,
      disabled: null == O
    }],
    onClose: d,
    transitionState: p,
    children: [(0, i.jsx)("div", {
      className: C.answerChoicesContainer,
      children: (0, i.jsx)(r.FXm, {
        value: O,
        options: _.map(t => {
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
    }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === O && (0, i.jsx)("div", {
      className: C.otherField,
      children: (0, i.jsx)(r.oil, {
        autoFocus: true,
        placeholder: u.intl.string(u.t.s6tM8c),
        value: E,
        onChange: S
      })
    }), (0, i.jsx)(r.Checkbox, {
      checked: I,
      onChange: t => N(t),
      label: u.intl.string(u.t["3vPFQi"]),
      labelType: "secondary"
    })]
  })
}