/** Chunk was on 28090 **/
/** chunk id: 779457, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk139033 = require("./139033.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk303612 = require("./303612.jsx"),
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

function O(t) {
  let {
    guildProductListing: e,
    guildId: n,
    skuPricePreview: r
  } = t, i = (0, b.z)(e), s = (0, g.$g)(r.amount, r.currency), a = (0, o.bG)([j.A], () => j.A.getGuild(n));
  return c()(null != a, "guild cannot be null"), (0, l.jsxs)("div", {
    className: K.Tp,
    children: [(0, l.jsx)(h.A, {
      alt: "",
      className: K.$E,
      listing: e,
      imageSize: 100
    }), (0, l.jsxs)("div", {
      className: K.Vr,
      children: [(0, l.jsx)(m.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: e.name
      }), (0, l.jsx)(m.hKd, {
        size: 4
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 1,
          children: i
        }), (0, l.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 1,
          children: a.name
        })]
      })]
    }), (0, l.jsxs)("div", {
      className: K.$8,
      children: [(0, l.jsx)(m.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: s
      }), (0, l.jsx)(m.hKd, {
        size: 4
      }), (0, l.jsx)(m.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: A.intl.string(A.t["5dWOZX"])
      })]
    })]
  })
}

function T(t) {
  var e;
  let {
    guildProductListing: n,
    guildId: r
  } = t, i = null != (e = n.attachments) ? e : [], a = i.length > 1, c = (0, z.A)({
    guildId: r,
    productId: n.id
  });
  return 0 === i.length ? null : (0, l.jsx)(_.A, {
    label: A.intl.string(A.t.HOkHPB),
    children: (0, l.jsxs)("div", {
      className: s()(K.KK, {
        [K.Oy]: a
      }),
      children: [(0, l.jsx)("div", {
        className: K.yO,
        children: i.map(t => (0, l.jsx)(y.A, {
          attachment: t
        }, t.id))
      }), (0, l.jsx)("div", {
        children: (0, l.jsx)(x.$nd, function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), l.forEach(function(e) {
              var l;
              l = n[e], e in t ? Object.defineProperty(t, e, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t[e] = l
            })
          }
          return t
        }({}, c))
      })]
    })
  })
}

function P(t) {
  let {
    role: e
  } = t;
  return null == e ? null : (0, l.jsx)(_.A, {
    label: A.intl.string(A.t.gWBNet),
    children: (0, l.jsx)(N.A, {
      role: e
    })
  })
}

function C(t) {
  return (0, l.jsx)(m.Text, {
    tag: "span",
    variant: "text-md/semibold",
    color: "text-default",
    children: t
  })
}

function k(t) {
  var e;
  let {
    onClose: n,
    transitionState: i,
    guildProductListingId: s,
    guildId: a,
    skuPricePreview: x
  } = t, h = (0, o.bG)([p.A], () => p.A.getGuildProduct(s));
  c()(null != h, "guildProductListing cannot be null");
  let [j, g] = r.useState(false);
  r.useEffect(() => {
    !async function() {
      try {
        g(true), await (0, v.py)(a, s), g(false)
      } catch (t) {
        n(), (0, u.A)({
          title: A.intl.string(A.t.OCwKlu),
          subtitle: A.intl.string(A.t.VQ0lXY),
          confirmText: A.intl.string(A.t["NX+WJN"])
        })
      }
    }()
  }, [a, s, n]);
  let b = (null != (e = h.attachments) ? e : []).length > 0,
    y = h.role_id,
    _ = (0, o.bG)([f.A], () => null != y ? f.A.getRole(a, y) : true);
  return (0, l.jsx)(d.Modal, {
    title: A.intl.string(A.t.dhAgv3),
    subtitle: A.intl.format(A.t.X6yvvo, {
      productName: h.name,
      emphasisHook: C
    }),
    onClose: n,
    transitionState: i,
    size: "md",
    actions: [],
    children: j ? (0, l.jsx)(m.y$y, {}) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(m.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: [b ? A.intl.string(A.t["A/RnkK"]) + " " : "", null != _ ? A.intl.format(A.t.IeJDKs, {
          roleName: _.name,
          emphasisHook: C
        }) : ""]
      }), (0, l.jsx)(m.hKd, {
        size: 12
      }), (0, l.jsx)(m.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: A.intl.string(A.t["9S3QHF"])
      }), (0, l.jsx)(m.hKd, {
        size: 24
      }), (0, l.jsx)(O, {
        guildProductListing: h,
        guildId: a,
        skuPricePreview: x
      }), (0, l.jsx)(m.hKd, {
        size: 32
      }), (0, l.jsx)("div", {
        className: K.yF
      }), (0, l.jsx)(m.hKd, {
        size: 32
      }), (0, l.jsxs)("ul", {
        className: K.iq,
        children: [(0, l.jsx)(T, {
          guildProductListing: h,
          guildId: a
        }), (0, l.jsx)(P, {
          role: _
        })]
      })]
    })
  })
}