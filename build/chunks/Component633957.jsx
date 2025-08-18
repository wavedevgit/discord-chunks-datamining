/** Chunk was on 91173 **/
/** chunk id: 633957, original params: e,t,n (module,exports,require) **/
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
  Chunk388032 = require("./388032.jsx"),
  Chunk853392 = require("./853392.js");
let U = Chunk647438.memo(e => {
  let {
    start: t
  } = e, [n, r] = i.useState(0), l = (0, Z.n)(), o = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), c = false === l || o;
  return i.useEffect(() => {
    let e = new s.Xp;
    return e.start(c ? 15 * A.Z.Millis.SECOND : A.Z.Millis.SECOND, () => {
      r((new Date().getTime() - t) / A.Z.Millis.SECOND)
    }), () => e.stop()
  }, [c, t]), (0, y.m)(n)
});
U.displayName = "ActivityRuntimeCounter";
let F = Chunk647438.memo(function(e) {
  var t, n, l, s;
  let d, {
      application: y,
      channelId: A,
      guildId: Z
    } = e,
    {
      analyticsLocations: F
    } = (0, h.ZP)(_.Z.ACTIVITY_INSTANCE_EMBED),
    B = (0, u.O)(),
    G = (0, a.e7)([I.Z], () => I.Z.getChannel(A), [A]),
    H = (null == G || null == (t = G.isThread) ? true : t.call(G)) ? null == G ? true : G.parent_id : A,
    V = (0, a.e7)([j.default], () => j.default.getId()),
    {
      embeddedActivity: z,
      currentEmbeddedActivity: W,
      activityLaunchState: Y
    } = (0, a.cj)([p.ZP], () => ({
      embeddedActivity: p.ZP.getEmbeddedActivitiesForChannel(null != H ? H : "").find(e => e.applicationId === y.id),
      currentEmbeddedActivity: p.ZP.getCurrentEmbeddedActivity(),
      activityLaunchState: p.ZP.getLaunchState(y.id, null != H ? H : true)
    }), [H, y.id]),
    K = null == z ? true : z.userIds,
    X = (0, a.Wu)([T.default], () => Array.from(null != K ? K : []).map(e => T.default.getUser(e)).filter(w.lm), [K]),
    q = (0, a.e7)([S.Z], () => {
      if (null == K) return null;
      for (let e of K) {
        let t = S.Z.findActivity(e, e => e.application_id === y.id);
        if (null != t) return t
      }
      return null
    }, [y.id, K]),
    J = null == q ? true : q.details,
    Q = i.useMemo(() => {
      let e = new x.ZP(y);
      return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = L.wT), e
    }, [y]),
    $ = (0, g.s5)({
      userId: V,
      channelId: A,
      application: Q
    }),
    ee = null == z,
    et = (0, R.NL)({
      embeddedActivity: z,
      joinability: $,
      currentEmbeddedActivity: W,
      channel: G
    }),
    en = i.useId(),
    er = null != Y && Y.isLaunching && Y.componentId === en,
    ei = async () => {
      P.default.track(D.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
        application_id: y.id,
        channel_id: A,
        channel_type: null == G ? true : G.type,
        is_activity_start: ee,
        cta: "Play"
      }), ee ? await (0, f.Z)({
        targetApplicationId: y.id,
        channelId: A,
        locationObject: B.location,
        analyticsLocations: F,
        componentId: en,
        commandOrigin: b.bB.ACTIVITY_INSTANCE_EMBED
      }) : await (0, m.Z)({
        applicationId: z.applicationId,
        activityChannelId: A,
        locationObject: B.location,
        analyticsLocations: F,
        componentId: en
      })
    }, el = et.disabled ? M.intl.string(M.t.JBnc7O) : M.intl.string(M.t.cX9uLS), eo = (0, v.G)(Q, () => {
      P.default.track(D.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
        application_id: y.id,
        channel_id: A,
        channel_type: null == G ? true : G.type,
        cta: "View"
      })
    }), ea = N.ZP.getApplicationIconURL({
      id: y.id,
      icon: y.icon,
      bot: y.bot
    });
  et.disabled && (d = null != (l = et.tooltip) ? l : et.text);
  let es = X.length,
    ec = null != (s = null == q || null == (n = q.timestamps) ? true : n.start) ? s : null == q ? true : q.created_at,
    eu = (0, C.r)(q),
    ed = [{
      label: ee ? M.intl.string(M.t.RscU7O) : M.intl.string(M.t.VJlc0d),
      trackingArea: O.j_.PLAY,
      onClick: ei,
      disabledReason: d,
      submitting: er
    }];
  return (0, r.jsx)(E.W, {
    header: M.intl.string(M.t.pkq6Vl),
    title: y.name,
    iconSrc: ea,
    info: (0, r.jsx)("div", {
      className: k.infoWrapper,
      children: ee ? (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: el
      }) : (0, r.jsxs)(r.Fragment, {
        children: [null != J && (0, r.jsxs)("div", {
          className: k.activityPresenceDetailsContainer,
          children: [null != ec && (0, r.jsxs)("div", {
            className: k.activityPresenceDetailsItemContainer,
            children: [(0, r.jsx)("div", {
              className: k.activityPresenceDetailsItemIconContainer,
              children: (0, r.jsx)(eu.Icon, {
                size: "xxs",
                color: "currentColor"
              })
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "none",
              children: (0, r.jsx)(U, {
                start: ec
              })
            })]
          }), (0, r.jsxs)("div", {
            className: o()(k.activityPresenceDetailsItemContainer, k.truncatesText),
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
        }), es > 0 && (0, r.jsx)(C.K, {
          activityUsers: X,
          guildId: Z,
          activityText: eu.text
        })]
      })
    }),
    actions: ed,
    onClickContent: eo,
    trackingConfig: {
      id: y.id,
      linkType: O.Un.ACTIVITY_INSTANCE
    }
  })
})