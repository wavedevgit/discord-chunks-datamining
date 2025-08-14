/** Chunk was on web.js **/
/** chunk id: 633957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk853392 = require("./853392.js");

function G(e) {
  var t, n, o, l;
  let d, {
      application: I,
      channelId: w,
      guildId: L
    } = e,
    {
      analyticsLocations: G
    } = (0, g.ZP)(m.Z.ACTIVITY_INSTANCE_EMBED),
    Z = (0, u.O)(),
    F = (0, s.e7)([A.Z], () => A.Z.getChannel(w), [w]),
    V = (null == F || null == (t = F.isThread) ? true : t.call(F)) ? null == F ? true : F.parent_id : w,
    H = (0, s.e7)([S.default], () => S.default.getId()),
    {
      embeddedActivity: Y,
      currentEmbeddedActivity: W,
      activityLaunchState: K
    } = (0, s.cj)([f.ZP], () => ({
      embeddedActivity: f.ZP.getEmbeddedActivitiesForChannel(null != V ? V : "").find(e => e.applicationId === I.id),
      currentEmbeddedActivity: f.ZP.getCurrentEmbeddedActivity(),
      activityLaunchState: f.ZP.getLaunchState(I.id, null != V ? V : true)
    }), [V, I.id]),
    z = null == Y ? true : Y.userIds,
    q = (0, s.Wu)([C.default], () => Array.from(null != z ? z : []).map(e => C.default.getUser(e)).filter(D.lm), [z]),
    X = (0, s.e7)([N.Z], () => {
      if (null == z) return null;
      for (let e of z) {
        let t = N.Z.findActivity(e, e => e.application_id === I.id);
        if (null != t) return t
      }
      return null
    }, [I.id, z]),
    Q = null == X ? true : X.details,
    J = i.useMemo(() => {
      let e = new T.ZP(I);
      return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = j.wT), e
    }, [I]),
    $ = (0, h.s5)({
      userId: H,
      channelId: w,
      application: J
    }),
    ee = null == Y,
    et = (0, x.NL)({
      embeddedActivity: Y,
      joinability: $,
      currentEmbeddedActivity: W,
      channel: F
    }),
    en = i.useId(),
    er = null != K && K.isLaunching && K.componentId === en,
    ei = async () => {
      R.default.track(M.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
        application_id: I.id,
        channel_id: w,
        channel_type: null == F ? true : F.type,
        is_activity_start: ee,
        cta: "Play"
      }), ee ? await (0, p.Z)({
        targetApplicationId: I.id,
        channelId: w,
        locationObject: Z.location,
        analyticsLocations: G,
        componentId: en,
        commandOrigin: E.bB.ACTIVITY_INSTANCE_EMBED
      }) : await (0, _.Z)({
        applicationId: Y.applicationId,
        activityChannelId: w,
        locationObject: Z.location,
        analyticsLocations: G,
        componentId: en
      })
    }, eo = et.disabled ? k.intl.string(k.t.JBnc7O) : k.intl.string(k.t.cX9uLS), ea = (0, v.G)(J, () => {
      R.default.track(M.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
        application_id: I.id,
        channel_id: w,
        channel_type: null == F ? true : F.type,
        cta: "View"
      })
    }), es = P.ZP.getApplicationIconURL({
      id: I.id,
      icon: I.icon,
      bot: I.bot
    });
  et.disabled && (d = null != (o = et.tooltip) ? o : et.text);
  let el = q.length,
    ec = null != (l = null == X || null == (n = X.timestamps) ? true : n.start) ? l : null == X ? true : X.created_at,
    eu = (0, y.r)(X),
    ed = [{
      label: ee ? k.intl.string(k.t.RscU7O) : k.intl.string(k.t.VJlc0d),
      trackingArea: O.j_.PLAY,
      onClick: ei,
      disabledReason: d,
      submitting: er
    }];
  return (0, r.jsx)(b.W, {
    header: k.intl.string(k.t.pkq6Vl),
    title: I.name,
    iconSrc: es,
    info: (0, r.jsx)("div", {
      className: U.infoWrapper,
      children: ee ? (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: eo
      }) : (0, r.jsxs)(r.Fragment, {
        children: [null != Q && (0, r.jsxs)("div", {
          className: U.activityPresenceDetailsContainer,
          children: [null != ec && (0, r.jsxs)("div", {
            className: U.activityPresenceDetailsItemContainer,
            children: [(0, r.jsx)("div", {
              className: U.activityPresenceDetailsItemIconContainer,
              children: (0, r.jsx)(eu.Icon, {
                size: "xxs",
                color: "currentColor"
              })
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "none",
              children: (0, r.jsx)(B, {
                start: ec
              })
            })]
          }), (0, r.jsxs)("div", {
            className: a()(U.activityPresenceDetailsItemContainer, U.truncatesText),
            children: [(0, r.jsx)("div", {
              children: (0, r.jsx)(c.hH0, {
                size: "xxs",
                color: "currentColor"
              })
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "none",
              lineClamp: 1,
              children: Q
            })]
          })]
        }), el > 0 && (0, r.jsx)(y.K, {
          activityUsers: q,
          guildId: L,
          activityText: eu.text
        })]
      })
    }),
    actions: ed,
    onClickContent: ea,
    trackingConfig: {
      id: I.id,
      linkType: O.Un.ACTIVITY_INSTANCE
    }
  })
}
let B = Chunk73800.memo(e => {
  let {
    start: t
  } = e, [n, r] = i.useState(0), o = (0, L.n)(), a = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), c = false === o || a;
  return i.useEffect(() => {
    let e = new l.Xp;
    return e.start(c ? 15 * w.Z.Millis.SECOND : w.Z.Millis.SECOND, () => {
      r((new Date().getTime() - t) / w.Z.Millis.SECOND)
    }), () => e.stop()
  }, [c, t]), (0, I.m)(n)
});
B.displayName = "ActivityRuntimeCounter";
let Z = Chunk73800.memo(G)