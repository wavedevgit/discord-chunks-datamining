/** Chunk was on web.js **/
/** chunk id: 43136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R,
  C: () => N
}), require("./896048.js"), require("./228524.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk241524 = require("./241524.js"),
  Chunk289397 = require("./289397.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk258335 = require("./258335.js"),
  Chunk253932 = require("./253932.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk792831 = require("./792831.jsx"),
  Chunk427262 = require("./427262.js"),
  Chunk218394 = require("./218394.js"),
  Chunk386952 = require("./386952.jsx"),
  Chunk381969 = require("./381969.jsx"),
  Chunk920814 = require("./920814.js"),
  Chunk235665 = require("./235665.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk425666 = require("./425666.js");

function T(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsxs)(l.DUT, {
    onClick: t,
    className: I.dO,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-strong",
      children: S.intl.string(S.t.J4cw1q)
    }), (0, r.jsx)(l.hKd, {
      size: 4,
      horizontal: true
    }), (0, r.jsx)(g.A, {
      direction: g.A.Directions.RIGHT,
      className: I.wY
    })]
  })
}

function C(e) {
  return (0, o.cf)([h.Ay, m.default], () => {
    var t, n;
    let r = m.default.getCurrentUser();
    s()(null != r, "user cannot be null");
    let i = h.Ay.getMember(e, r.id);
    return {
      nickname: null != (t = null == i ? true : i.nick) ? t : E.Ay.getName(r),
      nickcolor: null != (n = null == i ? true : i.colorString) ? n : true
    }
  }, [e])
}

function N(e) {
  let {
    coverImageAsset: t,
    isPreview: n = false
  } = e, i = _.kt.useSetting(), a = (0, b.j)() && i, [s, o] = (0, p.A)(t, a), l = a ? (0, r.jsx)(d.A, {
    autoPlay: true,
    loop: true,
    className: I.N4,
    width: 655,
    poster: (0, u.n)("server_products/storefront/default-header.png"),
    src: (0, u.n)("server_products/storefront/default-header.mov")
  }) : (0, r.jsx)("img", {
    src: (0, u.n)("server_products/storefront/default-header.png"),
    alt: "",
    className: I.N4
  });
  return (0, r.jsx)("div", {
    ref: s,
    className: I.El,
    children: null == o || n ? l : (0, r.jsx)("img", {
      src: o,
      alt: "",
      className: I.N4
    })
  })
}

function R(e) {
  var t, n;
  let {
    guild: a,
    subscriptionsSettings: s
  } = e, o = a.id, {
    nickname: d,
    nickcolor: p
  } = C(o), {
    isTruncated: _,
    ExpandableTextContainer: h
  } = (0, y.e)(), m = () => (0, v.A)({
    guildId: o
  }), g = (null != (t = null == s || null == (n = s.description) ? true : n.trim().length) ? t : 0) > 0, [E, b] = i.useState(1), R = (0, c.A)("(max-width: 1439px)"), {
    selectedTab: w,
    isPhantomPreview: P
  } = (0, O.k)(), D = w === A.B.GUILD_PRODUCTS_PREVIEW ? S.intl.string(S.t["LvXy/H"]) : S.intl.string(S.t.XyqKh8), x = e => {
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
    children: [(0, r.jsx)(h, {
      lineClamp: R || 2 === E ? 2 : 3,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: null == s ? true : s.description
      })
    }), _ && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.hKd, {
        size: 4
      }), (0, r.jsx)(T, {
        onClick: m
      })]
    })]
  }) : (0, r.jsx)(l.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: P ? D : S.intl.string(S.t["NY/FIW"])
  });
  return (0, r.jsxs)("div", {
    className: I.kL,
    children: [(0, r.jsxs)("div", {
      className: I.op,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(f.A, {
          guild: a,
          size: f.A.Sizes.LARGER,
          iconSrc: null == a.icon || P ? (0, u.n)("server_products/storefront/default-guild-icon.jpg") : true
        })
      }), (0, r.jsx)(l.hKd, {
        size: 16,
        horizontal: true
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          ref: x,
          children: (0, r.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            lineClamp: 2,
            children: P ? S.intl.string(S.t.rtgp7q) : S.intl.formatToPlainString(S.t.NZeik9, {
              guildName: a.name
            })
          })
        }), (0, r.jsx)(l.hKd, {
          size: 8
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: S.intl.format(S.t["7JwrlH"], {
            username: d,
            usernameHook: L
          })
        }), (0, r.jsx)(l.hKd, {
          size: 9
        }), j]
      })]
    }), (0, r.jsx)(N, {
      coverImageAsset: null == s ? true : s.cover_image_asset,
      isPreview: P
    })]
  })
}