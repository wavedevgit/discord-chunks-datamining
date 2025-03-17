/** Chunk was on 31823 **/
n.d(r, {
  Z: () => b
});
var t = n(200651);
n(192379);
var i = n(442837),
  o = n(692547),
  s = n(481060),
  a = n(493683),
  l = n(129861),
  d = n(700582),
  c = n(594174),
  u = n(388032),
  m = n(693994);

function h(e) {
  let {
    color: r,
    className: n
  } = e;
  return (0, t.jsx)("svg", {
    className: n,
    height: "16",
    width: "80",
    viewBox: "0 0 80 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, t.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      opacity: ".6",
      children: [(0, t.jsx)("path", {
        d: "m0 0h80v16h-80z"
      }), (0, t.jsxs)("g", {
        stroke: r,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        children: [(0, t.jsx)("path", {
          d: "m71 1h4v4.16"
        }), (0, t.jsx)("path", {
          d: "m2 1h4v4.16",
          transform: "matrix(-1 0 0 1 8 0)"
        }), (0, t.jsx)("path", {
          d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
        }), (0, t.jsx)("path", {
          d: "m72.13 10.474 2.869 3.12 2.631-3.12"
        })]
      })]
    })
  })
}

function b(e, r) {
  let n = (0, i.e7)([c.default], () => c.default.getCurrentUser());
  return null == n || r.ownerId !== n.id || e.id === n.id ? null : (0, t.jsx)(s.sNh, {
    id: "make-dm-owner",
    color: "danger",
    label: u.NW.string(u.t["6t3CyM"]),
    action: () => {
      (0, s.h7j)(i => {
        var c, b;
        return (0, t.jsxs)(s.ConfirmModal, (c = function(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {},
              t = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), t.forEach(function(r) {
              var t;
              t = n[r], r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[r] = t
            })
          }
          return e
        }({
          bodyClassName: m.confirmModal,
          header: u.NW.string(u.t.WZoUsr),
          confirmText: u.NW.string(u.t["cY+Ooa"]),
          cancelText: u.NW.string(u.t["ETE/oK"]),
          onConfirm: () => a.Z.setDMOwner(r.id, e.id)
        }, i), b = b = {
          children: [(0, t.jsx)(h, {
            color: o.Z.unsafe_rawColors.PRIMARY_300.css
          }), (0, t.jsxs)("div", {
            className: m.fromToWrapper,
            children: [(0, t.jsx)("div", {
              className: m.from,
              children: (0, t.jsx)(d.Z, {
                user: n,
                size: s.EFr.SIZE_80
              })
            }), (0, t.jsx)("div", {
              className: m.to,
              children: (0, t.jsx)(d.Z, {
                user: e,
                size: s.EFr.SIZE_80
              })
            })]
          }), (0, t.jsx)(s.Text, {
            variant: "text-md/normal",
            children: u.NW.format(u.t.gsBb3N, {
              usernameHook: (r, n) => (0, t.jsx)(l.Z, {
                usernameIcon: (0, t.jsx)(s.qEK, {
                  className: m.avatarIcon,
                  src: e.getAvatarURL(void 0, 16),
                  size: s.EFr.SIZE_16,
                  "aria-hidden": !0
                }),
                className: m.discordTag,
                usernameClass: m.username,
                discriminatorClass: m.discriminator,
                user: e
              }, n)
            })
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(b)) : (function(e, r) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(e);
            n.push.apply(n, t)
          }
          return n
        })(Object(b)).forEach(function(e) {
          Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(b, e))
        }), c))
      })
    }
  })
}