/** Chunk was on 69937 **/
/** chunk id: 477718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk480137 = require("./480137.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk376923 = require("./376923.js"),
  Chunk472596 = require("./472596.js"),
  Chunk909746 = require("./909746.js"),
  Chunk233857 = require("./233857.js"),
  Chunk501801 = require("./501801.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk5192 = require("./5192.js"),
  Chunk776767 = require("./776767.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk530952 = require("./530952.js"),
  Chunk608586 = require("./608586.js");

function D(e) {
  var t, n;
  let {
    log: i,
    member: s,
    guild: E
  } = e, {
    analyticsLocations: g
  } = (0, _.ZP)(), N = T.nm(i), p = T.QM(i), D = null == (t = T.V$(R.zUn.REASON, i)) ? true : t.newValue, L = T.J5(i), U = (0, A.LJ)(i.id), M = (0, c.e7)([h.ZP], () => null != i.userId ? h.ZP.getMember(s.guildId, i.userId) : null, [s.guildId, i.userId]), v = (0, m.X7)(null == M ? true : M.guildId, null == M ? true : M.userId, null != (n = null == M ? true : M.colorStrings) ? n : null), x = l.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, f.RE)(e, g)
  }, [g]), P = l.useCallback(() => {
    var e;
    return null == i.user ? null : (0, r.jsx)(u.u, {
      asContainer: true,
      text: S.intl.string(S.t.mvsi9n),
      children: (0, r.jsx)(d.P3F, {
        onClick: x(M),
        tag: "span",
        className: C.username,
        children: (0, r.jsxs)(d.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, r.jsx)(d.PUh, {
            name: O.ZP.getName(s.guildId, null, i.user),
            colorString: null != (e = null == M ? true : M.colorString) ? e : null,
            colorStrings: v
          })]
        })
      })
    })
  }, [x, i.user, s.guildId, M, v])();
  return (0, r.jsxs)("div", {
    className: a()(b.modInfoItem, C.auditLogItem),
    children: [(0, r.jsxs)("div", {
      className: C.auditLogItemTitleContainer,
      children: [(0, r.jsxs)("div", {
        className: C.auditLogItemTitle,
        children: [null != N && (0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: N
        }), null != p && (0, r.jsxs)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: ["(", "string" == typeof p ? p : o()(p).fromNow(), ")"]
        })]
      }), (0, r.jsx)("div", {
        className: C.auditLogItemDate,
        children: (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "text-strong",
          children: U
        })
      })]
    }), null != D && (0, r.jsx)("div", {
      className: C.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: C.auditLogReason,
        children: [P, (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: D
        })]
      })
    }), null == D && null != L && (0, r.jsx)("div", {
      className: C.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: C.auditLogSecondary,
        children: [P, (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: L
        })]
      })
    }), null == D && null == L && (0, r.jsx)("div", {
      className: C.auditLogSecondaryContainer,
      children: (0, r.jsx)("div", {
        className: C.auditLogSecondary,
        children: (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, r.jsx)(I.tP, {
            log: i,
            guild: E,
            onContentClick: () => {},
            className: C.auditLogExpandedChangeDetails
          })
        })
      })
    })]
  })
}

function L(e) {
  let {
    member: t
  } = e, n = (0, c.e7)([N.Z], () => N.Z.getGuild(t.guildId), [t.guildId]), i = (0, c.e7)([g.Z], () => {
    let e = g.Z.logs;
    return null == e || null == n ? [] : T._$(e, n)
  }, [n]);
  return (l.useEffect(() => {
    !async function(e, t) {
      await E.gV(t, e)
    }(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === i.length) ? null : (0, r.jsx)(d.gNt, {
    label: S.intl.string(S.t.flCxLo),
    children: i.length > 0 ? (0, r.jsx)(p.WM, {
      children: i.map(e => (0, r.jsx)(D, {
        log: e,
        member: t,
        guild: n
      }, e.id))
    }) : null
  })
}