/** Chunk was on 66201 **/
/** chunk id: 477718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk114891 = require("./114891.js"),
  Chunk885930 = require("./885930.js");

function U(e) {
  var t, n;
  let {
    log: i,
    member: a,
    guild: d
  } = e, {
    analyticsLocations: m
  } = (0, _.ZP)(), O = I.nm(i), R = I.QM(i), U = null == (t = I.V$(S.zUn.REASON, i)) ? true : t.newValue, L = I.J5(i), M = (0, A.LJ)(i.id), x = (0, u.e7)([h.ZP], () => null != i.userId ? h.ZP.getMember(a.guildId, i.userId) : null, [a.guildId, i.userId]), b = (0, N.X7)(null == x ? true : x.guildId, null == x ? true : x.userId, null != (n = null == x ? true : x.colorStrings) ? n : null), v = l.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, T.RE)(e, m)
  }, [m]), P = l.useCallback(() => {
    var e;
    return null == i.user ? null : (0, r.jsx)(c.u, {
      asContainer: true,
      text: p.intl.string(p.t.mvsi9n),
      children: (0, r.jsx)(E.P3F, {
        onClick: v(x),
        tag: "span",
        className: C.username,
        children: (0, r.jsxs)(E.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, r.jsx)(E.PUh, {
            name: f.ZP.getName(a.guildId, null, i.user),
            colorString: null != (e = null == x ? true : x.colorString) ? e : null,
            colorStrings: b
          })]
        })
      })
    })
  }, [v, i.user, a.guildId, x, b])();
  return (0, r.jsxs)("div", {
    className: s()(D.modInfoItem, C.auditLogItem),
    children: [(0, r.jsxs)("div", {
      className: C.auditLogItemTitleContainer,
      children: [(0, r.jsxs)("div", {
        className: C.auditLogItemTitle,
        children: [null != O && (0, r.jsx)(E.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: O
        }), null != R && (0, r.jsxs)(E.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: ["(", "string" == typeof R ? R : o()(R).fromNow(), ")"]
        })]
      }), (0, r.jsx)("div", {
        className: C.auditLogItemDate,
        children: (0, r.jsx)(E.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: M
        })
      })]
    }), null != U && (0, r.jsx)("div", {
      className: C.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: C.auditLogReason,
        children: [P, (0, r.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: U
        })]
      })
    }), null == U && null != L && (0, r.jsx)("div", {
      className: C.auditLogSecondaryContainer,
      children: (0, r.jsxs)("div", {
        className: C.auditLogSecondary,
        children: [P, (0, r.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: L
        })]
      })
    }), null == U && null == L && (0, r.jsx)("div", {
      className: C.auditLogSecondaryContainer,
      children: (0, r.jsx)("div", {
        className: C.auditLogSecondary,
        children: (0, r.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, r.jsx)(g.tP, {
            log: i,
            guild: d,
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
  } = e, n = (0, u.e7)([O.Z], () => O.Z.getGuild(t.guildId), [t.guildId]), i = (0, u.e7)([m.Z], () => {
    let e = m.Z.logs;
    return null == e || null == n ? [] : I._$(e, n)
  }, [n]);
  return (l.useEffect(() => {
    !async function(e, t) {
      await d.gV(t, e)
    }(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === i.length) ? null : (0, r.jsx)(E.gNt, {
    label: p.intl.string(p.t.flCxLo),
    children: i.length > 0 ? (0, r.jsx)(R.WM, {
      children: i.map(e => (0, r.jsx)(U, {
        log: e,
        member: t,
        guild: n
      }, e.id))
    }) : null
  })
}