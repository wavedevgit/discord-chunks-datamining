/** Chunk was on 7082 **/
/** chunk id: 247007, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  c = require.n(Chunk658722),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk411198 = require("./411198.js"),
  Chunk888592 = require("./888592.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk198991 = require("./198991.js"),
  Chunk216019 = require("./216019.js");

function h(e) {
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
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function S(e) {
  var t;
  let {
    guildInfo: r,
    onClick: i,
    submitting: l
  } = e, o = null != (t = y.ZP.getGuildIconURL({
    id: r.id,
    icon: r.icon,
    size: 40
  })) ? t : true;
  return (0, n.jsxs)(u.P3F, {
    className: m.clickableGuildInfoRow,
    onClick: i,
    children: [(0, n.jsx)(O.ZP, {
      mask: O.ZP.Masks.AVATAR_DEFAULT,
      width: 40,
      height: 40,
      children: (0, n.jsx)(p.Z, {
        className: m.guildIcon,
        iconSrc: o,
        guild: (0, b.yS)(E(h({}, r), {
          features: []
        })),
        size: p.Z.Sizes.MEDIUM
      })
    }), (0, n.jsx)(u.Text, {
      className: m.guildName,
      variant: "text-md/semibold",
      children: r.name
    }), l ? (0, n.jsx)(u.$jN, {
      type: u.$jN.Type.PULSING_ELLIPSIS
    }) : (0, n.jsx)("img", {
      alt: "",
      src: v
    })]
  })
}
let I = e => {
  var {
    setStep: t,
    email: r,
    guildsInfo: l,
    setGuildId: a
  } = e, O = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        l = Object.keys(e);
      for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["setStep", "email", "guildsInfo", "setGuildId"]);
  let [p, y] = i.useState(null), [b, v] = i.useState(true), [I, P] = i.useState(null), _ = () => t(g.tF.SUBMIT_SCHOOL), w = l;
  return null != b && "" !== b && (w = l.filter(e => c()(b.toLowerCase(), e.name.toLowerCase()))), (0, n.jsx)(s.Modal, E(h({}, O), {
    title: j.intl.string(j.t.mOMeiR),
    subtitle: j.intl.format(j.t.dZeiTJ, {
      onJoinWaitlist: _
    }),
    input: (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(u.E1j, {
        placeholder: j.intl.string(j.t["5h0QOP"]),
        onChange: e => {
          v(e)
        },
        "aria-label": j.intl.string(j.t["5h0QOP"]),
        query: null != b ? b : "",
        onClear: () => {
          v(true)
        }
      }), (0, n.jsx)(u.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        children: null == p ? true : p.getAnyErrorMessage()
      })]
    }),
    actions: [],
    children: w.length > 0 ? (0, n.jsx)("div", {
      className: m.forcedHeight,
      children: w.map(e => {
        let i;
        return true === e ? null : (0, n.jsx)(S, {
          guildInfo: e,
          onClick: (i = e.id, async () => {
            y(null), a(i), P(i);
            try {
              await d.Z.sendVerificationEmail(r, true, i), t(g.tF.VERIFY_PIN)
            } catch (e) {
              y(new f.Hx(e))
            } finally {
              P(null)
            }
          }),
          submitting: I === e.id
        }, e.id)
      })
    }) : (0, n.jsx)("div", {
      className: m.noResultsContainer,
      children: (0, n.jsxs)("div", {
        className: m.noResultsContent,
        children: [(0, n.jsx)(u.Heading, {
          className: o()(m.centerText, m.header),
          variant: "heading-xl/semibold",
          children: j.intl.string(j.t["1eUrDc"])
        }), (0, n.jsx)(u.Text, {
          className: m.centerText,
          variant: "text-md/normal",
          children: j.intl.format(j.t.flgDKM, {
            onJoinWaitlist: _
          })
        })]
      })
    })
  }))
}