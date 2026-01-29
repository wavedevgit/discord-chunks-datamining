/** Chunk was on 1113 **/
/** chunk id: 95655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk793574 = require("./793574.js"),
  Chunk47167 = require("./47167.js"),
  Chunk598104 = require("./598104.jsx"),
  Chunk73028 = require("./73028.jsx"),
  Chunk665691 = require("./665691.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk202115 = require("./202115.js");
let b = e => {
    let {
      channel: t
    } = e;
    return (0, h.bG)({
      channelId: t.id
    }) ? (0, r.jsx)(i.m, {
      text: f.intl.string(f.t.QyZ4Td),
      children: (0, r.jsx)(s.m5V, {
        size: "xs",
        "aria-label": f.intl.string(f.t.VHXh8a),
        color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT
      })
    }) : null
  },
  A = Chunk64700.memo(function(e) {
    let {
      channel: t
    } = e, l = t.id, h = (0, c.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.m, {
        asContainer: true,
        text: f.intl.string(f.t["5Q9+/L"]),
        position: "bottom",
        children: (0, r.jsxs)(s.DUT, {
          className: m.cD,
          onClick: () => {
            (0, d.U)(l, o.A.HEADER_BAR)
          },
          onContextMenu: e => (0, a.L3)(e, () => Promise.all([n.e("97262"), n.e("60200"), n.e("26021")]).then(n.bind(n, 4027)).then(e => {
            let {
              default: n
            } = e;
            return e => {
              var l, i;
              return (0, r.jsx)(n, (l = function(e) {
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
              }({}, e), i = i = {
                channel: t,
                selected: true
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(i)).forEach(function(e) {
                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
              }), l))
            }
          }), {
            noBlurEvent: true
          }),
          onDoubleClick: e => e.stopPropagation(),
          onMouseEnter: () => {
            p.default.track(g.HAw.GDM_EDIT_INTERACTED, {
              channel_id: t.id,
              action: "entry_point_hovered",
              location: o.A.HEADER_BAR
            })
          },
          "aria-label": f.intl.string(f.t["5Q9+/L"]),
          children: [(0, r.jsx)(u.A, {
            className: m.gn,
            "aria-hidden": true,
            channel: t,
            size: s._3J.SIZE_20,
            facepileSizeOverride: s._3J.SIZE_24
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: null != h ? h : ""
          }), (0, r.jsx)(s.R2l, {
            className: m.IZ,
            size: "xs",
            color: "currentColor"
          })]
        })
      }), (0, r.jsx)(b, {
        channel: t
      })]
    })
  })