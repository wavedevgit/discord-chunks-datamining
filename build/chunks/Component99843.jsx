/** Chunk was on 97710 **/
/** chunk id: 99843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk933557 = require("./933557.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk769409 = require("./769409.jsx"),
  Chunk210975 = require("./210975.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk782562 = require("./782562.js");
let m = e => {
    let {
      channel: t
    } = e;
    return (0, p.m$)({
      channelId: t.id
    }) ? (0, r.jsx)(a.u, {
      text: f.intl.string(f.t.QyZ4Td),
      children: (0, r.jsx)(o.tQf, {
        size: "xs",
        "aria-label": f.intl.string(f.t.VHXh8a),
        color: o.TVs.colors.INTERACTIVE_NORMAL
      })
    }) : null
  },
  j = Chunk473749.memo(function(e) {
    let {
      channel: t
    } = e, i = t.id, p = (0, c.ZP)(t);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.u, {
        asContainer: true,
        text: f.intl.string(f.t["5Q9+/L"]),
        position: "bottom",
        children: (0, r.jsxs)(o.P3F, {
          className: g.hoverableContainer,
          onClick: () => {
            (0, u.B)(i, s.Z.HEADER_BAR)
          },
          onContextMenu: e => (0, l.jW)(e, () => Promise.all([n.e("79695"), n.e("25421"), n.e("38357")]).then(n.bind(n, 354741)).then(e => {
            let {
              default: n
            } = e;
            return e => {
              var i, a;
              return (0, r.jsx)(n, (i = function(e) {
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
              }({}, e), a = a = {
                channel: t,
                selected: true
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(a)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
              }), i))
            }
          }), {
            noBlurEvent: true
          }),
          onDoubleClick: e => e.stopPropagation(),
          onMouseEnter: () => {
            b.default.track(h.rMx.GDM_EDIT_INTERACTED, {
              channel_id: t.id,
              action: "entry_point_hovered",
              location: s.Z.HEADER_BAR
            })
          },
          "aria-label": f.intl.string(f.t["5Q9+/L"]),
          children: [(0, r.jsx)(d.Z, {
            className: g.gdmIcon,
            "aria-hidden": true,
            channel: t,
            size: o.EFr.SIZE_20,
            facepileSizeOverride: o.EFr.SIZE_24
          }), (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: null != p ? p : ""
          }), (0, r.jsx)(o.vdY, {
            className: g.editIcon,
            size: "xs",
            color: "currentColor"
          })]
        })
      }), (0, r.jsx)(m, {
        channel: t
      })]
    })
  })