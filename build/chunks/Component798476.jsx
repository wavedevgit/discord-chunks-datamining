/** Chunk was on web.js **/
/** chunk id: 798476, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N3: () => y,
  Z7: () => E,
  ZP: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk813197 = require("./813197.jsx"),
  Chunk305347 = require("./305347.jsx"),
  Chunk328656 = require("./328656.jsx"),
  Chunk708321 = require("./708321.jsx"),
  Chunk174161 = require("./174161.jsx"),
  Chunk220250 = require("./220250.js"),
  Chunk486324 = require("./486324.js"),
  Chunk413953 = require("./413953.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function E(e) {
  let {
    profile: t,
    className: n
  } = e, i = (0, p.TK)(t);
  return null != i ? (0, r.jsx)("div", {
    className: a()(n, m.banner),
    style: {
      background: i
    }
  }) : (0, r.jsx)(b, {
    profile: t,
    className: n
  })
}

function b(e) {
  var t;
  let {
    profile: n,
    className: i
  } = e, o = (0, p.nv)(), s = (0, p.qw)({
    profile: n,
    defaultColor: o.hex(),
    forceDefaultColor: null != n.brandColorPrimary
  }), l = null != (t = n.brandColorPrimary) ? t : s;
  return (0, r.jsx)("div", {
    className: a()(i, m.banner),
    style: {
      background: (0, p.dG)(l)
    }
  })
}

function y(e) {
  let {
    profile: t,
    onIconChange: i
  } = e;
  if (null == i) return (0, r.jsx)("div", {
    className: m.avatarContainer,
    children: (0, r.jsx)(s.ZP, {
      mask: s.QS.CLAN_ICON,
      width: 70,
      height: 70,
      children: (0, r.jsx)("div", {
        className: m.avatarWrapper,
        children: (0, r.jsx)(c.Ft, {
          guildId: t.id,
          guildName: t.name,
          guildIcon: t.icon,
          iconSize: 64
        })
      })
    })
  });

  function u(e, t) {
    null != i && (0, o.ZDy)(async () => {
      let {
        default: a
      } = await Promise.all([n.e("91689"), n.e("59732"), n.e("48564")]).then(n.bind(n, 712451));
      return n => (0, r.jsx)(a, g({
        uploadType: _.pC.GUILD_ICON,
        imageUri: e,
        file: t,
        onCrop: e => {
          let {
            imageUri: t
          } = e;
          return i(t)
        }
      }, n))
    }, {})
  }
  return (0, r.jsx)("div", {
    className: m.avatarContainer,
    children: (0, r.jsx)(o.tEY, {
      within: true,
      children: (0, r.jsx)(s.ZP, {
        mask: s.QS.CLAN_ICON,
        width: 70,
        height: 70,
        children: (0, r.jsxs)("div", {
          className: a()(m.avatarWrapper, m.clickable),
          children: [(0, r.jsx)(c.Ft, {
            guildId: t.id,
            guildName: t.name,
            guildIcon: t.icon,
            iconSize: 64
          }), (0, r.jsx)("div", {
            className: m.overlay
          }), (0, r.jsx)(o.vdY, {
            size: "custom",
            className: m.overlayIcon,
            width: 20,
            height: 20,
            color: "white"
          }), (0, r.jsx)(l.ZP, {
            tabIndex: 0,
            onChange: u
          })]
        })
      })
    })
  })
}

function O(e) {
  let {
    profile: t,
    onIconChange: n,
    className: i,
    disableCTA: o,
    CTAOverride: s,
    onClose: l,
    disableGuildNameClick: c
  } = e, p = null;
  return null != s ? p = s : o || (p = (0, r.jsx)(d.Z, {
    profile: t,
    onComplete: l
  })), (0, r.jsxs)("div", {
    className: a()(m.container, i),
    children: [(0, r.jsx)(E, {
      profile: t
    }), (0, r.jsx)(y, {
      onIconChange: n,
      profile: t
    }), (0, r.jsx)(f.Z, {
      profile: t,
      disableGuildNameClick: c
    }), (0, r.jsx)(u.E, {
      profile: t
    }), null != p && (0, r.jsx)("div", {
      className: m.buttonContainer,
      children: p
    })]
  })
}