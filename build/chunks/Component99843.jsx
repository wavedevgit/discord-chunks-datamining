/** Chunk was on 86357 **/
/** chunk id: 99843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function g(e) {
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
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = e => {
    let {
      channel: t
    } = e;
    return (0, d.m$)({
      channelId: t.id
    }) ? (0, r.jsx)(l.ua7, {
      text: f.intl.string(f.t.QyZ4TU),
      children: e => (0, r.jsx)(l.tQf, b(g({}, e), {
        size: "xs",
        "aria-label": f.intl.string(f.t.VHXh8f),
        color: l.TVs.colors.INTERACTIVE_NORMAL
      }))
    }) : null
  },
  _ = Chunk647438.memo(function(e) {
    let {
      channel: t
    } = e, i = t.id, d = (0, s.ZP)(t);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.ua7, {
        text: f.intl.string(f.t["5Q9+/P"]),
        position: "bottom",
        children: e => {
          var {
            onMouseEnter: s,
            onClick: y
          } = e, _ = function(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.keys(e);
              for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(e, ["onMouseEnter", "onClick"]);
          return (0, r.jsxs)(l.P3F, b(g({}, _), {
            className: m.hoverableContainer,
            onClick: () => {
              null == y || y(), (0, u.B)(i, o.Z.HEADER_BAR)
            },
            onContextMenu: e => (0, a.jW)(e, () => Promise.all([n.e("79695"), n.e("70205"), n.e("57789"), n.e("43740")]).then(n.bind(n, 354741)).then(e => {
              let {
                default: n
              } = e;
              return e => (0, r.jsx)(n, b(g({}, e), {
                channel: t,
                selected: true
              }))
            }), {
              noBlurEvent: true
            }),
            onDoubleClick: e => e.stopPropagation(),
            onMouseEnter: () => {
              null == s || s(), p.default.track(h.rMx.GDM_EDIT_INTERACTED, {
                channel_id: t.id,
                action: "entry_point_hovered",
                location: o.Z.HEADER_BAR
              })
            },
            "aria-label": f.intl.string(f.t["5Q9+/P"]),
            children: [(0, r.jsx)(c.Z, {
              className: m.gdmIcon,
              "aria-hidden": true,
              channel: t,
              size: l.EFr.SIZE_20,
              facepileSizeOverride: l.EFr.SIZE_24,
              experimentLocation: "header_bar"
            }), (0, r.jsx)(l.Text, {
              variant: "text-md/medium",
              color: "header-primary",
              children: null != d ? d : ""
            }), (0, r.jsx)(l.vdY, {
              className: m.editIcon,
              size: "xs",
              color: "currentColor"
            })]
          }))
        }
      }), (0, r.jsx)(y, {
        channel: t
      })]
    })
  })