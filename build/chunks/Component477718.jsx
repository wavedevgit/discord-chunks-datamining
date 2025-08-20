/** Chunk was on 7318 **/
/** chunk id: 477718, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
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

function O(A) {
  var e, t;
  let {
    log: l,
    member: s,
    guild: c
  } = A, {
    analyticsLocations: u
  } = (0, f.ZP)(), w = d.nm(l), M = d.QM(l), Q = null == (e = d.V$(p.zUn.REASON, l)) ? true : e.newValue, O = d.J5(l), P = (0, v.LJ)(l.id), V = (0, o.e7)([B.ZP], () => null != l.userId ? B.ZP.getMember(s.guildId, l.userId) : null, [s.guildId, l.userId]), j = (0, C.X7)(null == V ? true : V.guildId, null == V ? true : V.userId, null != (t = null == V ? true : V.colorStrings) ? t : null), m = r.useCallback(A => e => {
    e.preventDefault(), e.stopPropagation(), null != A && (0, h.RE)(A, u)
  }, [u]), T = r.useCallback(() => null == l.user ? null : (0, n.jsx)(g.ua7, {
    text: I.intl.string(I.t.mvsi9v),
    children: A => {
      var e;
      let {
        onMouseEnter: t,
        onMouseLeave: r
      } = A;
      return (0, n.jsx)(g.P3F, {
        tag: "span",
        className: H.username,
        onClick: m(V),
        onMouseEnter: t,
        onMouseLeave: r,
        children: (0, n.jsxs)(g.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, n.jsx)(g.PUh, {
            name: D.ZP.getName(s.guildId, null, l.user),
            colorString: null != (e = null == V ? true : V.colorString) ? e : null,
            colorStrings: j
          })]
        })
      })
    }
  }), [m, l.user, s.guildId, V, j])();
  return (0, n.jsxs)("div", {
    className: i()(b.modInfoItem, H.auditLogItem),
    children: [(0, n.jsxs)("div", {
      className: H.auditLogItemTitleContainer,
      children: [(0, n.jsxs)("div", {
        className: H.auditLogItemTitle,
        children: [null != w && (0, n.jsx)(g.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: w
        }), null != M && (0, n.jsxs)(g.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: ["(", "string" == typeof M ? M : a()(M).fromNow(), ")"]
        })]
      }), (0, n.jsx)("div", {
        className: H.auditLogItemDate,
        children: (0, n.jsx)(g.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: P
        })
      })]
    }), null != Q && (0, n.jsx)("div", {
      className: H.auditLogSecondaryContainer,
      children: (0, n.jsxs)("div", {
        className: H.auditLogReason,
        children: [T, (0, n.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: Q
        })]
      })
    }), null == Q && null != O && (0, n.jsx)("div", {
      className: H.auditLogSecondaryContainer,
      children: (0, n.jsxs)("div", {
        className: H.auditLogSecondary,
        children: [T, (0, n.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: O
        })]
      })
    }), null == Q && null == O && (0, n.jsx)("div", {
      className: H.auditLogSecondaryContainer,
      children: (0, n.jsx)("div", {
        className: H.auditLogSecondary,
        children: (0, n.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, n.jsx)(E.tP, {
            log: l,
            guild: c,
            onContentClick: () => {},
            className: H.auditLogExpandedChangeDetails
          })
        })
      })
    })]
  })
}

function P(A) {
  let {
    member: e
  } = A, t = (0, o.e7)([w.Z], () => w.Z.getGuild(e.guildId), [e.guildId]), l = (0, o.e7)([u.Z], () => {
    let A = u.Z.logs;
    return null == A || null == t ? [] : d._$(A, t)
  }, [t]);
  return (r.useEffect(() => {
    !async function(A, e) {
      await c.gV(e, A)
    }(e.guildId, e.userId)
  }, [e.guildId, e.userId]), null == t || 0 === l.length) ? null : (0, n.jsx)(g.xJW, {
    title: I.intl.string(I.t.flCxLi),
    titleClassName: Q.infoTitle,
    children: l.length > 0 ? (0, n.jsx)(M.WM, {
      children: l.map(A => (0, n.jsx)(O, {
        log: A,
        member: e,
        guild: t
      }, A.id))
    }) : null
  })
}