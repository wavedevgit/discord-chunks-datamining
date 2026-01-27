/** Chunk was on 92917 **/
/** chunk id: 43136, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S,
  C: () => I
}), require("./896048.js"), require("./228524.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
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

function C(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsxs)(o.DUT, {
    onClick: t,
    className: j.dO,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-strong",
      children: E.intl.string(E.t.J4cw1q)
    }), (0, r.jsx)(o.hKd, {
      size: 4,
      horizontal: true
    }), (0, r.jsx)(_.A, {
      direction: _.A.Directions.RIGHT,
      className: j.wY
    })]
  })
}

function I(e) {
  let {
    coverImageAsset: t,
    isPreview: n = false
  } = e, i = f.kt.useSetting(), l = (0, A.j)() && i, [a, s] = (0, m.A)(t, l), o = l ? (0, r.jsx)(d.A, {
    autoPlay: true,
    loop: true,
    className: j.N4,
    width: 655,
    poster: (0, u.n)("server_products/storefront/default-header.png"),
    src: (0, u.n)("server_products/storefront/default-header.mov")
  }) : (0, r.jsx)("img", {
    src: (0, u.n)("server_products/storefront/default-header.png"),
    alt: "",
    className: j.N4
  });
  return (0, r.jsx)("div", {
    ref: a,
    className: j.El,
    children: null == s || n ? o : (0, r.jsx)("img", {
      src: s,
      alt: "",
      className: j.N4
    })
  })
}

function S(e) {
  var t, n;
  let {
    guild: l,
    subscriptionsSettings: d
  } = e, m = l.id, {
    nickname: f,
    nickcolor: _
  } = (0, s.cf)([g.Ay, h.default], () => {
    var e, t;
    let n = h.default.getCurrentUser();
    a()(null != n, "user cannot be null");
    let r = g.Ay.getMember(m, n.id);
    return {
      nickname: null != (e = null == r ? true : r.nick) ? e : b.Ay.getName(n),
      nickcolor: null != (t = null == r ? true : r.colorString) ? t : true
    }
  }, [m]), {
    isTruncated: A,
    ExpandableTextContainer: S
  } = (0, y.e)(), T = (null != (t = null == d || null == (n = d.description) ? true : n.trim().length) ? t : 0) > 0, [N, P] = i.useState(1), w = (0, c.A)("(max-width: 1439px)"), {
    selectedTab: R,
    isPhantomPreview: D
  } = (0, v.k)(), L = R === x.B.GUILD_PRODUCTS_PREVIEW ? E.intl.string(E.t["LvXy/H"]) : E.intl.string(E.t.XyqKh8), M = T ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(S, {
      lineClamp: w || 2 === N ? 2 : 3,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: null == d ? true : d.description
      })
    }), A && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.hKd, {
        size: 4
      }), (0, r.jsx)(C, {
        onClick: () => (0, O.A)({
          guildId: m
        })
      })]
    })]
  }) : (0, r.jsx)(o.Text, {
    variant: "text-sm/normal",
    color: "text-default",
    children: D ? L : E.intl.string(E.t["NY/FIW"])
  });
  return (0, r.jsxs)("div", {
    className: j.kL,
    children: [(0, r.jsxs)("div", {
      className: j.op,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(p.A, {
          guild: l,
          size: p.A.Sizes.LARGER,
          iconSrc: null == l.icon || D ? (0, u.n)("server_products/storefront/default-guild-icon.jpg") : true
        })
      }), (0, r.jsx)(o.hKd, {
        size: 16,
        horizontal: true
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          ref: e => {
            null != e && e.clientHeight > 30 && P(2)
          },
          children: (0, r.jsx)(o.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            lineClamp: 2,
            children: D ? E.intl.string(E.t.rtgp7q) : E.intl.formatToPlainString(E.t.NZeik9, {
              guildName: l.name
            })
          })
        }), (0, r.jsx)(o.hKd, {
          size: 8
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: E.intl.format(E.t["7JwrlH"], {
            username: f,
            usernameHook: function(e, t) {
              return (0, r.jsx)("span", {
                style: {
                  color: _
                },
                children: e
              }, t)
            }
          })
        }), (0, r.jsx)(o.hKd, {
          size: 9
        }), M]
      })]
    }), (0, r.jsx)(I, {
      coverImageAsset: null == d ? true : d.cover_image_asset,
      isPreview: D
    })]
  })
}