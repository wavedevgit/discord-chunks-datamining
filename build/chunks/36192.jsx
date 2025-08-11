/** Chunk was on 75708 **/
/** chunk id: 36192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./953529.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk497321 = require("./497321.js"),
  Chunk100527 = require("./100527.js"),
  Chunk43015 = require("./43015.js"),
  Chunk136097 = require("./136097.js"),
  Chunk266454 = require("./266454.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk460562 = require("./460562.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.js"),
  Chunk232696 = require("./232696.js");

function S() {
  let e, {
      currentSession: t,
      otherSessions: n
    } = (0, Chunk136097.h)(),
    s = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    a = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    [u, p] = Chunk73800.useState(false);
  Chunk73800.useEffect(() => {
    (0, Chunk266454.Q3)(Chunk704215.z.AUTH_SESSIONS_NEW, {
      dismissAction: Chunk921944.L.AUTO
    }), (0, Chunk43015.fw)();
    let e = setTimeout(() => Chunk100527(true), 500);
    return () => {
      clearTimeout(module), (0, Chunk43015.$Z)()
    }
  }, []);
  let _ = () => {
      Chunk544891.tn.post({
        url: Chunk981631.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
        rejectWithError: true
      })
    },
    [j, S] = Chunk73800.useState(new Set);
  return Chunk120356 ? <Chunk497321.Z /> : (e = null == exports && 0 === require.length ? Chunk230711 ? <div className={Chunk232696.loading}><Chunk481060.$jN /></div> : null : <Chunk255367.Fragment>{<div className={Chunk232696.sessions}>{<Chunk481060.hjN tag={Chunk481060.RB0.H5} title={Chunk388032.intl.string(Chunk388032.t.LLS19v)} titleClassName={Chunk232696.groupTitle}>{null != exports ? (0, Chunk255367.jsx)(T, {
          session: exports,
          current: true
        }) : null}</Chunk481060.hjN>}{!(require.length > 0) && (null == a ? true : a.mfaEnabled) ? null : <Chunk481060.hjN tag={Chunk481060.RB0.H5} title={Chunk388032.intl.string(Chunk388032.t.xx1MWV)} titleClassName={Chunk232696.groupTitle} className={Chunk232696.otherSessions}>{require.map(e => <T session={e} useChecks={j.size > 0} checked={j.has(e.id_hash)} setChecked={t => {
            let n = new Set(j);
            t ? n.add(e.id_hash) : n.delete(e.id_hash), S(n)
          }} />)}{(null == a ? true : a.mfaEnabled) ? null : <I />}</Chunk481060.hjN>}</div>}{require.length > 0 ? <Chunk481060.hjN tag={Chunk481060.RB0.H5} title={Chunk823379.size > 0 ? Chunk388032.intl.string(Chunk388032.t.mMEmRE) : Chunk388032.intl.string(Chunk388032.t.Vij32N)}>{<Chunk481060.R94 type={Chunk481060.geA.DESCRIPTION}>{Chunk388032.intl.string(Chunk388032.t.OTXyaW)}</Chunk481060.R94>}{<div data-button-hoisted-classname-wrapper={true} className={Chunk232696.logOutAllButton}><Chunk481060.zxk variant={"critical-secondary"} size={"sm"} text={Chunk823379.size > 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["83CPLi"], {
            count: Chunk823379.size
          }) : Chunk388032.intl.string(Chunk388032.t.cLmmeX)} onClick={() => {
            Chunk823379.size > 0 ? (0, Chunk43015.L$)(Array.from(Chunk823379)) : (0, Chunk43015.L$)(require.map(e => e.id_hash))
          }} /></div>}</Chunk481060.hjN> : null}</Chunk255367.Fragment>, <Chunk481060.hjN tag={Chunk481060.RB0.H1} title={Chunk388032.intl.string(Chunk388032.t["+1h0k5"])}>{<Chunk481060.R94 type={Chunk481060.geA.DESCRIPTION} className={Chunk232696.description}>{Chunk388032.intl.string(Chunk388032.t.zZp619)}</Chunk481060.R94>}{(null == a ? true : a.isStaff()) ? <div className={Chunk232696.tools}>{<Chunk481060.Text className={Chunk232696.toolsTitle} variant={"text-md/bold"}>{"DEV TOOLS"}</Chunk481060.Text>}{<Chunk481060.Text className={Chunk232696.toolsTitle} variant={"text-sm/normal"} color={"text-danger"}>{"These tools are only shown to staff users."}</Chunk481060.Text>}{<Chunk481060.ua7 text={"Triggers mobile and email suspicious session notifications for the current user"}>{e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, i.jsx)(d.zxk, {
            variant: "secondary",
            size: "sm",
            text: "Trigger Suspicious Sessions Notification",
            onClick: _,
            onMouseEnter: t,
            onMouseLeave: n
          })
        }}</Chunk481060.ua7>}</div> : null}{module}</Chunk481060.hjN>)
}

function T(e) {
  var t, n, r, s, l;
  let {
    session: o,
    current: c,
    setChecked: u,
    checked: m,
    useChecks: p
  } = e, f = null != (l = null == (t = o.client_info) ? true : t.location) ? l : null == (n = o.client_info) ? true : n.ip, b = null == (r = o.client_info) ? true : r.platform, {
    text: x,
    icon: _
  } = function(e) {
    switch (null == e ? true : e.toLowerCase().trim()) {
      case null:
      case true:
      case "":
        return {
          text: O.intl.string(O.t.cDHCNT), icon: d.pzj
        };
      case "ios":
      case "android":
        return {
          text: e, icon: d.AtH
        };
      default:
        return {
          text: e, icon: d.pzj
        }
    }
  }(null == (s = o.client_info) ? true : s.os), E = c ? null : (0, h.p)(o.approx_last_used_time), C = [x, b].filter(j.lm), S = [f, E].filter(j.lm);
  return <div className={a()(v.session, c ? v.currentSession : null)}>{<div className={v.sessionIcon}><_ size={"md"} color={"currentColor"} /></div>}{<div className={v.sessionInfo}>{<d.Text variant={"eyebrow"} className={v.sessionInfoRow}>{<span>{C[0]}</span>}{C.length > 1 && <i.Fragment>{<span>{"\xb7"}</span>}{<span>{C[1]}</span>}</i.Fragment>}</d.Text>}{<d.Text variant={"text-sm/medium"} className={v.sessionInfoRow}>{<span>{S[0]}</span>}{S.length > 1 && <i.Fragment>{<span>{"\xb7"}</span>}{<span>{S[1]}</span>}</i.Fragment>}</d.Text>}</div>}{c ? null : p ? <div className={v.sessionCheckbox}><d.XZJ onChange={(e, t) => {
          null == u || u(t)
        }} value={m} /></div> : <d.P3F className={v.sessionMoreButton} onClick={e => {
        e.shiftKey ? null == u || u(true) : (0, g.L$)(o.id_hash)
      }} aria-label={O.intl.string(O.t.E4MJNj)}><d.Dio size={"md"} color={"currentColor"} /></d.P3F>}</div>
}

function I() {
  return <div className={a()(Chunk232696.session, Chunk232696.legacySession)}>{<div className={Chunk232696.sessionIcon}><Chunk460562.Z width={"32"} height={"32"} /></div>}{<div className={Chunk232696.sessionInfo}>{<Chunk481060.Text variant={"eyebrow"} className={Chunk232696.sessionInfoRow} color={"text-muted"}><span>{Chunk388032.intl.string(Chunk388032.t.iUa0sr)}</span></Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/medium"} className={Chunk232696.sessionInfoRow} color={"text-muted"}><span>{Chunk388032.intl.format(Chunk388032.t["044+8v"], {
            onClick: () => Chunk230711.Z.setSection(Chunk981631.oAB.ACCOUNT, null, {
              analyticsLocations: [Chunk100527.Z.USER_SETTINGS_SESSIONS]
            })
          })}</span></Chunk481060.Text>}</div>}</div>
}