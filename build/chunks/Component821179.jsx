/** Chunk was on 16459 **/
/** chunk id: 821179, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk44315 = require("./44315.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk879314 = require("./879314.js");
let m = (0, Chunk481060.pxk)(Chunk481060.EFr.SIZE_16);

function j(e) {
  let {
    user: t,
    guild: j,
    nick: v,
    onSelect: O
  } = e, {
    theme: y,
    themeType: g
  } = (0, d.z)(), x = t.hasAvatarForGuild(j.id);
  return (0, n.jsxs)(a.P3F, {
    focusProps: g === p.lY.MODAL_V2 ? {
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
    className: b.row,
    onClick: O,
    onContextMenu: e => {
      (0, l.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("66549"), r.e("1806"), r.e("92078"), r.e("7654"), r.e("94136"), r.e("70205"), r.e("2686"), r.e("4192"), r.e("58175"), r.e("72762"), r.e("49049"), r.e("44156"), r.e("62117"), r.e("8725"), r.e("6850"), r.e("58227"), r.e("62856"), r.e("54408"), r.e("20087"), r.e("5533"), r.e("873"), r.e("45550"), r.e("56534"), r.e("87154"), r.e("33213"), r.e("84479")]).then(r.bind(r, 545135));
        return t => {
          var r, i;
          return (0, n.jsx)(e, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, t), i = i = {
            guild: j
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
          }), r))
        }
      })
    },
    children: [(0, n.jsx)(c.Z, {
      tabIndex: false,
      guild: j,
      showBadge: true,
      className: null != j.icon ? b.icon : b.noIcon,
      badgeStrokeColor: (0, s.Lq)((0, i.wj)(y) ? f.Ilk.PRIMARY_600 : f.Ilk.WHITE_500),
      badgeTooltipColor: a.FGA.PRIMARY,
      badgeTooltipDelay: p.vB,
      size: c.Z.Sizes.MEDIUM,
      active: true
    }), (0, n.jsxs)("div", {
      className: b.details,
      children: [(0, n.jsx)("div", {
        className: b.name,
        children: j.name
      }), x && (0, n.jsxs)("div", {
        className: b.nick,
        children: [(0, n.jsx)(a.qEK, {
          src: t.getAvatarURL(j.id, m),
          size: a.EFr.SIZE_16,
          className: b.avatar,
          "aria-hidden": true
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/medium",
          children: (0, n.jsx)(o.Z, {
            delay: p.vB,
            children: null != v ? v : u.ZP.getName(j.id, true, t)
          })
        })]
      }), !x && null != v && (0, n.jsx)(a.Text, {
        variant: "text-xs/medium",
        children: (0, n.jsx)(o.Z, {
          delay: p.vB,
          children: v
        })
      })]
    })]
  })
}