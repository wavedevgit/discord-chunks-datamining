/** Chunk was on 82124 **/
/** chunk id: 426521, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => G
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk99690 = require("./99690.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk336197 = require("./336197.js"),
  Chunk454585 = require("./454585.js"),
  Chunk833062 = require("./833062.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk695346 = require("./695346.js"),
  Chunk598077 = require("./598077.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk591759 = require("./591759.js"),
  Chunk833592 = require("./833592.js"),
  Chunk497089 = require("./497089.js"),
  Chunk178480 = require("./178480.js"),
  Chunk418316 = require("./418316.js"),
  Chunk382865 = require("./382865.js"),
  Chunk526146 = require("./526146.js"),
  Chunk400565 = require("./400565.jsx"),
  Chunk148789 = require("./148789.jsx"),
  Chunk11825 = require("./11825.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk31590 = require("./31590.js"),
  Chunk756688 = require("./756688.js"),
  Chunk886765 = require("./886765.js");

function D(e) {
  var t, n, i, l, o;
  let {
    item: c
  } = e, u = null == (t = c.message) ? true : t.content;
  if (null == u) return (0, r.jsx)("div", {});
  let d = null != (o = b.default.getUser(null == (i = c.message) || null == (n = i.author) ? true : n.id)) ? o : new m.Z(null == (l = c.message) ? true : l.author),
    f = p.Z.parse(u);
  return (0, r.jsxs)("div", {
    className: A.messagePreviewContainer,
    children: [(0, r.jsx)(s.Z, {
      user: d,
      size: a.EFr.SIZE_24
    }), (0, r.jsx)(a.Text, {
      className: A.messagePreviewText,
      variant: "text-sm/normal",
      lineClamp: 2,
      children: f
    })]
  })
}

function M(e) {
  let {
    item: {
      callout: t
    }
  } = e;
  if (null == t) return null;
  let n = p.Z.parse(t);
  return (0, r.jsx)("div", {
    className: A.calloutContainer,
    children: (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      lineClamp: 2,
      children: n
    })
  })
}

function k(e) {
  let {
    item: t
  } = e, n = R, i = T.intl.string(T.t.SJTHJb);
  return t.completed && (n = w, i = T.intl.string(T.t.f6RTAM)), (0, r.jsxs)("div", {
    className: A.lifecycleContainer,
    children: [(0, r.jsx)("img", {
      className: A.checkbox,
      alt: "",
      src: n
    }), (0, r.jsx)(a.Text, {
      className: A.lifecycleText,
      variant: "text-xs/bold",
      color: "text-default",
      children: i
    })]
  })
}

function L(e) {
  let {
    applicationId: t
  } = e, n = (0, l.e7)([u.Z], () => u.Z.getApplication(t));
  return null == n ? (0, r.jsx)("div", {}) : (0, r.jsx)(f.Z, {
    application: n
  }, n.id)
}
let U = Chunk473749.memo(function(e) {
    var t;
    let {
      item: l,
      ackedBeforeId: s
    } = e, {
      analyticsLocations: u
    } = (0, c.ZP)(), f = (0, _.I)(l, s), g = i.useCallback(async () => {
      if (f || (0, j.wt)(l), null != l.item_enum && l.item_enum === x.AM.FIND_FRIENDS) return void(0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("6074").then(n.bind(n, 443189));
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
      if (null != l.deeplink) {
        let t = O.Z.safeParseWithQuery(l.deeplink);
        if (null == t) return;
        let n = t.hostname,
          r = t.path;
        if (null == n || null == r) return;
        if (O.Z.isDiscordHostname(n)) {
          let t = r.match("^/users/(\\d+)");
          if (null != t && 2 === t.length) {
            var e;
            (0, h.openUserProfileModal)({
              userId: t[1],
              messageId: null == (e = l.message) ? true : e.id,
              sourceAnalyticsLocations: u
            })
          } else await (0, d.Z)(r)
        }
        y.default.track(N.rMx.NOTIFICATION_CENTER_ACTION, {
          action_type: x.ud.CLICKED,
          notification_center_id: l.id,
          item_type: l.type,
          acked: f
        })
      }
    }, [l, f, u]), m = null;
    l.type === x.O7.INCOMING_FRIEND_REQUESTS && null != l.other_user ? m = (0, r.jsx)(P.Z, {
      userId: l.other_user.id
    }) : l.type === x.O7.INCOMING_GAME_FRIEND_REQUESTS && null != l.other_user && (m = (0, r.jsx)(P.Z, {
      userId: l.other_user.id,
      applicationId: l.applicationId
    }));
    let b = null != l.local_id,
      S = (0, E.Z)({
        item: l,
        renderApplication: e => (0, r.jsx)(L, {
          applicationId: e
        })
      }),
      {
        emoji_id: T,
        emoji_name: w
      } = l,
      R = null != T || null != w ? (0, r.jsx)(o.Z, {
        className: A.emoji,
        emojiId: T,
        emojiName: w
      }) : null;
    return (0, r.jsxs)("div", {
      className: A.row,
      children: [(0, r.jsxs)(a.kL8, {
        className: A.rowContent,
        focusProps: {
          offset: 4
        },
        "aria-label": S,
        onClick: g,
        children: [f ? null : (0, r.jsx)("div", {
          className: A.unread
        }), (0, r.jsx)(I.U, {
          item: l
        }), (0, r.jsxs)("div", {
          className: A.body,
          children: ["lifecycle_item" === l.type && null != l.item_enum && (0, r.jsx)(k, {
            item: l
          }), (0, r.jsxs)(a.Text, {
            variant: "text-md/normal",
            color: f ? "text-muted" : "text-default",
            children: ["string" != typeof S ? S : p.Z.parse(S), R]
          }), (null == (t = l.message) ? true : t.content) != null ? (0, r.jsx)(D, {
            item: l
          }) : null, null != l.callout ? (0, r.jsx)(M, {
            item: l
          }) : null, (0, r.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: f ? "text-muted" : "text-default",
            children: (0, C.a3)(v.default.extractTimestamp(l.id))
          }), m]
        })]
      }), b ? null : (0, r.jsx)(Z.z, {
        item: l
      })]
    })
  }),
  G = Chunk473749.memo(function(e) {
    let {
      items: t
    } = e, n = g.d$.useSetting();
    return (0, S.c)(t), (0, r.jsx)(r.Fragment, {
      children: t.map(e => (0, r.jsx)(U, {
        item: e,
        ackedBeforeId: n
      }, e.id))
    })
  })