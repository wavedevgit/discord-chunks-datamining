/** Chunk was on 58227 **/
/** chunk id: 150512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk460430 = require("./460430.js");

function N(e) {
  let {
    guildId: t,
    welcomeMessage: n,
    className: i
  } = e, N = (0, s.e7)([g.Z], () => g.Z.getGuild(t)), O = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), E = (0, s.e7)([h.default], () => h.default.getUser(null == n ? true : n.authorIds[0])), S = r.useMemo(() => null != N && null != E && (0, u.Y)(N, E) ? E : null, [N, E]), x = (0, s.e7)([h.default], () => h.default.getCurrentUser()), T = r.useMemo(() => {
    var e;
    return null != (e = null == n ? true : n.authorIds) ? e : []
  }, [n]);
  r.useEffect(() => {
    c.Z.requestMembersById(t, T)
  }, [t, T]), r.useEffect(() => {
    null != S && (0, m.Z)(S.id, S.getAvatarURL(t, 48), {
      guildId: t
    })
  }, [S, t]);
  let _ = f.ZP.useName(t, null, S),
    j = (0, I._T)(x);
  if (null == S || null == x || null == n) return null;
  let v = null != N && N.ownerId === S.id;
  return (0, l.jsxs)(o.Zbd, {
    className: a()(p.welcomeMessageContainer, i),
    children: [(0, l.jsx)("div", {
      className: p.avatarBackground
    }), O ? (0, l.jsx)(o.qEK, {
      src: S.getAvatarURL(t, 48),
      size: o.EFr.SIZE_48,
      className: p.avatar,
      "aria-label": S.username
    }) : (0, l.jsx)(o.Xo$, {
      src: S.getAvatarURL(t, 48),
      size: o.EFr.SIZE_48,
      className: p.avatar,
      "aria-label": S.username
    }), (0, l.jsx)("div", {
      className: p.avatarBorder
    }), (0, l.jsxs)("div", {
      className: p.welcomeMessageContent,
      children: [(0, l.jsxs)("div", {
        className: p.adminUsernameContainer,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: _
        }), v ? (0, l.jsx)(o.CEn, {
          size: "xxs",
          color: "currentColor",
          className: p.ownerIcon
        }) : null]
      }), (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        children: function(e, t) {
          let n = e.split(/\[@username\]/g);
          return (0, l.jsx)("span", {
            children: n.map((e, i) => (0, l.jsxs)(r.Fragment, {
              children: [e, i < n.length - 1 ? (0, l.jsx)(o.Text, {
                tag: "span",
                variant: "text-md/semibold",
                children: "@".concat(t)
              }) : null]
            }, "username-".concat(i)))
          })
        }(null == n ? true : n.message, null != j ? j : x.username)
      })]
    })]
  })
}