/** Chunk was on 1355 **/
/** chunk id: 477718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function L(e) {
  var t, n;
  let {
    log: i,
    member: a,
    guild: E
  } = e, {
    analyticsLocations: T
  } = (0, d.ZP)(), h = m.nm(i), O = m.QM(i), D = null == (t = m.V$(p.zUn.REASON, i)) ? true : t.newValue, L = m.J5(i), U = (0, _.LJ)(i.id), M = (0, u.e7)([N.ZP], () => null != i.userId ? N.ZP.getMember(a.guildId, i.userId) : null, [a.guildId, i.userId]), v = (0, g.X7)(null == M ? true : M.guildId, null == M ? true : M.userId, null != (n = null == M ? true : M.colorStrings) ? n : null), b = l.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, T)
  }, [T]), x = l.useCallback(() => null == i.user ? null : (0, r.jsx)(c.ua7, {
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
        onClick: b(M),
        onMouseEnter: n,
        onMouseLeave: l,
        children: (0, r.jsxs)(c.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, r.jsx)(c.PUh, {
            name: f.ZP.getName(a.guildId, null, i.user),
            colorString: null != (t = null == M ? true : M.colorString) ? t : null,
            colorStrings: v
          })]
        })
      })
    }
  }), [b, i.user, a.guildId, M, v])();
  return (0, r.jsxs)("div", {
    className: s()(C.modInfoItem, S.auditLogItem),
    children: [(0, r.jsxs)("div", {
      className: S.auditLogItemTitleContainer,
      children: [(0, r.jsxs)("div", {
        className: S.auditLogItemTitle,
        children: [null != h && (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: h
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
          children: U
        })
      })]
    }), null != D && (0, r.jsx)("div", {
      className: S.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: S.auditLogReason,
        children: [x, (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: D
        })]
      })
    }), null == D && null != L && (0, r.jsx)("div", {
      className: S.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: S.auditLogSecondary,
        children: [x, (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: L
        })]
      })
    }), null == D && null == L && (0, r.jsx)("div", {
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
  } = e, n = (0, u.e7)([h.Z], () => h.Z.getGuild(t.guildId), [t.guildId]), i = (0, u.e7)([T.Z], () => {
    let e = T.Z.logs;
    return null == e || null == n ? [] : m._$(e, n)
  }, [n]);
  return (l.useEffect(() => {
    !async function(e, t) {
      await E.gV(t, e)
    }(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === i.length) ? null : (0, r.jsx)(c.xJW, {
    title: R.intl.string(R.t.flCxLi),
    titleClassName: D.infoTitle,
    children: i.length > 0 ? (0, r.jsx)(O.WM, {
      children: i.map(e => (0, r.jsx)(L, {
        log: e,
        member: t,
        guild: n
      }, e.id))
    }) : null
  })
}