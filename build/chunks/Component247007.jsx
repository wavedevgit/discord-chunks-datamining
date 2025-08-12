/** Chunk was on 95468 **/
/** chunk id: 247007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk411198 = require("./411198.js"),
  Chunk888592 = require("./888592.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk622974 = require("./622974.js"),
  Chunk216019 = require("./216019.js");

function N(e) {
  var t, n, l;
  let {
    guildInfo: i,
    onClick: a,
    submitting: s
  } = e, o = null != (t = f.ZP.getGuildIconURL({
    id: i.id,
    icon: i.icon,
    size: 40
  })) ? t : true;
  return (0, r.jsxs)(c.P3F, {
    className: _.clickableGuildInfoRow,
    onClick: a,
    children: [(0, r.jsx)(m.ZP, {
      mask: m.ZP.Masks.AVATAR_DEFAULT,
      width: 40,
      height: 40,
      children: (0, r.jsx)(h.Z, {
        className: _.guildIcon,
        iconSrc: o,
        guild: (0, x.yS)((n = function(e) {
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
        }({}, i), l = l = {
          features: []
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n)),
        size: h.Z.Sizes.MEDIUM
      })
    }), (0, r.jsx)(c.Text, {
      className: _.guildName,
      variant: "text-md/semibold",
      children: i.name
    }), s ? (0, r.jsx)(c.$jN, {
      type: c.$jN.Type.PULSING_ELLIPSIS
    }) : (0, r.jsx)("img", {
      className: _.__invalid_arrow,
      alt: "",
      src: v
    })]
  })
}
let E = e => {
  let {
    setStep: t,
    email: n,
    guildsInfo: i,
    setGuildId: s,
    forceGuildScrollHeight: m
  } = e, [h, f] = l.useState(null), [x, v] = l.useState(true), [E, S] = l.useState(null), y = e => async () => {
    f(null), s(e), S(e);
    try {
      await d.Z.sendVerificationEmail(n, true, e), t(p.tF.VERIFY_PIN)
    } catch (e) {
      f(new u.Hx(e))
    } finally {
      S(null)
    }
  }, j = () => t(p.tF.SUBMIT_SCHOOL), I = i;
  return null != x && "" !== x && (I = i.filter(e => o()(x.toLowerCase(), e.name.toLowerCase()))), (0, r.jsxs)("div", {
    className: _.container,
    children: [(0, r.jsx)(c.X6q, {
      className: a()(_.centerText, _.header),
      variant: "heading-xl/semibold",
      children: g.intl.string(g.t.mOMeiY)
    }), (0, r.jsx)("div", {
      className: _.description,
      children: (0, r.jsx)(c.Text, {
        className: _.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: g.intl.format(g.t.dZeiTE, {
          onJoinWaitlist: j
        })
      })
    }), (0, r.jsxs)("div", {
      className: a()(_.guildList, {
        [_.forcedHeight]: m
      }),
      children: [(0, r.jsxs)("div", {
        className: _.searchContainer,
        children: [(0, r.jsx)(c.Rj2, {
          placeholder: g.intl.string(g.t["5h0QOD"]),
          className: _.searchBox,
          inputClassName: _.searchBoxInput,
          searchIconClassName: _.searchBoxIcon,
          closeIconClassName: _.searchBoxIcon,
          onChange: e => {
            v(e)
          },
          label: g.intl.string(g.t["5h0QOD"]),
          searchTerm: x,
          onClear: () => {
            v(true)
          }
        }), (0, r.jsx)(c.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          children: null == h ? true : h.getAnyErrorMessage()
        })]
      }), I.length > 0 ? (0, r.jsx)(c.zJl, {
        className: _.scroller,
        children: I.map(e => true === e ? null : (0, r.jsx)(N, {
          guildInfo: e,
          onClick: y(e.id),
          submitting: E === e.id
        }, e.id))
      }) : (0, r.jsx)("div", {
        className: _.noResultsContainer,
        children: (0, r.jsxs)("div", {
          className: _.noResultsContent,
          children: [(0, r.jsx)("div", {
            className: _.noResultsImage
          }), (0, r.jsx)(c.X6q, {
            className: a()(_.centerText, _.header),
            variant: "heading-xl/semibold",
            children: g.intl.string(g.t["1eUrDQ"])
          }), (0, r.jsx)(c.Text, {
            className: _.centerText,
            variant: "text-md/normal",
            children: g.intl.format(g.t.flgDKC, {
              onJoinWaitlist: j
            })
          })]
        })
      })]
    })]
  })
}