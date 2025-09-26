/** Chunk was on 74477 **/
/** chunk id: 821179, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
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
let m = (0, Chunk481060.pxk)(Chunk481060.EFr.SIZE_16);

function b(e) {
  let {
    user: t,
    guild: b,
    nick: v,
    onSelect: y
  } = e, {
    theme: O,
    themeType: j
  } = (0, d.z)(), x = t.hasAvatarForGuild(b.id);
  return (0, n.jsxs)(l.P3F, {
    focusProps: j === h.l.MODAL_V2 ? {
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
    onClick: y,
    onContextMenu: e => {
      (0, a.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("57804"), r.e("13599"), r.e("36599"), r.e("7654"), r.e("58175"), r.e("76692"), r.e("8271"), r.e("15851"), r.e("51453"), r.e("845"), r.e("49049"), r.e("63575"), r.e("58511"), r.e("6850"), r.e("58227"), r.e("62856"), r.e("44686"), r.e("38697"), r.e("30378"), r.e("49236"), r.e("66201"), r.e("93375"), r.e("39206"), r.e("22516"), r.e("5007"), r.e("87154"), r.e("33213"), r.e("74124")]).then(r.bind(r, 545135));
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
            guild: b
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
      guild: b,
      showBadge: true,
      className: null != b.icon ? p.icon : p.noIcon,
      badgeStrokeColor: (0, s.Lq)((0, i.wj)(O) ? g.Ilk.PRIMARY_600 : g.Ilk.WHITE_500),
      badgeTooltipColor: l.FGA.PRIMARY,
      badgeTooltipDelay: f.vB,
      size: c.Z.Sizes.MEDIUM,
      active: true
    }), (0, n.jsxs)("div", {
      className: p.details,
      children: [(0, n.jsx)("div", {
        className: p.name,
        children: b.name
      }), x && (0, n.jsxs)("div", {
        className: p.nick,
        children: [(0, n.jsx)(l.qEK, {
          src: t.getAvatarURL(b.id, m),
          size: l.EFr.SIZE_16,
          className: p.avatar,
          "aria-hidden": true
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/medium",
          children: (0, n.jsx)(o.Z, {
            delay: f.vB,
            children: null != v ? v : u.ZP.getName(b.id, true, t)
          })
        })]
      }), !x && null != v && (0, n.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: (0, n.jsx)(o.Z, {
          delay: f.vB,
          children: v
        })
      })]
    })]
  })
}