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
  var t, n, a;
  let l, {
      application: d,
      channelId: I,
      guildId: D,
      message: L
    } = e,
    {
      analyticsLocations: B
    } = (0, g.ZP)(m.Z.ACTIVITY_INSTANCE_EMBED),
    F = (0, u.O)(),
    V = (0, s.e7)([A.Z], () => A.Z.getChannel(I), [I]),
    H = (null == V || null == (t = V.isThread) ? true : t.call(V)) ? null == V ? true : V.parent_id : I,
    Y = (0, s.e7)([S.default], () => S.default.getId()),
    {
      embeddedActivity: W,
      currentEmbeddedActivity: K,
      activityLaunchState: z
    } = (0, s.cj)([f.ZP], () => ({
      embeddedActivity: f.ZP.getEmbeddedActivitiesForChannel(null != H ? H : "").find(e => e.applicationId === d.id),
      currentEmbeddedActivity: f.ZP.getCurrentEmbeddedActivity(),
      activityLaunchState: f.ZP.getLaunchState(d.id, null != H ? H : true)
    }), [H, d.id]),
    q = null == W ? true : W.userIds,
    X = (0, s.Wu)([N.default], () => Array.from(null != q ? q : []).map(e => N.default.getUser(e)).filter(w.lm), [q]),
    Q = (0, s.e7)([C.Z], () => {
      if (null == q) return null;
      for (let e of q) {
        let t = C.Z.findActivity(e, e => e.application_id === d.id);
        if (null != t) return t
      }
      return null
    }, [d.id, q]),
    J = null == Q ? true : Q.details,
    $ = i.useMemo(() => {
      let e = new T.ZP(d);
      return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = k.wT), e
    }, [d]),
    ee = (0, h.s5)({
      userId: Y,
      channelId: I,
      application: $
    }),
    et = null == W,
    en = (0, x.NL)({
      embeddedActivity: W,
      joinability: ee,
      currentEmbeddedActivity: K,
      channel: V
    }),
    er = i.useId(),
    ei = null != z && z.isLaunching && z.componentId === er,
    ea = async () => {
      R.default.track(M.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
        application_id: d.id,
        channel_id: I,
        channel_type: null == V ? true : V.type,
        is_activity_start: et,
        cta: "Play"
      }), et ? await (0, p.Z)({
        targetApplicationId: d.id,
        channelId: I,
        locationObject: F.location,
        analyticsLocations: B,
        componentId: er,
        commandOrigin: E.bB.ACTIVITY_INSTANCE_EMBED
      }) : await (0, _.Z)({
        applicationId: W.applicationId,
        activityChannelId: I,
        locationObject: F.location,
        analyticsLocations: B,
        componentId: er
      })
    }, eo = en.disabled ? U.intl.string(U.t.JBnc7N) : U.intl.string(U.t.cX9uLZ), es = (0, v.G)($, () => {
      R.default.track(M.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
        application_id: d.id,
        channel_id: I,
        channel_type: null == V ? true : V.type,
        cta: "View"
      })
    }), el = P.ZP.getApplicationIconURL({
      id: d.id,
      icon: d.icon,
      bot: d.bot
    });
  en.disabled && (l = en.tooltip);
  let ec = X.length,
    eu = null != (a = null == Q || null == (n = Q.timestamps) ? true : n.start) ? a : null == Q ? true : Q.created_at,
    ed = (0, y.r)({
      activity: Q,
      activityUsersCount: ec
    }),
    ef = [{
      label: en.text,
      trackingArea: O.j_.PLAY,
      onClick: ea,
      disabled: en.disabled,
      disabledReason: l,
      submitting: ei
    }];
  return (0, r.jsx)(b.W, {
    header: U.intl.string(U.t.pkq6Vq),
    title: d.name,
    iconSrc: el,
    info: (0, r.jsx)("div", {
      className: G.infoWrapper,
      children: et ? (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: eo
      }) : (0, r.jsxs)(r.Fragment, {
        children: [null != J && (0, r.jsxs)("div", {
          className: G.activityPresenceDetailsContainer,
          children: [null != eu && (0, r.jsxs)("div", {
            className: G.activityPresenceDetailsItemContainer,
            children: [(0, r.jsx)("div", {
              className: G.activityPresenceDetailsItemIconContainer,
              children: (0, r.jsx)(ed.Icon, {
                size: "xxs",
                color: "currentColor"
              })
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "none",
              children: (0, r.jsx)(Z, {
                start: eu
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
              children: J
            })]
          })]
        }), ec > 0 && (0, r.jsx)(y.K, {
          activityUsers: X,
          guildId: D,
          activityText: ed.text
        })]
      })
    }),
    actions: ef,
    onClickContent: es,
    trackingConfig: {
      id: d.id,
      linkType: j.U.ACTIVITY_INSTANCE,
      guildId: D,
      channelId: I,
      messageId: L.id
    }
  })
}
let Z = Chunk647438.memo(e => {
  let {
    start: t
  } = e, [n, r] = i.useState(0), a = (0, L.n)(), o = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), c = false === a || o;
  return i.useEffect(() => {
    let e = new l.Xp;
    return e.start(c ? 15 * D.Z.Millis.SECOND : D.Z.Millis.SECOND, () => {
      r((new Date().getTime() - t) / D.Z.Millis.SECOND)
    }), () => e.stop()
  }, [c, t]), (0, I.m)(n)
});
Z.displayName = "ActivityRuntimeCounter";
let F = Chunk647438.memo(B)