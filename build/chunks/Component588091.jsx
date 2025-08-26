/** Chunk was on 16359 **/
/** chunk id: 588091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk693789 = require("./693789.jsx"),
  Chunk82659 = require("./82659.jsx"),
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
  Chunk400916 = require("./400916.jsx"),
  Chunk916001 = require("./916001.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800372 = require("./800372.js");

function S(e) {
  let {
    guildProductListing: t,
    guildId: n,
    skuPricePreview: a
  } = e, i = (0, C.C)(t), l = (0, v.T4)(a.amount, a.currency), s = (0, o.e7)([j.Z], () => j.Z.getGuild(n));
  return c()(null != s, "guild cannot be null"), (0, r.jsxs)("div", {
    className: z.purchaseSummaryContainer,
    children: [(0, r.jsx)(x.Z, {
      alt: "",
      className: z.purchaseSummaryImage,
      listing: t,
      imageSize: 100
    }), (0, r.jsxs)("div", {
      className: z.purchaseSummarInfo,
      children: [(0, r.jsx)(m.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: t.name
      }), (0, r.jsx)(m.LZC, {
        size: 4
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 1,
          children: i
        }), (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 1,
          children: s.name
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: z.purchaseSummaryPrice,
      children: [(0, r.jsx)(m.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: l
      }), (0, r.jsx)(m.LZC, {
        size: 4
      }), (0, r.jsx)(m.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: _.intl.string(_.t["5dWOZW"])
      })]
    })]
  })
}

function L(e) {
  var t;
  let {
    guildProductListing: n,
    guildId: a
  } = e, i = null != (t = n.attachments) ? t : [], s = i.length > 1;
  return 0 === i.length ? null : (0, r.jsx)(Z.Z, {
    label: _.intl.string(_.t.HOkHPD),
    children: (0, r.jsxs)("div", {
      className: l()(z.attachmentsContainer, {
        [z.attachmentsContainerMultiple]: s
      }),
      children: [(0, r.jsx)("div", {
        className: z.attachmentGrid,
        children: i.map(e => (0, r.jsx)(b.Z, {
          attachment: e
        }, e.id))
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(y.Z, {
          guildId: a,
          productId: n.id
        })
      })]
    })
  })
}

function I(e) {
  let {
    role: t
  } = e;
  return null == t ? null : (0, r.jsx)(Z.Z, {
    label: _.intl.string(_.t.gWBNen),
    children: (0, r.jsx)(N.Z, {
      role: t
    })
  })
}

function P(e) {
  return (0, r.jsx)(m.Text, {
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
    skuPricePreview: x
  } = e, j = (0, o.e7)([g.Z], () => g.Z.getGuildProduct(l));
  c()(null != j, "guildProductListing cannot be null");
  let [v, C] = a.useState(false);
  a.useEffect(() => {
    !async function() {
      try {
        C(true), await (0, p.cf)(s, l), C(false)
      } catch (e) {
        n(), (0, f.Z)({
          body: _.intl.string(_.t.VQ0lXV),
          confirmText: _.intl.string(_.t["NX+WJC"]),
          header: _.intl.string(_.t.OCwKlp),
          confirmButtonColor: u.zx.Colors.BRAND
        })
      }
    }()
  }, [s, l, n]);
  let b = (null != (t = j.attachments) ? t : []).length > 0,
    Z = j.role_id,
    y = (0, o.e7)([h.Z], () => null != Z ? h.Z.getRole(s, Z) : true);
  return (0, r.jsx)(d.Modal, {
    title: _.intl.string(_.t.dhAgv7),
    subtitle: _.intl.format(_.t.X6yvvr, {
      productName: j.name,
      emphasisHook: P
    }),
    onClose: n,
    transitionState: i,
    size: "md",
    actions: [],
    children: v ? (0, r.jsx)(m.$jN, {}) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(m.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: [b ? _.intl.string(_.t["A/RnkJ"]) + " " : "", null != y ? _.intl.format(_.t.IeJDKi, {
          roleName: y.name,
          emphasisHook: P
        }) : ""]
      }), (0, r.jsx)(m.LZC, {
        size: 12
      }), (0, r.jsx)(m.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: _.intl.string(_.t["9S3QHB"])
      }), (0, r.jsx)(m.LZC, {
        size: 24
      }), (0, r.jsx)(S, {
        guildProductListing: j,
        guildId: s,
        skuPricePreview: x
      }), (0, r.jsx)(m.LZC, {
        size: 32
      }), (0, r.jsx)("div", {
        className: z.divider
      }), (0, r.jsx)(m.LZC, {
        size: 32
      }), (0, r.jsxs)("ul", {
        className: z.benefitsContainer,
        children: [(0, r.jsx)(L, {
          guildProductListing: j,
          guildId: s
        }), (0, r.jsx)(I, {
          role: y
        })]
      })]
    })
  })
}