/** Chunk was on 35755 **/
n.d(t, {
  Bm: () => S,
  P7: () => _,
  ae: () => O
});
var i, l, r = n(192379),
  o = n(392711),
  a = n.n(o),
  s = n(442837),
  c = n(25209),
  u = n(481060),
  d = n(2052),
  p = n(542094),
  m = n(513202),
  h = n(367907),
  f = n(213459),
  v = n(895924),
  N = n(691424),
  y = n(428595),
  x = n(364458),
  b = n(499254),
  E = n(541099),
  C = n(827498),
  g = n(346683),
  j = n(981631),
  P = n(388032);
let A = (i = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = i
      })
    }
    return e
  }({}, y.Z.RULES.commandMention), l = l = {
    parse: (e, t, n) => ({
      content: y.Z.RULES.commandMention.parse(e, t, n).content
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(l)).forEach(function(e) {
    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
  }), i),
  I = a().pick((0, x.Z)([y.Z.RULES, {
    commandMention: A
  }, (0, N.Z)({
    enableBuildOverrides: !1,
    enableEmojiClick: !1
  })]), ["commandMention", "customEmoji", "em", "emoji", "emoticon", "highlight", "inlineCode", "looseEm", "s", "strong", "text", "timestamp", "u", "spoiler"]),
  O = c.w4(I);

function _(e) {
  let {
    context: t,
    application: n,
    location: i,
    sectionName: l,
    commandName: o,
    autoDismissOnClick: a = !0,
    launchingComponentId: c,
    submitting: N = !1,
    fetchesApplication: y = !0
  } = e, x = (0, d.O)(), A = (0, p.Qv)({
    context: t,
    applicationId: n.id,
    fetchesApplication: y
  }), I = (0, g.Q)(A), O = (0, s.e7)([E.Z], () => E.Z.entrypoint()), _ = r.useMemo(() => {
    var e, i, l;
    if ("channel" !== t.type) return null !== (l = null === (e = n.bot) || void 0 === e ? void 0 : e.id) && void 0 !== l ? l : null === (i = (0, f.If)(t, n.id).descriptor) || void 0 === i ? void 0 : i.botId
  }, [t, n.id, n.bot]), S = (0, p.w1)({
    applicationId: n.id,
    botUserIdForAppDM: _,
    embeddedActivitiesManager: m.Z,
    context: t,
    locationObject: x.location,
    onActivityItemSelectedProp: e => {
      let {
        applicationId: t
      } = e;
      a && b.yT(C.ti.ACTIVITY), (0, h.yw)(j.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
        location: i,
        application_id: t,
        section_name: l,
        action: I,
        source: O
      })
    },
    launchingComponentId: c,
    commandOrigin: v.bB.APPLICATION_LAUNCHER,
    sectionName: l,
    source: O,
    fetchesApplication: y
  }), T = u.Ttl.BRAND, L = null != o ? o : P.NW.string(P.t.zKX8Nj);
  return I === p.JS.JOIN ? (T = u.Ttl.GREEN, L = P.NW.string(P.t.d9PsMj)) : I !== p.JS.LEAVE || N || (T = u.Ttl.RED, L = P.NW.string(P.t["Hi1/aW"])), {
    onActivityItemSelected: S,
    activityAction: I,
    buttonColor: T,
    buttonText: L
  }
}

function S(e, t) {
  let n = E.Z.entrypoint(),
    i = r.useMemo(() => (0, o.debounce)((e, t) => {
      (0, h.yw)(j.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
        type: e,
        source: t
      })
    }, 400, {
      leading: !1,
      trailing: !0
    }), []);
  r.useEffect(() => {
    null != e && i(e, n)
  }, [e, t, n, i])
}