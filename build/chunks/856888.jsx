/** Chunk was on 75708 **/
/** chunk id: 856888, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./642613.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk78839 = require("./78839.js"),
  Chunk851718 = require("./851718.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk179867 = require("./179867.js");

function m(e) {
  let {
    onGoBack: t
  } = e, n = (0, s.Wu)([o.Z], () => {
    var e, t;
    return null != (t = null == (e = o.Z.getActiveApplicationSubscriptions()) ? true : e.slice().sort((e, t) => {
      var n, i, r, s;
      return (null != (r = null == (n = e.createdAt) ? true : n.getTime()) ? r : e.currentPeriodStart.getTime()) - (null != (s = null == (i = t.createdAt) ? true : i.getTime()) ? s : t.currentPeriodStart.getTime())
    })) ? t : []
  }), [a, l] = r.useState();
  return null == a && (a = <p onBack={t} title={d.intl.string(d.t["DB/m9f"])} />), <div>{a}{<div className={u.subscriptionsContainer}><c.Z subscriptions={n} updateHeader={(e, t) => {
          l((0, i.jsx)(p, {
            title: e,
            onBack: () => {
              t(), l(true)
            }
          }))
        }} /></div>}</div>
}

function p(e) {
  let {
    onBack: t,
    title: n
  } = e;
  return <div className={u.title}>{<a.zx look={a.zx.Looks.BLANK} onClick={t} size={a.zx.Sizes.ICON}><l.j9r size={"sm"} /></a.zx>}{<l.X6q variant={"heading-lg/semibold"}>{n}</l.X6q>}</div>
}