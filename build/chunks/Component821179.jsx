/** Chunk was on 71832 **/
/** chunk id: 821179, original params: e,t,n (module,exports,require) **/
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
  Chunk163514 = require("./163514.js");
let m = (0, Chunk481060.pxk)(Chunk481060.EFr.SIZE_16);

function b(e) {
  let {
    user: t,
    guild: b,
    nick: O,
    onSelect: y
  } = e, {
    theme: _,
    themeType: v
  } = (0, d.z)(), j = t.hasAvatarForGuild(b.id);
  return (0, r.jsxs)(l.P3F, {
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
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("57804"), n.e("1806"), n.e("36599"), n.e("60962"), n.e("58175"), n.e("55616"), n.e("7654"), n.e("44156"), n.e("49049"), n.e("8360"), n.e("6850"), n.e("58227"), n.e("54408"), n.e("90746"), n.e("38697"), n.e("54052"), n.e("79381"), n.e("64679"), n.e("39206"), n.e("20303"), n.e("56534"), n.e("87154"), n.e("33213"), n.e("13056")]).then(n.bind(n, 545135));
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
      badgeStrokeColor: (0, a.Lq)((0, i.wj)(_) ? f.Ilk.PRIMARY_600 : f.Ilk.WHITE_500),
      badgeTooltipColor: l.FGA.PRIMARY,
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
        children: [(0, r.jsx)(l.qEK, {
          src: t.getAvatarURL(b.id, m),
          size: l.EFr.SIZE_16,
          className: g.avatar,
          "aria-hidden": true
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          children: (0, r.jsx)(s.Z, {
            delay: p.vB,
            children: null != O ? O : u.ZP.getName(b.id, true, t)
          })
        })]
      }), !j && null != O && (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: (0, r.jsx)(s.Z, {
          delay: p.vB,
          children: O
        })
      })]
    })]
  })
}