/** Chunk was on web.js **/
/** chunk id: 855344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk58149 = require("./58149.js"),
  Chunk376304 = require("./376304.js"),
  Chunk509536 = require("./509536.jsx"),
  Chunk98318 = require("./98318.js"),
  Chunk657048 = require("./657048.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652176 = require("./652176.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk530358 = require("./530358.js");

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

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = 40,
  N = e => {
    let {
      roleIcon: t,
      guild: n
    } = e, {
      name: v
    } = t;
    (0, o.Ay)(() => {
      g.default.track(b.HAw.OPEN_POPOUT, S({
        type: "Role Icon Popout",
        guild_id: n.id
      }, (0, l.dI)(_.A.getChannel(m.A.getChannelId(n.id)))))
    });
    let I = (0, i.bG)([h.A], () => null != t.roleId ? h.A.getRole(n.id, t.roleId) : true),
      N = (0, d.U)(I),
      R = N ? O.intl.formatToPlainString(O.t.t0928V, {
        name: v
      }) : O.intl.formatToPlainString(O.t.UDDkGy, {
        name: v
      }),
      w = T(S({}, t), {
        src: null == t.src ? t.src : (0, c.ux)(t.src, C),
        size: C
      }),
      P = () => {
        (0, u.K)({
          guildId: n.id,
          location: {
            section: b.JJy.ROLE_ICON_POPOUT
          }
        })
      },
      D = () => {
        (0, p.pX)(b.BVt.CHANNEL(n.id, y.VV.ROLE_SUBSCRIPTIONS))
      },
      x = N ? D : P;
    return (0, r.jsx)(s.lGe, {
      children: (0, r.jsx)(E.Uq, {
        children: (0, r.jsxs)("div", {
          className: A.jC,
          children: [(0, r.jsxs)("div", {
            className: A.rb,
            children: [(0, r.jsx)("div", {
              className: A.Xq,
              children: (0, r.jsx)(f.A, T(S({}, w), {
                enableTooltip: false,
                className: A.__invalid_roleIcon,
                enableHeight: false
              }))
            }), (0, r.jsxs)("div", {
              className: A.bM,
              children: [(0, r.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                className: A.S3,
                children: (0, r.jsx)(a.A, {
                  children: v
                })
              }), (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: R
              })]
            })]
          }), (0, r.jsx)(s.Button, {
            size: "sm",
            variant: "secondary",
            text: O.intl.string(O.t["H930+H"]),
            onClick: x,
            icon: s._Jp,
            fullWidth: true,
            autoFocus: true
          })]
        })
      })
    })
  }