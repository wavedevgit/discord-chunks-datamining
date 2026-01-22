/** Chunk was on 98363 **/
/** chunk id: 365940, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk91871 = require("./91871.js"),
  c = require.n(Chunk91871),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk154672 = require("./154672.js"),
  Chunk198982 = require("./198982.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk860689 = require("./860689.js"),
  Chunk330936 = require("./330936.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk292750 = require("./292750.js"),
  Chunk906471 = require("./906471.js");

function E(e) {
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

function v(e, t) {
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

function I(e) {
  var t;
  let {
    guildInfo: r,
    onClick: l,
    submitting: i
  } = e, o = null != (t = b.Ay.getGuildIconURL({
    id: r.id,
    icon: r.icon,
    size: 40
  })) ? t : true;
  return (0, n.jsxs)(u.DUT, {
    className: m.oG,
    onClick: l,
    children: [(0, n.jsx)(f.Ay, {
      mask: f.Ay.Masks.AVATAR_DEFAULT,
      width: 40,
      height: 40,
      children: (0, n.jsx)(O.A, {
        className: m.$f,
        iconSrc: o,
        guild: (0, d.yF)(v(E({}, r), {
          features: []
        })),
        size: O.A.Sizes.MEDIUM
      })
    }), (0, n.jsx)(u.Text, {
      className: m.J5,
      variant: "text-md/semibold",
      children: r.name
    }), i ? (0, n.jsx)(u.y$y, {
      type: u.y$y.Type.PULSING_ELLIPSIS
    }) : (0, n.jsx)("img", {
      alt: "",
      src: h
    })]
  })
}
let S = e => {
  let {
    setStep: t,
    email: r,
    guildsInfo: i,
    setGuildId: a
  } = e, f = function(e, t) {
    if (null == e) return {};
    var r, n, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          i = Object.getOwnPropertyNames(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }(e, ["setStep", "email", "guildsInfo", "setGuildId"]), [O, b] = l.useState(null), [d, h] = l.useState(true), [S, w] = l.useState(null), P = () => t(g.Di.SUBMIT_SCHOOL), A = i;
  return null != d && "" !== d && (A = i.filter(e => c()(d.toLowerCase(), e.name.toLowerCase()))), (0, n.jsx)(s.Modal, v(E({}, f), {
    title: j.intl.string(j.t.mOMeiR),
    subtitle: j.intl.format(j.t.dZeiTJ, {
      onJoinWaitlist: P
    }),
    input: (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(u.IWV, {
        placeholder: j.intl.string(j.t["5h0QOP"]),
        onChange: e => {
          h(e)
        },
        "aria-label": j.intl.string(j.t["5h0QOP"]),
        query: null != d ? d : "",
        onClear: () => {
          h(true)
        }
      }), (0, n.jsx)(u.Text, {
        color: "text-feedback-critical",
        variant: "text-xs/normal",
        children: null == O ? true : O.getAnyErrorMessage()
      })]
    }),
    actions: [],
    children: A.length > 0 ? (0, n.jsx)("div", {
      className: m.vQ,
      children: A.map(e => {
        let l;
        return true === e ? null : (0, n.jsx)(I, {
          guildInfo: e,
          onClick: (l = e.id, async () => {
            b(null), a(l), w(l);
            try {
              await p.A.sendVerificationEmail(r, true, l), t(g.Di.VERIFY_PIN)
            } catch (e) {
              b(new y.LG(e))
            } finally {
              w(null)
            }
          }),
          submitting: S === e.id
        }, e.id)
      })
    }) : (0, n.jsx)("div", {
      className: m.pb,
      children: (0, n.jsxs)("div", {
        className: m.rv,
        children: [(0, n.jsx)(u.Heading, {
          className: o()(m.He, m.wx),
          variant: "heading-xl/semibold",
          children: j.intl.string(j.t["1eUrDc"])
        }), (0, n.jsx)(u.Text, {
          className: m.He,
          variant: "text-md/normal",
          children: j.intl.format(j.t.flgDKM, {
            onJoinWaitlist: P
          })
        })]
      })
    })
  }))
}