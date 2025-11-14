/** Chunk was on 65354 **/
/** chunk id: 821179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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

function b(e) {
  let {
    user: t,
    guild: b,
    nick: _,
    onSelect: y
  } = e, {
    theme: O,
    themeType: v
  } = (0, d.z)(), j = t.hasAvatarForGuild(b.id);
  return (0, r.jsxs)(o.P3F, {
    focusProps: v === h.l.MODAL_V2 ? {
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
    className: g.row,
    onClick: y,
    onContextMenu: e => {
      (0, a.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("13599"), n.e("57804"), n.e("70018"), n.e("49049"), n.e("36599"), n.e("7654"), n.e("76692"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("38697"), n.e("86736"), n.e("6850"), n.e("58227"), n.e("63575"), n.e("62856"), n.e("44686"), n.e("384"), n.e("66201"), n.e("93375"), n.e("39206"), n.e("22516"), n.e("18295"), n.e("87154"), n.e("33213"), n.e("7756")]).then(n.bind(n, 545135));
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
            guild: b
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
      guild: b,
      showBadge: true,
      className: null != b.icon ? g.icon : g.noIcon,
      badgeStrokeColor: (0, s.Lq)((0, l.wj)(O) ? f.Ilk.PRIMARY_600 : f.Ilk.WHITE_500),
      badgeTooltipColor: o.r6K.PRIMARY,
      badgeTooltipDelay: p.vB,
      size: c.Z.Sizes.MEDIUM,
      active: true
    }), (0, r.jsxs)("div", {
      className: g.details,
      children: [(0, r.jsx)("div", {
        className: g.name,
        children: b.name
      }), j && (0, r.jsxs)("div", {
        className: g.nick,
        children: [(0, r.jsx)(o.qEK, {
          src: t.getAvatarURL(b.id, m),
          size: o.EFr.SIZE_16,
          className: g.avatar,
          "aria-hidden": true
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: (0, r.jsx)(i.Z, {
            delay: p.vB,
            children: null != _ ? _ : u.ZP.getName(b.id, true, t)
          })
        })]
      }), !j && null != _ && (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(i.Z, {
          delay: p.vB,
          children: _
        })
      })]
    })]
  })
}