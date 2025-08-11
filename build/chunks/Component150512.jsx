/** Chunk was on 58227 **/
/** chunk id: 150512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk82778 = require("./82778.js");

function S(e) {
  let {
    guildId: t,
    welcomeMessage: n,
    className: r
  } = e, S = (0, a.e7)([h.Z], () => h.Z.getGuild(t)), p = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), E = (0, a.e7)([I.default], () => I.default.getUser(null == n ? true : n.authorIds[0])), T = i.useMemo(() => null != S && null != E && (0, u.Y)(S, E) ? E : null, [S, E]), O = (0, a.e7)([I.default], () => I.default.getCurrentUser()), x = i.useMemo(() => {
    var e;
    return null != (e = null == n ? true : n.authorIds) ? e : []
  }, [n]);
  i.useEffect(() => {
    c.Z.requestMembersById(t, x)
  }, [t, x]), i.useEffect(() => {
    null != T && (0, m.Z)(T.id, T.getAvatarURL(t, 48), {
      guildId: t
    })
  }, [T, t]);
  let _ = g.ZP.useName(t, null, T),
    j = (0, N._T)(O);
  if (null == T || null == O || null == n) return null;
  let v = null != S && S.ownerId === T.id;
  return (0, l.jsxs)(o.Zbd, {
    className: s()(f.welcomeMessageContainer, r),
    children: [(0, l.jsx)("div", {
      className: f.avatarBackground
    }), p ? (0, l.jsx)(o.qEK, {
      src: T.getAvatarURL(t, 48),
      size: o.EFr.SIZE_48,
      className: f.avatar,
      "aria-label": T.username
    }) : (0, l.jsx)(o.Xo$, {
      src: T.getAvatarURL(t, 48),
      size: o.EFr.SIZE_48,
      className: f.avatar,
      "aria-label": T.username
    }), (0, l.jsx)("div", {
      className: f.avatarBorder
    }), (0, l.jsxs)("div", {
      className: f.welcomeMessageContent,
      children: [(0, l.jsxs)("div", {
        className: f.adminUsernameContainer,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: _
        }), v ? (0, l.jsx)(o.CEn, {
          size: "xxs",
          color: "currentColor",
          className: f.ownerIcon
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
        }(null == n ? true : n.message, null != j ? j : O.username)
      })]
    })]
  })
}