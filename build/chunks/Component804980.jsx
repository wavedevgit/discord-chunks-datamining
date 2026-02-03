/** Chunk was on 61344 **/
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
let M = ["embedded_background"];

function L(e) {
  let {
    avatarSize: t,
    guildId: n,
    channelId: r,
    users: i
  } = e, a = null != t ? t : c._3J.SIZE_32, s = (0, c.FT9)(a);
  return (0, l.jsx)(y.Ay, {
    size: s,
    guildId: n,
    users: i,
    max: 4,
    renderUser: e => {
      if (null == e || e === y.mt) return null;
      let t = w.Ay.getName(n, r, e);
      return (0, l.jsx)(o.m_, {
        text: t,
        children: (0, l.jsx)("img", {
          src: e.getAvatarURL(n, s),
          alt: t,
          className: D.my
        }, e.id)
      }, e.id)
    }
  })
}

function k(e) {
  var t, n;
  let {
    participants: i,
    application: o,
    channel: f,
    width: g
  } = e, A = g > 400 ? 2 : +(g > 300), [b] = g > 400 ? [c._3J.SIZE_56, 56] : g > 300 ? [c._3J.SIZE_32, 32] : [c._3J.SIZE_24, 24], _ = (0, s.yK)([N.default, I.default], () => Array.from(i).map(e => (0, p.S)(e, I.default) ? null : N.default.getUser(e.userId)).filter(P.Vq)), y = (0, s.bG)([d.Ay], () => {
    var e;
    return null != (e = d.Ay.getEmbeddedActivitiesForChannel(f.id).find(e => e.applicationId === o.id)) ? e : d.Ay.getEmbeddedActivitiesForStartingChannel(f.id).find(e => e.applicationId === o.id)
  }), {
    analyticsLocations: v
  } = (0, C.Ay)(), E = (0, u.p)(), O = w.Ay.getName(f.getGuildId(), f.id, null == _ ? true : _[0]), x = (0, m.vG)({
    userId: null == (n = N.default.getCurrentUser()) ? true : n.id,
    channelId: f.id,
    application: o
  }) === m.Gy.CAN_JOIN, j = null != (t = f.getGuildId()) ? t : true, T = r.useId(), M = o.id, k = r.useMemo(() => ({
    channel: f,
    type: "channel"
  }), [f]), {
    submitting: U
  } = (0, S.A)({
    applicationId: M,
    context: k,
    launchingComponentId: T
  });
  return (0, l.jsxs)("div", {
    className: D.Yi,
    children: [(0, l.jsx)(L, {
      avatarSize: b,
      guildId: j,
      channelId: f.id,
      users: _
    }), (0, l.jsx)(c.Text, {
      className: a()(D.m_, {
        [D.EX]: 0 === A,
        [D.Y]: 1 === A
      }),
      variant: "text-sm/normal",
      children: _.length > 1 ? R.intl.formatToPlainString(R.t.cpe6CK, {
        username: O,
        count: _.length - 1
      }) : R.intl.formatToPlainString(R.t["7Uuia2"], {
        username: O
      })
    }), (0, l.jsx)(c.Text, {
      className: a()(D.wx, {
        [D.EX]: 0 === A,
        [D.Y]: 1 === A
      }),
      variant: "text-sm/normal",
      children: o.name
    }), (0, l.jsx)("div", {
      className: D.Uo,
      children: x ? (0, l.jsx)(c.Button, {
        text: R.intl.string(R.t["4i2vj+"]),
        onClick: function(e) {
          e.stopPropagation(), null != y && (0, h.A)({
            applicationId: y.applicationId,
            activityChannelId: f.id,
            locationObject: E.location,
            analyticsLocations: v,
            componentId: T
          })
        },
        loading: U,
        size: 2 === A ? "md" : "sm",
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
    channel: o
  } = e, {
    analyticsLocations: c
  } = (0, C.Ay)(O.A.ACTIVITY_TILE), {
    applicationId: u
  } = t, d = (0, g.A)(), h = null != d && (0, f.H)(d.location) === o.id && d.applicationId === u, [p] = (0, x.A)([u]), {
    url: m
  } = (0, A.A)({
    applicationId: u,
    names: M,
    size: 1024
  }), y = !i && h, S = !h, I = !h && !i, N = (0, s.bG)([T.A, j.A], () => (0, E.A)({
    LayerStore: T.A,
    PopoutWindowStore: j.A
  }));
  return r.useEffect(() => {
    if (y && null != d && !N) {
      let e = (0, v.A)(d.location.id, d.applicationId);
      (0, _.cK)(e)
    }
  }, [y, d, N]), (0, l.jsx)(C.f5, {
    value: c,
    children: (0, l.jsxs)("div", {
      className: D.kL,
      children: [y && null != d && (0, l.jsx)(b.A, {
        className: D.pU,
        embedId: (0, v.A)(d.location.id, u)
      }), S && null != p && null != m && "" !== m ? (0, l.jsx)("img", {
        className: D.j0,
        alt: p.name,
        src: m
      }) : null, I && null != p && (0, l.jsx)(k, {
        width: n,
        channel: o,
        participants: t.participants,
        application: p
      }), a || S ? null : (0, l.jsx)("div", {
        className: D.OB
      })]
    })
  })
}