/** Chunk was on 66866 **/
/** chunk id: 866104, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => T,
  Z: () => S
}), require("./388685.js"), require("./953529.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131388 = require("./131388.js"),
  Chunk357352 = require("./357352.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk353254 = require("./353254.js"),
  Chunk695346 = require("./695346.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk671533 = require("./671533.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk506071 = require("./506071.js"),
  Chunk696014 = require("./696014.jsx"),
  Chunk847033 = require("./847033.jsx"),
  Chunk544978 = require("./544978.js"),
  Chunk893182 = require("./893182.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk793701 = require("./793701.js");

function I(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsxs)(s.P3F, {
    onClick: t,
    className: j.showMoreButton,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: x.intl.string(x.t.J4cw1t)
    }), (0, r.jsx)(s.LZC, {
      size: 4,
      horizontal: true
    }), (0, r.jsx)(h.Z, {
      direction: h.Z.Directions.RIGHT,
      className: j.showMoreArrow
    })]
  })
}

function S(e) {
  let {
    coverImageAsset: t,
    isPreview: n = false
  } = e, i = f.QK.useSetting(), l = (0, E.n)() && i, [a, o] = (0, m.Z)(t, l), s = l ? (0, r.jsx)(d.Z, {
    autoPlay: true,
    loop: true,
    className: j.coverImage,
    width: 655,
    poster: (0, u.b)("server_products/storefront/default-header.png"),
    src: (0, u.b)("server_products/storefront/default-header.mov")
  }) : (0, r.jsx)("img", {
    src: (0, u.b)("server_products/storefront/default-header.png"),
    alt: "",
    className: j.coverImage
  });
  return (0, r.jsx)("div", {
    ref: a,
    className: j.coverImageContainer,
    children: null == o || n ? s : (0, r.jsx)("img", {
      src: o,
      alt: "",
      className: j.coverImage
    })
  })
}

function T(e) {
  var t, n;
  let {
    guild: l,
    subscriptionsSettings: d
  } = e, m = l.id, {
    nickname: f,
    nickcolor: h
  } = (0, o.cj)([_.ZP, g.default], () => {
    var e, t;
    let n = g.default.getCurrentUser();
    a()(null != n, "user cannot be null");
    let r = _.ZP.getMember(m, n.id);
    return {
      nickname: null != (e = null == r ? true : r.nick) ? e : b.ZP.getName(n),
      nickcolor: null != (t = null == r ? true : r.colorString) ? t : true
    }
  }, [m]), {
    isTruncated: E,
    ExpandableTextContainer: T
  } = (0, C.s)(), P = (null != (n = null == d || null == (t = d.description) ? true : t.trim().length) ? n : 0) > 0, [N, A] = i.useState(1), w = (0, c.Z)("(max-width: 1439px)"), {
    selectedTab: Z,
    isPhantomPreview: R
  } = (0, v.m)(), L = Z === O.y.GUILD_PRODUCTS_PREVIEW ? x.intl.string(x.t["LvXy/P"]) : x.intl.string(x.t.XyqKh4), D = P ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(T, {
      lineClamp: w || 2 === N ? 2 : 3,
      children: (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: null == d ? true : d.description
      })
    }), E && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.LZC, {
        size: 4
      }), (0, r.jsx)(I, {
        onClick: () => (0, y.Z)({
          guildId: m
        })
      })]
    })]
  }) : (0, r.jsx)(s.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: R ? L : x.intl.string(x.t["NY/FIS"])
  });
  return (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsxs)("div", {
      className: j.infoContainer,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(p.Z, {
          guild: l,
          size: p.Z.Sizes.LARGER,
          iconSrc: null == l.icon || R ? (0, u.b)("server_products/storefront/default-guild-icon.jpg") : true
        })
      }), (0, r.jsx)(s.LZC, {
        size: 16,
        horizontal: true
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          ref: e => {
            null != e && e.clientHeight > 30 && A(2)
          },
          children: (0, r.jsx)(s.X6q, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            lineClamp: 2,
            children: R ? x.intl.string(x.t.rtgp7u) : x.intl.formatToPlainString(x.t.NZeik5, {
              guildName: l.name
            })
          })
        }), (0, r.jsx)(s.LZC, {
          size: 8
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: x.intl.format(x.t["7JwrlJ"], {
            username: f,
            usernameHook: function(e, t) {
              return (0, r.jsx)("span", {
                style: {
                  color: h
                },
                children: e
              }, t)
            }
          })
        }), (0, r.jsx)(s.LZC, {
          size: 9
        }), D]
      })]
    }), (0, r.jsx)(S, {
      coverImageAsset: null == d ? true : d.cover_image_asset,
      isPreview: R
    })]
  })
}