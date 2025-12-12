/** Chunk was on web.js **/
/** chunk id: 866104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => P,
  Z: () => N
}), require("./388685.js"), require("./953529.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk615327 = require("./615327.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk332232 = require("./332232.js");

function C(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsxs)(l.P3F, {
    onClick: t,
    className: T.showMoreButton,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-strong",
      children: I.intl.string(I.t.J4cw1q)
    }), (0, r.jsx)(l.LZC, {
      size: 4,
      horizontal: true
    }), (0, r.jsx)(g.Z, {
      direction: g.Z.Directions.RIGHT,
      className: T.showMoreArrow
    })]
  })
}

function A(e) {
  return (0, s.cj)([m.ZP, h.default], () => {
    var t, n;
    let r = h.default.getCurrentUser();
    o()(null != r, "user cannot be null");
    let i = m.ZP.getMember(e, r.id);
    return {
      nickname: null != (t = null == i ? true : i.nick) ? t : E.ZP.getName(r),
      nickcolor: null != (n = null == i ? true : i.colorString) ? n : true
    }
  }, [e])
}

function N(e) {
  let {
    coverImageAsset: t,
    isPreview: n = false
  } = e, i = _.QK.useSetting(), a = (0, b.n)() && i, [o, s] = (0, p.Z)(t, a), l = a ? (0, r.jsx)(d.Z, {
    autoPlay: true,
    loop: true,
    className: T.coverImage,
    width: 655,
    poster: (0, u.b)("server_products/storefront/default-header.png"),
    src: (0, u.b)("server_products/storefront/default-header.mov")
  }) : (0, r.jsx)("img", {
    src: (0, u.b)("server_products/storefront/default-header.png"),
    alt: "",
    className: T.coverImage
  });
  return (0, r.jsx)("div", {
    ref: o,
    className: T.coverImageContainer,
    children: null == s || n ? l : (0, r.jsx)("img", {
      src: s,
      alt: "",
      className: T.coverImage
    })
  })
}

function P(e) {
  var t, n;
  let {
    guild: a,
    subscriptionsSettings: o
  } = e, s = a.id, {
    nickname: d,
    nickcolor: p
  } = A(s), {
    isTruncated: _,
    ExpandableTextContainer: m
  } = (0, y.s)(), h = () => (0, S.Z)({
    guildId: s
  }), g = (null != (n = null == o || null == (t = o.description) ? true : t.trim().length) ? n : 0) > 0, [E, b] = i.useState(1), P = (0, c.Z)("(max-width: 1439px)"), {
    selectedTab: R,
    isPhantomPreview: w
  } = (0, O.m)(), D = R === v.y.GUILD_PRODUCTS_PREVIEW ? I.intl.string(I.t["LvXy/H"]) : I.intl.string(I.t.XyqKh8), x = e => {
    null != e && e.clientHeight > 30 && b(2)
  };

  function L(e, t) {
    return (0, r.jsx)("span", {
      style: {
        color: p
      },
      children: e
    }, t)
  }
  let j = g ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m, {
      lineClamp: P || 2 === E ? 2 : 3,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: null == o ? true : o.description
      })
    }), _ && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.LZC, {
        size: 4
      }), (0, r.jsx)(C, {
        onClick: h
      })]
    })]
  }) : (0, r.jsx)(l.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: w ? D : I.intl.string(I.t["NY/FIW"])
  });
  return (0, r.jsxs)("div", {
    className: T.container,
    children: [(0, r.jsxs)("div", {
      className: T.infoContainer,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(f.Z, {
          guild: a,
          size: f.Z.Sizes.LARGER,
          iconSrc: null == a.icon || w ? (0, u.b)("server_products/storefront/default-guild-icon.jpg") : true
        })
      }), (0, r.jsx)(l.LZC, {
        size: 16,
        horizontal: true
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          ref: x,
          children: (0, r.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            lineClamp: 2,
            children: w ? I.intl.string(I.t.rtgp7q) : I.intl.formatToPlainString(I.t.NZeik9, {
              guildName: a.name
            })
          })
        }), (0, r.jsx)(l.LZC, {
          size: 8
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: I.intl.format(I.t["7JwrlH"], {
            username: d,
            usernameHook: L
          })
        }), (0, r.jsx)(l.LZC, {
          size: 9
        }), j]
      })]
    }), (0, r.jsx)(N, {
      coverImageAsset: null == o ? true : o.cover_image_asset,
      isPreview: w
    })]
  })
}