/** Chunk was on 9753 **/
/** chunk id: 341645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => F
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212245 = require("./212245.js"),
  Chunk775602 = require("./775602.js"),
  Chunk933958 = require("./933958.js"),
  Chunk447031 = require("./447031.js"),
  Chunk956549 = require("./956549.js"),
  Chunk550151 = require("./550151.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk392054 = require("./392054.js"),
  Chunk572211 = require("./572211.jsx"),
  Chunk178910 = require("./178910.jsx"),
  Chunk354287 = require("./354287.js"),
  Chunk574660 = require("./574660.js"),
  Chunk853390 = require("./853390.js"),
  Chunk611010 = require("./611010.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk290863 = require("./290863.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk927813 = require("./927813.js"),
  Chunk403362 = require("./403362.js"),
  Chunk218394 = require("./218394.js"),
  Chunk255345 = require("./255345.js"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js"),
  Chunk768349 = require("./768349.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk356053 = require("./356053.js");
let B = Chunk64700.memo(e => {
  let {
    start: t
  } = e, [n, r] = i.useState(0), l = (0, R.j)(), a = (0, s.bG)([d.A], () => d.A.useReducedMotion), c = false === l || a;
  return i.useEffect(() => {
    let e = new o.IX;
    return e.start(c ? 15 * P.A.Millis.SECOND : P.A.Millis.SECOND, () => {
      r((new Date().getTime() - t) / P.A.Millis.SECOND)
    }), () => e.stop()
  }, [c, t]), (0, x.f)(n)
});
B.displayName = "ActivityRuntimeCounter";
let F = Chunk64700.memo(function(e) {
  var t, n, l;
  let o, {
      application: d,
      channelId: x,
      guildId: P,
      message: R
    } = e,
    {
      analyticsLocations: F
    } = (0, h.Ay)(_.A.ACTIVITY_INSTANCE_EMBED),
    H = (0, u.p)(),
    V = (0, s.bG)([C.A], () => C.A.getChannel(x), [x]),
    z = (null == V || null == (n = V.isThread) ? true : n.call(V)) ? null == V ? true : V.parent_id : x,
    W = (0, s.bG)([j.default], () => j.default.getId()),
    {
      embeddedActivity: K,
      currentEmbeddedActivity: Y,
      activityLaunchState: q
    } = (0, s.cf)([p.Ay], () => ({
      embeddedActivity: p.Ay.getEmbeddedActivitiesForChannel(null != z ? z : "").find(e => e.applicationId === d.id),
      currentEmbeddedActivity: p.Ay.getCurrentEmbeddedActivity(),
      activityLaunchState: p.Ay.getLaunchState(d.id, null != z ? z : true)
    }), [z, d.id]),
    J = null == K ? true : K.userIds,
    Q = (0, s.yK)([S.default], () => Array.from(null != J ? J : []).map(e => S.default.getUser(e)).filter(w.Vq), [J]),
    X = (0, s.bG)([I.A], () => {
      if (null == J) return null;
      for (let e of J) {
        let t = I.A.findActivity(e, e => e.application_id === d.id);
        if (null != t) return t
      }
      return null
    }, [d.id, J]),
    Z = null == X ? true : X.details,
    $ = i.useMemo(() => {
      let e = new E.Ay(d);
      return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = M.Gl), e
    }, [d]),
    ee = (0, g.vG)({
      userId: W,
      channelId: x,
      application: $
    }),
    et = null == K,
    en = (0, D.I3)({
      embeddedActivity: K,
      joinability: ee,
      currentEmbeddedActivity: Y,
      channel: V
    }),
    er = i.useId(),
    ei = null != q && q.isLaunching && q.componentId === er,
    el = async () => {
      T.default.track(L.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
        application_id: d.id,
        channel_id: x,
        channel_type: null == V ? true : V.type,
        is_activity_start: et,
        cta: "Play"
      }), et ? await (0, f.A)({
        targetApplicationId: d.id,
        channelId: x,
        locationObject: H.location,
        analyticsLocations: F,
        componentId: er,
        commandOrigin: b.iw.ACTIVITY_INSTANCE_EMBED
      }) : await (0, m.A)({
        applicationId: K.applicationId,
        activityChannelId: x,
        locationObject: H.location,
        analyticsLocations: F,
        componentId: er
      })
    }, ea = en.disabled ? U.intl.string(U.t.JBnc7N) : U.intl.string(U.t.cX9uLZ), es = (0, O.F)($, () => {
      T.default.track(L.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
        application_id: d.id,
        channel_id: x,
        channel_type: null == V ? true : V.type,
        cta: "View"
      })
    }), eo = N.Ay.getApplicationIconURL({
      id: d.id,
      icon: d.icon,
      bot: d.bot
    });
  en.disabled && (o = en.tooltip);
  let ec = Q.length,
    eu = null != (t = null == X || null == (l = X.timestamps) ? true : l.start) ? t : null == X ? true : X.created_at,
    ed = (0, A.y)({
      activity: X,
      activityUsersCount: ec
    }),
    ep = [{
      label: en.text,
      trackingArea: v.kY.PLAY,
      onClick: el,
      disabled: en.disabled,
      disabledReason: o,
      submitting: ei
    }];
  return (0, r.jsx)(y.h, {
    header: U.intl.string(U.t.pkq6Vq),
    title: d.name,
    iconSrc: eo,
    info: (0, r.jsx)("div", {
      className: G.QR,
      children: et ? (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: ea
      }) : (0, r.jsxs)(r.Fragment, {
        children: [null != Z && (0, r.jsxs)("div", {
          className: G.oL,
          children: [null != eu && (0, r.jsxs)("div", {
            className: G.DT,
            children: [(0, r.jsx)("div", {
              className: G.y9,
              children: (0, r.jsx)(ed.Icon, {
                size: "xxs",
                color: "currentColor"
              })
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "none",
              children: (0, r.jsx)(B, {
                start: eu
              })
            })]
          }), (0, r.jsxs)("div", {
            className: a()(G.DT, G.PK),
            children: [(0, r.jsx)("div", {
              children: (0, r.jsx)(c.ueQ, {
                size: "xxs",
                color: "currentColor"
              })
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "none",
              lineClamp: 1,
              children: Z
            })]
          })]
        }), ec > 0 && (0, r.jsx)(A.$, {
          activityUsers: Q,
          guildId: P,
          activityText: ed.text
        })]
      })
    }),
    actions: ep,
    onClickContent: es,
    trackingConfig: {
      id: d.id,
      linkType: k.J.ACTIVITY_INSTANCE,
      guildId: P,
      channelId: x,
      messageId: R.id,
      isDeadEnd: et
    }
  })
})