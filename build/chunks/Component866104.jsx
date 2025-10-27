/** Chunk was on web.js **/
/** chunk id: 866104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => R,
  Z: () => N
}), require("./388685.js"), require("./953529.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk893182 = require("./893182.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk793701 = require("./793701.js");

function A(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsxs)(l.P3F, {
    onClick: t,
    className: S.showMoreButton,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: T.intl.string(T.t.J4cw1q)
    }), (0, r.jsx)(l.LZC, {
      size: 4,
      horizontal: true
    }), (0, r.jsx)(g.Z, {
      direction: g.Z.Directions.RIGHT,
      className: S.showMoreArrow
    })]
  })
}

function C(e) {
  return (0, s.cj)([h.ZP, m.default], () => {
    var t, n;
    let r = m.default.getCurrentUser();
    o()(null != r, "user cannot be null");
    let i = h.ZP.getMember(e, r.id);
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
  } = e, i = p.QK.useSetting(), a = (0, b.n)() && i, [o, s] = (0, _.Z)(t, a), l = a ? (0, r.jsx)(d.Z, {
    autoPlay: true,
    loop: true,
    className: S.coverImage,
    width: 655,
    poster: (0, u.b)("server_products/storefront/default-header.png"),
    src: (0, u.b)("server_products/storefront/default-header.mov")
  }) : (0, r.jsx)("img", {
    src: (0, u.b)("server_products/storefront/default-header.png"),
    alt: "",
    className: S.coverImage
  });
  return (0, r.jsx)("div", {
    ref: o,
    className: S.coverImageContainer,
    children: null == s || n ? l : (0, r.jsx)("img", {
      src: s,
      alt: "",
      className: S.coverImage
    })
  })
}

function R(e) {
  var t, n;
  let {
    guild: a,
    subscriptionsSettings: o
  } = e, s = a.id, {
    nickname: d,
    nickcolor: _
  } = C(s), {
    isTruncated: p,
    ExpandableTextContainer: h
  } = (0, y.s)(), m = () => (0, I.Z)({
    guildId: s
  }), g = (null != (n = null == o || null == (t = o.description) ? true : t.trim().length) ? n : 0) > 0, [E, b] = i.useState(1), R = (0, c.Z)("(max-width: 1439px)"), {
    selectedTab: P,
    isPhantomPreview: D
  } = (0, O.m)(), w = P === v.y.GUILD_PRODUCTS_PREVIEW ? T.intl.string(T.t["LvXy/H"]) : T.intl.string(T.t.XyqKh8), L = e => {
    null != e && e.clientHeight > 30 && b(2)
  };

  function x(e, t) {
    return (0, r.jsx)("span", {
      style: {
        color: _
      },
      children: e
    }, t)
  }
  let M = g ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h, {
      lineClamp: R || 2 === E ? 2 : 3,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: null == o ? true : o.description
      })
    }), p && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.LZC, {
        size: 4
      }), (0, r.jsx)(A, {
        onClick: m
      })]
    })]
  }) : (0, r.jsx)(l.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: D ? w : T.intl.string(T.t["NY/FIW"])
  });
  return (0, r.jsxs)("div", {
    className: S.container,
    children: [(0, r.jsxs)("div", {
      className: S.infoContainer,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(f.Z, {
          guild: a,
          size: f.Z.Sizes.LARGER,
          iconSrc: null == a.icon || D ? (0, u.b)("server_products/storefront/default-guild-icon.jpg") : true
        })
      }), (0, r.jsx)(l.LZC, {
        size: 16,
        horizontal: true
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          ref: L,
          children: (0, r.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            lineClamp: 2,
            children: D ? T.intl.string(T.t.rtgp7q) : T.intl.formatToPlainString(T.t.NZeik9, {
              guildName: a.name
            })
          })
        }), (0, r.jsx)(l.LZC, {
          size: 8
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: T.intl.format(T.t["7JwrlH"], {
            username: d,
            usernameHook: x
          })
        }), (0, r.jsx)(l.LZC, {
          size: 9
        }), M]
      })]
    }), (0, r.jsx)(N, {
      coverImageAsset: null == o ? true : o.cover_image_asset,
      isPreview: D
    })]
  })
}