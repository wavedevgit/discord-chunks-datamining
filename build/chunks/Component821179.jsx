/** Chunk was on 80598 **/
/** chunk id: 821179, original params: e,t,r (module,exports,require) **/
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
let v = (0, Chunk481060.dcp)(Chunk481060.EFr.SIZE_16);

function m(e) {
  let {
    user: t,
    guild: m,
    nick: j,
    onSelect: O
  } = e, {
    theme: y,
    themeType: g
  } = (0, d.z)(), _ = t.hasAvatarForGuild(m.id);
  return (0, n.jsxs)(c.P3F, {
    focusProps: g === p.l.MODAL_V2 ? {
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
      (0, s.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("61924"), r.e("57804"), r.e("49049"), r.e("36599"), r.e("7654"), r.e("76692"), r.e("8271"), r.e("15851"), r.e("51453"), r.e("845"), r.e("38697"), r.e("86736"), r.e("6850"), r.e("58227"), r.e("63575"), r.e("62856"), r.e("44686"), r.e("384"), r.e("66201"), r.e("39206"), r.e("93375"), r.e("22516"), r.e("20598"), r.e("87154"), r.e("33213"), r.e("7756")]).then(r.bind(r, 545135));
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
            guild: m
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
    children: [(0, n.jsx)(l.Z, {
      tabIndex: false,
      guild: m,
      showBadge: true,
      className: null != m.icon ? b.icon : b.noIcon,
      badgeStrokeColor: (0, o.wj)(y) ? i.Z.unsafe_rawColors.PRIMARY_600.css : i.Z.unsafe_rawColors.WHITE_500.css,
      badgeTooltipColor: c.r6K.PRIMARY,
      badgeTooltipDelay: f.vB,
      size: l.Z.Sizes.MEDIUM,
      active: true
    }), (0, n.jsxs)("div", {
      className: b.details,
      children: [(0, n.jsx)("div", {
        className: b.name,
        children: m.name
      }), _ && (0, n.jsxs)("div", {
        className: b.nick,
        children: [(0, n.jsx)(c.qEK, {
          src: t.getAvatarURL(m.id, v),
          size: c.EFr.SIZE_16,
          className: b.avatar,
          "aria-hidden": true
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/medium",
          children: (0, n.jsx)(a.Z, {
            delay: f.vB,
            children: null != j ? j : u.ZP.getName(m.id, true, t)
          })
        })]
      }), !_ && null != j && (0, n.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: (0, n.jsx)(a.Z, {
          delay: f.vB,
          children: j
        })
      })]
    })]
  })
}