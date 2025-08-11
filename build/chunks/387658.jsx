/** Chunk was on web.js **/
/** chunk id: 387658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk140835 = require("./140835.jsx"),
  Chunk246521 = require("./246521.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk607070 = require("./607070.js"),
  Chunk555573 = require("./555573.js"),
  Chunk213459 = require("./213459.js"),
  Chunk10718 = require("./10718.js"),
  Chunk895924 = require("./895924.js"),
  Chunk104919 = require("./104919.js"),
  Chunk583027 = require("./583027.js"),
  Chunk585483 = require("./585483.js"),
  Chunk499254 = require("./499254.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk496158 = require("./496158.js"),
  Chunk676161 = require("./676161.js"),
  Chunk660090 = require("./660090.js"),
  Chunk783097 = require("./783097.js"),
  Chunk176412 = require("./176412.js"),
  Chunk870205 = require("./870205.js"),
  Chunk981631 = require("./981631.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.js"),
  Chunk85884 = require("./85884.js"),
  Chunk100260 = require("./100260.js");
let x = 5,
  M = "placeholder",
  k = [, , , , , ].fill(M);

function j(e) {
  var t, n;
  let {
    context: o,
    command: a,
    section: l,
    sectionName: c
  } = e, d = i.useCallback(() => {
    let e = O.Z.entrypoint();
    y.yT(v.ti.COMMAND), (0, E.Mo)({
      command: a,
      location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: c
    }), "channel" === o.type && (_.Po({
      channelId: o.channel.id,
      command: a,
      section: l,
      location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: c,
      source: e,
      commandOrigin: m.bB.APPLICATION_LAUNCHER
    }), b.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: o.channel.id
    }))
  }, [o, a, l, c]), f = (null != (n = null == (t = a.options) ? true : t.length) ? n : 0) > 0, p = i.useMemo(() => (0, N.ae)(a.displayDescription, true), [a.displayDescription]), h = i.useMemo(() => <div className={L.commandTextContainer}>{<u.Text variant={"text-sm/semibold"} color={"header-primary"}>{a.displayName}</u.Text>}{<u.Text variant={"text-xs/medium"} color={"text-muted"} lineClamp={1}>{p}</u.Text>}</div>, [a.displayName, p]);
  return <u.P3F className={L.command} onClick={d}>{<u.Rny className={L.commandFocusBlock}>{h}</u.Rny>}{f ? <s.F /> : <G context={o} command={a} sectionName={c} />}</u.P3F>
}

function U() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      styleLarge: t,
      styleSmall: n
    } = Chunk73800.useMemo(() => ({
      styleLarge: {
        width: "".concat(10 + 20 * Math.random(), "%"),
        height: "auto"
      },
      styleSmall: {
        width: "".concat(30 + 60 * Math.random(), "%"),
        height: "auto"
      }
    }), []),
    o = Chunk73800.useMemo(() => <div className={Chunk100260.commandTextContainerPlaceholder}>{<div className={Chunk85884.textPlaceholder} style={exports}><Chunk481060.Text className={Chunk85884.hidden} variant={"text-sm/semibold"} color={"header-primary"} lineClamp={1}>{"_"}</Chunk481060.Text></div>}{<div className={Chunk85884.textPlaceholder} style={require}><Chunk481060.Text className={Chunk85884.hidden} variant={"text-xs/medium"} color={"text-muted"} lineClamp={1}>{"_"}</Chunk481060.Text></div>}</div>, [exports, require]);
  return <div className={a()(Chunk100260.command, Chunk85884.loadingAnimation, {
      [Chunk85884.noAnimation]: module
    })}>{Chunk120356}</div>
}

function G(e) {
  let {
    context: t,
    command: n,
    sectionName: o
  } = e;
  (0, p.PL)(true, true), (0, p.em)(t, true, true);
  let a = (0, I.D)(t),
    [s, c] = i.useState(false),
    d = i.useCallback(async e => {
      if ("channel" !== t.type) return;
      e.stopPropagation();
      let r = O.Z.lastShownEntrypoint();
      try {
        let {
          isAuthorized: e
        } = await (0, g.L)({
          applicationId: n.applicationId,
          channel: "channel" === t.type ? t.channel : true,
          commandIntegrationTypes: n.integration_types,
          appLauncherContext: {
            entrypoint: r,
            location: m.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: o
          }
        });
        e && (await (0, A.Y$)({
          command: n,
          optionValues: {},
          context: a,
          sectionName: o,
          commandOrigin: m.bB.APP_LAUNCHER_APPLICATION_VIEW
        }), y.yT(v.ti.COMMAND))
      } finally {
        c(false)
      }
    }, [n, t, o, a]);
  return <u.zxk type={"submit"} onClick={d} disabled={s} variant={"secondary"} aria-label={w.intl.formatToPlainString(w.t.UXw6W1, {
      commandName: n.untranslatedName
    })} text={w.intl.string(w.t.TXNS7e)} icon={l.U} iconPosition={"end"} size={"md"} />
}

function B(e) {
  let {
    context: t,
    commands: n,
    section: i,
    headerName: o,
    sectionName: a,
    children: s
  } = e;
  return 0 === n.length ? null : <r.Fragment>{<div className={L.commandListHeader}>{<u.X6q variant={"heading-sm/semibold"}>{o}</u.X6q>}{s}</div>}{<ul className={L.commandContainer} aria-label={o}>{n.map((e, n) => e === M ? (0, r.jsx)(U, {}, e + n) : (0, r.jsx)(j, {
        context: t,
        command: e,
        section: i,
        sectionName: a
      }, e.id))}</ul>}</r.Fragment>
}

function Z(e) {
  var t;
  let {
    context: n,
    application: o,
    sectionName: a,
    installOnDemand: s,
    setHasCommands: l
  } = e, {
    filterSection: c,
    commandsByActiveSection: u,
    sectionDescriptors: f,
    loading: _
  } = h.wi({
    context: n,
    filters: {
      commandTypes: [d.yU.CHAT]
    },
    options: {
      placeholderCount: 0,
      limit: P.tn,
      includeFrecency: true,
      allowApplicationState: s,
      installOnDemand: s,
      applicationId: o.id
    },
    allowFetch: true
  }), p = null != (t = f.find(e => e.id === o.id)) ? t : null, {
    sortOrder: m,
    setSortOrder: g,
    commands: E,
    canSort: b
  } = (0, S.Z)({
    sectionId: o.id,
    commandsByActiveSection: u
  });
  i.useEffect(() => {
    c(o.id)
  }, [o.id, c]);
  let y = (0, T.Z)({
    context: n,
    commands: E,
    limit: x
  });
  return (i.useEffect(() => {
    l(E.length > 0)
  }, [l, E]), _ || 0 !== E.length) ? <ul className={L.contentContainer}>{<B context={n} section={p} commands={y} headerName={w.intl.string(w.t.acSE0t)} sectionName={a} />}{<B context={n} section={p} commands={_ ? k : E} headerName={w.intl.string(w.t.DUU9Ly)} sectionName={a}>{b && (0, r.jsx)(C.Z, {
        sortOrder: m,
        onSortOptionClick: g
      })}</B>}</ul> : null
}