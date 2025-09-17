/** Chunk was on 10576 **/
/** chunk id: 477718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk480137 = require("./480137.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk376923 = require("./376923.js"),
  Chunk472596 = require("./472596.js"),
  Chunk987707 = require("./987707.js"),
  Chunk909746 = require("./909746.js"),
  Chunk501801 = require("./501801.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk5192 = require("./5192.js"),
  Chunk776767 = require("./776767.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk87437 = require("./87437.js"),
  Chunk938556 = require("./938556.js"),
  Chunk87819 = require("./87819.js");

function D(e) {
  var t, n;
  let {
    log: i,
    member: s,
    guild: E
  } = e, {
    analyticsLocations: T
  } = (0, d.ZP)(), N = m.nm(i), f = m.QM(i), L = null == (t = m.V$(p.zUn.REASON, i)) ? true : t.newValue, D = m.J5(i), U = (0, _.LJ)(i.id), M = (0, u.e7)([h.ZP], () => null != i.userId ? h.ZP.getMember(s.guildId, i.userId) : null, [s.guildId, i.userId]), b = (0, g.X7)(null == M ? true : M.guildId, null == M ? true : M.userId, null != (n = null == M ? true : M.colorStrings) ? n : null), x = l.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, T)
  }, [T]), v = l.useCallback(() => null == i.user ? null : (0, r.jsx)(c.ua7, {
    text: R.intl.string(R.t.mvsi9v),
    children: e => {
      var t;
      let {
        onMouseEnter: n,
        onMouseLeave: l
      } = e;
      return (0, r.jsx)(c.P3F, {
        tag: "span",
        className: S.username,
        onClick: x(M),
        onMouseEnter: n,
        onMouseLeave: l,
        children: (0, r.jsxs)(c.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, r.jsx)(c.PUh, {
            name: O.ZP.getName(s.guildId, null, i.user),
            colorString: null != (t = null == M ? true : M.colorString) ? t : null,
            colorStrings: b
          })]
        })
      })
    }
  }), [x, i.user, s.guildId, M, b])();
  return (0, r.jsxs)("div", {
    className: a()(C.modInfoItem, S.auditLogItem),
    children: [(0, r.jsxs)("div", {
      className: S.auditLogItemTitleContainer,
      children: [(0, r.jsxs)("div", {
        className: S.auditLogItemTitle,
        children: [null != N && (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: N
        }), null != f && (0, r.jsxs)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: ["(", "string" == typeof f ? f : o()(f).fromNow(), ")"]
        })]
      }), (0, r.jsx)("div", {
        className: S.auditLogItemDate,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: U
        })
      })]
    }), null != L && (0, r.jsx)("div", {
      className: S.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: S.auditLogReason,
        children: [v, (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: L
        })]
      })
    }), null == L && null != D && (0, r.jsx)("div", {
      className: S.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: S.auditLogSecondary,
        children: [v, (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: D
        })]
      })
    }), null == L && null == D && (0, r.jsx)("div", {
      className: S.auditLogSecondaryContainer,
      children: (0, r.jsx)("div", {
        className: S.auditLogSecondary,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, r.jsx)(I.tP, {
            log: i,
            guild: E,
            onContentClick: () => {},
            className: S.auditLogExpandedChangeDetails
          })
        })
      })
    })]
  })
}

function U(e) {
  let {
    member: t
  } = e, n = (0, u.e7)([N.Z], () => N.Z.getGuild(t.guildId), [t.guildId]), i = (0, u.e7)([T.Z], () => {
    let e = T.Z.logs;
    return null == e || null == n ? [] : m._$(e, n)
  }, [n]);
  return (l.useEffect(() => {
    !async function(e, t) {
      await E.gV(t, e)
    }(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === i.length) ? null : (0, r.jsx)(c.xJW, {
    title: R.intl.string(R.t.flCxLi),
    titleClassName: L.infoTitle,
    children: i.length > 0 ? (0, r.jsx)(f.WM, {
      children: i.map(e => (0, r.jsx)(D, {
        log: e,
        member: t,
        guild: n
      }, e.id))
    }) : null
  })
}