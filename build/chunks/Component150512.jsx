/** Chunk was on 58227 **/
/** chunk id: 150512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk607070 = require("./607070.js"),
  Chunk903518 = require("./903518.js"),
  Chunk484459 = require("./484459.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk180391 = require("./180391.js");

function p(e) {
  let {
    guildId: t,
    welcomeMessage: n,
    className: r
  } = e, p = (0, s.e7)([g.Z], () => g.Z.getGuild(t)), O = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), E = (0, s.e7)([f.default], () => f.default.getUser(null == n ? true : n.authorIds[0])), S = i.useMemo(() => null != p && null != E && (0, u.Y)(p, E) ? E : null, [p, E]), x = (0, s.e7)([f.default], () => f.default.getCurrentUser()), T = i.useMemo(() => {
    var e;
    return null != (e = null == n ? true : n.authorIds) ? e : []
  }, [n]);
  i.useEffect(() => {
    c.Z.requestMembersById(t, T)
  }, [t, T]), i.useEffect(() => {
    null != S && (0, m.Z)(S.id, S.getAvatarURL(t, 48), {
      guildId: t
    })
  }, [S, t]);
  let _ = h.ZP.useName(t, null, S),
    j = (0, N._T)(x);
  if (null == S || null == x || null == n) return null;
  let v = null != p && p.ownerId === S.id;
  return (0, l.jsxs)(o.Zbd, {
    className: a()(I.welcomeMessageContainer, r),
    children: [(0, l.jsx)("div", {
      className: I.avatarBackground
    }), O ? (0, l.jsx)(o.qEK, {
      src: S.getAvatarURL(t, 48),
      size: o.EFr.SIZE_48,
      className: I.avatar,
      "aria-label": S.username
    }) : (0, l.jsx)(o.Xo$, {
      src: S.getAvatarURL(t, 48),
      size: o.EFr.SIZE_48,
      className: I.avatar,
      "aria-label": S.username
    }), (0, l.jsx)("div", {
      className: I.avatarBorder
    }), (0, l.jsxs)("div", {
      className: I.welcomeMessageContent,
      children: [(0, l.jsxs)("div", {
        className: I.adminUsernameContainer,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: _
        }), v ? (0, l.jsx)(o.CEn, {
          size: "xxs",
          color: "currentColor",
          className: I.ownerIcon
        }) : null]
      }), (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        children: function(e, t) {
          let n = e.split(/\[@username\]/g);
          return (0, l.jsx)("span", {
            children: n.map((e, r) => (0, l.jsxs)(i.Fragment, {
              children: [e, r < n.length - 1 ? (0, l.jsx)(o.Text, {
                tag: "span",
                variant: "text-md/semibold",
                children: "@".concat(t)
              }) : null]
            }, "username-".concat(r)))
          })
        }(null == n ? true : n.message, null != j ? j : x.username)
      })]
    })]
  })
}