/** Chunk was on 72651 **/
/** chunk id: 821179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
let b = (0, Chunk481060.pxk)(Chunk481060.EFr.SIZE_16);

function y(e) {
  let {
    user: t,
    guild: y,
    nick: h,
    onSelect: v
  } = e, {
    theme: O,
    themeType: j
  } = (0, d.z)(), x = t.hasAvatarForGuild(y.id);
  return (0, r.jsxs)(l.P3F, {
    focusProps: j === p.l.MODAL_V2 ? {
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
    onClick: v,
    onContextMenu: e => {
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("57804"), n.e("13599"), n.e("36599"), n.e("49049"), n.e("38697"), n.e("76692"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("7654"), n.e("63575"), n.e("845"), n.e("86736"), n.e("6850"), n.e("58227"), n.e("93375"), n.e("62856"), n.e("44686"), n.e("30378"), n.e("64982"), n.e("66201"), n.e("67807"), n.e("22516"), n.e("87154"), n.e("33213"), n.e("94512")]).then(n.bind(n, 545135));
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
            guild: y
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
    children: [(0, r.jsx)(s.Z, {
      tabIndex: false,
      guild: y,
      showBadge: true,
      className: null != y.icon ? m.icon : m.noIcon,
      badgeStrokeColor: (0, c.Lq)((0, a.wj)(O) ? g.Ilk.PRIMARY_600 : g.Ilk.WHITE_500),
      badgeTooltipColor: l.r6K.PRIMARY,
      badgeTooltipDelay: f.vB,
      size: s.Z.Sizes.MEDIUM,
      active: true
    }), (0, r.jsxs)("div", {
      className: m.details,
      children: [(0, r.jsx)("div", {
        className: m.name,
        children: y.name
      }), x && (0, r.jsxs)("div", {
        className: m.nick,
        children: [(0, r.jsx)(l.qEK, {
          src: t.getAvatarURL(y.id, b),
          size: l.EFr.SIZE_16,
          className: m.avatar,
          "aria-hidden": true
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          children: (0, r.jsx)(i.Z, {
            delay: f.vB,
            children: null != h ? h : u.ZP.getName(y.id, true, t)
          })
        })]
      }), !x && null != h && (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(i.Z, {
          delay: f.vB,
          children: h
        })
      })]
    })]
  })
}