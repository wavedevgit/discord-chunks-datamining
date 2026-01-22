/** Chunk was on 33957 **/
/** chunk id: 12446, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  Ay: () => L
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk256265 = require("./256265.js"),
  Chunk710948 = require("./710948.jsx"),
  Chunk46054 = require("./46054.js"),
  Chunk77350 = require("./77350.js"),
  Chunk294520 = require("./294520.js"),
  Chunk652176 = require("./652176.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk138298 = require("./138298.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk531685 = require("./531685.js"),
  Chunk486020 = require("./486020.js"),
  Chunk225142 = require("./225142.js"),
  Chunk248019 = require("./248019.js"),
  Chunk639245 = require("./639245.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk446964 = require("./446964.js"),
  Chunk206314 = require("./206314.js"),
  Chunk296997 = require("./296997.js");

function D(e) {
  let n, l, {
      firstMedia: a,
      channelId: r
    } = e,
    c = (0, s.bG)([A.A], () => A.A.getChannel(r)),
    [d, o] = (0, b.eJ)({
      media: a,
      channel: c
    }),
    f = (0, b.rx)(o),
    x = (0, s.bG)([N.A], () => N.A.isFocused()),
    g = (0, h.ge)(a.src),
    p = j.kt.useSetting(),
    {
      src: v,
      width: y,
      height: O,
      alt: I
    } = a;
  return O > y ? l = 72 : n = 72, (0, t.jsxs)("div", {
    className: G.$_,
    children: [(0, m.LL)({
      src: v,
      maxHeight: n,
      maxWidth: l,
      width: y,
      height: O,
      alt: null != I && d && null != f ? f : I,
      autoPlay: p,
      animated: g && !d && x,
      containerClassName: G.iT,
      imageClassName: i()({
        [G.cd]: d
      }),
      analyticsSource: "ResourceChannelMedia"
    }), d && (0, t.jsx)(u.A, {
      obscureReason: o,
      iconClassname: G.yo
    })]
  })
}

function P(e) {
  let {
    resource: n
  } = e, l = (0, s.bG)([A.A], () => A.A.getChannel(n.channelId)), r = (0, s.bG)([v.A], () => v.A.getMessages(n.channelId)), u = (0, s.bG)([y.A], () => y.A.can(w.xBc.VIEW_CHANNEL, l)), h = r.first(), b = (0, C.A)(h), m = (0, o.yC)(h, false), x = (null == m ? true : m.length) > 0 ? m[0] : null, j = null != l && null == r.first() && !r.loadingMore && !r.ready && !r.hasFetched && u;
  if (a.useEffect(() => {
      j && d.A.fetchMessages({
        channelId: n.channelId,
        after: n.channelId,
        limit: 5
      })
    }, [n.channelId, j]), null == l || null == l.guild_id) return null;
  let p = O.Ay.getResourceChannelIconURL({
      channelId: l.id,
      icon: n.icon
    }),
    N = null == n.description || 0 === n.description.length;
  return (0, t.jsxs)(c.DUT, {
    className: G.G9,
    onClick: e => {
      null != l && (e.shiftKey ? (0, I.bN)(l.guild_id, l.id) : g.A.openResourceChannelAsSidebar({
        guildId: l.guild_id,
        channelId: l.id
      }))
    },
    children: [(0, t.jsxs)("div", {
      className: G.Qs,
      children: [(0, t.jsx)(c.Text, {
        className: G.DD,
        variant: "text-md/bold",
        color: "text-strong",
        children: n.title
      }), N && null != b && (0, t.jsx)(c.Text, {
        className: G.BK,
        variant: "text-sm/normal",
        color: "text-default",
        lineClamp: 3,
        children: f.A.parse(b, true, {
          guildId: l.guild_id,
          channelId: l.id
        })
      }), !N && (0, t.jsx)(c.Text, {
        className: i()(G.BK, M.PT),
        variant: "text-sm/normal",
        color: "text-default",
        lineClamp: 3,
        children: f.A.parse(n.description, true, {
          guildId: l.guild_id,
          channelId: l.id
        })
      })]
    }), null != n.icon && null != p ? (0, t.jsx)("div", {
      className: G.$_,
      children: (0, t.jsx)("img", {
        src: p,
        className: G.__invalid_thumbnail,
        width: 72,
        height: 72,
        alt: "",
        "aria-hidden": true
      })
    }) : null, null == p && null != x ? (0, t.jsx)(D, {
      firstMedia: x,
      channelId: n.channelId
    }) : null]
  })
}

function L(e) {
  let {
    guild: n,
    isNewMember: l
  } = e, a = (0, _.A)(n.id);
  return 0 === a.length ? l ? null : (0, t.jsxs)("div", {
    className: G.do,
    children: [(0, t.jsx)(c.Heading, {
      variant: "heading-xl/bold",
      color: "text-strong",
      children: E.intl.string(E.t.owvC9U)
    }), (0, t.jsx)("img", {
      className: G.QT,
      src: S,
      alt: ""
    }), (0, t.jsx)("div", {
      className: G.nM,
      children: (0, t.jsx)(c.Button, {
        size: "md",
        variant: "primary",
        onClick: () => {
          let e = p.Ay.getDefaultChannel(n.id);
          null != e && (0, x.pX)(w.BVt.CHANNEL(n.id, e.id))
        },
        fullWidth: true,
        text: E.intl.string(E.t["3iCBUn"])
      })
    })]
  }) : (0, t.jsxs)("div", {
    className: G.kL,
    children: [(0, t.jsx)(c.Heading, {
      variant: "heading-lg/bold",
      color: "text-strong",
      children: E.intl.string(E.t.xwY4La)
    }), a.map(e => (0, t.jsx)(P, {
      resource: e
    }, e.channelId))]
  })
}