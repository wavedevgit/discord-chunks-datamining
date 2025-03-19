/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => m
}), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(723047),
  a = n(727843),
  l = n(290348),
  o = n(783454),
  c = n(893729),
  A = n(619326),
  d = n(553204),
  u = n(388032),
  g = n(174032),
  f = n(604757);

function m() {
  let {
    editStateId: e,
    guildId: t
  } = (0, a.N)(), [, m] = l.p9(e, t), [p, h] = l.Ek(e, t), C = l.qs(e, t);

  function b() {
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("22942").then(n.bind(n, 660727));
      return n => {
        var i, s;
        return (0, r.jsx)(e, (i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, n), s = s = {
          guildId: t,
          onUploadIcon: e => m({
            icon: e,
            unicodeEmoji: null
          }),
          onSelectUnicodeEmoji: e => m({
            icon: null,
            unicodeEmoji: e
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
        }), i))
      }
    })
  }
  let v = (0, s.mY)();
  return (0, r.jsxs)(o.Z, {
    title: u.NW.string(u.t["Ah+sQ0"]),
    description: u.NW.string(u.t.ixbWiI),
    children: [(0, r.jsx)(i.hjN, {
      title: u.NW.string(u.t["6OUqDQ"]),
      disabled: v,
      children: (0, r.jsx)(A.Z, {
        value: p,
        onChange: h,
        disabled: v
      })
    }), (0, r.jsx)(i.LZC, {
      size: 24
    }), (0, r.jsx)("div", {
      className: g.__invalid_iconSection,
      children: (0, r.jsxs)(i.hjN, {
        title: u.NW.string(u.t["zn8/AQ"]),
        disabled: v,
        children: [(0, r.jsx)(i.R94, {
          type: i.R94.Types.DESCRIPTION,
          className: g.formDescription,
          disabled: v,
          children: u.NW.string(u.t.AqHUra)
        }), (0, r.jsxs)("div", {
          className: f.iconUploaderContainer,
          children: [(0, r.jsx)(d.Z, {
            role: C,
            "aria-label": u.NW.string(u.t.mD1oGB),
            onClick: b,
            disabled: v
          }), (0, r.jsx)(i.zxk, {
            look: i.zxk.Looks.OUTLINED,
            color: i.zxk.Colors.PRIMARY,
            className: g.__invalid_imageUploadButtonCTA,
            onClick: b,
            disabled: v,
            children: u.NW.string(u.t.mD1oGB)
          })]
        })]
      })
    }), (0, r.jsx)(i.LZC, {
      size: 24
    }), (0, r.jsx)(i.Rny, {
      children: (0, r.jsxs)("div", {
        className: f.previewContainer,
        "aria-hidden": !0,
        children: [(0, r.jsx)(c.Z, {
          guildId: t,
          role: C,
          className: f.messageContainer,
          theme: "light"
        }), (0, r.jsx)(c.Z, {
          guildId: t,
          role: C,
          className: f.messageContainer,
          theme: "dark"
        })]
      })
    })]
  })
}