/** Chunk was on 31924 **/
/** chunk id: 625651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk14263 = require("./14263.js"),
  Chunk650774 = require("./650774.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk870246 = require("./870246.js"),
  Chunk158638 = require("./158638.js"),
  Chunk795338 = require("./795338.jsx"),
  Chunk17622 = require("./17622.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk514186 = require("./514186.js");

function j(e) {
  var t, n, {
      guildId: j,
      powerup: _
    } = e,
    I = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["guildId", "powerup"]);
  let {
    onDeactivate: O,
    error: C,
    isLoading: T
  } = (0, x.ZP)(j, _), {
    onClose: N
  } = I, y = o.useCallback(e => {
    O(e).then(() => {
      null == N || N()
    })
  }, [N, O]), E = function(e, t) {
    let n = (0, i.e7)([l.Z], () => l.Z.getMemberCount(e)),
      m = (0, c.Z)(e),
      b = (0, i.e7)([u.Z], () => {
        var t;
        return (null == (t = u.Z.getGuild(e)) ? true : t.vanityURLCode) != null
      }),
      p = (0, f.g1)(e, "Powerup Deactivate Modal"),
      x = (0, i.e7)([d.Z], () => t.skuId !== a.If || null == m ? 0 : d.Z.getSortedRoles(e).reduce((e, t) => {
        var n, r;
        return (null == (n = t.colorStrings) ? true : n.secondaryColor) == null ? e : e + (null != (r = m[t.id]) ? r : 0)
      }, 0), [e, t.skuId, m]);
    return o.useMemo(() => {
      let e;
      switch (t.skuId) {
        case a.If:
          e = x > 0 ? v.intl.formatToPlainString(k.default["4jSvr6"], {
            perk: t.title,
            memberCount: x
          }) : v.intl.formatToPlainString(k.default.cavtEh, {
            perk: t.title
          });
          break;
        case a.A$:
          e = b ? (0, r.jsx)(s.Text, {
            color: "text-danger",
            variant: "text-sm/semibold",
            children: v.intl.string(k.default.hN75yc)
          }) : (0, r.jsx)(s.Text, {
            color: "text-danger",
            variant: "text-sm/semibold",
            children: v.intl.string(k.default.Du91RU)
          });
          break;
        case a.MB:
        case a.Vk:
          e = v.intl.string(k.default.Vf2ZcX);
          break;
        default:
          e = v.intl.formatToPlainString(k.default["4jSvr6"], {
            perk: t.title,
            memberCount: n
          })
      }
      return b && t.skuId === a.XW && (e = (0, r.jsxs)(r.Fragment, {
        children: [e, (0, r.jsx)(s.Text, {
          color: "text-danger",
          variant: "text-sm/semibold",
          children: p ? v.intl.string(k.default.TkNA7e) : v.intl.string(k.default.M4XL5u)
        })]
      })), e
    }, [t, x, n, b, p])
  }(j, _);
  return (0, m.$)(j, _, m.w.DEACTIVATE), (0, r.jsxs)(s.Y0X, (t = function(e) {
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
  }({
    className: h.modal,
    size: _.type === g.Us.LEVEL ? s.CgR.MEDIUM : s.CgR.SMALL
  }, I), n = n = {
    parentComponent: "GuildPowerupDeactivateModal",
    children: [(0, r.jsxs)(s.hzk, {
      className: h.modalContentContainer,
      scrollbarType: "none",
      children: [(0, r.jsxs)("div", {
        className: h.headerContainer,
        children: [(0, r.jsxs)("div", {
          className: h.header,
          children: [(0, r.jsx)(s.X6q, {
            variant: "heading-md/semibold",
            children: v.intl.formatToPlainString(k.default.iEBw1N, {
              perk: _.title
            })
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: v.intl.formatToPlainString(k.default["7o0K+/"], {
              perk: _.title
            })
          })]
        }), (0, r.jsx)(s.olH, {
          onClick: I.onClose
        })]
      }), (() => {
        switch (_.type) {
          case g.Us.LEVEL:
            return (0, r.jsx)(p.Z, {
              powerup: _
            });
          case g.Us.PERK:
            return (0, r.jsx)(b.m, {
              className: h.image,
              powerup: _
            })
        }
      })(), (0, r.jsxs)("div", {
        className: h.warningContainer,
        children: [(0, r.jsx)(s.Text, {
          color: "text-danger",
          variant: "eyebrow",
          children: v.intl.string(k.default.OVt5CA)
        }), (0, r.jsx)(s.Text, {
          className: h.warningText,
          tag: "span",
          variant: "text-sm/medium",
          children: E
        })]
      }), null != C && (0, r.jsx)(s.Text, {
        className: h.errorText,
        color: "text-danger",
        variant: "text-sm/semibold",
        children: C
      })]
    }), (0, r.jsxs)(s.mzw, {
      className: h.footer,
      children: [(0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: h.button,
        children: (0, r.jsx)(s.zxk, {
          variant: "critical-primary",
          text: v.intl.string(k.default.PYPdl5),
          loading: T,
          onClick: y
        })
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: h.button,
        children: (0, r.jsx)(s.zxk, {
          variant: "secondary",
          text: v.intl.string(v.t["ETE/oK"]),
          onClick: I.onClose
        })
      })]
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}