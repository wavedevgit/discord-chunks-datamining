/** Chunk was on 33102 **/
/** chunk id: 574475, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk359511 = require("./359511.js");
let C = [{
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

function A(t) {
  let {
    application: e,
    subscriptionId: n,
    onClose: A,
    transitionState: d
  } = t, [N, O] = a.useState(false), [I, p] = a.useState(null), [S, E] = a.useState(""), b = a.useCallback(() => {
    null != I && (c.default.track(o.HAw.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
      answer: I,
      application_id: e.id,
      reason: S,
      subscription_id: n
    }), A())
  }, [e.id, n, I, A, S]);
  return a.useEffect(() => {
    r.Ay.updatedUnsyncedSettings({
      disableApplicationSubscriptionCancellationSurvey: N
    })
  }, [N]), (0, i.jsxs)(l.Modal, {
    title: u.intl.string(u.t.zPxMdQ),
    subtitle: u.intl.string(u.t["QJGdB+"]),
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t.geKm7t),
      onClick: b,
      disabled: null == I
    }],
    onClose: A,
    transitionState: d,
    children: [(0, i.jsx)("div", {
      className: _.U7,
      children: (0, i.jsx)(s.z6M, {
        value: I,
        options: C.map(t => {
          let {
            nameGetter: e,
            value: n
          } = t;
          return {
            name: e(),
            value: n
          }
        }),
        onChange: t => p(t)
      })
    }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === I && (0, i.jsx)("div", {
      className: _.Xo,
      children: (0, i.jsx)(s.ksK, {
        autoFocus: true,
        placeholder: u.intl.string(u.t.s6tM8c),
        value: S,
        onChange: E
      })
    }), (0, i.jsx)(s.Checkbox, {
      checked: N,
      onChange: t => O(t),
      label: u.intl.string(u.t["3vPFQi"]),
      labelType: "secondary"
    })]
  })
}