/** Chunk was on 28090 **/
/** chunk id: 779457, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk862482 = require("./862482.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk303612 = require("./303612.jsx"),
  Chunk282125 = require("./282125.jsx"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk580630 = require("./580630.js"),
  Chunk912702 = require("./912702.js"),
  Chunk871109 = require("./871109.js"),
  Chunk571654 = require("./571654.js"),
  Chunk59375 = require("./59375.jsx"),
  Chunk391442 = require("./391442.jsx"),
  Chunk411342 = require("./411342.jsx"),
  Chunk179499 = require("./179499.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk560381 = require("./560381.js");

function w(t) {
  let {
    guildProductListing: e,
    guildId: n,
    skuPricePreview: l
  } = t, a = (0, y.z)(e), i = (0, g.$g)(l.amount, l.currency), s = (0, o.bG)([b.A], () => b.A.getGuild(n));
  return c()(null != s, "guild cannot be null"), (0, r.jsxs)("div", {
    className: P.Tp,
    children: [(0, r.jsx)(h.A, {
      alt: "",
      className: P.$E,
      listing: e,
      imageSize: 100
    }), (0, r.jsxs)("div", {
      className: P.Vr,
      children: [(0, r.jsx)(m.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: e.name
      }), (0, r.jsx)(m.hKd, {
        size: 4
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 1,
          children: a
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 1,
          children: s.name
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: P.$8,
      children: [(0, r.jsx)(m.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: i
      }), (0, r.jsx)(m.hKd, {
        size: 4
      }), (0, r.jsx)(m.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: K.intl.string(K.t["5dWOZX"])
      })]
    })]
  })
}

function T(t) {
  var e;
  let {
    guildProductListing: n,
    guildId: l
  } = t, a = null != (e = n.attachments) ? e : [], s = a.length > 1, c = (0, N.A)({
    guildId: l,
    productId: n.id
  });
  return 0 === a.length ? null : (0, r.jsx)(z.A, {
    label: K.intl.string(K.t.HOkHPB),
    children: (0, r.jsxs)("div", {
      className: i()(P.KK, {
        [P.Oy]: s
      }),
      children: [(0, r.jsx)("div", {
        className: P.yO,
        children: a.map(t => (0, r.jsx)(O.A, {
          attachment: t
        }, t.id))
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(x.$nd, function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), r.forEach(function(e) {
              var r;
              r = n[e], e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t[e] = r
            })
          }
          return t
        }({}, c))
      })]
    })
  })
}

function _(t) {
  let {
    role: e
  } = t;
  return null == e ? null : (0, r.jsx)(z.A, {
    label: K.intl.string(K.t.gWBNet),
    children: (0, r.jsx)(A.A, {
      role: e
    })
  })
}

function k(t) {
  return (0, r.jsx)(m.Text, {
    tag: "span",
    variant: "text-md/semibold",
    color: "text-default",
    children: t
  })
}

function C(t) {
  var e;
  let {
    onClose: n,
    transitionState: a,
    guildProductListingId: i,
    guildId: s,
    skuPricePreview: x
  } = t, h = (0, o.bG)([p.A], () => p.A.getGuildProduct(i));
  c()(null != h, "guildProductListing cannot be null");
  let [b, g] = l.useState(false);
  l.useEffect(() => {
    !async function() {
      try {
        g(true), await (0, v.py)(s, i), g(false)
      } catch (t) {
        n(), (0, j.A)({
          body: K.intl.string(K.t.VQ0lXY),
          confirmText: K.intl.string(K.t["NX+WJN"]),
          header: K.intl.string(K.t.OCwKlu),
          confirmButtonColor: u.$n.Colors.BRAND
        })
      }
    }()
  }, [s, i, n]);
  let y = (null != (e = h.attachments) ? e : []).length > 0,
    O = h.role_id,
    z = (0, o.bG)([f.A], () => null != O ? f.A.getRole(s, O) : true);
  return (0, r.jsx)(d.Modal, {
    title: K.intl.string(K.t.dhAgv3),
    subtitle: K.intl.format(K.t.X6yvvo, {
      productName: h.name,
      emphasisHook: k
    }),
    onClose: n,
    transitionState: a,
    size: "md",
    actions: [],
    children: b ? (0, r.jsx)(m.y$y, {}) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(m.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: [y ? K.intl.string(K.t["A/RnkK"]) + " " : "", null != z ? K.intl.format(K.t.IeJDKs, {
          roleName: z.name,
          emphasisHook: k
        }) : ""]
      }), (0, r.jsx)(m.hKd, {
        size: 12
      }), (0, r.jsx)(m.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: K.intl.string(K.t["9S3QHF"])
      }), (0, r.jsx)(m.hKd, {
        size: 24
      }), (0, r.jsx)(w, {
        guildProductListing: h,
        guildId: s,
        skuPricePreview: x
      }), (0, r.jsx)(m.hKd, {
        size: 32
      }), (0, r.jsx)("div", {
        className: P.yF
      }), (0, r.jsx)(m.hKd, {
        size: 32
      }), (0, r.jsxs)("ul", {
        className: P.iq,
        children: [(0, r.jsx)(T, {
          guildProductListing: h,
          guildId: s
        }), (0, r.jsx)(_, {
          role: z
        })]
      })]
    })
  })
}