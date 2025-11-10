/** Chunk was on 384 **/
/** chunk id: 320893, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk570734 = require("./570734.js"),
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

function _() {
  let e = (0, Chunk410030.ZP)(),
    t = {
      backgroundColor: (0, Chunk780384.wj)(module) ? "#2e3638" : "var(--background-base-low)"
    };
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk570734.earningsPreviewContainer,
    style: exports,
    children: [(0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.TXPK7B)
      }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 8
      }), (0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-md/bold",
        className: j(module),
        children: Chunk388032.intl.string(Chunk388032.t.LdjJG5)
      })]
    }), (0, Chunk951288.jsx)("img", {
      className: Chunk570734.roundAvatar,
      src: Chunk487703,
      alt: Chunk388032.intl.string(Chunk388032.t.NgjpTL)
    })]
  })
}

function v() {
  let e = (0, Chunk410030.ZP)();

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
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk570734.avatarGridContainer,
    "aria-label": Chunk388032.intl.string(Chunk388032.t["P2B/0W"]),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk570734.avatarCard,
      children: [(0, Chunk951288.jsx)(exports, {
        length: 24
      }), (0, Chunk951288.jsx)("img", {
        className: Chunk570734.roundAvatar,
        src: (0, Chunk780384.wj)(module) ? Chunk934961 : Chunk568294,
        alt: ""
      }), (0, Chunk951288.jsx)(exports, {
        horizontal: true,
        length: 12
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk570734.avatarCard,
      children: [(0, Chunk951288.jsx)(exports, {
        length: 24
      }), (0, Chunk951288.jsx)("img", {
        className: Chunk570734.roundAvatar,
        src: Chunk867861,
        alt: ""
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk570734.avatarCard,
      children: [(0, Chunk951288.jsx)(exports, {
        length: 12
      }), (0, Chunk951288.jsx)("img", {
        className: Chunk570734.roundAvatar,
        src: Chunk860790,
        alt: ""
      }), (0, Chunk951288.jsx)(exports, {
        horizontal: true,
        length: 12
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk570734.avatarCard,
      children: [(0, Chunk951288.jsx)(exports, {
        length: 12
      }), (0, Chunk951288.jsx)("img", {
        className: Chunk570734.roundAvatar,
        src: Chunk268953,
        alt: ""
      })]
    })]
  })
}

function O() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk570734.earningBenefitCard,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: Chunk388032.intl.string(Chunk388032.t["9CdmS8"])
    }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
      size: 32
    }), (0, Chunk951288.jsx)(_, {}), (0, Chunk951288.jsx)(Chunk481060.LZC, {
      size: 24
    }), (0, Chunk951288.jsx)(v, {})]
  })
}

function C() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk570734.followerBenefitCard,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk570734.followerBenefitText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: Chunk388032.intl.string(Chunk388032.t.qsKRUQ)
    }), (0, Chunk951288.jsx)("img", {
      className: Chunk570734.roleSubscriptionSocial,
      src: Chunk431712,
      alt: Chunk388032.intl.string(Chunk388032.t.yTPprb)
    }), (0, Chunk951288.jsx)("img", {
      className: Chunk570734.roleSubscriptionLanyardIllo,
      src: Chunk334364,
      alt: Chunk388032.intl.string(Chunk388032.t["+gd9QQ"])
    })]
  })
}

function y() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk570734.revenueShareBenefitCard,
    children: [(0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsxs)(Chunk481060.Heading, {
        className: j(module),
        style: {
          fontSize: "50px",
          lineHeight: "52px"
        },
        variant: "heading-xxl/extrabold",
        children: [Chunk293810.NT, "%"]
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.AewsXD)
      })]
    }), (0, Chunk951288.jsx)("img", {
      className: Chunk570734.roleSubscriptionEarningIllo,
      src: Chunk458050,
      alt: Chunk388032.intl.string(Chunk388032.t.fD9Wv1)
    })]
  })
}

function N() {
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk388032.t["1QHJaW"])
    }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
      size: 24
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk570734.creatorBenefitsContainer,
      children: [(0, Chunk951288.jsx)(O, {}), (0, Chunk951288.jsx)(C, {}), (0, Chunk951288.jsx)(y, {})]
    })]
  })
}