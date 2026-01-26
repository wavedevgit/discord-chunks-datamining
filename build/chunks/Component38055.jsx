/** Chunk was on web.js **/
/** chunk id: 38055, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m,
  MemberListContentSettingsMenu: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk708197 = require("./708197.js"),
  Chunk435738 = require("./435738.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = e => {
    let {
      closePopout: t
    } = e, i = (0, a.bG)([l.A], () => l.A.hidden);
    return (0, r.jsx)(s.W1t, {
      "data-menu-needs-migration": true,
      onSelect: () => {},
      navId: "member-list-settings-menu",
      onClose: null != t ? t : c.tEg,
      "aria-label": u.intl.string(u.t.w2jvOf),
      children: (0, r.jsxs)(s.rXV, {
        children: [(0, r.jsx)(s.Drp, {
          id: "about",
          label: u.intl.string(u.t.pWLGnF),
          leadingAccessory: {
            type: "icon",
            icon: s.mir
          },
          icon: s.mir,
          action: () => {
            (0, s.mMO)(async () => {
              let {
                default: e
              } = await n.e("90309").then(n.bind(n, 643460));
              return t => (0, r.jsx)(e, f({}, t))
            }), null == t || t()
          }
        }), (0, r.jsx)(s.sLh, {
          id: "hide",
          label: u.intl.string(u.t.AhNYuY),
          checked: i,
          action: () => {
            (0, o.Il)(), null == t || t()
          }
        })]
      })
    })
  },
  m = () => {
    let e = i.useRef(null);
    return (0, r.jsx)(s.YNO, {
      targetElementRef: e,
      animation: s.YNO.Animation.NONE,
      position: "bottom",
      align: "right",
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(h, {
          closePopout: t
        })
      },
      children: t => (0, r.jsx)(s.DUT, _(f({}, t), {
        innerRef: e,
        onClick: e => {
          e.stopPropagation(), t.onClick(e)
        },
        style: {
          width: "12px",
          height: "12px",
          display: "flex"
        },
        children: (0, r.jsx)(s.Zes, {
          size: "xxs"
        })
      }))
    })
  }