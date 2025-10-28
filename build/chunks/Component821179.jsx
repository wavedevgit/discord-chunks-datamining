/** Chunk was on 90995 **/
/** chunk id: 821179, original params: e,t,n (module,exports,require) **/
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
let m = (0, Chunk481060.pxk)(Chunk481060.EFr.SIZE_16);

function g(e) {
  let {
    user: t,
    guild: g,
    nick: j,
    onSelect: _
  } = e, {
    theme: v,
    themeType: y
  } = (0, u.z)(), x = t.hasAvatarForGuild(g.id);
  return (0, r.jsxs)(o.P3F, {
    focusProps: y === f.l.MODAL_V2 ? {
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
    className: h.row,
    onClick: _,
    onContextMenu: e => {
      (0, l.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("57804"), n.e("13599"), n.e("36599"), n.e("49049"), n.e("76692"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("7654"), n.e("845"), n.e("38697"), n.e("63575"), n.e("86736"), n.e("6850"), n.e("58227"), n.e("62856"), n.e("44686"), n.e("30378"), n.e("64982"), n.e("66201"), n.e("93375"), n.e("39206"), n.e("22516"), n.e("89442"), n.e("87154"), n.e("33213"), n.e("7756")]).then(n.bind(n, 545135));
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
            guild: g
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
      guild: g,
      showBadge: true,
      className: null != g.icon ? h.icon : h.noIcon,
      badgeStrokeColor: (0, s.Lq)((0, a.wj)(v) ? p.Ilk.PRIMARY_600 : p.Ilk.WHITE_500),
      badgeTooltipColor: o.r6K.PRIMARY,
      badgeTooltipDelay: b.vB,
      size: c.Z.Sizes.MEDIUM,
      active: true
    }), (0, r.jsxs)("div", {
      className: h.details,
      children: [(0, r.jsx)("div", {
        className: h.name,
        children: g.name
      }), x && (0, r.jsxs)("div", {
        className: h.nick,
        children: [(0, r.jsx)(o.qEK, {
          src: t.getAvatarURL(g.id, m),
          size: o.EFr.SIZE_16,
          className: h.avatar,
          "aria-hidden": true
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: (0, r.jsx)(i.Z, {
            delay: b.vB,
            children: null != j ? j : d.ZP.getName(g.id, true, t)
          })
        })]
      }), !x && null != j && (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(i.Z, {
          delay: b.vB,
          children: j
        })
      })]
    })]
  })
}