/** Chunk was on 82082 **/
/** chunk id: 821179, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk194983 = require("./194983.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk44315 = require("./44315.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk323759 = require("./323759.js");
let h = (0, Chunk481060.pxk)(Chunk481060.EFr.SIZE_16);

function j(e) {
  let {
    user: t,
    guild: j,
    nick: b,
    onSelect: g
  } = e, {
    theme: O,
    themeType: x
  } = (0, d.z)(), y = t.hasAvatarForGuild(j.id);
  return (0, i.jsxs)(o.P3F, {
    focusProps: x === p.l.MODAL_V2 ? {
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
    className: m.row,
    onClick: g,
    onContextMenu: e => {
      (0, s.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("61924"), r.e("57804"), r.e("70363"), r.e("49049"), r.e("36599"), r.e("7654"), r.e("76692"), r.e("8271"), r.e("15851"), r.e("51453"), r.e("845"), r.e("38697"), r.e("86736"), r.e("6850"), r.e("58227"), r.e("63575"), r.e("62856"), r.e("44686"), r.e("384"), r.e("66201"), r.e("93375"), r.e("39206"), r.e("22516"), r.e("20598"), r.e("87154"), r.e("33213"), r.e("7756")]).then(r.bind(r, 545135));
        return t => {
          var r, n;
          return (0, i.jsx)(e, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = r[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, t), n = n = {
            guild: j
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              r.push.apply(r, i)
            }
            return r
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e))
          }), r))
        }
      })
    },
    children: [(0, i.jsx)(c.Z, {
      tabIndex: false,
      guild: j,
      showBadge: true,
      className: null != j.icon ? m.icon : m.noIcon,
      badgeStrokeColor: (0, l.Lq)((0, a.wj)(O) ? v.Ilk.PRIMARY_600 : v.Ilk.WHITE_500),
      badgeTooltipColor: o.r6K.PRIMARY,
      badgeTooltipDelay: f.vB,
      size: c.Z.Sizes.MEDIUM,
      active: true
    }), (0, i.jsxs)("div", {
      className: m.details,
      children: [(0, i.jsx)("div", {
        className: m.name,
        children: j.name
      }), y && (0, i.jsxs)("div", {
        className: m.nick,
        children: [(0, i.jsx)(o.qEK, {
          src: t.getAvatarURL(j.id, h),
          size: o.EFr.SIZE_16,
          className: m.avatar,
          "aria-hidden": true
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: (0, i.jsx)(n.Z, {
            delay: f.vB,
            children: null != b ? b : u.ZP.getName(j.id, true, t)
          })
        })]
      }), !y && null != b && (0, i.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: (0, i.jsx)(n.Z, {
          delay: f.vB,
          children: b
        })
      })]
    })]
  })
}