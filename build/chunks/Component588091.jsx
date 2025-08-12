/** Chunk was on 16359 **/
/** chunk id: 588091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk693789 = require("./693789.jsx"),
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
  Chunk813624 = require("./813624.js");

function z(e) {
  let {
    guildProductListing: t,
    guildId: n,
    skuPricePreview: a
  } = e, i = (0, C.C)(t), l = (0, j.T4)(a.amount, a.currency), s = (0, o.e7)([h.Z], () => h.Z.getGuild(n));
  return c()(null != s, "guild cannot be null"), (0, r.jsxs)("div", {
    className: _.purchaseSummaryContainer,
    children: [(0, r.jsx)(m.Z, {
      alt: "",
      className: _.purchaseSummaryImage,
      listing: t,
      imageSize: 100
    }), (0, r.jsxs)("div", {
      className: _.purchaseSummarInfo,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: t.name
      }), (0, r.jsx)(u.LZC, {
        size: 4
      }), (0, r.jsxs)("div", {
        className: _.productTypeContainer,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: i
        }), (0, r.jsx)("div", {
          className: _.dotSeparator
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 2,
          children: s.name
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: _.purchaseSummaryPrice,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: l
      }), (0, r.jsx)(u.LZC, {
        size: 4
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: N.intl.string(N.t["5dWOZW"])
      })]
    })]
  })
}

function S(e) {
  var t;
  let {
    guildProductListing: n,
    guildId: a
  } = e, i = null != (t = n.attachments) ? t : [], s = i.length > 1;
  return 0 === i.length ? null : (0, r.jsx)(b.Z, {
    label: N.intl.string(N.t.HOkHPD),
    children: (0, r.jsxs)("div", {
      className: l()(_.attachmentsContainer, {
        [_.attachmentsContainerMultiple]: s
      }),
      children: [(0, r.jsx)("div", {
        className: _.attachmentGrid,
        children: i.map(e => (0, r.jsx)(g.Z, {
          attachment: e
        }, e.id))
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(Z.Z, {
          guildId: a,
          productId: n.id
        })
      })]
    })
  })
}

function L(e) {
  let {
    role: t
  } = e;
  return null == t ? null : (0, r.jsx)(b.Z, {
    label: N.intl.string(N.t.gWBNen),
    children: (0, r.jsx)(y.Z, {
      role: t
    })
  })
}

function T(e) {
  return (0, r.jsx)(u.Text, {
    tag: "span",
    variant: "text-md/semibold",
    color: "text-default",
    children: e
  })
}

function P(e) {
  var t;
  let {
    onClose: n,
    transitionState: i,
    guildProductListingId: l,
    guildId: s,
    skuPricePreview: m
  } = e, h = (0, o.e7)([v.Z], () => v.Z.getGuildProduct(l));
  c()(null != h, "guildProductListing cannot be null");
  let [j, C] = a.useState(false);
  a.useEffect(() => {
    !async function() {
      try {
        C(true), await (0, p.cf)(s, l), C(false)
      } catch (e) {
        n(), (0, x.Z)({
          body: N.intl.string(N.t.VQ0lXV),
          confirmText: N.intl.string(N.t["NX+WJC"]),
          header: N.intl.string(N.t.OCwKlp),
          confirmButtonColor: d.zx.Colors.BRAND
        })
      }
    }()
  }, [s, l, n]);
  let g = (null != (t = h.attachments) ? t : []).length > 0,
    b = h.role_id,
    Z = (0, o.e7)([f.Z], () => null != b ? f.Z.getRole(s, b) : true);
  return (0, r.jsx)(u.Y0X, {
    className: _.modal,
    size: u.CgR.DYNAMIC,
    transitionState: i,
    "aria-label": h.name,
    parentComponent: "GuildProductPurchaseConfirmationModal",
    children: (0, r.jsx)(u.hzk, {
      children: (0, r.jsx)("div", {
        className: _.container,
        children: j ? (0, r.jsx)(u.$jN, {}) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("div", {
            className: _.header,
            children: [(0, r.jsx)(u.X6q, {
              variant: "heading-xl/semibold",
              color: "header-primary",
              children: N.intl.string(N.t.dhAgv7)
            }), (0, r.jsx)(u.P3F, {
              onClick: n,
              children: (0, r.jsx)(u.Dio, {
                size: "md",
                color: "currentColor",
                className: _.close
              })
            })]
          }), (0, r.jsx)(u.LZC, {
            size: 16
          }), (0, r.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: N.intl.format(N.t.X6yvvr, {
              productName: h.name,
              emphasisHook: T
            })
          }), (0, r.jsx)(u.LZC, {
            size: 12
          }), (0, r.jsxs)(u.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: [g ? N.intl.string(N.t["A/RnkJ"]) + " " : "", null != Z ? N.intl.format(N.t.IeJDKi, {
              roleName: Z.name,
              emphasisHook: T
            }) : ""]
          }), (0, r.jsx)(u.LZC, {
            size: 12
          }), (0, r.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: N.intl.string(N.t["9S3QHB"])
          }), (0, r.jsx)(u.LZC, {
            size: 24
          }), (0, r.jsx)(z, {
            guildProductListing: h,
            guildId: s,
            skuPricePreview: m
          }), (0, r.jsx)(u.LZC, {
            size: 32
          }), (0, r.jsx)("div", {
            className: _.divider
          }), (0, r.jsx)(u.LZC, {
            size: 32
          }), (0, r.jsxs)("ul", {
            className: _.benefitsContainer,
            children: [(0, r.jsx)(S, {
              guildProductListing: h,
              guildId: s
            }), (0, r.jsx)(L, {
              role: Z
            })]
          })]
        })
      })
    })
  })
}