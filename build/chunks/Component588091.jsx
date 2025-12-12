/** Chunk was on 16359 **/
/** chunk id: 588091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk693789 = require("./693789.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809086 = require("./809086.jsx"),
  Chunk599456 = require("./599456.jsx"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk937615 = require("./937615.js"),
  Chunk495437 = require("./495437.js"),
  Chunk240864 = require("./240864.js"),
  Chunk942833 = require("./942833.js"),
  Chunk598952 = require("./598952.jsx"),
  Chunk392739 = require("./392739.jsx"),
  Chunk916001 = require("./916001.jsx"),
  Chunk298243 = require("./298243.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800372 = require("./800372.js");

function O(e) {
  let {
    guildProductListing: t,
    guildId: n,
    skuPricePreview: a
  } = e, i = (0, y.C)(t), l = (0, g.T4)(a.amount, a.currency), s = (0, u.e7)([v.Z], () => v.Z.getGuild(n));
  return c()(null != s, "guild cannot be null"), (0, r.jsxs)("div", {
    className: S.purchaseSummaryContainer,
    children: [(0, r.jsx)(f.Z, {
      alt: "",
      className: S.purchaseSummaryImage,
      listing: t,
      imageSize: 100
    }), (0, r.jsxs)("div", {
      className: S.purchaseSummarInfo,
      children: [(0, r.jsx)(x.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: t.name
      }), (0, r.jsx)(x.LZC, {
        size: 4
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(x.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 1,
          children: i
        }), (0, r.jsx)(x.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 1,
          children: s.name
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: S.purchaseSummaryPrice,
      children: [(0, r.jsx)(x.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: l
      }), (0, r.jsx)(x.LZC, {
        size: 4
      }), (0, r.jsx)(x.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: z.intl.string(z.t["5dWOZX"])
      })]
    })]
  })
}

function P(e) {
  var t;
  let {
    guildProductListing: n,
    guildId: a
  } = e, i = null != (t = n.attachments) ? t : [], s = i.length > 1, c = (0, _.Z)({
    guildId: a,
    productId: n.id
  });
  return 0 === i.length ? null : (0, r.jsx)(Z.Z, {
    label: z.intl.string(z.t.HOkHPB),
    children: (0, r.jsxs)("div", {
      className: l()(S.attachmentsContainer, {
        [S.attachmentsContainerMultiple]: s
      }),
      children: [(0, r.jsx)("div", {
        className: S.attachmentGrid,
        children: i.map(e => (0, r.jsx)(C.Z, {
          attachment: e
        }, e.id))
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(m.zxk, function(e) {
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
        }({}, c))
      })]
    })
  })
}

function L(e) {
  let {
    role: t
  } = e;
  return null == t ? null : (0, r.jsx)(Z.Z, {
    label: z.intl.string(z.t.gWBNet),
    children: (0, r.jsx)(N.Z, {
      role: t
    })
  })
}

function w(e) {
  return (0, r.jsx)(x.Text, {
    tag: "span",
    variant: "text-md/semibold",
    color: "text-default",
    children: e
  })
}

function T(e) {
  var t;
  let {
    onClose: n,
    transitionState: i,
    guildProductListingId: l,
    guildId: s,
    skuPricePreview: m
  } = e, f = (0, u.e7)([b.Z], () => b.Z.getGuildProduct(l));
  c()(null != f, "guildProductListing cannot be null");
  let [v, g] = a.useState(false);
  a.useEffect(() => {
    !async function() {
      try {
        g(true), await (0, p.cf)(s, l), g(false)
      } catch (e) {
        n(), (0, h.Z)({
          body: z.intl.string(z.t.VQ0lXY),
          confirmText: z.intl.string(z.t["NX+WJN"]),
          header: z.intl.string(z.t.OCwKlu),
          confirmButtonColor: d.zx.Colors.BRAND
        })
      }
    }()
  }, [s, l, n]);
  let y = (null != (t = f.attachments) ? t : []).length > 0,
    C = f.role_id,
    Z = (0, u.e7)([j.Z], () => null != C ? j.Z.getRole(s, C) : true);
  return (0, r.jsx)(o.Modal, {
    title: z.intl.string(z.t.dhAgv3),
    subtitle: z.intl.format(z.t.X6yvvo, {
      productName: f.name,
      emphasisHook: w
    }),
    onClose: n,
    transitionState: i,
    size: "md",
    actions: [],
    children: v ? (0, r.jsx)(x.$jN, {}) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(x.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: [y ? z.intl.string(z.t["A/RnkK"]) + " " : "", null != Z ? z.intl.format(z.t.IeJDKs, {
          roleName: Z.name,
          emphasisHook: w
        }) : ""]
      }), (0, r.jsx)(x.LZC, {
        size: 12
      }), (0, r.jsx)(x.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: z.intl.string(z.t["9S3QHF"])
      }), (0, r.jsx)(x.LZC, {
        size: 24
      }), (0, r.jsx)(O, {
        guildProductListing: f,
        guildId: s,
        skuPricePreview: m
      }), (0, r.jsx)(x.LZC, {
        size: 32
      }), (0, r.jsx)("div", {
        className: S.divider
      }), (0, r.jsx)(x.LZC, {
        size: 32
      }), (0, r.jsxs)("ul", {
        className: S.benefitsContainer,
        children: [(0, r.jsx)(P, {
          guildProductListing: f,
          guildId: s
        }), (0, r.jsx)(L, {
          role: Z
        })]
      })]
    })
  })
}