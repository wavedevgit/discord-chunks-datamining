/** Chunk was on web.js **/
/** chunk id: 703180, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MemberListContentSettingsMenu: () => h,
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk485267 = require("./485267.js"),
  Chunk71585 = require("./71585.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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
    } = e, i = (0, a.e7)([l.Z], () => l.Z.hidden);
    return (0, r.jsx)(o.v2r, {
      onSelect: () => {},
      navId: "member-list-settings-menu",
      onClose: null != t ? t : c.dG4,
      "aria-label": u.intl.string(u.t.w2jvOf),
      children: (0, r.jsxs)(o.kSQ, {
        children: [(0, r.jsx)(o.sNh, {
          id: "about",
          label: u.intl.string(u.t.pWLGnF),
          icon: o.d3s,
          action: () => {
            (0, o.ZDy)(async () => {
              let {
                default: e
              } = await n.e("71517").then(n.bind(n, 549505));
              return t => (0, r.jsx)(e, f({}, t))
            }), null == t || t()
          }
        }), (0, r.jsx)(o.S89, {
          id: "hide",
          label: u.intl.string(u.t.AhNYuY),
          checked: i,
          action: () => {
            (0, s.lY)(), null == t || t()
          }
        })]
      })
    })
  },
  m = () => {
    let e = i.useRef(null);
    return (0, r.jsx)(o.yRy, {
      targetElementRef: e,
      animation: o.yRy.Animation.NONE,
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
      children: t => (0, r.jsx)(o.P3F, _(f({}, t), {
        innerRef: e,
        onClick: e => {
          e.stopPropagation(), t.onClick(e)
        },
        style: {
          width: "12px",
          height: "12px",
          display: "flex"
        },
        children: (0, r.jsx)(o.ewm, {
          size: "xxs"
        })
      }))
    })
  }