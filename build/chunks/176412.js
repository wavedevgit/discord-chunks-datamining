/** Chunk was on 62981 **/
/** chunk id: 176412, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Bm: () => A,
  P7: () => D,
  X: () => M,
  ae: () => E
});
var r, o, Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk25209 = require("./25209.js"),
  Chunk755721 = require("./755721.js"),
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
let I = (r = function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = r
      })
    }
    return e
  }({}, Chunk428595.Z.RULES.commandMention), o = o = {
    parse: (e, n, t) => ({
      content: y.Z.RULES.commandMention.parse(e, n, t).content
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(o)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
  }), r),
  x = c().pick((0, Chunk364458.Z)([Chunk428595.Z.RULES, {
    commandMention: I
  }, (0, Chunk691424.Z)({
    enableBuildOverrides: false,
    enableEmojiClick: false
  })]), ["commandMention", "customEmoji", "em", "emoji", "emoticon", "highlight", "inlineCode", "looseEm", "s", "strong", "text", "timestamp", "u", "spoiler"]),
  E = Chunk25209.w4(x);

function D(e) {
  let {
    context: n,
    application: t,
    location: r,
    sectionName: o,
    commandName: a,
    autoDismissOnClick: c = true,
    launchingComponentId: d,
    submitting: C = false,
    fetchesApplication: y = true,
    onConfirmActivityLaunchChecksAlertOpen: g
  } = e, O = (0, u.O)(), I = (0, p.Qv)({
    context: n,
    applicationId: t.id,
    fetchesApplication: y
  }), x = (0, P.Q)(I), E = (0, l.e7)([v.Z], () => v.Z.entrypoint()), D = i.useMemo(() => {
    var e, r, o;
    if ("channel" !== n.type) return null != (o = null == (e = t.bot) ? true : e.id) ? o : null == (r = (0, f.If)(n, t.id).descriptor) ? true : r.botId
  }, [n, t.id, t.bot]), A = (0, p.w1)({
    application: t,
    botUserIdForAppDM: D,
    embeddedActivitiesManager: b.Z,
    context: n,
    locationObject: O.location,
    onActivityItemSelectedProp: e => {
      let {
        applicationId: n
      } = e;
      c && h.yT(w.ti.ACTIVITY), (0, _.yw)(j.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
        location: r,
        application_id: n,
        section_name: o,
        action: x,
        source: E
      })
    },
    launchingComponentId: d,
    commandOrigin: m.bB.APPLICATION_LAUNCHER,
    sectionName: o,
    source: E,
    fetchesApplication: y,
    onConfirmActivityLaunchChecksAlertOpen: g
  }), M = "primary", B = s.Tt.BRAND, L = null != a ? a : S.intl.string(S.t.zKX8Nj);
  return x === p.JS.JOIN ? (M = "active", B = s.Tt.GREEN, L = S.intl.string(S.t.d9PsMj)) : x !== p.JS.LEAVE || C || (M = "critical-primary", L = S.intl.string(S.t["Hi1/aW"])), {
    onActivityItemSelected: A,
    activityAction: x,
    buttonVariant: M,
    buttonColor: B,
    buttonText: L
  }
}

function A(e, n) {
  let t = v.Z.entrypoint(),
    r = i.useMemo(() => (0, a.debounce)((e, n) => {
      (0, _.yw)(j.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
        type: e,
        source: n
      })
    }, 400, {
      leading: false,
      trailing: true
    }), []);
  i.useEffect(() => {
    null != e && r(e, t)
  }, [e, n, t, r])
}

function M(e) {
  O.S.dispatchToLastSubscribed(j.CkL.OPEN_APP_LAUNCHER, {
    applicationId: e
  })
}