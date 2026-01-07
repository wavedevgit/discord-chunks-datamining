/** Chunk was on 9536 **/
/** chunk id: 320893, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk180991 = require("./180991.js"),
  Chunk934961 = require("./934961.js"),
  Chunk568294 = require("./568294.js"),
  Chunk867861 = require("./867861.js"),
  Chunk860790 = require("./860790.js"),
  Chunk268953 = require("./268953.js"),
  Chunk487703 = require("./487703.js"),
  Chunk458050 = require("./458050.js"),
  Chunk334364 = require("./334364.js"),
  Chunk431712 = require("./431712.js");

function j(e) {
  return (0, i.wj)(e) ? c.revenueSharePercentageDark : c.revenueSharePercentageLight
}

function v() {
  let e = (0, a.ZP)(),
    t = {
      backgroundColor: (0, i.wj)(e) ? "#2e3638" : "var(--background-base-low)"
    };
  return (0, r.jsxs)("div", {
    className: c.earningsPreviewContainer,
    style: t,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: o.intl.string(o.t.TXPK7B)
      }), (0, r.jsx)(l.LZC, {
        size: 8
      }), (0, r.jsx)(l.Heading, {
        variant: "heading-md/bold",
        className: j(e),
        children: o.intl.string(o.t.LdjJG5)
      })]
    }), (0, r.jsx)("img", {
      className: c.roundAvatar,
      src: b,
      alt: o.intl.string(o.t.NgjpTL)
    })]
  })
}

function O() {
  let e = (0, a.ZP)();

  function t(e) {
    var t, n;
    let {
      length: i,
      horizontal: l
    } = e;
    return (0, r.jsx)("div", {
      className: l ? c.horizontalConnector : c.verticalConnector,
      style: (t = function(e) {
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
      }({}, l ? {
        width: i
      } : {
        height: i
      }), n = n = {
        border: "1px solid #49494933"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t)
    })
  }
  return (0, r.jsxs)("div", {
    className: c.avatarGridContainer,
    "aria-label": o.intl.string(o.t["P2B/0W"]),
    children: [(0, r.jsxs)("div", {
      className: c.avatarCard,
      children: [(0, r.jsx)(t, {
        length: 24
      }), (0, r.jsx)("img", {
        className: c.roundAvatar,
        src: (0, i.wj)(e) ? d : u,
        alt: ""
      }), (0, r.jsx)(t, {
        horizontal: true,
        length: 12
      })]
    }), (0, r.jsxs)("div", {
      className: c.avatarCard,
      children: [(0, r.jsx)(t, {
        length: 24
      }), (0, r.jsx)("img", {
        className: c.roundAvatar,
        src: g,
        alt: ""
      })]
    }), (0, r.jsxs)("div", {
      className: c.avatarCard,
      children: [(0, r.jsx)(t, {
        length: 12
      }), (0, r.jsx)("img", {
        className: c.roundAvatar,
        src: f,
        alt: ""
      }), (0, r.jsx)(t, {
        horizontal: true,
        length: 12
      })]
    }), (0, r.jsxs)("div", {
      className: c.avatarCard,
      children: [(0, r.jsx)(t, {
        length: 12
      }), (0, r.jsx)("img", {
        className: c.roundAvatar,
        src: m,
        alt: ""
      })]
    })]
  })
}

function C() {
  return (0, r.jsxs)("div", {
    className: c.earningBenefitCard,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: o.intl.string(o.t["9CdmS8"])
    }), (0, r.jsx)(l.LZC, {
      size: 32
    }), (0, r.jsx)(v, {}), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsx)(O, {})]
  })
}

function y() {
  return (0, r.jsxs)("div", {
    className: c.followerBenefitCard,
    children: [(0, r.jsx)(l.Text, {
      className: c.followerBenefitText,
      variant: "text-md/normal",
      color: "text-default",
      children: o.intl.string(o.t.qsKRUQ)
    }), (0, r.jsx)("img", {
      className: c.roleSubscriptionSocial,
      src: x,
      alt: o.intl.string(o.t.yTPprb)
    }), (0, r.jsx)("img", {
      className: c.roleSubscriptionLanyardIllo,
      src: h,
      alt: o.intl.string(o.t["+gd9QQ"])
    })]
  })
}

function N() {
  let e = (0, a.ZP)();
  return (0, r.jsxs)("div", {
    className: c.revenueShareBenefitCard,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsxs)(l.Heading, {
        className: j(e),
        style: {
          fontSize: "50px",
          lineHeight: "52px"
        },
        variant: "heading-xxl/extrabold",
        children: [s.NT, "%"]
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: o.intl.string(o.t.AewsXD)
      })]
    }), (0, r.jsx)("img", {
      className: c.roleSubscriptionEarningIllo,
      src: p,
      alt: o.intl.string(o.t.fD9Wv1)
    })]
  })
}

function E() {
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: o.intl.string(o.t["1QHJaW"])
    }), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsxs)("div", {
      className: c.creatorBenefitsContainer,
      children: [(0, r.jsx)(C, {}), (0, r.jsx)(y, {}), (0, r.jsx)(N, {})]
    })]
  })
}