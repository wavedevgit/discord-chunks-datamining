/** Chunk was on 85496 **/
/** chunk id: 99843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk782196 = require("./782196.js");
let b = e => {
    let {
      channel: t
    } = e;
    return (0, p.m$)({
      channelId: t.id
    }) ? (0, l.jsx)(r.u, {
      text: m.intl.string(m.t.QyZ4Td),
      children: (0, l.jsx)(a.tQf, {
        size: "xs",
        "aria-label": m.intl.string(m.t.VHXh8a),
        color: a.TVs.colors.INTERACTIVE_NORMAL
      })
    }) : null
  },
  v = Chunk647438.memo(function(e) {
    let {
      channel: t
    } = e, i = t.id, p = (0, c.ZP)(t);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(r.u, {
        asContainer: true,
        text: m.intl.string(m.t["5Q9+/L"]),
        position: "bottom",
        children: (0, l.jsxs)(a.P3F, {
          className: g.hoverableContainer,
          onClick: () => {
            (0, d.B)(i, o.Z.HEADER_BAR)
          },
          onContextMenu: e => (0, s.jW)(e, () => Promise.all([n.e("79695"), n.e("25421"), n.e("38357")]).then(n.bind(n, 354741)).then(e => {
            let {
              default: n
            } = e;
            return e => {
              var i, r;
              return (0, l.jsx)(n, (i = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                      value: l,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = l
                  })
                }
                return e
              }({}, e), r = r = {
                channel: t,
                selected: true
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, l)
                }
                return n
              })(Object(r)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e))
              }), i))
            }
          }), {
            noBlurEvent: true
          }),
          onDoubleClick: e => e.stopPropagation(),
          onMouseEnter: () => {
            h.default.track(f.rMx.GDM_EDIT_INTERACTED, {
              channel_id: t.id,
              action: "entry_point_hovered",
              location: o.Z.HEADER_BAR
            })
          },
          "aria-label": m.intl.string(m.t["5Q9+/L"]),
          children: [(0, l.jsx)(u.Z, {
            className: g.gdmIcon,
            "aria-hidden": true,
            channel: t,
            size: a.EFr.SIZE_20,
            facepileSizeOverride: a.EFr.SIZE_24,
            experimentLocation: "header_bar"
          }), (0, l.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: null != p ? p : ""
          }), (0, l.jsx)(a.vdY, {
            className: g.editIcon,
            size: "xs",
            color: "currentColor"
          })]
        })
      }), (0, l.jsx)(b, {
        channel: t
      })]
    })
  })