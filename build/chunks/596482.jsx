/** Chunk was on 6850 **/
/** chunk id: 596482, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk722770 = require("./722770.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk666657 = require("./666657.js"),
  Chunk533244 = require("./533244.js"),
  Chunk664452 = require("./664452.js"),
  Chunk226192 = require("./226192.jsx"),
  Chunk223606 = require("./223606.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk708210 = require("./708210.js");

function f(e) {
  var t;
  if (null == (null != (t = e.dmsDisabledUntil) ? t : e.invitesDisabledUntil)) return "";
  let n = null != e.dmsDisabledUntil,
    r = null != e.invitesDisabledUntil;
  switch (true) {
    case n && r:
      return b.intl.string(b.t.CEygFx);
    case n:
      return b.intl.string(b.t.Wmbjc3);
    case r:
      return b.intl.string(b.t.Q1QrAg);
    default:
      return ""
  }
}

function h(e) {
  var t;
  let {
    onHandleEnableLockdown: n,
    onHandleReportFalseAlarm: l,
    incidentData: s
  } = e, c = null != (t = s.raidDetectedAt) ? t : s.dmSpamDetectedAt;
  return <div className={p.subheaderContainer}>{<div className={p.subHeaderTextContainer}>{<a.b7C size={"md"} className={p.shieldIcon} color={o.Z.RED_345} />}{<div className={p.subHeaderText}>{<a.X6q className={p.heading} variant={"heading-lg/semibold"} color={"text-danger"}>{(0, u.kk)(s) ? b.intl.string(b.t.raRxxc) : b.intl.string(b.t["4nbAtb"])}</a.X6q>}{<a.Text className={p.tagLine} variant={"text-sm/medium"}>{b.intl.format(b.t["4QIIZm"], {
            dateTime: new Date(null != c ? c : "").toLocaleString(b.intl.currentLocale, u.pQ)
          })}</a.Text>}</div>}</div>}{<div className={p.buttonContainer}>{<i.zx className={p.reportButton} color={i.zx.Colors.TRANSPARENT} onClick={l}><a.Text variant={"text-sm/semibold"}>{b.intl.string(b.t.ISiXbW)}</a.Text></i.zx>}{<a.gtL className={p.__invalid_lockdownButton} color={i.zx.Colors.RED} onClick={n}><div className={p.lockdownButtonInnerRaidDetected}>{<a.mBM size={"xs"} color={"currentColor"} className={p.lockIcon} />}{<a.Text className={p.lockdownButtonText} variant={"text-sm/semibold"}>{b.intl.string(b.t.UgXhdn)}</a.Text>}</div></a.gtL>}</div>}</div>
}

function j(e) {
  let {
    onHandleEnableLockdown: t,
    incidentData: n,
    guildName: l
  } = e;
  return <div className={p.subheaderContainer}>{<div className={p.subHeaderTextContainer}>{<a.b7C size={"md"} className={p.shieldIcon} color={o.Z.BRAND_360} />}{<div className={p.subHeaderText}>{<a.X6q className={p.heading} variant={"heading-lg/semibold"} color={"text-brand"}>{f(n)}</a.X6q>}{<a.Text className={p.tagLine} variant={"text-sm/medium"}>{(0, u.OY)(n, l)}</a.Text>}</div>}</div>}{<i.zx className={p.lockdownNoticeButton} color={i.zx.Colors.BRAND} onClick={t}><div className={p.lockdownButtonInner}>{<a.mBM size={"xs"} color={"currentColor"} className={p.lockIcon} />}{<a.Text className={p.lockdownButtonText} variant={"text-sm/semibold"}>{b.intl.string(b.t.e1bMNT)}</a.Text>}</div></i.zx>}</div>
}

function g(e) {
  let {
    onHandleEnableLockdown: t,
    onHandleReportFalseAlarm: n,
    incidentData: l,
    guildName: s
  } = e;
  return <div className={p.subheaderContainer}>{<div className={p.subHeaderTextContainer}>{<a.b7C size={"md"} className={p.shieldIcon} color={o.Z.BRAND_360} />}{<div className={p.subHeaderText}>{<a.X6q className={p.heading} variant={"heading-lg/semibold"} color={"text-brand"}>{f(l)}</a.X6q>}{<a.Text className={p.tagLine} variant={"text-sm/medium"}>{(0, u.OY)(l, s)}</a.Text>}</div>}</div>}{<div className={p.buttonContainer}>{<i.zx className={p.reportButton} color={i.zx.Colors.TRANSPARENT} onClick={n}><a.Text variant={"text-sm/semibold"}>{b.intl.string(b.t.ISiXbW)}</a.Text></i.zx>}{<i.zx className={p.__invalid_lockdownButton} color={i.zx.Colors.BRAND} onClick={t}><div className={p.lockdownButtonInnerRaidDetected}>{<a.mBM size={"xs"} color={"currentColor"} className={p.lockIcon} />}{<a.Text className={p.lockdownButtonText} variant={"text-sm/semibold"}>{b.intl.string(b.t.e1bMNT)}</a.Text>}</div></i.zx>}</div>}</div>
}

function x(e) {
  let {
    guild: t,
    incidentData: n,
    isUnderLockdown: o,
    isRaidDetected: i
  } = e, b = l.useCallback(() => {
    (0, a.ZDy)(async () => {
      let e = {
        source: c.Zu.MEMBER_SAFETY_PAGE,
        location: s.Z.MEMBER_SAFETY_PAGE,
        alertType: (0, u.T1)(n)
      };
      return n => {
        var l, o;
        return <d.default{...l = function(e) {
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
        }({}, n), o = o = {
          guildId: t.id,
          analyticsData: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
        }), l} />
      }
    })
  }, [t.id, n]), p = l.useCallback(() => {
    let e = m.Z.getLastIncidentAlertMessage(t.id);
    (0, C.kW)(e, t.id)
  }, [t.id]), f = (() => {
    switch (true) {
      case i && o:
        return 3;
      case i:
        return 1;
      case o:
        return 2;
      default:
        return 0
    }
  })();
  if (null == t || null == n) return null;
  switch (f) {
    case 1:
      return <h onHandleEnableLockdown={b} onHandleReportFalseAlarm={p} incidentData={n} />;
    case 2:
      return <j onHandleEnableLockdown={b} incidentData={n} guildName={t.name} />;
    case 3:
      return <g onHandleEnableLockdown={b} onHandleReportFalseAlarm={p} incidentData={n} guildName={t.name} />;
    default:
      return null
  }
}