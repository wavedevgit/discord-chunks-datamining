/** Chunk was on web.js **/
/** chunk id: 574597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk829883 = require("./829883.js"),
  Chunk518738 = require("./518738.js"),
  Chunk14263 = require("./14263.js"),
  Chunk48950 = require("./48950.jsx"),
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e) {
  let t = (0, h.CJ)(),
    n = null == t ? true : t.channelId,
    v = d.Z.getChannel(n),
    I = p.Z.getGuild(null == v ? true : v.getGuildId()),
    T = (0, c.Z)(null == I ? true : I.id, E.HI),
    C = t => (0, E._H)(e.type, t, n),
    A = (e, t) => {
      let n = t === b.tE.PILL_ICON_SIZE;
      if ((null == e ? true : e.type) === g.tM.USER) {
        let i = m.default.getUser(e.value);
        if (null == i) return;
        return (0, r.jsx)(a.qEK, {
          size: n ? a.EFr.SIZE_16 : a.EFr.SIZE_24,
          src: i.getAvatarURL(null == I ? true : I.id, t),
          status: n ? null : _.Z.getStatus(i.id),
          "aria-hidden": true
        })
      }
      if ((null == e ? true : e.type) === g.tM.ROLE) {
        var i;
        let n = null != I ? f.Z.getRole(I.id, e.value) : true;
        if (null == n || null == I) return;
        let o = (0, s._b)(I, n) ? (0, l.Kz)(n, t) : null;
        return null != o ? (0, r.jsx)(u.Z, S({}, o)) : (0, r.jsx)(a.lZ8, {
          size: "custom",
          color: null != (i = n.colorString) ? i : y.Pbq,
          height: t,
          width: t
        })
      }
    },
    N = e => {
      let t = null;
      if (e.type === g.tM.USER) {
        let n = m.default.getUser(e.value);
        null != n && (t = (0, r.jsx)(o.Z, {
          className: O.tag,
          usernameClass: O.username,
          discriminatorClass: O.discriminator,
          botClass: O.bot,
          user: n,
          forceUsername: true
        }))
      } else if (e.type === g.tM.ROLE) {
        let n = null != I ? f.Z.getRole(I.id, e.value) : true,
          i = null == n ? null : null == T ? true : T[n.id];
        null != i && (t = (0, r.jsxs)("div", {
          className: O.roleCountContainer,
          children: [(0, r.jsx)(a.tBG, {
            size: "sm",
            color: "currentColor",
            className: O.roleCountIcon
          }), (0, r.jsx)("span", {
            className: O.roleCountText,
            children: i
          })]
        }))
      }
      return (0, r.jsxs)("span", {
        className: O.label,
        children: [(0, r.jsx)("span", {
          className: O.labelText,
          children: e.label
        }), t]
      })
    },
    P = i.useMemo(() => (0, E.tx)(e.defaultValues, null == I ? true : I.id), [e.defaultValues, I]);
  return (0, r.jsx)(b.ZP, {
    selectActionComponent: e,
    queryOptions: C,
    renderIcon: A,
    renderOptionLabel: N,
    defaultValues: P
  })
}