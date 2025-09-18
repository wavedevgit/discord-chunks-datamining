/** Chunk was on 46763 **/
/** chunk id: 821179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
let h = (0, Chunk481060.pxk)(Chunk481060.EFr.SIZE_16);

function j(e) {
  let {
    user: t,
    guild: j,
    nick: m,
    onSelect: O
  } = e, {
    theme: y,
    themeType: g
  } = (0, u.z)(), _ = t.hasAvatarForGuild(j.id);
  return (0, r.jsxs)(a.P3F, {
    focusProps: g === f.l.MODAL_V2 ? {
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
    onClick: O,
    onContextMenu: e => {
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("57804"), n.e("36599"), n.e("60962"), n.e("58175"), n.e("55616"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("7654"), n.e("845"), n.e("49049"), n.e("47463"), n.e("6850"), n.e("58227"), n.e("54408"), n.e("38697"), n.e("90746"), n.e("8106"), n.e("79381"), n.e("64679"), n.e("39206"), n.e("10576"), n.e("56534"), n.e("87154"), n.e("33213"), n.e("75449")]).then(n.bind(n, 545135));
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
            guild: j
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
      guild: j,
      showBadge: true,
      className: null != j.icon ? v.icon : v.noIcon,
      badgeStrokeColor: (0, l.Lq)((0, i.wj)(y) ? p.Ilk.PRIMARY_600 : p.Ilk.WHITE_500),
      badgeTooltipColor: a.FGA.PRIMARY,
      badgeTooltipDelay: b.vB,
      size: s.Z.Sizes.MEDIUM,
      active: true
    }), (0, r.jsxs)("div", {
      className: v.details,
      children: [(0, r.jsx)("div", {
        className: v.name,
        children: j.name
      }), _ && (0, r.jsxs)("div", {
        className: v.nick,
        children: [(0, r.jsx)(a.qEK, {
          src: t.getAvatarURL(j.id, h),
          size: a.EFr.SIZE_16,
          className: v.avatar,
          "aria-hidden": true
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/medium",
          children: (0, r.jsx)(c.Z, {
            delay: b.vB,
            children: null != m ? m : d.ZP.getName(j.id, true, t)
          })
        })]
      }), !_ && null != m && (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(c.Z, {
          delay: b.vB,
          children: m
        })
      })]
    })]
  })
}