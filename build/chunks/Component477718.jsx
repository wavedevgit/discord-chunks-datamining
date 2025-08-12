/** Chunk was on 873 **/
/** chunk id: 477718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk89793 = require("./89793.js"),
  Chunk63177 = require("./63177.js"),
  Chunk983843 = require("./983843.js");

function D(e) {
  var t, n;
  let {
    log: s,
    member: a,
    guild: E
  } = e, {
    analyticsLocations: T
  } = (0, d.ZP)(), N = m.nm(s), O = m.QM(s), v = null == (t = m.V$(p.zUn.REASON, s)) ? true : t.newValue, D = m.J5(s), b = (0, _.LJ)(s.id), L = (0, u.e7)([f.ZP], () => null != s.userId ? f.ZP.getMember(a.guildId, s.userId) : null, [a.guildId, s.userId]), x = (0, g.X7)(null == L ? true : L.guildId, null == L ? true : L.userId, null != (n = null == L ? true : L.colorStrings) ? n : null), U = l.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, T)
  }, [T]), M = l.useCallback(() => null == s.user ? null : (0, r.jsx)(c.ua7, {
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
        onClick: U(L),
        onMouseEnter: n,
        onMouseLeave: l,
        children: (0, r.jsxs)(c.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, r.jsx)(c.PUh, {
            name: h.ZP.getName(a.guildId, null, s.user),
            colorString: null != (t = null == L ? true : L.colorString) ? t : null,
            colorStrings: x
          })]
        })
      })
    }
  }), [U, s.user, a.guildId, L, x])();
  return (0, r.jsxs)("div", {
    className: i()(C.modInfoItem, S.auditLogItem),
    children: [(0, r.jsxs)("div", {
      className: S.auditLogItemTitleContainer,
      children: [(0, r.jsxs)("div", {
        className: S.auditLogItemTitle,
        children: [null != N && (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: N
        }), null != O && (0, r.jsxs)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: ["(", "string" == typeof O ? O : o()(O).fromNow(), ")"]
        })]
      }), (0, r.jsx)("div", {
        className: S.auditLogItemDate,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: b
        })
      })]
    }), null != v && (0, r.jsx)("div", {
      className: S.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: S.auditLogReason,
        children: [M, (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: v
        })]
      })
    }), null == v && null != D && (0, r.jsx)("div", {
      className: S.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: S.auditLogSecondary,
        children: [M, (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: D
        })]
      })
    }), null == v && null == D && (0, r.jsx)("div", {
      className: S.auditLogSecondaryContainer,
      children: (0, r.jsx)("div", {
        className: S.auditLogSecondary,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, r.jsx)(I.tP, {
            log: s,
            guild: E,
            onContentClick: () => {},
            className: S.auditLogExpandedChangeDetails
          })
        })
      })
    })]
  })
}

function b(e) {
  let {
    member: t
  } = e, n = (0, u.e7)([N.Z], () => N.Z.getGuild(t.guildId), [t.guildId]), s = (0, u.e7)([T.Z], () => {
    let e = T.Z.logs;
    return null == e || null == n ? [] : m._$(e, n)
  }, [n]);
  return (l.useEffect(() => {
    !async function(e, t) {
      await E.gV(t, e)
    }(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === s.length) ? null : (0, r.jsx)(c.xJW, {
    title: R.intl.string(R.t.flCxLi),
    titleClassName: v.infoTitle,
    children: s.length > 0 ? (0, r.jsx)(O.WM, {
      children: s.map(e => (0, r.jsx)(D, {
        log: e,
        member: t,
        guild: n
      }, e.id))
    }) : null
  })
}