/** Chunk was on 66866 **/
/** chunk id: 176412, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bm: () => A,
  P7: () => N,
  X: () => w,
  ae: () => P
});
var r, i, Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
let S = (r = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, Chunk428595.Z.RULES.commandMention), i = i = {
    parse: (e, t, n) => ({
      content: b.Z.RULES.commandMention.parse(e, t, n).content
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
  }), r),
  T = o().pick((0, Chunk364458.Z)([Chunk428595.Z.RULES, {
    commandMention: S
  }, (0, Chunk691424.Z)({
    enableBuildOverrides: false,
    enableEmojiClick: false
  })]), ["commandMention", "customEmoji", "em", "emoji", "emoticon", "highlight", "inlineCode", "looseEm", "s", "strong", "text", "timestamp", "u", "spoiler"]),
  P = Chunk25209.w4(T);

function N(e) {
  let {
    context: t,
    application: n,
    location: r,
    sectionName: i,
    commandName: a,
    autoDismissOnClick: o = true,
    launchingComponentId: c,
    submitting: h = false,
    fetchesApplication: b = true,
    onConfirmActivityLaunchChecksAlertOpen: E
  } = e, C = (0, d.O)(), S = (0, p.Qv)({
    context: t,
    applicationId: n.id,
    fetchesApplication: b
  }), T = (0, x.Q)(S), P = (0, s.e7)([O.Z], () => O.Z.entrypoint()), N = l.useMemo(() => {
    var e, r, i;
    if ("channel" !== t.type) return null != (i = null == (e = n.bot) ? true : e.id) ? i : null == (r = (0, _.If)(t, n.id).descriptor) ? true : r.botId
  }, [t, n.id, n.bot]), A = (0, p.w1)({
    application: n,
    botUserIdForAppDM: N,
    embeddedActivitiesManager: m.Z,
    context: t,
    locationObject: C.location,
    onActivityItemSelectedProp: e => {
      let {
        applicationId: t
      } = e;
      o && v.yT(y.ti.ACTIVITY), (0, f.yw)(j.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
        location: r,
        application_id: t,
        section_name: i,
        action: T,
        source: P
      })
    },
    launchingComponentId: c,
    commandOrigin: g.bB.APPLICATION_LAUNCHER,
    sectionName: i,
    source: P,
    fetchesApplication: b,
    onConfirmActivityLaunchChecksAlertOpen: E
  }), w = "primary", Z = u.Tt.BRAND, R = null != a ? a : I.intl.string(I.t.zKX8Nj);
  return T === p.JS.JOIN ? (w = "active", Z = u.Tt.GREEN, R = I.intl.string(I.t.d9PsMj)) : T !== p.JS.LEAVE || h || (w = "critical-primary", R = I.intl.string(I.t["Hi1/aW"])), {
    onActivityItemSelected: A,
    activityAction: T,
    buttonVariant: w,
    buttonColor: Z,
    buttonText: R
  }
}

function A(e, t) {
  let n = O.Z.entrypoint(),
    r = l.useMemo(() => (0, a.debounce)((e, t) => {
      (0, f.yw)(j.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
        type: e,
        source: t
      })
    }, 400, {
      leading: false,
      trailing: true
    }), []);
  l.useEffect(() => {
    null != e && r(e, n)
  }, [e, t, n, r])
}

function w(e) {
  C.S.dispatchToLastSubscribed(j.CkL.OPEN_APP_LAUNCHER, {
    applicationId: e
  })
}