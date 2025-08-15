/** Chunk was on 30243 **/
/** chunk id: 574597, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk91218 = require("./91218.jsx"),
  Chunk829883 = require("./829883.js"),
  Chunk518738 = require("./518738.js"),
  Chunk14263 = require("./14263.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk158776 = require("./158776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk280501 = require("./280501.js"),
  Chunk811654 = require("./811654.js"),
  Chunk344991 = require("./344991.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk111566 = require("./111566.js");

function P(e) {
  var t;
  let r = (0, O.CJ)(),
    P = null == r || null == (t = r.message) ? true : t.getChannelId(),
    x = d.Z.getChannel(P),
    S = f.Z.getGuild(null == x ? true : x.getGuildId()),
    w = (0, u.Z)(null == S ? true : S.id, j.HI),
    C = l.useMemo(() => (0, j.tx)(e.defaultValues, null == S ? true : S.id), [e.defaultValues, S]);
  return (0, n.jsx)(g.ZP, {
    selectActionComponent: e,
    queryOptions: t => (0, j._H)(e.type, t, P),
    renderIcon: (e, t) => {
      let r = t === g.tE.PILL_ICON_SIZE;
      if ((null == e ? true : e.type) === y.tM.USER) {
        let l = m.default.getUser(e.value);
        if (null == l) return;
        return (0, n.jsx)(i.qEK, {
          size: r ? i.EFr.SIZE_16 : i.EFr.SIZE_24,
          src: l.getAvatarURL(null == S ? true : S.id, t),
          status: r ? null : b.Z.getStatus(l.id),
          "aria-hidden": true
        })
      }
      if ((null == e ? true : e.type) === y.tM.ROLE) {
        var l;
        let r = null != S ? p.Z.getRole(S.id, e.value) : true;
        if (null == r || null == S) return;
        let o = (0, c._b)(S, r) ? (0, s.Kz)(r, t) : null;
        return null != o ? (0, n.jsx)(a.Z, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, o)) : (0, n.jsx)(i.lZ8, {
          size: "custom",
          color: null != (l = r.colorString) ? l : h.Pbq,
          height: t,
          width: t
        })
      }
    },
    renderOptionLabel: e => {
      let t = null;
      if (e.type === y.tM.USER) {
        let r = m.default.getUser(e.value);
        null != r && (t = (0, n.jsx)(o.Z, {
          className: v.tag,
          usernameClass: v.username,
          discriminatorClass: v.discriminator,
          botClass: v.bot,
          user: r,
          forceUsername: true
        }))
      } else if (e.type === y.tM.ROLE) {
        let r = null != S ? p.Z.getRole(S.id, e.value) : true,
          l = null == r ? null : null == w ? true : w[r.id];
        null != l && (t = (0, n.jsxs)("div", {
          className: v.roleCountContainer,
          children: [(0, n.jsx)(i.tBG, {
            size: "sm",
            color: "currentColor",
            className: v.roleCountIcon
          }), (0, n.jsx)("span", {
            className: v.roleCountText,
            children: l
          })]
        }))
      }
      return (0, n.jsxs)("span", {
        className: v.label,
        children: [(0, n.jsx)("span", {
          className: v.labelText,
          children: e.label
        }), t]
      })
    },
    defaultValues: C
  })
}