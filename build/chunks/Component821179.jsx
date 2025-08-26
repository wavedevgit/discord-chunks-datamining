/** Chunk was on 1268 **/
/** chunk id: 821179, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk671955 = require("./671955.js"),
  Chunk323759 = require("./323759.js");
let j = (0, Chunk481060.pxk)(Chunk481060.EFr.SIZE_16);

function v(e) {
  let {
    user: t,
    guild: v,
    nick: x,
    onSelect: y
  } = e, {
    theme: O,
    themeType: h
  } = (0, d.z)(), g = t.hasAvatarForGuild(v.id);
  return (0, n.jsxs)(a.P3F, {
    focusProps: h === b.l.MODAL_V2 ? {
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
    className: f.row,
    onClick: y,
    onContextMenu: e => {
      (0, l.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("57804"), r.e("1806"), r.e("53414"), r.e("90508"), r.e("36599"), r.e("60962"), r.e("58175"), r.e("55616"), r.e("7654"), r.e("70205"), r.e("44156"), r.e("49049"), r.e("47463"), r.e("6850"), r.e("58227"), r.e("54408"), r.e("42926"), r.e("38697"), r.e("88479"), r.e("79381"), r.e("67325"), r.e("64679"), r.e("39206"), r.e("74486"), r.e("56534"), r.e("87154"), r.e("33213"), r.e("91499")]).then(r.bind(r, 545135));
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
            guild: v
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
      guild: v,
      showBadge: true,
      className: null != v.icon ? f.icon : f.noIcon,
      badgeStrokeColor: (0, o.Lq)((0, i.wj)(O) ? p.Ilk.PRIMARY_600 : p.Ilk.WHITE_500),
      badgeTooltipColor: a.FGA.PRIMARY,
      badgeTooltipDelay: m.vB,
      size: c.Z.Sizes.MEDIUM,
      active: true
    }), (0, n.jsxs)("div", {
      className: f.details,
      children: [(0, n.jsx)("div", {
        className: f.name,
        children: v.name
      }), g && (0, n.jsxs)("div", {
        className: f.nick,
        children: [(0, n.jsx)(a.qEK, {
          src: t.getAvatarURL(v.id, j),
          size: a.EFr.SIZE_16,
          className: f.avatar,
          "aria-hidden": true
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/medium",
          children: (0, n.jsx)(s.Z, {
            delay: m.vB,
            children: null != x ? x : u.ZP.getName(v.id, true, t)
          })
        })]
      }), !g && null != x && (0, n.jsx)(a.Text, {
        variant: "text-xs/medium",
        children: (0, n.jsx)(s.Z, {
          delay: m.vB,
          children: x
        })
      })]
    })]
  })
}