/** Chunk was on 66201 **/
/** chunk id: 477718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk114891 = require("./114891.js"),
  Chunk885930 = require("./885930.js"),
  Chunk152540 = require("./152540.js");

function L(e) {
  var t, n;
  let {
    log: i,
    member: a,
    guild: E
  } = e, {
    analyticsLocations: I
  } = (0, d.ZP)(), O = T.nm(i), f = T.QM(i), D = null == (t = T.V$(R.zUn.REASON, i)) ? true : t.newValue, L = T.J5(i), U = (0, _.LJ)(i.id), M = (0, u.e7)([N.ZP], () => null != i.userId ? N.ZP.getMember(a.guildId, i.userId) : null, [a.guildId, i.userId]), b = (0, g.X7)(null == M ? true : M.guildId, null == M ? true : M.userId, null != (n = null == M ? true : M.colorStrings) ? n : null), v = l.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, I)
  }, [I]), x = l.useCallback(() => null == i.user ? null : (0, r.jsx)(c.ua7, {
    text: S.intl.string(S.t.mvsi9v),
    children: e => {
      var t;
      let {
        onMouseEnter: n,
        onMouseLeave: l
      } = e;
      return (0, r.jsx)(c.P3F, {
        tag: "span",
        className: p.username,
        onClick: v(M),
        onMouseEnter: n,
        onMouseLeave: l,
        children: (0, r.jsxs)(c.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, r.jsx)(c.PUh, {
            name: h.ZP.getName(a.guildId, null, i.user),
            colorString: null != (t = null == M ? true : M.colorString) ? t : null,
            colorStrings: b
          })]
        })
      })
    }
  }), [v, i.user, a.guildId, M, b])();
  return (0, r.jsxs)("div", {
    className: s()(C.modInfoItem, p.auditLogItem),
    children: [(0, r.jsxs)("div", {
      className: p.auditLogItemTitleContainer,
      children: [(0, r.jsxs)("div", {
        className: p.auditLogItemTitle,
        children: [null != O && (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: O
        }), null != f && (0, r.jsxs)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: ["(", "string" == typeof f ? f : o()(f).fromNow(), ")"]
        })]
      }), (0, r.jsx)("div", {
        className: p.auditLogItemDate,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: U
        })
      })]
    }), null != D && (0, r.jsx)("div", {
      className: p.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: p.auditLogReason,
        children: [x, (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: D
        })]
      })
    }), null == D && null != L && (0, r.jsx)("div", {
      className: p.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: p.auditLogSecondary,
        children: [x, (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: L
        })]
      })
    }), null == D && null == L && (0, r.jsx)("div", {
      className: p.auditLogSecondaryContainer,
      children: (0, r.jsx)("div", {
        className: p.auditLogSecondary,
        children: (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, r.jsx)(m.tP, {
            log: i,
            guild: E,
            onContentClick: () => {},
            className: p.auditLogExpandedChangeDetails
          })
        })
      })
    })]
  })
}

function U(e) {
  let {
    member: t
  } = e, n = (0, u.e7)([O.Z], () => O.Z.getGuild(t.guildId), [t.guildId]), i = (0, u.e7)([I.Z], () => {
    let e = I.Z.logs;
    return null == e || null == n ? [] : T._$(e, n)
  }, [n]);
  return (l.useEffect(() => {
    !async function(e, t) {
      await E.gV(t, e)
    }(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === i.length) ? null : (0, r.jsx)(c.xJW, {
    title: S.intl.string(S.t.flCxLi),
    titleClassName: D.infoTitle,
    children: i.length > 0 ? (0, r.jsx)(f.WM, {
      children: i.map(e => (0, r.jsx)(L, {
        log: e,
        member: t,
        guild: n
      }, e.id))
    }) : null
  })
}