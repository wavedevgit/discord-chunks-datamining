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
    channelId: r,
    users: i
  } = e, a = null != t ? t : c._3J.SIZE_32, s = (0, c.FT9)(a);
  return (0, l.jsx)(_.Ay, {
    size: s,
    guildId: n,
    users: i,
    max: 4,
    renderUser: e => {
      if (null == e || e === _.mt) return null;
      let t = R.Ay.getName(n, r, e);
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

function M(e) {
  var t, n;
  let {
    participants: i,
    application: o,
    channel: b,
    width: m
  } = e, h = m > 400 ? 2 : +(m > 300), [A] = m > 400 ? [c._3J.SIZE_56, 56] : m > 300 ? [c._3J.SIZE_32, 32] : [c._3J.SIZE_24, 24], y = (0, s.yK)([I.default, j.default], () => Array.from(i).map(e => (0, p.S)(e, j.default) ? null : I.default.getUser(e.userId)).filter(w.Vq)), _ = (0, s.bG)([d.Ay], () => {
    var e;
    return null != (e = d.Ay.getEmbeddedActivitiesForChannel(b.id).find(e => e.applicationId === o.id)) ? e : d.Ay.getEmbeddedActivitiesForStartingChannel(b.id).find(e => e.applicationId === o.id)
  }), {
    analyticsLocations: E
  } = (0, x.Ay)(), v = (0, u.p)(), O = R.Ay.getName(b.getGuildId(), b.id, null == y ? true : y[0]), N = (0, g.vG)({
    userId: null == (n = I.default.getCurrentUser()) ? true : n.id,
    channelId: b.id,
    application: o
  }) === g.Gy.CAN_JOIN, C = null != (t = b.getGuildId()) ? t : true, T = r.useId(), k = o.id, M = r.useMemo(() => ({
    channel: b,
    type: "channel"
  }), [b]), {
    submitting: U
  } = (0, S.A)({
    applicationId: k,
    context: M,
    launchingComponentId: T
  });
  return (0, l.jsxs)("div", {
    className: D.Yi,
    children: [(0, l.jsx)(L, {
      avatarSize: A,
      guildId: C,
      channelId: b.id,
      users: y
    }), (0, l.jsx)(c.Text, {
      className: a()(D.m_, {
        [D.EX]: 0 === h,
        [D.Y]: 1 === h
      }),
      variant: "text-sm/normal",
      children: y.length > 1 ? P.intl.formatToPlainString(P.t.cpe6CK, {
        username: O,
        count: y.length - 1
      }) : P.intl.formatToPlainString(P.t["7Uuia2"], {
        username: O
      })
    }), (0, l.jsx)(c.Text, {
      className: a()(D.wx, {
        [D.EX]: 0 === h,
        [D.Y]: 1 === h
      }),
      variant: "text-sm/normal",
      children: o.name
    }), (0, l.jsx)("div", {
      className: D.Uo,
      children: N ? (0, l.jsx)(c.Button, {
        text: P.intl.string(P.t["4i2vj+"]),
        onClick: function(e) {
          e.stopPropagation(), null != _ && (0, f.A)({
            applicationId: _.applicationId,
            activityChannelId: b.id,
            locationObject: v.location,
            analyticsLocations: E,
            componentId: T
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
    channel: o
  } = e, {
    analyticsLocations: c
  } = (0, x.Ay)(O.A.ACTIVITY_TILE), {
    applicationId: u
  } = t, d = (0, m.A)(), f = null != d && (0, b.H)(d.location) === o.id && d.applicationId === u, [p] = (0, N.A)([u]), {
    url: g
  } = (0, h.A)({
    applicationId: u,
    names: k,
    size: 1024
  }), _ = !i && f, S = !f, j = !f && !i, I = (0, s.bG)([T.A, C.A], () => (0, v.A)({
    LayerStore: T.A,
    PopoutWindowStore: C.A
  }));
  return r.useEffect(() => {
    if (_ && null != d && !I) {
      let e = (0, E.A)(d.location.id, d.applicationId);
      (0, y.cK)(e)
    }
  }, [_, d, I]), (0, l.jsx)(x.f5, {
    value: c,
    children: (0, l.jsxs)("div", {
      className: D.kL,
      children: [_ && null != d && (0, l.jsx)(A.A, {
        className: D.pU,
        embedId: (0, E.A)(d.location.id, u)
      }), S && null != p && null != g && "" !== g ? (0, l.jsx)("img", {
        className: D.j0,
        alt: p.name,
        src: g
      }) : null, j && null != p && (0, l.jsx)(M, {
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