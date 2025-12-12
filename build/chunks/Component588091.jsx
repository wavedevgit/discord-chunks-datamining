/** Chunk was on 16359 **/
/** chunk id: 588091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
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
  Chunk826451 = require("./826451.js");

function P(e) {
  let {
    guildProductListing: t,
    guildId: n,
    skuPricePreview: a
  } = e, i = (0, y.C)(t), l = (0, v.T4)(a.amount, a.currency), s = (0, u.e7)([b.Z], () => b.Z.getGuild(n));
  return c()(null != s, "guild cannot be null"), (0, r.jsxs)("div", {
    className: O.purchaseSummaryContainer,
    children: [(0, r.jsx)(x.Z, {
      alt: "",
      className: O.purchaseSummaryImage,
      listing: t,
      imageSize: 100
    }), (0, r.jsxs)("div", {
      className: O.purchaseSummarInfo,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: t.name
      }), (0, r.jsx)(f.LZC, {
        size: 4
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 1,
          children: i
        }), (0, r.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 1,
          children: s.name
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: O.purchaseSummaryPrice,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: l
      }), (0, r.jsx)(f.LZC, {
        size: 4
      }), (0, r.jsx)(f.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: S.intl.string(S.t["5dWOZX"])
      })]
    })]
  })
}

function L(e) {
  var t;
  let {
    guildProductListing: n,
    guildId: a
  } = e, i = null != (t = n.attachments) ? t : [], s = i.length > 1, c = (0, z.Z)({
    guildId: a,
    productId: n.id
  });
  return 0 === i.length ? null : (0, r.jsx)(Z.Z, {
    label: S.intl.string(S.t.HOkHPB),
    children: (0, r.jsxs)("div", {
      className: l()(O.attachmentsContainer, {
        [O.attachmentsContainerMultiple]: s
      }),
      children: [(0, r.jsx)("div", {
        className: O.attachmentGrid,
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

function w(e) {
  let {
    role: t
  } = e;
  return null == t ? null : (0, r.jsx)(Z.Z, {
    label: S.intl.string(S.t.gWBNet),
    children: (0, r.jsx)(N.Z, {
      role: t
    })
  })
}

function T(e) {
  return (0, r.jsx)(f.Text, {
    tag: "span",
    variant: "text-md/semibold",
    color: "text-default",
    children: e
  })
}

function I(e) {
  var t;
  let {
    onClose: n,
    transitionState: i,
    guildProductListingId: l,
    guildId: s,
    skuPricePreview: m
  } = e, x = (0, u.e7)([p.Z], () => p.Z.getGuildProduct(l));
  c()(null != x, "guildProductListing cannot be null");
  let [b, v] = a.useState(false);
  a.useEffect(() => {
    !async function() {
      try {
        v(true), await (0, g.cf)(s, l), v(false)
      } catch (e) {
        n(), (0, h.Z)({
          body: S.intl.string(S.t.VQ0lXY),
          confirmText: S.intl.string(S.t["NX+WJN"]),
          header: S.intl.string(S.t.OCwKlu),
          confirmButtonColor: d.zx.Colors.BRAND
        })
      }
    }()
  }, [s, l, n]);
  let y = (null != (t = x.attachments) ? t : []).length > 0,
    C = x.role_id,
    Z = (0, u.e7)([j.Z], () => null != C ? j.Z.getRole(s, C) : true);
  return (0, r.jsx)(o.Modal, {
    title: S.intl.string(S.t.dhAgv3),
    subtitle: S.intl.format(S.t.X6yvvo, {
      productName: x.name,
      emphasisHook: T
    }),
    onClose: n,
    transitionState: i,
    size: "md",
    actions: [],
    children: b ? (0, r.jsx)(f.$jN, {}) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(f.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: [y ? S.intl.string(S.t["A/RnkK"]) + " " : "", null != Z ? S.intl.format(S.t.IeJDKs, {
          roleName: Z.name,
          emphasisHook: T
        }) : ""]
      }), (0, r.jsx)(f.LZC, {
        size: 12
      }), (0, r.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: S.intl.string(S.t["9S3QHF"])
      }), (0, r.jsx)(f.LZC, {
        size: 24
      }), (0, r.jsx)(P, {
        guildProductListing: x,
        guildId: s,
        skuPricePreview: m
      }), (0, r.jsx)(f.LZC, {
        size: 32
      }), (0, r.jsx)("div", {
        className: O.divider
      }), (0, r.jsx)(f.LZC, {
        size: 32
      }), (0, r.jsxs)("ul", {
        className: O.benefitsContainer,
        children: [(0, r.jsx)(L, {
          guildProductListing: x,
          guildId: s
        }), (0, r.jsx)(w, {
          role: Z
        })]
      })]
    })
  })
}