/** Chunk was on web.js **/
/** chunk id: 341645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function V(e) {
  var t, n, a;
  let l, {
      application: d,
      channelId: A,
      guildId: P,
      message: x
    } = e,
    {
      analyticsLocations: V
    } = (0, g.Ay)(m.A.ACTIVITY_INSTANCE_EMBED),
    B = (0, u.p)(),
    H = (0, o.bG)([T.A], () => T.A.getChannel(A), [A]),
    Y = (null == H || null == (n = H.isThread) ? true : n.call(H)) ? null == H ? true : H.parent_id : A,
    W = (0, o.bG)([S.default], () => S.default.getId()),
    {
      embeddedActivity: K,
      currentEmbeddedActivity: z,
      activityLaunchState: q
    } = (0, o.cf)([f.Ay], () => ({
      embeddedActivity: f.Ay.getEmbeddedActivitiesForChannel(null != Y ? Y : "").find(e => e.applicationId === d.id),
      currentEmbeddedActivity: f.Ay.getCurrentEmbeddedActivity(),
      activityLaunchState: f.Ay.getLaunchState(d.id, null != Y ? Y : true)
    }), [Y, d.id]),
    Z = null == K ? true : K.userIds,
    X = (0, o.yK)([N.default], () => Array.from(null != Z ? Z : []).map(e => N.default.getUser(e)).filter(D.Vq), [Z]),
    Q = (0, o.bG)([C.A], () => {
      if (null == Z) return null;
      for (let e of Z) {
        let t = C.A.findActivity(e, e => e.application_id === d.id);
        if (null != t) return t
      }
      return null
    }, [d.id, Z]),
    J = null == Q ? true : Q.details,
    $ = i.useMemo(() => {
      let e = new I.Ay(d);
      return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = M.Gl), e
    }, [d]),
    ee = (0, h.vG)({
      userId: W,
      channelId: A,
      application: $
    }),
    et = null == K,
    en = (0, L.I3)({
      embeddedActivity: K,
      joinability: ee,
      currentEmbeddedActivity: z,
      channel: H
    }),
    er = i.useId(),
    ei = null != q && q.isLaunching && q.componentId === er,
    ea = async () => {
      w.default.track(j.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
        application_id: d.id,
        channel_id: A,
        channel_type: null == H ? true : H.type,
        is_activity_start: et,
        cta: "Play"
      }), et ? await (0, _.A)({
        targetApplicationId: d.id,
        channelId: A,
        locationObject: B.location,
        analyticsLocations: V,
        componentId: er,
        commandOrigin: E.iw.ACTIVITY_INSTANCE_EMBED
      }) : await (0, p.A)({
        applicationId: K.applicationId,
        activityChannelId: A,
        locationObject: B.location,
        analyticsLocations: V,
        componentId: er
      })
    }, es = en.disabled ? U.intl.string(U.t.JBnc7N) : U.intl.string(U.t.cX9uLZ), eo = (0, v.F)($, () => {
      w.default.track(j.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
        application_id: d.id,
        channel_id: A,
        channel_type: null == H ? true : H.type,
        cta: "View"
      })
    }), el = R.Ay.getApplicationIconURL({
      id: d.id,
      icon: d.icon,
      bot: d.bot
    });
  en.disabled && (l = en.tooltip);
  let ec = X.length,
    eu = null != (t = null == Q || null == (a = Q.timestamps) ? true : a.start) ? t : null == Q ? true : Q.created_at,
    ed = (0, b.y)({
      activity: Q,
      activityUsersCount: ec
    }),
    ef = [{
      label: en.text,
      trackingArea: O.kY.PLAY,
      onClick: ea,
      disabled: en.disabled,
      disabledReason: l,
      submitting: ei
    }];
  return (0, r.jsx)(y.h, {
    header: U.intl.string(U.t.pkq6Vq),
    title: d.name,
    iconSrc: el,
    info: (0, r.jsx)("div", {
      className: G.QR,
      children: et ? (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: es
      }) : (0, r.jsxs)(r.Fragment, {
        children: [null != J && (0, r.jsxs)("div", {
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
              children: (0, r.jsx)(F, {
                start: eu
              })
            })]
          }), (0, r.jsxs)("div", {
            className: s()(G.DT, G.PK),
            children: [(0, r.jsx)("div", {
              children: (0, r.jsx)(c.ueQ, {
                size: "xxs",
                color: "currentColor"
              })
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "none",
              lineClamp: 1,
              children: J
            })]
          })]
        }), ec > 0 && (0, r.jsx)(b.$, {
          activityUsers: X,
          guildId: P,
          activityText: ed.text
        })]
      })
    }),
    actions: ef,
    onClickContent: eo,
    trackingConfig: {
      id: d.id,
      linkType: k.J.ACTIVITY_INSTANCE,
      guildId: P,
      channelId: A,
      messageId: x.id,
      isDeadEnd: et
    }
  })
}
let F = Chunk64700.memo(e => {
  let {
    start: t
  } = e, [n, r] = i.useState(0), a = (0, x.j)(), s = (0, o.bG)([d.A], () => d.A.useReducedMotion), c = false === a || s;
  return i.useEffect(() => {
    let e = new l.IX;
    return e.start(c ? 15 * P.A.Millis.SECOND : P.A.Millis.SECOND, () => {
      r((new Date().getTime() - t) / P.A.Millis.SECOND)
    }), () => e.stop()
  }, [c, t]), (0, A.f)(n)
});
F.displayName = "ActivityRuntimeCounter";
let B = Chunk64700.memo(V)