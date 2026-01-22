/** Chunk was on 47841 **/
/** chunk id: 249434, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk946274 = require("./946274.jsx"),
  Chunk555337 = require("./555337.js"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk577332 = require("./577332.js");

function f(e) {
  let {
    profile: t,
    handleIconChange: l,
    canManageGuild: c
  } = e, f = i.useCallback(() => {
    l(null)
  }, [l]), g = i.useCallback((e, t) => {
    (0, s.mMO)(async () => {
      let {
        default: i
      } = await Promise.all([n.e("35929"), n.e("79149"), n.e("74571"), n.e("94073")]).then(n.bind(n, 142630));
      return n => (0, r.jsx)(i, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        uploadType: o.HL.GUILD_ICON,
        imageUri: e,
        file: t,
        onCrop: e => {
          let {
            imageUri: t
          } = e;
          return l(t)
        }
      }, n))
    }, {})
  }, [l]);
  return (0, r.jsxs)("div", {
    className: u.Uo,
    children: [(0, r.jsx)(s.vN3, {
      within: true,
      children: (0, r.jsxs)("div", {
        className: u.UD,
        children: [(0, r.jsx)(s.Button, {
          tabIndex: false,
          size: "sm",
          variant: "primary",
          disabled: !c,
          text: d.intl.string(d.t.r3JdsT)
        }), (0, r.jsx)(a.Ay, {
          tabIndex: 0,
          onChange: g,
          disabled: !c
        })]
      })
    }), null != t.icon ? (0, r.jsx)(s.Button, {
      variant: "critical-secondary",
      size: "sm",
      text: d.intl.string(d.t.x8AlTm),
      onClick: f,
      disabled: !c
    }) : null]
  })
}

function g(e) {
  let {
    profile: t,
    canManageGuild: n,
    onIconChange: i
  } = e, a = (0, l.bG)([c.A], () => c.A.getError("icon"));
  return (0, r.jsx)("section", {
    className: u.kL,
    children: (0, r.jsx)(s.D0$, {
      label: d.intl.string(d.t.FkQnxJ),
      description: d.intl.string(d.t.KjkA0W),
      errorMessage: a,
      children: (0, r.jsx)(f, {
        profile: t,
        canManageGuild: n,
        handleIconChange: i
      })
    })
  })
}