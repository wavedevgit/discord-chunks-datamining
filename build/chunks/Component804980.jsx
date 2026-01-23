/** Chunk was on 31748 **/
/** chunk id: 804980, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => U,
  LN: () => L
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212245 = require("./212245.js"),
  Chunk933958 = require("./933958.js"),
  Chunk447031 = require("./447031.js"),
  Chunk878549 = require("./878549.js"),
  Chunk969151 = require("./969151.js"),
  Chunk550151 = require("./550151.js"),
  Chunk902439 = require("./902439.js"),
  Chunk283488 = require("./283488.js"),
  Chunk732637 = require("./732637.jsx"),
  Chunk315206 = require("./315206.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk594007 = require("./594007.js"),
  Chunk227042 = require("./227042.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk698141 = require("./698141.js"),
  Chunk429913 = require("./429913.js"),
  Chunk87001 = require("./87001.js"),
  Chunk961350 = require("./961350.js"),
  Chunk186111 = require("./186111.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk562153 = require("./562153.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk677406 = require("./677406.js");
let k = ["embedded_background"];

function L(e) {
  let {
    avatarSize: t,
    guildId: n,
    channelId: l,
    users: i
  } = e, a = null != t ? t : c._3J.SIZE_32, o = (0, c.FT9)(a);
  return (0, r.jsx)(b.Ay, {
    size: o,
    guildId: n,
    users: i,
    max: 4,
    renderUser: e => {
      if (null == e || e === b.mt) return null;
      let t = P.Ay.getName(n, l, e);
      return (0, r.jsx)(s.m_, {
        text: t,
        children: (0, r.jsx)("img", {
          src: e.getAvatarURL(n, o),
          alt: t,
          className: D.my
        }, e.id)
      }, e.id)
    }
  })
}

function M(e) {
  var t, n;
  let {
    participants: i,
    application: s,
    channel: g,
    width: _
  } = e, h = _ > 400 ? 2 : +(_ > 300), [y] = _ > 400 ? [c._3J.SIZE_56, 56] : _ > 300 ? [c._3J.SIZE_32, 32] : [c._3J.SIZE_24, 24], A = (0, o.yK)([T.default, I.default], () => Array.from(i).map(e => (0, p.S)(e, I.default) ? null : T.default.getUser(e.userId)).filter(w.Vq)), b = (0, o.bG)([d.Ay], () => {
    var e;
    return null != (e = d.Ay.getEmbeddedActivitiesForChannel(g.id).find(e => e.applicationId === s.id)) ? e : d.Ay.getEmbeddedActivitiesForStartingChannel(g.id).find(e => e.applicationId === s.id)
  }), {
    analyticsLocations: E
  } = (0, x.Ay)(), v = (0, u.p)(), O = P.Ay.getName(g.getGuildId(), g.id, null == A ? true : A[0]), C = (0, m.vG)({
    userId: null == (n = T.default.getCurrentUser()) ? true : n.id,
    channelId: g.id,
    application: s
  }) === m.Gy.CAN_JOIN, N = null != (t = g.getGuildId()) ? t : true, j = l.useId(), k = s.id, M = l.useMemo(() => ({
    channel: g,
    type: "channel"
  }), [g]), {
    submitting: U
  } = (0, S.A)({
    applicationId: k,
    context: M,
    launchingComponentId: j
  });
  return (0, r.jsxs)("div", {
    className: D.Yi,
    children: [(0, r.jsx)(L, {
      avatarSize: y,
      guildId: N,
      channelId: g.id,
      users: A
    }), (0, r.jsx)(c.Text, {
      className: a()(D.m_, {
        [D.EX]: 0 === h,
        [D.Y]: 1 === h
      }),
      variant: "text-sm/normal",
      children: A.length > 1 ? R.intl.formatToPlainString(R.t.cpe6CK, {
        username: O,
        count: A.length - 1
      }) : R.intl.formatToPlainString(R.t["7Uuia2"], {
        username: O
      })
    }), (0, r.jsx)(c.Text, {
      className: a()(D.wx, {
        [D.EX]: 0 === h,
        [D.Y]: 1 === h
      }),
      variant: "text-sm/normal",
      children: s.name
    }), (0, r.jsx)("div", {
      className: D.Uo,
      children: C ? (0, r.jsx)(c.Button, {
        text: R.intl.string(R.t["4i2vj+"]),
        onClick: function(e) {
          e.stopPropagation(), null != b && (0, f.A)({
            applicationId: b.applicationId,
            activityChannelId: g.id,
            locationObject: v.location,
            analyticsLocations: E,
            componentId: j
          })
        },
        loading: U,
        size: 2 === h ? "md" : "sm",
        variant: "overlay-primary"
      }) : null
    })]
  })
}

function U(e) {
  let {
    participant: t,
    width: n,
    selected: i,
    interactible: a,
    channel: s
  } = e, {
    analyticsLocations: c
  } = (0, x.Ay)(O.A.ACTIVITY_TILE), {
    applicationId: u
  } = t, d = (0, _.A)(), f = null != d && (0, g.H)(d.location) === s.id && d.applicationId === u, [p] = (0, C.A)([u]), {
    url: m
  } = (0, h.A)({
    applicationId: u,
    names: k,
    size: 1024
  }), b = !i && f, S = !f, I = !f && !i, T = (0, o.bG)([j.A, N.A], () => (0, v.A)({
    LayerStore: j.A,
    PopoutWindowStore: N.A
  }));
  return l.useEffect(() => {
    if (b && null != d && !T) {
      let e = (0, E.A)(d.location.id, d.applicationId);
      (0, A.cK)(e)
    }
  }, [b, d, T]), (0, r.jsx)(x.f5, {
    value: c,
    children: (0, r.jsxs)("div", {
      className: D.kL,
      children: [b && null != d && (0, r.jsx)(y.A, {
        className: D.pU,
        embedId: (0, E.A)(d.location.id, u)
      }), S && null != p && null != m && "" !== m ? (0, r.jsx)("img", {
        className: D.j0,
        alt: p.name,
        src: m
      }) : null, I && null != p && (0, r.jsx)(M, {
        width: n,
        channel: s,
        participants: t.participants,
        application: p
      }), a || S ? null : (0, r.jsx)("div", {
        className: D.OB
      })]
    })
  })
}