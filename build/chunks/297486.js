/** Chunk was on web.js **/
/** chunk id: 297486, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ch: () => R,
  SD: () => N,
  dn: () => w,
  hg: () => P
});
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk436857 = require("./436857.js"),
  Chunk212245 = require("./212245.js"),
  Chunk849269 = require("./849269.js"),
  Chunk869003 = require("./869003.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk264322 = require("./264322.js"),
  Chunk392054 = require("./392054.js"),
  Chunk999443 = require("./999443.jsx"),
  Chunk542664 = require("./542664.js"),
  Chunk551965 = require("./551965.js"),
  Chunk203982 = require("./203982.js"),
  Chunk211401 = require("./211401.js"),
  Chunk989837 = require("./989837.js"),
  Chunk500049 = require("./500049.js"),
  Chunk615807 = require("./615807.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}
let T = function(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
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
  }({}, Chunk542664.A.RULES.commandMention), {
    parse: (e, t, n) => ({
      content: h.A.RULES.commandMention.parse(e, t, n).content
    })
  }),
  C = a().pick((0, Chunk551965.A)([Chunk542664.A.RULES, {
    commandMention: T
  }, (0, Chunk999443.A)({
    enableBuildOverrides: false,
    enableEmojiClick: false
  })]), ["commandMention", "customEmoji", "em", "emoji", "emoticon", "highlight", "inlineCode", "looseEm", "s", "strong", "text", "timestamp", "u", "spoiler"]),
  N = Chunk436857.aV(C);

function w(e) {
  let {
    context: t,
    application: n,
    location: i,
    sectionName: a,
    commandName: o,
    autoDismissOnClick: _ = true,
    launchingComponentId: h,
    submitting: m = false,
    fetchesApplication: g = true,
    onConfirmActivityLaunchChecksAlertOpen: I
  } = e, S = (0, l.p)(), T = (0, c.Hq)({
    context: t,
    applicationId: n.id,
    fetchesApplication: g
  }), C = (0, O.G)(T), N = (0, s.bG)([y.A], () => y.A.entrypoint()), w = r.useMemo(() => {
    var e, r, i;
    if ("channel" !== t.type) return null != (e = null == (r = n.bot) ? true : r.id) ? e : null == (i = (0, f.Sx)(t, n.id).descriptor) ? true : i.botId
  }, [t, n.id, n.bot]), R = (0, c.wK)({
    application: n,
    botUserIdForAppDM: w,
    embeddedActivitiesManager: u.A,
    context: t,
    locationObject: S.location,
    onActivityItemSelectedProp: e => {
      let {
        applicationId: t
      } = e;
      _ && E.k(b.Se.ACTIVITY), (0, d.zV)(v.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
        location: i,
        application_id: t,
        section_name: a,
        action: C,
        source: N
      })
    },
    launchingComponentId: h,
    commandOrigin: p.iw.APPLICATION_LAUNCHER,
    sectionName: a,
    source: N,
    fetchesApplication: g,
    onConfirmActivityLaunchChecksAlertOpen: I
  }), P = "primary", D = null != o ? o : A.intl.string(A.t.zKX8Nu);
  return C === c.o6.JOIN ? (P = "active", D = A.intl.string(A.t.d9PsMj)) : C !== c.o6.LEAVE || m || (P = "critical-primary", D = A.intl.string(A.t["Hi1/aQ"])), {
    onActivityItemSelected: R,
    activityAction: C,
    buttonVariant: P,
    buttonText: D
  }
}

function R(e, t) {
  let n = y.A.entrypoint(),
    a = r.useMemo(() => (0, i.debounce)((e, t) => {
      (0, d.zV)(v.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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

function P(e) {
  g._.dispatchToLastSubscribed(v.jej.OPEN_APP_LAUNCHER, {
    applicationId: e
  })
}