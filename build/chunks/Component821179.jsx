/** Chunk was on 82697 **/
/** chunk id: 821179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk692547 = require("./692547.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk671955 = require("./671955.js"),
  Chunk323759 = require("./323759.js");
let h = (0, Chunk481060.dcp)(Chunk481060.EFr.SIZE_16);

function m(e) {
  let {
    user: t,
    guild: m,
    nick: g,
    onSelect: j
  } = e, {
    theme: O,
    themeType: y
  } = (0, d.z)(), v = t.hasAvatarForGuild(m.id);
  return (0, r.jsxs)(l.P3F, {
    focusProps: y === b.l.MODAL_V2 ? {
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
    className: p.row,
    onClick: j,
    onContextMenu: e => {
      (0, s.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("61924"), n.e("57804"), n.e("49049"), n.e("36599"), n.e("7654"), n.e("76692"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("38697"), n.e("86736"), n.e("6850"), n.e("58227"), n.e("63575"), n.e("62856"), n.e("44686"), n.e("384"), n.e("66201"), n.e("39206"), n.e("93375"), n.e("22516"), n.e("76844"), n.e("87154"), n.e("33213"), n.e("63237")]).then(n.bind(n, 545135));
        return t => {
          var n, i;
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
          }({}, t), i = i = {
            guild: m
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }
      })
    },
    children: [(0, r.jsx)(c.Z, {
      tabIndex: false,
      guild: m,
      showBadge: true,
      className: null != m.icon ? p.icon : p.noIcon,
      badgeStrokeColor: (0, a.wj)(O) ? i.Z.unsafe_rawColors.PRIMARY_600.css : i.Z.unsafe_rawColors.WHITE_500.css,
      badgeTooltipColor: l.r6K.PRIMARY,
      badgeTooltipDelay: f.vB,
      size: c.Z.Sizes.MEDIUM,
      active: true
    }), (0, r.jsxs)("div", {
      className: p.details,
      children: [(0, r.jsx)("div", {
        className: p.name,
        children: m.name
      }), v && (0, r.jsxs)("div", {
        className: p.nick,
        children: [(0, r.jsx)(l.qEK, {
          src: t.getAvatarURL(m.id, h),
          size: l.EFr.SIZE_16,
          className: p.avatar,
          "aria-hidden": true
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          children: (0, r.jsx)(o.Z, {
            delay: f.vB,
            children: null != g ? g : u.ZP.getName(m.id, true, t)
          })
        })]
      }), !v && null != g && (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(o.Z, {
          delay: f.vB,
          children: g
        })
      })]
    })]
  })
}