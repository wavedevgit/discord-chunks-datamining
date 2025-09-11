/** Chunk was on web.js **/
/** chunk id: 633957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk607070 = require("./607070.js"),
  Chunk317381 = require("./317381.js"),
  Chunk638880 = require("./638880.js"),
  Chunk122613 = require("./122613.js"),
  Chunk527805 = require("./527805.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk895924 = require("./895924.js"),
  Chunk758199 = require("./758199.jsx"),
  Chunk943762 = require("./943762.jsx"),
  Chunk914498 = require("./914498.js"),
  Chunk515344 = require("./515344.js"),
  Chunk429551 = require("./429551.js"),
  Chunk973616 = require("./973616.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk158776 = require("./158776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk506071 = require("./506071.js"),
  Chunk226378 = require("./226378.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk967249 = require("./967249.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk853392 = require("./853392.js");

function B(e) {
  var t, n, a, l;
  let d, {
      application: I,
      channelId: w,
      guildId: x,
      message: B
    } = e,
    {
      analyticsLocations: F
    } = (0, g.ZP)(m.Z.ACTIVITY_INSTANCE_EMBED),
    V = (0, u.O)(),
    H = (0, s.e7)([A.Z], () => A.Z.getChannel(w), [w]),
    Y = (null == H || null == (t = H.isThread) ? true : t.call(H)) ? null == H ? true : H.parent_id : w,
    W = (0, s.e7)([S.default], () => S.default.getId()),
    {
      embeddedActivity: K,
      currentEmbeddedActivity: z,
      activityLaunchState: q
    } = (0, s.cj)([f.ZP], () => ({
      embeddedActivity: f.ZP.getEmbeddedActivitiesForChannel(null != Y ? Y : "").find(e => e.applicationId === I.id),
      currentEmbeddedActivity: f.ZP.getCurrentEmbeddedActivity(),
      activityLaunchState: f.ZP.getLaunchState(I.id, null != Y ? Y : true)
    }), [Y, I.id]),
    X = null == K ? true : K.userIds,
    Q = (0, s.Wu)([N.default], () => Array.from(null != X ? X : []).map(e => N.default.getUser(e)).filter(D.lm), [X]),
    J = (0, s.e7)([C.Z], () => {
      if (null == X) return null;
      for (let e of X) {
        let t = C.Z.findActivity(e, e => e.application_id === I.id);
        if (null != t) return t
      }
      return null
    }, [I.id, X]),
    $ = null == J ? true : J.details,
    ee = i.useMemo(() => {
      let e = new T.ZP(I);
      return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = k.wT), e
    }, [I]),
    et = (0, h.s5)({
      userId: W,
      channelId: w,
      application: ee
    }),
    en = null == K,
    er = (0, L.NL)({
      embeddedActivity: K,
      joinability: et,
      currentEmbeddedActivity: z,
      channel: H
    }),
    ei = i.useId(),
    ea = null != q && q.isLaunching && q.componentId === ei,
    eo = async () => {
      R.default.track(j.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
        application_id: I.id,
        channel_id: w,
        channel_type: null == H ? true : H.type,
        is_activity_start: en,
        cta: "Play"
      }), en ? await (0, p.Z)({
        targetApplicationId: I.id,
        channelId: w,
        locationObject: V.location,
        analyticsLocations: F,
        componentId: ei,
        commandOrigin: E.bB.ACTIVITY_INSTANCE_EMBED
      }) : await (0, _.Z)({
        applicationId: K.applicationId,
        activityChannelId: w,
        locationObject: V.location,
        analyticsLocations: F,
        componentId: ei
      })
    }, es = er.disabled ? U.intl.string(U.t.JBnc7O) : U.intl.string(U.t.cX9uLS), el = (0, v.G)(ee, () => {
      R.default.track(j.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
        application_id: I.id,
        channel_id: w,
        channel_type: null == H ? true : H.type,
        cta: "View"
      })
    }), ec = P.ZP.getApplicationIconURL({
      id: I.id,
      icon: I.icon,
      bot: I.bot
    });
  er.disabled && (d = null != (a = er.tooltip) ? a : er.text);
  let eu = Q.length,
    ed = null != (l = null == J || null == (n = J.timestamps) ? true : n.start) ? l : null == J ? true : J.created_at,
    ef = (0, y.r)(J),
    e_ = [{
      label: en ? U.intl.string(U.t.RscU7O) : U.intl.string(U.t.VJlc0d),
      trackingArea: O.j_.PLAY,
      onClick: eo,
      disabledReason: d,
      submitting: ea
    }];
  return (0, r.jsx)(b.W, {
    header: U.intl.string(U.t.pkq6Vl),
    title: I.name,
    iconSrc: ec,
    info: (0, r.jsx)("div", {
      className: G.infoWrapper,
      children: en ? (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: es
      }) : (0, r.jsxs)(r.Fragment, {
        children: [null != $ && (0, r.jsxs)("div", {
          className: G.activityPresenceDetailsContainer,
          children: [null != ed && (0, r.jsxs)("div", {
            className: G.activityPresenceDetailsItemContainer,
            children: [(0, r.jsx)("div", {
              className: G.activityPresenceDetailsItemIconContainer,
              children: (0, r.jsx)(ef.Icon, {
                size: "xxs",
                color: "currentColor"
              })
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "none",
              children: (0, r.jsx)(Z, {
                start: ed
              })
            })]
          }), (0, r.jsxs)("div", {
            className: o()(G.activityPresenceDetailsItemContainer, G.truncatesText),
            children: [(0, r.jsx)("div", {
              children: (0, r.jsx)(c.hH0, {
                size: "xxs",
                color: "currentColor"
              })
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "none",
              lineClamp: 1,
              children: $
            })]
          })]
        }), eu > 0 && (0, r.jsx)(y.K, {
          activityUsers: Q,
          guildId: x,
          activityText: ef.text
        })]
      })
    }),
    actions: e_,
    onClickContent: el,
    trackingConfig: {
      id: I.id,
      linkType: M.U.ACTIVITY_INSTANCE,
      guildId: x,
      channelId: w,
      messageId: B.id
    }
  })
}
let Z = Chunk647438.memo(e => {
  let {
    start: t
  } = e, [n, r] = i.useState(0), a = (0, x.n)(), o = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), c = false === a || o;
  return i.useEffect(() => {
    let e = new l.Xp;
    return e.start(c ? 15 * w.Z.Millis.SECOND : w.Z.Millis.SECOND, () => {
      r((new Date().getTime() - t) / w.Z.Millis.SECOND)
    }), () => e.stop()
  }, [c, t]), (0, I.m)(n)
});
Z.displayName = "ActivityRuntimeCounter";
let F = Chunk647438.memo(B)