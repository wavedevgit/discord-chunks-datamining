/** Chunk was on web.js **/
/** chunk id: 176412, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bm: () => R,
  P7: () => P,
  X: () => w,
  ae: () => N
});
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk25209 = require("./25209.js"),
  Chunk2052 = require("./2052.js"),
  Chunk542094 = require("./542094.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk213459 = require("./213459.js"),
  Chunk895924 = require("./895924.js"),
  Chunk691424 = require("./691424.jsx"),
  Chunk428595 = require("./428595.js"),
  Chunk364458 = require("./364458.js"),
  Chunk585483 = require("./585483.js"),
  Chunk499254 = require("./499254.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk346683 = require("./346683.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}
let C = function(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
  }(function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        I(e, t, n[t])
      })
    }
    return e
  }({}, Chunk428595.Z.RULES.commandMention), {
    parse: (e, t, n) => ({
      content: m.Z.RULES.commandMention.parse(e, t, n).content
    })
  }),
  A = a().pick((0, Chunk364458.Z)([Chunk428595.Z.RULES, {
    commandMention: C
  }, (0, Chunk691424.Z)({
    enableBuildOverrides: false,
    enableEmojiClick: false
  })]), ["commandMention", "customEmoji", "em", "emoji", "emoticon", "highlight", "inlineCode", "looseEm", "s", "strong", "text", "timestamp", "u", "spoiler"]),
  N = Chunk25209.w4(A);

function P(e) {
  let {
    context: t,
    application: n,
    location: i,
    sectionName: a,
    commandName: s,
    autoDismissOnClick: _ = true,
    launchingComponentId: m,
    submitting: h = false,
    fetchesApplication: g = true,
    onConfirmActivityLaunchChecksAlertOpen: I
  } = e, T = (0, l.O)(), C = (0, c.Qv)({
    context: t,
    applicationId: n.id,
    fetchesApplication: g
  }), A = (0, O.Q)(C), N = (0, o.e7)([b.Z], () => b.Z.entrypoint()), P = r.useMemo(() => {
    var e, r, i;
    if ("channel" !== t.type) return null != (i = null == (e = n.bot) ? true : e.id) ? i : null == (r = (0, f.If)(t, n.id).descriptor) ? true : r.botId
  }, [t, n.id, n.bot]), R = (0, c.w1)({
    application: n,
    botUserIdForAppDM: P,
    embeddedActivitiesManager: u.Z,
    context: t,
    locationObject: T.location,
    onActivityItemSelectedProp: e => {
      let {
        applicationId: t
      } = e;
      _ && E.y(y.ti.ACTIVITY), (0, d.yw)(v.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
        location: i,
        application_id: t,
        section_name: a,
        action: A,
        source: N
      })
    },
    launchingComponentId: m,
    commandOrigin: p.bB.APPLICATION_LAUNCHER,
    sectionName: a,
    source: N,
    fetchesApplication: g,
    onConfirmActivityLaunchChecksAlertOpen: I
  }), w = "primary", D = null != s ? s : S.intl.string(S.t.zKX8Nu);
  return A === c.JS.JOIN ? (w = "active", D = S.intl.string(S.t.d9PsMj)) : A !== c.JS.LEAVE || h || (w = "critical-primary", D = S.intl.string(S.t["Hi1/aQ"])), {
    onActivityItemSelected: R,
    activityAction: A,
    buttonVariant: w,
    buttonText: D
  }
}

function R(e, t) {
  let n = b.Z.entrypoint(),
    a = r.useMemo(() => (0, i.debounce)((e, t) => {
      (0, d.yw)(v.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
        type: e,
        source: t
      })
    }, 400, {
      leading: false,
      trailing: true
    }), []);
  r.useEffect(() => {
    null != e && a(e, n)
  }, [e, t, n, a])
}

function w(e) {
  g.S.dispatchToLastSubscribed(v.CkL.OPEN_APP_LAUNCHER, {
    applicationId: e
  })
}