/** Chunk was on 73289 **/
/** chunk id: 821179, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function O(e) {
  let {
    user: t,
    guild: O,
    nick: y,
    onSelect: g
  } = e, {
    theme: m,
    themeType: _
  } = (0, d.z)(), h = t.hasAvatarForGuild(O.id);
  return (0, i.jsxs)(a.P3F, {
    focusProps: _ === b.l.MODAL_V2 ? {
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
    className: v.row,
    onClick: g,
    onContextMenu: e => {
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("57804"), r.e("13599"), r.e("74318"), r.e("49049"), r.e("36599"), r.e("7654"), r.e("76692"), r.e("8271"), r.e("15851"), r.e("51453"), r.e("845"), r.e("38697"), r.e("63575"), r.e("59077"), r.e("6850"), r.e("58227"), r.e("62856"), r.e("44686"), r.e("30378"), r.e("64982"), r.e("66201"), r.e("93375"), r.e("39206"), r.e("22516"), r.e("89442"), r.e("87154"), r.e("33213"), r.e("74124")]).then(r.bind(r, 545135));
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
            guild: O
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
    children: [(0, i.jsx)(l.Z, {
      tabIndex: false,
      guild: O,
      showBadge: true,
      className: null != O.icon ? v.icon : v.noIcon,
      badgeStrokeColor: (0, c.Lq)((0, n.wj)(m) ? p.Ilk.PRIMARY_600 : p.Ilk.WHITE_500),
      badgeTooltipColor: a.FGA.PRIMARY,
      badgeTooltipDelay: f.vB,
      size: l.Z.Sizes.MEDIUM,
      active: true
    }), (0, i.jsxs)("div", {
      className: v.details,
      children: [(0, i.jsx)("div", {
        className: v.name,
        children: O.name
      }), h && (0, i.jsxs)("div", {
        className: v.nick,
        children: [(0, i.jsx)(a.qEK, {
          src: t.getAvatarURL(O.id, j),
          size: a.EFr.SIZE_16,
          className: v.avatar,
          "aria-hidden": true
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          children: (0, i.jsx)(s.Z, {
            delay: f.vB,
            children: null != y ? y : u.ZP.getName(O.id, true, t)
          })
        })]
      }), !h && null != y && (0, i.jsx)(a.Text, {
        variant: "text-xs/medium",
        children: (0, i.jsx)(s.Z, {
          delay: f.vB,
          children: y
        })
      })]
    })]
  })
}