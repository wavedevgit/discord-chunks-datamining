/** Chunk was on 96413 **/
/** chunk id: 821179, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
let v = (0, Chunk481060.pxk)(Chunk481060.EFr.SIZE_16);

function g(e) {
  let {
    user: t,
    guild: g,
    nick: j,
    onSelect: b
  } = e, {
    theme: O,
    themeType: P
  } = (0, d.z)(), I = t.hasAvatarForGuild(g.id);
  return (0, i.jsxs)(l.P3F, {
    focusProps: P === p.l.MODAL_V2 ? {
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
    onClick: b,
    onContextMenu: e => {
      (0, n.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("57804"), r.e("13599"), r.e("70018"), r.e("49049"), r.e("36599"), r.e("7654"), r.e("76692"), r.e("8271"), r.e("15851"), r.e("51453"), r.e("845"), r.e("38697"), r.e("86736"), r.e("6850"), r.e("58227"), r.e("63575"), r.e("62856"), r.e("44686"), r.e("384"), r.e("66201"), r.e("93375"), r.e("39206"), r.e("22516"), r.e("18295"), r.e("87154"), r.e("33213"), r.e("7756")]).then(r.bind(r, 545135));
        return t => {
          var r, s;
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
          }({}, t), s = s = {
            guild: g
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              r.push.apply(r, i)
            }
            return r
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e))
          }), r))
        }
      })
    },
    children: [(0, i.jsx)(c.Z, {
      tabIndex: false,
      guild: g,
      showBadge: true,
      className: null != g.icon ? m.icon : m.noIcon,
      badgeStrokeColor: (0, o.Lq)((0, a.wj)(O) ? h.Ilk.PRIMARY_600 : h.Ilk.WHITE_500),
      badgeTooltipColor: l.r6K.PRIMARY,
      badgeTooltipDelay: f.vB,
      size: c.Z.Sizes.MEDIUM,
      active: true
    }), (0, i.jsxs)("div", {
      className: m.details,
      children: [(0, i.jsx)("div", {
        className: m.name,
        children: g.name
      }), I && (0, i.jsxs)("div", {
        className: m.nick,
        children: [(0, i.jsx)(l.qEK, {
          src: t.getAvatarURL(g.id, v),
          size: l.EFr.SIZE_16,
          className: m.avatar,
          "aria-hidden": true
        }), (0, i.jsx)(l.Text, {
          variant: "text-xs/medium",
          children: (0, i.jsx)(s.Z, {
            delay: f.vB,
            children: null != j ? j : u.ZP.getName(g.id, true, t)
          })
        })]
      }), !I && null != j && (0, i.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: (0, i.jsx)(s.Z, {
          delay: f.vB,
          children: j
        })
      })]
    })]
  })
}