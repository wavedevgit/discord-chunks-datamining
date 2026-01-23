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
  nameGetter: () => _.intl.string(_.t["+RZgNV"])
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
  nameGetter: () => _.intl.string(_.t.kgPXgv)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
  nameGetter: () => _.intl.string(_.t.vujsUK)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
  nameGetter: () => _.intl.string(_.t.AYAOLF)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
  nameGetter: () => _.intl.string(_.t.wZLu3Y)
}];

function A(t) {
  let {
    application: e,
    subscriptionId: n,
    onClose: A,
    transitionState: d
  } = t, [p, I] = a.useState(false), [N, O] = a.useState(null), [S, E] = a.useState(""), T = a.useCallback(() => {
    null != N && (c.default.track(o.HAw.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
      answer: N,
      application_id: e.id,
      reason: S,
      subscription_id: n
    }), A())
  }, [e.id, n, N, A, S]);
  return a.useEffect(() => {
    s.Ay.updatedUnsyncedSettings({
      disableApplicationSubscriptionCancellationSurvey: p
    })
  }, [p]), (0, i.jsxs)(l.Modal, {
    title: _.intl.string(_.t.zPxMdQ),
    subtitle: _.intl.string(_.t["QJGdB+"]),
    actions: [{
      variant: "primary",
      text: _.intl.string(_.t.geKm7t),
      onClick: T,
      disabled: null == N
    }],
    onClose: A,
    transitionState: d,
    children: [(0, i.jsx)("div", {
      className: u.U7,
      children: (0, i.jsx)(r.z6M, {
        value: N,
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
        onChange: t => O(t)
      })
    }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === N && (0, i.jsx)("div", {
      className: u.Xo,
      children: (0, i.jsx)(r.ksK, {
        autoFocus: true,
        placeholder: _.intl.string(_.t.s6tM8c),
        value: S,
        onChange: E
      })
    }), (0, i.jsx)(r.Checkbox, {
      checked: p,
      onChange: t => I(t),
      label: _.intl.string(_.t["3vPFQi"]),
      labelType: "secondary"
    })]
  })
}