/** Chunk was on 77870 **/
/** chunk id: 456425, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => B
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk730134 = require("./730134.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk22007 = require("./22007.js"),
  Chunk46054 = require("./46054.js"),
  Chunk102876 = require("./102876.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk253932 = require("./253932.js"),
  Chunk427157 = require("./427157.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk998218 = require("./998218.js"),
  Chunk245205 = require("./245205.js"),
  Chunk322387 = require("./322387.js"),
  Chunk995273 = require("./995273.js"),
  Chunk96511 = require("./96511.js"),
  Chunk160098 = require("./160098.js"),
  Chunk429604 = require("./429604.js"),
  Chunk9905 = require("./9905.jsx"),
  Chunk717607 = require("./717607.jsx"),
  Chunk457404 = require("./457404.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk993169 = require("./993169.js"),
  Chunk213398 = require("./213398.js"),
  Chunk537997 = require("./537997.js");

function M(e) {
  var t, n, l, i, a;
  let {
    item: c
  } = e, u = null == (n = c.message) ? true : n.content;
  if (null == u) return (0, r.jsx)("div", {});
  let d = null != (t = b.default.getUser(null == (i = c.message) || null == (l = i.author) ? true : l.id)) ? t : new m.A(null == (a = c.message) ? true : a.author),
    h = p.A.parse(u);
  return (0, r.jsxs)("div", {
    className: w.PI,
    children: [(0, r.jsx)(o.A, {
      user: d,
      size: s._3J.SIZE_24
    }), (0, r.jsx)(s.Text, {
      className: w.Bp,
      variant: "text-sm/normal",
      lineClamp: 2,
      children: h
    })]
  })
}

function L(e) {
  let {
    item: {
      callout: t
    }
  } = e;
  if (null == t) return null;
  let n = p.A.parse(t);
  return (0, r.jsx)("div", {
    className: w.CD,
    children: (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      lineClamp: 2,
      children: n
    })
  })
}

function k(e) {
  let {
    item: t
  } = e, n = D, l = P.intl.string(P.t.SJTHJb);
  return t.completed && (n = R, l = P.intl.string(P.t.f6RTAM)), (0, r.jsxs)("div", {
    className: w.AE,
    children: [(0, r.jsx)("img", {
      className: w.kv,
      alt: "",
      src: n
    }), (0, r.jsx)(s.Text, {
      className: w.mc,
      variant: "text-xs/bold",
      color: "text-default",
      children: l
    })]
  })
}

function G(e) {
  let {
    applicationId: t
  } = e, n = (0, i.bG)([u.A], () => u.A.getApplication(t));
  return null == n ? (0, r.jsx)("div", {}) : (0, r.jsx)(h.A, {
    application: n
  }, n.id)
}
let U = Chunk64700.memo(function(e) {
    var t;
    let {
      item: i,
      ackedBeforeId: o
    } = e, {
      analyticsLocations: u
    } = (0, c.Ay)(), h = (0, C.t)(i, o), g = l.useCallback(async () => {
      if (h || (0, O.R7)(i), null != i.item_enum && i.item_enum === j.r_.FIND_FRIENDS) return void(0, s.mMO)(async () => {
        let {
          default: e
        } = await n.e("67248").then(n.bind(n, 911539));
        return t => (0, r.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({
          source: "Notification Center"
        }, t))
      });
      if (null != i.deeplink) {
        let t = _.A.safeParseWithQuery(i.deeplink);
        if (null == t) return;
        let n = t.hostname,
          r = t.path;
        if (null == n || null == r) return;
        if (_.A.isDiscordHostname(n)) {
          let t = r.match("^/users/(\\d+)");
          if (null != t && 2 === t.length) {
            var e;
            (0, f.openUserProfileModal)({
              userId: t[1],
              messageId: null == (e = i.message) ? true : e.id,
              sourceAnalyticsLocations: u
            })
          } else await (0, d.A)(r)
        }
        A.default.track(T.HAw.NOTIFICATION_CENTER_ACTION, {
          action_type: j.e1.CLICKED,
          notification_center_id: i.id,
          item_type: i.type,
          acked: h
        })
      }
    }, [i, h, u]), m = null;
    i.type === j.Uo.INCOMING_FRIEND_REQUESTS && null != i.other_user ? m = (0, r.jsx)(I.A, {
      userId: i.other_user.id
    }) : i.type === j.Uo.INCOMING_GAME_FRIEND_REQUESTS && null != i.other_user && (m = (0, r.jsx)(I.A, {
      userId: i.other_user.id,
      applicationId: i.applicationId
    }));
    let b = null != i.local_id,
      E = (0, x.A)({
        item: i,
        renderApplication: e => (0, r.jsx)(G, {
          applicationId: e
        })
      }),
      {
        emoji_id: P,
        emoji_name: R
      } = i,
      D = null != P || null != R ? (0, r.jsx)(a.A, {
        className: w.Zg,
        emojiId: P,
        emojiName: R
      }) : null;
    return (0, r.jsxs)("div", {
      className: w.nM,
      children: [(0, r.jsxs)(s.sqX, {
        className: w.u4,
        focusProps: {
          offset: 4
        },
        "aria-label": E,
        onClick: g,
        children: [h ? null : (0, r.jsx)("div", {
          className: w.gy
        }), (0, r.jsx)(S.J, {
          item: i
        }), (0, r.jsxs)("div", {
          className: w.rf,
          children: ["lifecycle_item" === i.type && null != i.item_enum && (0, r.jsx)(k, {
            item: i
          }), (0, r.jsxs)(s.Text, {
            variant: "text-md/normal",
            color: h ? "text-muted" : "text-default",
            children: ["string" != typeof E ? E : p.A.parse(E), D]
          }), (null == (t = i.message) ? true : t.content) != null ? (0, r.jsx)(M, {
            item: i
          }) : null, null != i.callout ? (0, r.jsx)(L, {
            item: i
          }) : null, (0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: h ? "text-muted" : "text-default",
            children: (0, v.jb)(y.default.extractTimestamp(i.id))
          }), m]
        })]
      }), b ? null : (0, r.jsx)(N.e, {
        item: i
      })]
    })
  }),
  B = Chunk64700.memo(function(e) {
    let {
      items: t
    } = e, n = g.ns.useSetting();
    return (0, E.q)(t), (0, r.jsx)(r.Fragment, {
      children: t.map(e => (0, r.jsx)(U, {
        item: e,
        ackedBeforeId: n
      }, e.id))
    })
  })