/** Chunk was on 12009 **/
/** chunk id: 919318, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => L
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk368844 = require("./368844.js"),
  Chunk73315 = require("./73315.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk406432 = require("./406432.js"),
  Chunk169525 = require("./169525.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk6025 = require("./6025.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk451478 = require("./451478.js"),
  Chunk768581 = require("./768581.js"),
  Chunk526120 = require("./526120.js"),
  Chunk689981 = require("./689981.js"),
  Chunk825334 = require("./825334.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk877762 = require("./877762.js"),
  Chunk430864 = require("./430864.js"),
  Chunk931057 = require("./931057.js");

function M(e) {
  let n, t, {
      firstMedia: r,
      channelId: a
    } = e,
    c = (0, s.e7)([j.Z], () => j.Z.getChannel(a)),
    [o, d] = (0, f.hL)({
      media: r,
      channel: c
    }),
    m = (0, f.MC)(d),
    p = (0, s.e7)([Z.Z], () => Z.Z.isFocused()),
    x = (0, h.d$)(r.src),
    C = b.QK.useSetting(),
    {
      src: v,
      width: _,
      height: I,
      alt: y
    } = r;
  return I > _ ? t = 72 : n = 72, (0, l.jsxs)("div", {
    className: E.media,
    children: [(0, g.Yi)({
      src: v,
      maxHeight: n,
      maxWidth: t,
      width: _,
      height: I,
      alt: null != y && o && null != m ? m : y,
      autoPlay: C,
      animated: x && !o && p,
      containerClassName: E.thumbnailContainer,
      imageClassName: i()({
        [E.obscured]: o
      }),
      analyticsSource: "ResourceChannelMedia"
    }), o && (0, l.jsx)(u.Z, {
      obscureReason: d,
      iconClassname: E.obscuredTag
    })]
  })
}

function k(e) {
  let {
    resource: n
  } = e, t = (0, s.e7)([j.Z], () => j.Z.getChannel(n.channelId)), a = (0, s.e7)([v.Z], () => v.Z.getMessages(n.channelId)), u = (0, s.e7)([_.Z], () => _.Z.can(P.Plq.VIEW_CHANNEL, t)), h = a.first(), f = (0, N.Z)(h), g = (0, d.zy)(h, false), p = (null == g ? true : g.length) > 0 ? g[0] : null, b = null != t && null == a.first() && !a.loadingMore && !a.ready && !a.hasFetched && u;
  if (r.useEffect(() => {
      b && o.Z.fetchMessages({
        channelId: n.channelId,
        after: n.channelId,
        limit: 5
      })
    }, [n.channelId, b]), null == t || null == t.guild_id) return null;
  let C = I.ZP.getResourceChannelIconURL({
      channelId: t.id,
      icon: n.icon
    }),
    Z = null == n.description || 0 === n.description.length;
  return (0, l.jsxs)(c.P3F, {
    className: E.row,
    onClick: e => {
      null != t && (e.shiftKey ? (0, y.C3)(t.guild_id, t.id) : x.Z.openResourceChannelAsSidebar({
        guildId: t.guild_id,
        channelId: t.id
      }))
    },
    children: [(0, l.jsxs)("div", {
      className: E.content,
      children: [(0, l.jsx)(c.Text, {
        className: E.title,
        variant: "text-md/bold",
        color: "header-primary",
        children: n.title
      }), Z && null != f && (0, l.jsx)(c.Text, {
        className: E.messageContent,
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 3,
        children: m.Z.parse(f, true, {
          guildId: t.guild_id,
          channelId: t.id
        })
      }), !Z && (0, l.jsx)(c.Text, {
        className: i()(E.messageContent, S.markup),
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 3,
        children: m.Z.parse(n.description, true, {
          guildId: t.guild_id,
          channelId: t.id
        })
      })]
    }), null != n.icon && null != C ? (0, l.jsx)("div", {
      className: E.media,
      children: (0, l.jsx)("img", {
        src: C,
        className: E.__invalid_thumbnail,
        width: 72,
        height: 72,
        alt: "",
        "aria-hidden": true
      })
    }) : null, null == C && null != p ? (0, l.jsx)(M, {
      firstMedia: p,
      channelId: n.channelId
    }) : null]
  })
}

function L(e) {
  let {
    guild: n,
    isNewMember: t
  } = e, r = (0, O.Z)(n.id);
  return 0 === r.length ? t ? null : (0, l.jsxs)("div", {
    className: E.emptyContainer,
    children: [(0, l.jsx)(c.Heading, {
      variant: "heading-xl/bold",
      color: "header-primary",
      children: w.intl.string(w.t.owvC9U)
    }), (0, l.jsx)("img", {
      className: E.emptyStateImage,
      src: A,
      alt: ""
    }), (0, l.jsx)("div", {
      className: E.emptyStateButton,
      children: (0, l.jsx)(c.Button, {
        size: "md",
        variant: "primary",
        onClick: () => {
          let e = C.ZP.getDefaultChannel(n.id);
          null != e && (0, p.uL)(P.Z5c.CHANNEL(n.id, e.id))
        },
        fullWidth: true,
        text: w.intl.string(w.t["3iCBUn"])
      })
    })]
  }) : (0, l.jsxs)("div", {
    className: E.container,
    children: [(0, l.jsx)(c.Heading, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: w.intl.string(w.t.xwY4La)
    }), r.map(e => (0, l.jsx)(k, {
      resource: e
    }, e.channelId))]
  })
}