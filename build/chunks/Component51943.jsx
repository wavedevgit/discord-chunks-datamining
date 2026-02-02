/** Chunk was on 51693 **/
/** chunk id: 51943, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk827734 = require("./827734.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk562153 = require("./562153.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk996988 = require("./996988.js"),
  Chunk7319 = require("./7319.js");
let m = (0, Chunk397927.FT9)(Chunk397927._3J.SIZE_16);

function b(e) {
  let {
    user: t,
    guild: b,
    nick: y,
    onSelect: O
  } = e, {
    theme: j,
    themeType: h
  } = (0, d.E)(), x = t.hasAvatarForGuild(b.id);
  return (0, r.jsxs)(o.DUT, {
    focusProps: h === p.d.MODAL_V2 ? {
      offset: {
        top: 4,
        right: 4,
        left: 4
      }
    } : {
      offset: {
        right: 8
      }
    },
    className: g.nM,
    onClick: O,
    onContextMenu: e => {
      (0, s.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49681"), n.e("3795"), n.e("68587"), n.e("40396"), n.e("43600"), n.e("13088"), n.e("48330"), n.e("92414"), n.e("94857"), n.e("28136"), n.e("7034"), n.e("63379"), n.e("49559"), n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("37372"), n.e("8018"), n.e("3183"), n.e("9753"), n.e("21968"), n.e("35894"), n.e("50796"), n.e("24202"), n.e("11810"), n.e("8458"), n.e("39048"), n.e("76719"), n.e("17537"), n.e("49862"), n.e("2155"), n.e("34348"), n.e("36290"), n.e("59541"), n.e("59735"), n.e("54469"), n.e("71020")]).then(n.bind(n, 544676));
        return t => {
          var n, l;
          return (0, r.jsx)(e, (n = function(e) {
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
          }({}, t), l = l = {
            guild: b
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
          }), n))
        }
      })
    },
    children: [(0, r.jsx)(c.A, {
      tabIndex: false,
      guild: b,
      showBadge: true,
      className: null != b.icon ? g.Kk : g.lN,
      badgeStrokeColor: (0, a.Mw)(j) ? l.A.unsafe_rawColors.PRIMARY_600.css : l.A.unsafe_rawColors.WHITE.css,
      badgeTooltipColor: o.oMw.PRIMARY,
      badgeTooltipDelay: f.In,
      size: c.A.Sizes.MEDIUM,
      active: true
    }), (0, r.jsxs)("div", {
      className: g.zH,
      children: [(0, r.jsx)("div", {
        className: g.UU,
        children: b.name
      }), x && (0, r.jsxs)("div", {
        className: g.C9,
        children: [(0, r.jsx)(o.euF, {
          src: t.getAvatarURL(b.id, m),
          size: o._3J.SIZE_16,
          className: g.my,
          "aria-hidden": true
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: (0, r.jsx)(i.A, {
            delay: f.In,
            children: null != y ? y : u.Ay.getName(b.id, true, t)
          })
        })]
      }), !x && null != y && (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(i.A, {
          delay: f.In,
          children: y
        })
      })]
    })]
  })
}